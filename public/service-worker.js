self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker ...', event);
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('message', event => {
    if (event.data === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  