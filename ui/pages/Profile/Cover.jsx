import { useEffect } from "react";
import { NO_COVER } from "../../../configs/Constants";

export default function Cover({ cover, setCover, user }) {
  useEffect(() => {
    if (user !== null) {
      let cvr = user?.userData?.cover;

      if (cvr !== undefined) {
        if (cvr.isFirebase) {
          const file = `covers/${cvr}`;
          const unextracted = ref(Storage, file);

          const url = getDownloadURL(unextracted);
          setCover(url);
        } 
        
        else {
          if (cvr.url === "") setCover(NO_COVER);
          else setCover(cvr.url);
        }
      } 
      
      else setCover(NO_COVER);
    }
  }, [user]);

  return (
    <img
      src={cover}
      onError={() => setCover(NO_COVER)}
      alt="Cover Picture"
      className={`h-32 w-full object-cover max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:h-80 lg:h-64 ${
        cover === null
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
    />
  );
}
