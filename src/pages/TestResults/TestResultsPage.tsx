import { Button } from "../../components/Button";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import {
  SkeletonFiltersBar,
  SkeletonHeader,
  SkeletonTechniqueRow,
} from "../../components/Skeleton";
import { useTestResultsLoader } from "../../hooks/useTestResultsLoader";
import { useTestResultsStore } from "../../stores/useTestResultsStore";
import { FiltersBar } from "./FiltersBar";
import { Header } from "./Header";
import { TechniqueList } from "./TechniqueList";

function LoadingSkeleton() {
  return (
    <>
      <SkeletonHeader />
      <SkeletonFiltersBar />
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="animate-pulse bg-black-200 rounded h-4 w-16" />
          <div className="animate-pulse bg-black-200 rounded h-3.5 w-20" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonTechniqueRow key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function ErrorState({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-red-400 text-[48px] mb-4">!</div>
      <h2 className="text-[16px] font-medium text-black-1000 mb-2">
        Failed to load test results
      </h2>
      <p className="text-[14px] text-black-700 mb-4">{error}</p>
      <Button variant="primary" onClick={onRetry}>
        Try Again
      </Button>
    </div>
  );
}

export function TestResultsPage() {
  const { isLoading, error, retry } = useTestResultsLoader();
  const data = useTestResultsStore((state) => state.data);

  // Show skeleton when loading OR when data is null (during fetch reset)
  const showSkeleton = (isLoading || !data) && !error;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {showSkeleton && <LoadingSkeleton />}
          {error && <ErrorState error={error} onRetry={retry} />}
          {data && !isLoading && !error && (
            <>
              <Header />
              <FiltersBar />
              <TechniqueList />
            </>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
