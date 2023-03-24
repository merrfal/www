import { InfoSide, User } from "./";
import { useRouter } from "next/router";
import { useState } from "react";
import { SearchIcon } from "../../icons";

export default function Header() {
  const router = useRouter();


  return (
    <header className="relative bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center justify-around">
            <InfoSide />
            <div className="flex">
              <User />
            </div>

          </div>
          {false ?
            <div className=" h-16 flex items-center z-50  bg-white justify-between absolute w-[100%] inset-y-0 left-0 flex items-center pl-6 pr-6 pointer-events-none z-10 md:hidden">
{
              // <input
              //   value={term}
              //   onChange={(e) => setTerm(e.target.value)}
              //   maxLength={32}
              //   required
              //   type="text"
              //   class="border
              //  w-[100%] w-auto text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-1.5 "
              //   placeholder="Kërko produkte..."

              //   onKeyPress={(e) => {
              //     if (e.key === "Enter") {
              //       e.preventDefault();
              //       router.push(`/kerko/${term}`);
              //     }
              //   }}
              // />
              // <div class=" relativeinset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              //   <SearchIcon />
              // </div>
}
            </div>

            : ""
          }

        </div>
      </nav>
    </header>
  );
}


