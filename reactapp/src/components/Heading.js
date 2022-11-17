import { Box } from "@mui/system";
import React from "react";
import MyColorTheme from "./myColorTheme";
import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";

const Heading = ({ justifyContent, title, color,fontFamily, fontSize, variant}) => {
  return (
    <>
      <ThemeProvider theme={MyColorTheme}>
        <Box
          sx={{
            margin: 1,
          }}
        >
          <Typography
            style={{
              // fontSize: "1rem",
              color: color,
              fontFamily: fontFamily,
              fontWeight: 700,
            }}
            variant={variant}
          >
            {title}
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Heading;
