import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add an item name'],
    unique: [true, 'item name already exists'],
  },
  isDone: {
    type: Boolean,
    required: [true, 'Please add isDone'],
  }
},
  {
    toJSON: {
      virtuals: true,
      // Hide the _id and the __v field from the frontend
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    },
    toObject: {
      virtuals: true,
      // Hide the _id and the __v field from the frontend
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    },
  });

export default mongoose.model('Item', ItemSchema);