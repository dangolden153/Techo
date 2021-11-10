import React,{useEffect, useState} from 'react'
import MobileProfile from './MobileProfile'
import DesktopProfile from './DesktopProfile'

const Profile = () => {
    const [mobile, SetMobile] = useState(false);

    
    useEffect(() => {
    if(window.innerWidth < 700) {
        SetMobile(true);
    } else {
        SetMobile(false)
    }    

        
    }, [])
    return (
        <div>
            {mobile? <MobileProfile /> : <DesktopProfile /> }
        </div>
    )
}

export default Profile
