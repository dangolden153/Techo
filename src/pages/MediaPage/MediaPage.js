import React,{useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppContext from '../../context/app-context'
import {Button, Container, Grid, Typography, } from '@material-ui/core'
import Home from '../../components/Home/Home'
import Media from '../../components/Media/Media'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'



const MediaPage = () => {
    const {home, setHome} =  useContext(AppContext);
    const classes = useStyles();



    
    return (
        <>
        
        <Navbar />
        <Grid  className={classes.container} container>
            <Sidebar />
        <Grid item xs={12} md={8} className={classes.left} >
            {/* {home ? <Home /> : <Media />} */}
            <Typography varaint="h2" >
                This is the media page
            </Typography>
        </Grid>
        <Grid item xs={0} md={4} className={classes.right} >
        <Typography >
            I am the side page
        </Typography>
        </Grid>

        </Grid>



        </>
    )
}

export default MediaPage
