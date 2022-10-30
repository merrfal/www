import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LandingDownvote, LandingUpvote, PagesList, UserGoogle } from '../../../controllers/front';
import { Normal } from '../../layouts';

import Link  from 'next/link'

export default function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const pages = useSelector((state) => state.pages);

  const AuthWithGoogle = () => {
    fetch(`https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_KEY}`)
      .then((res) => res.json())
      .then((payload) => UserGoogle(dispatch, payload));
  };

  useEffect(() => { if (pages.Loaded === false) PagesList(dispatch)}, [pages]);

  return (
    <Normal>
      <section
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '1em', gap: '1em' }}>
        {pages.Loaded === false ? 'loading pages...' : pages.Pages.map((page, index) => {
              return (
                <div
                  href={'/landings/' + page.Slug}
                  style={{
                    width: '100%',
                    height: '420px',
                    border: '1px solid #ccc',
                    borderRadius: '1em',
                    padding: '.5em',
                  }}
                  key={index}>
                  <div>
                    {console.log('page', page, 'user', user)}
                    <h2>{page.Name}</h2>
                    <p>{page.Tagline}</p>
                    <hr />
                    {/* <p>User: {page.User}</p> */}
                    <p>{page.Categories.map(c => c)}</p>
                    <p>{page.Description}</p>
                    {/* <p>Icon: {page.Icon}</p>
                    <p>Links: {page.Links[0]}</p>
                    <p>Gallery: {page.Gallery[0]}</p> */}
                    <br />
                    {/* <p>Website: {page.Website}</p> */}

                    {/* <button>Open Website</button> */}
                    <Link href={`/landings/${page.Slug}`}>
                      <button>View Landing Page</button>
                    </Link>
                    <div>
                      Total Votes: {page.Upvotes.length} &nbsp;
                      {
                        user.Auth ? 
                        page.Upvotes.includes(user.Id) ?
                        <button onClick={(e) => {
                          e.stopPropagation();
                          LandingDownvote(page._id, user.Id, dispatch, "Pages")
                        }}>Downvote</button>
                        :
                        <button onClick={(e) => {
                          e.stopPropagation();
                          LandingUpvote(page._id, user.Id, dispatch, "Pages")
                        }}>Upvote</button>
                        : 
                        <button onClick={(e) => {
                          e.stopPropagation();
                          AuthWithGoogle()
                        }}>Upvote</button>
                      }
                    </div>
                  </div>
                </div>
              );
            })}
            
      </section>

      <div className="relative overflow-hidden bg-white">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
        <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
      </div>
      <div>
        <div className="mt-10">
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </Normal>
  );
}
