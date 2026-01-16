import React from 'react';
import type { MouseEvent, JSX } from 'react';

type Props<T = Record<string, unknown>> = {
  /**
   * HTML element tag name
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * Optional click handler on the base element
   */
  onClick?: (event: MouseEvent) => void;

  /**
   * Optional custom class names
   */
  className?: string;

  /**
   * Auto complete html attribute
   */
  autoComplete?: string;

  /**
   * Reference element
   */
  ref?: any;
} & T;

/**
 * Base html element for adding styles to, also
 * accepts arrays for device spesific styles
 */

const Box = ({ as: asProp = 'div', className = '', autoComplete, children, ref, ...props }: Props) => {
  const HTMLElement: string = asProp;

  return (
    // @ts-expect-error Unsure how to fix this typescript error. We're passing a dynamic html tag here, which typescript doesn't seem to understand very well.
    <HTMLElement
      {...(autoComplete && { autoComplete: autoComplete })}
      className={className}
      {...(ref && { ref: ref })}
      {...props}
    >
      {children}
    </HTMLElement>
  );
};

Box.whyDidYouRender = true;

export type { Props };
export { Box };
export default Box;
