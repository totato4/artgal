import style from './Popup.module.scss';

export const Popup: any = ({ children }: any) => (
  <div className={`${style.ListWrapper}  background input-border color`}>
    {children}
  </div>
);
