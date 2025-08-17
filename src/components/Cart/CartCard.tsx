import type { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  title: string;
}>;

export default function CartCard({ title, children }: CardProps) {
  return (
    <>
      {children ? (
        <div className='border border-gray-200 px-6 py-5 rounded-lg'>
          <h1 className='text-2xl font-semibold leading-none tracking-tight'>{title}</h1>
          <div>{children}</div>
        </div>
      ) : (
        <div className='bg-gray-100/80 border border-gray-200 px-6 py-5 rounded-lg'>
          <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
        </div>
      )}
    </>
  );
}
