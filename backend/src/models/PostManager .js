const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  insert(post) {
    return this.database.query(
      `insert into ${this.table} (title, description, image) values (?, ?, ?)`,
      [post.title, post.description, post.image]
    );
  }
}

module.exports = PostManager;
