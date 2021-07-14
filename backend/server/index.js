
let jsonData = require('./data/books.json');

const express = require("express");

const fs = require('fs');

const path = require('path');

var cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors(corsOptions))

app.use(express.json()) 


app.post('/api', function (req, res) {
    
    var addedBook = res.json({requestBody: req.body})
    let newBook = { 
        id: addedBook.req.body.id,
        title: addedBook.req.body.title,
        author: addedBook.req.body.author,
        description: addedBook.req.body.description,
        cover: null,
        createdDate: addedBook.req.body.createdDate
    };

     let booksJson = fs.readFileSync("server/data/books.json","utf-8");

     let books = JSON.parse(booksJson);

     books.push(newBook);

     booksJson = JSON.stringify(books);

     fs.writeFileSync("server/data/books.json",booksJson,"utf-8");
  })

app.get("/api", (req, res) => {
    res.json(jsonData);
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});