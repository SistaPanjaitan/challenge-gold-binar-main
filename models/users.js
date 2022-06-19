'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    telp_number: DataTypes.INTEGER,
    address: DataTypes.STRING,
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
    modelName: 'users',
  });
  return users;
};