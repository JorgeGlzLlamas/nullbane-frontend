FROM nginx:alpine

# 1. Instalamos 'curl' para poder descargar cosas de internet
RUN apk add --no-cache curl

# 2. Copiamos la configuración del servidor
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 3. Copiamos tu página web
COPY . /usr/share/nginx/html

# 4. EL TRUCO MAESTRO:
# Descargamos el APK desde GitHub Releases DIRECTAMENTE al servidor.
# Esto asegura que pese los 93MB reales y no 11kb.
RUN curl -L "https://github.com/JorgeGlzLlamas/nullbane-frontend/releases/download/v1.0/nullbane-hub.apk" -o /nullbane-hub.apk

EXPOSE 80