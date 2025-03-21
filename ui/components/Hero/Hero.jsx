import { Image, Buttons, Info } from "."

export default function Hero() {
  return (
    <div className="mt-0 mb-16">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <Image />
            
            <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <Info />
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
