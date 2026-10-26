// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const lilita = font('node_modules/@fontsource/lilita-one/files/lilita-one-latin-400-normal.woff2');
const nunito = font('node_modules/@fontsource-variable/nunito-sans/files/nunito-sans-latin-wght-normal.woff2');
const madras = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' fill='%23f6c320'/%3E%3Cg fill='%23c8281d' fill-opacity='.72'%3E%3Crect width='14' height='48'/%3E%3Crect width='48' height='14'/%3E%3C/g%3E%3Cg fill='%231e7b3a' fill-opacity='.85'%3E%3Crect x='24' width='4' height='48'/%3E%3Crect y='24' width='48' height='4'/%3E%3C/g%3E%3Cg fill='%23fbfaf5'%3E%3Crect x='36' width='2' height='48'/%3E%3Crect y='36' width='48' height='2'/%3E%3C/g%3E%3C/svg%3E")`;
const css = `@font-face{font-family:L;src:url(${lilita})}@font-face{font-family:N;src:url(${nunito})}
*{margin:0;box-sizing:border-box}body{background:#fbfaf5;color:#141414;font-family:N}`;

const og = `<style>${css}
.w{width:1200px;height:630px;position:relative;padding:70px 76px}
.m{position:absolute;inset:0 0 auto;height:26px;background:${madras};border-bottom:4px solid #141414}
.m2{top:auto;bottom:0;border-bottom:0;border-top:4px solid #141414}
.e{display:inline-flex;align-items:center;gap:12px;background:#f6c320;border:5px solid #141414;padding:8px 14px 8px 22px;font-family:L;font-size:58px;transform:rotate(-2.5deg);box-shadow:6px 6px 0 #141414;margin-top:24px}
.e b{font-weight:400;background:#c8281d;color:#fff;border:4px solid #141414;border-radius:50%;width:76px;height:76px;display:grid;place-items:center;font-size:38px}
h1{font-family:L;font-weight:400;font-size:84px;line-height:.98;margin-top:44px;max-width:900px;transform:rotate(-1.2deg)}
p{margin-top:26px;font-size:30px;font-weight:700}
.n{position:absolute;right:80px;top:110px;width:220px;height:220px;border-radius:50%;background:#c8281d;color:#fff;border:5px solid #141414;box-shadow:7px 7px 0 #141414;display:flex;flex-direction:column;align-items:center;justify-content:center;transform:rotate(-8deg);font-family:L}
.n span{font-size:78px;line-height:1}.n small{font-size:26px}
</style><div class="w"><div class="m"></div><div class="e">Ldelice <b>95</b></div>
<h1>Le bokit dont tout Saint-Brice parle</h1>
<p>Bokits et cuisine haïtienne · 2 rue René Cassin · 07 61 52 48 64</p>
<div class="n"><span>4,7</span><small>sur 5 · Google</small></div><div class="m m2"></div></div>`;

const icon = `<style>${css}body{width:180px;height:180px;background:#f6c320;display:grid;place-items:center}
div{width:124px;height:124px;border-radius:50%;background:#c8281d;border:7px solid #141414;display:grid;place-items:center;font-family:L;color:#fbfaf5;font-size:60px}</style><div>95</div>`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(400);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
