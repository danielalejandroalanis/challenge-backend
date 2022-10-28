# Challenge Back-End - Guia de inicio rápido

-----

## Autor
- [Daniel Alanis](https://github.com/danielalejandroalanis)

-----

## Ambiente de prueba

    - OS Local: Linux Mint 19
    - Node Version: v18.7.0
    - NPM version: v8.15.0
    - MYSql version: 8.0

## Tecnologías utilizadas:

    - Node
    - MySql
    - Steplix Microservice
    - DBeaver-ce

## Estructura del proyecto

```bash
├── node_modules
├── public
├── core
│   ├── config
│   ├── controllers
│   ├── models
│   ├── index.js
├── mysql
│   ├── database
│   ├── scripts
│   ├── tables
├── .env
├── .gitignore
├── docker-compose.yaml
├── DockerFile
├── index.js
└── package.json
```

## Ejecución local

**Clonar repositorio:** 

> git clone https://github.com/danielalejandroalanis/frontend-controlusuario.git

**Instalar dependencias**

> npm i

**Ejecución en consola:**

> npm start

## Pantallas

### Home

En esta vista se podrá visualizar la lista (en forma de tabla) de usuarios cargados. Además, con el botón de la columna *Acción*, podremos ver la información detallada (en un modal) con datos no incluidos en la tabla.

En el recuadro de *Busqueda por Nombre*, podremos filtrar los usuarios según el criterio *Nombre*.

### Crear Usuario

Podremos crear un nuevo usuario haciendo uso de esta pantalla. Deberemos rellenar el formulario, y una vez se presiona el botón *Crear Usuario*, se cargará el nuevo usuario en la base de datos devolviendonos el ID del mismo. Podremos corroborar esto en el **Home**.


