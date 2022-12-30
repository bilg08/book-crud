import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Та номын нэрийг бичнэ үү"],
    unique: true,
    trim: true,
    maxLength: 150,
  },
  
  author: {
    type: String,
    required: [true, "Та зохиолчын нэрийг оруулна уу"],
    maxLength: [50, "Зохиолчын нэрны урт их байна (хамгийн ихдээ 50 байна)"],
  },
  photo: {
    type: String,
    default: "default.png",
  },
  id: {
    type: String
  },
  rating: {
    type: Number,
    min: [1, "Хамгийн багадаа 1 байна"],
    max: [10, "Хамгийн ихдээ 10 байна"],
  },
  price: {
    type: Number,
    required: [true, "Та үнийг нь оруулна уу"],
  },
  content: {
    type: String,
    required: [true, "Та дэлгэрэнгүй хэсгийг бичнэ үү"],
    trim: true,
    maxLength: 20000,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Та категори оруулна уу"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
BookSchema.pre('save', function () {
  this.id = this._id;
})
export default mongoose.model("Book",BookSchema)