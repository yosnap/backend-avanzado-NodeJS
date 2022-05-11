const app = require('./app');
require('./services/startDb');
require('dotenv').config();

const port = process.env.PORT || 3000;

(() => {
    app.listen(port,err => {
        if(err){
            console.error(`Error al ejecutar el servidor: ${err}`);
            process.exit(1);
        }else{
            console.log(`Nodepop a la escucha por el puerto ${port}`);
        }
    });
})();