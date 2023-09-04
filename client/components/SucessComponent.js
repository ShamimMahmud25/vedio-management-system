import { Button, Grid } from "@mui/material";
import React from "react";

export default function SucessComponent({ message, onBtnClicked, buttonText }) {
  return (
    <Grid container className="success-message-container">
      <Grid item className="success-message-item-container">
        <Grid>
          <p className="text-green-700 text-4xl">{message}</p>
        </Grid>
        <Grid>
          <Button
            onClick={onBtnClicked}
            variant="contained"
            className="btn mt-8 text-2xl"
          >
            {buttonText}{" "}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
