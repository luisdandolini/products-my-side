import { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  item: string;
  options: SelectOption[] | string[];
}

export default function Select({
  label,
  item,
  className,
  options,
  ...props
}: SelectProps) {
  return (
    <>
      <label htmlFor={props.id} className="sr-only">
        {label}
      </label>
      <select id={props.id} {...props} className={className}>
        <option value="">{item}</option>

        {options.map((option) => {
          const value = typeof option === "object" ? option.value : option;
          const label = typeof option === "object" ? option.label : option;

          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
}
