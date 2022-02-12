import { Button, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import Slider from "../../components/Slider";
import useStyles from "./styles";
import Register from "../../components/Register/Register";
import Registe from "../../components/Registe/RegisterLogin";
import appContext from "../../context/app-context";
import RegisterLogin from "../../components/Registe/RegisterLogin";

function AuthPage() {
  const { switchTab, setSwitchingTab } = useContext(appContext);

  const classes = useStyles();
  return (
    <>
      <div container className={classes.container}>
        <div className={classes.svgcenter}>
          <Slider />
        </div>
        <div className={classes.rightTab}>
          <div className={classes.loginButton}>
            <button
              onClick={() => setSwitchingTab(true)}
              className={switchTab ? classes.btnBg : classes.btn}
            >
              REGISTER{" "}
            </button>
            <button
              onClick={() => setSwitchingTab(false)}
              className={switchTab ? classes.btn : classes.btnBg}
            >
              LOGIN
            </button>
          </div>

          <div className={classes.input_container}>
            <RegisterLogin switchTab={switchTab} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
