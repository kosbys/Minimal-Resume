import { formSubmit } from "../../helpers/types";
import FormInput from "./FormInput";

export default function FormEducation({ submit }: formSubmit) {
  return (
    <div className="flex flex-col basis-1 grow justify-center items-center ">
      <h2 className="text-left">Education</h2>
      <form
        onSubmit={submit}
        noValidate
        className="flex flex-col justify-center items-center gap-2">
        <FormInput
          name={"schoolName"}
          type={"text"}
          label={"School Name"}></FormInput>
        <FormInput name={"degree"} type={"text"} label={"Degree"}></FormInput>
        <FormInput
          name={"studyBegin"}
          type={"date"}
          label={"Start Date"}></FormInput>
        <FormInput
          name={"studyEnd"}
          type={"date"}
          label={"End Date"}></FormInput>
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
