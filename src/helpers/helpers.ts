import { education, person, work } from "./types";

const dateRegex: RegExp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

function changeData(
  e: React.ChangeEvent<HTMLInputElement>,
  setData: <T>(data: T) => void,
  data: person
) {
  const field = e.target.name;
  setData({ ...data, [field]: e.target.value });
}

function validateForm(query: education | work): boolean {
  const dates = ["studyBegin", "studyEnd", "workBegin", "workEnd"];
  for (const [k, v] of Object.entries(query)) {
    if (v === "") {
      return false;
    }
    if (dates.includes(k)) {
      if (!dateRegex.test(v)) {
        return false;
      }
    }
  }

  return true;
}

export { changeData, validateForm };
