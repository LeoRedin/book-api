import Sequelize, { Model } from 'sequelize'

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        author: Sequelize.STRING,
        price: Sequelize.NUMBER,
        published_at: Sequelize.DATE,
      },
      {
        sequelize,
      },
    )

    return this
  }
}

export { Book }
