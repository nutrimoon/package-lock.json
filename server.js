
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('html'));
app.use("/", require("./routes/root"));
app.use("/single", require("./routes/single"));
app.use("/index", require("./routes/index"));
app.use("/index", require("./routes/home"));
app.use("/index", require("./routes/kd"));
app.use("/index", require("./routes/pd"));
app.use("/index", require("./routes/md"));
app.use("/index", require("./routes/gym"));
app.use(express.static('public'));
app.use(express.static(__dirname+'public/css'));
app.use(express.static(__dirname+'public/photo'));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

