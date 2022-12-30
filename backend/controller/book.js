import BookSchema from "../model/books.js";
import CategorySchema from "../model/category.js";


//Бүх номнуудын мэдээлэлийг авах
async function getAllBooks(req, res) {
  let books = await BookSchema.find().populate('category');
  res.status(200).json(books);
}

//Сонгогдсон номын  мэдээлэлийг авах
async function getSelectedBook(req, res) {
  const { id } = req.params;
  try {
    let book = await BookSchema.findById(id);
    // let categories = await CategorySchema.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({
      data: "Ийм ном байхгүй",
      err: error.message,
    });
  }
}
//Ном нэмэх
async function addBook(req, res) {
  try {
    const book = await BookSchema.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error.message,
    });
  }
}


//Ном устгах
async function deleteBook(req, res) {
  const { id } = req.params;
  try {
    const book = await BookSchema.findById(id);
    book.delete();
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      err: "Ийм ном байхгүй",
    });
  }
}

//Ном өөрчлөх
async function updateBook(req, res) {
  const { id } = req.params;
  try {
    let book = await BookSchema.findByIdAndUpdate(id,req.body);
    book = await BookSchema.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error.message,
    });
  }
}
export { getAllBooks, getSelectedBook, addBook, deleteBook, updateBook };
