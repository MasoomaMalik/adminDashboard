import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const MyRadio = ({ defaultValue, onClick, formLabel,arr,row }) => {
  return (
    <>
      <FormControl>
        <FormLabel>{formLabel}</FormLabel>
        <RadioGroup 
        defaultValue={defaultValue}
        row={row}>
          {arr.map((e, i) => (
            <>
              <FormControlLabel
                key={i}
                value={e.value}
                control={<Radio />}
                label={e.label}
                onClick={onClick}
              />
            </>
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default MyRadio;
