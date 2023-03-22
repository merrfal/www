export default function Cover({ userData }) {
  return (
    <img
      className="h-32 rounded-xl w-full object-cover lg:h-64"
      src={userData?.cover === null ? "/cover-no.png" : userData?.cover}
      alt="Cover Picture"
    />
  );
}
