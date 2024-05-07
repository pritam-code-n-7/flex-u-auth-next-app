import { ButtonT } from "@/types/ButtonTypes";
import React from "react";

const BlackButton = ({ name }: ButtonT) => {
  return (
    <div className="flex justify-center mt-6 mb-3">
      <button className="bg-black text-white rounded py-3 px-6 ">{name}</button>
    </div>
  );
};

export default BlackButton;
