import { Translation } from "../utils/Translations";

const meta = {
  title: "Dhuro se nuk pakësohet",
  description: "Një platformë që mundëson të dhuroni gjëra për njerëzit që kanë nevoja për ato produkte, përdorimi është falas si produktet që dhurohen.",
};

export const ProfilePage = (profile) => {
  if (profile === null) return meta;

  else {
    meta.title = `${profile?.userData?.name + " " + profile?.userData?.surname}`
    meta.description = profile?.userData?.bio;
  }

  return meta;
};

export const ManageMeta = (mode) => {
  if (mode === "create") {
    meta.title = "Dhuro Produkt";
    meta.description = "Shtoni një produkt për personat që kanë nevoj për atë produkt, mos harroni se dhënja nuk ju bën të varfër.";
  } 
  
  else {
    meta.title = "Përdisimi i Produktit";
    meta.description = "Editoni produktin që keni shtuar, mos harroni se dhënja nuk ju bën të varfër.";
  }

  return meta;
};


export const TermsMeta = () => {
  meta.title = Translation("terms-of-service");
  meta.description = "Ketu mund te shfletoni kushtet e sherbimit te platformes dhe te kuptoni se si mund te perdorni platformen dhe si mund te beni dhurime."
  
  return meta;
}

export const PrivacyMeta = () => {
  meta.title = Translation("privacy-policy");
  meta.description = "Ketu mund te shfletoni politiken e privatësisë te platformes dhe te kuptoni se si mund te perdorni platformen dhe si mund te beni dhurime."

  return meta;
}