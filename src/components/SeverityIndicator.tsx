import { memo } from "react";
import { SEVERITY_LABELS } from "../config/design";
import type { Severity } from "../types";

interface SeverityIndicatorProps {
  severity: Severity;
}

const SEVERITY_TAG_STYLES: Record<Severity, string> = {
  CRITICAL: "bg-red-100",
  HIGH: "bg-red-300",
  MEDIUM: "bg-orange-100",
  LOW: "bg-yellow-100",
};

const SEVERITY_DOT_COLORS: Record<Severity, string> = {
  CRITICAL: "bg-red-500",
  HIGH: "bg-red-400",
  MEDIUM: "bg-orange-500",
  LOW: "bg-yellow-500",
};

export const SeverityIndicator = memo(function SeverityIndicator({
  severity,
}: SeverityIndicatorProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.25 rounded-2xl text-[13px] font-normal text-black-1000 ${SEVERITY_TAG_STYLES[severity]}`}
    >
      <span
        className={`w-1.75 h-1.75 rounded-full ${SEVERITY_DOT_COLORS[severity]}`}
      />
      {SEVERITY_LABELS[severity]}
    </span>
  );
});
