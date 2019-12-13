import React, { Component } from "react";

import { VerticalMenu } from "src/components/VerticalMenu";
import { AddressBar } from "src/components/AddressBar";
import { Iframe } from "src/components/IFrame";
import { Footer } from "src/components/Footer";

import {
  DEFAULT_IFRAME_SRC,
  LOCAL_IFRAME_SRC_VARIABLE
} from "src/constants/main";

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeSrc: this.getIframeSrcFromLocalStorage() || DEFAULT_IFRAME_SRC
    };

    this.setIframeSrc = this.setIframeSrc.bind(this);
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

  render() {
    const { iframeSrc } = this.state;

    const addressBarProps = {
      setIframeSrc: this.setIframeSrc,
      iframeSrc,
    };

    const verticalMenuProps = {
      iframeSrc,
    };

    return (
      <div>
        <VerticalMenu {...verticalMenuProps} />
        <AddressBar {...addressBarProps} />
        <Iframe src={iframeSrc} />
        <Footer />
      </div>
    );
  }
}

export default Root;
