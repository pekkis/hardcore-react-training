import React from 'react';

const MaleInfo = props => {
  const { person } = props;
  return (
    <div>
      Intelligence: {person.intelligence}
    </div>
  );
};

export default MaleInfo;
