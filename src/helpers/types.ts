import { ChangeEvent } from "react";

type person = {
  name: string;
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

type InputProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  updateFunction?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  InputProps,
  formSubmit,
  modalProps,
  elements,
  buttonProps,
  resumeSection,
};
