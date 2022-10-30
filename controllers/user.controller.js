const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
  // try {
  //   const users = await User.find();
  //   res.status(200).json(users);
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }
};

const getChatUsers = async (req, res) => {
  // const userId = req.query.userId;
  // const username = req.query.username;

  const userId = req.params.userId;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    console.log(other);
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneUser = (req, res) => {
  res.status(200).json({
    message: "Getting one users",
  });
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    // console.log(email);
    const user = await User.findOne({ email: email });
    //console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      role: req.body.role,
      name: req.body.name,
      email: req.body.email,
      phone: Number(req.body.phone),
      image: req.body.image,
      age: req.body.age,
      date: req.body.date,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: "user is updated",
  });
};

const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { email: email };
    const result = await User.deleteOne(filter);
    res.send(result);
    //  res.status(201).json({
    // message: "user is deleted",
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};

const getAdmin = async (req, res) => {
  // try {
  //     const email = req.params.email;
  //     const user = await User.findOne({ email: email });
  //     const isAdmin = user.role === "admin";
  //     res.send({ admin: isAdmin });
  // } catch (error) {
  //     res.status(500).send(error.message);
  // }
};

const createAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { email: email };
    const updateDoc = {
      $set: { role: "admin" },
    };
    const result = await User.updateOne(filter, updateDoc);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getAdmin,
  createAdmin,
  getUserByEmail,
  getChatUsers,
};
