const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/users', (req, res) => {
  res.status(200).send('HELLO FROM EXPRESS')
})

app.listen(port, () => console.log(`Listening on port ${port}`));