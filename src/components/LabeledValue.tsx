import { memo } from "react";
import { formatSnakeCase } from "../config/design";

interface LabeledValueProps {
  label: string;
  value: string;
  subValue?: string;
}

export const LabeledValue = memo(function LabeledValue({
  label,
  value,
  subValue,
}: LabeledValueProps) {
  return (
    <div className="flex gap-1">
      <span className="text-black-700 text-[13px] sm:text-[15px] font-normal">
        {label}:
      </span>
      <span className="font-bold text-black-700 text-[13px] sm:text-[15px]">
        {formatSnakeCase(value)}
        {subValue && ` - ${formatSnakeCase(subValue)}`}
      </span>
    </div>
  );
});
