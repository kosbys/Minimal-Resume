import { inputProps } from "../../helpers/types";
import yearOptions from "../../helpers/yearOptions";

export default function FormInput({
  name,
  type,
  label,
  updateFunction,
  value,
}: inputProps) {
  if (type === "date") {
    const years = yearOptions();

    return (
      <div className="flex flex-col self-end" id={`${name}Wrap`}>
        <label htmlFor={name} className="text-sm text-primary-content">
          {label}
        </label>
        <select
          id={`${name}Input`}
          name={name}
          className="select select-primary text-base-content"
          defaultValue={value}>
          {years}
        </select>
      </div>
    );
  }
  return (
    <div className="flex flex-col self-start w-full" id={`${name}Wrap`}>
      <label htmlFor={name} className="text-sm text-primary-content">
        {label}
      </label>
      <input
        data-type={name}
        id={`${name}Input`}
        onChange={updateFunction}
        type={type}
        name={name}
        defaultValue={value}
        className="input input-bordered input-primary rounded-lg text-base-content"></input>
    </div>
  );
}
