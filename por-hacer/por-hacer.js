const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () =>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data , (err) => {
        if (err) throw new Error('No se pudo Grabar', err);
         
    });
}

const cargarDb = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}


const crear = (description) => {

    cargarDb()
    let porHacer = {
        description,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDb();

    return porHacer;
}

const getListado = () =>{
    cargarDb();
    return listadoPorHacer;
}  

const actualizar = (description , completado = true ) =>{
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description)
    if(index >=0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;

    }else{
        return false;
    }
}

const borrar = (description) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description)
    if(index>=0){
        let newArray = listadoPorHacer.filter(task => task.description != description);
        listadoPorHacer = newArray;            
        guardarDb();
        return true;
    }else{
        return false
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}