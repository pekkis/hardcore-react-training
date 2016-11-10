import React from 'react';
import styles from './Button.pcss';
import cx from 'classnames';

const Button = props => {
  const { children, block, ...rest } = props;

  const classes = cx(
    styles.button, {
      [styles.block]: block,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  block: false,
};

Button.propTypes = {
  block: React.PropTypes.bool.isRequired,
};

export default Button;
