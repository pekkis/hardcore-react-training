import React from 'react';
import { Icon } from 'react-fa';
import styles from './Loading.pcss';

import logo from '../assets/trollo.png';

const Loading = () => {
  return (<div className={styles.root}>
      <img src={logo} />
    </div>
  );
};

export default Loading;
