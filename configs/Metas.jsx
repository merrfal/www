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

export const CategoriesMeta = () => {
  meta.title = "Kategoritë";
  meta.description = "Këtu mund të shfletoni një varg kategorish të shtuara, të cilat do t'iu lehtësojnë shfletuesve kërkimin për nevojat e tyre. Në këtë mënyrë, ju mund të gjeni më shpejt dhe më lehtësisht atë që kërkoni.";

  return meta;
};

export const ManageMeta = (mode, product) => {
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
