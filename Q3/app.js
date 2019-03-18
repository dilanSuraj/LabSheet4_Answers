const fs = require('fs');

const _dirname = "D:\\SLIIT Practices\\AF_LAB\\LabSheet4_Answers\\Resources\\";

const file_name = _dirname + "test.txt";

// With toString()
/*
fs.readFile(file_name,(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

*/

//Without toString()

// fs.readFile(file_name,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

//Synchronized

const data = fs.readFileSync(file_name);

console.log(data.toString());
