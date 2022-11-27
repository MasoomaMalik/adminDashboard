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
  id,size,fullWidth
}) => {
  return (
    <>

    <Box
     sx={{margin:'0.5rem',
    padding:'0.25rem'
  ,
  width: 500,
        maxWidth: '100%',
}}
     >

      <TextField
      size={size?? "small"}
        id={id}
        focused={focused}
        color={color??"#E7D045"}
        label={label}
        variant={variant}
        onChange={onChange}
        required={required}
        type={type}
        fullWidth={fullWidth}
        />
        </Box>
    </>
  );
};

export default MyInput;
