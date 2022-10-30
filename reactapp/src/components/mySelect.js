import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const MySelect = ({ arr, onChange, label }) => {
  return (
    <>
    <Box sx={{margin:"0.5rem",padding:"0.25rem"}}> 

        
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select onChange={onChange}>
          {arr.map((e, i) => (
              <MenuItem value={e.value}>{e.label}</MenuItem>
              ))}
        </Select>
      </FormControl>
              </Box>
    </>
  );
};

export default MySelect;
