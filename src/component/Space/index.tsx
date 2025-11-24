import React from 'react';
import { View } from 'react-native';
import { layout } from '../../styles';

type SpaceProps = {
  size?: number;
};

const Space = ({ size = layout.spacing2 }: SpaceProps) => {
  const spaceStyles = {
    width: size,
    height: size,
  };

  return <View style={spaceStyles} />;
};

export default Space;
