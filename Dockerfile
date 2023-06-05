

# Utiliser une image de base contenant Node.js pour construire l'application Angular
FROM node:14 as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /src/app



COPY . .

RUN npm install typescript@">=4.8.2 and <4.9.0" --save-prod
RUN npm install

CMD ["npm", "run", "serve"]

EXPOSE 8080
