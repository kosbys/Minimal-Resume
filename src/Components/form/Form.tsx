import { formProps } from "../../helpers/types";
import FormEducation from "./FormEducation";
import FormPersonal from "./FormPersonal";
import FormWork from "./FormWork";

export default function Form({ person, submit }: formProps) {
  // style
  return (
    <div className="flex flex-col gap-1 font-comfortaa" id="form-container">
      <FormPersonal person={person}></FormPersonal>
      <div className="divider m-1"></div>
      <FormEducation submit={submit}></FormEducation>
      <div className="divider m-1"></div>
      <FormWork submit={submit}></FormWork>
    </div>
  );
}
