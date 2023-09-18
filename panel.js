console.log("Adama Tester!!");

var error = function (str, callback) {
  return (e) => {
    callback({ success: false, failed: str });
    console.log(e);
  };
};

function execute(request, callback) {
  browser.windows.getCurrent({ populate: true })
    .then((windowInfo) => {
      browser.tabs.query({ windowId: windowInfo.id, active: true }).then((tabs) => {
        if (tabs.length == 0) {
          error("Failed to fetch active tab for windowId:" + windowInfo.id, callback)
        } else {
          browser.tabs.sendMessage(tabs[0].id, request).then((response) => {
            callback({ success: true, response: response });
          });
        }
      }, error("Failed to fetch tab for windowId:" + windowInfo.id, callback));
    }, error("Failed to fetch window", callback));
}

/*
document.getElementById('fetch').onclick = async function () {
  var domId = document.getElementById('domid').value;

  browser.windows.getCurrent({ populate: true })
    .then((windowInfo) => {
      browser.tabs.query({ windowId: windowInfo.id, active: true }).then((tabs) => {
        if (tabs.length == 0) {
          error("failed to fetch active tab for windowId:" + windowInfo.id)
        } else {
          console.log("fetching:" + domId);
          browser.tabs.sendMessage(tabs[0].id, { 'fetch-id': domId }).then((response) => {
            if (!response.failed) {
              document.getElementById('result').value = response.html;
            }
          });
        }
      }, error("failed to fetch tab for windowId:" + windowInfo.id));
    }, error("failed to fetch window"));
};

*/

document.getElementById('initialize').onclick = function () {
  execute({init:true}, function(result) {
    if (result.success) {

    } else {

    }
  });
};