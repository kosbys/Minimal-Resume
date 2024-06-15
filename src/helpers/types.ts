import { ChangeEvent } from "react";

type person = {
  personName: string;
  email: string;
  phone: string;
  change?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type resumeSection = {
  dateBegin?: string;
  dateEnd?: string;
  uuid?: string;
};

interface education extends resumeSection {
  schoolName?: string;
  degree?: string;
}

interface work extends resumeSection {
  companyName?: string;
  role?: string;
  description?: string;
}

type formSubmit = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type modalProps = {
  edit: {
    item: education | work;
    editMode: boolean;
    type: string;
    id: string;
    saveFn?: formSubmit;
  };
  title: string;
  body: string;
};

type formProps = {
  person: person;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type inputProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  updateFunction?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type resumeProps = {
  person: person;
  educationElements: JSX.Element[];
  workElements: JSX.Element[];
};

type elements = {
  list: JSX.Element[];
};

type buttonProps = {
  type: string;
  id: string;
  edit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  del: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type {
  person,
  education,
  work,
  inputProps,
  formProps,
  formSubmit,
  modalProps,
  resumeProps,
  elements,
  buttonProps,
  resumeSection,
};
