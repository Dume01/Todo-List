const express=require("express");
const bodyparser=require("body-parser");

const app=express();

var nitems=["Wake Up"];
var workitems=[];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  var today=new Date();
  var options={weekday:"long",day:"numeric",month:"long"};
  var day=today.toLocaleDateString("en-US",options);
  res.render('list', {KindOfDay: day,NewlistItem: nitems});
});

app.post("/",function(req,res){
  var newItem=req.body.NItem;
  nitems.push(newItem);
  res.redirect("/");
});

app.get("/work", function(req,res){
  res.render('list', {KindOfDay: "Work List",NewlistItem: workitems});
});

app.post("/work",function(req,res){
  var itemm=req.body.NItem;
  workitems.push(itemm);
  res.redirect("/work");
})

app.listen(3000,function(){
  console.log("This is port 3000");
});
