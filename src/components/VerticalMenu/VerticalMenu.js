import React, { Component } from "react";
import cn from "classnames/bind";

import { OpenWidgetLink } from "src/components/VerticalMenu/parts/OpenWidgetLink";

import * as styles from "./VerticalMenu.css";
import { PostMessages } from "src/components/VerticalMenu/parts/PostMessages";

const cx = cn.bind(styles);

class VerticalMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { iframeSrc, dialogProps } = this.props;

    const openWidgetLinkProps = {
      link: iframeSrc
    };

    const postMessagesProps = {
      dialogProps
    };

    return (
      <div className={cx("root")}>
        <OpenWidgetLink {...openWidgetLinkProps} />
        <PostMessages {...postMessagesProps} />
      </div>
    );
  }
}

export default VerticalMenu;
