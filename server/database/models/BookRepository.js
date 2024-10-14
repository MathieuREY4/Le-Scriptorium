const AbstractRepository = require("./AbstractRepository");

class bookRepository extends AbstractRepository {
  constructor() {
    super({ table: "book" });
  }

  async create(book) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, cover_image, id_genre, synopsis, purchase_link, id_user) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        book.title,
        book.cover_image,
        book.id_genre,
        book.synopsis,
        book.purchase_link,
        book.user_id,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    try {
      const query = `
        SELECT b.id_book, b.title, b.cover_image, b.synopsis, GROUP_CONCAT(g.name) as genres
        FROM ${this.table} b
        LEFT JOIN book bg ON b.id_book = bg.id_book
        LEFT JOIN genre g ON bg.id_genre = g.id_genre
        GROUP BY b.id_book`;

      const [rows] = await this.database.query(query);
      return rows;
    } catch (error) {
      console.error("Error reading books:", error);
      throw new Error("Could not retrieve books");
    }
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
      `UPDATE ${this.table} SET title = ?, cover_image = ?, id_genre = ?, synopsis = ?, purchase_link = ?, id_user = ? WHERE id_book = ?`,
      [
        book.title,
        book.cover_image,
        book.id_genre,
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
