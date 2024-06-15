import { education, modalProps, work } from "../helpers/types";
import FormInput from "./form/FormInput";

export default function Modal({ edit, title, body }: modalProps) {
  if (edit.editMode === true) {
    switch (edit.type) {
      case "education": {
        const edu = edit.item as education;
        return (
          <dialog id="modal" className="modal" itemID="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{title}</h3>
              <form
                data-id={edit.id}
                id={"editForm"}
                className={"education"}
                onSubmit={edit.saveFn?.submit}>
                <FormInput
                  name={"schoolName"}
                  type={"text"}
                  label={"School Name"}
                  value={edu.schoolName}></FormInput>
                <FormInput
                  name={"degree"}
                  type={"text"}
                  label={"Degree"}
                  value={edu.degree}></FormInput>
                <FormInput
                  name={"dateBegin"}
                  type={"date"}
                  label={"Start Date"}
                  value={edu.dateBegin}></FormInput>
                <FormInput
                  name={"dateEnd"}
                  type={"date"}
                  label={"End Date"}
                  value={edu.dateEnd}></FormInput>
                <div className="modal-action">
                  <button data-id={edit.id} className="btn btn-accent">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        );
      }
      case "work": {
        const work = edit.item as work;
        return (
          <dialog id="modal" className="modal" itemID="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{title}</h3>
              <form
                data-id={edit.id}
                id="editForm"
                className="work"
                onSubmit={edit.saveFn?.submit}>
                <FormInput
                  name={"companyName"}
                  type={"text"}
                  label={"Company Name"}
                  value={work.companyName}></FormInput>
                <FormInput
                  name={"role"}
                  type={"text"}
                  label={"Role"}
                  value={work.role}></FormInput>

                <FormInput
                  name={"description"}
                  type={"text"}
                  label={"Description"}
                  value={work.description}></FormInput>
                <FormInput
                  name={"dateBegin"}
                  type={"date"}
                  label={"Start Date"}
                  value={work.dateBegin}></FormInput>
                <FormInput
                  name={"dateEnd"}
                  type={"date"}
                  label={"End Date"}
                  value={work.dateEnd}></FormInput>
                <div className="modal-action">
                  <button className="btn btn-accent">Save</button>
                </div>
              </form>
            </div>
          </dialog>
        );
      }
    }
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
