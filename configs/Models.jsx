import { Schema, model } from "mongoose";

const UserModel = new Schema(
  {
    userData: {
      name: { type: String, required: true },
      surname: { type: String, required: true },
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      phone: { type: String, default: "" },
      uid: { type: String, required: true, unique: true },
      avatar: {type: Object, default: {url: "", isFirebase: false, id: null}},
      bio: { type: String, default: "" },
      cover: { type: Object, default: {url: "", isFirebase: false, id: null}},
      website: { type: String, default: "" },
    },
    userAdditionalData: {
      authProvider: { type: String, default: "Google" },
      isEmailVerified: { type: Boolean, default: false },
      isUserActive: { type: Boolean, default: true },
      isUserSuspended: { type: Boolean, default: false },
      isUserVerified: { type: Boolean, default: false },
      role: { type: String, default: "user" },
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      country: { type: String, default: "" },
    },
    userActivities: {
      products: { type: Array, default: [] },
      productCount: { type: Number, required: true, default: 0 },
      views: { type: Number, required: true, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = new Schema(
  {
    productData: {
      name: { type: String, required: true },
      description: { type: String, required: true },
      gallery: {  type: Array, required: false },
      slug: { type: String, required: true, unique: true },
      category: { type: String, required: true },
      user: { type: String, required: true },
      phone: { type: String, default: '' },
      address: { type: String, default: '' },
      city: { type: String, default: '' },
      country: { type: String, default: '' },
      isPublished: { type: Boolean, default: false },
      isGiven: { type: Boolean, default: false },
      postedAnonymously: { type: Boolean, default: false},
    },
    productAdditionalData: {
      views: { type: Number, required: true, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const CategorySchema = new Schema(
  {
    categoryData: {
      name: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
    },
    additionalData: {
      products: { type: Array, default: [] },
      productCount: { type: Number, default: 0 },
      views: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

let Product;
let User;
let Category;

try {
  Product = model("Product");
  User = model("User");
  Category = model("Category");
} 

catch (error) {
  Product = model("Product", ProductSchema);
  User = model("User", UserModel);
  Category = model("Category", CategorySchema);
}

export { Product, User, Category };
