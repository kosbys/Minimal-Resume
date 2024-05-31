import { InputProps } from "../../helpers/types";
import yearOptions from "../../helpers/yearOptions";

export default function FormInput({
  name,
  type,
  label,
  updateFunction,
  value,
}: InputProps) {
  if (type === "date") {
    const years = yearOptions();

    return (
      <div className="flex flex-col" id={`${name}Wrap`}>
        <label htmlFor={name}>{label}</label>
        <select
          id={`${name}Input`}
          name={name}
          className="select select-primary"
          defaultValue={value}>
          {years}
        </select>
      </div>
    );
  }
  return (
    <div className="flex flex-col" id={`${name}Wrap`}>
      <label htmlFor={name}>{label}</label>
      <input
        data-type={name}
        id={`${name}Input`}
        onChange={updateFunction}
        type={type}
        name={name}
        defaultValue={value}
        className="input input-bordered input-primary rounded-lg"></input>
    </div>
  );
}
