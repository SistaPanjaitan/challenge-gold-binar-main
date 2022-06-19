'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    users_id: DataTypes.INTEGER,
    items_id: DataTypes.INTEGER,
    order_qty: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    updated_by: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      name: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      name: 'updated_at',
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};