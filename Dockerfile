

# Utiliser une image de base contenant Node.js pour construire l'application Angular
FROM node:14 as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN npm install typescript@">=4.8.2 and <4.9.0" --save-prod
RUN ng build

FROM nginx as runtime
COPY --from=builder /app/dist/teleport-project-template-angular /usr/share/nginx/html

# Exposer le port 80 pour permettre l'accès au site web
EXPOSE 80

# Démarrer le serveur Nginx lors du lancement du conteneur
CMD ["nginx", "-g", "daemon off;"]
