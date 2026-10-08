const VERSAO='diario-esportivo-v2';
const BASE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSAO).then(c=>c.addAll(BASE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSAO).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url);
  if(u.origin===location.origin){
    // rede primeiro, para receber atualizações; cache quando estiver offline
    e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(VERSAO).then(x=>x.put(req,c));return r;})
      .catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
  }else if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{const c=res.clone();caches.open(VERSAO).then(x=>x.put(req,c));return res;})));
  }
  // APIs do Google não passam pelo cache
});
