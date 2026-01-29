import { memo, type ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  titleClassName?: string;
  valueClassName?: string;
}

export const Section = memo(function Section({
  title,
  children,
  titleClassName = "text-black-1000",
  valueClassName = "text-black-1000",
}: SectionProps) {
  return (
    <div>
      <h4 className={`text-[13px] font-bold mb-1 ${titleClassName}`}>
        {title}
      </h4>
      <p className={`text-[13px] leading-relaxed ${valueClassName}`}>
        {children}
      </p>
    </div>
  );
});
