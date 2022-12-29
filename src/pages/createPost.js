import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, TextField, Button, Input} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TabView from '../util/tabview';
import {createPost} from '../service/service';


function CreatePost() {
const navigate = useNavigate();
const [isFileUploaded, setIsFileUploaded] = React.useState(false);
const [title, setTitle] = React.useState('');
const [content, setContent] = React.useState('');

function handlePost() {
let data = { 
  title: title,
  image: content,
 }

createPost(data).then(res => {
  if( res.status !== 200){
   alert(res.data?.error)
  }
})


  
  }

  function handleUpload() {
    setIsFileUploaded(true);  
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
        <TextField id="outlined-basic" variant="outlined" style={{width:"500px"}} label='Title' onChange={(event) =>setTitle(event.target.value)}/>
        </Grid>
        <Grid item md={8} style={{
                        display: 'flex',
                        justifyContent: 'end',
                        paddingRight: '180px'
        }}>
         {!isFileUploaded ? <Button variant="contained" onClick={() => handleUpload()}>UPLOAD</Button> : <input type='file' name='file' onChange={({target}) => setContent(target.files[0])}/> }
        <Button variant="contained" onClick={() => handlePost()}>POST</Button>   
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default CreatePost;

