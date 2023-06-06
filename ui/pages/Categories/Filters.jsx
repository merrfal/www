import { Sort } from ".";

export default function Filters({ ordering, setOrdering }) {
  return (
    <section>
      <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
        <div className="max-w-7xl z-10 mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
          <Sort ordering={ordering} setOrdering={setOrdering} />
        </div>
      </div>
    </section>
  );
}
