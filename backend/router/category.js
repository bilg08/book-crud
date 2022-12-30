import express from "express";
import {
  getCategories,
  getSelectedCategory,
  addCategory,
  deleteCategory,
  updateCategory,
  getBooks_of_a_category
} from "../controller/category.js";
const router = express.Router();

router.route("/").get(getCategories);
router.route("/:id").get(getSelectedCategory);
router.route("/").post(addCategory);
router.route("/:id").delete(deleteCategory);
router.route("/:id").put(updateCategory);
router.route("/:id/books").get(getBooks_of_a_category);


export default router;
