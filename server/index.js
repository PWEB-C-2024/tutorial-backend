const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    id: 1,
    name: "Alice Johnson",
    username: "alice.j",
    studentId: "S12345",
  },
  {
    id: 2,
    name: "Bob Smith",
    username: "bob.smith",
    studentId: "S12346",
  },
  {
    id: 3,
    name: "Charlie Brown",
    username: "charlie.b",
    studentId: "S12347",
  },
  {
    id: 4,
    name: "Daisy Lee",
    username: "daisy.l",
    studentId: "S12348",
  },
  {
    id: 5,
    name: "Ethan White",
    username: "ethan.w",
    studentId: "S12349",
  },
];

app.get("/status", (req, res) => {
  res.json({
    status: "Backend jalan",
    uptime: process.uptime(),
  });
});

app.get("/users", (req, res) => {
  //   res.json(data.map((user) => user.username));
  res.json({
    data,
  });
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const response = data.find((d) => d.id === id);

  if (!response) {
    res.status(404).json({
      error: "Gada datanya wak",
    });
    console.error("gada datanya wak");
  } else {
    res.status(200).json({
      data: response,
    });
  }
});

app.listen(port, () => {
  console.log(`Backend PWEB pake express di port ${port}`);
});
