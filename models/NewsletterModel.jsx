import { Schema, model, models } from 'mongoose';

const NewsletterSchema = new Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    Active: {
      type: String,
      required: false,
      default: true
    },
  },
  {
    timestamps: true,
  }
);

const Newsletter = models.Newsletter || model('Newsletter', NewsletterSchema);

export default Newsletter;
