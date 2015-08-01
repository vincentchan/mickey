var foxy      = require("./index");
var request   = require("supertest");
var connect   = require("connect");
var http      = require("http");
var multi     = require("multiline");

//var proxy = foxy("http://www.bbc.co.uk");
var proxy = foxy("http://wordpress.dev");
var proxy = foxy("http://swoon.dev");

var server = proxy.listen(8181);

console.log(server.address());