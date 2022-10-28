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
    - pm2

## Estructura del proyecto

```bash
├── node_modules
├── core
│   ├── config
│   ├── controllers
│   ├── models
│   ├── index.js
├── mysql
│   ├── database
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

> git clone https://github.com/danielalejandroalanis/challenge-backend

**Instalar dependencias**

> npm i

**Ejecutar docker-compose**

En la raiz del proyecto:

> sudo docker-compose up -d --build

**Conexión a DB:**

> user: root
> password: SECRET_KEY

**Creación de tablas:**

Utilizar script install.sh en:

> ./install.sh

```bash
├── mysql
│   ├── scripts
```

**Ejecución en consola:**

> npm start


