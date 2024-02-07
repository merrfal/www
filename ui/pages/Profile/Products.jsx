import InfiniteScroll from "react-infinite-scroll-component"

import { Fragment, useEffect, useState } from "react"
import { Empty, End, Product } from "../../components"
import { Skeleton } from "./"
import { Products as UserProducts } from "../../../api/User"
import { Translation } from "../../../utils/Translations"

export default function Products({ user, dispatch, account }) {
  const [products, setProducts] = useState({ products: [], hasMore: true })
  const [first, setFirst] = useState(true)

  const next = (reset = false) => {
    let filters

    if(reset === false){
      filters = {
        offset: products.products.length.toString(),
        limit: 4,
        user: user._id,
        auth: account.Auth ? account.User._id : null,
      }
    }

    else {
      setProducts({ products: [], hasMore: false })

      filters = {
        offset: "0",
        limit: 4,
        user: user._id,
        auth: account.Auth ? account.User._id : null,
      }
    }

    UserProducts(filters, products, setProducts, dispatch)
  }

  useEffect(() => {
    if (first && user !== null && !account.Loading) {
      setFirst(false)
      next()
    }

    if (!first && user !== null && !account.Loading){
      setProducts({ products: [], hasMore: true })
      setTimeout(() => next(), 1000)
    }
  }, [user, account])

  return (
    <section className="max-w-2xl mx-auto mt-8 py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="max-w-xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          {Translation("given-products")}
        </h1>
        
        <p className="mt-2 text-sm text-gray-500">
          {user._id === account?.User?._id ? Translation("user-posted-products-authed") : Translation("user-posted-products-not-authed")}
        </p>
      </div>

      <Empty 
        heading={Translation("no-products-found")} 
        message={user._id === account?.User?._id ? Translation("user-product-list") : Translation("users-product-list")} 
        show={products.products.length === 0 && !products.hasMore}
      />

      <InfiniteScroll
        dataLength={products.products.length}
        next={next}
        hasMore={products.hasMore}
        loader={<Skeleton />}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-4 xl:grid-cols-4"
      >
        {products.products.map(
          (product, index) => <Fragment key={index}>
            <Product 
              product={product} 
              allowManage={true} 
            />
          </Fragment>
        )}
      </InfiniteScroll>

      <End show={!products.hasMore && products.products.length !== 0} />
    </section>
  )
}