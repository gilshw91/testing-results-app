import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { memo } from "react";
import { LabeledValue } from "../../components/LabeledValue";
import { Section } from "../../components/Section";
import { SeverityIndicator } from "../../components/SeverityIndicator";
import { StatusIcon } from "../../components/StatusIcon";
import { ROW_STATUS_BORDER } from "../../config/design";
import type { TestCaseRun, TestType } from "../../types";
import { computeTestStatus } from "../../utils/statusHelpers";
import { ThreadList } from "./ThreadList";

interface TechniqueRowProps {
  technique: TestCaseRun;
  testType: TestType;
  defaultOpen?: boolean;
}

export const TechniqueRow = memo(function TechniqueRow({
  technique,
  testType,
  defaultOpen = false,
}: TechniqueRowProps) {
  const computedStatus = computeTestStatus(technique.threads);
  const borderColor = ROW_STATUS_BORDER[computedStatus];

  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div>
          <DisclosureButton
            className={`bg-black-100 rounded-lg border-l-4 ${borderColor} min-h-13.5 w-full px-3 sm:px-4 py-3 flex items-center justify-between cursor-pointer transition-colors focus:outline-none ${open ? "" : "hover:bg-gray-100"}`}
          >
            <div className="flex items-center gap-3 text-left min-w-0">
              <StatusIcon
                status={computedStatus}
                className="h-5 w-5 shrink-0"
              />
              <div className="text-[14px] flex flex-col sm:flex-row sm:items-center min-w-0">
                <LabeledValue
                  label="Technique"
                  value={technique.techniqueType}
                  subValue={technique.techniqueSubType}
                />
                <span className="hidden sm:inline mx-3 text-black-500 text-normal">|</span>
                <LabeledValue
                  label="Impact"
                  value={technique.impact.type}
                  subValue={technique.impact.subType}
                />
              </div>
            </div>
            <ChevronDownIcon
              className={`h-5 w-5 text-black-500 transition-transform duration-200 shrink-0 ${
                open ? "rotate-180" : ""
              }`}
            />
          </DisclosureButton>

          <DisclosurePanel className="bg-white px-2 sm:px-4 pb-4 pt-4">
            <div className="pl-2 sm:pl-8 space-y-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2.75">
                  <span className="text-[15px] text-black-700 font-bold">
                    Severity:
                  </span>
                  <SeverityIndicator severity={technique.severity} />
                </div>

                <Section
                  title="Description"
                  titleClassName="text-black-700 text-[15px]"
                  valueClassName="text-black-700"
                >
                  {technique.description}
                </Section>
              </div>
              <Section title="What is the risk?">
                {technique.impact.description}
              </Section>
              <Section title="Mitigation">{technique.mitigation}</Section>

              <ThreadList
                threads={technique.threads}
                testType={testType}
                techniqueSubType={technique.techniqueSubType}
              />
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
});
