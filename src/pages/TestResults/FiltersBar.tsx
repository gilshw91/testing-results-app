import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { SEVERITY_LABELS, STATUS_LABELS } from "../../config/design";
import { useTestResultsStore } from "../../stores/useTestResultsStore";
import type { DropdownOption, Severity, Status } from "../../types";

const SEVERITY_OPTIONS: DropdownOption<Severity>[] = [
  { value: "CRITICAL", label: SEVERITY_LABELS.CRITICAL },
  { value: "HIGH", label: SEVERITY_LABELS.HIGH },
  { value: "MEDIUM", label: SEVERITY_LABELS.MEDIUM },
  { value: "LOW", label: SEVERITY_LABELS.LOW },
];

const RESULT_OPTIONS: DropdownOption<Status>[] = [
  { value: "PASSED", label: STATUS_LABELS.PASSED },
  { value: "FAILED", label: STATUS_LABELS.FAILED },
];

export function FiltersBar() {
  const { filters, setSeverityFilter, setResultFilter, clearFilters } =
    useTestResultsStore();

  const hasActiveFilters = filters.severity !== null || filters.result !== null;

  return (
    <div className="flex items-center gap-2 sm:gap-3 py-4 flex-wrap">
      <Dropdown
        label="Severity"
        value={filters.severity}
        options={SEVERITY_OPTIONS}
        onChange={setSeverityFilter}
      />

      <Dropdown
        label="Result"
        value={filters.result}
        options={RESULT_OPTIONS}
        onChange={setResultFilter}
      />

      <Button
        variant="filled"
        onClick={clearFilters}
        disabled={!hasActiveFilters}
        className="shrink-0 whitespace-nowrap font-normal text-[15px] h-10"
      >
        Clear Filters
      </Button>
    </div>
  );
}
