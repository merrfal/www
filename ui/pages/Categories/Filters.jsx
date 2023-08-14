import { Sort } from ".";

export default function Filters(props) {
  const { ordering, setOrdering } = props;
  
  return (
    <section>
      <div className="z-10 bg-white border-b border-gray-200 pb-4">
        <div className="max-w-7xl z-10 mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
          <Sort ordering={ordering} setOrdering={setOrdering} />
        </div>
      </div>
    </section>
  );
}