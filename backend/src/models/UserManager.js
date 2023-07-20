const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, email, password) values (?, ?, ?)`,
      [user.username, user.email, user.password]
    );
  }
}

module.exports = UserManager;
