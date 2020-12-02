import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";

import Button from "components/CustomButtons/Button.js";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div id="contact-us" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
            항상 열려있습니다.. 여러분...<br />
            언제든 콜미
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className="info-title"><CallIcon />전화번호</div>
                <div className="info-content">010-6684-0078</div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div className="info-title"><MailOutlineIcon className="info-icon" />이메일</div>
                <div className="info-content">gt03051@gmail.com</div>
                <Button 
                  color="primary"
                  href="mailto:gt03051@gmail.com">이메일 전송</Button>
                
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div className="info-title"><HomeIcon />우리집</div>
              </GridItem>
              <iframe id="our-nest" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.334756489299!2d129.12824275141008!3d35.173208180219255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356892c1b7cef823%3A0x353323e15563c37d!2z7IS87YWA6riw7Iig7LC97JeF7YOA7Jq0KENFTlRBUCk!5e0!3m2!1sko!2skr!4v1606872381208!5m2!1sko!2skr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
