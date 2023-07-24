const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  insert(post) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, description, image) VALUES (?, ?, ?)`,
      [post.title, post.description, post.image]
    );
  }

  delete(post) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      post.id,
    ]);
  }
}

module.exports = PostManager;
