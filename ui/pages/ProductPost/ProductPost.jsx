import { Normal } from "../../layouts";
import { useState } from "react";
import { Global } from "../../../configs/Head";

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
} from "./";

export default function ProductPost() {
  const [product, setProduct] = useState({images: []});
  const [loading, setLoading] = useState(false);

  const onUpload = (imageList) => setProduct({ ...product, images: imageList.slice(0, 5) });
  const onInput = (key, e) => setProduct({ ...product, [key]: e.target.value });

  const onLoad = !loading ? {} : {
    pointerEvents: 'none',
    opacity: '.75'
  }

  console.log(product)

  return (
    <Normal>
      <Global title="qe" description="qwe" />
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="sm:overflow-hidden sm:rounded-md">
                <div style={onLoad} className="space-y-6 bg-white p-2">
                  <Header />
                  <Title product={product} onInput={onInput} />
                  <Description product={product} onInput={onInput} />
                  <Address product={product} onInput={onInput} />

                  <div className="grid grid-cols-6 gap-6">
                    <Phone product={product} onInput={onInput} />
                    <Mode product={product} onInput={onInput} />
                    <Cities product={product} onInput={onInput} />
                    <Categories product={product} onInput={onInput} />
                  </div>
                  <Images product={product} onUpload={onUpload} />
                </div>
                <Buttons product={product} setLoading={setLoading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
