import React from 'react'
import {Paper, Typography, Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
    container: {
        width: '95%',
        margin: 'auto',

    },

    root: {
        
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        padding: '1rem 1.5rem',
        backgroundColor: '#fff',
        borderRadius: '10px',
        
    },
    sectionOne: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
    
        backgroundColor: '#fff',

    },
    avatar: {
        width: '50px',
        height: '50px',
        margin: '1rem',
        [theme.breakpoints.down('sm')]:{
            width:'45px',
            height:'45px',
        },

    },
    profileList: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        
    },
    sectionTwo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',

    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        width: 'inherit',
        fontSize: '0.9rem',

    },
    value: {
        color: '#100e86',
        fontWeight: 'bold'
    },
    link: {
        textDecoration: 'none',
        color: '#100e86',
        fontWeight: 'bold',
        marginTop: '1rem',

        '&:hover': {
            textDecoration: 'none',

            color: '#100e86',
            fontWeight: 'bold',
        },
    },
        name: {
            color: '#474747',
            fontSize: '1.2rem',
        },
        email: {
            color: '#474747',
            fontSize: '12px',
        },
        listText: {
            color: '#474747',
            fontSize: '1.1rem',
        },


}))


const ProfileSummary = () => {
    const classes = useStyles()
    const data = localStorage.getItem('user');
    const {userEmail,imageUrl,name,} = JSON.parse(data);
    return (
        <Paper className={classes.container}>
            <div className={classes.root}>
                <div className={classes.sectionOne}>

                    <Avatar className={classes.avatar} src={imageUrl}/>
                    <Typography variant="h5" component="h3" className={classes.name}>
                        {name}
                    </Typography>
                    <Typography component="p" className={classes.email}>
                        {userEmail}
                    </Typography>

                    </div>
                    <hr/>
                    <div className={classes.sectionTwo}>
                    <ul className={classes.profileList}>
                        <li className={classes.listItem}>
                            <Typography variant="p" component="h6" className={classes.listText} >
                                Followers
                            </Typography>
                            <Typography component="p" className={classes.value}>
                                0
                            </Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="p" component="h6" className={classes.listText}>
                                Following
                            </Typography>
                            <Typography component="p" className={classes.value}>
                                0
                            </Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="p" component="h6" className={classes.listText}>
                                Upvotes
                            </Typography>

                            <Typography component="p" className={classes.value}>
                                0   
                            </Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="p" component="h6" className={classes.listText}>
                                Downvotes
                            </Typography>

                            <Typography component="p" className={classes.value}>
                                0   
                            </Typography>
                        </li>
                      
                    </ul>
                    </div>
                    <div className={classes.sectionThree}>
                        <Link to="/profile" className={classes.link}>
                            View profile
                            </Link>
                            </div>                                



                </div>
        </Paper>
    )
}

export default ProfileSummary
