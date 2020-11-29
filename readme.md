
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
    

    





