import { func, object } from "prop-types";
import { Categories } from ".";
import { Locations, Sort } from "../../components";

export default function Filters({filters, setFilters}) {
  return (
    <section>
      <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
          <Sort filters={filters} setFilters={setFilters} />

          <div className="hidden sm:block">
            <div className="flow-root">
              <div className="-mx-4 flex items-center divide-x divide-gray-200">
                <Categories filters={filters} setFilters={setFilters} />
                <Locations filters={filters} setFilters={setFilters} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Filters.propTypes = {
  filters: object.isRequired,
  setFilters: func.isRequired,
}