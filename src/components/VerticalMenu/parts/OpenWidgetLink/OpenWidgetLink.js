import React, { Component } from "react";
import cn from "classnames/bind";

import { ShareIcon } from "src/icons";

import * as styles from "./OpenWidgetLink.css";

const cx = cn.bind(styles);

class OpenWidgetLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { link } = this.props;

    return (
      <div className={cx("root")}>
        <a
          className={cx("link")}
          target="_blank"
          href={link}
          title="Открыть виджет в новом окне"
        >
          <ShareIcon className={cx("icon")} />
        </a>
      </div>
    );
  }
}

export default OpenWidgetLink;
