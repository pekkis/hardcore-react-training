import React from 'react';
import WebFont from 'webfontloader';

class WebfontsLoader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return this.props.children;
  }

  componentWillMount() {
    const { config, callback } = this.props;
    WebFont.load({
      ...config,
      loading: () => callback('loading'),
      active: () => callback('active'),
      inactive: () => callback('inactive')
    });

  }

};

export default WebfontsLoader;
