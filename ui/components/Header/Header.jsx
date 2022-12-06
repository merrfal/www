import Link from "next/link";

import { AuthWithGoogle } from "../../../controllers/front";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../../data/redux/UserSlice";
import { OpenSearch } from "../../../data/redux/SearchSlice";
import { useRef, useState } from "react";
import { MenuLink } from "../";

import {
  SearchIcon,
  MenuIcon,
  LogoIcon,
  AddIcon,
  AccountIcon,
} from "../../icons";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  let clickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
      let maybeHandler = (event) => !domNode.current.contains(event.target) && handler();
      document.addEventListener("mousedown", maybeHandler);
      return () => document.removeEventListener("mousedown", maybeHandler);
    });
    return domNode;
  };

  let domNode = clickOutside(() => {
    setIsMobileMenuOpen(false)
  });

  return (
    <header className='relative bg-white'>
      <nav aria-label='Top' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div ref={domNode} className='border-b border-gray-200'>
          <div className='h-16 flex items-center justify-between'>
            <div className='flex-1 flex items-center lg:hidden'>
              <button

                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="-ml-2 bg-white p-2 rounded-md text-gray-400"
              >
                <span className="sr-only">Hap menunë</span>
                <MenuIcon />
              </button>



              <div
                onClick={() => dispatch(OpenSearch())}
                className="hover:cursor-pointer ml-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Kërko</span>
                <SearchIcon />
              </div>
            </div>

            <div className="hidden lg:flex-1 lg:block lg:self-stretch">
              <div className="h-full flex space-x-8">
                <div className="flex">
                  <Link href="/">
                    <div className="relative flex">
                      <button className="text-gray-700 hover:text-gray-800 relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium">
                        Ballina
                        <span className="absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px" />
                      </button>
                    </div>
                  </Link>

                  <div className="absolute z-10 top-full inset-x-0">
                    <div className="absolute inset-0 top-1/2 bg-white shadow" />
                  </div>
                </div>

                <Link href="/produktet">
                  <a
                    href="/produktet"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Produktet
                  </a>
                </Link>

                <Link href="/na-kontaktoni">
                  <a
                    href="/na-kontaktoni"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Na Kontaktoni
                  </a>
                </Link>
              </div>
            </div>

            <Link href="/">
              <a className="flex">
                <LogoIcon />
              </a>
            </Link>

            <div className="flex-1 flex items-center justify-end">
              <div
                onClick={() => dispatch(OpenSearch())}
                className="hover:cursor-pointer hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block"
              >
                <span className="sr-only">Kërko</span>
                <SearchIcon />
              </div>



              {user.Auth && (
                <Link href="/postimet/shto">
                  <a className="hidden ml-4 p-1 text-gray-400 hover:text-gray-500 lg:block">
                    <span className="sr-only">Shto</span>
                    <AddIcon />
                  </a>
                </Link>
              )}

              {user.Auth && (
                <div className="relative accoount-menu">
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="ml-3 p-2 inline-flex w-full justify-center bg-white text-sm font-medium text-gray-700"
                  >
                    <img
                      className="w-6 h-6 rounded-full"
                      src={ user.Avatar === null
                        ? "/assets/avatar-no.png"
                        : user.Avatar
                      }
                    />
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1" role="none">
                        <MenuLink name="Profili Im" link={`/profili/${user.Username}`}/>
                        <MenuLink name="Të Preferuarat" link={`/preferuarat`} />
                        <MenuLink name="Produktet e Mia" link={`/postimet`} />
                        <MenuLink name="Produktet e Mia" link={`/postimet`} />

                        <button
                          type="submit"
                          onClick={() => dispatch(LogoutUser())}
                          className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-3"
                        >
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
                  className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4 hover:cursor-pointer"
                >
                  <span className="sr-only">Llogaria</span>
                  <AccountIcon />
                </div>
              )}
            </div>

          </div >
          {isMobileMenuOpen && <div id="mega-menu-full" className="justify-between items-center w-full">
            <ul className="flex flex-col mt-4 text-sm font-medium lg:hidden">

              <li onClick={(e) => {
                e.preventDefault()
                window.location.href = "/"
              }}>
                <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-10 hover:bg-gray-50 " aria-current="page">Ballina</a>
              </li>


              <li onClick={(e) => {
                e.preventDefault()
                window.location.href = "/produktet"
              }}>
                <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-10 hover:bg-gray-50 " aria-current="page">Produktet</a>
              </li>


              <li onClick={(e) => {
                e.preventDefault()
                window.location.href = "/na-kontaktoni"
              }}>
                <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-10 hover:bg-gray-50 " aria-current="page">Na Kontaktoni</a>
              </li>

            </ul>
          </div>
          }
        </div>
      </nav>

    </header>
  );
}
