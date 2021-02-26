// Import packages

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const fs = require("fs");

// Aplicatia
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

//* FUNCTIONEAZA
app.get("/words", (req, res) => {
    const wordsList = readJSONFile();
    if(wordsList != undefined){
      res.status(200).send(wordsList);
    } else {
        res.status(404).send("No word found");
    }
    
  });

//* FUNCTIONEAZA
app.post("/words", (req, res) => {
    const words = readJSONFile();
    var newWord = {
        id : uuid.v4.apply(),
        word: req.body.word,
    }

    words.push(newWord);
    writeJSONFile(words);
    res.status(200).send(newWord);
});

//! FUNCTIONEAZA NECORESPUNZATOR
app.delete("/words/:id", (req, res) => {
    const wordsList = readJSONFile();
    var updatedList=[];
    var id = req.params.id;
    for(let i = 0; i < wordsList.length; i++) {
        if(wordsList[i].id !== id) {
            updatedList.push(wordsList[i]);
        }
    }
    writeJSONFile(updatedList);
  });

//* FUNCTIONEAZA
app.put("/words/:id", (req, res) => {
    var id = req.params.id;
    var checkIfWordExists = false;
    const wordsList = readJSONFile();
    for(let i = 0; i < wordsList.length; i++) {
        if(wordsList[i].id === id) {
            wordsList[i].word = req.body.word;
            checkIfWordExists = true;
            break;
        }
    }

    if(checkIfWordExists === true) {
        writeJSONFile(wordsList);
        res.status(200).send("Word updated!");
    } else {
        res.status(404).send("Word not found!");
    }
});









//***********************************************
// Pornim server-ul
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);

function readJSONFile() {
    return JSON.parse(fs.readFileSync("words.json"))["words"];
}

// Functia de scriere in fisierul words.json
function writeJSONFile(content) {
fs.writeFileSync(
    "words.json",
    JSON.stringify({ words: content }),
    "utf8",
    err => {
    if (err) {
        console.log(err);
    }
    }
);
}

