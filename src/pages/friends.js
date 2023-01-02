import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, TextField, Button, Input, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TabView from '../util/tabview';
import {followUser, getFollowersList, getFollowingList} from '../service/service';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';


function Friends() {
const navigate = useNavigate();
const [friend, setFriend] = React.useState('');
const [friendsList, setFriendsList] = React.useState([]);
const [filterSelected, setFilterSelected] = React.useState("followers");
const [followersLabel, setFollowersLabel] = React.useState("followers(0)");
const [followingLabel, setFollowingLabel] = React.useState("following(0)");
const [followersList, setFollowersList] = React.useState([]);
const [followingList, setFollowingList] = React.useState([]);

React.useEffect(() => {
    getFollowers();
    getFollowing();
},[]);

React.useEffect(() => {
setFriendsList(followersList)
},[followersList]);


function getFollowers() {
    getFollowersList().then(res => {
        if(res.status === 200){
            setFollowersList(res.data)
            setFollowersLabel('Followers(' +res?.data?.length+ ')')
            console.log(res.data)
        }

    })
}

function getFollowing() {
    getFollowingList().then(res => {
        if(res.status === 200){
            setFollowingList(res.data)
            setFollowingLabel('Following(' +res?.data?.length+ ')')
            console.log(res.data)
        }


    })
}

function handleChip(selection) {
    if(selection === "1"){
        setFriendsList(followersList.concat(followingList))
    } else if(selection === "2"){
        setFriendsList(followersList)
        setFilterSelected("followers")
    } else if(selection === "3"){
        setFriendsList(followingList)
        setFilterSelected("following")
    }

}
    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TabView selectedTab='4'/>
        <br/>
        <Stack direction="row" spacing={1}>
        <span style={{marginLeft: "20px"}}><Typography variant="h6" > Filter: </Typography></span>
        {(filterSelected === "followers") && (<Chip label={followersLabel} color="primary" variant="outlined" onClick={() =>handleChip("2")} />) } 
        {(filterSelected === "followers") && (<Chip label={followingLabel} variant="outlined" onClick={() =>handleChip("3")} />)} 
        {(filterSelected === "following") && (<Chip label={followersLabel}  variant="outlined" onClick={() =>handleChip("2")} />)}
        {(filterSelected === "following") && (<Chip label={followingLabel} color="primary" variant="outlined" onClick={() =>handleChip("3")} />)}
        

        </Stack>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {friendsList.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Friends;

