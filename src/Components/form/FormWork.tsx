import FormInput from "./FormInput";

export default function FormWork() {
  return (
    <div className="flex flex-col basis-1 grow justify-center items-center ">
      <h2 className="text-left">Work Experience</h2>
      <form
        noValidate
        className="flex flex-col justify-center items-center gap-2">
        <FormInput
          name={"company_name"}
          type={"text"}
          label={"Company Name"}
          value={""}
          updateFunction={() => {}}></FormInput>
        <FormInput name={"role"} type={"text"} label={"Role"}></FormInput>
        <FormInput
          name={"work_description"}
          type={"text"}
          label={"Description"}></FormInput>
        <FormInput
          name={"work_date_begin"}
          type={"date"}
          label={"Start Date"}></FormInput>
        <FormInput
          name={"work_date_end"}
          type={"date"}
          label={"End Date"}></FormInput>
        <button className="btn btn-success" type="button">
          Add
        </button>
      </form>
    </div>
  );
}
