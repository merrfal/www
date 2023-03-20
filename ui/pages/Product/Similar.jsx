import { Product } from "../../components";

export default function Similar({ products }) {
  if (products !== null)
    if (products.length !== 0)
      return (
        <section className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
          <h2 id="related-heading" className="text-xl font-bold text-gray-900">
            Produkte të Ngjashme
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((p) => (
              <Product product={p} key={p._id} />
            ))}
          </div>
        </section>
      );
}
