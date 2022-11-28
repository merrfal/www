import { Loader as Meta } from '../../../data/metas'; 

export default function Loader() {
  const lottie = {
    src: "https://lottie.host/c47c3f04-5fb5-45e5-b0ab-c7f2990effe4/tDIHWvQxqp.json",
    background: "transparent",
    speed: "1",
    style: {width: '90px', height: '90px'},
    loop: true,
    autoplay: true
  }

  const container = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <main style={container}>
      <Meta />
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player {...lottie} />
    </main>
  );
}
