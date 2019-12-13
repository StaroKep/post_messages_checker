import React, { Component } from "react";

import cn from "classnames/bind";

import * as styles from "./Footer.css";

const cx = cn.bind(styles);

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx("root")}>
        <div>
          Автор:{" "}
          <a
            className={cx("link")}
            href="https://staff.yandex-team.ru/kirilleremin"
          >
            Кирилл Еремин
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
