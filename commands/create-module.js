var fs = require('fs');
var mkdirp = require('mkdirp');
var chalk = require('chalk');

var serverDir = '/server'; 
var clientDir = '/client';
var testsDir = '/tests';
var args = process.argv[3];
var newModulePath = './' + args;

var createModule = function() {
    if(fs.existsSync(newModulePath)) {
        console.log('\n' + args + " already exists.");
    }else {
        console.log("\nCreating " + chalk.red(args) + "...");

        // Create a new module   
        fs.mkdirSync(newModulePath);

        // Create AngularJS client side
        fs.mkdirSync(newModulePath + clientDir); 
        fs.mkdirSync(newModulePath + clientDir + '/config'); 
        fs.mkdirSync(newModulePath + clientDir + '/controllers');
        fs.mkdirSync(newModulePath + clientDir + '/directives'); 
        fs.mkdirSync(newModulePath + clientDir + '/services');
        fs.mkdirSync(newModulePath + clientDir + '/views');
        fs.openSync(newModulePath + clientDir + '/' + args + '.client.module.js', 'w');
        console.log("Client directory added at " + newModulePath + clientDir);

        // Create Node.js/Express/MongoDb server side
        fs.mkdirSync(newModulePath + serverDir); 
        fs.openSync(newModulePath + serverDir + '/' + args + '.server.controllers.js', 'w');
        fs.openSync(newModulePath + serverDir + '/' + args + '.server.models.js', 'w');
        fs.openSync(newModulePath + serverDir + '/' + args + '.server.routes.js', 'w');
        console.log("Server directory added at " + newModulePath + serverDir);

        // Create test directory
        fs.mkdirSync(newModulePath + testsDir); 
        fs.mkdirSync(newModulePath + testsDir + clientDir);
        fs.mkdirSync(newModulePath + testsDir + serverDir);
        console.log("Tests directory added at " + newModulePath + testsDir);
        console.log("\nModule " + chalk.red(args) + " created.\n");

    }
}

module.exports = {
    createModule: function() {
        createModule();
    } 
}
