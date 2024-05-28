import { buttonProps } from "../../helpers/types";

export default function ResumeButtons({ id }: buttonProps) {
  return (
    <div className="flex flex-row gap-4">
      <button className="btn btn-sm btn-warning ">EDIT {id}</button>
      <button className="btn btn-sm btn-error">DELETE</button>
    </div>
  );
}
