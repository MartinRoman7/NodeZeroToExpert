# NodeJS
___
## Sección 1
___
Introducción a temas del curso.

## Sección 2
___
### Entradas y salidas de No-Bloqueo
    
    Consiste en que los procesos se quedan en background mientras se continua con las demás solicitudes, este proceso se realiza mediante el ciclo de eventos de Node.

### Ciclo de eventos de Node

* Pila de procesos (Call stack)
        
    Ejejcución principal de los procesos sincronos
    
    main() - registro de procesos y determina donde serán ejecutados
    
* Node Apis
        
    Intermediario de procesos
    
* Cola de callbacks 
        
    Cuando terminan del intermediario pasan a la cola a esperar que termine el main()

### Scripts
* app2.js

    funcion básica
    
* app3.js
        
    setTimeout - funcion que ejecuta un callback después de un determinado tiempo.
    
    Mostrar el orden en que se ejecutan los procesos.
    
* Shortcut console.log = clg

## Seccion 3
___
### Nodemon
* sudo npm install -g nodemon
* nodemon app.js 

        Permite visualizar de forma dinámica la ejecución de un script.

### Var vs Let
* Creacion de variables
* var

    No importa cuantas veces se declare la variable, siempre tomará el último valor.

* let

    No se puede volver a iniciarlizar la variable. 

        Con Let se identifican diferenetes espacios de memorias, lo que permite tener la declaración de la variable pero dentro de otro subproceso (if, for, while, etc).

### Templates literales
        Relacionado a la concatenación de datos. 

### Destructuración de objetos
        Obtener varios datos mediante un sólo proceso. 
        Se utiliza la declaración de la variable y entre {} se colocan las variables a obtener.

### Funciones de flecha
        Permite la simplicidad de las funciones cuando cuentan con un return.
        Se utiliza una flecha para señalar el return.
        Los parametros se colocan entre parentesis para interpretarlos.
        En la función de flechas (this) apunta a lo que se encuentra fuera del objeto, por lo que se debe cuidar el uso de este método.

### Callback
        Función que se ejecuta después de un evento.
        Usualmente utilizados para la consulta a base de datos.
        Es recomendado manejar mensajes de errores, estos se colocan como primer parámetro.
        Para imprimir el necesario colocar una (,) en caso de que sea un objeto.
        Para hacer consultas sobre consultas se suelen colocar anidadas.

### Promesas
        Es la sustitución de los callbacks.
        Tienen una sintaxis específica, esto permite el manejo de procesos sync.
        Es mejor que callbacks en el sentido que es más especifico y directo su manejo.

### Promesas en cadena
        Consiste en optimizar el proceso de ejecución de funciones, de tal forma que el proceso de error existe en global para todas las promesas.
        Se utiliza el método .catch

### Async - Await
        Permite simplificar el método de promesas.
        Async: simplifica el método de la promesa sólo colocando async.
        Await: necesita estar dentro de un async. Permite la sincronización ya que espera ahí hasta que se tenga el resultado.

### Scripts
* let-var.js

    Declaración de variables utilizando var y let, mostrando las diferencias entre los métodos.

* template-string.js

    Funcionamiento de templates utilizando suma (+) o uso de comilla simple acostada (`).

* destructuracion.js

    Obtención de datos simultaneos.

* flecha.js

    Representación de función normal en tipo flecha.

* callback.js

    Muestra de diferentes callbacks a encontrar durante el desarrollo.
    En el desarrollo se muestra un función con un objeto el cual se imprimer en caso de que id no sea igual a 20.

* callback2.js

    Ejercicios aplicando callbacks anidados.
    Es importante revisar para comprender el funcionamiento de los objetos y sus retornos.

* promesas.js

    Traducción de callbacks a promesas.
    Revisar para conocer la estructura de promesas.

* async-await.js

    Primer ejemplo es la simplificación de la promesa con async.
    Segundo ejemplo es el uso de await.

* async-await2.js

    Aplicación de los métodos utilizando los ejemplos de callbacks y promesas

## Sección 3

### Requerir paquetes (require)
        Existen diferentes tipos de paquetes que se pueden solicitar.
        Los propios de node. (fs)
        Los que son externos. (express)
        Los que se tiene de forma propia. (./fs)

### Estructurar funciones en archivos
        En el script principal se cuenta con el llamado a la función que se encuentra en otro archivo. 
        El archivo con la función cuenta con una promesa y la opción module.exports. 

### Datos desde consola
        El componente process.argv retorna los parámetros utilizados.
        El primer campo es que se está ocupando (node), el siguiente es el archivo que se está utilizando y finalmente se tiene el parámetro introducido. 

### npm init - install - uninstall - package.json
        El primer comando ejecutado es npm init, donde se tienen ciertas solicitudes.
        package name: (03-bases-node).

        Agregar --save al final de la instalación permite agregarlo al package.json

        Crea un packge.json el cual incluye todas la dependecias.

        version: (1.0.0)
        description: Aplicación de línea de comando.
        entry point: (app.js)
        test command:
        git repository:
        keywords:
        author: Martín Román
        license: (ISC)
        About to write to /home/martin/Documents/camaras_frio/NodeZeroToExpert/03-bases-node/package.json:

            {
            "name": "03-bases-node",
            "version": "1.0.0",
            "description": "Aplicación de línea de comando.",
            "main": "app.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "Martín Román",
            "license": "ISC"
            }
        
        npm i yargs --save

        Genera un package-lock.json que es un archivo que muestra el proceso que se llevó a cabo por npm para la instalación del paquete.

        Directorio node_modules incluye plugins y paquetes necesarios para que las dependencias que se tiene en package.json funcionen.

        npm install - hace una instalación basandose en el archivo package.json
        
        npm uninstall package

### Yargs
        Utilizado para la validación de parámetros.
        
        const argv = require('yargs')
        .command('listar', 'Parámetro para realizar archivo de tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
        .help()
        .argv;

### Detección de comando (Yargs)
        En argv, en la sección _ se muestran los comandos ingresados

        let comando = argv._[0];

        switch (comando) {
            case 'listar':
                console.log('listar');
                break;

            case 'crear':
                console.log('crear');
                break;

            default:
                console.log('Comando no encontrado');
        }

### Optimización de Yargs
        Consiste en generar un archivo independiente en /config, en donde se coloca la configuración de yargs y se exporta al script principal.
        La opción .argv está indicando que ingrese al archivo pero en especifico a la función argv, ya que se tiene opts también.

        const argv = require('./config/yargs').argv;

### Colores en consola
        sudo npm install colors --save

        Se hace el require en donde se vaya a necesitar.

        const colors = require('colors'); o const colors = require('colors/safe');

        Con la segunda opción se puede ingresar color del siguiente modo

        console.log('Archivo creado:', colors.green(archivo))

### Git y GitHub
        Colocarse en el directorio que se desea.

        git init
        git status
        
        Crear archivo para ignorar archivo o directorios
        
        .gitignore -> colocar dentro el directorio no deseado

        README.md -> colocar descripción del proyecto

        Commit: un snap de los archivos

        git commit -m "Commit inicial"

        Crear un nuevo repositorio en GitHub

        git remote add origin (url del repositorio)
        git push -u origin master

        Tags

        git tag -a v1.0.0 -m "primera version"
        git tag
        git push --tags 


### Scripts

* app.js

    Almacenar salida en un archivo de texto con el paquete fs.
    Solicitar una función remota.
    Recibir argumentos.

* multplicar.js

    Cuenta con toda la lógica de la función.
    Recibir parámetros para generar archivos de salida.

* yargs.js

    Contiene la configuración de yargs.
    En él se optimiza el proceso de opciones poniendolo en un objeto.

## Sección 4

### Tareas persistentes
        Consiste en almacenar la información obtenida en un archivo de salida.
        Esta persistencia se está haciendo con el paquete fs.

### Leer información de un archivo JSON
        Para leer la información de un archivo JSON sólo se debe colocar:

        listadoPorHacer = require('../database/db.json');

### Comandos utilizados

        node app.js crear --descripcion 'Pasear al perro'
        node app.js listar
        node app.js actualizar --descripcion 'Pasear al perro' -c 'true'
        node app.js borrar --descripcion 'Pasear al perro'

### Scripts

* app.js

    Contiene los comandos a ejecutar y utilizar.

* to-do.js

    Incluye funciones entre ellas:
    crear (descripcion) - creación de las tareas
    guardarDB () - almacenamiento en el archivo db.json
    cargarDB () - obtener info de db.json y validación con try y catch 
    listar () - permite cargar la db y enviar la info para imprimir en consola
    actualizar (descripcion, completado) - actualiza el estado de la tarea 
    borrar (descripcion) - eliminar un elemento del arreglo

* db.json

    Archivo JSON en donde se está almacenando la información de forma persistente 

## Sección 5

### Obtener API de google geolocalización

        https://developers.google.com/maps/documentation/geocoding/intro

        Obtención de clave
        https://console.cloud.google.com

        Ejemplo
        curl https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDPjQIyVGqU4B5eT-Nd-MUK2hXwdVhGIFE

### Peticiones HTTP - Axios

        Para utilizar axios primero se debe importar su libreria.
        const axios = require('axios');

        Después se hace una petición GET al servicio de Google.
        axios.get(`URL del servicio`)
            .then()
            .catch()

        Una vez que se obtiene el JSON de respuesta se puede comenzar a manipular.
        let location = result.data.results[0]; // Mostrar info real
        let data = JSON.stringify(result.data.results[0], undefined, 2); // Mostrar info completa pero no se puede manipular

### Optimización de geolocalización

        Se genera un nuevo script.
        Uso de async y await para las promesas.

### Obtención de temperatura

        Petición a un servicio de clima utilizando un API KEY.
        http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9a58046315bceaa4e0015d5a9a48235a

### Enlazar servicios

        Mediante el uso de async y await se simplifican las promesas.

        Los resultados obtenidos con la ejecución son node app -d 'San Petesburgo'
        El clima en St Petersburg, Russia es de 24°C
        No se puedo determinar el clima en sdsdsad

        https://github.com/MartinRoman7/clima-app-node

### Scripts 

* app.js

    Cuenta con la primer parte de axios.
    Al optimizar las funciones hace la petición a lugar.js

* lugar.js

    Se hace uso de async y await para realizar promesas.
    Se tiene validaciones.
    Retorna datos como objetos.

* clima.js

    Script donde se hace la petición hacia un servicio de clima.

## Sección 6

### Servidor Web

        En la página oficial de nodejs en DOCS - API - HTTP
        https://nodejs.org/dist/latest-v10.x/docs/api/http.html

### Express

        npm install express --save
        Permite optimizar el proceso de levantar un webserver.

### Mostrar contenido estático

        Primero se debe generar el contenido estático, generalmente es un HTML.
        Es necesario mandar a llamar ese archivo o directorio, para ello se utiliza un Middleware
        
        app.use(express.static(__dirname + '/public'))

        El archivo que muestra por default es index.html

        En caso de tener otro archivo (home.html) es necesario especificarlo:

        http://localhost:3000/home.html

### Creación de página web

        En general consiste en diseñar una página web.

        http://getbootstrap.com/
        Download - Download Source
        Lo interesante son los directorios /bootstrap/dist/css & js
        
        Navbar: Encabezados de bootstrap.
        Jumbotron: Inicio de páginas.
        Para el uso de jquery: Downloads/BootstrapCDN

### Handlebars

        Permite duplicar contenidos de páginas de forma dinámica.

        https://www.npmjs.com/package/hbs
        hbs - para Express
        npm install hbs --save
        
        Sintaxis: {{ variable }}

### Uso de parciales HBS

        Los parciales consisten en códigos que se van a utilizar varias veces y se realiza sólo uno para todos.

        El proceso es:

        En el server se manda a llamar el parcial.
        hbs.registerPartials(__dirname + '/views/partials');

        Después en el directorio /views/partials se colocan los archivos parciales con .hbs

        En el html home se llama con el comando: {{> nombre_archivo_hbs }}

        Ejecución de nodemon: nodemon server -e js,hbs

### Helpers

        Funciones que se ejecutan cuando son requeridos.
        Son tipo de variables pero que pueden no ser requeridas.

        Sintaxis en server:
        
        hbs.registerHelper('getAnio', () => {
            return new Date().getFullYear();
        });

        Llamado en .hbs:

        {{ getAnio }}
    
### Heroku

        Instalar heroku
        
        Uso del puerto
        const port = process.env.PORT || 3000; // Por default es el 3000 pero se indica que se acepta cualquiera de Heroku

        Uso de parámetros
        En package.json, dentro de "scripts" se coloca la llave "start"
        "scripts": {
            "start": "node server.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        }
        Ejecución
        npm start

        En caso de ser un llamado especifico, llave "nodemon"
        "scripts": {
            "start": "node server.js",
            "nodemon": "nodemon server.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        }
        Ejecución
        npm run nodemon

        Mismo proceso para GitHub
        - git init
        - git add . 
        - git commit -m "Primer página en Heroku"
        - git status

        Proceso con Heroku
        - . /home/martin/Downloads/heroku/bin/heroku login
            Email: oscararcos1994@gmail.com
            Password: *************
        - . /home/martin/Downloads/heroku/bin/heroku git:remote -a martin-page
        - git push heroku master
        - . /home/martin/Downloads/heroku/bin/heroku open // Abre el navegador

### Scripts

* app-old.js

    Servidor web no optimizado.

* server.js

    Servidor web optimizado mediante el uso de Express.
    Partials
    Helpers

* index.html

    Contenido estático.
    Diseño con bootstrap.

* home.hbs

    Incluye el formato de hbs y desde server.js se trabajan los parámetros.

* helpers.js

    Contiene los helpers utilizados.

## Sección 7

### Instalación de MongoDB

        En la página oficial de mongodb viene la instalación dependiendo de que sistema operativo se maneje.

        Es necesario indicar un directorio donde se va a almacenar la información.

        En Fedora

        Para instalar: dnf install mongodb mongodb-server
        Para iniciar mongo: service mongod start

### Instalación Robo 3T (manejo de mongodb)

        Se instala dependiendo el sistema operativo.

        Se crea una nueva base de datos.
        Se crear una nueva colección (tabla).
        Se crear un nuevo documento (parámetros).

### Peticiones (GET, PUT, POST, DELETE)

        Uso de diferentes metodos para manejo de data.
        
        GET: curl -X GET localhost:3000/usuario
        POST: curl -X POST localhost:3000/usuario
        PUT: curl -X PUT localhost:3000/usuario
        DELETE: curl -X DELETE localhost:3000/usuario

        PUT with parameter: curl -X PUT localhost:3000/usuario/parameter
        POST with parameter: curl -H "Content-Type: application/json" -d '{"nombre":"Martin","edad":"25"}' -X POST http://localhost:3000/usuario
        POST with parameter (file): curl -H "Content-Type: application/json" -d '@data.json' -X POST http://localhost:3000/usuario

        https://gist.github.com/subfuzion/08c5d85437d5d4f00e58

        Instalar body-parser 

### Manejo de status HTTP

        Validación de los parámetros enviados.

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

### Desarrollo y producción

        Optimizar el proceso de cambio de puerto dependiendo si se está en entorno de desarrollo o productivo.

        Para ello se asigna un archivo en especifico para el manejo de esta info.

### Subir a Heroku

        heroku create martin-restserver

        https://martin-restserver.herokuapp.com/ | https://git.heroku.com/martin-restserver.git


### Scripts

* server.js

    Contiene todo lo referido a peticiones.

* data.json

    Información en formato JSON para enviar a través de las peticiones.

* config.js

    Administración del entorno de desarrollo y productivo.