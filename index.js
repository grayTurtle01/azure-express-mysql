express = require('express')
app = express();

dotenv = require('dotenv')
dotenv.config()

app.use( express.json() )

// connect to mySQL
require('./db-connection')

app.get("/", (req,res) => {
    res.end("<h1> Hello Todo-mySQL </h1>")
})

app.use("/todo", require('./routes/todo'))



app.listen(process.env.PORT, () => {
    console.log("Server listen on port: "+ process.env.PORT)
})
