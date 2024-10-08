const errorHandler = (req, res, next) => {
  try {
    return res
      .status(error.status || 500)
      .json({ error: error || "Server went Down" });
  } catch (error) {
    next(error);
  }
};

module.exports = errorHandler;
