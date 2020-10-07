const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://jongmin:jongmin94@cluster0.zfjfs.mongodb.net/Cluster0?retryWrites=true&w=majority`,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : true
}).then(() => console.log(`MongoDB successfully connected ...`))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send(`Hello, World`));

app.listen(port, () => console.log(`Example app listening on port ${port}`));