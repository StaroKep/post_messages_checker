import React, {Component} from "react";

import {Iframe} from "src/components/IFrame";
import {AddressBar} from "src/components/AddressBar";

import {DEFAULT_IFRAME_SRC, LOCAL_IFRAME_SRC_VARIABLE} from "src/constants/main";

class Root extends Component {
    constructor(props){
        super(props);

        this.state = {
            iframeSrc: this.getIframeSrcFromLocalStorage() || DEFAULT_IFRAME_SRC,
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
        debugger;
        this.setState({
            iframeSrc: src,
        })
    };

    render() {
        const addressBarProps = {
            setIframeSrc: this.setIframeSrc,
            iframeSrc: this.state.iframeSrc,
        };

        return (
            <div>
                <AddressBar {...addressBarProps} />
                <Iframe src={this.state.iframeSrc} />
            </div>
        );
    }
}

export default Root;