import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { fetchItems } from '../RTK/asyncThunk/items';
import Header from '../components/Header';
import FilterComponent from '../components/FilterComponent/index';
import ItemComponent from '../components/ItemComponent/index';
import PaginationComponent from '../components/Pagination/index';

function Home() {
  const { currentPage } = useAppSelector((state) => state.itemsSlice);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchItems({
        author: searchParams.get('author'),
        location: searchParams.get('location'),
        q: searchParams.get('q'),
        page: currentPage,
        gte: searchParams.get('gte'),
        lte: searchParams.get('lte'),
      }),
    );
  }, [searchParams, currentPage]);
  return (
    <>
      <Header />
      <main className="main">
        <FilterComponent />
        <ItemComponent />
        <PaginationComponent />
      </main>
    </>
  );
}

export default Home;
