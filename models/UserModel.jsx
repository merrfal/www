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
    required: false,
    default: '',
  },
  Verification: {
    type: Boolean,
    required: false,
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
    required: false,
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
    required: false,
    default: {},
  },
  Website: {
    type: String,
    required: false,
    default: "",
  },
  Products: {
    type: Array,
    required: false,
    default: [],
  },
  Role: {
    type: String,
    required: false,
    enum: ['Admin', 'User'],
    default: 'User',
  },
  Plan: {
    type: String,
    required: false,
    enum: ['Free', 'Premium'],
    default: 'Free',
  },
  Favorites: {
    type: Array,
    required: false,
    default: [],
  },
  Phone: {
    type: String,
    required: false,
    default: ''
  },
  Zip: {
      type: String,
      required: false,
      default: '',
  },
  Address: {
      type: String,
      required: false,
      default: '',
  },
  City: {
      type: String,
      required: false,
      default: '',
  },
  Country: {
      type: String,
      required: false,
      default: 'Kosovo'
  }
});

const User = models.User || model('User', UserSchema);

export default User;
