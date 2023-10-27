import style from './Popup.module.scss';

export const Popup: any = ({ children }: any) => {
  return (
    <div className={`${style.ListWrapper}  background input-border color`}>
      <ul className={style.List}>{children}</ul>
    </div>
  );
};
