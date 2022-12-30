import CategorySchema from "../model/category.js";
import BookSchema from "../model/books.js";
import mongoose from "mongoose";
import {getBooksOfCategories} from '../service/category.js'

//Бүх категоруудыг мэдээлэлийг авах
async function getCategories(req, res) {
  let categories = await CategorySchema.find();
  categories = await getBooksOfCategories(categories);
  res.status(200).json( categories);
}

//Ижил категоритой номнуудыг авах
async function getBooks_of_a_category(req, res) {
  const { id } = req.params;
  try {
    const books = await BookSchema.find({
      category: mongoose.Types.ObjectId(id),
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error.message,
    });
  }
}

//Сонгогдсон категорийн мэдээлэлийг авах
async function getSelectedCategory(req, res) {
  const { id } = req.params;
  try {
    const category = await CategorySchema.findById(id);

    const booksOfcategory = await BookSchema.find({
      category: mongoose.Types.ObjectId(id),
    }).select("name");

    res.status(200).json({ ...category._doc, booksOfcategory });
  } catch (error) {
    res.status(400).json({
      data: "Ийм категори байхгүй",
      err: error.message,
    });
  }
}

//Категори нэмэх
async function addCategory(req, res) {
  try {
    const category = await CategorySchema.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error.message,
    });
  }
}
//Категори устгах

async function deleteCategory(req, res) {
  const { id } = req.params;

  try {
    const category = await CategorySchema.findById(id);
    category.delete();
    res.status(200).json({
      success: true,
      data: "категори устгагдсан",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      err: "Ийм ном байхгүй",
    });
  }
}

//Категори өөрчлөх

async function updateCategory(req, res) {
  const { id } = req.params;
  try {
    let category = await CategorySchema.findByIdAndUpdate(id, req.body);
    category = await CategorySchema.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error.message,
    });
  }
}

export {
  getCategories,
  getSelectedCategory,
  addCategory,
  deleteCategory,
  updateCategory,
  getBooks_of_a_category,
};
