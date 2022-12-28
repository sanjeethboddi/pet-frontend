import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Login() {
const navigate = useNavigate();

function handleRegister() {
    console.log('Register');
    navigate('/register')
  
  }

  function handleLogin() {
    console.log('Register');
    navigate('/home')
  
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div><Typography variant="h2" > Login</Typography></div>
      <div><TextField id="outlined-basic" label="Username" variant="outlined" style={{width:"500px"}}/></div>
      <div><TextField id="outlined-basic" label="Password" variant="outlined" style={{width:"500px"}} /></div>
      <div>      
        <span style={{margin: '75px'}}><Button variant="text" onClick={() => handleRegister()}>Register</Button></span>
        <span style={{margin: '75px'}}><Button variant="contained" onClick={() => handleLogin()}>Login</Button></span>
      </div>
    
    </Box>
  );
}

export default Login;

