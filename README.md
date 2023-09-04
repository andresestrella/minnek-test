# asignacion
https://docs.minnekdigital.com/join/recruitment-process/challenges/full-stack.html

# Task 1: problema de programacion
la funcion con la solucion se encuentra en el archivo task1.py
las pruebas se encuentran en test_reverse.py, para ejecutarlo correr `python test_reverse.py`


# Task2-3: web app
- [x] listar razas
- [x] imagenes/nombre
- [x] hover state con sub razas
- [x] vanilla css
- [x] responsive grid
- [x] tabla de razas
- [x] search input
- [x] sorting
- [] CRUD: funciona con data local (variables).
edit y delete solo funciona sobre el primer elemento de la lista ya que no he logrado obtener el id de la celda seleccionada (use un plugin de tablas).
no hay validacion de IDs duplicados al momento de insertar entradas.

## testing
- `npm run test:unit` para correr los tests unitarios
- (TODO)`npm run test:integration` para correr tests E2E con playwright

## despliegue
- para correr localmente usar `npm run dev`
- para simular un despliegue a produccion: contruir una imagen Docker a base del Dockerfile y luego correr la imagen `docker build -t dog-app .` -> `docker run -d -p 3000:3000 dog-app`

puede probar la app en el siguiente enlace:
la app fue desplegada en AWS EC2 de la siguiente manera:
1. ssh a la maquina virtual
2. crear una session de tmux para que los procesos no se cierren cuando salga de la maquina
3. `git clone <repo>` -> `cd task2` -> `docker build -t dog-app .` -> `docker run -d -p 3000:3000 dog-app`


# Notas
- Consideré hacer el front-end con React ya que he estado empezando a probarlo reciente pero decidí usar Svelte/kit ya que estoy familiarizado con el y tenía relativamente corto tiempo para entregar esta asignación
- Declaré los endpoints del back dentro del mismo proyecto del front-end por conveniencia, tipicamente suelo separarlos en dos servicios para mas flexibilidad al momento de desplegar y escalar.
- Decidi hacer el proyecto sin la ayuda de componentes pre-hechos y estilizados aunque considero que CSS es mi punto mas debil actualmente.


# TODO
- guardar subBreeds en un store y asi no tengo que propagarle ese prop completo a todos los componentes <DogCard>
- agregar tests unitarios para comprobar que los componentes se renderizan correctamente
- arreglar sort por sub-breeds
- bug: aveces no cargan algunas imagenes random, podria ser problema de la API.
