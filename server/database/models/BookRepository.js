const AbstractRepository = require("./AbstractRepository");

class bookRepository extends AbstractRepository {
  constructor() {
    super({ table: "book" });
  }

  async create(book) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, cover_image, genre, synopsis, purchase_link, id_user) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        book.title,
        book.cover_image,
        book.genre,
        book.synopsis,
        book.purchase_link,
        book.user_id,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id_book = ?`,
      [id]
    );
    return rows[0];
  }

  async update(book) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, cover_image = ?, genre = ?, synopsis = ?, purchase_link = ?, id_user = ? WHERE id_book = ?`,
      [
        book.title,
        book.cover_image,
        book.genre,
        book.synopsis,
        book.purchase_link,
        book.user_id,
        book.id_book,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id_book = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = bookRepository;
