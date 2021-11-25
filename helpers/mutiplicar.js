const fs = require('fs')
const colors = require('colors')


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    
    try {
        if (listar) {
            console.log("====================".green)
            console.log('Tabla del: ', colors.blue(base) )
            console.log("====================".green)
        }

        let salida = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i } \n`
        }

        if (listar) {
            console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)

        return `tabla de la base ${base}.txt`
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    crearArchivo
}