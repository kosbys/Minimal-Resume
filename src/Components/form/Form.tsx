import FormEducation from "./FormEducation";
import FormPersonal from "./FormPersonal";
import FormWork from "./FormWork";
import { person } from "../../types";

export default function Form(person: person) {
  return (
    <>
      <FormPersonal
        name={person.name}
        email={person.email}
        phone={person.phone}
        change={person.change}></FormPersonal>
      <FormEducation></FormEducation>
      <FormWork></FormWork>
    </>
  );
}
