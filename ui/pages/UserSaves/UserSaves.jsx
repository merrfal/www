import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { Loading, Empty, Product } from '../../components'
import { ProductSaves } from '../../../controllers/front';

export default function UserSaves() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    if (favorites.Loaded === false && user.Auth === true) {
      ProductSaves(user.Id, dispatch)
    }
  }, [user]);

  return (
    <Normal>
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
            favorites.Favorites.map((product, index) =>  <Product product={product} key={index} />)
          }
        </section>
      </div>
    </Normal>
  );
}
