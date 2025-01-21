// Simple service worker for basic offline support
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip caching for certain URLs
  if (
    event.request.url.includes('/api/') ||
    event.request.url.includes('firebase') ||
    event.request.url.includes('localhost:') ||
    event.request.url.includes('chrome-extension://')
  ) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request)
          .then(response => response || new Response('Offline'));
      })
  );
});
