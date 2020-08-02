# CROM.js
> CROM.js uses a library called `CrossEcore`. However, the source code which is delivered via NPM contains a number of compiler errors. The version, which is used here, is based on version `0.1.1` of `CrossEcore` without those compiler errors. Therefore, it is delivered within this repository and NOT installable via NPM.

CROM.js is written in TypeScript and can be transpiled to JavaScript and bundled as an ES6 module via:

`npm i && npx webpack --config webpack.config.js`.

It will be saved in the `output` directory.

The `index.ts` contains a minimal example of a CROM model which is printed to the console. It should be adjusted before usage of CROM.js.