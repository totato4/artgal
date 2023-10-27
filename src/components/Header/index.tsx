import React from 'react';
import style from './Header.module.scss';
import logoBlack from '../shared/assets/logoBlack.svg';
import frame from '../shared/assets/frame.svg';
import frameBlack from '../shared/assets/frameBlack.svg';
import { useAppDispatch, useAppSelector } from './../../RTK/store';
import { changeTheme } from '../../RTK/theme/theme';

const index = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeSlice);
  const switchTheme = () => {
    if (theme == 'white') {
      dispatch(changeTheme('dark'));
    } else {
      dispatch(changeTheme('white'));
    }
  };
  return (
    <header className={style.header}>
      <img className={style.logo} src={logoBlack} alt="logo" />
      <div className={style.frameWrapper} onClick={() => switchTheme()}>
        <img
          className={style.frame}
          // src={isBlack ? frame : frameBlack}
          src={theme == 'white' ? frameBlack : frame}
          alt="frame"
        />
      </div>
    </header>
  );
};

export default index;
