import React from 'react';
import PostData from "./postData";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
     
  },
  media: {
    height: 350,
  },
});

export default function MediaCard({image, key}) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            key={key} 
            title="img-food"
          />
          <CardContent>
            <PostData />
          </CardContent>
        </CardActionArea>
       
      </Card>
    );
  }







