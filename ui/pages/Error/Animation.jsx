export default function Animation() {
  return (
    <div className="flex justify-center align-center items-center">
      <lottie-player
        src="/json/LottieError.json"
        background="transparent"
        speed="1"
        style={{ height: "259px" }}
        loop
        autoplay
      />
    </div>
  );
}
