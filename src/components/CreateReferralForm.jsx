"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createReferral } from "../libs/api/referral.api";
import { Alert } from "@mui/material";

const CreateReferralForm = ({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  setSnackbar,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { email, name } = formJson;

    try {
      const result = await createReferral(email, name);
      if (result.error) {
        setError(result.error);
      } else {
        setSnackbar({
          open: true,
          message: "Referral code created successfully! Check your email.",
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
            padding: "20px",
            borderRadius: "15px",
          },
        }}
      >
        <DialogTitle className="text-logo">Create a Referral Code</DialogTitle>
        <DialogContent className="text-link">
          <DialogContentText>
            You will revieve your code in E-mail <br />
            <span className="font-semibold">
              Check your email, including your spam folder, if you haven't
              received your referral code in your primary inbox
            </span>
            <br />
            <span className="text-red-600">
              NOTE: You can only create and redeem one referal code per email.
            </span>
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
            {loading ? "Creating..." : "GET CODE"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateReferralForm;
