import React from 'react';
import styles from './Loading.pcss';
import Icon from 'react-fa';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Icon name="spinner" spin />
    </div>
  );
};

export default Loading;
