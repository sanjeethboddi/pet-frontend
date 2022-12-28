import * as React from 'react';
import TabView from '../util/tabview';
import {Grid, Box} from '@mui/material';
import Postcard from '../util/postcard';


function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TabView selectedTab='1'/>
        </Grid>
        <Grid item md={8}>
        <Postcard/>
        </Grid>
        <Grid item md={8}>
        <Postcard/>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default Home;

