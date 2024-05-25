import { useState } from "react";
import FormEducation from "./form/FormEducation";
import FormPersonal from "./form/FormPersonal";
import FormWork from "./form/FormWork";
import EducationInfo from "./resume/EducationInfo";
import PersonalInfo from "./resume/PersonalInfo";
import WorkInfo from "./resume/WorkInfo";
import { person, education } from "../helpers/types";

export default function Main() {
  const addEducation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputs = (e.target as Element).children;
    const edu: Record<string, string> = {};

    // Validate every input
    [...inputs].forEach((element) => {
      if (element.id != "") {
        const eduField = element.id.replace("Wrap", "");
        const input: HTMLInputElement | null = document.querySelector(
          `#${element.id.replace("Wrap", "Input")}`
        );

        if (input?.value) {
          edu[eduField] = input.value;
        }
      }
    });
    setEducation({
      educationArray: [...educations.educationArray, edu],
    });
  };

  const changePerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setPersonData({ ...personData, [field]: e.target.value });
  };

  const [personData, setPersonData] = useState<person>({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "505-646-7077",
  });
  const [educations, setEducation] = useState({
    educationArray: [] as education[],
  });

  return (
    <>
      <div className="flex flex-col">
        <FormPersonal
          name={personData.name}
          email={personData.email}
          phone={personData.phone}
          change={changePerson}></FormPersonal>
        <FormEducation submit={addEducation}></FormEducation>
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
