router = express.Router()

// get all tasks
router.get("/", (req,res)=> {
    
    db.query("select * from Task ORDER BY id", function(err, result, fields){
        if(err) throw err;
        rows = result
        res.render( "index.ejs", {rows: rows } )
    })

})

// search task by id
//~ router.get("/:id", (req,res) => {
    
    //~ id = req.params.id
    //~ query = `SELECT * FROM Task WHERE id = ${id}`

    //~ db.query( query, (err, rows, fields) => {
        //~ if( err) throw err;

        //~ if( rows.length == 0 )
            //~ res.json({status: 'task not found'})

        //~ task = rows[0]
        //~ res.json(task)
    //~ })

//~ })


// delete task
router.delete("/:id", (req,res) => {

    console.log(req)
    
    id = req.params.id
    query = `DELETE FROM Task WHERE id =  ${id}`

    db.query( query, (err, result, fields) => {
        if( err) throw err;

        res.json({status: 'task delted'})
    })

})


// add task
router.post("/", async (req,res) => {

    console.log(req.body)
    tarea = req.body.content

    matches = false

    // Search existing task
    query = `SELECT * FROM Task WHERE content='${tarea}'`
    await db.query(query, (err, rows, fields) => {
        if( rows.length > 0 )
            matches = true
    })
    
    // Add Task
    query = `INSERT INTO Task(content) VALUES( '${tarea}')`
    await db.query(query, (err, result, fields) => {
        //~ if(err) throw err;
        if(matches)
            res.json({status: 'that task already exists'})
        else
            res.json({status: 'task added'})

    })
    
})



module.exports = router



