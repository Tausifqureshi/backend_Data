// import jsonServer from "json-server";
const jsonServer = require("json-server");
// const jsonServer = require("json-server")
const server = jsonServer.create();
// const router = jsonServer.router("db.json");
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const port =  8080 ;


server.use(middlewares);
server.use(router);

server.listen(port);
console.log("Server Started")
