import { formSubmit } from "../../helpers/types";
import FormInput from "./FormInput";

export default function FormWork({ submit }: formSubmit) {
  return (
    <div className="flex flex-col basis-1 ">
      <h2 className="text-left">Work Experience</h2>
      <form
        id="workForm"
        onSubmit={submit}
        noValidate
        className="flex flex-col justify-center items-center gap-2">
        <FormInput
          name={"companyName"}
          type={"text"}
          label={"Company Name"}></FormInput>
        <FormInput name={"role"} type={"text"} label={"Role"}></FormInput>
        <FormInput
          name={"description"}
          type={"text"}
          label={"Description"}></FormInput>
        <FormInput
          name={"dateBegin"}
          type={"date"}
          label={"Start Date"}></FormInput>
        <FormInput
          name={"dateEnd"}
          type={"date"}
          label={"End Date"}></FormInput>
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
