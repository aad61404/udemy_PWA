first web app
01 
http://127.0.0.1:3000/
Network disable cache


多重頁面時 每頁都需要引入
<link rel="manifest" href="/manifest.json">

!!!!!
https://caniuse.com/#feat=web-app-manifest

android studio 模擬器
第20堂 在模擬器上模擬Web應用程序
10.0.2.2:8080


IOS safari
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="PWAGram">
  <link rel="apple-touch-icon" href="/src/images/icons/app-icon-144x144.png" sizes="144x144">
  <meta name="msapplication-TileImage" content="/src/images/icons/app-icon-144x144.png">
  <meta name="msapplication-TileColor" content="#fff">
  <meta name="theme-color" content="#3f51b5">

 ##  30 Service Worker Lifecycle 推薦觀看

    "start": "http-server -c-1 -p 3000"
    添加了這個-c-1標誌，它將確保我們不會使用  正常的瀏覽器緩存。
    現在，您將在本課程的後面部分了解到兩種類型的緩存，一個可以供服務人員使用的緩存和默認的瀏覽器緩存
32 Registering a Service Worker
用戶將要訪問。一旦註冊，
除非您有新版本的Service Worker，但您將無法輕鬆或快速地更換它。
以便可以從任何地方進行註冊，因為否則，您需要押注訪問特定網站的用戶

您應用的頁面。

因此，添加註冊代碼的好地方是app.js文件，因為我正在導入此文件