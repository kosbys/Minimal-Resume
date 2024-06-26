import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
import Form from "./form/Form";
import Resume from "./resume/Resume";

export default function Main() {
  const [educationHistory, setEducationHistory] = useState({
    educationArray: [] as education[],
  });
  const [workHistory, setWorkHistory] = useState({
    workArray: [] as work[],
  });
  const [personData, setPersonData] = useState<person>({
    personName: "John Doe",
    email: "johndoe@example.com",
    phone: "505-646-7077",
  });
  const [modalData, setModalData] = useState<modalProps>({
    edit: { editMode: false, type: "", id: "", item: {} },
    title: "ERROR",
    body: "Remember to fill all fields",
  } as modalProps);

  const deleteEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLButtonElement).parentElement?.dataset.id;
    switch ((e.target as HTMLButtonElement).parentElement?.dataset.type) {
      case "education": {
        const newEducations = educationHistory.educationArray.filter(
          (edu) => edu.uuid != id
        );
        setEducationHistory({ educationArray: newEducations });
        break;
      }

      case "work": {
        const newWorks = workHistory.workArray.filter(
          (work) => work.uuid != id
        );
        setWorkHistory({ workArray: newWorks });
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

      if (form.dataset.id) {
        editedForm.uuid = form.dataset.id;
      }

      [...inputs].forEach((el: Element) => {
        if (el.children[1] as HTMLInputElement) {
          const input = el.children[1] as HTMLInputElement;
          editedForm[input.name] = input.value;
        }
      });

      switch (form.className) {
        case "education": {
          const newEducations = educationHistory.educationArray.map((edu) => {
            if (edu.uuid === form.dataset.id) {
              return editedForm as education;
            } else {
              return edu;
            }
          });
          setEducationHistory({ educationArray: newEducations });
          break;
        }
        case "work": {
          const newWorks = workHistory.workArray.map((work) => {
            if (work.uuid === form.dataset.id) {
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
        case "education": {
          const edu = educationHistory.educationArray.find(
            (edu) => edu.uuid === id
          );
          if (edu) {
            setModalData({
              edit: {
                editMode: true,
                type: type,
                id: id,
                item: edu,
                saveFn: { submit: saveEvent },
              },
              title: `EDIT ${type.toUpperCase()}`,
              body: "",
            });
          }
          break;
        }

        case "work": {
          const work = workHistory.workArray.find((work) => work.uuid === id);
          if (work) {
            setModalData({
              edit: {
                editMode: true,
                type: type,
                id: id,
                item: work,
                saveFn: { submit: saveEvent },
              },
              title: `EDIT ${type.toUpperCase()}`,
              body: "",
            });
            break;
          }
        }
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
          `#${element.id.replace("Wrap", "")}`
        );

        newEntry[entryField] = input?.value || "";
      } else if (element.classList.contains("date-wrap")) {
        newEntry.dateBegin =
          (element.children[0].querySelector(".select") as HTMLSelectElement)
            .value || "";
        newEntry.dateEnd =
          (element.children[1].querySelector(".select") as HTMLSelectElement)
            .value || "";
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

  const educationElements = educationHistory.educationArray?.map((edu) => {
    return (
      <div className="ml-4 mt-2 flex flex-col resume-item" key={edu.uuid}>
        <h1 className="text-3xl font-bold">{edu.schoolName}</h1>
        <div className="flex justify-between gap-6">
          <div className="text-lg">{edu.degree}</div>
          <div className="text-xl">
            {edu.dateBegin}-{edu.dateEnd}
          </div>
        </div>
        <ResumeButtons
          type="education"
          id={edu.uuid ?? ""}
          edit={editEvent}
          del={deleteEvent}></ResumeButtons>
      </div>
    );
  });

  const workElements = workHistory.workArray?.map((work) => {
    return (
      <div className="ml-4 mt-2 flex flex-col resume-item" key={work.uuid}>
        <h1 className="text-3xl font-bold">{work.companyName}</h1>
        <div className="flex justify-between gap-6">
          <div className="flex flex-col">
            <div className="text-lg">{work.role}</div>
            <div className="text-md">{work.description}</div>
          </div>
          <div className="text-xl">
            {work.dateBegin}-{work.dateEnd}
          </div>
        </div>
        <ResumeButtons
          type="work"
          id={work.uuid ?? ""}
          edit={editEvent}
          del={deleteEvent}></ResumeButtons>
      </div>
    );
  });

  personData.change = changePerson;

  return (
    <>
      <Form person={personData} submit={formAddEvent}></Form>
      <Resume
        person={personData}
        educationElements={educationElements}
        workElements={workElements}></Resume>
      <Modal
        title={modalData.title}
        body={modalData.body}
        edit={modalData.edit}></Modal>
    </>
  );
}
