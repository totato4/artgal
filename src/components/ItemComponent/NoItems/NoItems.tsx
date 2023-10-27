import React from 'react';
import { ReactNode } from 'react';

const NoItems: any = ({ children }: any) => {
  return (
    <div
      style={{
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default NoItems;
