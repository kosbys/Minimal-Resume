import { person } from "../../types";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import WorkInfo from "./WorkInfo";

export default function Resume(person: person) {
  return (
    <>
      <PersonalInfo
        name={person.name}
        email={person.email}
        phone={person.phone}></PersonalInfo>
      <EducationInfo></EducationInfo>
      <WorkInfo></WorkInfo>
    </>
  );
}
