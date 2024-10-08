const categories = require("../../data");
const CategorySchema = require("../../models/CategorySchema");

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategorySchema.find();
    return res.status(200).json({ data: categories });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

const createCategory = async (req, res) => {
  try {
    const categoryInfo = req.body;
    const newCategory = await CategorySchema.create(categoryInfo);
    res.status(201).json({ data: newCategory });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getOneCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryFound = await CategorySchema.findById(id);
    if (!categoryFound) {
      return res.status(404).json({ error: "Category Not Found" });
    } else {
      return res.status(200).json({ data: categoryFound });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await CategorySchema.findByIdAndDelete(id);
    return res.status(200).json({ data: deleteCategory });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateCategory = await CategorySchema.findByIdAndUpdate(id, req.body);
    const updateCategory2 = await CategorySchema.findById(id);
    if (!updateCategory) {
      return res.status(404).json({ error: "Category not Found" });
    }
    return res.status(200).json({ data: updateCategory2 });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  getOneCategory,
  deleteCategory,
  updateCategory,
};
