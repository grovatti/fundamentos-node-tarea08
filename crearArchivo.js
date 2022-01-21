const color = require("colors/safe")
/* 
   -- Tarea 3 --
*/ 
crearArchivo = (iMultiplicador) =>{
    let itera = "";
    let fs = require('fs') ;
    
    //Activamos el Error:
   
    for(let ifor=1;ifor<11;ifor++){itera+= `${ifor} x ${iMultiplicador} = ${iMultiplicador*ifor}\n`;}

    fs.writeFile(`tabla-del-${iMultiplicador}.txt`,itera,function(err){
        // Tarea 5
        if(err)
            {console.log(color.bgRed(color.white(`Error ${err.message}`)));} 
        else
            {console.log(color.bgGreen(color.black(`Guardada la tabla del ${iMultiplicador}`)));}
    })
}

module.exports = {crearArchivo}