import InfiniteScroll from "react-infinite-scroll-component"

import { Fragment, useEffect, useState } from "react"
import { Normal } from "../../layouts"
import { Categories } from "../../../data"
import { Global } from "../../../configs/Head"
import { useRouter } from "next/router"
import { Header, Filters, Skeleton } from "./"
import { Category as Products } from "../../../api/Product"
import { Empty, End, Loading, Product } from "../../components"
import { useDispatch } from "react-redux"
import { Error } from ".."
import { Translation } from "../../../utils/Translations"

export default function Category({ category: cat }) {
  const router = useRouter()
  const dispatch = useDispatch()

  const [category, setCategory] = useState(null)
  const [products, setProducts] = useState({ products: [], hasMore: true })
  const [loading, setLoading] = useState(true)

  const [filters, setFilters] = useState({
    sort: { createdAt: -1 },
    cities: [],
    countries: [],
    statuses: [ false ],
  })

  useEffect(() => {
    const { slug } = router.query

    if (slug !== undefined && slug !== "") {
      const selectedCategory = Categories.find((c) => c.slug === slug)

      if(!selectedCategory) setCategory(false)
      else setCategory(selectedCategory)
    }

    return () => {
      setCategory(null)
      setProducts({ products: [], hasMore: true })
      setFilters({
        sort: { createdAt: -1 },
        cities: [],
        countries: [],
        statuses: [false],
      })
    }
  }, [router])

  useEffect(() => {
    setLoading(true)

    const validCategory = category !== null && category !== false
    if(validCategory) next({ scratch: true })
  }, [category, filters])

  const next = ({ scratch }) => {
    scratch && setProducts({ products: [], hasMore: true })
    setLoading(true)

    let offset = 0

    if(!scratch) offset = products.products.length

    Products(
      { 
        ...filters, 
        offset, 
        category: category?._id
      }, 
      scratch,
      products, 
      setProducts, 
      setLoading,
      dispatch
    )
  }

  if (category === false) return <Error code={404} />

  return (
    <Normal>
      <Global 
        title={cat?.categoryData?.name || category?.name} 
        description={cat?.categoryData?.description || category?.description} 
        image={'/categories/' + cat?.categoryData?.slug + '.webp' || category?.slug + '.webp'}
      />

      <Header 
        name={category?.name} 
        description={category?.description}
        show={category !== null && category !== false} 
      />

      {category === null ? <Loading /> : null}

      {
        category !== null && category !== false &&
        <Fragment>
          <Filters 
            key="Category"
            filters={filters} 
            setFilters={setFilters} 
          />

          <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
            <Empty 
              heading={Translation("no-products-found")} 
              message={Translation("category-products-description-empty")}
              show={products.products.length === 0 && !products.hasMore && !loading}
            />

            <InfiniteScroll
              dataLength={products.products.length}
              next={() => next({scratch: false})}
              hasMore={products.hasMore || loading}
              loader={<Skeleton />}
              scrollThreshold="400px"
              className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
              {products.products.map(
                (product, index) => <Fragment key={index}>
                  <Product showCategory={false} product={product} />
                </Fragment>
              )}
            </InfiniteScroll>
          </div>

          <End show={!products.hasMore && products.products.length !== 0 && !loading} />
        </Fragment>
      }
    </Normal>
  )
}