import { elements } from "../../helpers/types";

export default function EducationInfo({ list }: elements) {
  return (
    <div className="flex flex-col">
      <div className="text-xl">EDUCATION</div>
      <div className="divider m-0 h-1 rounded-lg bg-neutral"></div>
      {list}
    </div>
  );
}
