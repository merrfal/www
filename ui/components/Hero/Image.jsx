import { Fragment, useEffect, useState } from "react"
import { YOUTUBE_HERO_VIDEO } from "../../../configs/Envs"

const YouTubeVideo = ({ setIsVideoOpen }) => {
  return (
    <section onClick={() => setIsVideoOpen(false)} className="fixed select-none p-8 z-[999999] top-0 right-0 bottom-0 left-0 bg-[#00000099] flex justify-center items-center">
      <iframe
        onClick={(e) => e.stopPropagation()}
        className="inset-0 rounded-md w-full h-[272px] md:h-[380px] lg:w-[940px] lg:h-[529px]"
        src={YOUTUBE_HERO_VIDEO}
        title="Merrfal.com"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      />
    </section>
  )
}

export default function Image() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const OpenVideoEmbedYoutube = () => setIsVideoOpen(true)

  useEffect(() => {
    if (isVideoOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
  }, [isVideoOpen])

  useEffect(() => {
    if (isVideoOpen) {
      const handleEsc = (e) => {
        if (e.key === "Escape") if (isVideoOpen) setIsVideoOpen(false)
      }
  
      document.addEventListener("keydown", handleEsc)
      return () => document.removeEventListener("keydown", handleEsc)
    }
  }, [isVideoOpen])


  useEffect(() => {
    const videoElement = document.querySelector('video')

    if (videoElement) {
      videoElement.play()
    }
  }, [])

  return (
    <Fragment>
      {isVideoOpen && <YouTubeVideo setIsVideoOpen={setIsVideoOpen} />}

      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
          src="./videos/hero.mp4"
        />

        <div className="absolute inset-0 bg-[#00000085] mix-blend-multiply" />

        <div onClick={() => OpenVideoEmbedYoutube()} className="absolute bottom-4 right-4 p-2 rounded-full border-gray-200 border hover:bg-[#ffffff20] transition-all ease-in-out duration-500 cursor-pointer z-[999]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6824 8.07941C21.2661 10.5939 21.4898 13.9404 19.9833 16.9018M16.3459 9.72406C17.6827 11.2866 17.8715 13.3662 16.5999 15.2065M12 6L7.58775 9.4884H3V14.5111L7.58775 14.5099L12 18V6Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Fragment>
  );
}
