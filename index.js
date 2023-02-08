const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require("./src/routes/index.js"));
app.use(express.static(path.join(__dirname, "./src/public")));

app.listen(process.env.PORT || 3000);
console.log(`server is listening on port `, process.env.PORT || 3000);

app.get('/Test',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'./src/public/paginas/pag2.html'))
})