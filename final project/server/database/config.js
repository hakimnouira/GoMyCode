const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'0000',
    database: 'story_checkpointt',
    insecureAuth:true
  });

  connection.connect((err)=> {


err?console.log(err+"fdsfdsfdsf"):console.log('config trabtet')

  })
  module.exports = {connection}