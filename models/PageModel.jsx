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
        type: String,
        required: true,
        default: '',
    },
    User: {
        type: String,
        required: true,
    },
    Views: {
        type: String,
        default: 0,
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
    },
    Status: {
        type: String,
        required: true,
        default: 'published',
        enum: [
            'published', 
            'sold', 
            'in-review', 
            'rejected', 
            'unpublished'
        ],
    }
});

const Page = models.Page || model('Page', PageSchema);
export default  Page;