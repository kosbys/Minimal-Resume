import { formSubmit } from "../../helpers/types";
import FormInput from "./FormInput";

export default function FormEducation({ submit }: formSubmit) {
  return (
    <form
      id="educationForm"
      onSubmit={submit}
      noValidate
      className="flex justify-center items-center flex-col p-6 gap-2 bg-base-200">
      <FormInput
        name={"schoolName"}
        type={"text"}
        label={"School Name"}></FormInput>
      <FormInput name={"degree"} type={"text"} label={"Degree"}></FormInput>
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
