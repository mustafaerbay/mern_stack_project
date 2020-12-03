[![Build Status](https://dev.azure.com/mustafaerbay13/mern%20deploy/_apis/build/status/mernstack%20-%20CI?branchName=master)](https://dev.azure.com/mustafaerbay13/mern%20deploy/_build/latest?definitionId=4&branchName=master)

***
    NEEDED ENV PARAMETERS
    .env file

    --- NODE_ENV = development
    --- PORT = 5000
    --- MONGO_URI = mongodb+srv://XXXXX:XXXXX@ecommerce.q1m9a.mongodb.net/proshop?retryWrites=true&w=majority
***



React Setup & Git initialize

    proshop klasoru olustur
    frontend klasoru olustur
        - cd frontend
        - npx create-react-app frontend
        - rm -rf .git
        - mv .gitignore ../
        - modify .gitignore node_modules node_modules/
        - cd proshop
        - git init
        - git add
        - git commit -m "react proshop""
    
React-Bootstrap Setup, Header & Footer Components

    1. https://bootswatch.com sitesinden tema indir.

    2. bootstrap.min.css dosyasini src altina tasi

    3. index.js icinde bootstrap.min.css dosyasini import et.

    4. frontend klasoru icinde girip react-bootstrap kur.
        - npm i react-bootstrap

    5. App.js icine react-bootstrap i container olarak import et. ettikten sonra Welcome kismi container olarak ortaya kayacak

    6. Ayni mantikla Footer.js e de import edip Copyright kismi eklendi.

    7. Copyright kismini da asagiya itmek icin index.css e eklendi

        - main {
        min-height: 80vh;
        }

    8. Header kismina navigation bar eklemek icin linkteki yeri kopyala
        https://react-bootstrap.github.io/components/navbar/

    9. navbarin icini de Container a cevir

    10. cart ve sign in yanlarina ufak semboller eklemek icin asagidak linke gir
        - https://cdnjs.com/libraries/font-awesome

    11. asagidaki all.min.css kopyala ve public/index.html icine yapistir.
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

    12. welcome yazisi ile navbar arasina bosluk koymak icin
        - App.js icinde ki main e py-3 ekle.

Home Screen Product Listing

    1. Resource kismindan products_and_images indir ve images klasorunu public klasorunun altina koy.
    2. products.js dosyasini src altina tasi
    3. Daha sonra HomeScreen.js dosyasini olustur.
    4. App.js icine HomeScreen i koy.
    5. Productlari duzgun gostermek icin Prodoct.js olustur.

Rating Component

    1. oncesinde asagidaki gibi yazi olaral rating kismi yaziyordu.
            <Card.Text as='div'>
                <div className='my-3'>
                      {product.rating} from {product.numReviews} reviews
                </div>        
            </Card.Text>
    
    2. simdi rating kismini componente ceviriyoruz.

    3. Rating.js olustur.
    4. yildiz ikonlari icin
        https://fontawesome.com/icons?d=gallery&q=star
    
    5. yildizlara defaultProps tanimla
    6. import impt yaptiktan sonra Rating componentinde Proptype lar olusturulur
    7. Product.js icindeki Rating componentinde pass edilen text,value degerleri uyumsuz oldugunda F12 de hata verir

Implementing React Router

    1. cd frontend
    2. npm i react-router-dom react-router-bootstrap
    3. App.js e Router i import et
    4. kullanabilmek icin Router icine headerlari tasi
    5. burada git commit -m "ratingComponens"
    6. productlara tiklandiginda sayfanin komple yenlinemesini istemiyoruz single page app oldugundan dolayi.
    7. bu yuzden <a href> leri Link to= ile degistiriyoruz.
    8. Header.js de de hrefleri LinkContainer ile degistirdik.

Product Details Screen

    1. urunun gorseli tasmasin diye fluid eklendi
    2. App.js de pass edilen id parametresini ProductScreen.js de match edebilmek icin ({ match }) prop u kullanildi
    3. daha sonra products icinden id ile maplendi
    4. const product ilerleyen donemde db den okunacak.

Serving & Fetching Data From Express

Frontend / Backend Workflow & Explanation

    -- GET 
    -- POST
    -- PUT
    -- DELETE

Serving Products - Backend Routes

    1. Proshop pathinde npm init yaptik ve package.json dosyasi olustu
        npm init
    2. sonra da express install edildi
        npm i express
    3. Backend folderinin icinde data klasoru olusturuldu ve product.js gecisi olarak buraya kopyalandi.
    4. backend icinde ki server.js icine express tanimlarina baslandi

    5. basit port tanimi yapildi ve console log gorebilmek icin asagidaki komut calistirildi
        node backend/server.js
    6. package.json da ki start komutu node backend/server.js ile degistirildi npm start calismasi icin
        npm start
    7. data/product.js dosyasinin en altinda ES modules tanimi export default products yaziyordu ES module icin backend setupimiz olmadigi icin henuz onu module.exports = products ile degistirdik.
    8. daha sonra da server.js de ekledik.
        const products = require('./data/products')
    9. /api/products ve /api/products/:id routerlar eklendi.

Fetching Products From React (useEffect)

    1. frontend klasorune geldik ve axios install ettik
        npm i axios
    2. simdi frontend e urunleri backendden gonderecegiz
    3. HomeScreen.js de asagidaki satiri ucurduk
        import products from '../products'
    4. porductlari component level state olarak ekleyecegiz ama sonunda redux ile global level olarak eklenecek
        import React, { useState, useEffect } from 'react'
    5. /api/products end pointi backend e 5000 portundan serve edildigi icin ve frontend 3000 portundan ayaga kalktigi icin localhost:3000/api/products 404 not found hatasi veriyor. Bunun icin frontend/package.json a proxy ayari ekledik.
        "proxy": "http://127.0.0.1:5000",
    6. frontendi durdurup tekrar npm start
    7. Ayni islemi ProductScreen.js icin de yapiyoruz.
    8. yaptiktan sonra frontend/product.js dosyasini ucuruyoruz.

Nodemon & Concurrently Setup

    1. normalde frontend ve backendi calistirmak icin iki farkli komut kullaniyorduk bunlari tekte birlestirecegiz
        -D komutu devDependency anlaminda yani sadece development sirasinda gerekli.
        ayrica nodemon serverlari surekli manuel restart etmekten kurtaracak development suresinde. 
        cd proshop
        npm i -D nodemon concurrently

    2. package json a server, client ve dev scriptleri eklendi. asagidaki gibi calistirabilir hale geldik.
        npm run dev 

Environment Variables

    1. dev, prod ortamlarinin variablarinin ayirmak ve duzenli tutmak icin dotenv npm paketi kullanilacak
        cd proshop
        npm i dotenv

ES Modules(ECMAScript) in Node.js

    1. backend de ki require style syntaxindan frontend tarafinda ki gibi import style syntax haline donuyoruz.
    2. burada nasil enable edecegi var.
        https://nodejs.org/docs/latest-v14.x/api/packages.html#packages_determining_module_system
    3. product listesinde module.exports = products i export default products olarak degistirdik.
    4. dosyalari import ederken .js uzantisini da belirtmek gerekiyor.
    5. "type":"module", package.json a eklendi.

MongoDB Atlas & Compass Setup

    1. mongo db sitesinden account olustur. mustafaerbay365@gmail.com ile giris yaptik.
    2. compass i indir
        https://www.mongodb.com/try/download/compass
    3. mongodb atlas cluster uzerinde db user i olustur.
    4. network allow all ip address
    5. collection kismindan proshop databaseini olustur ve product collection i olustur.
    6. connection kismindan da compass ve application icin uri lari kopyala

Connecting to Database

    1. mongoose kutuphanesi kullanacagiz.
        cd proshop
        npm i mongoose
    2. backend folder i icinde config/db.js olustur.
    3. backend server.js de connectDB cagir.

Adding Colors to the Console

    1. Console log larin renkli basilmasi icin
        npm i colors
    
Modeling Our Data

    1. Application level da yapiyoruz.
    2. backend/models klasoru ve altinda ki modeller olusturuldu.
        -- orderModel.js
        -- productModel.js
        -- userModel.js

Preparing Sample Data

    1. backend/data/users.js olustur.
    2. password decrypt/encrypt icin
        cd proshop
        npm i bcryptjs
    3. users.js de passwordler hashlendi.

Data Seeder Script

    1. Database e product ve user olusturacagiz.
    2. backend/seeder.js olustur.
    3. process.argv , scriptin argumanina gore kosul icin kullanilir.
        npm run data:import
        npm run data:destroy

Fetching Products from the Database

    1. server.js tarafinda endpointler cogaldikca karisiklik artmamasi icin routerlari ayirma ihtiyaci oldu.
    using middleware kullanimindaki Router-level middleware gibi bir kullanim yaptik.
        backend/routes/productRoutes.js olusturduk.
    2. router middleware icerisinde error handling icin asagidaki paket kuruldu.
        npm i express-async-handler
    3. Fetch single product da /api/product/1 object cast hatasi firlatiyor 24 karakterli bir id icin product not found firlatiyor. bunun icin custom error handling yapiyoruz.

Custom Error Handling

    1. errorMiddleware.js dosyasini olusturduk.
    2. server.js de normalde app.use icine yazdiklarimizi errorMiddleware e tasidik

        
    





