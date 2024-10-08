const categories = require("../../data");
const CategorySchema = require("../../models/CategorySchema");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await CategorySchema.find();
    return res.status(200).json({ data: categories });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const categoryData = { ...req.body, user: userId };
    console.log("newcategory", categoryData);
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newCategory = await CategorySchema.create(categoryData);

    const user = await User.findByIdAndUpdate(id, {
      $push: { categories: newCategory._id },
    });
    const user2 = await User.findById(userId);
    user2.categories.push(newCategory);
    await user2.save();
    res.status(201).json({ newCategory });
  } catch (error) {
    next(error);
  }
};

const getOneCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const categoryFound = await CategorySchema.findById(id);
    if (!categoryFound) {
      return res.status(404).json({ error: "Category Not Found" });
    } else {
      return res.status(200).json({ data: categoryFound });
    }
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCategory = await CategorySchema.findByIdAndDelete(id);
    return res.status(200).json({ data: deleteCategory });
  } catch (error) {
    rnext(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateCategory = await CategorySchema.findByIdAndUpdate(id, req.body);
    const updateCategory2 = await CategorySchema.findById(id);
    if (!updateCategory) {
      return res.status(404).json({ error: "Category not Found" });
    }
    return res.status(200).json({ data: updateCategory2 });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  getOneCategory,
  deleteCategory,
  updateCategory,
};
