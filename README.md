# Bsale Prueba E-Shop (Back-end) 🛒
API desarrollada con NodeJS para consultar el stock de productos de una base de datos.

Esta interfaz de programación de aplicaciones permite consultar una base de datos de productos, para obtener los productos, buscarlos por nombre, obtener categorías de productos y filtrar productos por categoría.

## Construido con ... 🔧
Esta aplicación fue construida principalmente con NodeJS 
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

Con las siguientes dependencias:
* cors
* dotenv
* express
* mysql2
* nodemon
* swagger-jsdoc
* swagger-ui-express
* yamljs
## Instalación y ejecución de la aplicación ⚙
### instalación
Comando para descargar e instalar las dependencias necesarias:
```bash
npm install
```
### Ejecución
Ejecutar con la configuración packaje,json:
```bash
npm start
```
o
Ejecutar mediante Node:
```bash
node app.js
```
### Ejecución para desarrollo
Comando para reflejar los cambios en la aplicación al ser guardados:
```bash
npm dev
```
## Estructura 
**URL base:**
https://e-shop-back-end-example.herokuapp.com/api
### **Endpoints:**
| Endpoint | Descripción |
| -- | -- |
| /products | *Devuleve todos los productos de la base de datos.* |
| /products/{product_name} | *Devuelve todos los productos que contengan la búsqueda en su nombre.* |
| /categories | *Devuelve todas las categorías de productos existentes.* |
| /category/{id_category} | *Devuelve todos los productos que pertenezcan ala categoría indicada.* |
| /category/{id_category}/{product_name} | *Devuelve todos los productos que pertenezcan ala categoría indicada y contengan la búsqueda en su nombre.* |

## Despliegue de la aplicación 🚀
La API se encuentra desplegada en Heroku y es accesible a consultas en la siguiente dirección:
https://e-shop-back-end-example.herokuapp.com/api/

**Nota:** *Consultar la [documentación](https://e-shop-back-end-example.herokuapp.com/api-doc/) para su uso.*
## Documentación [📕](https://e-shop-back-end-example.herokuapp.com/api-doc/)
Ver documentación de la app:
[Sitio con la documentación](https://e-shop-back-end-example.herokuapp.com/api-doc/)