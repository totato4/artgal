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
