export const Component = ({ children }: any) => {
  return (
    <div
      style={{ background: 'yellow', border: '1px solid black', width: '100%' }}
    >
      {children}
    </div>
  );
};
