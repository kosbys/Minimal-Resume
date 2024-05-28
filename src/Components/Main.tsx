import { useState } from "react";
import FormEducation from "./form/FormEducation";
import FormPersonal from "./form/FormPersonal";
import FormWork from "./form/FormWork";
import EducationInfo from "./resume/EducationInfo";
import PersonalInfo from "./resume/PersonalInfo";
import WorkInfo from "./resume/WorkInfo";
import { person, education, work } from "../helpers/types";
import { validateForm } from "../helpers/helpers";
import Modal from "./Modal";
import ResumeButtons from "./resume/ResumeButtons";

// todo add edit and delete
export default function Main() {
  const [educationHistory, setEducationHistory] = useState({
    educationArray: [] as education[],
  });
  const [workHistory, setWorkHistory] = useState({
    workArray: [] as work[],
  });
  const [personData, setPersonData] = useState<person>({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "505-646-7077",
  });

  const formAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    {
      e.preventDefault();
      const form = e.target as HTMLFormElement;

      const inputs = form.children;
      const newEntry: Record<string, string> = {};

      [...inputs].forEach((element) => {
        if (element.id != "") {
          const entryField = element.id.replace("Wrap", "");
          const input: HTMLInputElement | null = document.querySelector(
            `#${element.id.replace("Wrap", "Input")}`
          );

          newEntry[entryField] = input?.value || "";
        }
      });

      if (validateForm(newEntry as work | education)) {
        if (form.id === "educationForm") {
          setEducationHistory({
            educationArray: [...educationHistory.educationArray, newEntry],
          });
        } else if (form.id === "workForm") {
          setWorkHistory({
            workArray: [...workHistory.workArray, newEntry],
          });
        }
        form.reset();
      } else {
        (document.querySelector("#modal") as HTMLDialogElement).showModal();
      }
    }
  };

  const changePerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setPersonData({ ...personData, [field]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col">
        <FormPersonal
          name={personData.name}
          email={personData.email}
          phone={personData.phone}
          change={changePerson}></FormPersonal>
        <FormEducation submit={formAddEvent}></FormEducation>
        <FormWork submit={formAddEvent}></FormWork>
      </div>
      <div className="flex flex-col">
        <PersonalInfo
          name={personData.name}
          email={personData.email}
          phone={personData.phone}></PersonalInfo>
        <EducationInfo
          list={educationHistory.educationArray?.map((edu, eduID) => {
            return (
              <div
                className="flex flex-col"
                id={`educationN${eduID}`}
                key={crypto.randomUUID()}>
                <h1 className="text-3xl">{edu.schoolName}</h1>
                <div className="flex justify-center gap-6">
                  <div className="text-xl">{edu.degree}</div>
                  <div className="text-xl">
                    {edu.studyBegin}-{edu.studyEnd}
                  </div>
                  <ResumeButtons id={String(eduID)}></ResumeButtons>
                </div>
              </div>
            );
          })}></EducationInfo>
        <WorkInfo
          list={workHistory.workArray?.map((work, workID) => {
            return (
              <div
                className="flex flex-col"
                id={`workN${workID}`}
                key={crypto.randomUUID()}>
                <div className="flex flex-col">
                  <h1 className="text-3xl">{work.role}</h1>
                  <div className="flex justify-center gap-6">
                    <div className="text-xl">{work.companyName}</div>
                    <div className="text-xl">{work.description}</div>
                    <div className="text-xl">
                      {work.workBegin}-{work.workEnd}
                    </div>
                    <ResumeButtons id={String(workID)}></ResumeButtons>
                  </div>
                </div>
              </div>
            );
          })}></WorkInfo>
        <Modal title={"Error"} body={"Don't leave any empty fields"}></Modal>
      </div>
    </>
  );
}
