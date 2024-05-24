import { InputProps } from "../../types";

export default function FormInput({
  name,
  type,
  label,
  value,
  updateFunction,
}: InputProps) {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name}>{label}</label>
        <input
          id={`${name}_input`}
          onChange={updateFunction}
          type={type}
          name={name}
          value={value}
          className="input input-bordered input-primary rounded-lg"></input>
      </div>
    </>
  );
}
