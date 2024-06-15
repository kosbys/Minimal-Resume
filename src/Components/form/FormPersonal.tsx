import { person } from "../../helpers/types";
import FormInput from "./FormInput";

export default function FormPersonal({ person }: { person: person }) {
  return (
    <div className="flex flex-col basis-1 ">
      <h2 className="text-left">Personal Details</h2>
      <form
        noValidate
        className="flex flex-col justify-center items-center gap-2">
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
    </div>
  );
}
