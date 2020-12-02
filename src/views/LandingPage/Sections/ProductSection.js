import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Link from "@material-ui/icons/Link";
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
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
          <h2 className={classes.title}>반려동물 미용사들을 위한<br /> IT STARTUP</h2>
          <h5 className={classes.description}>
            groomer는 반려동물 미용사들의 불편함을 해소하는 종합 솔루션입니다.<br />
            전화로 예약을 받던 기존의 방식을 줄여나가고, <br />
            미용사와 반려동물 보호자의 소통을 돕습니다 <br />
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="groomer Link"
              description="미용사와 샵들을 소개하고, 샵의 일정을 공유하며, 예약 전 주의사항을 인지시킬 수 있는 개인 페이지를 링크형태로 제공합니다."
              icon={Link}
              iconColor="custom"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="groomer Reservation"
              description="반려동물 미용사를 위한 간편 예약관리 시스템"
              icon={PermPhoneMsgIcon}
              iconColor="custom"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="groomer Flatform"
              description="파편화된 반려동물 미용사와 샵들의 정보를 모아주는 공간"
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
