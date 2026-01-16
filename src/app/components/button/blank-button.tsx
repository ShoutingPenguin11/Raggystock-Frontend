import React from 'react';

interface Props {
  /**
   * Button type
   */
  type?: 'button' | 'submit';

  /**
   * Manually pass a css class string
   */
  className?: string;

  /**
   * Flag to set element to disabled
   */
  disabled?: boolean;

  /**
   * Value for the button elements
   */
  value?: string | number;

  /**
   * HTML title attribute
   */
  title?: string;

  children?: React.ReactNode;

  ref?: React.Ref<HTMLButtonElement>;
}

/**
 * A button with all CSS reset
 */
const BlankButton: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  type = 'button',
  disabled = false,
  children,
  ref,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export { BlankButton };
export default BlankButton;
