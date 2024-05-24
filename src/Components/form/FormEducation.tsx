import FormInput from "./FormInput";
import { education } from "../../helpers/types";

export default function FormEducation({
  schoolName,
  degree,
  studyBegin,
  studyEnd,
  addEducation,
  change,
}: education) {
  return (
    <div className="flex flex-col basis-1 grow justify-center items-center ">
      <h2 className="text-left">Education</h2>
      <form
        onSubmit={addEducation}
        noValidate
        className="flex flex-col justify-center items-center gap-2">
        <FormInput
          updateFunction={change}
          name={"schoolName"}
          type={"text"}
          label={"School Name"}
          value={schoolName ?? ""}></FormInput>
        <FormInput
          updateFunction={change}
          name={"degree"}
          type={"text"}
          label={"Degree"}
          value={degree ?? ""}></FormInput>
        <FormInput
          updateFunction={change}
          name={"studyBegin"}
          type={"date"}
          label={"Start Date"}
          value={studyBegin ?? ""}></FormInput>
        <FormInput
          updateFunction={change}
          name={"studyEnd"}
          type={"date"}
          label={"End Date"}
          value={studyEnd ?? ""}></FormInput>
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
