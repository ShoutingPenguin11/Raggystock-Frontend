import * as React from 'react';
import BlankButton from '@/app/components/button/blank-button'
import { MouseEventHandler } from 'react';

interface Props {
  /**
   * Button type
   */
  type?: 'button' | 'submit';

  /**
   * SVG Icon
   */
  svg: React.FC<React.SVGProps<React.ReactSVGElement>>;
  /**
   * onClick handler
   */
  handleClick?: React.MouseEventHandler<HTMLElement>;

  /**
   * ID to uniquely recognize the button in the dom tree
   */
  id?: string;

  /**
   * Function that is triggered on MouseDown
   */
  onMouseDown?: MouseEventHandler<HTMLElement>;

  /**
   * Optional Title for Icon Button
   */
  title?: string;

  className?: string;
}

const IconButton: React.FC<Props> = ({ type = 'button', svg, handleClick, title, className, ...props }) => {
  const Icon = svg;
  return (
    <BlankButton type={type} onClick={handleClick} title={title} className={className} {...props}>
      <Icon />
    </BlankButton>
  );
};

export type { Props };
export { IconButton };
export default IconButton;
