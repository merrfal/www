import { useEffect, useState } from "react"
import { IsGiven } from "./"
import { NO_THUMBNAIL } from "../../../configs/Constants"
import { SkeletonIcon } from "../../icons"

export default function Thumbnail(props) {
  const { gallery, index, isGiven, setOpen } = props

  const [thumbnail, setThumbnail] = useState(null)
  const [loaded, setLoaded] = useState(null)

  useEffect(() => {
    if (gallery.length > 0) setThumbnail(gallery[index])
  }, [index, gallery])

  return (
    <div className={`w-full bg-gray-50 flex justify-center items-center aspect-w-1 aspect-h-1 relative h-[50vh] lg:rounded-lg md:rounded-lg xl:rounded-lg outline-none border-none ${(!loaded || thumbnail === null) ? 'animate-pulse' : ''}`}>
      { (loaded && thumbnail !== null) && <IsGiven isGiven={isGiven} /> }

      {
        (loaded && thumbnail !== null) &&  
        <div onClick={() => setOpen(true)} className="absolute bottom-4 right-4 p-2 rounded-full border-gray-200 border hover:bg-[#ffffff20] transition-all ease-in-out duration-500 cursor-pointer z-[999]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_2)">
            <path d="M16.0759 8.98089L22.5274 2.56904L22.5064 6.20354C22.4997 6.50654 22.74 6.77017 23.0434 6.76342L23.4282 6.76304C23.7316 6.75592 23.9824 6.57554 23.9888 6.27254L24.0046 0.858293C24.0046 0.853066 23.9839 0.848941 23.9839 0.843691L24.0136 0.569191C24.0166 0.416941 23.981 0.281191 23.8827 0.18409C23.7856 0.0862148 23.6495 0.0265898 23.4983 0.0307148L23.2242 0.0370898C23.219 0.0370898 23.2148 0.0389648 23.2092 0.0397383L17.8306 0.0161133C17.5276 0.0228633 17.2767 0.273363 17.27 0.576738L17.2692 0.961512C17.3153 1.31889 17.5962 1.52776 17.8992 1.52101L21.4441 1.53039L15.0155 7.92001C14.7226 8.21289 14.7226 8.68764 15.0155 8.98089C15.3083 9.27339 15.7831 9.27339 16.0759 8.98089ZM7.94743 15.019L1.49595 21.4109L1.51658 17.7963C1.5237 17.4929 1.28293 17.2293 0.979929 17.236L0.571578 17.2368C0.267828 17.2443 0.0173041 17.4243 0.0109291 17.7277L-0.00482094 23.1419C-0.00482094 23.1472 0.0158041 23.1505 0.0158041 23.1565L-0.0138209 23.4303C-0.0171959 23.5825 0.0184291 23.719 0.117054 23.8154C0.213804 23.9137 0.350304 23.9729 0.501054 23.9692L0.775554 23.9624C0.780781 23.9624 0.784531 23.9602 0.790554 23.9602L6.19278 23.9838C6.49578 23.9763 6.7463 23.7258 6.75341 23.4228L6.75416 23.0377C6.70805 22.681 6.42716 22.4714 6.12416 22.4782L2.5793 22.4688L9.00755 16.0799C9.30043 15.787 9.30043 15.3123 9.00755 15.0194C8.71468 14.7265 8.24028 14.7262 7.94741 15.019H7.94743ZM24.005 23.1415L23.9892 17.7272C23.9825 17.4239 23.7316 17.2439 23.4286 17.2364L23.0439 17.2356C22.7405 17.2288 22.5005 17.4928 22.5069 17.7958L22.5279 21.4303L16.076 15.019C15.7831 14.7261 15.3084 14.7261 15.0155 15.019C14.7226 15.3118 14.7226 15.7866 15.0155 16.0795L21.4437 22.4683L17.8992 22.4777C17.5962 22.471 17.3154 22.6806 17.2692 23.0372L17.27 23.4223C17.2771 23.7257 17.528 23.9762 17.8306 23.9833L23.2096 23.9597C23.2152 23.9597 23.2194 23.962 23.2246 23.962L23.4987 23.9687C23.6499 23.9725 23.7864 23.9132 23.8831 23.815C23.9814 23.7182 24.0166 23.5821 24.014 23.4298L23.9844 23.1561C23.9844 23.1501 24.005 23.1467 24.005 23.1415L24.005 23.1415ZM2.57933 1.53097L6.12458 1.52167C6.42758 1.52842 6.70845 1.31917 6.75458 0.962144L6.75383 0.577043C6.7463 0.273691 6.49576 0.022793 6.19318 0.016418L0.790554 0.039668C0.784554 0.038918 0.780804 0.037043 0.775554 0.037043L0.501054 0.0306445C0.350327 0.026543 0.213452 0.086168 0.117054 0.18402C0.0184291 0.281145 -0.0171725 0.416895 -0.0138209 0.569145L0.0158041 0.843644C0.0158041 0.848871 -0.00482094 0.852644 -0.00482094 0.858269L0.0109291 6.27252C0.0176791 6.57552 0.268202 6.75589 0.571578 6.76302L0.979952 6.76337C1.28295 6.77012 1.5233 6.5065 1.51655 6.2035L1.49593 2.58887L7.94743 8.98075C8.23993 9.27364 8.71508 9.27364 9.00798 8.98075C9.30087 8.68785 9.30085 8.21275 9.00798 7.91987L2.57933 1.53097Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_2_2">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      }

      {
        (thumbnail === null || !loaded) && <SkeletonIcon />
      }

      <img
        onClick={() => setOpen(true)}
        onError={() => {setThumbnail(NO_THUMBNAIL); setLoaded(true) }}
        onLoad={() => setLoaded(true)}
        src={thumbnail}
        style={(thumbnail === null || !loaded) ? { display: 'none' } : {}}
        loading="lazy"
        onDragStart={(e) => e.preventDefault()}
        className="w-full object-center cursor-pointer object-cover lg:rounded-lg md:rounded-lg xl:rounded-lg h-full outline-none border-none"
      />
    </div>
  )
}