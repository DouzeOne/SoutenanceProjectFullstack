# Utilisez une image de base Node.js
FROM node:12

# Créez un répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers
COPY package*.json ./
COPY . .

# Installez les dépendances
RUN npm install

# Compilez l'application
RUN npm run build

# Exposez le port
EXPOSE 3000

# Démarrez le serveur Web
CMD [ "npm", "start" ]