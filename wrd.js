function kh(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const l in r)
				if (l !== "default" && !(l in e)) {
					const i = Object.getOwnPropertyDescriptor(r, l);
					i && Object.defineProperty(e, l, i.get ? i : {
						enumerable: !0,
						get: () => r[l]
					})
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
		value: "Module"
	}))
}(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver(l => {
		for (const i of l)
			if (i.type === "childList")
				for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(l) {
		const i = {};
		return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
	}

	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const i = n(l);
		fetch(l.href, i)
	}
})();

function yf(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var gf = {
		exports: {}
	},
	$i = {},
	xf = {
		exports: {}
	},
	Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fl = Symbol.for("react.element"),
	Eh = Symbol.for("react.portal"),
	_h = Symbol.for("react.fragment"),
	Ch = Symbol.for("react.strict_mode"),
	Fh = Symbol.for("react.profiler"),
	Nh = Symbol.for("react.provider"),
	Th = Symbol.for("react.context"),
	Ph = Symbol.for("react.forward_ref"),
	Oh = Symbol.for("react.suspense"),
	Ah = Symbol.for("react.memo"),
	jh = Symbol.for("react.lazy"),
	_a = Symbol.iterator;

function Rh(e) {
	return e === null || typeof e != "object" ? null : (e = _a && e[_a] || e["@@iterator"], typeof e == "function" ? e : null)
}
var wf = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	Sf = Object.assign,
	kf = {};

function mr(e, t, n) {
	this.props = e, this.context = t, this.refs = kf, this.updater = n || wf
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
mr.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ef() {}
Ef.prototype = mr.prototype;

function au(e, t, n) {
	this.props = e, this.context = t, this.refs = kf, this.updater = n || wf
}
var cu = au.prototype = new Ef;
cu.constructor = au;
Sf(cu, mr.prototype);
cu.isPureReactComponent = !0;
var Ca = Array.isArray,
	_f = Object.prototype.hasOwnProperty,
	fu = {
		current: null
	},
	Cf = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Ff(e, t, n) {
	var r, l = {},
		i = null,
		s = null;
	if (t != null)
		for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) _f.call(t, r) && !Cf.hasOwnProperty(r) && (l[r] = t[r]);
	var o = arguments.length - 2;
	if (o === 1) l.children = n;
	else if (1 < o) {
		for (var u = Array(o), a = 0; a < o; a++) u[a] = arguments[a + 2];
		l.children = u
	}
	if (e && e.defaultProps)
		for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
	return {
		$$typeof: fl,
		type: e,
		key: i,
		ref: s,
		props: l,
		_owner: fu.current
	}
}

function $h(e, t) {
	return {
		$$typeof: fl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function du(e) {
	return typeof e == "object" && e !== null && e.$$typeof === fl
}

function Dh(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var Fa = /\/+/g;

function fs(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? Dh("" + e.key) : t.toString(36)
}

function Vl(e, t, n, r, l) {
	var i = typeof e;
	(i === "undefined" || i === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else switch (i) {
		case "string":
		case "number":
			s = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case fl:
				case Eh:
					s = !0
			}
	}
	if (s) return s = e, l = l(s), e = r === "" ? "." + fs(s, 0) : r, Ca(l) ? (n = "", e != null && (n = e.replace(Fa, "$&/") + "/"), Vl(l, t, n, "", function(a) {
		return a
	})) : l != null && (du(l) && (l = $h(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(Fa, "$&/") + "/") + e)), t.push(l)), 1;
	if (s = 0, r = r === "" ? "." : r + ":", Ca(e))
		for (var o = 0; o < e.length; o++) {
			i = e[o];
			var u = r + fs(i, o);
			s += Vl(i, t, n, u, l)
		} else if (u = Rh(e), typeof u == "function")
			for (e = u.call(e), o = 0; !(i = e.next()).done;) i = i.value, u = r + fs(i, o++), s += Vl(i, t, n, u, l);
		else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return s
}

function xl(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return Vl(e, r, "", "", function(i) {
		return t.call(n, i, l++)
	}), r
}

function Lh(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var $e = {
		current: null
	},
	Ul = {
		transition: null
	},
	Ih = {
		ReactCurrentDispatcher: $e,
		ReactCurrentBatchConfig: Ul,
		ReactCurrentOwner: fu
	};

function Nf() {
	throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
	map: xl,
	forEach: function(e, t, n) {
		xl(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return xl(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return xl(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!du(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
Q.Component = mr;
Q.Fragment = _h;
Q.Profiler = Fh;
Q.PureComponent = au;
Q.StrictMode = Ch;
Q.Suspense = Oh;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih;
Q.act = Nf;
Q.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = Sf({}, e.props),
		l = e.key,
		i = e.ref,
		s = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (i = t.ref, s = fu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
		for (u in t) _f.call(t, u) && !Cf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u])
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		o = Array(u);
		for (var a = 0; a < u; a++) o[a] = arguments[a + 2];
		r.children = o
	}
	return {
		$$typeof: fl,
		type: e.type,
		key: l,
		ref: i,
		props: r,
		_owner: s
	}
};
Q.createContext = function(e) {
	return e = {
		$$typeof: Th,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: Nh,
		_context: e
	}, e.Consumer = e
};
Q.createElement = Ff;
Q.createFactory = function(e) {
	var t = Ff.bind(null, e);
	return t.type = e, t
};
Q.createRef = function() {
	return {
		current: null
	}
};
Q.forwardRef = function(e) {
	return {
		$$typeof: Ph,
		render: e
	}
};
Q.isValidElement = du;
Q.lazy = function(e) {
	return {
		$$typeof: jh,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: Lh
	}
};
Q.memo = function(e, t) {
	return {
		$$typeof: Ah,
		type: e,
		compare: t === void 0 ? null : t
	}
};
Q.startTransition = function(e) {
	var t = Ul.transition;
	Ul.transition = {};
	try {
		e()
	} finally {
		Ul.transition = t
	}
};
Q.unstable_act = Nf;
Q.useCallback = function(e, t) {
	return $e.current.useCallback(e, t)
};
Q.useContext = function(e) {
	return $e.current.useContext(e)
};
Q.useDebugValue = function() {};
Q.useDeferredValue = function(e) {
	return $e.current.useDeferredValue(e)
};
Q.useEffect = function(e, t) {
	return $e.current.useEffect(e, t)
};
Q.useId = function() {
	return $e.current.useId()
};
Q.useImperativeHandle = function(e, t, n) {
	return $e.current.useImperativeHandle(e, t, n)
};
Q.useInsertionEffect = function(e, t) {
	return $e.current.useInsertionEffect(e, t)
};
Q.useLayoutEffect = function(e, t) {
	return $e.current.useLayoutEffect(e, t)
};
Q.useMemo = function(e, t) {
	return $e.current.useMemo(e, t)
};
Q.useReducer = function(e, t, n) {
	return $e.current.useReducer(e, t, n)
};
Q.useRef = function(e) {
	return $e.current.useRef(e)
};
Q.useState = function(e) {
	return $e.current.useState(e)
};
Q.useSyncExternalStore = function(e, t, n) {
	return $e.current.useSyncExternalStore(e, t, n)
};
Q.useTransition = function() {
	return $e.current.useTransition()
};
Q.version = "18.3.1";
xf.exports = Q;
var k = xf.exports;
const H = yf(k),
	to = kh({
		__proto__: null,
		default: H
	}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mh = k,
	zh = Symbol.for("react.element"),
	Vh = Symbol.for("react.fragment"),
	Uh = Object.prototype.hasOwnProperty,
	bh = Mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Bh = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Tf(e, t, n) {
	var r, l = {},
		i = null,
		s = null;
	n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
	for (r in t) Uh.call(t, r) && !Bh.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: zh,
		type: e,
		key: i,
		ref: s,
		props: l,
		_owner: bh.current
	}
}
$i.Fragment = Vh;
$i.jsx = Tf;
$i.jsxs = Tf;
gf.exports = $i;
var F = gf.exports,
	no = {},
	Pf = {
		exports: {}
	},
	Ye = {},
	Of = {
		exports: {}
	},
	Af = {};
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
	function t($, U) {
		var B = $.length;
		$.push(U);
		e: for (; 0 < B;) {
			var ne = B - 1 >>> 1,
				ae = $[ne];
			if (0 < l(ae, U)) $[ne] = U, $[B] = ae, B = ne;
			else break e
		}
	}

	function n($) {
		return $.length === 0 ? null : $[0]
	}

	function r($) {
		if ($.length === 0) return null;
		var U = $[0],
			B = $.pop();
		if (B !== U) {
			$[0] = B;
			e: for (var ne = 0, ae = $.length, Dn = ae >>> 1; ne < Dn;) {
				var vt = 2 * (ne + 1) - 1,
					wr = $[vt],
					ot = vt + 1,
					hn = $[ot];
				if (0 > l(wr, B)) ot < ae && 0 > l(hn, wr) ? ($[ne] = hn, $[ot] = B, ne = ot) : ($[ne] = wr, $[vt] = B, ne = vt);
				else if (ot < ae && 0 > l(hn, B)) $[ne] = hn, $[ot] = B, ne = ot;
				else break e
			}
		}
		return U
	}

	function l($, U) {
		var B = $.sortIndex - U.sortIndex;
		return B !== 0 ? B : $.id - U.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var i = performance;
		e.unstable_now = function() {
			return i.now()
		}
	} else {
		var s = Date,
			o = s.now();
		e.unstable_now = function() {
			return s.now() - o
		}
	}
	var u = [],
		a = [],
		d = 1,
		c = null,
		p = 3,
		y = !1,
		S = !1,
		w = !1,
		T = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		f = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function v($) {
		for (var U = n(a); U !== null;) {
			if (U.callback === null) r(a);
			else if (U.startTime <= $) r(a), U.sortIndex = U.expirationTime, t(u, U);
			else break;
			U = n(a)
		}
	}

	function E($) {
		if (w = !1, v($), !S)
			if (n(u) !== null) S = !0, xe(g);
			else {
				var U = n(a);
				U !== null && he(E, U.startTime - $)
			}
	}

	function g($, U) {
		S = !1, w && (w = !1, h(O), O = -1), y = !0;
		var B = p;
		try {
			for (v(U), c = n(u); c !== null && (!(c.expirationTime > U) || $ && !W());) {
				var ne = c.callback;
				if (typeof ne == "function") {
					c.callback = null, p = c.priorityLevel;
					var ae = ne(c.expirationTime <= U);
					U = e.unstable_now(), typeof ae == "function" ? c.callback = ae : c === n(u) && r(u), v(U)
				} else r(u);
				c = n(u)
			}
			if (c !== null) var Dn = !0;
			else {
				var vt = n(a);
				vt !== null && he(E, vt.startTime - U), Dn = !1
			}
			return Dn
		} finally {
			c = null, p = B, y = !1
		}
	}
	var C = !1,
		N = null,
		O = -1,
		M = 5,
		I = -1;

	function W() {
		return !(e.unstable_now() - I < M)
	}

	function z() {
		if (N !== null) {
			var $ = e.unstable_now();
			I = $;
			var U = !0;
			try {
				U = N(!0, $)
			} finally {
				U ? b() : (C = !1, N = null)
			}
		} else C = !1
	}
	var b;
	if (typeof f == "function") b = function() {
		f(z)
	};
	else if (typeof MessageChannel < "u") {
		var Y = new MessageChannel,
			ue = Y.port2;
		Y.port1.onmessage = z, b = function() {
			ue.postMessage(null)
		}
	} else b = function() {
		T(z, 0)
	};

	function xe($) {
		N = $, C || (C = !0, b())
	}

	function he($, U) {
		O = T(function() {
			$(e.unstable_now())
		}, U)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
		$.callback = null
	}, e.unstable_continueExecution = function() {
		S || y || (S = !0, xe(g))
	}, e.unstable_forceFrameRate = function($) {
		0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < $ ? Math.floor(1e3 / $) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return p
	}, e.unstable_getFirstCallbackNode = function() {
		return n(u)
	}, e.unstable_next = function($) {
		switch (p) {
			case 1:
			case 2:
			case 3:
				var U = 3;
				break;
			default:
				U = p
		}
		var B = p;
		p = U;
		try {
			return $()
		} finally {
			p = B
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function($, U) {
		switch ($) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				$ = 3
		}
		var B = p;
		p = $;
		try {
			return U()
		} finally {
			p = B
		}
	}, e.unstable_scheduleCallback = function($, U, B) {
		var ne = e.unstable_now();
		switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? ne + B : ne) : B = ne, $) {
			case 1:
				var ae = -1;
				break;
			case 2:
				ae = 250;
				break;
			case 5:
				ae = 1073741823;
				break;
			case 4:
				ae = 1e4;
				break;
			default:
				ae = 5e3
		}
		return ae = B + ae, $ = {
			id: d++,
			callback: U,
			priorityLevel: $,
			startTime: B,
			expirationTime: ae,
			sortIndex: -1
		}, B > ne ? ($.sortIndex = B, t(a, $), n(u) === null && $ === n(a) && (w ? (h(O), O = -1) : w = !0, he(E, B - ne))) : ($.sortIndex = ae, t(u, $), S || y || (S = !0, xe(g))), $
	}, e.unstable_shouldYield = W, e.unstable_wrapCallback = function($) {
		var U = p;
		return function() {
			var B = p;
			p = U;
			try {
				return $.apply(this, arguments)
			} finally {
				p = B
			}
		}
	}
})(Af);
Of.exports = Af;
var Wh = Of.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hh = k,
	qe = Wh;

function P(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var jf = new Set,
	Hr = {};

function jn(e, t) {
	or(e, t), or(e + "Capture", t)
}

function or(e, t) {
	for (Hr[e] = t, e = 0; e < t.length; e++) jf.add(t[e])
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	ro = Object.prototype.hasOwnProperty,
	Qh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Na = {},
	Ta = {};

function Gh(e) {
	return ro.call(Ta, e) ? !0 : ro.call(Na, e) ? !1 : Qh.test(e) ? Ta[e] = !0 : (Na[e] = !0, !1)
}

function Kh(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function Zh(e, t, n, r) {
	if (t === null || typeof t > "u" || Kh(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
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

function De(e, t, n, r, l, i, s) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	Fe[e] = new De(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	Fe[t] = new De(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	Fe[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	Fe[e] = new De(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	Fe[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	Fe[e] = new De(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	Fe[e] = new De(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	Fe[e] = new De(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	Fe[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var pu = /[\-:]([a-z])/g;

function hu(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(pu, hu);
	Fe[t] = new De(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(pu, hu);
	Fe[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(pu, hu);
	Fe[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	Fe[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Fe.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	Fe[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function mu(e, t, n, r) {
	var l = Fe.hasOwnProperty(t) ? Fe[t] : null;
	(l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zh(t, n, l, r) && (n = null), r || l === null ? Gh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var It = Hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	wl = Symbol.for("react.element"),
	Vn = Symbol.for("react.portal"),
	Un = Symbol.for("react.fragment"),
	vu = Symbol.for("react.strict_mode"),
	lo = Symbol.for("react.profiler"),
	Rf = Symbol.for("react.provider"),
	$f = Symbol.for("react.context"),
	yu = Symbol.for("react.forward_ref"),
	io = Symbol.for("react.suspense"),
	so = Symbol.for("react.suspense_list"),
	gu = Symbol.for("react.memo"),
	Bt = Symbol.for("react.lazy"),
	Df = Symbol.for("react.offscreen"),
	Pa = Symbol.iterator;

function Sr(e) {
	return e === null || typeof e != "object" ? null : (e = Pa && e[Pa] || e["@@iterator"], typeof e == "function" ? e : null)
}
var se = Object.assign,
	ds;

function Ar(e) {
	if (ds === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		ds = t && t[1] || ""
	}
	return `
` + ds + e
}
var ps = !1;

function hs(e, t) {
	if (!e || ps) return "";
	ps = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (a) {
					var r = a
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (a) {
					r = a
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (a) {
				r = a
			}
			e()
		}
	} catch (a) {
		if (a && r && typeof a.stack == "string") {
			for (var l = a.stack.split(`
`), i = r.stack.split(`
`), s = l.length - 1, o = i.length - 1; 1 <= s && 0 <= o && l[s] !== i[o];) o--;
			for (; 1 <= s && 0 <= o; s--, o--)
				if (l[s] !== i[o]) {
					if (s !== 1 || o !== 1)
						do
							if (s--, o--, 0 > o || l[s] !== i[o]) {
								var u = `
` + l[s].replace(" at new ", " at ");
								return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
							} while (1 <= s && 0 <= o);
					break
				}
		}
	} finally {
		ps = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? Ar(e) : ""
}

function qh(e) {
	switch (e.tag) {
		case 5:
			return Ar(e.type);
		case 16:
			return Ar("Lazy");
		case 13:
			return Ar("Suspense");
		case 19:
			return Ar("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = hs(e.type, !1), e;
		case 11:
			return e = hs(e.type.render, !1), e;
		case 1:
			return e = hs(e.type, !0), e;
		default:
			return ""
	}
}

function oo(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Un:
			return "Fragment";
		case Vn:
			return "Portal";
		case lo:
			return "Profiler";
		case vu:
			return "StrictMode";
		case io:
			return "Suspense";
		case so:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case $f:
			return (e.displayName || "Context") + ".Consumer";
		case Rf:
			return (e._context.displayName || "Context") + ".Provider";
		case yu:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case gu:
			return t = e.displayName || null, t !== null ? t : oo(e.type) || "Memo";
		case Bt:
			t = e._payload, e = e._init;
			try {
				return oo(e(t))
			} catch {}
	}
	return null
}

function Yh(e) {
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
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
			return oo(t);
		case 8:
			return t === vu ? "StrictMode" : "Mode";
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
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function un(e) {
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

function Lf(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Xh(e) {
	var t = Lf(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var l = n.get,
			i = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return l.call(this)
			},
			set: function(s) {
				r = "" + s, i.call(this, s)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return r
			},
			setValue: function(s) {
				r = "" + s
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function Sl(e) {
	e._valueTracker || (e._valueTracker = Xh(e))
}

function If(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = Lf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ri(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function uo(e, t) {
	var n = t.checked;
	return se({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function Oa(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = un(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function Mf(e, t) {
	t = t.checked, t != null && mu(e, "checked", t, !1)
}

function ao(e, t) {
	Mf(e, t);
	var n = un(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? co(e, t.type, n) : t.hasOwnProperty("defaultValue") && co(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Aa(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function co(e, t, n) {
	(t !== "number" || ri(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var jr = Array.isArray;

function er(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
		for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + un(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				e[l].selected = !0, r && (e[l].defaultSelected = !0);
				return
			}
			t !== null || e[l].disabled || (t = e[l])
		}
		t !== null && (t.selected = !0)
	}
}

function fo(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
	return se({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function ja(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(P(92));
			if (jr(n)) {
				if (1 < n.length) throw Error(P(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: un(n)
	}
}

function zf(e, t) {
	var n = un(t.value),
		r = un(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ra(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Vf(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function po(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? Vf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var kl, Uf = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, r, l)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (kl = kl || document.createElement("div"), kl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Qr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var Dr = {
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
	},
	Jh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function(e) {
	Jh.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e]
	})
});

function bf(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px"
}

function Bf(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				l = bf(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
		}
}
var em = se({
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

function ho(e, t) {
	if (t) {
		if (em[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(P(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(P(62))
	}
}

function mo(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var vo = null;

function xu(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var yo = null,
	tr = null,
	nr = null;

function $a(e) {
	if (e = hl(e)) {
		if (typeof yo != "function") throw Error(P(280));
		var t = e.stateNode;
		t && (t = zi(t), yo(e.stateNode, e.type, t))
	}
}

function Wf(e) {
	tr ? nr ? nr.push(e) : nr = [e] : tr = e
}

function Hf() {
	if (tr) {
		var e = tr,
			t = nr;
		if (nr = tr = null, $a(e), t)
			for (e = 0; e < t.length; e++) $a(t[e])
	}
}

function Qf(e, t) {
	return e(t)
}

function Gf() {}
var ms = !1;

function Kf(e, t, n) {
	if (ms) return e(t, n);
	ms = !0;
	try {
		return Qf(e, t, n)
	} finally {
		ms = !1, (tr !== null || nr !== null) && (Gf(), Hf())
	}
}

function Gr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = zi(n);
	if (r === null) return null;
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
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(P(231, t, typeof n));
	return n
}
var go = !1;
if (Rt) try {
	var kr = {};
	Object.defineProperty(kr, "passive", {
		get: function() {
			go = !0
		}
	}), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr)
} catch {
	go = !1
}

function tm(e, t, n, r, l, i, s, o, u) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, a)
	} catch (d) {
		this.onError(d)
	}
}
var Lr = !1,
	li = null,
	ii = !1,
	xo = null,
	nm = {
		onError: function(e) {
			Lr = !0, li = e
		}
	};

function rm(e, t, n, r, l, i, s, o, u) {
	Lr = !1, li = null, tm.apply(nm, arguments)
}

function lm(e, t, n, r, l, i, s, o, u) {
	if (rm.apply(this, arguments), Lr) {
		if (Lr) {
			var a = li;
			Lr = !1, li = null
		} else throw Error(P(198));
		ii || (ii = !0, xo = a)
	}
}

function Rn(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function Zf(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function Da(e) {
	if (Rn(e) !== e) throw Error(P(188))
}

function im(e) {
	var t = e.alternate;
	if (!t) {
		if (t = Rn(e), t === null) throw Error(P(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t;;) {
		var l = n.return;
		if (l === null) break;
		var i = l.alternate;
		if (i === null) {
			if (r = l.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (l.child === i.child) {
			for (i = l.child; i;) {
				if (i === n) return Da(l), e;
				if (i === r) return Da(l), t;
				i = i.sibling
			}
			throw Error(P(188))
		}
		if (n.return !== r.return) n = l, r = i;
		else {
			for (var s = !1, o = l.child; o;) {
				if (o === n) {
					s = !0, n = l, r = i;
					break
				}
				if (o === r) {
					s = !0, r = l, n = i;
					break
				}
				o = o.sibling
			}
			if (!s) {
				for (o = i.child; o;) {
					if (o === n) {
						s = !0, n = i, r = l;
						break
					}
					if (o === r) {
						s = !0, r = i, n = l;
						break
					}
					o = o.sibling
				}
				if (!s) throw Error(P(189))
			}
		}
		if (n.alternate !== r) throw Error(P(190))
	}
	if (n.tag !== 3) throw Error(P(188));
	return n.stateNode.current === n ? e : t
}

function qf(e) {
	return e = im(e), e !== null ? Yf(e) : null
}

function Yf(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = Yf(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var Xf = qe.unstable_scheduleCallback,
	La = qe.unstable_cancelCallback,
	sm = qe.unstable_shouldYield,
	om = qe.unstable_requestPaint,
	ce = qe.unstable_now,
	um = qe.unstable_getCurrentPriorityLevel,
	wu = qe.unstable_ImmediatePriority,
	Jf = qe.unstable_UserBlockingPriority,
	si = qe.unstable_NormalPriority,
	am = qe.unstable_LowPriority,
	ed = qe.unstable_IdlePriority,
	Di = null,
	kt = null;

function cm(e) {
	if (kt && typeof kt.onCommitFiberRoot == "function") try {
		kt.onCommitFiberRoot(Di, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var pt = Math.clz32 ? Math.clz32 : pm,
	fm = Math.log,
	dm = Math.LN2;

function pm(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (fm(e) / dm | 0) | 0
}
var El = 64,
	_l = 4194304;

function Rr(e) {
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

function oi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		i = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var o = s & ~l;
		o !== 0 ? r = Rr(o) : (i &= s, i !== 0 && (r = Rr(i)))
	} else s = n & ~l, s !== 0 ? r = Rr(s) : i !== 0 && (r = Rr(i));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - pt(t), l = 1 << n, r |= e[n], t &= ~l;
	return r
}

function hm(e, t) {
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

function mm(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
		var s = 31 - pt(i),
			o = 1 << s,
			u = l[s];
		u === -1 ? (!(o & n) || o & r) && (l[s] = hm(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o
	}
}

function wo(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function td() {
	var e = El;
	return El <<= 1, !(El & 4194240) && (El = 64), e
}

function vs(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function dl(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n
}

function vm(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var l = 31 - pt(n),
			i = 1 << l;
		t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
	}
}

function Su(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - pt(n),
			l = 1 << r;
		l & t | e[r] & t && (e[r] |= t), n &= ~l
	}
}
var q = 0;

function nd(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var rd, ku, ld, id, sd, So = !1,
	Cl = [],
	Xt = null,
	Jt = null,
	en = null,
	Kr = new Map,
	Zr = new Map,
	Ht = [],
	ym = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ia(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Xt = null;
			break;
		case "dragenter":
		case "dragleave":
			Jt = null;
			break;
		case "mouseover":
		case "mouseout":
			en = null;
			break;
		case "pointerover":
		case "pointerout":
			Kr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Zr.delete(t.pointerId)
	}
}

function Er(e, t, n, r, l, i) {
	return e === null || e.nativeEvent !== i ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: i,
		targetContainers: [l]
	}, t !== null && (t = hl(t), t !== null && ku(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function gm(e, t, n, r, l) {
	switch (t) {
		case "focusin":
			return Xt = Er(Xt, e, t, n, r, l), !0;
		case "dragenter":
			return Jt = Er(Jt, e, t, n, r, l), !0;
		case "mouseover":
			return en = Er(en, e, t, n, r, l), !0;
		case "pointerover":
			var i = l.pointerId;
			return Kr.set(i, Er(Kr.get(i) || null, e, t, n, r, l)), !0;
		case "gotpointercapture":
			return i = l.pointerId, Zr.set(i, Er(Zr.get(i) || null, e, t, n, r, l)), !0
	}
	return !1
}

function od(e) {
	var t = gn(e.target);
	if (t !== null) {
		var n = Rn(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = Zf(n), t !== null) {
					e.blockedOn = t, sd(e.priority, function() {
						ld(n)
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

function bl(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			vo = r, n.target.dispatchEvent(r), vo = null
		} else return t = hl(n), t !== null && ku(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function Ma(e, t, n) {
	bl(e) && n.delete(t)
}

function xm() {
	So = !1, Xt !== null && bl(Xt) && (Xt = null), Jt !== null && bl(Jt) && (Jt = null), en !== null && bl(en) && (en = null), Kr.forEach(Ma), Zr.forEach(Ma)
}

function _r(e, t) {
	e.blockedOn === t && (e.blockedOn = null, So || (So = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, xm)))
}

function qr(e) {
	function t(l) {
		return _r(l, e)
	}
	if (0 < Cl.length) {
		_r(Cl[0], e);
		for (var n = 1; n < Cl.length; n++) {
			var r = Cl[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (Xt !== null && _r(Xt, e), Jt !== null && _r(Jt, e), en !== null && _r(en, e), Kr.forEach(t), Zr.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null);) od(n), n.blockedOn === null && Ht.shift()
}
var rr = It.ReactCurrentBatchConfig,
	ui = !0;

function wm(e, t, n, r) {
	var l = q,
		i = rr.transition;
	rr.transition = null;
	try {
		q = 1, Eu(e, t, n, r)
	} finally {
		q = l, rr.transition = i
	}
}

function Sm(e, t, n, r) {
	var l = q,
		i = rr.transition;
	rr.transition = null;
	try {
		q = 4, Eu(e, t, n, r)
	} finally {
		q = l, rr.transition = i
	}
}

function Eu(e, t, n, r) {
	if (ui) {
		var l = ko(e, t, n, r);
		if (l === null) Fs(e, t, r, ai, n), Ia(e, r);
		else if (gm(l, e, t, n, r)) r.stopPropagation();
		else if (Ia(e, r), t & 4 && -1 < ym.indexOf(e)) {
			for (; l !== null;) {
				var i = hl(l);
				if (i !== null && rd(i), i = ko(e, t, n, r), i === null && Fs(e, t, r, ai, n), i === l) break;
				l = i
			}
			l !== null && r.stopPropagation()
		} else Fs(e, t, r, null, n)
	}
}
var ai = null;

function ko(e, t, n, r) {
	if (ai = null, e = xu(r), e = gn(e), e !== null)
		if (t = Rn(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = Zf(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return ai = e, null
}

function ud(e) {
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
			switch (um()) {
				case wu:
					return 1;
				case Jf:
					return 4;
				case si:
				case am:
					return 16;
				case ed:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var Kt = null,
	_u = null,
	Bl = null;

function ad() {
	if (Bl) return Bl;
	var e, t = _u,
		n = t.length,
		r, l = "value" in Kt ? Kt.value : Kt.textContent,
		i = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
	return Bl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Wl(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Fl() {
	return !0
}

function za() {
	return !1
}

function Xe(e) {
	function t(n, r, l, i, s) {
		this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
		for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
		return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fl : za, this.isPropagationStopped = za, this
	}
	return se(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fl)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fl)
		},
		persist: function() {},
		isPersistent: Fl
	}), t
}
var vr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Cu = Xe(vr),
	pl = se({}, vr, {
		view: 0,
		detail: 0
	}),
	km = Xe(pl),
	ys, gs, Cr, Li = se({}, pl, {
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
		getModifierState: Fu,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Cr && (Cr && e.type === "mousemove" ? (ys = e.screenX - Cr.screenX, gs = e.screenY - Cr.screenY) : gs = ys = 0, Cr = e), ys)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : gs
		}
	}),
	Va = Xe(Li),
	Em = se({}, Li, {
		dataTransfer: 0
	}),
	_m = Xe(Em),
	Cm = se({}, pl, {
		relatedTarget: 0
	}),
	xs = Xe(Cm),
	Fm = se({}, vr, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	Nm = Xe(Fm),
	Tm = se({}, vr, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	Pm = Xe(Tm),
	Om = se({}, vr, {
		data: 0
	}),
	Ua = Xe(Om),
	Am = {
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
	},
	jm = {
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
	},
	Rm = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function $m(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Rm[e]) ? !!t[e] : !1
}

function Fu() {
	return $m
}
var Dm = se({}, pl, {
		key: function(e) {
			if (e.key) {
				var t = Am[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = Wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jm[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Fu,
		charCode: function(e) {
			return e.type === "keypress" ? Wl(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? Wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	Lm = Xe(Dm),
	Im = se({}, Li, {
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
	}),
	ba = Xe(Im),
	Mm = se({}, pl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Fu
	}),
	zm = Xe(Mm),
	Vm = se({}, vr, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	Um = Xe(Vm),
	bm = se({}, Li, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	Bm = Xe(bm),
	Wm = [9, 13, 27, 32],
	Nu = Rt && "CompositionEvent" in window,
	Ir = null;
Rt && "documentMode" in document && (Ir = document.documentMode);
var Hm = Rt && "TextEvent" in window && !Ir,
	cd = Rt && (!Nu || Ir && 8 < Ir && 11 >= Ir),
	Ba = " ",
	Wa = !1;

function fd(e, t) {
	switch (e) {
		case "keyup":
			return Wm.indexOf(t.keyCode) !== -1;
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

function dd(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var bn = !1;

function Qm(e, t) {
	switch (e) {
		case "compositionend":
			return dd(t);
		case "keypress":
			return t.which !== 32 ? null : (Wa = !0, Ba);
		case "textInput":
			return e = t.data, e === Ba && Wa ? null : e;
		default:
			return null
	}
}

function Gm(e, t) {
	if (bn) return e === "compositionend" || !Nu && fd(e, t) ? (e = ad(), Bl = _u = Kt = null, bn = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return cd && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var Km = {
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

function Ha(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Km[e.type] : t === "textarea"
}

function pd(e, t, n, r) {
	Wf(r), t = ci(t, "onChange"), 0 < t.length && (n = new Cu("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var Mr = null,
	Yr = null;

function Zm(e) {
	_d(e, 0)
}

function Ii(e) {
	var t = Hn(e);
	if (If(t)) return e
}

function qm(e, t) {
	if (e === "change") return t
}
var hd = !1;
if (Rt) {
	var ws;
	if (Rt) {
		var Ss = "oninput" in document;
		if (!Ss) {
			var Qa = document.createElement("div");
			Qa.setAttribute("oninput", "return;"), Ss = typeof Qa.oninput == "function"
		}
		ws = Ss
	} else ws = !1;
	hd = ws && (!document.documentMode || 9 < document.documentMode)
}

function Ga() {
	Mr && (Mr.detachEvent("onpropertychange", md), Yr = Mr = null)
}

function md(e) {
	if (e.propertyName === "value" && Ii(Yr)) {
		var t = [];
		pd(t, Yr, e, xu(e)), Kf(Zm, t)
	}
}

function Ym(e, t, n) {
	e === "focusin" ? (Ga(), Mr = t, Yr = n, Mr.attachEvent("onpropertychange", md)) : e === "focusout" && Ga()
}

function Xm(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ii(Yr)
}

function Jm(e, t) {
	if (e === "click") return Ii(t)
}

function e0(e, t) {
	if (e === "input" || e === "change") return Ii(t)
}

function t0(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var mt = typeof Object.is == "function" ? Object.is : t0;

function Xr(e, t) {
	if (mt(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!ro.call(t, l) || !mt(e[l], t[l])) return !1
	}
	return !0
}

function Ka(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function Za(e, t) {
	var n = Ka(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Ka(n)
	}
}

function vd(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function yd() {
	for (var e = window, t = ri(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = ri(e.document)
	}
	return t
}

function Tu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function n0(e) {
	var t = yd(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && vd(n.ownerDocument.documentElement, n)) {
		if (r !== null && Tu(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var l = n.textContent.length,
					i = Math.min(r.start, l);
				r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Za(n, i);
				var s = Za(n, r);
				l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var r0 = Rt && "documentMode" in document && 11 >= document.documentMode,
	Bn = null,
	Eo = null,
	zr = null,
	_o = !1;

function qa(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	_o || Bn == null || Bn !== ri(r) || (r = Bn, "selectionStart" in r && Tu(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), zr && Xr(zr, r) || (zr = r, r = ci(Eo, "onSelect"), 0 < r.length && (t = new Cu("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = Bn)))
}

function Nl(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Wn = {
		animationend: Nl("Animation", "AnimationEnd"),
		animationiteration: Nl("Animation", "AnimationIteration"),
		animationstart: Nl("Animation", "AnimationStart"),
		transitionend: Nl("Transition", "TransitionEnd")
	},
	ks = {},
	gd = {};
Rt && (gd = document.createElement("div").style, "AnimationEvent" in window || (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation), "TransitionEvent" in window || delete Wn.transitionend.transition);

function Mi(e) {
	if (ks[e]) return ks[e];
	if (!Wn[e]) return e;
	var t = Wn[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in gd) return ks[e] = t[n];
	return e
}
var xd = Mi("animationend"),
	wd = Mi("animationiteration"),
	Sd = Mi("animationstart"),
	kd = Mi("transitionend"),
	Ed = new Map,
	Ya = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function cn(e, t) {
	Ed.set(e, t), jn(t, [e])
}
for (var Es = 0; Es < Ya.length; Es++) {
	var _s = Ya[Es],
		l0 = _s.toLowerCase(),
		i0 = _s[0].toUpperCase() + _s.slice(1);
	cn(l0, "on" + i0)
}
cn(xd, "onAnimationEnd");
cn(wd, "onAnimationIteration");
cn(Sd, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(kd, "onTransitionEnd");
or("onMouseEnter", ["mouseout", "mouseover"]);
or("onMouseLeave", ["mouseout", "mouseover"]);
or("onPointerEnter", ["pointerout", "pointerover"]);
or("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	s0 = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));

function Xa(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, lm(r, t, void 0, e), e.currentTarget = null
}

function _d(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var o = r[s],
						u = o.instance,
						a = o.currentTarget;
					if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
					Xa(l, o, a), i = u
				} else
					for (s = 0; s < r.length; s++) {
						if (o = r[s], u = o.instance, a = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
						Xa(l, o, a), i = u
					}
		}
	}
	if (ii) throw e = xo, ii = !1, xo = null, e
}

function J(e, t) {
	var n = t[Po];
	n === void 0 && (n = t[Po] = new Set);
	var r = e + "__bubble";
	n.has(r) || (Cd(t, e, 2, !1), n.add(r))
}

function Cs(e, t, n) {
	var r = 0;
	t && (r |= 4), Cd(n, e, r, t)
}
var Tl = "_reactListening" + Math.random().toString(36).slice(2);

function Jr(e) {
	if (!e[Tl]) {
		e[Tl] = !0, jf.forEach(function(n) {
			n !== "selectionchange" && (s0.has(n) || Cs(n, !1, e), Cs(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Tl] || (t[Tl] = !0, Cs("selectionchange", !1, t))
	}
}

function Cd(e, t, n, r) {
	switch (ud(t)) {
		case 1:
			var l = wm;
			break;
		case 4:
			l = Sm;
			break;
		default:
			l = Eu
	}
	n = l.bind(null, t, n, e), l = void 0, !go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: l
	}) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
		passive: l
	}) : e.addEventListener(t, n, !1)
}

function Fs(e, t, n, r, l) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
		if (r === null) return;
		var s = r.tag;
		if (s === 3 || s === 4) {
			var o = r.stateNode.containerInfo;
			if (o === l || o.nodeType === 8 && o.parentNode === l) break;
			if (s === 4)
				for (s = r.return; s !== null;) {
					var u = s.tag;
					if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
					s = s.return
				}
			for (; o !== null;) {
				if (s = gn(o), s === null) return;
				if (u = s.tag, u === 5 || u === 6) {
					r = i = s;
					continue e
				}
				o = o.parentNode
			}
		}
		r = r.return
	}
	Kf(function() {
		var a = i,
			d = xu(n),
			c = [];
		e: {
			var p = Ed.get(e);
			if (p !== void 0) {
				var y = Cu,
					S = e;
				switch (e) {
					case "keypress":
						if (Wl(n) === 0) break e;
					case "keydown":
					case "keyup":
						y = Lm;
						break;
					case "focusin":
						S = "focus", y = xs;
						break;
					case "focusout":
						S = "blur", y = xs;
						break;
					case "beforeblur":
					case "afterblur":
						y = xs;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						y = Va;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						y = _m;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						y = zm;
						break;
					case xd:
					case wd:
					case Sd:
						y = Nm;
						break;
					case kd:
						y = Um;
						break;
					case "scroll":
						y = km;
						break;
					case "wheel":
						y = Bm;
						break;
					case "copy":
					case "cut":
					case "paste":
						y = Pm;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						y = ba
				}
				var w = (t & 4) !== 0,
					T = !w && e === "scroll",
					h = w ? p !== null ? p + "Capture" : null : p;
				w = [];
				for (var f = a, v; f !== null;) {
					v = f;
					var E = v.stateNode;
					if (v.tag === 5 && E !== null && (v = E, h !== null && (E = Gr(f, h), E != null && w.push(el(f, E, v)))), T) break;
					f = f.return
				}
				0 < w.length && (p = new y(p, S, null, n, d), c.push({
					event: p,
					listeners: w
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== vo && (S = n.relatedTarget || n.fromElement) && (gn(S) || S[$t])) break e;
				if ((y || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (S = n.relatedTarget || n.toElement, y = a, S = S ? gn(S) : null, S !== null && (T = Rn(S), S !== T || S.tag !== 5 && S.tag !== 6) && (S = null)) : (y = null, S = a), y !== S)) {
					if (w = Va, E = "onMouseLeave", h = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (w = ba, E = "onPointerLeave", h = "onPointerEnter", f = "pointer"), T = y == null ? p : Hn(y), v = S == null ? p : Hn(S), p = new w(E, f + "leave", y, n, d), p.target = T, p.relatedTarget = v, E = null, gn(d) === a && (w = new w(h, f + "enter", S, n, d), w.target = v, w.relatedTarget = T, E = w), T = E, y && S) t: {
						for (w = y, h = S, f = 0, v = w; v; v = In(v)) f++;
						for (v = 0, E = h; E; E = In(E)) v++;
						for (; 0 < f - v;) w = In(w),
						f--;
						for (; 0 < v - f;) h = In(h),
						v--;
						for (; f--;) {
							if (w === h || h !== null && w === h.alternate) break t;
							w = In(w), h = In(h)
						}
						w = null
					}
					else w = null;
					y !== null && Ja(c, p, y, w, !1), S !== null && T !== null && Ja(c, T, S, w, !0)
				}
			}
			e: {
				if (p = a ? Hn(a) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var g = qm;
				else if (Ha(p))
					if (hd) g = e0;
					else {
						g = Xm;
						var C = Ym
					}
				else(y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (g = Jm);
				if (g && (g = g(e, a))) {
					pd(c, g, n, d);
					break e
				}
				C && C(e, p, a),
				e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && co(p, "number", p.value)
			}
			switch (C = a ? Hn(a) : window, e) {
				case "focusin":
					(Ha(C) || C.contentEditable === "true") && (Bn = C, Eo = a, zr = null);
					break;
				case "focusout":
					zr = Eo = Bn = null;
					break;
				case "mousedown":
					_o = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					_o = !1, qa(c, n, d);
					break;
				case "selectionchange":
					if (r0) break;
				case "keydown":
				case "keyup":
					qa(c, n, d)
			}
			var N;
			if (Nu) e: {
				switch (e) {
					case "compositionstart":
						var O = "onCompositionStart";
						break e;
					case "compositionend":
						O = "onCompositionEnd";
						break e;
					case "compositionupdate":
						O = "onCompositionUpdate";
						break e
				}
				O = void 0
			}
			else bn ? fd(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");O && (cd && n.locale !== "ko" && (bn || O !== "onCompositionStart" ? O === "onCompositionEnd" && bn && (N = ad()) : (Kt = d, _u = "value" in Kt ? Kt.value : Kt.textContent, bn = !0)), C = ci(a, O), 0 < C.length && (O = new Ua(O, e, null, n, d), c.push({
				event: O,
				listeners: C
			}), N ? O.data = N : (N = dd(n), N !== null && (O.data = N)))),
			(N = Hm ? Qm(e, n) : Gm(e, n)) && (a = ci(a, "onBeforeInput"), 0 < a.length && (d = new Ua("onBeforeInput", "beforeinput", null, n, d), c.push({
				event: d,
				listeners: a
			}), d.data = N))
		}
		_d(c, t)
	})
}

function el(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function ci(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var l = e,
			i = l.stateNode;
		l.tag === 5 && i !== null && (l = i, i = Gr(e, n), i != null && r.unshift(el(e, i, l)), i = Gr(e, t), i != null && r.push(el(e, i, l))), e = e.return
	}
	return r
}

function In(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function Ja(e, t, n, r, l) {
	for (var i = t._reactName, s = []; n !== null && n !== r;) {
		var o = n,
			u = o.alternate,
			a = o.stateNode;
		if (u !== null && u === r) break;
		o.tag === 5 && a !== null && (o = a, l ? (u = Gr(n, i), u != null && s.unshift(el(n, u, o))) : l || (u = Gr(n, i), u != null && s.push(el(n, u, o)))), n = n.return
	}
	s.length !== 0 && e.push({
		event: t,
		listeners: s
	})
}
var o0 = /\r\n?/g,
	u0 = /\u0000|\uFFFD/g;

function ec(e) {
	return (typeof e == "string" ? e : "" + e).replace(o0, `
`).replace(u0, "")
}

function Pl(e, t, n) {
	if (t = ec(t), ec(e) !== t && n) throw Error(P(425))
}

function fi() {}
var Co = null,
	Fo = null;

function No(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
	a0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	tc = typeof Promise == "function" ? Promise : void 0,
	c0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof tc < "u" ? function(e) {
		return tc.resolve(null).then(e).catch(f0)
	} : To;

function f0(e) {
	setTimeout(function() {
		throw e
	})
}

function Ns(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if (e.removeChild(n), l && l.nodeType === 8)
			if (n = l.data, n === "/$") {
				if (r === 0) {
					e.removeChild(l), qr(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = l
	} while (n);
	qr(t)
}

function tn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function nc(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var yr = Math.random().toString(36).slice(2),
	wt = "__reactFiber$" + yr,
	tl = "__reactProps$" + yr,
	$t = "__reactContainer$" + yr,
	Po = "__reactEvents$" + yr,
	d0 = "__reactListeners$" + yr,
	p0 = "__reactHandles$" + yr;

function gn(e) {
	var t = e[wt];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[$t] || n[wt]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = nc(e); e !== null;) {
					if (n = e[wt]) return n;
					e = nc(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function hl(e) {
	return e = e[wt] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Hn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(P(33))
}

function zi(e) {
	return e[tl] || null
}
var Oo = [],
	Qn = -1;

function fn(e) {
	return {
		current: e
	}
}

function te(e) {
	0 > Qn || (e.current = Oo[Qn], Oo[Qn] = null, Qn--)
}

function X(e, t) {
	Qn++, Oo[Qn] = e.current, e.current = t
}
var an = {},
	Oe = fn(an),
	be = fn(!1),
	Nn = an;

function ur(e, t) {
	var n = e.type.contextTypes;
	if (!n) return an;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		i;
	for (i in n) l[i] = t[i];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Be(e) {
	return e = e.childContextTypes, e != null
}

function di() {
	te(be), te(Oe)
}

function rc(e, t, n) {
	if (Oe.current !== an) throw Error(P(168));
	X(Oe, t), X(be, n)
}

function Fd(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var l in r)
		if (!(l in t)) throw Error(P(108, Yh(e) || "Unknown", l));
	return se({}, n, r)
}

function pi(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, Nn = Oe.current, X(Oe, e), X(be, be.current), !0
}

function lc(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(P(169));
	n ? (e = Fd(e, t, Nn), r.__reactInternalMemoizedMergedChildContext = e, te(be), te(Oe), X(Oe, e)) : te(be), X(be, n)
}
var Nt = null,
	Vi = !1,
	Ts = !1;

function Nd(e) {
	Nt === null ? Nt = [e] : Nt.push(e)
}

function h0(e) {
	Vi = !0, Nd(e)
}

function dn() {
	if (!Ts && Nt !== null) {
		Ts = !0;
		var e = 0,
			t = q;
		try {
			var n = Nt;
			for (q = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			Nt = null, Vi = !1
		} catch (l) {
			throw Nt !== null && (Nt = Nt.slice(e + 1)), Xf(wu, dn), l
		} finally {
			q = t, Ts = !1
		}
	}
	return null
}
var Gn = [],
	Kn = 0,
	hi = null,
	mi = 0,
	Je = [],
	et = 0,
	Tn = null,
	Tt = 1,
	Pt = "";

function mn(e, t) {
	Gn[Kn++] = mi, Gn[Kn++] = hi, hi = e, mi = t
}

function Td(e, t, n) {
	Je[et++] = Tt, Je[et++] = Pt, Je[et++] = Tn, Tn = e;
	var r = Tt;
	e = Pt;
	var l = 32 - pt(r) - 1;
	r &= ~(1 << l), n += 1;
	var i = 32 - pt(t) + l;
	if (30 < i) {
		var s = l - l % 5;
		i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, Tt = 1 << 32 - pt(t) + l | n << l | r, Pt = i + e
	} else Tt = 1 << i | n << l | r, Pt = e
}

function Pu(e) {
	e.return !== null && (mn(e, 1), Td(e, 1, 0))
}

function Ou(e) {
	for (; e === hi;) hi = Gn[--Kn], Gn[Kn] = null, mi = Gn[--Kn], Gn[Kn] = null;
	for (; e === Tn;) Tn = Je[--et], Je[et] = null, Pt = Je[--et], Je[et] = null, Tt = Je[--et], Je[et] = null
}
var Ze = null,
	Ge = null,
	re = !1,
	ft = null;

function Pd(e, t) {
	var n = nt(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ic(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ge = tn(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ge = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? {
				id: Tt,
				overflow: Pt
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, Ge = null, !0) : !1;
		default:
			return !1
	}
}

function Ao(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function jo(e) {
	if (re) {
		var t = Ge;
		if (t) {
			var n = t;
			if (!ic(e, t)) {
				if (Ao(e)) throw Error(P(418));
				t = tn(n.nextSibling);
				var r = Ze;
				t && ic(e, t) ? Pd(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Ze = e)
			}
		} else {
			if (Ao(e)) throw Error(P(418));
			e.flags = e.flags & -4097 | 2, re = !1, Ze = e
		}
	}
}

function sc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	Ze = e
}

function Ol(e) {
	if (e !== Ze) return !1;
	if (!re) return sc(e), re = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps)), t && (t = Ge)) {
		if (Ao(e)) throw Od(), Error(P(418));
		for (; t;) Pd(e, t), t = tn(t.nextSibling)
	}
	if (sc(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Ge = tn(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			Ge = null
		}
	} else Ge = Ze ? tn(e.stateNode.nextSibling) : null;
	return !0
}

function Od() {
	for (var e = Ge; e;) e = tn(e.nextSibling)
}

function ar() {
	Ge = Ze = null, re = !1
}

function Au(e) {
	ft === null ? ft = [e] : ft.push(e)
}
var m0 = It.ReactCurrentBatchConfig;

function Fr(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(P(309));
				var r = n.stateNode
			}
			if (!r) throw Error(P(147, e));
			var l = r,
				i = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
				var o = l.refs;
				s === null ? delete o[i] : o[i] = s
			}, t._stringRef = i, t)
		}
		if (typeof e != "string") throw Error(P(284));
		if (!n._owner) throw Error(P(290, e))
	}
	return e
}

function Al(e, t) {
	throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function oc(e) {
	var t = e._init;
	return t(e._payload)
}

function Ad(e) {
	function t(h, f) {
		if (e) {
			var v = h.deletions;
			v === null ? (h.deletions = [f], h.flags |= 16) : v.push(f)
		}
	}

	function n(h, f) {
		if (!e) return null;
		for (; f !== null;) t(h, f), f = f.sibling;
		return null
	}

	function r(h, f) {
		for (h = new Map; f !== null;) f.key !== null ? h.set(f.key, f) : h.set(f.index, f), f = f.sibling;
		return h
	}

	function l(h, f) {
		return h = sn(h, f), h.index = 0, h.sibling = null, h
	}

	function i(h, f, v) {
		return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < f ? (h.flags |= 2, f) : v) : (h.flags |= 2, f)) : (h.flags |= 1048576, f)
	}

	function s(h) {
		return e && h.alternate === null && (h.flags |= 2), h
	}

	function o(h, f, v, E) {
		return f === null || f.tag !== 6 ? (f = Ds(v, h.mode, E), f.return = h, f) : (f = l(f, v), f.return = h, f)
	}

	function u(h, f, v, E) {
		var g = v.type;
		return g === Un ? d(h, f, v.props.children, E, v.key) : f !== null && (f.elementType === g || typeof g == "object" && g !== null && g.$$typeof === Bt && oc(g) === f.type) ? (E = l(f, v.props), E.ref = Fr(h, f, v), E.return = h, E) : (E = Yl(v.type, v.key, v.props, null, h.mode, E), E.ref = Fr(h, f, v), E.return = h, E)
	}

	function a(h, f, v, E) {
		return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = Ls(v, h.mode, E), f.return = h, f) : (f = l(f, v.children || []), f.return = h, f)
	}

	function d(h, f, v, E, g) {
		return f === null || f.tag !== 7 ? (f = En(v, h.mode, E, g), f.return = h, f) : (f = l(f, v), f.return = h, f)
	}

	function c(h, f, v) {
		if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ds("" + f, h.mode, v), f.return = h, f;
		if (typeof f == "object" && f !== null) {
			switch (f.$$typeof) {
				case wl:
					return v = Yl(f.type, f.key, f.props, null, h.mode, v), v.ref = Fr(h, null, f), v.return = h, v;
				case Vn:
					return f = Ls(f, h.mode, v), f.return = h, f;
				case Bt:
					var E = f._init;
					return c(h, E(f._payload), v)
			}
			if (jr(f) || Sr(f)) return f = En(f, h.mode, v, null), f.return = h, f;
			Al(h, f)
		}
		return null
	}

	function p(h, f, v, E) {
		var g = f !== null ? f.key : null;
		if (typeof v == "string" && v !== "" || typeof v == "number") return g !== null ? null : o(h, f, "" + v, E);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case wl:
					return v.key === g ? u(h, f, v, E) : null;
				case Vn:
					return v.key === g ? a(h, f, v, E) : null;
				case Bt:
					return g = v._init, p(h, f, g(v._payload), E)
			}
			if (jr(v) || Sr(v)) return g !== null ? null : d(h, f, v, E, null);
			Al(h, v)
		}
		return null
	}

	function y(h, f, v, E, g) {
		if (typeof E == "string" && E !== "" || typeof E == "number") return h = h.get(v) || null, o(f, h, "" + E, g);
		if (typeof E == "object" && E !== null) {
			switch (E.$$typeof) {
				case wl:
					return h = h.get(E.key === null ? v : E.key) || null, u(f, h, E, g);
				case Vn:
					return h = h.get(E.key === null ? v : E.key) || null, a(f, h, E, g);
				case Bt:
					var C = E._init;
					return y(h, f, v, C(E._payload), g)
			}
			if (jr(E) || Sr(E)) return h = h.get(v) || null, d(f, h, E, g, null);
			Al(f, E)
		}
		return null
	}

	function S(h, f, v, E) {
		for (var g = null, C = null, N = f, O = f = 0, M = null; N !== null && O < v.length; O++) {
			N.index > O ? (M = N, N = null) : M = N.sibling;
			var I = p(h, N, v[O], E);
			if (I === null) {
				N === null && (N = M);
				break
			}
			e && N && I.alternate === null && t(h, N), f = i(I, f, O), C === null ? g = I : C.sibling = I, C = I, N = M
		}
		if (O === v.length) return n(h, N), re && mn(h, O), g;
		if (N === null) {
			for (; O < v.length; O++) N = c(h, v[O], E), N !== null && (f = i(N, f, O), C === null ? g = N : C.sibling = N, C = N);
			return re && mn(h, O), g
		}
		for (N = r(h, N); O < v.length; O++) M = y(N, h, O, v[O], E), M !== null && (e && M.alternate !== null && N.delete(M.key === null ? O : M.key), f = i(M, f, O), C === null ? g = M : C.sibling = M, C = M);
		return e && N.forEach(function(W) {
			return t(h, W)
		}), re && mn(h, O), g
	}

	function w(h, f, v, E) {
		var g = Sr(v);
		if (typeof g != "function") throw Error(P(150));
		if (v = g.call(v), v == null) throw Error(P(151));
		for (var C = g = null, N = f, O = f = 0, M = null, I = v.next(); N !== null && !I.done; O++, I = v.next()) {
			N.index > O ? (M = N, N = null) : M = N.sibling;
			var W = p(h, N, I.value, E);
			if (W === null) {
				N === null && (N = M);
				break
			}
			e && N && W.alternate === null && t(h, N), f = i(W, f, O), C === null ? g = W : C.sibling = W, C = W, N = M
		}
		if (I.done) return n(h, N), re && mn(h, O), g;
		if (N === null) {
			for (; !I.done; O++, I = v.next()) I = c(h, I.value, E), I !== null && (f = i(I, f, O), C === null ? g = I : C.sibling = I, C = I);
			return re && mn(h, O), g
		}
		for (N = r(h, N); !I.done; O++, I = v.next()) I = y(N, h, O, I.value, E), I !== null && (e && I.alternate !== null && N.delete(I.key === null ? O : I.key), f = i(I, f, O), C === null ? g = I : C.sibling = I, C = I);
		return e && N.forEach(function(z) {
			return t(h, z)
		}), re && mn(h, O), g
	}

	function T(h, f, v, E) {
		if (typeof v == "object" && v !== null && v.type === Un && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case wl:
					e: {
						for (var g = v.key, C = f; C !== null;) {
							if (C.key === g) {
								if (g = v.type, g === Un) {
									if (C.tag === 7) {
										n(h, C.sibling), f = l(C, v.props.children), f.return = h, h = f;
										break e
									}
								} else if (C.elementType === g || typeof g == "object" && g !== null && g.$$typeof === Bt && oc(g) === C.type) {
									n(h, C.sibling), f = l(C, v.props), f.ref = Fr(h, C, v), f.return = h, h = f;
									break e
								}
								n(h, C);
								break
							} else t(h, C);
							C = C.sibling
						}
						v.type === Un ? (f = En(v.props.children, h.mode, E, v.key), f.return = h, h = f) : (E = Yl(v.type, v.key, v.props, null, h.mode, E), E.ref = Fr(h, f, v), E.return = h, h = E)
					}
					return s(h);
				case Vn:
					e: {
						for (C = v.key; f !== null;) {
							if (f.key === C)
								if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
									n(h, f.sibling), f = l(f, v.children || []), f.return = h, h = f;
									break e
								} else {
									n(h, f);
									break
								}
							else t(h, f);
							f = f.sibling
						}
						f = Ls(v, h.mode, E),
						f.return = h,
						h = f
					}
					return s(h);
				case Bt:
					return C = v._init, T(h, f, C(v._payload), E)
			}
			if (jr(v)) return S(h, f, v, E);
			if (Sr(v)) return w(h, f, v, E);
			Al(h, v)
		}
		return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, f !== null && f.tag === 6 ? (n(h, f.sibling), f = l(f, v), f.return = h, h = f) : (n(h, f), f = Ds(v, h.mode, E), f.return = h, h = f), s(h)) : n(h, f)
	}
	return T
}
var cr = Ad(!0),
	jd = Ad(!1),
	vi = fn(null),
	yi = null,
	Zn = null,
	ju = null;

function Ru() {
	ju = Zn = yi = null
}

function $u(e) {
	var t = vi.current;
	te(vi), e._currentValue = t
}

function Ro(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function lr(e, t) {
	yi = e, ju = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null)
}

function lt(e) {
	var t = e._currentValue;
	if (ju !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, Zn === null) {
			if (yi === null) throw Error(P(308));
			Zn = e, yi.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else Zn = Zn.next = e;
	return t
}
var xn = null;

function Du(e) {
	xn === null ? xn = [e] : xn.push(e)
}

function Rd(e, t, n, r) {
	var l = t.interleaved;
	return l === null ? (n.next = n, Du(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Dt(e, r)
}

function Dt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var Wt = !1;

function Lu(e) {
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

function $d(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function At(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function nn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, G & 2) {
		var l = r.pending;
		return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Dt(e, n)
	}
	return l = r.interleaved, l === null ? (t.next = t, Du(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Dt(e, n)
}

function Hl(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n)
	}
}

function uc(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var l = null,
			i = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				i === null ? l = i = s : i = i.next = s, n = n.next
			} while (n !== null);
			i === null ? l = i = t : i = i.next = t
		} else l = i = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function gi(e, t, n, r) {
	var l = e.updateQueue;
	Wt = !1;
	var i = l.firstBaseUpdate,
		s = l.lastBaseUpdate,
		o = l.shared.pending;
	if (o !== null) {
		l.shared.pending = null;
		var u = o,
			a = u.next;
		u.next = null, s === null ? i = a : s.next = a, s = u;
		var d = e.alternate;
		d !== null && (d = d.updateQueue, o = d.lastBaseUpdate, o !== s && (o === null ? d.firstBaseUpdate = a : o.next = a, d.lastBaseUpdate = u))
	}
	if (i !== null) {
		var c = l.baseState;
		s = 0, d = a = u = null, o = i;
		do {
			var p = o.lane,
				y = o.eventTime;
			if ((r & p) === p) {
				d !== null && (d = d.next = {
					eventTime: y,
					lane: 0,
					tag: o.tag,
					payload: o.payload,
					callback: o.callback,
					next: null
				});
				e: {
					var S = e,
						w = o;
					switch (p = t, y = n, w.tag) {
						case 1:
							if (S = w.payload, typeof S == "function") {
								c = S.call(y, c, p);
								break e
							}
							c = S;
							break e;
						case 3:
							S.flags = S.flags & -65537 | 128;
						case 0:
							if (S = w.payload, p = typeof S == "function" ? S.call(y, c, p) : S, p == null) break e;
							c = se({}, c, p);
							break e;
						case 2:
							Wt = !0
					}
				}
				o.callback !== null && o.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [o] : p.push(o))
			} else y = {
				eventTime: y,
				lane: p,
				tag: o.tag,
				payload: o.payload,
				callback: o.callback,
				next: null
			}, d === null ? (a = d = y, u = c) : d = d.next = y, s |= p;
			if (o = o.next, o === null) {
				if (o = l.shared.pending, o === null) break;
				p = o, o = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
			}
		} while (!0);
		if (d === null && (u = c), l.baseState = u, l.firstBaseUpdate = a, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
			l = t;
			do s |= l.lane, l = l.next; while (l !== t)
		} else i === null && (l.shared.lanes = 0);
		On |= s, e.lanes = s, e.memoizedState = c
	}
}

function ac(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (r.callback = null, r = n, typeof l != "function") throw Error(P(191, l));
				l.call(r)
			}
		}
}
var ml = {},
	Et = fn(ml),
	nl = fn(ml),
	rl = fn(ml);

function wn(e) {
	if (e === ml) throw Error(P(174));
	return e
}

function Iu(e, t) {
	switch (X(rl, t), X(nl, e), X(Et, ml), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : po(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = po(t, e)
	}
	te(Et), X(Et, t)
}

function fr() {
	te(Et), te(nl), te(rl)
}

function Dd(e) {
	wn(rl.current);
	var t = wn(Et.current),
		n = po(t, e.type);
	t !== n && (X(nl, e), X(Et, n))
}

function Mu(e) {
	nl.current === e && (te(Et), te(nl))
}
var le = fn(0);

function xi(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var Ps = [];

function zu() {
	for (var e = 0; e < Ps.length; e++) Ps[e]._workInProgressVersionPrimary = null;
	Ps.length = 0
}
var Ql = It.ReactCurrentDispatcher,
	Os = It.ReactCurrentBatchConfig,
	Pn = 0,
	ie = null,
	me = null,
	we = null,
	wi = !1,
	Vr = !1,
	ll = 0,
	v0 = 0;

function Ne() {
	throw Error(P(321))
}

function Vu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!mt(e[n], t[n])) return !1;
	return !0
}

function Uu(e, t, n, r, l, i) {
	if (Pn = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ql.current = e === null || e.memoizedState === null ? w0 : S0, e = n(r, l), Vr) {
		i = 0;
		do {
			if (Vr = !1, ll = 0, 25 <= i) throw Error(P(301));
			i += 1, we = me = null, t.updateQueue = null, Ql.current = k0, e = n(r, l)
		} while (Vr)
	}
	if (Ql.current = Si, t = me !== null && me.next !== null, Pn = 0, we = me = ie = null, wi = !1, t) throw Error(P(300));
	return e
}

function bu() {
	var e = ll !== 0;
	return ll = 0, e
}

function gt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return we === null ? ie.memoizedState = we = e : we = we.next = e, we
}

function it() {
	if (me === null) {
		var e = ie.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = me.next;
	var t = we === null ? ie.memoizedState : we.next;
	if (t !== null) we = t, me = e;
	else {
		if (e === null) throw Error(P(310));
		me = e, e = {
			memoizedState: me.memoizedState,
			baseState: me.baseState,
			baseQueue: me.baseQueue,
			queue: me.queue,
			next: null
		}, we === null ? ie.memoizedState = we = e : we = we.next = e
	}
	return we
}

function il(e, t) {
	return typeof t == "function" ? t(e) : t
}

function As(e) {
	var t = it(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = me,
		l = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (l !== null) {
			var s = l.next;
			l.next = i.next, i.next = s
		}
		r.baseQueue = l = i, n.pending = null
	}
	if (l !== null) {
		i = l.next, r = r.baseState;
		var o = s = null,
			u = null,
			a = i;
		do {
			var d = a.lane;
			if ((Pn & d) === d) u !== null && (u = u.next = {
				lane: 0,
				action: a.action,
				hasEagerState: a.hasEagerState,
				eagerState: a.eagerState,
				next: null
			}), r = a.hasEagerState ? a.eagerState : e(r, a.action);
			else {
				var c = {
					lane: d,
					action: a.action,
					hasEagerState: a.hasEagerState,
					eagerState: a.eagerState,
					next: null
				};
				u === null ? (o = u = c, s = r) : u = u.next = c, ie.lanes |= d, On |= d
			}
			a = a.next
		} while (a !== null && a !== i);
		u === null ? s = r : u.next = o, mt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		l = e;
		do i = l.lane, ie.lanes |= i, On |= i, l = l.next; while (l !== e)
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function js(e) {
	var t = it(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		i = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var s = l = l.next;
		do i = e(i, s.action), s = s.next; while (s !== l);
		mt(i, t.memoizedState) || (Ue = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
	}
	return [i, r]
}

function Ld() {}

function Id(e, t) {
	var n = ie,
		r = it(),
		l = t(),
		i = !mt(r.memoizedState, l);
	if (i && (r.memoizedState = l, Ue = !0), r = r.queue, Bu(Vd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
		if (n.flags |= 2048, sl(9, zd.bind(null, n, r, l, t), void 0, null), Se === null) throw Error(P(349));
		Pn & 30 || Md(n, t, l)
	}
	return l
}

function Md(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = ie.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function zd(e, t, n, r) {
	t.value = n, t.getSnapshot = r, Ud(t) && bd(e)
}

function Vd(e, t, n) {
	return n(function() {
		Ud(t) && bd(e)
	})
}

function Ud(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !mt(e, n)
	} catch {
		return !0
	}
}

function bd(e) {
	var t = Dt(e, 1);
	t !== null && ht(t, e, 1, -1)
}

function cc(e) {
	var t = gt();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: il,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = x0.bind(null, ie, e), [t.memoizedState, e]
}

function sl(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = ie.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Bd() {
	return it().memoizedState
}

function Gl(e, t, n, r) {
	var l = gt();
	ie.flags |= e, l.memoizedState = sl(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ui(e, t, n, r) {
	var l = it();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (me !== null) {
		var s = me.memoizedState;
		if (i = s.destroy, r !== null && Vu(r, s.deps)) {
			l.memoizedState = sl(t, n, i, r);
			return
		}
	}
	ie.flags |= e, l.memoizedState = sl(1 | t, n, i, r)
}

function fc(e, t) {
	return Gl(8390656, 8, e, t)
}

function Bu(e, t) {
	return Ui(2048, 8, e, t)
}

function Wd(e, t) {
	return Ui(4, 2, e, t)
}

function Hd(e, t) {
	return Ui(4, 4, e, t)
}

function Qd(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function Gd(e, t, n) {
	return n = n != null ? n.concat([e]) : null, Ui(4, 4, Qd.bind(null, t, e), n)
}

function Wu() {}

function Kd(e, t) {
	var n = it();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Zd(e, t) {
	var n = it();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function qd(e, t, n) {
	return Pn & 21 ? (mt(n, t) || (n = td(), ie.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n)
}

function y0(e, t) {
	var n = q;
	q = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = Os.transition;
	Os.transition = {};
	try {
		e(!1), t()
	} finally {
		q = n, Os.transition = r
	}
}

function Yd() {
	return it().memoizedState
}

function g0(e, t, n) {
	var r = ln(e);
	if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Xd(e)) Jd(t, n);
	else if (n = Rd(e, t, n, r), n !== null) {
		var l = Re();
		ht(n, e, r, l), ep(n, t, r)
	}
}

function x0(e, t, n) {
	var r = ln(e),
		l = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (Xd(e)) Jd(t, l);
	else {
		var i = e.alternate;
		if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
			var s = t.lastRenderedState,
				o = i(s, n);
			if (l.hasEagerState = !0, l.eagerState = o, mt(o, s)) {
				var u = t.interleaved;
				u === null ? (l.next = l, Du(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
				return
			}
		} catch {} finally {}
		n = Rd(e, t, l, r), n !== null && (l = Re(), ht(n, e, r, l), ep(n, t, r))
	}
}

function Xd(e) {
	var t = e.alternate;
	return e === ie || t !== null && t === ie
}

function Jd(e, t) {
	Vr = wi = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ep(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n)
	}
}
var Si = {
		readContext: lt,
		useCallback: Ne,
		useContext: Ne,
		useEffect: Ne,
		useImperativeHandle: Ne,
		useInsertionEffect: Ne,
		useLayoutEffect: Ne,
		useMemo: Ne,
		useReducer: Ne,
		useRef: Ne,
		useState: Ne,
		useDebugValue: Ne,
		useDeferredValue: Ne,
		useTransition: Ne,
		useMutableSource: Ne,
		useSyncExternalStore: Ne,
		useId: Ne,
		unstable_isNewReconciler: !1
	},
	w0 = {
		readContext: lt,
		useCallback: function(e, t) {
			return gt().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: lt,
		useEffect: fc,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, Gl(4194308, 4, Qd.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return Gl(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return Gl(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = gt();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var r = gt();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = g0.bind(null, ie, e), [r.memoizedState, e]
		},
		useRef: function(e) {
			var t = gt();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: cc,
		useDebugValue: Wu,
		useDeferredValue: function(e) {
			return gt().memoizedState = e
		},
		useTransition: function() {
			var e = cc(!1),
				t = e[0];
			return e = y0.bind(null, e[1]), gt().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = ie,
				l = gt();
			if (re) {
				if (n === void 0) throw Error(P(407));
				n = n()
			} else {
				if (n = t(), Se === null) throw Error(P(349));
				Pn & 30 || Md(r, t, n)
			}
			l.memoizedState = n;
			var i = {
				value: n,
				getSnapshot: t
			};
			return l.queue = i, fc(Vd.bind(null, r, i, e), [e]), r.flags |= 2048, sl(9, zd.bind(null, r, i, n, t), void 0, null), n
		},
		useId: function() {
			var e = gt(),
				t = Se.identifierPrefix;
			if (re) {
				var n = Pt,
					r = Tt;
				n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ll++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = v0++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	S0 = {
		readContext: lt,
		useCallback: Kd,
		useContext: lt,
		useEffect: Bu,
		useImperativeHandle: Gd,
		useInsertionEffect: Wd,
		useLayoutEffect: Hd,
		useMemo: Zd,
		useReducer: As,
		useRef: Bd,
		useState: function() {
			return As(il)
		},
		useDebugValue: Wu,
		useDeferredValue: function(e) {
			var t = it();
			return qd(t, me.memoizedState, e)
		},
		useTransition: function() {
			var e = As(il)[0],
				t = it().memoizedState;
			return [e, t]
		},
		useMutableSource: Ld,
		useSyncExternalStore: Id,
		useId: Yd,
		unstable_isNewReconciler: !1
	},
	k0 = {
		readContext: lt,
		useCallback: Kd,
		useContext: lt,
		useEffect: Bu,
		useImperativeHandle: Gd,
		useInsertionEffect: Wd,
		useLayoutEffect: Hd,
		useMemo: Zd,
		useReducer: js,
		useRef: Bd,
		useState: function() {
			return js(il)
		},
		useDebugValue: Wu,
		useDeferredValue: function(e) {
			var t = it();
			return me === null ? t.memoizedState = e : qd(t, me.memoizedState, e)
		},
		useTransition: function() {
			var e = js(il)[0],
				t = it().memoizedState;
			return [e, t]
		},
		useMutableSource: Ld,
		useSyncExternalStore: Id,
		useId: Yd,
		unstable_isNewReconciler: !1
	};

function at(e, t) {
	if (e && e.defaultProps) {
		t = se({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}

function $o(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var bi = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? Rn(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = Re(),
			l = ln(e),
			i = At(r, l);
		i.payload = t, n != null && (i.callback = n), t = nn(e, i, l), t !== null && (ht(t, e, l, r), Hl(t, e, l))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = Re(),
			l = ln(e),
			i = At(r, l);
		i.tag = 1, i.payload = t, n != null && (i.callback = n), t = nn(e, i, l), t !== null && (ht(t, e, l, r), Hl(t, e, l))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = Re(),
			r = ln(e),
			l = At(n, r);
		l.tag = 2, t != null && (l.callback = t), t = nn(e, l, r), t !== null && (ht(t, e, r, n), Hl(t, e, r))
	}
};

function dc(e, t, n, r, l, i, s) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(l, i) : !0
}

function tp(e, t, n) {
	var r = !1,
		l = an,
		i = t.contextType;
	return typeof i == "object" && i !== null ? i = lt(i) : (l = Be(t) ? Nn : Oe.current, r = t.contextTypes, i = (r = r != null) ? ur(e, l) : an), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function pc(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bi.enqueueReplaceState(t, t.state, null)
}

function Do(e, t, n, r) {
	var l = e.stateNode;
	l.props = n, l.state = e.memoizedState, l.refs = {}, Lu(e);
	var i = t.contextType;
	typeof i == "object" && i !== null ? l.context = lt(i) : (i = Be(t) ? Nn : Oe.current, l.context = ur(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && ($o(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && bi.enqueueReplaceState(l, l.state, null), gi(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function dr(e, t) {
	try {
		var n = "",
			r = t;
		do n += qh(r), r = r.return; while (r);
		var l = n
	} catch (i) {
		l = `
Error generating stack: ` + i.message + `
` + i.stack
	}
	return {
		value: e,
		source: t,
		stack: l,
		digest: null
	}
}

function Rs(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function Lo(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var E0 = typeof WeakMap == "function" ? WeakMap : Map;

function np(e, t, n) {
	n = At(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function() {
		Ei || (Ei = !0, Qo = r), Lo(e, t)
	}, n
}

function rp(e, t, n) {
	n = At(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var l = t.value;
		n.payload = function() {
			return r(l)
		}, n.callback = function() {
			Lo(e, t)
		}
	}
	var i = e.stateNode;
	return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
		Lo(e, t), typeof r != "function" && (rn === null ? rn = new Set([this]) : rn.add(this));
		var s = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: s !== null ? s : ""
		})
	}), n
}

function hc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new E0;
		var l = new Set;
		r.set(t, l)
	} else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
	l.has(n) || (l.add(n), e = I0.bind(null, e, t, n), t.then(e, e))
}

function mc(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function vc(e, t, n, r, l) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e)
}
var _0 = It.ReactCurrentOwner,
	Ue = !1;

function Ae(e, t, n, r) {
	t.child = e === null ? jd(t, null, n, r) : cr(t, e.child, n, r)
}

function yc(e, t, n, r, l) {
	n = n.render;
	var i = t.ref;
	return lr(t, l), r = Uu(e, t, n, r, i, l), n = bu(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Lt(e, t, l)) : (re && n && Pu(t), t.flags |= 1, Ae(e, t, r, l), t.child)
}

function gc(e, t, n, r, l) {
	if (e === null) {
		var i = n.type;
		return typeof i == "function" && !Xu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, lp(e, t, i, r, l)) : (e = Yl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (i = e.child, !(e.lanes & l)) {
		var s = i.memoizedProps;
		if (n = n.compare, n = n !== null ? n : Xr, n(s, r) && e.ref === t.ref) return Lt(e, t, l)
	}
	return t.flags |= 1, e = sn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function lp(e, t, n, r, l) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (Xr(i, r) && e.ref === t.ref)
			if (Ue = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ue = !0);
			else return t.lanes = e.lanes, Lt(e, t, l)
	}
	return Io(e, t, n, r, l)
}

function ip(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, X(Yn, Qe), Qe |= n;
		else {
			if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, X(Yn, Qe), Qe |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = i !== null ? i.baseLanes : n, X(Yn, Qe), Qe |= r
		}
	else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, X(Yn, Qe), Qe |= r;
	return Ae(e, t, l, n), t.child
}

function sp(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Io(e, t, n, r, l) {
	var i = Be(n) ? Nn : Oe.current;
	return i = ur(t, i), lr(t, l), n = Uu(e, t, n, r, i, l), r = bu(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Lt(e, t, l)) : (re && r && Pu(t), t.flags |= 1, Ae(e, t, n, l), t.child)
}

function xc(e, t, n, r, l) {
	if (Be(n)) {
		var i = !0;
		pi(t)
	} else i = !1;
	if (lr(t, l), t.stateNode === null) Kl(e, t), tp(t, n, r), Do(t, n, r, l), r = !0;
	else if (e === null) {
		var s = t.stateNode,
			o = t.memoizedProps;
		s.props = o;
		var u = s.context,
			a = n.contextType;
		typeof a == "object" && a !== null ? a = lt(a) : (a = Be(n) ? Nn : Oe.current, a = ur(t, a));
		var d = n.getDerivedStateFromProps,
			c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
		c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || u !== a) && pc(t, s, r, a), Wt = !1;
		var p = t.memoizedState;
		s.state = p, gi(t, r, s, l), u = t.memoizedState, o !== r || p !== u || be.current || Wt ? (typeof d == "function" && ($o(t, n, d, r), u = t.memoizedState), (o = Wt || dc(t, n, o, r, p, u, a)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = a, r = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		s = t.stateNode, $d(e, t), o = t.memoizedProps, a = t.type === t.elementType ? o : at(t.type, o), s.props = a, c = t.pendingProps, p = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = lt(u) : (u = Be(n) ? Nn : Oe.current, u = ur(t, u));
		var y = n.getDerivedStateFromProps;
		(d = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== c || p !== u) && pc(t, s, r, u), Wt = !1, p = t.memoizedState, s.state = p, gi(t, r, s, l);
		var S = t.memoizedState;
		o !== c || p !== S || be.current || Wt ? (typeof y == "function" && ($o(t, n, y, r), S = t.memoizedState), (a = Wt || dc(t, n, a, r, p, S, u) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = u, r = a) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return Mo(e, t, n, r, i, l)
}

function Mo(e, t, n, r, l, i) {
	sp(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return l && lc(t, n, !1), Lt(e, t, i);
	r = t.stateNode, _0.current = t;
	var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && s ? (t.child = cr(t, e.child, null, i), t.child = cr(t, null, o, i)) : Ae(e, t, o, i), t.memoizedState = r.state, l && lc(t, n, !0), t.child
}

function op(e) {
	var t = e.stateNode;
	t.pendingContext ? rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rc(e, t.context, !1), Iu(e, t.containerInfo)
}

function wc(e, t, n, r, l) {
	return ar(), Au(l), t.flags |= 256, Ae(e, t, n, r), t.child
}
var zo = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function Vo(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function up(e, t, n) {
	var r = t.pendingProps,
		l = le.current,
		i = !1,
		s = (t.flags & 128) !== 0,
		o;
	if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), X(le, l & 1), e === null) return jo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
		mode: "hidden",
		children: s
	}, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Hi(s, r, 0, null), e = En(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Vo(n), t.memoizedState = zo, e) : Hu(t, s));
	if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return C0(e, t, s, r, o, l, n);
	if (i) {
		i = r.fallback, s = t.mode, l = e.child, o = l.sibling;
		var u = {
			mode: "hidden",
			children: r.children
		};
		return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = sn(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = sn(o, i) : (i = En(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Vo(n) : {
			baseLanes: s.baseLanes | n,
			cachePool: null,
			transitions: s.transitions
		}, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = zo, r
	}
	return i = e.child, e = i.sibling, r = sn(i, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Hu(e, t) {
	return t = Hi({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function jl(e, t, n, r) {
	return r !== null && Au(r), cr(t, e.child, null, n), e = Hu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function C0(e, t, n, r, l, i, s) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = Rs(Error(P(422))), jl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Hi({
		mode: "visible",
		children: r.children
	}, l, 0, null), i = En(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && cr(t, e.child, null, s), t.child.memoizedState = Vo(s), t.memoizedState = zo, i);
	if (!(t.mode & 1)) return jl(e, t, s, null);
	if (l.data === "$!") {
		if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
		return r = o, i = Error(P(419)), r = Rs(i, r, void 0), jl(e, t, s, r)
	}
	if (o = (s & e.childLanes) !== 0, Ue || o) {
		if (r = Se, r !== null) {
			switch (s & -s) {
				case 4:
					l = 2;
					break;
				case 16:
					l = 8;
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
					l = 32;
					break;
				case 536870912:
					l = 268435456;
					break;
				default:
					l = 0
			}
			l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Dt(e, l), ht(r, e, l, -1))
		}
		return Yu(), r = Rs(Error(P(421))), jl(e, t, s, r)
	}
	return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = M0.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ge = tn(l.nextSibling), Ze = t, re = !0, ft = null, e !== null && (Je[et++] = Tt, Je[et++] = Pt, Je[et++] = Tn, Tt = e.id, Pt = e.overflow, Tn = t), t = Hu(t, r.children), t.flags |= 4096, t)
}

function Sc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Ro(e.return, t, n)
}

function $s(e, t, n, r, l) {
	var i = e.memoizedState;
	i === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: l
	} : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function ap(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		i = r.tail;
	if (Ae(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Sc(e, n, t);
			else if (e.tag === 19) Sc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (X(le, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (l) {
		case "forwards":
			for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && xi(e) === null && (l = n), n = n.sibling;
			n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), $s(t, !1, l, n, i);
			break;
		case "backwards":
			for (n = null, l = t.child, t.child = null; l !== null;) {
				if (e = l.alternate, e !== null && xi(e) === null) {
					t.child = l;
					break
				}
				e = l.sibling, l.sibling = n, n = l, l = e
			}
			$s(t, !0, n, null, i);
			break;
		case "together":
			$s(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function Kl(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Lt(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(P(153));
	if (t.child !== null) {
		for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function F0(e, t, n) {
	switch (t.tag) {
		case 3:
			op(t), ar();
			break;
		case 5:
			Dd(t);
			break;
		case 1:
			Be(t.type) && pi(t);
			break;
		case 4:
			Iu(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			X(vi, r._currentValue), r._currentValue = l;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (X(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? up(e, t, n) : (X(le, le.current & 1), e = Lt(e, t, n), e !== null ? e.sibling : null);
			X(le, le.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return ap(e, t, n);
				t.flags |= 128
			}
			if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), X(le, le.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, ip(e, t, n)
	}
	return Lt(e, t, n)
}
var cp, Uo, fp, dp;
cp = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
Uo = function() {};
fp = function(e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		e = t.stateNode, wn(Et.current);
		var i = null;
		switch (n) {
			case "input":
				l = uo(e, l), r = uo(e, r), i = [];
				break;
			case "select":
				l = se({}, l, {
					value: void 0
				}), r = se({}, r, {
					value: void 0
				}), i = [];
				break;
			case "textarea":
				l = fo(e, l), r = fo(e, r), i = [];
				break;
			default:
				typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fi)
		}
		ho(n, r);
		var s;
		n = null;
		for (a in l)
			if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
				if (a === "style") {
					var o = l[a];
					for (s in o) o.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
				} else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Hr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
		for (a in r) {
			var u = r[a];
			if (o = l != null ? l[a] : void 0, r.hasOwnProperty(a) && u !== o && (u != null || o != null))
				if (a === "style")
					if (o) {
						for (s in o) !o.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
						for (s in u) u.hasOwnProperty(s) && o[s] !== u[s] && (n || (n = {}), n[s] = u[s])
					} else n || (i || (i = []), i.push(a, n)), n = u;
			else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Hr.hasOwnProperty(a) ? (u != null && a === "onScroll" && J("scroll", e), i || o === u || (i = [])) : (i = i || []).push(a, u))
		}
		n && (i = i || []).push("style", n);
		var a = i;
		(t.updateQueue = a) && (t.flags |= 4)
	}
};
dp = function(e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function Nr(e, t) {
	if (!re) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function Te(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
	else
		for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function N0(e, t, n) {
	var r = t.pendingProps;
	switch (Ou(t), t.tag) {
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
			return Te(t), null;
		case 1:
			return Be(t.type) && di(), Te(t), null;
		case 3:
			return r = t.stateNode, fr(), te(be), te(Oe), zu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Zo(ft), ft = null))), Uo(e, t), Te(t), null;
		case 5:
			Mu(t);
			var l = wn(rl.current);
			if (n = t.type, e !== null && t.stateNode != null) fp(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(P(166));
					return Te(t), null
				}
				if (e = wn(Et.current), Ol(t)) {
					r = t.stateNode, n = t.type;
					var i = t.memoizedProps;
					switch (r[wt] = t, r[tl] = i, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							J("cancel", r), J("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							J("load", r);
							break;
						case "video":
						case "audio":
							for (l = 0; l < $r.length; l++) J($r[l], r);
							break;
						case "source":
							J("error", r);
							break;
						case "img":
						case "image":
						case "link":
							J("error", r), J("load", r);
							break;
						case "details":
							J("toggle", r);
							break;
						case "input":
							Oa(r, i), J("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!i.multiple
							}, J("invalid", r);
							break;
						case "textarea":
							ja(r, i), J("invalid", r)
					}
					ho(n, i), l = null;
					for (var s in i)
						if (i.hasOwnProperty(s)) {
							var o = i[s];
							s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Pl(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Pl(r.textContent, o, e), l = ["children", "" + o]) : Hr.hasOwnProperty(s) && o != null && s === "onScroll" && J("scroll", r)
						} switch (n) {
						case "input":
							Sl(r), Aa(r, i, !0);
							break;
						case "textarea":
							Sl(r), Ra(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof i.onClick == "function" && (r.onclick = fi)
					}
					r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
						is: r.is
					}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[wt] = t, e[tl] = r, cp(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (s = mo(n, r), n) {
							case "dialog":
								J("cancel", e), J("close", e), l = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								J("load", e), l = r;
								break;
							case "video":
							case "audio":
								for (l = 0; l < $r.length; l++) J($r[l], e);
								l = r;
								break;
							case "source":
								J("error", e), l = r;
								break;
							case "img":
							case "image":
							case "link":
								J("error", e), J("load", e), l = r;
								break;
							case "details":
								J("toggle", e), l = r;
								break;
							case "input":
								Oa(e, r), l = uo(e, r), J("invalid", e);
								break;
							case "option":
								l = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, l = se({}, r, {
									value: void 0
								}), J("invalid", e);
								break;
							case "textarea":
								ja(e, r), l = fo(e, r), J("invalid", e);
								break;
							default:
								l = r
						}
						ho(n, l),
						o = l;
						for (i in o)
							if (o.hasOwnProperty(i)) {
								var u = o[i];
								i === "style" ? Bf(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Uf(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Qr(e, u) : typeof u == "number" && Qr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Hr.hasOwnProperty(i) ? u != null && i === "onScroll" && J("scroll", e) : u != null && mu(e, i, u, s))
							} switch (n) {
							case "input":
								Sl(e), Aa(e, r, !1);
								break;
							case "textarea":
								Sl(e), Ra(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + un(r.value));
								break;
							case "select":
								e.multiple = !!r.multiple, i = r.value, i != null ? er(e, !!r.multiple, i, !1) : r.defaultValue != null && er(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == "function" && (e.onclick = fi)
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
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return Te(t), null;
		case 6:
			if (e && t.stateNode != null) dp(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
				if (n = wn(rl.current), wn(Et.current), Ol(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (i = r.nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
						case 3:
							Pl(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && Pl(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					i && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r
			}
			return Te(t), null;
		case 13:
			if (te(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (re && Ge !== null && t.mode & 1 && !(t.flags & 128)) Od(), ar(), t.flags |= 98560, i = !1;
				else if (i = Ol(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!i) throw Error(P(318));
						if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(P(317));
						i[wt] = t
					} else ar(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					Te(t), i = !1
				} else ft !== null && (Zo(ft), ft = null), i = !0;
				if (!i) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ve === 0 && (ve = 3) : Yu())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
		case 4:
			return fr(), Uo(e, t), e === null && Jr(t.stateNode.containerInfo), Te(t), null;
		case 10:
			return $u(t.type._context), Te(t), null;
		case 17:
			return Be(t.type) && di(), Te(t), null;
		case 19:
			if (te(le), i = t.memoizedState, i === null) return Te(t), null;
			if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
				if (r) Nr(i, !1);
				else {
					if (ve !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (s = xi(e), s !== null) {
								for (t.flags |= 128, Nr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return X(le, le.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					i.tail !== null && ce() > pr && (t.flags |= 128, r = !0, Nr(i, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = xi(s), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !re) return Te(t), null
					} else 2 * ce() - i.renderingStartTime > pr && n !== 1073741824 && (t.flags |= 128, r = !0, Nr(i, !1), t.lanes = 4194304);
				i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
			}
			return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ce(), t.sibling = null, n = le.current, X(le, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
		case 22:
		case 23:
			return qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(P(156, t.tag))
}

function T0(e, t) {
	switch (Ou(t), t.tag) {
		case 1:
			return Be(t.type) && di(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return fr(), te(be), te(Oe), zu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return Mu(t), null;
		case 13:
			if (te(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(P(340));
				ar()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return te(le), null;
		case 4:
			return fr(), null;
		case 10:
			return $u(t.type._context), null;
		case 22:
		case 23:
			return qu(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Rl = !1,
	Pe = !1,
	P0 = typeof WeakSet == "function" ? WeakSet : Set,
	L = null;

function qn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			oe(e, t, r)
		} else n.current = null
}

function bo(e, t, n) {
	try {
		n()
	} catch (r) {
		oe(e, t, r)
	}
}
var kc = !1;

function O0(e, t) {
	if (Co = ui, e = yd(), Tu(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var l = r.anchorOffset,
					i = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, i.nodeType
				} catch {
					n = null;
					break e
				}
				var s = 0,
					o = -1,
					u = -1,
					a = 0,
					d = 0,
					c = e,
					p = null;
				t: for (;;) {
					for (var y; c !== n || l !== 0 && c.nodeType !== 3 || (o = s + l), c !== i || r !== 0 && c.nodeType !== 3 || (u = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (y = c.firstChild) !== null;) p = c, c = y;
					for (;;) {
						if (c === e) break t;
						if (p === n && ++a === l && (o = s), p === i && ++d === r && (u = s), (y = c.nextSibling) !== null) break;
						c = p, p = c.parentNode
					}
					c = y
				}
				n = o === -1 || u === -1 ? null : {
					start: o,
					end: u
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (Fo = {
			focusedElem: e,
			selectionRange: n
		}, ui = !1, L = t; L !== null;)
		if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
		else
			for (; L !== null;) {
				t = L;
				try {
					var S = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (S !== null) {
								var w = S.memoizedProps,
									T = S.memoizedState,
									h = t.stateNode,
									f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : at(t.type, w), T);
								h.__reactInternalSnapshotBeforeUpdate = f
							}
							break;
						case 3:
							var v = t.stateNode.containerInfo;
							v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(P(163))
					}
				} catch (E) {
					oe(t, t.return, E)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, L = e;
					break
				}
				L = t.return
			}
	return S = kc, kc = !1, S
}

function Ur(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var l = r = r.next;
		do {
			if ((l.tag & e) === e) {
				var i = l.destroy;
				l.destroy = void 0, i !== void 0 && bo(t, n, i)
			}
			l = l.next
		} while (l !== r)
	}
}

function Bi(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
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

function Bo(e) {
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

function pp(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, pp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[tl], delete t[Po], delete t[d0], delete t[p0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function hp(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ec(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || hp(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function Wo(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fi));
	else if (r !== 4 && (e = e.child, e !== null))
		for (Wo(e, t, n), e = e.sibling; e !== null;) Wo(e, t, n), e = e.sibling
}

function Ho(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (Ho(e, t, n), e = e.sibling; e !== null;) Ho(e, t, n), e = e.sibling
}
var ke = null,
	ct = !1;

function Mt(e, t, n) {
	for (n = n.child; n !== null;) mp(e, t, n), n = n.sibling
}

function mp(e, t, n) {
	if (kt && typeof kt.onCommitFiberUnmount == "function") try {
		kt.onCommitFiberUnmount(Di, n)
	} catch {}
	switch (n.tag) {
		case 5:
			Pe || qn(n, t);
		case 6:
			var r = ke,
				l = ct;
			ke = null, Mt(e, t, n), ke = r, ct = l, ke !== null && (ct ? (e = ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
			break;
		case 18:
			ke !== null && (ct ? (e = ke, n = n.stateNode, e.nodeType === 8 ? Ns(e.parentNode, n) : e.nodeType === 1 && Ns(e, n), qr(e)) : Ns(ke, n.stateNode));
			break;
		case 4:
			r = ke, l = ct, ke = n.stateNode.containerInfo, ct = !0, Mt(e, t, n), ke = r, ct = l;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!Pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				l = r = r.next;
				do {
					var i = l,
						s = i.destroy;
					i = i.tag, s !== void 0 && (i & 2 || i & 4) && bo(n, t, s), l = l.next
				} while (l !== r)
			}
			Mt(e, t, n);
			break;
		case 1:
			if (!Pe && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (o) {
				oe(n, t, o)
			}
			Mt(e, t, n);
			break;
		case 21:
			Mt(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null, Mt(e, t, n), Pe = r) : Mt(e, t, n);
			break;
		default:
			Mt(e, t, n)
	}
}

function _c(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new P0), t.forEach(function(r) {
			var l = z0.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(l, l))
		})
	}
}

function ut(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var i = e,
					s = t,
					o = s;
				e: for (; o !== null;) {
					switch (o.tag) {
						case 5:
							ke = o.stateNode, ct = !1;
							break e;
						case 3:
							ke = o.stateNode.containerInfo, ct = !0;
							break e;
						case 4:
							ke = o.stateNode.containerInfo, ct = !0;
							break e
					}
					o = o.return
				}
				if (ke === null) throw Error(P(160));
				mp(i, s, l), ke = null, ct = !1;
				var u = l.alternate;
				u !== null && (u.return = null), l.return = null
			} catch (a) {
				oe(l, t, a)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) vp(t, e), t = t.sibling
}

function vp(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (ut(t, e), yt(e), r & 4) {
				try {
					Ur(3, e, e.return), Bi(3, e)
				} catch (w) {
					oe(e, e.return, w)
				}
				try {
					Ur(5, e, e.return)
				} catch (w) {
					oe(e, e.return, w)
				}
			}
			break;
		case 1:
			ut(t, e), yt(e), r & 512 && n !== null && qn(n, n.return);
			break;
		case 5:
			if (ut(t, e), yt(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
				var l = e.stateNode;
				try {
					Qr(l, "")
				} catch (w) {
					oe(e, e.return, w)
				}
			}
			if (r & 4 && (l = e.stateNode, l != null)) {
				var i = e.memoizedProps,
					s = n !== null ? n.memoizedProps : i,
					o = e.type,
					u = e.updateQueue;
				if (e.updateQueue = null, u !== null) try {
					o === "input" && i.type === "radio" && i.name != null && Mf(l, i), mo(o, s);
					var a = mo(o, i);
					for (s = 0; s < u.length; s += 2) {
						var d = u[s],
							c = u[s + 1];
						d === "style" ? Bf(l, c) : d === "dangerouslySetInnerHTML" ? Uf(l, c) : d === "children" ? Qr(l, c) : mu(l, d, c, a)
					}
					switch (o) {
						case "input":
							ao(l, i);
							break;
						case "textarea":
							zf(l, i);
							break;
						case "select":
							var p = l._wrapperState.wasMultiple;
							l._wrapperState.wasMultiple = !!i.multiple;
							var y = i.value;
							y != null ? er(l, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? er(l, !!i.multiple, i.defaultValue, !0) : er(l, !!i.multiple, i.multiple ? [] : "", !1))
					}
					l[tl] = i
				} catch (w) {
					oe(e, e.return, w)
				}
			}
			break;
		case 6:
			if (ut(t, e), yt(e), r & 4) {
				if (e.stateNode === null) throw Error(P(162));
				l = e.stateNode, i = e.memoizedProps;
				try {
					l.nodeValue = i
				} catch (w) {
					oe(e, e.return, w)
				}
			}
			break;
		case 3:
			if (ut(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				qr(t.containerInfo)
			} catch (w) {
				oe(e, e.return, w)
			}
			break;
		case 4:
			ut(t, e), yt(e);
			break;
		case 13:
			ut(t, e), yt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ku = ce())), r & 4 && _c(e);
			break;
		case 22:
			if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Pe = (a = Pe) || d, ut(t, e), Pe = a) : ut(t, e), yt(e), r & 8192) {
				if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1)
					for (L = e, d = e.child; d !== null;) {
						for (c = L = d; L !== null;) {
							switch (p = L, y = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Ur(4, p, p.return);
									break;
								case 1:
									qn(p, p.return);
									var S = p.stateNode;
									if (typeof S.componentWillUnmount == "function") {
										r = p, n = p.return;
										try {
											t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
										} catch (w) {
											oe(r, n, w)
										}
									}
									break;
								case 5:
									qn(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Fc(c);
										continue
									}
							}
							y !== null ? (y.return = p, L = y) : Fc(c)
						}
						d = d.sibling
					}
				e: for (d = null, c = e;;) {
					if (c.tag === 5) {
						if (d === null) {
							d = c;
							try {
								l = c.stateNode, a ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = c.stateNode, u = c.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = bf("display", s))
							} catch (w) {
								oe(e, e.return, w)
							}
						}
					} else if (c.tag === 6) {
						if (d === null) try {
							c.stateNode.nodeValue = a ? "" : c.memoizedProps
						} catch (w) {
							oe(e, e.return, w)
						}
					} else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
						c.child.return = c, c = c.child;
						continue
					}
					if (c === e) break e;
					for (; c.sibling === null;) {
						if (c.return === null || c.return === e) break e;
						d === c && (d = null), c = c.return
					}
					d === c && (d = null), c.sibling.return = c.return, c = c.sibling
				}
			}
			break;
		case 19:
			ut(t, e), yt(e), r & 4 && _c(e);
			break;
		case 21:
			break;
		default:
			ut(t, e), yt(e)
	}
}

function yt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (hp(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(P(160))
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (Qr(l, ""), r.flags &= -33);
					var i = Ec(e);
					Ho(e, i, l);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						o = Ec(e);
					Wo(e, o, s);
					break;
				default:
					throw Error(P(161))
			}
		}
		catch (u) {
			oe(e, e.return, u)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function A0(e, t, n) {
	L = e, yp(e)
}

function yp(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null;) {
		var l = L,
			i = l.child;
		if (l.tag === 22 && r) {
			var s = l.memoizedState !== null || Rl;
			if (!s) {
				var o = l.alternate,
					u = o !== null && o.memoizedState !== null || Pe;
				o = Rl;
				var a = Pe;
				if (Rl = s, (Pe = u) && !a)
					for (L = l; L !== null;) s = L, u = s.child, s.tag === 22 && s.memoizedState !== null ? Nc(l) : u !== null ? (u.return = s, L = u) : Nc(l);
				for (; i !== null;) L = i, yp(i), i = i.sibling;
				L = l, Rl = o, Pe = a
			}
			Cc(e)
		} else l.subtreeFlags & 8772 && i !== null ? (i.return = l, L = i) : Cc(e)
	}
}

function Cc(e) {
	for (; L !== null;) {
		var t = L;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						Pe || Bi(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !Pe)
							if (n === null) r.componentDidMount();
							else {
								var l = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
								r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var i = t.updateQueue;
						i !== null && ac(t, i, r);
						break;
					case 3:
						var s = t.updateQueue;
						if (s !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							ac(t, s, n)
						}
						break;
					case 5:
						var o = t.stateNode;
						if (n === null && t.flags & 4) {
							n = o;
							var u = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									u.autoFocus && n.focus();
									break;
								case "img":
									u.src && (n.src = u.src)
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
							var a = t.alternate;
							if (a !== null) {
								var d = a.memoizedState;
								if (d !== null) {
									var c = d.dehydrated;
									c !== null && qr(c)
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
						throw Error(P(163))
				}
				Pe || t.flags & 512 && Bo(t)
			} catch (p) {
				oe(t, t.return, p)
			}
		}
		if (t === e) {
			L = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, L = n;
			break
		}
		L = t.return
	}
}

function Fc(e) {
	for (; L !== null;) {
		var t = L;
		if (t === e) {
			L = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, L = n;
			break
		}
		L = t.return
	}
}

function Nc(e) {
	for (; L !== null;) {
		var t = L;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Bi(4, t)
					} catch (u) {
						oe(t, n, u)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var l = t.return;
						try {
							r.componentDidMount()
						} catch (u) {
							oe(t, l, u)
						}
					}
					var i = t.return;
					try {
						Bo(t)
					} catch (u) {
						oe(t, i, u)
					}
					break;
				case 5:
					var s = t.return;
					try {
						Bo(t)
					} catch (u) {
						oe(t, s, u)
					}
			}
		} catch (u) {
			oe(t, t.return, u)
		}
		if (t === e) {
			L = null;
			break
		}
		var o = t.sibling;
		if (o !== null) {
			o.return = t.return, L = o;
			break
		}
		L = t.return
	}
}
var j0 = Math.ceil,
	ki = It.ReactCurrentDispatcher,
	Qu = It.ReactCurrentOwner,
	rt = It.ReactCurrentBatchConfig,
	G = 0,
	Se = null,
	pe = null,
	Ce = 0,
	Qe = 0,
	Yn = fn(0),
	ve = 0,
	ol = null,
	On = 0,
	Wi = 0,
	Gu = 0,
	br = null,
	Me = null,
	Ku = 0,
	pr = 1 / 0,
	Ft = null,
	Ei = !1,
	Qo = null,
	rn = null,
	$l = !1,
	Zt = null,
	_i = 0,
	Br = 0,
	Go = null,
	Zl = -1,
	ql = 0;

function Re() {
	return G & 6 ? ce() : Zl !== -1 ? Zl : Zl = ce()
}

function ln(e) {
	return e.mode & 1 ? G & 2 && Ce !== 0 ? Ce & -Ce : m0.transition !== null ? (ql === 0 && (ql = td()), ql) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ud(e.type)), e) : 1
}

function ht(e, t, n, r) {
	if (50 < Br) throw Br = 0, Go = null, Error(P(185));
	dl(e, n, r), (!(G & 2) || e !== Se) && (e === Se && (!(G & 2) && (Wi |= n), ve === 4 && Qt(e, Ce)), We(e, r), n === 1 && G === 0 && !(t.mode & 1) && (pr = ce() + 500, Vi && dn()))
}

function We(e, t) {
	var n = e.callbackNode;
	mm(e, t);
	var r = oi(e, e === Se ? Ce : 0);
	if (r === 0) n !== null && La(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && La(n), t === 1) e.tag === 0 ? h0(Tc.bind(null, e)) : Nd(Tc.bind(null, e)), c0(function() {
			!(G & 6) && dn()
		}), n = null;
		else {
			switch (nd(r)) {
				case 1:
					n = wu;
					break;
				case 4:
					n = Jf;
					break;
				case 16:
					n = si;
					break;
				case 536870912:
					n = ed;
					break;
				default:
					n = si
			}
			n = Cp(n, gp.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function gp(e, t) {
	if (Zl = -1, ql = 0, G & 6) throw Error(P(327));
	var n = e.callbackNode;
	if (ir() && e.callbackNode !== n) return null;
	var r = oi(e, e === Se ? Ce : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Ci(e, r);
	else {
		t = r;
		var l = G;
		G |= 2;
		var i = wp();
		(Se !== e || Ce !== t) && (Ft = null, pr = ce() + 500, kn(e, t));
		do try {
			D0();
			break
		} catch (o) {
			xp(e, o)
		}
		while (!0);
		Ru(), ki.current = i, G = l, pe !== null ? t = 0 : (Se = null, Ce = 0, t = ve)
	}
	if (t !== 0) {
		if (t === 2 && (l = wo(e), l !== 0 && (r = l, t = Ko(e, l))), t === 1) throw n = ol, kn(e, 0), Qt(e, r), We(e, ce()), n;
		if (t === 6) Qt(e, r);
		else {
			if (l = e.current.alternate, !(r & 30) && !R0(l) && (t = Ci(e, r), t === 2 && (i = wo(e), i !== 0 && (r = i, t = Ko(e, i))), t === 1)) throw n = ol, kn(e, 0), Qt(e, r), We(e, ce()), n;
			switch (e.finishedWork = l, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(P(345));
				case 2:
					vn(e, Me, Ft);
					break;
				case 3:
					if (Qt(e, r), (r & 130023424) === r && (t = Ku + 500 - ce(), 10 < t)) {
						if (oi(e, 0) !== 0) break;
						if (l = e.suspendedLanes, (l & r) !== r) {
							Re(), e.pingedLanes |= e.suspendedLanes & l;
							break
						}
						e.timeoutHandle = To(vn.bind(null, e, Me, Ft), t);
						break
					}
					vn(e, Me, Ft);
					break;
				case 4:
					if (Qt(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, l = -1; 0 < r;) {
						var s = 31 - pt(r);
						i = 1 << s, s = t[s], s > l && (l = s), r &= ~i
					}
					if (r = l, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * j0(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = To(vn.bind(null, e, Me, Ft), r);
						break
					}
					vn(e, Me, Ft);
					break;
				case 5:
					vn(e, Me, Ft);
					break;
				default:
					throw Error(P(329))
			}
		}
	}
	return We(e, ce()), e.callbackNode === n ? gp.bind(null, e) : null
}

function Ko(e, t) {
	var n = br;
	return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = Ci(e, t), e !== 2 && (t = Me, Me = n, t !== null && Zo(t)), e
}

function Zo(e) {
	Me === null ? Me = e : Me.push.apply(Me, e)
}

function R0(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						i = l.getSnapshot;
					l = l.value;
					try {
						if (!mt(i(), l)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function Qt(e, t) {
	for (t &= ~Gu, t &= ~Wi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - pt(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function Tc(e) {
	if (G & 6) throw Error(P(327));
	ir();
	var t = oi(e, 0);
	if (!(t & 1)) return We(e, ce()), null;
	var n = Ci(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = wo(e);
		r !== 0 && (t = r, n = Ko(e, r))
	}
	if (n === 1) throw n = ol, kn(e, 0), Qt(e, t), We(e, ce()), n;
	if (n === 6) throw Error(P(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, Me, Ft), We(e, ce()), null
}

function Zu(e, t) {
	var n = G;
	G |= 1;
	try {
		return e(t)
	} finally {
		G = n, G === 0 && (pr = ce() + 500, Vi && dn())
	}
}

function An(e) {
	Zt !== null && Zt.tag === 0 && !(G & 6) && ir();
	var t = G;
	G |= 1;
	var n = rt.transition,
		r = q;
	try {
		if (rt.transition = null, q = 1, e) return e()
	} finally {
		q = r, rt.transition = n, G = t, !(G & 6) && dn()
	}
}

function qu() {
	Qe = Yn.current, te(Yn)
}

function kn(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, a0(n)), pe !== null)
		for (n = pe.return; n !== null;) {
			var r = n;
			switch (Ou(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && di();
					break;
				case 3:
					fr(), te(be), te(Oe), zu();
					break;
				case 5:
					Mu(r);
					break;
				case 4:
					fr();
					break;
				case 13:
					te(le);
					break;
				case 19:
					te(le);
					break;
				case 10:
					$u(r.type._context);
					break;
				case 22:
				case 23:
					qu()
			}
			n = n.return
		}
	if (Se = e, pe = e = sn(e.current, null), Ce = Qe = t, ve = 0, ol = null, Gu = Wi = On = 0, Me = br = null, xn !== null) {
		for (t = 0; t < xn.length; t++)
			if (n = xn[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var l = r.next,
					i = n.pending;
				if (i !== null) {
					var s = i.next;
					i.next = l, r.next = s
				}
				n.pending = r
			} xn = null
	}
	return e
}

function xp(e, t) {
	do {
		var n = pe;
		try {
			if (Ru(), Ql.current = Si, wi) {
				for (var r = ie.memoizedState; r !== null;) {
					var l = r.queue;
					l !== null && (l.pending = null), r = r.next
				}
				wi = !1
			}
			if (Pn = 0, we = me = ie = null, Vr = !1, ll = 0, Qu.current = null, n === null || n.return === null) {
				ve = 1, ol = t, pe = null;
				break
			}
			e: {
				var i = e,
					s = n.return,
					o = n,
					u = t;
				if (t = Ce, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
					var a = u,
						d = o,
						c = d.tag;
					if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
						var p = d.alternate;
						p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
					}
					var y = mc(s);
					if (y !== null) {
						y.flags &= -257, vc(y, s, o, i, t), y.mode & 1 && hc(i, a, t), t = y, u = a;
						var S = t.updateQueue;
						if (S === null) {
							var w = new Set;
							w.add(u), t.updateQueue = w
						} else S.add(u);
						break e
					} else {
						if (!(t & 1)) {
							hc(i, a, t), Yu();
							break e
						}
						u = Error(P(426))
					}
				} else if (re && o.mode & 1) {
					var T = mc(s);
					if (T !== null) {
						!(T.flags & 65536) && (T.flags |= 256), vc(T, s, o, i, t), Au(dr(u, o));
						break e
					}
				}
				i = u = dr(u, o),
				ve !== 4 && (ve = 2),
				br === null ? br = [i] : br.push(i),
				i = s;do {
					switch (i.tag) {
						case 3:
							i.flags |= 65536, t &= -t, i.lanes |= t;
							var h = np(i, u, t);
							uc(i, h);
							break e;
						case 1:
							o = u;
							var f = i.type,
								v = i.stateNode;
							if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (rn === null || !rn.has(v)))) {
								i.flags |= 65536, t &= -t, i.lanes |= t;
								var E = rp(i, o, t);
								uc(i, E);
								break e
							}
					}
					i = i.return
				} while (i !== null)
			}
			kp(n)
		} catch (g) {
			t = g, pe === n && n !== null && (pe = n = n.return);
			continue
		}
		break
	} while (!0)
}

function wp() {
	var e = ki.current;
	return ki.current = Si, e === null ? Si : e
}

function Yu() {
	(ve === 0 || ve === 3 || ve === 2) && (ve = 4), Se === null || !(On & 268435455) && !(Wi & 268435455) || Qt(Se, Ce)
}

function Ci(e, t) {
	var n = G;
	G |= 2;
	var r = wp();
	(Se !== e || Ce !== t) && (Ft = null, kn(e, t));
	do try {
		$0();
		break
	} catch (l) {
		xp(e, l)
	}
	while (!0);
	if (Ru(), G = n, ki.current = r, pe !== null) throw Error(P(261));
	return Se = null, Ce = 0, ve
}

function $0() {
	for (; pe !== null;) Sp(pe)
}

function D0() {
	for (; pe !== null && !sm();) Sp(pe)
}

function Sp(e) {
	var t = _p(e.alternate, e, Qe);
	e.memoizedProps = e.pendingProps, t === null ? kp(e) : pe = t, Qu.current = null
}

function kp(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = T0(n, t), n !== null) {
				n.flags &= 32767, pe = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				ve = 6, pe = null;
				return
			}
		} else if (n = N0(n, t, Qe), n !== null) {
			pe = n;
			return
		}
		if (t = t.sibling, t !== null) {
			pe = t;
			return
		}
		pe = t = e
	} while (t !== null);
	ve === 0 && (ve = 5)
}

function vn(e, t, n) {
	var r = q,
		l = rt.transition;
	try {
		rt.transition = null, q = 1, L0(e, t, n, r)
	} finally {
		rt.transition = l, q = r
	}
	return null
}

function L0(e, t, n, r) {
	do ir(); while (Zt !== null);
	if (G & 6) throw Error(P(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var i = n.lanes | n.childLanes;
	if (vm(e, i), e === Se && (pe = Se = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $l || ($l = !0, Cp(si, function() {
			return ir(), null
		})), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
		i = rt.transition, rt.transition = null;
		var s = q;
		q = 1;
		var o = G;
		G |= 4, Qu.current = null, O0(e, n), vp(n, e), n0(Fo), ui = !!Co, Fo = Co = null, e.current = n, A0(n), om(), G = o, q = s, rt.transition = i
	} else e.current = n;
	if ($l && ($l = !1, Zt = e, _i = l), i = e.pendingLanes, i === 0 && (rn = null), cm(n.stateNode), We(e, ce()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
			componentStack: l.stack,
			digest: l.digest
		});
	if (Ei) throw Ei = !1, e = Qo, Qo = null, e;
	return _i & 1 && e.tag !== 0 && ir(), i = e.pendingLanes, i & 1 ? e === Go ? Br++ : (Br = 0, Go = e) : Br = 0, dn(), null
}

function ir() {
	if (Zt !== null) {
		var e = nd(_i),
			t = rt.transition,
			n = q;
		try {
			if (rt.transition = null, q = 16 > e ? 16 : e, Zt === null) var r = !1;
			else {
				if (e = Zt, Zt = null, _i = 0, G & 6) throw Error(P(331));
				var l = G;
				for (G |= 4, L = e.current; L !== null;) {
					var i = L,
						s = i.child;
					if (L.flags & 16) {
						var o = i.deletions;
						if (o !== null) {
							for (var u = 0; u < o.length; u++) {
								var a = o[u];
								for (L = a; L !== null;) {
									var d = L;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Ur(8, d, i)
									}
									var c = d.child;
									if (c !== null) c.return = d, L = c;
									else
										for (; L !== null;) {
											d = L;
											var p = d.sibling,
												y = d.return;
											if (pp(d), d === a) {
												L = null;
												break
											}
											if (p !== null) {
												p.return = y, L = p;
												break
											}
											L = y
										}
								}
							}
							var S = i.alternate;
							if (S !== null) {
								var w = S.child;
								if (w !== null) {
									S.child = null;
									do {
										var T = w.sibling;
										w.sibling = null, w = T
									} while (w !== null)
								}
							}
							L = i
						}
					}
					if (i.subtreeFlags & 2064 && s !== null) s.return = i, L = s;
					else e: for (; L !== null;) {
						if (i = L, i.flags & 2048) switch (i.tag) {
							case 0:
							case 11:
							case 15:
								Ur(9, i, i.return)
						}
						var h = i.sibling;
						if (h !== null) {
							h.return = i.return, L = h;
							break e
						}
						L = i.return
					}
				}
				var f = e.current;
				for (L = f; L !== null;) {
					s = L;
					var v = s.child;
					if (s.subtreeFlags & 2064 && v !== null) v.return = s, L = v;
					else e: for (s = f; L !== null;) {
						if (o = L, o.flags & 2048) try {
							switch (o.tag) {
								case 0:
								case 11:
								case 15:
									Bi(9, o)
							}
						} catch (g) {
							oe(o, o.return, g)
						}
						if (o === s) {
							L = null;
							break e
						}
						var E = o.sibling;
						if (E !== null) {
							E.return = o.return, L = E;
							break e
						}
						L = o.return
					}
				}
				if (G = l, dn(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
					kt.onPostCommitFiberRoot(Di, e)
				} catch {}
				r = !0
			}
			return r
		} finally {
			q = n, rt.transition = t
		}
	}
	return !1
}

function Pc(e, t, n) {
	t = dr(n, t), t = np(e, t, 1), e = nn(e, t, 1), t = Re(), e !== null && (dl(e, 1, t), We(e, t))
}

function oe(e, t, n) {
	if (e.tag === 3) Pc(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				Pc(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
					e = dr(n, e), e = rp(t, e, 1), t = nn(t, e, 1), e = Re(), t !== null && (dl(t, 1, e), We(t, e));
					break
				}
			}
			t = t.return
		}
}

function I0(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ce & n) === n && (ve === 4 || ve === 3 && (Ce & 130023424) === Ce && 500 > ce() - Ku ? kn(e, 0) : Gu |= n), We(e, t)
}

function Ep(e, t) {
	t === 0 && (e.mode & 1 ? (t = _l, _l <<= 1, !(_l & 130023424) && (_l = 4194304)) : t = 1);
	var n = Re();
	e = Dt(e, t), e !== null && (dl(e, t, n), We(e, n))
}

function M0(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Ep(e, n)
}

function z0(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState;
			l !== null && (n = l.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(P(314))
	}
	r !== null && r.delete(t), Ep(e, n)
}
var _p;
_p = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || be.current) Ue = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return Ue = !1, F0(e, t, n);
			Ue = !!(e.flags & 131072)
		}
	else Ue = !1, re && t.flags & 1048576 && Td(t, mi, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			Kl(e, t), e = t.pendingProps;
			var l = ur(t, Oe.current);
			lr(t, n), l = Uu(null, t, r, e, l, n);
			var i = bu();
			return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (i = !0, pi(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Lu(t), l.updater = bi, t.stateNode = l, l._reactInternals = t, Do(t, r, e, n), t = Mo(null, t, r, !0, i, n)) : (t.tag = 0, re && i && Pu(t), Ae(null, t, l, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (Kl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = U0(r), e = at(r, e), l) {
					case 0:
						t = Io(null, t, r, e, n);
						break e;
					case 1:
						t = xc(null, t, r, e, n);
						break e;
					case 11:
						t = yc(null, t, r, e, n);
						break e;
					case 14:
						t = gc(null, t, r, at(r.type, e), n);
						break e
				}
				throw Error(P(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), Io(e, t, r, l, n);
		case 1:
			return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), xc(e, t, r, l, n);
		case 3:
			e: {
				if (op(t), e === null) throw Error(P(387));r = t.pendingProps,
				i = t.memoizedState,
				l = i.element,
				$d(e, t),
				gi(t, r, null, n);
				var s = t.memoizedState;
				if (r = s.element, i.isDehydrated)
					if (i = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions
						}, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
						l = dr(Error(P(423)), t), t = wc(e, t, r, n, l);
						break e
					} else if (r !== l) {
					l = dr(Error(P(424)), t), t = wc(e, t, r, n, l);
					break e
				} else
					for (Ge = tn(t.stateNode.containerInfo.firstChild), Ze = t, re = !0, ft = null, n = jd(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (ar(), r === l) {
						t = Lt(e, t, n);
						break e
					}
					Ae(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return Dd(t), e === null && jo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, No(r, l) ? s = null : i !== null && No(r, i) && (t.flags |= 32), sp(e, t), Ae(e, t, s, n), t.child;
		case 6:
			return e === null && jo(t), null;
		case 13:
			return up(e, t, n);
		case 4:
			return Iu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = cr(t, null, r, n) : Ae(e, t, r, n), t.child;
		case 11:
			return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), yc(e, t, r, l, n);
		case 7:
			return Ae(e, t, t.pendingProps, n), t.child;
		case 8:
			return Ae(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Ae(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, X(vi, r._currentValue), r._currentValue = s, i !== null)
					if (mt(i.value, s)) {
						if (i.children === l.children && !be.current) {
							t = Lt(e, t, n);
							break e
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null;) {
							var o = i.dependencies;
							if (o !== null) {
								s = i.child;
								for (var u = o.firstContext; u !== null;) {
									if (u.context === r) {
										if (i.tag === 1) {
											u = At(-1, n & -n), u.tag = 2;
											var a = i.updateQueue;
											if (a !== null) {
												a = a.shared;
												var d = a.pending;
												d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u
											}
										}
										i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ro(i.return, n, t), o.lanes |= n;
										break
									}
									u = u.next
								}
							} else if (i.tag === 10) s = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (s = i.return, s === null) throw Error(P(341));
								s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Ro(s, n, t), s = i.sibling
							} else s = i.child;
							if (s !== null) s.return = i;
							else
								for (s = i; s !== null;) {
									if (s === t) {
										s = null;
										break
									}
									if (i = s.sibling, i !== null) {
										i.return = s.return, s = i;
										break
									}
									s = s.return
								}
							i = s
						}
				Ae(e, t, l.children, n),
				t = t.child
			}
			return t;
		case 9:
			return l = t.type, r = t.pendingProps.children, lr(t, n), l = lt(l), r = r(l), t.flags |= 1, Ae(e, t, r, n), t.child;
		case 14:
			return r = t.type, l = at(r, t.pendingProps), l = at(r.type, l), gc(e, t, r, l, n);
		case 15:
			return lp(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), Kl(e, t), t.tag = 1, Be(r) ? (e = !0, pi(t)) : e = !1, lr(t, n), tp(t, r, l), Do(t, r, l, n), Mo(null, t, r, !0, e, n);
		case 19:
			return ap(e, t, n);
		case 22:
			return ip(e, t, n)
	}
	throw Error(P(156, t.tag))
};

function Cp(e, t) {
	return Xf(e, t)
}

function V0(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function nt(e, t, n, r) {
	return new V0(e, t, n, r)
}

function Xu(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function U0(e) {
	if (typeof e == "function") return Xu(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === yu) return 11;
		if (e === gu) return 14
	}
	return 2
}

function sn(e, t) {
	var n = e.alternate;
	return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Yl(e, t, n, r, l, i) {
	var s = 2;
	if (r = e, typeof e == "function") Xu(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else e: switch (e) {
		case Un:
			return En(n.children, l, i, t);
		case vu:
			s = 8, l |= 8;
			break;
		case lo:
			return e = nt(12, n, t, l | 2), e.elementType = lo, e.lanes = i, e;
		case io:
			return e = nt(13, n, t, l), e.elementType = io, e.lanes = i, e;
		case so:
			return e = nt(19, n, t, l), e.elementType = so, e.lanes = i, e;
		case Df:
			return Hi(n, l, i, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case Rf:
					s = 10;
					break e;
				case $f:
					s = 9;
					break e;
				case yu:
					s = 11;
					break e;
				case gu:
					s = 14;
					break e;
				case Bt:
					s = 16, r = null;
					break e
			}
			throw Error(P(130, e == null ? e : typeof e, ""))
	}
	return t = nt(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function En(e, t, n, r) {
	return e = nt(7, e, r, t), e.lanes = n, e
}

function Hi(e, t, n, r) {
	return e = nt(22, e, r, t), e.elementType = Df, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function Ds(e, t, n) {
	return e = nt(6, e, null, t), e.lanes = n, e
}

function Ls(e, t, n) {
	return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function b0(e, t, n, r, l) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vs(0), this.expirationTimes = vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vs(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Ju(e, t, n, r, l, i, s, o, u) {
	return e = new b0(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = nt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, Lu(i), e
}

function B0(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Vn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function Fp(e) {
	if (!e) return an;
	e = e._reactInternals;
	e: {
		if (Rn(e) !== e || e.tag !== 1) throw Error(P(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Be(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(P(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Be(n)) return Fd(e, n, t)
	}
	return t
}

function Np(e, t, n, r, l, i, s, o, u) {
	return e = Ju(n, r, !0, e, l, i, s, o, u), e.context = Fp(null), n = e.current, r = Re(), l = ln(n), i = At(r, l), i.callback = t ?? null, nn(n, i, l), e.current.lanes = l, dl(e, l, r), We(e, r), e
}

function Qi(e, t, n, r) {
	var l = t.current,
		i = Re(),
		s = ln(l);
	return n = Fp(n), t.context === null ? t.context = n : t.pendingContext = n, t = At(i, s), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(l, t, s), e !== null && (ht(e, l, s, i), Hl(e, l, s)), s
}

function Fi(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function Oc(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function ea(e, t) {
	Oc(e, t), (e = e.alternate) && Oc(e, t)
}

function W0() {
	return null
}
var Tp = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function ta(e) {
	this._internalRoot = e
}
Gi.prototype.render = ta.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(P(409));
	Qi(e, t, null, null)
};
Gi.prototype.unmount = ta.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		An(function() {
			Qi(null, e, null, null)
		}), t[$t] = null
	}
};

function Gi(e) {
	this._internalRoot = e
}
Gi.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = id();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
		Ht.splice(n, 0, e), n === 0 && od(e)
	}
};

function na(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ki(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ac() {}

function H0(e, t, n, r, l) {
	if (l) {
		if (typeof r == "function") {
			var i = r;
			r = function() {
				var a = Fi(s);
				i.call(a)
			}
		}
		var s = Np(t, r, e, 0, null, !1, !1, "", Ac);
		return e._reactRootContainer = s, e[$t] = s.current, Jr(e.nodeType === 8 ? e.parentNode : e), An(), s
	}
	for (; l = e.lastChild;) e.removeChild(l);
	if (typeof r == "function") {
		var o = r;
		r = function() {
			var a = Fi(u);
			o.call(a)
		}
	}
	var u = Ju(e, 0, !1, null, null, !1, !1, "", Ac);
	return e._reactRootContainer = u, e[$t] = u.current, Jr(e.nodeType === 8 ? e.parentNode : e), An(function() {
		Qi(t, u, n, r)
	}), u
}

function Zi(e, t, n, r, l) {
	var i = n._reactRootContainer;
	if (i) {
		var s = i;
		if (typeof l == "function") {
			var o = l;
			l = function() {
				var u = Fi(s);
				o.call(u)
			}
		}
		Qi(t, s, e, l)
	} else s = H0(n, t, e, l, r);
	return Fi(s)
}
rd = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Rr(t.pendingLanes);
				n !== 0 && (Su(t, n | 1), We(t, ce()), !(G & 6) && (pr = ce() + 500, dn()))
			}
			break;
		case 13:
			An(function() {
				var r = Dt(e, 1);
				if (r !== null) {
					var l = Re();
					ht(r, e, 1, l)
				}
			}), ea(e, 1)
	}
};
ku = function(e) {
	if (e.tag === 13) {
		var t = Dt(e, 134217728);
		if (t !== null) {
			var n = Re();
			ht(t, e, 134217728, n)
		}
		ea(e, 134217728)
	}
};
ld = function(e) {
	if (e.tag === 13) {
		var t = ln(e),
			n = Dt(e, t);
		if (n !== null) {
			var r = Re();
			ht(n, e, t, r)
		}
		ea(e, t)
	}
};
id = function() {
	return q
};
sd = function(e, t) {
	var n = q;
	try {
		return q = e, t()
	} finally {
		q = n
	}
};
yo = function(e, t, n) {
	switch (t) {
		case "input":
			if (ao(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = zi(r);
						if (!l) throw Error(P(90));
						If(r), ao(r, l)
					}
				}
			}
			break;
		case "textarea":
			zf(e, n);
			break;
		case "select":
			t = n.value, t != null && er(e, !!n.multiple, t, !1)
	}
};
Qf = Zu;
Gf = An;
var Q0 = {
		usingClientEntryPoint: !1,
		Events: [hl, Hn, zi, Wf, Hf, Zu]
	},
	Tr = {
		findFiberByHostInstance: gn,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	G0 = {
		bundleType: Tr.bundleType,
		version: Tr.version,
		rendererPackageName: Tr.rendererPackageName,
		rendererConfig: Tr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: It.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = qf(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Tr.findFiberByHostInstance || W0,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Dl.isDisabled && Dl.supportsFiber) try {
		Di = Dl.inject(G0), kt = Dl
	} catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q0;
Ye.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!na(t)) throw Error(P(200));
	return B0(e, t, null, n)
};
Ye.createRoot = function(e, t) {
	if (!na(e)) throw Error(P(299));
	var n = !1,
		r = "",
		l = Tp;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ju(e, 1, !1, null, null, n, !1, r, l), e[$t] = t.current, Jr(e.nodeType === 8 ? e.parentNode : e), new ta(t)
};
Ye.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
	return e = qf(t), e = e === null ? null : e.stateNode, e
};
Ye.flushSync = function(e) {
	return An(e)
};
Ye.hydrate = function(e, t, n) {
	if (!Ki(t)) throw Error(P(200));
	return Zi(null, e, t, !0, n)
};
Ye.hydrateRoot = function(e, t, n) {
	if (!na(e)) throw Error(P(405));
	var r = n != null && n.hydratedSources || null,
		l = !1,
		i = "",
		s = Tp;
	if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Np(t, null, e, 1, n ?? null, l, !1, i, s), e[$t] = t.current, Jr(e), r)
		for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
	return new Gi(t)
};
Ye.render = function(e, t, n) {
	if (!Ki(t)) throw Error(P(200));
	return Zi(null, e, t, !1, n)
};
Ye.unmountComponentAtNode = function(e) {
	if (!Ki(e)) throw Error(P(40));
	return e._reactRootContainer ? (An(function() {
		Zi(null, null, e, !1, function() {
			e._reactRootContainer = null, e[$t] = null
		})
	}), !0) : !1
};
Ye.unstable_batchedUpdates = Zu;
Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!Ki(n)) throw Error(P(200));
	if (e == null || e._reactInternals === void 0) throw Error(P(38));
	return Zi(e, t, n, !1, r)
};
Ye.version = "18.3.1-next-f1338f8080-20240426";

function Pp() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)
	} catch (e) {
		console.error(e)
	}
}
Pp(), Pf.exports = Ye;
var K0 = Pf.exports,
	jc = K0;
no.createRoot = jc.createRoot, no.hydrateRoot = jc.hydrateRoot;
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ul() {
	return ul = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, ul.apply(this, arguments)
}
var qt;
(function(e) {
	e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(qt || (qt = {}));
const Rc = "popstate";

function Z0(e) {
	e === void 0 && (e = {});

	function t(r, l) {
		let {
			pathname: i,
			search: s,
			hash: o
		} = r.location;
		return qo("", {
			pathname: i,
			search: s,
			hash: o
		}, l.state && l.state.usr || null, l.state && l.state.key || "default")
	}

	function n(r, l) {
		return typeof l == "string" ? l : Ap(l)
	}
	return Y0(t, n, null, e)
}

function ye(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Op(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t)
		} catch {}
	}
}

function q0() {
	return Math.random().toString(36).substr(2, 8)
}

function $c(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t
	}
}

function qo(e, t, n, r) {
	return n === void 0 && (n = null), ul({
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: ""
	}, typeof t == "string" ? gr(t) : t, {
		state: n,
		key: t && t.key || r || q0()
	})
}

function Ap(e) {
	let {
		pathname: t = "/",
		search: n = "",
		hash: r = ""
	} = e;
	return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function gr(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
	}
	return t
}

function Y0(e, t, n, r) {
	r === void 0 && (r = {});
	let {
		window: l = document.defaultView,
		v5Compat: i = !1
	} = r, s = l.history, o = qt.Pop, u = null, a = d();
	a == null && (a = 0, s.replaceState(ul({}, s.state, {
		idx: a
	}), ""));

	function d() {
		return (s.state || {
			idx: null
		}).idx
	}

	function c() {
		o = qt.Pop;
		let T = d(),
			h = T == null ? null : T - a;
		a = T, u && u({
			action: o,
			location: w.location,
			delta: h
		})
	}

	function p(T, h) {
		o = qt.Push;
		let f = qo(w.location, T, h);
		a = d() + 1;
		let v = $c(f, a),
			E = w.createHref(f);
		try {
			s.pushState(v, "", E)
		} catch (g) {
			if (g instanceof DOMException && g.name === "DataCloneError") throw g;
			l.location.assign(E)
		}
		i && u && u({
			action: o,
			location: w.location,
			delta: 1
		})
	}

	function y(T, h) {
		o = qt.Replace;
		let f = qo(w.location, T, h);
		a = d();
		let v = $c(f, a),
			E = w.createHref(f);
		s.replaceState(v, "", E), i && u && u({
			action: o,
			location: w.location,
			delta: 0
		})
	}

	function S(T) {
		let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
			f = typeof T == "string" ? T : Ap(T);
		return f = f.replace(/ $/, "%20"), ye(h, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, h)
	}
	let w = {
		get action() {
			return o
		},
		get location() {
			return e(l, s)
		},
		listen(T) {
			if (u) throw new Error("A history only accepts one active listener");
			return l.addEventListener(Rc, c), u = T, () => {
				l.removeEventListener(Rc, c), u = null
			}
		},
		createHref(T) {
			return t(l, T)
		},
		createURL: S,
		encodeLocation(T) {
			let h = S(T);
			return {
				pathname: h.pathname,
				search: h.search,
				hash: h.hash
			}
		},
		push: p,
		replace: y,
		go(T) {
			return s.go(T)
		}
	};
	return w
}
var Dc;
(function(e) {
	e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Dc || (Dc = {}));

function X0(e, t, n) {
	return n === void 0 && (n = "/"), J0(e, t, n, !1)
}

function J0(e, t, n, r) {
	let l = typeof t == "string" ? gr(t) : t,
		i = $p(l.pathname || "/", n);
	if (i == null) return null;
	let s = jp(e);
	ev(s);
	let o = null;
	for (let u = 0; o == null && u < s.length; ++u) {
		let a = fv(i);
		o = av(s[u], a, r)
	}
	return o
}

function jp(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let l = (i, s, o) => {
		let u = {
			relativePath: o === void 0 ? i.path || "" : o,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: s,
			route: i
		};
		u.relativePath.startsWith("/") && (ye(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
		let a = _n([r, u.relativePath]),
			d = n.concat(u);
		i.children && i.children.length > 0 && (ye(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), jp(i.children, t, d, a)), !(i.path == null && !i.index) && t.push({
			path: a,
			score: ov(a, i.index),
			routesMeta: d
		})
	};
	return e.forEach((i, s) => {
		var o;
		if (i.path === "" || !((o = i.path) != null && o.includes("?"))) l(i, s);
		else
			for (let u of Rp(i.path)) l(i, s, u)
	}), t
}

function Rp(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, l = n.endsWith("?"), i = n.replace(/\?$/, "");
	if (r.length === 0) return l ? [i, ""] : [i];
	let s = Rp(r.join("/")),
		o = [];
	return o.push(...s.map(u => u === "" ? i : [i, u].join("/"))), l && o.push(...s), o.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function ev(e) {
	e.sort((t, n) => t.score !== n.score ? n.score - t.score : uv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const tv = /^:[\w-]+$/,
	nv = 3,
	rv = 2,
	lv = 1,
	iv = 10,
	sv = -2,
	Lc = e => e === "*";

function ov(e, t) {
	let n = e.split("/"),
		r = n.length;
	return n.some(Lc) && (r += sv), t && (r += rv), n.filter(l => !Lc(l)).reduce((l, i) => l + (tv.test(i) ? nv : i === "" ? lv : iv), r)
}

function uv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function av(e, t, n) {
	let {
		routesMeta: r
	} = e, l = {}, i = "/", s = [];
	for (let o = 0; o < r.length; ++o) {
		let u = r[o],
			a = o === r.length - 1,
			d = i === "/" ? t : t.slice(i.length) || "/",
			c = Ic({
				path: u.relativePath,
				caseSensitive: u.caseSensitive,
				end: a
			}, d),
			p = u.route;
		if (!c && a && n && !r[r.length - 1].route.index && (c = Ic({
				path: u.relativePath,
				caseSensitive: u.caseSensitive,
				end: !1
			}, d)), !c) return null;
		Object.assign(l, c.params), s.push({
			params: l,
			pathname: _n([i, c.pathname]),
			pathnameBase: yv(_n([i, c.pathnameBase])),
			route: p
		}), c.pathnameBase !== "/" && (i = _n([i, c.pathnameBase]))
	}
	return s
}

function Ic(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = cv(e.path, e.caseSensitive, e.end), l = t.match(n);
	if (!l) return null;
	let i = l[0],
		s = i.replace(/(.)\/+$/, "$1"),
		o = l.slice(1);
	return {
		params: r.reduce((a, d, c) => {
			let {
				paramName: p,
				isOptional: y
			} = d;
			if (p === "*") {
				let w = o[c] || "";
				s = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
			}
			const S = o[c];
			return y && !S ? a[p] = void 0 : a[p] = (S || "").replace(/%2F/g, "/"), a
		}, {}),
		pathname: i,
		pathnameBase: s,
		pattern: e
	}
}

function cv(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !0), Op(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
	let r = [],
		l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, o, u) => (r.push({
			paramName: o,
			isOptional: u != null
		}), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
	return e.endsWith("*") ? (r.push({
		paramName: "*"
	}), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function fv(e) {
	try {
		return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
	} catch (t) {
		return Op(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
	}
}

function $p(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/"
}

function dv(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: l = ""
	} = typeof e == "string" ? gr(e) : e;
	return {
		pathname: n ? n.startsWith("/") ? n : pv(n, t) : t,
		search: gv(r),
		hash: xv(l)
	}
}

function pv(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach(l => {
		l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
	}), n.length > 1 ? n.join("/") : "/"
}

function Is(e, t, n, r) {
	return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function hv(e) {
	return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function mv(e, t) {
	let n = hv(e);
	return t ? n.map((r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function vv(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == "string" ? l = gr(e) : (l = ul({}, e), ye(!l.pathname || !l.pathname.includes("?"), Is("?", "pathname", "search", l)), ye(!l.pathname || !l.pathname.includes("#"), Is("#", "pathname", "hash", l)), ye(!l.search || !l.search.includes("#"), Is("#", "search", "hash", l)));
	let i = e === "" || l.pathname === "",
		s = i ? "/" : l.pathname,
		o;
	if (s == null) o = n;
	else {
		let c = t.length - 1;
		if (!r && s.startsWith("..")) {
			let p = s.split("/");
			for (; p[0] === "..";) p.shift(), c -= 1;
			l.pathname = p.join("/")
		}
		o = c >= 0 ? t[c] : "/"
	}
	let u = dv(l, o),
		a = s && s !== "/" && s.endsWith("/"),
		d = (i || s === ".") && n.endsWith("/");
	return !u.pathname.endsWith("/") && (a || d) && (u.pathname += "/"), u
}
const _n = e => e.join("/").replace(/\/\/+/g, "/"),
	yv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	gv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
	xv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function wv(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Dp = ["post", "put", "patch", "delete"];
new Set(Dp);
const Sv = ["get", ...Dp];
new Set(Sv);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function al() {
	return al = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, al.apply(this, arguments)
}
const ra = k.createContext(null),
	kv = k.createContext(null),
	qi = k.createContext(null),
	Yi = k.createContext(null),
	xr = k.createContext({
		outlet: null,
		matches: [],
		isDataRoute: !1
	}),
	Lp = k.createContext(null);

function Xi() {
	return k.useContext(Yi) != null
}

function Ip() {
	return Xi() || ye(!1), k.useContext(Yi).location
}

function Mp(e) {
	k.useContext(qi).static || k.useLayoutEffect(e)
}

function Ev() {
	let {
		isDataRoute: e
	} = k.useContext(xr);
	return e ? Lv() : _v()
}

function _v() {
	Xi() || ye(!1);
	let e = k.useContext(ra),
		{
			basename: t,
			future: n,
			navigator: r
		} = k.useContext(qi),
		{
			matches: l
		} = k.useContext(xr),
		{
			pathname: i
		} = Ip(),
		s = JSON.stringify(mv(l, n.v7_relativeSplatPath)),
		o = k.useRef(!1);
	return Mp(() => {
		o.current = !0
	}), k.useCallback(function(a, d) {
		if (d === void 0 && (d = {}), !o.current) return;
		if (typeof a == "number") {
			r.go(a);
			return
		}
		let c = vv(a, JSON.parse(s), i, d.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : _n([t, c.pathname])), (d.replace ? r.replace : r.push)(c, d.state, d)
	}, [t, r, s, i, e])
}

function Cv(e, t) {
	return Fv(e, t)
}

function Fv(e, t, n, r) {
	Xi() || ye(!1);
	let {
		navigator: l
	} = k.useContext(qi), {
		matches: i
	} = k.useContext(xr), s = i[i.length - 1], o = s ? s.params : {};
	s && s.pathname;
	let u = s ? s.pathnameBase : "/";
	s && s.route;
	let a = Ip(),
		d;
	if (t) {
		var c;
		let T = typeof t == "string" ? gr(t) : t;
		u === "/" || (c = T.pathname) != null && c.startsWith(u) || ye(!1), d = T
	} else d = a;
	let p = d.pathname || "/",
		y = p;
	if (u !== "/") {
		let T = u.replace(/^\//, "").split("/");
		y = "/" + p.replace(/^\//, "").split("/").slice(T.length).join("/")
	}
	let S = X0(e, {
			pathname: y
		}),
		w = Av(S && S.map(T => Object.assign({}, T, {
			params: Object.assign({}, o, T.params),
			pathname: _n([u, l.encodeLocation ? l.encodeLocation(T.pathname).pathname : T.pathname]),
			pathnameBase: T.pathnameBase === "/" ? u : _n([u, l.encodeLocation ? l.encodeLocation(T.pathnameBase).pathname : T.pathnameBase])
		})), i, n, r);
	return t && w ? k.createElement(Yi.Provider, {
		value: {
			location: al({
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default"
			}, d),
			navigationType: qt.Pop
		}
	}, w) : w
}

function Nv() {
	let e = Dv(),
		t = wv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = {
			padding: "0.5rem",
			backgroundColor: "rgba(200,200,200, 0.5)"
		};
	return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, t), n ? k.createElement("pre", {
		style: l
	}, n) : null, null)
}
const Tv = k.createElement(Nv, null);
class Pv extends k.Component {
	constructor(t) {
		super(t), this.state = {
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
		return this.state.error !== void 0 ? k.createElement(xr.Provider, {
			value: this.props.routeContext
		}, k.createElement(Lp.Provider, {
			value: this.state.error,
			children: this.props.component
		})) : this.props.children
	}
}

function Ov(e) {
	let {
		routeContext: t,
		match: n,
		children: r
	} = e, l = k.useContext(ra);
	return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(xr.Provider, {
		value: t
	}, r)
}

function Av(e, t, n, r) {
	var l;
	if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null
	}
	let s = e,
		o = (l = n) == null ? void 0 : l.errors;
	if (o != null) {
		let d = s.findIndex(c => c.route.id && (o == null ? void 0 : o[c.route.id]) !== void 0);
		d >= 0 || ye(!1), s = s.slice(0, Math.min(s.length, d + 1))
	}
	let u = !1,
		a = -1;
	if (n && r && r.v7_partialHydration)
		for (let d = 0; d < s.length; d++) {
			let c = s[d];
			if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = d), c.route.id) {
				let {
					loaderData: p,
					errors: y
				} = n, S = c.route.loader && p[c.route.id] === void 0 && (!y || y[c.route.id] === void 0);
				if (c.route.lazy || S) {
					u = !0, a >= 0 ? s = s.slice(0, a + 1) : s = [s[0]];
					break
				}
			}
		}
	return s.reduceRight((d, c, p) => {
		let y, S = !1,
			w = null,
			T = null;
		n && (y = o && c.route.id ? o[c.route.id] : void 0, w = c.route.errorElement || Tv, u && (a < 0 && p === 0 ? (S = !0, T = null) : a === p && (S = !0, T = c.route.hydrateFallbackElement || null)));
		let h = t.concat(s.slice(0, p + 1)),
			f = () => {
				let v;
				return y ? v = w : S ? v = T : c.route.Component ? v = k.createElement(c.route.Component, null) : c.route.element ? v = c.route.element : v = d, k.createElement(Ov, {
					match: c,
					routeContext: {
						outlet: d,
						matches: h,
						isDataRoute: n != null
					},
					children: v
				})
			};
		return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0) ? k.createElement(Pv, {
			location: n.location,
			revalidation: n.revalidation,
			component: w,
			error: y,
			children: f(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			}
		}) : f()
	}, null)
}
var zp = function(e) {
		return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
	}(zp || {}),
	Ni = function(e) {
		return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
	}(Ni || {});

function jv(e) {
	let t = k.useContext(ra);
	return t || ye(!1), t
}

function Rv(e) {
	let t = k.useContext(kv);
	return t || ye(!1), t
}

function $v(e) {
	let t = k.useContext(xr);
	return t || ye(!1), t
}

function Vp(e) {
	let t = $v(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || ye(!1), n.route.id
}

function Dv() {
	var e;
	let t = k.useContext(Lp),
		n = Rv(Ni.UseRouteError),
		r = Vp(Ni.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Lv() {
	let {
		router: e
	} = jv(zp.UseNavigateStable), t = Vp(Ni.UseNavigateStable), n = k.useRef(!1);
	return Mp(() => {
		n.current = !0
	}), k.useCallback(function(l, i) {
		i === void 0 && (i = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, al({
			fromRouteId: t
		}, i)))
	}, [e, t])
}

function Yo(e) {
	ye(!1)
}

function Iv(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: l = qt.Pop,
		navigator: i,
		static: s = !1,
		future: o
	} = e;
	Xi() && ye(!1);
	let u = t.replace(/^\/*/, "/"),
		a = k.useMemo(() => ({
			basename: u,
			navigator: i,
			static: s,
			future: al({
				v7_relativeSplatPath: !1
			}, o)
		}), [u, o, i, s]);
	typeof r == "string" && (r = gr(r));
	let {
		pathname: d = "/",
		search: c = "",
		hash: p = "",
		state: y = null,
		key: S = "default"
	} = r, w = k.useMemo(() => {
		let T = $p(d, u);
		return T == null ? null : {
			location: {
				pathname: T,
				search: c,
				hash: p,
				state: y,
				key: S
			},
			navigationType: l
		}
	}, [u, d, c, p, y, S, l]);
	return w == null ? null : k.createElement(qi.Provider, {
		value: a
	}, k.createElement(Yi.Provider, {
		children: n,
		value: w
	}))
}

function Mv(e) {
	let {
		children: t,
		location: n
	} = e;
	return Cv(Xo(t), n)
}
new Promise(() => {});

function Xo(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return k.Children.forEach(e, (r, l) => {
		if (!k.isValidElement(r)) return;
		let i = [...t, l];
		if (r.type === k.Fragment) {
			n.push.apply(n, Xo(r.props.children, i));
			return
		}
		r.type !== Yo && ye(!1), !r.props.index || !r.props.children || ye(!1);
		let s = {
			id: r.props.id || i.join("-"),
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
		r.props.children && (s.children = Xo(r.props.children, i)), n.push(s)
	}), n
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const zv = "6";
try {
	window.__reactRouterVersion = zv
} catch {}
const Vv = "startTransition",
	Mc = to[Vv];

function Uv(e) {
	let {
		basename: t,
		children: n,
		future: r,
		window: l
	} = e, i = k.useRef();
	i.current == null && (i.current = Z0({
		window: l,
		v5Compat: !0
	}));
	let s = i.current,
		[o, u] = k.useState({
			action: s.action,
			location: s.location
		}),
		{
			v7_startTransition: a
		} = r || {},
		d = k.useCallback(c => {
			a && Mc ? Mc(() => u(c)) : u(c)
		}, [u, a]);
	return k.useLayoutEffect(() => s.listen(d), [s, d]), k.createElement(Iv, {
		basename: t,
		children: n,
		location: o.location,
		navigationType: o.action,
		navigator: s,
		future: r
	})
}
var zc;
(function(e) {
	e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(zc || (zc = {}));
var Vc;
(function(e) {
	e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Vc || (Vc = {}));
var vl = e => e.type === "checkbox",
	Xn = e => e instanceof Date,
	je = e => e == null;
const Up = e => typeof e == "object";
var ge = e => !je(e) && !Array.isArray(e) && Up(e) && !Xn(e),
	bv = e => ge(e) && e.target ? vl(e.target) ? e.target.checked : e.target.value : e,
	Bv = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
	Wv = (e, t) => e.has(Bv(t)),
	Hv = e => {
		const t = e.constructor && e.constructor.prototype;
		return ge(t) && t.hasOwnProperty("isPrototypeOf")
	},
	la = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function Ee(e) {
	let t;
	const n = Array.isArray(e);
	if (e instanceof Date) t = new Date(e);
	else if (e instanceof Set) t = new Set(e);
	else if (!(la && (e instanceof Blob || e instanceof FileList)) && (n || ge(e)))
		if (t = n ? [] : {}, !n && !Hv(e)) t = e;
		else
			for (const r in e) e.hasOwnProperty(r) && (t[r] = Ee(e[r]));
	else return e;
	return t
}
var yl = e => Array.isArray(e) ? e.filter(Boolean) : [],
	ee = e => e === void 0,
	R = (e, t, n) => {
		if (!t || !ge(e)) return n;
		const r = yl(t.split(/[,[\].]+?/)).reduce((l, i) => je(l) ? l : l[i], e);
		return ee(r) || r === e ? ee(e[t]) ? n : e[t] : r
	},
	Gt = e => typeof e == "boolean",
	ia = e => /^\w*$/.test(e),
	bp = e => yl(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
	Z = (e, t, n) => {
		let r = -1;
		const l = ia(t) ? [t] : bp(t),
			i = l.length,
			s = i - 1;
		for (; ++r < i;) {
			const o = l[r];
			let u = n;
			if (r !== s) {
				const a = e[o];
				u = ge(a) || Array.isArray(a) ? a : isNaN(+l[r + 1]) ? {} : []
			}
			if (o === "__proto__") return;
			e[o] = u, e = e[o]
		}
		return e
	};
const Uc = {
		BLUR: "blur",
		FOCUS_OUT: "focusout",
		CHANGE: "change"
	},
	tt = {
		onBlur: "onBlur",
		onChange: "onChange",
		onSubmit: "onSubmit",
		onTouched: "onTouched",
		all: "all"
	},
	_t = {
		max: "max",
		min: "min",
		maxLength: "maxLength",
		minLength: "minLength",
		pattern: "pattern",
		required: "required",
		validate: "validate"
	},
	Qv = H.createContext(null),
	Gv = () => H.useContext(Qv);
var Kv = (e, t, n, r = !0) => {
		const l = {
			defaultValues: t._defaultValues
		};
		for (const i in e) Object.defineProperty(l, i, {
			get: () => {
				const s = i;
				return t._proxyFormState[s] !== tt.all && (t._proxyFormState[s] = !r || tt.all), e[s]
			}
		});
		return l
	},
	Ie = e => ge(e) && !Object.keys(e).length,
	Zv = (e, t, n, r) => {
		n(e);
		const {
			name: l,
			...i
		} = e;
		return Ie(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find(s => t[s] === tt.all)
	},
	Ke = e => Array.isArray(e) ? e : [e];

function Bp(e) {
	const t = H.useRef(e);
	t.current = e, H.useEffect(() => {
		const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
			next: t.current.next
		});
		return () => {
			n && n.unsubscribe()
		}
	}, [e.disabled])
}
var St = e => typeof e == "string",
	qv = (e, t, n, r, l) => St(e) ? (r && t.watch.add(e), R(n, e, l)) : Array.isArray(e) ? e.map(i => (r && t.watch.add(i), R(n, i))) : (r && (t.watchAll = !0), n),
	Wp = (e, t, n, r, l) => t ? {
		...n[e],
		types: {
			...n[e] && n[e].types ? n[e].types : {},
			[r]: l || !0
		}
	} : {},
	zt = () => {
		const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => {
			const n = (Math.random() * 16 + e) % 16 | 0;
			return (t == "x" ? n : n & 3 | 8).toString(16)
		})
	},
	Ms = (e, t, n = {}) => n.shouldFocus || ee(n.shouldFocus) ? n.focusName || `${e}.${ee(n.focusIndex)?t:n.focusIndex}.` : "",
	Wr = e => ({
		isOnSubmit: !e || e === tt.onSubmit,
		isOnBlur: e === tt.onBlur,
		isOnChange: e === tt.onChange,
		isOnAll: e === tt.all,
		isOnTouch: e === tt.onTouched
	}),
	Jo = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const sr = (e, t, n, r) => {
	for (const l of n || Object.keys(e)) {
		const i = R(e, l);
		if (i) {
			const {
				_f: s,
				...o
			} = i;
			if (s) {
				if (s.refs && s.refs[0] && t(s.refs[0], l) && !r) break;
				if (s.ref && t(s.ref, s.name) && !r) break;
				sr(o, t)
			} else ge(o) && sr(o, t)
		}
	}
};
var Hp = (e, t, n) => {
		const r = Ke(R(e, n));
		return Z(r, "root", t[n]), Z(e, n, r), e
	},
	sa = e => e.type === "file",
	Yt = e => typeof e == "function",
	Ti = e => {
		if (!la) return !1;
		const t = e ? e.ownerDocument : 0;
		return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
	},
	Xl = e => St(e),
	oa = e => e.type === "radio",
	Pi = e => e instanceof RegExp;
const bc = {
		value: !1,
		isValid: !1
	},
	Bc = {
		value: !0,
		isValid: !0
	};
var Qp = e => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
			return {
				value: t,
				isValid: !!t.length
			}
		}
		return e[0].checked && !e[0].disabled ? e[0].attributes && !ee(e[0].attributes.value) ? ee(e[0].value) || e[0].value === "" ? Bc : {
			value: e[0].value,
			isValid: !0
		} : Bc : bc
	}
	return bc
};
const Wc = {
	isValid: !1,
	value: null
};
var Gp = e => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
	isValid: !0,
	value: n.value
} : t, Wc) : Wc;

function Hc(e, t, n = "validate") {
	if (Xl(e) || Array.isArray(e) && e.every(Xl) || Gt(e) && !e) return {
		type: n,
		message: Xl(e) ? e : "",
		ref: t
	}
}
var Mn = e => ge(e) && !Pi(e) ? e : {
		value: e,
		message: ""
	},
	eu = async (e, t, n, r, l) => {
		const {
			ref: i,
			refs: s,
			required: o,
			maxLength: u,
			minLength: a,
			min: d,
			max: c,
			pattern: p,
			validate: y,
			name: S,
			valueAsNumber: w,
			mount: T,
			disabled: h
		} = e._f, f = R(t, S);
		if (!T || h) return {};
		const v = s ? s[0] : i,
			E = z => {
				r && v.reportValidity && (v.setCustomValidity(Gt(z) ? "" : z || ""), v.reportValidity())
			},
			g = {},
			C = oa(i),
			N = vl(i),
			O = C || N,
			M = (w || sa(i)) && ee(i.value) && ee(f) || Ti(i) && i.value === "" || f === "" || Array.isArray(f) && !f.length,
			I = Wp.bind(null, S, n, g),
			W = (z, b, Y, ue = _t.maxLength, xe = _t.minLength) => {
				const he = z ? b : Y;
				g[S] = {
					type: z ? ue : xe,
					message: he,
					ref: i,
					...I(z ? ue : xe, he)
				}
			};
		if (l ? !Array.isArray(f) || !f.length : o && (!O && (M || je(f)) || Gt(f) && !f || N && !Qp(s).isValid || C && !Gp(s).isValid)) {
			const {
				value: z,
				message: b
			} = Xl(o) ? {
				value: !!o,
				message: o
			} : Mn(o);
			if (z && (g[S] = {
					type: _t.required,
					message: b,
					ref: v,
					...I(_t.required, b)
				}, !n)) return E(b), g
		}
		if (!M && (!je(d) || !je(c))) {
			let z, b;
			const Y = Mn(c),
				ue = Mn(d);
			if (!je(f) && !isNaN(f)) {
				const xe = i.valueAsNumber || f && +f;
				je(Y.value) || (z = xe > Y.value), je(ue.value) || (b = xe < ue.value)
			} else {
				const xe = i.valueAsDate || new Date(f),
					he = B => new Date(new Date().toDateString() + " " + B),
					$ = i.type == "time",
					U = i.type == "week";
				St(Y.value) && f && (z = $ ? he(f) > he(Y.value) : U ? f > Y.value : xe > new Date(Y.value)), St(ue.value) && f && (b = $ ? he(f) < he(ue.value) : U ? f < ue.value : xe < new Date(ue.value))
			}
			if ((z || b) && (W(!!z, Y.message, ue.message, _t.max, _t.min), !n)) return E(g[S].message), g
		}
		if ((u || a) && !M && (St(f) || l && Array.isArray(f))) {
			const z = Mn(u),
				b = Mn(a),
				Y = !je(z.value) && f.length > +z.value,
				ue = !je(b.value) && f.length < +b.value;
			if ((Y || ue) && (W(Y, z.message, b.message), !n)) return E(g[S].message), g
		}
		if (p && !M && St(f)) {
			const {
				value: z,
				message: b
			} = Mn(p);
			if (Pi(z) && !f.match(z) && (g[S] = {
					type: _t.pattern,
					message: b,
					ref: i,
					...I(_t.pattern, b)
				}, !n)) return E(b), g
		}
		if (y) {
			if (Yt(y)) {
				const z = await y(f, t),
					b = Hc(z, v);
				if (b && (g[S] = {
						...b,
						...I(_t.validate, b.message)
					}, !n)) return E(b.message), g
			} else if (ge(y)) {
				let z = {};
				for (const b in y) {
					if (!Ie(z) && !n) break;
					const Y = Hc(await y[b](f, t), v, b);
					Y && (z = {
						...Y,
						...I(b, Y.message)
					}, E(Y.message), n && (g[S] = z))
				}
				if (!Ie(z) && (g[S] = {
						ref: v,
						...z
					}, !n)) return g
			}
		}
		return E(!0), g
	}, zs = (e, t) => [...e, ...Ke(t)], Vs = e => Array.isArray(e) ? e.map(() => {}) : void 0;

function Us(e, t, n) {
	return [...e.slice(0, t), ...Ke(n), ...e.slice(t)]
}
var bs = (e, t, n) => Array.isArray(e) ? (ee(e[n]) && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]), e) : [],
	Bs = (e, t) => [...Ke(t), ...Ke(e)];

function Yv(e, t) {
	let n = 0;
	const r = [...e];
	for (const l of t) r.splice(l - n, 1), n++;
	return yl(r).length ? r : []
}
var Ws = (e, t) => ee(t) ? [] : Yv(e, Ke(t).sort((n, r) => n - r)),
	Hs = (e, t, n) => {
		[e[t], e[n]] = [e[n], e[t]]
	};

function Xv(e, t) {
	const n = t.slice(0, -1).length;
	let r = 0;
	for (; r < n;) e = ee(e) ? r++ : e[t[r++]];
	return e
}

function Jv(e) {
	for (const t in e)
		if (e.hasOwnProperty(t) && !ee(e[t])) return !1;
	return !0
}

function de(e, t) {
	const n = Array.isArray(t) ? t : ia(t) ? [t] : bp(t),
		r = n.length === 1 ? e : Xv(e, n),
		l = n.length - 1,
		i = n[l];
	return r && delete r[i], l !== 0 && (ge(r) && Ie(r) || Array.isArray(r) && Jv(r)) && de(e, n.slice(0, -1)), e
}
var Qc = (e, t, n) => (e[t] = n, e);

function Gc(e) {
	const t = Gv(),
		{
			control: n = t.control,
			name: r,
			keyName: l = "id",
			shouldUnregister: i
		} = e,
		[s, o] = H.useState(n._getFieldArray(r)),
		u = H.useRef(n._getFieldArray(r).map(zt)),
		a = H.useRef(s),
		d = H.useRef(r),
		c = H.useRef(!1);
	d.current = r, a.current = s, n._names.array.add(r), e.rules && n.register(r, e.rules), Bp({
		next: ({
			values: g,
			name: C
		}) => {
			if (C === d.current || !C) {
				const N = R(g, d.current);
				Array.isArray(N) && (o(N), u.current = N.map(zt))
			}
		},
		subject: n._subjects.array
	});
	const p = H.useCallback(g => {
			c.current = !0, n._updateFieldArray(r, g)
		}, [n, r]),
		y = (g, C) => {
			const N = Ke(Ee(g)),
				O = zs(n._getFieldArray(r), N);
			n._names.focus = Ms(r, O.length - 1, C), u.current = zs(u.current, N.map(zt)), p(O), o(O), n._updateFieldArray(r, O, zs, {
				argA: Vs(g)
			})
		},
		S = (g, C) => {
			const N = Ke(Ee(g)),
				O = Bs(n._getFieldArray(r), N);
			n._names.focus = Ms(r, 0, C), u.current = Bs(u.current, N.map(zt)), p(O), o(O), n._updateFieldArray(r, O, Bs, {
				argA: Vs(g)
			})
		},
		w = g => {
			const C = Ws(n._getFieldArray(r), g);
			u.current = Ws(u.current, g), p(C), o(C), n._updateFieldArray(r, C, Ws, {
				argA: g
			})
		},
		T = (g, C, N) => {
			const O = Ke(Ee(C)),
				M = Us(n._getFieldArray(r), g, O);
			n._names.focus = Ms(r, g, N), u.current = Us(u.current, g, O.map(zt)), p(M), o(M), n._updateFieldArray(r, M, Us, {
				argA: g,
				argB: Vs(C)
			})
		},
		h = (g, C) => {
			const N = n._getFieldArray(r);
			Hs(N, g, C), Hs(u.current, g, C), p(N), o(N), n._updateFieldArray(r, N, Hs, {
				argA: g,
				argB: C
			}, !1)
		},
		f = (g, C) => {
			const N = n._getFieldArray(r);
			bs(N, g, C), bs(u.current, g, C), p(N), o(N), n._updateFieldArray(r, N, bs, {
				argA: g,
				argB: C
			}, !1)
		},
		v = (g, C) => {
			const N = Ee(C),
				O = Qc(n._getFieldArray(r), g, N);
			u.current = [...O].map((M, I) => !M || I === g ? zt() : u.current[I]), p(O), o([...O]), n._updateFieldArray(r, O, Qc, {
				argA: g,
				argB: N
			}, !0, !1)
		},
		E = g => {
			const C = Ke(Ee(g));
			u.current = C.map(zt), p([...C]), o([...C]), n._updateFieldArray(r, [...C], N => N, {}, !0, !1)
		};
	return H.useEffect(() => {
		if (n._state.action = !1, Jo(r, n._names) && n._subjects.state.next({
				...n._formState
			}), c.current && (!Wr(n._options.mode).isOnSubmit || n._formState.isSubmitted))
			if (n._options.resolver) n._executeSchema([r]).then(g => {
				const C = R(g.errors, r),
					N = R(n._formState.errors, r);
				(N ? !C && N.type || C && (N.type !== C.type || N.message !== C.message) : C && C.type) && (C ? Z(n._formState.errors, r, C) : de(n._formState.errors, r), n._subjects.state.next({
					errors: n._formState.errors
				}))
			});
			else {
				const g = R(n._fields, r);
				g && g._f && !(Wr(n._options.reValidateMode).isOnSubmit && Wr(n._options.mode).isOnSubmit) && eu(g, n._formValues, n._options.criteriaMode === tt.all, n._options.shouldUseNativeValidation, !0).then(C => !Ie(C) && n._subjects.state.next({
					errors: Hp(n._formState.errors, C, r)
				}))
			} n._subjects.values.next({
			name: r,
			values: {
				...n._formValues
			}
		}), n._names.focus && sr(n._fields, (g, C) => {
			if (n._names.focus && C.startsWith(n._names.focus) && g.focus) return g.focus(), 1
		}), n._names.focus = "", n._updateValid(), c.current = !1
	}, [s, r, n]), H.useEffect(() => (!R(n._formValues, r) && n._updateFieldArray(r), () => {
		(n._options.shouldUnregister || i) && n.unregister(r)
	}), [r, n, l, i]), {
		swap: H.useCallback(h, [p, r, n]),
		move: H.useCallback(f, [p, r, n]),
		prepend: H.useCallback(S, [p, r, n]),
		append: H.useCallback(y, [p, r, n]),
		remove: H.useCallback(w, [p, r, n]),
		insert: H.useCallback(T, [p, r, n]),
		update: H.useCallback(v, [p, r, n]),
		replace: H.useCallback(E, [p, r, n]),
		fields: H.useMemo(() => s.map((g, C) => ({
			...g,
			[l]: u.current[C] || zt()
		})), [s, l])
	}
}
var Qs = () => {
		let e = [];
		return {
			get observers() {
				return e
			},
			next: l => {
				for (const i of e) i.next && i.next(l)
			},
			subscribe: l => (e.push(l), {
				unsubscribe: () => {
					e = e.filter(i => i !== l)
				}
			}),
			unsubscribe: () => {
				e = []
			}
		}
	},
	Oi = e => je(e) || !Up(e);

function Sn(e, t) {
	if (Oi(e) || Oi(t)) return e === t;
	if (Xn(e) && Xn(t)) return e.getTime() === t.getTime();
	const n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (const l of n) {
		const i = e[l];
		if (!r.includes(l)) return !1;
		if (l !== "ref") {
			const s = t[l];
			if (Xn(i) && Xn(s) || ge(i) && ge(s) || Array.isArray(i) && Array.isArray(s) ? !Sn(i, s) : i !== s) return !1
		}
	}
	return !0
}
var Kp = e => e.type === "select-multiple",
	ey = e => oa(e) || vl(e),
	Gs = e => Ti(e) && e.isConnected,
	Zp = e => {
		for (const t in e)
			if (Yt(e[t])) return !0;
		return !1
	};

function Ai(e, t = {}) {
	const n = Array.isArray(e);
	if (ge(e) || n)
		for (const r in e) Array.isArray(e[r]) || ge(e[r]) && !Zp(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Ai(e[r], t[r])) : je(e[r]) || (t[r] = !0);
	return t
}

function qp(e, t, n) {
	const r = Array.isArray(e);
	if (ge(e) || r)
		for (const l in e) Array.isArray(e[l]) || ge(e[l]) && !Zp(e[l]) ? ee(t) || Oi(n[l]) ? n[l] = Array.isArray(e[l]) ? Ai(e[l], []) : {
			...Ai(e[l])
		} : qp(e[l], je(t) ? {} : t[l], n[l]) : n[l] = !Sn(e[l], t[l]);
	return n
}
var Ll = (e, t) => qp(e, t, Ai(t)),
	Yp = (e, {
		valueAsNumber: t,
		valueAsDate: n,
		setValueAs: r
	}) => ee(e) ? e : t ? e === "" ? NaN : e && +e : n && St(e) ? new Date(e) : r ? r(e) : e;

function Ks(e) {
	const t = e.ref;
	if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled)) return sa(t) ? t.files : oa(t) ? Gp(e.refs).value : Kp(t) ? [...t.selectedOptions].map(({
		value: n
	}) => n) : vl(t) ? Qp(e.refs).value : Yp(ee(t.value) ? e.ref.value : t.value, e)
}
var ty = (e, t, n, r) => {
		const l = {};
		for (const i of e) {
			const s = R(t, i);
			s && Z(l, i, s._f)
		}
		return {
			criteriaMode: n,
			names: [...e],
			fields: l,
			shouldUseNativeValidation: r
		}
	},
	Pr = e => ee(e) ? e : Pi(e) ? e.source : ge(e) ? Pi(e.value) ? e.value.source : e.value : e,
	ny = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function Kc(e, t, n) {
	const r = R(e, n);
	if (r || ia(n)) return {
		error: r,
		name: n
	};
	const l = n.split(".");
	for (; l.length;) {
		const i = l.join("."),
			s = R(t, i),
			o = R(e, i);
		if (s && !Array.isArray(s) && n !== i) return {
			name: n
		};
		if (o && o.type) return {
			name: i,
			error: o
		};
		l.pop()
	}
	return {
		name: n
	}
}
var ry = (e, t, n, r, l) => l.isOnAll ? !1 : !n && l.isOnTouch ? !(t || e) : (n ? r.isOnBlur : l.isOnBlur) ? !e : (n ? r.isOnChange : l.isOnChange) ? e : !0,
	ly = (e, t) => !yl(R(e, t)).length && de(e, t);
const iy = {
	mode: tt.onSubmit,
	reValidateMode: tt.onChange,
	shouldFocusError: !0
};

function sy(e = {}) {
	let t = {
			...iy,
			...e
		},
		n = {
			submitCount: 0,
			isDirty: !1,
			isLoading: Yt(t.defaultValues),
			isValidating: !1,
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			touchedFields: {},
			dirtyFields: {},
			validatingFields: {},
			errors: t.errors || {},
			disabled: t.disabled || !1
		},
		r = {},
		l = ge(t.defaultValues) || ge(t.values) ? Ee(t.defaultValues || t.values) || {} : {},
		i = t.shouldUnregister ? {} : Ee(l),
		s = {
			action: !1,
			mount: !1,
			watch: !1
		},
		o = {
			mount: new Set,
			unMount: new Set,
			array: new Set,
			watch: new Set
		},
		u, a = 0;
	const d = {
			isDirty: !1,
			dirtyFields: !1,
			validatingFields: !1,
			touchedFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1
		},
		c = {
			values: Qs(),
			array: Qs(),
			state: Qs()
		},
		p = Wr(t.mode),
		y = Wr(t.reValidateMode),
		S = t.criteriaMode === tt.all,
		w = m => x => {
			clearTimeout(a), a = setTimeout(m, x)
		},
		T = async m => {
			if (d.isValid || m) {
				const x = t.resolver ? Ie((await O()).errors) : await I(r, !0);
				x !== n.isValid && c.state.next({
					isValid: x
				})
			}
		}, h = (m, x) => {
			(d.isValidating || d.validatingFields) && ((m || Array.from(o.mount)).forEach(_ => {
				_ && (x ? Z(n.validatingFields, _, x) : de(n.validatingFields, _))
			}), c.state.next({
				validatingFields: n.validatingFields,
				isValidating: !Ie(n.validatingFields)
			}))
		}, f = (m, x = [], _, D, j = !0, A = !0) => {
			if (D && _) {
				if (s.action = !0, A && Array.isArray(R(r, m))) {
					const V = _(R(r, m), D.argA, D.argB);
					j && Z(r, m, V)
				}
				if (A && Array.isArray(R(n.errors, m))) {
					const V = _(R(n.errors, m), D.argA, D.argB);
					j && Z(n.errors, m, V), ly(n.errors, m)
				}
				if (d.touchedFields && A && Array.isArray(R(n.touchedFields, m))) {
					const V = _(R(n.touchedFields, m), D.argA, D.argB);
					j && Z(n.touchedFields, m, V)
				}
				d.dirtyFields && (n.dirtyFields = Ll(l, i)), c.state.next({
					name: m,
					isDirty: z(m, x),
					dirtyFields: n.dirtyFields,
					errors: n.errors,
					isValid: n.isValid
				})
			} else Z(i, m, x)
		}, v = (m, x) => {
			Z(n.errors, m, x), c.state.next({
				errors: n.errors
			})
		}, E = m => {
			n.errors = m, c.state.next({
				errors: n.errors,
				isValid: !1
			})
		}, g = (m, x, _, D) => {
			const j = R(r, m);
			if (j) {
				const A = R(i, m, ee(_) ? R(l, m) : _);
				ee(A) || D && D.defaultChecked || x ? Z(i, m, x ? A : Ks(j._f)) : ue(m, A), s.mount && T()
			}
		}, C = (m, x, _, D, j) => {
			let A = !1,
				V = !1;
			const K = {
					name: m
				},
				fe = !!(R(r, m) && R(r, m)._f && R(r, m)._f.disabled);
			if (!_ || D) {
				d.isDirty && (V = n.isDirty, n.isDirty = K.isDirty = z(), A = V !== K.isDirty);
				const He = fe || Sn(R(l, m), x);
				V = !!(!fe && R(n.dirtyFields, m)), He || fe ? de(n.dirtyFields, m) : Z(n.dirtyFields, m, !0), K.dirtyFields = n.dirtyFields, A = A || d.dirtyFields && V !== !He
			}
			if (_) {
				const He = R(n.touchedFields, m);
				He || (Z(n.touchedFields, m, _), K.touchedFields = n.touchedFields, A = A || d.touchedFields && He !== _)
			}
			return A && j && c.state.next(K), A ? K : {}
		}, N = (m, x, _, D) => {
			const j = R(n.errors, m),
				A = d.isValid && Gt(x) && n.isValid !== x;
			if (e.delayError && _ ? (u = w(() => v(m, _)), u(e.delayError)) : (clearTimeout(a), u = null, _ ? Z(n.errors, m, _) : de(n.errors, m)), (_ ? !Sn(j, _) : j) || !Ie(D) || A) {
				const V = {
					...D,
					...A && Gt(x) ? {
						isValid: x
					} : {},
					errors: n.errors,
					name: m
				};
				n = {
					...n,
					...V
				}, c.state.next(V)
			}
		}, O = async m => {
			h(m, !0);
			const x = await t.resolver(i, t.context, ty(m || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
			return h(m), x
		}, M = async m => {
			const {
				errors: x
			} = await O(m);
			if (m)
				for (const _ of m) {
					const D = R(x, _);
					D ? Z(n.errors, _, D) : de(n.errors, _)
				} else n.errors = x;
			return x
		}, I = async (m, x, _ = {
			valid: !0
		}) => {
			for (const D in m) {
				const j = m[D];
				if (j) {
					const {
						_f: A,
						...V
					} = j;
					if (A) {
						const K = o.array.has(A.name);
						h([D], !0);
						const fe = await eu(j, i, S, t.shouldUseNativeValidation && !x, K);
						if (h([D]), fe[A.name] && (_.valid = !1, x)) break;
						!x && (R(fe, A.name) ? K ? Hp(n.errors, fe, A.name) : Z(n.errors, A.name, fe[A.name]) : de(n.errors, A.name))
					}
					V && await I(V, x, _)
				}
			}
			return _.valid
		}, W = () => {
			for (const m of o.unMount) {
				const x = R(r, m);
				x && (x._f.refs ? x._f.refs.every(_ => !Gs(_)) : !Gs(x._f.ref)) && ot(m)
			}
			o.unMount = new Set
		}, z = (m, x) => (m && x && Z(i, m, x), !Sn(ne(), l)), b = (m, x, _) => qv(m, o, {
			...s.mount ? i : ee(x) ? l : St(m) ? {
				[m]: x
			} : x
		}, _, x), Y = m => yl(R(s.mount ? i : l, m, e.shouldUnregister ? R(l, m, []) : [])), ue = (m, x, _ = {}) => {
			const D = R(r, m);
			let j = x;
			if (D) {
				const A = D._f;
				A && (!A.disabled && Z(i, m, Yp(x, A)), j = Ti(A.ref) && je(x) ? "" : x, Kp(A.ref) ? [...A.ref.options].forEach(V => V.selected = j.includes(V.value)) : A.refs ? vl(A.ref) ? A.refs.length > 1 ? A.refs.forEach(V => (!V.defaultChecked || !V.disabled) && (V.checked = Array.isArray(j) ? !!j.find(K => K === V.value) : j === V.value)) : A.refs[0] && (A.refs[0].checked = !!j) : A.refs.forEach(V => V.checked = V.value === j) : sa(A.ref) ? A.ref.value = "" : (A.ref.value = j, A.ref.type || c.values.next({
					name: m,
					values: {
						...i
					}
				})))
			}(_.shouldDirty || _.shouldTouch) && C(m, j, _.shouldTouch, _.shouldDirty, !0), _.shouldValidate && B(m)
		}, xe = (m, x, _) => {
			for (const D in x) {
				const j = x[D],
					A = `${m}.${D}`,
					V = R(r, A);
				(o.array.has(m) || !Oi(j) || V && !V._f) && !Xn(j) ? xe(A, j, _) : ue(A, j, _)
			}
		}, he = (m, x, _ = {}) => {
			const D = R(r, m),
				j = o.array.has(m),
				A = Ee(x);
			Z(i, m, A), j ? (c.array.next({
				name: m,
				values: {
					...i
				}
			}), (d.isDirty || d.dirtyFields) && _.shouldDirty && c.state.next({
				name: m,
				dirtyFields: Ll(l, i),
				isDirty: z(m, A)
			})) : D && !D._f && !je(A) ? xe(m, A, _) : ue(m, A, _), Jo(m, o) && c.state.next({
				...n
			}), c.values.next({
				name: s.mount ? m : void 0,
				values: {
					...i
				}
			})
		}, $ = async m => {
			s.mount = !0;
			const x = m.target;
			let _ = x.name,
				D = !0;
			const j = R(r, _),
				A = () => x.type ? Ks(j._f) : bv(m),
				V = K => {
					D = Number.isNaN(K) || K === R(i, _, K)
				};
			if (j) {
				let K, fe;
				const He = A(),
					Ln = m.type === Uc.BLUR || m.type === Uc.FOCUS_OUT,
					xh = !ny(j._f) && !t.resolver && !R(n.errors, _) && !j._f.deps || ry(Ln, R(n.touchedFields, _), n.isSubmitted, y, p),
					as = Jo(_, o, Ln);
				Z(i, _, He), Ln ? (j._f.onBlur && j._f.onBlur(m), u && u(0)) : j._f.onChange && j._f.onChange(m);
				const cs = C(_, He, Ln, !1),
					wh = !Ie(cs) || as;
				if (!Ln && c.values.next({
						name: _,
						type: m.type,
						values: {
							...i
						}
					}), xh) return d.isValid && T(), wh && c.state.next({
					name: _,
					...as ? {} : cs
				});
				if (!Ln && as && c.state.next({
						...n
					}), t.resolver) {
					const {
						errors: ka
					} = await O([_]);
					if (V(He), D) {
						const Sh = Kc(n.errors, r, _),
							Ea = Kc(ka, r, Sh.name || _);
						K = Ea.error, _ = Ea.name, fe = Ie(ka)
					}
				} else h([_], !0), K = (await eu(j, i, S, t.shouldUseNativeValidation))[_], h([_]), V(He), D && (K ? fe = !1 : d.isValid && (fe = await I(r, !0)));
				D && (j._f.deps && B(j._f.deps), N(_, fe, K, cs))
			}
		}, U = (m, x) => {
			if (R(n.errors, x) && m.focus) return m.focus(), 1
		}, B = async (m, x = {}) => {
			let _, D;
			const j = Ke(m);
			if (t.resolver) {
				const A = await M(ee(m) ? m : j);
				_ = Ie(A), D = m ? !j.some(V => R(A, V)) : _
			} else m ? (D = (await Promise.all(j.map(async A => {
				const V = R(r, A);
				return await I(V && V._f ? {
					[A]: V
				} : V)
			}))).every(Boolean), !(!D && !n.isValid) && T()) : D = _ = await I(r);
			return c.state.next({
				...!St(m) || d.isValid && _ !== n.isValid ? {} : {
					name: m
				},
				...t.resolver || !m ? {
					isValid: _
				} : {},
				errors: n.errors
			}), x.shouldFocus && !D && sr(r, U, m ? j : o.mount), D
		}, ne = m => {
			const x = {
				...s.mount ? i : l
			};
			return ee(m) ? x : St(m) ? R(x, m) : m.map(_ => R(x, _))
		}, ae = (m, x) => ({
			invalid: !!R((x || n).errors, m),
			isDirty: !!R((x || n).dirtyFields, m),
			error: R((x || n).errors, m),
			isValidating: !!R(n.validatingFields, m),
			isTouched: !!R((x || n).touchedFields, m)
		}), Dn = m => {
			m && Ke(m).forEach(x => de(n.errors, x)), c.state.next({
				errors: m ? n.errors : {}
			})
		}, vt = (m, x, _) => {
			const D = (R(r, m, {
					_f: {}
				})._f || {}).ref,
				j = R(n.errors, m) || {},
				{
					ref: A,
					message: V,
					type: K,
					...fe
				} = j;
			Z(n.errors, m, {
				...fe,
				...x,
				ref: D
			}), c.state.next({
				name: m,
				errors: n.errors,
				isValid: !1
			}), _ && _.shouldFocus && D && D.focus && D.focus()
		}, wr = (m, x) => Yt(m) ? c.values.subscribe({
			next: _ => m(b(void 0, x), _)
		}) : b(m, x, !0), ot = (m, x = {}) => {
			for (const _ of m ? Ke(m) : o.mount) o.mount.delete(_), o.array.delete(_), x.keepValue || (de(r, _), de(i, _)), !x.keepError && de(n.errors, _), !x.keepDirty && de(n.dirtyFields, _), !x.keepTouched && de(n.touchedFields, _), !x.keepIsValidating && de(n.validatingFields, _), !t.shouldUnregister && !x.keepDefaultValue && de(l, _);
			c.values.next({
				values: {
					...i
				}
			}), c.state.next({
				...n,
				...x.keepDirty ? {
					isDirty: z()
				} : {}
			}), !x.keepIsValid && T()
		}, hn = ({
			disabled: m,
			name: x,
			field: _,
			fields: D,
			value: j
		}) => {
			if (Gt(m) && s.mount || m) {
				const A = m ? void 0 : ee(j) ? Ks(_ ? _._f : R(D, x)._f) : j;
				Z(i, x, A), C(x, A, !1, !1, !0)
			}
		}, us = (m, x = {}) => {
			let _ = R(r, m);
			const D = Gt(x.disabled);
			return Z(r, m, {
				..._ || {},
				_f: {
					..._ && _._f ? _._f : {
						ref: {
							name: m
						}
					},
					name: m,
					mount: !0,
					...x
				}
			}), o.mount.add(m), _ ? hn({
				field: _,
				disabled: x.disabled,
				name: m,
				value: x.value
			}) : g(m, !0, x.value), {
				...D ? {
					disabled: x.disabled
				} : {},
				...t.progressive ? {
					required: !!x.required,
					min: Pr(x.min),
					max: Pr(x.max),
					minLength: Pr(x.minLength),
					maxLength: Pr(x.maxLength),
					pattern: Pr(x.pattern)
				} : {},
				name: m,
				onChange: $,
				onBlur: $,
				ref: j => {
					if (j) {
						us(m, x), _ = R(r, m);
						const A = ee(j.value) && j.querySelectorAll && j.querySelectorAll("input,select,textarea")[0] || j,
							V = ey(A),
							K = _._f.refs || [];
						if (V ? K.find(fe => fe === A) : A === _._f.ref) return;
						Z(r, m, {
							_f: {
								..._._f,
								...V ? {
									refs: [...K.filter(Gs), A, ...Array.isArray(R(l, m)) ? [{}] : []],
									ref: {
										type: A.type,
										name: m
									}
								} : {
									ref: A
								}
							}
						}), g(m, !1, void 0, A)
					} else _ = R(r, m, {}), _._f && (_._f.mount = !1), (t.shouldUnregister || x.shouldUnregister) && !(Wv(o.array, m) && s.action) && o.unMount.add(m)
				}
			}
		}, ga = () => t.shouldFocusError && sr(r, U, o.mount), yh = m => {
			Gt(m) && (c.state.next({
				disabled: m
			}), sr(r, (x, _) => {
				const D = R(r, _);
				D && (x.disabled = D._f.disabled || m, Array.isArray(D._f.refs) && D._f.refs.forEach(j => {
					j.disabled = D._f.disabled || m
				}))
			}, 0, !1))
		}, xa = (m, x) => async _ => {
			let D;
			_ && (_.preventDefault && _.preventDefault(), _.persist && _.persist());
			let j = Ee(i);
			if (c.state.next({
					isSubmitting: !0
				}), t.resolver) {
				const {
					errors: A,
					values: V
				} = await O();
				n.errors = A, j = V
			} else await I(r);
			if (de(n.errors, "root"), Ie(n.errors)) {
				c.state.next({
					errors: {}
				});
				try {
					await m(j, _)
				} catch (A) {
					D = A
				}
			} else x && await x({
				...n.errors
			}, _), ga(), setTimeout(ga);
			if (c.state.next({
					isSubmitted: !0,
					isSubmitting: !1,
					isSubmitSuccessful: Ie(n.errors) && !D,
					submitCount: n.submitCount + 1,
					errors: n.errors
				}), D) throw D
		}, gh = (m, x = {}) => {
			R(r, m) && (ee(x.defaultValue) ? he(m, Ee(R(l, m))) : (he(m, x.defaultValue), Z(l, m, Ee(x.defaultValue))), x.keepTouched || de(n.touchedFields, m), x.keepDirty || (de(n.dirtyFields, m), n.isDirty = x.defaultValue ? z(m, Ee(R(l, m))) : z()), x.keepError || (de(n.errors, m), d.isValid && T()), c.state.next({
				...n
			}))
		}, wa = (m, x = {}) => {
			const _ = m ? Ee(m) : l,
				D = Ee(_),
				j = Ie(m),
				A = j ? l : D;
			if (x.keepDefaultValues || (l = _), !x.keepValues) {
				if (x.keepDirtyValues)
					for (const V of o.mount) R(n.dirtyFields, V) ? Z(A, V, R(i, V)) : he(V, R(A, V));
				else {
					if (la && ee(m))
						for (const V of o.mount) {
							const K = R(r, V);
							if (K && K._f) {
								const fe = Array.isArray(K._f.refs) ? K._f.refs[0] : K._f.ref;
								if (Ti(fe)) {
									const He = fe.closest("form");
									if (He) {
										He.reset();
										break
									}
								}
							}
						}
					r = {}
				}
				i = e.shouldUnregister ? x.keepDefaultValues ? Ee(l) : {} : Ee(A), c.array.next({
					values: {
						...A
					}
				}), c.values.next({
					values: {
						...A
					}
				})
			}
			o = {
				mount: x.keepDirtyValues ? o.mount : new Set,
				unMount: new Set,
				array: new Set,
				watch: new Set,
				watchAll: !1,
				focus: ""
			}, s.mount = !d.isValid || !!x.keepIsValid || !!x.keepDirtyValues, s.watch = !!e.shouldUnregister, c.state.next({
				submitCount: x.keepSubmitCount ? n.submitCount : 0,
				isDirty: j ? !1 : x.keepDirty ? n.isDirty : !!(x.keepDefaultValues && !Sn(m, l)),
				isSubmitted: x.keepIsSubmitted ? n.isSubmitted : !1,
				dirtyFields: j ? {} : x.keepDirtyValues ? x.keepDefaultValues && i ? Ll(l, i) : n.dirtyFields : x.keepDefaultValues && m ? Ll(l, m) : x.keepDirty ? n.dirtyFields : {},
				touchedFields: x.keepTouched ? n.touchedFields : {},
				errors: x.keepErrors ? n.errors : {},
				isSubmitSuccessful: x.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
				isSubmitting: !1
			})
		}, Sa = (m, x) => wa(Yt(m) ? m(i) : m, x);
	return {
		control: {
			register: us,
			unregister: ot,
			getFieldState: ae,
			handleSubmit: xa,
			setError: vt,
			_executeSchema: O,
			_getWatch: b,
			_getDirty: z,
			_updateValid: T,
			_removeUnmounted: W,
			_updateFieldArray: f,
			_updateDisabledField: hn,
			_getFieldArray: Y,
			_reset: wa,
			_resetDefaultValues: () => Yt(t.defaultValues) && t.defaultValues().then(m => {
				Sa(m, t.resetOptions), c.state.next({
					isLoading: !1
				})
			}),
			_updateFormState: m => {
				n = {
					...n,
					...m
				}
			},
			_disableForm: yh,
			_subjects: c,
			_proxyFormState: d,
			_setErrors: E,
			get _fields() {
				return r
			},
			get _formValues() {
				return i
			},
			get _state() {
				return s
			},
			set _state(m) {
				s = m
			},
			get _defaultValues() {
				return l
			},
			get _names() {
				return o
			},
			set _names(m) {
				o = m
			},
			get _formState() {
				return n
			},
			set _formState(m) {
				n = m
			},
			get _options() {
				return t
			},
			set _options(m) {
				t = {
					...t,
					...m
				}
			}
		},
		trigger: B,
		register: us,
		handleSubmit: xa,
		watch: wr,
		setValue: he,
		getValues: ne,
		reset: Sa,
		resetField: gh,
		clearErrors: Dn,
		unregister: ot,
		setError: vt,
		setFocus: (m, x = {}) => {
			const _ = R(r, m),
				D = _ && _._f;
			if (D) {
				const j = D.refs ? D.refs[0] : D.ref;
				j.focus && (j.focus(), x.shouldSelect && j.select())
			}
		},
		getFieldState: ae
	}
}

function oy(e = {}) {
	const t = H.useRef(),
		n = H.useRef(),
		[r, l] = H.useState({
			isDirty: !1,
			isValidating: !1,
			isLoading: Yt(e.defaultValues),
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			submitCount: 0,
			dirtyFields: {},
			touchedFields: {},
			validatingFields: {},
			errors: e.errors || {},
			disabled: e.disabled || !1,
			defaultValues: Yt(e.defaultValues) ? void 0 : e.defaultValues
		});
	t.current || (t.current = {
		...sy(e),
		formState: r
	});
	const i = t.current.control;
	return i._options = e, Bp({
		subject: i._subjects.state,
		next: s => {
			Zv(s, i._proxyFormState, i._updateFormState) && l({
				...i._formState
			})
		}
	}), H.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), H.useEffect(() => {
		if (i._proxyFormState.isDirty) {
			const s = i._getDirty();
			s !== r.isDirty && i._subjects.state.next({
				isDirty: s
			})
		}
	}, [i, r.isDirty]), H.useEffect(() => {
		e.values && !Sn(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, l(s => ({
			...s
		}))) : i._resetDefaultValues()
	}, [e.values, i]), H.useEffect(() => {
		e.errors && i._setErrors(e.errors)
	}, [e.errors, i]), H.useEffect(() => {
		i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({
			...i._formState
		})), i._removeUnmounted()
	}), H.useEffect(() => {
		e.shouldUnregister && i._subjects.values.next({
			values: i._getWatch()
		})
	}, [e.shouldUnregister, i]), t.current.formState = Kv(r, i), t.current
}
const Zc = (e, t, n) => {
		if (e && "reportValidity" in e) {
			const r = R(n, t);
			e.setCustomValidity(r && r.message || ""), e.reportValidity()
		}
	},
	Xp = (e, t) => {
		for (const n in t.fields) {
			const r = t.fields[n];
			r && r.ref && "reportValidity" in r.ref ? Zc(r.ref, n, e) : r.refs && r.refs.forEach(l => Zc(l, n, e))
		}
	},
	uy = (e, t) => {
		t.shouldUseNativeValidation && Xp(e, t);
		const n = {};
		for (const r in e) {
			const l = R(t.fields, r),
				i = Object.assign(e[r] || {}, {
					ref: l && l.ref
				});
			if (ay(t.names || Object.keys(e), r)) {
				const s = Object.assign({}, R(n, r));
				Z(s, "root", i), Z(n, r, s)
			} else Z(n, r, i)
		}
		return n
	},
	ay = (e, t) => e.some(n => n.startsWith(t + "."));

function cy(e, t, n) {
	return t === void 0 && (t = {}), n === void 0 && (n = {}),
		function(r, l, i) {
			try {
				return Promise.resolve(function(s, o) {
					try {
						var u = (t.context, Promise.resolve(e[n.mode === "sync" ? "validateSync" : "validate"](r, Object.assign({
							abortEarly: !1
						}, t, {
							context: l
						}))).then(function(a) {
							return i.shouldUseNativeValidation && Xp({}, i), {
								values: n.raw ? r : a,
								errors: {}
							}
						}))
					} catch (a) {
						return o(a)
					}
					return u && u.then ? u.then(void 0, o) : u
				}(0, function(s) {
					if (!s.inner) throw s;
					return {
						values: {},
						errors: uy((o = s, u = !i.shouldUseNativeValidation && i.criteriaMode === "all", (o.inner || []).reduce(function(a, d) {
							if (a[d.path] || (a[d.path] = {
									message: d.message,
									type: d.type
								}), u) {
								var c = a[d.path].types,
									p = c && c[d.type];
								a[d.path] = Wp(d.path, u, a, d.type, p ? [].concat(p, d.message) : d.message)
							}
							return a
						}, {})), i)
					};
					var o, u
				}))
			} catch (s) {
				return Promise.reject(s)
			}
		}
}

function $n(e) {
	this._maxSize = e, this.clear()
}
$n.prototype.clear = function() {
	this._size = 0, this._values = Object.create(null)
};
$n.prototype.get = function(e) {
	return this._values[e]
};
$n.prototype.set = function(e, t) {
	return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t
};
var fy = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
	Jp = /^\d+$/,
	dy = /^\d/,
	py = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
	hy = /^\s*(['"]?)(.*?)(\1)\s*$/,
	ua = 512,
	qc = new $n(ua),
	Yc = new $n(ua),
	Xc = new $n(ua),
	Cn = {
		Cache: $n,
		split: tu,
		normalizePath: Zs,
		setter: function(e) {
			var t = Zs(e);
			return Yc.get(e) || Yc.set(e, function(r, l) {
				for (var i = 0, s = t.length, o = r; i < s - 1;) {
					var u = t[i];
					if (u === "__proto__" || u === "constructor" || u === "prototype") return r;
					o = o[t[i++]]
				}
				o[t[i]] = l
			})
		},
		getter: function(e, t) {
			var n = Zs(e);
			return Xc.get(e) || Xc.set(e, function(l) {
				for (var i = 0, s = n.length; i < s;)
					if (l != null || !t) l = l[n[i++]];
					else return;
				return l
			})
		},
		join: function(e) {
			return e.reduce(function(t, n) {
				return t + (aa(n) || Jp.test(n) ? "[" + n + "]" : (t ? "." : "") + n)
			}, "")
		},
		forEach: function(e, t, n) {
			my(Array.isArray(e) ? e : tu(e), t, n)
		}
	};

function Zs(e) {
	return qc.get(e) || qc.set(e, tu(e).map(function(t) {
		return t.replace(hy, "$2")
	}))
}

function tu(e) {
	return e.match(fy) || [""]
}

function my(e, t, n) {
	var r = e.length,
		l, i, s, o;
	for (i = 0; i < r; i++) l = e[i], l && (gy(l) && (l = '"' + l + '"'), o = aa(l), s = !o && /^\d+$/.test(l), t.call(n, l, o, s, i, e))
}

function aa(e) {
	return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1
}

function vy(e) {
	return e.match(dy) && !e.match(Jp)
}

function yy(e) {
	return py.test(e)
}

function gy(e) {
	return !aa(e) && (vy(e) || yy(e))
}
const xy = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
	Ji = e => e.match(xy) || [],
	es = e => e[0].toUpperCase() + e.slice(1),
	ca = (e, t) => Ji(e).join(t).toLowerCase(),
	eh = e => Ji(e).reduce((t, n) => `${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`, ""),
	wy = e => es(eh(e)),
	Sy = e => ca(e, "_"),
	ky = e => ca(e, "-"),
	Ey = e => es(ca(e, " ")),
	_y = e => Ji(e).map(es).join(" ");
var qs = {
		words: Ji,
		upperFirst: es,
		camelCase: eh,
		pascalCase: wy,
		snakeCase: Sy,
		kebabCase: ky,
		sentenceCase: Ey,
		titleCase: _y
	},
	fa = {
		exports: {}
	};
fa.exports = function(e) {
	return th(Cy(e), e)
};
fa.exports.array = th;

function th(e, t) {
	var n = e.length,
		r = new Array(n),
		l = {},
		i = n,
		s = Fy(t),
		o = Ny(e);
	for (t.forEach(function(a) {
			if (!o.has(a[0]) || !o.has(a[1])) throw new Error("Unknown node. There is an unknown node in the supplied edges.")
		}); i--;) l[i] || u(e[i], i, new Set);
	return r;

	function u(a, d, c) {
		if (c.has(a)) {
			var p;
			try {
				p = ", node was:" + JSON.stringify(a)
			} catch {
				p = ""
			}
			throw new Error("Cyclic dependency" + p)
		}
		if (!o.has(a)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(a));
		if (!l[d]) {
			l[d] = !0;
			var y = s.get(a) || new Set;
			if (y = Array.from(y), d = y.length) {
				c.add(a);
				do {
					var S = y[--d];
					u(S, o.get(S), c)
				} while (d);
				c.delete(a)
			}
			r[--n] = a
		}
	}
}

function Cy(e) {
	for (var t = new Set, n = 0, r = e.length; n < r; n++) {
		var l = e[n];
		t.add(l[0]), t.add(l[1])
	}
	return Array.from(t)
}

function Fy(e) {
	for (var t = new Map, n = 0, r = e.length; n < r; n++) {
		var l = e[n];
		t.has(l[0]) || t.set(l[0], new Set), t.has(l[1]) || t.set(l[1], new Set), t.get(l[0]).add(l[1])
	}
	return t
}

function Ny(e) {
	for (var t = new Map, n = 0, r = e.length; n < r; n++) t.set(e[n], n);
	return t
}
var Ty = fa.exports;
const Py = yf(Ty),
	Oy = Object.prototype.toString,
	Ay = Error.prototype.toString,
	jy = RegExp.prototype.toString,
	Ry = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
	$y = /^Symbol\((.*)\)(.*)$/;

function Dy(e) {
	return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e
}

function Jc(e, t = !1) {
	if (e == null || e === !0 || e === !1) return "" + e;
	const n = typeof e;
	if (n === "number") return Dy(e);
	if (n === "string") return t ? `"${e}"` : e;
	if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
	if (n === "symbol") return Ry.call(e).replace($y, "Symbol($1)");
	const r = Oy.call(e).slice(8, -1);
	return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + Ay.call(e) + "]" : r === "RegExp" ? jy.call(e) : null
}

function jt(e, t) {
	let n = Jc(e, t);
	return n !== null ? n : JSON.stringify(e, function(r, l) {
		let i = Jc(this[r], t);
		return i !== null ? i : l
	}, 2)
}

function nh(e) {
	return e == null ? [] : [].concat(e)
}
let rh, lh, ih, Ly = /\$\{\s*(\w+)\s*\}/g;
rh = Symbol.toStringTag;
class ef {
	constructor(t, n, r, l) {
		this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[rh] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = l, this.errors = [], this.inner = [], nh(t).forEach(i => {
			if (ze.isError(i)) {
				this.errors.push(...i.errors);
				const s = i.inner.length ? i.inner : [i];
				this.inner.push(...s)
			} else this.errors.push(i)
		}), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]
	}
}
lh = Symbol.hasInstance;
ih = Symbol.toStringTag;
class ze extends Error {
	static formatError(t, n) {
		const r = n.label || n.path || "this";
		return r !== n.path && (n = Object.assign({}, n, {
			path: r
		})), typeof t == "string" ? t.replace(Ly, (l, i) => jt(n[i])) : typeof t == "function" ? t(n) : t
	}
	static isError(t) {
		return t && t.name === "ValidationError"
	}
	constructor(t, n, r, l, i) {
		const s = new ef(t, n, r, l);
		if (i) return s;
		super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[ih] = "Error", this.name = s.name, this.message = s.message, this.type = s.type, this.value = s.value, this.path = s.path, this.errors = s.errors, this.inner = s.inner, Error.captureStackTrace && Error.captureStackTrace(this, ze)
	}
	static[lh](t) {
		return ef[Symbol.hasInstance](t) || super[Symbol.hasInstance](t)
	}
}
let xt = {
		default: "${path} is invalid",
		required: "${path} is a required field",
		defined: "${path} must be defined",
		notNull: "${path} cannot be null",
		oneOf: "${path} must be one of the following values: ${values}",
		notOneOf: "${path} must not be one of the following values: ${values}",
		notType: ({
			path: e,
			type: t,
			value: n,
			originalValue: r
		}) => {
			const l = r != null && r !== n ? ` (cast from the value \`${jt(r,!0)}\`).` : ".";
			return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${jt(n,!0)}\`` + l : `${e} must match the configured type. The validated value was: \`${jt(n,!0)}\`` + l
		}
	},
	Le = {
		length: "${path} must be exactly ${length} characters",
		min: "${path} must be at least ${min} characters",
		max: "${path} must be at most ${max} characters",
		matches: '${path} must match the following: "${regex}"',
		email: "${path} must be a valid email",
		url: "${path} must be a valid URL",
		uuid: "${path} must be a valid UUID",
		datetime: "${path} must be a valid ISO date-time",
		datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
		datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
		trim: "${path} must be a trimmed string",
		lowercase: "${path} must be a lowercase string",
		uppercase: "${path} must be a upper case string"
	},
	Ut = {
		min: "${path} must be greater than or equal to ${min}",
		max: "${path} must be less than or equal to ${max}",
		lessThan: "${path} must be less than ${less}",
		moreThan: "${path} must be greater than ${more}",
		positive: "${path} must be a positive number",
		negative: "${path} must be a negative number",
		integer: "${path} must be an integer"
	},
	nu = {
		min: "${path} field must be later than ${min}",
		max: "${path} field must be at earlier than ${max}"
	},
	Iy = {
		isValue: "${path} field must be ${value}"
	},
	ru = {
		noUnknown: "${path} field has unspecified keys: ${unknown}"
	},
	Jl = {
		min: "${path} field must have at least ${min} items",
		max: "${path} field must have less than or equal to ${max} items",
		length: "${path} must have ${length} items"
	},
	My = {
		notType: e => {
			const {
				path: t,
				value: n,
				spec: r
			} = e, l = r.types.length;
			if (Array.isArray(n)) {
				if (n.length < l) return `${t} tuple value has too few items, expected a length of ${l} but got ${n.length} for value: \`${jt(n,!0)}\``;
				if (n.length > l) return `${t} tuple value has too many items, expected a length of ${l} but got ${n.length} for value: \`${jt(n,!0)}\``
			}
			return ze.formatError(xt.notType, e)
		}
	};
Object.assign(Object.create(null), {
	mixed: xt,
	string: Le,
	number: Ut,
	date: nu,
	object: ru,
	array: Jl,
	boolean: Iy,
	tuple: My
});
const ts = e => e && e.__isYupSchema__;
class ji {
	static fromOptions(t, n) {
		if (!n.then && !n.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
		let {
			is: r,
			then: l,
			otherwise: i
		} = n, s = typeof r == "function" ? r : (...o) => o.every(u => u === r);
		return new ji(t, (o, u) => {
			var a;
			let d = s(...o) ? l : i;
			return (a = d == null ? void 0 : d(u)) != null ? a : u
		})
	}
	constructor(t, n) {
		this.fn = void 0, this.refs = t, this.refs = t, this.fn = n
	}
	resolve(t, n) {
		let r = this.refs.map(i => i.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)),
			l = this.fn(r, t, n);
		if (l === void 0 || l === t) return t;
		if (!ts(l)) throw new TypeError("conditions must return a schema object");
		return l.resolve(n)
	}
}
const Il = {
	context: "$",
	value: "."
};

function zy(e, t) {
	return new pn(e, t)
}
class pn {
	constructor(t, n = {}) {
		if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
		if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
		this.isContext = this.key[0] === Il.context, this.isValue = this.key[0] === Il.value, this.isSibling = !this.isContext && !this.isValue;
		let r = this.isContext ? Il.context : this.isValue ? Il.value : "";
		this.path = this.key.slice(r.length), this.getter = this.path && Cn.getter(this.path, !0), this.map = n.map
	}
	getValue(t, n, r) {
		let l = this.isContext ? r : this.isValue ? t : n;
		return this.getter && (l = this.getter(l || {})), this.map && (l = this.map(l)), l
	}
	cast(t, n) {
		return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
	}
	resolve() {
		return this
	}
	describe() {
		return {
			type: "ref",
			key: this.key
		}
	}
	toString() {
		return `Ref(${this.key})`
	}
	static isRef(t) {
		return t && t.__isYupRef
	}
}
pn.prototype.__isYupRef = !0;
const Ot = e => e == null;

function zn(e) {
	function t({
		value: n,
		path: r = "",
		options: l,
		originalValue: i,
		schema: s
	}, o, u) {
		const {
			name: a,
			test: d,
			params: c,
			message: p,
			skipAbsent: y
		} = e;
		let {
			parent: S,
			context: w,
			abortEarly: T = s.spec.abortEarly,
			disableStackTrace: h = s.spec.disableStackTrace
		} = l;

		function f(W) {
			return pn.isRef(W) ? W.getValue(n, S, w) : W
		}

		function v(W = {}) {
			const z = Object.assign({
				value: n,
				originalValue: i,
				label: s.spec.label,
				path: W.path || r,
				spec: s.spec,
				disableStackTrace: W.disableStackTrace || h
			}, c, W.params);
			for (const Y of Object.keys(z)) z[Y] = f(z[Y]);
			const b = new ze(ze.formatError(W.message || p, z), n, z.path, W.type || a, z.disableStackTrace);
			return b.params = z, b
		}
		const E = T ? o : u;
		let g = {
			path: r,
			parent: S,
			type: a,
			from: l.from,
			createError: v,
			resolve: f,
			options: l,
			originalValue: i,
			schema: s
		};
		const C = W => {
				ze.isError(W) ? E(W) : W ? u(null) : E(v())
			},
			N = W => {
				ze.isError(W) ? E(W) : o(W)
			};
		if (y && Ot(n)) return C(!0);
		let M;
		try {
			var I;
			if (M = d.call(g, n, g), typeof((I = M) == null ? void 0 : I.then) == "function") {
				if (l.sync) throw new Error(`Validation test of type: "${g.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
				return Promise.resolve(M).then(C, N)
			}
		} catch (W) {
			N(W);
			return
		}
		C(M)
	}
	return t.OPTIONS = e, t
}

function Vy(e, t, n, r = n) {
	let l, i, s;
	return t ? (Cn.forEach(t, (o, u, a) => {
		let d = u ? o.slice(1, o.length - 1) : o;
		e = e.resolve({
			context: r,
			parent: l,
			value: n
		});
		let c = e.type === "tuple",
			p = a ? parseInt(d, 10) : 0;
		if (e.innerType || c) {
			if (c && !a) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);
			if (n && p >= n.length) throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
			l = n, n = n && n[p], e = c ? e.spec.types[p] : e.innerType
		}
		if (!a) {
			if (!e.fields || !e.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);
			l = n, n = n && n[d], e = e.fields[d]
		}
		i = d, s = u ? "[" + o + "]" : "." + o
	}), {
		schema: e,
		parent: l,
		parentPath: i
	}) : {
		parent: l,
		parentPath: t,
		schema: e
	}
}
class Ri extends Set {
	describe() {
		const t = [];
		for (const n of this.values()) t.push(pn.isRef(n) ? n.describe() : n);
		return t
	}
	resolveAll(t) {
		let n = [];
		for (const r of this.values()) n.push(t(r));
		return n
	}
	clone() {
		return new Ri(this.values())
	}
	merge(t, n) {
		const r = this.clone();
		return t.forEach(l => r.add(l)), n.forEach(l => r.delete(l)), r
	}
}

function Jn(e, t = new Map) {
	if (ts(e) || !e || typeof e != "object") return e;
	if (t.has(e)) return t.get(e);
	let n;
	if (e instanceof Date) n = new Date(e.getTime()), t.set(e, n);
	else if (e instanceof RegExp) n = new RegExp(e), t.set(e, n);
	else if (Array.isArray(e)) {
		n = new Array(e.length), t.set(e, n);
		for (let r = 0; r < e.length; r++) n[r] = Jn(e[r], t)
	} else if (e instanceof Map) {
		n = new Map, t.set(e, n);
		for (const [r, l] of e.entries()) n.set(r, Jn(l, t))
	} else if (e instanceof Set) {
		n = new Set, t.set(e, n);
		for (const r of e) n.add(Jn(r, t))
	} else if (e instanceof Object) {
		n = {}, t.set(e, n);
		for (const [r, l] of Object.entries(e)) n[r] = Jn(l, t)
	} else throw Error(`Unable to clone ${e}`);
	return n
}
class st {
	constructor(t) {
		this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Ri, this._blacklist = new Ri, this.exclusiveTests = Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
			this.typeError(xt.notType)
		}), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
			strip: !1,
			strict: !1,
			abortEarly: !0,
			recursive: !0,
			disableStackTrace: !1,
			nullable: !1,
			optional: !0,
			coerce: !0
		}, t == null ? void 0 : t.spec), this.withMutation(n => {
			n.nonNullable()
		})
	}
	get _type() {
		return this.type
	}
	clone(t) {
		if (this._mutate) return t && Object.assign(this.spec, t), this;
		const n = Object.create(Object.getPrototypeOf(this));
		return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = Jn(Object.assign({}, this.spec, t)), n
	}
	label(t) {
		let n = this.clone();
		return n.spec.label = t, n
	}
	meta(...t) {
		if (t.length === 0) return this.spec.meta;
		let n = this.clone();
		return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n
	}
	withMutation(t) {
		let n = this._mutate;
		this._mutate = !0;
		let r = t(this);
		return this._mutate = n, r
	}
	concat(t) {
		if (!t || t === this) return this;
		if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
		let n = this,
			r = t.clone();
		const l = Object.assign({}, n.spec, r.spec);
		return r.spec = l, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation(i => {
			t.tests.forEach(s => {
				i.test(s.OPTIONS)
			})
		}), r.transforms = [...n.transforms, ...r.transforms], r
	}
	isType(t) {
		return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t)
	}
	resolve(t) {
		let n = this;
		if (n.conditions.length) {
			let r = n.conditions;
			n = n.clone(), n.conditions = [], n = r.reduce((l, i) => i.resolve(l, t), n), n = n.resolve(t)
		}
		return n
	}
	resolveOptions(t) {
		var n, r, l, i;
		return Object.assign({}, t, {
			from: t.from || [],
			strict: (n = t.strict) != null ? n : this.spec.strict,
			abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
			recursive: (l = t.recursive) != null ? l : this.spec.recursive,
			disableStackTrace: (i = t.disableStackTrace) != null ? i : this.spec.disableStackTrace
		})
	}
	cast(t, n = {}) {
		let r = this.resolve(Object.assign({
				value: t
			}, n)),
			l = n.assert === "ignore-optionality",
			i = r._cast(t, n);
		if (n.assert !== !1 && !r.isType(i)) {
			if (l && Ot(i)) return i;
			let s = jt(t),
				o = jt(i);
			throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
` + (o !== s ? `result of cast: ${o}` : ""))
		}
		return i
	}
	_cast(t, n) {
		let r = t === void 0 ? t : this.transforms.reduce((l, i) => i.call(this, l, t, this), t);
		return r === void 0 && (r = this.getDefault(n)), r
	}
	_validate(t, n = {}, r, l) {
		let {
			path: i,
			originalValue: s = t,
			strict: o = this.spec.strict
		} = n, u = t;
		o || (u = this._cast(u, Object.assign({
			assert: !1
		}, n)));
		let a = [];
		for (let d of Object.values(this.internalTests)) d && a.push(d);
		this.runTests({
			path: i,
			value: u,
			originalValue: s,
			options: n,
			tests: a
		}, r, d => {
			if (d.length) return l(d, u);
			this.runTests({
				path: i,
				value: u,
				originalValue: s,
				options: n,
				tests: this.tests
			}, r, l)
		})
	}
	runTests(t, n, r) {
		let l = !1,
			{
				tests: i,
				value: s,
				originalValue: o,
				path: u,
				options: a
			} = t,
			d = w => {
				l || (l = !0, n(w, s))
			},
			c = w => {
				l || (l = !0, r(w, s))
			},
			p = i.length,
			y = [];
		if (!p) return c([]);
		let S = {
			value: s,
			originalValue: o,
			path: u,
			options: a,
			schema: this
		};
		for (let w = 0; w < i.length; w++) {
			const T = i[w];
			T(S, d, function(f) {
				f && (Array.isArray(f) ? y.push(...f) : y.push(f)), --p <= 0 && c(y)
			})
		}
	}
	asNestedTest({
		key: t,
		index: n,
		parent: r,
		parentPath: l,
		originalParent: i,
		options: s
	}) {
		const o = t ?? n;
		if (o == null) throw TypeError("Must include `key` or `index` for nested validations");
		const u = typeof o == "number";
		let a = r[o];
		const d = Object.assign({}, s, {
			strict: !0,
			parent: r,
			value: a,
			originalValue: i[o],
			key: void 0,
			[u ? "index" : "key"]: o,
			path: u || o.includes(".") ? `${l||""}[${u?o:`"${o}"`}]` : (l ? `${l}.` : "") + t
		});
		return (c, p, y) => this.resolve(d)._validate(a, d, p, y)
	}
	validate(t, n) {
		var r;
		let l = this.resolve(Object.assign({}, n, {
				value: t
			})),
			i = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : l.spec.disableStackTrace;
		return new Promise((s, o) => l._validate(t, n, (u, a) => {
			ze.isError(u) && (u.value = a), o(u)
		}, (u, a) => {
			u.length ? o(new ze(u, a, void 0, void 0, i)) : s(a)
		}))
	}
	validateSync(t, n) {
		var r;
		let l = this.resolve(Object.assign({}, n, {
				value: t
			})),
			i, s = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : l.spec.disableStackTrace;
		return l._validate(t, Object.assign({}, n, {
			sync: !0
		}), (o, u) => {
			throw ze.isError(o) && (o.value = u), o
		}, (o, u) => {
			if (o.length) throw new ze(o, t, void 0, void 0, s);
			i = u
		}), i
	}
	isValid(t, n) {
		return this.validate(t, n).then(() => !0, r => {
			if (ze.isError(r)) return !1;
			throw r
		})
	}
	isValidSync(t, n) {
		try {
			return this.validateSync(t, n), !0
		} catch (r) {
			if (ze.isError(r)) return !1;
			throw r
		}
	}
	_getDefault(t) {
		let n = this.spec.default;
		return n == null ? n : typeof n == "function" ? n.call(this, t) : Jn(n)
	}
	getDefault(t) {
		return this.resolve(t || {})._getDefault(t)
	}
	default (t) {
		return arguments.length === 0 ? this._getDefault() : this.clone({
			default: t
		})
	}
	strict(t = !0) {
		return this.clone({
			strict: t
		})
	}
	nullability(t, n) {
		const r = this.clone({
			nullable: t
		});
		return r.internalTests.nullable = zn({
			message: n,
			name: "nullable",
			test(l) {
				return l === null ? this.schema.spec.nullable : !0
			}
		}), r
	}
	optionality(t, n) {
		const r = this.clone({
			optional: t
		});
		return r.internalTests.optionality = zn({
			message: n,
			name: "optionality",
			test(l) {
				return l === void 0 ? this.schema.spec.optional : !0
			}
		}), r
	}
	optional() {
		return this.optionality(!0)
	}
	defined(t = xt.defined) {
		return this.optionality(!1, t)
	}
	nullable() {
		return this.nullability(!0)
	}
	nonNullable(t = xt.notNull) {
		return this.nullability(!1, t)
	}
	required(t = xt.required) {
		return this.clone().withMutation(n => n.nonNullable(t).defined(t))
	}
	notRequired() {
		return this.clone().withMutation(t => t.nullable().optional())
	}
	transform(t) {
		let n = this.clone();
		return n.transforms.push(t), n
	}
	test(...t) {
		let n;
		if (t.length === 1 ? typeof t[0] == "function" ? n = {
				test: t[0]
			} : n = t[0] : t.length === 2 ? n = {
				name: t[0],
				test: t[1]
			} : n = {
				name: t[0],
				message: t[1],
				test: t[2]
			}, n.message === void 0 && (n.message = xt.default), typeof n.test != "function") throw new TypeError("`test` is a required parameters");
		let r = this.clone(),
			l = zn(n),
			i = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
		if (n.exclusive && !n.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
		return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter(s => !(s.OPTIONS.name === n.name && (i || s.OPTIONS.test === l.OPTIONS.test))), r.tests.push(l), r
	}
	when(t, n) {
		!Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
		let r = this.clone(),
			l = nh(t).map(i => new pn(i));
		return l.forEach(i => {
			i.isSibling && r.deps.push(i.key)
		}), r.conditions.push(typeof n == "function" ? new ji(l, n) : ji.fromOptions(l, n)), r
	}
	typeError(t) {
		let n = this.clone();
		return n.internalTests.typeError = zn({
			message: t,
			name: "typeError",
			skipAbsent: !0,
			test(r) {
				return this.schema._typeCheck(r) ? !0 : this.createError({
					params: {
						type: this.schema.type
					}
				})
			}
		}), n
	}
	oneOf(t, n = xt.oneOf) {
		let r = this.clone();
		return t.forEach(l => {
			r._whitelist.add(l), r._blacklist.delete(l)
		}), r.internalTests.whiteList = zn({
			message: n,
			name: "oneOf",
			skipAbsent: !0,
			test(l) {
				let i = this.schema._whitelist,
					s = i.resolveAll(this.resolve);
				return s.includes(l) ? !0 : this.createError({
					params: {
						values: Array.from(i).join(", "),
						resolved: s
					}
				})
			}
		}), r
	}
	notOneOf(t, n = xt.notOneOf) {
		let r = this.clone();
		return t.forEach(l => {
			r._blacklist.add(l), r._whitelist.delete(l)
		}), r.internalTests.blacklist = zn({
			message: n,
			name: "notOneOf",
			test(l) {
				let i = this.schema._blacklist,
					s = i.resolveAll(this.resolve);
				return s.includes(l) ? this.createError({
					params: {
						values: Array.from(i).join(", "),
						resolved: s
					}
				}) : !0
			}
		}), r
	}
	strip(t = !0) {
		let n = this.clone();
		return n.spec.strip = t, n
	}
	describe(t) {
		const n = (t ? this.resolve(t) : this).clone(),
			{
				label: r,
				meta: l,
				optional: i,
				nullable: s
			} = n.spec;
		return {
			meta: l,
			label: r,
			optional: i,
			nullable: s,
			default: n.getDefault(t),
			type: n.type,
			oneOf: n._whitelist.describe(),
			notOneOf: n._blacklist.describe(),
			tests: n.tests.map(u => ({
				name: u.OPTIONS.name,
				params: u.OPTIONS.params
			})).filter((u, a, d) => d.findIndex(c => c.name === u.name) === a)
		}
	}
}
st.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) st.prototype[`${e}At`] = function(t, n, r = {}) {
	const {
		parent: l,
		parentPath: i,
		schema: s
	} = Vy(this, t, n, r.context);
	return s[e](l && l[i], Object.assign({}, r, {
		parent: l,
		path: t
	}))
};
for (const e of ["equals", "is"]) st.prototype[e] = st.prototype.oneOf;
for (const e of ["not", "nope"]) st.prototype[e] = st.prototype.notOneOf;
const Uy = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;

function by(e) {
	const t = lu(e);
	if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
	if (t.z === void 0 && t.plusMinus === void 0) return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
	let n = 0;
	return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond)
}

function lu(e) {
	var t, n;
	const r = Uy.exec(e);
	return r ? {
		year: Ct(r[1]),
		month: Ct(r[2], 1) - 1,
		day: Ct(r[3], 1),
		hour: Ct(r[4]),
		minute: Ct(r[5]),
		second: Ct(r[6]),
		millisecond: r[7] ? Ct(r[7].substring(0, 3)) : 0,
		precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
		z: r[8] || void 0,
		plusMinus: r[9] || void 0,
		hourOffset: Ct(r[10]),
		minuteOffset: Ct(r[11])
	} : null
}

function Ct(e, t = 0) {
	return Number(e) || t
}
let By = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	Wy = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
	Hy = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
	Qy = "^\\d{4}-\\d{2}-\\d{2}",
	Gy = "\\d{2}:\\d{2}:\\d{2}",
	Ky = "(([+-]\\d{2}(:?\\d{2})?)|Z)",
	Zy = new RegExp(`${Qy}T${Gy}(\\.\\d+)?${Ky}$`),
	qy = e => Ot(e) || e === e.trim(),
	Yy = {}.toString();

function yn() {
	return new sh
}
class sh extends st {
	constructor() {
		super({
			type: "string",
			check(t) {
				return t instanceof String && (t = t.valueOf()), typeof t == "string"
			}
		}), this.withMutation(() => {
			this.transform((t, n, r) => {
				if (!r.spec.coerce || r.isType(t) || Array.isArray(t)) return t;
				const l = t != null && t.toString ? t.toString() : t;
				return l === Yy ? t : l
			})
		})
	}
	required(t) {
		return super.required(t).withMutation(n => n.test({
			message: t || xt.required,
			name: "required",
			skipAbsent: !0,
			test: r => !!r.length
		}))
	}
	notRequired() {
		return super.notRequired().withMutation(t => (t.tests = t.tests.filter(n => n.OPTIONS.name !== "required"), t))
	}
	length(t, n = Le.length) {
		return this.test({
			message: n,
			name: "length",
			exclusive: !0,
			params: {
				length: t
			},
			skipAbsent: !0,
			test(r) {
				return r.length === this.resolve(t)
			}
		})
	}
	min(t, n = Le.min) {
		return this.test({
			message: n,
			name: "min",
			exclusive: !0,
			params: {
				min: t
			},
			skipAbsent: !0,
			test(r) {
				return r.length >= this.resolve(t)
			}
		})
	}
	max(t, n = Le.max) {
		return this.test({
			name: "max",
			exclusive: !0,
			message: n,
			params: {
				max: t
			},
			skipAbsent: !0,
			test(r) {
				return r.length <= this.resolve(t)
			}
		})
	}
	matches(t, n) {
		let r = !1,
			l, i;
		return n && (typeof n == "object" ? {
			excludeEmptyString: r = !1,
			message: l,
			name: i
		} = n : l = n), this.test({
			name: i || "matches",
			message: l || Le.matches,
			params: {
				regex: t
			},
			skipAbsent: !0,
			test: s => s === "" && r || s.search(t) !== -1
		})
	}
	email(t = Le.email) {
		return this.matches(By, {
			name: "email",
			message: t,
			excludeEmptyString: !0
		})
	}
	url(t = Le.url) {
		return this.matches(Wy, {
			name: "url",
			message: t,
			excludeEmptyString: !0
		})
	}
	uuid(t = Le.uuid) {
		return this.matches(Hy, {
			name: "uuid",
			message: t,
			excludeEmptyString: !1
		})
	}
	datetime(t) {
		let n = "",
			r, l;
		return t && (typeof t == "object" ? {
			message: n = "",
			allowOffset: r = !1,
			precision: l = void 0
		} = t : n = t), this.matches(Zy, {
			name: "datetime",
			message: n || Le.datetime,
			excludeEmptyString: !0
		}).test({
			name: "datetime_offset",
			message: n || Le.datetime_offset,
			params: {
				allowOffset: r
			},
			skipAbsent: !0,
			test: i => {
				if (!i || r) return !0;
				const s = lu(i);
				return s ? !!s.z : !1
			}
		}).test({
			name: "datetime_precision",
			message: n || Le.datetime_precision,
			params: {
				precision: l
			},
			skipAbsent: !0,
			test: i => {
				if (!i || l == null) return !0;
				const s = lu(i);
				return s ? s.precision === l : !1
			}
		})
	}
	ensure() {
		return this.default("").transform(t => t === null ? "" : t)
	}
	trim(t = Le.trim) {
		return this.transform(n => n != null ? n.trim() : n).test({
			message: t,
			name: "trim",
			test: qy
		})
	}
	lowercase(t = Le.lowercase) {
		return this.transform(n => Ot(n) ? n : n.toLowerCase()).test({
			message: t,
			name: "string_case",
			exclusive: !0,
			skipAbsent: !0,
			test: n => Ot(n) || n === n.toLowerCase()
		})
	}
	uppercase(t = Le.uppercase) {
		return this.transform(n => Ot(n) ? n : n.toUpperCase()).test({
			message: t,
			name: "string_case",
			exclusive: !0,
			skipAbsent: !0,
			test: n => Ot(n) || n === n.toUpperCase()
		})
	}
}
yn.prototype = sh.prototype;
let Xy = e => e != +e;

function ei() {
	return new oh
}
class oh extends st {
	constructor() {
		super({
			type: "number",
			check(t) {
				return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !Xy(t)
			}
		}), this.withMutation(() => {
			this.transform((t, n, r) => {
				if (!r.spec.coerce) return t;
				let l = t;
				if (typeof l == "string") {
					if (l = l.replace(/\s/g, ""), l === "") return NaN;
					l = +l
				}
				return r.isType(l) || l === null ? l : parseFloat(l)
			})
		})
	}
	min(t, n = Ut.min) {
		return this.test({
			message: n,
			name: "min",
			exclusive: !0,
			params: {
				min: t
			},
			skipAbsent: !0,
			test(r) {
				return r >= this.resolve(t)
			}
		})
	}
	max(t, n = Ut.max) {
		return this.test({
			message: n,
			name: "max",
			exclusive: !0,
			params: {
				max: t
			},
			skipAbsent: !0,
			test(r) {
				return r <= this.resolve(t)
			}
		})
	}
	lessThan(t, n = Ut.lessThan) {
		return this.test({
			message: n,
			name: "max",
			exclusive: !0,
			params: {
				less: t
			},
			skipAbsent: !0,
			test(r) {
				return r < this.resolve(t)
			}
		})
	}
	moreThan(t, n = Ut.moreThan) {
		return this.test({
			message: n,
			name: "min",
			exclusive: !0,
			params: {
				more: t
			},
			skipAbsent: !0,
			test(r) {
				return r > this.resolve(t)
			}
		})
	}
	positive(t = Ut.positive) {
		return this.moreThan(0, t)
	}
	negative(t = Ut.negative) {
		return this.lessThan(0, t)
	}
	integer(t = Ut.integer) {
		return this.test({
			name: "integer",
			message: t,
			skipAbsent: !0,
			test: n => Number.isInteger(n)
		})
	}
	truncate() {
		return this.transform(t => Ot(t) ? t : t | 0)
	}
	round(t) {
		var n;
		let r = ["ceil", "floor", "round", "trunc"];
		if (t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round", t === "trunc") return this.truncate();
		if (r.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + r.join(", "));
		return this.transform(l => Ot(l) ? l : Math[t](l))
	}
}
ei.prototype = oh.prototype;
let Jy = new Date(""),
	eg = e => Object.prototype.toString.call(e) === "[object Date]";
class ns extends st {
	constructor() {
		super({
			type: "date",
			check(t) {
				return eg(t) && !isNaN(t.getTime())
			}
		}), this.withMutation(() => {
			this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = by(t), isNaN(t) ? ns.INVALID_DATE : new Date(t)))
		})
	}
	prepareParam(t, n) {
		let r;
		if (pn.isRef(t)) r = t;
		else {
			let l = this.cast(t);
			if (!this._typeCheck(l)) throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
			r = l
		}
		return r
	}
	min(t, n = nu.min) {
		let r = this.prepareParam(t, "min");
		return this.test({
			message: n,
			name: "min",
			exclusive: !0,
			params: {
				min: t
			},
			skipAbsent: !0,
			test(l) {
				return l >= this.resolve(r)
			}
		})
	}
	max(t, n = nu.max) {
		let r = this.prepareParam(t, "max");
		return this.test({
			message: n,
			name: "max",
			exclusive: !0,
			params: {
				max: t
			},
			skipAbsent: !0,
			test(l) {
				return l <= this.resolve(r)
			}
		})
	}
}
ns.INVALID_DATE = Jy;
ns.prototype;

function tg(e, t = []) {
	let n = [],
		r = new Set,
		l = new Set(t.map(([s, o]) => `${s}-${o}`));

	function i(s, o) {
		let u = Cn.split(s)[0];
		r.add(u), l.has(`${o}-${u}`) || n.push([o, u])
	}
	for (const s of Object.keys(e)) {
		let o = e[s];
		r.add(s), pn.isRef(o) && o.isSibling ? i(o.path, s) : ts(o) && "deps" in o && o.deps.forEach(u => i(u, s))
	}
	return Py.array(Array.from(r), n).reverse()
}

function tf(e, t) {
	let n = 1 / 0;
	return e.some((r, l) => {
		var i;
		if ((i = t.path) != null && i.includes(r)) return n = l, !0
	}), n
}

function uh(e) {
	return (t, n) => tf(e, t) - tf(e, n)
}
const ah = (e, t, n) => {
	if (typeof e != "string") return e;
	let r = e;
	try {
		r = JSON.parse(e)
	} catch {}
	return n.isType(r) ? r : e
};

function ti(e) {
	if ("fields" in e) {
		const t = {};
		for (const [n, r] of Object.entries(e.fields)) t[n] = ti(r);
		return e.setFields(t)
	}
	if (e.type === "array") {
		const t = e.optional();
		return t.innerType && (t.innerType = ti(t.innerType)), t
	}
	return e.type === "tuple" ? e.optional().clone({
		types: e.spec.types.map(ti)
	}) : "optional" in e ? e.optional() : e
}
const ng = (e, t) => {
	const n = [...Cn.normalizePath(t)];
	if (n.length === 1) return n[0] in e;
	let r = n.pop(),
		l = Cn.getter(Cn.join(n), !0)(e);
	return !!(l && r in l)
};
let nf = e => Object.prototype.toString.call(e) === "[object Object]";

function rg(e, t) {
	let n = Object.keys(e.fields);
	return Object.keys(t).filter(r => n.indexOf(r) === -1)
}
const lg = uh([]);

function ni(e) {
	return new ch(e)
}
class ch extends st {
	constructor(t) {
		super({
			type: "object",
			check(n) {
				return nf(n) || typeof n == "function"
			}
		}), this.fields = Object.create(null), this._sortErrors = lg, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
			t && this.shape(t)
		})
	}
	_cast(t, n = {}) {
		var r;
		let l = super._cast(t, n);
		if (l === void 0) return this.getDefault(n);
		if (!this._typeCheck(l)) return l;
		let i = this.fields,
			s = (r = n.stripUnknown) != null ? r : this.spec.noUnknown,
			o = [].concat(this._nodes, Object.keys(l).filter(c => !this._nodes.includes(c))),
			u = {},
			a = Object.assign({}, n, {
				parent: u,
				__validating: n.__validating || !1
			}),
			d = !1;
		for (const c of o) {
			let p = i[c],
				y = c in l;
			if (p) {
				let S, w = l[c];
				a.path = (n.path ? `${n.path}.` : "") + c, p = p.resolve({
					value: w,
					context: n.context,
					parent: u
				});
				let T = p instanceof st ? p.spec : void 0,
					h = T == null ? void 0 : T.strict;
				if (T != null && T.strip) {
					d = d || c in l;
					continue
				}
				S = !n.__validating || !h ? p.cast(l[c], a) : l[c], S !== void 0 && (u[c] = S)
			} else y && !s && (u[c] = l[c]);
			(y !== c in u || u[c] !== l[c]) && (d = !0)
		}
		return d ? u : l
	}
	_validate(t, n = {}, r, l) {
		let {
			from: i = [],
			originalValue: s = t,
			recursive: o = this.spec.recursive
		} = n;
		n.from = [{
			schema: this,
			value: s
		}, ...i], n.__validating = !0, n.originalValue = s, super._validate(t, n, r, (u, a) => {
			if (!o || !nf(a)) {
				l(u, a);
				return
			}
			s = s || a;
			let d = [];
			for (let c of this._nodes) {
				let p = this.fields[c];
				!p || pn.isRef(p) || d.push(p.asNestedTest({
					options: n,
					key: c,
					parent: a,
					parentPath: n.path,
					originalParent: s
				}))
			}
			this.runTests({
				tests: d,
				value: a,
				originalValue: s,
				options: n
			}, r, c => {
				l(c.sort(this._sortErrors).concat(u), a)
			})
		})
	}
	clone(t) {
		const n = super.clone(t);
		return n.fields = Object.assign({}, this.fields), n._nodes = this._nodes, n._excludedEdges = this._excludedEdges, n._sortErrors = this._sortErrors, n
	}
	concat(t) {
		let n = super.concat(t),
			r = n.fields;
		for (let [l, i] of Object.entries(this.fields)) {
			const s = r[l];
			r[l] = s === void 0 ? i : s
		}
		return n.withMutation(l => l.setFields(r, [...this._excludedEdges, ...t._excludedEdges]))
	}
	_getDefault(t) {
		if ("default" in this.spec) return super._getDefault(t);
		if (!this._nodes.length) return;
		let n = {};
		return this._nodes.forEach(r => {
			var l;
			const i = this.fields[r];
			let s = t;
			(l = s) != null && l.value && (s = Object.assign({}, s, {
				parent: s.value,
				value: s.value[r]
			})), n[r] = i && "getDefault" in i ? i.getDefault(s) : void 0
		}), n
	}
	setFields(t, n) {
		let r = this.clone();
		return r.fields = t, r._nodes = tg(t, n), r._sortErrors = uh(Object.keys(t)), n && (r._excludedEdges = n), r
	}
	shape(t, n = []) {
		return this.clone().withMutation(r => {
			let l = r._excludedEdges;
			return n.length && (Array.isArray(n[0]) || (n = [n]), l = [...r._excludedEdges, ...n]), r.setFields(Object.assign(r.fields, t), l)
		})
	}
	partial() {
		const t = {};
		for (const [n, r] of Object.entries(this.fields)) t[n] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
		return this.setFields(t)
	}
	deepPartial() {
		return ti(this)
	}
	pick(t) {
		const n = {};
		for (const r of t) this.fields[r] && (n[r] = this.fields[r]);
		return this.setFields(n, this._excludedEdges.filter(([r, l]) => t.includes(r) && t.includes(l)))
	}
	omit(t) {
		const n = [];
		for (const r of Object.keys(this.fields)) t.includes(r) || n.push(r);
		return this.pick(n)
	}
	from(t, n, r) {
		let l = Cn.getter(t, !0);
		return this.transform(i => {
			if (!i) return i;
			let s = i;
			return ng(i, t) && (s = Object.assign({}, i), r || delete s[t], s[n] = l(i)), s
		})
	}
	json() {
		return this.transform(ah)
	}
	noUnknown(t = !0, n = ru.noUnknown) {
		typeof t != "boolean" && (n = t, t = !0);
		let r = this.test({
			name: "noUnknown",
			exclusive: !0,
			message: n,
			test(l) {
				if (l == null) return !0;
				const i = rg(this.schema, l);
				return !t || i.length === 0 || this.createError({
					params: {
						unknown: i.join(", ")
					}
				})
			}
		});
		return r.spec.noUnknown = t, r
	}
	unknown(t = !0, n = ru.noUnknown) {
		return this.noUnknown(!t, n)
	}
	transformKeys(t) {
		return this.transform(n => {
			if (!n) return n;
			const r = {};
			for (const l of Object.keys(n)) r[t(l)] = n[l];
			return r
		})
	}
	camelCase() {
		return this.transformKeys(qs.camelCase)
	}
	snakeCase() {
		return this.transformKeys(qs.snakeCase)
	}
	constantCase() {
		return this.transformKeys(t => qs.snakeCase(t).toUpperCase())
	}
	describe(t) {
		const n = (t ? this.resolve(t) : this).clone(),
			r = super.describe(t);
		r.fields = {};
		for (const [i, s] of Object.entries(n.fields)) {
			var l;
			let o = t;
			(l = o) != null && l.value && (o = Object.assign({}, o, {
				parent: o.value,
				value: o.value[i]
			})), r.fields[i] = s.describe(o)
		}
		return r
	}
}
ni.prototype = ch.prototype;

function iu(e) {
	return new fh(e)
}
class fh extends st {
	constructor(t) {
		super({
			type: "array",
			spec: {
				types: t
			},
			check(n) {
				return Array.isArray(n)
			}
		}), this.innerType = void 0, this.innerType = t
	}
	_cast(t, n) {
		const r = super._cast(t, n);
		if (!this._typeCheck(r) || !this.innerType) return r;
		let l = !1;
		const i = r.map((s, o) => {
			const u = this.innerType.cast(s, Object.assign({}, n, {
				path: `${n.path||""}[${o}]`
			}));
			return u !== s && (l = !0), u
		});
		return l ? i : r
	}
	_validate(t, n = {}, r, l) {
		var i;
		let s = this.innerType,
			o = (i = n.recursive) != null ? i : this.spec.recursive;
		n.originalValue != null && n.originalValue, super._validate(t, n, r, (u, a) => {
			var d;
			if (!o || !s || !this._typeCheck(a)) {
				l(u, a);
				return
			}
			let c = new Array(a.length);
			for (let y = 0; y < a.length; y++) {
				var p;
				c[y] = s.asNestedTest({
					options: n,
					index: y,
					parent: a,
					parentPath: n.path,
					originalParent: (p = n.originalValue) != null ? p : t
				})
			}
			this.runTests({
				value: a,
				tests: c,
				originalValue: (d = n.originalValue) != null ? d : t,
				options: n
			}, r, y => l(y.concat(u), a))
		})
	}
	clone(t) {
		const n = super.clone(t);
		return n.innerType = this.innerType, n
	}
	json() {
		return this.transform(ah)
	}
	concat(t) {
		let n = super.concat(t);
		return n.innerType = this.innerType, t.innerType && (n.innerType = n.innerType ? n.innerType.concat(t.innerType) : t.innerType), n
	}
	of(t) {
		let n = this.clone();
		if (!ts(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + jt(t));
		return n.innerType = t, n.spec = Object.assign({}, n.spec, {
			types: t
		}), n
	}
	length(t, n = Jl.length) {
		return this.test({
			message: n,
			name: "length",
			exclusive: !0,
			params: {
				length: t
			},
			skipAbsent: !0,
			test(r) {
				return r.length === this.resolve(t)
			}
		})
	}
	min(t, n) {
		return n = n || Jl.min, this.test({
			message: n,
			name: "min",
			exclusive: !0,
			params: {
				min: t
			},
			skipAbsent: !0,
			test(r) {
				return r.length >= this.resolve(t)
			}
		})
	}
	max(t, n) {
		return n = n || Jl.max, this.test({
			message: n,
			name: "max",
			exclusive: !0,
			params: {
				max: t
			},
			skipAbsent: !0,
			test(r) {
				return r.length <= this.resolve(t)
			}
		})
	}
	ensure() {
		return this.default(() => []).transform((t, n) => this._typeCheck(t) ? t : n == null ? [] : [].concat(n))
	}
	compact(t) {
		let n = t ? (r, l, i) => !t(r, l, i) : r => !!r;
		return this.transform(r => r != null ? r.filter(n) : r)
	}
	describe(t) {
		const n = (t ? this.resolve(t) : this).clone(),
			r = super.describe(t);
		if (n.innerType) {
			var l;
			let i = t;
			(l = i) != null && l.value && (i = Object.assign({}, i, {
				parent: i.value,
				value: i.value[0]
			})), r.innerType = n.innerType.describe(i)
		}
		return r
	}
}
iu.prototype = fh.prototype;

function ig({
	title: e,
	titleId: t,
	...n
}, r) {
	return k.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: r,
		"aria-labelledby": t
	}, n), e ? k.createElement("title", {
		id: t
	}, e) : null, k.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
	}))
}
const sg = k.forwardRef(ig);

function og({
	title: e,
	titleId: t,
	...n
}, r) {
	return k.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: r,
		"aria-labelledby": t
	}, n), e ? k.createElement("title", {
		id: t
	}, e) : null, k.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
	}))
}
const ug = k.forwardRef(og);

function ag({
	title: e,
	titleId: t,
	...n
}, r) {
	return k.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: r,
		"aria-labelledby": t
	}, n), e ? k.createElement("title", {
		id: t
	}, e) : null, k.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
	}))
}
const cg = k.forwardRef(ag);

function fg({
	title: e,
	titleId: t,
	...n
}, r) {
	return k.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: r,
		"aria-labelledby": t
	}, n), e ? k.createElement("title", {
		id: t
	}, e) : null, k.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
	}))
}
const rf = k.forwardRef(fg);

function dg({
	title: e,
	titleId: t,
	...n
}, r) {
	return k.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: r,
		"aria-labelledby": t
	}, n), e ? k.createElement("title", {
		id: t
	}, e) : null, k.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M6 18 18 6M6 6l12 12"
	}))
}
const pg = k.forwardRef(dg),
	lf = {
		primary: {
			bg: "bg-primary",
			color: "text-text"
		},
		secondary: {
			bg: "bg-secondary",
			color: "text-text"
		},
		danger: {
			bg: "bg-danger",
			color: "text-background"
		}
	};

function bt({
	purpose: e,
	type: t,
	text: n,
	styles: r,
	onClick: l,
	children: i
}) {
	return F.jsx("button", {
		type: t ?? "button",
		onClick: l,
		className: `rounded shrink-0 overflow-hidden group shadow ${lf[e].bg} ${lf[e].color} ${r??""}`,
		children: F.jsxs("div", {
			className: "flex  text-center justify-center px-2 py-2 group-hover:backdrop-brightness-90 group-active:backdrop-brightness-75",
			children: [n && F.jsx("div", {
				className: "px-2",
				children: n
			}), i]
		})
	})
}
const hg = [{
	name: "Vowels",
	symbols: "ɨ ʉ ɯ ɪ ʏ ʊ ø ɘ ɵ ɤ ɛ œ ɜ ɞ ʌ ɔ æ ɐ ɶ ɑ ɒ"
}, {
	name: "Plosive",
	symbols: "ʈ ɖ ɟ ɢ ʔ"
}, {
	name: "Nasal",
	symbols: "ɱ ɳ ɲ ŋ ɴ"
}, {
	name: "Trill",
	symbols: "ʙ ʀ"
}, {
	name: "Tap/Flap",
	symbols: "ⱱ ɾ ɽ"
}, {
	name: "Fricative",
	symbols: "ɸ β θ ð ʃ ʒ ʂ ʐ ç ʝ ɣ χ ʁ ħ ʕ ɦ"
}, {
	name: "Lateral Fricative",
	symbols: "ɬ ɮ"
}, {
	name: "Approximant",
	symbols: "ʋ ɹ ɻ ɰ"
}, {
	name: "Lateral Approximant",
	symbols: "ɭ ʎ ʟ"
}, {
	name: "Clicks",
	symbols: "ʘ ǀ ǃ ǂ ǁ"
}, {
	name: "Voiced Implosives",
	symbols: "ɓ ɗ ʄ ɠ ʛ"
}, {
	name: "Affricates",
	symbols: "t͡s t͡ʃ t͡ɕ ʈ͡ʂ d͡z d͡ʒ d͡ʑ ɖ͡ʐ"
}, {
	name: "Other",
	symbols: "ʍ w ʜ ʢ ʡ ɕ ʑ ɺ ɧ"
}];

function mg({
	form: e,
	focusedField: t
}) {
	const [n, r] = k.useState(!1), {
		setValue: l,
		getValues: i,
		setFocus: s,
		clearErrors: o
	} = e;

	function u(a) {
		t && (l(t, i(t) + a), s(t), o(t))
	}
	return F.jsx("div", {
		className: "flex-col shrink-0 bg-secondary/25 hidden md:flex",
		children: n ? F.jsxs(F.Fragment, {
			children: [F.jsxs("div", {
				className: "bg-secondary p-4 flex justify-between",
				children: [F.jsx("h1", {
					children: "IPA"
				}), F.jsx("button", {
					onClick: () => r(!1),
					children: F.jsx(pg, {
						className: "w-6"
					})
				})]
			}), F.jsx("div", {
				className: "h-[calc(100vh-7rem)] overflow-auto p-4",
				children: F.jsx("div", {
					className: "flex flex-col gap-4",
					children: hg.map(a => F.jsxs("div", {
						children: [F.jsx("h1", {
							children: a.name
						}), F.jsx("div", {
							className: "grid grid-cols-4 gap-2",
							children: a.symbols.split(" ").map(d => F.jsx(bt, {
								purpose: "secondary",
								styles: "font-noto",
								onClick: () => u(d),
								children: d
							}))
						})]
					}))
				})
			})]
		}) : F.jsx(F.Fragment, {
			children: F.jsx("button", {
				onClick: () => r(!0),
				className: "bg-secondary p-4",
				children: F.jsx(cg, {
					className: "h-6"
				})
			})
		})
	})
}

function Vt({
	type: e,
	placeholder: t,
	styles: n,
	onFocus: r,
	register: l
}) {
	return F.jsx("input", {
		type: e ?? "text",
		placeholder: t,
		onFocus: r,
		className: `font-noto border w-full border-neutral-300 p-2 shadow-sm ${n??""}`,
		...l
	})
}
const vg = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function yg({
	register: e
}) {
	return F.jsx("select", {
		className: "border border-neutral-300 p-2 shadow-sm",
		...e,
		children: vg.split("").map(t => F.jsx("option", {
			value: t,
			children: t
		}, t))
	})
}
const Ys = {
		charGroups: [{
			label: "A",
			characters: ""
		}],
		pattern: "",
		rewrites: [{
			sequence: "",
			replacements: ""
		}],
		exceptions: "",
		numWords: 50,
		syllablesMin: 1,
		syllablesMax: 3
	},
	sf = {
		charGroups: [{
			label: "C",
			characters: "p t k m n s w l j"
		}, {
			label: "V",
			characters: "a e i o u"
		}, {
			label: "N",
			characters: "m n"
		}],
		pattern: "(C)V(N)",
		rewrites: [{
			sequence: "si",
			replacements: "shi"
		}],
		exceptions: "VV",
		numWords: 50,
		syllablesMin: 1,
		syllablesMax: 3
	};

function gg({
	onSubmit: e
}) {
	var E, g, C, N;
	const [t, n] = k.useState(void 0), r = ni({
		charGroups: iu().of(ni().shape({
			label: yn().trim().required(),
			characters: yn().trim().label("Character group").required("Character group cannot be empty")
		})).required(),
		pattern: yn().trim().label("Pattern").required("Pattern cannot be empty"),
		rewrites: iu().of(ni().shape({
			sequence: yn().trim().label("Sequence cannot be empty").required("Sequence cannot be empty"),
			replacements: yn().trim().label("Replacement sequence").required("Replacement sequences cannot be empty")
		})).required(),
		exceptions: yn().trim().ensure(),
		numWords: ei().typeError("Not a valid number").integer("Number of words must be a whole number").min(1).label("Number of words").required(),
		syllablesMin: ei().typeError("Not a valid number").integer("Min must be a whole number").min(1).label("Min").required(),
		syllablesMax: ei().typeError("Not a valid number").integer("Max must be a whole number").min(zy("syllablesMin"), "Max must be greater than or equal to min").label("Max").required()
	}), l = oy({
		defaultValues: v() ?? sf,
		resolver: cy(r)
	}), {
		register: i,
		control: s,
		handleSubmit: o,
		reset: u,
		formState: a,
		getValues: d
	} = l, {
		errors: c
	} = a, {
		fields: p,
		append: y,
		remove: S
	} = Gc({
		name: "charGroups",
		control: s
	}), {
		fields: w,
		append: T,
		remove: h
	} = Gc({
		name: "rewrites",
		control: s
	});

	function f() {
		localStorage.setItem("formData", JSON.stringify(d()))
	}

	function v() {
		const O = localStorage.getItem("formData");
		return O ? JSON.parse(O) : null
	}
	return F.jsxs("div", {
		className: "flex w-full",
		children: [F.jsx(mg, {
			form: l,
			focusedField: t
		}), F.jsxs("div", {
			className: "flex flex-col bg-background flex-grow",
			children: [F.jsx("h1", {
				className: "bg-neutral-100 p-4",
				children: "Configuration"
			}), F.jsx("div", {
				className: "md:h-[calc(100vh-7rem)] overflow-y-auto p-4",
				children: F.jsxs("form", {
					className: "flex flex-col",
					onSubmit: o(e),
					onChange: f,
					children: [F.jsxs("div", {
						className: "flex pb-8 gap-2",
						children: [F.jsx(bt, {
							type: "submit",
							purpose: "primary",
							text: "Generate"
						}), F.jsx(bt, {
							purpose: "danger",
							text: "Clear",
							onClick: () => {
								u(Ys), f()
							}
						}), F.jsx(bt, {
							purpose: "danger",
							text: "Reset",
							onClick: () => {
								u(sf), f()
							}
						})]
					}), F.jsxs("div", {
						className: "grid grid-cols-3 gap-2 pb-4",
						children: [F.jsxs("label", {
							className: "flex flex-col gap-2",
							children: ["Words", F.jsx(Vt, {
								type: "number",
								placeholder: "50",
								register: i("numWords", {
									valueAsNumber: !0
								})
							})]
						}), F.jsxs("label", {
							className: "truncate flex flex-col gap-2",
							children: ["Min Syllables", F.jsx(Vt, {
								type: "number",
								placeholder: "1",
								register: i("syllablesMin", {
									valueAsNumber: !0
								})
							})]
						}), F.jsxs("label", {
							className: "truncate flex flex-col gap-2",
							children: ["Max Syllables", F.jsx(Vt, {
								type: "number",
								placeholder: "3",
								register: i("syllablesMax", {
									valueAsNumber: !0
								})
							})]
						}), F.jsx("p", {
							className: "text-sm text-danger",
							children: (E = c.numWords) == null ? void 0 : E.message
						}), F.jsx("p", {
							className: "text-sm text-danger",
							children: (g = c.syllablesMin) == null ? void 0 : g.message
						}), F.jsx("p", {
							className: "text-sm text-danger",
							children: (C = c.syllablesMax) == null ? void 0 : C.message
						})]
					}), F.jsxs("fieldset", {
						className: "flex flex-col gap-2 pb-4",
						children: [F.jsx("legend", {
							children: "Characters"
						}), p.map((O, M) => {
							var I, W, z, b;
							return F.jsxs("div", {
								className: "flex flex-col gap-2",
								children: [F.jsxs("div", {
									className: "flex items-center gap-2",
									children: [F.jsx(yg, {
										register: i(`charGroups.${M}.label`)
									}), F.jsx(Vt, {
										onFocus: () => n(`charGroups.${M}.characters`),
										placeholder: "a e i o u ...",
										register: i(`charGroups.${M}.characters`)
									}), p.length > 1 && F.jsx(bt, {
										purpose: "danger",
										onClick: () => S(M),
										children: F.jsx(rf, {
											className: "h-6"
										})
									})]
								}), c.charGroups && ((W = (I = c == null ? void 0 : c.charGroups[M]) == null ? void 0 : I.characters) == null ? void 0 : W.message) && F.jsx("p", {
									className: "text-sm text-danger",
									children: (b = (z = c.charGroups[M]) == null ? void 0 : z.characters) == null ? void 0 : b.message
								})]
							}, O.id)
						}), F.jsx(bt, {
							purpose: "secondary",
							text: "Add character group",
							onClick: () => y(Ys.charGroups[0])
						})]
					}), F.jsxs("label", {
						className: "flex flex-col gap-2 pb-8",
						children: ["Pattern", F.jsx(Vt, {
							onFocus: () => n("pattern"),
							placeholder: "(C)V(N)",
							register: i("pattern")
						}), F.jsx("p", {
							className: "text-sm text-danger",
							children: (N = c.pattern) == null ? void 0 : N.message
						})]
					}), F.jsxs("fieldset", {
						className: "flex flex-col gap-2 pb-8",
						children: [F.jsx("legend", {
							children: "Rewrites"
						}), w.map((O, M) => {
							var I, W, z, b, Y, ue, xe, he;
							return F.jsxs("div", {
								className: "flex flex-col gap-2",
								children: [F.jsxs("div", {
									className: "flex items-center gap-2",
									children: [F.jsx(Vt, {
										onFocus: () => n(`rewrites.${M}.sequence`),
										placeholder: "si",
										register: i(`rewrites.${M}.sequence`),
										styles: "[&&]:w-24"
									}), F.jsx(Vt, {
										onFocus: () => n(`rewrites.${M}.replacements`),
										placeholder: "shi",
										register: i(`rewrites.${M}.replacements`)
									}), F.jsx(bt, {
										purpose: "danger",
										onClick: () => h(M),
										children: F.jsx(rf, {
											className: "h-6"
										})
									})]
								}), c.rewrites && ((W = (I = c == null ? void 0 : c.rewrites[M]) == null ? void 0 : I.sequence) == null ? void 0 : W.message) && F.jsx("p", {
									className: "text-sm text-danger",
									children: (b = (z = c.rewrites[M]) == null ? void 0 : z.sequence) == null ? void 0 : b.message
								}), c.rewrites && ((ue = (Y = c == null ? void 0 : c.rewrites[M]) == null ? void 0 : Y.replacements) == null ? void 0 : ue.message) && F.jsx("p", {
									className: "text-sm text-danger",
									children: (he = (xe = c.rewrites[M]) == null ? void 0 : xe.replacements) == null ? void 0 : he.message
								})]
							}, O.id)
						}), F.jsx(bt, {
							purpose: "secondary",
							text: "Add sequence to rewrite",
							onClick: () => T(Ys.rewrites[0])
						})]
					}), F.jsxs("label", {
						className: "flex flex-col gap-2 pb-8",
						children: ["Exceptions", F.jsx(Vt, {
							onFocus: () => n("exceptions"),
							placeholder: "VV",
							register: i("exceptions")
						})]
					})]
				})
			})]
		})]
	})
}

function xg(e) {
	const [t, n] = wg(e.charGroups), r = Sg(e.rewrites), l = kg(e.exceptions, t);
	return {
		...e,
		charGroups: t,
		weights: n,
		rewrites: r,
		exceptions: l
	}
}

function wg(e) {
	const t = {},
		n = {};
	for (let r of e) {
		const l = /(.+)\*([0-9]*[.]?[0-9]+)/,
			i = r.characters.split(/\s+/),
			s = [],
			o = [];
		for (let u of i) {
			let a = l.exec(u);
			s.push(a ? a[1] : u), o.push(a ? parseFloat(a[2]) : 1)
		}
		t[r.label] = s, n[r.label] = o
	}
	return [t, n]
}

function Sg(e) {
	const t = {};
	for (let n of e) t[n.sequence] = n.replacements.split(/\s+/);
	return t
}

function kg(e, t) {
	const n = e ? e.split(/\s+/) : [],
		r = [];
	for (let l of n) {
		let i = [];
		for (let s of l) t[s] ? i.push(t[s]) : i.push([s]);
		r.push(...Eg(i))
	}
	return r
}

function Eg(e) {
	return e.reduce((t, n) => t.flatMap(r => n.map(l => r + l)))
}

function _g(e) {
	const t = xg(e);
	return Cg(t)
}

function Cg(e) {
	const t = [];
	for (let n = 0; n < e.numWords; n++) t.push(Fg(e));
	return t.filter(n => !Ng(n, e.exceptions))
}

function Fg(e) {
	const {
		charGroups: t,
		weights: n,
		pattern: r,
		syllablesMin: l,
		syllablesMax: i,
		rewrites: s
	} = e;
	let o = "",
		u = "";
	const a = Pg(l, i);
	for (let d = 0; d < a; d++) {
		let c = r;
		const p = /\[([^[]*?)\]/;
		for (; p.test(c);) {
			const S = p.exec(c)[1].split(/\s/);
			c = c.replace(p, of(S))
		}
		const y = /\(([^(]*?)\)/;
		for (; y.test(c);) {
			const S = y.exec(c)[1];
			c = c.replace(y, Tg() ? S : "")
		}
		o += c
	}
	for (let d of o) t[d] ? u += Og(t[d], n[d]) : u += d;
	for (let d of Object.keys(s)) u = u.replaceAll(d, of(s[d]));
	return u
}

function Ng(e, t) {
	return t.some(n => e.includes(n))
}

function Tg() {
	return Math.random() > .5
}

function Pg(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e)
}

function of(e) {
	if (e.length > 0) {
		const t = Math.floor(Math.random() * e.length);
		return e[t]
	}
	return ""
}

function Og(e, t) {
	if (e.length > 0) {
		const n = [];
		for (let l = 0; l < t.length; l += 1) n[l] = t[l] + (n[l - 1] || 0);
		const r = n[n.length - 1] * Math.random();
		for (let l = 0; l < e.length; l += 1)
			if (r <= n[l]) return e[l]
	}
	return ""
}

function Ag() {
	const [e, t] = k.useState([]), [n, r] = k.useState(!0), [l, i] = k.useState(!1), s = [...new Set(e)], o = (n ? e : s).join(l ? `
` : " ");

	function u() {
		navigator.clipboard.writeText(o)
	}
	return F.jsxs("div", {
		className: "flex flex-col md:flex-row",
		children: [F.jsx("div", {
			className: "md:w-3/4",
			children: F.jsx(gg, {
				onSubmit: a => t(_g(a))
			})
		}), F.jsxs("div", {
			className: "flex flex-col bg-primary/20 md:w-1/4",
			children: [F.jsx("h1", {
				className: "bg-primary p-4",
				children: "Words"
			}), F.jsxs("div", {
				className: "md:h-[calc(100vh-7rem)] overflow-y-auto p-4",
				children: [F.jsxs("div", {
					className: "flex items-center justify-between",
					children: [F.jsxs("div", {
						className: "flex gap-4",
						children: [F.jsxs("label", {
							className: "flex items-center gap-1",
							children: [F.jsx("input", {
								type: "checkbox",
								onChange: () => i(a => !a),
								checked: l
							}), "List"]
						}), F.jsxs("label", {
							className: "flex items-center gap-1",
							children: [F.jsx("input", {
								type: "checkbox",
								onChange: () => r(a => !a),
								checked: n
							}), "Show duplicates"]
						})]
					}), F.jsx("div", {
						children: F.jsx("button", {
							onClick: u,
							className: "p-2 group",
							children: F.jsx(ug, {
								className: "h-6 group-active:text-neutral-500"
							})
						})
					})]
				}), F.jsxs("div", {
					className: "border-y border-primary py-4 my-4",
					children: [F.jsx("p", {
						children: `Words generated:
              ${n?e.length:s.length}`
					}), !n && F.jsx("p", {
						children: `Duplicates removed: ${e.length-s.length}`
					})]
				}), F.jsx("p", {
					className: "whitespace-pre-line font-noto",
					children: e.length > 0 ? o : F.jsx("span", {
						className: "italic font-semibold",
						children: "Click 'Generate' to see word list."
					})
				})]
			})]
		})]
	})
}

function jg() {
	return F.jsx("div", {
		className: "flex justify-center",
		children: F.jsx("h1", {
			className: "absolute w-full max-w-screen-xl top-1/2 text-center text-3xl",
			children: "Docs coming soon™!"
		})
	})
}
const Rg = "/assets/logo-CAMeQlC-.svg";
var $g = Object.defineProperty,
	Dg = (e, t, n) => t in e ? $g(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n,
	Xs = (e, t, n) => (Dg(e, typeof t != "symbol" ? t + "" : t, n), n);
let Lg = class {
		constructor() {
			Xs(this, "current", this.detect()), Xs(this, "handoffState", "pending"), Xs(this, "currentId", 0)
		}
		set(t) {
			this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
		}
		reset() {
			this.set(this.detect())
		}
		nextId() {
			return ++this.currentId
		}
		get isServer() {
			return this.current === "server"
		}
		get isClient() {
			return this.current === "client"
		}
		detect() {
			return typeof window > "u" || typeof document > "u" ? "server" : "client"
		}
		handoff() {
			this.handoffState === "pending" && (this.handoffState = "complete")
		}
		get isHandoffComplete() {
			return this.handoffState === "complete"
		}
	},
	Fn = new Lg,
	on = (e, t) => {
		Fn.isServer ? k.useEffect(e, t) : k.useLayoutEffect(e, t)
	};

function da(e) {
	let t = k.useRef(e);
	return on(() => {
		t.current = e
	}, [e]), t
}
let Ve = function(e) {
	let t = da(e);
	return H.useCallback((...n) => t.current(...n), [t])
};

function Ig(e) {
	typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
		throw t
	}))
}

function hr() {
	let e = [],
		t = {
			addEventListener(n, r, l, i) {
				return n.addEventListener(r, l, i), t.add(() => n.removeEventListener(r, l, i))
			},
			requestAnimationFrame(...n) {
				let r = requestAnimationFrame(...n);
				return t.add(() => cancelAnimationFrame(r))
			},
			nextFrame(...n) {
				return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
			},
			setTimeout(...n) {
				let r = setTimeout(...n);
				return t.add(() => clearTimeout(r))
			},
			microTask(...n) {
				let r = {
					current: !0
				};
				return Ig(() => {
					r.current && n[0]()
				}), t.add(() => {
					r.current = !1
				})
			},
			style(n, r, l) {
				let i = n.style.getPropertyValue(r);
				return Object.assign(n.style, {
					[r]: l
				}), this.add(() => {
					Object.assign(n.style, {
						[r]: i
					})
				})
			},
			group(n) {
				let r = hr();
				return n(r), this.add(() => r.dispose())
			},
			add(n) {
				return e.push(n), () => {
					let r = e.indexOf(n);
					if (r >= 0)
						for (let l of e.splice(r, 1)) l()
				}
			},
			dispose() {
				for (let n of e.splice(0)) n()
			}
		};
	return t
}

function dh() {
	let [e] = k.useState(hr);
	return k.useEffect(() => () => e.dispose(), [e]), e
}

function Mg() {
	let e = typeof document > "u";
	return "useSyncExternalStore" in to ? (t => t.useSyncExternalStore)(to)(() => () => {}, () => !1, () => !e) : !1
}

function zg() {
	let e = Mg(),
		[t, n] = k.useState(Fn.isHandoffComplete);
	return t && Fn.isHandoffComplete === !1 && n(!1), k.useEffect(() => {
		t !== !0 && n(!0)
	}, [t]), k.useEffect(() => Fn.handoff(), []), e ? !1 : t
}
var uf;
let pa = (uf = H.useId) != null ? uf : function() {
	let e = zg(),
		[t, n] = H.useState(e ? () => Fn.nextId() : null);
	return on(() => {
		t === null && n(Fn.nextId())
	}, [t]), t != null ? "" + t : void 0
};

function gl(e, t, ...n) {
	if (e in t) {
		let l = t[e];
		return typeof l == "function" ? l(...n) : l
	}
	let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);
	throw Error.captureStackTrace && Error.captureStackTrace(r, gl), r
}

function rs(e) {
	return Fn.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let su = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var ou = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ou || {}),
	Vg = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Vg || {}),
	Ug = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ug || {});

function ph(e = document.body) {
	return e == null ? [] : Array.from(e.querySelectorAll(su)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var ha = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ha || {});

function ma(e, t = 0) {
	var n;
	return e === ((n = rs(e)) == null ? void 0 : n.body) ? !1 : gl(t, {
		0() {
			return e.matches(su)
		},
		1() {
			let r = e;
			for (; r !== null;) {
				if (r.matches(su)) return !0;
				r = r.parentElement
			}
			return !1
		}
	})
}

function hh(e) {
	let t = rs(e);
	hr().nextFrame(() => {
		t && !ma(t.activeElement, 0) && Bg(e)
	})
}
var bg = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(bg || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
	e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
	e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function Bg(e) {
	e == null || e.focus({
		preventScroll: !0
	})
}
let Wg = ["textarea", "input"].join(",");

function Hg(e) {
	var t, n;
	return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Wg)) != null ? n : !1
}

function mh(e, t = n => n) {
	return e.slice().sort((n, r) => {
		let l = t(n),
			i = t(r);
		if (l === null || i === null) return 0;
		let s = l.compareDocumentPosition(i);
		return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
	})
}

function Qg(e, t) {
	return Gg(ph(), t, {
		relativeTo: e
	})
}

function Gg(e, t, {
	sorted: n = !0,
	relativeTo: r = null,
	skipElements: l = []
} = {}) {
	let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
		s = Array.isArray(e) ? n ? mh(e) : e : ph(e);
	l.length > 0 && s.length > 1 && (s = s.filter(y => !l.includes(y))), r = r ?? i.activeElement;
	let o = (() => {
			if (t & 5) return 1;
			if (t & 10) return -1;
			throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
		})(),
		u = (() => {
			if (t & 1) return 0;
			if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
			if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
			if (t & 8) return s.length - 1;
			throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
		})(),
		a = t & 32 ? {
			preventScroll: !0
		} : {},
		d = 0,
		c = s.length,
		p;
	do {
		if (d >= c || d + c <= 0) return 0;
		let y = u + d;
		if (t & 16) y = (y + c) % c;
		else {
			if (y < 0) return 3;
			if (y >= c) return 1
		}
		p = s[y], p == null || p.focus(a), d += o
	} while (p !== i.activeElement);
	return t & 6 && Hg(p) && p.select(), 2
}

function Kg() {
	return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function Zg() {
	return /Android/gi.test(window.navigator.userAgent)
}

function qg() {
	return Kg() || Zg()
}

function Ml(e, t, n) {
	let r = da(t);
	k.useEffect(() => {
		function l(i) {
			r.current(i)
		}
		return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
	}, [e, n])
}

function Yg(e, t, n) {
	let r = da(t);
	k.useEffect(() => {
		function l(i) {
			r.current(i)
		}
		return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
	}, [e, n])
}

function Xg(e, t, n = !0) {
	let r = k.useRef(!1);
	k.useEffect(() => {
		requestAnimationFrame(() => {
			r.current = n
		})
	}, [n]);

	function l(s, o) {
		if (!r.current || s.defaultPrevented) return;
		let u = o(s);
		if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
		let a = function d(c) {
			return typeof c == "function" ? d(c()) : Array.isArray(c) || c instanceof Set ? c : [c]
		}(e);
		for (let d of a) {
			if (d === null) continue;
			let c = d instanceof HTMLElement ? d : d.current;
			if (c != null && c.contains(u) || s.composed && s.composedPath().includes(c)) return
		}
		return !ma(u, ha.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u)
	}
	let i = k.useRef(null);
	Ml("pointerdown", s => {
		var o, u;
		r.current && (i.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target)
	}, !0), Ml("mousedown", s => {
		var o, u;
		r.current && (i.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target)
	}, !0), Ml("click", s => {
		qg() || i.current && (l(s, () => i.current), i.current = null)
	}, !0), Ml("touchend", s => l(s, () => s.target instanceof HTMLElement ? s.target : null), !0), Yg("blur", s => l(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function Jg(...e) {
	return k.useMemo(() => rs(...e), [...e])
}

function af(e) {
	var t;
	if (e.type) return e.type;
	let n = (t = e.as) != null ? t : "button";
	if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function e1(e, t) {
	let [n, r] = k.useState(() => af(e));
	return on(() => {
		r(af(e))
	}, [e.type, e.as]), on(() => {
		n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
	}, [n, t]), n
}
let t1 = Symbol();

function ls(...e) {
	let t = k.useRef(e);
	k.useEffect(() => {
		t.current = e
	}, [e]);
	let n = Ve(r => {
		for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
	});
	return e.every(r => r == null || (r == null ? void 0 : r[t1])) ? void 0 : n
}

function cf(e) {
	return [e.screenX, e.screenY]
}

function n1() {
	let e = k.useRef([-1, -1]);
	return {
		wasMoved(t) {
			let n = cf(t);
			return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0)
		},
		update(t) {
			e.current = cf(t)
		}
	}
}

function r1({
	container: e,
	accept: t,
	walk: n,
	enabled: r = !0
}) {
	let l = k.useRef(t),
		i = k.useRef(n);
	k.useEffect(() => {
		l.current = t, i.current = n
	}, [t, n]), on(() => {
		if (!e || !r) return;
		let s = rs(e);
		if (!s) return;
		let o = l.current,
			u = i.current,
			a = Object.assign(c => o(c), {
				acceptNode: o
			}),
			d = s.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1);
		for (; d.nextNode();) u(d.currentNode)
	}, [e, r, l, i])
}

function ff(...e) {
	return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var uu = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(uu || {}),
	l1 = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(l1 || {});

function is({
	ourProps: e,
	theirProps: t,
	slot: n,
	defaultTag: r,
	features: l,
	visible: i = !0,
	name: s,
	mergeRefs: o
}) {
	o = o ?? i1;
	let u = vh(t, e);
	if (i) return zl(u, n, r, s, o);
	let a = l ?? 0;
	if (a & 2) {
		let {
			static: d = !1,
			...c
		} = u;
		if (d) return zl(c, n, r, s, o)
	}
	if (a & 1) {
		let {
			unmount: d = !0,
			...c
		} = u;
		return gl(d ? 0 : 1, {
			0() {
				return null
			},
			1() {
				return zl({
					...c,
					hidden: !0,
					style: {
						display: "none"
					}
				}, n, r, s, o)
			}
		})
	}
	return zl(u, n, r, s, o)
}

function zl(e, t = {}, n, r, l) {
	let {
		as: i = n,
		children: s,
		refName: o = "ref",
		...u
	} = Js(e, ["unmount", "static"]), a = e.ref !== void 0 ? {
		[o]: e.ref
	} : {}, d = typeof s == "function" ? s(t) : s;
	"className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
	let c = {};
	if (t) {
		let p = !1,
			y = [];
		for (let [S, w] of Object.entries(t)) typeof w == "boolean" && (p = !0), w === !0 && y.push(S);
		p && (c["data-headlessui-state"] = y.join(" "))
	}
	if (i === k.Fragment && Object.keys(df(u)).length > 0) {
		if (!k.isValidElement(d) || Array.isArray(d) && d.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map(w => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(w => `  - ${w}`).join(`
`)].join(`
`));
		let p = d.props,
			y = typeof(p == null ? void 0 : p.className) == "function" ? (...w) => ff(p == null ? void 0 : p.className(...w), u.className) : ff(p == null ? void 0 : p.className, u.className),
			S = y ? {
				className: y
			} : {};
		return k.cloneElement(d, Object.assign({}, vh(d.props, df(Js(u, ["ref"]))), c, a, {
			ref: l(d.ref, a.ref)
		}, S))
	}
	return k.createElement(i, Object.assign({}, Js(u, ["ref"]), i !== k.Fragment && a, i !== k.Fragment && c), d)
}

function i1(...e) {
	return e.every(t => t == null) ? void 0 : t => {
		for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
	}
}

function vh(...e) {
	if (e.length === 0) return {};
	if (e.length === 1) return e[0];
	let t = {},
		n = {};
	for (let r of e)
		for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
	if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
	for (let r in n) Object.assign(t, {
		[r](l, ...i) {
			let s = n[r];
			for (let o of s) {
				if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
				o(l, ...i)
			}
		}
	});
	return t
}

function ss(e) {
	var t;
	return Object.assign(k.forwardRef(e), {
		displayName: (t = e.displayName) != null ? t : e.name
	})
}

function df(e) {
	let t = Object.assign({}, e);
	for (let n in t) t[n] === void 0 && delete t[n];
	return t
}

function Js(e, t = []) {
	let n = Object.assign({}, e);
	for (let r of t) r in n && delete n[r];
	return n
}
let va = k.createContext(null);
va.displayName = "OpenClosedContext";
var cl = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(cl || {});

function s1() {
	return k.useContext(va)
}

function o1({
	value: e,
	children: t
}) {
	return H.createElement(va.Provider, {
		value: e
	}, t)
}

function u1(e) {
	let t = e.parentElement,
		n = null;
	for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
	let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
	return r && a1(n) ? !1 : r
}

function a1(e) {
	if (!e) return !1;
	let t = e.previousElementSibling;
	for (; t !== null;) {
		if (t instanceof HTMLLegendElement) return !1;
		t = t.previousElementSibling
	}
	return !0
}

function c1(e) {
	throw new Error("Unexpected object: " + e)
}
var dt = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(dt || {});

function f1(e, t) {
	let n = t.resolveItems();
	if (n.length <= 0) return null;
	let r = t.resolveActiveIndex(),
		l = r ?? -1;
	switch (e.focus) {
		case 0: {
			for (let i = 0; i < n.length; ++i)
				if (!t.resolveDisabled(n[i], i, n)) return i;
			return r
		}
		case 1: {
			for (let i = l - 1; i >= 0; --i)
				if (!t.resolveDisabled(n[i], i, n)) return i;
			return r
		}
		case 2: {
			for (let i = l + 1; i < n.length; ++i)
				if (!t.resolveDisabled(n[i], i, n)) return i;
			return r
		}
		case 3: {
			for (let i = n.length - 1; i >= 0; --i)
				if (!t.resolveDisabled(n[i], i, n)) return i;
			return r
		}
		case 4: {
			for (let i = 0; i < n.length; ++i)
				if (t.resolveId(n[i], i, n) === e.id) return i;
			return r
		}
		case 5:
			return null;
		default:
			c1(e)
	}
}
var _e = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(_e || {});
let pf = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function hf(e) {
	var t, n;
	let r = (t = e.innerText) != null ? t : "",
		l = e.cloneNode(!0);
	if (!(l instanceof HTMLElement)) return r;
	let i = !1;
	for (let o of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) o.remove(), i = !0;
	let s = i ? (n = l.innerText) != null ? n : "" : r;
	return pf.test(s) && (s = s.replace(pf, "")), s
}

function d1(e) {
	let t = e.getAttribute("aria-label");
	if (typeof t == "string") return t.trim();
	let n = e.getAttribute("aria-labelledby");
	if (n) {
		let r = n.split(" ").map(l => {
			let i = document.getElementById(l);
			if (i) {
				let s = i.getAttribute("aria-label");
				return typeof s == "string" ? s.trim() : hf(i).trim()
			}
			return null
		}).filter(Boolean);
		if (r.length > 0) return r.join(", ")
	}
	return hf(e).trim()
}

function p1(e) {
	let t = k.useRef(""),
		n = k.useRef("");
	return Ve(() => {
		let r = e.current;
		if (!r) return "";
		let l = r.innerText;
		if (t.current === l) return n.current;
		let i = d1(r).trim().toLowerCase();
		return t.current = l, n.current = i, i
	})
}
var h1 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(h1 || {}),
	m1 = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(m1 || {}),
	v1 = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(v1 || {});

function eo(e, t = n => n) {
	let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
		r = mh(t(e.items.slice()), i => i.dataRef.current.domRef.current),
		l = n ? r.indexOf(n) : null;
	return l === -1 && (l = null), {
		items: r,
		activeItemIndex: l
	}
}
let y1 = {
		1(e) {
			return e.menuState === 1 ? e : {
				...e,
				activeItemIndex: null,
				menuState: 1
			}
		},
		0(e) {
			return e.menuState === 0 ? e : {
				...e,
				__demoMode: !1,
				menuState: 0
			}
		},
		2: (e, t) => {
			var n;
			let r = eo(e),
				l = f1(t, {
					resolveItems: () => r.items,
					resolveActiveIndex: () => r.activeItemIndex,
					resolveId: i => i.id,
					resolveDisabled: i => i.dataRef.current.disabled
				});
			return {
				...e,
				...r,
				searchQuery: "",
				activeItemIndex: l,
				activationTrigger: (n = t.trigger) != null ? n : 1
			}
		},
		3: (e, t) => {
			let n = e.searchQuery !== "" ? 0 : 1,
				r = e.searchQuery + t.value.toLowerCase(),
				l = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(s => {
					var o;
					return ((o = s.dataRef.current.textValue) == null ? void 0 : o.startsWith(r)) && !s.dataRef.current.disabled
				}),
				i = l ? e.items.indexOf(l) : -1;
			return i === -1 || i === e.activeItemIndex ? {
				...e,
				searchQuery: r
			} : {
				...e,
				searchQuery: r,
				activeItemIndex: i,
				activationTrigger: 1
			}
		},
		4(e) {
			return e.searchQuery === "" ? e : {
				...e,
				searchQuery: "",
				searchActiveItemIndex: null
			}
		},
		5: (e, t) => {
			let n = eo(e, r => [...r, {
				id: t.id,
				dataRef: t.dataRef
			}]);
			return {
				...e,
				...n
			}
		},
		6: (e, t) => {
			let n = eo(e, r => {
				let l = r.findIndex(i => i.id === t.id);
				return l !== -1 && r.splice(l, 1), r
			});
			return {
				...e,
				...n,
				activationTrigger: 1
			}
		}
	},
	ya = k.createContext(null);
ya.displayName = "MenuContext";

function os(e) {
	let t = k.useContext(ya);
	if (t === null) {
		let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(n, os), n
	}
	return t
}

function g1(e, t) {
	return gl(t.type, y1, e, t)
}
let x1 = k.Fragment;

function w1(e, t) {
	let {
		__demoMode: n = !1,
		...r
	} = e, l = k.useReducer(g1, {
		__demoMode: n,
		menuState: n ? 0 : 1,
		buttonRef: k.createRef(),
		itemsRef: k.createRef(),
		items: [],
		searchQuery: "",
		activeItemIndex: null,
		activationTrigger: 1
	}), [{
		menuState: i,
		itemsRef: s,
		buttonRef: o
	}, u] = l, a = ls(t);
	Xg([o, s], (y, S) => {
		var w;
		u({
			type: 1
		}), ma(S, ha.Loose) || (y.preventDefault(), (w = o.current) == null || w.focus())
	}, i === 0);
	let d = Ve(() => {
			u({
				type: 1
			})
		}),
		c = k.useMemo(() => ({
			open: i === 0,
			close: d
		}), [i, d]),
		p = {
			ref: a
		};
	return H.createElement(ya.Provider, {
		value: l
	}, H.createElement(o1, {
		value: gl(i, {
			0: cl.Open,
			1: cl.Closed
		})
	}, is({
		ourProps: p,
		theirProps: r,
		slot: c,
		defaultTag: x1,
		name: "Menu"
	})))
}
let S1 = "button";

function k1(e, t) {
	var n;
	let r = pa(),
		{
			id: l = `headlessui-menu-button-${r}`,
			...i
		} = e,
		[s, o] = os("Menu.Button"),
		u = ls(s.buttonRef, t),
		a = dh(),
		d = Ve(w => {
			switch (w.key) {
				case _e.Space:
				case _e.Enter:
				case _e.ArrowDown:
					w.preventDefault(), w.stopPropagation(), o({
						type: 0
					}), a.nextFrame(() => o({
						type: 2,
						focus: dt.First
					}));
					break;
				case _e.ArrowUp:
					w.preventDefault(), w.stopPropagation(), o({
						type: 0
					}), a.nextFrame(() => o({
						type: 2,
						focus: dt.Last
					}));
					break
			}
		}),
		c = Ve(w => {
			switch (w.key) {
				case _e.Space:
					w.preventDefault();
					break
			}
		}),
		p = Ve(w => {
			if (u1(w.currentTarget)) return w.preventDefault();
			e.disabled || (s.menuState === 0 ? (o({
				type: 1
			}), a.nextFrame(() => {
				var T;
				return (T = s.buttonRef.current) == null ? void 0 : T.focus({
					preventScroll: !0
				})
			})) : (w.preventDefault(), o({
				type: 0
			})))
		}),
		y = k.useMemo(() => ({
			open: s.menuState === 0
		}), [s]),
		S = {
			ref: u,
			id: l,
			type: e1(e, s.buttonRef),
			"aria-haspopup": "menu",
			"aria-controls": (n = s.itemsRef.current) == null ? void 0 : n.id,
			"aria-expanded": s.menuState === 0,
			onKeyDown: d,
			onKeyUp: c,
			onClick: p
		};
	return is({
		ourProps: S,
		theirProps: i,
		slot: y,
		defaultTag: S1,
		name: "Menu.Button"
	})
}
let E1 = "div",
	_1 = uu.RenderStrategy | uu.Static;

function C1(e, t) {
	var n, r;
	let l = pa(),
		{
			id: i = `headlessui-menu-items-${l}`,
			...s
		} = e,
		[o, u] = os("Menu.Items"),
		a = ls(o.itemsRef, t),
		d = Jg(o.itemsRef),
		c = dh(),
		p = s1(),
		y = p !== null ? (p & cl.Open) === cl.Open : o.menuState === 0;
	k.useEffect(() => {
		let f = o.itemsRef.current;
		f && o.menuState === 0 && f !== (d == null ? void 0 : d.activeElement) && f.focus({
			preventScroll: !0
		})
	}, [o.menuState, o.itemsRef, d]), r1({
		container: o.itemsRef.current,
		enabled: o.menuState === 0,
		accept(f) {
			return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
		},
		walk(f) {
			f.setAttribute("role", "none")
		}
	});
	let S = Ve(f => {
			var v, E;
			switch (c.dispose(), f.key) {
				case _e.Space:
					if (o.searchQuery !== "") return f.preventDefault(), f.stopPropagation(), u({
						type: 3,
						value: f.key
					});
				case _e.Enter:
					if (f.preventDefault(), f.stopPropagation(), u({
							type: 1
						}), o.activeItemIndex !== null) {
						let {
							dataRef: g
						} = o.items[o.activeItemIndex];
						(E = (v = g.current) == null ? void 0 : v.domRef.current) == null || E.click()
					}
					hh(o.buttonRef.current);
					break;
				case _e.ArrowDown:
					return f.preventDefault(), f.stopPropagation(), u({
						type: 2,
						focus: dt.Next
					});
				case _e.ArrowUp:
					return f.preventDefault(), f.stopPropagation(), u({
						type: 2,
						focus: dt.Previous
					});
				case _e.Home:
				case _e.PageUp:
					return f.preventDefault(), f.stopPropagation(), u({
						type: 2,
						focus: dt.First
					});
				case _e.End:
				case _e.PageDown:
					return f.preventDefault(), f.stopPropagation(), u({
						type: 2,
						focus: dt.Last
					});
				case _e.Escape:
					f.preventDefault(), f.stopPropagation(), u({
						type: 1
					}), hr().nextFrame(() => {
						var g;
						return (g = o.buttonRef.current) == null ? void 0 : g.focus({
							preventScroll: !0
						})
					});
					break;
				case _e.Tab:
					f.preventDefault(), f.stopPropagation(), u({
						type: 1
					}), hr().nextFrame(() => {
						Qg(o.buttonRef.current, f.shiftKey ? ou.Previous : ou.Next)
					});
					break;
				default:
					f.key.length === 1 && (u({
						type: 3,
						value: f.key
					}), c.setTimeout(() => u({
						type: 4
					}), 350));
					break
			}
		}),
		w = Ve(f => {
			switch (f.key) {
				case _e.Space:
					f.preventDefault();
					break
			}
		}),
		T = k.useMemo(() => ({
			open: o.menuState === 0
		}), [o]),
		h = {
			"aria-activedescendant": o.activeItemIndex === null || (n = o.items[o.activeItemIndex]) == null ? void 0 : n.id,
			"aria-labelledby": (r = o.buttonRef.current) == null ? void 0 : r.id,
			id: i,
			onKeyDown: S,
			onKeyUp: w,
			role: "menu",
			tabIndex: 0,
			ref: a
		};
	return is({
		ourProps: h,
		theirProps: s,
		slot: T,
		defaultTag: E1,
		features: _1,
		visible: y,
		name: "Menu.Items"
	})
}
let F1 = k.Fragment;

function N1(e, t) {
	let n = pa(),
		{
			id: r = `headlessui-menu-item-${n}`,
			disabled: l = !1,
			...i
		} = e,
		[s, o] = os("Menu.Item"),
		u = s.activeItemIndex !== null ? s.items[s.activeItemIndex].id === r : !1,
		a = k.useRef(null),
		d = ls(t, a);
	on(() => {
		if (s.__demoMode || s.menuState !== 0 || !u || s.activationTrigger === 0) return;
		let g = hr();
		return g.requestAnimationFrame(() => {
			var C, N;
			(N = (C = a.current) == null ? void 0 : C.scrollIntoView) == null || N.call(C, {
				block: "nearest"
			})
		}), g.dispose
	}, [s.__demoMode, a, u, s.menuState, s.activationTrigger, s.activeItemIndex]);
	let c = p1(a),
		p = k.useRef({
			disabled: l,
			domRef: a,
			get textValue() {
				return c()
			}
		});
	on(() => {
		p.current.disabled = l
	}, [p, l]), on(() => (o({
		type: 5,
		id: r,
		dataRef: p
	}), () => o({
		type: 6,
		id: r
	})), [p, r]);
	let y = Ve(() => {
			o({
				type: 1
			})
		}),
		S = Ve(g => {
			if (l) return g.preventDefault();
			o({
				type: 1
			}), hh(s.buttonRef.current)
		}),
		w = Ve(() => {
			if (l) return o({
				type: 2,
				focus: dt.Nothing
			});
			o({
				type: 2,
				focus: dt.Specific,
				id: r
			})
		}),
		T = n1(),
		h = Ve(g => T.update(g)),
		f = Ve(g => {
			T.wasMoved(g) && (l || u || o({
				type: 2,
				focus: dt.Specific,
				id: r,
				trigger: 0
			}))
		}),
		v = Ve(g => {
			T.wasMoved(g) && (l || u && o({
				type: 2,
				focus: dt.Nothing
			}))
		}),
		E = k.useMemo(() => ({
			active: u,
			disabled: l,
			close: y
		}), [u, l, y]);
	return is({
		ourProps: {
			id: r,
			ref: d,
			role: "menuitem",
			tabIndex: l === !0 ? void 0 : -1,
			"aria-disabled": l === !0 ? !0 : void 0,
			disabled: void 0,
			onClick: S,
			onFocus: w,
			onPointerEnter: h,
			onMouseEnter: h,
			onPointerMove: f,
			onMouseMove: f,
			onPointerLeave: v,
			onMouseLeave: v
		},
		theirProps: i,
		slot: E,
		defaultTag: F1,
		name: "Menu.Item"
	})
}
let T1 = ss(w1),
	P1 = ss(k1),
	O1 = ss(C1),
	A1 = ss(N1),
	Or = Object.assign(T1, {
		Button: P1,
		Items: O1,
		Item: A1
	});
const mf = [{
		name: "Generator",
		path: "/"
	}, {
		name: "Docs",
		path: "/docs"
	}],
	vf = [{
		name: "Github",
		url: "https://github.com/CollinBrennan/word-generator"
	}];

function j1() {
	const [e, t] = k.useState("/"), n = Ev();
	k.useEffect(() => {
		n(e)
	}, [e]);

	function r(l) {
		t(l)
	}
	return F.jsx("div", {
		className: "bg-neutral-700 text-background",
		children: F.jsxs("div", {
			className: "relative flex justify-between items-center px-4 py-2",
			children: [F.jsx("img", {
				src: Rg,
				className: "h-6",
				alt: "Wrdz"
			}), F.jsxs(Or, {
				as: "nav",
				className: "relative text-right md:hidden",
				children: [F.jsx(Or.Button, {
					className: "py-2",
					children: F.jsx(sg, {
						className: "h-6"
					})
				}), F.jsxs(Or.Items, {
					className: "absolute right-0 flex flex-col shadow bg-background text-text rounded overflow-hidden divide-y divide-neutral-200",
					children: [F.jsx("div", {
						className: "flex flex-col",
						children: mf.map((l, i) => F.jsx(Or.Item, {
							children: ({
								active: s
							}) => F.jsx("a", {
								onClick: () => r(l.path),
								className: `px-4 py-2 cursor-pointer ${s&&"bg-neutral-300"}`,
								children: l.name
							}, i)
						}))
					}), F.jsx("div", {
						className: "flex flex-col",
						children: vf.map((l, i) => F.jsx(Or.Item, {
							children: ({
								active: s
							}) => F.jsx("a", {
								href: l.url,
								target: "_blank",
								className: `px-4 py-2 cursor-pointer ${s&&"bg-neutral-300"}`,
								children: l.name
							}, i)
						}))
					})]
				})]
			}), F.jsxs("nav", {
				className: "hidden md:flex items-center",
				children: [mf.map((l, i) => F.jsx("a", {
					className: "px-4 py-2 rounded" + (e === l.path ? " backdrop-brightness-50" : " cursor-pointer"),
					onClick: () => r(l.path),
					children: l.name
				}, i)), F.jsx("div", {
					className: "ml-2 px-2 border-l border-neutral-300 text-neutral-300",
					children: vf.map((l, i) => F.jsx("a", {
						href: l.url,
						target: "_blank",
						className: "px-4 py-2 last:pr-0 cursor-pointer",
						children: l.name
					}, i))
				})]
			})]
		})
	})
}

function R1() {
	return F.jsx(F.Fragment, {
		children: F.jsxs(Uv, {
			children: [F.jsx(j1, {}), F.jsxs(Mv, {
				children: [F.jsx(Yo, {
					path: "/",
					element: F.jsx(Ag, {})
				}), F.jsx(Yo, {
					path: "/docs",
					element: F.jsx(jg, {})
				})]
			})]
		})
	})
}
no.createRoot(document.getElementById("root")).render(F.jsx(H.StrictMode, {
	children: F.jsx(R1, {})
}));