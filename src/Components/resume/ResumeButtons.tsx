import { buttonProps } from "../../helpers/types";

export default function ResumeButtons({ type, id, edit, del }: buttonProps) {
  return (
    <div
      className="flex flex-row gap-4 justify-end invisible resume-buttons"
      data-id={id}
      data-type={type}>
      <button className="btn btn-sm btn-warning" onClick={edit}>
        EDIT
      </button>
      <button className="btn btn-sm btn-error" onClick={del}>
        DELETE
      </button>
    </div>
  );
}
