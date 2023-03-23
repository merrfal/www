const name = "Dhuro se nuk pakësohet";
const description = "Një platformë që mundëson të dhuroni gjëra për njerëzit që kanë nevoja për ato produkte, përdorimi është falas si produktet që dhurohen.";

const Global = ({ title, description }) => {
  const meta = {
    title: title,
    description: description,
  };

  return meta;
};

export const ProfilePage = (profile) => {
  const meta = {
    title: "",
    description: "",
  };

  if (profile === null) {
    meta.title = name;
    meta.description = description;
  } 
  
  else {
    meta.title = profile.name;
    meta.description = profile.bio;
  }

  return meta;
};
