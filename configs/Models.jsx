import { Schema, model } from "mongoose"
import { NO_AVATAR, NO_COVER } from "./Constants"

const UserModel = new Schema(
  {
    userData: {
      name: { type: String, required: false, default: '' },
      surname: { type: String, required: false, default: '' },
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      uid: { type: String, required: true, unique: true },
      phone: { type: String, default: '' },
      phoneCode: { type: String, default: '+383' },
      avatar: { type: String, default: NO_AVATAR },
      cover: { type: String, default: NO_COVER }
    },
    userAdditionalData: {
      isUserVerified: { type: Boolean, default: false },
      isBanned: { type: Boolean, default: false },
      role: { type: String, default: "user" },
      address: { type: String, default: '' },
      city: { type: String, default: '' },
      country: { type: String, default: 'XK' },
    },
    userActivities: {
      products: { type: Array, default: [] },
      productCount: { type: Number, required: true, default: 0 },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

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
      phoneCode: { type: String, default: '+383' },
      country: { type: String, default: '' },
      isGiven: { type: Boolean, default: false },
      isPublished: { type: Boolean, default: true },
      postedAnonymously: { type: Boolean, default: false},
    },
    productAdditionalData: {
      views: { type: Number, required: true, default: 0 },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

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
    versionKey: false,
  },
)

let Product
let User
let Category

try {
  Product = model("Product")
  User = model("User")
  Category = model("Category")
} 

catch (error) {
  Product = model("Product", ProductSchema)
  User = model("User", UserModel)
  Category = model("Category", CategorySchema)
}

export { Product, User, Category }