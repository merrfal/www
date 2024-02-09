export default function Loading(props){
  const { 
    withContainer = true, 
    width = "62px", 
    height = "62px" 
  } = props

    const lottie = {
      src: "/json/LottieLoading.json",
      background: "transparent",
      speed: "1",
      style: { width: width, height: height},
      loop: true,
      autoplay: true
    }
  
    const container = {
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: 'none'
    }

    if (withContainer) return (
      <section style={container}>
        <lottie-player {...lottie} />
      </section>
    )

    else return (
      <lottie-player {...lottie} />
    )
}