import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


// members
import TAEHOON from "assets/img/30bpm/member/taehoon.jpg";
import CHIHUN from "assets/img/30bpm/member/chihunjang.png";
import ZZINHO from "assets/img/30bpm/member/zzinho.png";
import JONGMYEONG from "assets/img/30bpm/member/jongmyeong.jpg";
import MINJUNG from "assets/img/30bpm/member/minjung.jpg";
import NAUEN from "assets/img/30bpm/member/nauen.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>OUR TEAM</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={TAEHOON} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                김태훈
                <br />
                <small className={classes.smallTitle}>CEO, fullstack developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  영어로 쏼라쏼라해야 멋있지만<br />
                  일단 한국어
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/tedhoon"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://instagram.com/tedhoon"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={CHIHUN} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                장치훈
                <br />
                <small className={classes.smallTitle}>CTO, frontend developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  쏼라쏼라<br />
                  쏼라
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://runchi.dev"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-blogger"} />
                  {/* <i className="fas fa-blog" /> */}
                
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/chihun-jang"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-github"} />
                  </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/%EC%B9%98%ED%9B%88-%EC%9E%A5-ab624b1b0/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={JONGMYEONG} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                정종명
                <br />
                <small className={classes.smallTitle}>COO, project mananger</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  종명쿤<br />
                  쏼라쏼라
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://instagram/jm_benjamin"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/jong-myeong"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={MINJUNG} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                강민정
                <br />
                <small className={classes.smallTitle}>CMO, performance marketer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  민정<br />
                  쏼라쏼라
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://instagram.com/m_0820_j"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ZZINHO} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                정진호
                <br />
                <small className={classes.smallTitle}>CIO, backend developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  정진호<br />
                  쏼라쏼라
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://zzzinho.tistory.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-blogger"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/zzzinho"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/zzzinho/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={NAUEN} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                이나은
                <br />
                <small className={classes.smallTitle}>UI/UX designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  나은<br />
                  쏼라쏼라
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/bxtterlii/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
