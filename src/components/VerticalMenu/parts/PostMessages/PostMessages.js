import React, { Component } from "react";
import cn from "classnames/bind";

import {MessagesIcon} from "src/icons";

import {PostMessagesService} from "./helpers";

import * as styles from "./PostMessages.css";

const cx = cn.bind(styles);

class PostMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postMessages: [],
    };
    new PostMessagesService();
  }

  render() {
    return <div className={cx("root")} title="Посмотреть post messages">
      <MessagesIcon classNaem={cx('icon')}/>
    </div>;
  }
}

export default PostMessages;
