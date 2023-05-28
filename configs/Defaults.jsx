export const AccountDefaultState = {
  User: null,
  Auth: false,
  Loading: true,
};

export const ConfirmationDefaultState = {
  Title: null,
  Message: null,
  Action: null,
  Visibility: false,
};

export const NotificationDefaultState = {
  Title: null,
  Message: null,
  Action: null,
  Visibility: false,
};

export const ProductDefaultValidation = {
  name: false,
  description: false,
  address: false,
  phone: false,
  city: false,
  category: false,
  gallery: false,
  postedAnonymously: false,
};

export const ProductDefaultState = {
  productData: {
    name: "",
    description: "",
    address: "",
    phone: "",
    city: "prishtine",
    category: "636f3ece911a24f351b57837",
    gallery: [],
    postedAnonymously: false,
  },
};

export const DisabledDefaultState = {
  pointerEvents: "none",
  opacity: ".65",
};


export const AllowedImageTypes = ["jpg", "png", "jpeg", "webp"]