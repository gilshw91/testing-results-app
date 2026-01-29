import type { Severity, Status } from "../types";

export const SEVERITY_DOT_COLORS: Record<Severity, string> = {
  CRITICAL: "bg-red-500",
  HIGH: "bg-red-400",
  MEDIUM: "bg-yellow-500",
  LOW: "bg-green-300",
};

export const SEVERITY_LABELS: Record<Severity, string> = {
  CRITICAL: "Critical",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

export const STATUS_LABELS: Record<Status, string> = {
  PASSED: "Passed",
  FAILED: "Failed",
};

export const ROW_STATUS_BORDER: Record<Status, string> = {
  PASSED: "border-l-green-1000",
  FAILED: "border-l-red-400",
};

export function formatSnakeCase(value: string): string {
  return value
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}
