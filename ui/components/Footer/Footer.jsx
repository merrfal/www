import { Copyright, Info, Links, Projects, Categories } from "./";

export default function Footer() {
  return (
    <footer className="bg-white mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="border-t border-gray-200 pt-20 pb-10 border-b border-gray-40">
          <div className="grid grid-cols-2 md:auto-rows-min">
            <Info />

            <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-7">
              <Categories />
              <Links />
              <Projects />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
