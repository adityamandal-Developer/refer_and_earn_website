import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className="mx-auto text-logo border-2 border-black py-2 px-6 md:text-6xl text-[30px] font-semibold hover:bg-black hover:text-[#f070a1] transition-all ease-linear">
      {text}
    </button>
  );
};

export default PrimaryButton;
