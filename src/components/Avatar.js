import React from 'react';
import styles from './Avatar.pcss';

const Avatar = props => {
  const { src } = props;
  return (
    <img src={src} className={styles.image} />
  );
};

Avatar.propTypes = {
  src: React.PropTypes.string.isRequired,
};

Avatar.defaultProps = {
};

export default Avatar;
