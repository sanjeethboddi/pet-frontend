import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Grid, Button} from '@mui/material';
import TabView from '../util/tabview';
import {updateProfile, getProfile} from '../service/service';


function Profile() {
   const [displayName, setDisplayName] = React.useState('')
   const [id, setId] = React.useState('')
   const [dateOfBirth, setDateOfBirth] = React.useState('')
   const [address, setAddress] = React.useState('')
   const [edit, setEdit] = React.useState(false)
   const userProfile = JSON.parse(window.localStorage.getItem('myProfile'))

React.useEffect(() => {
    setDisplayName(userProfile?.displayName)
    setDateOfBirth(userProfile?.dateOfBirth)
    setId(userProfile?._id)
    setAddress(userProfile?.address)
},[])

React.useEffect(() => {
getProfile(localStorage.getItem('uid')).then(res => {
  if(res.status !== 200){
      alert("Error while fetching profile")
  } else if(res.status === 200){
    window.localStorage.setItem('myProfile', JSON.stringify(res.data))
  }
})
},[userProfile])

function handleSave() {
  updateProfile({displayName, dateOfBirth, address, petsList:[]}).then(res => {
    if(res.status === 200){
      alert("Profile updated")
    } else {
      alert("Cannot update profile at this moment")
    }
  });
}

  return (
    <Box sx={{ flexGrow: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <TabView selectedTab='3'/>
      </Grid>
      <Box  style={{ paddingLeft: '150px' }}>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled={!edit} id="outlined-basic" label="display Name" variant="outlined" style={{width:"500px"}} value={displayName} onChange={(event) =>(setDisplayName(event.target.value))}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled={!edit} id="outlined-basic" label="Date of Birth" variant="outlined" style={{width:"500px"}} value={dateOfBirth} onChange={(event) =>(setDateOfBirth(event.target.value))}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled={!edit} id="outlined-basic" label="Address" variant="outlined" style={{width:"500px"}}  value={address} onChange={(event) =>(setAddress(event.target.value))}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled id="outlined-basic" label="ID" variant="outlined" style={{width:"500px"}}  value={id} /></Grid>
     </Box>
      <Grid item md={8} style={{
        display:'flex',
        justifyContent:'end',
        paddingRight: '350px'
         
        }}>
      {(edit) && (<Button variant="contained" onClick={() =>(handleSave())}>SAVE CHANGES</Button>)}
      {(!edit) && (<Button variant="contained" onClick={() =>(setEdit(true))}>EDIT</Button>)}
      </Grid>
      
    </Grid>
    </Box>

  );
}

export default Profile;

