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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/libs/validationSchema/formValidation";

const CreateReferralForm = ({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  setSnackbar,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, name } = data;

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
        reset();
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
          onSubmit: handleSubmit(onSubmit),
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
            You will receive your code in E-mail <br />
            <span className="font-semibold">
              Check your email, including your spam folder, if you haven{"'"}t
              received your referral code in your primary inbox
            </span>
            <br />
            <span className="text-red-600">
              NOTE: You can only create and redeem one referral code per email.
            </span>
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            required
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          {error && (
            <Alert severity="error" style={{ marginTop: "10px" }}>
              {error}
            </Alert>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              handleClose(setError);
              reset();
            }}
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
