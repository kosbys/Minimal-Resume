import { elements } from "../../helpers/types";

export default function WorkInfo({ list }: elements) {
  return (
    <div className="flex flex-col">
      <h2>WORK EXPERIENCE</h2>
      {list}
    </div>
  );
}
