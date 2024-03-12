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
    const q="INSERT INTO user (firstname,lastname,username,email,password,role) Values (?)"
    const values=[
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.role
        
    ]
    db.query(q,[values],(err,data)=>{
        if (err) {
            console.log(err)
            return res.json(err)};
        res.json(data);
    })
})

app.post("/newtrain",(req,res)=>{
    const q="INSERT INTO train (trainID,date,time,loco_no,self_dead,froms,tos,remark,work_done,supervisor) Values (?)"
    const values=[
        req.body.trainID,
        req.body.date,
        req.body.time,
        req.body.loco_no,
        req.body.self_dead,
        req.body.froms,
        req.body.tos,
        req.body.remark,
        req.body.work_done,
        req.body.supervisor
    ]

    db.query(q,[values],(err,data)=>{
        if (err) {
            console.log(err)
            return res.json(err)};
        res.json(data);
    })
})

app.post("/login",(req,res)=>{
    const q="Select * from user where email=?";
    const email=req.body.email;
    db.query(q,[email],(err,data)=>{
        if(err) return res.json(err);
        console.log(data)
        res.json(data)
    })
})

app.post("/login/:email",(req,res)=>{
    const q="Select * from user where email=?";
    const email=req.params.email;
    //const password=req.params.password;
    db.query(q,[email],(err,data)=>{
        if(err) return res.json(err);
        console.log(data)
        res.json(data)
    })
})

app.delete("/user/:id",(req,res)=>{
    const q="Delete from user where empID=?";
    const id=req.params.id;

    db.query(q,[id],(err,data)=>{
        if(err){
            console.log(err)
            return res.json(err)
        }
        res.json(data)
    })
})

app.delete("/train/:id",(req,res)=>{
    const q="Delete from train where trainID=?";
    const id=req.params.id;

    db.query(q,[id],(err,data)=>{
        if(err){
            console.log(err)
            return res.json(err)
        }
        res.json(data)
    })
})

app.get("/data",(req,res)=>{
    const q="SELECT * from user"
    db.query(q,(err,data)=>{
        if (err) return res.json(err);
        res.json(data);
    })
})

app.get("/train",(req,res)=>{
    const q="SELECT * from train"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        //console.log(data)
        res.json(data)
    })
})

app.listen(8800,()=>{
    console.log("Connected to backend")
})