import Link from 'next/link';

import { AuthWithGoogle } from '../../../controllers/front';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { LogoutUser } from '../../../data/redux/UserSlice';
import { OpenSearch } from '../../../data/redux/SearchSlice';
import { useState } from 'react';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let clickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => !domNode.current?.contains(event.target) && handler();
      document.addEventListener("mousedown", maybeHandler);
      return () => document.removeEventListener("mousedown", maybeHandler);
    });

    return domNode;
  };

  let domNode = clickOutside(() => setIsProfileOpen(false));


  return (
    <header className='relative bg-white'>
      <nav aria-label='Top' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='border-b border-gray-200'>
          <div className='h-16 flex items-center justify-between'>
            <div className='flex-1 flex items-center lg:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type='button'
                className='-ml-2 bg-white p-2 rounded-md text-gray-400'>
                <span className='sr-only'>Hap menunë</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>

              <div
                onClick={() => dispatch(OpenSearch())}
                className='hover:cursor-pointer ml-2 p-2 text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Kërko</span>
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>

            <div className='hidden lg:flex-1 lg:block lg:self-stretch'>
              <div className='h-full flex space-x-8'>
                <div className='flex'>
                  <Link href='/produktet'>
                    <div className='relative flex'>
                      <button
                        type='button'
                        className='text-gray-700 hover:text-gray-800 relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium'
                        aria-expanded='false'>
                        Produktet
                        <span
                          className='absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px'
                          aria-hidden='true'></span>
                      </button>
                    </div>
                  </Link>

                  <div className='absolute z-10 top-full inset-x-0'>
                    <div
                      className='absolute inset-0 top-1/2 bg-white shadow'
                      aria-hidden='true'></div>
                  </div>
                </div>

                <Link href='/rreth-nesh'>
                  <a
                    href='/rreth-nesh'
                    className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'>
                    Rreth Nesh
                  </a>
                </Link>

                <Link href='/na-kontaktoni'>
                  <a
                    href='/na-kontaktoni'
                    className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'>
                    Na Kontaktoni
                  </a>
                </Link>
              </div>
            </div>

            <Link href='/'>
              <a className='flex'>
                <svg
                  className='h-6 w-auto'
                  viewBox='0 0 382 67'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M34.5498 17.2749L32.4393 18.563C29.1931 20.5442 27.57 21.5349 26.1237 22.7354C24.892 23.7577 23.7577 24.892 22.7354 26.1237C21.5349 27.57 20.5442 29.1931 18.563 32.4393L17.2749 34.5498L15.9868 32.4392C14.0055 29.1931 13.0149 27.57 11.8144 26.1237C10.792 24.892 9.65776 23.7577 8.42611 22.7354C6.9798 21.5349 5.35671 20.5442 2.11058 18.563L0 17.2749L2.11054 15.9868C5.3567 14.0055 6.97979 13.0149 8.42611 11.8144C9.65776 10.792 10.792 9.65775 11.8144 8.4261C13.0149 6.97978 14.0055 5.35669 15.9868 2.1105L17.2749 -6.11593e-06L18.563 2.1105C20.5442 5.35667 21.5349 6.97979 22.7354 8.4261C23.7577 9.65775 24.892 10.792 26.1237 11.8144C27.57 13.0149 29.1931 14.0055 32.4393 15.9868L34.5498 17.2749Z'
                    fill='#377DFF'
                  />
                  <path
                    d='M13.6158 56.6041L18.7225 59.4925C37.2542 69.9744 60.9833 63.0549 71.8997 44.5155C75.512 38.3809 77.3088 31.6855 77.4181 25.0822L77.489 20.9318L85.7175 29.1604L94.0146 20.8633L76.0075 2.85614C73.7163 0.564954 70.0015 0.564954 67.7104 2.85614L49.2125 21.354L57.5096 29.6511L65.7451 21.4156L65.6859 24.8856C65.6102 29.4842 64.361 34.193 61.7885 38.5617C53.9539 51.8672 37.1794 56.4513 24.4994 49.2792L19.3927 46.3908L13.6158 56.6041Z'
                    fill='#377DFF'
                  />
                  <path
                    d='M299.205 24.4063H293.369V33.9103H299.205V65.8401H310.626V33.9103H320.547V24.4063H310.626V20.1545C310.626 18.2649 311.043 16.7087 311.877 15.486C312.766 14.2632 314.489 13.6519 317.046 13.6519H320.63V3.89783C319.685 3.73109 318.741 3.61994 317.796 3.56435C316.851 3.45319 315.962 3.39762 315.128 3.39762C311.904 3.39762 309.098 3.9812 306.708 5.14835C304.374 6.31549 302.54 8.14958 301.206 10.6506C299.872 13.0961 299.205 16.264 299.205 20.1545V24.4063Z'
                    fill='black'
                  />
                  <path
                    d='M114.691 65.8401H102.353L109.939 17.5701C110.439 14.6245 111.634 12.4013 113.524 10.9007C115.469 9.4001 117.859 8.6498 120.693 8.6498C123.195 8.6498 125.418 9.26115 127.363 10.4839C129.308 11.651 130.614 13.5685 131.281 16.2363L140.702 51.2507C140.702 51.4175 140.73 51.5009 140.785 51.5009H140.868C140.924 51.4453 140.952 51.3619 140.952 51.2507L150.206 16.4864C150.928 13.763 152.29 11.79 154.291 10.5673C156.292 9.28894 158.542 8.6498 161.043 8.6498C163.822 8.6498 166.157 9.42789 168.046 10.9841C169.936 12.5403 171.075 14.819 171.464 17.8202L178.384 65.8401H166.046L160.627 21.8219C160.627 21.544 160.599 21.3773 160.543 21.3217C160.488 21.2105 160.377 21.155 160.21 21.155C160.099 21.155 159.987 21.2105 159.876 21.3217C159.821 21.3773 159.765 21.4884 159.71 21.6552L149.289 58.8372C148.677 60.9492 147.593 62.5332 146.037 63.5892C144.537 64.6452 142.786 65.1732 140.785 65.1732C138.895 65.1732 137.145 64.673 135.533 63.6725C133.921 62.6721 132.865 61.1437 132.365 59.0873L121.944 21.6552C121.944 21.4329 121.888 21.2939 121.777 21.2383C121.722 21.1827 121.638 21.155 121.527 21.155C121.36 21.155 121.221 21.2105 121.11 21.3217C121.055 21.3773 121.027 21.5162 121.027 21.7385L114.691 65.8401Z'
                    fill='black'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M202.049 66.9239C197.936 66.9239 194.268 66.0068 191.044 64.1727C187.876 62.2831 185.375 59.6987 183.541 56.4195C181.707 53.1404 180.79 49.3611 180.79 45.0815C180.79 40.7464 181.679 36.9393 183.458 33.6601C185.236 30.381 187.709 27.8244 190.877 25.9903C194.045 24.1006 197.686 23.1558 201.799 23.1558C206.023 23.1558 209.663 24.045 212.72 25.8235C215.832 27.5465 218.222 30.0197 219.889 33.2433C221.612 36.4668 222.474 40.3018 222.474 44.748V47.916L191.786 47.9879C192.107 50.7415 192.916 52.9129 194.212 54.5021C195.991 56.5585 198.686 57.5867 202.299 57.5867C204.911 57.5867 207.051 57.1143 208.718 56.1694C210.441 55.2246 211.553 53.8907 212.053 52.1678H222.557C221.779 56.6697 219.528 60.2544 215.804 62.9222C212.136 65.59 207.551 66.9239 202.049 66.9239ZM192.712 38.0786C192.389 38.8963 192.139 39.8133 191.961 40.8298H211.052C211.052 38.2731 210.219 36.2445 208.551 34.7439C206.94 33.2433 204.689 32.493 201.799 32.493C199.52 32.493 197.63 32.9654 196.13 33.9102C194.629 34.7995 193.49 36.1889 192.712 38.0786Z'
                    fill='black'
                  />
                  <path
                    d='M256.772 34.994V24.3229C255.883 24.1006 255.049 23.9617 254.271 23.9061C253.548 23.7949 252.798 23.7394 252.02 23.7394C248.685 23.7394 246.017 24.6286 244.017 26.4071C242.69 27.5866 241.68 28.9861 240.989 30.6057L240.348 24.4897H229.594V65.8401H241.015V46.7489C241.015 42.6916 242.044 39.7182 244.1 37.8285C246.212 35.9389 249.13 34.994 252.854 34.994H256.772Z'
                    fill='black'
                  />
                  <path
                    d='M289.888 24.3229V34.994H285.969C282.246 34.994 279.328 35.9389 277.216 37.8285C275.159 39.7182 274.131 42.6916 274.131 46.7489V65.8401H262.71V24.4897H273.464L274.105 30.6057C274.796 28.9862 275.806 27.5866 277.133 26.4071C279.133 24.6286 281.801 23.7394 285.136 23.7394C285.914 23.7394 286.664 23.7949 287.387 23.9061C288.165 23.9617 288.999 24.1006 289.888 24.3229Z'
                    fill='black'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M337.209 66.9239C332.874 66.9239 329.428 65.7289 326.872 63.3391C324.315 60.9492 323.037 57.7812 323.037 53.8351C323.037 50.0558 324.343 47.0268 326.955 44.748C329.623 42.4693 333.43 41.1354 338.377 40.7464L350.382 39.8293V38.9957C350.382 37.3283 350.048 35.9944 349.381 34.994C348.77 33.938 347.88 33.1599 346.713 32.6597C345.602 32.1595 344.24 31.9094 342.628 31.9094C339.738 31.9094 337.515 32.4652 335.959 33.5768C334.458 34.6883 333.708 36.2723 333.708 38.3287H324.121C324.121 35.2163 324.899 32.5486 326.455 30.3254C328.011 28.0467 330.234 26.296 333.124 25.0732C336.014 23.7949 339.349 23.1558 343.129 23.1558C347.019 23.1558 350.326 23.8505 353.049 25.24C355.773 26.5739 357.857 28.5747 359.302 31.2425C360.803 33.9102 361.553 37.2172 361.553 41.1632V65.8401H351.465L350.715 60.0044C349.937 62.0608 348.27 63.7281 345.713 65.0064C343.212 66.2847 340.377 66.9239 337.209 66.9239ZM341.128 58.337C343.907 58.337 346.158 57.5867 347.88 56.0861C349.603 54.5854 350.465 52.4457 350.465 49.6667V47.4158L342.878 48.0828C339.877 48.3607 337.737 48.9442 336.459 49.8335C335.236 50.6672 334.625 51.8343 334.625 53.3349C334.625 55.0579 335.181 56.3362 336.292 57.1698C337.404 57.948 339.016 58.337 341.128 58.337Z'
                    fill='black'
                  />
                  <path
                    d='M370.362 65.8401H381.783V3.39762H370.362V65.8401Z'
                    fill='black'
                  />
                </svg>
              </a>
            </Link>

            <div className='flex-1 flex items-center justify-end'>
              <div
                onClick={() => dispatch(OpenSearch())}
                className='hover:cursor-pointer hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block'>
                <span className='sr-only'>Kërko</span>
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>

              {user.Auth && (
                <Link href='/postimet/shto'>
                  <a className='hidden ml-4 p-1 text-gray-400 hover:text-gray-500 lg:block'>
                    <span className='sr-only'>Shto</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='w-6 h-6'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </a>
                </Link>
              )}

              {user.Auth && (
                <div ref={domNode} className='relative'>
                  <button
                    type='button'
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className='ml-3 p-2 inline-flex w-full justify-center bg-white text-sm font-medium text-gray-700'
                    id='menu-button'
                    aria-expanded='true'
                    aria-haspopup='true'>
                    <img
                      className='w-6 h-6 rounded-full'
                      src={
                        user.Avatar === null
                          ? '/assets/avatar-no.png'
                          : user.Avatar
                      }
                    />
                  </button>

                  {isProfileOpen && (
                    <div
                      className='absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='menu-button'
                      tabindex='-1'>
                      <div className='py-1' role='none'>
                        <Link href={`/profili/${user.Username}`}>
                          <a
                            className='text-gray-700 block px-4 py-2 text-sm'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-0'>
                            Profili Im
                          </a>
                        </Link>
                        <Link href={`/preferuarat`}>
                          <a
                            className='text-gray-700 block px-4 py-2 text-sm'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-0'>
                            Të Preferuarat
                          </a>
                        </Link>
                        <Link href={`/postimet`}>
                          <a
                            className='text-gray-700 block px-4 py-2 text-sm'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-1'>
                            Produktet e Mia
                          </a>
                        </Link>
                        <button
                          type='submit'
                          onClick={() => dispatch(LogoutUser())}
                          className='text-gray-700 block w-full px-4 py-2 text-left text-sm'
                          role='menuitem'
                          tabindex='-1'
                          id='menu-item-3'>
                          Shkyçuni
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!user.Auth && (
                <div
                  onClick={() => AuthWithGoogle(dispatch)}
                  className='p-2 text-gray-400 hover:text-gray-500 lg:ml-4 hover:cursor-pointer'>
                  <span className='sr-only'>Llogaria</span>
                  <svg
                    className='w-6 h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
