import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Grid, Typography, } from '@material-ui/core'
import useStyles from './styles'
import bluelogo from '../../assets/bluelogo.png'
import landingImg from '../../assets/intro.png'
import ilusA from '../../assets/ilus1.png'
import ilusB from '../../assets/ilus2.png'
import ilusC from '../../assets/ilus3.png'
import ilusD from '../../assets/ilus4.png'
import Timeline from '../../components/Timeline/Timeline'
import DesktopTimeline from '../../components/Timeline/DesktopTimeline'
import MobileTimeline from '../../components/Timeline/MobileTimeline'

import './landingstyles.css'
const LandingPage = () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.landingBody}>

         <Grid container className={classes.container}>
            <Container className={classes.LandingNav}>
                <Grid item xs={6} >
                    <img src={bluelogo} alt="Techsemester logo" className={classes.logo}  />
                </Grid>
                <Grid item xs={6} className={classes.btnContainer} >
                <Button component={Link} to='login' className={classes.loginBtn}>
                    Login
                </Button>
                <Button component={Link} to='register' className={classes.registerBtn}>
                    Register
                </Button>
                </Grid>
            </Container>
                <div className='sectionOne'>
                <div className='aLeft'> 
                    <Typography variant='h3' className={classes.intro}>
                    A learning community for digital talents
                    </Typography>
                </div>
                <div className='aRight'>
                    <img src={landingImg} alt='techsemester' className={classes.img} />
                 </div>


                </div>
                <div className='sectionTwo'>
                    
                We help you build a global tech career  starting from scratch

                    </div>
                <div className='sectionThree'>
                  <div className='b-left'>
                    <img src={ilusA} alt='techsemester ilustration' className='ilus-img'/>
                    <p className='ilus-text'>
                    Learn the skills needed to access local and global opportunities you desire
                    </p>
                      </div>
                  <div className='b-right'>
                  <img src={ilusB} alt='techsemester ilustration' className='ilus-img'/>
                    <p className='ilus-text'>
                    Give back to society by mentoring tech learners from your experience with ease
                    </p>
                      </div>


                    </div>
                <div className='sectionThree'>
                  <div className='b-left'>
                    <img src={ilusD} alt='techsemester ilustration' className='ilus-img'/>
                  
                      </div>
                  <div className='b-right-1'>
                    <h2 className='bold-1'>
                        Connect
                     </h2>
                    <h2 className='bold-1'>
                        Co-Learn and
                     </h2>
                    <h2 className='bold-1'>
                        Co-share
                     </h2>
                    <p className='ilus-text-1'>
                    with tech ecosystem
                    </p>
                      </div>


                    </div>
                    
                    <div className='timeline-div'>
               <DesktopTimeline />
                    </div>
         </Grid>

        </div>
    </>
    )
}

export default LandingPage
