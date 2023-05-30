import { Normal } from "../../layouts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Delete, ViewWithPermissions } from "../../../api/Product";
import { Loading } from "../../components";
import { DisabledDefaultState, ProductDefaultState, ProductDefaultValidation } from "../../../configs/Defaults";
import { onInput as Input } from "../../../utils/ProductManipulation"
import { OpenConfirmation } from "../../../controllers/Slices";
import { Translation } from "../../../utils/Translations";

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
  const [isHold, setIsHold] = useState(false);

  const onInput = (key, e, event = true) => Input(
    product, 
    setProduct, 
    validation, 
    setValidation, 
    key, 
    e, 
    event
  );

  const onDeleteSuccess = () => {
    const username = account?.User?.userData?.username;
    if(username !== undefined) router.push(`/profili/${username}`);
    else router.push("/");

    setIsHold(false);
  }

  const on = (name, slug) => {    
    dispatch(OpenConfirmation({
      Title: `${Translation("product-deletion-confirmation-title")} "${name}"?`,
      Message: Translation("product-deletion-confirmation-message"),
      Action: () => Delete(slug, setIsHold, onDeleteSuccess, dispatch),
    }))
  }

  useEffect(() => {
    const { slug } = router.query;

    if(!account.Loading && slug !== undefined){
      if(account.Auth) {
        const userId = account?.User?._id;

        ViewWithPermissions(slug, dispatch).then((data) => {
          if(data.success){
            const isAllowedToEdit = userId === data?.data?.productData?.user._id;

            if(isAllowedToEdit){
              setProduct(data?.data);
              setLoading(false);

              if(router?.query?.fshije === "po") {
                setTimeout(() => on(
                  data?.data?.productData?.name,
                  slug
                ), 100)
              }
            }

            else router.push(`/${slug}`)
          }
        })

      }

      else router.push(`/${slug}`)
    }
  }, [account, router]);

  const onLoad = !isHold ? {} : DisabledDefaultState;

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
                onUpdate={on}
                product={product}
                onInput={onInput}
                account={account}
                setValidation={setValidation}
                setIsHold={setIsHold}
              />
            </div>
          </div>
        </div>
      </div>}
    </Normal>
  );
}
