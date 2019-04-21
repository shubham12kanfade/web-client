const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config.json');
const app = express();

enableCORS(app);
attachBodyParser(app);
enableStaticFileServer(app, 'public/food-app-client-web/', '/');
enableFallbackForAngular(app,'public/food-app-client-web/index.html');

app.listen(config.port, () => {
  console.log('App started listening on port : ', config.port);
});

// Enable CORS
function enableCORS(expressInstance) {
  expressInstance.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, timeZone");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
}

// Attach BodyParser
function attachBodyParser(expressInstance) {
  expressInstance.use(bodyParser.json());
  expressInstance.use(bodyParser.urlencoded({
    extended: true
  }));
}

// Enable Static File Server
function enableStaticFileServer(expressInstance, folderName, route) {
  expressInstance.use(route, express.static(path.join(__dirname, folderName)));
}

function enableFallbackForAngular(expressInstance,filePath) {
  expressInstance.use((req, res, next) => {
    res.sendFile(path.join(__dirname, filePath));
  });

}