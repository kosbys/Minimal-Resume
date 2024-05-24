import { useState } from "react";
import Form from "./form/Form";
import Resume from "./resume/Resume";

export default function Main() {
  const [personData, setPersonData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "505-646-7077",
  });

  const formChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setPersonData({ ...personData, [field]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col">
        <Form
          name={personData.name}
          email={personData.email}
          phone={personData.phone}
          change={formChange}></Form>
      </div>
      <div className="flex flex-col">
        <Resume
          name={personData.name}
          email={personData.email}
          phone={personData.phone}></Resume>
      </div>
    </>
  );
}
