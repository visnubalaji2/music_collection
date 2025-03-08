const express=require('express')
const cors=require('cors')
const app=express()
const collections=require('./collections.json')
const specificCollections=require('./specificCollections.json')
const port = process.env.PORT || 3000
app.use(cors())
app.get('/collections',(req,res)=>{
    let searchQuery=req.query.search;
    let filterQuery=req.query.filters
    if(searchQuery){
        searchQuery=searchQuery.toLowerCase();
        let filteredCollections=collections.filter((i)=>{
            return i.name.toLocaleLowerCase().includes(searchQuery)
        })
        if(searchQuery==""){
            res.send(collections)
        }else{
        res.send(filteredCollections)
        }
    }
    else if(filterQuery){
        let filteredCollections=collections.filter((i)=>{
            return filterQuery.includes(i.type)
        })
        res.send(filteredCollections)
    }
    else
    {
        res.status(200).send(collections)
    }
})


app.get('/collections/:id',(req,res)=>{
    const collectionId=req.params.id;
    const data=specificCollections.filter((i)=>{
        return i['id']==collectionId
    })[0]
    if(data){
        res.send(data)
    }else{
        res.send([])
    }
   
})
app.listen(port,()=>{
    console.log("server is listening on "+port)
})