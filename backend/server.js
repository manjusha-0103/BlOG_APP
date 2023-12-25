const express = require("express")
const bodyParser = require('body-parser');
const connectDB = require("./config/db")
const cors = require('cors');

const https = require('https');
const fs = require('fs');
const rateLimit = require('express-rate-limit');


// const dotenv = require('dotenv')
// dotenv.config({});

//console.log(process.env.PORT)
const port =  process.env.PORT
const app = express();
app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/users',require('./routes/useroutes'))
app.use('/api/blog',require('./routes/blogroutes'))

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome here create Your own blog');
});

// Load SSL certificate and key
// const privateKey = fs.readFileSync('./cert/server.key', 'utf8');
// const certificate = fs.readFileSync('./cert/server.cert', 'utf8');
// const ca = fs.readFileSync('cert/manjusha.crt', 'utf8');
// const credentials = { key: privateKey, cert: certificate, ca:ca };
  
//const httpsServer = https.createServer(credentials, app)
//httpsServer.listen(port,()=> {console.log(`running on port ${port}`)});
app.listen(port, ()=>{
    console.log(`servere started on port ${port}`)
})









