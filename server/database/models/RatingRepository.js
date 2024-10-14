const AbstractRepository = require("./AbstractRepository");

class RatingRepository extends AbstractRepository {
  constructor() {
    super({ table: "Rating" });
  }

  async create(rating) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (rating, id_user, id_work, work_type) VALUES (?, ?, ?, ?)`,
      [rating.rating, rating.id_user, rating.id_work, rating.work_type]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id_rating = ?`,
      [id]
    );
    return rows[0];
  }

  async update(rating) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET rating = ?, id_user = ?, id_work = ?, work_type = ? WHERE id_rating = ?`,
      [
        rating.rating,
        rating.id_user,
        rating.id_work,
        rating.work_type,
        rating.id_rating,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id_rating = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = RatingRepository;
