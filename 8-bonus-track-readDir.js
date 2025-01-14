const fs = require('fs');
const path = require('path');

const leerDirectorio = async (dir, nivel = 0) => {
    const dirs = await fs.promises.readdir(dir, { withFileTypes: true });// con withFileTypes: true, readdir retorna un array de objetos Dirent
    for(const dirent of dirs){
        const rutaCompleta = path.join(dir, dirent.name); // path.join() concatena las rutas
        const tab = '--'.repeat(nivel);//Multiplica el string '--' por el nivel
        if(dirent.isDirectory()){
            console.log(`${tab} ${dirent.name}`);
                await leerDirectorio(rutaCompleta, nivel + 1 );
        }else if(dirent.isFile()){
            console.log(`${tab} ${dirent.name}`);}
    }
}

leerDirectorio('./');
