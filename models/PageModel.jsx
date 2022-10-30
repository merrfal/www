import { Schema, model, models } from 'mongoose';

const PageSchema = new Schema({
    Name: {
        type: String,
        required: true,
        default: '',
    },
    Tagline: {
        type: String,
        required: true,
        default: '',
    },
    Description: {
        type: String,
        required: true,
        default: '',
    },
    Website: {
        type: String,
        required: true,
        default: ''
    },
    Links: {
        type: Array,
        required: false,
        default: [],
    },
    Gallery: {
        type: Array,
        required: true,
        default: [],
    },
    Slug: {
        type: String,
        required: true,
        unique: true,
    },
    Categories: {
        type: Array,
        required: false,
        default: [],
    },
    User: {
        type: String,
        required: true,
    },
    Upvotes: {
        type: Array,
        required: true,
        default: [],
    }
});

const Page = models.Page || model('Page', PageSchema);
export default  Page;