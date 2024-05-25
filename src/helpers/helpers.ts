import { education, person } from "./types";

function changeData(
  e: React.ChangeEvent<HTMLInputElement>,
  setData: <T>(data: T) => void,
  data: person | education
) {
  const field = e.target.name;
  setData({ ...data, [field]: e.target.value });
}

function validateEducation() {}

export { changeData, validateEducation };
