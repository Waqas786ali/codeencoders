import { cva } from 'class-variance-authority';
import React from 'react';

import type { VariantProps } from 'class-variance-authority';

const typography = cva('', {
  variants: {
    size: {
      h1: ['text-h1'],
      h2: ['text-h2'],
      h3: ['text-h3'],
      h4: ['text-h4'],
      h5: ['text-h5'],
      xl: ['text-xl'],
      lg: ['text-lg'],
      base: ['text-base'],
      md: ['text-md'],
      sm: ['text-sm'],
      xs: ['text-xs'],
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typography> {
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({ as: Component = 'p', className = '', size, ...props }) => {
  return <Component className={`${typography({ size })} ${className}`} {...props} />;
};
