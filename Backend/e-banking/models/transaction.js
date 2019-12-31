module.exports = (sequelize, DataType) => {

  const transaction = sequelize.define('transaction', {
    amount: {
      type: DataType.INTEGER
    },
    trans_type: {
      type: DataType.STRING
    },
    acc_number: {
      type: DataType.INTEGER
    }
  })
  return transaction
}