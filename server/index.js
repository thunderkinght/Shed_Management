// // const express = require("express");
// // const app = express();
// // const mysql = require('mysql2');

// // const db = mysql.createPool({
// //     host: 'localhost',
// //     port: 3306,
// //     user: 'root',
// //     password: "Exam@123",
// //     database: "alf",
// // });




// // app.get("/", (req, res) => {
// //     const sqlInsert = "INSERT INTO alf.mov (`id`, `date`, `time`, `loco.no`, `self/dead`, `from`, `to`, `remark`, `work_done_time`) VALUES ('5', '2002-01-01', '16:00:00', '12345', 1, 'A', 'B', 'rem', '17:00');";
// //     db.getConnection((err, connection) => {
// //         if (err) {
// //             console.error('Error connecting to the database:', err);
// //             return;
// //         }
// //         else {
// //             console.log('Connected to the database');
// //             db.query("INSERT INTO alf.mov (`id`, `date`, `time`, `loco.no`, `self/dead`, `from`, `to`, `remark`, `work done time`) VALUES ('9', '2002-01-01', '16:00:00', '12345', 1, 'A', 'B', 'rem', '17:00');"
// //                 , (err, result) => {
// //                     if (err) {
// //                         console.log(err);
// //                         res.send("Error occurred.");
// //                     } else {
// //                         console.log("Connected");
// //                         res.send("Hi, running on 3001");
// //                     }
// //                 });



// //             connection.release();
// //  } });

     

// //     });

// // app.listen(3001, () => {
// //     console.log("Running on 3001");
// // });
// const express = require("express");
// const app = express();
// const mysql = require('mysql2');

// const db = mysql.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: "Exam@123",
//     database: "alf",
// });

// app.use(express.json());

// app.post("/submit", (req, res) => {
//   const formData = req.body;

//   const sqlInsert = "INSERT INTO alf.mov (`date`, `time`, `loco.no`, `self/dead`, `from`, `to`, `remark`, `work_done_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
//   const values = [
//     formData["Date"],
//     formData["Time"],
//     formData["Loco. no"],
//     formData["Self/Dead"],
//     formData["From"],
//     formData["To"],
//     formData["Remark"],
//     formData["Work Done Time"]
//   ];

//   db.query(sqlInsert, values, (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Error occurred." });
//     } else {
//       console.log("Data inserted into the database");
//       res.status(200).json({ message: "Data inserted successfully." });
//     }
//   });
// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });
const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors'); // Import the cors package

app.use(cors()); // Use cors middleware
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "Exam@123",
    database: "alf",
});

app.post("/submit", (req, res) => {
  const formData = req.body;

  const sqlInsert = "INSERT INTO alf.mov (`id`, `date`, `time`, `loco.no`, `self/dead`, `from`, `to`, `remark`, `work done time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
  const values = [
    formData["Sr.no"],
    formData["Date"],
    formData["Time"],
    formData["Loco. no"],
    formData["Self/Dead"],
    formData["From"],
    formData["To"],
    formData["Remark"],
    formData["Work Done Time"]
  ];

  db.query(sqlInsert, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error occurred." });
    } else {
      console.log("Data inserted into the database");
      res.status(200).json({ message: "Data inserted successfully." });
    }
  });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
