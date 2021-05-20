const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require('express-fileupload');


//middleware
app.use(express.json())
app.use(cors())
app.use(fileUpload());

//routes

//register and login routes

app.use("/auth", require("./routes/jwtAuth"));

//dashboard route

app.use("/dashboard", require("./routes/dashboard"));

//file route


app.post("", (req, res)=>{
    let samplefile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded')
    }
    samplefile =  req.files.samplefile;
    console.log(samplefile)
})





app.listen(3001, () => {
    console.log("server is running on port 3001")
});
