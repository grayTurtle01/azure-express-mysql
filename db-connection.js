dotenv = require('dotenv')
dotenv.config()

mysql = require('mysql')
db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
    
})

db.connect( function(err){
    if(err) throw err;
    console.log("Connected to mySQL")
})
