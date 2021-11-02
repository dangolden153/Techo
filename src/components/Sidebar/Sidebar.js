import React,{useContext} from 'react'
import useStyles from './styles' 
import AppContext from '../../context/app-context';
const Sidebar = () => {
    const {openSidebar} = useContext(AppContext);

    const classes = useStyles({openSidebar});
    return (
                <>
        <div className={classes.Sidebar}>
            <div className={classes.sidebarContent}>
                <div className={classes.sidebarItem}>
                I am the side bar content

                </div>
            </div>
        </div>


        </>
    )
}

export default Sidebar
