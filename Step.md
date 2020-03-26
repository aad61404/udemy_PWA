# 線上網址 ：
https://firebase.google.com/docs/hosting/

過程 (第七章節 IndexedDB and Dynamic Data 跟第九章節 Background Sync)


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


第40堂 裝置符合時 彈出intstall 的視窗
Deffering the App install Banner



# Promise and fetch
http://httpbin.org/

第51 堂 
google tool post 
access-control-allow-credentials: true
access-control-allow-origin: http://localhost:3000

fetch     mode cors and no-cors 差別

fetch 跟 傳統 ajax 差距 （異步處理 fetch 較好）


Service Workers -cahcing

第69
69. Implementing Dynamic Caching
點擊其他頁面 將其存到cache 離線後可看

查詢 ip 在main.js
```
fetch('https://httpbin.org/ip')
  .then(function(res) {
     console.log(res);
     console.log(res.json());
    return res.json();
  })
  .then(function(data) {
    console.log(data.origin);
  });
```
<!-- ![](https://i.ytimg.com/vi/tVIUQHbj6cg/hqdefault.jpg) -->


![](https://i.ytimg.com/vi/tVIUQHbj6cg/hqdefault.jpg)


131 ~ 134  
# fire base 
https://console.firebase.google.com/project/pwagram-jayson/database/pwagram-jayson/rules?hl=zh-tw
Database rule  set to 
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

# firebase-tools 可以使用node terminal  操作firebase 並使用server-side code
sudo npm install -g firebase-tools
firebase login
firebase init
Functions: Configure and deploy Cloud Functions, 
Hosting: Configure and deploy Firebase Hosting sites

Configure as a single-page app (rewrite all urls to /index.html)? N

done you will see firebase.json

cd functions/
npm install firebase cors --save

firebase  齒輪 專案設定 服務帳戶 Firebase Admin SDK

1. Generate new private key
2. 
```
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pwagram-jayson.firebaseio.com"
});

```
firebase deploy 時遇上錯誤 
Error: functions predeploy error: Command terminated with non-zero exit code1

解法：
https://stackoverflow.com/questions/48732513/error-functions-predoploy-error-command-terminated-with-non-zero-exit-code4294
You can remove everything under "predeploy" in firebase.json, and it'll stop running the script which is causing issues.

Function URL (storePostData): https://us-central1-pwagram-jayson.cloudfunctions.net/storePostData
Project Console: https://console.firebase.google.com/project/pwagram-jayson/overview
Hosting URL: https://pwagram-jayson.firebaseapp.com

部署 firebase 請參考
https://firebase.google.com/docs/hosting/