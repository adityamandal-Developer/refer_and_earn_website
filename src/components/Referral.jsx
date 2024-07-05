"use client";
import React, { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import Lottie from "lottie-react";
import learning from "../../public/learning2.json";
import { PiArrowBendDownRightFill } from "react-icons/pi";
import CreateReferralForm from "./CreateReferralForm";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Referral = ({ setSnackbar }) => {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  //   console.log("hello");
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-center items-center w-full sm:mt-40 h-[80vh]">
      <div className="flex justify-center items-center bg-[url('/demo.svg')] bg-center h-[500px] sm:h-[400px] min-w-[180%] rotate-[170deg]">
        <div className="flex flex-col sm:flex-row justify-between items-center rotate-[-180deg] gap-4 sm:gap-10">
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
          <div className="sm:w-[40%] w-[60%] flex justify-center">
            <Lottie
              animationData={learning}
              loop={true}
              className="w-full drop-shadow-2xl"
            />
          </div>
          <PrimaryButton text="Redeem" />
        </div>
      </div>
    </div>
  );
};

export default Referral;
