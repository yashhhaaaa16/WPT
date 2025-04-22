import fs from 'fs'

//how to create directory asyncronously
// fs.mkdir("./newDir",(err,res)=>{
//     fs.writeFile("./newDir/readfileFour.txt","Hello",(err,res)=>{});
// });

//remove file asyncronously
fs.unlink("./newDir/readFileFour.txt",(err,res)=>{
    fs.rmdir("./newDir",(err,res)=>{})
})
