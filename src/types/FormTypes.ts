import { ErrorOption } from "react-hook-form";

export type InputFieldT = {
  type: string;
  placeholder: string;
  name: string;
  register: any;
  error: undefined | ErrorOption;
};
