import { Fragment } from "react";
import { Empty, Product } from "../../components";
import { SimilarSkeleton } from "./";
import { Translation } from "../../../utils/Translations";
import { array, string } from "prop-types";

export default function Similar({ products: allProducts, productId }) {
  let products = allProducts || null;

  if (products !== null && productId !== undefined) {
    const index = products.findIndex((p) => p._id === productId);
    
    if (index !== -1) products = products.splice(index, 1);
    else products = products.splice(products.length - 1, 1);
  }

  return (
    <section className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        {Translation("similar-products")}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products === null && <SimilarSkeleton />}

        {products !== null && products.length !== 0 && products.map((product, index) => (
          <Fragment key={index}>
            <Product product={product} />
          </Fragment>
        ))}
      </div>

        <Empty 
          heading={Translation("no-products-found")} 
          message={Translation("similar-products-description")}
          show={products !== null && products.length === 0} 
        />
    </section>
  );
}

Similar.propTypes = {
  products: array.isRequired,
  productId: string.isRequired,
}