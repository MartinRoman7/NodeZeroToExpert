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

        Commit: un snap de los archivos

        git commit -m "Commit inicial"

        Crear un nuevo repositorio en GitHub

        git remote add origin (url del repositorio)
        git push -u origin master

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

