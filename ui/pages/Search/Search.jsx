import InfiniteScroll from "react-infinite-scroll-component";

import { useEffect, useState } from "react";
import { Normal } from "../../layouts";
import { Global } from "../../../configs/Head";
import { useRouter } from "next/router";
import { Header, Filters, Skeleton } from ".";
import { Search as Searching } from "../../../api/Product";
import { Empty, End, Product } from "../../components";
import { useDispatch } from "react-redux";

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [first, setFirst] = useState(true);
  const [products, setProducts] = useState({ products: [], hasMore: true });
  const [filters, setFilters] = useState({
    sort: { createdAt: 1 },
    categories: [],
    cities: [],
  });

  useEffect(() => {
    const { term } = router.query;

    if (term !== undefined) {
      setProducts({ products: [], hasMore: true });
      setFirst(false);
      next();
    }
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
      <Global title={`Ju keni kërkuar për: ${router?.query?.term}`} />

      <Header
        name={`Ju keni kërkuar për: ${router?.query?.term}`}
        description="Kërkoni dhe filtroni të gjitha produktet ne platform"
      />

      <Filters filters={filters} setFilters={setFilters} />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {products.products.length === 0 && products.hasMore === false && (
          <Empty
            heading="Ne nuk gjetëm asgjë!"
            message="Nuk u gjet asnjë produkt në platformë me këto kërkime apo sektorë."
          />
        )}

        <InfiniteScroll
          dataLength={products.products.length}
          next={next}
          hasMore={products.hasMore}
          loader={<Skeleton />}
          className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {products.products.map((p) => <Product product={p} />)}
        </InfiniteScroll>

        { products.hasMore === false && products.products.length !== 0 && <End /> }
      </div>
    </Normal>
  );
}
