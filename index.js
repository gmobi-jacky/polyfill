const express = require('express');

const app = express();

app.get('/', require('./api/index'));

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));