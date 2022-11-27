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
        borderColor: "#A04EF6",
        color:"#fff"
      },
      "&:hover fieldset": {
        borderColor: "#A04EF6",
        color:"#fff"

      },
      "&.Mui-focused fieldset": {
        borderColor: "#A04EF6",
        color:"#fff"

      }
    }
  }));
  return (
    <>
    <Box sx={{margin:"0.5rem",padding:"0.25rem"}}> 

        
      <FormControl fullWidth  size="small" sx={{width:225}}>
        <InputLabel>{label}</InputLabel>
        <Select onChange={onChange}
        
      
      

        >
          {arr.map((e, i) => (
              <MenuItem key={i} value={e.value}>{e.label}</MenuItem>
              ))}
        </Select>
      </FormControl>
              </Box>
    </>
  );
};

export default MySelect;
