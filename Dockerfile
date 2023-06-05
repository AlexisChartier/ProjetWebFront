# Utiliser une image de base contenant Node.js pour construire l'application Angular
FROM node:14 as builder

# Définir le répertoire de travail dans le conteneur


# Copier le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

RUN npm install typescript@">=4.8.2 and <4.9.0" --save-dev

WORKDIR /src/app
# Installer les dépendances du projet
RUN npm install

# Copier tous les fichiers de l'application dans le conteneur
COPY . .

# Compiler l'application Angular
RUN npm ts
RUN npm run build --prod

# Utiliser une image de base légère pour exécuter l'application Angular compilée
FROM nginx:latest

# Copier les fichiers de l'application compilée dans le répertoire de contenu Nginx
COPY --from=builder /dist /nginx/html

# Exposer le port 80 pour permettre l'accès au site web
EXPOSE 80

# Démarrer le serveur Nginx lors du lancement du conteneur
CMD ["nginx", "-g", "daemon off;"]
