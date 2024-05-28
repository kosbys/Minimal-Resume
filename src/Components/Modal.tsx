import { modalProps } from "../helpers/types";
import FormInput from "./form/FormInput";

export default function Modal({
  title,
  body,
  editEducation,
  editWork,
}: modalProps) {
  if (editEducation) {
    return (
      <dialog id="modal" className="modal" itemID="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <form>
            <FormInput
              name={"schoolName"}
              type={"text"}
              label={"School Name"}
              value={editEducation.schoolName}></FormInput>
            <FormInput
              name={"degree"}
              type={"text"}
              label={"Degree"}
              value={editEducation.degree}></FormInput>
            <FormInput
              name={"studyBegin"}
              type={"date"}
              label={"Start Date"}
              value={editEducation.studyBegin}></FormInput>
            <FormInput
              name={"studyEnd"}
              type={"date"}
              label={"End Date"}
              value={editEducation.studyEnd}></FormInput>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-accent">Save</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  } else if (editWork) {
    return (
      <dialog id="modal" className="modal" itemID="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <form>
            <FormInput
              name={"companyName"}
              type={"text"}
              label={"Company Name"}
              value={editWork?.companyName}></FormInput>
            <FormInput name={"role"} type={"text"} label={"Role"}></FormInput>
            <FormInput
              name={"description"}
              type={"text"}
              label={"Description"}></FormInput>
            <FormInput
              name={"workBegin"}
              type={"date"}
              label={"Start Date"}></FormInput>
            <FormInput
              name={"workEnd"}
              type={"date"}
              label={"End Date"}></FormInput>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-secondary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  } else {
    return (
      <dialog id="modal" className="modal" itemID="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{body}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-secondary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }
}
