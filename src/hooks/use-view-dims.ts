import { useState } from 'react';
import { LayoutRectangle } from 'react-native';

export const useViewDims = () => {
  const [viewDims, setViewDims] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0
  });

  const areViewDimsValid = viewDims.width !== 0 && viewDims.height !== 0;

  return { areViewDimsValid, setViewDims, viewDims };
};
