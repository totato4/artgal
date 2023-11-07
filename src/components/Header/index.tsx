import logoBlack from 'components/shared/assets/logoBlack.svg';
import frame from 'components/shared/assets/frame.svg';
import frameBlack from 'components/shared/assets/frameBlack.svg';
import { useAppSelector, useAppDispatch } from 'hooks/useRedux';
import { changeTheme } from 'RTK/theme/theme';

import style from './Header.module.scss';

const index = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeSlice);
  const switchTheme = () => {
    if (theme === 'white') {
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
          src={theme === 'white' ? frameBlack : frame}
          alt="frame"
        />
      </div>
    </header>
  );
};

export default index;
