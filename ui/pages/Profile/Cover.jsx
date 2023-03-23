export default function Cover({ userData }) {
  return (
    <img
      className="h-32 w-full object-cover max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:h-80 lg:h-64"
      src={userData?.cover === null ? "/cover-no.png" : userData?.cover}
      alt="Cover Picture"
    />
  );
}
