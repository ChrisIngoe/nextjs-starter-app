import React from 'react';

import HomePage from './HomePage';

function HomeContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <HomePage {...props} />;
}

export default HomeContainer;
