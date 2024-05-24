import { useState } from "react";
import FormEducation from "./form/FormEducation";
import FormPersonal from "./form/FormPersonal";
import FormWork from "./form/FormWork";
import EducationInfo from "./resume/EducationInfo";
import PersonalInfo from "./resume/PersonalInfo";
import WorkInfo from "./resume/WorkInfo";
import { person, education, educations } from "../helpers/types";

export default function Main() {
  const addEducation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    // setEducation((previousEducations) => [
    //   ...previousEducations,
    //   {
    //     schoolName: "A",
    //     degree: "a",
    //     studyBegin: "a",
    //     studyEnd: "a",
    //   },
    // ])
  };

  const changePerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setPersonData({ ...personData, [field]: e.target.value });
  };

  const changeEducation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setEducation({
      educationArray: educations.educationArray,
      currentEducation: {
        ...educations.currentEducation,
        [field]: e.target.value,
      },
    });
  };

  const [personData, setPersonData] = useState<person>({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "505-646-7077",
  });
  const [educations, setEducation] = useState<educations>({
    educationArray: [] as education[],
    currentEducation: {
      schoolName: "",
      degree: "",
      studyBegin: "",
      studyEnd: "",
      change: changeEducation,
    },
  });

  return (
    <>
      <div className="flex flex-col">
        <FormPersonal
          name={personData.name}
          email={personData.email}
          phone={personData.phone}
          change={changePerson}></FormPersonal>
        <FormEducation
          schoolName={educations.currentEducation.schoolName}
          degree={educations.currentEducation.degree}
          studyBegin={educations.currentEducation.studyBegin}
          studyEnd={educations.currentEducation.studyEnd}
          change={changeEducation}
          addEducation={addEducation}></FormEducation>
        <FormWork></FormWork>
      </div>
      <div className="flex flex-col">
        <PersonalInfo
          name={personData.name}
          email={personData.email}
          phone={personData.phone}></PersonalInfo>
        <EducationInfo></EducationInfo>
        <WorkInfo></WorkInfo>
      </div>
    </>
  );
}
