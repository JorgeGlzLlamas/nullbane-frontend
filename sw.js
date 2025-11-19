const CACHE_NAME = 'nullbane-v1';

// Recursos esenciales que forman el App Shell y el contenido básico
const urlsToCache = [
  '/',
  '/index.html',
  '/historia.html',
  '/js/main.js',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/banner_history.jpg',
  '/images/bosque_level.jpg',
  '/images/cueva_level.jpg',
  '/images/espectro_enemy.jpg',
  '/images/esqueletos_enemy.jpg',
  '/images/history_image.jpg',
  '/images/icono.png',
  '/images/main_picture.jpg',
  '/images/sir_joseph.png',
  '/images/tenebris_boss.jpg',
  '/images/vigia_enemy.jpg',
  '/images/vorlag_boss.jpg',
  '/bootstrap/js/bootstrap.bundle.min.js',
  '/bootstrap/css/bootstrap.min.css'
];

// Evento 1: INSTALACIÓN - Cachea todos los recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and adding shell');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); // Fuerza la activación inmediata del nuevo SW
});

// Evento 2: FETCH - Sirve recursos desde el caché si están disponibles
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - devuelve la respuesta cacheada
        if (response) {
          return response;
        }
        // No hay hit en caché - realiza la solicitud normal
        return fetch(event.request);
      })
  );
});

// Evento 3: ACTIVACIÓN - Elimina cachés viejos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});