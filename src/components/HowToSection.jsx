"use client";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const HowToSection = () => {
  const stepsData = [
    {
      title: "Create Referral",
      description:
        "Sign up and create a referral link to share with your friends.",
    },
    {
      title: "Send Referral",
      description:
        "Send the referral link to your friends via email or social media.",
    },
    {
      title: "Redeem",
      description:
        "Your friend signs up using your referral link and makes a purchase.",
    },
    {
      title: "Enjoy",
      description: "Receive your reward for the successful referral and enjoy!",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="min-h-screen text-link p-4">
      <h1 className=" flex justify-center items-end text-6xl font-semibold">
        How Does referral work?
      </h1>
      <div className="flex flex-row md:flex-col">
        <div className="max-w-2xl mx-auto px-4 md:px-0 mt-10">
          <ul
            aria-label="Steps"
            className="items-center text-gray-600 font-medium md:flex"
          >
            {stepsData.map((item, idx) => (
              <li
                key={idx}
                aria-current={currentStep == idx ? "step" : false}
                className="flex-1 last:flex-none flex gap-x-2 md:items-center"
              >
                <div className="flex items-center flex-col gap-x-2">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                      currentStep > idx ? "bg-[#F070A1] border-[#F070A1]" : ""
                    } ${currentStep == idx ? "border-[#F070A1]" : ""}`}
                  >
                    <span
                      className={`${
                        currentStep > idx
                          ? "hidden"
                          : currentStep == idx
                          ? "text-[#F070A1]"
                          : ""
                      }`}
                    >
                      {idx + 1}
                    </span>
                    {currentStep > idx && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </div>
                  <hr
                    className={`h-12 border md:hidden ${
                      idx + 1 == stepsData.length
                        ? "hidden"
                        : currentStep > idx
                        ? "border-[#F070A1]"
                        : ""
                    }`}
                  />
                </div>
                <div className="h-8 flex items-center md:h-auto">
                  <h3
                    className={`text-sm ${
                      currentStep == idx ? "text-[#F070A1]" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <hr
                  className={`hidden mr-2 w-full border md:block ${
                    idx + 1 == stepsData.length
                      ? "hidden"
                      : currentStep > idx
                      ? "border-[#F070A1]"
                      : ""
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="p-20">
          <h1 className=" text-6xl font-semibold">
            {stepsData[currentStep].title}
          </h1>
          <p className=" text-2xl mt-4">{stepsData[currentStep].description}</p>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="p-4 text-6xl border-2 border-black text-black hover:border-[#F070A1] hover:text-[#F070A1] rounded-full disabled:opacity-50"
        >
          <GrPrevious />
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === stepsData.length - 1}
          className="p-4 text-6xl border-2 border-black text-black hover:border-[#F070A1] hover:text-[#F070A1] rounded-full disabled:opacity-50"
        >
          <GrNext />
        </button>
      </div>
    </section>
  );
};

export default HowToSection;
