import React from "react";
import cn from "classnames/bind";

import { VIEWPORTS, VIEWPORT_TYPES } from "src/constants/main";

import * as styles from "./Iframe.css";

const cx = cn.bind(styles);

const Iframe = props => {
  const { src, viewportName = VIEWPORT_TYPES.DESKTOP } = props;
  const { width, height } = VIEWPORTS[viewportName];

  const className = cx("iframe");

  const iframeProps = {
    src,
    width,
    height,
    className
  };

  return <iframe {...iframeProps} />;
};

export default Iframe;
