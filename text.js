var ah = e => {
    throw TypeError(e)
}
;
var Il = (e, t, n) => t.has(e) || ah("Cannot " + n);
var R = (e, t, n) => (Il(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? ah("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (Il(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , je = (e, t, n) => (Il(e, t, "access private method"),
n);
var vs = (e, t, n, r) => ({
    set _(i) {
        H(e, t, i, n)
    },
    get _() {
        return R(e, t, r)
    }
});
function p1(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Pg(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var kg = {
    exports: {}
}
  , Za = {}
  , Rg = {
    exports: {}
}
  , X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs = Symbol.for("react.element")
  , m1 = Symbol.for("react.portal")
  , g1 = Symbol.for("react.fragment")
  , y1 = Symbol.for("react.strict_mode")
  , v1 = Symbol.for("react.profiler")
  , x1 = Symbol.for("react.provider")
  , w1 = Symbol.for("react.context")
  , S1 = Symbol.for("react.forward_ref")
  , C1 = Symbol.for("react.suspense")
  , E1 = Symbol.for("react.memo")
  , T1 = Symbol.for("react.lazy")
  , lh = Symbol.iterator;
function b1(e) {
    return e === null || typeof e != "object" ? null : (e = lh && e[lh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ag = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Mg = Object.assign
  , Ng = {};
function Bi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ng,
    this.updater = n || Ag
}
Bi.prototype.isReactComponent = {};
Bi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Bi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Lg() {}
Lg.prototype = Bi.prototype;
function hd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ng,
    this.updater = n || Ag
}
var pd = hd.prototype = new Lg;
pd.constructor = hd;
Mg(pd, Bi.prototype);
pd.isPureReactComponent = !0;
var uh = Array.isArray
  , jg = Object.prototype.hasOwnProperty
  , md = {
    current: null
}
  , Dg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Og(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            jg.call(t, r) && !Dg.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: rs,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: md.current
    }
}
function P1(e, t) {
    return {
        $$typeof: rs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function gd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === rs
}
function k1(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ch = /\/+/g;
function Vl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? k1("" + e.key) : t.toString(36)
}
function Ks(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case rs:
            case m1:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + Vl(s, 0) : r,
        uh(i) ? (n = "",
        e != null && (n = e.replace(ch, "$&/") + "/"),
        Ks(i, t, n, "", function(u) {
            return u
        })) : i != null && (gd(i) && (i = P1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ch, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    uh(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + Vl(o, a);
            s += Ks(o, t, n, l, i)
        }
    else if (l = b1(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + Vl(o, a++),
            s += Ks(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function xs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ks(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function R1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ge = {
    current: null
}
  , Gs = {
    transition: null
}
  , A1 = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: Gs,
    ReactCurrentOwner: md
};
function Ig() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: xs,
    forEach: function(e, t, n) {
        xs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return xs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return xs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!gd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = Bi;
X.Fragment = g1;
X.Profiler = v1;
X.PureComponent = hd;
X.StrictMode = y1;
X.Suspense = C1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A1;
X.act = Ig;
X.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Mg({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = md.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            jg.call(t, l) && !Dg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: rs,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
X.createContext = function(e) {
    return e = {
        $$typeof: w1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: x1,
        _context: e
    },
    e.Consumer = e
}
;
X.createElement = Og;
X.createFactory = function(e) {
    var t = Og.bind(null, e);
    return t.type = e,
    t
}
;
X.createRef = function() {
    return {
        current: null
    }
}
;
X.forwardRef = function(e) {
    return {
        $$typeof: S1,
        render: e
    }
}
;
X.isValidElement = gd;
X.lazy = function(e) {
    return {
        $$typeof: T1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: R1
    }
}
;
X.memo = function(e, t) {
    return {
        $$typeof: E1,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
X.startTransition = function(e) {
    var t = Gs.transition;
    Gs.transition = {};
    try {
        e()
    } finally {
        Gs.transition = t
    }
}
;
X.unstable_act = Ig;
X.useCallback = function(e, t) {
    return Ge.current.useCallback(e, t)
}
;
X.useContext = function(e) {
    return Ge.current.useContext(e)
}
;
X.useDebugValue = function() {}
;
X.useDeferredValue = function(e) {
    return Ge.current.useDeferredValue(e)
}
;
X.useEffect = function(e, t) {
    return Ge.current.useEffect(e, t)
}
;
X.useId = function() {
    return Ge.current.useId()
}
;
X.useImperativeHandle = function(e, t, n) {
    return Ge.current.useImperativeHandle(e, t, n)
}
;
X.useInsertionEffect = function(e, t) {
    return Ge.current.useInsertionEffect(e, t)
}
;
X.useLayoutEffect = function(e, t) {
    return Ge.current.useLayoutEffect(e, t)
}
;
X.useMemo = function(e, t) {
    return Ge.current.useMemo(e, t)
}
;
X.useReducer = function(e, t, n) {
    return Ge.current.useReducer(e, t, n)
}
;
X.useRef = function(e) {
    return Ge.current.useRef(e)
}
;
X.useState = function(e) {
    return Ge.current.useState(e)
}
;
X.useSyncExternalStore = function(e, t, n) {
    return Ge.current.useSyncExternalStore(e, t, n)
}
;
X.useTransition = function() {
    return Ge.current.useTransition()
}
;
X.version = "18.3.1";
Rg.exports = X;
var w = Rg.exports;
const j = Pg(w)
  , Vg = p1({
    __proto__: null,
    default: j
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M1 = w
  , N1 = Symbol.for("react.element")
  , L1 = Symbol.for("react.fragment")
  , j1 = Object.prototype.hasOwnProperty
  , D1 = M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , O1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Fg(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        j1.call(t, r) && !O1.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: N1,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: D1.current
    }
}
Za.Fragment = L1;
Za.jsx = Fg;
Za.jsxs = Fg;
kg.exports = Za;
var S = kg.exports
  , _g = {
    exports: {}
}
  , ut = {}
  , zg = {
    exports: {}
}
  , Bg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, A) {
        var O = k.length;
        k.push(A);
        e: for (; 0 < O; ) {
            var U = O - 1 >>> 1
              , B = k[U];
            if (0 < i(B, A))
                k[U] = A,
                k[O] = B,
                O = U;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var A = k[0]
          , O = k.pop();
        if (O !== A) {
            k[0] = O;
            e: for (var U = 0, B = k.length, Q = B >>> 1; U < Q; ) {
                var q = 2 * (U + 1) - 1
                  , ve = k[q]
                  , Le = q + 1
                  , ee = k[Le];
                if (0 > i(ve, O))
                    Le < B && 0 > i(ee, ve) ? (k[U] = ee,
                    k[Le] = O,
                    U = Le) : (k[U] = ve,
                    k[q] = O,
                    U = q);
                else if (Le < B && 0 > i(ee, O))
                    k[U] = ee,
                    k[Le] = O,
                    U = Le;
                else
                    break e
            }
        }
        return A
    }
    function i(k, A) {
        var O = k.sortIndex - A.sortIndex;
        return O !== 0 ? O : k.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , v = !1
      , g = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(k) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= k)
                r(u),
                A.sortIndex = A.expirationTime,
                t(l, A);
            else
                break;
            A = n(u)
        }
    }
    function C(k) {
        if (g = !1,
        y(k),
        !v)
            if (n(l) !== null)
                v = !0,
                $(E);
            else {
                var A = n(u);
                A !== null && _(C, A.startTime - k)
            }
    }
    function E(k, A) {
        v = !1,
        g && (g = !1,
        p(P),
        P = -1),
        h = !0;
        var O = f;
        try {
            for (y(A),
            d = n(l); d !== null && (!(d.expirationTime > A) || k && !z()); ) {
                var U = d.callback;
                if (typeof U == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var B = U(d.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof B == "function" ? d.callback = B : d === n(l) && r(l),
                    y(A)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Q = !0;
            else {
                var q = n(u);
                q !== null && _(C, q.startTime - A),
                Q = !1
            }
            return Q
        } finally {
            d = null,
            f = O,
            h = !1
        }
    }
    var T = !1
      , b = null
      , P = -1
      , M = 5
      , N = -1;
    function z() {
        return !(e.unstable_now() - N < M)
    }
    function I() {
        if (b !== null) {
            var k = e.unstable_now();
            N = k;
            var A = !0;
            try {
                A = b(!0, k)
            } finally {
                A ? K() : (T = !1,
                b = null)
            }
        } else
            T = !1
    }
    var K;
    if (typeof m == "function")
        K = function() {
            m(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , Y = D.port2;
        D.port1.onmessage = I,
        K = function() {
            Y.postMessage(null)
        }
    } else
        K = function() {
            x(I, 0)
        }
        ;
    function $(k) {
        b = k,
        T || (T = !0,
        K())
    }
    function _(k, A) {
        P = x(function() {
            k(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || h || (v = !0,
        $(E))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = f
        }
        var O = f;
        f = A;
        try {
            return k()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, A) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var O = f;
        f = k;
        try {
            return A()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, A, O) {
        var U = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? U + O : U) : O = U,
        k) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = O + B,
        k = {
            id: c++,
            callback: A,
            priorityLevel: k,
            startTime: O,
            expirationTime: B,
            sortIndex: -1
        },
        O > U ? (k.sortIndex = O,
        t(u, k),
        n(l) === null && k === n(u) && (g ? (p(P),
        P = -1) : g = !0,
        _(C, O - U))) : (k.sortIndex = B,
        t(l, k),
        v || h || (v = !0,
        $(E))),
        k
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(k) {
        var A = f;
        return function() {
            var O = f;
            f = A;
            try {
                return k.apply(this, arguments)
            } finally {
                f = O
            }
        }
    }
}
)(Bg);
zg.exports = Bg;
var I1 = zg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V1 = w
  , lt = I1;
function L(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var $g = new Set
  , Ao = {};
function Fr(e, t) {
    Mi(e, t),
    Mi(e + "Capture", t)
}
function Mi(e, t) {
    for (Ao[e] = t,
    e = 0; e < t.length; e++)
        $g.add(t[e])
}
var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ju = Object.prototype.hasOwnProperty
  , F1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , dh = {}
  , fh = {};
function _1(e) {
    return ju.call(fh, e) ? !0 : ju.call(dh, e) ? !1 : F1.test(e) ? fh[e] = !0 : (dh[e] = !0,
    !1)
}
function z1(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function B1(e, t, n, r) {
    if (t === null || typeof t > "u" || z1(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ye(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ne[e] = new Ye(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ne[t] = new Ye(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ne[e] = new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ne[e] = new Ye(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ne[e] = new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ne[e] = new Ye(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ne[e] = new Ye(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ne[e] = new Ye(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ne[e] = new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var yd = /[\-:]([a-z])/g;
function vd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(yd, vd);
    Ne[t] = new Ye(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(yd, vd);
    Ne[t] = new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(yd, vd);
    Ne[t] = new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ne[e] = new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ne.xlinkHref = new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ne[e] = new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function xd(e, t, n, r) {
    var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (B1(t, n, i, r) && (n = null),
    r || i === null ? _1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var yn = V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ws = Symbol.for("react.element")
  , Qr = Symbol.for("react.portal")
  , Xr = Symbol.for("react.fragment")
  , wd = Symbol.for("react.strict_mode")
  , Du = Symbol.for("react.profiler")
  , Ug = Symbol.for("react.provider")
  , Wg = Symbol.for("react.context")
  , Sd = Symbol.for("react.forward_ref")
  , Ou = Symbol.for("react.suspense")
  , Iu = Symbol.for("react.suspense_list")
  , Cd = Symbol.for("react.memo")
  , Mn = Symbol.for("react.lazy")
  , Hg = Symbol.for("react.offscreen")
  , hh = Symbol.iterator;
function Zi(e) {
    return e === null || typeof e != "object" ? null : (e = hh && e[hh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var pe = Object.assign, Fl;
function uo(e) {
    if (Fl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Fl = t && t[1] || ""
        }
    return `
` + Fl + e
}
var _l = !1;
function zl(e, t) {
    if (!e || _l)
        return "";
    _l = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        _l = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? uo(e) : ""
}
function $1(e) {
    switch (e.tag) {
    case 5:
        return uo(e.type);
    case 16:
        return uo("Lazy");
    case 13:
        return uo("Suspense");
    case 19:
        return uo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = zl(e.type, !1),
        e;
    case 11:
        return e = zl(e.type.render, !1),
        e;
    case 1:
        return e = zl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Vu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Xr:
        return "Fragment";
    case Qr:
        return "Portal";
    case Du:
        return "Profiler";
    case wd:
        return "StrictMode";
    case Ou:
        return "Suspense";
    case Iu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Wg:
            return (e.displayName || "Context") + ".Consumer";
        case Ug:
            return (e._context.displayName || "Context") + ".Provider";
        case Sd:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Cd:
            return t = e.displayName || null,
            t !== null ? t : Vu(e.type) || "Memo";
        case Mn:
            t = e._payload,
            e = e._init;
            try {
                return Vu(e(t))
            } catch {}
        }
    return null
}
function U1(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Vu(t);
    case 8:
        return t === wd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function qn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Kg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function W1(e) {
    var t = Kg(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ss(e) {
    e._valueTracker || (e._valueTracker = W1(e))
}
function Gg(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Kg(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ha(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Fu(e, t) {
    var n = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ph(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = qn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Yg(e, t) {
    t = t.checked,
    t != null && xd(e, "checked", t, !1)
}
function _u(e, t) {
    Yg(e, t);
    var n = qn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? zu(e, t.type, n) : t.hasOwnProperty("defaultValue") && zu(e, t.type, qn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function mh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function zu(e, t, n) {
    (t !== "number" || ha(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var co = Array.isArray;
function fi(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + qn(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Bu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(L(91));
    return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function gh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(L(92));
            if (co(n)) {
                if (1 < n.length)
                    throw Error(L(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: qn(n)
    }
}
function Qg(e, t) {
    var n = qn(t.value)
      , r = qn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function yh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Xg(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function $u(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Cs, qg = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Cs = Cs || document.createElement("div"),
        Cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Cs.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Mo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var mo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , H1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(mo).forEach(function(e) {
    H1.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        mo[t] = mo[e]
    })
});
function Zg(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mo.hasOwnProperty(e) && mo[e] ? ("" + t).trim() : t + "px"
}
function Jg(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Zg(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var K1 = pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Uu(e, t) {
    if (t) {
        if (K1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(L(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(L(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(L(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(L(62))
    }
}
function Wu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Hu = null;
function Ed(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ku = null
  , hi = null
  , pi = null;
function vh(e) {
    if (e = ss(e)) {
        if (typeof Ku != "function")
            throw Error(L(280));
        var t = e.stateNode;
        t && (t = rl(t),
        Ku(e.stateNode, e.type, t))
    }
}
function ey(e) {
    hi ? pi ? pi.push(e) : pi = [e] : hi = e
}
function ty() {
    if (hi) {
        var e = hi
          , t = pi;
        if (pi = hi = null,
        vh(e),
        t)
            for (e = 0; e < t.length; e++)
                vh(t[e])
    }
}
function ny(e, t) {
    return e(t)
}
function ry() {}
var Bl = !1;
function iy(e, t, n) {
    if (Bl)
        return e(t, n);
    Bl = !0;
    try {
        return ny(e, t, n)
    } finally {
        Bl = !1,
        (hi !== null || pi !== null) && (ry(),
        ty())
    }
}
function No(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = rl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(L(231, t, typeof n));
    return n
}
var Gu = !1;
if (cn)
    try {
        var Ji = {};
        Object.defineProperty(Ji, "passive", {
            get: function() {
                Gu = !0
            }
        }),
        window.addEventListener("test", Ji, Ji),
        window.removeEventListener("test", Ji, Ji)
    } catch {
        Gu = !1
    }
function G1(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var go = !1
  , pa = null
  , ma = !1
  , Yu = null
  , Y1 = {
    onError: function(e) {
        go = !0,
        pa = e
    }
};
function Q1(e, t, n, r, i, o, s, a, l) {
    go = !1,
    pa = null,
    G1.apply(Y1, arguments)
}
function X1(e, t, n, r, i, o, s, a, l) {
    if (Q1.apply(this, arguments),
    go) {
        if (go) {
            var u = pa;
            go = !1,
            pa = null
        } else
            throw Error(L(198));
        ma || (ma = !0,
        Yu = u)
    }
}
function _r(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function oy(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function xh(e) {
    if (_r(e) !== e)
        throw Error(L(188))
}
function q1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = _r(e),
        t === null)
            throw Error(L(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return xh(i),
                    e;
                if (o === r)
                    return xh(i),
                    t;
                o = o.sibling
            }
            throw Error(L(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(L(189))
            }
        }
        if (n.alternate !== r)
            throw Error(L(190))
    }
    if (n.tag !== 3)
        throw Error(L(188));
    return n.stateNode.current === n ? e : t
}
function sy(e) {
    return e = q1(e),
    e !== null ? ay(e) : null
}
function ay(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ay(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ly = lt.unstable_scheduleCallback
  , wh = lt.unstable_cancelCallback
  , Z1 = lt.unstable_shouldYield
  , J1 = lt.unstable_requestPaint
  , ye = lt.unstable_now
  , eS = lt.unstable_getCurrentPriorityLevel
  , Td = lt.unstable_ImmediatePriority
  , uy = lt.unstable_UserBlockingPriority
  , ga = lt.unstable_NormalPriority
  , tS = lt.unstable_LowPriority
  , cy = lt.unstable_IdlePriority
  , Ja = null
  , Qt = null;
function nS(e) {
    if (Qt && typeof Qt.onCommitFiberRoot == "function")
        try {
            Qt.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ot = Math.clz32 ? Math.clz32 : oS
  , rS = Math.log
  , iS = Math.LN2;
function oS(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (rS(e) / iS | 0) | 0
}
var Es = 64
  , Ts = 4194304;
function fo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ya(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = fo(a) : (o &= s,
        o !== 0 && (r = fo(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = fo(s) : o !== 0 && (r = fo(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ot(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function sS(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function aS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - Ot(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = sS(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function Qu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function dy() {
    var e = Es;
    return Es <<= 1,
    !(Es & 4194240) && (Es = 64),
    e
}
function $l(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function is(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ot(t),
    e[t] = n
}
function lS(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ot(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function bd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ot(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var te = 0;
function fy(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hy, Pd, py, my, gy, Xu = !1, bs = [], Un = null, Wn = null, Hn = null, Lo = new Map, jo = new Map, Ln = [], uS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sh(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Un = null;
        break;
    case "dragenter":
    case "dragleave":
        Wn = null;
        break;
    case "mouseover":
    case "mouseout":
        Hn = null;
        break;
    case "pointerover":
    case "pointerout":
        Lo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        jo.delete(t.pointerId)
    }
}
function eo(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ss(t),
    t !== null && Pd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function cS(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Un = eo(Un, e, t, n, r, i),
        !0;
    case "dragenter":
        return Wn = eo(Wn, e, t, n, r, i),
        !0;
    case "mouseover":
        return Hn = eo(Hn, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Lo.set(o, eo(Lo.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        jo.set(o, eo(jo.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function yy(e) {
    var t = vr(e.target);
    if (t !== null) {
        var n = _r(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = oy(n),
                t !== null) {
                    e.blockedOn = t,
                    gy(e.priority, function() {
                        py(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ys(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = qu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Hu = r,
            n.target.dispatchEvent(r),
            Hu = null
        } else
            return t = ss(n),
            t !== null && Pd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ch(e, t, n) {
    Ys(e) && n.delete(t)
}
function dS() {
    Xu = !1,
    Un !== null && Ys(Un) && (Un = null),
    Wn !== null && Ys(Wn) && (Wn = null),
    Hn !== null && Ys(Hn) && (Hn = null),
    Lo.forEach(Ch),
    jo.forEach(Ch)
}
function to(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Xu || (Xu = !0,
    lt.unstable_scheduleCallback(lt.unstable_NormalPriority, dS)))
}
function Do(e) {
    function t(i) {
        return to(i, e)
    }
    if (0 < bs.length) {
        to(bs[0], e);
        for (var n = 1; n < bs.length; n++) {
            var r = bs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Un !== null && to(Un, e),
    Wn !== null && to(Wn, e),
    Hn !== null && to(Hn, e),
    Lo.forEach(t),
    jo.forEach(t),
    n = 0; n < Ln.length; n++)
        r = Ln[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && (n = Ln[0],
    n.blockedOn === null); )
        yy(n),
        n.blockedOn === null && Ln.shift()
}
var mi = yn.ReactCurrentBatchConfig
  , va = !0;
function fS(e, t, n, r) {
    var i = te
      , o = mi.transition;
    mi.transition = null;
    try {
        te = 1,
        kd(e, t, n, r)
    } finally {
        te = i,
        mi.transition = o
    }
}
function hS(e, t, n, r) {
    var i = te
      , o = mi.transition;
    mi.transition = null;
    try {
        te = 4,
        kd(e, t, n, r)
    } finally {
        te = i,
        mi.transition = o
    }
}
function kd(e, t, n, r) {
    if (va) {
        var i = qu(e, t, n, r);
        if (i === null)
            Zl(e, t, r, xa, n),
            Sh(e, r);
        else if (cS(i, e, t, n, r))
            r.stopPropagation();
        else if (Sh(e, r),
        t & 4 && -1 < uS.indexOf(e)) {
            for (; i !== null; ) {
                var o = ss(i);
                if (o !== null && hy(o),
                o = qu(e, t, n, r),
                o === null && Zl(e, t, r, xa, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Zl(e, t, r, null, n)
    }
}
var xa = null;
function qu(e, t, n, r) {
    if (xa = null,
    e = Ed(r),
    e = vr(e),
    e !== null)
        if (t = _r(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = oy(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return xa = e,
    null
}
function vy(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (eS()) {
        case Td:
            return 1;
        case uy:
            return 4;
        case ga:
        case tS:
            return 16;
        case cy:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var _n = null
  , Rd = null
  , Qs = null;
function xy() {
    if (Qs)
        return Qs;
    var e, t = Rd, n = t.length, r, i = "value"in _n ? _n.value : _n.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Qs = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Xs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ps() {
    return !0
}
function Eh() {
    return !1
}
function ct(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ps : Eh,
        this.isPropagationStopped = Eh,
        this
    }
    return pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ps)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ps)
        },
        persist: function() {},
        isPersistent: Ps
    }),
    t
}
var $i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ad = ct($i), os = pe({}, $i, {
    view: 0,
    detail: 0
}), pS = ct(os), Ul, Wl, no, el = pe({}, os, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Md,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== no && (no && e.type === "mousemove" ? (Ul = e.screenX - no.screenX,
        Wl = e.screenY - no.screenY) : Wl = Ul = 0,
        no = e),
        Ul)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Wl
    }
}), Th = ct(el), mS = pe({}, el, {
    dataTransfer: 0
}), gS = ct(mS), yS = pe({}, os, {
    relatedTarget: 0
}), Hl = ct(yS), vS = pe({}, $i, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), xS = ct(vS), wS = pe({}, $i, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), SS = ct(wS), CS = pe({}, $i, {
    data: 0
}), bh = ct(CS), ES = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, TS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, bS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function PS(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = bS[e]) ? !!t[e] : !1
}
function Md() {
    return PS
}
var kS = pe({}, os, {
    key: function(e) {
        if (e.key) {
            var t = ES[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Xs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? TS[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Md,
    charCode: function(e) {
        return e.type === "keypress" ? Xs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Xs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , RS = ct(kS)
  , AS = pe({}, el, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Ph = ct(AS)
  , MS = pe({}, os, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Md
})
  , NS = ct(MS)
  , LS = pe({}, $i, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , jS = ct(LS)
  , DS = pe({}, el, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , OS = ct(DS)
  , IS = [9, 13, 27, 32]
  , Nd = cn && "CompositionEvent"in window
  , yo = null;
cn && "documentMode"in document && (yo = document.documentMode);
var VS = cn && "TextEvent"in window && !yo
  , wy = cn && (!Nd || yo && 8 < yo && 11 >= yo)
  , kh = " "
  , Rh = !1;
function Sy(e, t) {
    switch (e) {
    case "keyup":
        return IS.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Cy(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var qr = !1;
function FS(e, t) {
    switch (e) {
    case "compositionend":
        return Cy(t);
    case "keypress":
        return t.which !== 32 ? null : (Rh = !0,
        kh);
    case "textInput":
        return e = t.data,
        e === kh && Rh ? null : e;
    default:
        return null
    }
}
function _S(e, t) {
    if (qr)
        return e === "compositionend" || !Nd && Sy(e, t) ? (e = xy(),
        Qs = Rd = _n = null,
        qr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return wy && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var zS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ah(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zS[e.type] : t === "textarea"
}
function Ey(e, t, n, r) {
    ey(r),
    t = wa(t, "onChange"),
    0 < t.length && (n = new Ad("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var vo = null
  , Oo = null;
function BS(e) {
    Dy(e, 0)
}
function tl(e) {
    var t = ei(e);
    if (Gg(t))
        return e
}
function $S(e, t) {
    if (e === "change")
        return t
}
var Ty = !1;
if (cn) {
    var Kl;
    if (cn) {
        var Gl = "oninput"in document;
        if (!Gl) {
            var Mh = document.createElement("div");
            Mh.setAttribute("oninput", "return;"),
            Gl = typeof Mh.oninput == "function"
        }
        Kl = Gl
    } else
        Kl = !1;
    Ty = Kl && (!document.documentMode || 9 < document.documentMode)
}
function Nh() {
    vo && (vo.detachEvent("onpropertychange", by),
    Oo = vo = null)
}
function by(e) {
    if (e.propertyName === "value" && tl(Oo)) {
        var t = [];
        Ey(t, Oo, e, Ed(e)),
        iy(BS, t)
    }
}
function US(e, t, n) {
    e === "focusin" ? (Nh(),
    vo = t,
    Oo = n,
    vo.attachEvent("onpropertychange", by)) : e === "focusout" && Nh()
}
function WS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return tl(Oo)
}
function HS(e, t) {
    if (e === "click")
        return tl(t)
}
function KS(e, t) {
    if (e === "input" || e === "change")
        return tl(t)
}
function GS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ft = typeof Object.is == "function" ? Object.is : GS;
function Io(e, t) {
    if (Ft(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ju.call(t, i) || !Ft(e[i], t[i]))
            return !1
    }
    return !0
}
function Lh(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function jh(e, t) {
    var n = Lh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Lh(n)
    }
}
function Py(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Py(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ky() {
    for (var e = window, t = ha(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ha(e.document)
    }
    return t
}
function Ld(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function YS(e) {
    var t = ky()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Py(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ld(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = jh(n, o);
                var s = jh(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var QS = cn && "documentMode"in document && 11 >= document.documentMode
  , Zr = null
  , Zu = null
  , xo = null
  , Ju = !1;
function Dh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ju || Zr == null || Zr !== ha(r) || (r = Zr,
    "selectionStart"in r && Ld(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    xo && Io(xo, r) || (xo = r,
    r = wa(Zu, "onSelect"),
    0 < r.length && (t = new Ad("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Zr)))
}
function ks(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Jr = {
    animationend: ks("Animation", "AnimationEnd"),
    animationiteration: ks("Animation", "AnimationIteration"),
    animationstart: ks("Animation", "AnimationStart"),
    transitionend: ks("Transition", "TransitionEnd")
}
  , Yl = {}
  , Ry = {};
cn && (Ry = document.createElement("div").style,
"AnimationEvent"in window || (delete Jr.animationend.animation,
delete Jr.animationiteration.animation,
delete Jr.animationstart.animation),
"TransitionEvent"in window || delete Jr.transitionend.transition);
function nl(e) {
    if (Yl[e])
        return Yl[e];
    if (!Jr[e])
        return e;
    var t = Jr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ry)
            return Yl[e] = t[n];
    return e
}
var Ay = nl("animationend")
  , My = nl("animationiteration")
  , Ny = nl("animationstart")
  , Ly = nl("transitionend")
  , jy = new Map
  , Oh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function sr(e, t) {
    jy.set(e, t),
    Fr(t, [e])
}
for (var Ql = 0; Ql < Oh.length; Ql++) {
    var Xl = Oh[Ql]
      , XS = Xl.toLowerCase()
      , qS = Xl[0].toUpperCase() + Xl.slice(1);
    sr(XS, "on" + qS)
}
sr(Ay, "onAnimationEnd");
sr(My, "onAnimationIteration");
sr(Ny, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(Ly, "onTransitionEnd");
Mi("onMouseEnter", ["mouseout", "mouseover"]);
Mi("onMouseLeave", ["mouseout", "mouseover"]);
Mi("onPointerEnter", ["pointerout", "pointerover"]);
Mi("onPointerLeave", ["pointerout", "pointerover"]);
Fr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Fr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Fr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Fr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ZS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
function Ih(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    X1(r, t, void 0, e),
    e.currentTarget = null
}
function Dy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    Ih(i, a, u),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    Ih(i, a, u),
                    o = l
                }
        }
    }
    if (ma)
        throw e = Yu,
        ma = !1,
        Yu = null,
        e
}
function se(e, t) {
    var n = t[ic];
    n === void 0 && (n = t[ic] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Oy(t, e, 2, !1),
    n.add(r))
}
function ql(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Oy(n, e, r, t)
}
var Rs = "_reactListening" + Math.random().toString(36).slice(2);
function Vo(e) {
    if (!e[Rs]) {
        e[Rs] = !0,
        $g.forEach(function(n) {
            n !== "selectionchange" && (ZS.has(n) || ql(n, !1, e),
            ql(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rs] || (t[Rs] = !0,
        ql("selectionchange", !1, t))
    }
}
function Oy(e, t, n, r) {
    switch (vy(t)) {
    case 1:
        var i = fS;
        break;
    case 4:
        i = hS;
        break;
    default:
        i = kd
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Gu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Zl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = vr(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    iy(function() {
        var u = o
          , c = Ed(n)
          , d = [];
        e: {
            var f = jy.get(e);
            if (f !== void 0) {
                var h = Ad
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Xs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = RS;
                    break;
                case "focusin":
                    v = "focus",
                    h = Hl;
                    break;
                case "focusout":
                    v = "blur",
                    h = Hl;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Hl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Th;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = gS;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = NS;
                    break;
                case Ay:
                case My:
                case Ny:
                    h = xS;
                    break;
                case Ly:
                    h = jS;
                    break;
                case "scroll":
                    h = pS;
                    break;
                case "wheel":
                    h = OS;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = SS;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Ph
                }
                var g = (t & 4) !== 0
                  , x = !g && e === "scroll"
                  , p = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var m = u, y; m !== null; ) {
                    y = m;
                    var C = y.stateNode;
                    if (y.tag === 5 && C !== null && (y = C,
                    p !== null && (C = No(m, p),
                    C != null && g.push(Fo(m, C, y)))),
                    x)
                        break;
                    m = m.return
                }
                0 < g.length && (f = new h(f,v,null,n,c),
                d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== Hu && (v = n.relatedTarget || n.fromElement) && (vr(v) || v[dn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (v = n.relatedTarget || n.toElement,
                h = u,
                v = v ? vr(v) : null,
                v !== null && (x = _r(v),
                v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null,
                v = u),
                h !== v)) {
                    if (g = Th,
                    C = "onMouseLeave",
                    p = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Ph,
                    C = "onPointerLeave",
                    p = "onPointerEnter",
                    m = "pointer"),
                    x = h == null ? f : ei(h),
                    y = v == null ? f : ei(v),
                    f = new g(C,m + "leave",h,n,c),
                    f.target = x,
                    f.relatedTarget = y,
                    C = null,
                    vr(c) === u && (g = new g(p,m + "enter",v,n,c),
                    g.target = y,
                    g.relatedTarget = x,
                    C = g),
                    x = C,
                    h && v)
                        t: {
                            for (g = h,
                            p = v,
                            m = 0,
                            y = g; y; y = Gr(y))
                                m++;
                            for (y = 0,
                            C = p; C; C = Gr(C))
                                y++;
                            for (; 0 < m - y; )
                                g = Gr(g),
                                m--;
                            for (; 0 < y - m; )
                                p = Gr(p),
                                y--;
                            for (; m--; ) {
                                if (g === p || p !== null && g === p.alternate)
                                    break t;
                                g = Gr(g),
                                p = Gr(p)
                            }
                            g = null
                        }
                    else
                        g = null;
                    h !== null && Vh(d, f, h, g, !1),
                    v !== null && x !== null && Vh(d, x, v, g, !0)
                }
            }
            e: {
                if (f = u ? ei(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var E = $S;
                else if (Ah(f))
                    if (Ty)
                        E = KS;
                    else {
                        E = WS;
                        var T = US
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = HS);
                if (E && (E = E(e, u))) {
                    Ey(d, E, n, c);
                    break e
                }
                T && T(e, f, u),
                e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && zu(f, "number", f.value)
            }
            switch (T = u ? ei(u) : window,
            e) {
            case "focusin":
                (Ah(T) || T.contentEditable === "true") && (Zr = T,
                Zu = u,
                xo = null);
                break;
            case "focusout":
                xo = Zu = Zr = null;
                break;
            case "mousedown":
                Ju = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ju = !1,
                Dh(d, n, c);
                break;
            case "selectionchange":
                if (QS)
                    break;
            case "keydown":
            case "keyup":
                Dh(d, n, c)
            }
            var b;
            if (Nd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                qr ? Sy(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (wy && n.locale !== "ko" && (qr || P !== "onCompositionStart" ? P === "onCompositionEnd" && qr && (b = xy()) : (_n = c,
            Rd = "value"in _n ? _n.value : _n.textContent,
            qr = !0)),
            T = wa(u, P),
            0 < T.length && (P = new bh(P,e,null,n,c),
            d.push({
                event: P,
                listeners: T
            }),
            b ? P.data = b : (b = Cy(n),
            b !== null && (P.data = b)))),
            (b = VS ? FS(e, n) : _S(e, n)) && (u = wa(u, "onBeforeInput"),
            0 < u.length && (c = new bh("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = b))
        }
        Dy(d, t)
    })
}
function Fo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function wa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = No(e, n),
        o != null && r.unshift(Fo(e, o, i)),
        o = No(e, t),
        o != null && r.push(Fo(e, o, i))),
        e = e.return
    }
    return r
}
function Gr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Vh(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = No(n, o),
        l != null && s.unshift(Fo(n, l, a))) : i || (l = No(n, o),
        l != null && s.push(Fo(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var JS = /\r\n?/g
  , eC = /\u0000|\uFFFD/g;
function Fh(e) {
    return (typeof e == "string" ? e : "" + e).replace(JS, `
`).replace(eC, "")
}
function As(e, t, n) {
    if (t = Fh(t),
    Fh(e) !== t && n)
        throw Error(L(425))
}
function Sa() {}
var ec = null
  , tc = null;
function nc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var rc = typeof setTimeout == "function" ? setTimeout : void 0
  , tC = typeof clearTimeout == "function" ? clearTimeout : void 0
  , _h = typeof Promise == "function" ? Promise : void 0
  , nC = typeof queueMicrotask == "function" ? queueMicrotask : typeof _h < "u" ? function(e) {
    return _h.resolve(null).then(e).catch(rC)
}
: rc;
function rC(e) {
    setTimeout(function() {
        throw e
    })
}
function Jl(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Do(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Do(t)
}
function Kn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function zh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ui = Math.random().toString(36).slice(2)
  , Yt = "__reactFiber$" + Ui
  , _o = "__reactProps$" + Ui
  , dn = "__reactContainer$" + Ui
  , ic = "__reactEvents$" + Ui
  , iC = "__reactListeners$" + Ui
  , oC = "__reactHandles$" + Ui;
function vr(e) {
    var t = e[Yt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[dn] || n[Yt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = zh(e); e !== null; ) {
                    if (n = e[Yt])
                        return n;
                    e = zh(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ss(e) {
    return e = e[Yt] || e[dn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ei(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(L(33))
}
function rl(e) {
    return e[_o] || null
}
var oc = []
  , ti = -1;
function ar(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > ti || (e.current = oc[ti],
    oc[ti] = null,
    ti--)
}
function re(e, t) {
    ti++,
    oc[ti] = e.current,
    e.current = t
}
var Zn = {}
  , _e = ar(Zn)
  , Ze = ar(!1)
  , Lr = Zn;
function Ni(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Zn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Je(e) {
    return e = e.childContextTypes,
    e != null
}
function Ca() {
    ae(Ze),
    ae(_e)
}
function Bh(e, t, n) {
    if (_e.current !== Zn)
        throw Error(L(168));
    re(_e, t),
    re(Ze, n)
}
function Iy(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(L(108, U1(e) || "Unknown", i));
    return pe({}, n, r)
}
function Ea(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn,
    Lr = _e.current,
    re(_e, e),
    re(Ze, Ze.current),
    !0
}
function $h(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(L(169));
    n ? (e = Iy(e, t, Lr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(Ze),
    ae(_e),
    re(_e, e)) : ae(Ze),
    re(Ze, n)
}
var on = null
  , il = !1
  , eu = !1;
function Vy(e) {
    on === null ? on = [e] : on.push(e)
}
function sC(e) {
    il = !0,
    Vy(e)
}
function lr() {
    if (!eu && on !== null) {
        eu = !0;
        var e = 0
          , t = te;
        try {
            var n = on;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            on = null,
            il = !1
        } catch (i) {
            throw on !== null && (on = on.slice(e + 1)),
            ly(Td, lr),
            i
        } finally {
            te = t,
            eu = !1
        }
    }
    return null
}
var ni = []
  , ri = 0
  , Ta = null
  , ba = 0
  , ht = []
  , pt = 0
  , jr = null
  , an = 1
  , ln = "";
function mr(e, t) {
    ni[ri++] = ba,
    ni[ri++] = Ta,
    Ta = e,
    ba = t
}
function Fy(e, t, n) {
    ht[pt++] = an,
    ht[pt++] = ln,
    ht[pt++] = jr,
    jr = e;
    var r = an;
    e = ln;
    var i = 32 - Ot(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Ot(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        an = 1 << 32 - Ot(t) + i | n << i | r,
        ln = o + e
    } else
        an = 1 << o | n << i | r,
        ln = e
}
function jd(e) {
    e.return !== null && (mr(e, 1),
    Fy(e, 1, 0))
}
function Dd(e) {
    for (; e === Ta; )
        Ta = ni[--ri],
        ni[ri] = null,
        ba = ni[--ri],
        ni[ri] = null;
    for (; e === jr; )
        jr = ht[--pt],
        ht[pt] = null,
        ln = ht[--pt],
        ht[pt] = null,
        an = ht[--pt],
        ht[pt] = null
}
var st = null
  , ot = null
  , ue = !1
  , Dt = null;
function _y(e, t) {
    var n = mt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Uh(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        ot = Kn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        ot = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = jr !== null ? {
            id: an,
            overflow: ln
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = mt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        st = e,
        ot = null,
        !0) : !1;
    default:
        return !1
    }
}
function sc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ac(e) {
    if (ue) {
        var t = ot;
        if (t) {
            var n = t;
            if (!Uh(e, t)) {
                if (sc(e))
                    throw Error(L(418));
                t = Kn(n.nextSibling);
                var r = st;
                t && Uh(e, t) ? _y(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                st = e)
            }
        } else {
            if (sc(e))
                throw Error(L(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            st = e
        }
    }
}
function Wh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    st = e
}
function Ms(e) {
    if (e !== st)
        return !1;
    if (!ue)
        return Wh(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !nc(e.type, e.memoizedProps)),
    t && (t = ot)) {
        if (sc(e))
            throw zy(),
            Error(L(418));
        for (; t; )
            _y(e, t),
            t = Kn(t.nextSibling)
    }
    if (Wh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(L(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ot = Kn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ot = null
        }
    } else
        ot = st ? Kn(e.stateNode.nextSibling) : null;
    return !0
}
function zy() {
    for (var e = ot; e; )
        e = Kn(e.nextSibling)
}
function Li() {
    ot = st = null,
    ue = !1
}
function Od(e) {
    Dt === null ? Dt = [e] : Dt.push(e)
}
var aC = yn.ReactCurrentBatchConfig;
function ro(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(L(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(L(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(L(284));
        if (!n._owner)
            throw Error(L(290, e))
    }
    return e
}
function Ns(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Hh(e) {
    var t = e._init;
    return t(e._payload)
}
function By(e) {
    function t(p, m) {
        if (e) {
            var y = p.deletions;
            y === null ? (p.deletions = [m],
            p.flags |= 16) : y.push(m)
        }
    }
    function n(p, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(p, m),
            m = m.sibling;
        return null
    }
    function r(p, m) {
        for (p = new Map; m !== null; )
            m.key !== null ? p.set(m.key, m) : p.set(m.index, m),
            m = m.sibling;
        return p
    }
    function i(p, m) {
        return p = Xn(p, m),
        p.index = 0,
        p.sibling = null,
        p
    }
    function o(p, m, y) {
        return p.index = y,
        e ? (y = p.alternate,
        y !== null ? (y = y.index,
        y < m ? (p.flags |= 2,
        m) : y) : (p.flags |= 2,
        m)) : (p.flags |= 1048576,
        m)
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function a(p, m, y, C) {
        return m === null || m.tag !== 6 ? (m = au(y, p.mode, C),
        m.return = p,
        m) : (m = i(m, y),
        m.return = p,
        m)
    }
    function l(p, m, y, C) {
        var E = y.type;
        return E === Xr ? c(p, m, y.props.children, C, y.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mn && Hh(E) === m.type) ? (C = i(m, y.props),
        C.ref = ro(p, m, y),
        C.return = p,
        C) : (C = ra(y.type, y.key, y.props, null, p.mode, C),
        C.ref = ro(p, m, y),
        C.return = p,
        C)
    }
    function u(p, m, y, C) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = lu(y, p.mode, C),
        m.return = p,
        m) : (m = i(m, y.children || []),
        m.return = p,
        m)
    }
    function c(p, m, y, C, E) {
        return m === null || m.tag !== 7 ? (m = Mr(y, p.mode, C, E),
        m.return = p,
        m) : (m = i(m, y),
        m.return = p,
        m)
    }
    function d(p, m, y) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = au("" + m, p.mode, y),
            m.return = p,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ws:
                return y = ra(m.type, m.key, m.props, null, p.mode, y),
                y.ref = ro(p, null, m),
                y.return = p,
                y;
            case Qr:
                return m = lu(m, p.mode, y),
                m.return = p,
                m;
            case Mn:
                var C = m._init;
                return d(p, C(m._payload), y)
            }
            if (co(m) || Zi(m))
                return m = Mr(m, p.mode, y, null),
                m.return = p,
                m;
            Ns(p, m)
        }
        return null
    }
    function f(p, m, y, C) {
        var E = m !== null ? m.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return E !== null ? null : a(p, m, "" + y, C);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ws:
                return y.key === E ? l(p, m, y, C) : null;
            case Qr:
                return y.key === E ? u(p, m, y, C) : null;
            case Mn:
                return E = y._init,
                f(p, m, E(y._payload), C)
            }
            if (co(y) || Zi(y))
                return E !== null ? null : c(p, m, y, C, null);
            Ns(p, y)
        }
        return null
    }
    function h(p, m, y, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return p = p.get(y) || null,
            a(m, p, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case ws:
                return p = p.get(C.key === null ? y : C.key) || null,
                l(m, p, C, E);
            case Qr:
                return p = p.get(C.key === null ? y : C.key) || null,
                u(m, p, C, E);
            case Mn:
                var T = C._init;
                return h(p, m, y, T(C._payload), E)
            }
            if (co(C) || Zi(C))
                return p = p.get(y) || null,
                c(m, p, C, E, null);
            Ns(m, C)
        }
        return null
    }
    function v(p, m, y, C) {
        for (var E = null, T = null, b = m, P = m = 0, M = null; b !== null && P < y.length; P++) {
            b.index > P ? (M = b,
            b = null) : M = b.sibling;
            var N = f(p, b, y[P], C);
            if (N === null) {
                b === null && (b = M);
                break
            }
            e && b && N.alternate === null && t(p, b),
            m = o(N, m, P),
            T === null ? E = N : T.sibling = N,
            T = N,
            b = M
        }
        if (P === y.length)
            return n(p, b),
            ue && mr(p, P),
            E;
        if (b === null) {
            for (; P < y.length; P++)
                b = d(p, y[P], C),
                b !== null && (m = o(b, m, P),
                T === null ? E = b : T.sibling = b,
                T = b);
            return ue && mr(p, P),
            E
        }
        for (b = r(p, b); P < y.length; P++)
            M = h(b, p, P, y[P], C),
            M !== null && (e && M.alternate !== null && b.delete(M.key === null ? P : M.key),
            m = o(M, m, P),
            T === null ? E = M : T.sibling = M,
            T = M);
        return e && b.forEach(function(z) {
            return t(p, z)
        }),
        ue && mr(p, P),
        E
    }
    function g(p, m, y, C) {
        var E = Zi(y);
        if (typeof E != "function")
            throw Error(L(150));
        if (y = E.call(y),
        y == null)
            throw Error(L(151));
        for (var T = E = null, b = m, P = m = 0, M = null, N = y.next(); b !== null && !N.done; P++,
        N = y.next()) {
            b.index > P ? (M = b,
            b = null) : M = b.sibling;
            var z = f(p, b, N.value, C);
            if (z === null) {
                b === null && (b = M);
                break
            }
            e && b && z.alternate === null && t(p, b),
            m = o(z, m, P),
            T === null ? E = z : T.sibling = z,
            T = z,
            b = M
        }
        if (N.done)
            return n(p, b),
            ue && mr(p, P),
            E;
        if (b === null) {
            for (; !N.done; P++,
            N = y.next())
                N = d(p, N.value, C),
                N !== null && (m = o(N, m, P),
                T === null ? E = N : T.sibling = N,
                T = N);
            return ue && mr(p, P),
            E
        }
        for (b = r(p, b); !N.done; P++,
        N = y.next())
            N = h(b, p, P, N.value, C),
            N !== null && (e && N.alternate !== null && b.delete(N.key === null ? P : N.key),
            m = o(N, m, P),
            T === null ? E = N : T.sibling = N,
            T = N);
        return e && b.forEach(function(I) {
            return t(p, I)
        }),
        ue && mr(p, P),
        E
    }
    function x(p, m, y, C) {
        if (typeof y == "object" && y !== null && y.type === Xr && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ws:
                e: {
                    for (var E = y.key, T = m; T !== null; ) {
                        if (T.key === E) {
                            if (E = y.type,
                            E === Xr) {
                                if (T.tag === 7) {
                                    n(p, T.sibling),
                                    m = i(T, y.props.children),
                                    m.return = p,
                                    p = m;
                                    break e
                                }
                            } else if (T.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mn && Hh(E) === T.type) {
                                n(p, T.sibling),
                                m = i(T, y.props),
                                m.ref = ro(p, T, y),
                                m.return = p,
                                p = m;
                                break e
                            }
                            n(p, T);
                            break
                        } else
                            t(p, T);
                        T = T.sibling
                    }
                    y.type === Xr ? (m = Mr(y.props.children, p.mode, C, y.key),
                    m.return = p,
                    p = m) : (C = ra(y.type, y.key, y.props, null, p.mode, C),
                    C.ref = ro(p, m, y),
                    C.return = p,
                    p = C)
                }
                return s(p);
            case Qr:
                e: {
                    for (T = y.key; m !== null; ) {
                        if (m.key === T)
                            if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                                n(p, m.sibling),
                                m = i(m, y.children || []),
                                m.return = p,
                                p = m;
                                break e
                            } else {
                                n(p, m);
                                break
                            }
                        else
                            t(p, m);
                        m = m.sibling
                    }
                    m = lu(y, p.mode, C),
                    m.return = p,
                    p = m
                }
                return s(p);
            case Mn:
                return T = y._init,
                x(p, m, T(y._payload), C)
            }
            if (co(y))
                return v(p, m, y, C);
            if (Zi(y))
                return g(p, m, y, C);
            Ns(p, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        m !== null && m.tag === 6 ? (n(p, m.sibling),
        m = i(m, y),
        m.return = p,
        p = m) : (n(p, m),
        m = au(y, p.mode, C),
        m.return = p,
        p = m),
        s(p)) : n(p, m)
    }
    return x
}
var ji = By(!0)
  , $y = By(!1)
  , Pa = ar(null)
  , ka = null
  , ii = null
  , Id = null;
function Vd() {
    Id = ii = ka = null
}
function Fd(e) {
    var t = Pa.current;
    ae(Pa),
    e._currentValue = t
}
function lc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function gi(e, t) {
    ka = e,
    Id = ii = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0),
    e.firstContext = null)
}
function wt(e) {
    var t = e._currentValue;
    if (Id !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ii === null) {
            if (ka === null)
                throw Error(L(308));
            ii = e,
            ka.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ii = ii.next = e;
    return t
}
var xr = null;
function _d(e) {
    xr === null ? xr = [e] : xr.push(e)
}
function Uy(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    _d(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    fn(e, r)
}
function fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Nn = !1;
function zd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Wy(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function un(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        fn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    _d(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    fn(e, n)
}
function qs(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        bd(e, n)
    }
}
function Kh(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ra(e, t, n, r) {
    var i = e.updateQueue;
    Nn = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? o = u : s.next = u,
        s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0,
        c = u = l = null,
        a = o;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e
                      , g = a;
                    switch (f = t,
                    h = n,
                    g.tag) {
                    case 1:
                        if (v = g.payload,
                        typeof v == "function") {
                            d = v.call(h, d, f);
                            break e
                        }
                        d = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = g.payload,
                        f = typeof v == "function" ? v.call(h, d, f) : v,
                        f == null)
                            break e;
                        d = pe({}, d, f);
                        break e;
                    case 2:
                        Nn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                s |= f;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        Or |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function Gh(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(L(191, i));
                i.call(r)
            }
        }
}
var as = {}
  , Xt = ar(as)
  , zo = ar(as)
  , Bo = ar(as);
function wr(e) {
    if (e === as)
        throw Error(L(174));
    return e
}
function Bd(e, t) {
    switch (re(Bo, t),
    re(zo, e),
    re(Xt, as),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $u(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = $u(t, e)
    }
    ae(Xt),
    re(Xt, t)
}
function Di() {
    ae(Xt),
    ae(zo),
    ae(Bo)
}
function Hy(e) {
    wr(Bo.current);
    var t = wr(Xt.current)
      , n = $u(t, e.type);
    t !== n && (re(zo, e),
    re(Xt, n))
}
function $d(e) {
    zo.current === e && (ae(Xt),
    ae(zo))
}
var de = ar(0);
function Aa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var tu = [];
function Ud() {
    for (var e = 0; e < tu.length; e++)
        tu[e]._workInProgressVersionPrimary = null;
    tu.length = 0
}
var Zs = yn.ReactCurrentDispatcher
  , nu = yn.ReactCurrentBatchConfig
  , Dr = 0
  , he = null
  , Ce = null
  , be = null
  , Ma = !1
  , wo = !1
  , $o = 0
  , lC = 0;
function De() {
    throw Error(L(321))
}
function Wd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ft(e[n], t[n]))
            return !1;
    return !0
}
function Hd(e, t, n, r, i, o) {
    if (Dr = o,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Zs.current = e === null || e.memoizedState === null ? fC : hC,
    e = n(r, i),
    wo) {
        o = 0;
        do {
            if (wo = !1,
            $o = 0,
            25 <= o)
                throw Error(L(301));
            o += 1,
            be = Ce = null,
            t.updateQueue = null,
            Zs.current = pC,
            e = n(r, i)
        } while (wo)
    }
    if (Zs.current = Na,
    t = Ce !== null && Ce.next !== null,
    Dr = 0,
    be = Ce = he = null,
    Ma = !1,
    t)
        throw Error(L(300));
    return e
}
function Kd() {
    var e = $o !== 0;
    return $o = 0,
    e
}
function Ut() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return be === null ? he.memoizedState = be = e : be = be.next = e,
    be
}
function St() {
    if (Ce === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ce.next;
    var t = be === null ? he.memoizedState : be.next;
    if (t !== null)
        be = t,
        Ce = e;
    else {
        if (e === null)
            throw Error(L(310));
        Ce = e,
        e = {
            memoizedState: Ce.memoizedState,
            baseState: Ce.baseState,
            baseQueue: Ce.baseQueue,
            queue: Ce.queue,
            next: null
        },
        be === null ? he.memoizedState = be = e : be = be.next = e
    }
    return be
}
function Uo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ru(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = Ce
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = o;
        do {
            var c = u.lane;
            if ((Dr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                s = r) : l = l.next = d,
                he.lanes |= c,
                Or |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
        Ft(r, t.memoizedState) || (qe = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            he.lanes |= o,
            Or |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function iu(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        Ft(o, t.memoizedState) || (qe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Ky() {}
function Gy(e, t) {
    var n = he
      , r = St()
      , i = t()
      , o = !Ft(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    qe = !0),
    r = r.queue,
    Gd(Xy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || be !== null && be.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Wo(9, Qy.bind(null, n, r, i, t), void 0, null),
        Pe === null)
            throw Error(L(349));
        Dr & 30 || Yy(n, t, i)
    }
    return i
}
function Yy(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Qy(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    qy(t) && Zy(e)
}
function Xy(e, t, n) {
    return n(function() {
        qy(t) && Zy(e)
    })
}
function qy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ft(e, n)
    } catch {
        return !0
    }
}
function Zy(e) {
    var t = fn(e, 1);
    t !== null && It(t, e, 1, -1)
}
function Yh(e) {
    var t = Ut();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Uo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = dC.bind(null, he, e),
    [t.memoizedState, e]
}
function Wo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Jy() {
    return St().memoizedState
}
function Js(e, t, n, r) {
    var i = Ut();
    he.flags |= e,
    i.memoizedState = Wo(1 | t, n, void 0, r === void 0 ? null : r)
}
function ol(e, t, n, r) {
    var i = St();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ce !== null) {
        var s = Ce.memoizedState;
        if (o = s.destroy,
        r !== null && Wd(r, s.deps)) {
            i.memoizedState = Wo(t, n, o, r);
            return
        }
    }
    he.flags |= e,
    i.memoizedState = Wo(1 | t, n, o, r)
}
function Qh(e, t) {
    return Js(8390656, 8, e, t)
}
function Gd(e, t) {
    return ol(2048, 8, e, t)
}
function ev(e, t) {
    return ol(4, 2, e, t)
}
function tv(e, t) {
    return ol(4, 4, e, t)
}
function nv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function rv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ol(4, 4, nv.bind(null, t, e), n)
}
function Yd() {}
function iv(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ov(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function sv(e, t, n) {
    return Dr & 21 ? (Ft(n, t) || (n = dy(),
    he.lanes |= n,
    Or |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    qe = !0),
    e.memoizedState = n)
}
function uC(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = nu.transition;
    nu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        te = n,
        nu.transition = r
    }
}
function av() {
    return St().memoizedState
}
function cC(e, t, n) {
    var r = Qn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    lv(e))
        uv(t, n);
    else if (n = Uy(e, t, n, r),
    n !== null) {
        var i = Ke();
        It(n, e, r, i),
        cv(n, t, r)
    }
}
function dC(e, t, n) {
    var r = Qn(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (lv(e))
        uv(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                Ft(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    _d(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Uy(e, t, i, r),
        n !== null && (i = Ke(),
        It(n, e, r, i),
        cv(n, t, r))
    }
}
function lv(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function uv(e, t) {
    wo = Ma = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function cv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        bd(e, n)
    }
}
var Na = {
    readContext: wt,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1
}
  , fC = {
    readContext: wt,
    useCallback: function(e, t) {
        return Ut().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: wt,
    useEffect: Qh,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Js(4194308, 4, nv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Js(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Js(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ut();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ut();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = cC.bind(null, he, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ut();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Yh,
    useDebugValue: Yd,
    useDeferredValue: function(e) {
        return Ut().memoizedState = e
    },
    useTransition: function() {
        var e = Yh(!1)
          , t = e[0];
        return e = uC.bind(null, e[1]),
        Ut().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = he
          , i = Ut();
        if (ue) {
            if (n === void 0)
                throw Error(L(407));
            n = n()
        } else {
            if (n = t(),
            Pe === null)
                throw Error(L(349));
            Dr & 30 || Yy(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Qh(Xy.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Wo(9, Qy.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ut()
          , t = Pe.identifierPrefix;
        if (ue) {
            var n = ln
              , r = an;
            n = (r & ~(1 << 32 - Ot(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = $o++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = lC++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , hC = {
    readContext: wt,
    useCallback: iv,
    useContext: wt,
    useEffect: Gd,
    useImperativeHandle: rv,
    useInsertionEffect: ev,
    useLayoutEffect: tv,
    useMemo: ov,
    useReducer: ru,
    useRef: Jy,
    useState: function() {
        return ru(Uo)
    },
    useDebugValue: Yd,
    useDeferredValue: function(e) {
        var t = St();
        return sv(t, Ce.memoizedState, e)
    },
    useTransition: function() {
        var e = ru(Uo)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Ky,
    useSyncExternalStore: Gy,
    useId: av,
    unstable_isNewReconciler: !1
}
  , pC = {
    readContext: wt,
    useCallback: iv,
    useContext: wt,
    useEffect: Gd,
    useImperativeHandle: rv,
    useInsertionEffect: ev,
    useLayoutEffect: tv,
    useMemo: ov,
    useReducer: iu,
    useRef: Jy,
    useState: function() {
        return iu(Uo)
    },
    useDebugValue: Yd,
    useDeferredValue: function(e) {
        var t = St();
        return Ce === null ? t.memoizedState = e : sv(t, Ce.memoizedState, e)
    },
    useTransition: function() {
        var e = iu(Uo)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Ky,
    useSyncExternalStore: Gy,
    useId: av,
    unstable_isNewReconciler: !1
};
function At(e, t) {
    if (e && e.defaultProps) {
        t = pe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function uc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : pe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var sl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? _r(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , i = Qn(e)
          , o = un(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Gn(e, o, i),
        t !== null && (It(t, e, i, r),
        qs(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , i = Qn(e)
          , o = un(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Gn(e, o, i),
        t !== null && (It(t, e, i, r),
        qs(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ke()
          , r = Qn(e)
          , i = un(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Gn(e, i, r),
        t !== null && (It(t, e, r, n),
        qs(t, e, r))
    }
};
function Xh(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Io(n, r) || !Io(i, o) : !0
}
function dv(e, t, n) {
    var r = !1
      , i = Zn
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = wt(o) : (i = Je(t) ? Lr : _e.current,
    r = t.contextTypes,
    o = (r = r != null) ? Ni(e, i) : Zn),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = sl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function qh(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sl.enqueueReplaceState(t, t.state, null)
}
function cc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    zd(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = wt(o) : (o = Je(t) ? Lr : _e.current,
    i.context = Ni(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (uc(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && sl.enqueueReplaceState(i, i.state, null),
    Ra(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Oi(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += $1(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ou(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function dc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var mC = typeof WeakMap == "function" ? WeakMap : Map;
function fv(e, t, n) {
    n = un(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ja || (ja = !0,
        Sc = r),
        dc(e, t)
    }
    ,
    n
}
function hv(e, t, n) {
    n = un(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            dc(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        dc(e, t),
        typeof r != "function" && (Yn === null ? Yn = new Set([this]) : Yn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Zh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new mC;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = AC.bind(null, e, t, n),
    t.then(e, e))
}
function Jh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ep(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = un(-1, 1),
    t.tag = 2,
    Gn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var gC = yn.ReactCurrentOwner
  , qe = !1;
function $e(e, t, n, r) {
    t.child = e === null ? $y(t, null, n, r) : ji(t, e.child, n, r)
}
function tp(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return gi(t, i),
    r = Hd(e, t, n, r, o, i),
    n = Kd(),
    e !== null && !qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    hn(e, t, i)) : (ue && n && jd(t),
    t.flags |= 1,
    $e(e, t, r, i),
    t.child)
}
function np(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !nf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        pv(e, t, o, r, i)) : (e = ra(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Io,
        n(s, r) && e.ref === t.ref)
            return hn(e, t, i)
    }
    return t.flags |= 1,
    e = Xn(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function pv(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Io(o, r) && e.ref === t.ref)
            if (qe = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (qe = !0);
            else
                return t.lanes = e.lanes,
                hn(e, t, i)
    }
    return fc(e, t, n, r, i)
}
function mv(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            re(si, rt),
            rt |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                re(si, rt),
                rt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            re(si, rt),
            rt |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        re(si, rt),
        rt |= r;
    return $e(e, t, i, n),
    t.child
}
function gv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function fc(e, t, n, r, i) {
    var o = Je(n) ? Lr : _e.current;
    return o = Ni(t, o),
    gi(t, i),
    n = Hd(e, t, n, r, o, i),
    r = Kd(),
    e !== null && !qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    hn(e, t, i)) : (ue && r && jd(t),
    t.flags |= 1,
    $e(e, t, n, i),
    t.child)
}
function rp(e, t, n, r, i) {
    if (Je(n)) {
        var o = !0;
        Ea(t)
    } else
        o = !1;
    if (gi(t, i),
    t.stateNode === null)
        ea(e, t),
        dv(t, n, r),
        cc(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = wt(u) : (u = Je(n) ? Lr : _e.current,
        u = Ni(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && qh(t, s, r, u),
        Nn = !1;
        var f = t.memoizedState;
        s.state = f,
        Ra(t, r, s, i),
        l = t.memoizedState,
        a !== r || f !== l || Ze.current || Nn ? (typeof c == "function" && (uc(t, n, c, r),
        l = t.memoizedState),
        (a = Nn || Xh(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Wy(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : At(t.type, a),
        s.props = u,
        d = t.pendingProps,
        f = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = wt(l) : (l = Je(n) ? Lr : _e.current,
        l = Ni(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && qh(t, s, r, l),
        Nn = !1,
        f = t.memoizedState,
        s.state = f,
        Ra(t, r, s, i);
        var v = t.memoizedState;
        a !== d || f !== v || Ze.current || Nn ? (typeof h == "function" && (uc(t, n, h, r),
        v = t.memoizedState),
        (u = Nn || Xh(t, n, u, r, f, v, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        s.props = r,
        s.state = v,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return hc(e, t, n, r, o, i)
}
function hc(e, t, n, r, i, o) {
    gv(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && $h(t, n, !1),
        hn(e, t, o);
    r = t.stateNode,
    gC.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = ji(t, e.child, null, o),
    t.child = ji(t, null, a, o)) : $e(e, t, a, o),
    t.memoizedState = r.state,
    i && $h(t, n, !0),
    t.child
}
function yv(e) {
    var t = e.stateNode;
    t.pendingContext ? Bh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bh(e, t.context, !1),
    Bd(e, t.containerInfo)
}
function ip(e, t, n, r, i) {
    return Li(),
    Od(i),
    t.flags |= 256,
    $e(e, t, n, r),
    t.child
}
var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function mc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function vv(e, t, n) {
    var r = t.pendingProps, i = de.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    re(de, i & 1),
    e === null)
        return ac(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = ul(s, r, 0, null),
        e = Mr(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = mc(n),
        t.memoizedState = pc,
        e) : Qd(t, s));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return yC(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Xn(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = Xn(a, o) : (o = Mr(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? mc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = pc,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Xn(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Qd(e, t) {
    return t = ul({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ls(e, t, n, r) {
    return r !== null && Od(r),
    ji(t, e.child, null, n),
    e = Qd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function yC(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ou(Error(L(422))),
        Ls(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = ul({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Mr(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && ji(t, e.child, null, s),
        t.child.memoizedState = mc(s),
        t.memoizedState = pc,
        o);
    if (!(t.mode & 1))
        return Ls(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(L(419)),
        r = ou(o, r, void 0),
        Ls(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    qe || a) {
        if (r = Pe,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            fn(e, i),
            It(r, e, i, -1))
        }
        return tf(),
        r = ou(Error(L(421))),
        Ls(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = MC.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    ot = Kn(i.nextSibling),
    st = t,
    ue = !0,
    Dt = null,
    e !== null && (ht[pt++] = an,
    ht[pt++] = ln,
    ht[pt++] = jr,
    an = e.id,
    ln = e.overflow,
    jr = t),
    t = Qd(t, r.children),
    t.flags |= 4096,
    t)
}
function op(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    lc(e.return, t, n)
}
function su(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function xv(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if ($e(e, t, r.children, n),
    r = de.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && op(e, n, t);
                else if (e.tag === 19)
                    op(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (re(de, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Aa(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            su(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Aa(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            su(t, !0, n, null, o);
            break;
        case "together":
            su(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ea(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function hn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Or |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(L(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Xn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Xn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function vC(e, t, n) {
    switch (t.tag) {
    case 3:
        yv(t),
        Li();
        break;
    case 5:
        Hy(t);
        break;
    case 1:
        Je(t.type) && Ea(t);
        break;
    case 4:
        Bd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        re(Pa, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (re(de, de.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? vv(e, t, n) : (re(de, de.current & 1),
            e = hn(e, t, n),
            e !== null ? e.sibling : null);
        re(de, de.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return xv(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        re(de, de.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        mv(e, t, n)
    }
    return hn(e, t, n)
}
var wv, gc, Sv, Cv;
wv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
gc = function() {}
;
Sv = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        wr(Xt.current);
        var o = null;
        switch (n) {
        case "input":
            i = Fu(e, i),
            r = Fu(e, r),
            o = [];
            break;
        case "select":
            i = pe({}, i, {
                value: void 0
            }),
            r = pe({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Bu(e, i),
            r = Bu(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sa)
        }
        Uu(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ao.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ao.hasOwnProperty(u) ? (l != null && u === "onScroll" && se("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Cv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function io(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function xC(e, t, n) {
    var r = t.pendingProps;
    switch (Dd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Oe(t),
        null;
    case 1:
        return Je(t.type) && Ca(),
        Oe(t),
        null;
    case 3:
        return r = t.stateNode,
        Di(),
        ae(Ze),
        ae(_e),
        Ud(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ms(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Dt !== null && (Tc(Dt),
        Dt = null))),
        gc(e, t),
        Oe(t),
        null;
    case 5:
        $d(t);
        var i = wr(Bo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Sv(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(L(166));
                return Oe(t),
                null
            }
            if (e = wr(Xt.current),
            Ms(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Yt] = t,
                r[_o] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    se("cancel", r),
                    se("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    se("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < ho.length; i++)
                        se(ho[i], r);
                    break;
                case "source":
                    se("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    se("error", r),
                    se("load", r);
                    break;
                case "details":
                    se("toggle", r);
                    break;
                case "input":
                    ph(r, o),
                    se("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    se("invalid", r);
                    break;
                case "textarea":
                    gh(r, o),
                    se("invalid", r)
                }
                Uu(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && As(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && As(r.textContent, a, e),
                        i = ["children", "" + a]) : Ao.hasOwnProperty(s) && a != null && s === "onScroll" && se("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ss(r),
                    mh(r, o, !0);
                    break;
                case "textarea":
                    Ss(r),
                    yh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Sa)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Xg(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Yt] = t,
                e[_o] = r,
                wv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Wu(n, r),
                    n) {
                    case "dialog":
                        se("cancel", e),
                        se("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        se("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < ho.length; i++)
                            se(ho[i], e);
                        i = r;
                        break;
                    case "source":
                        se("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        se("error", e),
                        se("load", e),
                        i = r;
                        break;
                    case "details":
                        se("toggle", e),
                        i = r;
                        break;
                    case "input":
                        ph(e, r),
                        i = Fu(e, r),
                        se("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = pe({}, r, {
                            value: void 0
                        }),
                        se("invalid", e);
                        break;
                    case "textarea":
                        gh(e, r),
                        i = Bu(e, r),
                        se("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Uu(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Jg(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && qg(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Mo(e, l) : typeof l == "number" && Mo(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ao.hasOwnProperty(o) ? l != null && o === "onScroll" && se("scroll", e) : l != null && xd(e, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        Ss(e),
                        mh(e, r, !1);
                        break;
                    case "textarea":
                        Ss(e),
                        yh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + qn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? fi(e, !!r.multiple, o, !1) : r.defaultValue != null && fi(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Sa)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Oe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Cv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(L(166));
            if (n = wr(Bo.current),
            wr(Xt.current),
            Ms(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Yt] = t,
                (o = r.nodeValue !== n) && (e = st,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        As(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && As(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Yt] = t,
                t.stateNode = r
        }
        return Oe(t),
        null;
    case 13:
        if (ae(de),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && ot !== null && t.mode & 1 && !(t.flags & 128))
                zy(),
                Li(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ms(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(L(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(L(317));
                    o[Yt] = t
                } else
                    Li(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Oe(t),
                o = !1
            } else
                Dt !== null && (Tc(Dt),
                Dt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || de.current & 1 ? Te === 0 && (Te = 3) : tf())),
        t.updateQueue !== null && (t.flags |= 4),
        Oe(t),
        null);
    case 4:
        return Di(),
        gc(e, t),
        e === null && Vo(t.stateNode.containerInfo),
        Oe(t),
        null;
    case 10:
        return Fd(t.type._context),
        Oe(t),
        null;
    case 17:
        return Je(t.type) && Ca(),
        Oe(t),
        null;
    case 19:
        if (ae(de),
        o = t.memoizedState,
        o === null)
            return Oe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                io(o, !1);
            else {
                if (Te !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Aa(e),
                        s !== null) {
                            for (t.flags |= 128,
                            io(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return re(de, de.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && ye() > Ii && (t.flags |= 128,
                r = !0,
                io(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Aa(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    io(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !ue)
                        return Oe(t),
                        null
                } else
                    2 * ye() - o.renderingStartTime > Ii && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    io(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = ye(),
        t.sibling = null,
        n = de.current,
        re(de, r ? n & 1 | 2 : n & 1),
        t) : (Oe(t),
        null);
    case 22:
    case 23:
        return ef(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? rt & 1073741824 && (Oe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(L(156, t.tag))
}
function wC(e, t) {
    switch (Dd(t),
    t.tag) {
    case 1:
        return Je(t.type) && Ca(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Di(),
        ae(Ze),
        ae(_e),
        Ud(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return $d(t),
        null;
    case 13:
        if (ae(de),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(L(340));
            Li()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(de),
        null;
    case 4:
        return Di(),
        null;
    case 10:
        return Fd(t.type._context),
        null;
    case 22:
    case 23:
        return ef(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var js = !1
  , Ve = !1
  , SC = typeof WeakSet == "function" ? WeakSet : Set
  , V = null;
function oi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ge(e, t, r)
            }
        else
            n.current = null
}
function yc(e, t, n) {
    try {
        n()
    } catch (r) {
        ge(e, t, r)
    }
}
var sp = !1;
function CC(e, t) {
    if (ec = va,
    e = ky(),
    Ld(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i),
                        d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (a = s),
                            f === o && ++c === r && (l = s),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (tc = {
        focusedElem: e,
        selectionRange: n
    },
    va = !1,
    V = t; V !== null; )
        if (t = V,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            V = e;
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var g = v.memoizedProps
                                  , x = v.memoizedState
                                  , p = t.stateNode
                                  , m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : At(t.type, g), x);
                                p.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(L(163))
                        }
                } catch (C) {
                    ge(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    V = e;
                    break
                }
                V = t.return
            }
    return v = sp,
    sp = !1,
    v
}
function So(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && yc(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function al(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function vc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ev(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ev(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Yt],
    delete t[_o],
    delete t[ic],
    delete t[iC],
    delete t[oC])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Tv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ap(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Tv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function xc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Sa));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (xc(e, t, n),
        e = e.sibling; e !== null; )
            xc(e, t, n),
            e = e.sibling
}
function wc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wc(e, t, n),
        e = e.sibling; e !== null; )
            wc(e, t, n),
            e = e.sibling
}
var ke = null
  , jt = !1;
function Tn(e, t, n) {
    for (n = n.child; n !== null; )
        bv(e, t, n),
        n = n.sibling
}
function bv(e, t, n) {
    if (Qt && typeof Qt.onCommitFiberUnmount == "function")
        try {
            Qt.onCommitFiberUnmount(Ja, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ve || oi(n, t);
    case 6:
        var r = ke
          , i = jt;
        ke = null,
        Tn(e, t, n),
        ke = r,
        jt = i,
        ke !== null && (jt ? (e = ke,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
        break;
    case 18:
        ke !== null && (jt ? (e = ke,
        n = n.stateNode,
        e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n),
        Do(e)) : Jl(ke, n.stateNode));
        break;
    case 4:
        r = ke,
        i = jt,
        ke = n.stateNode.containerInfo,
        jt = !0,
        Tn(e, t, n),
        ke = r,
        jt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ve && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && yc(n, t, s),
                i = i.next
            } while (i !== r)
        }
        Tn(e, t, n);
        break;
    case 1:
        if (!Ve && (oi(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ge(n, t, a)
            }
        Tn(e, t, n);
        break;
    case 21:
        Tn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null,
        Tn(e, t, n),
        Ve = r) : Tn(e, t, n);
        break;
    default:
        Tn(e, t, n)
    }
}
function lp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new SC),
        t.forEach(function(r) {
            var i = NC.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function bt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ke = a.stateNode,
                        jt = !1;
                        break e;
                    case 3:
                        ke = a.stateNode.containerInfo,
                        jt = !0;
                        break e;
                    case 4:
                        ke = a.stateNode.containerInfo,
                        jt = !0;
                        break e
                    }
                    a = a.return
                }
                if (ke === null)
                    throw Error(L(160));
                bv(o, s, i),
                ke = null,
                jt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                ge(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Pv(t, e),
            t = t.sibling
}
function Pv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (bt(t, e),
        $t(e),
        r & 4) {
            try {
                So(3, e, e.return),
                al(3, e)
            } catch (g) {
                ge(e, e.return, g)
            }
            try {
                So(5, e, e.return)
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        break;
    case 1:
        bt(t, e),
        $t(e),
        r & 512 && n !== null && oi(n, n.return);
        break;
    case 5:
        if (bt(t, e),
        $t(e),
        r & 512 && n !== null && oi(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Mo(i, "")
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && Yg(i, o),
                    Wu(a, s);
                    var u = Wu(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , d = l[s + 1];
                        c === "style" ? Jg(i, d) : c === "dangerouslySetInnerHTML" ? qg(i, d) : c === "children" ? Mo(i, d) : xd(i, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        _u(i, o);
                        break;
                    case "textarea":
                        Qg(i, o);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        h != null ? fi(i, !!o.multiple, h, !1) : f !== !!o.multiple && (o.defaultValue != null ? fi(i, !!o.multiple, o.defaultValue, !0) : fi(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[_o] = o
                } catch (g) {
                    ge(e, e.return, g)
                }
        }
        break;
    case 6:
        if (bt(t, e),
        $t(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(L(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        break;
    case 3:
        if (bt(t, e),
        $t(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Do(t.containerInfo)
            } catch (g) {
                ge(e, e.return, g)
            }
        break;
    case 4:
        bt(t, e),
        $t(e);
        break;
    case 13:
        bt(t, e),
        $t(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Zd = ye())),
        r & 4 && lp(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ve = (u = Ve) || c,
        bt(t, e),
        Ve = u) : bt(t, e),
        $t(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (V = e,
                c = e.child; c !== null; ) {
                    for (d = V = c; V !== null; ) {
                        switch (f = V,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            So(4, f, f.return);
                            break;
                        case 1:
                            oi(f, f.return);
                            var v = f.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (g) {
                                    ge(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            oi(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                cp(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        V = h) : cp(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Zg("display", s))
                        } catch (g) {
                            ge(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            ge(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        bt(t, e),
        $t(e),
        r & 4 && lp(e);
        break;
    case 21:
        break;
    default:
        bt(t, e),
        $t(e)
    }
}
function $t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Tv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(L(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Mo(i, ""),
                r.flags &= -33);
                var o = ap(e);
                wc(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = ap(e);
                xc(e, a, s);
                break;
            default:
                throw Error(L(161))
            }
        } catch (l) {
            ge(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function EC(e, t, n) {
    V = e,
    kv(e)
}
function kv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var i = V
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || js;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Ve;
                a = js;
                var u = Ve;
                if (js = s,
                (Ve = l) && !u)
                    for (V = i; V !== null; )
                        s = V,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? dp(i) : l !== null ? (l.return = s,
                        V = l) : dp(i);
                for (; o !== null; )
                    V = o,
                    kv(o),
                    o = o.sibling;
                V = i,
                js = a,
                Ve = u
            }
            up(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            V = o) : up(e)
    }
}
function up(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ve || al(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ve)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : At(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Gh(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Gh(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Do(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(L(163))
                    }
                Ve || t.flags & 512 && vc(t)
            } catch (f) {
                ge(t, t.return, f)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function cp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function dp(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    al(4, t)
                } catch (l) {
                    ge(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ge(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    vc(t)
                } catch (l) {
                    ge(t, o, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    vc(t)
                } catch (l) {
                    ge(t, s, l)
                }
            }
        } catch (l) {
            ge(t, t.return, l)
        }
        if (t === e) {
            V = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            V = a;
            break
        }
        V = t.return
    }
}
var TC = Math.ceil
  , La = yn.ReactCurrentDispatcher
  , Xd = yn.ReactCurrentOwner
  , yt = yn.ReactCurrentBatchConfig
  , Z = 0
  , Pe = null
  , we = null
  , Ae = 0
  , rt = 0
  , si = ar(0)
  , Te = 0
  , Ho = null
  , Or = 0
  , ll = 0
  , qd = 0
  , Co = null
  , Xe = null
  , Zd = 0
  , Ii = 1 / 0
  , rn = null
  , ja = !1
  , Sc = null
  , Yn = null
  , Ds = !1
  , zn = null
  , Da = 0
  , Eo = 0
  , Cc = null
  , ta = -1
  , na = 0;
function Ke() {
    return Z & 6 ? ye() : ta !== -1 ? ta : ta = ye()
}
function Qn(e) {
    return e.mode & 1 ? Z & 2 && Ae !== 0 ? Ae & -Ae : aC.transition !== null ? (na === 0 && (na = dy()),
    na) : (e = te,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : vy(e.type)),
    e) : 1
}
function It(e, t, n, r) {
    if (50 < Eo)
        throw Eo = 0,
        Cc = null,
        Error(L(185));
    is(e, n, r),
    (!(Z & 2) || e !== Pe) && (e === Pe && (!(Z & 2) && (ll |= n),
    Te === 4 && jn(e, Ae)),
    et(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (Ii = ye() + 500,
    il && lr()))
}
function et(e, t) {
    var n = e.callbackNode;
    aS(e, t);
    var r = ya(e, e === Pe ? Ae : 0);
    if (r === 0)
        n !== null && wh(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && wh(n),
        t === 1)
            e.tag === 0 ? sC(fp.bind(null, e)) : Vy(fp.bind(null, e)),
            nC(function() {
                !(Z & 6) && lr()
            }),
            n = null;
        else {
            switch (fy(r)) {
            case 1:
                n = Td;
                break;
            case 4:
                n = uy;
                break;
            case 16:
                n = ga;
                break;
            case 536870912:
                n = cy;
                break;
            default:
                n = ga
            }
            n = Ov(n, Rv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Rv(e, t) {
    if (ta = -1,
    na = 0,
    Z & 6)
        throw Error(L(327));
    var n = e.callbackNode;
    if (yi() && e.callbackNode !== n)
        return null;
    var r = ya(e, e === Pe ? Ae : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Oa(e, r);
    else {
        t = r;
        var i = Z;
        Z |= 2;
        var o = Mv();
        (Pe !== e || Ae !== t) && (rn = null,
        Ii = ye() + 500,
        Ar(e, t));
        do
            try {
                kC();
                break
            } catch (a) {
                Av(e, a)
            }
        while (!0);
        Vd(),
        La.current = o,
        Z = i,
        we !== null ? t = 0 : (Pe = null,
        Ae = 0,
        t = Te)
    }
    if (t !== 0) {
        if (t === 2 && (i = Qu(e),
        i !== 0 && (r = i,
        t = Ec(e, i))),
        t === 1)
            throw n = Ho,
            Ar(e, 0),
            jn(e, r),
            et(e, ye()),
            n;
        if (t === 6)
            jn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !bC(i) && (t = Oa(e, r),
            t === 2 && (o = Qu(e),
            o !== 0 && (r = o,
            t = Ec(e, o))),
            t === 1))
                throw n = Ho,
                Ar(e, 0),
                jn(e, r),
                et(e, ye()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(L(345));
            case 2:
                gr(e, Xe, rn);
                break;
            case 3:
                if (jn(e, r),
                (r & 130023424) === r && (t = Zd + 500 - ye(),
                10 < t)) {
                    if (ya(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Ke(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = rc(gr.bind(null, e, Xe, rn), t);
                    break
                }
                gr(e, Xe, rn);
                break;
            case 4:
                if (jn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - Ot(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = ye() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * TC(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = rc(gr.bind(null, e, Xe, rn), r);
                    break
                }
                gr(e, Xe, rn);
                break;
            case 5:
                gr(e, Xe, rn);
                break;
            default:
                throw Error(L(329))
            }
        }
    }
    return et(e, ye()),
    e.callbackNode === n ? Rv.bind(null, e) : null
}
function Ec(e, t) {
    var n = Co;
    return e.current.memoizedState.isDehydrated && (Ar(e, t).flags |= 256),
    e = Oa(e, t),
    e !== 2 && (t = Xe,
    Xe = n,
    t !== null && Tc(t)),
    e
}
function Tc(e) {
    Xe === null ? Xe = e : Xe.push.apply(Xe, e)
}
function bC(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ft(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function jn(e, t) {
    for (t &= ~qd,
    t &= ~ll,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ot(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function fp(e) {
    if (Z & 6)
        throw Error(L(327));
    yi();
    var t = ya(e, 0);
    if (!(t & 1))
        return et(e, ye()),
        null;
    var n = Oa(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Qu(e);
        r !== 0 && (t = r,
        n = Ec(e, r))
    }
    if (n === 1)
        throw n = Ho,
        Ar(e, 0),
        jn(e, t),
        et(e, ye()),
        n;
    if (n === 6)
        throw Error(L(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    gr(e, Xe, rn),
    et(e, ye()),
    null
}
function Jd(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (Ii = ye() + 500,
        il && lr())
    }
}
function Ir(e) {
    zn !== null && zn.tag === 0 && !(Z & 6) && yi();
    var t = Z;
    Z |= 1;
    var n = yt.transition
      , r = te;
    try {
        if (yt.transition = null,
        te = 1,
        e)
            return e()
    } finally {
        te = r,
        yt.transition = n,
        Z = t,
        !(Z & 6) && lr()
    }
}
function ef() {
    rt = si.current,
    ae(si)
}
function Ar(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    tC(n)),
    we !== null)
        for (n = we.return; n !== null; ) {
            var r = n;
            switch (Dd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ca();
                break;
            case 3:
                Di(),
                ae(Ze),
                ae(_e),
                Ud();
                break;
            case 5:
                $d(r);
                break;
            case 4:
                Di();
                break;
            case 13:
                ae(de);
                break;
            case 19:
                ae(de);
                break;
            case 10:
                Fd(r.type._context);
                break;
            case 22:
            case 23:
                ef()
            }
            n = n.return
        }
    if (Pe = e,
    we = e = Xn(e.current, null),
    Ae = rt = t,
    Te = 0,
    Ho = null,
    qd = ll = Or = 0,
    Xe = Co = null,
    xr !== null) {
        for (t = 0; t < xr.length; t++)
            if (n = xr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        xr = null
    }
    return e
}
function Av(e, t) {
    do {
        var n = we;
        try {
            if (Vd(),
            Zs.current = Na,
            Ma) {
                for (var r = he.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ma = !1
            }
            if (Dr = 0,
            be = Ce = he = null,
            wo = !1,
            $o = 0,
            Xd.current = null,
            n === null || n.return === null) {
                Te = 1,
                Ho = t,
                we = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = Ae,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = Jh(s);
                    if (h !== null) {
                        h.flags &= -257,
                        ep(h, s, a, o, t),
                        h.mode & 1 && Zh(o, u, t),
                        t = h,
                        l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Zh(o, u, t),
                            tf();
                            break e
                        }
                        l = Error(L(426))
                    }
                } else if (ue && a.mode & 1) {
                    var x = Jh(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        ep(x, s, a, o, t),
                        Od(Oi(l, a));
                        break e
                    }
                }
                o = l = Oi(l, a),
                Te !== 4 && (Te = 2),
                Co === null ? Co = [o] : Co.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var p = fv(o, l, t);
                        Kh(o, p);
                        break e;
                    case 1:
                        a = l;
                        var m = o.type
                          , y = o.stateNode;
                        if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Yn === null || !Yn.has(y)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var C = hv(o, a, t);
                            Kh(o, C);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Lv(n)
        } catch (E) {
            t = E,
            we === n && n !== null && (we = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Mv() {
    var e = La.current;
    return La.current = Na,
    e === null ? Na : e
}
function tf() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Pe === null || !(Or & 268435455) && !(ll & 268435455) || jn(Pe, Ae)
}
function Oa(e, t) {
    var n = Z;
    Z |= 2;
    var r = Mv();
    (Pe !== e || Ae !== t) && (rn = null,
    Ar(e, t));
    do
        try {
            PC();
            break
        } catch (i) {
            Av(e, i)
        }
    while (!0);
    if (Vd(),
    Z = n,
    La.current = r,
    we !== null)
        throw Error(L(261));
    return Pe = null,
    Ae = 0,
    Te
}
function PC() {
    for (; we !== null; )
        Nv(we)
}
function kC() {
    for (; we !== null && !Z1(); )
        Nv(we)
}
function Nv(e) {
    var t = Dv(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps,
    t === null ? Lv(e) : we = t,
    Xd.current = null
}
function Lv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = wC(n, t),
            n !== null) {
                n.flags &= 32767,
                we = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Te = 6,
                we = null;
                return
            }
        } else if (n = xC(n, t, rt),
        n !== null) {
            we = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            we = t;
            return
        }
        we = t = e
    } while (t !== null);
    Te === 0 && (Te = 5)
}
function gr(e, t, n) {
    var r = te
      , i = yt.transition;
    try {
        yt.transition = null,
        te = 1,
        RC(e, t, n, r)
    } finally {
        yt.transition = i,
        te = r
    }
    return null
}
function RC(e, t, n, r) {
    do
        yi();
    while (zn !== null);
    if (Z & 6)
        throw Error(L(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(L(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (lS(e, o),
    e === Pe && (we = Pe = null,
    Ae = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ds || (Ds = !0,
    Ov(ga, function() {
        return yi(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = yt.transition,
        yt.transition = null;
        var s = te;
        te = 1;
        var a = Z;
        Z |= 4,
        Xd.current = null,
        CC(e, n),
        Pv(n, e),
        YS(tc),
        va = !!ec,
        tc = ec = null,
        e.current = n,
        EC(n),
        J1(),
        Z = a,
        te = s,
        yt.transition = o
    } else
        e.current = n;
    if (Ds && (Ds = !1,
    zn = e,
    Da = i),
    o = e.pendingLanes,
    o === 0 && (Yn = null),
    nS(n.stateNode),
    et(e, ye()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (ja)
        throw ja = !1,
        e = Sc,
        Sc = null,
        e;
    return Da & 1 && e.tag !== 0 && yi(),
    o = e.pendingLanes,
    o & 1 ? e === Cc ? Eo++ : (Eo = 0,
    Cc = e) : Eo = 0,
    lr(),
    null
}
function yi() {
    if (zn !== null) {
        var e = fy(Da)
          , t = yt.transition
          , n = te;
        try {
            if (yt.transition = null,
            te = 16 > e ? 16 : e,
            zn === null)
                var r = !1;
            else {
                if (e = zn,
                zn = null,
                Da = 0,
                Z & 6)
                    throw Error(L(331));
                var i = Z;
                for (Z |= 4,
                V = e.current; V !== null; ) {
                    var o = V
                      , s = o.child;
                    if (V.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        So(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        V = d;
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (Ev(c),
                                            c === u) {
                                                V = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                V = f;
                                                break
                                            }
                                            V = h
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null,
                                        g = x
                                    } while (g !== null)
                                }
                            }
                            V = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        V = s;
                    else
                        e: for (; V !== null; ) {
                            if (o = V,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    So(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                V = p;
                                break e
                            }
                            V = o.return
                        }
                }
                var m = e.current;
                for (V = m; V !== null; ) {
                    s = V;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null)
                        y.return = s,
                        V = y;
                    else
                        e: for (s = m; V !== null; ) {
                            if (a = V,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        al(9, a)
                                    }
                                } catch (E) {
                                    ge(a, a.return, E)
                                }
                            if (a === s) {
                                V = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                V = C;
                                break e
                            }
                            V = a.return
                        }
                }
                if (Z = i,
                lr(),
                Qt && typeof Qt.onPostCommitFiberRoot == "function")
                    try {
                        Qt.onPostCommitFiberRoot(Ja, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            te = n,
            yt.transition = t
        }
    }
    return !1
}
function hp(e, t, n) {
    t = Oi(n, t),
    t = fv(e, t, 1),
    e = Gn(e, t, 1),
    t = Ke(),
    e !== null && (is(e, 1, t),
    et(e, t))
}
function ge(e, t, n) {
    if (e.tag === 3)
        hp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                hp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))) {
                    e = Oi(n, e),
                    e = hv(t, e, 1),
                    t = Gn(t, e, 1),
                    e = Ke(),
                    t !== null && (is(t, 1, e),
                    et(t, e));
                    break
                }
            }
            t = t.return
        }
}
function AC(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ke(),
    e.pingedLanes |= e.suspendedLanes & n,
    Pe === e && (Ae & n) === n && (Te === 4 || Te === 3 && (Ae & 130023424) === Ae && 500 > ye() - Zd ? Ar(e, 0) : qd |= n),
    et(e, t)
}
function jv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ts,
    Ts <<= 1,
    !(Ts & 130023424) && (Ts = 4194304)) : t = 1);
    var n = Ke();
    e = fn(e, t),
    e !== null && (is(e, t, n),
    et(e, n))
}
function MC(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    jv(e, n)
}
function NC(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(L(314))
    }
    r !== null && r.delete(t),
    jv(e, n)
}
var Dv;
Dv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current)
            qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return qe = !1,
                vC(e, t, n);
            qe = !!(e.flags & 131072)
        }
    else
        qe = !1,
        ue && t.flags & 1048576 && Fy(t, ba, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ea(e, t),
        e = t.pendingProps;
        var i = Ni(t, _e.current);
        gi(t, n),
        i = Hd(null, t, r, e, i, n);
        var o = Kd();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Je(r) ? (o = !0,
        Ea(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        zd(t),
        i.updater = sl,
        t.stateNode = i,
        i._reactInternals = t,
        cc(t, r, e, n),
        t = hc(null, t, r, !0, o, n)) : (t.tag = 0,
        ue && o && jd(t),
        $e(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ea(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = jC(r),
            e = At(r, e),
            i) {
            case 0:
                t = fc(null, t, r, e, n);
                break e;
            case 1:
                t = rp(null, t, r, e, n);
                break e;
            case 11:
                t = tp(null, t, r, e, n);
                break e;
            case 14:
                t = np(null, t, r, At(r.type, e), n);
                break e
            }
            throw Error(L(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : At(r, i),
        fc(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : At(r, i),
        rp(e, t, r, i, n);
    case 3:
        e: {
            if (yv(t),
            e === null)
                throw Error(L(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Wy(e, t),
            Ra(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Oi(Error(L(423)), t),
                    t = ip(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Oi(Error(L(424)), t),
                    t = ip(e, t, r, n, i);
                    break e
                } else
                    for (ot = Kn(t.stateNode.containerInfo.firstChild),
                    st = t,
                    ue = !0,
                    Dt = null,
                    n = $y(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Li(),
                r === i) {
                    t = hn(e, t, n);
                    break e
                }
                $e(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Hy(t),
        e === null && ac(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        nc(r, i) ? s = null : o !== null && nc(r, o) && (t.flags |= 32),
        gv(e, t),
        $e(e, t, s, n),
        t.child;
    case 6:
        return e === null && ac(t),
        null;
    case 13:
        return vv(e, t, n);
    case 4:
        return Bd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ji(t, null, r, n) : $e(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : At(r, i),
        tp(e, t, r, i, n);
    case 7:
        return $e(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return $e(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return $e(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            re(Pa, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (Ft(o.value, s)) {
                    if (o.children === i.children && !Ze.current) {
                        t = hn(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = un(-1, n & -n),
                                        l.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    lc(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(L(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            lc(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            $e(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        gi(t, n),
        i = wt(i),
        r = r(i),
        t.flags |= 1,
        $e(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = At(r, t.pendingProps),
        i = At(r.type, i),
        np(e, t, r, i, n);
    case 15:
        return pv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : At(r, i),
        ea(e, t),
        t.tag = 1,
        Je(r) ? (e = !0,
        Ea(t)) : e = !1,
        gi(t, n),
        dv(t, r, i),
        cc(t, r, i, n),
        hc(null, t, r, !0, e, n);
    case 19:
        return xv(e, t, n);
    case 22:
        return mv(e, t, n)
    }
    throw Error(L(156, t.tag))
}
;
function Ov(e, t) {
    return ly(e, t)
}
function LC(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function mt(e, t, n, r) {
    return new LC(e,t,n,r)
}
function nf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function jC(e) {
    if (typeof e == "function")
        return nf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Sd)
            return 11;
        if (e === Cd)
            return 14
    }
    return 2
}
function Xn(e, t) {
    var n = e.alternate;
    return n === null ? (n = mt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ra(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        nf(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Xr:
            return Mr(n.children, i, o, t);
        case wd:
            s = 8,
            i |= 8;
            break;
        case Du:
            return e = mt(12, n, t, i | 2),
            e.elementType = Du,
            e.lanes = o,
            e;
        case Ou:
            return e = mt(13, n, t, i),
            e.elementType = Ou,
            e.lanes = o,
            e;
        case Iu:
            return e = mt(19, n, t, i),
            e.elementType = Iu,
            e.lanes = o,
            e;
        case Hg:
            return ul(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ug:
                    s = 10;
                    break e;
                case Wg:
                    s = 9;
                    break e;
                case Sd:
                    s = 11;
                    break e;
                case Cd:
                    s = 14;
                    break e;
                case Mn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(L(130, e == null ? e : typeof e, ""))
        }
    return t = mt(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Mr(e, t, n, r) {
    return e = mt(7, e, r, t),
    e.lanes = n,
    e
}
function ul(e, t, n, r) {
    return e = mt(22, e, r, t),
    e.elementType = Hg,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function au(e, t, n) {
    return e = mt(6, e, null, t),
    e.lanes = n,
    e
}
function lu(e, t, n) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function DC(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = $l(0),
    this.expirationTimes = $l(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = $l(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function rf(e, t, n, r, i, o, s, a, l) {
    return e = new DC(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = mt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    zd(o),
    e
}
function OC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Qr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Iv(e) {
    if (!e)
        return Zn;
    e = e._reactInternals;
    e: {
        if (_r(e) !== e || e.tag !== 1)
            throw Error(L(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Je(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(L(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Je(n))
            return Iy(e, n, t)
    }
    return t
}
function Vv(e, t, n, r, i, o, s, a, l) {
    return e = rf(n, r, !0, e, i, o, s, a, l),
    e.context = Iv(null),
    n = e.current,
    r = Ke(),
    i = Qn(n),
    o = un(r, i),
    o.callback = t ?? null,
    Gn(n, o, i),
    e.current.lanes = i,
    is(e, i, r),
    et(e, r),
    e
}
function cl(e, t, n, r) {
    var i = t.current
      , o = Ke()
      , s = Qn(i);
    return n = Iv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = un(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Gn(i, t, s),
    e !== null && (It(e, i, s, o),
    qs(e, i, s)),
    s
}
function Ia(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function pp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function of(e, t) {
    pp(e, t),
    (e = e.alternate) && pp(e, t)
}
function IC() {
    return null
}
var Fv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function sf(e) {
    this._internalRoot = e
}
dl.prototype.render = sf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(L(409));
    cl(e, t, null, null)
}
;
dl.prototype.unmount = sf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ir(function() {
            cl(null, e, null, null)
        }),
        t[dn] = null
    }
}
;
function dl(e) {
    this._internalRoot = e
}
dl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = my();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++)
            ;
        Ln.splice(n, 0, e),
        n === 0 && yy(e)
    }
}
;
function af(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function fl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function mp() {}
function VC(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Ia(s);
                o.call(u)
            }
        }
        var s = Vv(t, r, e, 0, null, !1, !1, "", mp);
        return e._reactRootContainer = s,
        e[dn] = s.current,
        Vo(e.nodeType === 8 ? e.parentNode : e),
        Ir(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ia(l);
            a.call(u)
        }
    }
    var l = rf(e, 0, !1, null, null, !1, !1, "", mp);
    return e._reactRootContainer = l,
    e[dn] = l.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    Ir(function() {
        cl(t, l, n, r)
    }),
    l
}
function hl(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Ia(s);
                a.call(l)
            }
        }
        cl(t, s, e, i)
    } else
        s = VC(n, t, e, i, r);
    return Ia(s)
}
hy = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = fo(t.pendingLanes);
            n !== 0 && (bd(t, n | 1),
            et(t, ye()),
            !(Z & 6) && (Ii = ye() + 500,
            lr()))
        }
        break;
    case 13:
        Ir(function() {
            var r = fn(e, 1);
            if (r !== null) {
                var i = Ke();
                It(r, e, 1, i)
            }
        }),
        of(e, 1)
    }
}
;
Pd = function(e) {
    if (e.tag === 13) {
        var t = fn(e, 134217728);
        if (t !== null) {
            var n = Ke();
            It(t, e, 134217728, n)
        }
        of(e, 134217728)
    }
}
;
py = function(e) {
    if (e.tag === 13) {
        var t = Qn(e)
          , n = fn(e, t);
        if (n !== null) {
            var r = Ke();
            It(n, e, t, r)
        }
        of(e, t)
    }
}
;
my = function() {
    return te
}
;
gy = function(e, t) {
    var n = te;
    try {
        return te = e,
        t()
    } finally {
        te = n
    }
}
;
Ku = function(e, t, n) {
    switch (t) {
    case "input":
        if (_u(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = rl(r);
                    if (!i)
                        throw Error(L(90));
                    Gg(r),
                    _u(r, i)
                }
            }
        }
        break;
    case "textarea":
        Qg(e, n);
        break;
    case "select":
        t = n.value,
        t != null && fi(e, !!n.multiple, t, !1)
    }
}
;
ny = Jd;
ry = Ir;
var FC = {
    usingClientEntryPoint: !1,
    Events: [ss, ei, rl, ey, ty, Jd]
}
  , oo = {
    findFiberByHostInstance: vr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , _C = {
    bundleType: oo.bundleType,
    version: oo.version,
    rendererPackageName: oo.rendererPackageName,
    rendererConfig: oo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = sy(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: oo.findFiberByHostInstance || IC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Os.isDisabled && Os.supportsFiber)
        try {
            Ja = Os.inject(_C),
            Qt = Os
        } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FC;
ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!af(t))
        throw Error(L(200));
    return OC(e, t, null, n)
}
;
ut.createRoot = function(e, t) {
    if (!af(e))
        throw Error(L(299));
    var n = !1
      , r = ""
      , i = Fv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = rf(e, 1, !1, null, null, n, !1, r, i),
    e[dn] = t.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    new sf(t)
}
;
ut.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","),
        Error(L(268, e)));
    return e = sy(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ut.flushSync = function(e) {
    return Ir(e)
}
;
ut.hydrate = function(e, t, n) {
    if (!fl(t))
        throw Error(L(200));
    return hl(null, e, t, !0, n)
}
;
ut.hydrateRoot = function(e, t, n) {
    if (!af(e))
        throw Error(L(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = Fv;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Vv(t, null, e, 1, n ?? null, i, !1, o, s),
    e[dn] = t.current,
    Vo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new dl(t)
}
;
ut.render = function(e, t, n) {
    if (!fl(t))
        throw Error(L(200));
    return hl(null, e, t, !1, n)
}
;
ut.unmountComponentAtNode = function(e) {
    if (!fl(e))
        throw Error(L(40));
    return e._reactRootContainer ? (Ir(function() {
        hl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[dn] = null
        })
    }),
    !0) : !1
}
;
ut.unstable_batchedUpdates = Jd;
ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!fl(n))
        throw Error(L(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(L(38));
    return hl(e, t, n, !1, r)
}
;
ut.version = "18.3.1-next-f1338f8080-20240426";
function _v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v)
        } catch (e) {
            console.error(e)
        }
}
_v(),
_g.exports = ut;
var ls = _g.exports;
const zv = Pg(ls);
var Bv, gp = ls;
Bv = gp.createRoot,
gp.hydrateRoot;
const zC = 1
  , BC = 1e6;
let uu = 0;
function $C() {
    return uu = (uu + 1) % Number.MAX_SAFE_INTEGER,
    uu.toString()
}
const cu = new Map
  , yp = e => {
    if (cu.has(e))
        return;
    const t = setTimeout( () => {
        cu.delete(e),
        To({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , BC);
    cu.set(e, t)
}
  , UC = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, zC)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? yp(n) : e.toasts.forEach(r => {
                yp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ia = [];
let oa = {
    toasts: []
};
function To(e) {
    oa = UC(oa, e),
    ia.forEach(t => {
        t(oa)
    }
    )
}
function WC({...e}) {
    const t = $C()
      , n = i => To({
        type: "UPDATE_TOAST",
        toast: {
            ...i,
            id: t
        }
    })
      , r = () => To({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return To({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function HC() {
    const [e,t] = w.useState(oa);
    return w.useEffect( () => (ia.push(t),
    () => {
        const n = ia.indexOf(t);
        n > -1 && ia.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: WC,
        dismiss: n => To({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Ee(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (e == null || e(i),
        n === !1 || !i.defaultPrevented)
            return t == null ? void 0 : t(i)
    }
}
function vp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function $v(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const o = vp(i, t);
            return !n && typeof o == "function" && (n = !0),
            o
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const o = r[i];
                    typeof o == "function" ? o() : vp(e[i], null)
                }
            }
    }
}
function _t(...e) {
    return w.useCallback($v(...e), e)
}
function pl(e, t=[]) {
    let n = [];
    function r(o, s) {
        const a = w.createContext(s)
          , l = n.length;
        n = [...n, s];
        const u = d => {
            var p;
            const {scope: f, children: h, ...v} = d
              , g = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a
              , x = w.useMemo( () => v, Object.values(v));
            return S.jsx(g.Provider, {
                value: x,
                children: h
            })
        }
        ;
        u.displayName = o + "Provider";
        function c(d, f) {
            var g;
            const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , v = w.useContext(h);
            if (v)
                return v;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${o}\``)
        }
        return [u, c]
    }
    const i = () => {
        const o = n.map(s => w.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return i.scopeName = e,
    [r, KC(i, ...t)]
}
function KC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(o) {
            const s = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(o)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function bc(e) {
    const t = GC(e)
      , n = w.forwardRef( (r, i) => {
        const {children: o, ...s} = r
          , a = w.Children.toArray(o)
          , l = a.find(QC);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
            return S.jsx(t, {
                ...s,
                ref: i,
                children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
            })
        }
        return S.jsx(t, {
            ...s,
            ref: i,
            children: o
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function GC(e) {
    const t = w.forwardRef( (n, r) => {
        const {children: i, ...o} = n;
        if (w.isValidElement(i)) {
            const s = qC(i)
              , a = XC(o, i.props);
            return i.type !== w.Fragment && (a.ref = r ? $v(r, s) : s),
            w.cloneElement(i, a)
        }
        return w.Children.count(i) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Uv = Symbol("radix.slottable");
function YC(e) {
    const t = ({children: n}) => S.jsx(S.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Uv,
    t
}
function QC(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Uv
}
function XC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const i = e[r]
          , o = t[r];
        /^on[A-Z]/.test(r) ? i && o ? n[r] = (...a) => {
            const l = o(...a);
            return i(...a),
            l
        }
        : i && (n[r] = i) : r === "style" ? n[r] = {
            ...i,
            ...o
        } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function qC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function ZC(e) {
    const t = e + "CollectionProvider"
      , [n,r] = pl(t)
      , [i,o] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = g => {
        const {scope: x, children: p} = g
          , m = j.useRef(null)
          , y = j.useRef(new Map).current;
        return S.jsx(i, {
            scope: x,
            itemMap: y,
            collectionRef: m,
            children: p
        })
    }
    ;
    s.displayName = t;
    const a = e + "CollectionSlot"
      , l = bc(a)
      , u = j.forwardRef( (g, x) => {
        const {scope: p, children: m} = g
          , y = o(a, p)
          , C = _t(x, y.collectionRef);
        return S.jsx(l, {
            ref: C,
            children: m
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = bc(c)
      , h = j.forwardRef( (g, x) => {
        const {scope: p, children: m, ...y} = g
          , C = j.useRef(null)
          , E = _t(x, C)
          , T = o(c, p);
        return j.useEffect( () => (T.itemMap.set(C, {
            ref: C,
            ...y
        }),
        () => void T.itemMap.delete(C))),
        S.jsx(f, {
            [d]: "",
            ref: E,
            children: m
        })
    }
    );
    h.displayName = c;
    function v(g) {
        const x = o(e + "CollectionConsumer", g);
        return j.useCallback( () => {
            const m = x.collectionRef.current;
            if (!m)
                return [];
            const y = Array.from(m.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort( (T, b) => y.indexOf(T.ref.current) - y.indexOf(b.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: h
    }, v, r]
}
var JC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , nt = JC.reduce( (e, t) => {
    const n = bc(`Primitive.${t}`)
      , r = w.forwardRef( (i, o) => {
        const {asChild: s, ...a} = i
          , l = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        S.jsx(l, {
            ...a,
            ref: o
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Wv(e, t) {
    e && ls.flushSync( () => e.dispatchEvent(t))
}
function Jn(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function eE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Jn(e);
    w.useEffect( () => {
        const r = i => {
            i.key === "Escape" && n(i)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var tE = "DismissableLayer", Pc = "dismissableLayer.update", nE = "dismissableLayer.pointerDownOutside", rE = "dismissableLayer.focusOutside", xp, Hv = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), lf = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: o, onInteractOutside: s, onDismiss: a, ...l} = e
      , u = w.useContext(Hv)
      , [c,d] = w.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = w.useState({})
      , v = _t(t, b => d(b))
      , g = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , p = g.indexOf(x)
      , m = c ? g.indexOf(c) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , C = m >= p
      , E = oE(b => {
        const P = b.target
          , M = [...u.branches].some(N => N.contains(P));
        !C || M || (i == null || i(b),
        s == null || s(b),
        b.defaultPrevented || a == null || a())
    }
    , f)
      , T = sE(b => {
        const P = b.target;
        [...u.branches].some(N => N.contains(P)) || (o == null || o(b),
        s == null || s(b),
        b.defaultPrevented || a == null || a())
    }
    , f);
    return eE(b => {
        m === u.layers.size - 1 && (r == null || r(b),
        !b.defaultPrevented && a && (b.preventDefault(),
        a()))
    }
    , f),
    w.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (xp = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            wp(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = xp)
            }
    }
    , [c, f, n, u]),
    w.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        wp())
    }
    , [c, u]),
    w.useEffect( () => {
        const b = () => h({});
        return document.addEventListener(Pc, b),
        () => document.removeEventListener(Pc, b)
    }
    , []),
    S.jsx(nt.div, {
        ...l,
        ref: v,
        style: {
            pointerEvents: y ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Ee(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Ee(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Ee(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
lf.displayName = tE;
var iE = "DismissableLayerBranch"
  , Kv = w.forwardRef( (e, t) => {
    const n = w.useContext(Hv)
      , r = w.useRef(null)
      , i = _t(t, r);
    return w.useEffect( () => {
        const o = r.current;
        if (o)
            return n.branches.add(o),
            () => {
                n.branches.delete(o)
            }
    }
    , [n.branches]),
    S.jsx(nt.div, {
        ...e,
        ref: i
    })
}
);
Kv.displayName = iE;
function oE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Jn(e)
      , r = w.useRef(!1)
      , i = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const o = a => {
            if (a.target && !r.current) {
                let l = function() {
                    Gv(nE, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
                i.current = l,
                t.addEventListener("click", i.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", i.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", o)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", o),
            t.removeEventListener("click", i.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function sE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Jn(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const i = o => {
            o.target && !r.current && Gv(rE, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function wp() {
    const e = new CustomEvent(Pc);
    document.dispatchEvent(e)
}
function Gv(e, t, n, {discrete: r}) {
    const i = n.originalEvent.target
      , o = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? Wv(i, o) : i.dispatchEvent(o)
}
var aE = lf
  , lE = Kv
  , er = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , uE = "Portal"
  , Yv = w.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [i,o] = w.useState(!1);
    er( () => o(!0), []);
    const s = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return s ? zv.createPortal(S.jsx(nt.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Yv.displayName = uE;
function cE(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var uf = e => {
    const {present: t, children: n} = e
      , r = dE(t)
      , i = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , o = _t(r.ref, fE(i));
    return typeof n == "function" || r.isPresent ? w.cloneElement(i, {
        ref: o
    }) : null
}
;
uf.displayName = "Presence";
function dE(e) {
    const [t,n] = w.useState()
      , r = w.useRef(null)
      , i = w.useRef(e)
      , o = w.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [a,l] = cE(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const u = Is(r.current);
        o.current = a === "mounted" ? u : "none"
    }
    , [a]),
    er( () => {
        const u = r.current
          , c = i.current;
        if (c !== e) {
            const f = o.current
              , h = Is(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            i.current = e
        }
    }
    , [e, l]),
    er( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const g = Is(r.current).includes(h.animationName);
                if (h.target === t && g && (l("ANIMATION_END"),
                !i.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (o.current = Is(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Is(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function fE(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var hE = Vg[" useInsertionEffect ".trim().toString()] || er;
function pE({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [i,o,s] = mE({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : i;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = w.useCallback(c => {
        var d;
        if (a) {
            const f = gE(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else
            o(c)
    }
    , [a, e, o, s]);
    return [l, u]
}
function mE({defaultProp: e, onChange: t}) {
    const [n,r] = w.useState(e)
      , i = w.useRef(n)
      , o = w.useRef(t);
    return hE( () => {
        o.current = t
    }
    , [t]),
    w.useEffect( () => {
        var s;
        i.current !== n && ((s = o.current) == null || s.call(o, n),
        i.current = n)
    }
    , [n, i]),
    [n, r, o]
}
function gE(e) {
    return typeof e == "function"
}
var yE = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , vE = "VisuallyHidden"
  , ml = w.forwardRef( (e, t) => S.jsx(nt.span, {
    ...e,
    ref: t,
    style: {
        ...yE,
        ...e.style
    }
}));
ml.displayName = vE;
var xE = ml
  , cf = "ToastProvider"
  , [df,wE,SE] = ZC("Toast")
  , [Qv,uL] = pl("Toast", [SE])
  , [CE,gl] = Qv(cf)
  , Xv = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: i="right", swipeThreshold: o=50, children: s} = e
      , [a,l] = w.useState(null)
      , [u,c] = w.useState(0)
      , d = w.useRef(!1)
      , f = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${cf}\`. Expected non-empty \`string\`.`),
    S.jsx(df.Provider, {
        scope: t,
        children: S.jsx(CE, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: i,
            swipeThreshold: o,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: w.useCallback( () => c(h => h + 1), []),
            onToastRemove: w.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: s
        })
    })
}
;
Xv.displayName = cf;
var qv = "ToastViewport"
  , EE = ["F8"]
  , kc = "toast.viewportPause"
  , Rc = "toast.viewportResume"
  , Zv = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=EE, label: i="Notifications ({hotkey})", ...o} = e
      , s = gl(qv, n)
      , a = wE(n)
      , l = w.useRef(null)
      , u = w.useRef(null)
      , c = w.useRef(null)
      , d = w.useRef(null)
      , f = _t(t, d, s.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , v = s.toastCount > 0;
    w.useEffect( () => {
        const x = p => {
            var y;
            r.length !== 0 && r.every(C => p[C] || p.code === C) && ((y = d.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    w.useEffect( () => {
        const x = l.current
          , p = d.current;
        if (v && x && p) {
            const m = () => {
                if (!s.isClosePausedRef.current) {
                    const T = new CustomEvent(kc);
                    p.dispatchEvent(T),
                    s.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (s.isClosePausedRef.current) {
                    const T = new CustomEvent(Rc);
                    p.dispatchEvent(T),
                    s.isClosePausedRef.current = !1
                }
            }
              , C = T => {
                !x.contains(T.relatedTarget) && y()
            }
              , E = () => {
                x.contains(document.activeElement) || y()
            }
            ;
            return x.addEventListener("focusin", m),
            x.addEventListener("focusout", C),
            x.addEventListener("pointermove", m),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
                x.removeEventListener("focusin", m),
                x.removeEventListener("focusout", C),
                x.removeEventListener("pointermove", m),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [v, s.isClosePausedRef]);
    const g = w.useCallback( ({tabbingDirection: x}) => {
        const m = a().map(y => {
            const C = y.ref.current
              , E = [C, ...IE(C)];
            return x === "forwards" ? E : E.reverse()
        }
        );
        return (x === "forwards" ? m.reverse() : m).flat()
    }
    , [a]);
    return w.useEffect( () => {
        const x = d.current;
        if (x) {
            const p = m => {
                var E, T, b;
                const y = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !y) {
                    const P = document.activeElement
                      , M = m.shiftKey;
                    if (m.target === x && M) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const I = g({
                        tabbingDirection: M ? "backwards" : "forwards"
                    })
                      , K = I.findIndex(D => D === P);
                    du(I.slice(K + 1)) ? m.preventDefault() : M ? (T = u.current) == null || T.focus() : (b = c.current) == null || b.focus()
                }
            }
            ;
            return x.addEventListener("keydown", p),
            () => x.removeEventListener("keydown", p)
        }
    }
    , [a, g]),
    S.jsxs(lE, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: v ? void 0 : "none"
        },
        children: [v && S.jsx(Ac, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "forwards"
                });
                du(x)
            }
        }), S.jsx(df.Slot, {
            scope: n,
            children: S.jsx(nt.ol, {
                tabIndex: -1,
                ...o,
                ref: f
            })
        }), v && S.jsx(Ac, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "backwards"
                });
                du(x)
            }
        })]
    })
}
);
Zv.displayName = qv;
var Jv = "ToastFocusProxy"
  , Ac = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...i} = e
      , o = gl(Jv, n);
    return S.jsx(ml, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const a = s.relatedTarget;
            !((u = o.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Ac.displayName = Jv;
var us = "Toast"
  , TE = "toast.swipeStart"
  , bE = "toast.swipeMove"
  , PE = "toast.swipeCancel"
  , kE = "toast.swipeEnd"
  , e0 = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s} = e
      , [a,l] = pE({
        prop: r,
        defaultProp: i ?? !0,
        onChange: o,
        caller: us
    });
    return S.jsx(uf, {
        present: n || a,
        children: S.jsx(ME, {
            open: a,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: Jn(e.onPause),
            onResume: Jn(e.onResume),
            onSwipeStart: Ee(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Ee(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Ee(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Ee(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
e0.displayName = us;
var [RE,AE] = Qv(us, {
    onClose() {}
})
  , ME = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: i, open: o, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...v} = e
      , g = gl(us, n)
      , [x,p] = w.useState(null)
      , m = _t(t, D => p(D))
      , y = w.useRef(null)
      , C = w.useRef(null)
      , E = i || g.duration
      , T = w.useRef(0)
      , b = w.useRef(E)
      , P = w.useRef(0)
      , {onToastAdd: M, onToastRemove: N} = g
      , z = Jn( () => {
        var Y;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((Y = g.viewport) == null || Y.focus()),
        s()
    }
    )
      , I = w.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(P.current),
        T.current = new Date().getTime(),
        P.current = window.setTimeout(z, D))
    }
    , [z]);
    w.useEffect( () => {
        const D = g.viewport;
        if (D) {
            const Y = () => {
                I(b.current),
                u == null || u()
            }
              , $ = () => {
                const _ = new Date().getTime() - T.current;
                b.current = b.current - _,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return D.addEventListener(kc, $),
            D.addEventListener(Rc, Y),
            () => {
                D.removeEventListener(kc, $),
                D.removeEventListener(Rc, Y)
            }
        }
    }
    , [g.viewport, E, l, u, I]),
    w.useEffect( () => {
        o && !g.isClosePausedRef.current && I(E)
    }
    , [o, E, g.isClosePausedRef, I]),
    w.useEffect( () => (M(),
    () => N()), [M, N]);
    const K = w.useMemo( () => x ? a0(x) : null, [x]);
    return g.viewport ? S.jsxs(S.Fragment, {
        children: [K && S.jsx(NE, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), S.jsx(RE, {
            scope: n,
            onClose: z,
            children: ls.createPortal(S.jsx(df.ItemSlot, {
                scope: n,
                children: S.jsx(aE, {
                    asChild: !0,
                    onEscapeKeyDown: Ee(a, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || z(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: S.jsx(nt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": o ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...v,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Ee(e.onKeyDown, D => {
                            D.key === "Escape" && (a == null || a(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: Ee(e.onPointerDown, D => {
                            D.button === 0 && (y.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: Ee(e.onPointerMove, D => {
                            if (!y.current)
                                return;
                            const Y = D.clientX - y.current.x
                              , $ = D.clientY - y.current.y
                              , _ = !!C.current
                              , k = ["left", "right"].includes(g.swipeDirection)
                              , A = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , O = k ? A(0, Y) : 0
                              , U = k ? 0 : A(0, $)
                              , B = D.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: O,
                                y: U
                            }
                              , q = {
                                originalEvent: D,
                                delta: Q
                            };
                            _ ? (C.current = Q,
                            Vs(bE, d, q, {
                                discrete: !1
                            })) : Sp(Q, g.swipeDirection, B) ? (C.current = Q,
                            Vs(TE, c, q, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(Y) > B || Math.abs($) > B) && (y.current = null)
                        }
                        ),
                        onPointerUp: Ee(e.onPointerUp, D => {
                            const Y = C.current
                              , $ = D.target;
                            if ($.hasPointerCapture(D.pointerId) && $.releasePointerCapture(D.pointerId),
                            C.current = null,
                            y.current = null,
                            Y) {
                                const _ = D.currentTarget
                                  , k = {
                                    originalEvent: D,
                                    delta: Y
                                };
                                Sp(Y, g.swipeDirection, g.swipeThreshold) ? Vs(kE, h, k, {
                                    discrete: !0
                                }) : Vs(PE, f, k, {
                                    discrete: !0
                                }),
                                _.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , NE = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , i = gl(us, t)
      , [o,s] = w.useState(!1)
      , [a,l] = w.useState(!1);
    return DE( () => s(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : S.jsx(Yv, {
        asChild: !0,
        children: S.jsx(ml, {
            ...r,
            children: o && S.jsxs(S.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}
  , LE = "ToastTitle"
  , t0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(nt.div, {
        ...r,
        ref: t
    })
}
);
t0.displayName = LE;
var jE = "ToastDescription"
  , n0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(nt.div, {
        ...r,
        ref: t
    })
}
);
n0.displayName = jE;
var r0 = "ToastAction"
  , i0 = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? S.jsx(s0, {
        altText: n,
        asChild: !0,
        children: S.jsx(ff, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${r0}\`. Expected non-empty \`string\`.`),
    null)
}
);
i0.displayName = r0;
var o0 = "ToastClose"
  , ff = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , i = AE(o0, n);
    return S.jsx(s0, {
        asChild: !0,
        children: S.jsx(nt.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Ee(e.onClick, i.onClose)
        })
    })
}
);
ff.displayName = o0;
var s0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...i} = e;
    return S.jsx(nt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
}
);
function a0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        OE(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none"
              , o = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (o) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...a0(r))
        }
    }
    ),
    t
}
function Vs(e, t, n, {discrete: r}) {
    const i = n.originalEvent.currentTarget
      , o = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? Wv(i, o) : i.dispatchEvent(o)
}
var Sp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , i = Math.abs(e.y)
      , o = r > i;
    return t === "left" || t === "right" ? o && r > n : !o && i > n
}
;
function DE(e= () => {}
) {
    const t = Jn(e);
    er( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function OE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function IE(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const i = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function du(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var VE = Xv
  , l0 = Zv
  , u0 = e0
  , c0 = t0
  , d0 = n0
  , f0 = i0
  , h0 = ff;
function p0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = p0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function m0() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = p0(e)) && (r && (r += " "),
        r += t);
    return r
}
const Cp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Ep = m0
  , FE = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Ep(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: i, defaultVariants: o} = t
      , s = Object.keys(i).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = o == null ? void 0 : o[u];
        if (c === null)
            return null;
        const f = Cp(c) || Cp(d);
        return i[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(v => {
            let[g,x] = v;
            return Array.isArray(x) ? x.includes({
                ...o,
                ...a
            }[g]) : {
                ...o,
                ...a
            }[g] === x
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Ep(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _E = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , g0 = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BE = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i="", children: o, iconNode: s, ...a}, l) => w.createElement("svg", {
    ref: l,
    ...zE,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: g0("lucide", i),
    ...a
}, [...s.map( ([u,c]) => w.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = (e, t) => {
    const n = w.forwardRef( ({className: r, ...i}, o) => w.createElement(BE, {
        ref: o,
        iconNode: t,
        className: g0(`lucide-${_E(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $E = ze("Baby", [["path", {
    d: "M9 12h.01",
    key: "157uk2"
}], ["path", {
    d: "M15 12h.01",
    key: "1k8ypt"
}], ["path", {
    d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
    key: "1u7htd"
}], ["path", {
    d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
    key: "5yv0yz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UE = ze("BookOpen", [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = ze("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v0 = ze("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WE = ze("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HE = ze("GraduationCap", [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = ze("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GE = ze("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YE = ze("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QE = ze("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = ze("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = ze("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZE = ze("Puzzle", [["path", {
    d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
    key: "w46dr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JE = ze("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eT = ze("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = ze("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , hf = "-"
  , tT = e => {
    const t = rT(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const a = s.split(hf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            w0(a, t) || nT(s)
        }
        ,
        getConflictingClassGroupIds: (s, a) => {
            const l = n[s] || [];
            return a && r[s] ? [...l, ...r[s]] : l
        }
    }
}
  , w0 = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , i = r ? w0(e.slice(1), r) : void 0;
    if (i)
        return i;
    if (t.validators.length === 0)
        return;
    const o = e.join(hf);
    return (s = t.validators.find( ({validator: a}) => a(o))) == null ? void 0 : s.classGroupId
}
  , Tp = /^\[(.+)\]$/
  , nT = e => {
    if (Tp.test(e)) {
        const t = Tp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , rT = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return oT(Object.entries(e.classGroups), n).forEach( ([o,s]) => {
        Mc(s, r, o, t)
    }
    ),
    r
}
  , Mc = (e, t, n, r) => {
    e.forEach(i => {
        if (typeof i == "string") {
            const o = i === "" ? t : bp(t, i);
            o.classGroupId = n;
            return
        }
        if (typeof i == "function") {
            if (iT(i)) {
                Mc(i(r), t, n, r);
                return
            }
            t.validators.push({
                validator: i,
                classGroupId: n
            });
            return
        }
        Object.entries(i).forEach( ([o,s]) => {
            Mc(s, bp(t, o), n, r)
        }
        )
    }
    )
}
  , bp = (e, t) => {
    let n = e;
    return t.split(hf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , iT = e => e.isThemeGetter
  , oT = (e, t) => t ? e.map( ([n,r]) => {
    const i = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([s,a]) => [t + s, a])) : o);
    return [n, i]
}
) : e
  , sT = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const i = (o, s) => {
        n.set(o, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(o) {
            let s = n.get(o);
            if (s !== void 0)
                return s;
            if ((s = r.get(o)) !== void 0)
                return i(o, s),
                s
        },
        set(o, s) {
            n.has(o) ? n.set(o, s) : i(o, s)
        }
    }
}
  , S0 = "!"
  , aT = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , i = t[0]
      , o = t.length
      , s = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let x = 0; x < a.length; x++) {
            let p = a[x];
            if (u === 0) {
                if (p === i && (r || a.slice(x, x + o) === t)) {
                    l.push(a.slice(c, x)),
                    c = x + o;
                    continue
                }
                if (p === "/") {
                    d = x;
                    continue
                }
            }
            p === "[" ? u++ : p === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(S0)
          , v = h ? f.substring(1) : f
          , g = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: v,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: s
    }) : s
}
  , lT = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , uT = e => ({
    cache: sT(e.cacheSize),
    parseClassName: aT(e),
    ...tT(e)
})
  , cT = /\s+/
  , dT = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
      , o = []
      , s = e.trim().split(cT);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
        const u = s[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let v = !!h
          , g = r(v ? f.substring(0, h) : f);
        if (!g) {
            if (!v) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (g = r(f),
            !g) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            v = !1
        }
        const x = lT(c).join(":")
          , p = d ? x + S0 : x
          , m = p + g;
        if (o.includes(m))
            continue;
        o.push(m);
        const y = i(g, v);
        for (let C = 0; C < y.length; ++C) {
            const E = y[C];
            o.push(p + E)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function fT() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = C0(t)) && (r && (r += " "),
        r += n);
    return r
}
const C0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = C0(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function hT(e, ...t) {
    let n, r, i, o = s;
    function s(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = uT(u),
        r = n.cache.get,
        i = n.cache.set,
        o = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = dT(l, n);
        return i(l, c),
        c
    }
    return function() {
        return o(fT.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , E0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , pT = /^\d+\/\d+$/
  , mT = new Set(["px", "full", "screen"])
  , gT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , yT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , vT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , xT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , wT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , tn = e => vi(e) || mT.has(e) || pT.test(e)
  , bn = e => Wi(e, "length", RT)
  , vi = e => !!e && !Number.isNaN(Number(e))
  , fu = e => Wi(e, "number", vi)
  , so = e => !!e && Number.isInteger(Number(e))
  , ST = e => e.endsWith("%") && vi(e.slice(0, -1))
  , G = e => E0.test(e)
  , Pn = e => gT.test(e)
  , CT = new Set(["length", "size", "percentage"])
  , ET = e => Wi(e, CT, T0)
  , TT = e => Wi(e, "position", T0)
  , bT = new Set(["image", "url"])
  , PT = e => Wi(e, bT, MT)
  , kT = e => Wi(e, "", AT)
  , ao = () => !0
  , Wi = (e, t, n) => {
    const r = E0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , RT = e => yT.test(e) && !vT.test(e)
  , T0 = () => !1
  , AT = e => xT.test(e)
  , MT = e => wT.test(e)
  , NT = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , r = oe("brightness")
      , i = oe("borderColor")
      , o = oe("borderRadius")
      , s = oe("borderSpacing")
      , a = oe("borderWidth")
      , l = oe("contrast")
      , u = oe("grayscale")
      , c = oe("hueRotate")
      , d = oe("invert")
      , f = oe("gap")
      , h = oe("gradientColorStops")
      , v = oe("gradientColorStopPositions")
      , g = oe("inset")
      , x = oe("margin")
      , p = oe("opacity")
      , m = oe("padding")
      , y = oe("saturate")
      , C = oe("scale")
      , E = oe("sepia")
      , T = oe("skew")
      , b = oe("space")
      , P = oe("translate")
      , M = () => ["auto", "contain", "none"]
      , N = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", G, t]
      , I = () => [G, t]
      , K = () => ["", tn, bn]
      , D = () => ["auto", vi, G]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", G]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [vi, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ao],
            spacing: [tn, bn],
            blur: ["none", "", Pn, G],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Pn, G],
            borderSpacing: I(),
            borderWidth: K(),
            contrast: U(),
            grayscale: A(),
            hueRotate: U(),
            invert: A(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [ST, bn],
            inset: z(),
            margin: z(),
            opacity: U(),
            padding: I(),
            saturate: U(),
            scale: U(),
            sepia: A(),
            skew: U(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [Pn]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), G]
            }],
            overflow: [{
                overflow: N()
            }],
            "overflow-x": [{
                "overflow-x": N()
            }],
            "overflow-y": [{
                "overflow-y": N()
            }],
            overscroll: [{
                overscroll: M()
            }],
            "overscroll-x": [{
                "overscroll-x": M()
            }],
            "overscroll-y": [{
                "overscroll-y": M()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", so, G]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", so, G]
            }],
            "grid-cols": [{
                "grid-cols": [ao]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", so, G]
                }, G]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [ao]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [so, G]
                }, G]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [b]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [b]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Pn]
                }, Pn]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Pn, bn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", fu]
            }],
            "font-family": [{
                font: [ao]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", vi, fu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", tn, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [p]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [p]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", tn, bn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", tn, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [p]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), TT]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", ET]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, PT]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [v]
            }],
            "gradient-via-pos": [{
                via: [v]
            }],
            "gradient-to-pos": [{
                to: [v]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [p]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [p]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [i]
            }],
            "border-color-x": [{
                "border-x": [i]
            }],
            "border-color-y": [{
                "border-y": [i]
            }],
            "border-color-s": [{
                "border-s": [i]
            }],
            "border-color-e": [{
                "border-e": [i]
            }],
            "border-color-t": [{
                "border-t": [i]
            }],
            "border-color-r": [{
                "border-r": [i]
            }],
            "border-color-b": [{
                "border-b": [i]
            }],
            "border-color-l": [{
                "border-l": [i]
            }],
            "divide-color": [{
                divide: [i]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [tn, G]
            }],
            "outline-w": [{
                outline: [tn, bn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: K()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [p]
            }],
            "ring-offset-w": [{
                "ring-offset": [tn, bn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Pn, kT]
            }],
            "shadow-color": [{
                shadow: [ao]
            }],
            opacity: [{
                opacity: [p]
            }],
            "mix-blend": [{
                "mix-blend": [..._(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": _()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Pn, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [p]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [so, G]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [T]
            }],
            "skew-y": [{
                "skew-y": [T]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [tn, bn, fu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , LT = hT(NT);
function zr(...e) {
    return LT(m0(e))
}
const jT = VE
  , b0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(l0, {
    ref: n,
    className: zr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
b0.displayName = l0.displayName;
const DT = FE("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , P0 = w.forwardRef( ({className: e, variant: t, ...n}, r) => S.jsx(u0, {
    ref: r,
    className: zr(DT({
        variant: t
    }), e),
    ...n
}));
P0.displayName = u0.displayName;
const OT = w.forwardRef( ({className: e, ...t}, n) => S.jsx(f0, {
    ref: n,
    className: zr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
OT.displayName = f0.displayName;
const k0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(h0, {
    ref: n,
    className: zr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: S.jsx(x0, {
        className: "h-4 w-4"
    })
}));
k0.displayName = h0.displayName;
const R0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(c0, {
    ref: n,
    className: zr("text-sm font-semibold", e),
    ...t
}));
R0.displayName = c0.displayName;
const A0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(d0, {
    ref: n,
    className: zr("text-sm opacity-90", e),
    ...t
}));
A0.displayName = d0.displayName;
function IT() {
    const {toasts: e} = HC();
    return S.jsxs(jT, {
        children: [e.map(function({id: t, title: n, description: r, action: i, ...o}) {
            return S.jsxs(P0, {
                ...o,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && S.jsx(R0, {
                        children: n
                    }), r && S.jsx(A0, {
                        children: r
                    })]
                }), i, S.jsx(k0, {})]
            }, t)
        }), S.jsx(b0, {})]
    })
}
var Pp = ["light", "dark"]
  , VT = "(prefers-color-scheme: dark)"
  , FT = w.createContext(void 0)
  , _T = {
    setTheme: e => {}
    ,
    themes: []
}
  , zT = () => {
    var e;
    return (e = w.useContext(FT)) != null ? e : _T
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: o, value: s, attrs: a, nonce: l}) => {
    let u = o === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = i ? Pp.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (v, g=!1, x=!0) => {
        let p = s ? s[v] : v
          , m = g ? v + "|| ''" : `'${p}'`
          , y = "";
        return i && x && !g && Pp.includes(v) && (y += `d.style.colorScheme = '${v}';`),
        n === "class" ? g || p ? y += `c.add(${m})` : y += "null" : p && (y += `d[s](n,${m})`),
        y
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${VT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(o, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}else{${f(o, !1, !1)};}${d}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var BT = e => {
    switch (e) {
    case "success":
        return WT;
    case "info":
        return KT;
    case "warning":
        return HT;
    case "error":
        return GT;
    default:
        return null
    }
}
  , $T = Array(12).fill(0)
  , UT = ({visible: e, className: t}) => j.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, j.createElement("div", {
    className: "sonner-spinner"
}, $T.map( (n, r) => j.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , WT = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , HT = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , KT = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , GT = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , YT = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, j.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), j.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , QT = () => {
    let[e,t] = j.useState(document.hidden);
    return j.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Nc = 1
  , XT = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Nc++
              , o = this.toasts.find(a => a.id === i)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            o ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({
                ...a,
                ...e,
                id: i,
                title: n
            }),
            {
                ...a,
                ...e,
                id: i,
                dismissible: s,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: i
            }),
            i
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), i = n !== void 0, o, s = r.then(async l => {
                if (o = ["resolve", l],
                j.isValidElement(l))
                    i = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (ZT(l) && !l.ok) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    i = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (o = ["reject", l],
                t.error !== void 0) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                i && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => s.then( () => o[0] === "reject" ? u(o[1]) : l(o[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Nc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Qe = new XT
  , qT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Nc++;
    return Qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , ZT = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , JT = qT
  , eb = () => Qe.toasts
  , tb = () => Qe.getActiveToasts();
Object.assign(JT, {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading
}, {
    getHistory: eb,
    getToasts: tb
});
function nb(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
nb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Fs(e) {
    return e.label !== void 0
}
var rb = 3
  , ib = "32px"
  , ob = "16px"
  , kp = 4e3
  , sb = 356
  , ab = 14
  , lb = 20
  , ub = 200;
function Pt(...e) {
    return e.filter(Boolean).join(" ")
}
function cb(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var db = e => {
    var t, n, r, i, o, s, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: v, interacting: g, setHeights: x, visibleToasts: p, heights: m, index: y, toasts: C, expanded: E, removeToast: T, defaultRichColors: b, closeButton: P, style: M, cancelButtonStyle: N, actionButtonStyle: z, className: I="", descriptionClassName: K="", duration: D, position: Y, gap: $, loadingIcon: _, expandByDefault: k, classNames: A, icons: O, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: B} = e
      , [Q,q] = j.useState(null)
      , [ve,Le] = j.useState(null)
      , [ee,Br] = j.useState(!1)
      , [vn,cr] = j.useState(!1)
      , [xn,$r] = j.useState(!1)
      , [wn,ms] = j.useState(!1)
      , [Ll,gs] = j.useState(!1)
      , [jl,Xi] = j.useState(0)
      , [Ur,th] = j.useState(0)
      , qi = j.useRef(h.duration || D || kp)
      , nh = j.useRef(null)
      , dr = j.useRef(null)
      , o1 = y === 0
      , s1 = y + 1 <= p
      , dt = h.type
      , Wr = h.dismissible !== !1
      , a1 = h.className || ""
      , l1 = h.descriptionClassName || ""
      , ys = j.useMemo( () => m.findIndex(W => W.toastId === h.id) || 0, [m, h.id])
      , u1 = j.useMemo( () => {
        var W;
        return (W = h.closeButton) != null ? W : P
    }
    , [h.closeButton, P])
      , rh = j.useMemo( () => h.duration || D || kp, [h.duration, D])
      , Dl = j.useRef(0)
      , Hr = j.useRef(0)
      , ih = j.useRef(0)
      , Kr = j.useRef(null)
      , [c1,d1] = Y.split("-")
      , oh = j.useMemo( () => m.reduce( (W, ne, le) => le >= ys ? W : W + ne.height, 0), [m, ys])
      , sh = QT()
      , f1 = h.invert || f
      , Ol = dt === "loading";
    Hr.current = j.useMemo( () => ys * $ + oh, [ys, oh]),
    j.useEffect( () => {
        qi.current = rh
    }
    , [rh]),
    j.useEffect( () => {
        Br(!0)
    }
    , []),
    j.useEffect( () => {
        let W = dr.current;
        if (W) {
            let ne = W.getBoundingClientRect().height;
            return th(ne),
            x(le => [{
                toastId: h.id,
                height: ne,
                position: h.position
            }, ...le]),
            () => x(le => le.filter(Ct => Ct.toastId !== h.id))
        }
    }
    , [x, h.id]),
    j.useLayoutEffect( () => {
        if (!ee)
            return;
        let W = dr.current
          , ne = W.style.height;
        W.style.height = "auto";
        let le = W.getBoundingClientRect().height;
        W.style.height = ne,
        th(le),
        x(Ct => Ct.find(Et => Et.toastId === h.id) ? Ct.map(Et => Et.toastId === h.id ? {
            ...Et,
            height: le
        } : Et) : [{
            toastId: h.id,
            height: le,
            position: h.position
        }, ...Ct])
    }
    , [ee, h.title, h.description, x, h.id]);
    let Sn = j.useCallback( () => {
        cr(!0),
        Xi(Hr.current),
        x(W => W.filter(ne => ne.toastId !== h.id)),
        setTimeout( () => {
            T(h)
        }
        , ub)
    }
    , [h, T, x, Hr]);
    j.useEffect( () => {
        if (h.promise && dt === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let W;
        return E || g || B && sh ? ( () => {
            if (ih.current < Dl.current) {
                let ne = new Date().getTime() - Dl.current;
                qi.current = qi.current - ne
            }
            ih.current = new Date().getTime()
        }
        )() : qi.current !== 1 / 0 && (Dl.current = new Date().getTime(),
        W = setTimeout( () => {
            var ne;
            (ne = h.onAutoClose) == null || ne.call(h, h),
            Sn()
        }
        , qi.current)),
        () => clearTimeout(W)
    }
    , [E, g, h, dt, B, sh, Sn]),
    j.useEffect( () => {
        h.delete && Sn()
    }
    , [Sn, h.delete]);
    function h1() {
        var W, ne, le;
        return O != null && O.loading ? j.createElement("div", {
            className: Pt(A == null ? void 0 : A.loader, (W = h == null ? void 0 : h.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, O.loading) : _ ? j.createElement("div", {
            className: Pt(A == null ? void 0 : A.loader, (ne = h == null ? void 0 : h.classNames) == null ? void 0 : ne.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, _) : j.createElement(UT, {
            className: Pt(A == null ? void 0 : A.loader, (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader),
            visible: dt === "loading"
        })
    }
    return j.createElement("li", {
        tabIndex: 0,
        ref: dr,
        className: Pt(I, a1, A == null ? void 0 : A.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[dt], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[dt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : b,
        "data-styled": !(h.jsx || h.unstyled || v),
        "data-mounted": ee,
        "data-promise": !!h.promise,
        "data-swiped": Ll,
        "data-removed": vn,
        "data-visible": s1,
        "data-y-position": c1,
        "data-x-position": d1,
        "data-index": y,
        "data-front": o1,
        "data-swiping": xn,
        "data-dismissible": Wr,
        "data-type": dt,
        "data-invert": f1,
        "data-swipe-out": wn,
        "data-swipe-direction": ve,
        "data-expanded": !!(E || k && ee),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": C.length - y,
            "--offset": `${vn ? jl : Hr.current}px`,
            "--initial-height": k ? "auto" : `${Ur}px`,
            ...M,
            ...h.style
        },
        onDragEnd: () => {
            $r(!1),
            q(null),
            Kr.current = null
        }
        ,
        onPointerDown: W => {
            Ol || !Wr || (nh.current = new Date,
            Xi(Hr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && ($r(!0),
            Kr.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, ne, le, Ct;
            if (wn || !Wr)
                return;
            Kr.current = null;
            let Et = Number(((W = dr.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , Cn = Number(((ne = dr.current) == null ? void 0 : ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , fr = new Date().getTime() - ((le = nh.current) == null ? void 0 : le.getTime())
              , Tt = Q === "x" ? Et : Cn
              , En = Math.abs(Tt) / fr;
            if (Math.abs(Tt) >= lb || En > .11) {
                Xi(Hr.current),
                (Ct = h.onDismiss) == null || Ct.call(h, h),
                Le(Q === "x" ? Et > 0 ? "right" : "left" : Cn > 0 ? "down" : "up"),
                Sn(),
                ms(!0),
                gs(!1);
                return
            }
            $r(!1),
            q(null)
        }
        ,
        onPointerMove: W => {
            var ne, le, Ct, Et;
            if (!Kr.current || !Wr || ((ne = window.getSelection()) == null ? void 0 : ne.toString().length) > 0)
                return;
            let Cn = W.clientY - Kr.current.y
              , fr = W.clientX - Kr.current.x
              , Tt = (le = e.swipeDirections) != null ? le : cb(Y);
            !Q && (Math.abs(fr) > 1 || Math.abs(Cn) > 1) && q(Math.abs(fr) > Math.abs(Cn) ? "x" : "y");
            let En = {
                x: 0,
                y: 0
            };
            Q === "y" ? (Tt.includes("top") || Tt.includes("bottom")) && (Tt.includes("top") && Cn < 0 || Tt.includes("bottom") && Cn > 0) && (En.y = Cn) : Q === "x" && (Tt.includes("left") || Tt.includes("right")) && (Tt.includes("left") && fr < 0 || Tt.includes("right") && fr > 0) && (En.x = fr),
            (Math.abs(En.x) > 0 || Math.abs(En.y) > 0) && gs(!0),
            (Ct = dr.current) == null || Ct.style.setProperty("--swipe-amount-x", `${En.x}px`),
            (Et = dr.current) == null || Et.style.setProperty("--swipe-amount-y", `${En.y}px`)
        }
    }, u1 && !h.jsx ? j.createElement("button", {
        "aria-label": U,
        "data-disabled": Ol,
        "data-close-button": !0,
        onClick: Ol || !Wr ? () => {}
        : () => {
            var W;
            Sn(),
            (W = h.onDismiss) == null || W.call(h, h)
        }
        ,
        className: Pt(A == null ? void 0 : A.closeButton, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.closeButton)
    }, (o = O == null ? void 0 : O.close) != null ? o : YT) : null, h.jsx || w.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : j.createElement(j.Fragment, null, dt || h.icon || h.promise ? j.createElement("div", {
        "data-icon": "",
        className: Pt(A == null ? void 0 : A.icon, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || h1() : null, h.type !== "loading" ? h.icon || (O == null ? void 0 : O[dt]) || BT(dt) : null) : null, j.createElement("div", {
        "data-content": "",
        className: Pt(A == null ? void 0 : A.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, j.createElement("div", {
        "data-title": "",
        className: Pt(A == null ? void 0 : A.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? j.createElement("div", {
        "data-description": "",
        className: Pt(K, l1, A == null ? void 0 : A.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), w.isValidElement(h.cancel) ? h.cancel : h.cancel && Fs(h.cancel) ? j.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || N,
        onClick: W => {
            var ne, le;
            Fs(h.cancel) && Wr && ((le = (ne = h.cancel).onClick) == null || le.call(ne, W),
            Sn())
        }
        ,
        className: Pt(A == null ? void 0 : A.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, w.isValidElement(h.action) ? h.action : h.action && Fs(h.action) ? j.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || z,
        onClick: W => {
            var ne, le;
            Fs(h.action) && ((le = (ne = h.action).onClick) == null || le.call(ne, W),
            !W.defaultPrevented && Sn())
        }
        ,
        className: Pt(A == null ? void 0 : A.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function Rp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function fb(e, t) {
    let n = {};
    return [e, t].forEach( (r, i) => {
        let o = i === 1
          , s = o ? "--mobile-offset" : "--offset"
          , a = o ? ob : ib;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var hb = w.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: i=["altKey", "KeyT"], expand: o, closeButton: s, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: v=rb, toastOptions: g, dir: x=Rp(), gap: p=ab, loadingIcon: m, icons: y, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: E} = e
      , [T,b] = j.useState([])
      , P = j.useMemo( () => Array.from(new Set([r].concat(T.filter(B => B.position).map(B => B.position)))), [T, r])
      , [M,N] = j.useState([])
      , [z,I] = j.useState(!1)
      , [K,D] = j.useState(!1)
      , [Y,$] = j.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , _ = j.useRef(null)
      , k = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , A = j.useRef(null)
      , O = j.useRef(!1)
      , U = j.useCallback(B => {
        b(Q => {
            var q;
            return (q = Q.find(ve => ve.id === B.id)) != null && q.delete || Qe.dismiss(B.id),
            Q.filter( ({id: ve}) => ve !== B.id)
        }
        )
    }
    , []);
    return j.useEffect( () => Qe.subscribe(B => {
        if (B.dismiss) {
            b(Q => Q.map(q => q.id === B.id ? {
                ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout( () => {
            zv.flushSync( () => {
                b(Q => {
                    let q = Q.findIndex(ve => ve.id === B.id);
                    return q !== -1 ? [...Q.slice(0, q), {
                        ...Q[q],
                        ...B
                    }, ...Q.slice(q + 1)] : [B, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    j.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: Q}) => {
                $(Q ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: q}) => {
                try {
                    $(q ? "dark" : "light")
                } catch (ve) {
                    console.error(ve)
                }
            }
            )
        }
    }
    , [c]),
    j.useEffect( () => {
        T.length <= 1 && I(!1)
    }
    , [T]),
    j.useEffect( () => {
        let B = Q => {
            var q, ve;
            i.every(Le => Q[Le] || Q.code === Le) && (I(!0),
            (q = _.current) == null || q.focus()),
            Q.code === "Escape" && (document.activeElement === _.current || (ve = _.current) != null && ve.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [i]),
    j.useEffect( () => {
        if (_.current)
            return () => {
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null,
                O.current = !1)
            }
    }
    , [_.current]),
    j.createElement("section", {
        ref: t,
        "aria-label": `${C} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (B, Q) => {
        var q;
        let[ve,Le] = B.split("-");
        return T.length ? j.createElement("ol", {
            key: B,
            dir: x === "auto" ? Rp() : x,
            tabIndex: -1,
            ref: _,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": ve,
            "data-lifted": z && T.length > 1 && !o,
            "data-x-position": Le,
            style: {
                "--front-toast-height": `${((q = M[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${sb}px`,
                "--gap": `${p}px`,
                ...h,
                ...fb(l, u)
            },
            onBlur: ee => {
                O.current && !ee.currentTarget.contains(ee.relatedTarget) && (O.current = !1,
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null))
            }
            ,
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                A.current = ee.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                K || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || D(!0)
            }
            ,
            onPointerUp: () => D(!1)
        }, T.filter(ee => !ee.position && Q === 0 || ee.position === B).map( (ee, Br) => {
            var vn, cr;
            return j.createElement(db, {
                key: ee.id,
                icons: y,
                index: Br,
                toast: ee,
                defaultRichColors: d,
                duration: (vn = g == null ? void 0 : g.duration) != null ? vn : f,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: v,
                closeButton: (cr = g == null ? void 0 : g.closeButton) != null ? cr : s,
                interacting: K,
                position: B,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: U,
                toasts: T.filter(xn => xn.position == ee.position),
                heights: M.filter(xn => xn.position == ee.position),
                setHeights: N,
                expandByDefault: o,
                gap: p,
                loadingIcon: m,
                expanded: z,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const pb = ({...e}) => {
    const {theme: t="system"} = zT();
    return S.jsx(hb, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , mb = ["top", "right", "bottom", "left"]
  , tr = Math.min
  , it = Math.max
  , Va = Math.round
  , _s = Math.floor
  , nr = e => ({
    x: e,
    y: e
})
  , gb = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , yb = {
    start: "end",
    end: "start"
};
function Lc(e, t, n) {
    return it(e, tr(t, n))
}
function pn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function mn(e) {
    return e.split("-")[0]
}
function Hi(e) {
    return e.split("-")[1]
}
function pf(e) {
    return e === "x" ? "y" : "x"
}
function mf(e) {
    return e === "y" ? "height" : "width"
}
function rr(e) {
    return ["top", "bottom"].includes(mn(e)) ? "y" : "x"
}
function gf(e) {
    return pf(rr(e))
}
function vb(e, t, n) {
    n === void 0 && (n = !1);
    const r = Hi(e)
      , i = gf(e)
      , o = mf(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Fa(s)),
    [s, Fa(s)]
}
function xb(e) {
    const t = Fa(e);
    return [jc(e), t, jc(t)]
}
function jc(e) {
    return e.replace(/start|end/g, t => yb[t])
}
function wb(e, t, n) {
    const r = ["left", "right"]
      , i = ["right", "left"]
      , o = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
        return t ? o : s;
    default:
        return []
    }
}
function Sb(e, t, n, r) {
    const i = Hi(e);
    let o = wb(mn(e), n === "start", r);
    return i && (o = o.map(s => s + "-" + i),
    t && (o = o.concat(o.map(jc)))),
    o
}
function Fa(e) {
    return e.replace(/left|right|bottom|top/g, t => gb[t])
}
function Cb(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function M0(e) {
    return typeof e != "number" ? Cb(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function _a(e) {
    const {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function Ap(e, t, n) {
    let {reference: r, floating: i} = e;
    const o = rr(t)
      , s = gf(t)
      , a = mf(s)
      , l = mn(t)
      , u = o === "y"
      , c = r.x + r.width / 2 - i.width / 2
      , d = r.y + r.height / 2 - i.height / 2
      , f = r[a] / 2 - i[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - i.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - i.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (Hi(t)) {
    case "start":
        h[s] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[s] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const Eb = async (e, t, n) => {
    const {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: s} = n
      , a = o.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: d} = Ap(u, r, l)
      , f = r
      , h = {}
      , v = 0;
    for (let g = 0; g < a.length; g++) {
        const {name: x, fn: p} = a[g]
          , {x: m, y, data: C, reset: E} = await p({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: h,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = m ?? c,
        d = y ?? d,
        h = {
            ...h,
            [x]: {
                ...h[x],
                ...C
            }
        },
        E && v <= 50 && (v++,
        typeof E == "object" && (E.placement && (f = E.placement),
        E.rects && (u = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : E.rects),
        {x: c, y: d} = Ap(u, f, l)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: h
    }
}
;
async function Ko(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: o, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = pn(t, e)
      , v = M0(h)
      , x = a[f ? d === "floating" ? "reference" : "floating" : d]
      , p = _a(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(x))) == null || n ? x : x.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , m = d === "floating" ? {
        x: r,
        y: i,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating))
      , C = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = _a(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: m,
        offsetParent: y,
        strategy: l
    }) : m);
    return {
        top: (p.top - E.top + v.top) / C.y,
        bottom: (E.bottom - p.bottom + v.bottom) / C.y,
        left: (p.left - E.left + v.left) / C.x,
        right: (E.right - p.right + v.right) / C.x
    }
}
const Tb = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = pn(e, t) || {};
        if (u == null)
            return {};
        const d = M0(c)
          , f = {
            x: n,
            y: r
        }
          , h = gf(i)
          , v = mf(h)
          , g = await s.getDimensions(u)
          , x = h === "y"
          , p = x ? "top" : "left"
          , m = x ? "bottom" : "right"
          , y = x ? "clientHeight" : "clientWidth"
          , C = o.reference[v] + o.reference[h] - f[h] - o.floating[v]
          , E = f[h] - o.reference[h]
          , T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let b = T ? T[y] : 0;
        (!b || !await (s.isElement == null ? void 0 : s.isElement(T))) && (b = a.floating[y] || o.floating[v]);
        const P = C / 2 - E / 2
          , M = b / 2 - g[v] / 2 - 1
          , N = tr(d[p], M)
          , z = tr(d[m], M)
          , I = N
          , K = b - g[v] - z
          , D = b / 2 - g[v] / 2 + P
          , Y = Lc(I, D, K)
          , $ = !l.arrow && Hi(i) != null && D !== Y && o.reference[v] / 2 - (D < I ? N : z) - g[v] / 2 < 0
          , _ = $ ? D < I ? D - I : D - K : 0;
        return {
            [h]: f[h] + _,
            data: {
                [h]: Y,
                centerOffset: D - Y - _,
                ...$ && {
                    alignmentOffset: _
                }
            },
            reset: $
        }
    }
})
  , bb = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: v="none", flipAlignment: g=!0, ...x} = pn(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const p = mn(i)
              , m = rr(a)
              , y = mn(a) === a
              , C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , E = f || (y || !g ? [Fa(a)] : xb(a))
              , T = v !== "none";
            !f && T && E.push(...Sb(a, g, v, C));
            const b = [a, ...E]
              , P = await Ko(t, x)
              , M = [];
            let N = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (c && M.push(P[p]),
            d) {
                const D = vb(i, s, C);
                M.push(P[D[0]], P[D[1]])
            }
            if (N = [...N, {
                placement: i,
                overflows: M
            }],
            !M.every(D => D <= 0)) {
                var z, I;
                const D = (((z = o.flip) == null ? void 0 : z.index) || 0) + 1
                  , Y = b[D];
                if (Y)
                    return {
                        data: {
                            index: D,
                            overflows: N
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let $ = (I = N.filter(_ => _.overflows[0] <= 0).sort( (_, k) => _.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (h) {
                    case "bestFit":
                        {
                            var K;
                            const _ = (K = N.filter(k => {
                                if (T) {
                                    const A = rr(k.placement);
                                    return A === m || A === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(A => A > 0).reduce( (A, O) => A + O, 0)]).sort( (k, A) => k[1] - A[1])[0]) == null ? void 0 : K[0];
                            _ && ($ = _);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (i !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Mp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Np(e) {
    return mb.some(t => e[t] >= 0)
}
const Pb = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...i} = pn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const o = await Ko(t, {
                        ...i,
                        elementContext: "reference"
                    })
                      , s = Mp(o, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Np(s)
                        }
                    }
                }
            case "escaped":
                {
                    const o = await Ko(t, {
                        ...i,
                        altBoundary: !0
                    })
                      , s = Mp(o, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Np(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function kb(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , s = mn(n)
      , a = Hi(n)
      , l = rr(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , c = o && l ? -1 : 1
      , d = pn(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: v} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const Rb = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: o, placement: s, middlewareData: a} = t
              , l = await kb(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: o + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , Ab = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: o=!0, crossAxis: s=!1, limiter: a={
                fn: x => {
                    let {x: p, y: m} = x;
                    return {
                        x: p,
                        y: m
                    }
                }
            }, ...l} = pn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Ko(t, l)
              , d = rr(mn(i))
              , f = pf(d);
            let h = u[f]
              , v = u[d];
            if (o) {
                const x = f === "y" ? "top" : "left"
                  , p = f === "y" ? "bottom" : "right"
                  , m = h + c[x]
                  , y = h - c[p];
                h = Lc(m, h, y)
            }
            if (s) {
                const x = d === "y" ? "top" : "left"
                  , p = d === "y" ? "bottom" : "right"
                  , m = v + c[x]
                  , y = v - c[p];
                v = Lc(m, v, y)
            }
            const g = a.fn({
                ...t,
                [f]: h,
                [d]: v
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [f]: o,
                        [d]: s
                    }
                }
            }
        }
    }
}
  , Mb = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: i, rects: o, middlewareData: s} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = pn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = rr(i)
              , f = pf(d);
            let h = c[f]
              , v = c[d];
            const g = pn(a, t)
              , x = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const y = f === "y" ? "height" : "width"
                  , C = o.reference[f] - o.floating[y] + x.mainAxis
                  , E = o.reference[f] + o.reference[y] - x.mainAxis;
                h < C ? h = C : h > E && (h = E)
            }
            if (u) {
                var p, m;
                const y = f === "y" ? "width" : "height"
                  , C = ["top", "left"].includes(mn(i))
                  , E = o.reference[d] - o.floating[y] + (C && ((p = s.offset) == null ? void 0 : p[d]) || 0) + (C ? 0 : x.crossAxis)
                  , T = o.reference[d] + o.reference[y] + (C ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) - (C ? x.crossAxis : 0);
                v < E ? v = E : v > T && (v = T)
            }
            return {
                [f]: h,
                [d]: v
            }
        }
    }
}
  , Nb = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, rects: o, platform: s, elements: a} = t
              , {apply: l= () => {}
            , ...u} = pn(e, t)
              , c = await Ko(t, u)
              , d = mn(i)
              , f = Hi(i)
              , h = rr(i) === "y"
              , {width: v, height: g} = o.floating;
            let x, p;
            d === "top" || d === "bottom" ? (x = d,
            p = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = d,
            x = f === "end" ? "top" : "bottom");
            const m = g - c.top - c.bottom
              , y = v - c.left - c.right
              , C = tr(g - c[x], m)
              , E = tr(v - c[p], y)
              , T = !t.middlewareData.shift;
            let b = C
              , P = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = m),
            T && !f) {
                const N = it(c.left, 0)
                  , z = it(c.right, 0)
                  , I = it(c.top, 0)
                  , K = it(c.bottom, 0);
                h ? P = v - 2 * (N !== 0 || z !== 0 ? N + z : it(c.left, c.right)) : b = g - 2 * (I !== 0 || K !== 0 ? I + K : it(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: b
            });
            const M = await s.getDimensions(a.floating);
            return v !== M.width || g !== M.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function yl() {
    return typeof window < "u"
}
function Ki(e) {
    return N0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function at(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function en(e) {
    var t;
    return (t = (N0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function N0(e) {
    return yl() ? e instanceof Node || e instanceof at(e).Node : !1
}
function zt(e) {
    return yl() ? e instanceof Element || e instanceof at(e).Element : !1
}
function Zt(e) {
    return yl() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1
}
function Lp(e) {
    return !yl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot
}
function cs(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Bt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function Lb(e) {
    return ["table", "td", "th"].includes(Ki(e))
}
function vl(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function yf(e) {
    const t = vf()
      , n = zt(e) ? Bt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function jb(e) {
    let t = ir(e);
    for (; Zt(t) && !Vi(t); ) {
        if (yf(t))
            return t;
        if (vl(t))
            return null;
        t = ir(t)
    }
    return null
}
function vf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Vi(e) {
    return ["html", "body", "#document"].includes(Ki(e))
}
function Bt(e) {
    return at(e).getComputedStyle(e)
}
function xl(e) {
    return zt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function ir(e) {
    if (Ki(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Lp(e) && e.host || en(e);
    return Lp(t) ? t.host : t
}
function L0(e) {
    const t = ir(e);
    return Vi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Zt(t) && cs(t) ? t : L0(t)
}
function Go(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const i = L0(e)
      , o = i === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = at(i);
    if (o) {
        const a = Dc(s);
        return t.concat(s, s.visualViewport || [], cs(i) ? i : [], a && n ? Go(a) : [])
    }
    return t.concat(i, Go(i, [], n))
}
function Dc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function j0(e) {
    const t = Bt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const i = Zt(e)
      , o = i ? e.offsetWidth : n
      , s = i ? e.offsetHeight : r
      , a = Va(n) !== o || Va(r) !== s;
    return a && (n = o,
    r = s),
    {
        width: n,
        height: r,
        $: a
    }
}
function xf(e) {
    return zt(e) ? e : e.contextElement
}
function xi(e) {
    const t = xf(e);
    if (!Zt(t))
        return nr(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: i, $: o} = j0(t);
    let s = (o ? Va(n.width) : n.width) / r
      , a = (o ? Va(n.height) : n.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: s,
        y: a
    }
}
const Db = nr(0);
function D0(e) {
    const t = at(e);
    return !vf() || !t.visualViewport ? Db : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Ob(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== at(e) ? !1 : t
}
function Vr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
      , o = xf(e);
    let s = nr(1);
    t && (r ? zt(r) && (s = xi(r)) : s = xi(e));
    const a = Ob(o, n, r) ? D0(o) : nr(0);
    let l = (i.left + a.x) / s.x
      , u = (i.top + a.y) / s.y
      , c = i.width / s.x
      , d = i.height / s.y;
    if (o) {
        const f = at(o)
          , h = r && zt(r) ? at(r) : r;
        let v = f
          , g = Dc(v);
        for (; g && r && h !== v; ) {
            const x = xi(g)
              , p = g.getBoundingClientRect()
              , m = Bt(g)
              , y = p.left + (g.clientLeft + parseFloat(m.paddingLeft)) * x.x
              , C = p.top + (g.clientTop + parseFloat(m.paddingTop)) * x.y;
            l *= x.x,
            u *= x.y,
            c *= x.x,
            d *= x.y,
            l += y,
            u += C,
            v = at(g),
            g = Dc(v)
        }
    }
    return _a({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function Ib(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e;
    const o = i === "fixed"
      , s = en(r)
      , a = t ? vl(t.floating) : !1;
    if (r === s || a && o)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = nr(1);
    const c = nr(0)
      , d = Zt(r);
    if ((d || !d && !o) && ((Ki(r) !== "body" || cs(s)) && (l = xl(r)),
    Zt(r))) {
        const f = Vr(r);
        u = xi(r),
        c.x = f.x + r.clientLeft,
        c.y = f.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y
    }
}
function Vb(e) {
    return Array.from(e.getClientRects())
}
function Oc(e, t) {
    const n = xl(e).scrollLeft;
    return t ? t.left + n : Vr(en(e)).left + n
}
function Fb(e) {
    const t = en(e)
      , n = xl(e)
      , r = e.ownerDocument.body
      , i = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , o = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Oc(e);
    const a = -n.scrollTop;
    return Bt(r).direction === "rtl" && (s += it(t.clientWidth, r.clientWidth) - i),
    {
        width: i,
        height: o,
        x: s,
        y: a
    }
}
function _b(e, t) {
    const n = at(e)
      , r = en(e)
      , i = n.visualViewport;
    let o = r.clientWidth
      , s = r.clientHeight
      , a = 0
      , l = 0;
    if (i) {
        o = i.width,
        s = i.height;
        const u = vf();
        (!u || u && t === "fixed") && (a = i.offsetLeft,
        l = i.offsetTop)
    }
    return {
        width: o,
        height: s,
        x: a,
        y: l
    }
}
function zb(e, t) {
    const n = Vr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , o = Zt(e) ? xi(e) : nr(1)
      , s = e.clientWidth * o.x
      , a = e.clientHeight * o.y
      , l = i * o.x
      , u = r * o.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}
function jp(e, t, n) {
    let r;
    if (t === "viewport")
        r = _b(e, n);
    else if (t === "document")
        r = Fb(en(e));
    else if (zt(t))
        r = zb(t, n);
    else {
        const i = D0(e);
        r = {
            ...t,
            x: t.x - i.x,
            y: t.y - i.y
        }
    }
    return _a(r)
}
function O0(e, t) {
    const n = ir(e);
    return n === t || !zt(n) || Vi(n) ? !1 : Bt(n).position === "fixed" || O0(n, t)
}
function Bb(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Go(e, [], !1).filter(a => zt(a) && Ki(a) !== "body")
      , i = null;
    const o = Bt(e).position === "fixed";
    let s = o ? ir(e) : e;
    for (; zt(s) && !Vi(s); ) {
        const a = Bt(s)
          , l = yf(s);
        !l && a.position === "fixed" && (i = null),
        (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || cs(s) && !l && O0(e, s)) ? r = r.filter(c => c !== s) : i = a,
        s = ir(s)
    }
    return t.set(e, r),
    r
}
function $b(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
    const s = [...n === "clippingAncestors" ? vl(t) ? [] : Bb(t, this._c) : [].concat(n), r]
      , a = s[0]
      , l = s.reduce( (u, c) => {
        const d = jp(t, c, i);
        return u.top = it(d.top, u.top),
        u.right = tr(d.right, u.right),
        u.bottom = tr(d.bottom, u.bottom),
        u.left = it(d.left, u.left),
        u
    }
    , jp(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function Ub(e) {
    const {width: t, height: n} = j0(e);
    return {
        width: t,
        height: n
    }
}
function Wb(e, t, n) {
    const r = Zt(t)
      , i = en(t)
      , o = n === "fixed"
      , s = Vr(e, !0, o, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = nr(0);
    if (r || !r && !o)
        if ((Ki(t) !== "body" || cs(i)) && (a = xl(t)),
        r) {
            const h = Vr(t, !0, o, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            i && (l.x = Oc(i));
    let u = 0
      , c = 0;
    if (i && !r && !o) {
        const h = i.getBoundingClientRect();
        c = h.top + a.scrollTop,
        u = h.left + a.scrollLeft - Oc(i, h)
    }
    const d = s.left + a.scrollLeft - l.x - u
      , f = s.top + a.scrollTop - l.y - c;
    return {
        x: d,
        y: f,
        width: s.width,
        height: s.height
    }
}
function hu(e) {
    return Bt(e).position === "static"
}
function Dp(e, t) {
    if (!Zt(e) || Bt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return en(e) === n && (n = n.ownerDocument.body),
    n
}
function I0(e, t) {
    const n = at(e);
    if (vl(e))
        return n;
    if (!Zt(e)) {
        let i = ir(e);
        for (; i && !Vi(i); ) {
            if (zt(i) && !hu(i))
                return i;
            i = ir(i)
        }
        return n
    }
    let r = Dp(e, t);
    for (; r && Lb(r) && hu(r); )
        r = Dp(r, t);
    return r && Vi(r) && hu(r) && !yf(r) ? n : r || jb(e) || n
}
const Hb = async function(e) {
    const t = this.getOffsetParent || I0
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Wb(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Kb(e) {
    return Bt(e).direction === "rtl"
}
const Gb = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ib,
    getDocumentElement: en,
    getClippingRect: $b,
    getOffsetParent: I0,
    getElementRects: Hb,
    getClientRects: Vb,
    getDimensions: Ub,
    getScale: xi,
    isElement: zt,
    isRTL: Kb
};
function Yb(e, t) {
    let n = null, r;
    const i = en(e);
    function o() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function s(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        o();
        const {left: u, top: c, width: d, height: f} = e.getBoundingClientRect();
        if (a || t(),
        !d || !f)
            return;
        const h = _s(c)
          , v = _s(i.clientWidth - (u + d))
          , g = _s(i.clientHeight - (c + f))
          , x = _s(u)
          , m = {
            rootMargin: -h + "px " + -v + "px " + -g + "px " + -x + "px",
            threshold: it(0, tr(1, l)) || 1
        };
        let y = !0;
        function C(E) {
            const T = E[0].intersectionRatio;
            if (T !== l) {
                if (!y)
                    return s();
                T ? s(!1, T) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            y = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...m,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,m)
        }
        n.observe(e)
    }
    return s(!0),
    o
}
function Qb(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: i=!0, ancestorResize: o=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = xf(e)
      , c = i || o ? [...u ? Go(u) : [], ...Go(t)] : [];
    c.forEach(p => {
        i && p.addEventListener("scroll", n, {
            passive: !0
        }),
        o && p.addEventListener("resize", n)
    }
    );
    const d = u && a ? Yb(u, n) : null;
    let f = -1
      , h = null;
    s && (h = new ResizeObserver(p => {
        let[m] = p;
        m && m.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var y;
            (y = h) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let v, g = l ? Vr(e) : null;
    l && x();
    function x() {
        const p = Vr(e);
        g && (p.x !== g.x || p.y !== g.y || p.width !== g.width || p.height !== g.height) && n(),
        g = p,
        v = requestAnimationFrame(x)
    }
    return n(),
    () => {
        var p;
        c.forEach(m => {
            i && m.removeEventListener("scroll", n),
            o && m.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (p = h) == null || p.disconnect(),
        h = null,
        l && cancelAnimationFrame(v)
    }
}
const Xb = Rb
  , qb = Ab
  , Zb = bb
  , Jb = Nb
  , eP = Pb
  , Op = Tb
  , tP = Mb
  , nP = (e, t, n) => {
    const r = new Map
      , i = {
        platform: Gb,
        ...n
    }
      , o = {
        ...i.platform,
        _c: r
    };
    return Eb(e, t, {
        ...i,
        platform: o
    })
}
;
var sa = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function za(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!za(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const o = i[r];
            if (!(o === "_owner" && e.$$typeof) && !za(e[o], t[o]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function V0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Ip(e, t) {
    const n = V0(e);
    return Math.round(t * n) / n
}
function pu(e) {
    const t = w.useRef(e);
    return sa( () => {
        t.current = e
    }
    ),
    t
}
function rP(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: o, floating: s}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = w.useState(r);
    za(f, r) || h(r);
    const [v,g] = w.useState(null)
      , [x,p] = w.useState(null)
      , m = w.useCallback(k => {
        k !== T.current && (T.current = k,
        g(k))
    }
    , [])
      , y = w.useCallback(k => {
        k !== b.current && (b.current = k,
        p(k))
    }
    , [])
      , C = o || v
      , E = s || x
      , T = w.useRef(null)
      , b = w.useRef(null)
      , P = w.useRef(c)
      , M = l != null
      , N = pu(l)
      , z = pu(i)
      , I = pu(u)
      , K = w.useCallback( () => {
        if (!T.current || !b.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: f
        };
        z.current && (k.platform = z.current),
        nP(T.current, b.current, k).then(A => {
            const O = {
                ...A,
                isPositioned: I.current !== !1
            };
            D.current && !za(P.current, O) && (P.current = O,
            ls.flushSync( () => {
                d(O)
            }
            ))
        }
        )
    }
    , [f, t, n, z, I]);
    sa( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = w.useRef(!1);
    sa( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    sa( () => {
        if (C && (T.current = C),
        E && (b.current = E),
        C && E) {
            if (N.current)
                return N.current(C, E, K);
            K()
        }
    }
    , [C, E, K, N, M]);
    const Y = w.useMemo( () => ({
        reference: T,
        floating: b,
        setReference: m,
        setFloating: y
    }), [m, y])
      , $ = w.useMemo( () => ({
        reference: C,
        floating: E
    }), [C, E])
      , _ = w.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return k;
        const A = Ip($.floating, c.x)
          , O = Ip($.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + A + "px, " + O + "px)",
            ...V0($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: A,
            top: O
        }
    }
    , [n, a, $.floating, c.x, c.y]);
    return w.useMemo( () => ({
        ...c,
        update: K,
        refs: Y,
        elements: $,
        floatingStyles: _
    }), [c, K, Y, $, _])
}
const iP = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: i} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Op({
                element: r.current,
                padding: i
            }).fn(n) : {} : r ? Op({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , oP = (e, t) => ({
    ...Xb(e),
    options: [e, t]
})
  , sP = (e, t) => ({
    ...qb(e),
    options: [e, t]
})
  , aP = (e, t) => ({
    ...tP(e),
    options: [e, t]
})
  , lP = (e, t) => ({
    ...Zb(e),
    options: [e, t]
})
  , uP = (e, t) => ({
    ...Jb(e),
    options: [e, t]
})
  , cP = (e, t) => ({
    ...eP(e),
    options: [e, t]
})
  , dP = (e, t) => ({
    ...iP(e),
    options: [e, t]
});
var fP = "Arrow"
  , F0 = w.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: i=5, ...o} = e;
    return S.jsx(nt.svg, {
        ...o,
        ref: t,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : S.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
F0.displayName = fP;
var hP = F0;
function pP(e) {
    const [t,n] = w.useState(void 0);
    return er( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length)
                    return;
                const o = i[0];
                let s, a;
                if ("borderBoxSize"in o) {
                    const l = o.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize,
                    a = u.blockSize
                } else
                    s = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var _0 = "Popper"
  , [z0,B0] = pl(_0)
  , [cL,$0] = z0(_0)
  , U0 = "PopperAnchor"
  , W0 = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...i} = e
      , o = $0(U0, n)
      , s = w.useRef(null)
      , a = _t(t, s);
    return w.useEffect( () => {
        o.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : S.jsx(nt.div, {
        ...i,
        ref: a
    })
}
);
W0.displayName = U0;
var wf = "PopperContent"
  , [mP,gP] = z0(wf)
  , H0 = w.forwardRef( (e, t) => {
    var ee, Br, vn, cr, xn, $r;
    const {__scopePopper: n, side: r="bottom", sideOffset: i=0, align: o="center", alignOffset: s=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: v, ...g} = e
      , x = $0(wf, n)
      , [p,m] = w.useState(null)
      , y = _t(t, wn => m(wn))
      , [C,E] = w.useState(null)
      , T = pP(C)
      , b = (T == null ? void 0 : T.width) ?? 0
      , P = (T == null ? void 0 : T.height) ?? 0
      , M = r + (o !== "center" ? "-" + o : "")
      , N = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , I = z.length > 0
      , K = {
        padding: N,
        boundary: z.filter(vP),
        altBoundary: I
    }
      , {refs: D, floatingStyles: Y, placement: $, isPositioned: _, middlewareData: k} = rP({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...wn) => Qb(...wn, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [oP({
            mainAxis: i + P,
            alignmentAxis: s
        }), l && sP({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? aP() : void 0,
            ...K
        }), l && lP({
            ...K
        }), uP({
            ...K,
            apply: ({elements: wn, rects: ms, availableWidth: Ll, availableHeight: gs}) => {
                const {width: jl, height: Xi} = ms.reference
                  , Ur = wn.floating.style;
                Ur.setProperty("--radix-popper-available-width", `${Ll}px`),
                Ur.setProperty("--radix-popper-available-height", `${gs}px`),
                Ur.setProperty("--radix-popper-anchor-width", `${jl}px`),
                Ur.setProperty("--radix-popper-anchor-height", `${Xi}px`)
            }
        }), C && dP({
            element: C,
            padding: a
        }), xP({
            arrowWidth: b,
            arrowHeight: P
        }), f && cP({
            strategy: "referenceHidden",
            ...K
        })]
    })
      , [A,O] = Y0($)
      , U = Jn(v);
    er( () => {
        _ && (U == null || U())
    }
    , [_, U]);
    const B = (ee = k.arrow) == null ? void 0 : ee.x
      , Q = (Br = k.arrow) == null ? void 0 : Br.y
      , q = ((vn = k.arrow) == null ? void 0 : vn.centerOffset) !== 0
      , [ve,Le] = w.useState();
    return er( () => {
        p && Le(window.getComputedStyle(p).zIndex)
    }
    , [p]),
    S.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: _ ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ve,
            "--radix-popper-transform-origin": [(cr = k.transformOrigin) == null ? void 0 : cr.x, (xn = k.transformOrigin) == null ? void 0 : xn.y].join(" "),
            ...(($r = k.hide) == null ? void 0 : $r.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: S.jsx(mP, {
            scope: n,
            placedSide: A,
            onArrowChange: E,
            arrowX: B,
            arrowY: Q,
            shouldHideArrow: q,
            children: S.jsx(nt.div, {
                "data-side": A,
                "data-align": O,
                ...g,
                ref: y,
                style: {
                    ...g.style,
                    animation: _ ? void 0 : "none"
                }
            })
        })
    })
}
);
H0.displayName = wf;
var K0 = "PopperArrow"
  , yP = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , G0 = w.forwardRef(function(t, n) {
    const {__scopePopper: r, ...i} = t
      , o = gP(K0, r)
      , s = yP[o.placedSide];
    return S.jsx("span", {
        ref: o.onArrowChange,
        style: {
            position: "absolute",
            left: o.arrowX,
            top: o.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[o.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[o.placedSide],
            visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: S.jsx(hP, {
            ...i,
            ref: n,
            style: {
                ...i.style,
                display: "block"
            }
        })
    })
});
G0.displayName = K0;
function vP(e) {
    return e !== null
}
var xP = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, p, m;
        const {placement: n, rects: r, middlewareData: i} = t
          , s = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0
          , a = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [u,c] = Y0(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((p = i.arrow) == null ? void 0 : p.x) ?? 0) + a / 2
          , h = (((m = i.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let v = ""
          , g = "";
        return u === "bottom" ? (v = s ? d : `${f}px`,
        g = `${-l}px`) : u === "top" ? (v = s ? d : `${f}px`,
        g = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`,
        g = s ? d : `${h}px`) : u === "left" && (v = `${r.floating.width + l}px`,
        g = s ? d : `${h}px`),
        {
            data: {
                x: v,
                y: g
            }
        }
    }
});
function Y0(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var wP = W0
  , SP = H0
  , CP = G0
  , [wl,dL] = pl("Tooltip", [B0])
  , Sf = B0()
  , Q0 = "TooltipProvider"
  , EP = 700
  , Vp = "tooltip.open"
  , [TP,X0] = wl(Q0)
  , q0 = e => {
    const {__scopeTooltip: t, delayDuration: n=EP, skipDelayDuration: r=300, disableHoverableContent: i=!1, children: o} = e
      , s = w.useRef(!0)
      , a = w.useRef(!1)
      , l = w.useRef(0);
    return w.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    S.jsx(TP, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(l.current),
            s.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: i,
        children: o
    })
}
;
q0.displayName = Q0;
var Z0 = "Tooltip"
  , [fL,Sl] = wl(Z0)
  , Ic = "TooltipTrigger"
  , bP = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = Sl(Ic, n)
      , o = X0(Ic, n)
      , s = Sf(n)
      , a = w.useRef(null)
      , l = _t(t, a, i.onTriggerChange)
      , u = w.useRef(!1)
      , c = w.useRef(!1)
      , d = w.useCallback( () => u.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    S.jsx(wP, {
        asChild: !0,
        ...s,
        children: S.jsx(nt.button, {
            "aria-describedby": i.open ? i.contentId : void 0,
            "data-state": i.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: Ee(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !o.isPointerInTransitRef.current && (i.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Ee(e.onPointerLeave, () => {
                i.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Ee(e.onPointerDown, () => {
                i.open && i.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: Ee(e.onFocus, () => {
                u.current || i.onOpen()
            }
            ),
            onBlur: Ee(e.onBlur, i.onClose),
            onClick: Ee(e.onClick, i.onClose)
        })
    })
}
);
bP.displayName = Ic;
var PP = "TooltipPortal"
  , [hL,kP] = wl(PP, {
    forceMount: void 0
})
  , Fi = "TooltipContent"
  , J0 = w.forwardRef( (e, t) => {
    const n = kP(Fi, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: i="top", ...o} = e
      , s = Sl(Fi, e.__scopeTooltip);
    return S.jsx(uf, {
        present: r || s.open,
        children: s.disableHoverableContent ? S.jsx(ex, {
            side: i,
            ...o,
            ref: t
        }) : S.jsx(RP, {
            side: i,
            ...o,
            ref: t
        })
    })
}
)
  , RP = w.forwardRef( (e, t) => {
    const n = Sl(Fi, e.__scopeTooltip)
      , r = X0(Fi, e.__scopeTooltip)
      , i = w.useRef(null)
      , o = _t(t, i)
      , [s,a] = w.useState(null)
      , {trigger: l, onClose: u} = n
      , c = i.current
      , {onPointerInTransitChange: d} = r
      , f = w.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = w.useCallback( (v, g) => {
        const x = v.currentTarget
          , p = {
            x: v.clientX,
            y: v.clientY
        }
          , m = jP(p, x.getBoundingClientRect())
          , y = DP(p, m)
          , C = OP(g.getBoundingClientRect())
          , E = VP([...y, ...C]);
        a(E),
        d(!0)
    }
    , [d]);
    return w.useEffect( () => () => f(), [f]),
    w.useEffect( () => {
        if (l && c) {
            const v = x => h(x, c)
              , g = x => h(x, l);
            return l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, c, h, f]),
    w.useEffect( () => {
        if (s) {
            const v = g => {
                const x = g.target
                  , p = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , m = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x))
                  , y = !IP(p, s);
                m ? f() : y && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
        }
    }
    , [l, c, s, u, f]),
    S.jsx(ex, {
        ...e,
        ref: o
    })
}
)
  , [AP,MP] = wl(Z0, {
    isInside: !1
})
  , NP = YC("TooltipContent")
  , ex = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: o, onPointerDownOutside: s, ...a} = e
      , l = Sl(Fi, n)
      , u = Sf(n)
      , {onClose: c} = l;
    return w.useEffect( () => (document.addEventListener(Vp, c),
    () => document.removeEventListener(Vp, c)), [c]),
    w.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    S.jsx(lf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: S.jsxs(SP, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [S.jsx(NP, {
                children: r
            }), S.jsx(AP, {
                scope: n,
                isInside: !0,
                children: S.jsx(xE, {
                    id: l.contentId,
                    role: "tooltip",
                    children: i || r
                })
            })]
        })
    })
}
);
J0.displayName = Fi;
var tx = "TooltipArrow"
  , LP = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = Sf(n);
    return MP(tx, n).isInside ? null : S.jsx(CP, {
        ...i,
        ...r,
        ref: t
    })
}
);
LP.displayName = tx;
function jP(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , i = Math.abs(t.right - e.x)
      , o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, o)) {
    case o:
        return "left";
    case i:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function DP(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function OP(e) {
    const {top: t, right: n, bottom: r, left: i} = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}
function IP(e, t) {
    const {x: n, y: r} = e;
    let i = !1;
    for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
        const a = t[o]
          , l = t[s]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (i = !i)
    }
    return i
}
function VP(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    FP(t)
}
function FP(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2; ) {
            const o = t[t.length - 1]
              , s = t[t.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x))
                t.pop();
            else
                break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2; ) {
            const o = n[n.length - 1]
              , s = n[n.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x))
                n.pop();
            else
                break
        }
        n.push(i)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var _P = q0
  , nx = J0;
const zP = _P
  , BP = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => S.jsx(nx, {
    ref: r,
    sideOffset: t,
    className: zr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
BP.displayName = nx.displayName;
var Cl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , El = typeof window > "u" || "Deno"in globalThis;
function Mt() {}
function $P(e, t) {
    return typeof e == "function" ? e(t) : e
}
function UP(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function WP(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Vc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function HP(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Fp(e, t) {
    const {type: n="all", exact: r, fetchStatus: i, predicate: o, queryKey: s, stale: a} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Cf(s, t.options))
                return !1
        } else if (!Qo(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || o && !o(t))
}
function _p(e, t) {
    const {exact: n, status: r, predicate: i, mutationKey: o} = e;
    if (o) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Yo(t.options.mutationKey) !== Yo(o))
                return !1
        } else if (!Qo(t.options.mutationKey, o))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function Cf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Yo)(e)
}
function Yo(e) {
    return JSON.stringify(e, (t, n) => Fc(n) ? Object.keys(n).sort().reduce( (r, i) => (r[i] = n[i],
    r), {}) : n)
}
function Qo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Qo(e[n], t[n])) : !1
}
function rx(e, t) {
    if (e === t)
        return e;
    const n = zp(e) && zp(t);
    if (n || Fc(e) && Fc(t)) {
        const r = n ? e : Object.keys(e)
          , i = r.length
          , o = n ? t : Object.keys(t)
          , s = o.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : o[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = rx(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return i === s && u === i ? e : a
    }
    return t
}
function zp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Fc(e) {
    if (!Bp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Bp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Bp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function KP(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function GP(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? rx(e, t) : t
}
function YP(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function QP(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Ef = Symbol();
function ix(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Ef ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Er, Dn, Ci, vg, XP = (vg = class extends Cl {
    constructor() {
        super();
        J(this, Er);
        J(this, Dn);
        J(this, Ci);
        H(this, Ci, t => {
            if (!El && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, Dn) || this.setEventListener(R(this, Ci))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Dn)) == null || t.call(this),
        H(this, Dn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Ci, t),
        (n = R(this, Dn)) == null || n.call(this),
        H(this, Dn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        R(this, Er) !== t && (H(this, Er, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof R(this, Er) == "boolean" ? R(this, Er) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Er = new WeakMap,
Dn = new WeakMap,
Ci = new WeakMap,
vg), ox = new XP, Ei, On, Ti, xg, qP = (xg = class extends Cl {
    constructor() {
        super();
        J(this, Ei, !0);
        J(this, On);
        J(this, Ti);
        H(this, Ti, t => {
            if (!El && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, On) || this.setEventListener(R(this, Ti))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, On)) == null || t.call(this),
        H(this, On, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Ti, t),
        (n = R(this, On)) == null || n.call(this),
        H(this, On, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        R(this, Ei) !== t && (H(this, Ei, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return R(this, Ei)
    }
}
,
Ei = new WeakMap,
On = new WeakMap,
Ti = new WeakMap,
xg), Ba = new qP;
function ZP() {
    let e, t;
    const n = new Promise( (i, o) => {
        e = i,
        t = o
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(i) {
        Object.assign(n, i),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }),
        e(i)
    }
    ,
    n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }),
        t(i)
    }
    ,
    n
}
function JP(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function sx(e) {
    return (e ?? "online") === "online" ? Ba.isOnline() : !0
}
var ax = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function mu(e) {
    return e instanceof ax
}
function lx(e) {
    let t = !1, n = 0, r = !1, i;
    const o = ZP()
      , s = g => {
        var x;
        r || (f(new ax(g)),
        (x = e.abort) == null || x.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => ox.isFocused() && (e.networkMode === "always" || Ba.isOnline()) && e.canRun()
      , c = () => sx(e.networkMode) && e.canRun()
      , d = g => {
        var x;
        r || (r = !0,
        (x = e.onSuccess) == null || x.call(e, g),
        i == null || i(),
        o.resolve(g))
    }
      , f = g => {
        var x;
        r || (r = !0,
        (x = e.onError) == null || x.call(e, g),
        i == null || i(),
        o.reject(g))
    }
      , h = () => new Promise(g => {
        var x;
        i = p => {
            (r || u()) && g(p)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var g;
        i = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , v = () => {
        if (r)
            return;
        let g;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
            g = x ?? e.fn()
        } catch (p) {
            g = Promise.reject(p)
        }
        Promise.resolve(g).then(d).catch(p => {
            var T;
            if (r)
                return;
            const m = e.retry ?? (El ? 0 : 3)
              , y = e.retryDelay ?? JP
              , C = typeof y == "function" ? y(n, p) : y
              , E = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, p);
            if (t || !E) {
                f(p);
                return
            }
            n++,
            (T = e.onFail) == null || T.call(e, n, p),
            KP(C).then( () => u() ? void 0 : h()).then( () => {
                t ? f(p) : v()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        cancel: s,
        continue: () => (i == null || i(),
        o),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? v() : h().then(v),
        o)
    }
}
var ek = e => setTimeout(e, 0);
function tk() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , i = ek;
    const o = a => {
        t ? e.push(a) : i( () => {
            n(a)
        }
        )
    }
      , s = () => {
        const a = e;
        e = [],
        a.length && i( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || s()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            o( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: o,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            i = a
        }
    }
}
var Ue = tk(), Tr, wg, ux = (wg = class {
    constructor() {
        J(this, Tr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        UP(this.gcTime) && H(this, Tr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (El ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        R(this, Tr) && (clearTimeout(R(this, Tr)),
        H(this, Tr, void 0))
    }
}
,
Tr = new WeakMap,
wg), bi, br, ft, Pr, Ie, ts, kr, Nt, nn, Sg, nk = (Sg = class extends ux {
    constructor(t) {
        super();
        J(this, Nt);
        J(this, bi);
        J(this, br);
        J(this, ft);
        J(this, Pr);
        J(this, Ie);
        J(this, ts);
        J(this, kr);
        H(this, kr, !1),
        H(this, ts, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, Pr, t.client),
        H(this, ft, R(this, Pr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, bi, ik(this.options)),
        this.state = t.state ?? R(this, bi),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = R(this, Ie)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...R(this, ts),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && R(this, ft).remove(this)
    }
    setData(t, n) {
        const r = GP(this.state.data, t, this.options);
        return je(this, Nt, nn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        je(this, Nt, nn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, i;
        const n = (r = R(this, Ie)) == null ? void 0 : r.promise;
        return (i = R(this, Ie)) == null || i.cancel(t),
        n ? n.then(Mt).catch(Mt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(R(this, bi))
    }
    isActive() {
        return this.observers.some(t => HP(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ef || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Vc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !WP(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Ie)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Ie)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        R(this, ft).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (R(this, Ie) && (R(this, kr) ? R(this, Ie).cancel({
            revert: !0
        }) : R(this, Ie).cancelRetry()),
        this.scheduleGc()),
        R(this, ft).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || je(this, Nt, nn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (R(this, Ie))
                return R(this, Ie).continueRetry(),
                R(this, Ie).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , i = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (H(this, kr, !0),
                r.signal)
            })
        }
          , o = () => {
            const f = ix(this.options, n)
              , v = ( () => {
                const g = {
                    client: R(this, Pr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(g),
                g
            }
            )();
            return H(this, kr, !1),
            this.options.persister ? this.options.persister(f, v, this) : f(v)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: R(this, Pr),
                state: this.state,
                fetchFn: o
            };
            return i(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        H(this, br, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && je(this, Nt, nn).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, v, g, x;
            mu(f) && f.silent || je(this, Nt, nn).call(this, {
                type: "error",
                error: f
            }),
            mu(f) || ((v = (h = R(this, ft).config).onError) == null || v.call(h, f, this),
            (x = (g = R(this, ft).config).onSettled) == null || x.call(g, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Ie, lx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, v, g, x;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (p) {
                    l(p);
                    return
                }
                (v = (h = R(this, ft).config).onSuccess) == null || v.call(h, f, this),
                (x = (g = R(this, ft).config).onSettled) == null || x.call(g, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                je(this, Nt, nn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                je(this, Nt, nn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                je(this, Nt, nn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        R(this, Ie).start()
    }
}
,
bi = new WeakMap,
br = new WeakMap,
ft = new WeakMap,
Pr = new WeakMap,
Ie = new WeakMap,
ts = new WeakMap,
kr = new WeakMap,
Nt = new WeakSet,
nn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...rk(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, br, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const i = t.error;
            return mu(i) && i.revert && R(this, br) ? {
                ...R(this, br),
                fetchStatus: "idle"
            } : {
                ...r,
                error: i,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Ue.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        R(this, ft).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Sg);
function rk(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: sx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function ik(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ht, Cg, ok = (Cg = class extends Cl {
    constructor(t={}) {
        super();
        J(this, Ht);
        this.config = t,
        H(this, Ht, new Map)
    }
    build(t, n, r) {
        const i = n.queryKey
          , o = n.queryHash ?? Cf(i, n);
        let s = this.get(o);
        return s || (s = new nk({
            client: t,
            queryKey: i,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i)
        }),
        this.add(s)),
        s
    }
    add(t) {
        R(this, Ht).has(t.queryHash) || (R(this, Ht).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = R(this, Ht).get(t.queryHash);
        n && (t.destroy(),
        n === t && R(this, Ht).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ue.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return R(this, Ht).get(t)
    }
    getAll() {
        return [...R(this, Ht).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Fp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Fp(t, r)) : n
    }
    notify(t) {
        Ue.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ue.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ue.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Ht = new WeakMap,
Cg), Kt, Be, Rr, Gt, kn, Eg, sk = (Eg = class extends ux {
    constructor(t) {
        super();
        J(this, Gt);
        J(this, Kt);
        J(this, Be);
        J(this, Rr);
        this.mutationId = t.mutationId,
        H(this, Be, t.mutationCache),
        H(this, Kt, []),
        this.state = t.state || ak(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        R(this, Kt).includes(t) || (R(this, Kt).push(t),
        this.clearGcTimeout(),
        R(this, Be).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Kt, R(this, Kt).filter(n => n !== t)),
        this.scheduleGc(),
        R(this, Be).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        R(this, Kt).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, Be).remove(this))
    }
    continue() {
        var t;
        return ((t = R(this, Rr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, s, a, l, u, c, d, f, h, v, g, x, p, m, y, C, E, T, b, P;
        const n = () => {
            je(this, Gt, kn).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Rr, lx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, N) => {
                je(this, Gt, kn).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: N
                })
            }
            ,
            onPause: () => {
                je(this, Gt, kn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, Be).canRun(this)
        }));
        const r = this.state.status === "pending"
          , i = !R(this, Rr).canStart();
        try {
            if (r)
                n();
            else {
                je(this, Gt, kn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: i
                }),
                await ((s = (o = R(this, Be).config).onMutate) == null ? void 0 : s.call(o, t, this));
                const N = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                N !== this.state.context && je(this, Gt, kn).call(this, {
                    type: "pending",
                    context: N,
                    variables: t,
                    isPaused: i
                })
            }
            const M = await R(this, Rr).start();
            return await ((c = (u = R(this, Be).config).onSuccess) == null ? void 0 : c.call(u, M, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, M, t, this.state.context)),
            await ((v = (h = R(this, Be).config).onSettled) == null ? void 0 : v.call(h, M, null, this.state.variables, this.state.context, this)),
            await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, M, null, t, this.state.context)),
            je(this, Gt, kn).call(this, {
                type: "success",
                data: M
            }),
            M
        } catch (M) {
            try {
                throw await ((m = (p = R(this, Be).config).onError) == null ? void 0 : m.call(p, M, t, this.state.context, this)),
                await ((C = (y = this.options).onError) == null ? void 0 : C.call(y, M, t, this.state.context)),
                await ((T = (E = R(this, Be).config).onSettled) == null ? void 0 : T.call(E, void 0, M, this.state.variables, this.state.context, this)),
                await ((P = (b = this.options).onSettled) == null ? void 0 : P.call(b, void 0, M, t, this.state.context)),
                M
            } finally {
                je(this, Gt, kn).call(this, {
                    type: "error",
                    error: M
                })
            }
        } finally {
            R(this, Be).runNext(this)
        }
    }
}
,
Kt = new WeakMap,
Be = new WeakMap,
Rr = new WeakMap,
Gt = new WeakSet,
kn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Ue.batch( () => {
        R(this, Kt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        R(this, Be).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Eg);
function ak() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var sn, Lt, ns, Tg, lk = (Tg = class extends Cl {
    constructor(t={}) {
        super();
        J(this, sn);
        J(this, Lt);
        J(this, ns);
        this.config = t,
        H(this, sn, new Set),
        H(this, Lt, new Map),
        H(this, ns, 0)
    }
    build(t, n, r) {
        const i = new sk({
            mutationCache: this,
            mutationId: ++vs(this, ns)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i),
        i
    }
    add(t) {
        R(this, sn).add(t);
        const n = zs(t);
        if (typeof n == "string") {
            const r = R(this, Lt).get(n);
            r ? r.push(t) : R(this, Lt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (R(this, sn).delete(t)) {
            const n = zs(t);
            if (typeof n == "string") {
                const r = R(this, Lt).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else
                        r[0] === t && R(this, Lt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = zs(t);
        if (typeof n == "string") {
            const r = R(this, Lt).get(n)
              , i = r == null ? void 0 : r.find(o => o.state.status === "pending");
            return !i || i === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = zs(t);
        if (typeof n == "string") {
            const i = (r = R(this, Lt).get(n)) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
            return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Ue.batch( () => {
            R(this, sn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            R(this, sn).clear(),
            R(this, Lt).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, sn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => _p(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => _p(t, n))
    }
    notify(t) {
        Ue.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ue.batch( () => Promise.all(t.map(n => n.continue().catch(Mt))))
    }
}
,
sn = new WeakMap,
Lt = new WeakMap,
ns = new WeakMap,
Tg);
function zs(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function $p(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, v;
            const r = t.options
              , i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , o = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let g = !1;
                const x = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , p = ix(t.options, t.fetchOptions)
                  , m = async (y, C, E) => {
                    if (g)
                        return Promise.reject();
                    if (C == null && y.pages.length)
                        return Promise.resolve(y);
                    const b = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(z),
                        z
                    }
                    )()
                      , P = await p(b)
                      , {maxPages: M} = t.options
                      , N = E ? QP : YP;
                    return {
                        pages: N(y.pages, P, M),
                        pageParams: N(y.pageParams, C, M)
                    }
                }
                ;
                if (i && o.length) {
                    const y = i === "backward"
                      , C = y ? uk : Up
                      , E = {
                        pages: o,
                        pageParams: s
                    }
                      , T = C(r, E);
                    a = await m(E, T, y)
                } else {
                    const y = e ?? o.length;
                    do {
                        const C = l === 0 ? s[0] ?? r.initialPageParam : Up(r, a);
                        if (l > 0 && C == null)
                            break;
                        a = await m(a, C),
                        l++
                    } while (l < y)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, x;
                return (x = (g = t.options).persister) == null ? void 0 : x.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Up(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function uk(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var me, In, Vn, Pi, ki, Fn, Ri, Ai, bg, ck = (bg = class {
    constructor(e={}) {
        J(this, me);
        J(this, In);
        J(this, Vn);
        J(this, Pi);
        J(this, ki);
        J(this, Fn);
        J(this, Ri);
        J(this, Ai);
        H(this, me, e.queryCache || new ok),
        H(this, In, e.mutationCache || new lk),
        H(this, Vn, e.defaultOptions || {}),
        H(this, Pi, new Map),
        H(this, ki, new Map),
        H(this, Fn, 0)
    }
    mount() {
        vs(this, Fn)._++,
        R(this, Fn) === 1 && (H(this, Ri, ox.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, me).onFocus())
        }
        )),
        H(this, Ai, Ba.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, me).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        vs(this, Fn)._--,
        R(this, Fn) === 0 && ((e = R(this, Ri)) == null || e.call(this),
        H(this, Ri, void 0),
        (t = R(this, Ai)) == null || t.call(this),
        H(this, Ai, void 0))
    }
    isFetching(e) {
        return R(this, me).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return R(this, In).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, me).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = R(this, me).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Vc(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return R(this, me).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = R(this, me).get(r.queryHash)
          , o = i == null ? void 0 : i.state.data
          , s = $P(t, o);
        if (s !== void 0)
            return R(this, me).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ue.batch( () => R(this, me).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, me).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = R(this, me);
        Ue.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = R(this, me);
        return Ue.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Ue.batch( () => R(this, me).findAll(e).map(i => i.cancel(n)));
        return Promise.all(r).then(Mt).catch(Mt)
    }
    invalidateQueries(e, t={}) {
        return Ue.batch( () => (R(this, me).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Ue.batch( () => R(this, me).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
            let o = i.fetch(void 0, n);
            return n.throwOnError || (o = o.catch(Mt)),
            i.state.fetchStatus === "paused" ? Promise.resolve() : o
        }
        ));
        return Promise.all(r).then(Mt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, me).build(this, t);
        return n.isStaleByTime(Vc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Mt).catch(Mt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = $p(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Mt).catch(Mt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = $p(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ba.isOnline() ? R(this, In).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, me)
    }
    getMutationCache() {
        return R(this, In)
    }
    getDefaultOptions() {
        return R(this, Vn)
    }
    setDefaultOptions(e) {
        H(this, Vn, e)
    }
    setQueryDefaults(e, t) {
        R(this, Pi).set(Yo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...R(this, Pi).values()]
          , n = {};
        return t.forEach(r => {
            Qo(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        R(this, ki).set(Yo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...R(this, ki).values()]
          , n = {};
        return t.forEach(r => {
            Qo(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...R(this, Vn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Cf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Ef && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...R(this, Vn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        R(this, me).clear(),
        R(this, In).clear()
    }
}
,
me = new WeakMap,
In = new WeakMap,
Vn = new WeakMap,
Pi = new WeakMap,
ki = new WeakMap,
Fn = new WeakMap,
Ri = new WeakMap,
Ai = new WeakMap,
bg), dk = w.createContext(void 0), fk = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
S.jsx(dk.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function $a() {
    return $a = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    $a.apply(this, arguments)
}
var Bn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Bn || (Bn = {}));
const Wp = "popstate";
function hk(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: o, search: s, hash: a} = r.location;
        return _c("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : dx(i)
    }
    return mk(t, n, null, e)
}
function tt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function cx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function pk() {
    return Math.random().toString(36).substr(2, 8)
}
function Hp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function _c(e, t, n, r) {
    return n === void 0 && (n = null),
    $a({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Tl(t) : t, {
        state: n,
        key: t && t.key || r || pk()
    })
}
function dx(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Tl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function mk(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , s = i.history
      , a = Bn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    s.replaceState($a({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Bn.Pop;
        let x = c()
          , p = x == null ? null : x - u;
        u = x,
        l && l({
            action: a,
            location: g.location,
            delta: p
        })
    }
    function f(x, p) {
        a = Bn.Push;
        let m = _c(g.location, x, p);
        u = c() + 1;
        let y = Hp(m, u)
          , C = g.createHref(m);
        try {
            s.pushState(y, "", C)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            i.location.assign(C)
        }
        o && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }
    function h(x, p) {
        a = Bn.Replace;
        let m = _c(g.location, x, p);
        u = c();
        let y = Hp(m, u)
          , C = g.createHref(m);
        s.replaceState(y, "", C),
        o && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }
    function v(x) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
          , m = typeof x == "string" ? x : dx(x);
        return m = m.replace(/ $/, "%20"),
        tt(p, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,p)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Wp, d),
            l = x,
            () => {
                i.removeEventListener(Wp, d),
                l = null
            }
        },
        createHref(x) {
            return t(i, x)
        },
        createURL: v,
        encodeLocation(x) {
            let p = v(x);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: f,
        replace: h,
        go(x) {
            return s.go(x)
        }
    };
    return g
}
var Kp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Kp || (Kp = {}));
function gk(e, t, n) {
    return n === void 0 && (n = "/"),
    yk(e, t, n, !1)
}
function yk(e, t, n, r) {
    let i = typeof t == "string" ? Tl(t) : t
      , o = px(i.pathname || "/", n);
    if (o == null)
        return null;
    let s = fx(e);
    vk(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = Ak(o);
        a = kk(s[l], u, r)
    }
    return a
}
function fx(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (tt(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = wi([r, l.relativePath])
          , c = n.concat(l);
        o.children && o.children.length > 0 && (tt(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        fx(o.children, t, c, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: bk(u, o.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            i(o, s);
        else
            for (let l of hx(o.path))
                i(o, s, l)
    }
    ),
    t
}
function hx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = hx(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))),
    i && a.push(...s),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function vk(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Pk(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const xk = /^:[\w-]+$/
  , wk = 3
  , Sk = 2
  , Ck = 1
  , Ek = 10
  , Tk = -2
  , Gp = e => e === "*";
function bk(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Gp) && (r += Tk),
    t && (r += Sk),
    n.filter(i => !Gp(i)).reduce( (i, o) => i + (xk.test(o) ? wk : o === "" ? Ck : Ek), r)
}
function Pk(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function kk(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , o = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = o === "/" ? t : t.slice(o.length) || "/"
          , d = Yp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Yp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(i, d.params),
        s.push({
            params: i,
            pathname: wi([o, d.pathname]),
            pathnameBase: Mk(wi([o, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (o = wi([o, d.pathnameBase]))
    }
    return s
}
function Yp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Rk(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let g = a[d] || "";
                s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[d];
            return h && !v ? u[f] = void 0 : u[f] = (v || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function Rk(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Ak(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return cx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function px(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const wi = e => e.join("/").replace(/\/\/+/g, "/")
  , Mk = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Nk(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const mx = ["post", "put", "patch", "delete"];
new Set(mx);
const Lk = ["get", ...mx];
new Set(Lk);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ua() {
    return Ua = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ua.apply(this, arguments)
}
const jk = w.createContext(null)
  , Dk = w.createContext(null)
  , gx = w.createContext(null)
  , bl = w.createContext(null)
  , Pl = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , yx = w.createContext(null);
function Tf() {
    return w.useContext(bl) != null
}
function vx() {
    return Tf() || tt(!1),
    w.useContext(bl).location
}
function Ok(e, t) {
    return Ik(e, t)
}
function Ik(e, t, n, r) {
    Tf() || tt(!1);
    let {navigator: i} = w.useContext(gx)
      , {matches: o} = w.useContext(Pl)
      , s = o[o.length - 1]
      , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = vx(), c;
    if (t) {
        var d;
        let x = typeof t == "string" ? Tl(t) : t;
        l === "/" || (d = x.pathname) != null && d.startsWith(l) || tt(!1),
        c = x
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let v = gk(e, {
        pathname: h
    })
      , g = Bk(v && v.map(x => Object.assign({}, x, {
        params: Object.assign({}, a, x.params),
        pathname: wi([l, i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? l : wi([l, i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), o, n, r);
    return t && g ? w.createElement(bl.Provider, {
        value: {
            location: Ua({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Bn.Pop
        }
    }, g) : g
}
function Vk() {
    let e = Hk()
      , t = Nk(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Fk = w.createElement(Vk, null);
class _k extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Pl.Provider, {
            value: this.props.routeContext
        }, w.createElement(yx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function zk(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = w.useContext(jk);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Pl.Provider, {
        value: t
    }, r)
}
function Bk(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || tt(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , v = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    l = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, d, f) => {
        let h, v = !1, g = null, x = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        g = d.route.errorElement || Fk,
        l && (u < 0 && f === 0 ? (v = !0,
        x = null) : u === f && (v = !0,
        x = d.route.hydrateFallbackElement || null)));
        let p = t.concat(s.slice(0, f + 1))
          , m = () => {
            let y;
            return h ? y = g : v ? y = x : d.route.Component ? y = w.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c,
            w.createElement(zk, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: p,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? w.createElement(_k, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: h,
            children: m(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var zc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(zc || {});
function $k(e) {
    let t = w.useContext(Dk);
    return t || tt(!1),
    t
}
function Uk(e) {
    let t = w.useContext(Pl);
    return t || tt(!1),
    t
}
function Wk(e) {
    let t = Uk()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || tt(!1),
    n.route.id
}
function Hk() {
    var e;
    let t = w.useContext(yx)
      , n = $k(zc.UseRouteError)
      , r = Wk(zc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Kk(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Bc(e) {
    tt(!1)
}
function Gk(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Bn.Pop, navigator: o, static: s=!1, future: a} = e;
    Tf() && tt(!1);
    let l = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Ua({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, o, s]);
    typeof r == "string" && (r = Tl(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: v="default"} = r
      , g = w.useMemo( () => {
        let x = px(c, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: f,
                state: h,
                key: v
            },
            navigationType: i
        }
    }
    , [l, c, d, f, h, v, i]);
    return g == null ? null : w.createElement(gx.Provider, {
        value: u
    }, w.createElement(bl.Provider, {
        children: n,
        value: g
    }))
}
function Yk(e) {
    let {children: t, location: n} = e;
    return Ok($c(t), n)
}
new Promise( () => {}
);
function $c(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, $c(r.props.children, o));
            return
        }
        r.type !== Bc && tt(!1),
        !r.props.index || !r.props.children || tt(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = $c(r.props.children, o)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Qk = "6";
try {
    window.__reactRouterVersion = Qk
} catch {}
const Xk = "startTransition"
  , Qp = Vg[Xk];
function qk(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , o = w.useRef();
    o.current == null && (o.current = hk({
        window: i,
        v5Compat: !0
    }));
    let s = o.current
      , [a,l] = w.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = w.useCallback(d => {
        u && Qp ? Qp( () => l(d)) : l(d)
    }
    , [l, u]);
    return w.useLayoutEffect( () => s.listen(c), [s, c]),
    w.useEffect( () => Kk(r), [r]),
    w.createElement(Gk, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
var Xp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Xp || (Xp = {}));
var qp;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(qp || (qp = {}));
const bf = w.createContext({});
function Pf(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const xx = typeof window < "u"
  , wx = xx ? w.useLayoutEffect : w.useEffect
  , kl = w.createContext(null);
function kf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Wa(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const Jt = (e, t, n) => n > t ? t : n < e ? e : n;
let Rl = () => {}
  , _i = () => {}
;
const gn = {}
  , Sx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Cx(e) {
    return typeof e == "object" && e !== null
}
const Ex = e => /^0[^.\s]+$/u.test(e);
function Tx(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const vt = e => e
  , Zk = (e, t) => n => t(e(n))
  , ds = (...e) => e.reduce(Zk)
  , Xo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class Rf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return kf(this.subscriptions, t),
        () => Wa(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const xt = e => e * 1e3
  , gt = e => e / 1e3;
function bx(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Px = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Jk = 1e-7
  , e2 = 12;
function t2(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = Px(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > Jk && ++a < e2);
    return s
}
function fs(e, t, n, r) {
    if (e === t && n === r)
        return vt;
    const i = o => t2(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Px(i(o), t, r)
}
const kx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Rx = e => t => 1 - e(1 - t)
  , Ax = fs(.33, 1.53, .69, .99)
  , Af = Rx(Ax)
  , Mx = kx(Af)
  , Nx = e => (e *= 2) < 1 ? .5 * Af(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Mf = e => 1 - Math.sin(Math.acos(e))
  , Lx = Rx(Mf)
  , jx = kx(Mf)
  , n2 = fs(.42, 0, 1, 1)
  , r2 = fs(0, 0, .58, 1)
  , Dx = fs(.42, 0, .58, 1)
  , i2 = e => Array.isArray(e) && typeof e[0] != "number"
  , Ox = e => Array.isArray(e) && typeof e[0] == "number"
  , Zp = {
    linear: vt,
    easeIn: n2,
    easeInOut: Dx,
    easeOut: r2,
    circIn: Mf,
    circInOut: jx,
    circOut: Lx,
    backIn: Af,
    backInOut: Mx,
    backOut: Ax,
    anticipate: Nx
}
  , o2 = e => typeof e == "string"
  , Jp = e => {
    if (Ox(e)) {
        _i(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,i] = e;
        return fs(t, n, r, i)
    } else if (o2(e))
        return _i(Zp[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        Zp[e];
    return e
}
  , Bs = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , em = {
    value: null,
    addProjectionMetrics: null
};
function s2(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , o = !1;
    const s = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        s.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const g = h && i ? n : r;
            return f && s.add(d),
            g.has(d) || g.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            s.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            i) {
                o = !0;
                return
            }
            i = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && em.value && em.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            i = !1,
            o && (o = !1,
            c.process(d))
        }
    };
    return c
}
const a2 = 40;
function Ix(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , s = Bs.reduce( (y, C) => (y[C] = s2(o, t ? C : void 0),
    y), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: v} = s
      , g = () => {
        const y = gn.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        gn.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, a2), 1)),
        i.timestamp = y,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(g))
    }
      , x = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: Bs.reduce( (y, C) => {
            const E = s[C];
            return y[C] = (T, b=!1, P=!1) => (n || x(),
            E.schedule(T, b, P)),
            y
        }
        , {}),
        cancel: y => {
            for (let C = 0; C < Bs.length; C++)
                s[Bs[C]].cancel(y)
        }
        ,
        state: i,
        steps: s
    }
}
const {schedule: ie, cancel: or, state: Re, steps: gu} = Ix(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0);
let aa;
function l2() {
    aa = void 0
}
const We = {
    now: () => (aa === void 0 && We.set(Re.isProcessing || gn.useManualTiming ? Re.timestamp : performance.now()),
    aa),
    set: e => {
        aa = e,
        queueMicrotask(l2)
    }
}
  , Vx = e => t => typeof t == "string" && t.startsWith(e)
  , Fx = Vx("--")
  , u2 = Vx("var(--")
  , Nf = e => u2(e) ? c2.test(e.split("/*")[0].trim()) : !1
  , c2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function tm(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Gi = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , qo = {
    ...Gi,
    transform: e => Jt(0, 1, e)
}
  , $s = {
    ...Gi,
    default: 1
}
  , bo = e => Math.round(e * 1e5) / 1e5
  , Lf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function d2(e) {
    return e == null
}
const f2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , jf = (e, t) => n => !!(typeof n == "string" && f2.test(n) && n.startsWith(e) || t && !d2(n) && Object.prototype.hasOwnProperty.call(n, t))
  , _x = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,o,s,a] = r.match(Lf);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , h2 = e => Jt(0, 255, e)
  , yu = {
    ...Gi,
    transform: e => Math.round(h2(e))
}
  , Sr = {
    test: jf("rgb", "red"),
    parse: _x("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + yu.transform(e) + ", " + yu.transform(t) + ", " + yu.transform(n) + ", " + bo(qo.transform(r)) + ")"
};
function p2(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Uc = {
    test: jf("#"),
    parse: p2,
    transform: Sr.transform
}
  , hs = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Rn = hs("deg")
  , qt = hs("%")
  , F = hs("px")
  , m2 = hs("vh")
  , g2 = hs("vw")
  , nm = {
    ...qt,
    parse: e => qt.parse(e) / 100,
    transform: e => qt.transform(e * 100)
}
  , ai = {
    test: jf("hsl", "hue"),
    parse: _x("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + qt.transform(bo(t)) + ", " + qt.transform(bo(n)) + ", " + bo(qo.transform(r)) + ")"
}
  , xe = {
    test: e => Sr.test(e) || Uc.test(e) || ai.test(e),
    parse: e => Sr.test(e) ? Sr.parse(e) : ai.test(e) ? ai.parse(e) : Uc.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Sr.transform(e) : ai.transform(e),
    getAnimatableNone: e => {
        const t = xe.parse(e);
        return t.alpha = 0,
        xe.transform(t)
    }
}
  , y2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function v2(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Lf)) == null ? void 0 : t.length) || 0) + (((n = e.match(y2)) == null ? void 0 : n.length) || 0) > 0
}
const zx = "number"
  , Bx = "color"
  , x2 = "var"
  , w2 = "var("
  , rm = "${}"
  , S2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zo(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const a = t.replace(S2, l => (xe.test(l) ? (r.color.push(o),
    i.push(Bx),
    n.push(xe.parse(l))) : l.startsWith(w2) ? (r.var.push(o),
    i.push(x2),
    n.push(l)) : (r.number.push(o),
    i.push(zx),
    n.push(parseFloat(l))),
    ++o,
    rm)).split(rm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function $x(e) {
    return Zo(e).values
}
function Ux(e) {
    const {split: t, types: n} = Zo(e)
      , r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
            i[s] !== void 0) {
                const a = n[s];
                a === zx ? o += bo(i[s]) : a === Bx ? o += xe.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const C2 = e => typeof e == "number" ? 0 : xe.test(e) ? xe.getAnimatableNone(e) : e;
function E2(e) {
    const t = $x(e);
    return Ux(e)(t.map(C2))
}
const Vt = {
    test: v2,
    parse: $x,
    createTransformer: Ux,
    getAnimatableNone: E2
};
function vu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function T2({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = vu(l, a, e + 1 / 3),
        o = vu(l, a, e),
        s = vu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
function Ha(e, t) {
    return n => n > 0 ? t : e
}
const fe = (e, t, n) => e + (t - e) * n
  , xu = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , b2 = [Uc, Sr, ai]
  , P2 = e => b2.find(t => t.test(e));
function im(e) {
    const t = P2(e);
    if (Rl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === ai && (n = T2(n)),
    n
}
const om = (e, t) => {
    const n = im(e)
      , r = im(t);
    if (!n || !r)
        return Ha(e, t);
    const i = {
        ...n
    };
    return o => (i.red = xu(n.red, r.red, o),
    i.green = xu(n.green, r.green, o),
    i.blue = xu(n.blue, r.blue, o),
    i.alpha = fe(n.alpha, r.alpha, o),
    Sr.transform(i))
}
  , Wc = new Set(["none", "hidden"]);
function k2(e, t) {
    return Wc.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function R2(e, t) {
    return n => fe(e, t, n)
}
function Df(e) {
    return typeof e == "number" ? R2 : typeof e == "string" ? Nf(e) ? Ha : xe.test(e) ? om : N2 : Array.isArray(e) ? Wx : typeof e == "object" ? xe.test(e) ? om : A2 : Ha
}
function Wx(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (o, s) => Df(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function A2(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Df(e[i])(e[i], t[i]));
    return i => {
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function M2(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const o = t.types[i]
          , s = e.indexes[o][r[o]]
          , a = e.values[s] ?? 0;
        n[i] = a,
        r[o]++
    }
    return n
}
const N2 = (e, t) => {
    const n = Vt.createTransformer(t)
      , r = Zo(e)
      , i = Zo(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Wc.has(e) && !i.values.length || Wc.has(t) && !r.values.length ? k2(e, t) : ds(Wx(M2(r, i), i.values), n) : (Rl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    Ha(e, t))
}
;
function Hx(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : Df(e)(e, t)
}
const L2 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => ie.update(t, n),
        stop: () => or(t),
        now: () => Re.isProcessing ? Re.timestamp : We.now()
    }
}
  , Kx = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
        r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Ka = 2e4;
function Of(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Ka; )
        t += n,
        r = e.next(t);
    return t >= Ka ? 1 / 0 : t
}
function j2(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , i = Math.min(Of(r), Ka);
    return {
        type: "keyframes",
        ease: o => r.next(i * o).value / t,
        duration: gt(i)
    }
}
const D2 = 5;
function Gx(e, t, n) {
    const r = Math.max(t - D2, 0);
    return bx(n - e(r), t - r)
}
const ce = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , wu = .001;
function O2({duration: e=ce.duration, bounce: t=ce.bounce, velocity: n=ce.velocity, mass: r=ce.mass}) {
    let i, o;
    Rl(e <= xt(ce.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let s = 1 - t;
    s = Jt(ce.minDamping, ce.maxDamping, s),
    e = Jt(ce.minDuration, ce.maxDuration, gt(e)),
    s < 1 ? (i = u => {
        const c = u * s
          , d = c * e
          , f = c - n
          , h = Hc(u, s)
          , v = Math.exp(-d);
        return wu - f / h * v
    }
    ,
    o = u => {
        const d = u * s * e
          , f = d * n + n
          , h = Math.pow(s, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-d)
          , g = Hc(Math.pow(u, 2), s);
        return (-i(u) + wu > 0 ? -1 : 1) * ((f - h) * v) / g
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -wu + c * d
    }
    ,
    o = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = V2(i, o, a);
    if (e = xt(e),
    isNaN(l))
        return {
            stiffness: ce.stiffness,
            damping: ce.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const I2 = 12;
function V2(e, t, n) {
    let r = n;
    for (let i = 1; i < I2; i++)
        r = r - e(r) / t(r);
    return r
}
function Hc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const F2 = ["duration", "bounce"]
  , _2 = ["stiffness", "damping", "mass"];
function sm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function z2(e) {
    let t = {
        velocity: ce.velocity,
        stiffness: ce.stiffness,
        damping: ce.damping,
        mass: ce.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!sm(e, _2) && sm(e, F2))
        if (t.velocity = 0,
        e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , o = 2 * Jt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: ce.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = O2({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: ce.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function Ga(e=ce.visualDuration, t=ce.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const o = n.keyframes[0]
      , s = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: o
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = z2({
        ...n,
        velocity: -gt(n.velocity || 0)
    })
      , v = f || 0
      , g = u / (2 * Math.sqrt(l * c))
      , x = s - o
      , p = gt(Math.sqrt(l / c))
      , m = Math.abs(x) < 5;
    r || (r = m ? ce.restSpeed.granular : ce.restSpeed.default),
    i || (i = m ? ce.restDelta.granular : ce.restDelta.default);
    let y;
    if (g < 1) {
        const E = Hc(p, g);
        y = T => {
            const b = Math.exp(-g * p * T);
            return s - b * ((v + g * p * x) / E * Math.sin(E * T) + x * Math.cos(E * T))
        }
    } else if (g === 1)
        y = E => s - Math.exp(-p * E) * (x + (v + p * x) * E);
    else {
        const E = p * Math.sqrt(g * g - 1);
        y = T => {
            const b = Math.exp(-g * p * T)
              , P = Math.min(E * T, 300);
            return s - b * ((v + g * p * x) * Math.sinh(P) + E * x * Math.cosh(P)) / E
        }
    }
    const C = {
        calculatedDuration: h && d || null,
        next: E => {
            const T = y(E);
            if (h)
                a.done = E >= d;
            else {
                let b = E === 0 ? v : 0;
                g < 1 && (b = E === 0 ? xt(v) : Gx(y, E, T));
                const P = Math.abs(b) <= r
                  , M = Math.abs(s - T) <= i;
                a.done = P && M
            }
            return a.value = a.done ? s : T,
            a
        }
        ,
        toString: () => {
            const E = Math.min(Of(C), Ka)
              , T = Kx(b => C.next(E * b).value, E, 30);
            return E + "ms " + T
        }
        ,
        toTransition: () => {}
    };
    return C
}
Ga.applyToOptions = e => {
    const t = j2(e, 100, Ga);
    return e.ease = t.ease,
    e.duration = xt(t.duration),
    e.type = "keyframes",
    e
}
;
function Kc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = P => a !== void 0 && P < a || l !== void 0 && P > l
      , v = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let g = n * t;
    const x = d + g
      , p = s === void 0 ? x : s(x);
    p !== x && (g = p - d);
    const m = P => -g * Math.exp(-P / r)
      , y = P => p + m(P)
      , C = P => {
        const M = m(P)
          , N = y(P);
        f.done = Math.abs(M) <= u,
        f.value = f.done ? p : N
    }
    ;
    let E, T;
    const b = P => {
        h(f.value) && (E = P,
        T = Ga({
            keyframes: [f.value, v(f.value)],
            velocity: Gx(y, P, f.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return b(0),
    {
        calculatedDuration: null,
        next: P => {
            let M = !1;
            return !T && E === void 0 && (M = !0,
            C(P),
            b(P)),
            E !== void 0 && P >= E ? T.next(P - E) : (!M && C(P),
            f)
        }
    }
}
function B2(e, t, n) {
    const r = []
      , i = n || gn.mix || Hx
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || vt : t;
            a = ds(l, a)
        }
        r.push(a)
    }
    return r
}
function $2(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (_i(o === t.length, "Both input and output ranges must be the same length", "range-length"),
    o === 1)
        return () => t[0];
    if (o === 2 && t[0] === t[1])
        return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = B2(t, r, i)
      , l = a.length
      , u = c => {
        if (s && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = Xo(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(Jt(e[0], e[o - 1], c)) : u
}
function U2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Xo(0, t, r);
        e.push(fe(n, 1, i))
    }
}
function W2(e) {
    const t = [0];
    return U2(t, e.length - 1),
    t
}
function H2(e, t) {
    return e.map(n => n * t)
}
function K2(e, t) {
    return e.map( () => t || Dx).splice(0, e.length - 1)
}
function Po({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = i2(r) ? r.map(Jp) : Jp(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = H2(n && n.length === t.length ? n : W2(t), e)
      , a = $2(s, t, {
        ease: Array.isArray(i) ? i : K2(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l),
        o.done = l >= e,
        o)
    }
}
const G2 = e => e !== null;
function If(e, {repeat: t, repeatType: n="loop"}, r, i=1) {
    const o = e.filter(G2)
      , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !a || r === void 0 ? o[a] : r
}
const Y2 = {
    decay: Kc,
    inertia: Kc,
    tween: Po,
    keyframes: Po,
    spring: Ga
};
function Yx(e) {
    typeof e.type == "string" && (e.type = Y2[e.type])
}
class Vf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const Q2 = e => e / 100;
class Ff extends Vf {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== We.now() && this.tick(We.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        Yx(t);
        const {type: n=Po, repeat: r=0, repeatDelay: i=0, repeatType: o, velocity: s=0} = t;
        let {keyframes: a} = t;
        const l = n || Po;
        l !== Po && typeof a[0] != "number" && (this.mixKeyframes = ds(Q2, Hx(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        o === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -s
        })),
        u.calculatedDuration === null && (u.calculatedDuration = Of(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + i,
        this.totalDuration = this.resolvedDuration * (r + 1) - i,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: i, mixKeyframes: o, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: v, onUpdate: g, finalKeyframe: x} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , m = this.playbackSpeed >= 0 ? p < 0 : p > i;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let y = this.currentTime
          , C = r;
        if (d) {
            const P = Math.min(this.currentTime, i) / a;
            let M = Math.floor(P)
              , N = P % 1;
            !N && P >= 1 && (N = 1),
            N === 1 && M--,
            M = Math.min(M, d + 1),
            !!(M % 2) && (f === "reverse" ? (N = 1 - N,
            h && (N -= h / a)) : f === "mirror" && (C = s)),
            y = Jt(0, 1, N) * a
        }
        const E = m ? {
            done: !1,
            value: c[0]
        } : C.next(y);
        o && (E.value = o(E.value));
        let {done: T} = E;
        !m && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return b && v !== Kc && (E.value = If(c, this.options, x, this.speed)),
        g && g(E.value),
        b && this.finish(),
        E
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return gt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + gt(t)
    }
    get time() {
        return gt(this.currentTime)
    }
    set time(t) {
        var n;
        t = xt(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(We.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = gt(this.currentTime))
    }
    play() {
        var i, o;
        if (this.isStopped)
            return;
        const {driver: t=L2, startTime: n} = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
        (o = (i = this.options).onPlay) == null || o.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(We.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function X2(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Cr = e => e * 180 / Math.PI
  , Gc = e => {
    const t = Cr(Math.atan2(e[1], e[0]));
    return Yc(t)
}
  , q2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Gc,
    rotateZ: Gc,
    skewX: e => Cr(Math.atan(e[1])),
    skewY: e => Cr(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , Yc = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , am = Gc
  , lm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , um = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , Z2 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: lm,
    scaleY: um,
    scale: e => (lm(e) + um(e)) / 2,
    rotateX: e => Yc(Cr(Math.atan2(e[6], e[5]))),
    rotateY: e => Yc(Cr(Math.atan2(-e[2], e[0]))),
    rotateZ: am,
    rotate: am,
    skewX: e => Cr(Math.atan(e[4])),
    skewY: e => Cr(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Qc(e) {
    return e.includes("scale") ? 1 : 0
}
function Xc(e, t) {
    if (!e || e === "none")
        return Qc(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = Z2,
        i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = q2,
        i = a
    }
    if (!i)
        return Qc(t);
    const o = r[t]
      , s = i[1].split(",").map(eR);
    return typeof o == "function" ? o(s) : s[o]
}
const J2 = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return Xc(n, t)
}
;
function eR(e) {
    return parseFloat(e.trim())
}
const Yi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Qi = new Set(Yi)
  , cm = e => e === Gi || e === F
  , tR = new Set(["x", "y", "z"])
  , nR = Yi.filter(e => !tR.has(e));
function rR(e) {
    const t = [];
    return nR.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const $n = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => Xc(t, "x"),
    y: (e, {transform: t}) => Xc(t, "y")
};
$n.translateX = $n.x;
$n.translateY = $n.y;
const Nr = new Set;
let qc = !1
  , Zc = !1
  , Jc = !1;
function Qx() {
    if (Zc) {
        const e = Array.from(Nr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = rR(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([o,s]) => {
                var a;
                (a = r.getValue(o)) == null || a.set(s)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Zc = !1,
    qc = !1,
    Nr.forEach(e => e.complete(Jc)),
    Nr.clear()
}
function Xx() {
    Nr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Zc = !0)
    }
    )
}
function iR() {
    Jc = !0,
    Xx(),
    Qx(),
    Jc = !1
}
class _f {
    constructor(t, n, r, i, o, s=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = o,
        this.isAsync = s
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Nr.add(this),
        qc || (qc = !0,
        ie.read(Xx),
        ie.resolveKeyframes(Qx))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        if (t[0] === null) {
            const o = i == null ? void 0 : i.get()
              , s = t[t.length - 1];
            if (o !== void 0)
                t[0] = o;
            else if (r && n) {
                const a = r.readValue(n, s);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = s),
            i && o === void 0 && i.set(t[0])
        }
        X2(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Nr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Nr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const oR = e => e.startsWith("--");
function sR(e, t, n) {
    oR(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const aR = {};
function qx(e, t) {
    const n = Tx(e);
    return () => aR[t] ?? n()
}
const lR = qx( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , Zx = qx( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , po = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , dm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: po([0, .65, .55, 1]),
    circOut: po([.55, 0, 1, .45]),
    backIn: po([.31, .01, .66, -.59]),
    backOut: po([.33, 1.53, .69, .99])
};
function Jx(e, t) {
    if (e)
        return typeof e == "function" ? Zx() ? Kx(e, t) : "ease-out" : Ox(e) ? po(e) : Array.isArray(e) ? e.map(n => Jx(n, t) || dm.easeOut) : dm[e]
}
function uR(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = Jx(a, i);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function ew(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function cR({type: e, ...t}) {
    return ew(e) && Zx() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class tw extends Vf {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: i, pseudoElement: o, allowFlatten: s=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!o,
        this.allowFlatten = s,
        this.options = t,
        _i(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = cR(t);
        this.animation = uR(n, r, i, u, o),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !o) {
                const c = If(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : sR(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, i;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((i = (r = this.animation).commitStyles) == null || i.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return gt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + gt(t)
    }
    get time() {
        return gt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = xt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && lR() ? (this.animation.timeline = t,
        vt) : n(this)
    }
}
const nw = {
    anticipate: Nx,
    backInOut: Mx,
    circInOut: jx
};
function dR(e) {
    return e in nw
}
function fR(e) {
    typeof e.ease == "string" && dR(e.ease) && (e.ease = nw[e.ease])
}
const Su = 10;
class hR extends tw {
    constructor(t) {
        fR(t),
        Yx(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: i, element: o, ...s} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new Ff({
            ...s,
            autoplay: !1
        })
          , l = Math.max(Su, We.now() - this.startTime)
          , u = Jt(0, Su, l - Su);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const fm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Vt.test(e) || e === "0") && !e.startsWith("url("));
function pR(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function mR(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
      , s = fm(i, t)
      , a = fm(o, t);
    return Rl(s === a, `You are trying to animate ${t} from "${i}" to "${o}". "${s ? o : i}" is not an animatable value.`, "value-not-animatable"),
    !s || !a ? !1 : pR(e) || (n === "spring" || ew(n)) && r
}
function ed(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const gR = new Set(["opacity", "clipPath", "filter", "transform"])
  , yR = Tx( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function vR(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return yR() && n && gR.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && o !== 0 && s !== "inertia"
}
const xR = 40;
class wR extends Vf {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: s="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var v;
        super(),
        this.stop = () => {
            var g, x;
            this._animation && (this._animation.stop(),
            (g = this.stopTimeline) == null || g.call(this)),
            (x = this.keyframeResolver) == null || x.cancel()
        }
        ,
        this.createdAt = We.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || _f;
        this.keyframeResolver = new h(a, (g, x, p) => this.onKeyframesResolved(g, x, f, !p),l,u,c),
        (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        var x, p;
        this.keyframeResolver = void 0;
        const {name: o, type: s, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = We.now(),
        mR(t, o, s, a) || ((gn.instantAnimations || !l) && (c == null || c(If(t, r, n))),
        t[0] = t[t.length - 1],
        ed(r),
        r.repeat = 0);
        const f = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > xR ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && vR(f)
          , v = (p = (x = f.motionValue) == null ? void 0 : x.owner) == null ? void 0 : p.current
          , g = h ? new hR({
            ...f,
            element: v
        }) : new Ff(f);
        g.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(vt),
        this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = g
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        iR()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function rw(e, t, n, r=0, i=1) {
    const o = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , s = e.size
      , a = (s - 1) * r;
    return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r
}
const SR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function CR(e) {
    const t = SR.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
const ER = 4;
function iw(e, t, n=1) {
    _i(n <= ER, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,i] = CR(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Sx(s) ? parseFloat(s) : s
    }
    return Nf(i) ? iw(i, t, n + 1) : i
}
const TR = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , bR = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , PR = {
    type: "keyframes",
    duration: .8
}
  , kR = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , RR = (e, {keyframes: t}) => t.length > 2 ? PR : Qi.has(e) ? e.startsWith("scale") ? bR(t[1]) : TR : kR
  , AR = e => e !== null;
function MR(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(AR)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
function ow(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function zf(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? ow(n, e) : n
}
function NR({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const Bf = (e, t, n, r={}, i, o) => s => {
    const a = zf(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - xt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            s(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    NR(a) || Object.assign(c, RR(e, c)),
    c.duration && (c.duration = xt(c.duration)),
    c.repeatDelay && (c.repeatDelay = xt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (ed(c),
    c.delay === 0 && (d = !0)),
    (gn.instantAnimations || gn.skipAnimations || i != null && i.shouldSkipAnimations) && (d = !0,
    ed(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !o && t.get() !== void 0) {
        const f = MR(c.keyframes, a);
        if (f !== void 0) {
            ie.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new Ff(c) : new wR(c)
}
;
function hm(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function $f(e, t, n, r) {
    if (typeof t == "function") {
        const [i,o] = hm(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,o] = hm(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
function Si(e, t, n) {
    const r = e.getProps();
    return $f(r, t, n !== void 0 ? n : r.custom, e)
}
const sw = new Set(["width", "height", "top", "left", "right", "bottom", ...Yi])
  , pm = 30
  , LR = e => !isNaN(parseFloat(e));
class jR {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var o;
            const i = We.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
                for (const s of this.dependents)
                    s.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = We.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = LR(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Rf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            ie.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = We.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > pm)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, pm);
        return bx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function zi(e, t) {
    return new jR(e,t)
}
const td = e => Array.isArray(e);
function DR(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zi(n))
}
function OR(e) {
    return td(e) ? e[e.length - 1] || 0 : e
}
function IR(e, t) {
    const n = Si(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const a = OR(o[s]);
        DR(e, s, a)
    }
}
const Fe = e => !!(e && e.getVelocity);
function VR(e) {
    return !!(Fe(e) && e.add)
}
function nd(e, t) {
    const n = e.getValue("willChange");
    if (VR(n))
        return n.add(t);
    if (!n && gn.WillChange) {
        const r = new gn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function Uf(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const FR = "framerAppearId"
  , aw = "data-" + Uf(FR);
function lw(e) {
    return e.props[aw]
}
function _R({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function uw(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: o, transitionEnd: s, ...a} = t;
    const l = e.getDefaultTransition();
    o = o ? ow(o, l) : l;
    const u = o == null ? void 0 : o.reduceMotion;
    r && (o = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , v = a[f];
        if (v === void 0 || d && _R(d, f))
            continue;
        const g = {
            delay: n,
            ...zf(o || {}, f)
        }
          , x = h.get();
        if (x !== void 0 && !h.isAnimating && !Array.isArray(v) && v === x && !g.velocity)
            continue;
        let p = !1;
        if (window.MotionHandoffAnimation) {
            const C = lw(e);
            if (C) {
                const E = window.MotionHandoffAnimation(C, f, ie);
                E !== null && (g.startTime = E,
                p = !0)
            }
        }
        nd(e, f);
        const m = u ?? e.shouldReduceMotion;
        h.start(Bf(f, h, v, m && sw.has(f) ? {
            type: !1
        } : g, e, p));
        const y = h.animation;
        y && c.push(y)
    }
    if (s) {
        const f = () => ie.update( () => {
            s && IR(e, s)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function rd(e, t, n={}) {
    var l;
    const r = Si(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(uw(e, r, n)) : () => Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = i;
        return zR(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [o, s] : [s, o];
        return u().then( () => c())
    } else
        return Promise.all([o(), s(n.delay)])
}
function zR(e, t, n=0, r=0, i=0, o=1, s) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(rd(l, t, {
            ...s,
            delay: n + (typeof r == "function" ? 0 : r) + rw(e.variantChildren, l, r, i, o)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function BR(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => rd(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = rd(e, t, n);
    else {
        const i = typeof t == "function" ? Si(e, t, n.custom) : t;
        r = Promise.all(uw(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const $R = {
    test: e => e === "auto",
    parse: e => e
}
  , cw = e => t => t.test(e)
  , dw = [Gi, F, qt, Rn, g2, m2, $R]
  , mm = e => dw.find(cw(e));
function UR(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Ex(e) : !0
}
const WR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function HR(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Lf) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = WR.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const KR = /\b([a-z-]*)\(.*?\)/gu
  , id = {
    ...Vt,
    getAnimatableNone: e => {
        const t = e.match(KR);
        return t ? t.map(HR).join(" ") : e
    }
}
  , od = {
    ...Vt,
    getAnimatableNone: e => {
        const t = Vt.parse(e);
        return Vt.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , gm = {
    ...Gi,
    transform: Math.round
}
  , GR = {
    rotate: Rn,
    rotateX: Rn,
    rotateY: Rn,
    rotateZ: Rn,
    scale: $s,
    scaleX: $s,
    scaleY: $s,
    scaleZ: $s,
    skew: Rn,
    skewX: Rn,
    skewY: Rn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: qo,
    originX: nm,
    originY: nm,
    originZ: F
}
  , Wf = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    inset: F,
    insetBlock: F,
    insetBlockStart: F,
    insetBlockEnd: F,
    insetInline: F,
    insetInlineStart: F,
    insetInlineEnd: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    paddingBlock: F,
    paddingBlockStart: F,
    paddingBlockEnd: F,
    paddingInline: F,
    paddingInlineStart: F,
    paddingInlineEnd: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    marginBlock: F,
    marginBlockStart: F,
    marginBlockEnd: F,
    marginInline: F,
    marginInlineStart: F,
    marginInlineEnd: F,
    fontSize: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
    ...GR,
    zIndex: gm,
    fillOpacity: qo,
    strokeOpacity: qo,
    numOctaves: gm
}
  , YR = {
    ...Wf,
    color: xe,
    backgroundColor: xe,
    outlineColor: xe,
    fill: xe,
    stroke: xe,
    borderColor: xe,
    borderTopColor: xe,
    borderRightColor: xe,
    borderBottomColor: xe,
    borderLeftColor: xe,
    filter: id,
    WebkitFilter: id,
    mask: od,
    WebkitMask: od
}
  , fw = e => YR[e]
  , QR = new Set([id, od]);
function hw(e, t) {
    let n = fw(e);
    return QR.has(n) || (n = Vt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const XR = new Set(["auto", "none", "0"]);
function qR(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const o = e[r];
        typeof o == "string" && !XR.has(o) && Zo(o).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const o of t)
            e[o] = hw(n, i)
}
class ZR extends _f {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            Nf(d))) {
                const f = iw(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !sw.has(r) || t.length !== 2)
            return;
        const [i,o] = t
          , s = mm(i)
          , a = mm(o)
          , l = tm(i)
          , u = tm(o);
        if (l !== u && $n[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (s !== a)
            if (cm(s) && cm(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                $n[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || UR(t[i])) && r.push(i);
        r.length && qR(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = $n[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const o = r.length - 1
          , s = r[o];
        r[o] = $n[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const JR = new Set(["opacity", "clipPath", "filter", "transform"]);
function pw(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(r => r != null)
}
const mw = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function sd(e) {
    return Cx(e) && "offsetHeight"in e
}
const {schedule: Hf, cancel: pL} = Ix(queueMicrotask, !1)
  , Rt = {
    x: !1,
    y: !1
};
function gw() {
    return Rt.x || Rt.y
}
function eA(e) {
    return e === "x" || e === "y" ? Rt[e] ? null : (Rt[e] = !0,
    () => {
        Rt[e] = !1
    }
    ) : Rt.x || Rt.y ? null : (Rt.x = Rt.y = !0,
    () => {
        Rt.x = Rt.y = !1
    }
    )
}
function yw(e, t) {
    const n = pw(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function tA(e) {
    return !(e.pointerType === "touch" || gw())
}
function nA(e, t, n={}) {
    const [r,i,o] = yw(e, n);
    return r.forEach(s => {
        let a = !1, l = !1, u;
        const c = () => {
            s.removeEventListener("pointerleave", v)
        }
          , d = x => {
            u && (u(x),
            u = void 0),
            c()
        }
          , f = x => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(x))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i)
        }
          , v = x => {
            if (x.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(x)
            }
        }
          , g = x => {
            if (!tA(x))
                return;
            l = !1;
            const p = t(s, x);
            typeof p == "function" && (u = p,
            s.addEventListener("pointerleave", v, i))
        }
        ;
        s.addEventListener("pointerenter", g, i),
        s.addEventListener("pointerdown", h, i)
    }
    ),
    o
}
const vw = (e, t) => t ? e === t ? !0 : vw(e, t.parentElement) : !1
  , Kf = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , rA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function iA(e) {
    return rA.has(e.tagName) || e.isContentEditable === !0
}
const oA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function sA(e) {
    return oA.has(e.tagName) || e.isContentEditable === !0
}
const la = new WeakSet;
function ym(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Cu(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const aA = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = ym( () => {
        if (la.has(n))
            return;
        Cu(n, "down");
        const i = ym( () => {
            Cu(n, "up")
        }
        )
          , o = () => Cu(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", o, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function vm(e) {
    return Kf(e) && !gw()
}
const xm = new WeakSet;
function lA(e, t, n={}) {
    const [r,i,o] = yw(e, n)
      , s = a => {
        const l = a.currentTarget;
        if (!vm(a) || xm.has(a))
            return;
        la.add(l),
        n.stopPropagation && xm.add(a);
        const u = t(l, a)
          , c = (h, v) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            la.has(l) && la.delete(l),
            vm(h) && typeof u == "function" && u(h, {
                success: v
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || vw(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        sd(a) && (a.addEventListener("focus", u => aA(u, i)),
        !iA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    o
}
function Gf(e) {
    return Cx(e) && "ownerSVGElement"in e
}
const ua = new WeakMap;
let An;
const xw = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Gf(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , uA = xw("inline", "width", "offsetWidth")
  , cA = xw("block", "height", "offsetHeight");
function dA({target: e, borderBoxSize: t}) {
    var n;
    (n = ua.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return uA(e, t)
            },
            get height() {
                return cA(e, t)
            }
        })
    }
    )
}
function fA(e) {
    e.forEach(dA)
}
function hA() {
    typeof ResizeObserver > "u" || (An = new ResizeObserver(fA))
}
function pA(e, t) {
    An || hA();
    const n = pw(e);
    return n.forEach(r => {
        let i = ua.get(r);
        i || (i = new Set,
        ua.set(r, i)),
        i.add(t),
        An == null || An.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const i = ua.get(r);
            i == null || i.delete(t),
            i != null && i.size || An == null || An.unobserve(r)
        }
        )
    }
}
const ca = new Set;
let li;
function mA() {
    li = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        ca.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", li)
}
function gA(e) {
    return ca.add(e),
    li || mA(),
    () => {
        ca.delete(e),
        !ca.size && typeof li == "function" && (window.removeEventListener("resize", li),
        li = void 0)
    }
}
function wm(e, t) {
    return typeof e == "function" ? gA(e) : pA(e, t)
}
function yA(e) {
    return Gf(e) && e.tagName === "svg"
}
const vA = [...dw, xe, Vt]
  , xA = e => vA.find(cw(e))
  , Sm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ui = () => ({
    x: Sm(),
    y: Sm()
})
  , Cm = () => ({
    min: 0,
    max: 0
})
  , Se = () => ({
    x: Cm(),
    y: Cm()
})
  , wA = new WeakMap;
function Al(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Jo(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Yf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Qf = ["initial", ...Yf];
function Ml(e) {
    return Al(e.animate) || Qf.some(t => Jo(e[t]))
}
function ww(e) {
    return !!(Ml(e) || e.variants)
}
function SA(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , o = n[r];
        if (Fe(i))
            e.addValue(r, i);
        else if (Fe(o))
            e.addValue(r, zi(i, {
                owner: e
            }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, zi(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const ad = {
    current: null
}
  , Sw = {
    current: !1
}
  , CA = typeof window < "u";
function EA() {
    if (Sw.current = !0,
    !!CA)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => ad.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            ad.current = !1
}
const Em = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Ya = {};
function Cw(e) {
    Ya = e
}
function TA() {
    return Ya
}
class bA {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, skipAnimations: o, blockInitialAnimation: s, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = _f,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = We.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            ie.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.skipAnimationsConfig = o,
        this.options = l,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = Ml(n),
        this.isVariantNode = ww(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const v = f[h];
            u[h] !== void 0 && Fe(v) && v.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const i in this.initialValues)
                (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
                this.latestValues[i] = this.initialValues[i];
        this.current = t,
        wA.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, o) => this.bindToMotionValue(o, i)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Sw.current || EA(),
        this.shouldReduceMotion = ad.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        or(this.notifyUpdate),
        or(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && JR.has(t) && this.current instanceof HTMLElement) {
            const {factory: s, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new tw({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: xt(c)
            })
              , f = s(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = Qi.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", s => {
            this.latestValues[t] = s,
            this.props.onUpdate && ie.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let o;
        typeof window < "u" && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Ya) {
            const n = Ya[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Se()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Em.length; r++) {
            const i = Em[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = SA(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = zi(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (Sx(r) || Ex(r)) ? r = parseFloat(r) : !xA(r) && Vt.test(n) && (r = hw(t, n)),
        this.setBaseTarget(t, Fe(r) ? r.get() : r)),
        Fe(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var o;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const s = $f(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
            s && (r = s[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Fe(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Rf),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        Hf.render(this.render)
    }
}
class Ew extends bA {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = ZR
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Fe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class ur {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Tw({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function PA({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function kA(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Eu(e) {
    return e === void 0 || e === 1
}
function ld({scale: e, scaleX: t, scaleY: n}) {
    return !Eu(e) || !Eu(t) || !Eu(n)
}
function yr(e) {
    return ld(e) || bw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function bw(e) {
    return Tm(e.x) || Tm(e.y)
}
function Tm(e) {
    return e && e !== "0%"
}
function Qa(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function bm(e, t, n, r, i) {
    return i !== void 0 && (e = Qa(e, i, r)),
    Qa(e, n, r) + t
}
function ud(e, t=0, n=1, r, i) {
    e.min = bm(e.min, t, n, r, i),
    e.max = bm(e.max, t, n, r, i)
}
function Pw(e, {x: t, y: n}) {
    ud(e.x, t.translate, t.scale, t.originPoint),
    ud(e.y, n.translate, n.scale, n.originPoint)
}
const Pm = .999999999999
  , km = 1.0000000000001;
function RA(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a],
        s = o.projectionDelta;
        const {visualElement: l} = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && di(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        Pw(e, s)),
        r && yr(o.latestValues) && di(e, o.latestValues))
    }
    t.x < km && t.x > Pm && (t.x = 1),
    t.y < km && t.y > Pm && (t.y = 1)
}
function ci(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Rm(e, t, n, r, i=.5) {
    const o = fe(e.min, e.max, i);
    ud(e, t, n, o, r)
}
function di(e, t) {
    Rm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Rm(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function kw(e, t) {
    return Tw(kA(e.getBoundingClientRect(), t))
}
function AA(e, t, n) {
    const r = kw(e, n)
      , {scroll: i} = t;
    return i && (ci(r.x, i.offset.x),
    ci(r.y, i.offset.y)),
    r
}
const MA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , NA = Yi.length;
function LA(e, t, n) {
    let r = ""
      , i = !0;
    for (let o = 0; o < NA; o++) {
        const s = Yi[o]
          , a = e[s];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (s.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = s.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = mw(a, Wf[s]);
            if (!l) {
                i = !1;
                const c = MA[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function Xf(e, t, n) {
    const {style: r, vars: i, transformOrigin: o} = e;
    let s = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (Qi.has(l)) {
            s = !0;
            continue
        } else if (Fx(l)) {
            i[l] = u;
            continue
        } else {
            const c = mw(u, Wf[l]);
            l.startsWith("origin") ? (a = !0,
            o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = LA(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function Rw(e, {style: t, vars: n}, r, i) {
    const o = e.style;
    let s;
    for (s in t)
        o[s] = t[s];
    i == null || i.applyProjectionStyles(o, r);
    for (s in n)
        o.setProperty(s, n[s])
}
function Am(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const lo = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (F.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Am(e, t.target.x)
          , r = Am(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , jA = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Vt.parse(e);
        if (i.length > 5)
            return r;
        const o = Vt.createTransformer(e)
          , s = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + s] /= a,
        i[1 + s] /= l;
        const u = fe(a, l, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
}
  , cd = {
    borderRadius: {
        ...lo,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: lo,
    borderTopRightRadius: lo,
    borderBottomLeftRadius: lo,
    borderBottomRightRadius: lo,
    boxShadow: jA
};
function Aw(e, {layout: t, layoutId: n}) {
    return Qi.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!cd[e] || e === "opacity")
}
function qf(e, t, n) {
    var s;
    const r = e.style
      , i = t == null ? void 0 : t.style
      , o = {};
    if (!r)
        return o;
    for (const a in r)
        (Fe(r[a]) || i && Fe(i[a]) || Aw(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (o[a] = r[a]);
    return o
}
function DA(e) {
    return window.getComputedStyle(e)
}
class OA extends Ew {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Rw
    }
    readValueFromInstance(t, n) {
        var r;
        if (Qi.has(n))
            return (r = this.projection) != null && r.isProjecting ? Qc(n) : J2(t, n);
        {
            const i = DA(t)
              , o = (Fx(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return kw(t, n)
    }
    build(t, n, r) {
        Xf(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return qf(t, n, r)
    }
}
const IA = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , VA = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function FA(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? IA : VA;
    e[o.offset] = `${-r}`,
    e[o.array] = `${t} ${n}`
}
const _A = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Mw(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: o=1, pathOffset: s=0, ...a}, l, u, c) {
    if (Xf(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of _A)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && FA(d, i, o, s, !1)
}
const Nw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , Lw = e => typeof e == "string" && e.toLowerCase() === "svg";
function zA(e, t, n, r) {
    Rw(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Nw.has(i) ? i : Uf(i), t.attrs[i])
}
function jw(e, t, n) {
    const r = qf(e, t, n);
    for (const i in e)
        if (Fe(e[i]) || Fe(t[i])) {
            const o = Yi.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
class BA extends Ew {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Se
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Qi.has(n)) {
            const r = fw(n);
            return r && r.default || 0
        }
        return n = Nw.has(n) ? n : Uf(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return jw(t, n, r)
    }
    build(t, n, r) {
        Mw(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        zA(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Lw(t.tagName),
        super.mount(t)
    }
}
const $A = Qf.length;
function Dw(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Dw(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < $A; n++) {
        const r = Qf[n]
          , i = e.props[r];
        (Jo(i) || i === !1) && (t[r] = i)
    }
    return t
}
function Ow(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const UA = [...Yf].reverse()
  , WA = Yf.length;
function HA(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => BR(e, n, r)))
}
function KA(e) {
    let t = HA(e)
      , n = Mm()
      , r = !0;
    const i = l => (u, c) => {
        var f;
        const d = Si(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: h, transitionEnd: v, ...g} = d;
            u = {
                ...u,
                ...g,
                ...v
            }
        }
        return u
    }
    ;
    function o(l) {
        t = l(e)
    }
    function s(l) {
        const {props: u} = e
          , c = Dw(e.parent) || {}
          , d = []
          , f = new Set;
        let h = {}
          , v = 1 / 0;
        for (let x = 0; x < WA; x++) {
            const p = UA[x]
              , m = n[p]
              , y = u[p] !== void 0 ? u[p] : c[p]
              , C = Jo(y)
              , E = p === l ? m.isActive : null;
            E === !1 && (v = x);
            let T = y === c[p] && y !== u[p] && C;
            if (T && r && e.manuallyAnimateOnMount && (T = !1),
            m.protectedKeys = {
                ...h
            },
            !m.isActive && E === null || !y && !m.prevProp || Al(y) || typeof y == "boolean")
                continue;
            if (p === "exit" && m.isActive && E !== !0) {
                m.prevResolvedValues && (h = {
                    ...h,
                    ...m.prevResolvedValues
                });
                continue
            }
            const b = GA(m.prevProp, y);
            let P = b || p === l && m.isActive && !T && C || x > v && C
              , M = !1;
            const N = Array.isArray(y) ? y : [y];
            let z = N.reduce(i(p), {});
            E === !1 && (z = {});
            const {prevResolvedValues: I={}} = m
              , K = {
                ...I,
                ...z
            }
              , D = _ => {
                P = !0,
                f.has(_) && (M = !0,
                f.delete(_)),
                m.needsAnimating[_] = !0;
                const k = e.getValue(_);
                k && (k.liveStyle = !1)
            }
            ;
            for (const _ in K) {
                const k = z[_]
                  , A = I[_];
                if (h.hasOwnProperty(_))
                    continue;
                let O = !1;
                td(k) && td(A) ? O = !Ow(k, A) : O = k !== A,
                O ? k != null ? D(_) : f.add(_) : k !== void 0 && f.has(_) ? D(_) : m.protectedKeys[_] = !0
            }
            m.prevProp = y,
            m.prevResolvedValues = z,
            m.isActive && (h = {
                ...h,
                ...z
            }),
            r && e.blockInitialAnimation && (P = !1);
            const Y = T && b;
            P && (!Y || M) && d.push(...N.map(_ => {
                const k = {
                    type: p
                };
                if (typeof _ == "string" && r && !Y && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: A} = e
                      , O = Si(A, _);
                    if (A.enteringChildren && O) {
                        const {delayChildren: U} = O.transition || {};
                        k.delay = rw(A.enteringChildren, e, U)
                    }
                }
                return {
                    animation: _,
                    options: k
                }
            }
            ))
        }
        if (f.size) {
            const x = {};
            if (typeof u.initial != "boolean") {
                const p = Si(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                p && p.transition && (x.transition = p.transition)
            }
            f.forEach(p => {
                const m = e.getBaseTarget(p)
                  , y = e.getValue(p);
                y && (y.liveStyle = !0),
                x[p] = m ?? null
            }
            ),
            d.push({
                animation: x
            })
        }
        let g = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1),
        r = !1,
        g ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = s(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Mm()
        }
    }
}
function GA(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ow(t, e) : !1
}
function hr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Mm() {
    return {
        animate: hr(!0),
        whileInView: hr(),
        whileHover: hr(),
        whileTap: hr(),
        whileDrag: hr(),
        whileFocus: hr(),
        exit: hr()
    }
}
function Nm(e, t) {
    e.min = t.min,
    e.max = t.max
}
function kt(e, t) {
    Nm(e.x, t.x),
    Nm(e.y, t.y)
}
function Lm(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const Iw = 1e-4
  , YA = 1 - Iw
  , QA = 1 + Iw
  , Vw = .01
  , XA = 0 - Vw
  , qA = 0 + Vw;
function He(e) {
    return e.max - e.min
}
function ZA(e, t, n) {
    return Math.abs(e - t) <= n
}
function jm(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = fe(t.min, t.max, e.origin),
    e.scale = He(n) / He(t),
    e.translate = fe(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= YA && e.scale <= QA || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= XA && e.translate <= qA || isNaN(e.translate)) && (e.translate = 0)
}
function ko(e, t, n, r) {
    jm(e.x, t.x, n.x, r ? r.originX : void 0),
    jm(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Dm(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + He(t)
}
function JA(e, t, n) {
    Dm(e.x, t.x, n.x),
    Dm(e.y, t.y, n.y)
}
function Om(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + He(t)
}
function Xa(e, t, n) {
    Om(e.x, t.x, n.x),
    Om(e.y, t.y, n.y)
}
function Im(e, t, n, r, i) {
    return e -= t,
    e = Qa(e, 1 / n, r),
    i !== void 0 && (e = Qa(e, 1 / i, r)),
    e
}
function eM(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (qt.test(t) && (t = parseFloat(t),
    t = fe(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let a = fe(o.min, o.max, r);
    e === o && (a -= t),
    e.min = Im(e.min, t, n, a, i),
    e.max = Im(e.max, t, n, a, i)
}
function Vm(e, t, [n,r,i], o, s) {
    eM(e, t[n], t[r], t[i], t.scale, o, s)
}
const tM = ["x", "scaleX", "originX"]
  , nM = ["y", "scaleY", "originY"];
function Fm(e, t, n, r) {
    Vm(e.x, t, tM, n ? n.x : void 0, r ? r.x : void 0),
    Vm(e.y, t, nM, n ? n.y : void 0, r ? r.y : void 0)
}
function _m(e) {
    return e.translate === 0 && e.scale === 1
}
function Fw(e) {
    return _m(e.x) && _m(e.y)
}
function zm(e, t) {
    return e.min === t.min && e.max === t.max
}
function rM(e, t) {
    return zm(e.x, t.x) && zm(e.y, t.y)
}
function Bm(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function _w(e, t) {
    return Bm(e.x, t.x) && Bm(e.y, t.y)
}
function $m(e) {
    return He(e.x) / He(e.y)
}
function Um(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Wt(e) {
    return [e("x"), e("y")]
}
function iM(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const zw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , oM = zw.length
  , Wm = e => typeof e == "string" ? parseFloat(e) : e
  , Hm = e => typeof e == "number" || F.test(e);
function sM(e, t, n, r, i, o) {
    i ? (e.opacity = fe(0, n.opacity ?? 1, aM(r)),
    e.opacityExit = fe(t.opacity ?? 1, 0, lM(r))) : o && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let s = 0; s < oM; s++) {
        const a = `border${zw[s]}Radius`;
        let l = Km(t, a)
          , u = Km(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Hm(l) === Hm(u) ? (e[a] = Math.max(fe(Wm(l), Wm(u), r), 0),
        (qt.test(u) || qt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r))
}
function Km(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const aM = Bw(0, .5, Lx)
  , lM = Bw(.5, .95, vt);
function Bw(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Xo(e, t, r))
}
function uM(e, t, n) {
    const r = Fe(e) ? e : zi(e);
    return r.start(Bf("", r, t, n)),
    r.animation
}
function es(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const cM = (e, t) => e.depth - t.depth;
class dM {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        kf(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Wa(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(cM),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function fM(e, t) {
    const n = We.now()
      , r = ({timestamp: i}) => {
        const o = i - n;
        o >= t && (or(r),
        e(o - t))
    }
    ;
    return ie.setup(r, !0),
    () => or(r)
}
function da(e) {
    return Fe(e) ? e.get() : e
}
class hM {
    constructor() {
        this.members = []
    }
    add(t) {
        kf(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const i = r.instance;
            i && i.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && Wa(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (Wa(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i]
              , s = o.instance;
            if (o.isPresent !== !1 && (!s || s.isConnected !== !1)) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender();
            const i = r.options.layoutDependency
              , o = t.options.layoutDependency;
            if (!(i !== void 0 && o !== void 0 && i === o)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const fa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Tu = ["", "X", "Y", "Z"]
  , pM = 1e3;
let mM = 0;
function bu(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function $w(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = lw(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: o} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || o))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && $w(r)
}
function Uw({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, a=t == null ? void 0 : t()) {
            this.id = mM++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(vM),
                this.nodes.forEach(CM),
                this.nodes.forEach(EM),
                this.nodes.forEach(xM)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new dM)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Rf),
            this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s) {
            if (this.instance)
                return;
            this.isSVG = Gf(s) && !yA(s),
            this.instance = s;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                ie.read( () => {
                    d = window.innerWidth
                }
                ),
                e(s, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = fM(f, 250),
                    fa.hasAnimatedSinceResize && (fa.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Qm)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || u.getDefaultTransition() || RM
                  , {onLayoutAnimationStart: g, onLayoutAnimationComplete: x} = u.getProps()
                  , p = !this.targetLayout || !_w(this.targetLayout, h)
                  , m = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || m || d && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const y = {
                        ...zf(v, "layout"),
                        onPlay: g,
                        onComplete: x
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0,
                    y.type = !1),
                    this.startAnimation(y),
                    this.setAnimationOrigin(c, m)
                } else
                    d || Qm(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            or(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(TM),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $w(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Gm);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Ym);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(SM),
            this.nodes.forEach(gM),
            this.nodes.forEach(yM)) : this.nodes.forEach(Ym),
            this.clearAllSnapshots();
            const a = We.now();
            Re.delta = Jt(0, 1e3 / 60, a - Re.timestamp),
            Re.timestamp = a,
            Re.isProcessing = !0,
            gu.update.process(Re),
            gu.preRender.process(Re),
            gu.render.process(Re),
            Re.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Hf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(wM),
            this.sharedNodes.forEach(bM)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ie.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ie.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !He(this.snapshot.measuredBox.x) && !He(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Se(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !Fw(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && this.instance && (a || yr(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
            AM(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: s} = this.options;
            if (!s)
                return Se();
            const a = s.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(MM))) {
                const {scroll: c} = this.root;
                c && (ci(a.x, c.offset.x),
                ci(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = Se();
            if (kt(a, s),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && kt(a, s),
                ci(a.x, d.offset.x),
                ci(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(s, a=!1) {
            const l = Se();
            kt(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && di(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                yr(c.latestValues) && di(l, c.latestValues)
            }
            return yr(this.latestValues) && di(l, this.latestValues),
            l
        }
        removeTransform(s) {
            const a = Se();
            kt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !yr(u.latestValues))
                    continue;
                ld(u.latestValues) && u.updateSnapshot();
                const c = Se()
                  , d = u.measurePageBox();
                kt(c, d),
                Fm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return yr(this.latestValues) && Fm(a, this.latestValues),
            a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = Re.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Se(),
            this.targetWithTransforms = Se()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            JA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : kt(this.target, this.layout.layoutBox),
            Pw(this.target, this.targetDelta)) : kt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ld(this.parent.latestValues) || bw(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(s, a, l) {
            this.relativeParent = s,
            this.linkedParentVersion = s.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Se(),
            this.relativeTargetOrigin = Se(),
            Xa(this.relativeTargetOrigin, a, l),
            kt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var v;
            const s = this.getLead()
              , a = !!this.resumingFrom || this !== s;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Re.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            kt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            RA(this.layoutCorrected, this.treeScale, this.path, a),
            s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox,
            s.targetWithTransforms = Se());
            const {target: h} = s;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Lm(this.prevProjectionDelta.x, this.projectionDelta.x),
            Lm(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ko(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !Um(this.projectionDelta.x, this.prevProjectionDelta.x) || !Um(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ui(),
            this.projectionDelta = ui(),
            this.projectionDeltaWithTransform = ui()
        }
        setAnimationOrigin(s, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = ui();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Se()
              , h = l ? l.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , g = h !== v
              , x = this.getStack()
              , p = !x || x.members.length <= 1
              , m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(kM));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = C => {
                const E = C / 1e3;
                Xm(d.x, s.x, E),
                Xm(d.y, s.y, E),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                PM(this.relativeTarget, this.relativeTargetOrigin, f, E),
                y && rM(this.relativeTarget, y) && (this.isProjectionDirty = !1),
                y || (y = Se()),
                kt(y, this.relativeTarget)),
                g && (this.animationValues = c,
                sM(c, u, this.latestValues, E, m, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = E
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (or(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ie.update( () => {
                fa.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = zi(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = uM(this.motionValue, [0, 1e3], {
                    ...s,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        s.onUpdate && s.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(pM),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && Ww(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Se();
                    const d = He(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = He(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                    l.y.max = l.y.min + f
                }
                kt(a, l),
                di(a, c),
                ko(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new hM),
            this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: s} = this.options;
            return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: s} = this.options;
            return s ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let a = !1;
            const {latestValues: l} = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && bu("z", s, u, this.animationValues);
            for (let c = 0; c < Tu.length; c++)
                bu(`rotate${Tu[c]}`, s, u, this.animationValues),
                bu(`skew${Tu[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        applyProjectionStyles(s, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                s.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                s.visibility = "",
                s.opacity = "",
                s.pointerEvents = da(a == null ? void 0 : a.pointerEvents) || "",
                s.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                s.pointerEvents = da(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !yr(this.latestValues) && (s.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            s.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = iM(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            s.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? s.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const v in cd) {
                if (c[v] === void 0)
                    continue;
                const {correct: g, applyTo: x, isCSSVariable: p} = cd[v]
                  , m = d === "none" ? c[v] : g(c[v], u);
                if (x) {
                    const y = x.length;
                    for (let C = 0; C < y; C++)
                        s[x[C]] = m
                } else
                    p ? this.options.visualElement.renderState.vars[v] = m : s[v] = m
            }
            this.options.layoutId && (s.pointerEvents = u === this ? da(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Gm),
            this.root.sharedNodes.clear()
        }
    }
}
function gM(e) {
    e.updateLayout()
}
function yM(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = t.source !== e.layout.source;
        o === "size" ? Wt(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d]
              , h = He(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : Ww(o, t.layoutBox, r) && Wt(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d]
              , h = He(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = ui();
        ko(a, r, t.layoutBox);
        const l = ui();
        s ? ko(l, e.applyTransform(i, !0), t.measuredBox) : ko(l, r, t.layoutBox);
        const u = !Fw(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const v = Se();
                    Xa(v, t.layoutBox, f.layoutBox);
                    const g = Se();
                    Xa(g, r, h.layoutBox),
                    _w(v, g) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = g,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function vM(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function xM(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function wM(e) {
    e.clearSnapshot()
}
function Gm(e) {
    e.clearMeasurements()
}
function Ym(e) {
    e.isLayoutDirty = !1
}
function SM(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Qm(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function CM(e) {
    e.resolveTargetDelta()
}
function EM(e) {
    e.calcProjection()
}
function TM(e) {
    e.resetSkewAndRotation()
}
function bM(e) {
    e.removeLeadSnapshot()
}
function Xm(e, t, n) {
    e.translate = fe(t.translate, 0, n),
    e.scale = fe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function qm(e, t, n, r) {
    e.min = fe(t.min, n.min, r),
    e.max = fe(t.max, n.max, r)
}
function PM(e, t, n, r) {
    qm(e.x, t.x, n.x, r),
    qm(e.y, t.y, n.y, r)
}
function kM(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const RM = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Zm = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Jm = Zm("applewebkit/") && !Zm("chrome/") ? Math.round : vt;
function eg(e) {
    e.min = Jm(e.min),
    e.max = Jm(e.max)
}
function AM(e) {
    eg(e.x),
    eg(e.y)
}
function Ww(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !ZA($m(t), $m(n), .2)
}
function MM(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const NM = Uw({
    attachResizeListener: (e, t) => es(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , Pu = {
    current: void 0
}
  , Hw = Uw({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Pu.current) {
            const e = new NM({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Pu.current = e
        }
        return Pu.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , Zf = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function tg(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function LM(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const o = tg(i, t);
            return !n && typeof o == "function" && (n = !0),
            o
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const o = r[i];
                    typeof o == "function" ? o() : tg(e[i], null)
                }
            }
    }
}
function jM(...e) {
    return w.useCallback(LM(...e), e)
}
class DM extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
              , i = sd(r) && r.offsetWidth || 0
              , o = sd(r) && r.offsetHeight || 0
              , s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0,
            s.width = n.offsetWidth || 0,
            s.top = n.offsetTop,
            s.left = n.offsetLeft,
            s.right = i - s.width - s.left,
            s.bottom = o - s.height - s.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function OM({children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: o}) {
    var f;
    const s = w.useId()
      , a = w.useRef(null)
      , l = w.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: u} = w.useContext(Zf)
      , c = ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref)
      , d = jM(a, c);
    return w.useInsertionEffect( () => {
        const {width: h, height: v, top: g, left: x, right: p, bottom: m} = l.current;
        if (t || o === !1 || !a.current || !h || !v)
            return;
        const y = n === "left" ? `left: ${x}` : `right: ${p}`
          , C = r === "bottom" ? `bottom: ${m}` : `top: ${g}`;
        a.current.dataset.motionPopId = s;
        const E = document.createElement("style");
        u && (E.nonce = u);
        const T = i ?? document.head;
        return T.appendChild(E),
        E.sheet && E.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${y}px !important;
            ${C}px !important;
          }
        `),
        () => {
            T.contains(E) && T.removeChild(E)
        }
    }
    , [t]),
    S.jsx(DM, {
        isPresent: t,
        childRef: a,
        sizeRef: l,
        pop: o,
        children: o === !1 ? e : w.cloneElement(e, {
            ref: d
        })
    })
}
const IM = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s, anchorX: a, anchorY: l, root: u}) => {
    const c = Pf(VM)
      , d = w.useId();
    let f = !0
      , h = w.useMemo( () => (f = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: v => {
            c.set(v, !0);
            for (const g of c.values())
                if (!g)
                    return;
            r && r()
        }
        ,
        register: v => (c.set(v, !1),
        () => c.delete(v))
    }), [n, c, r]);
    return o && f && (h = {
        ...h
    }),
    w.useMemo( () => {
        c.forEach( (v, g) => c.set(g, !1))
    }
    , [n]),
    w.useEffect( () => {
        !n && !c.size && r && r()
    }
    , [n]),
    e = S.jsx(OM, {
        pop: s === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: u,
        children: e
    }),
    S.jsx(kl.Provider, {
        value: h,
        children: e
    })
}
;
function VM() {
    return new Map
}
function Kw(e=!0) {
    const t = w.useContext(kl);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , o = w.useId();
    w.useEffect( () => {
        if (e)
            return i(o)
    }
    , [e]);
    const s = w.useCallback( () => e && r && r(o), [o, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const Us = e => e.key || "";
function ng(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const FM = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: o="sync", propagate: s=!1, anchorX: a="left", anchorY: l="top", root: u}) => {
    const [c,d] = Kw(s)
      , f = w.useMemo( () => ng(e), [e])
      , h = s && !c ? [] : f.map(Us)
      , v = w.useRef(!0)
      , g = w.useRef(f)
      , x = Pf( () => new Map)
      , p = w.useRef(new Set)
      , [m,y] = w.useState(f)
      , [C,E] = w.useState(f);
    wx( () => {
        v.current = !1,
        g.current = f;
        for (let P = 0; P < C.length; P++) {
            const M = Us(C[P]);
            h.includes(M) ? (x.delete(M),
            p.current.delete(M)) : x.get(M) !== !0 && x.set(M, !1)
        }
    }
    , [C, h.length, h.join("-")]);
    const T = [];
    if (f !== m) {
        let P = [...f];
        for (let M = 0; M < C.length; M++) {
            const N = C[M]
              , z = Us(N);
            h.includes(z) || (P.splice(M, 0, N),
            T.push(N))
        }
        return o === "wait" && T.length && (P = T),
        E(ng(P)),
        y(f),
        null
    }
    const {forceRender: b} = w.useContext(bf);
    return S.jsx(S.Fragment, {
        children: C.map(P => {
            const M = Us(P)
              , N = s && !c ? !1 : f === C || h.includes(M)
              , z = () => {
                if (p.current.has(M))
                    return;
                if (p.current.add(M),
                x.has(M))
                    x.set(M, !0);
                else
                    return;
                let I = !0;
                x.forEach(K => {
                    K || (I = !1)
                }
                ),
                I && (b == null || b(),
                E(g.current),
                s && (d == null || d()),
                r && r())
            }
            ;
            return S.jsx(IM, {
                isPresent: N,
                initial: !v.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: o,
                root: u,
                onExitComplete: N ? void 0 : z,
                anchorX: a,
                anchorY: l,
                children: P
            }, M)
        }
        )
    })
}
  , Gw = w.createContext({
    strict: !1
})
  , rg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let ig = !1;
function _M() {
    if (ig)
        return;
    const e = {};
    for (const t in rg)
        e[t] = {
            isEnabled: n => rg[t].some(r => !!n[r])
        };
    Cw(e),
    ig = !0
}
function Yw() {
    return _M(),
    TA()
}
function zM(e) {
    const t = Yw();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    Cw(t)
}
const BM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function qa(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || BM.has(e)
}
let Qw = e => !qa(e);
function $M(e) {
    typeof e == "function" && (Qw = t => t.startsWith("on") ? !qa(t) : e(t))
}
try {
    $M(require("@emotion/is-prop-valid").default)
} catch {}
function UM(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (Qw(i) || n === !0 && qa(i) || !t && !qa(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Nl = w.createContext({});
function WM(e, t) {
    if (Ml(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Jo(n) ? n : void 0,
            animate: Jo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function HM(e) {
    const {initial: t, animate: n} = WM(e, w.useContext(Nl));
    return w.useMemo( () => ({
        initial: t,
        animate: n
    }), [og(t), og(n)])
}
function og(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Jf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Xw(e, t, n) {
    for (const r in t)
        !Fe(t[r]) && !Aw(r, n) && (e[r] = t[r])
}
function KM({transformTemplate: e}, t) {
    return w.useMemo( () => {
        const n = Jf();
        return Xf(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function GM(e, t) {
    const n = e.style || {}
      , r = {};
    return Xw(r, n, e),
    Object.assign(r, KM(e, t)),
    r
}
function YM(e, t) {
    const n = {}
      , r = GM(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const qw = () => ({
    ...Jf(),
    attrs: {}
});
function QM(e, t, n, r) {
    const i = w.useMemo( () => {
        const o = qw();
        return Mw(o, t, Lw(r), e.transformTemplate, e.style),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        Xw(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
const XM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function eh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(XM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function qM(e, t, n, {latestValues: r}, i, o=!1, s) {
    const l = (s ?? eh(e) ? QM : YM)(t, r, i, e)
      , u = UM(t, typeof e == "string", o)
      , c = e !== w.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = w.useMemo( () => Fe(d) ? d.get() : d, [d]);
    return w.createElement(e, {
        ...c,
        children: f
    })
}
function ZM({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: JM(n, r, i, e),
        renderState: t()
    }
}
function JM(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const f in o)
        i[f] = da(o[f]);
    let {initial: s, animate: a} = e;
    const l = Ml(e)
      , u = ww(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    if (d && typeof d != "boolean" && !Al(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const v = $f(e, f[h]);
            if (v) {
                const {transitionEnd: g, transition: x, ...p} = v;
                for (const m in p) {
                    let y = p[m];
                    if (Array.isArray(y)) {
                        const C = c ? y.length - 1 : 0;
                        y = y[C]
                    }
                    y !== null && (i[m] = y)
                }
                for (const m in g)
                    i[m] = g[m]
            }
        }
    }
    return i
}
const Zw = e => (t, n) => {
    const r = w.useContext(Nl)
      , i = w.useContext(kl)
      , o = () => ZM(e, t, r, i);
    return n ? o() : Pf(o)
}
  , eN = Zw({
    scrapeMotionValuesFromProps: qf,
    createRenderState: Jf
})
  , tN = Zw({
    scrapeMotionValuesFromProps: jw,
    createRenderState: qw
})
  , nN = Symbol.for("motionComponentSymbol");
function rN(e, t, n) {
    const r = w.useRef(n);
    w.useInsertionEffect( () => {
        r.current = n
    }
    );
    const i = w.useRef(null);
    return w.useCallback(o => {
        var a;
        o && ((a = e.onMount) == null || a.call(e, o)),
        t && (o ? t.mount(o) : t.unmount());
        const s = r.current;
        if (typeof s == "function")
            if (o) {
                const l = s(o);
                typeof l == "function" && (i.current = l)
            } else
                i.current ? (i.current(),
                i.current = null) : s(o);
        else
            s && (s.current = o)
    }
    , [t])
}
const Jw = w.createContext({});
function Yr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function iN(e, t, n, r, i, o) {
    var y, C;
    const {visualElement: s} = w.useContext(Nl)
      , a = w.useContext(Gw)
      , l = w.useContext(kl)
      , u = w.useContext(Zf)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = w.useRef(null)
      , h = w.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: o
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const v = f.current
      , g = w.useContext(Jw);
    v && !v.projection && i && (v.type === "html" || v.type === "svg") && oN(f.current, n, i, g);
    const x = w.useRef(!1);
    w.useInsertionEffect( () => {
        v && x.current && v.update(n, l)
    }
    );
    const p = n[aw]
      , m = w.useRef(!!p && !((y = window.MotionHandoffIsComplete) != null && y.call(window, p)) && ((C = window.MotionHasOptimisedAnimation) == null ? void 0 : C.call(window, p)));
    return wx( () => {
        h.current = !0,
        v && (x.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        m.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        v && (!m.current && v.animationState && v.animationState.animateChanges(),
        m.current && (queueMicrotask( () => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) == null || E.call(window, p)
        }
        ),
        m.current = !1),
        v.enteringChildren = void 0)
    }
    ),
    v
}
function oN(e, t, n, r) {
    const {layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : e1(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && Yr(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function e1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : e1(e.parent)
}
function ku(e, {forwardMotionProps: t=!1, type: n}={}, r, i) {
    r && zM(r);
    const o = n ? n === "svg" : eh(e)
      , s = o ? tN : eN;
    function a(u, c) {
        let d;
        const f = {
            ...w.useContext(Zf),
            ...u,
            layoutId: sN(u)
        }
          , {isStatic: h} = f
          , v = HM(u)
          , g = s(u, h);
        if (!h && xx) {
            aN();
            const x = lN(f);
            d = x.MeasureLayout,
            v.visualElement = iN(e, g, f, i, x.ProjectionNode, o)
        }
        return S.jsxs(Nl.Provider, {
            value: v,
            children: [d && v.visualElement ? S.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, qM(e, u, rN(g, v.visualElement, c), g, h, t, o)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = w.forwardRef(a);
    return l[nN] = e,
    l
}
function sN({layoutId: e}) {
    const t = w.useContext(bf).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function aN(e, t) {
    w.useContext(Gw).strict
}
function lN(e) {
    const t = Yw()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const i = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function uN(e, t) {
    if (typeof Proxy > "u")
        return ku;
    const n = new Map
      , r = (o, s) => ku(o, s, e, t)
      , i = (o, s) => r(o, s);
    return new Proxy(i,{
        get: (o, s) => s === "create" ? r : (n.has(s) || n.set(s, ku(s, void 0, e, t)),
        n.get(s))
    })
}
const cN = (e, t) => t.isSVG ?? eh(e) ? new BA(t) : new OA(t,{
    allowProjection: e !== w.Fragment
});
class dN extends ur {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = KA(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Al(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let fN = 0;
class hN extends ur {
    constructor() {
        super(...arguments),
        this.id = fN++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const pN = {
    animation: {
        Feature: dN
    },
    exit: {
        Feature: hN
    }
};
function ps(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const mN = e => t => Kf(t) && e(t, ps(t));
function Ro(e, t, n, r) {
    return es(e, t, mN(n), r)
}
const t1 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , sg = (e, t) => Math.abs(e - t);
function gN(e, t) {
    const n = sg(e.x, t.x)
      , r = sg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const ag = new Set(["auto", "scroll"]);
class n1 {
    constructor(t, n, {transformPagePoint: r, contextWindow: i=window, dragSnapToOrigin: o=!1, distanceThreshold: s=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = Au(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , g = gN(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!v && !g)
                return;
            const {point: x} = h
              , {timestamp: p} = Re;
            this.history.push({
                ...x,
                timestamp: p
            });
            const {onStart: m, onMove: y} = this.handlers;
            v || (m && m(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            y && y(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, v) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = Ru(v, this.transformPagePoint),
            ie.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, v) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: p} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const m = Au(h.type === "pointercancel" ? this.lastMoveEventInfo : Ru(v, this.transformPagePoint), this.history);
            this.startEvent && g && g(h, m),
            x && x(h, m)
        }
        ,
        !Kf(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = s,
        this.contextWindow = i || window;
        const l = ps(t)
          , u = Ru(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = Re;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, Au(u, this.history)),
        this.removeListeners = ds(Ro(this.contextWindow, "pointermove", this.handlePointerMove), Ro(this.contextWindow, "pointerup", this.handlePointerUp), Ro(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (ag.has(r.overflowX) || ag.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , i = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , o = {
            x: i.x - n.x,
            y: i.y - n.y
        };
        o.x === 0 && o.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o.x,
        this.lastMoveEventInfo.point.y += o.y) : this.history.length > 0 && (this.history[0].x -= o.x,
        this.history[0].y -= o.y),
        this.scrollPositions.set(t, i),
        ie.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        or(this.updatePoint)
    }
}
function Ru(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function lg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Au({point: e}, t) {
    return {
        point: e,
        delta: lg(e, r1(t)),
        offset: lg(e, yN(t)),
        velocity: vN(t, .1)
    }
}
function yN(e) {
    return e[0]
}
function r1(e) {
    return e[e.length - 1]
}
function vN(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = r1(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > xt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > xt(t) * 2 && (r = e[1]);
    const o = gt(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function xN(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
}
function ug(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function wN(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: ug(e.x, n, i),
        y: ug(e.y, t, r)
    }
}
function cg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function SN(e, t) {
    return {
        x: cg(e.x, t.x),
        y: cg(e.y, t.y)
    }
}
function CN(e, t) {
    let n = .5;
    const r = He(e)
      , i = He(t);
    return i > r ? n = Xo(t.min, t.max - r, e.min) : r > i && (n = Xo(e.min, e.max - i, t.min)),
    Jt(0, 1, n)
}
function EN(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const dd = .35;
function TN(e=dd) {
    return e === !1 ? e = 0 : e === !0 && (e = dd),
    {
        x: dg(e, "left", "right"),
        y: dg(e, "top", "bottom")
    }
}
function dg(e, t, n) {
    return {
        min: fg(e, t),
        max: fg(e, n)
    }
}
function fg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const bN = new WeakMap;
class PN {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Se(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const o = d => {
            n && this.snapToCursor(ps(d).point),
            this.stopAnimation()
        }
          , s = (d, f) => {
            const {drag: h, dragPropagation: v, onDragStart: g} = this.getProps();
            if (h && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = eA(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Wt(p => {
                let m = this.getAxisMotionValue(p).get() || 0;
                if (qt.test(m)) {
                    const {projection: y} = this.visualElement;
                    if (y && y.layout) {
                        const C = y.layout.layoutBox[p];
                        C && (m = He(C) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[p] = m
            }
            ),
            g && ie.update( () => g(d, f), !1, !0),
            nd(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: v, onDirectionLock: g, onDrag: x} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: p} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = RN(p),
                this.currentDirection !== null && g && g(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, p),
            this.updateAxis("y", f.point, p),
            this.visualElement.render(),
            x && ie.update( () => x(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new n1(t,{
            onSessionStart: o,
            onStart: s,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: t1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , o = this.isDragging;
        if (this.cancel(),
        !o || !i || !r)
            return;
        const {velocity: s} = i;
        this.startAnimation(s);
        const {onDragEnd: a} = this.getProps();
        a && ie.postRender( () => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Ws(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = xN(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        var o;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout
          , i = this.constraints;
        t && Yr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = wN(r.layoutBox, t) : this.constraints = !1,
        this.elastic = TN(n),
        i !== this.constraints && !Yr(t) && r && this.constraints && !this.hasMutatedConstraints && Wt(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = EN(r.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Yr(t))
            return !1;
        const r = t.current;
        _i(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = AA(r, i.root, this.visualElement.getTransformPagePoint());
        let s = SN(i.layout.layoutBox, o);
        if (n) {
            const a = n(PA(s));
            this.hasMutatedConstraints = !!a,
            a && (s = Tw(a))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = Wt(c => {
            if (!Ws(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , h = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...d
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return nd(this.visualElement, t),
        r.start(Bf(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Wt(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Wt(n => {
            const {drag: r} = this.getProps();
            if (!Ws(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: a} = i.layout.layoutBox[n]
                  , l = o.get() || 0;
                o.set(t[n] - fe(s, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Yr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Wt(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[s] = CN({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        Wt(s => {
            if (!Ws(s, t, null))
                return;
            const a = this.getAxisMotionValue(s)
              , {min: l, max: u} = this.constraints[s];
            a.set(fe(l, u, i[s]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        bN.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Ro(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && sA(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const i = () => {
            const {dragConstraints: u} = this.getProps();
            Yr(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = kN(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: o} = this.visualElement
          , s = o.addEventListener("measure", i);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        ie.read(i);
        const a = es(window, "resize", () => this.scalePositionWithinConstraints())
          , l = o.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (Wt(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            s(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=dd, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function hg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function kN(e, t, n) {
    const r = wm(e, hg(n))
      , i = wm(t, hg(n));
    return () => {
        r(),
        i()
    }
}
function Ws(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function RN(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class AN extends ur {
    constructor(t) {
        super(t),
        this.removeGroupControls = vt,
        this.removeListeners = vt,
        this.controls = new PN(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || vt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Mu = e => (t, n) => {
    e && ie.update( () => e(t, n), !1, !0)
}
;
class MN extends ur {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = vt
    }
    onPointerDown(t) {
        this.session = new n1(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: t1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Mu(t),
            onStart: Mu(n),
            onMove: Mu(r),
            onEnd: (o, s) => {
                delete this.session,
                i && ie.postRender( () => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ro(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Nu = !1;
class NN extends w.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        Nu && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        fa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , {projection: s} = r;
        return s && (s.isPresent = o,
        t.layoutDependency !== n && s.setOptions({
            ...s.options,
            layoutDependency: n
        }),
        Nu = !0,
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || ie.postRender( () => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Hf.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        Nu = !0,
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function i1(e) {
    const [t,n] = Kw()
      , r = w.useContext(bf);
    return S.jsx(NN, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(Jw),
        isPresent: t,
        safeToRemove: n
    })
}
const LN = {
    pan: {
        Feature: MN
    },
    drag: {
        Feature: AN,
        ProjectionNode: Hw,
        MeasureLayout: i1
    }
};
function pg(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , o = r[i];
    o && ie.postRender( () => o(t, ps(t)))
}
class jN extends ur {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = nA(t, (n, r) => (pg(this.node, r, "Start"),
        i => pg(this.node, i, "End"))))
    }
    unmount() {}
}
class DN extends ur {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ds(es(this.node.current, "focus", () => this.onFocus()), es(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function mg(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , o = r[i];
    o && ie.postRender( () => o(t, ps(t)))
}
class ON extends ur {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = lA(t, (i, o) => (mg(this.node, o, "Start"),
        (s, {success: a}) => mg(this.node, s, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const fd = new WeakMap
  , Lu = new WeakMap
  , IN = e => {
    const t = fd.get(e.target);
    t && t(e)
}
  , VN = e => {
    e.forEach(IN)
}
;
function FN({root: e, ...t}) {
    const n = e || document;
    Lu.has(n) || Lu.set(n, {});
    const r = Lu.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(VN,{
        root: e,
        ...t
    })),
    r[i]
}
function _N(e, t, n) {
    const r = FN(t);
    return fd.set(e, n),
    r.observe(e),
    () => {
        fd.delete(e),
        r.unobserve(e)
    }
}
const zN = {
    some: 0,
    all: 1
};
class BN extends ur {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : zN[i]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return _N(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some($N(t, n)) && this.startObserver()
    }
    unmount() {}
}
function $N({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const UN = {
    inView: {
        Feature: BN
    },
    tap: {
        Feature: ON
    },
    focus: {
        Feature: DN
    },
    hover: {
        Feature: jN
    }
}
  , WN = {
    layout: {
        ProjectionNode: Hw,
        MeasureLayout: i1
    }
}
  , HN = {
    ...pN,
    ...UN,
    ...LN,
    ...WN
}
  , Me = uN(HN, cN)
  , gg = [{
    label: "Home",
    href: "#"
}, {
    label: "About Me",
    href: "#about"
}, {
    label: "Services",
    href: "#services"
}, {
    label: "Resources",
    href: "#activities"
}, {
    label: "Testimonials",
    href: "#testimonials"
}]
  , KN = () => {
    const [e,t] = w.useState(!1)
      , [n,r] = w.useState(!1);
    return w.useEffect( () => {
        const i = () => t(window.scrollY > 40);
        return window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
    }
    , []),
    S.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-card/95 backdrop-blur-md shadow-sm py-3" : "bg-card/80 backdrop-blur-sm py-4"}`,
        children: [S.jsxs("div", {
            className: "container mx-auto flex items-center justify-between px-4 lg:px-8",
            children: [S.jsx("a", {
                href: "#",
                className: "flex items-center gap-2",
                children: S.jsxs("svg", {
                    width: "40",
                    height: "36",
                    viewBox: "0 0 40 36",
                    fill: "none",
                    className: "text-primary",
                    children: [S.jsx("path", {
                        d: "M20 2C10 2 2 8 2 16C2 20 4 23.5 7.5 26L6 34L14 29C16 29.7 18 30 20 30C30 30 38 24 38 16C38 8 30 2 20 2Z",
                        fill: "currentColor",
                        opacity: "0.15",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }), S.jsx("path", {
                        d: "M14 14C14 12 16 10 20 10C24 10 26 12 26 14",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), S.jsx("circle", {
                        cx: "14",
                        cy: "16",
                        r: "1.5",
                        fill: "currentColor"
                    }), S.jsx("circle", {
                        cx: "26",
                        cy: "16",
                        r: "1.5",
                        fill: "currentColor"
                    }), S.jsx("path", {
                        d: "M16 20C17 21.5 19 22.5 20 22.5C21 22.5 23 21.5 24 20",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    })]
                })
            }), S.jsxs("div", {
                className: "hidden lg:flex items-center gap-8",
                children: [gg.map(i => S.jsx("a", {
                    href: i.href,
                    className: "font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
                    children: i.label
                }, i.href + i.label)), S.jsx("a", {
                    href: "#contact",
                    className: "rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground hover:bg-sage-dark transition-colors",
                    children: "Contact Us"
                })]
            }), S.jsx("button", {
                className: "lg:hidden text-foreground",
                onClick: () => r(!n),
                "aria-label": "Toggle menu",
                children: n ? S.jsx(x0, {
                    size: 24
                }) : S.jsx(QE, {
                    size: 24
                })
            })]
        }), S.jsx(FM, {
            children: n && S.jsx(Me.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "lg:hidden bg-card/98 backdrop-blur-md border-t border-border",
                children: S.jsxs("div", {
                    className: "container mx-auto px-4 py-6 flex flex-col gap-4",
                    children: [gg.map(i => S.jsx("a", {
                        href: i.href,
                        onClick: () => r(!1),
                        className: "font-body text-base font-medium text-foreground/80 hover:text-primary py-2",
                        children: i.label
                    }, i.href + i.label)), S.jsx("a", {
                        href: "#contact",
                        onClick: () => r(!1),
                        className: "rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground text-center mt-2",
                        children: "Contact Us"
                    })]
                })
            })
        })]
    })
}
  , Hs = ({children: e, className: t, delay: n=0}) => S.jsx(Me.div, {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1
    },
    transition: {
        delay: n,
        duration: .5,
        type: "spring"
    },
    className: `absolute z-20 ${t}`,
    children: e
})
  , GN = () => S.jsxs("section", {
    className: "relative min-h-screen flex items-center overflow-hidden",
    children: [S.jsxs("div", {
        className: "absolute inset-0",
        children: [S.jsx("img", {
            src: "/images/hero-child.jpg",
            alt: "Child engaging in speech therapy session with therapist",
            className: "w-full h-full object-cover",
            loading: "eager"
        }), S.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent"
        })]
    }), S.jsx(Hs, {
        className: "top-24 right-[15%] hidden md:block",
        delay: .8,
        children: S.jsx("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            children: S.jsx("path", {
                d: "M24 4C14 4 6 10 6 18C6 22 8 25.5 11.5 28L10 36L18 31C20 31.7 22 32 24 32C34 32 42 26 42 18C42 10 34 4 24 4Z",
                fill: "hsl(42 70% 60%)",
                opacity: "0.7"
            })
        })
    }), S.jsx(Hs, {
        className: "top-32 right-[8%] hidden md:block",
        delay: 1,
        children: S.jsx("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            children: S.jsx("path", {
                d: "M16 2L20 12L30 16L20 20L16 30L12 20L2 16L12 12Z",
                fill: "hsl(200 35% 65%)",
                opacity: "0.6"
            })
        })
    }), S.jsx(Hs, {
        className: "bottom-32 right-[12%] hidden md:block",
        delay: 1.2,
        children: S.jsxs("svg", {
            width: "44",
            height: "44",
            viewBox: "0 0 44 44",
            fill: "none",
            children: [S.jsx("rect", {
                x: "4",
                y: "4",
                width: "16",
                height: "16",
                rx: "3",
                fill: "hsl(140 25% 42%)",
                opacity: "0.5",
                transform: "rotate(15 12 12)"
            }), S.jsx("rect", {
                x: "20",
                y: "4",
                width: "16",
                height: "16",
                rx: "3",
                fill: "hsl(42 70% 60%)",
                opacity: "0.5",
                transform: "rotate(-10 28 12)"
            }), S.jsx("rect", {
                x: "4",
                y: "20",
                width: "16",
                height: "16",
                rx: "3",
                fill: "hsl(200 35% 65%)",
                opacity: "0.5",
                transform: "rotate(5 12 28)"
            }), S.jsx("rect", {
                x: "20",
                y: "20",
                width: "16",
                height: "16",
                rx: "3",
                fill: "hsl(140 25% 42%)",
                opacity: "0.4",
                transform: "rotate(-5 28 28)"
            })]
        })
    }), S.jsx(Hs, {
        className: "top-[45%] right-[5%] hidden lg:block",
        delay: 1.4,
        children: S.jsx("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 28 28",
            fill: "none",
            children: S.jsx("circle", {
                cx: "14",
                cy: "14",
                r: "12",
                fill: "hsl(42 70% 60%)",
                opacity: "0.4"
            })
        })
    }), S.jsx("div", {
        className: "absolute bottom-0 left-0 right-0",
        children: S.jsx("svg", {
            viewBox: "0 0 1440 120",
            className: "w-full",
            preserveAspectRatio: "none",
            children: S.jsx("path", {
                d: "M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z",
                fill: "hsl(40 33% 98%)"
            })
        })
    }), S.jsx("div", {
        className: "container mx-auto px-4 lg:px-8 relative z-10 pt-24",
        children: S.jsxs(Me.div, {
            initial: {
                opacity: 0,
                y: 40
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8,
                ease: "easeOut"
            },
            className: "max-w-2xl",
            children: [S.jsxs("h1", {
                className: "heading-xl text-primary-foreground mb-6",
                children: ["Helping Your Child Find Their", " ", S.jsx("span", {
                    className: "text-mustard",
                    children: "Voice,"
                }), " One Step at a Time"]
            }), S.jsx("p", {
                className: "body-lg text-primary-foreground/85 mb-10 max-w-lg",
                children: "Personalized, playful speech and language therapy for children, empowering families and communication skills."
            }), S.jsx("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: S.jsx("a", {
                    href: "#contact",
                    className: "rounded-full bg-foreground px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-center",
                    children: "Book a Consultation"
                })
            })]
        })
    })]
})
  , YN = () => S.jsx("section", {
    id: "about",
    className: "section-padding bg-background",
    children: S.jsxs("div", {
        className: "container mx-auto",
        children: [S.jsx(Me.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: S.jsx("h2", {
                className: "heading-lg text-foreground mb-2",
                children: "Meet the Therapist & Our Approach"
            })
        }), S.jsxs("div", {
            className: "flex flex-col md:flex-row items-center gap-10 lg:gap-16 max-w-4xl mx-auto",
            children: [S.jsxs(Me.div, {
                initial: {
                    opacity: 0,
                    x: -30
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                className: "relative flex-shrink-0",
                children: [S.jsx("div", {
                    className: "w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl",
                    children: S.jsx("img", {
                        src: "/images/therapist-portrait.jpg",
                        alt: "Speech therapist portrait",
                        className: "w-full h-full object-cover",
                        loading: "lazy"
                    })
                }), S.jsx("svg", {
                    width: "32",
                    height: "28",
                    viewBox: "0 0 32 28",
                    className: "absolute -top-2 -right-2",
                    children: S.jsx("path", {
                        d: "M16 2C8 2 2 6 2 12C2 15 4 17.5 7 19L6 26L12 22C13.5 22.5 15 22.5 16 22.5C24 22.5 30 18 30 12C30 6 24 2 16 2Z",
                        fill: "hsl(200 35% 65%)",
                        opacity: "0.6"
                    })
                }), S.jsx("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    className: "absolute -bottom-1 -left-3",
                    children: S.jsx("path", {
                        d: "M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5Z",
                        fill: "hsl(42 70% 60%)",
                        opacity: "0.7"
                    })
                })]
            }), S.jsxs(Me.div, {
                initial: {
                    opacity: 0,
                    x: 30
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                children: [S.jsxs("p", {
                    className: "body-md text-foreground mb-4",
                    children: ["Hello, I'm ", S.jsx("strong", {
                        children: "[Therapist Name]"
                    }), ", a certified Speech and Language Pathologist dedicated to making communication fun and effective."]
                }), S.jsx("p", {
                    className: "body-md text-muted-foreground",
                    children: "My child-led approach focuses on building confidence and skills in a supportive, encouraging environment. Every child deserves to be heard — and I'm here to help them find their voice."
                })]
            })]
        })]
    })
})
  , QN = [{
    icon: XE,
    title: "Articulation & Phonology",
    description: "Improve articulation and movement cause of sounds.",
    image: null
}, {
    icon: UE,
    title: "Language Development",
    description: "Build vocabulary and comprehension to comprehension.",
    image: "/images/therapy-activity-1.jpeg"
}, {
    icon: eT,
    title: "Social Communication",
    description: "Improve social skills and interaction as sustainable communications.",
    image: null
}]
  , XN = () => S.jsx("section", {
    id: "services",
    className: "section-padding bg-sand",
    children: S.jsxs("div", {
        className: "container mx-auto",
        children: [S.jsx(Me.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-14",
            children: S.jsx("h2", {
                className: "heading-lg text-foreground mb-4",
                children: "Our Services: Tailored for Your Child"
            })
        }), S.jsx("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",
            children: QN.map( (e, t) => S.jsxs(Me.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1,
                    duration: .5
                },
                className: "rounded-2xl bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col",
                children: [e.image ? S.jsx("div", {
                    className: "rounded-xl overflow-hidden mb-5 aspect-[4/3]",
                    children: S.jsx("img", {
                        src: e.image,
                        alt: e.title,
                        className: "w-full h-full object-cover",
                        loading: "lazy"
                    })
                }) : S.jsx("div", {
                    className: "w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mb-5",
                    children: S.jsx(e.icon, {
                        className: "w-7 h-7 text-primary"
                    })
                }), S.jsx("h3", {
                    className: "font-heading text-lg font-semibold text-foreground mb-2",
                    children: e.title
                }), S.jsx("p", {
                    className: "body-md text-muted-foreground mb-5 flex-1",
                    children: e.description
                }), S.jsx("a", {
                    href: "#contact",
                    className: "inline-block rounded-full bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground hover:bg-sage-dark transition-colors w-fit",
                    children: "Learn More"
                })]
            }, e.title))
        })]
    })
})
  , qN = [{
    src: "/images/therapy-activity-1.jpeg",
    caption: "Engaging Games"
}, {
    src: "/images/therapy-activity-2.jpeg",
    caption: "Interactive Activities"
}]
  , pr = [{
    src: "/images/therapy-activity-3.jpeg",
    caption: "Speech Tools"
}, {
    src: "/images/therapy-activity-4.jpeg",
    caption: "Learning Cards"
}, {
    src: "/images/therapy-activity-5.jpeg",
    caption: "Play Materials"
}]
  , ZN = () => {
    const [e,t] = w.useState(0)
      , n = () => t(i => (i + 1) % pr.length)
      , r = () => t(i => (i - 1 + pr.length) % pr.length);
    return S.jsx("section", {
        id: "activities",
        className: "section-padding bg-background",
        children: S.jsx("div", {
            className: "container mx-auto",
            children: S.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 lg:gap-16",
                children: [S.jsxs(Me.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: [S.jsx("h2", {
                        className: "heading-lg text-foreground mb-6",
                        children: "Learning Through Play"
                    }), S.jsx("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: qN.map( (i, o) => S.jsxs("div", {
                            className: "group",
                            children: [S.jsx("div", {
                                className: "rounded-2xl overflow-hidden shadow-sm aspect-square",
                                children: S.jsx("img", {
                                    src: i.src,
                                    alt: i.caption,
                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                    loading: "lazy"
                                })
                            }), S.jsx("p", {
                                className: "font-body text-sm font-medium text-muted-foreground mt-2 text-center",
                                children: i.caption
                            })]
                        }, o))
                    })]
                }), S.jsxs(Me.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .1
                    },
                    children: [S.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [S.jsx("h2", {
                            className: "heading-lg text-foreground",
                            children: "Our Favorite Tools"
                        }), S.jsxs("div", {
                            className: "flex gap-2",
                            children: [S.jsx("button", {
                                onClick: r,
                                className: "w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-sage-light transition-colors",
                                "aria-label": "Previous",
                                children: S.jsx(y0, {
                                    className: "w-4 h-4 text-foreground"
                                })
                            }), S.jsx("button", {
                                onClick: n,
                                className: "w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-sage-light transition-colors",
                                "aria-label": "Next",
                                children: S.jsx(v0, {
                                    className: "w-4 h-4 text-foreground"
                                })
                            })]
                        })]
                    }), S.jsx("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: pr.map( (i, o) => {
                            const s = [e, (e + 1) % pr.length, (e + 2) % pr.length].includes(o);
                            return S.jsx(Me.div, {
                                initial: !1,
                                animate: {
                                    opacity: s ? 1 : .3,
                                    scale: s ? 1 : .95
                                },
                                className: "group",
                                children: S.jsx("div", {
                                    className: "rounded-2xl overflow-hidden shadow-sm aspect-square",
                                    children: S.jsx("img", {
                                        src: i.src,
                                        alt: i.caption,
                                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                        loading: "lazy"
                                    })
                                })
                            }, o)
                        }
                        )
                    }), S.jsx("div", {
                        className: "flex justify-center gap-2 mt-4",
                        children: pr.map( (i, o) => S.jsx("button", {
                            onClick: () => t(o),
                            className: `w-2.5 h-2.5 rounded-full transition-colors ${o === e ? "bg-primary" : "bg-border"}`,
                            "aria-label": `Tool ${o + 1}`
                        }, o))
                    })]
                })]
            })
        })
    })
}
  , JN = [{
    icon: $E,
    title: "Toddlers & Preschoolers",
    description: "Early language development, first words, and building communication foundations."
}, {
    icon: HE,
    title: "School-Aged Children",
    description: "Reading, writing, social skills, and classroom communication support."
}, {
    icon: ZE,
    title: "Children with Autism",
    description: "Social communication, pragmatic language, and functional communication strategies."
}, {
    icon: WE,
    title: "Developmental Delays",
    description: "Targeted support for children who need extra time and specialised strategies to thrive."
}]
  , eL = () => S.jsx("section", {
    id: "who-we-help",
    className: "section-padding bg-sage-light",
    children: S.jsxs("div", {
        className: "container mx-auto",
        children: [S.jsxs(Me.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-16",
            children: [S.jsx("h2", {
                className: "heading-lg text-foreground mb-4",
                children: "Who We Help"
            }), S.jsx("p", {
                className: "body-md text-muted-foreground max-w-2xl mx-auto",
                children: "Whether your child is just starting to talk or needs support with more complex communication, we're here to help."
            })]
        }), S.jsx("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
            children: JN.map( (e, t) => S.jsxs(Me.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "rounded-2xl bg-card p-8 text-center shadow-sm hover:shadow-md transition-all border border-border/30",
                children: [S.jsx("div", {
                    className: "w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto mb-5",
                    children: S.jsx(e.icon, {
                        className: "w-8 h-8 text-primary"
                    })
                }), S.jsx("h3", {
                    className: "font-heading text-lg font-semibold text-foreground mb-3",
                    children: e.title
                }), S.jsx("p", {
                    className: "body-md text-muted-foreground",
                    children: e.description
                })]
            }, e.title))
        })]
    })
})
  , yg = [{
    quote: "Our child loves her sessions! We've seen such amazing progress.",
    name: "Parent Rawan"
}, {
    quote: "Professional, warm, and truly cares about our family.",
    name: "Monn"
}, {
    quote: "Professional, run, and truly cared our family.",
    name: "Parent Hority"
}, {
    quote: "The play-based approach made all the difference. My child thinks it's all games!",
    name: "David K."
}]
  , tL = () => {
    const [e,t] = w.useState(0)
      , n = 3
      , r = Math.ceil(yg.length / n)
      , i = yg.slice(e * n, e * n + n)
      , o = () => t(a => (a + 1) % r)
      , s = () => t(a => (a - 1 + r) % r);
    return S.jsx("section", {
        id: "testimonials",
        className: "section-padding bg-sand",
        children: S.jsxs("div", {
            className: "container mx-auto",
            children: [S.jsx(Me.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-12",
                children: S.jsx("h2", {
                    className: "heading-lg text-foreground",
                    children: "What Parents Are Saying"
                })
            }), S.jsxs("div", {
                className: "relative max-w-5xl mx-auto",
                children: [S.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [S.jsx("button", {
                        onClick: s,
                        className: "w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-sage-light transition-colors flex-shrink-0",
                        "aria-label": "Previous",
                        children: S.jsx(y0, {
                            className: "w-5 h-5 text-foreground"
                        })
                    }), S.jsx("div", {
                        className: "grid sm:grid-cols-3 gap-6 flex-1",
                        children: i.map( (a, l) => S.jsxs(Me.div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: l * .1
                            },
                            className: "bg-card rounded-2xl p-6 shadow-sm text-center",
                            children: [S.jsx("span", {
                                className: "font-heading text-5xl text-primary/30 leading-none block mb-2",
                                children: '"'
                            }), S.jsxs("p", {
                                className: "font-body text-sm text-foreground mb-4 italic leading-relaxed",
                                children: ['"', a.quote, '"']
                            }), S.jsx("p", {
                                className: "font-body text-sm font-semibold text-foreground",
                                children: a.name
                            })]
                        }, a.name + e))
                    }), S.jsx("button", {
                        onClick: o,
                        className: "w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-sage-light transition-colors flex-shrink-0",
                        "aria-label": "Next",
                        children: S.jsx(v0, {
                            className: "w-5 h-5 text-foreground"
                        })
                    })]
                }), S.jsx("div", {
                    className: "flex justify-center gap-2 mt-6",
                    children: Array.from({
                        length: r
                    }).map( (a, l) => S.jsx("button", {
                        onClick: () => t(l),
                        className: `w-2.5 h-2.5 rounded-full transition-colors ${l === e ? "bg-primary" : "bg-border"}`,
                        "aria-label": `Page ${l + 1}`
                    }, l))
                })]
            })]
        })
    })
}
  , nL = () => {
    const [e,t] = w.useState({
        name: "",
        email: "",
        phone: "",
        childAge: "",
        message: ""
    })
      , n = i => {
        i.preventDefault(),
        alert("Thank you for your message! We'll be in touch soon."),
        t({
            name: "",
            email: "",
            phone: "",
            childAge: "",
            message: ""
        })
    }
      , r = i => {
        t(o => ({
            ...o,
            [i.target.name]: i.target.value
        }))
    }
    ;
    return S.jsx("section", {
        id: "contact",
        className: "section-padding bg-sand relative overflow-hidden",
        children: S.jsx("div", {
            className: "container mx-auto relative z-10",
            children: S.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12",
                children: [S.jsxs(Me.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: [S.jsx("h2", {
                        className: "heading-lg text-foreground mb-8",
                        children: "Get in Touch & Start Your Journey"
                    }), S.jsxs("form", {
                        onSubmit: n,
                        className: "space-y-4",
                        children: [S.jsx("input", {
                            type: "text",
                            name: "name",
                            required: !0,
                            value: e.name,
                            onChange: r,
                            className: "w-full rounded-xl border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
                            placeholder: "Name"
                        }), S.jsx("input", {
                            type: "email",
                            name: "email",
                            required: !0,
                            value: e.email,
                            onChange: r,
                            className: "w-full rounded-xl border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
                            placeholder: "Email"
                        }), S.jsx("input", {
                            type: "tel",
                            name: "phone",
                            value: e.phone,
                            onChange: r,
                            className: "w-full rounded-xl border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
                            placeholder: "Phone Number"
                        }), S.jsx("input", {
                            type: "text",
                            name: "childAge",
                            value: e.childAge,
                            onChange: r,
                            className: "w-full rounded-xl border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
                            placeholder: "Child's Age"
                        }), S.jsx("textarea", {
                            name: "message",
                            rows: 4,
                            value: e.message,
                            onChange: r,
                            className: "w-full rounded-xl border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none",
                            placeholder: "Message"
                        }), S.jsxs("button", {
                            type: "submit",
                            className: "w-full rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:bg-sage-dark transition-colors shadow-md inline-flex items-center justify-center gap-2",
                            children: [S.jsx(JE, {
                                className: "w-4 h-4"
                            }), "Send Message"]
                        })]
                    })]
                }), S.jsxs(Me.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .15
                    },
                    className: "flex flex-col gap-6",
                    children: [S.jsx("h2", {
                        className: "heading-lg text-foreground",
                        children: "Contact Us"
                    }), S.jsx("div", {
                        className: "rounded-2xl overflow-hidden aspect-video bg-muted shadow-sm",
                        children: S.jsx("img", {
                            src: "/images/therapy-activity-5.jpeg",
                            alt: "Our location",
                            className: "w-full h-full object-cover opacity-60",
                            loading: "lazy"
                        })
                    }), S.jsxs("div", {
                        className: "space-y-4",
                        children: [S.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [S.jsx(qE, {
                                className: "w-5 h-5 text-primary flex-shrink-0"
                            }), S.jsx("a", {
                                href: "tel:+441234567890",
                                className: "font-body text-foreground hover:text-primary transition-colors",
                                children: "0234 567 7890"
                            })]
                        }), S.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [S.jsx(GE, {
                                className: "w-5 h-5 text-primary flex-shrink-0"
                            }), S.jsx("a", {
                                href: "mailto:info@speechmonm.com",
                                className: "font-body text-foreground hover:text-primary transition-colors",
                                children: "info@speechmonm.com"
                            })]
                        }), S.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [S.jsx(YE, {
                                className: "w-5 h-5 text-primary flex-shrink-0"
                            }), S.jsx("span", {
                                className: "font-body text-foreground",
                                children: "Serving [Location]"
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}
  , rL = () => S.jsx("footer", {
    className: "bg-foreground py-10",
    children: S.jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [S.jsxs("a", {
            href: "#",
            className: "font-heading text-2xl font-bold text-primary-foreground",
            children: ["Little", S.jsx("span", {
                className: "text-mustard",
                children: "Voices"
            })]
        }), S.jsxs("p", {
            className: "font-body text-sm text-primary-foreground/50 mt-4 flex items-center justify-center gap-1",
            children: ["Made with ", S.jsx(KE, {
                className: "w-3.5 h-3.5 text-mustard"
            }), " for little communicators"]
        }), S.jsxs("p", {
            className: "font-body text-xs text-primary-foreground/30 mt-2",
            children: ["© ", new Date().getFullYear(), " LittleVoices Speech & Language Therapy. All rights reserved."]
        })]
    })
})
  , iL = () => S.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [S.jsx(KN, {}), S.jsxs("main", {
        children: [S.jsx(GN, {}), S.jsx(YN, {}), S.jsx(XN, {}), S.jsx(ZN, {}), S.jsx(eL, {}), S.jsx(tL, {}), S.jsx(nL, {})]
    }), S.jsx(rL, {})]
})
  , oL = () => {
    const e = vx();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    S.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: S.jsxs("div", {
            className: "text-center",
            children: [S.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), S.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), S.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , sL = new ck
  , aL = () => S.jsx(fk, {
    client: sL,
    children: S.jsxs(zP, {
        children: [S.jsx(IT, {}), S.jsx(pb, {}), S.jsx(qk, {
            children: S.jsxs(Yk, {
                children: [S.jsx(Bc, {
                    path: "/",
                    element: S.jsx(iL, {})
                }), S.jsx(Bc, {
                    path: "*",
                    element: S.jsx(oL, {})
                })]
            })
        })]
    })
});
Bv(document.getElementById("root")).render(S.jsx(aL, {}));
