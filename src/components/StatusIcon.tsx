import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import type { Status } from "../types";

interface StatusIconProps {
  status: Status;
  className?: string;
}

export const StatusIcon = memo(function StatusIcon({
  status,
  className = "h-5 w-5",
}: StatusIconProps) {
  if (status === "PASSED") {
    return (
      <CheckCircleIcon
        className={`text-green-1000 ${className}`}
        strokeWidth={2}
      />
    );
  }
  return (
    <XCircleIcon className={`text-red-400 ${className}`} strokeWidth={2} />
  );
});
