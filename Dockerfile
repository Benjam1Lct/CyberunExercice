# Étape 1 : Build de l'application
FROM node:20 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Build du site (sortie dans dist/)
RUN npm run build

# Étape 2 : Image finale avec nginx pour servir le build
FROM nginx:alpine

# Supprime la config par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie du build dans le dossier de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Optionnel : config nginx custom (sinon il sert index.html par défaut)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
