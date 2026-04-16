const db = require('../database/db');

exports.getUsers = (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;

  db.run(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID, name, email });
    }
  );
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  db.run(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, id],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ message: "Usuário atualizado" });
    }
  );
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM users WHERE id = ?", id, function (err) {
    if (err) return res.status(500).json(err);
    res.json({ message: "Usuário deletado" });
  });
};