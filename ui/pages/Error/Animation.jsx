export default function Animation() {
  return (
    <div className="flex justify-center align-center items-center">
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_f2vwipdy.json"
        background="transparent"
        speed="1"
        style={{ width: "320px" }}
        loop
        autoplay
      />
    </div>
  );
}
