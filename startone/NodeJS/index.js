const axios = require('axios');
const express =require('express');
const oracledb = require('oracledb');
const router = express.Router();
var bodyParser = require('body-parser')
const PORT=8000 ;
var cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
async function f1(){
     connection =await oracledb.getConnection({

            user: 'username',
            password: 'password',
            connectString: 'host:port/service_name'

            })
            console.log("Successfully connect");

//console.log(result);
console.log("got the data");
}
f1()
//postrequest
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/senddata', urlencodedParser ,async function(req, res){
    try{
    console.log("inside post")
    var BillingID = req.body.BillingID;
    var FromDate = req.body.FromDate;
    var ToDate = req.body.ToDate;
    console.log(FromDate);
    let query = "select query"
    var result = await connection.execute(query);
    // console.log(result);

    res.json(result);
    }
    catch(err){
        console.log(err);

    }
})

app.listen(PORT, () => console.log('lisening'));
/* 
module.exports = connection; */
// export { connection };
