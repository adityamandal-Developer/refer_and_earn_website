'use client'
require('dotenv').config();
import HowToSection from "@/components/HowToSection";
import Navbar from "@/components/Navbar";
import Referral from "@/components/Referral";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";


export default function Home() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };
  return (
    <main className="min-h-screen overflow-hidden bg-[url('/demo2.svg')]">
      <Navbar />
      <Referral setSnackbar={setSnackbar} />
      <HowToSection />
      <Snackbar
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
      </Snackbar>
    </main>
  );
}
