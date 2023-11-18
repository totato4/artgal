import ReactPaginate from 'react-paginate';

import { useAppSelector, useAppDispatch } from 'hooks/useRedux';
import { setCurrentPages } from 'RTK/asyncThunk/items';

import { Icon } from 'components/shared/assets/svg/Icon';
import { Button } from './Button/Button';

import style from './Pagination.module.scss';

const PaginationComponent = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeSlice);
  const { countPages, currentPage } = useAppSelector(
    (state) => state.itemsSlice,
  );

  const onChangePage = async (num: number) => {
    dispatch(setCurrentPages(num));
  };

  return (
    <div>
      {countPages > 1 && (
        <div
          data-theme-color={theme}
          data-theme-color-hover={theme}
          className={`${
            theme === 'dark'
              ? style.paginationThemeDark
              : style.paginationThemeWhite
          } ${style.pagination} ${style.btn}`}
        >
          <Button
            borderRadius="8px 0px 0px 8px"
            disabled={currentPage === 1 ? true : false}
            onClick={() => onChangePage(1)}
            ariaLabel="First page"
          >
            <Icon id="double-left-array" className="svg-hover" />
          </Button>

          <ReactPaginate
            activeClassName={`${
              theme === 'dark' ? style.activeDark : style.activeWhite
            }`}
            onPageChange={(e) => onChangePage(e.selected + 1)}
            previousLabel={
              <Button disabled={currentPage === 1 ? true : false}>
                <Icon id="left-array" className="svg-hover" />
              </Button>
            }
            nextLabel={
              <Button disabled={currentPage === countPages ? true : false}>
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

          <Button
            role="button"
            borderRadius="0px 8px 8px 0px"
            disabled={currentPage === countPages ? true : false}
            onClick={() => onChangePage(countPages)}
            ariaLabel="Last page"
          >
            <Icon id="double-right-array" className="svg-hover" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;
