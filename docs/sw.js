importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");self.addEventListener("widgetinstall",t=>{t.waitUntil(e(t))});self.addEventListener("widgetresume",t=>{t.waitUntil(e(t))});self.addEventListener("widgetclick",t=>{t.action=="updateName"&&t.waitUntil(s(t))});self.addEventListener("widgetuninstall",t=>{});const e=async t=>{const a=t.widget.definition,i={template:JSON.stringify(await(await fetch(a.msAcTemplate)).json()),data:JSON.stringify(await(await fetch(a.data)).json())};await self.widgets.updateByInstanceId(t.instanceId,i)},s=async t=>{const a=t.data.json().name,i=t.widget.definition,n={template:JSON.stringify(await(await fetch(i.msAcTemplate)).json()),data:JSON.stringify({name:a})};await self.widgets.updateByInstanceId(t.instanceId,n)};workbox.precaching.precacheAndRoute([{"revision":null,"url":"code/app-about-826cbc52.js"},{"revision":null,"url":"code/index-0a6d46cc.css"},{"revision":null,"url":"code/index-8055d97d.js"},{"revision":null,"url":"code/index-d961e0b8.js"},{"revision":"2098b622437cf0c51a666ffb41edc607","url":"index.html"},{"revision":"a5e162152d75b333fa8ce67cd8d4a098","url":"manifest.json"},{"revision":"b1a4910d7cbaa47fcc8f72ecb2028ff1","url":"staticwebapp.config.json"},{"revision":"a7591c595c4a231a1f67943e58f3d6eb","url":"widget/ac.json"},{"revision":"a70ebb50d5f5ab6a37f24795e292547d","url":"widget/data.json"}]||[]);
//# sourceMappingURL=sw.js.map