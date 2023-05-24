import InfiniteScroll from "react-infinite-scroll-component";

import { Fragment, useEffect, useState } from "react";
import { Normal } from "../../layouts";
import { Categories } from "../../../data";
import { Global } from "../../../configs/Head";
import { useRouter } from "next/router";
import { Header, Filters, Skeleton } from "./";
import { Category as Products } from "../../../api/Product";
import { Empty, Product } from "../../components";
import { useDispatch } from "react-redux";
import { Error } from "..";
import { HeaderSkeleton } from "../../components";

export default function Category() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState({ products: [], hasMore: true });
  const [first, setFirst] = useState(true);

  const [filters, setFilters] = useState({
    sort: { createdAt: 1 },
    cities: [],
    statuses: [false],
  });

  useEffect(() => {
    const { slug } = router.query;

    if (category?.slug !== slug) {
      if (slug !== undefined && slug !== "") {
        const selectedCategory = Categories.find((c) => c.slug === slug);
      
        if(!selectedCategory) setCategory(false);
        
        else {
          setCategory(selectedCategory);

          if(!first) {
            setProducts({ products: [], hasMore: true });
            setFilters({ sort: { createdAt: 1 }, cities: [], statuses: [false] });
          }
          
          setTimeout(() => next(), 1000);
          setFirst(false);
        }
      }
    }
  }, [router]);

  const next = () => {
    const offset = products.products.length.toString();
    Products({ ...filters, offset }, products, setProducts, dispatch);
  };

  useEffect(() => {
    if (category !== null && category !== false && !first) {
      setProducts({ products: [], hasMore: true });
      setTimeout(() => next(), 5000);
    }
  }, [filters]);


  if (category === false) return <Error code={404} />

  return (
    <Normal>
      <Global title={category?.name} description={category?.description} />

      {category === null && <HeaderSkeleton />}

      {
        category !== null && category !== false && 
        <Header 
          name={category?.name} 
          description={category?.description} 
        />
      }

      <Filters filters={filters} setFilters={setFilters} />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {products.products.length === 0 && !products.hasMore && 
          <Empty 
            heading={PRODUCTS_EMPTY_TITLE} 
            message={PRODUCTS_EMPTY_DESCRIPTION} 
          />
        }

        <InfiniteScroll
          dataLength={products.products.length}
          next={next}
          hasMore={products.hasMore}
          loader={<Skeleton />}
          className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {products.products.map(
            (product, index) => <Fragment key={index}>
              <Product product={product} />
            </Fragment>
          )}
        </InfiniteScroll>
      </div>
    </Normal>
  );
}
