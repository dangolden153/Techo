import React from 'react'
import { Paper, Typography,Chip } from '@material-ui/core';
import icon from '../../assets/tagicon.png' ;
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

const TagsPaper = () => {
const classes = useStyles();
    return (
        <>
          <Paper className={classes.container}>
              <div className={classes.iconsplit}>
            < img src={icon} alt="rice" className={classes.tagImg}  />
            <Typography variant="h2" className={classes.tag}  >
            Popular Tags
            </Typography>
            </div>
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
          <Typography variant="body1" className={classes.discover}>
              Discover more... 
          </Typography>
        </Paper>
        </>
    )
}

export default TagsPaper
