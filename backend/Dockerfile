# Utilisez une image de base Node.js
FROM node:12

# Créez un répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers
COPY package*.json ./
COPY . .

# Installez les dépendances
RUN npm install

# Exposez le port
EXPOSE 2000

# Démarrez l'application
CMD [ "npm", "start" ]

