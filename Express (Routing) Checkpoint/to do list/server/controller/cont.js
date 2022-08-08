

const models=require('../models/user')
module.exports={
    UbdateUSer:((req,res)=>{
        models.updateuser(req.body,req.params.id)
        .then((results)=>{
            res.status(200).send('updated')
        }).catch(err=>{
            res.status(500).send(err)
        })
    }),
    deleteuser:((req,res)=>{
        models.deleteuser(req.params.id)
        .then((results)=>{
            res.status(200).send(results)
        }).catch(err=>{
            res.status(500).send(err)
        })
    })


}




/*
module.exports={
    deleteuser:((req,res)=>{
        models.deleteuser(req.body,req.params.id)
        .then((results)=>{
            res.status(200).send('deleted')
        }).catch(err=>{
            res.status(500).send(err)
        })
    })
}*/