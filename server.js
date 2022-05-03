
const express = require("express");
const app = express();
//const ejs=require('ejs');
const axios = require("axios");
const port = 3000;
//app.set('view engine','ejs');
app.use(express.static('html'));
app.use("/", require("./routes/root"));
app.use("/single", require("./routes/single"));
app.use("/index", require("./routes/index"));
app.use("/home", require("./routes/home"));
app.use("/kd", require("./routes/kd"));
app.use("/pd", require("./routes/pd"));
app.use("/md", require("./routes/md"));
app.use("/gym", require("./routes/gym"));
app.use(express.static('public'));
app.use(express.static(__dirname+'public/css'));
app.use(express.static(__dirname+'public/photo'));
app.use(express.urlencoded());

app.use(express.json());

app.post("/index", (req, res) => {
    const options = {
        method: "GET",
        url: "https://food-calorie-data-search.p.rapidapi.com/api/search",
        params: { keyword: `${req.body.dd}` },
        headers: {
            "X-RapidAPI-Host": "food-calorie-data-search.p.rapidapi.com",
            "X-RapidAPI-Key": "c69a38f883msh91fbef47242b3c0p1c02f5jsn9ab79bfbeb09",
        },
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            res.send(response.data[0].shrt_desc)
        })
        .catch(function (error) {
            console.error(error);
        });
});


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)


);


