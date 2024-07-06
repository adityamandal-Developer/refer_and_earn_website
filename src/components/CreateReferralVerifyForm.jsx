"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createReferral, redeemReferral } from "../libs/api/referral.api";
import { Alert } from "@mui/material";
import PropTypes from "prop-types";
import { Input as BaseInput } from "@mui/base/Input";
import { Box, styled } from "@mui/system";
import OTP from "./RedeemCodeInput";

const CreateReferralVerifyForm = ({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  setSnackbar,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.append("referralCode", otp);
    const formJson = Object.fromEntries(formData.entries());

    const { email, name, referralCode } = formJson;

    const apiPayload = {
      refereeEmail: email,
      refereeName: name,
      referralCode: referralCode,
    };

    console.log(apiPayload);

    try {
      const result = await redeemReferral(
        apiPayload.refereeEmail,
        apiPayload.refereeName,
        apiPayload.referralCode
      );
      if (result.error) {
        setError(result.error);
      } else {
        setSnackbar({
          open: true,
          message: "Referral Verified Sucessfully!.",
          severity: "success",
        });
        handleClose(setError);
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message:
          error.message ||
          "An error occurred while creating the referral code.",
        severity: "error",
      });
      setError("An error occurred while creating the referral code");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => handleClose(setError)}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
          sx: {
            backgroundImage: `url('./gradient.svg')`,
            padding: "5px",
            borderRadius: "15px",
          },
        }}
      >
        <DialogTitle className="text-logo">Redeem Code</DialogTitle>
        <DialogContent className="text-link">
          <DialogContentText>
            Enter <span className="font-bold"> Your 6 digit Redeem Code</span>{" "}
            Email address and Name here.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <div className="">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 3.5,
              }}
            >
              <OTP
                separator={<span>-</span>}
                value={otp}
                onChange={setOtp}
                length={6}
                required
              />
              <span>Entered value: {otp}</span>
            </Box>
          </div>

          {error && (
            <Alert severity="error" style={{ marginTop: "10px" }}>
              {error}
            </Alert>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => handleClose(setError)}
            disabled={loading}
            sx={{ bgcolor: "Black", color: "#F070A1" }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            sx={{ bgcolor: "Black", color: "#16ffbd" }}
          >
            {loading ? "Creating..." : "REDEEM"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateReferralVerifyForm;
