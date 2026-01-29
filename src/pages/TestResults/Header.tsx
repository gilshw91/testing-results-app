import { formatDate, formatSnakeCase } from "../../config/design";
import { useTestResultsStore } from "../../stores/useTestResultsStore";
import type { TestType } from "../../types";

const TABS: TestType[] = ["PROMPT_INJECTION", "JAILBREAK"];

export function Header() {
  const { data, activeTab, setActiveTab } = useTestResultsStore();

  if (!data) return null;

  const activeData =
    activeTab === "PROMPT_INJECTION"
      ? data.promptInjectionData
      : data.jailbreakData;

  return (
    <div>
      <div className="flex gap-0">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-heading px-2 sm:px-4 py-2 text-[14px] sm:text-[16px] font-medium transition-colors cursor-pointer focus:outline-none ${
              activeTab === tab
                ? "text-brand-active border-b-2 border-brand-active"
                : "text-black-500 hover:text-black-700"
            }`}
          >
            {formatSnakeCase(tab)}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-3 text-[13px] text-black-700">
        <div>
          <span className="font-extrabold text-black-700">Date: </span>
          {formatDate(activeData.createdAt)}
        </div>
        <div className="truncate">
          <span className="font-bold text-black-700">Test Result ID: </span>
          <span className="font-normal">{activeData.id}</span>
        </div>
        <div>
          <span className="font-bold text-black-700">Model Name: </span>
          {activeData.asset.name}
        </div>
      </div>
    </div>
  );
}
