PROJET 7 - GROUPOMANIA

CREATION D'UN RESEAU SOCIAL D'ENTREPRISE

Technologies utilisées:
Node.js
Express
MySql
HTML
CSS
Bootstrap
Vue.js + Vuex

Lancer le backend: 
"nodemon server"

Lancer le frontend:
"npm install" 
puis
"npm run serve" ==> http://localhost:8080

BASE DE DONNEES:
-Connectez-vous au serveur Mysql
-Exécutez la commande "CREATE DATABASE database"
-Vérifiez les identifiants dans le dossier de configuration de la base de données 
-importez le fichier "database.sql" que vous trouverez dans backend > database > database.sql

VARIABLES D'ENVIRONNEMENT:
- un fichier .env-example a été fourni dans le backend
- créer votre fichier .env à partir de celui-ci en indiquant les données sensibles nécessaires à la connexion
pour la connexion à la BDD et pour la récupération du token d'authentification

Fonctionnalités:
- Création de compte et connexion
- Récupérer toutes les publications dans le fil d'actualité
- récupérer tous les utilisateurs
- mettre à jour une publication ou un profil
- supprimer une publication ou un profil
- récupérer une publication ou un profil par Id
- Ajouter un commentaire sur une publication et le supprimer 
- Liker ou annuler son like sur un post
- Compte administrateur avec droits adaptés
- Seul l'utilisateur qui a effectué une action peut l'annuler (comme l'administrateur)
