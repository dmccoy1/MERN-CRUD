const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const dotenv = require("dotenv")

const itemModel = require("./models/ShoppingList");

app.use(express.json());
app.use(cors());
dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@todoapp.9pjzbfg.mongodb.net/shoppinglist?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
});

app.post('/insert', async (req, res)=>{
const itemName = req.body.itemName
const itemPrice = req.body.itemPrice
const item = new itemModel({itemName: itemName, itemPrice: itemPrice });
 
try {
   await item.save();
} catch(err){
    console.log(err)
}

});

app.get('/read', async (req, res)=>{
   itemModel.find({},(err,result) => {
    if(err){
        res.send(err)
    }
    res.send(result)
   });  
    
    });

app.put('/update', async (req, res)=>{
    const newItemName = req.body.newItemName;
    const id = req.body.id
           
    try {
        await itemModel.findById(id,(err,updatedItem)=>{
        updatedItem.itemName = newItemName
        updatedItem.save();
        res.send("updated item");
       })
        } catch(err){ 
            console.log(err)
        }
        
        });  

    app.delete("/delete/:id", async (req,res)=>{
        const id = req.params.id;
        await itemModel.findByIdAndRemove(id).exec();
        res.send("deleted item");
    })
    

app.listen(80,( ) => {
    console.log('Server running on port 80...');
})