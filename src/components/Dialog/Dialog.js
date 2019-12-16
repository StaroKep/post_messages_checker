import React, { Component } from "react";
import cn from "classnames/bind";

import * as styles from "./Dialog.css";

const cx = cn.bind(styles);

class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hidden } = this.props;

    const rootClassNames = cx("root", {
      root_hidden: hidden
    });

    return <div className={rootClassNames}>Dialog</div>;
  }
}

export default Dialog;
