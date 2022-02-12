import React, { useEffect, useState } from "react";
import MobileProfile from "./MobileProfile";
import DesktopProfile from "./DesktopProfile";
import { useDispatch } from "react-redux";
import { getUserEducation } from "../../reducers/actions/profiles";

const Profile = () => {
  const [mobile, SetMobile] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    if (window.innerWidth < 700) {
      SetMobile(true);
    } else {
      SetMobile(false);
    }
  }, []);

 

  return <div>{mobile ? <MobileProfile /> : <DesktopProfile />}</div>;
};

export default Profile;
