import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {login} from '../service/service';


function Login() {
const navigate = useNavigate();
const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');

function handleRegister() {
    console.log('Register');
    navigate('/register')
  
  }

  function handleLogin() {
    window.localStorage.setItem('uid', username);

    login(username, password).then(res => {
      console.log(res);
      if(res.status === 200){
        window.localStorage.setItem('token', res.data?.access_token);
        navigate('/home')
      } else {
        alert(res.data?.detail)
      }
    });

  
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
      <div><TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event)=> setUsername(event.target.value)} style={{width:"500px"}}/></div>
      <div><TextField id="outlined-basic" label="Password" variant="outlined"  onChange={(event)=> setPassword(event.target.value)} style={{width:"500px"}} /></div>
      <div>      
        <span style={{margin: '75px'}}><Button variant="text" onClick={() => handleRegister()}>Register</Button></span>
        <span style={{margin: '75px'}}><Button variant="contained" onClick={() => handleLogin()}>Login</Button></span>
      </div>
    
    </Box>
  );
}

export default Login;

