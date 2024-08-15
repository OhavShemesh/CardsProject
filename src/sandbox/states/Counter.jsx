import { Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [jumps, setJumps] = useState(1);

  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component did unmount");
    };
  }, []);

  useEffect(() => {
    console.log("count has been changed and its value is " + counter);
    return () => {
      console.log("component with count " + counter + " did unmount");
    };
  }, [counter]);

  const handleClickPlus = () => {
    setCounter((prev) => prev + jumps);
  };

  const handleClickMinus = () => {
    setCounter((prev) => prev - jumps);
  };

  const handleReset = () => {
    setCounter(0), setJumps(1)
  }
  const handleChangeJumps = (newJumps) => {
    setJumps(newJumps)
  }

  return (
    <div>
      <Typography>{counter}</Typography>
      <Button onClick={handleClickPlus}>+</Button>
      <Button onClick={handleClickMinus}>-</Button>
      <Button onClick={handleReset}>reset</Button>
      <Select
        value={jumps}
        label="Jumps"
        onChange={(e) => setJumps(e.target.value)}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
    </div>
  );
}
