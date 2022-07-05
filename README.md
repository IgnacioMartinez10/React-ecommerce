### README

## Introduccion
Este proyecto trata de un ecommerce realizado con Reactjs y Firebase en la base de datos.


## Funcionamiento

* Principalmente tenemos el home donde se pueden visualizar todos los productos que tiene el ecommerce con su nombre e imagen y un boton para ver el detalle de estos.
* Contiene 3 categorias donde se pueden encontrar los diferentes productos filtrados en cada una de ellas.
* Al hacer click en "VER PRODUCTO" nos llevará al detalle del producto donde podemos elegir las cantidades que queremos gracias al contador y agregarlo al carrito de compras
* Una vez agregado al carrito, nos aparecerá el boton FINALIZAR COMPRA si es que deseamos finalizar la compra o podemos seguir navegando.
* Si damos click en el boton FINALIZAR COMPRA nos lleva al detalle de compra donde nos aparecen los productos con su nombre, precio, cantidad, subtotal y total, junto  con una opcion para borrar estos mismos si es que se lo desea. Tambien estan los botones "VACIAR CARRITO" para quitar todo los productos dentro del carrito, y "CHECKOUT".
* Dando click en el boton "CHECKOUT" nos envia a un formulario donde debemos ingresar nuestros datos para poder generar la orden de compra y así enviar toda la información a la base de datos de Firebase.


## Instalacion

Para inicializar el proyecto debemos clonar el repositorio.

$ git clone https://github.com/IgnacioMartinez10/React-ecommerce.git
$ cd 'crear carpeta'
$ npm install
$ npm start

Built Using: Create-React-App


## Librerias utilizadas
* Sweet Alert2 https://sweetalert2.github.io/ para notificaciones.
*React Bootstrap https://react-bootstrap.netlify.app/
* React Hook Form https://react-hook-form.com/ para el formulario.

