const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'0000',
    database: 'hakimtodo',
    insecureAuth:true
  });

  connection.connect((err)=> {


err?console.log(err):console.log('data trabtet')

  })
  module.exports = {connection}