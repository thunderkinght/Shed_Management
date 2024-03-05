const mysql=require('mysql2')
const express=require('express')
const cors=require('cors')

const app=express()

const db=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"Ajinkya@2021",
    database:"test"
})

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hello this is backend")
})

app.post("/registor",(req,res)=>{
    const q="INSERT INTO users (firstname,lastname,username,email,password) Values (?)"
    const values=[
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.email,
        req.body.password,
        
    ]
    db.query(q,[values],(err,data)=>{
        if (err) return res.json(err);
        res.json(data);
    })
})

app.post("/login",(req,res)=>{
    const q="Select * from users where email=?";
    const email=req.body.email;
    db.query(q,[email],(err,data)=>{
        if(err) return res.json(err);
        console.log(data)
        res.json(data)
    })
})

app.post("/login/:email",(req,res)=>{
    const q="Select * from users where email=?";
    const email=req.params.email;
    //const password=req.params.password;
    db.query(q,[email],(err,data)=>{
        if(err) return res.json(err);
        console.log(data)
        res.json(data)
    })
})

app.get("/data",(req,res)=>{
    const q="SELECT * from users"
    db.query(q,(err,data)=>{
        if (err) return res.json(err);
        res.json(data);
    })
})

app.listen(8800,()=>{
    console.log("Connected to backend")
})