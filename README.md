# Bsale Prueba E-Shop (Back-end) 馃洅
API desarrollada con NodeJS para consultar el stock de productos de una base de datos.

Esta interfaz de programaci贸n de aplicaciones permite consultar una base de datos de productos, para obtener los productos, buscarlos por nombre, obtener categor铆as de productos y filtrar productos por categor铆a.

## Construido con ... 馃敡
Esta aplicaci贸n fue construida principalmente con NodeJS 
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
## Instalaci贸n y ejecuci贸n de la aplicaci贸n 鈿?
### instalaci贸n
Comando para descargar e instalar las dependencias necesarias:
```bash
npm install
```
### Ejecuci贸n
Ejecutar con la configuraci贸n packaje,json:
```bash
npm start
```
o
Ejecutar mediante Node:
```bash
node app.js
```
### Ejecuci贸n para desarrollo
Comando para reflejar los cambios en la aplicaci贸n al ser guardados:
```bash
npm dev
```
## Estructura 
**URL base:**
https://e-shop-back-end-example.herokuapp.com/api
### **Endpoints:**
| Endpoint | Descripci贸n |
| -- | -- |
| /products | *Devuleve todos los productos de la base de datos.* |
| /products/{product_name} | *Devuelve todos los productos que contengan la b煤squeda en su nombre.* |
| /categories | *Devuelve todas las categor铆as de productos existentes.* |
| /category/{id_category} | *Devuelve todos los productos que pertenezcan ala categor铆a indicada.* |
| /category/{id_category}/{product_name} | *Devuelve todos los productos que pertenezcan ala categor铆a indicada y contengan la b煤squeda en su nombre.* |

## Despliegue de la aplicaci贸n 馃殌
La API se encuentra desplegada en Heroku y es accesible a consultas en la siguiente direcci贸n:
https://e-shop-back-end-example.herokuapp.com/api/

**Nota:** *Consultar la [documentaci贸n](https://e-shop-back-end-example.herokuapp.com/api-doc/) para su uso.*
## Documentaci贸n [馃摃](https://e-shop-back-end-example.herokuapp.com/api-doc/)
Ver documentaci贸n de la app:
[Sitio con la documentaci贸n](https://e-shop-back-end-example.herokuapp.com/api-doc/)