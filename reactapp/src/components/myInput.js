import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MyInput = ({
  label,
  onChange,
  required,
  color,
  variant,
  focused,
  type,
  id
}) => {
  return (
    <>
    <Box
     sx={{margin:'0.5rem',
    padding:'0.25rem'}}
     >

      <TextField
        id={id}
        focused={focused}
        color={color}
        label={label}
        variant={variant}
        onChange={onChange}
        required={required}
        type={type}
        />
        </Box>
    </>
  );
};

export default MyInput;
