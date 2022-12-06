import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
    Name: {
        type: String,
        default: '',
    },
    Description: {
        type: String,
        default: '',
    },
    Gallery: {
        type: Array,
        default: [],
    },
    Slug: {
        type: String,
        unique: true,
    },
    Category: {
        type: String,
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
        default: ''
    },
    Zip: {
        type: String,
        default: '',
    },
    Address: {
        type: String,
        default: '',
    },
    City: {
        type: String,
        default: '',
    },
    Country: {
        type: String,
        default: 'Kosovo'
    },
    UserShow: {
        type: Boolean,
        default: true
    },
    Status: {
        type: String,
        default: 'published',
        enum: [
            'published',
            'unpublished',
        ],
    }
},
{
    timestamps: true,
});

const Product = models.Product || model('Product', ProductSchema);
export default Product;