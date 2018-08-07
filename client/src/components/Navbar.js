import React from "react";

const Navbar = props => {
  return (
    <div>
      <div className="rightSide">{props.rightSide}</div>
    </div>
  );
};

const hopsotys = <UserInfo user={user} />
<Navbar rightSide={hopsotys} />;
