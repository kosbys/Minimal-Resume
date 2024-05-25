import { InputProps } from "../../helpers/types";

export default function FormInput({
  name,
  type,
  label,
  updateFunction,
}: InputProps) {
  return (
    <>
      <div className="flex flex-col" id={`${name}Wrap`}>
        <label htmlFor={name}>{label}</label>
        <input
          id={`${name}Input`}
          onChange={updateFunction}
          type={type}
          name={name}
          className="input input-bordered input-primary rounded-lg"></input>
      </div>
    </>
  );
}
