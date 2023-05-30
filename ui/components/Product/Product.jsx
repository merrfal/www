import Link from "next/link";
import { ManageBox, Image, Info } from "./";

export default function Product({ product: { productData }, allowManage = true }) {
  return (
    <div className="group relative">
      { 
        allowManage &&
          <ManageBox 
            user={productData?.user} 
            slug={productData?.slug} 
          />
      }

      <Link href={`/${productData?.slug}`}>
        <a>
          <Image productData={productData} />
          <Info productData={productData} />
        </a>
      </Link>
    </div>
  );
}
