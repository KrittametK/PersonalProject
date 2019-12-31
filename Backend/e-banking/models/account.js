module.exports = (sequelize, DataType) => {
  
  const account = sequelize.define('account', {
    acc_type: {
      type: DataType.STRING(60)
    },
    acc_number: {
      type: DataType.INTEGER(60)
    },
    balance: {
      type: DataType.INTEGER(60)
    },
    user_id: {
      type: DataType.INTEGER(9)
    }
  })
  account.associate = (models) => {
    account.hasMany(models.transaction, {foreignKey: 'acc_number'})
  }
  
  return account
}