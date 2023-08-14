import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { View, Similar as Recommendations } from "../../../api/Product";
import { Normal } from "../../layouts";
import { useRouter } from "next/router";
import { Global } from "../../../configs/Head";
import { getDownloadURL, ref } from "firebase/storage";
import { Storage } from "../../../configs/Firebase";
import { Error } from "..";
import { Loading } from "../../components";

import {
  Info,
  Phone,
  Poster,
  Similar,
  Steps,
  Gallery,
  Thumbnail,
  Category,
  Views,
  Edit,
} from "./";

export default function Product() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (router) {
      const { slug } = router.query;

      if (slug !== "" && slug !== undefined) {
        View(slug, setProduct, dispatch);
      }
    }
  }, [router]);

  useEffect(() => {
    if (product !== null && product !== false && products === null) {
      const { category = "" } = product.productData;
      Recommendations(category, setProducts, dispatch);
    }
  }, [product, router]);

  useEffect(() => {
    if (product !== null && product !== false) {
      let thumb = product?.productData?.gallery;

      Promise.all(thumb.map((image) => {
        const file = `products/${image.id}`;
        const unextracted = ref(Storage, file);

        return getDownloadURL(unextracted);
      }))
      
      .then((urls) => setGallery(urls));
    }
  }, [product]);

  if (product === false) return <Error code={404} />

  return (
    <Normal>
      <Global
        title={product?.productData?.name}
        description={product?.productData?.description }
        thumbnail={product?.productData?.gallery[0].url}
      />

      {product === null ? <Loading /> : null}

      {product !== null && (
        <div className="bg-white">
          <section className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-none">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                <div className="flex flex-col-reverse ">
                  <Gallery
                    gallery={gallery}
                    index={index}
                    setIndex={setIndex}
                  />

                  <Thumbnail 
                    gallery={gallery} 
                    index={index} 
                    isGiven={product?.productData?.isGiven}
                  />
                </div>

                <div className="mt-10 lg:ml-3 xl:ml-3 md:ml-3 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                  <div className="flex items-center mb-8">
                    <Category category={product?.productData?.category} />
                    <div className="h-5 border-r border-gray-200 mx-4" />
                    <Views product={product} />
                    <Edit slug={product?.productData?.slug} user={product?.productData?.user} />
                  </div>
                  
                  <Info productData={product?.productData} />
                  <Poster productData={product?.productData} />
                  <Phone productData={product?.productData} />
                  <Steps />
                </div>
              </div>

              <Similar products={products} productId={product?._id} />
            </div>
          </section>

        </div>
      )}
    </Normal>
  );
}
