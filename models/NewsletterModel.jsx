import { Schema, model, models } from 'mongoose';

const CategorySchema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: false,
    default: '',
  },
  Slug: {
    type: String,
    required: true,
    unique: true,
  },
  Description: {
    type: String,
    required: false,
    unique: false,
    default: '',
  },
  Icon: {
    type: String,
    required: false,
    unique: false,
    default: ''
  },
});

const Category = models.Category || model('Category', CategorySchema);

export default Category;
