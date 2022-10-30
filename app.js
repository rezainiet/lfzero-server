const express = require("express");
const cors = require("cors");
const Stripe = require("stripe")(
  "sk_test_51LxDmxGYjBwS3Vl2BYP9JPZu1NjsoemZW5P48i2qpAYlVGFtYskm0nXaxMwrM84DV8tl4ECrYbJZsXoKOfEP4Em600lO8tC2Aw"
);
require("./config/db");

const userRouter = require("./api/user.route");
const courseRouter = require("./api/course.route");
const enrollRouter = require("./api/enroll.route");
const conversationRouter = require("./api/conversation.route");
const messageRouter = require("./api/message.route");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);
app.use("/api/enroll", enrollRouter);
app.use("/api/conversation", conversationRouter);
app.use("/api/message", messageRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

app.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    const result = await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    // status = 'success';
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    status = "Failure";
    res.json({ error, status });
  }
});

///Socket io

const io = require("socket.io")(8900, {
  // pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

// io.on("connection", (socket) => {
//   console.log("a user connected");
// });

// Routing error handle
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found!",
  });
});

// Server error handle
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

module.exports = app;
