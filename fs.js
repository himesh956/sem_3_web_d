const f=require("fs");
f.writeFileSync("hello.txt","hello to all, i m himesh");
f.writeFile("hi.txt", "hello ! himesh",(err)=>{console.log("error",err)})
console.log("data 1");
console.log("data 2");
f.unlinkSync('hi.txt');
f.appendFile("hi.txt", "javascript")
console.log("data 3");
const r=f.readFileSync('hi.txt');
console.log(r.toString());
console.log(r);
const k=f.readFileSync('output.txt','utf-8');
console.log(k);