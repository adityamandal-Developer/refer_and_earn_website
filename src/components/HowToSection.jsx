"use client";
import React, { useState } from "react";

const HowToSection = () => {
  const [steps, setStep] = useState({
    stepsItems: ["Create Referral", "Send Referral", "Redeem", "Enjoy"],
    currentStep: 2,
  });
  return (
    <section className=" h-screen">
      <h1 className="text-link flex justify-center items-end text-6xl font-semibold">
        How Does referral work ?
      </h1>
      <div className="max-w-2xl mx-auto px-4 md:px-0 mt-10">
        <ul
          aria-label="Steps"
          className="items-center text-gray-600 font-medium md:flex"
        >
          {steps.stepsItems.map((item, idx) => (
            <li
              key={idx}
              aria-current={steps.currentStep == idx + 1 ? "step" : false}
              className="flex-1 last:flex-none flex gap-x-2 md:items-center"
            >
              <div className="flex items-center flex-col gap-x-2">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                    steps.currentStep > idx + 1
                      ? "bg-[#F070A1] border-[#F070A1]"
                      : "" || steps.currentStep == idx + 1
                      ? "border-[#F070A1]"
                      : ""
                  }`}
                >
                  <span
                    className={` ${
                      steps.currentStep > idx + 1
                        ? "hidden"
                        : "" || steps.currentStep == idx + 1
                        ? "text-[#F070A1]"
                        : ""
                    }`}
                  >
                    {idx + 1}
                  </span>
                  {steps.currentStep > idx + 1 ? (
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
                  ) : (
                    ""
                  )}
                </div>
                <hr
                  className={`h-12 border md:hidden ${
                    idx + 1 == steps.stepsItems.length
                      ? "hidden"
                      : "" || steps.currentStep > idx + 1
                      ? "border-[#F070A1]"
                      : ""
                  }`}
                />
              </div>
              <div className="h-8 flex items-center md:h-auto">
                <h3
                  className={`text-sm ${
                    steps.currentStep == idx + 1 ? "text-[#F070A1]" : ""
                  }`}
                >
                  {item}
                </h3>
              </div>
              <hr
                className={`hidden mr-2 w-full border md:block ${
                  idx + 1 == steps.stepsItems.length
                    ? "hidden"
                    : "" || steps.currentStep > idx + 1
                    ? "border-[#F070A1]"
                    : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="p-20">
        <h1 className="text-link text-6xl font-semibold">Step 1</h1>
        <p></p>
      </div>
    </section>
  );
};

export default HowToSection;
