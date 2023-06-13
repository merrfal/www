export default function Image() {
  return (
    <div className="absolute inset-0">
      <img loading="lazy" className="h-full w-full object-cover" src="/general-images/merrfal-hero.webp" />
      <div className="absolute inset-0 bg-[#00000060] mix-blend-multiply" />
    </div>
  );
}
