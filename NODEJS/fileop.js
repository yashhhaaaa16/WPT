import fs from 'fs';

//write file synchronously
//let writedata = fs.writeFileSync("writefile.txt","Good Morning");

//read data syncronously
// let data = fs.readFileSync("./writefile.txt",'utf-8');
// console.log(data);

//append data syncronously
//fs.appendFileSync("./writefile.txt","you are are good");

//write file asyncronously
// fs.writeFile("./writefileTwo.txt","This is node js session",(err,res)=>{
//     console.log(res);
// });

// //read file asyncronously
// fs.readFile("./writefileTwo.txt","utf-8",(err,res)=>{
//     console.log(res);
// })

//read file and write data into another file asyncronously
fs.readFile("./writefileTwo.txt","utf-8",(err,res)=>{
       fs.writeFile("writefileThree.txt",res,(err,res)=>{})
     })