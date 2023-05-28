import { Normal } from "../../layouts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { View } from "../../../api/Product";
import { Loading } from "../../components";
import { DisabledDefaultState, ProductDefaultState, ProductDefaultValidation } from "../../../configs/Defaults";
import { onInput as Input } from "../../../utils/ProductManipulation"

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
  Url,
  Given,
} from ".";

export default function EditProduct() {
  const account = useSelector((state) => state.Account);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [validation, setValidation] = useState(ProductDefaultValidation);
  const [product, setProduct] = useState(ProductDefaultState);

  const onInput = (key, e, event = true) => Input(
    product, 
    setProduct, 
    validation, 
    setValidation, 
    key, 
    e, 
    event
  );

  useEffect(() => {
    if (loading && !account.Loading) {
      const { slug } = router.query;

      if (slug !== "" && slug !== undefined) {
        if (!account.Auth) setTimeout(() => router.push(`/${slug}`), 1000);
        else View(slug, setProduct, dispatch, setLoading);
      }
    }
  }, [router, account]);

  useEffect(() => {
    const item = product?.productData;

    if (
      item?.hasOwnProperty("user") &&
      !account.Loading
    ) {
      const { slug } = router.query;

      if (account.Auth) {
        if (item?.user === account?.User?._id) setAllowedEdit(true);
        else setTimeout(() => router.push(`/${slug}`), 1000);
      } 
      
      else setTimeout(() => router.push(`/${slug}`), 1000);
    }
  }, [product, account]);

  const onLoad = !loading ? {} : DisabledDefaultState;

  return (
    <Normal>
      {loading && <Loading />}

      {!loading && <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="sm:overflow-hidden sm:rounded-md">
              <div style={onLoad} className="space-y-6 p-2">
                <Header product={product} mode="edit" />

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
                  <Given product={product} onInput={onInput} />
                  <Url product={product} />

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
                  setProduct={setProduct}
                  validation={validation}
                  mode="edit"
                />
              </div>

              <Buttons
                mode="edit"
                product={product}
                onInput={onInput}
                setLoading={setLoading}
                account={account}
                setValidation={setValidation}
              />
            </div>
          </div>
        </div>
      </div>}
    </Normal>
  );
}
