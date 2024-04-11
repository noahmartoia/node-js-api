# A rendre

Une API REST avec NodeJS et ExpressJS :

- [X] Créer un projet NodeJS
- [X] Installer ExpressJS
- [X] Creer un serveur ExpressJS
- [X] Installer Mongoose et se connecter à une base de données MongoDB
- [X] Organiser son projet avec des routes et des middlewares
- [X] Utiliser le pattern MVC
- [X] Créer une authentification avec JWT
- [X] Proteger une route (creation d'un middleware qui verifie le token)
- [ ] Mettre en place une API DOC avec Swagger
- [ ] Gerer les erreurs avec un middleware

# API avec Node JS

pour lancer le projet pensez a mettre un fichier .env a la racine du projet avec votre bdd, le port et le JWT_SECRET
et faire

- npm i

pour installer les dépendance une fois sa fais faite

- npm run start:dev

pour lancer le projet avec nodemon et utiliser postman (https://www.postman.com/downloads/)

voici les route a utiliser avec post man

# Get

http://localhost:3000/pasta pour voire la liste de toute les pasta
http://localhost:3000/pasta/:id pour voire une pasta en particulier (:id dois etre changer par l'id de la pasta)é

# Post

http://localhost:3000/auth/signup format du signup

{   
    "email": "martoia.noah@gmail.com",
    "password": "eazeeazeaz",
    "name": "noah",
    "phoneNumber": "0783839990"
}

http://localhost:3000/auth/signin format du signin

{   
    "email": "martoia.noah@gmail.com",
    "password": "eazeeazeaz"
}

prennez le token et meter le dans Authorization>type>bearer Token

http://localhost:3000/pasta ajoute une pasta format

{   
    "brand": "double penes",
    "model": "c'est bon"
}