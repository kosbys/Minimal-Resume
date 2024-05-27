import { resumeProps } from "../../helpers/types";

export default function EducationInfo({ educationArray }: resumeProps) {
  const educationList = educationArray?.map((edu) => {
    return (
      <div className="flex flex-col" key={crypto.randomUUID()}>
        <h1 className="text-3xl">{edu.schoolName}</h1>
        <div className="flex justify-center gap-6">
          <div className="text-xl">{edu.degree}</div>
          <div className="text-xl">
            {edu.studyBegin}-{edu.studyEnd}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col">
      <h2>EDUCATION</h2>
      {educationList}
    </div>
  );
}
