import React, { Component } from "react";

import cn from "classnames/bind";

import * as styles from "./VerticalMenu.css";

const cx = cn.bind(styles);

class VerticalMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={cx("root")}></div>;
  }
}

export default VerticalMenu;
