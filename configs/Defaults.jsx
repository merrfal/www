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
  country: false,
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
    phoneCode: "+383",
    country: "",
    city: "",
    category: "",
    postedAnonymously: "",
    gallery: []
  },
};

export const DisabledDefaultState = {
  pointerEvents: "none",
  opacity: ".65",
};


export const AllowedImageTypes = ["jpg", "png", "jpeg", "webp"]