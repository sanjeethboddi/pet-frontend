import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import {getProfile} from '../service/service';

export default function TabView({selectedTab}) {
  const [value, setValue] = React.useState(selectedTab);
  const [friend, setFriend] = React.useState('');
  const navigate = useNavigate();
  
  function handleSearch() {
    
    getProfile(friend).then(res => {
        if(res.status !== 200){
            alert("Cant find user")
        } else if(res.status === 200){
          window.localStorage.setItem('userProfile', JSON.stringify(res.data))
          navigate('/profile/'+ friend)
            
        }
    })
}

  const handleChange = (newValue) => {
    setValue(newValue);
    if(newValue === '1'){
      navigate('/')
    }else if(newValue === '2'){
        navigate('/create_post')
    }else if(newValue === '3'){
      getProfile(localStorage.getItem('uid')).then(res => {
        if(res.status !== 200){
            alert("Error while fetching profile")
        } else if(res.status === 200){
          window.localStorage.setItem('myProfile', JSON.stringify(res.data))
          navigate('/userprofile')  
        }
    })
    }else if(newValue === '4'){
      navigate('/friends')
  }   
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')  
    };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider' }}>
          <TabList >
            <Tab label="WELCOME"  />
            <Tab label="HOME" value="1"  onClick={() =>handleChange("1")}/>
            <Tab label="NEW POST" value="2"  onClick={() =>handleChange("2")}/>
            <Tab label="PROFILE" value="3" onClick={() =>handleChange("3")} />
            <Tab label="FRIENDS" value="4" onClick={() =>handleChange("4")} />
            <Tab label="LOGOUT" onClick={() =>handleLogout()} />
          </TabList>
        </Box>
        <TabPanel value="1"><Typography variant="h2" > Home</Typography></TabPanel>
        <TabPanel value="2"><Typography variant="h2" > New Post</Typography></TabPanel>
        <TabPanel value="3"><Typography variant="h2" > Profile</Typography></TabPanel>
        <TabPanel value="4">
          <Typography variant="h2" > Friends</Typography> 
          <TextField id="outlined-basic" label="Search a friend" variant="outlined" style={{width:"500px"}}  onChange={(event) => setFriend(event.target.value) }/>
          <span style={{marginLeft:'20px'}}><Button variant="contained" disabled={friend === ""} style={{height:"55px"}} onClick={()=>handleSearch()}>SEARCH</Button></span></TabPanel>
      </TabContext>
    </Box>
  );
}
