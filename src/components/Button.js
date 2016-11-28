import React from 'react';
import styles from './Button.pcss';

const Button = props => {
  const { children, ...rest } = props;
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
};

Button.defaultProps = {
};

export default Button;
