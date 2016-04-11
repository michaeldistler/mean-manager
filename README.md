# MEAN Manager
A light MEAN stack project manager.  

## Why

- Minimal Prerequisites
- Minimal Installation
- Less opinionated way to manage MEAN projects than other Full-Stack Solutions
- Modular
- Easy creation of application modules
- Simple and elegant file structure

## Installation

```
$ npm install mean-manager --save-dev
```

## Usage

Use **mm-manage** in a similar way as [Django's **manage.py**](https://docs.djangoproject.com/en/1.9/ref/django-admin/) to access 
any project management commands.

```
$ mm-manage <command> [options]
```

**command**'s are listed in the [API](https://github.com/michaeldistler/mean-manager#api) section.  
**options** can be found listed under each command in the [API](https://github.com/michaeldistler/mean-manager#api);
optionality is dependent upon the command.

## Framework-type functionality

MEAN Manager is not meant to be a full-featured framework; scaffolding and boilerplate code are not provided. 
This decision was made to keep MEAN Manager as light as possible. However, if you need a functional starter project,
we are working to provide one that can be cloned from a separate repository.

## API

### create-project 

```
$ mm-manage create-project projectName
```

**create-project** requires that a project name parameter be set when called.

When **create-project** is called, it creates a new MEAN project directory under the given name,
and lays out the file structure as well as the files needed to get started.

### create-module

```
$ mm-manage create-module moduleName
```

**create-module** requires that a module name parameter be set when called.

When **create-module** is called, it creates a new application module under the given name.

The application module contains both client (AngularJS controllers, services, and views directories) 
and server (MongoDB `models.js`, `controller.js`, and `routes.js` files) directories.  

### License

MIT 

[//]: # (TODO COMMANDS:)
[//]: # (- change app name)
[//]: # (- Add a command to automatically pull starter project and name it?)
[//]: # (- Basic functionality to get it running; server, index, etc.)
[//]: # (- npm, Gulp, or, Grunt for build)
