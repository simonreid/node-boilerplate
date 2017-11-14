const express = require('express');
const app = express();
const db = require('./db/db');

app.use(require('./routes/routes'));

// db.connect();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
