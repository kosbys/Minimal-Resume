import FormInput from "./FormInput";

export default function FormEducation() {
  return (
    <div className="flex flex-col basis-1 grow justify-center items-center ">
      <h2 className="text-left">Education</h2>
      <form
        noValidate
        className="flex flex-col justify-center items-center gap-2">
        <FormInput
          name={"school_name"}
          type={"text"}
          label={"School Name"}></FormInput>
        <FormInput name={"degree"} type={"text"} label={"Degree"}></FormInput>
        <FormInput
          name={"study_date_begin"}
          type={"text"}
          label={"Start Date"}></FormInput>
        <FormInput
          name={"study_date_end"}
          type={"text"}
          label={"End Date"}></FormInput>
        <button className="btn btn-success" type="button">
          Add
        </button>
      </form>
    </div>
  );
}
