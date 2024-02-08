import InfiniteScroll from "react-infinite-scroll-component"

import { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { Latest } from "../../../api/Product"
import { None, Product } from ".."
import { Header, Skeleton } from "./"

export default function Products() {
  const dispatch = useDispatch()
  const router = useRouter()

  const [products, setProducts] = useState({ products: [], hasMore: true })
  const [loading, setLoading] = useState(true)

  const next = ({ scratch }) => {
    scratch && setProducts({ products: [], hasMore: true })
    setLoading(true)

    let offset = 0

    if(!scratch) offset = products.products.length

    Latest(
      products,
      setProducts, 
      offset,
      scratch,
      setLoading,
      dispatch
    )
  }

  useEffect(() => {
    next({ scratch: true })
  }, [router])

  return (
    <div className="bg-white relative">
      <div className="mx-auto mb-6 px-4 max-w-7xl md:mt-12 sm:px-6 lg:px-8">
        <Header />

        <InfiniteScroll
          dataLength={products?.products?.length}
          next={() => next({ scratch: false })}
          hasMore={products?.hasMore || loading}
          loader={<Skeleton />}
          className="py-3 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products?.products?.map(
            (product, index) => <Fragment key={index}>
              <Product showCategory={true} product={product} />
            </Fragment>
          )}
        </InfiniteScroll>
        
        {products?.length === 0 && <None />}
      </div>
    </div>
  )
}



    {/* <div 
      style={{ background: `linear-gradient(100deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)` }}
      className="absolute bottom-0 right-0 left-0 w-full h-64 z-[999]" 
    /> */}