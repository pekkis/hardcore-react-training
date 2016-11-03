import React from 'react';
import styles from './Example.pcss';

const Example = props => {
  const { example, setExample } = props;
  return (
    <div className={styles.root}>
      Lipaiseppa {example}!
    </div>
  );
};

Example.propTypes = {
  example: React.PropTypes.string.isRequired,
  setExample: React.PropTypes.func.isRequired,
};

Example.defaultProps = {
  example: 'default example',
};

export default Example;
