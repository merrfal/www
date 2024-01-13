import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Latest } from "../../../api/Product";
import { None, Product } from "..";
import { Header, Skeleton } from "./";

export default function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (products === null) Latest(setProducts, dispatch);
  }, [products]);

  return (
    <div className="bg-white">
      <div className="mx-auto mb-6 px-4 max-w-7xl md:mt-12 sm:px-6 lg:px-8">
        <Header />

        <div className="py-3 grid grid-cols-2 gap-4 lg:gap-2 xl:gap-2 sm:grid-cols-2 sm:space-x-2 lg:grid-cols-3 xl:grid-cols-4">
          {products === null && <Skeleton />}

          {products !== null && products.map((product, index) => 
            <Fragment key={index}>
              <Product product={product} />
            </Fragment>
          )}
        </div>
        
        {products?.length === 0 && <None />}
      </div>
    </div>
  );
}
