import http from 'http';

let myServer = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("Hello My Friends");
        res.end();
    }
    else if(req.url=="/home"){
        res.write("HOME PAGE");
        res.end();
    }
    else if(req.url=="/about"){
        res.write("ABOUT");
        res.end();
    }
    else if(req.url=="/service"){
        res.write("SERVICE");
        res.end();
    }
    else if(req.url=="/gallery"){
        res.write("GALLERY");
        res.end();
    }
    else if(req.url=="/contact"){
        res.write("CONTACT");
        res.end();
    }
    else if(req.url=="/help"){
        res.write("HELP");
        res.end();
    }
    else{
        res.write("NOT FOUND");
        res.end();
    }
});

myServer.listen(5555,()=>{
    console.log("My Server Get Started");
})