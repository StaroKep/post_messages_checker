import React, { Component } from "react";
import cn from "classnames/bind";

import { MessagesIcon } from "src/icons";

import { PostMessagesService } from "./helpers";

import * as styles from "./PostMessages.css";

const cx = cn.bind(styles);

class PostMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postMessages: []
    };
    new PostMessagesService();
  }

  render() {
    const { dialogProps } = this.props;
    const { hidden, showDialog, hideDialog } = dialogProps;

    debugger;

    const onClick = () => {
      hidden ? showDialog() : hideDialog();
    };

    return (
      <button
        onClick={onClick}
        className={cx("root")}
        title="Посмотреть post messages"
      >
        <MessagesIcon classNaem={cx("icon")} />
      </button>
    );
  }
}

export default PostMessages;
