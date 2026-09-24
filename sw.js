// 衛生福利部彰化醫院 醫師值班及On-Call表查詢系統 - PWA Service Worker (v1.0.0)
const CACHE_NAME = 'chw-oncall-pwa-v1.0.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './gi_icon.png'
];

// 安裝事件：預先載入核心資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 啟動事件：清除舊版快取並接管頁面
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 擷取事件：Stale-While-Revalidate 策略（優先快取秒開，背景檢查更新）
self.addEventListener('fetch', (event) => {
  // 只處理 GET 請求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          // 確保回應有效且可快取
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // 網路離線時保持安靜，已由 cachedResponse 承接
        });

      // 若有快取立即回傳；若無快取則等待網路回傳
      return cachedResponse || fetchPromise;
    })
  );
});
