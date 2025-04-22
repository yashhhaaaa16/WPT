import http from 'http';

let myServer = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("Hello My Friends");
        res.end();
    }

    if(req.url=="/home"){
        res.write("HOME PAGE");
        res.end();
    }
    if(req.url=="/about"){
        res.write("ABOUT");
        res.end();
    }
    if(req.url=="/contact"){
        res.write("CONTACT");
        res.end();
    }
});

myServer.listen(5555,()=>{
    console.log("My Server Get Started");
})