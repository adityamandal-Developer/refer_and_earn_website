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
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CreateReferralForm = ({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  setSnackbar,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [snackbar, setSnackbar] = useState({
  //   open: false,
  //   message: "",
  //   severity: "success",
  // });

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
        handleClose();
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

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Create a Referral Code</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Create a Referral Code, please enter your{" "}
            <span className="font-bold">Email</span> address and Name here.
            <span className="font-bold text-black">
              {" "}
              We will send you the referral code in your Email
            </span>
            .
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
          <Button onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "GET CODE"}
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default CreateReferralForm;
