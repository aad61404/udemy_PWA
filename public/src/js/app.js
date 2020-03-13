var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function () {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('This is excuted code once the timer is done');
    // console.log('This is excuted code once the timer is done');
    reject({
      code: 500,
      message: 'An error occurred!'
    });
  }, 3000);
})


/*
fetch('https://httpbin.org/ip')
  .then(function (response) {
    console.log(response)
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (err) {
    console.log(err);
  })

  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    mode: 'no-cors',
    // body: {message: 'Does this work ?'}
    body: JSON.stringify({message: 'Does this work ?'})
  }).then(function (response) {
    console.log(response)
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (err) {
    console.log(err);
  })
  

promise.then(function (text) {
  // console.log("text", text)
  return text;
}).then(function (newText) {
  console.log(newText);
}).catch(function (err) {
  console.log(err.code, err.message);

*/