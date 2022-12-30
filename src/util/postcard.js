import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blueGrey } from '@mui/material/colors';
import CardMedia from "@mui/material/CardMedia";

export default function Postcard({title, image, name, date}) {
  console.log({title, image, name, date})
  return (
    <div style={{paddingLeft: '500px'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
            {!!name ? name[0].toUpperCase() : "User"}
          </Avatar>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
      {title}
        </Typography>
      </CardContent>
    </Card>
    <br/>
    <br/>
    </div>
    
    
  );
}
