import { elements } from "../../helpers/types";

export default function EducationInfo({ list }: elements) {
  return (
    <div className="flex flex-col">
      <div className="text-xl">EDUCATION</div>
      {list}
    </div>
  );
}
