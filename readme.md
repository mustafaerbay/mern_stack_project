
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
    4. kullanabilmek icin Router icine 
