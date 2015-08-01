var foxy      = require("./index");
var request   = require("supertest");
var connect   = require("connect");
var http      = require("http");
var multi     = require("multiline");

var config = {
    rules: [
        {
            match: /Hi there/,
            fn: function (match) {
                return "Browser Sync " + match
            }
        },
        {
            match: /<body>/,
            fn: function (match) {
                return "<BODY>";
            }
        }
    ]
};

var app    = connect();
var output = multi(function () {/*
<!doctype html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    Hi there
</body>
</html>
*/});

app.use("/hello", function (req, res, next) {
    res.end(output);
});

var server = http.createServer(app).listen();

var proxy = foxy("http://localhost:" + server.address().port, config);

request(proxy)
    .get("/hello")
    .set("accept", "text/html")
    .expect(200)
    .end(function (err, res) {
        console.log(res.text);
        server.close();
    });

