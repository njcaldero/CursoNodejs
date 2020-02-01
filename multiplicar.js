const fs = require('fs');




crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base))
            return reject('la base no es un número')

        let tabla;

        for (let i = 1; i <= limite; i++) {
            tabla += (`${base} * ${i} = ${base * i}\n`);
        }

        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });

    });
}

module.exports = {
    crearArchivo
}