import { ChangeEvent } from "react";

type person = {
  name: string;
  email: string;
  phone: string;
  change?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type education = {
  schoolName?: string;
  degree?: string;
  studyBegin?: string;
  studyEnd?: string;
};

type work = {
  companyName?: string;
  role?: string;
  description?: string;
  workBegin?: string;
  workEnd?: string;
};

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
};
