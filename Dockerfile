

# Utiliser une image de base contenant Node.js pour construire l'application Angular
FROM node:14 as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm install typescript@">=4.8.2 and <4.9.0" --save-prod
RUN ng build

# Installer le serveur HTTP simple
RUN npm install -g http-server

# Exposer le port 8080 pour accéder à l'application
EXPOSE 8080

# Démarrer le serveur HTTP lors du lancement du conteneur
CMD ["http-server", "dist/teleport-project-template-angular", "-p", "8080"]
