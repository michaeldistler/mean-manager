const fs = require('fs');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
var args = process.argv[3];
var newProjectPath = './' + args;

var createProject = function () {
    if(fs.existsSync(newProjectPath)) {
        console.log(args + " already exists.");
    }else {
        console.log("\nCreating project " + chalk.red(args) + "...");

        // Create a new project   
        fs.mkdirSync(newProjectPath);
        fs.mkdirSync(newProjectPath + '/' + args);
        console.log('\n' + chalk.red(args) + ' directory created.');
        fs.openSync(newProjectPath + '/README.md', 'w');
        console.log(chalk.red('README.md') + ' added.');
        fs.openSync(newProjectPath + '/LICENSE.md', 'w');
        console.log(chalk.red('LICENSE.md') + ' added.');
        fs.openSync(newProjectPath + '/server.js', 'w');
        console.log(chalk.red('server.js') + ' added.');
        fs.openSync(newProjectPath + '/' + args + '/index.html', 'w');
        console.log(chalk.red('index.html') + ' added to ' + chalk.red(args) + ' directory.');
        fs.openSync(newProjectPath + '/' + args + '/thinknode.js', 'w');
        console.log(chalk.red('thinknode.js') + ' added to ' + chalk.red(args) + ' directory.');
        console.log('\nProject ' + chalk.red(args) + ' created.');

    }
}

module.exports = {
    createProject: function() {
        createProject();
        console.log('\nThank you for using Mean Manager!');
        console.log('Contribute and/or learn more at: ' +
                chalk.blue('https://github.com/michaeldistler/mean-manager\n'));
    }
}
