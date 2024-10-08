const categories = require("../../data");

const getAllCategories = (req, res) => {
  res.status(200).json({ data: categories });
};

const createCategory = (req, res) => {
  let lenght = categories.length;
  let newId = categories[length - 1].id + 1;
  const newCategory = {
    id: newId,
    image: req.body.image,
    name: req.body.name,
    description: req.body.description,
  };
  categories.push(newCategory);
  res.status(201).json({ data: categories });
};

const getOneCategory = (rrq, res) => {
  const { id } = req.params;
  const category = categories.find((category) => {
    if (category.id == id) return true;
  });
  if (!category) {
    return res.status(404).json({ error: "category Not found" });
  } else {
    return res.status(200).json({ data: category });
  }
};

const deleteCategory = (req, res) => {
  const { id } = req.params;

  const updateCategories = categories.filter((category) => {
    if (category.id != id) {
      return true;
    }
  });

  return res.status(200).json({ data: updateCategories });
};

const updateCategory = (req, res) => {
  const { id } = req.params;

  const categoryFound = categories.find((category) => {
    if (category.id == id) {
      return true;
    }
  });
  categoryFound.name = req.body.name;

  return res.status(200).json({ data: categoryFound });
};

module.exports = {
  getAllCategories,
  createCategory,
  getOneCategory,
  deleteCategory,
  updateCategory,
};
