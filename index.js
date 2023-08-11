const express = require('express');
const app = express();
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

let users = [{username: "Joe Schmoe", password: "secret123", id: 1},
{username: "Jill Schmill", password: "secret456", id: 2}
];

// let carts = [{userId: 1, products: []}];

// let products = [{}];

app.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const requestedUser = users.find((user) => user.id === userId);
    res.send(requestedUser);
});