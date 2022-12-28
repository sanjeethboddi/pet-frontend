import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function TabView({selectedTab}) {
  const [value, setValue] = React.useState(selectedTab);
  const navigate = useNavigate();

  const handleChange = (newValue) => {
    setValue(newValue);
    if(newValue === '1'){
      navigate('/home')
    }else if(newValue === '2'){
        navigate('/post')
    }else if(newValue === '3'){
        navigate('/profile')
    }   
    };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider' }}>
          <TabList >
            <Tab label="HOME" value="1"  onClick={() =>handleChange("1")}/>
            <Tab label="NEW POST" value="2"  onClick={() =>handleChange("2")}/>
            <Tab label="Profile" value="3" onClick={() =>handleChange("3")} />
          </TabList>
        </Box>
        <TabPanel value="1"><Typography variant="h2" > Home</Typography></TabPanel>
        <TabPanel value="2"><Typography variant="h2" > New Post</Typography></TabPanel>
        <TabPanel value="3"><Typography variant="h2" > Profile</Typography></TabPanel>
      </TabContext>
    </Box>
  );
}
