window.setInterval(function() {
  console.log(window.rxhtml);
  console.log("running");
  window.postMessage({type:"FROM_PAGE", "data":"from inject.js"});
}, 1000);