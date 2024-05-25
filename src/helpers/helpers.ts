import { education, person } from "./types";

const dateRegex: RegExp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

function changeData(
  e: React.ChangeEvent<HTMLInputElement>,
  setData: <T>(data: T) => void,
  data: person
) {
  const field = e.target.name;
  setData({ ...data, [field]: e.target.value });
}

function validateEducation(edu: education): boolean {
  for (const [k, v] of Object.entries(edu)) {
    if (v === "") {
      return false;
    }
    if (k === "studyBegin" || k === "studyEnd") {
      if (!dateRegex.test(v)) {
        return false;
      }
    }
  }

  return true;
}

export { changeData, validateEducation };
