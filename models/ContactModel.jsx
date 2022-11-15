import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Surname: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: false,
      enum: ['open', 'closed'],
      default: 'open',
    },
  },
  {
    timestamps: true,
  }
);

const Contact = models.Contact || model('Contact', ContactSchema);

export default Contact;
