var createModule = require('./commands/create-module.js');
var createProject = require('./commands/create-project.js');

var args = process.argv;

var manage = function() {
    switch(args[2]) {
        case "create-module":
            createModule.createModule();
            break;
        case "create-project":
            createProject.createProject();
            break;
        default:
            console.log(args[2] + " is not a commmand");
    }
}

module.exports = manage();
