import ReactDOM from "react-dom";
import React, { FunctionComponent, ReactElement } from "react";

type Props = {
  children?: ReactElement;
};

const Modal: FunctionComponent<Props> = props => {
  const { children } = props;

  return ReactDOM.createPortal(
    <div
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, .5)"
      }}
    >
      <div
        css={{
          margin: "1em",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(0, 0, 0)",
          padding: "1em"
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
