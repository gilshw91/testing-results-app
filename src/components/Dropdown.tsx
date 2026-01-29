import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { DropdownOption } from "../types";

interface DropdownProps<T> {
  label: string;
  value: T | null;
  options: DropdownOption<T>[];
  onChange: (value: T | null) => void;
}

export function Dropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: DropdownProps<T>) {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <ListboxButton className="inline-flex items-center justify-between gap-1 min-w-24 sm:min-w-30 px-2 sm:px-3 py-1.5 text-sm font-normal text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none h-10">
          {selectedOption?.label || label}
          <ChevronDownIcon
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
          />
        </ListboxButton>

        <ListboxOptions
          anchor={{ to: "bottom start", gap: 4 }}
          className="z-50 min-w-(--button-width) overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <ListboxOption
            value={null}
            className="relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900 data-focus:bg-black-100 data-focus:text-black-1000"
          >
            {({ selected }) => (
              <>
                <span
                  className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                >
                  All
                </span>
                {selected && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black-700">
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </>
            )}
          </ListboxOption>
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option.value}
              className="relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900 data-focus:bg-black-100 data-focus:text-black-1000"
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                  >
                    {option.label}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black-700">
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
