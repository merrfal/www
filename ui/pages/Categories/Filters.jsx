import { Sort } from ".";

export default function Filters(props) {
  const { ordering, setOrdering } = props;
  
  return (
    <section className="z-[1293912391293]">
      <div className=" bg-white border-b border-gray-200 pb-4 z-[4919123123123]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8 z-[4919123123123]">
          <Sort ordering={ordering} setOrdering={setOrdering} />
        </div>
      </div>
    </section>
  );
}