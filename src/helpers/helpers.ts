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

function validateForm(query: education | work): [boolean, string] {
  const dates = ["dateBegin", "dateEnd"];
  for (const [key, value] of Object.entries(query)) {
    if (value === "") {
      return [false, "Remember to fill all fields."];
    }
    console.log(query.dateBegin, query.dateEnd);

    if (dates.includes(key)) {
      if (
        !dateRegex.test(value) ||
        Number(query.dateEnd) < Number(query.dateBegin)
      ) {
        return [false, "End date must be before the start date."];
      }
    }
  }

  return [true, ""];
}

export { changeData, validateForm };
