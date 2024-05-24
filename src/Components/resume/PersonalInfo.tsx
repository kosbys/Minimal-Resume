import { person } from "../../helpers/types";

export default function PersonalInfo({ name, email, phone }: person) {
  return (
    <div className="flex flex-col">
      <h1 className="text-8xl" id="name_resume">
        {name}
      </h1>
      <div className="flex justify-center gap-6">
        <div className="text-xl" id="email_resume">
          {email}
        </div>
        <div className="text-xl" id="phone_resume">
          {phone}
        </div>
      </div>
    </div>
  );
}
