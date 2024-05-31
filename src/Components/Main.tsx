import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormEducation from "./form/FormEducation";
import FormPersonal from "./form/FormPersonal";
import FormWork from "./form/FormWork";
import EducationInfo from "./resume/EducationInfo";
import PersonalInfo from "./resume/PersonalInfo";
import WorkInfo from "./resume/WorkInfo";
import {
  person,
  education,
  work,
  modalProps,
  resumeSection,
} from "../helpers/types";
import { validateForm } from "../helpers/helpers";
import Modal from "./Modal";
import ResumeButtons from "./resume/ResumeButtons";

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
  const [modalData, setModalData] = useState<modalProps>({
    edit: { editMode: false, type: "", id: "", item: {} },
    title: "ERROR",
    body: "Remember to fill all fields",
  } as modalProps);

  // IMPLEMENT
  const deleteEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLButtonElement).parentElement?.dataset.id;
    switch ((e.target as HTMLButtonElement).parentElement?.dataset.type) {
      case "education": {
        const newEducations = educationHistory.educationArray.filter(
          (_, i) => i != Number(id)
        );
        console.log(newEducations);
        break;
      }

      case "work": {
        const newWorks = workHistory.workArray.filter(
          (_, i) => i != Number(id)
        );
        console.log(newWorks);
        break;
      }
    }
  };

  const editEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const saveEvent = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const inputs = form.children;
      const editedForm: Record<string, string> = {};

      [...inputs].forEach((el: Element) => {
        if (el.children[1] as HTMLInputElement) {
          const input = el.children[1] as HTMLInputElement;
          editedForm[input.name] = input.value;
        }
      });

      switch (form.className) {
        case "education": {
          const newEducations = educationHistory.educationArray.map(
            (edu, i) => {
              if (i === Number(form.dataset.id)) {
                return editedForm as education;
              } else {
                return edu;
              }
            }
          );
          setEducationHistory({ educationArray: newEducations });
          break;
        }
        case "work": {
          const newWorks = workHistory.workArray.map((work, i) => {
            if (i === Number(form.dataset.id)) {
              return editedForm as work;
            } else {
              return work;
            }
          });
          setWorkHistory({ workArray: newWorks });
          break;
        }
      }

      setModalData({
        edit: { editMode: false, type: "", id: "", item: {} },
        title: "ERROR",
        body: "Remember to fill all fields",
      });
      (document.querySelector("#modal") as HTMLDialogElement).close();
    };

    if ((e.target as Element).parentElement) {
      const id = (e.target as Element).parentElement?.dataset.id as string;
      const type = (e.target as Element).parentElement?.dataset.type as string;

      switch (type) {
        case "education":
          setModalData({
            edit: {
              editMode: true,
              type: type,
              id: id,
              item: educationHistory.educationArray[Number(id)],
              saveFn: { submit: saveEvent },
            },
            title: `EDIT ${type.toUpperCase()}`,
            body: "",
          });
          break;

        case "work":
          setModalData({
            edit: {
              editMode: true,
              type: type,
              id: id,
              item: workHistory.workArray[Number(id)],
              saveFn: { submit: saveEvent },
            },
            title: `EDIT ${type.toUpperCase()}`,
            body: "",
          });
          break;
      }

      (document.querySelector("#modal") as HTMLDialogElement).showModal();
    }
  };

  const formAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
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
    newEntry["uuid"] = uuidv4();

    const [success, errorString] = validateForm(newEntry as resumeSection);

    if (success) {
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
      setModalData({
        title: "ERROR",
        body: errorString,
        edit: { editMode: false, type: "", id: "", item: {} },
      });
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
          list={educationHistory.educationArray?.map((edu) => {
            return (
              <div className="flex flex-col" key={edu.uuid}>
                <h1 className="text-3xl">{edu.schoolName}</h1>
                <div className="flex justify-center gap-6">
                  <div className="text-xl">{edu.degree}</div>
                  <div className="text-xl">
                    {edu.dateBegin}-{edu.dateEnd}
                  </div>
                  <ResumeButtons
                    type="education"
                    id={edu.uuid ?? ""}
                    edit={editEvent}
                    del={deleteEvent}></ResumeButtons>
                </div>
              </div>
            );
          })}></EducationInfo>
        <WorkInfo
          list={workHistory.workArray?.map((work) => {
            return (
              <div className="flex flex-col" key={crypto.randomUUID()}>
                <div className="flex flex-col">
                  <h1 className="text-3xl">{work.role}</h1>
                  <div className="flex justify-center gap-6">
                    <div className="text-xl">{work.companyName}</div>
                    <div className="text-xl">{work.description}</div>
                    <div className="text-xl">
                      {work.dateBegin}-{work.dateEnd}
                    </div>
                    <ResumeButtons
                      type="work"
                      id={work.uuid ?? ""}
                      edit={editEvent}
                      del={deleteEvent}></ResumeButtons>
                  </div>
                </div>
              </div>
            );
          })}></WorkInfo>
        <Modal
          title={modalData.title}
          body={modalData.body}
          edit={modalData.edit}></Modal>
      </div>
    </>
  );
}
