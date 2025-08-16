import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconWidth?: number; // in pixels
  iconHeight?: number; // in pixels
}

const Button: React.FC<ButtonProps> = ({
  icon,
  iconWidth,
  iconHeight,
  style,
  children,
  ...rest
}) => {
  const buttonStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '500',
    padding: '8px 16px',
    width: 'fit-content',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    ...style,
  };

  return (
    <button style={buttonStyle} {...rest}>
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center'}}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="icon" style={{ width: iconWidth, height: iconHeight, objectFit: 'contain' }} />
          ) : (
            icon
          )}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;