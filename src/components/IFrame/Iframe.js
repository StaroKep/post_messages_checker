import React from "react";

const Iframe = (props) => {
    const { src } = props;
    return (
        <iframe src={src} />
    );
};

export default Iframe;