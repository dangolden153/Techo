import React,{useEffect} from 'react'
import error from '../../assets/error.svg'
import useStyles from './styles'
import {Typography, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Error = () => {
    useEffect(() => {
        window.scroll(0,0)
}, [])
const classes = useStyles();

    return (
        <>
          <div className={classes.root} >
        <Typography className={classes.errorText} variant="h3">
            Hey looks like this page doesnot exist !!!
            </Typography>
            <Button component={Link} to="/home" className={classes.errorBtn}>
            Home 
               </Button> 
        <img src={error} alt="error" className={classes.errorImg} />
        </div>  
        </>
    )
}

export default Error
