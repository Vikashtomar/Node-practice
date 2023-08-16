import fs from 'fs';
let fileA = './data.txt';
let fileB = './novel.txt';
let fileC = './single.txt';

let allfiles = [fileA,fileB,fileC]

for(let i=0; i<allfiles.length; i++)
{
    fs.readFile(allfiles[i],((err,data)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(data.toString())
    }))
    

}


// console.log(Date())