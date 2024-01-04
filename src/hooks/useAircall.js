import { useContext } from 'react';

import AircallContext from '@/contexts/AircallContext';

const useAircallMetadata = () => useContext(AircallContext);

const useAircall = () => {
  const { data } = useAircallMetadata();
  return data;
};

export { useAircallMetadata };
export default useAircall;
