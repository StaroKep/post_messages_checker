import React, { Component } from "react";
import cn from "classnames/bind";

import { VerticalMenu } from "src/components/VerticalMenu";
import { AddressBar } from "src/components/AddressBar";
import { Iframe } from "src/components/IFrame";
import { Dialog } from "src/components/Dialog";
import { Footer } from "src/components/Footer";

import {
  DEFAULT_IFRAME_SRC,
  LOCAL_IFRAME_SRC_VARIABLE
} from "src/constants/main";

import * as styles from "./Root.css";

const cx = cn.bind(styles);

class Root extends Component {
  constructor(props) {
    super(props);

    this.setIframeSrc = this.setIframeSrc.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);

    this.state = {
      iframeSrc: this.getIframeSrcFromLocalStorage() || DEFAULT_IFRAME_SRC,
      dialogProps: {
        hidden: true,
        showDialog: this.showDialog,
        hideDialog: this.hideDialog
      }
    };
  }

  getIframeSrcFromLocalStorage() {
    const savedIframeSrc = localStorage.getItem(LOCAL_IFRAME_SRC_VARIABLE);

    if (savedIframeSrc === null) {
      return undefined;
    }

    return savedIframeSrc;
  }

  setIframeSrc(src) {
    this.setState({
      iframeSrc: src
    });
  }

  showDialog() {
    const { dialogProps } = this.state;

    this.setState({
      dialogProps: {
        ...dialogProps,
        hidden: false
      }
    });
  }

  hideDialog() {
    const { dialogProps } = this.state;

    this.setState({
      dialogProps: {
        ...dialogProps,
        hidden: true
      }
    });
  }

  render() {
    const { iframeSrc, dialogProps } = this.state;

    const addressBarProps = {
      setIframeSrc: this.setIframeSrc,
      iframeSrc
    };

    const verticalMenuProps = {
      iframeSrc,
      dialogProps
    };

    return (
      <div className={cx("root")}>
        <VerticalMenu {...verticalMenuProps} />
        <AddressBar {...addressBarProps} />
        <div className={cx("content")}>
          <Iframe src={iframeSrc} />
          <Dialog {...dialogProps} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Root;
