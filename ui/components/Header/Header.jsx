import { InfoSide, User } from "./";

export default function Header() {
  return (
    <header className="relative bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center justify-between">
            <InfoSide />
            <div className="flex-1 flex items-center justify-end">
              <User />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}


