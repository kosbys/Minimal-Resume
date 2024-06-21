import { person } from "../../helpers/types";

export default function PersonalInfo({ personName, email, phone }: person) {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl text-center" id="name_resume">
        {personName}
      </h1>
      <div className="flex justify-center gap-6">
        <div className="text-xl" id="phone_resume">
          {phone}
        </div>
        <div className="text-xl underline decoration-2" id="email_resume">
          {email}
        </div>
      </div>
    </div>
  );
}
