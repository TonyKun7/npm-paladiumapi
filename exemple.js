const paladiumAPI = require('./index.js');

async function example() {
    // Exemple d'utilisation de la fonction checkPlayerUsername
    const playerUsername = 'Tonykun7';
    const playerInfo = await paladiumAPI.checkPlayerUsername(playerUsername);
    console.log('Informations du joueur:', playerInfo);

    // Exemple d'utilisation de la fonction status
    const serverStatus = await paladiumAPI.status();
    console.log('Statut du serveur:', serverStatus);

    // Vous pouvez continuer ainsi pour utiliser les autres fonctions
}

// Appel de la fonction exemple
example();
