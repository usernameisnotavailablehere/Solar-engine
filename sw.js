importScripts('./uv/uv.sw.js');

const sw = new monkeyreee();

self.addEventListener('fetch', event =>
  event.respondWith(
    sw.fetch(event)
  )
);