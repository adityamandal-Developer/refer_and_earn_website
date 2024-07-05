import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

const Referral = () => {
  return (
    <div className="flex justify-center items-center w-full mt-40 h-[80vh]">
      <div className="flex justify-center items-center bg-[url('/demo.svg')] bg-center h-[400px] min-w-[180%] rotate-[170deg]">
        <div className="flex justify-between items-center rotate-[-180deg] sm:gap-10">
          <PrimaryButton text="Refer" />
          <div className="w-[40%]">
            <Image
              src="/boy2.png"
              width={300}
              height={300}
              alt="image"
              className="drop-shadow-2xl"
            />
          </div>
          <PrimaryButton text="Redeem" />
        </div>
      </div>
    </div>
  );
};

export default Referral;
//bg-[url('/grain.svg')]
