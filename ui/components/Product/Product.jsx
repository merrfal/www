import Link from "next/link";
import { ManageBox, Image, Info } from "./";

export default function Product({ product: { productData }, allowManage = false, onDelete = null }) {
  return (
    <div className="group relative">
      { 
        allowManage &&
          <ManageBox 
            onDelete={onDelete}
            user={productData?.user} 
            slug={productData?.slug} 
            name={productData?.name}
            id={productData?._id}
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
