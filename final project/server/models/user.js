const {connection}=require("../database/config")
const crypto = require('crypto');
const { isUndefined } = require("util");
module.exports={
    createUser:((req,res)=>{
       
        var passwordHashed=crypto.createHash('sha256').update(req.body.pasword, 'utf8').digest('hex')
        const query=`insert into user (namee,email,pasword,imageUrl,phoneNumber,adress) values ("${req.body.name}","${req.body.email}","${passwordHashed}","${req.body.imageUrl}","${req.body.phoneNumber}","${req.body.adress}")`
        const query2=`select * from user where email="${req.body.email}"`
    
        connection.query(query2,(err,result)=>{
           
            if(result.length==0){
                connection.query(query,(err,results)=>{
                    err ?res.status(500).send(err):res.status(200).send('user created')
                 })
                
            }else {
                res.status(200).send("user exest")
            }
        })
       
    }),
    checkuser:((req,res)=>{
        console.log(req.body,"rfdsgdsgds")
        var passwordHashed=crypto.createHash('sha256').update(req.body.pasword, 'utf8').digest('hex')
        const query=`select * from user where email="${req.body.email}"`

        connection.query(query,(err,results)=>{
        
           
            console.log(results,"aaaaaaaaaaaaaaaaaaa")
           
        if(err){
            res.status(500).send(err)
            
        }else if(results.length>0&& results[0].pasword===passwordHashed){
            res.status(200).send('user exsit ',results)
        }else{
            res.status(200).send('user do not exsit ')

        }


        
        })
    }),
    getalluser:((req,res)=>{

        const query="select * from user"
        connection.query(query,(err,results)=>{
        
        err?res.status(500).send(err):res.status(200).send(results)

        
        })
    }),


    login:((req,res)=>{
        var passwordHashed=crypto.createHash('sha256').update(req.body.pasword, 'utf8').digest('hex')
        const query=`select * from user where req.body.name=name  passwordHashed=paword`
        connection.query(query,(err,results)=>{
        console.log(results)
        err?res.status(500).send(err):res.status(200).send(results)
        })
    })

}