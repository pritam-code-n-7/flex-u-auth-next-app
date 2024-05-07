import { InputFieldT } from "@/types/FormTypes";
import React from "react";

const InputField = ({ type, name, placeholder }: InputFieldT) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={`field_${name}`}
        placeholder={placeholder}
        className="rounded border border-neutral-500  w-full relative z-10  mt-2 outline-none bg-neutral-950 text-white focus:ring-2 focus:ring-teal-500 py-4 px-2 leading-tight text-center placeholder:opacity-45"
      />
    </div>
  );
};

export default InputField;