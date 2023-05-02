const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("assignment ten server site");
})


app.listen(port, () => {
    console.log(`seerver is running on port:${port}`)
});