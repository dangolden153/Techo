import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

const LandingPage = () => {
    return (
        <>
           <Button component={Link} to='register' variant='outlined' color='primary'>
            Register
               </Button>
           <Button component={Link} to='login' variant='outlined' color='secondary'>
            Login
               </Button>

        </>
    )
}

export default LandingPage
