// This is the home page i have set it up including it routing also so you can build on it here 
// You can use the JSS stylying or any one you want but every file must be inside the folder

import React,{useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppContext from '../../context/app-context'
import {Button, Container, Grid, Typography, } from '@material-ui/core'
// import Home from '../../components/Home/Home'
// import Media from '../../components/Media/Media'
import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'



const Homepage = () => {
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
                This is the Home page
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

export default Homepage
