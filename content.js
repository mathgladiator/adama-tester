console.log("[Adama Tester Loaded]");

browser.runtime.onMessage.addListener((request) => {
    console.log("[begin]");
    console.log(window.rxhtml);
    console.log(document);
    console.log(document.rxhtml);
    console.log("[end]");
    if (request.init) {

    } else if (request.next) {

    }
    /*
    if ('fetch-id' in request) {
        var d = document.getElementById(request['fetch-id']);
        if (d) {
            console.log("Fetching:" + d.id);
            return Promise.resolve({
                failed: false,
                html: headwindcss(d)
            });
        } else {
            return Promise.resolve({
                failed: true
            });
        }
    }
    */
}
);