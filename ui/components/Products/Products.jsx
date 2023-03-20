import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LatestFront } from "../../../controllers/Product";
import { Product } from "..";
import { Header, Skeleton } from "./";

export default function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (products === null) LatestFront(setProducts, dispatch);
  }, [products]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl py-20 mx-auto mb-6 px-4 sm:py-18 lg:py-6 sm:max-w-5xl lg:max-w-7xl lg:px-8">
        <Header />

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 sm:space-x-2 lg:grid-cols-3 xl:grid-cols-4 pb-4 xl:gap-x-8 ">
          {products === null && <Skeleton />}
          {products !== null && products.map((p) => <Product product={p} />)}
        </div>
      </div>
    </div>
  );
}
