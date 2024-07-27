const path = require('path')

module.exports = {
   entry: './src/index.js',  //Punto de entrada de la aplicacion 
   output: {
      filename: 'bundle.js', //Este es el nombre del archivo de salida 
      path: path.resolve(__dirname, 'dist'), //Carpeta de salida    
    },
    module:{
        rules: [
            {
                test: /\.css$/,  //Regex para identificar archivos css, expresion regular
                use: ['style-loader', 'css-loader']  //Librerias que se llaman loader que sirven para procesar archivos css
            },
            {
                test:/\.js$/, //Regex para identificar archivos javascript
                exclude: /node_modules/,  //Excluir carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para llevar javascript moderno a javascript antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },   
        ],
    },
    devtool: 'source-map',  //Generar source maps para facilitar la depuracion 
    devServer: {
        contentBase: path.resolver(__dirname, 'dist'), //Carpeta desde el cual el servidor agarrara los archivos 
        compress: true, //Habilitar la compresion "gzip"
        port: 9000, //Puerto del servidor de desarrollo
    },
};  
