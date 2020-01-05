# PersonalProject e-Banking
 
## 📘 e-Banking

e-Banking is a system used for conducting various transactions with banks through the internet network.

## 📦 Built With

### Frontend
  - [x] js
  - [x] react
  - [x] Ant Design

### Backend
  - [x] Node js
  - [x] MySQL

## Structure

    e-Banking(Frontend) --> Axios(request) --> e-Banking(Backend) --> Sequelize --> MySQL
                                                                                      ||
                                                                                      \/
    e-Banking(Frontend) <-- Axios(response) <-- e-Banking(Backend) <-- Sequelize <-- MySQL

## Feature

- [x] Login
- [ ] Register(for admin)
- [x] View your account
- [ ] View transaction
- [x] Transfer money

## Version

    version 0.3.0
 
## Configguration
 
 ### For Backend
  Create a config.json in Backend/e-banking/config/config.json
  and edit password and database
  - password use for login to MySQL
  - database is database name in MySQL
    ```
    {
     "development": {
       "username": "root",
       "password": "xxxxxxxxxx",
       "database": "xxxxxxxxxx",
       "host": "127.0.0.1",
       "dialect": "mysql",
       "operatorsAliases": false
     },
     "test": {
       "username": "root",
       "password": null,
       "database": "database_test",
       "host": "127.0.0.1",
       "dialect": "mysql",
       "operatorsAliases": false
     },
     "production": {
       "username": "root",
       "password": null,
       "database": "database_production",
       "host": "127.0.0.1",
       "dialect": "mysql",
       "operatorsAliases": false
     }
    }
   

## Getting Started
 
 ### 1 Clone this project
      https://github.com/KrittametK/PersonalProject.git
 
 ### 2 Run commands
      2.1 For frontend
       - cd Frontend/e-banking
       - npm install
       - npm start
  
      2.2 For backend
       - cd Backend/e-banking
       - npm install
       - nodemon index.js
 

