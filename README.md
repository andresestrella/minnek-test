# Task 1: problema de programacion
la funcion con la solucion se encuentra en el archivo task1.py
las pruebas se encuentran en test_reverse.py y para ejecutarlo corra `python test_reverse.py`

# Task2-3: web app

## TODO

## testing
`npm run test`
`npm run test:`

## despliegue
puede probar la app en el siguiente enlace
la app fue desplegada en AWS EC2 de la siguiente manera:
1. ssh a la maquina virtual
2. crear una session de tmux para que los procesos no se cierren cuando salga de la maquina
3. `git clone <repo>` -> `cd task2` -> `docker build -t dog-app .` -> `docker run -d -p 8080:80 dog-app`


# Notas
- Consideré hacer el front-end con React ya que he estado empezando a probarlo reciente pero decidí usar Svelte/kit ya que estoy familiarizado con el y tenía relativamente corto tiempo para entregar esta asignación
- Declaré los endpoints del back dentro del mismo proyecto del front-end por conveniencia, tipicamente suelo separarlos en dos servicios para mas flexibilidad al momento de desplegar y escalar.
- Decidi hacer el proyecto sin la ayuda de componentes pre-hechos y estilizados aunque considero que CSS es mi punto mas debil actualmente.


# TODO
- guardar subBreeds en un store y asi no tengo que propagarle ese prop completo a todos los componentes <DogCard>
