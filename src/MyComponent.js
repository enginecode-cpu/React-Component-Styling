import React from "react";
import classNames from "classnames";

export default function MyComponent({ hightlighted, theme }) {
  return (
    <div className={classNames("MyComponent", { hightlighted }, theme)}>
      Hello
    </div>
  );
}
