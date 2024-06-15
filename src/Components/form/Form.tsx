import { formProps } from "../../helpers/types";
import FormEducation from "./FormEducation";
import FormPersonal from "./FormPersonal";
import FormWork from "./FormWork";

export default function Form({ person, submit }: formProps) {
  return (
    <div className="flex flex-col ">
      <FormPersonal person={person}></FormPersonal>
      <FormWork submit={submit}></FormWork>
      <FormEducation submit={submit}></FormEducation>
    </div>
  );
}
