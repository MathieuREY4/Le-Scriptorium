const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "User" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (pseudo, username, name, email, password, role) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        user.pseudo,
        user.username,
        user.name,
        user.email,
        user.password,
        user.role,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id_user = ?`,
      [id]
    );
    return rows[0];
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(id, user) {
    console.info(user);

    // Vérification des champs requis
    if (!id || !user.username || !user.email || !user.name) {
      throw new Error(
        "Les champs 'username', 'name', 'email' et 'id' sont requis pour la mise à jour."
      );
    }

    try {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET pseudo = ?, username = ?, name = ?, email = ?, password = ?, role = ? WHERE id_user = ?`,
        [
          user.pseudo,
          user.username,
          user.name,
          user.email,
          user.password,
          user.role,
          id,
        ]
      );
      return result.affectedRows;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
      throw error;
    }
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id_user = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = UserRepository;
