// console.log("server file is running")
// console.log("hidden")

// var fs=require('fs');
// var os=require('os');
// var user =os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','hi'+user.username+'!\n',()=>{
//     console.log("file is created")

// })

const notes=require('./notes.js')
var _=require('lodash');

var age=notes.age;
console.log(age);
var data=[1,1,1,2,2,3,3,4,4,4,555];
var filter=_.uniq(data);
console.log(filter);
