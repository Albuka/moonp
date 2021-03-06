exports.APIGetRequest = function(url, callback, errorCallback) {
    Ti.API.info("Get Request is called");
    var req = Titanium.Network.createHTTPClient({
        onload: callback,
        onerror: errorCallback,
        timeout: 6e4
    });
    req.open("GET", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.send();
};

exports.APIGetRequestImage = function(url, imgView, actInd, callback) {
    var loader = Titanium.Network.createHTTPClient({
        onload: callback,
        onerror: function(e) {
            Ti.API.debug(e.error);
        },
        timeout: 1e4
    });
    loader.imgView = imgView;
    loader.ind = actInd;
    loader.open("GET", url);
    loader.send();
};