export default function Image() {
  return (
    <div className="absolute inset-0">
      <img
        className="h-full w-full object-cover"
        src="/merrfal-hero.webp"
        alt="Dikush duke dhuruar dicka"
      />
      <div className="absolute inset-0 bg-[#00000060] mix-blend-multiply"></div>
    </div>
  );
}
