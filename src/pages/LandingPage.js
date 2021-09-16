import React from 'react'
import LandingHeader from '../components/Headers/LandingHeader'
import { Grid,makeStyles,Typography } from '@material-ui/core'
import Control from '../components/Control';
import one from '../assets/one.png' ;
import two from '../assets/two.png' ;
import three from '../assets/three.png' ;
import './Landing.css'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import frame1 from '../assets/frame1.png'
import frame2 from '../assets/fame2.png'
import frame3 from '../assets/frame3.png'
import frame4 from '../assets/frame4.png'
import frame5 from '../assets/frame5.png'





const useStyles = makeStyles((theme) => ({
illustration:{
display:'block',
marginTop:theme.spacing(3),
[theme.breakpoints.down('sm')]: {
    display:'none',
}

},
row:{
    marginTop: theme.spacing(4),
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gridGap: theme.spacing(3),
    padding:'2rem',
    [theme.breakpoints.down('sm')] : {
        gridTemplateColumns:'1fr',
        gridGap:theme.spacing(3),
        padding:'1rem'

    }
},
textCol:{
    padding:'2rem 3rem',
    paddingLeft:'2rem',
    [theme.breakpoints.down('sm')]: {
        padding:'0',
        paddingLeft:'0rem',
    }

},
imgCol:{
width:'100%',
placeItems:'center',
display:'grid',
padding:'0 2rem',
[theme.breakpoints.down('sm')]:{
    padding:'0rem',

}
},
imgIlus:{
    width:'100%',
    height:'auto'
}



}
));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <>
        <LandingHeader />

       <div className="container special-margin ">
       <div className="row">
       <div className="col-md-4 img-align illustration-block">
       <Control.FullImage alt="ilustration" path={two} />
        </div>
       <div className="col-md-4 img-align ">
       <Control.FullImage alt="ilustration" path={three} />
        </div>
       <div className="col-md-4 img-align illustration-block">
       <Control.FullImage alt="ilustration" path={one} />
        </div>
        <div className="grid-center mt-3">
        <div className="landing-text-center width-70-center" >
            <h3 className="text-center brand-color">
                Welcome to Techsemester
            </h3>
            <h3 className="text-center ">
            Connecting your tech questions with the right answers
            </h3>
            <small className="text-center">we are here to help your create a learning booth for all you tech questions and answers</small>
            <Link to="./login" className=" btn btn-link mt-3">
                Get Started
            </Link>
        </div>
        </div>
        </div>
       </div>
       <section className="container" >
       <div className="container ">
       <div className="row">
       <div className="col-md-4 img-align">
       <Control.Card alt="ilustration"  
       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque." height="160" imgPath={frame1}
       />
        </div>
       <div className="col-md-4 img-align">
       <Control.Card alt="ilustration"  
       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque." height="160" imgPath={frame2}
       />
        </div>
       <div className="col-md-4 img-align">
       <Control.Card alt="ilustration"  
       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque." height="160" imgPath={frame3}
       />
        </div>
        </div>
        </div>
       </section>
       {/* ############$#$#$#$#$#$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
       <section className="mb-3">
        <div className="container px-4">
        <div className={classes.row}>
        <div className={classes.imgCol}>
            <img src={frame4} alt="normal" className={classes.imgIlus} />
            </div>    
            <div className={classes.textCol}>
            <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque.
            </p>
            <Link to="./login" className=" btn btn-link mt-3">
                Get Started
            </Link>

            </div>  
      </div>         
        </div>
       </section>
       <section>
        <div className="container px-4">
        <div className={classes.row}>
            <div className={classes.textCol}>
            <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laoreet ut posuere auctor pellentesque. Cursus viverra massa scelerisque.
            </p>
            <Link to="./login" className=" btn btn-link mt-3">
                Get Started
            </Link>

            </div>  
        <div className={classes.imgCol}>
            <img src={frame5} alt="normal" className={classes.imgIlus} />
            </div>    
      </div>         
        </div>
       </section>
        
        </>
    )
}

export default LandingPage
