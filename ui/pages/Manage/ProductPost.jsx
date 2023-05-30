import { Normal } from "../../layouts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
          const { userAdditionalData } = account?.User;
          const { userData } = account?.User;
          const { phone } = userData;
          const { city, address } = userAdditionalData;
    
          if(phone !== "") onInput("phone", phone, false);
          if(city !== "") onInput("city", city, false);
          if(address !== "") onInput("address", address, false);
      }

      setLoading(false);
    }
  }, [account]);

  const onLoad = !isHold ? {} : DisabledDefaultState;

  return (
    <Normal>
      {loading && <Loading />}

      {!loading && <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="sm:overflow-hidden sm:rounded-md">
              <div style={onLoad} className="space-y-6 p-2">
                <Header product={product} mode="create" />

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
