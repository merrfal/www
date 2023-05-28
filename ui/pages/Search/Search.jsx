import InfiniteScroll from "react-infinite-scroll-component";

import { Fragment, useEffect, useState } from "react";
import { Normal } from "../../layouts";
import { Global } from "../../../configs/Head";
import { useRouter } from "next/router";
import { Header, Filters, Skeleton } from ".";
import { Search as Searching } from "../../../api/Product";
import { Empty, End,  Product } from "../../components";
import { useDispatch } from "react-redux";

import { 
  META_SEARCH, 
  PRODUCTS_EMPTY_DESCRIPTION, 
  PRODUCTS_EMPTY_TITLE, 
  SEARCH_TITLE_ALL, 
  SEARCH_TITLE_DESCRIPTION, 
  SEARCH_TITLE_TERM 
} from "../../../configs/Messages";

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [first, setFirst] = useState(true);
  const [products, setProducts] = useState({ products: [], hasMore: true });
  const [allMode, setAllMode] = useState(null);

  const [filters, setFilters] = useState({
    sort: { createdAt: 1 },
    categories: [],
    cities: [],
  });

  useEffect(() => {
    const { term } = router.query;

    if (term === undefined) setAllMode(true);
    else setAllMode(false);
    
    setProducts({ products: [], hasMore: true });
    setFirst(false);
    next();
  }, [router]);

  const next = () => {
    const { term } = router.query;
    const offset = products.products.length.toString();
    const filtering = { ...filters, offset, term: term === undefined ? "" : "" };

    Searching(filtering, products, setProducts, dispatch);
  };

  useEffect(() => {
    if (!first) {
      setProducts({ products: [], hasMore: true });
      next();
    }
  }, [filters]);

  return (
    <Normal>
      <Global title={META_SEARCH} description={SEARCH_TITLE_DESCRIPTION} />
      
      { allMode == true && <Header 
        name={SEARCH_TITLE_ALL} 
        description={SEARCH_TITLE_DESCRIPTION} /> 
      }

      { allMode == false && <Header 
        name={`${SEARCH_TITLE_TERM} ${router?.query?.term}`} 
        description={SEARCH_TITLE_DESCRIPTION} /> 
      }

      <Filters filters={filters} setFilters={setFilters} />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {products.products.length === 0 && !products.hasMore && (
          <Empty 
            heading={PRODUCTS_EMPTY_TITLE} 
            message={PRODUCTS_EMPTY_DESCRIPTION} 
          />
        )}

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
            )
          }

        </InfiniteScroll>

        { !products.hasMore && products.products.length !== 0 && <End /> }
      </div>
    </Normal>
  );
}
