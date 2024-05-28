import { education, person, work } from "./types";

const dateRegex: RegExp = /[0-9]+/;

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
  for (const [key, value] of Object.entries(query)) {
    if (value === "") {
      return false;
    }
    if (dates.includes(key)) {
      if (!dateRegex.test(value)) {
        return false;
      }
    }
  }

  return true;
}

export { changeData, validateForm };
