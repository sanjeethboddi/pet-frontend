import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Typography, Button} from '@mui/material';


function Register() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div><Typography variant="h2" > Register</Typography></div>
      <div><TextField id="outlined-basic" label="First Name" variant="outlined" style={{width:"500px"}}/></div>
      <div><TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width:"500px"}} /></div>
      <div><TextField id="outlined-basic" label="Username" variant="outlined" style={{width:"500px"}}/></div>
      <div><TextField id="outlined-basic" label="Password" variant="outlined" style={{width:"500px"}} /></div>
      <div>      
        <span><Button variant="contained">Register</Button></span>
      </div>
    
    </Box>
  );
}

export default Register;

