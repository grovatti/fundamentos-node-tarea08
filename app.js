const argv = require('./config/yargs.js').yargs;

const color = require("colors/safe")
const {crearArchivo} = require("./crearArchivo.js")
 
if(argv.listar){crearArchivo(argv.base);}
