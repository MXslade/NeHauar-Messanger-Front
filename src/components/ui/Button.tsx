import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props
  extends React.DOMAttributes<HTMLButtonElement>,
    React.HTMLAttributes<HTMLButtonElement> {
  icon?: IconProp;
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`text-button-main hover:text-button-main-hover focus:outline-none text-xl flex items-center justify-center ${
        props.className ? props.className : ""
      }`}
    >
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : props.children}
    </button>
  );
};
