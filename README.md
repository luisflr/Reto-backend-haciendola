![Haciendola](https://haciendola.com/cdn/shop/files/logo_4052ea8c-c242-4a61-a83b-910d8214ffd8.png?v=1705680919&width=225)

# Reto-backend-haciendola

## Resumen
**Creación del backend:** En esta parte debes crear una aplicación en NodeJS que se conecte a una base de datos para almacenar y rescatar información. Tanto el motor de base de datos como el framework a usar son de libre elección. La única restricción es que la base de datos debe ser RELACIONAL.

Debe contar con dos entidades, una de usuarios (Cuentas de usuario, con los datos que se te antojen. Como mínimo debe tener usuario y contraseña) y una entidad de Productos (Los datos mínimos a
incluir son los que se detallan en las cabeceras del archivo Excel de productos adjunto)

Una vez creadas sus tablas, debe cargar los productos detallados en el archivo Excel a su base de datos.

En cuanto a los usuarios, debes contar con un endpoint para autenticar un usuario en base a su usuario/contraseña.

En cuanto a los productos, debes crear los endpoints necesarios para generar una API REST.

## Creación del proyecto backend
Para la creación del backend de este reto técnico se optó por utilizar las siguientes herramientas:
- NodeJS
- Express
- Sequelize (ORM)
- PostgreSQL

Asimismo, se agregaron algunas librerías para adicionales para el encriptado de la contraseña y la autenticación JWT.

## Ejecutar el proyecto

Para ejecutar el proyecto se debe seguir con los siguientes pasos:

1. Descargar o clonar el proyecto con el siguiente comando ```git clone git@github.com:luisflr/Reto-backend-haciendola.git ```
2. Una vez clonado el proyecto, ingresar a la carpeta que se creó y dentro de la misma se debe instalar todos los paquetes necesarios con el siguiente comando: ``` npm install ```. Se recomienda tener la version LTS de node -> v18.17.1
3. Después de tener instalado los paquetes también será necesario tener instalado postgresql ya que esta fue la Base de Datos que se utilizó para la realización del proyecto. https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04-es . Esta documentación tambien nos ayudará a crear un usuario para conectarnos a la base de datos.
4. Ya teniendo instalado nuestra base de datos, podemos utilizar el archivo  **haciendola.sql** para replicarla la base de datos y esto lo conseguimos con el siguiente comando: ```pg_restore -U <username> -h localhost -p <port> -W -F t -d <database_name> haciendola.sql```
5. Finalmente ya con la base de datos funcionando y con los paquetes instalados, nos dirigimos nuevamente a la carpeta de nuestro proyecto y ejecutamos el comando ```npm run dev```

## Dcoumentación de la API

Si deseas ver la documentacion de la API, solo debes agregar el `/docs` a la url