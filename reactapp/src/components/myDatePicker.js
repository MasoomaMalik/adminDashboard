import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({onChange,value}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Birth"
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField
          
         sx={{
            '.MuiInputBase-input': {padding: '0.25rem', width:150, margin:"0.5rem" , color:"white"},
         }}
          {...params} />}
       
      />
    </LocalizationProvider>
  );
}
