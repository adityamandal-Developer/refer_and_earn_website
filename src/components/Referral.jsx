"use client";
import React, { use, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import Lottie from "lottie-react";
import learning from "../../public/learning2.json";
import { PiArrowBendDownRightFill } from "react-icons/pi";
import CreateReferralForm from "./CreateReferralForm";
import CreateReferralVerifyForm from "./CreateReferralVerifyForm";

const Referral = ({ setSnackbar }) => {
  const [open, setOpen] = useState(false);
  const [openRedeem, setOpenRedeem] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (setError) => {
    setOpen(false);
    setError("");
  };

  const handleClickOpenRedeem = () => {
    setOpenRedeem(true);
  };

  const handleCloseRedeem = (setError) => {
    setOpenRedeem(false);
    setError("");
  };
  return (
    <div className="flex justify-center items-center w-full sm:mt-40 h-[80vh]">
      <div className="flex justify-center items-center bg-[url('/demo.svg')] bg-center h-[510px] md:h-[400px] min-w-[180%] rotate-[170deg]">
        <div className="flex flex-col md:flex-row justify-between items-center rotate-[-180deg] lg:gap-8">
          <div className="flex justify-center items-center">
            <div onClick={handleClickOpen}>
              <PrimaryButton text="Refer" />
            </div>
            <PiArrowBendDownRightFill className="text-6xl rotate-[190deg]" />
            <CreateReferralForm
              open={open}
              setOpen={setOpen}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              setSnackbar={setSnackbar}
            />
          </div>
          <div className="md:w-[35%] w-[60%] flex justify-center">
            <Lottie
              animationData={learning}
              loop={true}
              className="w-full drop-shadow-2xl"
            />
          </div>
          <div onClick={handleClickOpenRedeem}>
            <PrimaryButton text="Redeem" />
          </div>
          <CreateReferralVerifyForm
            open={openRedeem}
            setOpen={setOpenRedeem}
            handleClickOpen={handleClickOpenRedeem}
            handleClose={handleCloseRedeem}
            setSnackbar={setSnackbar}
          />
        </div>
      </div>
    </div>
  );
};

export default Referral;
