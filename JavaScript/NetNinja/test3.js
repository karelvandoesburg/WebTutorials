var load = function() {
    var jeweet = function() {
        console.log("it works");
    }

    module.exports = jeweet;
}

windows.onload = function {
    load();
}