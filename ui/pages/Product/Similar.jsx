import { Fragment } from "react";
import { PRODUCTS_EMPTY_TITLE, PRODUCTS_RECOMONDATION_DESCRIPTION_EMPTY } from "../../../configs/Messages";
import { Empty, Product } from "../../components";
import { SimilarSkeleton } from "./";

export default function Similar({ products: allProducts, productId }) {
  let products = allProducts || null;
  
  if (products !== null) {
    const index = products.findIndex((p) => p._id === productId);
    
    if (index !== -1) products.splice(index, 1);
    else products.splice(products.length - 1, 1);
  }
  
  return (
    <section className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Produkte të ngjashme
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products === null && <SimilarSkeleton />}

        {products !== null && products.length !== 0 && products.map((product, index) => (
          <Fragment key={index}>
            <Product product={product} />
          </Fragment>
        ))}
      </div>

      {products !== null && products.length === 0 && (
        <Empty 
          heading={PRODUCTS_EMPTY_TITLE} 
          message={PRODUCTS_RECOMONDATION_DESCRIPTION_EMPTY} 
        />
      )}
    </section>
  );
}
