const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Comments extends Model {}

Comments.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comment_text: {
      type: DataTypes.STRING,
      validate: {
          
      }
  }
});
