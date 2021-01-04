const express = require("express");
const app = express();
const path = require("path");

// Constants
const ROOT = { root: path.join(__dirname, './public') };

// Request accepts
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})