import { elements } from "../../helpers/types";

export default function WorkInfo({ list }: elements) {
  return (
    <div className="flex flex-col mt-8">
      <h2 className="text-xl">WORK EXPERIENCE</h2>
      <div className="divider m-0 h-1 rounded-lg bg-neutral"></div>
      {list}
    </div>
  );
}
