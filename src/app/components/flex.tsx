import React, { forwardRef, JSX} from 'react';
import { Box } from '@/app/components/box';

type Direction = 'row' | 'row-reverse' | 'col' | 'col-reverse';
type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  direction?: Direction | string;
  align?: Align | string;
  justify?: Justify | string;
  wrap?: Wrap | string;
  gap?: string | number;
  className?: string;
  children?: React.ReactNode;
}

const directionMap: Record<string, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse'
};

const alignMap: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline'
};

const justifyMap: Record<string, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

const wrapMap: Record<string, string> = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse'
};

function buildGapClass(gap?: string | number): string | null {
  if (gap === undefined || gap === null || gap === '') return null;
  if (typeof gap === 'string') {
    if (gap.startsWith('gap-') || gap.includes(':') || gap.includes(' ')) return gap;
    if (/^\d+$/.test(gap)) return `gap-${gap}`;
    return gap;
  }
  if (typeof gap === 'number') return `gap-${gap}`;
  return null;
}

const Flex = forwardRef<React.ElementRef<'div'>, FlexProps>((props, ref) => {
  const {
    as = 'div',
    direction = 'row',
    align,
    justify,
    wrap,
    gap,
    className = '',
    children,
    style,
    ...rest
  } = props;

  const dirClass = directionMap[direction] ?? direction;
  const alignClass = align ? alignMap[align] ?? align : '';
  const justifyClass = justify ? justifyMap[justify] ?? justify : '';
  const wrapClass = wrap ? wrapMap[wrap] ?? wrap : '';
  const gapClass = buildGapClass(gap);

  const classes = [
    'flex',
    dirClass,
    alignClass,
    justifyClass,
    wrapClass,
    gapClass,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Box
      as={as}
      //ref={ref}
      className={classes}
      style={style}
      //{...rest}
    >
      {children}
    </Box>
  );
});

Flex.displayName = 'Flex';

export default Flex;