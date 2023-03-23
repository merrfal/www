import InfiniteScroll from "react-infinite-scroll-component";

import { useEffect, useState } from "react";
import { Normal } from "../../layouts";
import { Categories } from "../../../data";
import { Global } from "../../../configs/Head";
import { useRouter } from "next/router";
import { Header, Filters, Skeleton } from "./";
import { Category as Products } from "../../../api/Product";
import { Empty, Product } from "../../components";
import { useDispatch } from "react-redux";

export default function Category() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState({ products: [], hasMore: true });
  const [first, setFirst] = useState(true);

  const [filters, setFilters] = useState({
    sort: { createdAt: 1 },
    categories: [],
    statuses: [],
  });

  useEffect(() => {
    const { slug } = router.query;

    if (category?.slug !== slug) {
      if (slug !== undefined && slug !== "") {
        const selectedCategory = Categories.find((c) => c.slug === slug);
        setCategory(selectedCategory);
      }
    }

    if (first) {
      if(category?.slug === slug) {
        if (slug !== undefined && slug !== "") {
          setFirst(false);
          next();
        }
      }
    }
  }, [router]);

  const next = () => {
    const offset = products.products.length.toString();
    Products({ ...filters, offset }, products, setProducts, dispatch);
  };

  return (
    <Normal>
      <Global title={category?.name} description={category?.description} />
      <Header name={category?.name} description={category?.description} />
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
      </div>
    </Normal>
  );
}
