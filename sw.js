const CACHE_VERSION = 'cache-v2';

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map((key, i) => {
                if(key !== CACHE_VERSION){
                    return caches.delete(keys[i]);
                }
            }));
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cacheResponse => {
            if(cacheResponse) return cacheResponse;

            return fetch(e.request.clone()).then(networkResponse => {
                if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') return networkResponse;

                let responseClone = networkResponse.clone();
                caches.open(CACHE_VERSION).then(function(cache) {
                    cache.put(e.request, responseClone);
                });
                return networkResponse;
            }).catch(err => {
                // console.error({
                //     title : 'fetch',
                //     msg : err,
                //     url : e.request
                // })
            });
        })
    );
});