import React from 'react';
import styles from './Empty.pcss';

const Empty = props => {
  const { empty } = props;
  return (
    <div className={styles.root}>
    </div>
  );
};

Empty.propTypes = {
};

Empty.defaultProps = {
};

export default Empty;
