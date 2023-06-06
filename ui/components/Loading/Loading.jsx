export default function Loading(){
    const lottie = {
      src: "/json/LottieLoading.json",
      background: "transparent",
      speed: "1",
      style: {width: '62px', height: '62px'},
      loop: true,
      autoplay: true
    }
  
    const container = {
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  
    return (
      <main style={container}>
        <lottie-player {...lottie} />
      </main>
    );
  
}