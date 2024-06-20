import { person } from "../../helpers/types";
import FormInput from "./FormInput";

// STYLE
export default function FormPersonal({ person }: { person: person }) {
  return (
    <form
      noValidate
      className="flex justify-center items-center flex-col p-6 gap-2 bg-base-100 rounded-xl shadow-xl ">
      <div className="personal-info-title text-2xl text-secondary-content mb-1">
        Personal information
      </div>
      <FormInput
        updateFunction={person.change}
        name={"personName"}
        type={"text"}
        value={person.personName}
        label={"Name"}></FormInput>
      <FormInput
        updateFunction={person.change}
        name={"email"}
        type={"email"}
        value={person.email}
        label={"E-mail Address"}></FormInput>
      <FormInput
        updateFunction={person.change}
        name={"phone"}
        type={"text"}
        value={person.phone}
        label={"Phone Number"}></FormInput>
    </form>
  );
}
