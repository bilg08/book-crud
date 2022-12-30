import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 150,
  },
  id: {
    type:String
  },
  createdAt: {
    type: Date,
    default:Date.now
  }
});
CategorySchema.pre('save', function () {
  this.id = this._id;
});
export default mongoose.model("Category", CategorySchema);
