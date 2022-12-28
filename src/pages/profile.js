import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Grid, Button} from '@mui/material';
import TabView from '../util/tabview';


function Profile() {
  return (

    <Box sx={{ flexGrow: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <TabView selectedTab='3'/>
      </Grid>
      <Box  style={{ paddingLeft: '150px' }}>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField id="outlined-basic" label="First Name" variant="outlined" style={{width:"500px"}} value={"Sanjeeth"}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width:"500px"}} value={"Boddinagula"}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField id="outlined-basic" label="Date of Birth" variant="outlined" style={{width:"500px"}} value={"Jul 11 1998"}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField id="outlined-basic" label="University" variant="outlined" style={{width:"500px"}}  value={"University of Texas, San Antonio"}/></Grid>
      <Grid item md={8} style={{paddingBottom: '10px' }}><TextField id="outlined-basic" label="Major" variant="outlined" style={{width:"500px"}}  value={"Computer Science"}/></Grid>
     </Box>
      <Grid item md={8} style={{
        display:'flex',
        justifyContent:'end',
        paddingRight: '350px'
         
        }}>
      <Button variant="contained">SAVE CHANGES</Button>
      </Grid>
      
    </Grid>
    </Box>

  );
}

export default Profile;

