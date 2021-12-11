import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';


import useStyles from './styles'

const chipValues = [
    {
        name:'Technology',
        color:'primary',
        
    },
    {
        name:'Education',
        color:'primary',

    },
    {
        name:'Music',
        color:'primary',

    },
    {
        name:'Health',
        color:'info',

    },
    {
        name:'Sport',
        color:'info',

    },
    {
        name:'Others',
        color:'info',

    },

]

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            How to start a career in Frontend Development 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            by Ayeni Daniel
          </Typography>
          <div className={classes.chip}>
            {chipValues.map((item,index) => {
                return (
                    <Chip 
                    label={item.name}
                    color={item.color}
                    className={classes.chipItem}
                      clickable  
                    key={index}
                    />
                )
            })}
          </div>
          <Typography variant="body1"  component="p" >
          the chip will not be clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1635674367453-924e9a6e7517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
   
    </Card>
  );
}
