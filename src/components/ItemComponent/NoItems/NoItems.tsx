import { ReactNode } from 'react';

const NoItems = ({ children }: { children: ReactNode }) => {
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
