// ทำให้ Android แสดงปุ่ม "ติดตั้งแอป" ได้ (ไม่เก็บแคชข้อมูล)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
