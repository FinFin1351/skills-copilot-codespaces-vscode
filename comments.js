// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());

// Get comments
app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    res.send(data);
  });
});

// Post comments
app.post('/comments', (req, res) => {
  const data = req.body;
  fs.readFile('./comments.json', 'utf8', (err, fileData) => {git add comments.js
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    const comments = JSON.parse(fileData);
    comments.push(data);
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }
      res.status(200).send('Comment added');
    });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});