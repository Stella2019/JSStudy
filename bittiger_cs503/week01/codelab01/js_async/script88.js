var sleep = function (ms) {

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("haha");
        }, ms);
    });
    return promise;
};


Promise.all([sleep(1000), sleep(5000)])
    .then(function () {
        console.log("All done");
    });
// scotch.io/tutorials/javascript-promises-for-dummies