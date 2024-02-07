import Link from "next/link"

import { Fragment } from "react"
import { ManageBox, Image, Info } from "./"
import { useSelector } from "react-redux"

export default function Product(props) {
  const account = useSelector((state) => state.Account)

  const { 
    product: { productData }, 
    allowManage,
    showCategory = true,
    showGiven = true
  } = props

  return (
    <div className="w-full group relative mb-4">
      {
        allowManage && 
          <ManageBox 
            account={account} 
            user={productData?.user} 
            slug={productData?.slug} 
          />
      }

      <Link className="w-full" href={`/${productData?.slug}`}>
        <Image 
          productData={productData} 
          showCategory={showCategory} 
          allowManage={allowManage}
          showGiven={showGiven}
        />
        
        <Info productData={productData} />
      </Link>
    </div>
  )
}