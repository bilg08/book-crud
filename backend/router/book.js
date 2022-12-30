import express from "express";
import { getAllBooks ,getSelectedBook,addBook,deleteBook,updateBook} from "../controller/book.js";
const router = express.Router();

router.route("/").get(getAllBooks);
router.route("/:id").get(getSelectedBook);
router.route("/").post(addBook);
router.route("/:id").delete(deleteBook);
router.route("/:id").put(updateBook);



export default router;
