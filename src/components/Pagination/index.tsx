import { useSearchParams } from 'react-router-dom';
import { Icon } from '../shared/assets/svg/Icon';
import style from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../RTK/store';
import { Button } from './Button/Button';

import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { setCurrentPages } from '../../RTK/asyncThunk/items';

const PaginationComponent = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeSlice);
  const { countPages, currentPage } = useAppSelector(
    (state) => state.itemsSlice,
  );
  const { items } = useAppSelector((state) => state.itemsSlice);

  const [searchParams, setSearchParams] = useSearchParams();
  // const page = searchParams.get('page') || '';
  // useEffect(() => {
  //   if (items.length == 0) {
  //     searchParams.set('page', `${1}`);
  //     setSearchParams(searchParams);
  //   }
  // }, []);

  const onChangePage = async (num: number) => {
    console.log(num);
    let page = num + 1;
    dispatch(setCurrentPages(num + 1));
    // if (page == 0) {
    //   searchParams.delete('page');
    //   setSearchParams(searchParams);
    // } else {
    //   // page > 0 && (await searchParams.set('page', `${page}`));
    //   await searchParams.set('page', `${page}`);
    //   setSearchParams(searchParams);
    // }
  };
  return (
    <>
      {countPages > 1 && (
        <div
          data-theme-color={theme}
          data-theme-color-hover={theme}
          className={`${
            theme == 'dark'
              ? style.paginationThemeDark
              : style.paginationThemeWhite
          } ${style.pagination} ${style.btn}`}
        >
          <div onClick={() => onChangePage(0)}>
            <Button
              borderRadius="8px 0px 0px 8px"
              disabled={currentPage == 1 ? true : false}
            >
              <Icon id="double-left-array" className="svg-hover" />
            </Button>
          </div>

          <ReactPaginate
            activeClassName={`${
              theme == 'dark' ? style.activeDark : style.activeWhite
            }`}
            onPageChange={(e) => onChangePage(e.selected)}
            previousLabel={
              <Button disabled={currentPage == 1 ? true : false}>
                <Icon id="left-array" className="svg-hover" />
              </Button>
            }
            nextLabel={
              <Button disabled={currentPage == countPages ? true : false}>
                <Icon id="right-array" className="svg-hover" />
              </Button>
            }
            pageRangeDisplayed={-3}
            pageCount={countPages}
            // initialPage={Number(page) - 1}
            // forcePage={Number(page) - 1}
            initialPage={currentPage - 1}
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
          />

          <div onClick={() => onChangePage(2)}>
            <Button
              borderRadius="0px 8px 8px 0px"
              disabled={currentPage == countPages ? true : false}
              rel="3"
            >
              <Icon id="double-right-array" className="svg-hover" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaginationComponent;
