import { Normal } from "../../layouts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Loading } from "../../components";
import { DisabledDefaultState, ProductDefaultState, ProductDefaultValidation } from "../../../configs/Defaults";
import { onInput as Input } from "../../../utils/ProductManipulation"
import { InfoIconAlert } from "../../icons";
import { Translation } from "../../../utils/Translations";
import { allowedCountries } from "../../../utils/Locations";
import { Permissonless } from "..";

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
  Country
} from ".";

export default function ProductPost() {
  const account = useSelector((state) => state.Account);

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

  useEffect(() => {
    if(!account.Loading){
      if(account.Auth){ 
          const { userAdditionalData, userData } = account?.User;
          const { phone } = userData;
          const { city, address, country } = userAdditionalData;
    
          setProduct({
            ...product,
            productData: {
              ...product.productData,
              phone: phone !== "" ? phone : "",
              city: city !== "" ? city : "",
              address: address !== "" ? address : "",
              country: country !== "" ? country : "",
            }
          })
      }

      setLoading(false);
    }
  }, [account]);

  const onLoad = !isHold ? {} : DisabledDefaultState;

  if (!loading && !account.Loading && !account.Auth) return <Permissonless />

  return (
    <Normal>
      {loading || account.Loading && <Loading />}


      {!loading && !account.Loading && account.Auth && <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div style={onLoad} className="sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 p-2">
                <Header product={product} mode="create" />

                {
                  !allowedCountries.includes(account?.User?.userAdditionalData?.country) && account.Auth &&
                    <Alert
                      title={Translation("outside-operating-country")}
                      message={Translation("outside-operating-country-description")}
                      icon={<InfoIconAlert color="#1D4ED850" />}
                    />
                }

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

                <div className="grid lg:grid-cols-9 xl:grid-cols-9 2x:grid-cols-9 md:grid-cols-2 sm:grid-cols-2 gap-3">
                  <Categories
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Mode
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Phone
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Country
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Cities
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Address
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />
                </div>

                <Images
                  product={product}
                  setProduct={setProduct}
                  validation={validation}
                  mode="create"
                />
              </div>

              <Buttons
                mode="create"
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
