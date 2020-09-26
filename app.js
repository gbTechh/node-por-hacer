const argv = require('./config/yargs').argv;
const colors = require('colors').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
      let task = porHacer.crear(argv.description);
      console.log(task);
      break;
    case 'listar':
      let listado = porHacer.getListado();

      for (let tarea of listado) {
          console.log('=========Por hacer========'.green);
          console.log(tarea.description);
          console.log('Estado:',tarea.completado);
          console.log('=========================='.green);
      }
      break;
    case 'actualizar':        
        let actualizado = porHacer.actualizar(argv.description,argv.completado);
        console.log(actualizado);   

      break;

     case 'borrar':        
      let borrado = porHacer.borrar(argv.description);
      console.log(borrado);   

    break;
    default:
      console.log('Comando no reconocido');
      break;
  }
  