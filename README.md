# asignacion
https://docs.minnekdigital.com/join/recruitment-process/challenges/full-stack.html

# Task 1: problema de programacion
la funcion con la solucion se encuentra en el archivo task1.py
las pruebas se encuentran en test_reverse.py, para ejecutarlo correr `python test_reverse.py`


# Task2: web app
## get started
Para correr app con Docker-compose:
`docker-compose build ` -> `docker-compose up`

o para correr build de produccion:
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d`

alternativamente sin Docker, local:
1. npm install
2. npx prisma generate
3. tener una instancia de postgres corriendo en la maquina, crear una db llamada 'dogs_db', y correr el script de inicializacion ubicado en ./task2/db_queries/

## stack
TypeScript, Svelte / SvelteKit, Prisma ORM, PostgresSQL, Docker, html/css.

## requisitos
- [x] listar razas
- [x] imagenes/nombre
- [x] hover state con sub razas
- [x] vanilla css (excepto en la tabla)
- [x] responsive grid
- [x] tabla de razas
- [x] search input
- [x] sorting
- [] CRUD: con data local (variables).
edit y delete solo funciona sobre el primer elemento de la lista ya que no he logrado obtener el id de la celda seleccionada (usé un plugin de tablas).
tampoco hay validacion de IDs duplicados al momento de insertar entradas.

## testing
- `npm run test:unit` para correr los tests unitarios
- (TODO)`npm run test:integration` para correr tests E2E con playwright

## despliegue
- para correr localmente usar `npm run dev`
- para simular un despliegue a produccion: contruir una imagen Docker a base del Dockerfile y luego correr la imagen `docker build -t dog-app .` -> `docker run -d -p 3000:3000 dog-app`

no desplegué la app a la nube porque se me acabaron los creditos que tenia en AWS y lo iba a desplegar en netlify pero tengo que esperar que verifiquen mi identidad :):
pero el proceso es el siguiente:
1. ssh a la maquina virtual
2. crear una session de tmux para que los procesos no se cierren cuando salga de la maquina
3. `git clone <repo>` -> `cd task2` -> `docker build -t dog-app .` -> `docker run -d -p 3000:3000 dog-app`


# task 3
endpoints expuestos:
/api/dog:  GET, POST
/api/dog/[id]: GET, PUT, DELETE
estos endpoints realizan operaciones CRUD que persisten en la base de datos

## requisitos
- [x] Database Postgres
- []  Login, auth
- [x] dog management, persistance / REST API
- [x] img storage (base64 str, not URL)
- [] carrusel de imagenes
- [] form UI para insertar perros
- [x] testing modules
- [x] deployment: no desplegué a la nube pero con los archivos docker-compose.yml es tan sencillo como encender una maquina virtual, clonar el repositorio y correr Docker build/run

# otros proyectos
no tuve tiempo de completar task 3 pero les dejo como referencia otros proyectos en los que trabajé en servicios back-end
https://github.com/andresestrella/api-territorio-rd/tree/master
https://github.com/Po1arM/Web-Avanzada
https://github.com/NDavidDuranM/proyectofinal
Muestro mas de mis proyectos pasados en mi perfil de (Github)[https://github.com/andresestrella]


# Notas
- Consideré hacer el front-end con React ya que he estado empezando a probarlo reciente pero decidí usar Svelte/kit ya que estoy familiarizado con el y se me dió relativamente corto tiempo para entregar esta asignación
- en un proyecto real le dedicaria tiempo a comentar partes del codigo donde evalue necesario.
- Declaré los endpoints del back dentro de un solo proyecto por conveniencia, tipicamente suelo separarlos en dos servicios para mas flexibilidad al momento de desplegar y escalar.

# TODO
- guardar subBreeds en un store y asi no tengo que propagarle ese prop completo a todos los componentes <DogCard>
- agregar tests unitarios para comprobar que los componentes se renderizan correctamente
- arreglar sort por sub-breeds
- bug: aveces no cargan algunas imagenes random, podria ser problema de la API.
- mover fetch calls dentro de onMount hooks o dentro de load() functions como me alerta Vite.
