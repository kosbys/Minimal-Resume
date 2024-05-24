type person = {
  name: string;
  email: string;
  phone: string;
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputProps = {
  name: string;
  type: string;
  label: string;
  value: string;
  updateFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { person, InputProps };
