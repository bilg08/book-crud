import BookSchema from "../model/books.js";
import mongoose from 'mongoose';
async function getBooksOfCategories(categories) {
  const categoriesWithBooks = [];
  for (let category of categories) {
    const books = await BookSchema.find({
      category: mongoose.Types.ObjectId(category._id),
    }).select("name");
    let categoryWithBooks = { ...category._doc, books };
    categoriesWithBooks.push(categoryWithBooks);
  }
  return categoriesWithBooks;
}

export { getBooksOfCategories };
