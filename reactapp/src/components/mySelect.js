import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from '@mui/material/styles';
const MySelect = ({ arr, onChange, label }) => {
  const CustomSelect = styled(Select)(() => ({
    // width: 300,
    "&.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#292826",
        color:"#fff"
      },
      "&:hover fieldset": {
        borderColor: "#292826",
        color:"#fff"

      },
      "&.Mui-focused fieldset": {
        borderColor: "#292826",
        color:"#fff"

      }
    }
  }));
  return (
    <>
    <Box 
    sx={{margin:"0.5rem",padding:"0.25rem",justifyContent:"center", display:"flex"}}
    > 

        
      <FormControl   size="small" 
      sx={{ m: 1, minWidth: {xs:245} }}
      // sx={{width:{md:225, sm:220, xs:150}}}
      >
        <InputLabel>{label}</InputLabel>
        <CustomSelect onChange={onChange}
        
        defaultValue = ""
      

        >
          {arr.map((e, i) => (
              <MenuItem key={i} value={e.value}>{e.label}</MenuItem>
              ))}
        </CustomSelect>
      </FormControl>
              </Box>
    </>
  );
};

export default MySelect;
