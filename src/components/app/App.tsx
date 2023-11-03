import Home from '../../pages/Home';
import style from './App.module.scss';
import { useAppSelector } from '../../RTK/store';

const App = () => {
  const { theme } = useAppSelector((state) => state.themeSlice);
  const { wrapper, container } = style;

  return (
    // <div className={`${wrapper} ${isBlack ? black : white}`}>
    <div
      data-theme-color={theme}
      data-theme-background={theme}
      data-theme-input-border={theme}
      data-theme-border={theme}
      data-theme-svg={theme}
      className={` ${wrapper} background color`}
    >
      <div className={container}>
        <Home />
      </div>
    </div>
  );
};

export default App;
