import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsList } from '../../../controllers/front';
import { Product, Loading, Empty } from '..';

export default function Products() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    if (pages.Loaded === false) ProductsList(dispatch);
  }, [pages]);

  const currentRecords = pages?.Pages?.slice(0, 16)

  return (
    <div class='bg-white'>
      <div class='max-w-2xl mt-[-4rem] mx-auto mb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div class='px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0'>
          <h2 class='text-2xl font-extrabold tracking-tight text-gray-900'>
            Shfleto Produktet e Fundit
          </h2>
          <a
            href='/produktet'
            class='hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block'>
            Shfleto të gjitha Produktet<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
        <div
          class={
            pages.Loaded
              ? pages.Pages.length === 0 ? 'w-full' : 'mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
              : 'w-full'
          }>
          {pages.Loaded === false ? (
            <Loading />
          ) : pages.Pages.length === 0 ? (
            <Empty heading="Nuk u gjet asnjë produkt" message="Nuk u gjet asnjë produkt i shtuar ne platformë."/>
          ) : (
            currentRecords.map((page, index) => <Product product={page} key={index} />)
          )}
        </div>
      </div>
    </div>
  );
}
