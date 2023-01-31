const fs = require('fs');

const files = fs.readdirSync("./newFichas");

files.map(carpeta=>{
    let fotos = fs.readdirSync("./newFichas/" + carpeta)
    fotos.map(foto=>{
        //  console.log(foto.slice(0,4));
        
          if(carpeta!=foto.slice(0,4)){
              console.log('Distinto')
              console.log(carpeta+'/'+foto.slice(0,4))
              fs.unlink("./newFichas/" + carpeta+"/"+foto,(err)=>{
                if(err){
                    throw(err);
                }
              })
          }
      })
})