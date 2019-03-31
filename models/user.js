module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    googleID: {
     type:  DataTypes.STRING,
     allowNull: false,
    },
    displayName: DataTypes.STRING
    
  });
  User.associate = function(models) {
    // Associating User with todo
    // When an User is deleted, also delete any associated todos
    User.hasMany(models.todo, {
      onDelete: "cascade"
    });
  };
  return User;
};
