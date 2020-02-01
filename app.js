const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const colors = require('colors');

const { crearArchivo } = require('./multiplicar');


let comando = argv._[0]

switch (comando) {
    case 'listar':

        let tabla;


        for (let i = 1; i <= argv.limite; i++) {
            tabla += (`${argv.base} * ${i} = ${argv.base * i}\n`);
        }
        console.log('=================='.green);
        console.log('=======Tabla======'.green);
        console.log('=================='.green);
        console.log(tabla);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('no reconocido');
        break;
}


let argv2 = process.argv;


// console.log(argv.base);
// console.log(argv.limite);

//console.log(argv2);
// let param = argv[2];

// let base = param.split('=')[1]

//console.log(base);