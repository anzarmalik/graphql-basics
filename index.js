// Start your es6 scripts here

import express from 'express'

const app = express();


app.get('/', (req,res)=>{
res.send("Up and running")
});

app.listen(8082,()=>console.log("running on 8082"));
