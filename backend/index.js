const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

let todos = [];

app.get("/todos", (req, res) => res.json(todos));
app.post("/todos", (req, res) => {
  const todo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).send();
  todo.done = req.body.done ?? todo.done;
  res.json(todo);
});
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
});

if (require.main === module) {
  app.listen(3001, () => console.log("Backend running on port 3001"));
}
module.exports = app;
