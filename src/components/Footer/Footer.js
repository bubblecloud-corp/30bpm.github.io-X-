/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  // const aClasses = classNames({
  //   [classes.a]: true,
  //   [classes.footerWhiteFont]: whiteFont
  // });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by 30BPM
          <div claaName={classes.tmp}>
            30bpm 대표 : 정종명 | 주소 : 부산광역시 해운대구 우동 센텀동로 45 |
            사업자 등록번호 : 245-14-01481
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
