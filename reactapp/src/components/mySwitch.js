import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const MySwitch = ({ disabled, defaultChecked, label,onChange }) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          disabled={disabled}
          control={
          <Switch
           defaultChecked={defaultChecked} 
           onChange={onChange}
           />
        }
          label={label}
        />
      </FormGroup>
    </>
  );
};

export default MySwitch;
