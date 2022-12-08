import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { Loading, Empty, Product, Pagination } from '../../components'
import { ProductSaves } from '../../../controllers/front';
import { UserSaves as Meta } from '../../../data/metas'; 
import { Permissonless } from '..';

export default function UserSaves() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites);

  const savedPosts = favorites?.Favorites?.slice(1, favorites?.Favorites?.length-1)

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOFirstRecord = indexOfLastRecord - recordsPerPage

  const currentRecords = savedPosts?.slice(indexOFirstRecord, indexOfLastRecord)

  const nPages = Math.ceil((savedPosts?.length) / recordsPerPage)

  useEffect(() => {
    const state = favorites.Loaded === false && user.Auth === true;
    if (state) ProductSaves(user.Id, dispatch)
  }, [user]);

  if(user.Auth === false) return <Permissonless />
  return (
    <Normal>
      <Meta />
      <div className='max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
          Të preferuarat
        </h1>
        <p className='mt-4 max-w-xl text-sm text-gray-700'>
          Këtu janë të listuara të gjitha produktet të preferuara.
        </p>
      </div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <section className={favorites.Loaded === false ? 'w-full' : favorites.Favorites.length === 0 ? 'w-full' : 'grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'}>
          {
            favorites.Loaded === false ? <Loading /> :
              favorites.Favorites.length === 0 ? <Empty heading="Nuk u gjet asnjë produkt" message="Nuk u gjet asnjë produkt në listën e të preferuarave." /> :
                currentRecords.map((product, index) => product !== null && <Product product={product} key={index} />)
          }
        </section>
        <Pagination nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Normal>
  );
}
