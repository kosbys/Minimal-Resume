export default function yearOptions() {
  const currentYear = new Date().getFullYear() as number;
  const minYear = 1970;
  const years = [];
  years.push(<option key={"-1"}>---</option>);
  for (let i = currentYear; i > minYear; i--) {
    years.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return years;
}
