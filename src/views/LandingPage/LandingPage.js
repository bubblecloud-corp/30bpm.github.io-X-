import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import GridItemTed from "components/Grid/GridItemTed.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

// import OURDOG from "../../assets/img/30bpm/bs-dog-single.png";
import OURDOG from "../../assets/img/30bpm/petstylist-dog-thin.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const scrollRef = React.useRef();
  const classes = useStyles();
  const { ...rest } = props;
  const downScroll = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="groomer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter>
        <div className={classes.container}>
          <GridContainer>
            <GridItemTed xs={12} sm={12} md={6}>
              <h1 className={classes.title}>groomer</h1>
              <h4>
                반려동물과 함께하는 세상,
                <br />
              </h4>
              <br />
              <Button
                color="custom"
                size="lg"
                // target="_blank"
                rel="noopener noreferrer"
                onClick={downScroll}
              >
                {/* <i className="fas fa-play" /> */}
                CONTACT US ←
              </Button>
            </GridItemTed>

            <img className="our-dog-img" src={OURDOG} />
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
          <div ref={scrollRef}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
