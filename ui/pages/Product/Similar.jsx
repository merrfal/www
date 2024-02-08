import { Fragment } from "react"
import { Empty, Product } from "../../components"
import { SimilarSkeleton } from "./"
import { Translation } from "../../../utils/Translations"

export default function Similar({ products, productId, isSimilar }) {
  return (
    <section className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
      <h2 className="text-xl font-bold text-gray-900">
        {isSimilar ? Translation("similar-products") : Translation("other-products")}
      </h2>

      <div className="py-6 grid grid-cols-2 gap-4 lg:gap-2 xl:gap-2 sm:grid-cols-2 sm:space-x-2 lg:grid-cols-3 xl:grid-cols-4">
        {products === null && <SimilarSkeleton />}

        {products?.filter(product => product?._id !== productId)?.splice(0, 4)?.map((product, index) => {
          if(product?._id !== productId) return (
            <Fragment key={index}>
              <Product product={product} />
            </Fragment>
          )
        })}
      </div>

        <Empty 
          heading={Translation("no-products-found")} 
          message={isSimilar ? Translation("similar-products-description") : Translation("other-products-description")}
          show={products !== null && products.length === 0} 
        />
    </section>
  )
}