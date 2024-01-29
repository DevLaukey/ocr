const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const text = req.body.text;
    res.send(text);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
