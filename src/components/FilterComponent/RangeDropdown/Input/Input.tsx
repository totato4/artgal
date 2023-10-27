import style from './Input.module.scss';

export const Input: any = ({ placeholder, value, setValue }: any) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={style.input}
    />
  );
};
