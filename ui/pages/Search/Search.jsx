import InfiniteScroll from "react-infinite-scroll-component";

import { Fragment, useEffect, useState } from "react";
import { Normal } from "../../layouts";
import { Global } from "../../../configs/Head";
import { useRouter } from "next/router";
import { Header, Filters, Skeleton } from ".";
import { Search as Searching } from "../../../api/Product";
import { Empty, End, Product } from "../../components";
import { useDispatch } from "react-redux";
import { Translation } from "../../../utils/Translations";
import { HandleFiltersCurrentCountry } from "../../../utils/Locations";

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [first, setFirst] = useState(true);
  const [products, setProducts] = useState({ products: [], hasMore: true });
  const [allMode, setAllMode] = useState(null);
  const [filtersLoading, setFiltersLoading] = useState(true);

  const [filters, setFilters] = useState({
    sort: { createdAt: 1 },
    categories: [],
    countries: [],
    cities: []
  });

  useEffect(() => { 
    HandleFiltersCurrentCountry({ 
      filters, 
      setFilters,
      setFiltersLoading
    }) 
  }, [])

  useEffect(() => {
    const { term } = router.query;

    if (term === undefined || term === "") setAllMode(true);
    else setAllMode(false);
    
    setProducts({ products: [], hasMore: true });
    setFirst(false);
    next();
  }, [router]);

  const next = () => {
    const { term } = router.query;
    const offset = products.products.length.toString();
    const filtering = { ...filters, offset, term: term === undefined ? "" : term };

    Searching(filtering, products, setProducts, dispatch);
  };

  useEffect(() => {
    if (!first && !filtersLoading) {
      setProducts({ products: [], hasMore: true });
      next();
    }
  }, [filters]);

  // useEffect(() => {
  //   setLoading(true);

  //   const validCategory = category !== null && category !== false;
  //   if(validCategory) next({scratch: true});
  // }, [filters])

  return (
    <Normal>
      <Global 
        title={Translation("meta-search")} 
        description={Translation("meta-search-description")} 
      />
      
      <Header 
        show={allMode === true ? true : false}
        name={Translation("search-title-all")} 
        description={Translation("meta-search-description")} 
      /> 

      <Header 
        show={allMode === false ? true : false}
        name={`${Translation("search-title-term")} ${router?.query?.term}`} 
        description={Translation("meta-search-description")} 
      /> 

      <Filters 
        key="Search" 
        filters={filters} 
        setFilters={setFilters} 
        filtersLoading={filtersLoading}
      />

      <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <Empty 
          show={products.products.length === 0 && !products.hasMore}
          heading={Translation("no-products-found")} 
          message={Translation("no-products-search-found-description")} 
        />

        <InfiniteScroll
          dataLength={products.products.length}
          next={next}
          hasMore={products.hasMore}
          loader={<Skeleton />}
          className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {products.products.map(
            (product, index) => 
              <Fragment key={index}>
                <Product product={product} />
              </Fragment>
            )
          }
        </InfiniteScroll>

        <End show={!products.hasMore && products.products.length !== 0} />
      </div>
    </Normal>
  );
}
