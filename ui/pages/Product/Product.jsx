import "yet-another-react-lightbox/styles.css"

import Lightbox from "yet-another-react-lightbox"

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getDownloadURL, ref } from "firebase/storage"
import { useRouter } from "next/router"
import { View, Similar as Recommendations } from "../../../api/Product"
import { Normal } from "../../layouts"
import { Global } from "../../../configs/Head"
import { Storage } from "../../../configs/Firebase"
import { Error } from ".."
import { Loading } from "../../components"

import {
  Info,
  Phone,
  Poster,
  Similar,
  Steps,
  Gallery,
  Thumbnail,
  Category,
  Views,
  Edit,
} from "./"

export default function Product() {
  const dispatch = useDispatch()
  const router = useRouter()

  const [product, setProduct] = useState(null)
  const [products, setProducts] = useState(null)
  const [gallery, setGallery] = useState([])
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [isSimilar, setIsSimilar] = useState(null)

  useEffect(() => {
    if (router) {
      const { slug } = router.query

      if (slug !== "" && slug !== undefined) {
        setProduct(null)
        View(slug, setProduct, dispatch)
      }
    }
  }, [router])

  useEffect(() => {
    if (product !== null && product !== false && products === null) {
      const { category = "" } = product.productData

      Recommendations(
        category, 
        setProducts, 
        setIsSimilar, 
        dispatch
      )
    }
  }, [product, router])

  useEffect(() => {
    if (product !== null && product !== false) {
      let thumb = product?.productData?.gallery

      Promise.all(thumb.map((image) => {
        const file = `products/${image.id}`
        const unextracted = ref(Storage, file)

        return getDownloadURL(unextracted)
      }))
      
      .then((urls) => setGallery(urls))
      .catch(() => setGallery([]))
    }
  }, [product])

  const HandleChange = () => {
    const prev = document.querySelector('.yarl__navigation_prev')
    const next = document.querySelector('.yarl__navigation_next')

    if (prev) {
      if (index === 0)  prev.style.display = "none"
      else prev.style.display = "block"
    }

    if (next) {
      if (index === gallery.length - 1) next.style.display = "none"
      else next.style.display = "block"
    }
  }

  useEffect(() => {
    if (open) {
      const body = document.querySelector('body')
      body.style.overflow = "hidden"
    }

    else {
      const body = document.querySelector('body')
      body.style.overflow = "auto"
    }

    return () => {
      const body = document.querySelector('body')
      body.style.overflow = "auto"
    }
  }, [open])

  useEffect(() => HandleChange(), [index, product, open])

  if (product === false) return <Error code={404} />

  return (
    <Normal>
      <Global
        title={product?.productData?.name}
        description={product?.productData?.description }
        thumbnail={product?.productData?.gallery[0]?.url}
      />

      {product === null ? <Loading /> : null}

      {product !== null && (
        <div className="bg-white">
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={gallery.map((image) => ({ src: image }))}
            index={index}
            carousel={{ finite: true }}
            on={{ 
              "view": ({ index }) => setIndex(index),
              "click": () => HandleChange(),
              "entering": () => HandleChange(),
              "entered": () => HandleChange(),
              "exiting": () => HandleChange(),
              "exited": () => HandleChange(),
            }}
            controller={{
              closeOnPullUp: true,
              closeOnPullDown: true,
              closeOnBackdropClick: true,
            }}
          />

          <section className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-none">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                <div className="flex flex-col-reverse ">
                  <Gallery
                    gallery={gallery}
                    index={index}
                    setIndex={setIndex}
                  />

                  <Thumbnail 
                    gallery={gallery} 
                    index={index} 
                    isGiven={product?.productData?.isGiven}
                    setOpen={setOpen}
                  />
                </div>

                <div className="mt-10 lg:ml-3 xl:ml-3 md:ml-3 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                  <div className="flex items-center mb-8">
                    <Category category={product?.productData?.category} />
                    
                    <div className="h-5 border-r border-gray-200 mx-4" />

                    <Views product={product} />
                    <Edit 
                      slug={product?.productData?.slug} 
                      user={product?.productData?.user} 
                      postedAnonymously={product?.productData?.postedAnonymously}
                    />
                  </div>
                  
                  <Info productData={product?.productData} />
                  <Poster productData={product?.productData} />
                  <Phone productData={product?.productData} />
                  <Steps />
                </div>
              </div>

              <Similar 
                products={products} 
                productId={product?._id} 
                isSimilar={isSimilar} 
              />
            </div>
          </section>

        </div>
      )}
    </Normal>
  )
}