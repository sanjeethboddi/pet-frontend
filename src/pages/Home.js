import * as React from 'react';
import TabView from '../util/tabview';
import {useNavigate} from 'react-router-dom';
import {Grid, Box} from '@mui/material';
import Postcard from '../util/postcard';
import {url, getUserFeed, getPostData, verifyUserToken} from '../service/service';

function Home() {
  // redirect to login page if not logged in
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token') 
  const uid = window.localStorage.getItem('uid')

  verifyUserToken(token).then((res) => {
    if (res.status !== 200 || res.data.username !== uid) {
      navigate('/login');
    }
  });




  const [postImages, setPostImgs] = React.useState([])
  React.useEffect(() => {  getUserFeed().then((result) => {
    
    getPostData(result.data).then((res) => {
      let postImgs = []
      res.data.map((item) => {
        let img_url = url +'/post/getPostImage?postID='+ item._id
        postImgs.push({...item, img_url: img_url})
        })
        setPostImgs(postImgs)
        console.log(postImgs)
      })
  })},[]);


    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TabView selectedTab='1'/>
        </Grid>
        <Grid item md={8}>
          {postImages.map((item) => {
             return <Postcard title={item.title} image={item.img_url} date={item.date} name={item.userID} />
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

