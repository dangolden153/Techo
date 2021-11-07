import React from 'react'
import  {Grid , Typography , Button , Paper} from '@material-ui/core' 
import TestNav from './TestNav' 

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({ 
   

    }));



const Test = () => {
    return (
        <Grid container >
           <TestNav/>
            <Grid item xs={12} sm={4} md={4} > 
            <Typography variant="h5" > 
            center one
            </Typography>

            </Grid>

            <Grid item xs={12} sm={4} md={4} > 
            <Typography variant="h5" > 
            center two
            </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={4} > 
            <Typography variant="h5" > 
            center three 
            </Typography>
            </Grid>
        </Grid>
    )
}

export default Test
