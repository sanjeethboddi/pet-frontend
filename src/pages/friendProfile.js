import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Grid, Button} from '@mui/material';
import TabView from '../util/tabview';
import {checkFollow, followUser, unfollowUser} from '../service/service';
import { useNavigate } from 'react-router-dom';


function FriendProfile() {
   const [displayName, setDisplayName] = React.useState('')
   const [id, setId] = React.useState('')
   const [dateOfBirth, setDateOfBirth] = React.useState('')
   const [address, setAddress] = React.useState('')
   const [isFollowing, setIsFollowing] = React.useState(false)

   const navigate = useNavigate();
   const userProfile = JSON.parse(window.localStorage.getItem('userProfile'))

React.useEffect(() => {
    setDisplayName(userProfile?.displayName)
    setDateOfBirth(userProfile?.dateOfBirth)
    setId(userProfile?._id)
    setAddress(userProfile?.address)
    checkFollow(userProfile?._id).then(res => {
        if(res.status !== 200){
            alert("Cant find user")
        } else if(res.status === 200){
            setIsFollowing(res.data)
    
        
            
        }
    })

},[])


function handleFollow() {
    followUser(id).then(res => {
        if(res.status !== 200){
            alert("Cant follow user")
        } else if(res.status === 200){
            alert("User followed")
            setIsFollowing(true)
        }

    })
}

function handleUnfollow() {
    unfollowUser(id).then(res => {
        if(res.status !== 200){
            alert("Cant unfollow user")
        } else if(res.status === 200){
            alert("User unfollowed")
            setIsFollowing(false)
        }

    })
}


  return (

    <Box sx={{ flexGrow: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <TabView selectedTab='3'/>
      </Grid>
      <Box  style={{ paddingLeft: '150px' }}>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled id="outlined-basic" label="display Name" variant="outlined" style={{width:"500px"}} value={displayName}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled id="outlined-basic" label="Date of Birth" variant="outlined" style={{width:"500px"}} value={dateOfBirth}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled id="outlined-basic" label="Address" variant="outlined" style={{width:"500px"}}  value={address}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField disabled id="outlined-basic" label="ID" variant="outlined" style={{width:"500px"}}  value={id}/></Grid>
     </Box>

     <Grid item md={8} style={{
        display:'flex',
        justifyContent:'end',
        paddingRight: '350px'
         
        }}>
     {(isFollowing) && (<Button variant="contained" onClick={() => handleUnfollow()}> UNFOLLOW</Button>)}
     {(!isFollowing) && (<Button variant="contained" onClick={() => handleFollow()}>FOLLOW </Button>)}
      </Grid>

      
    </Grid>
    </Box>

  );
}

export default FriendProfile;

