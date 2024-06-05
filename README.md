# Proyecto de Sistema de Venta para Tiendas de Ropa

Este proyecto consiste en una aplicación web diseñada para facilitar la venta de productos en tiendas de ropa. Desarrollada con React, TypeScript, Next.js y Tailwind CSS, la aplicación ofrece una interfaz intuitiva y funcionalidades robustas para gestionar inventarios, registrar ventas y procesar pagos.

## Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Contribuciones](#contribuciones)
7. [Historial de Cambios](#historial-de-cambios)
8. [Licencia](#licencia)

## Descripción del Proyecto

La aplicación está diseñada para que los vendedores de locales de ropa puedan acceder al sistema, gestionar el stock de productos de su local, registrar ventas y procesar pagos. Cada venta se registra con el nombre del vendedor, y el stock de productos se gestiona según la ubicación del local desde donde el empleado inició sesión. Además, la aplicación calcula el IVA y los porcentajes de ganancia de cada producto, y permite ingresar tarjetas de crédito para procesar los pagos.

## Características

- **Inicio de Sesión**: Permite a los empleados iniciar sesión desde diferentes puntos de venta.
- **Gestión de Inventarios**: Visualización y selección de inventarios específicos según el local de inicio de sesión.
- **Carrito de Compras**: Agregar artículos al carrito y visualizar los detalles de la compra.
- **Procesamiento de Pagos**: Métodos de pago en efectivo y con tarjeta de crédito, con autorización de pagos.
- **Persistencia de Datos**: Almacenamiento de datos de clientes y productos en el `localStorage` del navegador.
- **Facturación**: Muestra una factura detallada con información de la compra, del cliente y del empleado antes de confirmar la venta.
- **Conexión con Backend**: Integración con un backend para confirmar y autorizar ventas, y con servicios externos para procesar pagos y autorizar montos de ventas a través de AFIP.

## Tecnologías Utilizadas

- **Frontend**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Next.js](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend**:
  - Conexión con servicios externos para autorización de pagos con tarjeta y servicios de AFIP.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:
    ```sh
    git clone https://github.com/rod-cami/tienda-app.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd tienda-app
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```
4. Ejecuta la aplicación en modo de desarrollo:
    ```sh
    npm run dev
    ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Uso

1. **Inicia sesión**: Utiliza las credenciales proporcionadas para iniciar sesión desde el punto de venta correspondiente.
2. **Navega por los productos**: Explora los diferentes productos disponibles en la tienda.
3. **Agrega al carrito**: Selecciona los artículos que deseas comprar y agrégalos al carrito.
4. **Procede al pago**: Elige el método de pago (efectivo o tarjeta de crédito) y proporciona la información necesaria.
5. **Verifica y confirma la venta**: Revisa la factura con todos los detalles de la compra, del cliente y del empleado antes de confirmar la venta.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits descriptivos.
4. Envía una pull request explicando los cambios propuestos.

## Historial de Cambios

A continuación, se presenta un resumen de los commits realizados:

- **14 de Febrero, 2024**: Añadida la NavBar con vista del carrito de compras, vistas para diferentes artículos y la barra de búsqueda en el Home.
- **17 de Febrero, 2024**: Añadida la sección de pagos, mostrando los artículos en el carrito y los dos métodos de pago.
- **18 de Febrero, 2024**: Añadidos modelos de datos según la base de datos del proyecto, incluyendo ejemplos para visualizar las interfaces FrontEnd.
- **19 de Febrero, 2024**: Implementada la lógica para mostrar artículos correctamente y seleccionar un inventario específico.
- **20 de Febrero, 2024**: Refactorizada la lógica de componentes en archivos de utilidades separados.
- **21 de Febrero, 2024**: Implementada la función de login para almacenar el usuario en `localStorage` y mostrar el stock de productos.
- **27 de Febrero, 2024**: Implementación exitosa de la conexión con el backend.
- **5 de Marzo, 2024**: Modificación de la página de inicio para iniciar una venta usando los endpoints proporcionados por el backend.
- **13 de Marzo, 2024**: Ajustes en tamaños de fuente y colores según solicitud del cliente y corrección de la funcionalidad relacionada con ventas.
- **13 de Marzo, 2024**: Cambio de enlaces a endpoints debido a una actualización del backend y adición de información en la interfaz.
- **13 de Marzo, 2024**: Modificación de aspectos según requisitos del cliente, y adición de funcionalidad para pagos en efectivo y tarjeta.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más información, consulta el archivo [LICENSE](LICENSE).

---

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto. ¡Gracias por contribuir y usar nuestra aplicación de tienda en línea!
