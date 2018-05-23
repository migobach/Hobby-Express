'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trail = sequelize.define('Trail', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    mileage: DataTypes.INTEGER
  }, {});
  Trail.associate = function(models) {
    // associations can be defined here
  };
  return Trail;
};