import React from "react";

class Legacy extends React.PureComponent {
  state = {
    some: "thing"
  };

  render() {
    const { prop1, prop2, prop3 } = this.props;
    const { some } = this.state;

    return "something";
  }
}

export default Legacy;
