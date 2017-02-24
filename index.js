
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/app/index.html'));
});


app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log(`App running on PORT ${port}`);


