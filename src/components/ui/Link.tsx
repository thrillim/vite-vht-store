import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface MyLinkProps extends LinkProps {
  icon?: React.ReactNode;
  iconWidth?: number; // in pixels
  iconHeight?: number; // in pixels
}

const MyLink: React.FC<MyLinkProps> = ({
  icon,
  iconWidth,
  iconHeight,
  children,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className={twMerge(
        'w-fit flex border-0 rounded-md cursor-pointer gap-2 justify-center items-center h-10 px-4 py-2 font-medium text-sm hover:bg-gray-900/90',
        className
      )}
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
    </Link>
  );
};

export default MyLink;
