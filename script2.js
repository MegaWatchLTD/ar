// Fonction pour récupérer les paramètres de l'URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Charger les séries depuis series.json
fetch('series.json')
    .then(response => response.json())
    .then(series => {
        // Récupérer l'ID depuis les paramètres de l'URL
        const serieId = getQueryParam('id');
        if (serieId) {
            // Trouver la série correspondante
            const serie = series.find(item => item.id === parseInt(serieId));
            if (serie) {
                // Mettre à jour le background-image
                const posterElement = document.getElementById('poster');
                posterElement.style.backgroundImage = `url(${serie.image})`;
            } else {
                console.error("Série non trouvée pour l'ID donné.");
            }
        } else {
            console.error("Aucun ID fourni dans l'URL.");
        }
    })
    .catch(error => console.error("Erreur lors du chargement des séries:", error));

// Charger les serveurs depuis servers.json
fetch('servers.json')
    .then(response => response.json())
    .then(servers => {
        // Générer un ID aléatoire pour les serveurs
        const selectedServer = servers[randomIndex];

        // Modifier dynamiquement le lien <a>
        const linkElement = document.querySelector('.xtgo');
        linkElement.href = `${selectedServer}?id=${getQueryParam('id');}`; // Ajouter l'ID
    })
    .catch(error => console.error("Erreur lors du chargement des serveurs:", error));
