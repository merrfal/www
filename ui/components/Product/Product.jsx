import Link from 'next/link';

export default function Product(props) {
  const {
    Slug,
    Name,
    Image,
    City,
    Address,
    Zip
  } = props.product;

  return (
    <Link href={`/landings/${Slug}`} key={props.index}>
      <div className='group relative'>
                <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                  <img
                    src='https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw830e46ae/images/hi-res/2022-L2-CK2-20270818-17-1.jpg?sw=1152&sh=1536'
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  />
                </div>
                <div class='flex items-center py-4'>
                  <div class='flex-auto'>
                    <div class='flex mb-1'>
                      <svg className="h-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>

                      <p className="text-slate-700 text-[12px] ml-1">{Address}, {Zip}, {City}</p>
                    </div>
                    <div class='font-medium'>{Name}</div>
                  </div>
                  <div class='flex'>
                    <div class='pointer-events-auto ml-2 flex-none rounded-md h-8 w-8 flex justify-center align-center items-center px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50'>
                      <svg className="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
    </Link>
  );
}
