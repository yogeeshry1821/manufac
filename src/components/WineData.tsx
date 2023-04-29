import React from 'react';

type Wine = {
  alcohol: number;
  malic_acid: number;
  ash: number;
  alcalinity_of_ash: number;
  magnesium: number;
  total_phenols: number;
  flavanoids: number;
  nonflavanoid_phenols: number;
  proanthocyanins: number;
  color_intensity: number;
  hue: number;
  od280_od315_of_diluted_wines: number;
  proline: number;
  cultivar: number;
};

type WineDataProps = {
  data: Wine[];
  children?: React.ReactNode;
};

const WineData: React.FC<WineDataProps> = ({ data, children }) => {
  return <>{children}</>;
};

export { WineData, Wine };