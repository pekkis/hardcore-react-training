import React from "react";

const ShadowedBox = props => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}

export default ShadowedBox;
