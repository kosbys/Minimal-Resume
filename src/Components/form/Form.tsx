import { formProps } from "../../helpers/types";
import FormEducation from "./FormEducation";
import FormPersonal from "./FormPersonal";
import FormWork from "./FormWork";

export default function Form({ person, submit }: formProps) {
  // style
  return (
    <div className="flex flex-col gap-1 font-comfortaa" id="form-container">
      <div className="collapse bg-base-200">
        <input type="radio" name="form-accordion" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Personal Information
        </div>
        <div className="collapse-content">
          <FormPersonal person={person}></FormPersonal>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="form-accordion" />
        <div className="collapse-title text-xl font-medium">Education</div>
        <div className="collapse-content">
          <FormEducation submit={submit}></FormEducation>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="form-accordion" />
        <div className="collapse-title text-xl font-medium">Work</div>
        <div className="collapse-content">
          <FormWork submit={submit}></FormWork>
        </div>
      </div>
    </div>
  );
}
