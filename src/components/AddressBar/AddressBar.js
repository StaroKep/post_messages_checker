import React, { Component } from "react";
import cn from "classnames/bind";

import { LOCAL_IFRAME_SRC_VARIABLE } from "src/constants/main";

import * as styles from "./AddressBar.css";

const cx = cn.bind(styles);

class AddressBar extends Component {
  constructor(props) {
    super(props);

    const { iframeSrc = "", setIframeSrc = () => {} } = props;

    this.state = {
      setIframeSrc,
      address: iframeSrc
    };

    localStorage.setItem(LOCAL_IFRAME_SRC_VARIABLE, iframeSrc);

    this.updateAddress = this.updateAddress.bind(this);
    this.setIframeSrc = this.setIframeSrc.bind(this);
    this.inputKeyPressHandler = this.inputKeyPressHandler.bind(this);
    this.updateLocalIframeSrcVariable = this.updateLocalIframeSrcVariable.bind(
      this
    );
  }

  updateAddress(e) {
    const address = e.target.value;

    this.setState({
      address
    });
  }

  setIframeSrc() {
    const { address } = this.state;

    this.updateLocalIframeSrcVariable();
    this.state.setIframeSrc(address);
  }

  inputKeyPressHandler(e) {
    if (e.key !== "Enter") return;

    this.setIframeSrc();
  }

  updateLocalIframeSrcVariable() {
    const { address } = this.state;
    localStorage.setItem(LOCAL_IFRAME_SRC_VARIABLE, address);
  }

  render() {
    return (
      <div className={cx("root")}>
        <span className={cx("caption")}>Address</span>
        <input
          onKeyPress={this.inputKeyPressHandler}
          onInput={this.updateAddress}
          className={cx("input")}
          value={this.state.address}
          type="text"
        />
        <button onClick={this.setIframeSrc} className={cx("submit")}>
          Submit
        </button>
      </div>
    );
  }
}

export default AddressBar;
