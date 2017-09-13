import React from 'react';

const FemaleInfo = props => {
  const { person } = props;
  return (
    <div>
      Beauty: {person.beauty}
    </div>
  );
};

export default FemaleInfo;
