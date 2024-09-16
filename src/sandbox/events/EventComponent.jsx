import { Button, TextField } from "@mui/material";
import React from "react";

export default function EventComponent() {
  const handleClick = () => {
  };
  const handleClickWithData = (name) => {
  };

  const handleEventClick = (e) => {
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        static function
      </Button>
      <Button variant="contained" onClick={() => handleClickWithData("Avi")}>
        function with args
      </Button>

      <Button variant="contained" onClick={handleEventClick}>
        Get The event
      </Button>

      <TextField
      />
    </div>
  );
}
