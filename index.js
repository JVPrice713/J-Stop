const express = require("express");
const app = express();
const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

let carts = [{ userId: 1, products: [] }];

let products = [{}];

let users = [
  { username: "Joe Schmoe", password: "secret123", id: 1 },
  { username: "Jill Schmill", password: "secret456", id: 2 },
];

let games = [{gameId: 1, title: 'Final Fantasy XVI'}];

app.get("/", (req, res) => {
    
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    const requestedUser = users.find((user) => user.id === userId);
    res.send(requestedUser);
});

app.get("/games/:id", (req, res) => {
  const gameId = Number(req.params.id);
  const requestedGame = games.find((game) => game.id === gameId);
  res.send(requestedGame);
});

// app.put();

// app.post();

// app.delete();