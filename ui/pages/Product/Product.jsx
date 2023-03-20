import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ViewFront, SimilarFront } from "../../../controllers/Product";
import { Normal } from "../../layouts";
import { useRouter } from "next/router";
import { Loading } from "../../../ui/components";
import { Global } from "../../../configs/Head";

import {
  Info,
  Location,
  Phone,
  Poster,
  Similar,
  Steps,
  Gallery,
  Skeleton,
  Thumbnail,
} from "./";

export default function Product() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [prodcuts, setProducts] = useState(null);

  useEffect(() => {
    if (router && product === null) {
      const { slug = "" } = router.query;
      if (slug !== "") ViewFront(slug, setProduct, dispatch);
    }
  }, [router]);

  useEffect(() => {
    if (product !== null && prodcuts === null) {
      const { category = "" } = product.productData;
      SimilarFront(category, setProducts, dispatch);
    }
  }, [product]);

  return (
    <Normal>
      {/* <Global
        title={page.Loaded ? page.Page.Name : "Po ngarkohet..."}
        description={page.Loaded ? page.Page.Description : "Po ngarkohet..."}
        thumbnail={page.Loaded ? page.Page.Thumbnail : "/product-no.png"}
      /> */}
      <section style={{ padding: "1em" }}>
        {product === null && <Loading />}
        {product !== null && (
          <div>
            <div className="bg-white">
              <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    <div className="flex flex-col-reverse">
                      <Gallery productData={product.productData} />
                      <Thumbnail productData={product.productData} />
                    </div>

                    <div className="mt-10 ml-3 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                      <Location productData={product.productData} />
                      <Info productData={product.productData} />
                      <Poster productData={product.productData} />
                      <Phone productData={product.productData} />
                      <Steps />
                    </div>
                  </div>

                  <Similar products={prodcuts} />
                </div>
              </main>
            </div>
          </div>
        )}
      </section>
    </Normal>
  );
}
