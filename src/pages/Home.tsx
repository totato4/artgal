import Header from '../components/Header';
import FilterComponent from '../components/FilterComponent/index';
import ItemComponent from '../components/ItemComponent/index';
import PaginationComponent from '../components/Pagination/index';
import { fetchItems } from '../RTK/asyncThunk/items';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../RTK/store';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const { currentPage } = useAppSelector((state) => state.itemsSlice);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchItems({
        author: searchParams.get('author'),
        location: searchParams.get('location'),
        q: searchParams.get('q'),
        created: searchParams.get('created'),
        page: currentPage,
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
};

export default Home;
