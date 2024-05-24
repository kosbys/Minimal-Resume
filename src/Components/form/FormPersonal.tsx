import { person } from "../../helpers/types";
import FormInput from "./FormInput";

export default function FormPersonal({ name, email, phone, change }: person) {
  return (
    <div className="flex flex-col basis-1 grow justify-center items-center ">
      <h2 className="text-left">Personal Details</h2>
      <form
        noValidate
        className="flex flex-col justify-center items-center gap-2">
        <FormInput
          updateFunction={change}
          name={"name"}
          type={"text"}
          value={name}
          label={"Name"}></FormInput>
        <FormInput
          updateFunction={change}
          name={"email"}
          type={"email"}
          value={email}
          label={"E-mail Address"}></FormInput>
        <FormInput
          updateFunction={change}
          name={"phone"}
          type={"text"}
          value={phone}
          label={"Phone Number"}></FormInput>
      </form>
    </div>
  );
}
