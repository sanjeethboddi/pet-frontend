import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TabView from '../util/tabview';


function CreatePost() {
const navigate = useNavigate();

function handlePost() {
    console.log('Register');
    navigate('/register')
  
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TabView selectedTab='2'/>
        </Grid>
        <Grid item md={8} style={{
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '150px'

        }}>
        <TextField id="outlined-basic" variant="outlined" style={{width:"500px"}} multiline rows={8} />
        </Grid>
        <Grid item md={8} style={{
                        display: 'flex',
                        justifyContent: 'end',
                        paddingRight: '180px'

        }}>
        <Button variant="contained" onClick={() => handlePost()}>Register</Button>   
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default CreatePost;

