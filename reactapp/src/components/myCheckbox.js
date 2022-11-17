import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function MyCheckbox({defaultChecked, checkboxLabel,disabled,onChange}) {
//   console.log(defaultChecked, checkboxLabel,disabled)
    return (
    <FormGroup>
      <FormControlLabel
       control={
       <Checkbox
       disabled={disabled}
       onChange={onChange}
       defaultChecked={defaultChecked} />
       } label={checkboxLabel} />
    </FormGroup>
  );
}