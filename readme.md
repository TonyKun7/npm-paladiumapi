# PaladiumAPI

PaladiumAPI est un module Node.js permettant d'interagir avec l'API de Paladium PVP. Il fournit des méthodes pour récupérer diverses informations telles que les données des joueurs, les classements des factions, etc.

## Installation

Pour installer PaladiumAPI, utilisez npm :

```bash
npm install paladiumapi
```

## Exemple d'utilisation

```js
const PaladiumAPI = require('paladiumapi');

// Exemple d'utilisation de la méthode checkPlayerName
PaladiumAPI.checkPlayerUsername('tonykun7')
    .then(playerData => {
        console.log("Données du joueur :", playerData);
    })
    .catch(error => {
        console.error("Erreur lors de la vérification du nom du joueur :", error);
    });
```


## Méthodes disponible

```js
<PaladiumAPI>.checkPlayerUsername('name') // Vérifie si un nom de joueur Minecraft est valide.
<PaladiumAPI>.status() // Récupère le statut du serveur.
<PaladiumAPI>.getPlayer('name') // Récupère les informations d'un joueur.
<PaladiumAPI>.getPlayerByUUID('uuid') // Récupère les informations d'un joueur par UUID.
<PaladiumAPI>.getPlayerClicker('uuid') // Récupère les informations du joueur pour le jeu Clicker.
<PaladiumAPI>.getPlayerGames() // Récupère les jeux du joueur.
<PaladiumAPI>.factionLeaderboard() // Récupère le classement des factions.
<PaladiumAPI>.factionQuest() // Récupère la quête de faction.
<PaladiumAPI>.factionOnYourMarks() // Récupère les informations sur les marques de faction.
<PaladiumAPI>.getFactionByName('name') // Récupère les informations d'une faction par son nom.
<PaladiumAPI>.rankingLeaderboardByIdAndPage('money', 1) // Récupère le classement pour un ID spécifique et une page donnée.
<PaladiumAPI>.rankingPositionPlayer('uuid') // Récupère la position d'un joueur dans le classement.
<PaladiumAPI>.rankingPositionPlayerById('uuid', 1) // Récupère la position d'un joueur dans le classement pour un ID spécifique.
<PaladiumAPI>.rankingTrixiumPlayerLeaderboard() // Récupère le classement des joueurs Trixium.
<PaladiumAPI>.rankingTrixiumPlayer('uuid') // Récupère la position d'un joueur Trixium dans le classement.
<PaladiumAPI>.rankingTrixiumFactionLeaderboard() // Récupère le classement des factions Trixium.
<PaladiumAPI>.rankingPositionFaction('uuid') // Récupère la position d'une faction dans le classement.
<PaladiumAPI>.shopAdminItems(0, 100) // Récupère les articles administratifs de la boutique.
<PaladiumAPI>.shopAdminItemsByName('bone') // Récupère un article administratif de la boutique par nom.
<PaladiumAPI>.shopMarketCategories(0, 100) // Récupère les catégories de la boutique.
<PaladiumAPI>.shopMarketItems(0, 100) // Récupère les articles de la boutique.
<PaladiumAPI>.shopMarketItemsByName('bone') // Récupère un article de la boutique par nom.
<PaladiumAPI>.shopMarketItemsByNameHistory('bone', 0, 100) // Récupère l'historique d'un article de la boutique par nom.
<PaladiumAPI>.shopMarketItemsListingByPlayer('uuid') // Récupère les listes d'articles de la boutique par joueur.
<PaladiumAPI>.achievements(0, 100) // Récupère les informations sur les différents achivements
<PaladiumAPI>.events(0, 100) // Récupère les informations sur les différents évents disponibles
<PaladiumAPI>.eventsUpcoming(0, 100) // Récupère la liste des prochains évents



/*
  Informations importantes
  Le name dois être le pseudo ou le nom de la faction sous forme de string
  Le uuid dois être formater sous cette forme xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  Liste des ID money, job.alchemist, job.hunter, job.miner, job.farmer, boss, egghunt, end, chorus, koth, clicker
*/
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue pour signaler un bug ou proposer une nouvelle fonctionnalité.