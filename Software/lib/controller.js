var settings = require('../settings.js');
var ApiClient = require('./ApiClient.js');

var client = new ApiClient(settings.apiUrl);
client.login(settings.coreuser, settings.corepassword);


var that = {
    lcdFn: function (arg) {
        that.dispCmd("lcd", arg);
    },
    dispCmd: function (func, arg) {
        client.callFunction(settings.coreID, func, arg);
    }
};
module.exports = that;