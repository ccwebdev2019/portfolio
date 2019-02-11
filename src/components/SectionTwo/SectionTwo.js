import React from "react";
import { STwoNonMobile } from "./NonMobile/STwoNonMobile";
import { STwoMobile } from "./Mobile/STwoMobile";
import { isMobile } from "react-device-detect";

class SectionTwo extends React.Component {
  render() {
    if (isMobile) {
      return <STwoMobile />;
    }
    return <STwoNonMobile />;
  }
}

export default SectionTwo;
