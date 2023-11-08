import Logo from 'components/shared/assets/svg/Logo.svg';
import { Icon } from 'components/shared/assets/svg/Icon';
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
      <img className={style.Logo} src={Logo} alt="Logo" />
      <div className={style.frameWrapper} onClick={() => switchTheme()}>
        <Icon id="frame" className="frame" />
      </div>
    </header>
  );
};

export default index;
