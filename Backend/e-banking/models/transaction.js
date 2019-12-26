module.exports = (sequelize, DataType) => {

  const transaction = sequelize.define('transaction', {
    amount: {
      type: DataType.INTEGER(60)
    },
    time: {
      type: DataType.STRING(60)
    },
    trans_type: {
      type: DataType.STRING(60)
    }
  })
  return transaction
}