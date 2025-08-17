
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconWidth?: number;
  iconHeight?: number;
}

const Button: React.FC<Button> = ({
  children,
  className = '',
  icon,
  iconWidth,
  iconHeight,
  ...props
}) => {

  return (
    <button
      className={twMerge(
        'w-fit flex border border-gray-300 rounded-md cursor-pointer gap-2 justify-center items-center h-10 px-4 py-2 font-medium text-sm',
        className
      )}
      {...props}
    >
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {typeof icon === 'string' ? (
            <img
              src={icon}
              alt='icon'
              style={{
                width: iconWidth,
                height: iconHeight,
                objectFit: 'contain',
              }}
            />
          ) : (
            <div className='flex items-center justify-center' style={{ width: iconWidth, height: iconHeight }}>
              {icon}
            </div>
          )}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
