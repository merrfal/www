import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  Name: {
    type: String,
    required: true,
    default: '',
  },
  Surname: {
    type: String,
    required: true,
    default: '',
  },
  Uid: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
    default: '',
  },
  Bio: {
    type: String,
    required: true,
    default: '',
  },
  Verification: {
    type: Boolean,
    required: true,
    default: false,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Avatar: {
    type: String,
    required: true,
    default: null,
  },
  Cover: {
    type: String,
    required: true,
    default: null,
  },
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Info: {
    type: Object,
    required: true,
    default: {},
  },
  Bio: {
    type: String,
    required: false,
    default: "",
  },
  Website: {
    type: String,
    required: false,
    default: "",
  },
  Products: {
    type: Array,
    required: true,
    default: [],
  },
  Role: {
    type: String,
    required: true,
    enum: ['Admin', 'User'],
    default: 'User',
  },
  Plan: {
    type: String,
    required: true,
    enum: ['Free', 'Premium'],
    default: 'Free',
  },
  Favorites: {
    type: Array,
    required: true,
    default: [],
  },
  Phone: {
    type: String,
    required: true,
    default: ''
  },
  Zip: {
      type: String,
      required: true,
      default: '',
  },
  Address: {
      type: String,
      required: true,
      default: '',
  },
  City: {
      type: String,
      required: true,
      default: '',
  },
  Country: {
      type: String,
      required: true,
      default: 'Kosovo'
  }
});

const User = models.User || model('User', UserSchema);

export default User;
