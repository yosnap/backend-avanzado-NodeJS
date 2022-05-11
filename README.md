
# Nodepop

[Demo](/anuncios) 


Api for creation and listing of ads.

## Usage
After cloning the repository, enter the resulting directory

### Install the dependencies


    npm install


### Initializes the database


    npm run init


### Starts the server


    npm start


## API

You can make use of the api from a client (Postman, Insomnia, etc.) with the following available endpoints

GET /anuncios - displays the list of ads

[URL ANUNCIOS API](/api/anuncios)

### Parameters when requesting GET /api/anuncios

**Input Query**:

skip: {number} Index from where the results are desired

limit: {number} Number of ads in the petition

tag: {string} Keyword

venta: {boolan} True = sell -- False = buy

min: {number} Price range (Minimum)

max: {number} Price range (Maximum)

nombre: {string} Search by name

EXAMPLE: ?skip=0&limit=2&selltype=true&min=10&max=100&tag=mobile&name=Iphone

**Result:** 

```javascript

    {
      "ok": true,
      "result": {
        "rows": [
          {
            "_id": "55fd9abda8cd1d9a240c8230",
            "name": "Iphone",
            "selltype": true,
            "precio": 50,
            "foto": "/images/anuncios/iphone.png",
            "__v": 0,
            "tags": [
              "lifestyle",
              "mobile"
            ]
          }
        ],
        "total": 1
      }
    }

```
