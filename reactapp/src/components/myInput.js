import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MyColorTheme from "./myColorTheme";
import { ThemeProvider } from "@mui/material";
const MyInput = ({
  label,
  onChange,
  required,
  color,
  variant,
  focused,
  type,
  id,
  size,
  fullWidth,
  }) => {
  return (
    <>
      <ThemeProvider theme={MyColorTheme}>
        <Box
          sx={{
            margin: "0.5rem",
            padding: "0.25rem",
            // width: 500,
            // maxWidth: "100%",
          }}
        >
          <TextField
            size={size ?? "small"}
            id={id}
            focused={focused}
            color={color ?? "green"}
            label={label}
            variant={variant}
            onChange={onChange}
            required={required}
            type={type}
            fullWidth={fullWidth}
            // key={key}
          />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MyInput;
