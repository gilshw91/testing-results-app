import { useMemo, useState } from "react";
import { useTestResultsStore } from "../../stores/useTestResultsStore";
import { computeTestStatus } from "../../utils/statusHelpers";
import { TechniqueRow } from "./TechniqueRow";

export function TechniqueList() {
  const { data, activeTab, filters } = useTestResultsStore();
  const [expandAll, setExpandAll] = useState(false);

  const filteredResults = useMemo(() => {
    if (!data) return [];

    const activeData =
      activeTab === "PROMPT_INJECTION"
        ? data.promptInjectionData
        : data.jailbreakData;

    let results = activeData.results;

    if (filters.severity) {
      results = results.filter((r) => r.severity === filters.severity);
    }

    if (filters.result) {
      results = results.filter(
        (r) => computeTestStatus(r.threads) === filters.result,
      );
    }

    return results;
  }, [data, activeTab, filters.severity, filters.result]);

  if (!data) return null;

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <h2 className="text-[15px] font-normal text-black">Results</h2>
        <button
          onClick={() => setExpandAll(!expandAll)}
          disabled={filteredResults.length === 0}
          className="text-[15px] text-normal text-primary hover:underline transition-colors cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline"
        >
          {expandAll ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {filteredResults.length === 0 ? (
        <div className="text-center py-8 text-black-500 text-[14px]">
          No techniques match the current filters.
        </div>
      ) : (
        <div className="space-y-2" key={expandAll ? "expanded" : "collapsed"}>
          {filteredResults.map((technique) => (
            <TechniqueRow
              key={`${technique.techniqueType}-${technique.techniqueSubType}`}
              technique={technique}
              testType={activeTab}
              defaultOpen={expandAll}
            />
          ))}
        </div>
      )}
    </div>
  );
}
