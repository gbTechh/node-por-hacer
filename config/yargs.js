
const opts = {
    description:{
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
      },
      completado: {       
        default: true,
        alias: 'c',
        desc: 'Marca como compeltado o pendiente la tarea'
      }
}

const argv = require('yargs')
.command('crear','Crear un elemento por hacer', {description:opts.description
        })
.command('actualizar','Actualiza el estado completo de la tarea',{
    description:opts.description,
    completado:opts.completado
        })
.command('borrar','Borrar un elemento de la lista de tareas', {
    description:opts.description
        })
.help()
.argv;

module.exports = {
    argv
}
