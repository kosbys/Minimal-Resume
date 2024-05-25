import { ChangeEvent } from "react";

type person = {
  name: string;
  email: string;
  phone: string;
  change?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type educations = { educationArray: education[]; currentEducation: education };

type education = {
  schoolName?: string;
  degree?: string;
  studyBegin?: string;
  studyEnd?: string;
};

type formSubmit = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type InputProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  updateFunction?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { person, education, educations, InputProps, formSubmit };
