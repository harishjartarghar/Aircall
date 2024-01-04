import React from 'react';

import AircallProvider from '@/components/containers/AircallProvider';
import AircallTemplate from '@/components/templates/AircallTemplate';
import { AIRCALL_REQUEST } from '@/base/constants/apis.constants';

const App = () => {
  return (
    <AircallProvider requestParams={AIRCALL_REQUEST}>
      <AircallTemplate />
    </AircallProvider>
  );
};

export default App;
