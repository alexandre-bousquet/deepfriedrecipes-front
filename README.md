# Deep Fried Recipes Front

Un site web Vue.js communiquant avec un serveur Node.js.

Réalisé par Alexandre BOUSQUET et Hamza IKIOU, deux élèves en licence professionelle APIDAE.

## Liens
<a href="https://deepfriedrecipes.herokuapp.com">Lien vers le serveur Node.js</a>

<a href="https://deepfriedrecipes.herokuapp.com/doc">Lien vers la documentation de l'API Rest</a>

<a href="https://deepfriedrecipes.netlify.app">Lien vers le site web Deep Fried Recipes</a>

## Installation / Lancement

``` bash
# Installation des dépendances dans le fichier package.json
npm install

# Lancer le serveur sur le port par défaut (8080)
npm run serve
```

## Parties manquantes

La première partie manquante est que nous n'avons pas attribué une route à chaque fonctionnalité dans le routeur. En effet, les fonctionnalités de création, modification et suppression des recettes ainsi que la modification du profil n'ont pas de route respective.
Nous ne trouvions pas cela très pertinent, surtout pour la suppression d'une recette. Pour la création et la modification, nous avons fait apparaître un pop-up qui affiche un formulaire au lieu de renvoyer vers une autre page. 

La deuxième partie manquante est l'upload d'images depuis le site. En effet, notre base de données RestDB ne nous permet pas d'effectuer un POST en y intégrant une image extérieure. Il faut que l'image soit stockée au préalable dans les archives de la base de données et que l'on connaisse son identifiant pour pouvoir créer une recette avec.
Pour pallier ce problème, il aurait fallu utiliser un objet blob ou un buffer qui transforme les images en chaîne de caractères à la place du champ des images dans la base de données. 
