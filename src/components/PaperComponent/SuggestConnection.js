import React,{useState} from 'react'
import { Avatar, Paper,Typography,Button } from '@material-ui/core';
import useStyles from './styles';
const people = [
    {name:'Arinze James',
      role:'UI/UX',
      img_path:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272137/profile2_aqodkv.jpg',  

    },
    {name:'John Adeyemi',
      role:'Backend Dev',
      img_path:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272137/test1_l3qj0x.jpg',  

    },
    {name:'Ayomide Samson',
      role:'Frontend Dev',
      img_path:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272112/client1-1_shquht.png',  

    },
]

const SuggestConnection = () => {
    const classes = useStyles();
    const [data, setData ] = useState(false);
    const [connected, setConnected] = useState('connect');
    const handleConnect = () => {
        setConnected('connected')
    }

    return (
        <Paper className={classes.sRoot}>
            <div className={classes.sContainer}>
             <Typography variant="body1" className={classes.hTitle}>
                 People you may know
             </Typography>
                <div className={classes.connectContainer}>
                {people.map((item, index) => {
                    return (
                        <div className={classes.cItem}>
                            <Avatar src={item.img_path} className={classes.sImg} />

                            <div className={classes.cLeft}>
                            <Typography variant="h6" className={classes.cName}>
                                {item.name}
                            </Typography>
                            <Typography variant="body1" className={classes.cRole}>
                                {item.role}
                            </Typography>
                                <Button onClick={handleConnect} className={classes.connectBtn} >
                                    {connected}
                                </Button>
                               </div> 
                         </div>
                    )
                })}
               </div> 

                <Button className={classes.moreBtn}>
                    More
                </Button>

                </div>
            
        </Paper>
    )
}

export default SuggestConnection
