import { Normal } from "../../layouts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { View } from "../../../api/Product";

import {
  Header,
  Description,
  Address,
  Phone,
  Mode,
  Cities,
  Categories,
  Images,
  Buttons,
  Title,
} from ".";

export default function Manage({ mode = "create" }) {
  const account = useSelector((state) => state.Account);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState(mode === "create" ? false : true);

  const [validation, setValidation] = useState({
    name: false,
    description: false,
    address: false,
    phone: false,
    city: false,
    category: false,
    gallery: false,
    postedAnonymously: false,
  });

  const [product, setProduct] = useState({
    productData: {
      name: "",
      description: "",
      address: "",
      phone: "",
      city: "prishtine",
      category: "636f3ece911a24f351b57837",
      gallery: [],
      postedAnonymously: false,
    },
  });

  const onUpload = (imageList) =>
    setProduct({
      productData: {
        ...product.productData,
        gallery: imageList,
      },
    });

  const onInput = (key, e, event = true) => {
    setProduct({
      productData: {
        ...product.productData,
        [key]: event ? e.target.value : e,
      },
    });

    setValidation({
      ...validation,
      [key]: true,
    });
  };

  const onLoad = !loading ? {} : { pointerEvents: "none", opacity: ".65" };

  useEffect(() => {
    if (mode === "edit" && setLoading) {
      const { slug } = router.query;
      
      if (slug !== "" && slug !== undefined) View(
        slug, 
        setProduct, 
        dispatch, 
        setLoading,
      );
    }
  }, [router]);

  return (
    <Normal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="sm:overflow-hidden sm:rounded-md">
              <div style={onLoad} className="space-y-6 p-2">
                <Header product={product} mode={mode} />
                
                <Title
                  product={product}
                  onInput={onInput}
                  validation={validation}
                />

                <Description
                  product={product}
                  onInput={onInput}
                  validation={validation}
                />

                <Address
                  product={product}
                  onInput={onInput}
                  validation={validation}
                />

                <div className="grid grid-cols-6 gap-6">
                  <Phone
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Mode
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Cities
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Categories
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />
                </div>

                <Images
                  product={product}
                  onUpload={onUpload}
                  validation={validation}
                  mode={mode}
                />
              </div>

              <Buttons
                mode={mode}
                product={product}
                onInput={onInput}
                setLoading={setLoading}
                account={account}
                setValidation={setValidation}
              />
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
