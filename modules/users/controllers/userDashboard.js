const userDashboard = async (req, res) => {
  res.status(200).json({
    status: "Hello from userDashboard",
  });
};

module.exports = userDashboard;
