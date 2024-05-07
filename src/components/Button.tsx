import { ButtonT } from "@/types/ButtonTypes";
import React from "react";

const BlackButton = ({ name }: ButtonT) => {
  return (
    <div className="bg-black text-white rounded py-4 px-6 ">
      <button>{name}</button>
    </div>
  );
};

export default BlackButton;
