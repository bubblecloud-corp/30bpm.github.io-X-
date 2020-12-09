import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Link from "@material-ui/icons/Link";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            반려동물을 위한
            <br /> IT solution
          </h2>
          <h5 className={classes.description}>
            groomer는 반려동물의 고충을 듣고 해결하는 종합 솔루션입니다
            <br />
            기존에 답답하던 플랫폼과 소통에서 벗어나 <br />
            반려동물과 보호자 사이의 관계증진을 돕습니다.
            <br />
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="groomer Link"
              description="우리집 반려동물의 정보를 확인 할수 있는 링크를 제공합니다."
              icon={Link}
              iconColor="custom"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="groomer call"
              description="우리집 반려동물의 증상을 전화를 통해 즉각적으로 상담받을 수 있습니다."
              icon={PermPhoneMsgIcon}
              iconColor="custom"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="groomer Flatform"
              description="파편화된 반려동물의 정보와 소식을 모아서 보여주는 창구를 제공합니다."
              icon={AccessibilityNewIcon}
              iconColor="custom"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
