import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductSave, ProductUnsave } from '../../../controllers/front';

export default function Product(props) {
  const dispatch = useDispatch();
  
  const { Slug, Name, Gallery, City, Zip, Address, } = props.product;

  const user = useSelector(state => state.user);

  const [inSaves, setIsSaves] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if(user.Auth === true){
      const bool = user.Favorites.includes(props.product._id);
      setIsSaves(bool);
    }
  }, [user])

  const handleSaver = (e) => {
    e.stopPropagation();

    if(inSaves) {
        let newFavorites = user.Favorites.filter((f) => f !== props.product._id);

        ProductUnsave(
          props.product._id,
          user.Id,
          newFavorites,
          setIsSaving,
          dispatch
        )
    }

    else {
      let newFavorites = structuredClone(user.Favorites);
      newFavorites.push(props.product._id);

        ProductSave(
          props.product._id,
          user.Id,
          newFavorites,
          setIsSaving,
          dispatch
        )
    }
  };

  return (
    <Link href={`/produktet/${Slug}`} key={props.index}>
      <div style={isSaving ? {pointerEvents: 'none', opacity: '.75'} : {}} className='group relative shadow-lg rounded-lg'>
        <div className='hover:cursor-pointer min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 transition-all lg:aspect-none lg:h-80'>
          <img
            src={Gallery.length === 0 ? '/assets/product-no.png' : Gallery[0]}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='flex items-center py-4 px-4'>
          <div className='flex-auto'>
            <div className='flex mb-1 hover:cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-4 h-4'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>

              <p className='text-slate-700 text-[12px] ml-1'>
                {Address}, {Zip}, {City}
              </p>
            </div>
            <div className='font-medium hover:cursor-pointer'>
              {Name.length > 28 ? Name.substring(0, 27) + '...' : Name}
            </div>
          </div>
          <div onClick={(e) => handleSaver(e)} className='flex hover:cursor-pointer'>
            <div className='pointer-events-auto ml-2 flex-none rounded-md h-8 w-8 flex justify-center align-center items-center px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill={inSaves ? '#377DFF' : 'none'}
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke={inSaves ? '#377DFF' : 'currentColor'}
                className='w-6 h-6'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
