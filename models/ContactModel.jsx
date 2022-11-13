import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
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
 
  Email: {
    type: String,
    required: true,
    default: '',
  },

  Message: {
    type: String,
    required: true,
    default: "",
  },
 
});

const Contact = models.Contact || model('Contact', ContactSchema);

export default Contact;