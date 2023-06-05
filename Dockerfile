

# Utiliser une image de base contenant Node.js pour construire l'application Angular
FROM node:14 as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /src/app



COPY . .
RUN npm install

CMD ["npm", "run", "serve"]

EXPOSE 8080
