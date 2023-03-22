export default function Loading(){
    const lottie = {
      src: "https://lottie.host/c47c3f04-5fb5-45e5-b0ab-c7f2990effe4/tDIHWvQxqp.json",
      background: "transparent",
      speed: "1",
      style: {width: '32px', height: '32px'},
      loop: true,
      autoplay: true
    }
  
    const container = {
      width: '100%',
      display: 'flex',
      height: '0',
      justifyContent: 'center',
      alignItems: 'center'
    }
  
    return (
      <main style={container}>
        <lottie-player {...lottie} />
      </main>
    );
  
}