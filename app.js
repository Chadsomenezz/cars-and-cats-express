const express = require("express");
const app = express();
const port = 8080;

app.use(express.static(`${__dirname}/static`));


app.listen(8080,()=>{
    console.log(`Listening at port ${port}`);
})
