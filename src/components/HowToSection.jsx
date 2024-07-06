"use client";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const HowToSection = () => {
  const stepsData = [
    {
      title: "Create Referral",
      description:
        "Click on the Refer button above and create a referral link to share with your friends. You will get your referal code in your email",
    },
    {
      title: "Send Referral",
      description:
        "Send the referral Code to your friends via email or social media.",
    },
    {
      title: "Redeem",
      description:
        "Your friend using your referral Code and makes a purchase. Click on the Redeem Button above to Redeem your code",
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
      <div className="flex flex-row justify-center items-center md:items-start md:flex-col">
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
                      currentStep >= idx ? "bg-[#F070A1] border-[#F070A1]" : ""
                    } ${currentStep === idx ? "border-[#F070A1]" : ""}`}
                  >
                    <span
                      className={`${
                        currentStep >= idx
                          ? "hidden"
                          : currentStep == idx
                          ? "text-[#F070A1]"
                          : ""
                      }`}
                    >
                      {idx + 1}
                    </span>
                    {currentStep > idx || currentStep === 3 ? (
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
                    ) : null}
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
        <div className="sm:p-20 py-20 sm:w-[80%]">
          <h1 className="text-4xl sm:text-6xl font-semibold h-[110px]">
            {stepsData[currentStep].title}
          </h1>
          <p className="text-2xl mt-4 h-[120px]">
            {stepsData[currentStep].description}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-20 sm:mt-8">
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
      <h1 className="text-link flex justify-center items-center mt-10 p-2 text-[5vw]">
        Thanks For using <span className="text-logo ml-2">Refer App</span>
      </h1>
    </section>
  );
};

export default HowToSection;
