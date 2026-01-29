import { create } from 'zustand';
import type { Filters, Severity, Status, TestResultsData, TestType } from '../types';

interface TestResultsState {
  data: TestResultsData | null;
  isLoading: boolean;
  error: string | null;
  activeTab: TestType;
  filters: Filters;

  // Actions
  setData: (data: TestResultsData) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setActiveTab: (tab: TestType) => void;
  toggleThreadStatus: (
    testType: TestType,
    techniqueSubType: string,
    threadId: string
  ) => void;
  setSeverityFilter: (severity: Severity | null) => void;
  setResultFilter: (result: Status | null) => void;
  clearFilters: () => void;
  resetForLoading: () => void;
}

export const useTestResultsStore = create<TestResultsState>((set) => ({
  data: null,
  isLoading: true,
  error: null,
  activeTab: 'PROMPT_INJECTION',
  filters: {
    severity: null,
    result: null,
  },

  setData: (data) => set({ data, error: null }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error, isLoading: false }),

  setActiveTab: (tab) => set({ activeTab: tab }),

  toggleThreadStatus: (testType, techniqueSubType, threadId) =>
    set((state) => {
      if (!state.data) return state;

      const dataKey = testType === 'PROMPT_INJECTION' ? 'promptInjectionData' : 'jailbreakData';
      const runData = state.data[dataKey];

      const updatedResults = runData.results.map((testCase) => {
        if (testCase.techniqueSubType !== techniqueSubType) {
          return testCase;
        }

        const updatedThreads = testCase.threads.map((thread) => {
          if (thread.id !== threadId) {
            return thread;
          }
          return {
            ...thread,
            status: thread.status === 'PASSED' ? 'FAILED' : 'PASSED',
          };
        });

        return { ...testCase, threads: updatedThreads };
      });

      return {
        data: {
          ...state.data,
          [dataKey]: { ...runData, results: updatedResults },
        },
      };
    }),

  setSeverityFilter: (severity) =>
    set((state) => ({ filters: { ...state.filters, severity } })),

  setResultFilter: (result) =>
    set((state) => ({ filters: { ...state.filters, result } })),

  clearFilters: () => set({ filters: { severity: null, result: null } }),

  resetForLoading: () => set({ data: null, isLoading: true, error: null }),
}));
