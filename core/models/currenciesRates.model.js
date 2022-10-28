const { DataTypes } = require("sequelize");

const Currencies = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Rates = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_currency: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "currencies",
      key: "id",
    },
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  currency: {
    references: {
      model: "currencies",
    }
  }
};


module.exports = { Currencies, Rates };
