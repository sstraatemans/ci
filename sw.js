importScripts('node_modules/sw-toolbox/sw-toolbox.js');

var CACHE_NAME = 'CI-v1';
var urlsToCache = [
  '/',
  '/dist/styles.css',
  '/dist/1.bundle.js',
  '/node_modules/sw-toolbox/companion.js',
  '/dist/main.bundle.js'
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
});
