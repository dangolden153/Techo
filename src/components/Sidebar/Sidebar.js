import React,{useContext} from 'react'
import useStyles from './styles' 
import AppContext from '../../context/app-context';
import MediaSelect from '../SelectComponent/MediaSelect'
import CheckboxSelect from '../SelectComponent/CheckboxSelect';
import CategoryCheckbox from '../SelectComponent/CategoryCheckbox';

const Sidebar = () => {
    const {openSidebar} = useContext(AppContext);

    const classes = useStyles({openSidebar});
    return (
                <>
        <div className={classes.Sidebar}>
            <div className={classes.sidebarContent}>
                <div className={classes.sidebarItem}>
             
                <CheckboxSelect />
                <hr />
                <CategoryCheckbox />
                </div>
            </div>
        </div>


        </>
    )
}

export default Sidebar
