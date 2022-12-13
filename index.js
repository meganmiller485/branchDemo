const express = require("express");
const app = express()

app.use('/users', require('./routes/users'))

app.listen(3000, () => {
    console.log("server is running on 3000!")
});