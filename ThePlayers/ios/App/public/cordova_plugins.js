
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-network-information.Connection",
          "file": "plugins/cordova-plugin-network-information/www/Connection.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "Connection"
        ]
        },
      {
          "id": "cordova-plugin-inapppurchase.PaymentsPlugin",
          "file": "plugins/cordova-plugin-inapppurchase/www/index-ios.js",
          "pluginId": "cordova-plugin-inapppurchase",
        "clobbers": [
          "inAppPurchase"
        ]
        },
      {
          "id": "cordova-plugin-network-information.network",
          "file": "plugins/cordova-plugin-network-information/www/network.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "navigator.connection",
          "navigator.network.connection"
        ]
        },
      {
          "id": "cc.fovea.cordova.purchase.InAppPurchase",
          "file": "plugins/cc.fovea.cordova.purchase/www/store-ios.js",
          "pluginId": "cc.fovea.cordova.purchase",
        "clobbers": [
          "store"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cc.fovea.cordova.purchase": "10.5.3",
      "cordova-plugin-inapppurchase": "1.1.0",
      "cordova-plugin-network-information": "2.0.2"
    };
    // BOTTOM OF METADATA
    });
    