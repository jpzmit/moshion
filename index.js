const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(express.static('moshion'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://jzadmin:zhoupu2008@testcluster.apdsu.mongodb.net/class1125");
//create data schema
const ContactSchema ={
    FirstName:String,
    LastName:String,
    Email:String,
}
const contact = mongoose.model("contact",ContactSchema);

app.set('view engine','ejs');
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/idm',(req,res)=>{
    contact.find({},(err,contact)=>{
        res.render('index',{
            contactlist: contact
        });
    })
})

app.post("/",(req, res)=>{
    let newContact = new contact({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
    })
    newContact.save();
    res.redirect("/");
});

app.listen(8080, ()=>{
    console.log('listening to port 8080')
});