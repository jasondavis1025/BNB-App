import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = 3001;

const rooms = [
  {
    id: 1,
    name: "Master Bedroom",
    description: "A large bedroom with a king size bed",
  },
  {
    id: 2,
    name: "Guest Bedroom",
    description: "A moderate bedroom with two queen sized beds",
  },
];

// HTTP GET http://localhost:3001/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// HTTP GET http://localhost:3001/rooms
app.get("/rooms", (req, res) => {
  res.json(rooms);
});

// HTTP GET http://localhost:3001/room/1
// HTTP GET http://localhost:3001/room/2
// HTTP GET http://localhost:3001/room/3
app.get("/room/:id", (req, res) => {
  res.json(rooms[req.params["id"]]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
