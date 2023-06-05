const express = require('express');
const path = require('path');

const app = express();

// Définir le chemin vers le répertoire de build de l'application Angular
const distPath = path.join(__dirname, 'dist/teleport-project-template-angular');

// Définir le dossier de fichiers statiques
app.use(express.static(distPath));

// Toutes les routes mènent à l'index.html pour la gestion du routage côté client
app.get('', (req, res) => {
  res.sendFile(path.join(distPath, 'teleport-project-template-angular/index.html'));
});

// Démarrer le serveur sur le port 8080
app.listen(8080, () => {
  console.log('Serveur Express en cours d\'exécution sur le port 8080');
});
