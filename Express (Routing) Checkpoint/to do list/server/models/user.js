const {connection}=require("../database/config")
module.exports={
getoneuser:((req,res)=>{

const query="select * from mylist"
connection.query(query,(err,results)=>{

err?tes.status(500).send(err):res.status(200).send(results)

})
}



), 

createpost:(req,res)=> {
    const query= `insert into mylist (fristname,lastname,age) values ("${req.body.fristname}","${req.body.lastname}","${req.body.age}")`
console.log(req.body)

connection.query(query,(err,results)=>{

    err?tes.status(500).send(err):res.status(201).send(results)
    
} )







} ,


updateuser:((user,id)=> {
    return new Promise((resolve,reject)=>{

    const query =`UPDATE mylist SET fristname=? , lastname=? , age=? where id=?`
    connection.query(query,[user.fristname,user.lastname,user.age,id],(err,results)=>{

        err?reject(err):resolve(results)
        
    } )
    }
    
    
    
    )
    
}

),




deleteuser:((id)=> {
    
    return new Promise((resolve,reject)=>{

    const query =`delete from mylist  where id=?`;
    connection.query(query,[id],(err,results)=>{

        err?reject(err):resolve(results)
        
    } )
    }
    
    
    
    )
    
}

)



}