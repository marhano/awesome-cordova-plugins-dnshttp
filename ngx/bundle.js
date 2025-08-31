'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var dnshttp = /** @class */ (function (_super) {
    tslib.__extends(dnshttp, _super);
    function dnshttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dnshttp.prototype.post = function (url, body, options, dns) { return core.cordova(this, "post", {}, arguments); };
    dnshttp.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: dnshttp, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    dnshttp.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: dnshttp });
    dnshttp.pluginName = "dnshttp";
    dnshttp.plugin = "";
    dnshttp.pluginRef = "dnshttp";
    dnshttp.repo = "";
    dnshttp.install = "";
    dnshttp.installVariables = [];
    dnshttp.platforms = ["Android"];
    dnshttp = tslib.__decorate([], dnshttp);
    return dnshttp;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: dnshttp, decorators: [{
            type: i0.Injectable
        }], propDecorators: { post: [] } });

exports.dnshttp = dnshttp;
