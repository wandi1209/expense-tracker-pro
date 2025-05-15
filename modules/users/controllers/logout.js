const logout = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Logout User Successfuly",
  });
};

module.exports = logout;
