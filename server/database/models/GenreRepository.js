const AbstractRepository = require("./AbstractRepository");

class GenreRepository extends AbstractRepository {
  constructor() {
    super({ table: "genre" });
  }

  async create(genre) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [genre.name]
    );
    return result.insertId;
  }

  async readAll() {
    try {
      const query = `
        SELECT id_genre, name
        FROM ${this.table}`;

      const [rows] = await this.database.query(query);
      return rows;
    } catch (error) {
      console.error("Error reading genres:", error);
      throw new Error("Could not retrieve genres");
    }
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id_genre = ?`,
      [id]
    );
    return rows[0];
  }

  async update(genre) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id_genre = ?`,
      [genre.name, genre.id_genre]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id_genre = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = GenreRepository;
