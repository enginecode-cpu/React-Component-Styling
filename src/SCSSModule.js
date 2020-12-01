import React from "react";
import styles from "./SCSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SCSSModule() {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
}
