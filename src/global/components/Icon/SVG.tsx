import { CSSProperties } from 'react';

import svgs from './svgs';
import { SVGProps } from './types';

import colors from '../../styles/colors';

const SVG = ({
  name,
  size,
  color,
  width,
  height,
  style,
}: SVGProps) => {
  const compProps = {
    width: width || size,
    height: height || size,
    fill: color || colors.primary,
    style: style as CSSProperties,
  };

  const SVGIcon = svgs[name as keyof typeof svgs];

  return <SVGIcon {...compProps} />;
};

export default SVG;
