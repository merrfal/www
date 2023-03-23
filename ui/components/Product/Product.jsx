import Link from "next/link";
import { Image, Info } from "./";

export default function Product({ product: {productData} }) {
  return (
    <Link href={`/${productData.slug}`} key={productData.slug}>
      <a className="group relative">
        <Image productData={productData} />
        <Info productData={productData} />
      </a>
    </Link>
  );
}
