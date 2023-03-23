import { v4 } from "uuid";

export const UserObject = (user) => {
  const name = user.displayName.split(" ")[0] || "";
  const surname = user.displayName.split(" ")[1] || "";
  const email = user.email || "";
  const avatar = user.photoURL || "";

  let username = name + surname + Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  username = username.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return {
    uid: user.uid,
    name,
    surname,
    email,
    avatar: {
      url: avatar,
      isFirebase: false,
      id: null
    },
    username: username.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(),
  };
};
