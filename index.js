require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { quoteRouter } = require('./router/quote');
const port = process.env.PORT;
const cors = require('cors');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use(cors());

// mongoose db connection
main().catch(error =>  console.log(`mongoDB connection failed with ${error}`));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to mongodb cloud server successfully");
}

// routes
app.post('/form', (req, res)=> {
    res.send(req.body);
})

app.use('/quotes', quoteRouter);

// this "*" wildcard is used to handle the requests present in frontend react router, and show the index.html of frontend and then it will handle any route there by react router.
app.use("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});


app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})
