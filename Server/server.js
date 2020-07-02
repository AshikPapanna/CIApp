const express=require('express');
const app=express();
const path=require('path');
const routes=require('./serverroutes');


const port=process.env.PORT || 3200;



app.use(express.json());
app.use(express.urlencoded());
app.use('**',routes);
app.use('/dist',express.static(__dirname))

console.log(__dirname);

app.listen(port,()=>{
    console.log(`App is running and listening to ${port}`)
})