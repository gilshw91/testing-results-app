import { memo } from "react";
import type { Status } from "../types";

interface StatusToggleProps {
  status: Status;
  onToggle: () => void;
}

export const StatusToggle = memo(function StatusToggle({
  status,
  onToggle,
}: StatusToggleProps) {
  return (
    <div
      className="inline-flex rounded-lg border border-gray-300 overflow-hidden shrink-0 w-fit"
      role="group"
    >
      <button
        type="button"
        onClick={status === "PASSED" ? onToggle : undefined}
        className={`px-3 py-2 text-xs font-medium transition-colors cursor-pointer focus:outline-none ${
          status === "FAILED"
            ? "bg-red-50 text-red-600 border-r border-gray-300 hover:bg-red-100"
            : "bg-white text-gray-500 border-r border-gray-300 hover:bg-gray-50"
        }`}
      >
        Failed
      </button>
      <button
        type="button"
        onClick={status === "FAILED" ? onToggle : undefined}
        className={`px-3 py-2 text-xs font-medium transition-colors cursor-pointer focus:outline-none ${
          status === "PASSED"
            ? "bg-green-100 text-green-500 hover:bg-green-50"
            : "bg-white text-gray-500 hover:bg-gray-50"
        }`}
      >
        Passed
      </button>
    </div>
  );
});
