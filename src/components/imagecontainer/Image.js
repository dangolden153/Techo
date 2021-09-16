import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
halfImage:{
    width:'50%',
    height:'auto',
},

}))
export const FullImage = (props) => {
    
    const {path, alt } = props;
    return (
        <>
         <img src={path} alt={alt} className="img-fluid"/>   
        </>
    )
}
export const HalfImage = (props) => {
    const classes = useStyles();
    const {path, alt } = props;
    return (
        <>
         <img src={path} alt={alt} className={classes.halfImage} />

        </>
    )
}

 
