import * as Messages from "../../../configs/Messages";
import InfiniteScroll from "react-infinite-scroll-component";

import { useEffect, useState } from "react";
import { Empty, End, Product } from "../../components";
import { Skeleton } from "./";
import { Products as UserProducts } from "../../../api/User";

export default function Products({ user, dispatch, account }) {
  const [products, setProducts] = useState({ products: [], hasMore: true });
  const [first, setFirst] = useState(true);

  const next = () => {
    const filters = {
      offset: products.products.length.toString(),
      limit: 4,
      user: user._id,
      auth: account.Auth ? account.User._id : null,
    }

    UserProducts(filters, products, setProducts, dispatch);
  };

  useEffect(() => {
    if (first && user !== null && !account.Loading) {
      setFirst(false);
      next();
    }
  }, [user, account])

  return (
    <main className="max-w-2xl mx-auto mt-8 py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="max-w-xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Produktet e dhuruara
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {user._id === account?.User?._id ? Messages.USER_PRODUCTS : Messages.USERS_PRODUCTS}
        </p>
      </div>

      {products.products.length === 0 && !products.hasMore && (
        <Empty
          heading="Nuk u gjet asnjë produkt"
          message={user._id === account?.User?._id ? Messages.USER_PRODUCTS_LIST : Messages.USERS_PRODUCTS_LIST}
        />
      )}

      <InfiniteScroll
        dataLength={products.products.length}
        next={next}
        hasMore={products.hasMore}
        loader={<Skeleton />}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4"
      >
        {products.products.map((p) => <Product product={p} />)}
      </InfiniteScroll>

      {!products.hasMore && products.products.length !== 0 && <End />}
    </main>
  );
}
