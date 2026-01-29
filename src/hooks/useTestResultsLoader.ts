import { useCallback, useEffect } from 'react';
import { fetchTestResults } from '../services/api';
import { useTestResultsStore } from '../stores/useTestResultsStore';

export function useTestResultsLoader() {
  const { isLoading, error, setData, setLoading, setError, resetForLoading } = useTestResultsStore();

  const loadData = useCallback(async () => {
    resetForLoading();

    try {
      const results = await fetchTestResults();
      setData(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load test results');
    } finally {
      setLoading(false);
    }
  }, [resetForLoading, setData, setLoading, setError]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    isLoading,
    error,
    retry: loadData,
  };
}
