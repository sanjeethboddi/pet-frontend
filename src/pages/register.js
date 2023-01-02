import * as React from 'react';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import {TextField, Typography, Button} from '@mui/material';
import {login, register, createProfile} from '../service/service';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  function handleRegister() {
    register(username, password).then(res => {
      if(res.status === 201){
        login(username, password).then(LoginRes => {
          if(LoginRes.status === 200){
            window.localStorage.setItem('token', LoginRes.data?.access_token);
            createProfile({uid: username, displayName: firstName + ' ' + lastName, dateOfBirth: value, address: address, petsList:[]}).then((res) => {
              // navigate('/home')
            });            
            
          } else {
            alert(LoginRes.data?.detail)
          }
        });
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

      <div><Typography variant="h2" > Register</Typography></div>
      <div><TextField id="outlined-basic" label="First Name" variant="outlined" style={{width:"500px"}} onChange={(event)=> setFirstName(event.target.value)}/></div>
      <div><TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width:"500px"}}  onChange={(event)=> setLastName(event.target.value)}/></div>
      <div><TextField id="outlined-basic" type='datetime-local'label="Date of birth" variant="outlined" style={{width:"500px"}} value={value} onChange={(event)=> handleChange(event.target.value)}/></div>
      <div><TextField id="outlined-basic" label="Address" variant="outlined" style={{width:"500px"}} onChange={(event)=> setAddress(event.target.value)}/></div>
      <div><TextField id="outlined-basic" label="Username" variant="outlined" style={{width:"500px"}} onChange={(event)=> setUsername(event.target.value)}/></div>
      <div><TextField id="outlined-basic" label="Password" variant="outlined" style={{width:"500px"}} onChange={(event)=> setPassword(event.target.value)} type="password"/></div>
      <div>      
        <span><Button variant="contained" onClick={() => handleRegister()}>Register</Button></span>
      </div>
    
    </Box>
  );
}

export default Register;

