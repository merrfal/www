import { InfoSide, Search, User } from "./";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../icons";

export default function Header() {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false)
  const [term, setTerm] = useState("");

  useState(() => {
    let path = typeof window !== "undefined" && window.location;
    path = path?.pathname?.split("/")[2];
    const base = path?.pathname?.split("/")[1];

    if (path !== undefined && path !== "" && term === "" && base === "kerko") setTerm(path);
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".showSerch")) setOpenSearch(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="relative bg-white showSerch">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center justify-around">
            <InfoSide openSearch={openSearch} />
            <div className="flex">
              <User />
            </div>

            <button class="inset-y-0 left-0 flex items-center pl-3 md:hidden" 
              onClick={(e) => {
                e.preventDefault();
                setOpenSearch(!openSearch)
              }}
             >
              <SearchIcon />
            </button>

          </div>
          {openSearch ?
            <div className="pl-2 pr-autow-100 h-16 flex items-center bg-white justify-between absolute inset-y-0 left-0 z-10 md:hidden ">
              <div class="absolute ml-2 inset-y-0 left-0 flex items-center pl-3 pointer-events-none" >
                <SearchIcon />
              </div>             

              <input
                value={term}
                onChange={(e) => { setTerm(e.target.value)}}
                maxLength={32}
                required
                type="text"
                class="border w-[100vw] border-gray-200 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-1.5 "
                placeholder="Kërko produkte..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    router.push(`/kerko/${term}`);
                  }
                }}
                />
            </div>
              : 
            ""
          }

        </div>
      </nav>
    </header>
  );
}


