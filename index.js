// part1  core modules
// ques1>>>>>>>>>>

// const fs = require('fs');
// const stream=fs.createReadStream("./big.text",{encoding:"utf-8",highWaterMark:16*1024});
// stream.on("data",(chunk)=>{
//     console.log( "chunk",chunk);
// });


// ques2>>>>>>>>>>

// const fs= require('fs');
// const readStream=fs.createReadStream("./source.txt")
// const writeStream=fs.createWriteStream("./destination.txt")

// readStream.pipe(writeStream);
// writeStream.on("finish",()=>{
//     console.log("done");
    
    
// })
// console.log("file copied successfully");


// ques3>>>>>>>>>>

// const fs= require('fs');
// const zlib=require('zlib');
// fs.createReadStream("./data.txt").pipe(zlib.createGzip())
// .pipe(fs.createWriteStream("data.txt.gz"));
// console.log("file compressed successfully");


// part2 crud apis

// ques1>>>>>>>>>>>>


// const http = require("http");
// const fs = require("fs");

// const USERS_FILE = "./users.json";

// function readUsers() {
//   return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
// }

// function writeUsers(data) {
//   fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2));
// }

// const server = http.createServer((req, res) => {
//   const users = readUsers();

  
//   if (req.method === "GET" && req.url === "/user") {
//     return res.end(JSON.stringify(users));
//   }

//   if (req.method === "GET" && req.url.startsWith("/user/")) {
//     const id = +req.url.split("/")[2];
//     const user = users.find(u => u.id === id);
//     return res.end(user ? JSON.stringify(user) : JSON.stringify({ message: "User not found" }));
//   }
//   if (req.method === "POST" && req.url === "/user") {
//     let body = "";
//     req.on("data", chunk => body += chunk);
//     req.on("end", () => {
//       const newUser = JSON.parse(body);
//       if (users.some(u => u.email === newUser.email))
//         return res.end(JSON.stringify({ message: "Email already exists" }));

//       newUser.id = users.length + 1;
//       users.push(newUser);
//       writeUsers(users);
//       res.end(JSON.stringify({ message: "User added successfully" }));
//     });
//   }

  
//   if (req.method === "PATCH" && req.url.startsWith("/user/")) {
//     const id = +req.url.split("/")[2];
//     let body = "";
//     req.on("data", chunk => body += chunk);
//     req.on("end", () => {
//       const index = users.findIndex(u => u.id === id);
//       if (index === -1)
//         return res.end(JSON.stringify({ message: "User ID not found" }));

//       users[index] = { ...users[index], ...JSON.parse(body) };
//       writeUsers(users);
//       res.end(JSON.stringify({ message: "User age updated successfully" }));
//     });
//   }
//   if (req.method === "DELETE" && req.url.startsWith("/user/")) {
//     const id = +req.url.split("/")[2];
//     const index = users.findIndex(u => u.id === id);
//     if (index === -1)
//       return res.end(JSON.stringify({ message: "User ID not found" }));

//     users.splice(index, 1);
//     writeUsers(users);
//     res.end(JSON.stringify({ message: "User deleted successfully" }));
//   }
// });

// server.listen(3000, () => console.log("Server running on port 3000"));




