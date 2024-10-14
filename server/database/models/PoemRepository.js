const AbstractRepository = require("./AbstractRepository");

class PoemRepository extends AbstractRepository {
  constructor() {
    super({ table: "Poem" });
  }

  async create(poem) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, content, id_user, cover_image) VALUES (?, ?, ?, ?)`,
      [poem.title, poem.content, poem.id_user, poem.cover_image]
    );
    return result.insertId;
  }

  async readAll() {
    try {
      const query = `
        SELECT p.id_poem, p.title, p.cover_image, p.content, p.publication_date, u.username AS author
        FROM Poem p
        LEFT JOIN User u ON p.id_user = u.id_user`;

      const [rows] = await this.database.query(query);
      return rows;
    } catch (error) {
      console.error("Error reading poems:", error);
      throw new Error("Could not retrieve poems");
    }
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id_poem = ?`,
      [id]
    );
    return rows[0];
  }

  async update(poem) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, id_user = ? WHERE id_poem = ?`,
      [poem.title, poem.content, poem.id_user, poem.id_poem]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id_poem = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = PoemRepository;
