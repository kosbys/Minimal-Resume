import { resumeProps } from "../../helpers/types";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import WorkInfo from "./WorkInfo";

export default function Resume({
  person,
  educationElements,
  workElements,
}: resumeProps) {
  return (
    <div className="flex flex-col ">
      <PersonalInfo
        personName={person.personName}
        email={person.email}
        phone={person.phone}></PersonalInfo>
      <EducationInfo list={educationElements}></EducationInfo>
      <WorkInfo list={workElements}></WorkInfo>
    </div>
  );
}
