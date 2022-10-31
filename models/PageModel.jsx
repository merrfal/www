import { Schema, model, models } from 'mongoose';

const PageSchema = new Schema({
    Name: {
        type: String,
        required: true,
        default: '',
    },
    Description: {
        type: String,
        required: true,
        default: '',
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
    Category: {
        type: Array,
        required: false,
        default: [],
    },
    User: {
        type: String,
        required: true,
    },
    Views: {
        type: String,
        default: 0,
    },
    Saves: {
        type: Array,
        required: true,
        default: [],
    },
    Phone: {
        type: String,
        required: true,
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
    }
});

const Page = models.Page || model('Page', PageSchema);
export default  Page;