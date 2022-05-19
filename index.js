express = require('express')
app = express();

app.use( express.json() )

// connect to mySQL
require('./db-connection')

app.get("/", (req,res) => {
    res.end("<h1> Hello Todo-mySQL </h1>")
})

app.use("/todo", require('./routes/todo'))



app.listen(8000, () => {
    console.log("Server listen on port: 8000")
})
