import { Sort, Cities, Statuses } from "./";

export default function Filters({filters, setFilters}) {
  return (
    <section>
      <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
          <Sort filters={filters} setFilters={setFilters} />

          <div className="hidden sm:block">
            <div className="flow-root">
              <div className="-mx-4 flex items-center divide-x divide-gray-200">
                <Cities filters={filters} setFilters={setFilters} />
                <Statuses filters={filters} setFilters={setFilters} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
