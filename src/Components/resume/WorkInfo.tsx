import { resumeProps } from "../../helpers/types";

export default function WorkInfo({ workArray }: resumeProps) {
  const workList = workArray?.map((work) => {
    return (
      <div className="flex flex-col" key={crypto.randomUUID()}>
        <div className="flex flex-col">
          <h1 className="text-3xl">{work.role}</h1>
          <div className="flex justify-center gap-6">
            <div className="text-xl">{work.companyName}</div>
            <div className="text-xl">{work.description}</div>
            <div className="text-xl">
              {work.workBegin}-{work.workEnd}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col">
      <h2>WORK EXPERIENCE</h2>
      {workList}
    </div>
  );
}
