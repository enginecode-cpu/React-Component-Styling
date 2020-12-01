import React from "react";
import style from "./CSSModule.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(style) // 미리 style에서 클래스를 받아 오도록 설정

export default function CSSModule() {
  console.log(style);
  return (
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
}
