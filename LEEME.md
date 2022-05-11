
# Nodepop

[Demo](/anuncios) 


Api para creación y listado de anuncios.

## Uso
Después de clonar el repositorio, ingresa en el directorio resultante

### Instala las dependencies


    npm install


### Inicializa la base de datos


    npm run init


### Inicia el servidor

    
    npm start


## API 

Puedes hacer uso de la api desde un cliente (Postman,Insomnia,etc) con los siguientes endpoints disponibles

    GET /anuncios - muestra el listado de anuncios

[URL ANUNCIOS](/api/anuncios)

### Parámetros al realizar petición GET /api/anuncios

**Input Query**:

skip: {number} Índice desde donde se desean los resultados.

limit: {number} Cantidad de anuncios en la petición

tag: {string} Palabra clave

venta: {boolan} True = venta -- False = compra

min: {number} Rango de precio (Mínimo)

max: {number} Rango de precio (Máximo)

nombre: {string} Búsqueda por nombre


Ejemplo: ?skip=0&limit=2&selltype=true&min=10&max=100&tag=mobile&name=Iphone

**Result:** 

```javascript

{
  ok: true,
  result: {
    rows: [
      {
        _id: "55fd9abda8cd1d9a240c8230",
        name: "Iphone",
        selltype: true,
        precio: 50,
        foto: "/images/anuncios/iphone.png",
        __v: 0,
        tags: [
          "lifestyle",
          "mobile"
        ]
      }
    ],
    total: 1
  }
}

```
