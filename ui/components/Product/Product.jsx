import Link from "next/link";

import { ManageBox, Image, Info } from "./";
import { useSelector } from "react-redux";

export default function Product(props) {
  const account = useSelector((state) => state.Account);

  const { 
    product: { productData }, 
    allowManage = account?.User?.userAdditionalData?.role === "admin",
    showCategory = true 
  } = props;

  return (
    <div className="group relative">
      {
        allowManage && 
        <ManageBox 
          account={account} 
          user={productData?.user} 
          slug={productData?.slug} 
        />
      }

      <Link href={`/${productData?.slug}`}>
        <a>
          <Image 
            productData={productData} 
            showCategory={showCategory} 
            allowManage={allowManage}
          />
          
          <Info productData={productData} />
        </a>
      </Link>
    </div>
  );
}
