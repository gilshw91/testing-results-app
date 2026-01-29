import { memo, useCallback } from "react";
import { StatusToggle } from "../../components/StatusToggle";
import { useTestResultsStore } from "../../stores/useTestResultsStore";
import type { TestType, Thread } from "../../types";

interface ThreadListProps {
  threads: Thread[];
  testType: TestType;
  techniqueSubType: string;
}

export const ThreadList = memo(function ThreadList({
  threads,
  testType,
  techniqueSubType,
}: ThreadListProps) {
  const toggleThreadStatus = useTestResultsStore(
    (state) => state.toggleThreadStatus,
  );

  const handleToggle = useCallback(
    (threadId: string) => {
      toggleThreadStatus(testType, techniqueSubType, threadId);
    },
    [toggleThreadStatus, testType, techniqueSubType],
  );

  return (
    <div className="mt-6 border-t border-black-200 divide-y divide-black-200">
      {threads.map((thread) => (
        <div key={thread.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 sm:py-6">
          <span className="text-[13px] sm:text-[15px] font-normal text-black-700 break-all sm:break-normal">
            Thread ID: {thread.id}
          </span>
          <StatusToggle
            status={thread.status}
            onToggle={() => handleToggle(thread.id)}
          />
        </div>
      ))}
    </div>
  );
});
