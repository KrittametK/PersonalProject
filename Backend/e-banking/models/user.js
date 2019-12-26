module.exports = (sequelize, DataType) => {
  
  const user = sequelize.define('user', {
    name: {
      type: DataType.STRING(60)
    },
    lastname: {
      type: DataType.STRING(60)
    },
    username: {
      type: DataType.STRING(60)
    },
    password: {
      type: DataType.STRING(60)
    }
  })
  return user
}