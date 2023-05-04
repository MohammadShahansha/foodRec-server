const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const chefRecipe = require('./data/chefRecipe.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send("assignment ten server site");
})
app.get('/chefrecipe',(req, res) => {
    res.send(chefRecipe);
})

app.get('/chefrecipe/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedChef = chefRecipe.find(chef => chef.id==id)
    res.send(selectedChef);
})


app.listen(port, () => {
    console.log(`seerver is running on port:${port}`)
});