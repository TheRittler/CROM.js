# CROM.js

> CROM.js uses a library called `CrossEcore`. However, the source code which is delivered via NPM contains a number of compiler errors. The version, which is used here, is based on version `0.1.1` of `CrossEcore` without those compiler errors. Therefore, it is delivered within this repository and NOT installable via NPM.

The Compartment Role Object Model ([CROM](https://github.com/Eden-06/CROM)) metamodel is a feature-complete, comprehensive metamodel for role-based modeling and programming languages. 

CROM.js is the implementation of CROM written in TypeScript and can be transpiled to JavaScript and bundled as an ES6 module via:

`npm i && npx webpack --config webpack.config.js`.

It will be saved in the `output` directory.
