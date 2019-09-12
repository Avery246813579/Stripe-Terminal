var StripeTerminal = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
    }, n.r = function (e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 52)
}([function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.NO_ESTABLISHED_CONNECTION = "no_established_connection", e.INVALID_READER_SHAPE = "invalid_reader_shape", e.INVALID_PAYMENT_INTENT_CLIENT_SECRET = "invalid_payment_intent_client_secret", e.INVALID_PAYMENT_INTENT_INPUT_SHAPE = "invalid_payment_intent_input_shape", e.NO_ACTIVE_COLLECT_PAYMENT_METHOD_ATTEMPT = "no_active_collect_payment_method_attempt", e.NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT = "NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT", e.CANCELED = "canceled", e.CANCELED_BY_CUSTOMER = "canceled_by_customer", e.CANCELABLE_ALREADY_COMPLETED = "cancelable_already_completed", e.CANCELABLE_ALREADY_CANCELED = "cancelable_already_canceled", e.NETWORK_ERROR = "network_error", e.NETWORK_TIMEOUT = "network_timeout", e.READER_CONNECTION_ERROR = "reader_connection_error", e.READER_CONNECTION_INTERRUPTED = "reader_connection_interrupted", e.ALREADY_CONNECTED = "already_connected", e.AUTHENTICATION_ERROR = "authentication_error", e.INVALID_CONNECTION_TOKEN = "invalid_connection_token", e.FAILED_FETCH_CONNECTION_TOKEN = "failed_fetch_connection_token", e.DISCOVERY_ALREADY_RUNNING = "discovery_already_running", e.DISCOVERY_NOT_RUNNING = "discovery_not_running", e.DISCOVERY_TOO_MANY_READERS = "discovery_too_many_readers", e.INVALID_TYPE = "invalid_type", e.ILLEGAL_STATE = "illegal_state", e.INVALID_ARGUMENT = "invalid_argument", e.INVALID_ON_FETCH_CONNECTION_TOKEN = "invalid_on_fetch_connection_token", e.INVALID_ON_UNEXPECTED_READER_DISCONNECT = "invalid_on_unexpected_reader_disconnect", e.INVALID_ON_CONNECTION_STATUS_CHANGE = "invalid_on_connection_status_change", e.INVALID_ON_PAYMENT_STATUS_CHANGE = "invalid_on_payment_status_change", e.INVALID_READER_VERSION = "invalid_reader_version", e.JSON_RPC_PARSE_ERROR = "json_rpc_parse_error", e.READER_ERROR = "reader_error", e.RPC_ERROR = "rpc_error"
    }(r = t.ErrorCodes || (t.ErrorCodes = {})), function (e) {
        var t;

        function n(t, n) {
            return e.CodeToMessageMap[t](n)
        }

        e.CodeToMessageMap = ((t = {})[r.NO_ESTABLISHED_CONNECTION] = function () {
            return "No established connection to the Reader. Make sure \n            you `discoverReaders()` and then `connectReader()` to one of the resolved discovered readers. \n            You should not make any other calls to the SDK until the `connectReader()` response resolves without an error or until the connectionStatus changes to 'connected'."
        }, t[r.INVALID_READER_SHAPE] = function () {
            return "This should be a reader from the results of the `discoverReaders()` method call."
        }, t[r.INVALID_PAYMENT_INTENT_CLIENT_SECRET] = function () {
            return "Invalid `PaymentIntent` `client_secret`. This should be the `client_secret` field from the `PaymentIntent` associated with your checkout."
        }, t[r.INVALID_PAYMENT_INTENT_INPUT_SHAPE] = function () {
            return "This should be the `PaymentIntent` object resolved from the `collectPaymentMethod()` method call."
        }, t[r.NO_ACTIVE_COLLECT_PAYMENT_METHOD_ATTEMPT] = function () {
            return "`cancelCollectPaymentMethod()` cancels an active attempt to get a payment method from a customer. However, there was no active attempt."
        }, t[r.NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT] = function () {
            return "`cancelReadSource()` cancels an active attempt to get a payment method from a customer. However, there was no active attempt."
        }, t[r.CANCELED_BY_CUSTOMER] = function (e) {
            e.actionName;
            return "Action canceled by customer."
        }, t[r.CANCELED] = function () {
            return "Action canceled."
        }, t[r.CANCELABLE_ALREADY_COMPLETED] = function () {
            return "Failed to cancel as action has already completed."
        }, t[r.CANCELABLE_ALREADY_CANCELED] = function () {
            return "This action has already been canceled."
        }, t[r.NETWORK_TIMEOUT] = function () {
            return "Network timed out! Check and ensure your browser is connected to the internet and has a stable connection."
        }, t[r.READER_CONNECTION_ERROR] = function () {
            return "Error connecting to Reader. Please check to make sure your reader is online and on the same network as your device. Please see https://stripe.com/docs/terminal/readers/verifone-p400#troubleshooting for more troubleshooting details."
        }, t[r.READER_CONNECTION_INTERRUPTED] = function () {
            return "Error connecting to Reader. Ensure the device is on and connectable on the local network."
        }, t[r.ALREADY_CONNECTED] = function () {
            return "Already have an active connection to a reader. Call `disconnectReader()` first."
        }, t[r.AUTHENTICATION_ERROR] = function () {
            return "Detected Authentication Error. There may be an issue with the connection token or the `Reader` might have been hot swapped."
        }, t[r.INVALID_CONNECTION_TOKEN] = function (e) {
            return "Invalid `ConnectionToken`. Expected Promise that resolves to pst_xxxxx. Resolved to " + e.token
        }, t[r.FAILED_FETCH_CONNECTION_TOKEN] = function () {
            return "`onFetchConnectionToken` failure. Please make sure your function creates a new connection token via your backend."
        }, t[r.DISCOVERY_ALREADY_RUNNING] = function () {
            return "Discovery is already running"
        }, t[r.DISCOVERY_NOT_RUNNING] = function () {
            return "Discovery isn't running. Start discovery with `startDiscovery()`"
        }, t[r.DISCOVERY_TOO_MANY_READERS] = function () {
            return "More than 100 readers were discovered. The list of results returned by the SDK may be truncated. Please use the locations API to group readers by locations, and use a location ID to filter your discoverReaders call. For more information, see https://stripe.com/docs/terminal/readers/fleet-management."
        }, t[r.INVALID_TYPE] = function (e) {
            return "Invalid Type. Received " + e.actual + " but expected something of format: " + e.expectedType + ". " + e.typeDescription
        }, t[r.ILLEGAL_STATE] = function (e) {
            return "Invalid State: " + e.msg
        }, t[r.INVALID_ARGUMENT] = function (e) {
            return "Invalid Argument: " + e.msg
        }, t[r.INVALID_ON_FETCH_CONNECTION_TOKEN] = function () {
            return "Invalid `onFetchConnectionToken` handler given.\n            You must pass a function that will retreive an connection token via your backend using your api secret key."
        }, t[r.INVALID_ON_UNEXPECTED_READER_DISCONNECT] = function () {
            return "Invalid `onUnexpectedReaderDisconnect` handler given.\n            You must pass a function that will handle unexpected disconnects from a connected reader."
        }, t[r.INVALID_ON_CONNECTION_STATUS_CHANGE] = function () {
            return "Invalid `onConnectionStatusChange` handler given.\n            You must pass a function that will accept an updated connection status as an argument."
        }, t[r.INVALID_ON_PAYMENT_STATUS_CHANGE] = function () {
            return "Invalid `onPaymentStatusChange` handler given.\n            You must pass a function that will accept an updated payment status as an argument."
        }, t[r.INVALID_READER_VERSION] = function () {
            return "Invalid Reader version. Please upgrade your device to use this version of the SDK"
        }, t[r.JSON_RPC_PARSE_ERROR] = function (e) {
            return "Failed to parse json rpc content: " + e.content
        }, t[r.NETWORK_ERROR] = function (e) {
            return "Unknown Network Error Occured: " + e.content
        }, t[r.READER_ERROR] = function (e) {
            return "Reader Error: " + e.msg
        }, t[r.RPC_ERROR] = function (e) {
            return "" + e.msg
        }, t), e.generateErrorMessage = n, e.generateError = function (e, t) {
            return {code: e.toLowerCase(), message: n(e, t)}
        }
    }(t.ErrorTemplates || (t.ErrorTemplates = {}))
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }), i = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, c = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };

    function a(e) {
        return "object" == typeof e && null !== e && "string" == typeof e.message
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.isExposedError = a, t.isErrorResponse = function (e) {
        return "object" == typeof e && null !== e && a(e.error)
    };
    var s = function (e) {
        function t(n) {
            var r = e.call(this, n.message) || this;
            return r.error = n, Object.setPrototypeOf(r, t.prototype), r
        }

        return o(t, e), t.prototype.toErrorResponse = function () {
            return {error: this.error}
        }, t
    }(Error);

    function u(e) {
        return i(this, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, e()];
                    case 1:
                        return [2, n.sent()];
                    case 2:
                        if ((t = n.sent()) instanceof s) return [2, t.toErrorResponse()];
                        throw t;
                    case 3:
                        return [2]
                }
            })
        })
    }

    t.IxApplicationError = s, t.runWithApplicationErrorsLifted = u, t.extractErrorMsg = function (e) {
        if ("string" == typeof e) return e;
        try {
            return e.message
        } catch (t) {
            return JSON.stringify(e)
        }
    }, t.WithApplicationErrorsLiftedToTry = function (e, t, n) {
        var r = n.value;
        return n.value = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return u(function () {
                return r.apply(e, t)
            })
        }, n
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(7), i = n(1), c = function () {
        function e() {
        }

        return e.setCollectors = function (e) {
            this.collectors = e
        }, e.forwardToCollectors = function (e) {
            this.collectors.forEach(function (t) {
                return t.collect(e)
            })
        }, e.log = function (t, n) {
            e.textLog("log", n, t)
        }, e.debug = function (t) {
            var n = "";
            n = t instanceof Error ? i.extractErrorMsg(t) : JSON.stringify(t), e.textLog("debug", o.LogLevel.DEBUG, n)
        }, e.info = function (t) {
            e.textLog("log", o.LogLevel.INFO, t)
        }, e.warning = function (t) {
            e.textLog("log", o.LogLevel.WARN, t)
        }, e.user_error = function (t) {
            e.textLog("user_error", o.LogLevel.WARN, t)
        }, e.error = function (t) {
            e.textLog("log", o.LogLevel.ERROR, t)
        }, e.exception = function (t) {
            var n = r({}, e.baseLog("exception", o.LogLevel.ERROR), {
                type: "exception",
                exception: i.extractErrorMsg(t)
            });
            e.forwardToCollectors(n)
        }, e.textLog = function (t, n, o) {
            var i = r({type: "text", message: o}, e.baseLog(t, n));
            e.forwardToCollectors(i)
        }, e.baseLog = function (e, t) {
            return {log_level: t, tag: e}
        }, e.collectors = [], e
    }();
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(7), o = n(2), i = n(4), c = n(0), a = function () {
        function e() {
        }

        return e.assert = function (e, t, n, a, s) {
            if (void 0 === n && (n = {}), void 0 === s && (s = r.LogLevel.ERROR), !e) {
                i.default.count("AssertUtils", "FailedAssertion", "FailedAssert", "ERROR", t);
                var u = c.ErrorTemplates.generateErrorMessage(t, n),
                    l = a ? c.ErrorTemplates.generateErrorMessage(a, {msg: u}) : u;
                throw o.default.log(l, s), new Error(l)
            }
        }, e.checkUserGivenArg = function (t, n, o) {
            void 0 === o && (o = {}), e.assert(t, n, o, c.ErrorCodes.INVALID_ARGUMENT, r.LogLevel.WARN)
        }, e.checkState = function (t, n, r) {
            void 0 === r && (r = {}), e.assert(t, n, r, c.ErrorCodes.ILLEGAL_STATE)
        }, e.checkType = function (e, t, n) {
            if (!e.matchesType(t)) {
                i.default.count("AssertUtils", "FailedAssertion", "TypeError", "ERROR", n);
                var r = null == n ? "" : c.ErrorTemplates.generateErrorMessage(n), a = {
                    actual: JSON.stringify(t, null, 2),
                    expectedType: JSON.stringify(e.getTypeDescriptor(), null, 2),
                    typeDescription: r
                }, s = c.ErrorTemplates.generateErrorMessage(c.ErrorCodes.INVALID_TYPE, a);
                throw o.default.error(s), new Error(s)
            }
        }, e
    }();
    t.AssertUtils = a;
    var s = function () {
        function e() {
        }

        return e.prototype.matchesType = function (e) {
            return null == e
        }, e.prototype.getTypeDescriptor = function () {
            return "null | undefined"
        }, e
    }();
    t.NullType = s;
    var u = function () {
        function e(e, t) {
            this.regex = e, this.regexName = t
        }

        return e.prototype.matchesType = function (e) {
            return this.regex.test(e)
        }, e.prototype.getTypeDescriptor = function () {
            return (this.regexName ? "(" + this.regexName + ") " : "") + this.regex.toString()
        }, e
    }();
    t.RegexType = u;
    var l = function () {
        function e(e) {
            this.expected = e
        }

        return e.prototype.matchesType = function (e) {
            return JSON.stringify(this.expected) === JSON.stringify(e)
        }, e.prototype.getTypeDescriptor = function () {
            return this.expected
        }, e
    }();
    t.ExactValueType = l;
    var p = function () {
        function e(e, t) {
            this.checker1 = e, this.checker2 = t
        }

        return e.prototype.matchesType = function (e) {
            return this.checker1.matchesType(e) || this.checker2.matchesType(e)
        }, e.prototype.getTypeDescriptor = function () {
            return {"<oneOf>": [this.checker1.getTypeDescriptor(), this.checker2.getTypeDescriptor()]}
        }, e
    }();
    t.OneofType = p, t.NullableType = function (e) {
        return new p(new s, e)
    };
    var f = function () {
        function e(e) {
            this.type = e
        }

        return e.prototype.matchesType = function (e) {
            return typeof e == this.type
        }, e.prototype.getTypeDescriptor = function () {
            return this.type
        }, e
    }();
    t.TypeofChecker = f;
    var h = function () {
        function e(e) {
            this.checker = e
        }

        return e.prototype.matchesType = function (e) {
            var t = this;
            return !!Array.isArray(e) && e.reduce(function (e, n) {
                return e && t.checker.matchesType(n)
            }, !0)
        }, e.prototype.getTypeDescriptor = function () {
            return [this.checker.getTypeDescriptor()]
        }, e
    }();
    t.ArrayChecker = h;
    var d = function () {
        function e(e, t) {
            void 0 === t && (t = !1), this.objectTypeDef = e, this.strictMode = t
        }

        return e.prototype.matchesType = function (e) {
            var t = this;
            if (!new f("object").matchesType(e) || null === e) return !1;
            var n = !this.strictMode || Object.keys(e).reduce(function (e, n) {
                return e && n in t.objectTypeDef
            }, !0), r = Object.keys(this.objectTypeDef).reduce(function (n, r) {
                return n && t.objectTypeDef[r].matchesType(e[r])
            }, !0);
            return n && r
        }, e.prototype.getTypeDescriptor = function () {
            var e = this, t = {};
            return Object.keys(this.objectTypeDef).forEach(function (n) {
                t[n] = e.objectTypeDef[n].getTypeDescriptor()
            }), t
        }, e
    }();
    t.ObjectChecker = d
}, function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    }, o = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, i = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var c = n(1), a = function () {
        function e() {
        }

        return e.setCollectors = function (e) {
            this.collectors = e
        }, e.forwardToCollectors = function (e) {
            this.collectors.forEach(function (t) {
                return t.collect(e)
            })
        }, e.collect = function (e) {
            this.captureMeter("Tracer", e.service, e.method, e.start_time_ms, e.total_time_ms, "success" === e.type)
        }, e.count = function (t, n, o, i, c) {
            var a = r({type: "count"}, e.baseEvent(t, n, o, i, c));
            e.forwardToCollectors(a)
        }, e.gauge = function (t, n, o, i, c, a) {
            var s = r({type: "gauge", measurement: c}, e.baseEvent(t, n, o, i, a));
            e.forwardToCollectors(s)
        }, e.meterAsync = function (e, t, n, r) {
            return o(this, void 0, void 0, function () {
                var o, a, s, u, l, p;
                return i(this, function (i) {
                    switch (i.label) {
                        case 0:
                            o = (new Date).valueOf(), a = null, s = !0, u = null, i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, r()];
                        case 2:
                            return a = i.sent(), [3, 4];
                        case 3:
                            return l = i.sent(), s = !1, a = l, l instanceof c.IxApplicationError && (u = l.error.code), [3, 4];
                        case 4:
                            return p = (new Date).valueOf() - o, [2, {
                                result: function () {
                                    if (s) return a;
                                    throw a
                                }, meter: this.captureMeter(e, t, n, o, p, s, u)
                            }]
                    }
                })
            })
        }, e.captureMeter = function (t, n, o, i, c, a, s) {
            var u = r({type: "meter", duration: c}, e.baseEvent(t, n, o, a ? "OK" : "ERROR", s));
            return e.forwardToCollectors(u), u
        }, e.baseEvent = function (e, t, n, r, o) {
            return {domain: e, scope: t, event: n, result: r, error_code: o}
        }, e.collectors = [], e
    }();
    t.default = a
}, function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(1), i = n(6), c = function () {
        function e() {
        }

        return e.setCollectors = function (e) {
            this.collectors = e
        }, e.forwardToCollectors = function (e) {
            this.collectors.forEach(function (t) {
                return t.collect(e)
            })
        }, e.collect = function (t) {
            e.logPoints.push({timestamp: (new Date).valueOf(), log: t})
        }, e.getActiveTraceId = function () {
            var t = e.activeTraceIds.slice();
            return e.transactionId && t.unshift("txn!" + e.transactionId), t.join(e.TRACE_ID_SEPARATOR)
        }, e.setTransactionId = function (t) {
            e.transactionId = t
        }, e.clearTransactionId = function () {
            e.transactionId = null
        }, e.traceFn = function (t, n, r, c) {
            return void 0 === c && (c = {recordReqRespOnErrorOnly: !1}), function () {
                for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                var u = e.openTracingContext(r), l = u.traceId, p = u.startTime, f = u.parentTraceId, h = r || t.name,
                    d = JSON.stringify(a), y = {
                        id: l,
                        parent_trace_id: f,
                        start_time_ms: p,
                        service: n,
                        method: h,
                        request: d,
                        version_info: i.VERSION_INFO,
                        trace_points: []
                    };
                try {
                    var _ = t.apply(this, a);
                    if (_ instanceof Promise) e.tracePromise(y, _, c); else if (o.isErrorResponse(_)) e.exceptionTrace(y, JSON.stringify(_)); else {
                        var v = JSON.stringify(_);
                        e.successTrace(y, v, c)
                    }
                    return _
                } catch (t) {
                    throw e.exceptionTrace(y, t), t
                }
            }
        }, e.openTracingContext = function (t) {
            void 0 === t && (t = "unknown");
            var n = t + "!" + Math.floor(1e7 * Math.random()), r = e.getActiveTraceId();
            return e.activeTraceIds.push(n), {traceId: n, parentTraceId: r, startTime: (new Date).valueOf()}
        }, e.closeTracingContext = function (t) {
            var n = e.activeTraceIds.indexOf(t.id);
            -1 != n && e.activeTraceIds.splice(n, 1);
            var o = e.logPoints.map(function (n) {
                return {type: "log", time_offset_ms: e.calculateElapsedTimeMs(t.start_time_ms, n.timestamp), log: n.log}
            });
            return e.logPoints = [], r({}, t, {
                total_time_ms: e.calculateElapsedTimeMs(t.start_time_ms),
                trace_points: o
            })
        }, e.successTrace = function (t, n, o) {
            var i = r({}, e.closeTracingContext(t), {type: "success", response: n});
            o.recordReqRespOnErrorOnly && (i.request = "", i.response = ""), e.forwardToCollectors(i)
        }, e.exceptionTrace = function (t, n) {
            var i = r({}, e.closeTracingContext(t), {type: "exception", exception: o.extractErrorMsg(n)});
            e.forwardToCollectors(i)
        }, e.tracePromise = function (t, n, i) {
            var c = r({}, t);
            n.then(function (t) {
                if (o.isErrorResponse(t)) e.exceptionTrace(c, JSON.stringify(t)); else {
                    var n = JSON.stringify(t);
                    e.successTrace(c, n, i)
                }
            }).catch(function (t) {
                e.exceptionTrace(c, t)
            })
        }, e.calculateElapsedTimeMs = function (e, t) {
            return void 0 === t && (t = (new Date).valueOf()), t - e
        }, e.collectors = [], e.TRACE_ID_SEPARATOR = ">", e.transactionId = null, e.activeTraceIds = [], e.logPoints = [], e
    }();
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(51), o = n(9), i = n(49), c = n(47), a = n(46), s = r.model_common_commonmodel.DeviceInfo.DeviceClass,
        u = i.detect() || {os: "unknown", name: "unknown", version: "unknown"},
        l = (new c.StorageMgr).getStorageBin("posdeviceid"), p = new a.DeviceFingerprinter(l).getDeviceFingerprint();

    function f(e) {
        return e.split(/\.|-/).map(function (e) {
            return parseInt(e)
        })
    }

    t.getDeviceInfo = function () {
        var e = u.os + ":" + u.name;
        return {
            device_class: s.POS,
            device_uuid: p,
            host_os_version: u.os,
            hardware_model: {pos_info: {description: e}},
            app_model: {app_id: "id" || window.location.hostname, app_version: window.location.href}
        }
    }, t.VERSION_INFO = {
        client_type: r.model_common_commonmodel.VersionInfoPb.ClientType.JS_SDK,
        client_version: o.PackageUtils.getVersion()
    }, t.extractSemanticVersion = f, t.isVersionCompatible = function (e, t) {
        var n = f(e), r = f(t);
        if (n.length != r.length) throw new Error("Invalid Semantic Version Check");
        for (var o = 0; o < n.length; o++) {
            if (r[o] > n[o]) return !0;
            if (r[o] < n[o]) return !1
        }
        return !0
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.DEBUG = "debug", e.INFO = "info", e.WARN = "warn", e.ERROR = "error"
    }(t.LogLevel || (t.LogLevel = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, o = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };

    function i(e) {
        return r(this, void 0, void 0, function () {
            return o(this, function (t) {
                return [2, new Promise(function (t) {
                    return setTimeout(t, e)
                })]
            })
        })
    }

    function c(e, t, n) {
        return void 0 === t && (t = function () {
            return !0
        }), void 0 === n && (n = 2), e().catch(function (r) {
            if (0 === n) throw r;
            return Promise.resolve().then(function () {
                return t(r)
            }).then(function (o) {
                return o ? c(e, t, n - 1) : Promise.reject(r)
            })
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.liftToPromise = function (e) {
        return Promise.resolve().then(function () {
            return e
        })
    }, t.sleep = i, t.timeout = function (e, t) {
        return r(this, void 0, void 0, function () {
            return o(this, function (n) {
                return [2, i(t).then(function (t) {
                    return e()
                })]
            })
        })
    }, t.retry = c, t.retryWithBackoff = function (e, t, n, a) {
        var s = this;
        return void 0 === a && (a = 2500), c(e, function (e) {
            return r(s, void 0, void 0, function () {
                return o(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [4, t(e)];
                        case 1:
                            return n.sent() ? [4, i(a)] : [2, !1];
                        case 2:
                            return n.sent(), [2, !0]
                    }
                })
            })
        }, n)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(50), o = function () {
        function e() {
        }

        return e.getProjectName = function () {
            return r.name
        }, e.getVersion = function () {
            return r.version
        }, e.getProjectConfig = function () {
            return r.pos
        }, e
    }();
    t.PackageUtils = o
}, function (e, t) {
    !function (e) {
        "use strict";
        if (!e.fetch) {
            var t = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function () {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                r = function (e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                }, o = ArrayBuffer.isView || function (e) {
                    return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                };
            l.prototype.append = function (e, t) {
                e = a(e), t = s(t);
                var n = this.map[e];
                this.map[e] = n ? n + "," + t : t
            }, l.prototype.delete = function (e) {
                delete this.map[a(e)]
            }, l.prototype.get = function (e) {
                return e = a(e), this.has(e) ? this.map[e] : null
            }, l.prototype.has = function (e) {
                return this.map.hasOwnProperty(a(e))
            }, l.prototype.set = function (e, t) {
                this.map[a(e)] = s(t)
            }, l.prototype.forEach = function (e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, l.prototype.keys = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push(n)
                }), u(e)
            }, l.prototype.values = function () {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t)
                }), u(e)
            }, l.prototype.entries = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push([n, t])
                }), u(e)
            }, t.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            _.prototype.clone = function () {
                return new _(this, {body: this._bodyInit})
            }, y.call(_.prototype), y.call(E.prototype), E.prototype.clone = function () {
                return new E(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new l(this.headers),
                    url: this.url
                })
            }, E.error = function () {
                var e = new E(null, {status: 0, statusText: ""});
                return e.type = "error", e
            };
            var c = [301, 302, 303, 307, 308];
            E.redirect = function (e, t) {
                if (-1 === c.indexOf(t)) throw new RangeError("Invalid status code");
                return new E(null, {status: t, headers: {location: e}})
            }, e.Headers = l, e.Request = _, e.Response = E, e.fetch = function (e, n) {
                return new Promise(function (r, o) {
                    var i = new _(e, n), c = new XMLHttpRequest;
                    c.onload = function () {
                        var e, t, n = {
                            status: c.status,
                            statusText: c.statusText,
                            headers: (e = c.getAllResponseHeaders() || "", t = new l, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
                                var n = e.split(":"), r = n.shift().trim();
                                if (r) {
                                    var o = n.join(":").trim();
                                    t.append(r, o)
                                }
                            }), t)
                        };
                        n.url = "responseURL" in c ? c.responseURL : n.headers.get("X-Request-URL");
                        var o = "response" in c ? c.response : c.responseText;
                        r(new E(o, n))
                    }, c.onerror = function (e) {
                        console.dir(e);
                        o(new TypeError("Network request failed"))
                    }, c.ontimeout = function () {
                        o(new TypeError("Network request failed"))
                    }, c.open(i.method, i.url, !0), "include" === i.credentials ? c.withCredentials = !0 : "omit" === i.credentials && (c.withCredentials = !1), "responseType" in c && t.blob && (c.responseType = "blob"), i.headers.forEach(function (e, t) {
                        c.setRequestHeader(t, e)
                    }), c.send(void 0 === i._bodyInit ? null : i._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }

        function a(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function s(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function u(e) {
            var n = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t}
                }
            };
            return t.iterable && (n[Symbol.iterator] = function () {
                return n
            }), n
        }

        function l(e) {
            this.map = {}, e instanceof l ? e.forEach(function (e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function (e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t])
            }, this)
        }

        function p(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function f(e) {
            return new Promise(function (t, n) {
                e.onload = function () {
                    t(e.result)
                }, e.onerror = function () {
                    n(e.error)
                }
            })
        }

        function h(e) {
            var t = new FileReader, n = f(t);
            return t.readAsArrayBuffer(e), n
        }

        function d(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function (e) {
                if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e; else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = d(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                    if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !o(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = d(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, t.blob && (this.blob = function () {
                var e = p(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function () {
                return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
            }), this.text = function () {
                var e, t, n, r = p(this);
                if (r) return r;
                if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = f(t), t.readAsText(e), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, t.formData && (this.formData = function () {
                return this.text().then(v)
            }), this.json = function () {
                return this.text().then(JSON.parse)
            }, this
        }

        function _(e, t) {
            var n, r, o = (t = t || {}).body;
            if (e instanceof _) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new l(e.headers)), this.method = e.method, this.mode = e.mode, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new l(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), i.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o)
        }

        function v(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function (e) {
                if (e) {
                    var n = e.split("="), r = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }), t
        }

        function E(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new l(t.headers), this.url = t.url || "", this._initBody(e)
        }
    }("undefined" != typeof self ? self : this)
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }), i = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, c = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(21), s = n(3), u = n(0), l = n(2);
    t.DEFAULT_DISCOVERY_CONFIG = {method: "internet"};
    var p = function () {
        function e(e) {
            this.discoveryClient = e
        }

        return e.prototype.createDiscoveryMethod = function (e) {
            return e.simulated ? new y(e) : new d(e, this.discoveryClient)
        }, e
    }();
    t.DiscoveryMethodFactory = p;
    var f = function () {
        function e(e) {
            this.discoveryMethodFactory = e, this.activeDiscovery = null, this.lastResult = null, this.nextResult = null
        }

        return e.prototype.getDiscoveredReaders = function () {
            return s.AssertUtils.assert(!!this.activeDiscovery, u.ErrorCodes.DISCOVERY_NOT_RUNNING), this.lastResult
        }, e.prototype.discoverReaders = function (e) {
            return void 0 === e && (e = t.DEFAULT_DISCOVERY_CONFIG), i(this, void 0, void 0, function () {
                var t = this;
                return c(this, function (n) {
                    return this.activeDiscovery || (this.nextResult = new Promise(function (n, r) {
                        t.startDiscovery(e, function (e) {
                            return n(e)
                        }, function (e) {
                            return r(e)
                        })
                    }).then(function (e) {
                        return t.stopDiscovery(), e
                    }, function (e) {
                        return Promise.reject(e)
                    })), [2, this.nextResult]
                })
            })
        }, e.prototype.startDiscovery = function (e, n, r) {
            var o = this;
            void 0 === e && (e = t.DEFAULT_DISCOVERY_CONFIG), s.AssertUtils.assert(!this.activeDiscovery, u.ErrorCodes.DISCOVERY_ALREADY_RUNNING), this.activeDiscovery = this.discoveryMethodFactory.createDiscoveryMethod(e);
            this.activeDiscovery.startDiscovery(function (e) {
                var t = {discoveredReaders: e};
                JSON.stringify(t) !== JSON.stringify(o.lastResult) && (o.lastResult = t, n(o.lastResult))
            }, function (e) {
                o.stopDiscovery(), r(e)
            })
        }, e.prototype.stopDiscovery = function () {
            this.activeDiscovery && this.activeDiscovery.stopDiscovery(), this.lastResult = null, this.activeDiscovery = null, this.nextResult = null
        }, e
    }();
    t.default = f;
    var h = function () {
        return function (e) {
            this.config = e
        }
    }();
    t.BaseDiscoverMethod = h;
    var d = function (e) {
        function t(t, n, r) {
            void 0 === r && (r = 5e3);
            var o = e.call(this, t) || this;
            return o.discoveryClient = n, o.queryIntervalMs = r, o
        }

        return o(t, e), t.prototype.startDiscovery = function (e, t) {
            var n = this;
            this.intervalId = a.setIntervalAndExecute(function () {
                return i(n, void 0, void 0, function () {
                    var n, r;
                    return c(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, this.discoveryClient.discoverReaders({location: this.config.location})];
                            case 1:
                                return (n = o.sent()).has_more && l.default.error(u.ErrorTemplates.generateErrorMessage(u.ErrorCodes.DISCOVERY_TOO_MANY_READERS)), e(n.data), [3, 3];
                            case 2:
                                return r = o.sent(), t(r), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, this.queryIntervalMs)
        }, t.prototype.stopDiscovery = function () {
            this.intervalId && clearInterval(this.intervalId)
        }, t
    }(h);
    t.InternetDiscoveryMethod = d;
    var y = function (e) {
        function t(t) {
            return e.call(this, t) || this
        }

        return o(t, e), t.prototype.startDiscovery = function (e, n) {
            e([{
                id: t.SIMULATED_ID,
                object: "terminal.reader",
                device_type: "verifone_P400",
                ip_address: "0.0.0.0",
                label: t.SIMULATED_LABEL,
                serial_number: t.SIMULATED_ID,
                location: "st_simulated",
                status: "online"
            }])
        }, t.prototype.stopDiscovery = function () {
        }, t.SIMULATED_ID = "SIMULATOR", t.SIMULATED_LABEL = "Reader Simulator", t
    }(h);
    t.SimulatedDiscoveryMethod = y
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), c = n(0), a = function (e) {
        function t(n, r) {
            var o = e.call(this, c.ErrorTemplates.generateError(c.ErrorCodes.NETWORK_ERROR, {content: r})) || this;
            return o.response = n, o.responseBodyText = r, Object.setPrototypeOf(o, t.prototype), o
        }

        return o(t, e), t
    }(i.IxApplicationError);
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        !function (e) {
            e.UNKNOWN_RPC_ERROR = "UNKNOWN_RPC_ERROR", e.RPC_OK = "RPC_OK", e.RPC_ERROR = "RPC_ERROR", e.NETWORK_UNAVAILABLE = "NETWORK_UNAVAILABLE", e.SERVER_UNRESOLVABLE = "SERVER_UNRESOLVABLE", e.SERVER_UNREACHABLE = "SERVER_UNREACHABLE", e.BAD_REQUEST = "BAD_REQUEST", e.BAD_RESPONSE = "BAD_RESPONSE", e.TIMEOUT = "TIMEOUT", e.RETRY = "RETRY", e.SERVER_BUSY = "SERVER_BUSY"
        }(e.RpcEC || (e.RpcEC = {})), function (e) {
            !function (e) {
                e.STANDARD = "STANDARD", e.DEV = "DEV"
            }(e.RequestType || (e.RequestType = {}))
        }(e.RpcRequest || (e.RpcRequest = {}))
    }(t.net_rpc_proto_rpc || (t.net_rpc_proto_rpc = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, o = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(28), c = n(13), a = n(5), s = n(8), u = n(6), l = n(27),
        p = i.net_rpc_proto_applicationerrorcode.ApplicationEC, f = c.net_rpc_proto_rpc.RpcEC,
        h = c.net_rpc_proto_rpc.RpcRequest.RequestType, d = n(0), y = n(12), _ = function () {
            return function () {
            }
        }();

    function v(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
            return String.fromCharCode("0x" + t)
        }))
    }

    function E(e) {
        return decodeURIComponent(atob(e).split("").map(function (e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }).join(""))
    }

    t.RpcEndpoint = _, t.b64EncodeUnicode = v, t.b64DecodeUnicode = E;
    var b = function () {
        function e(e, t, n, r, o) {
            this.serviceName = e, this.postClient = t, this.rpcEndpoint = n, this.networkMonitor = r, this.retryBackoff = o
        }

        return e.prototype.getUntracedMethods = function () {
            return []
        }, e.prototype.rpc = function (t, n, i, c) {
            return void 0 === c && (c = {isRetriable: !0}), r(this, void 0, void 0, function () {
                var r, _, b, m, T, R, C = this;
                return o(this, function (o) {
                    return r = this.rpcEndpoint.port ? ":" + this.rpcEndpoint.port : "", _ = this.rpcEndpoint.url_path + r + "/protojsonservice/" + this.serviceName, b = {
                        id: Date.now(),
                        service: this.serviceName,
                        method: t,
                        content: v(JSON.stringify(n)),
                        session_token: i || "",
                        request_type: h.STANDARD,
                        version_info: u.VERSION_INFO,
                        parent_trace_id: a.default.getActiveTraceId() || "",
                        device_info: u.getDeviceInfo()
                    }, m = function (e) {
                        return c.isRetriable && e.errorType() === l.RpcErrorType.RPC && l.isRetriableRpcNetworkError(e.rpcEc())
                    }, R = T = function () {
                        return C.postClient.post(_, b).catch(function (e) {
                            var t = null;
                            return t = e instanceof y.default ? e.error.message : e.message, {
                                rpc_error_code: f.NETWORK_UNAVAILABLE,
                                app_error_code: p.OK,
                                error: t
                            }
                        }).then(function (e) {
                            if (e.rpc_error_code !== f.RPC_OK || e.app_error_code !== p.OK) {
                                var t = new l.default(e);
                                return Promise.reject(t)
                            }
                            try {
                                return JSON.parse(E(e.content))
                            } catch (t) {
                                throw new Error(d.ErrorTemplates.generateErrorMessage(d.ErrorCodes.JSON_RPC_PARSE_ERROR, {content: e.content}))
                            }
                        })
                    }, this.getUntracedMethods().includes(t) || (R = function () {
                        return C.networkMonitor.withMonitoring(C.serviceName, t, T)
                    }), [2, s.retryWithBackoff(R, m, e.NUM_RETRIES, this.retryBackoff)]
                })
            })
        }, e.NUM_RETRIES = 1, e
    }();
    t.default = b
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, o = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), c = n(2), a = n(0), s = function () {
        function e(e, t) {
            this.fetchConnectionTokenFn = e, this.networkMonitor = t, this.activeCredentials = null
        }

        return e.prototype.getActiveCredentials = function () {
            return r(this, void 0, void 0, function () {
                var e = this;
                return o(this, function (t) {
                    return this.activeCredentials || (this.activeCredentials = this.networkMonitor.withMonitoring("ConnectionTokenMgr", "get", function () {
                        return r(e, void 0, void 0, function () {
                            var e, t, n;
                            return o(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        e = this.fetchConnectionTokenFn(), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, e];
                                    case 2:
                                        return t = r.sent(), i.AssertUtils.assert(!!t && "string" == typeof t && t.startsWith("pst_"), a.ErrorCodes.INVALID_CONNECTION_TOKEN, {token: t}), [2, t];
                                    case 3:
                                        throw n = r.sent(), this.invalidateConnectionToken(), c.default.error(a.ErrorTemplates.generateErrorMessage(a.ErrorCodes.FAILED_FETCH_CONNECTION_TOKEN)), n;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    })), [2, this.activeCredentials]
                })
            })
        }, e.prototype.invalidateConnectionToken = function () {
            this.activeCredentials = null
        }, e
    }();
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.NONE = "none", e.VERBOSE = "verbose"
    }(t.OutputLogLevel || (t.OutputLogLevel = {})), function (e) {
        e.DEV = "DEV", e.PROD = "PROD"
    }(t.DevMode || (t.DevMode = {}))
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), c = n(0), a = function (e) {
        function t(n) {
            var r = e.call(this, {message: n, code: c.ErrorCodes.READER_ERROR}) || this;
            return Object.setPrototypeOf(r, t.prototype), r
        }

        return o(t, e), t
    }(i.IxApplicationError);
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.tryOrDefault = function (e, t) {
        var n;
        try {
            void 0 === (n = e()) && (n = t)
        } catch (e) {
            n = t
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e() {
            this.serializedPromise = Promise.resolve()
        }

        return e.prototype.synchronize = function (e) {
            return this.serializedPromise = this.serializedPromise.then(function () {
                return e()
            }, function () {
                return e()
            }), this.serializedPromise
        }, e
    }();
    t.Synchronizer = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(21), o = n(2), i = function () {
        function e(e, t) {
            void 0 === e && (e = 45e3), void 0 === t && (t = 10), this.flushInterval = e, this.maxCapacity = t, this.items = []
        }

        return e.prototype.start = function () {
            var e = this;
            this.interval = r.setIntervalAndExecute(function () {
                return e.flush()
            }, this.flushInterval);
            try {
                var t = window.onbeforeunload;
                window.onbeforeunload = function (n) {
                    return e.flush(), t ? t(n) : null
                }
            } catch (e) {
            }
        }, e.prototype.collect = function (e) {
            this.items.push(e), this.items.length === this.maxCapacity && this.flush()
        }, e.prototype.flush = function () {
            if (this.items.length > 0) {
                var e = this.items;
                this.items = [], this.doFlush(e).catch(function (e) {
                    return o.default.debug(e)
                })
            }
        }, e.prototype.shutdown = function () {
            clearInterval(this.interval)
        }, e
    }();
    t.PeriodicFlusher = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(8);
    t.setIntervalAndExecute = function (e, t) {
        return e(), setInterval(e, t)
    }, t.setBeacon = function (e, t, n) {
        var o = !0, i = function (t) {
            return o && r.timeout(e, t), null
        };
        return e().then(function (e) {
            return i(t)
        }).catch(function (e) {
            return i(n)
        }), function () {
            o = !1
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.NOT_READY = "not_ready", e.READY = "ready", e.WAITING_FOR_INPUT = "waiting_for_input", e.PROCESSING = "processing"
    }(t.PaymentStatus || (t.PaymentStatus = {})), function (e) {
        e.CONNECTING = "connecting", e.CONNECTED = "connected", e.NOT_CONNECTED = "not_connected"
    }(t.ConnectionStatus || (t.ConnectionStatus = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, o = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), c = n(0), a = function () {
        function e(e) {
            var t = this;
            this.cancelableOp = e, this.isPending = !0, this.canceled = !1, this.internalPromise = new Promise(function (e, n) {
                t.rejectFn = n;
                var r = t.cancelableOp.execute(function () {
                    return t.isCanceled()
                });
                t.resource = r.resource, r.result.then(function (e) {
                    return t.isPending = !1, e
                }, function (e) {
                    return t.isPending = !1, Promise.reject(e)
                }).then(e, n)
            })
        }

        return e.chainCancelable = function (t, n) {
            var r = t;
            return new e({
                execute: function () {
                    return {
                        result: t.result().then(function (e) {
                            var t = n(e);
                            return r = t, t.result()
                        })
                    }
                }, onCancel: function (e) {
                    !r.isCanceled() && r.isPending && r.cancel()
                }
            })
        }, e.prototype.result = function () {
            return this.internalPromise
        }, e.prototype.cancel = function () {
            return r(this, void 0, void 0, function () {
                var e;
                return o(this, function (t) {
                    if (!this.isPending) throw new Error("Failed to cancel. Action has already completed.");
                    if (this.canceled) throw new Error("Action has already been canceled.");
                    return this.canceled = !0, this.rejectFn(new i.IxApplicationError(c.ErrorTemplates.generateError(c.ErrorCodes.CANCELED))), e = null, this.cancelableOp.onCancel && (e = this.cancelableOp.onCancel(this.resource)), [2, Promise.resolve().then(function () {
                        return e
                    }).then(function () {
                    })]
                })
            })
        }, e.prototype.isCanceled = function () {
            return this.canceled
        }, e
    }();
    t.Cancelable = a
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }), i = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, c = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(6), s = n(5), u = n(12), l = n(44), p = "api.stripe.com/";
    t.DEFAULT_STRIPE_URL_BASE = "api.stripe.com/";
    var f = JSON.stringify({pos_version_info: a.VERSION_INFO, pos_device_info: a.getDeviceInfo()});
    t.overrideBaseURL = function (e) {
        p = e
    };
    var h = function () {
        function e(e, t, n, r) {
            void 0 === r && (r = "v1"), this.resourceName = e, this.httpClient = t, this.networkMonitor = n, this.resourceVersion = r
        }

        return e.prototype.createHeaders = function (e) {
            var t = new Headers;
            return t.append("Stripe-Version", "2018-08-23"), t.append("X-Stripe-Terminal-User-Agent", encodeURI(f)), t.append("X-Stripe-Client-Trace-Id", s.default.getActiveTraceId()), e && t.append("Authorization", "Bearer " + e), t
        }, e.prototype.createUrl = function (e) {
            return t = this.resourceVersion, n = this.resourceName, "https://" + p + t + "/" + n + ((r = e) ? "/" + r : "");
            var t, n, r
        }, e.prototype.makeRequest = function (e, t) {
            var n = this;
            return this.networkMonitor.withMonitoring(this.resourceName, e, function () {
                return i(n, void 0, void 0, function () {
                    var e;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, t()];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                throw(e = n.sent()) instanceof u.default ? l.default.fromHttpError(e) : e;
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }, e.prototype.postFormEncoded = function (e, t, n) {
            var r = this;
            return this.makeRequest(e, function () {
                return r.httpClient.postFormEncoded(r.createUrl(e), t, r.createHeaders(n))
            })
        }, e.prototype.get = function (e, t, n) {
            var r = this;
            return this.makeRequest(e, function () {
                return r.httpClient.get(r.createUrl(e), t, r.createHeaders(n))
            })
        }, e
    }();
    t.IxStripeClient = h;
    var d = function (e) {
        function t(t, n, r, o) {
            return void 0 === o && (o = "v1"), e.call(this, t, n, r, o) || this
        }

        return o(t, e), t.prototype.postResource = function (t, n) {
            return e.prototype.postFormEncoded.call(this, null, t, n)
        }, t.prototype.loadResource = function (t, n, r) {
            return e.prototype.get.call(this, t, n, r)
        }, t.prototype.queryResource = function (t, n) {
            return e.prototype.get.call(this, null, t, n)
        }, t
    }(h);
    t.default = d
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }), i = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, c = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(24), s = n(3), u = n(0), l = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "payment_intents", t, r) || this;
            return o.connectionTokenMgr = n, o
        }

        return o(t, e), t.prototype.getPaymentIntentIdFromClientSecret = function (e) {
            var n = e.match(t.CLIENT_SECRET_REGEX);
            return s.AssertUtils.assert(!!n, u.ErrorCodes.INVALID_PAYMENT_INTENT_CLIENT_SECRET), n[1]
        }, t.prototype.loadPaymentIntentBySecret = function (t) {
            return i(this, void 0, void 0, function () {
                var n, r;
                return c(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return n = this.getPaymentIntentIdFromClientSecret(t), [4, this.connectionTokenMgr.getActiveCredentials()];
                        case 1:
                            return r = o.sent(), [4, e.prototype.loadResource.call(this, n, {client_secret: t}, r)];
                        case 2:
                            return [2, o.sent()]
                    }
                })
            })
        }, t.CLIENT_SECRET_REGEX = /^(pi_[^_]+)_secret_[^-]+$/, t
    }(a.default);
    t.default = l
}, function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    }, o = this && this.__decorate || function (e, t, n, r) {
        var o, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(t, n, c) : o(t, n)) || c);
        return i > 3 && c && Object.defineProperty(t, n, c), c
    }, i = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }, c = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, a = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var s = n(4), u = n(45), l = n(3), p = n(25), f = n(1), h = n(23), d = n(22);
    t.ConnectionStatus = d.ConnectionStatus;
    var y = n(0), _ = new l.ObjectChecker({
        ip_address: new l.TypeofChecker("string"),
        serial_number: new l.TypeofChecker("string")
    }), v = function () {
        function e(e, t, n, r, o) {
            var i = this;
            this.discoveryService = e, this.jackRabbitService = t, this.delegate = n, this.paymentIntentClient = r, this.connectionTokenMgr = o, this.collectPaymentMethodAttempt = null, this.collectReusableCardAttempt = null, this.connectionStatus = d.ConnectionStatus.NOT_CONNECTED, this.paymentStatus = d.PaymentStatus.NOT_READY, this.jackRabbitService.setOnUnexpectedDisconnectHandler(function (e) {
                i.setConnectionStatus(d.ConnectionStatus.NOT_CONNECTED), i.delegate.onUnexpectedReaderDisconnect && i.delegate.onUnexpectedReaderDisconnect(e)
            })
        }

        return e.prototype.getConnectionStatus = function () {
            return this.connectionStatus
        }, e.prototype.getPaymentStatus = function () {
            return this.paymentStatus
        }, e.prototype.discoverReaders = function (e) {
            return c(this, void 0, void 0, function () {
                var t;
                return a(this, function (n) {
                    return t = new l.ObjectChecker({
                        method: l.NullableType(new l.ExactValueType("internet")),
                        location: l.NullableType(new l.TypeofChecker("string")),
                        simulated: l.NullableType(new l.TypeofChecker("boolean"))
                    }, !0), l.AssertUtils.checkType(l.NullableType(t), e), [2, this.discoveryService.discoverReaders(e)]
                })
            })
        }, e.prototype.connectReader = function (e, t) {
            return void 0 === t && (t = {}), c(this, void 0, void 0, function () {
                var n;
                return a(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return l.AssertUtils.checkType(_, e, y.ErrorCodes.INVALID_READER_SHAPE), this.setConnectionStatus(d.ConnectionStatus.CONNECTING), [4, this.jackRabbitService.connect(e, t)];
                        case 1:
                            return n = r.sent(), this.setConnectionStatus(d.ConnectionStatus.CONNECTED), this.setPaymentStatus(d.PaymentStatus.READY), [2, {reader: n.reader}]
                    }
                })
            })
        }, e.prototype.getConnectedReader = function () {
            return this.getConnectionStatus() !== d.ConnectionStatus.CONNECTED ? null : this.jackRabbitService.getConnectedReader()
        }, e.prototype.disconnectReader = function () {
            return c(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.jackRabbitService.disconnect()];
                        case 1:
                            return e.sent(), this.setConnectionStatus(d.ConnectionStatus.NOT_CONNECTED), [2, {}]
                    }
                })
            })
        }, e.prototype.clearCachedCredentials = function () {
            return c(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.disconnectReader()];
                        case 1:
                            return e.sent(), this.connectionTokenMgr.invalidateConnectionToken(), [2, {}]
                    }
                })
            })
        }, e.prototype.clearReaderDisplay = function () {
            return c(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.jackRabbitService.clearReaderDisplay()];
                        case 1:
                            return e.sent(), [2, {}]
                    }
                })
            })
        }, e.prototype.setReaderDisplay = function (e) {
            return c(this, void 0, void 0, function () {
                var t, n, o, i;
                return a(this, function (c) {
                    switch (c.label) {
                        case 0:
                            return t = new l.ObjectChecker({
                                description: new l.TypeofChecker("string"),
                                quantity: new l.TypeofChecker("number"),
                                amount: new l.TypeofChecker("number")
                            }, !0), n = new l.ObjectChecker({
                                line_items: new l.ArrayChecker(t),
                                tax: l.NullableType(new l.TypeofChecker("number")),
                                total: new l.TypeofChecker("number"),
                                currency: new l.TypeofChecker("string")
                            }, !0), o = new l.ObjectChecker({
                                cart: n,
                                type: new l.ExactValueType("cart")
                            }, !0), l.AssertUtils.checkType(o, e), this.ensureConnected(), i = r({}, e.cart, {currency: e.cart.currency.toLowerCase()}), [4, this.jackRabbitService.setReaderDisplay({
                                type: e.type,
                                cart: i
                            })];
                        case 1:
                            return c.sent(), [2, {}]
                    }
                })
            })
        }, e.prototype.collectPaymentMethod = function (e, t) {
            return void 0 === t && (t = {}), c(this, void 0, void 0, function () {
                var n, r, o, i, c, s, u, f = this;
                return a(this, function (a) {
                    switch (a.label) {
                        case 0:
                            l.AssertUtils.checkType(new l.RegexType(p.default.CLIENT_SECRET_REGEX, "PaymentIntent client_secret"), e, y.ErrorCodes.INVALID_PAYMENT_INTENT_CLIENT_SECRET), n = new l.ObjectChecker({
                                options: new l.ArrayChecker(new l.ObjectChecker({
                                    amount: new l.TypeofChecker("number"),
                                    label: new l.TypeofChecker("string")
                                })), hide_custom_amount: new l.TypeofChecker("boolean")
                            }), r = new l.ObjectChecker({tip_configuration: l.NullableType(n)}), l.AssertUtils.checkType(r, t), this.ensureConnected(), o = this.fetchPaymentIntent(e), i = function (e) {
                                return f.startCollectingPaymentMethod(e, t)
                            }, a.label = 1;
                        case 1:
                            return a.trys.push([1, , 4, 5]), this.collectPaymentMethodAttempt = h.Cancelable.chainCancelable(o, i), this.setPaymentStatus(d.PaymentStatus.WAITING_FOR_INPUT), [4, o.result()];
                        case 2:
                            return c = a.sent(), [4, this.collectPaymentMethodAttempt.result()];
                        case 3:
                            return s = a.sent(), u = {
                                sdk_payment_details: s,
                                status: "requires_confirmation"
                            }, [2, {paymentIntent: Object.assign({}, c, u)}];
                        case 4:
                            return this.collectPaymentMethodAttempt = null, this.setPaymentStatus(d.PaymentStatus.READY), [7];
                        case 5:
                            return [2]
                    }
                })
            })
        }, e.prototype.processPayment = function (e) {
            return c(this, void 0, void 0, function () {
                var t, n;
                return a(this, function (r) {
                    switch (r.label) {
                        case 0:
                            t = new l.ObjectChecker({
                                id: new l.RegexType(/^pi_/),
                                sdk_payment_details: new l.TypeofChecker("object")
                            }), l.AssertUtils.checkType(t, e, y.ErrorCodes.INVALID_PAYMENT_INTENT_INPUT_SHAPE), this.ensureConnected(), this.setPaymentStatus(d.PaymentStatus.PROCESSING), r.label = 1;
                        case 1:
                            return r.trys.push([1, , 3, 4]), [4, this.jackRabbitService.confirmPayment({
                                payment_intent_id: e.id,
                                payment_method: e.sdk_payment_details
                            })];
                        case 2:
                            return n = r.sent(), [2, this.resultingChargeToUpdatedPaymentIntent(n)];
                        case 3:
                            return this.setPaymentStatus(d.PaymentStatus.READY), [7];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.cancelCollectPaymentMethod = function () {
            return c(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return l.AssertUtils.checkState(null != this.collectPaymentMethodAttempt, y.ErrorCodes.NO_ACTIVE_COLLECT_PAYMENT_METHOD_ATTEMPT), [4, this.collectPaymentMethodAttempt.cancel()];
                        case 1:
                            return e.sent(), this.setPaymentStatus(d.PaymentStatus.READY), [2, {}]
                    }
                })
            })
        }, e.prototype.readReusableCard = function (e) {
            return void 0 === e && (e = {}), c(this, void 0, void 0, function () {
                var t;
                return a(this, function (n) {
                    switch (n.label) {
                        case 0:
                            this.ensureConnected(), this.setPaymentStatus(d.PaymentStatus.WAITING_FOR_INPUT), n.label = 1;
                        case 1:
                            return n.trys.push([1, , 3, 4]), this.collectReusableCardAttempt = this.jackRabbitService.readReusableCard(e), [4, this.collectReusableCardAttempt.result()];
                        case 2:
                            return (t = n.sent()).confirm_error ? [2, {
                                error: {
                                    code: t.confirm_error.code,
                                    message: t.confirm_error.message
                                }
                            }] : [2, {payment_method: t.created_reusuable_card}];
                        case 3:
                            return this.setPaymentStatus(d.PaymentStatus.READY), [7];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.cancelReadReusableCard = function () {
            return c(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return l.AssertUtils.checkState(null != this.collectReusableCardAttempt, y.ErrorCodes.NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT), [4, this.collectReusableCardAttempt.cancel()];
                        case 1:
                            return e.sent(), [2, {}]
                    }
                })
            })
        }, e.prototype.fetchPaymentIntent = function (e) {
            var t = this;
            return new h.Cancelable({
                execute: function () {
                    return {result: t.paymentIntentClient.loadPaymentIntentBySecret(e)}
                }
            })
        }, e.prototype.startCollectingPaymentMethod = function (e, t) {
            var n = this;
            return void 0 === t && (t = {}), new h.Cancelable({
                execute: function () {
                    var r = {charge_amount: e.amount, currency: e.currency, tip_amount: 0, cashback_amount: 0},
                        o = n.jackRabbitService.collectPaymentMethod({
                            charge_amount: r,
                            tip_configuration: t.tip_configuration
                        });
                    return {result: o.result, resource: o}
                }, onCancel: function (e) {
                    e.cancel()
                }
            })
        }, e.prototype.resultingChargeToUpdatedPaymentIntent = function (e) {
            return e.confirmed_payment_intent ? (s.default.count("Terminal", "ConfirmResult", "ChargeApprove", "OK"), {paymentIntent: e.confirmed_payment_intent}) : e.decline_response ? (s.default.count("Terminal", "ConfirmResult", "ChargeDecline", "ERROR", e.decline_response.error.code || "unknown"), e.decline_response) : (s.default.count("Terminal", "ConfirmResult", "ConfirmError", "ERROR", e.confirm_error.code), {
                error: {
                    code: e.confirm_error.code,
                    message: e.confirm_error.message,
                    payment_intent: null
                }
            })
        }, e.prototype.ensureConnected = function () {
            var e = this.getConnectionStatus();
            l.AssertUtils.checkState(e === d.ConnectionStatus.CONNECTED, y.ErrorCodes.NO_ESTABLISHED_CONNECTION)
        }, e.prototype.setPaymentStatus = function (e) {
            this.paymentStatus = e, this.delegate.onPaymentStatusChange && this.delegate.onPaymentStatusChange({status: e})
        }, e.prototype.setConnectionStatus = function (e) {
            e == d.ConnectionStatus.NOT_CONNECTED && this.setPaymentStatus(d.PaymentStatus.NOT_READY), this.connectionStatus = e, this.delegate.onConnectionStatusChange && this.delegate.onConnectionStatusChange({status: this.connectionStatus})
        }, o([u.TraceMethod({recordReqRespOnErrorOnly: !0}), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", [Object]), i("design:returntype", Promise)], e.prototype, "discoverReaders", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", [Object, Object]), i("design:returntype", Promise)], e.prototype, "connectReader", null), o([u.TraceMethod(), i("design:type", Function), i("design:paramtypes", []), i("design:returntype", Object)], e.prototype, "getConnectedReader", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", []), i("design:returntype", Promise)], e.prototype, "disconnectReader", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", []), i("design:returntype", Promise)], e.prototype, "clearCachedCredentials", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", []), i("design:returntype", Promise)], e.prototype, "clearReaderDisplay", null), o([u.TraceMethod({recordReqRespOnErrorOnly: !0}), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", [Object]), i("design:returntype", Promise)], e.prototype, "setReaderDisplay", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", [String, Object]), i("design:returntype", Promise)], e.prototype, "collectPaymentMethod", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", [Object]), i("design:returntype", Promise)], e.prototype, "processPayment", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", []), i("design:returntype", Promise)], e.prototype, "cancelCollectPaymentMethod", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", [Object]), i("design:returntype", Promise)], e.prototype, "readReusableCard", null), o([u.TraceMethod(), f.WithApplicationErrorsLiftedToTry, i("design:type", Function), i("design:paramtypes", []), i("design:returntype", Promise)], e.prototype, "cancelReadReusableCard", null), e
    }();
    t.default = v
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i, c = n(28), a = n(13), s = c.net_rpc_proto_applicationerrorcode.ApplicationEC, u = a.net_rpc_proto_rpc.RpcEC,
        l = n(1), p = n(0);
    !function (e) {
        e[e.RPC = 0] = "RPC", e[e.APPLICATION = 1] = "APPLICATION"
    }(i = t.RpcErrorType || (t.RpcErrorType = {})), t.isRetriableRpcNetworkError = function (e) {
        return e === u.SERVER_UNREACHABLE || e === u.SERVER_UNRESOLVABLE || e === u.RETRY || e === u.SERVER_BUSY || e === u.TIMEOUT || e === u.NETWORK_UNAVAILABLE
    }, t.isRpcUnauthenticatedError = function (e) {
        return e === s.AUTHENTICATION_FAILURE || e === s.UNAUTHORIZED || e === s.INVALID_SESSION_TOKEN
    };
    var f = function (e) {
        function t(n) {
            var r = e.call(this, p.ErrorTemplates.generateError(p.ErrorCodes.RPC_ERROR, {msg: n.error})) || this;
            return r.response = n, Object.setPrototypeOf(r, t.prototype), r
        }

        return o(t, e), t.prototype.errorType = function () {
            return this.applicationEc() !== s.OK ? i.APPLICATION : i.RPC
        }, t.prototype.rpcEc = function () {
            return this.response.rpc_error_code || u.UNKNOWN_RPC_ERROR
        }, t.prototype.applicationEc = function () {
            return this.response.app_error_code || s.UNKNOWN_APPLICATION_ERROR
        }, t
    }(l.IxApplicationError);
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        !function (e) {
            e.UNKNOWN_APPLICATION_ERROR = "UNKNOWN_APPLICATION_ERROR", e.OK = "OK", e.LOCK_RESOURCES_EXCEPTION = "LOCK_RESOURCES_EXCEPTION", e.INVALID_LOAD_ID = "INVALID_LOAD_ID", e.ILLEGAL_STATE = "ILLEGAL_STATE", e.AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE", e.INVALID_SESSION_TOKEN = "INVALID_SESSION_TOKEN", e.SHORT_LIVED_SESSION = "SHORT_LIVED_SESSION", e.UNAUTHORIZED = "UNAUTHORIZED", e.INVALID_REQUEST = "INVALID_REQUEST", e.INVALID_RESPONSE = "INVALID_RESPONSE", e.ILLEGAL_VERSION = "ILLEGAL_VERSION", e.SERVER_ERROR = "SERVER_ERROR", e.HEALTH_FAILURE = "HEALTH_FAILURE", e.UNREACHABLE_ENDPOINT = "UNREACHABLE_ENDPOINT", e.INVALID_CONFIG = "INVALID_CONFIG", e.PERSISTER_FAILURE = "PERSISTER_FAILURE", e.MONGO_SOCKET_FAILURE = "MONGO_SOCKET_FAILURE", e.INTERRUPTED = "INTERRUPTED", e.CREATE_MERCHANT_FAILED = "CREATE_MERCHANT_FAILED", e.CREATE_STORE_FAILED = "CREATE_STORE_FAILED", e.ACCOUNT_ALREADY_EXISTS = "ACCOUNT_ALREADY_EXISTS"
        }(e.ApplicationEC || (e.ApplicationEC = {}))
    }(t.net_rpc_proto_applicationerrorcode || (t.net_rpc_proto_applicationerrorcode = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, o = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(4), c = function () {
        function e() {
        }

        return e.prototype.withMonitoring = function (e, t, n) {
            return r(this, void 0, void 0, function () {
                return o(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, i.default.meterAsync("NetworkMonitor", e, t, n)];
                        case 1:
                            return [2, r.sent().result()]
                    }
                })
            })
        }, e
    }();
    t.NetworkMonitor = c
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(14);
    t.DEFAULT_GATOR_ENDPOINT = {url_path: "https://gator.stripe.com", port: 443};
    var c = function (e) {
        function n(n, r, o) {
            return void 0 === o && (o = t.DEFAULT_GATOR_ENDPOINT), e.call(this, "GatorService", n, o, r) || this
        }

        return o(n, e), n.prototype.reportEvent = function (e) {
            return this.rpc("reportEvent", e)
        }, n.prototype.reportTrace = function (e) {
            return this.rpc("reportTrace", e)
        }, n
    }(i.default);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }), i = this && this.__assign || function () {
        return (i = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    }, c = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, a = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "terminal/readers", t, r) || this;
            return o.connectionTokenMgr = n, o
        }

        return o(t, e), t.prototype.discoverReaders = function (t) {
            return c(this, void 0, void 0, function () {
                var n;
                return a(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.connectionTokenMgr.getActiveCredentials()];
                        case 1:
                            return n = r.sent(), [2, e.prototype.queryResource.call(this, i({}, t, {
                                device_type: "verifone_P400",
                                limit: 100
                            }), n)]
                    }
                })
            })
        }, t
    }(n(24).default);
    t.default = s
}, function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    }, o = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, i = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var c = n(2), a = n(4), s = n(27), u = n(3), l = n(9), p = n(19), f = n(11), h = n(0), d = n(18), y = n(6),
        _ = n(17), v = n(13).net_rpc_proto_rpc.RpcEC, E = 4443, b = "device.stripe-terminal-local-reader.net";

    function m(e, t) {
        return t.id === f.SimulatedDiscoveryMethod.SIMULATED_ID ? {
            url_path: e,
            port: null
        } : {url_path: "https://" + t.ip_address.replace(/\./g, "-") + "." + b, port: E}
    }

    function T(e) {
        return e instanceof s.default ? e.rpcEc() === v.NETWORK_UNAVAILABLE ? new _.default(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.READER_CONNECTION_ERROR)) : new _.default(e.error.message) : (a.default.count("JackRabbitConnectionMgr", "UnexpectedNonRpcError", e.toString(), "ERROR"), new _.default(e.toString()))
    }

    t.rpcEndpointFromReader = m, t.rabbitErrorMapper = T;
    var R = "https://b5rxknncfl.execute-api.us-west-1.amazonaws.com/prod", C = function () {
        function e(e, t, n, r, o) {
            void 0 === r && (r = R), void 0 === o && (o = 6e4), this.deviceFingerprint = e, this.connectionTokenMgr = t, this.jackRabbitRpcServiceFactory = n, this.simulatorBaseUrl = r, this.heartbeatIntervalMs = o, this.sessionToken = null, this.jackRabbitRpcClient = null, this.synchronizer = new p.Synchronizer, this.activeConnection = null, this.onUnexpectedDisconnectHandler = function () {
            }
        }

        return e.prototype.setOnUnexpectedDisconnectHandler = function (e) {
            this.onUnexpectedDisconnectHandler = e
        }, e.prototype.connect = function (e, t) {
            return o(this, void 0, void 0, function () {
                var n, r, o, c, s, p, f, v = this;
                return i(this, function (i) {
                    switch (i.label) {
                        case 0:
                            u.AssertUtils.assert(!this.activeConnection, h.ErrorCodes.ALREADY_CONNECTED), n = e, r = m(this.simulatorBaseUrl, n), o = this.jackRabbitRpcServiceFactory(r), i.label = 1;
                        case 1:
                            return i.trys.push([1, 4, , 5]), [4, this.connectionTokenMgr.getActiveCredentials()];
                        case 2:
                            return c = i.sent(), [4, this.activateTerminal(c, o, t)];
                        case 3:
                            if (s = i.sent(), p = d.tryOrDefault(function () {
                                return s.version.client_version
                            }, "0.0.0"), !y.isVersionCompatible(l.PackageUtils.getProjectConfig().minRabbitVersion, p)) throw new _.default(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.INVALID_READER_VERSION));
                            return a.default.count("JackRabbitConnectionMgr", "ReaderVersion", p, "OK"), a.default.count("JackRabbitConnectionMgr", "ReaderType", d.tryOrDefault(function () {
                                return s.version.client_type
                            }, "Unknown"), "OK"), this.sessionToken = s.session_token, this.jackRabbitRpcClient = o, this.activeConnection = {
                                posId: this.deviceFingerprint,
                                reader: n,
                                sdkRpcSession: s.sdk_rpc_session,
                                heartbeatIntervalId: setInterval(function () {
                                    return v.terminalHeartbeat()
                                }, this.heartbeatIntervalMs)
                            }, [2, this.activeConnection];
                        case 4:
                            throw f = i.sent(), this.clearSession(), f;
                        case 5:
                            return [2]
                    }
                })
            })
        }, e.prototype.getActiveConnection = function () {
            return this.activeConnection
        }, e.prototype.disconnect = function () {
            return this.clearSession(), Promise.resolve({})
        }, e.prototype.rabbitCallAuthenticated = function (e) {
            return o(this, void 0, void 0, function () {
                return i(this, function (t) {
                    return u.AssertUtils.assert(null != this.jackRabbitRpcClient && null != this.sessionToken, h.ErrorCodes.NO_ESTABLISHED_CONNECTION), [2, this.rabbitCall(this.jackRabbitRpcClient, e, this.sessionToken)]
                })
            })
        }, e.prototype.rabbitCall = function (e, t, n) {
            return o(this, void 0, void 0, function () {
                var r, c = this;
                return i(this, function (a) {
                    return r = function () {
                        return o(c, void 0, void 0, function () {
                            var r;
                            return i(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, t(e, n)];
                                    case 1:
                                        return [2, o.sent()];
                                    case 2:
                                        throw r = o.sent(), this.handleErrors(r), T(r);
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, [2, this.synchronizer.synchronize(r)]
                })
            })
        }, e.prototype.clearSession = function () {
            this.activeConnection && clearInterval(this.activeConnection.heartbeatIntervalId), this.activeConnection = null, this.connectionTokenMgr.invalidateConnectionToken(), this.sessionToken = null, this.jackRabbitRpcClient = null
        }, e.prototype.handleErrors = function (e) {
            if (e instanceof s.default) {
                var t = e.errorType() === s.RpcErrorType.RPC && s.isRetriableRpcNetworkError(e.rpcEc()),
                    n = e.errorType() === s.RpcErrorType.APPLICATION && s.isRpcUnauthenticatedError(e.applicationEc());
                if (n && c.default.error(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.AUTHENTICATION_ERROR)), t && c.default.error(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.READER_CONNECTION_INTERRUPTED)), n || t) {
                    var r = !!this.activeConnection;
                    this.clearSession(), r && this.onUnexpectedDisconnectHandler({error: {message: e.error.message}})
                }
            }
        }, e.prototype.terminalHeartbeat = function () {
            return o(this, void 0, void 0, function () {
                return i(this, function (e) {
                    return [2, this.rabbitCallAuthenticated(function (e, t) {
                        return e.terminalHeartbeat({}, t)
                    })]
                })
            })
        }, e.prototype.activateTerminal = function (e, t, n) {
            return o(this, void 0, void 0, function () {
                var o;
                return i(this, function (i) {
                    return o = r({}, n, {
                        pos_activation_token: e,
                        store_name: "empty",
                        pos_device_id: this.deviceFingerprint,
                        pos_software_info: {
                            pos_type: l.PackageUtils.getProjectName(),
                            sdk_version: l.PackageUtils.getVersion()
                        }
                    }), [2, this.rabbitCall(t, function () {
                        return t.activateTerminal(o)
                    })]
                })
            })
        }, e
    }();
    t.default = C
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        !function (e) {
            e.REUSABLE_CARD_PENDING = "REUSABLE_CARD_PENDING", e.REUSABLE_CARD_CANCELED = "REUSABLE_CARD_CANCELED"
        }(e.ReusableCardRequestStatus || (e.ReusableCardRequestStatus = {})), function (e) {
            !function (e) {
                e.SOURCE_PENDING = "SOURCE_PENDING", e.SOURCE_CANCELED = "SOURCE_CANCELED"
            }(e.SourceRequestStatus || (e.SourceRequestStatus = {}))
        }(e.QueryCollectSourceResponse || (e.QueryCollectSourceResponse = {})), function (e) {
            !function (e) {
                e.PAYMENT_PENDING = "PAYMENT_PENDING", e.PAYMENT_CANCELED = "PAYMENT_CANCELED"
            }(e.PaymentRequestStatus || (e.PaymentRequestStatus = {}))
        }(e.QueryPaymentMethodResponse || (e.QueryPaymentMethodResponse = {}))
    }(t.rabbit_api_jackrabbitservice || (t.rabbit_api_jackrabbitservice = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    }, o = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(c, a)
            }

            s((r = r.apply(e, t || [])).next())
        })
    }, i = this && this.__generator || function (e, t) {
        var n, r, o, i, c = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(i) {
            return function (a) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, a])
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var c = n(18), a = n(8), s = n(33),
        u = s.rabbit_api_jackrabbitservice.QueryPaymentMethodResponse.PaymentRequestStatus,
        l = s.rabbit_api_jackrabbitservice.ReusableCardRequestStatus, p = n(5), f = n(23), h = n(0), d = n(17),
        y = function () {
            function e(e, t, n) {
                void 0 === n && (n = 400), this.deviceFingerprint = e, this.connectionMgr = t, this.querySettleIntervaMs = n, this.transactionContext = null
            }

            return e.hasPaymentMethod = function (e) {
                return null != e.payment_method
            }, e.hasReusableCard = function (e) {
                return null != e.reusable_card_method
            }, e.hasUserCancelledCollectPayment = function (e) {
                return c.tryOrDefault(function () {
                    return e.payment_status === u.PAYMENT_CANCELED
                }, !1)
            }, e.prototype.setOnUnexpectedDisconnectHandler = function (e) {
                this.connectionMgr.setOnUnexpectedDisconnectHandler(e)
            }, e.prototype.connect = function (e, t) {
                return this.connectionMgr.connect(e, t)
            }, e.prototype.getConnectedReader = function () {
                var e = this.connectionMgr.getActiveConnection();
                return e ? e.reader : null
            }, e.prototype.disconnect = function () {
                return this.connectionMgr.getActiveConnection() && this.clearReaderDisplay(), this.connectionMgr.disconnect()
            }, e.prototype.setReaderDisplay = function (e) {
                return o(this, void 0, void 0, function () {
                    var t;
                    return i(this, function (n) {
                        return this.maybeSetTransactionContext(), t = r({}, e, {transaction_context: this.transactionContext}), [2, this.connectionMgr.rabbitCallAuthenticated(function (e, n) {
                            return e.setReaderDisplay(t, n)
                        })]
                    })
                })
            }, e.prototype.clearReaderDisplay = function () {
                return o(this, void 0, void 0, function () {
                    var e, t;
                    return i(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return this.maybeSetTransactionContext(), e = {transaction_context: this.transactionContext}, [4, this.connectionMgr.rabbitCallAuthenticated(function (t, n) {
                                    return t.clearReaderDisplay(e, n)
                                })];
                            case 1:
                                return t = n.sent(), this.clearTransactionContext(), [2, t]
                        }
                    })
                })
            }, e.prototype.collectPaymentMethod = function (e) {
                return this.maybeSetTransactionContext(), this.collectAndQueryUntilPaymentMethod(e)
            }, e.prototype.confirmPayment = function (e) {
                var t = this;
                this.maybeSetTransactionContext();
                var n = r({}, e, {transaction_context: this.transactionContext});
                return this.connectionMgr.rabbitCallAuthenticated(function (e, t) {
                    return e.confirmPayment(n, t)
                }).then(function (e) {
                    return t.clearTransactionContext(), e
                }, function (e) {
                    return t.clearTransactionContext(), Promise.reject(e)
                })
            }, e.prototype.readReusableCard = function (t) {
                var n = this, r = new f.Cancelable({
                    execute: function (r) {
                        return {
                            result: o(n, void 0, void 0, function () {
                                var n;
                                return i(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, this.connectionMgr.rabbitCallAuthenticated(function (e, n) {
                                                return e.collectReusableCard(t, n)
                                            })];
                                        case 1:
                                            o.sent(), n = {}, o.label = 2;
                                        case 2:
                                            return e.hasReusableCard(n) ? [3, 5] : [4, a.sleep(this.querySettleIntervaMs)];
                                        case 3:
                                            if (o.sent(), r()) throw new d.default(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.CANCELED));
                                            if (n.reusable_card_status === l.REUSABLE_CARD_CANCELED) throw new d.default(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.CANCELED_BY_CUSTOMER));
                                            return [4, this.connectionMgr.rabbitCallAuthenticated(function (e, t) {
                                                return e.queryCollectReusableCard({}, t)
                                            })];
                                        case 4:
                                            return n = o.sent(), [3, 2];
                                        case 5:
                                            return [2, n.reusable_card_method]
                                    }
                                })
                            })
                        }
                    }, onCancel: function (e) {
                        n.connectionMgr.rabbitCallAuthenticated(function (e, t) {
                            return e.cancelCollectReusableCard({}, t)
                        })
                    }
                });
                return f.Cancelable.chainCancelable(r, function (e) {
                    return new f.Cancelable({
                        execute: function () {
                            return {
                                result: n.connectionMgr.rabbitCallAuthenticated(function (t, n) {
                                    return t.confirmReusableCard({reusable_card_method: e}, n)
                                })
                            }
                        }
                    })
                })
            }, e.prototype.maybeSetTransactionContext = function (e) {
                void 0 === e && (e = {}), null == this.transactionContext && (this.transactionContext = {
                    terminal_id: this.deviceFingerprint,
                    start_time: (new Date).valueOf(),
                    operator_id: e.cashierName || this.deviceFingerprint,
                    transaction_id: e.transactionId || Math.floor(1e5 * Math.random()) + ""
                }, p.default.setTransactionId(this.transactionContext.transaction_id))
            }, e.prototype.clearTransactionContext = function () {
                p.default.clearTransactionId(), this.transactionContext = null
            }, e.prototype.cancelCollectPaymentMethod = function (e) {
                return o(this, void 0, void 0, function () {
                    var t;
                    return i(this, function (n) {
                        return t = {transaction_context: e}, [2, this.connectionMgr.rabbitCallAuthenticated(function (e, n) {
                            return e.cancelCollectPaymentMethod(t, n)
                        })]
                    })
                })
            }, e.prototype.collectAndQueryUntilPaymentMethod = function (t) {
                var n = this, c = !1, s = this.transactionContext, u = r({}, t, {transaction_context: s});
                return {
                    result: o(n, void 0, void 0, function () {
                        var t, n;
                        return i(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.connectionMgr.rabbitCallAuthenticated(function (e, t) {
                                        return e.collectPaymentMethod(u, t)
                                    })];
                                case 1:
                                    return r.sent(), t = {transaction_context: s}, [4, this.queryPaymentMethod(t)];
                                case 2:
                                    n = r.sent(), r.label = 3;
                                case 3:
                                    return e.hasPaymentMethod(n) ? [3, 6] : [4, a.sleep(this.querySettleIntervaMs)];
                                case 4:
                                    if (r.sent(), c) throw new d.default(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.CANCELED));
                                    if (e.hasUserCancelledCollectPayment(n)) throw new d.default(h.ErrorTemplates.generateErrorMessage(h.ErrorCodes.CANCELED_BY_CUSTOMER));
                                    return [4, this.queryPaymentMethod(t)];
                                case 5:
                                    return n = r.sent(), [3, 3];
                                case 6:
                                    return [2, n.payment_method]
                            }
                        })
                    }), cancel: function () {
                        return c = !0, n.cancelCollectPaymentMethod(s)
                    }
                }
            }, e.prototype.queryPaymentMethod = function (e) {
                return o(this, void 0, void 0, function () {
                    return i(this, function (t) {
                        return [2, this.connectionMgr.rabbitCallAuthenticated(function (t, n) {
                            return t.queryPaymentMethod(e, n)
                        })]
                    })
                })
            }, e
        }();
    t.default = y
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(19), c = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.synchronizer = new i.Synchronizer, t
        }

        return o(t, e), t.prototype.rpc = function (t, n, r, o) {
            var i = this;
            return this.synchronizer.synchronize(function () {
                return e.prototype.rpc.call(i, t, n, r, o)
            })
        }, t
    }(n(14).default);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function (e) {
        function t(t, n, r) {
            return e.call(this, "JackRabbitService", t, r, n) || this
        }

        return o(t, e), t.prototype.getUntracedMethods = function () {
            return ["queryPaymentMethod", "queryCollectSource"]
        }, t.prototype.activateTerminal = function (e) {
            return this.rpc("activateTerminal", e, null, {isRetriable: !1})
        }, t.prototype.terminalHeartbeat = function (e, t) {
            return this.rpc("terminalHeartbeat", e, t)
        }, t.prototype.setReaderDisplay = function (e, t) {
            return this.rpc("setReaderDisplay", e, t)
        }, t.prototype.clearReaderDisplay = function (e, t) {
            return this.rpc("clearReaderDisplay", e, t)
        }, t.prototype.collectPaymentMethod = function (e, t) {
            return this.rpc("collectPaymentMethod", e, t)
        }, t.prototype.queryPaymentMethod = function (e, t) {
            return this.rpc("queryPaymentMethod", e, t)
        }, t.prototype.confirmPayment = function (e, t) {
            return this.rpc("confirmPayment", e, t)
        }, t.prototype.cancelCollectPaymentMethod = function (e, t) {
            return this.rpc("cancelCollectPaymentMethod", e, t)
        }, t.prototype.collectReusableCard = function (e, t) {
            return this.rpc("collectReusableCard", e, t)
        }, t.prototype.queryCollectReusableCard = function (e, t) {
            return this.rpc("queryCollectReusableCard", e, t)
        }, t.prototype.confirmReusableCard = function (e, t) {
            return this.rpc("confirmReusableCard", e, t)
        }, t.prototype.cancelCollectReusableCard = function (e, t) {
            return this.rpc("cancelCollectReusableCard", e, t)
        }, t
    }(n(35).default);
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n(10);
    var r = n(4), o = n(2), i = n(8), c = n(1), a = n(0), s = n(12);
    var u = function () {
        function e(e, t) {
            void 0 === e && (e = null), void 0 === t && (t = null), this.requestTimeoutMs = e, this.fetchFn = t
        }

        return e.prototype.get = function (e, t, n) {
            void 0 === n && (n = new Headers);
            var r = {method: "GET", headers: n}, o = e + "?" + Object.keys(t).filter(function (e) {
                return void 0 != t[e]
            }).map(function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }).join("&");
            return this.doFetch(o, r)
        }, e.prototype.post = function (e, t, n) {
            void 0 === n && (n = new Headers), n.append("Content-Type", "application/json");
            var r = {method: "POST", body: JSON.stringify(t), headers: n};
            return this.doFetch(e, r)
        }, e.prototype.postFormEncoded = function (e, t, n) {
            void 0 === n && (n = new Headers), n.append("Content-Type", "application/x-www-form-urlencoded");
            var r = {method: "POST", body: t.toString(), headers: n};
            return this.doFetch(e, r)
        }, e.prototype.doFetch = function (e, t) {
            var n = this, u = [this.fetchFn ? this.fetchFn(e, t) : fetch(e, t)];
            if (this.requestTimeoutMs) {
                var l = i.timeout(function () {
                    return n.createFakeTimeoutResponse(e)
                }, this.requestTimeoutMs);
                u.push(l)
            }
            return Promise.race(u).then(function (e) {
                return 408 === e.status && o.default.error(a.ErrorTemplates.generateErrorMessage(a.ErrorCodes.NETWORK_TIMEOUT)), e.ok ? e.json() : function (e, t) {
                    return function (e) {
                        return e.text()
                    }(t).then(function (n) {
                        throw r.default.count("HttpClient", e, "HttpFailure", "ERROR", t.status + ""), new s.default(t, n)
                    })
                }(t.method, e)
            }, function (e) {
                throw new c.IxApplicationError(a.ErrorTemplates.generateError(a.ErrorCodes.NETWORK_TIMEOUT))
            })
        }, e.prototype.createFakeTimeoutResponse = function (e) {
            return new Response(a.ErrorTemplates.generateErrorMessage(a.ErrorCodes.NETWORK_TIMEOUT), {
                status: 408,
                statusText: "Client Timeout"
            })
        }, e
    }();
    t.default = u
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(7), c = n(20), a = n(9);
    n(10);
    var s = n(5);

    function u(e) {
        return {event_name: e.event, elapsed_ms: e.duration}
    }

    function l(e) {
        var t;
        return ((t = {})[i.LogLevel.DEBUG] = 0, t[i.LogLevel.INFO] = 1, t[i.LogLevel.WARN] = 2, t[i.LogLevel.ERROR] = 3, t)[e]
    }

    function p(e) {
        return {
            log_level: l(e.log_level),
            tag: e.tag,
            message: "text" === e.type ? e.message : void 0,
            exception: "exception" === e.type ? e.exception : void 0
        }
    }

    function f(e) {
        return {
            time_offset_ms: e.time_offset_ms,
            log_point: "log" === e.type ? p(e.log) : void 0,
            meter_point: "meter" === e.type ? u(e.meter) : void 0
        }
    }

    function h(e) {
        return {
            id: (e.parent_trace_id ? e.parent_trace_id + s.default.TRACE_ID_SEPARATOR : "") + e.id,
            request_info: {user_agent: navigator.userAgent},
            start_time_ms: e.start_time_ms,
            total_time_ms: e.total_time_ms,
            service: e.service,
            method: e.method,
            request: e.request,
            response: "success" === e.type ? e.response : void 0,
            exception: "exception" === e.type ? e.exception : void 0,
            version_info: e.version_info,
            traces: e.trace_points.map(function (e) {
                return f(e)
            })
        }
    }

    t.mapMeterEventToMeterPoint = u, t.mapLogLevelToNumber = l, t.mapLogToLogPoint = p, t.mapTracePointToTracePointPb = f, t.mapTraceToTracePb = h;
    var d = function (e) {
        function t(t, n, r) {
            void 0 === r && (r = 9e4);
            var o = e.call(this, r) || this;
            return o.posDeviceId = t, o.gator = n, o
        }

        return o(t, e), t.prototype.doFlush = function (e) {
            var t = this, n = e.map(function (e) {
                return h(e)
            }).map(function (e) {
                return {origin_role: a.PackageUtils.getProjectName(), origin_id: t.posDeviceId, trace: e}
            });
            return this.gator.reportTrace({proxy_traces: n})
        }, t
    }(c.PeriodicFlusher);
    t.GatorTraceCollector = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        !function (e) {
            !function (e) {
                e.OK = "OK", e.ERROR = "ERROR"
            }(e.Result || (e.Result = {}))
        }(e.EventResultPb || (e.EventResultPb = {}))
    }(t.api_gator_gatorservice || (t.api_gator_gatorservice = {}))
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(20), c = n(39).api_gator_gatorservice.EventResultPb, a = n(9);

    function s(e) {
        return {
            domain: e.domain,
            scope: e.scope,
            event: e.event,
            result: "OK" === e.result ? c.Result.OK : c.Result.ERROR,
            outcome: e.error_code,
            duration: "meter" === e.type ? e.duration : void 0,
            measurement: "gauge" === e.type ? e.measurement : void 0
        }
    }

    t.mapEventToEventResultPb = s;
    var u = function (e) {
        function t(t, n, r) {
            var o = e.call(this, r) || this;
            return o.posDeviceId = t, o.gator = n, o
        }

        return o(t, e), t.prototype.doFlush = function (e) {
            var t = this, n = e.map(function (e) {
                return {origin_role: a.PackageUtils.getProjectName(), origin_id: t.posDeviceId, event: s(e)}
            });
            return this.gator.reportEvent({proxy_events: n})
        }, t
    }(i.PeriodicFlusher);
    t.GatorEventCollector = u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e() {
        }

        return e.prototype.collect = function (e) {
            console.log(e)
        }, e
    }();
    t.ConsoleCollector = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(7);
    n(10);
    var o = function () {
        function e(e) {
            void 0 === e && (e = console), this.stdOut = e
        }

        return e.prototype.collect = function (e) {
            e.log_level !== r.LogLevel.WARN && e.log_level !== r.LogLevel.ERROR || this.stdOut.warn(e.message || e.exception)
        }, e
    }();
    t.DeveloperFriendlyLogCollector = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(42), o = n(41), i = n(40), c = n(38), a = n(2), s = n(4), u = n(5), l = n(37), p = n(3), f = n(6),
        h = n(11), d = n(36), y = n(34), _ = n(32), v = n(25), E = n(31), b = n(26), m = n(16), T = n(30), R = n(29),
        C = n(15), g = n(0);
    t.create = function (e) {
        return O.create(e)
    };
    var O = function () {
        function e() {
        }

        return e.create = function (e) {
            p.AssertUtils.checkUserGivenArg("function" == typeof e.onFetchConnectionToken, g.ErrorCodes.INVALID_ON_FETCH_CONNECTION_TOKEN), p.AssertUtils.checkUserGivenArg("function" == typeof e.onUnexpectedReaderDisconnect, g.ErrorCodes.INVALID_ON_UNEXPECTED_READER_DISCONNECT), p.AssertUtils.checkUserGivenArg(!e.onConnectionStatusChange || "function" == typeof e.onConnectionStatusChange, g.ErrorCodes.INVALID_ON_CONNECTION_STATUS_CHANGE), p.AssertUtils.checkUserGivenArg(!e.onPaymentStatusChange || "function" == typeof e.onPaymentStatusChange, g.ErrorCodes.INVALID_ON_PAYMENT_STATUS_CHANGE);
            var t = new l.default, n = f.getDeviceInfo(), O = new R.NetworkMonitor,
                A = [new r.DeveloperFriendlyLogCollector, u.default], w = [], N = [s.default];
            if (e.logLevel === m.OutputLogLevel.VERBOSE) {
                var I = new o.ConsoleCollector;
                A.push(I), w.push(I), N.push(I), console.log("Stripe Terminal: Pos Device ID is " + n.device_uuid + ". Please send this when requesting assistance from support for fastest help. Happy Coding :)")
            }
            if (e.devMode !== m.DevMode.DEV) {
                var P = new T.default(t, O), S = new i.GatorEventCollector(n.device_uuid, P);
                S.start(), w.push(S);
                var D = new c.GatorTraceCollector(n.device_uuid, P);
                D.start(), N.push(D)
            }
            a.default.setCollectors(A), s.default.setCollectors(w), u.default.setCollectors(N);
            var M = new C.default(e.onFetchConnectionToken, O), L = new E.default(t, M, O),
                x = new h.DiscoveryMethodFactory(L), k = new h.default(x), U = new l.default(2e4),
                j = new _.default(n.device_uuid, M, function (e) {
                    return new d.default(U, O, e)
                }, e.simulatorBaseUrl), V = new y.default(n.device_uuid, j), F = new v.default(t, M, O);
            return new b.default(k, V, e, F, M)
        }, e
    }();
    t.TerminalFactory = O
}, function (e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function (e, t) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function (e) {
        function t(n, r, o) {
            var i = e.call(this, {message: n, request_id: r, code: o}) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }

        return o(t, e), t.fromHttpError = function (e) {
            var n = {message: e.error.message, code: e.error.code};
            try {
                n = JSON.parse(e.responseBodyText).error
            } catch (e) {
            }
            var r = e.response.headers ? e.response.headers.get("request-id") : "";
            return new t(n.message, r, n.code)
        }, t
    }(n(1).IxApplicationError);
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(5);
    t.TraceMethod = function (e) {
        return function (t, n, o) {
            var i = o.value;
            return o.value = r.default.traceFn(i, t.constructor.name, n, e), o
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e) {
            this.storageBin = e
        }

        return e.prototype.getDeviceFingerprint = function () {
            return this.storageBin.getValue() || this.storageBin.setValue("pos-" + Math.random().toString(36).substring(2)), this.storageBin.getValue()
        }, e
    }();
    t.DeviceFingerprinter = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e) {
            this.binName = e
        }

        return e.isEnabled = function () {
            try {
                var e = window.localStorage, t = "__storage_test__";
                return e.setItem(t, t), e.removeItem(t), !0
            } catch (e) {
                return !1
            }
        }, e.prototype.setValue = function (e) {
            localStorage.setItem(this.binName, JSON.stringify(e))
        }, e.prototype.getValue = function () {
            var e = localStorage.getItem(this.binName);
            return null == e ? e : JSON.parse(e)
        }, e.prototype.clearValue = function () {
            localStorage.setItem(this.binName, null)
        }, e
    }();
    t.LocalStorageBin = r;
    var o = function () {
        function e(e) {
            this.binName = e
        }

        return e.isEnabled = function () {
            return !0
        }, e.prototype.setValue = function (t) {
            e.storageMap[this.binName] = t
        }, e.prototype.getValue = function () {
            return e.storageMap[this.binName] || null
        }, e.prototype.clearValue = function () {
            e.storageMap[this.binName] = null
        }, e.storageMap = {}, e
    }();
    t.InMemoryStorageBin = o;
    var i = function () {
        function e(e) {
            void 0 === e && (e = "pos"), this.namespace = e
        }

        return e.prototype.getStorageBin = function (e) {
            var t = this.namespace + "-" + e;
            return r.isEnabled() ? new r(t) : new o(t)
        }, e
    }();
    t.StorageMgr = i
}, function (e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function c() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : c
        } catch (e) {
            r = c
        }
    }();
    var s, u = [], l = !1, p = -1;

    function f() {
        l && s && (l = !1, s.length ? u = s.concat(u) : p = -1, u.length && h())
    }

    function h() {
        if (!l) {
            var e = a(f);
            l = !0;
            for (var t = u.length; t;) {
                for (s = u, u = []; ++p < t;) s && s[p].run();
                p = -1, t = u.length
            }
            s = null, l = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function d(e, t) {
        this.fun = e, this.array = t
    }

    function y() {
    }

    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new d(e, t)), 1 !== u.length || l || a(h)
    }, d.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t, n) {
    (function (t) {
        function n(e) {
            var t = i([["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/], ["Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]]).filter(function (t) {
                return t.rule && t.rule.test(e)
            })[0];
            return t ? t.name : null
        }

        function r() {
            return void 0 !== t && t.version && {name: "node", version: t.version.slice(1), os: t.platform}
        }

        function o(e) {
            var t = i([["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["vivaldi", /Vivaldi\/([0-9\.]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)$/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FBAV\/([0-9\.]+)/], ["instagram", /Instagram\ ([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/]]);
            if (!e) return null;
            var r = t.map(function (t) {
                var n = t.rule.exec(e), r = n && n[1].split(/[._]/).slice(0, 3);
                return r && r.length < 3 && (r = r.concat(1 == r.length ? [0, 0] : [0])), n && {
                    name: t.name,
                    version: r.join(".")
                }
            }).filter(Boolean)[0] || null;
            return r && (r.os = n(e)), /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(e) && ((r = r || {}).bot = !0), r
        }

        function i(e) {
            return e.map(function (e) {
                return {name: e[0], rule: e[1]}
            })
        }

        e.exports = {
            detect: function () {
                return "undefined" != typeof navigator ? o(navigator.userAgent) : r()
            }, detectOS: n, getNodeVersion: r, parseUserAgent: o
        }
    }).call(this, n(48))
}, function (e) {
    e.exports = {
        name: "pos-js",
        pos: {minRabbitVersion: "3.0.0.19"},
        version: "1.0.0",
        license: "MIT",
        scripts: {
            build: "tsc",
            "build:bundle": "webpack --config webpack.config.js",
            protos: "../scripts/get_latest_bamboo_model.py",
            test: "npm run test:unit && npm run test:integration",
            "test:unit": "jest --config 'otter/test/jest.config.json'",
            "test:integration": "./scripts/run_integration_tests.js",
            deploy: "npm run test:integration && apiori-statics deploy pos-js-v1",
            "prettier:base": "prettier --parser typescript --single-quote",
            "prettier:check": 'npm run prettier:base -- --list-different "otter/app/**/*.{ts,js}"',
            "prettier:write": 'npm run prettier:base -- --write "otter/app/**/*.{ts,js}"'
        },
        private: !0,
        dependencies: {"detect-browser": "^3.0.0", "whatwg-fetch": "^2.0.4"},
        devDependencies: {
            "@types/detect-browser": "^2.0.1",
            "@types/jest": "^22.0.1",
            "@types/node": "7.0.5",
            husky: "^1.3.1",
            jest: "^23.0.1",
            prettier: "^1.16.4",
            stripe: "^6.23.0",
            "ts-jest": "^22.0.1",
            "ts-loader": "^4.1.0",
            "ts-node": "3.2.0",
            tslint: "5.5.0",
            typescript: "^3.3.3",
            webpack: "^4.3.0",
            "webpack-cli": "^2.0.13"
        },
        husky: {hooks: {"pre-push": "echo 'Checking Formatting..' && npm run prettier:check"}}
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        !function (e) {
            e[e.PROD = 0] = "PROD", e[e.DEV = 1] = "DEV"
        }(e.RunMode || (e.RunMode = {})), function (e) {
            !function (e) {
                e.JS_SDK = "JS_SDK"
            }(e.ClientType || (e.ClientType = {}))
        }(e.VersionInfoPb || (e.VersionInfoPb = {})), function (e) {
            !function (e) {
                e.INVALID = "INVALID", e.POS = "POS", e.READER = "READER"
            }(e.DeviceClass || (e.DeviceClass = {}))
        }(e.DeviceInfo || (e.DeviceInfo = {}))
    }(t.model_common_commonmodel || (t.model_common_commonmodel = {}))
}, function (e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(14);
    t.RpcEndpoint = o.RpcEndpoint;
    var i = n(26);
    t.Terminal = i.default, r(n(11)), r(n(43)), r(n(15)), r(n(16)), r(n(22))
}]);

export default StripeTerminal;