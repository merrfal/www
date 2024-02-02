import { Iconer, Info } from "."

export default function Container() {
  return (
    <div className="fixed inset-0 z-[1200] flex items-end justify-end px-2 py-2 pointer-events-none sm:p-6">
      <div className="w-full flex flex-col items-end space-y-4 sm:items-end">
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="p-4">
            <div className="flex items-start">
              <Iconer />
              <Info />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
