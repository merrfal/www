import { Copyright, Info, Links, Projects, Categories } from "./";

export default function Footer() {
  return (
    <footer className="bg-white mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="border-t border-gray-200 pt-20 pb-10 border-b border-gray-40">
          <div className="grid lg:grid-cols-2 md:auto-rows-min md:gap-2 sm:gap-4">
            <Info />

            <div className="mt-10 col-span-6 grid  grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-8 md:mt-0 md:row-start-1 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <Categories className="mb-8 sm:mb-0" />
              <Links className="mb-8 sm:mb-0" />
              <Projects />
            </div>
          </div>
        </div>
        
        <Copyright />
      </div>
    </footer>
  );
}
