
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, '..', '..', '.env');
dotenv.config({ path: envPath });

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});