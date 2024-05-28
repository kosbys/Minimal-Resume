import { elements } from "../../helpers/types";

export default function EducationInfo({ list }: elements) {
  return (
    <div className="flex flex-col">
      <h2>EDUCATION</h2>
      {list}
    </div>
  );
}
