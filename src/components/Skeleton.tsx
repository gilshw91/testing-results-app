import { memo } from "react";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = memo(function Skeleton({
  className = "",
}: SkeletonProps) {
  return <div className={`animate-pulse bg-black-200 rounded ${className}`} />;
});

export const SkeletonTechniqueRow = memo(function SkeletonTechniqueRow() {
  return (
    <div className="bg-black-100 rounded-lg border-l-4 border-l-black-200 overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-3.5 w-96" />
        </div>
        <Skeleton className="h-5 w-5 rounded" />
      </div>
    </div>
  );
});

export const SkeletonHeader = memo(function SkeletonHeader() {
  return (
    <div>
      <div className="flex gap-0">
        <Skeleton className="h-8.5 w-30 rounded-none" />
        <Skeleton className="h-8.5 w-20 rounded-none" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-3">
        <Skeleton className="h-3.5 w-30" />
        <Skeleton className="h-3.5 w-70" />
        <Skeleton className="h-3.5 w-40" />
      </div>
    </div>
  );
});

export const SkeletonFiltersBar = memo(function SkeletonFiltersBar() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 py-4 flex-wrap">
      <Skeleton className="h-8 min-w-30 rounded-md" />
      <Skeleton className="h-8 min-w-30 rounded-md" />
      <Skeleton className="h-8 w-25 rounded-md" />
    </div>
  );
});
