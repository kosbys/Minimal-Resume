import { formSubmit } from "../../helpers/types";
import FormInput from "./FormInput";

export default function FormWork({ submit }: formSubmit) {
  return (
    <form
      id="workForm"
      onSubmit={submit}
      noValidate
      className="flex justify-center items-center flex-col p-6 gap-2 bg-base-200">
      <FormInput
        name={"companyName"}
        type={"text"}
        label={"Company Name"}></FormInput>
      <FormInput name={"role"} type={"text"} label={"Role"}></FormInput>
      <FormInput
        name={"description"}
        type={"text"}
        label={"Description"}></FormInput>
      <div className="dates flex flex-row self-end gap-4 pt-2 date-wrap">
        <FormInput
          name={"dateBegin"}
          type={"date"}
          label={"Start Date"}></FormInput>
        <FormInput
          name={"dateEnd"}
          type={"date"}
          label={"End Date"}></FormInput>
      </div>
      <button className="btn btn-success self-end mt-2" type="submit">
        Add
      </button>
    </form>
  );
}
