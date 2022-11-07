(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7514],
  {
    98456: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var r = t(63366),
        o = t(87462),
        i = t(67294),
        l = t(86010),
        u = t(94780),
        c = t(70917),
        a = t(41220),
        s = t(71657),
        f = t(90948),
        p = t(34867);
      function h(e) {
        return (0, p.Z)("MuiCircularProgress", e);
      }
      (0, t(1588).Z)("MuiCircularProgress", [
        "root",
        "determinate",
        "indeterminate",
        "colorPrimary",
        "colorSecondary",
        "svg",
        "circle",
        "circleDeterminate",
        "circleIndeterminate",
        "circleDisableShrink",
      ]);
      var d = t(85893);
      const m = [
        "className",
        "color",
        "disableShrink",
        "size",
        "style",
        "thickness",
        "value",
        "variant",
      ];
      let g,
        y,
        k,
        x,
        v = (e) => e;
      const b = 44,
        C = (0, c.F4)(
          g ||
            (g = v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
        ),
        w = (0, c.F4)(
          y ||
            (y = v`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
        ),
        S = (0, f.ZP)("span", {
          name: "MuiCircularProgress",
          slot: "Root",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [n.root, n[t.variant], n[`color${(0, a.Z)(t.color)}`]];
          },
        })(
          ({ ownerState: e, theme: n }) =>
            (0, o.Z)(
              { display: "inline-block" },
              "determinate" === e.variant && {
                transition: n.transitions.create("transform"),
              },
              "inherit" !== e.color && {
                color: (n.vars || n).palette[e.color].main,
              }
            ),
          ({ ownerState: e }) =>
            "indeterminate" === e.variant &&
            (0, c.iv)(
              k ||
                (k = v`
      animation: ${0} 1.4s linear infinite;
    `),
              C
            )
        ),
        A = (0, f.ZP)("svg", {
          name: "MuiCircularProgress",
          slot: "Svg",
          overridesResolver: (e, n) => n.svg,
        })({ display: "block" }),
        F = (0, f.ZP)("circle", {
          name: "MuiCircularProgress",
          slot: "Circle",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [
              n.circle,
              n[`circle${(0, a.Z)(t.variant)}`],
              t.disableShrink && n.circleDisableShrink,
            ];
          },
        })(
          ({ ownerState: e, theme: n }) =>
            (0, o.Z)(
              { stroke: "currentColor" },
              "determinate" === e.variant && {
                transition: n.transitions.create("stroke-dashoffset"),
              },
              "indeterminate" === e.variant && {
                strokeDasharray: "80px, 200px",
                strokeDashoffset: 0,
              }
            ),
          ({ ownerState: e }) =>
            "indeterminate" === e.variant &&
            !e.disableShrink &&
            (0, c.iv)(
              x ||
                (x = v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
              w
            )
        );
      var E = i.forwardRef(function (e, n) {
        const t = (0, s.Z)({ props: e, name: "MuiCircularProgress" }),
          {
            className: i,
            color: c = "primary",
            disableShrink: f = !1,
            size: p = 40,
            style: g,
            thickness: y = 3.6,
            value: k = 0,
            variant: x = "indeterminate",
          } = t,
          v = (0, r.Z)(t, m),
          C = (0, o.Z)({}, t, {
            color: c,
            disableShrink: f,
            size: p,
            thickness: y,
            value: k,
            variant: x,
          }),
          w = ((e) => {
            const { classes: n, variant: t, color: r, disableShrink: o } = e,
              i = {
                root: ["root", t, `color${(0, a.Z)(r)}`],
                svg: ["svg"],
                circle: [
                  "circle",
                  `circle${(0, a.Z)(t)}`,
                  o && "circleDisableShrink",
                ],
              };
            return (0, u.Z)(i, h, n);
          })(C),
          E = {},
          D = {},
          T = {};
        if ("determinate" === x) {
          const e = 2 * Math.PI * ((b - y) / 2);
          (E.strokeDasharray = e.toFixed(3)),
            (T["aria-valuenow"] = Math.round(k)),
            (E.strokeDashoffset = `${(((100 - k) / 100) * e).toFixed(3)}px`),
            (D.transform = "rotate(-90deg)");
        }
        return (0,
        d.jsx)(S, (0, o.Z)({ className: (0, l.Z)(w.root, i), style: (0, o.Z)({ width: p, height: p }, D, g), ownerState: C, ref: n, role: "progressbar" }, T, v, { children: (0, d.jsx)(A, { className: w.svg, ownerState: C, viewBox: "22 22 44 44", children: (0, d.jsx)(F, { className: w.circle, style: E, ownerState: C, cx: b, cy: b, r: (b - y) / 2, fill: "none", strokeWidth: y }) }) }));
      });
    },
    94470: function (e) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        t = Object.prototype.toString,
        r = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        i = function (e) {
          return "function" === typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === t.call(e);
        },
        l = function (e) {
          if (!e || "[object Object]" !== t.call(e)) return !1;
          var r,
            o = n.call(e, "constructor"),
            i =
              e.constructor &&
              e.constructor.prototype &&
              n.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !o && !i) return !1;
          for (r in e);
          return "undefined" === typeof r || n.call(e, r);
        },
        u = function (e, n) {
          r && "__proto__" === n.name
            ? r(e, n.name, {
                enumerable: !0,
                configurable: !0,
                value: n.newValue,
                writable: !0,
              })
            : (e[n.name] = n.newValue);
        },
        c = function (e, t) {
          if ("__proto__" === t) {
            if (!n.call(e, t)) return;
            if (o) return o(e, t).value;
          }
          return e[t];
        };
      e.exports = function e() {
        var n,
          t,
          r,
          o,
          a,
          s,
          f = arguments[0],
          p = 1,
          h = arguments.length,
          d = !1;
        for (
          "boolean" === typeof f &&
            ((d = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ("object" !== typeof f && "function" !== typeof f)) &&
              (f = {});
          p < h;
          ++p
        )
          if (null != (n = arguments[p]))
            for (t in n)
              (r = c(f, t)),
                f !== (o = c(n, t)) &&
                  (d && o && (l(o) || (a = i(o)))
                    ? (a
                        ? ((a = !1), (s = r && i(r) ? r : []))
                        : (s = r && l(r) ? r : {}),
                      u(f, { name: t, newValue: e(d, s, o) }))
                    : "undefined" !== typeof o &&
                      u(f, { name: t, newValue: o }));
        return f;
      };
    },
    18139: function (e) {
      var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        t = /\n/g,
        r = /^\s*/,
        o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        u = /^[;\s]*/,
        c = /^\s+|\s+$/g,
        a = "";
      function s(e) {
        return e ? e.replace(c, a) : a;
      }
      e.exports = function (e, c) {
        if ("string" !== typeof e)
          throw new TypeError("First argument must be a string");
        if (!e) return [];
        c = c || {};
        var f = 1,
          p = 1;
        function h(e) {
          var n = e.match(t);
          n && (f += n.length);
          var r = e.lastIndexOf("\n");
          p = ~r ? e.length - r : p + e.length;
        }
        function d() {
          var e = { line: f, column: p };
          return function (n) {
            return (n.position = new m(e)), x(), n;
          };
        }
        function m(e) {
          (this.start = e),
            (this.end = { line: f, column: p }),
            (this.source = c.source);
        }
        m.prototype.content = e;
        var g = [];
        function y(n) {
          var t = new Error(c.source + ":" + f + ":" + p + ": " + n);
          if (
            ((t.reason = n),
            (t.filename = c.source),
            (t.line = f),
            (t.column = p),
            (t.source = e),
            !c.silent)
          )
            throw t;
          g.push(t);
        }
        function k(n) {
          var t = n.exec(e);
          if (t) {
            var r = t[0];
            return h(r), (e = e.slice(r.length)), t;
          }
        }
        function x() {
          k(r);
        }
        function v(e) {
          var n;
          for (e = e || []; (n = b()); ) !1 !== n && e.push(n);
          return e;
        }
        function b() {
          var n = d();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var t = 2;
              a != e.charAt(t) &&
              ("*" != e.charAt(t) || "/" != e.charAt(t + 1));

            )
              ++t;
            if (((t += 2), a === e.charAt(t - 1)))
              return y("End of comment missing");
            var r = e.slice(2, t - 2);
            return (
              (p += 2),
              h(r),
              (e = e.slice(t)),
              (p += 2),
              n({ type: "comment", comment: r })
            );
          }
        }
        function C() {
          var e = d(),
            t = k(o);
          if (t) {
            if ((b(), !k(i))) return y("property missing ':'");
            var r = k(l),
              c = e({
                type: "declaration",
                property: s(t[0].replace(n, a)),
                value: r ? s(r[0].replace(n, a)) : a,
              });
            return k(u), c;
          }
        }
        return (
          x(),
          (function () {
            var e,
              n = [];
            for (v(n); (e = C()); ) !1 !== e && (n.push(e), v(n));
            return n;
          })()
        );
      };
    },
    48738: function (e) {
      e.exports = function (e) {
        return (
          null != e &&
          null != e.constructor &&
          "function" === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      };
    },
    70729: function (e) {
      "use strict";
      var n = {};
      function t(e, r, o) {
        var i,
          l,
          u,
          c,
          a,
          s = "";
        for (
          "string" !== typeof r && ((o = r), (r = t.defaultChars)),
            "undefined" === typeof o && (o = !0),
            a = (function (e) {
              var t,
                r,
                o = n[e];
              if (o) return o;
              for (o = n[e] = [], t = 0; t < 128; t++)
                (r = String.fromCharCode(t)),
                  /^[0-9a-z]$/i.test(r)
                    ? o.push(r)
                    : o.push(
                        "%" + ("0" + t.toString(16).toUpperCase()).slice(-2)
                      );
              for (t = 0; t < e.length; t++) o[e.charCodeAt(t)] = e[t];
              return o;
            })(r),
            i = 0,
            l = e.length;
          i < l;
          i++
        )
          if (
            ((u = e.charCodeAt(i)),
            o &&
              37 === u &&
              i + 2 < l &&
              /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3)))
          )
            (s += e.slice(i, i + 3)), (i += 2);
          else if (u < 128) s += a[u];
          else if (u >= 55296 && u <= 57343) {
            if (
              u >= 55296 &&
              u <= 56319 &&
              i + 1 < l &&
              (c = e.charCodeAt(i + 1)) >= 56320 &&
              c <= 57343
            ) {
              (s += encodeURIComponent(e[i] + e[i + 1])), i++;
              continue;
            }
            s += "%EF%BF%BD";
          } else s += encodeURIComponent(e[i]);
        return s;
      }
      (t.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
        (t.componentChars = "-_.!~*'()"),
        (e.exports = t);
    },
    9008: function (e, n, t) {
      e.exports = t(5443);
    },
    92703: function (e, n, t) {
      "use strict";
      var r = t(50414);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, n, t, o, i, l) {
            if (l !== r) {
              var u = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function n() {
            return e;
          }
          e.isRequired = e;
          var t = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (t.PropTypes = t), t;
        });
    },
    45697: function (e, n, t) {
      e.exports = t(92703)();
    },
    50414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    71471: function (e, n) {
      "use strict";
      var t,
        r = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        l = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        a = Symbol.for("react.context"),
        s = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        h = Symbol.for("react.suspense_list"),
        d = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        g = Symbol.for("react.offscreen");
      function y(e) {
        if ("object" === typeof e && null !== e) {
          var n = e.$$typeof;
          switch (n) {
            case r:
              switch ((e = e.type)) {
                case i:
                case u:
                case l:
                case p:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case a:
                    case f:
                    case m:
                    case d:
                    case c:
                      return e;
                    default:
                      return n;
                  }
              }
            case o:
              return n;
          }
        }
      }
      (t = Symbol.for("react.module.reference")),
        (n.ContextConsumer = a),
        (n.ContextProvider = c),
        (n.Element = r),
        (n.ForwardRef = f),
        (n.Fragment = i),
        (n.Lazy = m),
        (n.Memo = d),
        (n.Portal = o),
        (n.Profiler = u),
        (n.StrictMode = l),
        (n.Suspense = p),
        (n.SuspenseList = h),
        (n.isAsyncMode = function () {
          return !1;
        }),
        (n.isConcurrentMode = function () {
          return !1;
        }),
        (n.isContextConsumer = function (e) {
          return y(e) === a;
        }),
        (n.isContextProvider = function (e) {
          return y(e) === c;
        }),
        (n.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }),
        (n.isForwardRef = function (e) {
          return y(e) === f;
        }),
        (n.isFragment = function (e) {
          return y(e) === i;
        }),
        (n.isLazy = function (e) {
          return y(e) === m;
        }),
        (n.isMemo = function (e) {
          return y(e) === d;
        }),
        (n.isPortal = function (e) {
          return y(e) === o;
        }),
        (n.isProfiler = function (e) {
          return y(e) === u;
        }),
        (n.isStrictMode = function (e) {
          return y(e) === l;
        }),
        (n.isSuspense = function (e) {
          return y(e) === p;
        }),
        (n.isSuspenseList = function (e) {
          return y(e) === h;
        }),
        (n.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === u ||
            e === l ||
            e === p ||
            e === h ||
            e === g ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === d ||
                e.$$typeof === c ||
                e.$$typeof === a ||
                e.$$typeof === f ||
                e.$$typeof === t ||
                void 0 !== e.getModuleId))
          );
        }),
        (n.typeOf = y);
    },
    82143: function (e, n, t) {
      "use strict";
      e.exports = t(71471);
    },
    57848: function (e, n, t) {
      var r = t(18139);
      e.exports = function (e, n) {
        var t,
          o = null;
        if (!e || "string" !== typeof e) return o;
        for (
          var i, l, u = r(e), c = "function" === typeof n, a = 0, s = u.length;
          a < s;
          a++
        )
          (i = (t = u[a]).property),
            (l = t.value),
            c ? n(i, l, t) : l && (o || (o = {}), (o[i] = l));
        return o;
      };
    },
    44301: function (e, n, t) {
      "use strict";
      t.d(n, {
        T: function () {
          return o;
        },
      });
      const r = document.createElement("i");
      function o(e) {
        const n = "&" + e + ";";
        r.innerHTML = n;
        const t = r.textContent;
        return (
          (59 !== t.charCodeAt(t.length - 1) || "semi" === e) && t !== n && t
        );
      }
    },
    23402: function (e, n, t) {
      "use strict";
      t.d(n, {
        w: function () {
          return i;
        },
      });
      var r = t(8387),
        o = t(75364);
      const i = {
        tokenize: function (e, n, t) {
          return (0, r.f)(
            e,
            function (e) {
              return null === e || (0, o.Ch)(e) ? n(e) : t(e);
            },
            "linePrefix"
          );
        },
        partial: !0,
      };
    },
    8387: function (e, n, t) {
      "use strict";
      t.d(n, {
        f: function () {
          return o;
        },
      });
      var r = t(75364);
      function o(e, n, t, o) {
        const i = o ? o - 1 : Number.POSITIVE_INFINITY;
        let l = 0;
        return function (o) {
          if ((0, r.xz)(o)) return e.enter(t), u(o);
          return n(o);
        };
        function u(o) {
          return (0, r.xz)(o) && l++ < i
            ? (e.consume(o), u)
            : (e.exit(t), n(o));
        }
      }
    },
    75364: function (e, n, t) {
      "use strict";
      t.d(n, {
        jv: function () {
          return r;
        },
        H$: function () {
          return l;
        },
        n9: function () {
          return c;
        },
        Av: function () {
          return a;
        },
        pY: function () {
          return o;
        },
        AF: function () {
          return i;
        },
        sR: function () {
          return u;
        },
        Ch: function () {
          return f;
        },
        z3: function () {
          return s;
        },
        xz: function () {
          return p;
        },
        Xh: function () {
          return d;
        },
        B8: function () {
          return h;
        },
      });
      const r = m(/[A-Za-z]/),
        o = m(/\d/),
        i = m(/[\dA-Fa-f]/),
        l = m(/[\dA-Za-z]/),
        u = m(/[!-/:-@[-`{-~]/),
        c = m(/[#-'*+\--9=?A-Z^-~]/);
      function a(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      function s(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function f(e) {
        return null !== e && e < -2;
      }
      function p(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      const h = m(/\s/),
        d = m(
          /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        );
      function m(e) {
        return function (n) {
          return null !== n && e.test(String.fromCharCode(n));
        };
      }
    },
    21905: function (e, n, t) {
      "use strict";
      function r(e, n, t, r) {
        const o = e.length;
        let i,
          l = 0;
        if (
          ((n = n < 0 ? (-n > o ? 0 : o + n) : n > o ? o : n),
          (t = t > 0 ? t : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)), i.unshift(n, t), [].splice.apply(e, i);
        else
          for (t && [].splice.apply(e, [n, t]); l < r.length; )
            (i = r.slice(l, l + 1e4)),
              i.unshift(n, 0),
              [].splice.apply(e, i),
              (l += 1e4),
              (n += 1e4);
      }
      function o(e, n) {
        return e.length > 0 ? (r(e, e.length, 0, n), e) : n;
      }
      t.d(n, {
        V: function () {
          return o;
        },
        d: function () {
          return r;
        },
      });
    },
    62987: function (e, n, t) {
      "use strict";
      t.d(n, {
        r: function () {
          return o;
        },
      });
      var r = t(75364);
      function o(e) {
        return null === e || (0, r.z3)(e) || (0, r.B8)(e)
          ? 1
          : (0, r.Xh)(e)
          ? 2
          : void 0;
      }
    },
    4663: function (e, n, t) {
      "use strict";
      t.d(n, {
        W: function () {
          return i;
        },
      });
      var r = t(21905);
      const o = {}.hasOwnProperty;
      function i(e) {
        const n = {};
        let t = -1;
        for (; ++t < e.length; ) l(n, e[t]);
        return n;
      }
      function l(e, n) {
        let t;
        for (t in n) {
          const r = (o.call(e, t) ? e[t] : void 0) || (e[t] = {}),
            i = n[t];
          let l;
          for (l in i) {
            o.call(r, l) || (r[l] = []);
            const e = i[l];
            u(r[l], Array.isArray(e) ? e : e ? [e] : []);
          }
        }
      }
      function u(e, n) {
        let t = -1;
        const o = [];
        for (; ++t < n.length; ) ("after" === n[t].add ? e : o).push(n[t]);
        (0, r.d)(e, 0, 0, o);
      }
    },
    80889: function (e, n, t) {
      "use strict";
      function r(e, n) {
        const t = Number.parseInt(e, n);
        return t < 9 ||
          11 === t ||
          (t > 13 && t < 32) ||
          (t > 126 && t < 160) ||
          (t > 55295 && t < 57344) ||
          (t > 64975 && t < 65008) ||
          65535 === (65535 & t) ||
          65534 === (65535 & t) ||
          t > 1114111
          ? "\ufffd"
          : String.fromCharCode(t);
      }
      t.d(n, {
        o: function () {
          return r;
        },
      });
    },
    47881: function (e, n, t) {
      "use strict";
      t.d(n, {
        v: function () {
          return l;
        },
      });
      var r = t(44301),
        o = t(80889);
      const i =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function l(e) {
        return e.replace(i, u);
      }
      function u(e, n, t) {
        if (n) return n;
        if (35 === t.charCodeAt(0)) {
          const e = t.charCodeAt(1),
            n = 120 === e || 88 === e;
          return (0, o.o)(t.slice(n ? 2 : 1), n ? 16 : 10);
        }
        return (0, r.T)(t) || e;
      }
    },
    11098: function (e, n, t) {
      "use strict";
      function r(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      t.d(n, {
        d: function () {
          return r;
        },
      });
    },
    87961: function (e, n, t) {
      "use strict";
      function r(e, n, t) {
        const r = [];
        let o = -1;
        for (; ++o < e.length; ) {
          const i = e[o].resolveAll;
          i && !r.includes(i) && ((n = i(n, t)), r.push(i));
        }
        return n;
      }
      t.d(n, {
        C: function () {
          return r;
        },
      });
    },
    30911: function (e, n, t) {
      "use strict";
      t.d(n, {
        D: function () {
          return zt;
        },
      });
      var r = {};
      t.r(r),
        t.d(r, {
          attentionMarkers: function () {
            return Xe;
          },
          contentInitial: function () {
            return Ve;
          },
          disable: function () {
            return Qe;
          },
          document: function () {
            return Ue;
          },
          flow: function () {
            return qe;
          },
          flowInitial: function () {
            return $e;
          },
          insideSpan: function () {
            return Ye;
          },
          string: function () {
            return We;
          },
          text: function () {
            return Ze;
          },
        });
      var o = {};
      t.r(o),
        t.d(o, {
          boolean: function () {
            return Nn;
          },
          booleanish: function () {
            return Un;
          },
          commaOrSpaceSeparated: function () {
            return Zn;
          },
          commaSeparated: function () {
            return Wn;
          },
          number: function () {
            return $n;
          },
          overloadedBoolean: function () {
            return Vn;
          },
          spaceSeparated: function () {
            return qn;
          },
        });
      var i = t(67294),
        l = t(48738);
      function u(e) {
        return e && "object" === typeof e
          ? "position" in e || "type" in e
            ? a(e.position)
            : "start" in e || "end" in e
            ? a(e)
            : "line" in e || "column" in e
            ? c(e)
            : ""
          : "";
      }
      function c(e) {
        return s(e && e.line) + ":" + s(e && e.column);
      }
      function a(e) {
        return c(e && e.start) + "-" + c(e && e.end);
      }
      function s(e) {
        return e && "number" === typeof e ? e : 1;
      }
      class f extends Error {
        constructor(e, n, t) {
          const r = [null, null];
          let o = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          };
          if (
            (super(),
            "string" === typeof n && ((t = n), (n = void 0)),
            "string" === typeof t)
          ) {
            const e = t.indexOf(":");
            -1 === e
              ? (r[1] = t)
              : ((r[0] = t.slice(0, e)), (r[1] = t.slice(e + 1)));
          }
          n &&
            ("type" in n || "position" in n
              ? n.position && (o = n.position)
              : "start" in n || "end" in n
              ? (o = n)
              : ("line" in n || "column" in n) && (o.start = n)),
            (this.name = u(n) || "1:1"),
            (this.message = "object" === typeof e ? e.message : e),
            (this.stack = "object" === typeof e ? e.stack : ""),
            (this.reason = this.message),
            this.fatal,
            (this.line = o.start.line),
            (this.column = o.start.column),
            (this.source = r[0]),
            (this.ruleId = r[1]),
            (this.position = o),
            this.actual,
            this.expected,
            this.file,
            this.url,
            this.note;
        }
      }
      (f.prototype.file = ""),
        (f.prototype.name = ""),
        (f.prototype.reason = ""),
        (f.prototype.message = ""),
        (f.prototype.stack = ""),
        (f.prototype.fatal = null),
        (f.prototype.column = null),
        (f.prototype.line = null),
        (f.prototype.source = null),
        (f.prototype.ruleId = null),
        (f.prototype.position = null);
      const p = {
        basename: function (e, n) {
          if (void 0 !== n && "string" !== typeof n)
            throw new TypeError('"ext" argument must be a string');
          h(e);
          let t,
            r = 0,
            o = -1,
            i = e.length;
          if (void 0 === n || 0 === n.length || n.length > e.length) {
            for (; i--; )
              if (47 === e.charCodeAt(i)) {
                if (t) {
                  r = i + 1;
                  break;
                }
              } else o < 0 && ((t = !0), (o = i + 1));
            return o < 0 ? "" : e.slice(r, o);
          }
          if (n === e) return "";
          let l = -1,
            u = n.length - 1;
          for (; i--; )
            if (47 === e.charCodeAt(i)) {
              if (t) {
                r = i + 1;
                break;
              }
            } else
              l < 0 && ((t = !0), (l = i + 1)),
                u > -1 &&
                  (e.charCodeAt(i) === n.charCodeAt(u--)
                    ? u < 0 && (o = i)
                    : ((u = -1), (o = l)));
          r === o ? (o = l) : o < 0 && (o = e.length);
          return e.slice(r, o);
        },
        dirname: function (e) {
          if ((h(e), 0 === e.length)) return ".";
          let n,
            t = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.charCodeAt(r)) {
              if (n) {
                t = r;
                break;
              }
            } else n || (n = !0);
          return t < 0
            ? 47 === e.charCodeAt(0)
              ? "/"
              : "."
            : 1 === t && 47 === e.charCodeAt(0)
            ? "//"
            : e.slice(0, t);
        },
        extname: function (e) {
          h(e);
          let n,
            t = e.length,
            r = -1,
            o = 0,
            i = -1,
            l = 0;
          for (; t--; ) {
            const u = e.charCodeAt(t);
            if (47 !== u)
              r < 0 && ((n = !0), (r = t + 1)),
                46 === u
                  ? i < 0
                    ? (i = t)
                    : 1 !== l && (l = 1)
                  : i > -1 && (l = -1);
            else if (n) {
              o = t + 1;
              break;
            }
          }
          if (
            i < 0 ||
            r < 0 ||
            0 === l ||
            (1 === l && i === r - 1 && i === o + 1)
          )
            return "";
          return e.slice(i, r);
        },
        join: function (...e) {
          let n,
            t = -1;
          for (; ++t < e.length; )
            h(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
          return void 0 === n
            ? "."
            : (function (e) {
                h(e);
                const n = 47 === e.charCodeAt(0);
                let t = (function (e, n) {
                  let t,
                    r,
                    o = "",
                    i = 0,
                    l = -1,
                    u = 0,
                    c = -1;
                  for (; ++c <= e.length; ) {
                    if (c < e.length) t = e.charCodeAt(c);
                    else {
                      if (47 === t) break;
                      t = 47;
                    }
                    if (47 === t) {
                      if (l === c - 1 || 1 === u);
                      else if (l !== c - 1 && 2 === u) {
                        if (
                          o.length < 2 ||
                          2 !== i ||
                          46 !== o.charCodeAt(o.length - 1) ||
                          46 !== o.charCodeAt(o.length - 2)
                        )
                          if (o.length > 2) {
                            if (
                              ((r = o.lastIndexOf("/")), r !== o.length - 1)
                            ) {
                              r < 0
                                ? ((o = ""), (i = 0))
                                : ((o = o.slice(0, r)),
                                  (i = o.length - 1 - o.lastIndexOf("/"))),
                                (l = c),
                                (u = 0);
                              continue;
                            }
                          } else if (o.length > 0) {
                            (o = ""), (i = 0), (l = c), (u = 0);
                            continue;
                          }
                        n && ((o = o.length > 0 ? o + "/.." : ".."), (i = 2));
                      } else
                        o.length > 0
                          ? (o += "/" + e.slice(l + 1, c))
                          : (o = e.slice(l + 1, c)),
                          (i = c - l - 1);
                      (l = c), (u = 0);
                    } else 46 === t && u > -1 ? u++ : (u = -1);
                  }
                  return o;
                })(e, !n);
                0 !== t.length || n || (t = ".");
                t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
                return n ? "/" + t : t;
              })(n);
        },
        sep: "/",
      };
      function h(e) {
        if ("string" !== typeof e)
          throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      const d = {
        cwd: function () {
          return "/";
        },
      };
      function m(e) {
        return null !== e && "object" === typeof e && e.href && e.origin;
      }
      function g(e) {
        if ("string" === typeof e) e = new URL(e);
        else if (!m(e)) {
          const n = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
              e +
              "`"
          );
          throw ((n.code = "ERR_INVALID_ARG_TYPE"), n);
        }
        if ("file:" !== e.protocol) {
          const e = new TypeError("The URL must be of scheme file");
          throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
        }
        return (function (e) {
          if ("" !== e.hostname) {
            const e = new TypeError(
              'File URL host must be "localhost" or empty on darwin'
            );
            throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
          }
          const n = e.pathname;
          let t = -1;
          for (; ++t < n.length; )
            if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
              const e = n.charCodeAt(t + 2);
              if (70 === e || 102 === e) {
                const e = new TypeError(
                  "File URL path must not include encoded / characters"
                );
                throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
              }
            }
          return decodeURIComponent(n);
        })(e);
      }
      const y = ["history", "path", "basename", "stem", "extname", "dirname"];
      class k {
        constructor(e) {
          let n;
          (n = e
            ? "string" === typeof e || l(e)
              ? { value: e }
              : m(e)
              ? { path: e }
              : e
            : {}),
            (this.data = {}),
            (this.messages = []),
            (this.history = []),
            (this.cwd = d.cwd()),
            this.value,
            this.stored,
            this.result,
            this.map;
          let t,
            r = -1;
          for (; ++r < y.length; ) {
            const e = y[r];
            e in n &&
              void 0 !== n[e] &&
              (this[e] = "history" === e ? [...n[e]] : n[e]);
          }
          for (t in n) y.includes(t) || (this[t] = n[t]);
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          m(e) && (e = g(e)),
            v(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get dirname() {
          return "string" === typeof this.path ? p.dirname(this.path) : void 0;
        }
        set dirname(e) {
          b(this.basename, "dirname"),
            (this.path = p.join(e || "", this.basename));
        }
        get basename() {
          return "string" === typeof this.path ? p.basename(this.path) : void 0;
        }
        set basename(e) {
          v(e, "basename"),
            x(e, "basename"),
            (this.path = p.join(this.dirname || "", e));
        }
        get extname() {
          return "string" === typeof this.path ? p.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((x(e, "extname"), b(this.dirname, "extname"), e)) {
            if (46 !== e.charCodeAt(0))
              throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw new Error("`extname` cannot contain multiple dots");
          }
          this.path = p.join(this.dirname, this.stem + (e || ""));
        }
        get stem() {
          return "string" === typeof this.path
            ? p.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          v(e, "stem"),
            x(e, "stem"),
            (this.path = p.join(this.dirname || "", e + (this.extname || "")));
        }
        toString(e) {
          return (this.value || "").toString(e);
        }
        message(e, n, t) {
          const r = new f(e, n, t);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        info(e, n, t) {
          const r = this.message(e, n, t);
          return (r.fatal = null), r;
        }
        fail(e, n, t) {
          const r = this.message(e, n, t);
          throw ((r.fatal = !0), r);
        }
      }
      function x(e, n) {
        if (e && e.includes(p.sep))
          throw new Error(
            "`" + n + "` cannot be a path: did not expect `" + p.sep + "`"
          );
      }
      function v(e, n) {
        if (!e) throw new Error("`" + n + "` cannot be empty");
      }
      function b(e, n) {
        if (!e)
          throw new Error("Setting `" + n + "` requires `path` to be set too");
      }
      function C(e) {
        if (e) throw e;
      }
      var w = t(94470);
      function S(e) {
        if ("object" !== typeof e || null === e) return !1;
        const n = Object.getPrototypeOf(e);
        return (
          (null === n ||
            n === Object.prototype ||
            null === Object.getPrototypeOf(n)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      function A() {
        const e = [],
          n = {
            run: function (...n) {
              let t = -1;
              const r = n.pop();
              if ("function" !== typeof r)
                throw new TypeError(
                  "Expected function as last argument, not " + r
                );
              !(function o(i, ...l) {
                const u = e[++t];
                let c = -1;
                if (i) r(i);
                else {
                  for (; ++c < n.length; )
                    (null !== l[c] && void 0 !== l[c]) || (l[c] = n[c]);
                  (n = l),
                    u
                      ? (function (e, n) {
                          let t;
                          return r;
                          function r(...n) {
                            const r = e.length > n.length;
                            let u;
                            r && n.push(o);
                            try {
                              u = e.apply(this, n);
                            } catch (i) {
                              const n = i;
                              if (r && t) throw n;
                              return o(n);
                            }
                            r ||
                              (u instanceof Promise
                                ? u.then(l, o)
                                : u instanceof Error
                                ? o(u)
                                : l(u));
                          }
                          function o(e, ...r) {
                            t || ((t = !0), n(e, ...r));
                          }
                          function l(e) {
                            o(null, e);
                          }
                        })(
                          u,
                          o
                        )(...l)
                      : r(null, ...l);
                }
              })(null, ...n);
            },
            use: function (t) {
              if ("function" !== typeof t)
                throw new TypeError(
                  "Expected `middelware` to be a function, not " + t
                );
              return e.push(t), n;
            },
          };
        return n;
      }
      const F = (function e() {
          const n = A(),
            t = [];
          let r,
            o = {},
            i = -1;
          return (
            (u.data = function (e, n) {
              if ("string" === typeof e)
                return 2 === arguments.length
                  ? (O("data", r), (o[e] = n), u)
                  : (E.call(o, e) && o[e]) || null;
              if (e) return O("data", r), (o = e), u;
              return o;
            }),
            (u.Parser = void 0),
            (u.Compiler = void 0),
            (u.freeze = function () {
              if (r) return u;
              for (; ++i < t.length; ) {
                const [e, ...r] = t[i];
                if (!1 === r[0]) continue;
                !0 === r[0] && (r[0] = void 0);
                const o = e.call(u, ...r);
                "function" === typeof o && n.use(o);
              }
              return (r = !0), (i = Number.POSITIVE_INFINITY), u;
            }),
            (u.attachers = t),
            (u.use = function (e, ...n) {
              let i;
              if ((O("use", r), null === e || void 0 === e));
              else if ("function" === typeof e) s(e, ...n);
              else {
                if ("object" !== typeof e)
                  throw new TypeError("Expected usable value, not `" + e + "`");
                Array.isArray(e) ? a(e) : c(e);
              }
              i && (o.settings = Object.assign(o.settings || {}, i));
              return u;
              function l(e) {
                if ("function" === typeof e) s(e);
                else {
                  if ("object" !== typeof e)
                    throw new TypeError(
                      "Expected usable value, not `" + e + "`"
                    );
                  if (Array.isArray(e)) {
                    const [n, ...t] = e;
                    s(n, ...t);
                  } else c(e);
                }
              }
              function c(e) {
                a(e.plugins),
                  e.settings && (i = Object.assign(i || {}, e.settings));
              }
              function a(e) {
                let n = -1;
                if (null === e || void 0 === e);
                else {
                  if (!Array.isArray(e))
                    throw new TypeError(
                      "Expected a list of plugins, not `" + e + "`"
                    );
                  for (; ++n < e.length; ) {
                    l(e[n]);
                  }
                }
              }
              function s(e, n) {
                let r,
                  o = -1;
                for (; ++o < t.length; )
                  if (t[o][0] === e) {
                    r = t[o];
                    break;
                  }
                r
                  ? (S(r[1]) && S(n) && (n = w(!0, r[1], n)), (r[1] = n))
                  : t.push([...arguments]);
              }
            }),
            (u.parse = function (e) {
              u.freeze();
              const n = I(e),
                t = u.Parser;
              if ((T("parse", t), D(t, "parse")))
                return new t(String(n), n).parse();
              return t(String(n), n);
            }),
            (u.stringify = function (e, n) {
              u.freeze();
              const t = I(n),
                r = u.Compiler;
              if ((z("stringify", r), P(e), D(r, "compile")))
                return new r(e, t).compile();
              return r(e, t);
            }),
            (u.run = function (e, t, r) {
              P(e),
                u.freeze(),
                r || "function" !== typeof t || ((r = t), (t = void 0));
              if (!r) return new Promise(o);
              function o(o, i) {
                function l(n, t, l) {
                  (t = t || e), n ? i(n) : o ? o(t) : r(null, t, l);
                }
                n.run(e, I(t), l);
              }
              o(null, r);
            }),
            (u.runSync = function (e, n) {
              let t, r;
              return u.run(e, n, o), L("runSync", "run", r), t;
              function o(e, n) {
                C(e), (t = n), (r = !0);
              }
            }),
            (u.process = function (e, n) {
              if (
                (u.freeze(),
                T("process", u.Parser),
                z("process", u.Compiler),
                !n)
              )
                return new Promise(t);
              function t(t, r) {
                const o = I(e);
                function i(e, o) {
                  e || !o ? r(e) : t ? t(o) : n(null, o);
                }
                u.run(u.parse(o), o, (e, n, t) => {
                  if (!e && n && t) {
                    const o = u.stringify(n, t);
                    void 0 === o ||
                      null === o ||
                      ("string" === typeof (r = o) || l(r)
                        ? (t.value = o)
                        : (t.result = o)),
                      i(e, t);
                  } else i(e);
                  var r;
                });
              }
              t(null, n);
            }),
            (u.processSync = function (e) {
              let n;
              u.freeze(),
                T("processSync", u.Parser),
                z("processSync", u.Compiler);
              const t = I(e);
              return u.process(t, r), L("processSync", "process", n), t;
              function r(e) {
                (n = !0), C(e);
              }
            }),
            u
          );
          function u() {
            const n = e();
            let r = -1;
            for (; ++r < t.length; ) n.use(...t[r]);
            return n.data(w(!0, {}, o)), n;
          }
        })().freeze(),
        E = {}.hasOwnProperty;
      function D(e, n) {
        return (
          "function" === typeof e &&
          e.prototype &&
          ((function (e) {
            let n;
            for (n in e) if (E.call(e, n)) return !0;
            return !1;
          })(e.prototype) ||
            n in e.prototype)
        );
      }
      function T(e, n) {
        if ("function" !== typeof n)
          throw new TypeError("Cannot `" + e + "` without `Parser`");
      }
      function z(e, n) {
        if ("function" !== typeof n)
          throw new TypeError("Cannot `" + e + "` without `Compiler`");
      }
      function O(e, n) {
        if (n)
          throw new Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function P(e) {
        if (!S(e) || "string" !== typeof e.type)
          throw new TypeError("Expected node, got `" + e + "`");
      }
      function L(e, n, t) {
        if (!t)
          throw new Error(
            "`" + e + "` finished async. Use `" + n + "` instead"
          );
      }
      function I(e) {
        return (function (e) {
          return Boolean(
            e && "object" === typeof e && "message" in e && "messages" in e
          );
        })(e)
          ? e
          : new k(e);
      }
      function M(e, n) {
        return (
          (e &&
            "object" === typeof e &&
            (e.value ||
              (n ? e.alt : "") ||
              ("children" in e && R(e.children, n)) ||
              (Array.isArray(e) && R(e, n)))) ||
          ""
        );
      }
      function R(e, n) {
        for (var t = [], r = -1; ++r < e.length; ) t[r] = M(e[r], n);
        return t.join("");
      }
      var j = t(4663),
        B = t(8387),
        _ = t(75364);
      const H = {
        tokenize: function (e) {
          const n = e.attempt(
            this.parser.constructs.contentInitial,
            function (t) {
              if (null === t) return void e.consume(t);
              return (
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0, B.f)(e, n, "linePrefix")
              );
            },
            function (n) {
              return e.enter("paragraph"), r(n);
            }
          );
          let t;
          return n;
          function r(n) {
            const r = e.enter("chunkText", {
              contentType: "text",
              previous: t,
            });
            return t && (t.next = r), (t = r), o(n);
          }
          function o(n) {
            return null === n
              ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n))
              : (0, _.Ch)(n)
              ? (e.consume(n), e.exit("chunkText"), r)
              : (e.consume(n), o);
          }
        },
      };
      var N = t(21905);
      const U = {
          tokenize: function (e) {
            const n = this,
              t = [];
            let r,
              o,
              i,
              l = 0;
            return u;
            function u(r) {
              if (l < t.length) {
                const o = t[l];
                return (
                  (n.containerState = o[1]),
                  e.attempt(o[0].continuation, c, a)(r)
                );
              }
              return a(r);
            }
            function c(e) {
              if ((l++, n.containerState._closeFlow)) {
                (n.containerState._closeFlow = void 0), r && k();
                const t = n.events.length;
                let o,
                  i = t;
                for (; i--; )
                  if (
                    "exit" === n.events[i][0] &&
                    "chunkFlow" === n.events[i][1].type
                  ) {
                    o = n.events[i][1].end;
                    break;
                  }
                y(l);
                let u = t;
                for (; u < n.events.length; )
                  (n.events[u][1].end = Object.assign({}, o)), u++;
                return (
                  (0, N.d)(n.events, i + 1, 0, n.events.slice(t)),
                  (n.events.length = u),
                  a(e)
                );
              }
              return u(e);
            }
            function a(o) {
              if (l === t.length) {
                if (!r) return p(o);
                if (r.currentConstruct && r.currentConstruct.concrete)
                  return d(o);
                n.interrupt = Boolean(
                  r.currentConstruct && !r._gfmTableDynamicInterruptHack
                );
              }
              return (n.containerState = {}), e.check(V, s, f)(o);
            }
            function s(e) {
              return r && k(), y(l), p(e);
            }
            function f(e) {
              return (
                (n.parser.lazy[n.now().line] = l !== t.length),
                (i = n.now().offset),
                d(e)
              );
            }
            function p(t) {
              return (n.containerState = {}), e.attempt(V, h, d)(t);
            }
            function h(e) {
              return l++, t.push([n.currentConstruct, n.containerState]), p(e);
            }
            function d(t) {
              return null === t
                ? (r && k(), y(0), void e.consume(t))
                : ((r = r || n.parser.flow(n.now())),
                  e.enter("chunkFlow", {
                    contentType: "flow",
                    previous: o,
                    _tokenizer: r,
                  }),
                  m(t));
            }
            function m(t) {
              return null === t
                ? (g(e.exit("chunkFlow"), !0), y(0), void e.consume(t))
                : (0, _.Ch)(t)
                ? (e.consume(t),
                  g(e.exit("chunkFlow")),
                  (l = 0),
                  (n.interrupt = void 0),
                  u)
                : (e.consume(t), m);
            }
            function g(e, t) {
              const u = n.sliceStream(e);
              if (
                (t && u.push(null),
                (e.previous = o),
                o && (o.next = e),
                (o = e),
                r.defineSkip(e.start),
                r.write(u),
                n.parser.lazy[e.start.line])
              ) {
                let e = r.events.length;
                for (; e--; )
                  if (
                    r.events[e][1].start.offset < i &&
                    (!r.events[e][1].end || r.events[e][1].end.offset > i)
                  )
                    return;
                const t = n.events.length;
                let o,
                  u,
                  c = t;
                for (; c--; )
                  if (
                    "exit" === n.events[c][0] &&
                    "chunkFlow" === n.events[c][1].type
                  ) {
                    if (o) {
                      u = n.events[c][1].end;
                      break;
                    }
                    o = !0;
                  }
                for (y(l), e = t; e < n.events.length; )
                  (n.events[e][1].end = Object.assign({}, u)), e++;
                (0, N.d)(n.events, c + 1, 0, n.events.slice(t)),
                  (n.events.length = e);
              }
            }
            function y(r) {
              let o = t.length;
              for (; o-- > r; ) {
                const r = t[o];
                (n.containerState = r[1]), r[0].exit.call(n, e);
              }
              t.length = r;
            }
            function k() {
              r.write([null]),
                (o = void 0),
                (r = void 0),
                (n.containerState._closeFlow = void 0);
            }
          },
        },
        V = {
          tokenize: function (e, n, t) {
            return (0, B.f)(
              e,
              e.attempt(this.parser.constructs.document, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      var $ = t(23402);
      function q(e) {
        const n = {};
        let t,
          r,
          o,
          i,
          l,
          u,
          c,
          a = -1;
        for (; ++a < e.length; ) {
          for (; a in n; ) a = n[a];
          if (
            ((t = e[a]),
            a &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === e[a - 1][1].type &&
              ((u = t[1]._tokenizer.events),
              (o = 0),
              o < u.length && "lineEndingBlank" === u[o][1].type && (o += 2),
              o < u.length && "content" === u[o][1].type))
          )
            for (; ++o < u.length && "content" !== u[o][1].type; )
              "chunkText" === u[o][1].type &&
                ((u[o][1]._isInFirstContentOfListItem = !0), o++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(n, W(e, a)), (a = n[a]), (c = !0));
          else if (t[1]._container) {
            for (
              o = a, r = void 0;
              o-- &&
              ((i = e[o]),
              "lineEnding" === i[1].type || "lineEndingBlank" === i[1].type);

            )
              "enter" === i[0] &&
                (r && (e[r][1].type = "lineEndingBlank"),
                (i[1].type = "lineEnding"),
                (r = o));
            r &&
              ((t[1].end = Object.assign({}, e[r][1].start)),
              (l = e.slice(r, a)),
              l.unshift(t),
              (0, N.d)(e, r, a - r + 1, l));
          }
        }
        return !c;
      }
      function W(e, n) {
        const t = e[n][1],
          r = e[n][2];
        let o = n - 1;
        const i = [],
          l = t._tokenizer || r.parser[t.contentType](t.start),
          u = l.events,
          c = [],
          a = {};
        let s,
          f,
          p = -1,
          h = t,
          d = 0,
          m = 0;
        const g = [m];
        for (; h; ) {
          for (; e[++o][1] !== h; );
          i.push(o),
            h._tokenizer ||
              ((s = r.sliceStream(h)),
              h.next || s.push(null),
              f && l.defineSkip(h.start),
              h._isInFirstContentOfListItem &&
                (l._gfmTasklistFirstContentOfListItem = !0),
              l.write(s),
              h._isInFirstContentOfListItem &&
                (l._gfmTasklistFirstContentOfListItem = void 0)),
            (f = h),
            (h = h.next);
        }
        for (h = t; ++p < u.length; )
          "exit" === u[p][0] &&
            "enter" === u[p - 1][0] &&
            u[p][1].type === u[p - 1][1].type &&
            u[p][1].start.line !== u[p][1].end.line &&
            ((m = p + 1),
            g.push(m),
            (h._tokenizer = void 0),
            (h.previous = void 0),
            (h = h.next));
        for (
          l.events = [],
            h ? ((h._tokenizer = void 0), (h.previous = void 0)) : g.pop(),
            p = g.length;
          p--;

        ) {
          const n = u.slice(g[p], g[p + 1]),
            t = i.pop();
          c.unshift([t, t + n.length - 1]), (0, N.d)(e, t, 2, n);
        }
        for (p = -1; ++p < c.length; )
          (a[d + c[p][0]] = d + c[p][1]), (d += c[p][1] - c[p][0] - 1);
        return a;
      }
      const Z = {
          tokenize: function (e, n) {
            let t;
            return function (n) {
              return (
                e.enter("content"),
                (t = e.enter("chunkContent", { contentType: "content" })),
                r(n)
              );
            };
            function r(n) {
              return null === n
                ? o(n)
                : (0, _.Ch)(n)
                ? e.check(Y, i, o)(n)
                : (e.consume(n), r);
            }
            function o(t) {
              return e.exit("chunkContent"), e.exit("content"), n(t);
            }
            function i(n) {
              return (
                e.consume(n),
                e.exit("chunkContent"),
                (t.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: t,
                })),
                (t = t.next),
                r
              );
            }
          },
          resolve: function (e) {
            return q(e), e;
          },
        },
        Y = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                (0, B.f)(e, o, "linePrefix")
              );
            };
            function o(o) {
              if (null === o || (0, _.Ch)(o)) return t(o);
              const i = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? n(o)
                : e.interrupt(r.parser.constructs.flow, t, n)(o);
            }
          },
          partial: !0,
        };
      const X = {
        tokenize: function (e) {
          const n = this,
            t = e.attempt(
              $.w,
              function (r) {
                if (null === r) return void e.consume(r);
                return (
                  e.enter("lineEndingBlank"),
                  e.consume(r),
                  e.exit("lineEndingBlank"),
                  (n.currentConstruct = void 0),
                  t
                );
              },
              e.attempt(
                this.parser.constructs.flowInitial,
                r,
                (0, B.f)(
                  e,
                  e.attempt(this.parser.constructs.flow, r, e.attempt(Z, r)),
                  "linePrefix"
                )
              )
            );
          return t;
          function r(r) {
            if (null !== r)
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (n.currentConstruct = void 0),
                t
              );
            e.consume(r);
          }
        },
      };
      const Q = { resolveAll: ee() },
        K = G("string"),
        J = G("text");
      function G(e) {
        return {
          tokenize: function (n) {
            const t = this,
              r = this.parser.constructs[e],
              o = n.attempt(r, i, l);
            return i;
            function i(e) {
              return c(e) ? o(e) : l(e);
            }
            function l(e) {
              if (null !== e) return n.enter("data"), n.consume(e), u;
              n.consume(e);
            }
            function u(e) {
              return c(e) ? (n.exit("data"), o(e)) : (n.consume(e), u);
            }
            function c(e) {
              if (null === e) return !0;
              const n = r[e];
              let o = -1;
              if (n)
                for (; ++o < n.length; ) {
                  const e = n[o];
                  if (!e.previous || e.previous.call(t, t.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: ee("text" === e ? ne : void 0),
        };
      }
      function ee(e) {
        return function (n, t) {
          let r,
            o = -1;
          for (; ++o <= n.length; )
            void 0 === r
              ? n[o] && "data" === n[o][1].type && ((r = o), o++)
              : (n[o] && "data" === n[o][1].type) ||
                (o !== r + 2 &&
                  ((n[r][1].end = n[o - 1][1].end),
                  n.splice(r + 2, o - r - 2),
                  (o = r + 2)),
                (r = void 0));
          return e ? e(n, t) : n;
        };
      }
      function ne(e, n) {
        let t = 0;
        for (; ++t <= e.length; )
          if (
            (t === e.length || "lineEnding" === e[t][1].type) &&
            "data" === e[t - 1][1].type
          ) {
            const r = e[t - 1][1],
              o = n.sliceStream(r);
            let i,
              l = o.length,
              u = -1,
              c = 0;
            for (; l--; ) {
              const e = o[l];
              if ("string" === typeof e) {
                for (u = e.length; 32 === e.charCodeAt(u - 1); ) c++, u--;
                if (u) break;
                u = -1;
              } else if (-2 === e) (i = !0), c++;
              else if (-1 !== e) {
                l++;
                break;
              }
            }
            if (c) {
              const o = {
                type:
                  t === e.length || i || c < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: r.end.line,
                  column: r.end.column - c,
                  offset: r.end.offset - c,
                  _index: r.start._index + l,
                  _bufferIndex: l ? u : r.start._bufferIndex + u,
                },
                end: Object.assign({}, r.end),
              };
              (r.end = Object.assign({}, o.start)),
                r.start.offset === r.end.offset
                  ? Object.assign(r, o)
                  : (e.splice(t, 0, ["enter", o, n], ["exit", o, n]), (t += 2));
            }
            t++;
          }
        return e;
      }
      var te = t(87961);
      function re(e, n, t) {
        let r = Object.assign(
          t ? Object.assign({}, t) : { line: 1, column: 1, offset: 0 },
          { _index: 0, _bufferIndex: -1 }
        );
        const o = {},
          i = [];
        let l = [],
          u = [],
          c = !0;
        const a = {
            consume: function (e) {
              (0, _.Ch)(e)
                ? (r.line++,
                  (r.column = 1),
                  (r.offset += -3 === e ? 2 : 1),
                  v())
                : -1 !== e && (r.column++, r.offset++);
              r._bufferIndex < 0
                ? r._index++
                : (r._bufferIndex++,
                  r._bufferIndex === l[r._index].length &&
                    ((r._bufferIndex = -1), r._index++));
              (s.previous = e), (c = !0);
            },
            enter: function (e, n) {
              const t = n || {};
              return (
                (t.type = e),
                (t.start = d()),
                s.events.push(["enter", t, s]),
                u.push(t),
                t
              );
            },
            exit: function (e) {
              const n = u.pop();
              return (n.end = d()), s.events.push(["exit", n, s]), n;
            },
            attempt: k(function (e, n) {
              x(e, n.from);
            }),
            check: k(y),
            interrupt: k(y, { interrupt: !0 }),
          },
          s = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: h,
            sliceSerialize: function (e, n) {
              return (function (e, n) {
                let t = -1;
                const r = [];
                let o;
                for (; ++t < e.length; ) {
                  const i = e[t];
                  let l;
                  if ("string" === typeof i) l = i;
                  else
                    switch (i) {
                      case -5:
                        l = "\r";
                        break;
                      case -4:
                        l = "\n";
                        break;
                      case -3:
                        l = "\r\n";
                        break;
                      case -2:
                        l = n ? " " : "\t";
                        break;
                      case -1:
                        if (!n && o) continue;
                        l = " ";
                        break;
                      default:
                        l = String.fromCharCode(i);
                    }
                  (o = -2 === i), r.push(l);
                }
                return r.join("");
              })(h(e), n);
            },
            now: d,
            defineSkip: function (e) {
              (o[e.line] = e.column), v();
            },
            write: function (e) {
              if (((l = (0, N.V)(l, e)), m(), null !== l[l.length - 1]))
                return [];
              return x(n, 0), (s.events = (0, te.C)(i, s.events, s)), s.events;
            },
          };
        let f,
          p = n.tokenize.call(s, a);
        return n.resolveAll && i.push(n), s;
        function h(e) {
          return (function (e, n) {
            const t = n.start._index,
              r = n.start._bufferIndex,
              o = n.end._index,
              i = n.end._bufferIndex;
            let l;
            t === o
              ? (l = [e[t].slice(r, i)])
              : ((l = e.slice(t, o)),
                r > -1 && (l[0] = l[0].slice(r)),
                i > 0 && l.push(e[o].slice(0, i)));
            return l;
          })(l, e);
        }
        function d() {
          return Object.assign({}, r);
        }
        function m() {
          let e;
          for (; r._index < l.length; ) {
            const n = l[r._index];
            if ("string" === typeof n)
              for (
                e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                r._index === e && r._bufferIndex < n.length;

              )
                g(n.charCodeAt(r._bufferIndex));
            else g(n);
          }
        }
        function g(e) {
          (c = void 0), (f = e), (p = p(e));
        }
        function y(e, n) {
          n.restore();
        }
        function k(e, n) {
          return function (t, o, i) {
            let l, f, p, h;
            return Array.isArray(t)
              ? m(t)
              : "tokenize" in t
              ? m([t])
              : (function (e) {
                  return n;
                  function n(n) {
                    const t = null !== n && e[n],
                      r = null !== n && e.null;
                    return m([
                      ...(Array.isArray(t) ? t : t ? [t] : []),
                      ...(Array.isArray(r) ? r : r ? [r] : []),
                    ])(n);
                  }
                })(t);
            function m(e) {
              return (l = e), (f = 0), 0 === e.length ? i : g(e[f]);
            }
            function g(e) {
              return function (t) {
                (h = (function () {
                  const e = d(),
                    n = s.previous,
                    t = s.currentConstruct,
                    o = s.events.length,
                    i = Array.from(u);
                  return { restore: l, from: o };
                  function l() {
                    (r = e),
                      (s.previous = n),
                      (s.currentConstruct = t),
                      (s.events.length = o),
                      (u = i),
                      v();
                  }
                })()),
                  (p = e),
                  e.partial || (s.currentConstruct = e);
                if (e.name && s.parser.constructs.disable.null.includes(e.name))
                  return k(t);
                return e.tokenize.call(
                  n ? Object.assign(Object.create(s), n) : s,
                  a,
                  y,
                  k
                )(t);
              };
            }
            function y(n) {
              return (c = !0), e(p, h), o;
            }
            function k(e) {
              return (c = !0), h.restore(), ++f < l.length ? g(l[f]) : i;
            }
          };
        }
        function x(e, n) {
          e.resolveAll && !i.includes(e) && i.push(e),
            e.resolve &&
              (0, N.d)(
                s.events,
                n,
                s.events.length - n,
                e.resolve(s.events.slice(n), s)
              ),
            e.resolveTo && (s.events = e.resolveTo(s.events, s));
        }
        function v() {
          r.line in o &&
            r.column < 2 &&
            ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
        }
      }
      const oe = {
        name: "thematicBreak",
        tokenize: function (e, n, t) {
          let r,
            o = 0;
          return function (n) {
            return e.enter("thematicBreak"), (r = n), i(n);
          };
          function i(u) {
            return u === r
              ? (e.enter("thematicBreakSequence"), l(u))
              : (0, _.xz)(u)
              ? (0, B.f)(e, i, "whitespace")(u)
              : o < 3 || (null !== u && !(0, _.Ch)(u))
              ? t(u)
              : (e.exit("thematicBreak"), n(u));
          }
          function l(n) {
            return n === r
              ? (e.consume(n), o++, l)
              : (e.exit("thematicBreakSequence"), i(n));
          }
        },
      };
      const ie = {
          name: "list",
          tokenize: function (e, n, t) {
            const r = this,
              o = r.events[r.events.length - 1];
            let i =
                o && "linePrefix" === o[1].type
                  ? o[2].sliceSerialize(o[1], !0).length
                  : 0,
              l = 0;
            return function (n) {
              const o =
                r.containerState.type ||
                (42 === n || 43 === n || 45 === n
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === o
                  ? !r.containerState.marker || n === r.containerState.marker
                  : (0, _.pY)(n)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = o),
                    e.enter(o, { _container: !0 })),
                  "listUnordered" === o)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === n || 45 === n ? e.check(oe, t, c)(n) : c(n)
                  );
                if (!r.interrupt || 49 === n)
                  return (
                    e.enter("listItemPrefix"), e.enter("listItemValue"), u(n)
                  );
              }
              return t(n);
            };
            function u(n) {
              return (0, _.pY)(n) && ++l < 10
                ? (e.consume(n), u)
                : (!r.interrupt || l < 2) &&
                  (r.containerState.marker
                    ? n === r.containerState.marker
                    : 41 === n || 46 === n)
                ? (e.exit("listItemValue"), c(n))
                : t(n);
            }
            function c(n) {
              return (
                e.enter("listItemMarker"),
                e.consume(n),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || n),
                e.check($.w, r.interrupt ? t : a, e.attempt(le, f, s))
              );
            }
            function a(e) {
              return (r.containerState.initialBlankLine = !0), i++, f(e);
            }
            function s(n) {
              return (0, _.xz)(n)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(n),
                  e.exit("listItemPrefixWhitespace"),
                  f)
                : t(n);
            }
            function f(t) {
              return (
                (r.containerState.size =
                  i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                n(t)
              );
            }
          },
          continuation: {
            tokenize: function (e, n, t) {
              const r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  $.w,
                  function (t) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      (0, B.f)(
                        e,
                        n,
                        "listItemIndent",
                        r.containerState.size + 1
                      )(t)
                    );
                  },
                  function (t) {
                    if (r.containerState.furtherBlankLines || !(0, _.xz)(t))
                      return (
                        (r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        o(t)
                      );
                    return (
                      (r.containerState.furtherBlankLines = void 0),
                      (r.containerState.initialBlankLine = void 0),
                      e.attempt(ue, n, o)(t)
                    );
                  }
                )
              );
              function o(o) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  (0, B.f)(
                    e,
                    e.attempt(ie, n, t),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(o)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        le = {
          tokenize: function (e, n, t) {
            const r = this;
            return (0, B.f)(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return !(0, _.xz)(e) &&
                  o &&
                  "listItemPrefixWhitespace" === o[1].type
                  ? n(e)
                  : t(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        ue = {
          tokenize: function (e, n, t) {
            const r = this;
            return (0, B.f)(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return o &&
                  "listItemIndent" === o[1].type &&
                  o[2].sliceSerialize(o[1], !0).length === r.containerState.size
                  ? n(e)
                  : t(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        };
      const ce = {
        name: "blockQuote",
        tokenize: function (e, n, t) {
          const r = this;
          return function (n) {
            if (62 === n) {
              const t = r.containerState;
              return (
                t.open ||
                  (e.enter("blockQuote", { _container: !0 }), (t.open = !0)),
                e.enter("blockQuotePrefix"),
                e.enter("blockQuoteMarker"),
                e.consume(n),
                e.exit("blockQuoteMarker"),
                o
              );
            }
            return t(n);
          };
          function o(t) {
            return (0, _.xz)(t)
              ? (e.enter("blockQuotePrefixWhitespace"),
                e.consume(t),
                e.exit("blockQuotePrefixWhitespace"),
                e.exit("blockQuotePrefix"),
                n)
              : (e.exit("blockQuotePrefix"), n(t));
          }
        },
        continuation: {
          tokenize: function (e, n, t) {
            return (0, B.f)(
              e,
              e.attempt(ce, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        },
        exit: function (e) {
          e.exit("blockQuote");
        },
      };
      function ae(e, n, t, r, o, i, l, u, c) {
        const a = c || Number.POSITIVE_INFINITY;
        let s = 0;
        return function (n) {
          if (60 === n)
            return (
              e.enter(r), e.enter(o), e.enter(i), e.consume(n), e.exit(i), f
            );
          if (null === n || 41 === n || (0, _.Av)(n)) return t(n);
          return (
            e.enter(r),
            e.enter(l),
            e.enter(u),
            e.enter("chunkString", { contentType: "string" }),
            d(n)
          );
        };
        function f(t) {
          return 62 === t
            ? (e.enter(i), e.consume(t), e.exit(i), e.exit(o), e.exit(r), n)
            : (e.enter(u),
              e.enter("chunkString", { contentType: "string" }),
              p(t));
        }
        function p(n) {
          return 62 === n
            ? (e.exit("chunkString"), e.exit(u), f(n))
            : null === n || 60 === n || (0, _.Ch)(n)
            ? t(n)
            : (e.consume(n), 92 === n ? h : p);
        }
        function h(n) {
          return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n);
        }
        function d(o) {
          return 40 === o
            ? ++s > a
              ? t(o)
              : (e.consume(o), d)
            : 41 === o
            ? s--
              ? (e.consume(o), d)
              : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o))
            : null === o || (0, _.z3)(o)
            ? s
              ? t(o)
              : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o))
            : (0, _.Av)(o)
            ? t(o)
            : (e.consume(o), 92 === o ? m : d);
        }
        function m(n) {
          return 40 === n || 41 === n || 92 === n ? (e.consume(n), d) : d(n);
        }
      }
      function se(e, n, t, r, o, i) {
        const l = this;
        let u,
          c = 0;
        return function (n) {
          return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(i), a;
        };
        function a(f) {
          return null === f ||
            91 === f ||
            (93 === f && !u) ||
            (94 === f &&
              !c &&
              "_hiddenFootnoteSupport" in l.parser.constructs) ||
            c > 999
            ? t(f)
            : 93 === f
            ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), n)
            : (0, _.Ch)(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), a)
            : (e.enter("chunkString", { contentType: "string" }), s(f));
        }
        function s(n) {
          return null === n || 91 === n || 93 === n || (0, _.Ch)(n) || c++ > 999
            ? (e.exit("chunkString"), a(n))
            : (e.consume(n), (u = u || !(0, _.xz)(n)), 92 === n ? f : s);
        }
        function f(n) {
          return 91 === n || 92 === n || 93 === n
            ? (e.consume(n), c++, s)
            : s(n);
        }
      }
      function fe(e, n, t, r, o, i) {
        let l;
        return function (n) {
          return (
            e.enter(r),
            e.enter(o),
            e.consume(n),
            e.exit(o),
            (l = 40 === n ? 41 : n),
            u
          );
        };
        function u(t) {
          return t === l
            ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n)
            : (e.enter(i), c(t));
        }
        function c(n) {
          return n === l
            ? (e.exit(i), u(l))
            : null === n
            ? t(n)
            : (0, _.Ch)(n)
            ? (e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              (0, B.f)(e, c, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), a(n));
        }
        function a(n) {
          return n === l || null === n || (0, _.Ch)(n)
            ? (e.exit("chunkString"), c(n))
            : (e.consume(n), 92 === n ? s : a);
        }
        function s(n) {
          return n === l || 92 === n ? (e.consume(n), a) : a(n);
        }
      }
      function pe(e, n) {
        let t;
        return function r(o) {
          if ((0, _.Ch)(o))
            return (
              e.enter("lineEnding"),
              e.consume(o),
              e.exit("lineEnding"),
              (t = !0),
              r
            );
          if ((0, _.xz)(o))
            return (0, B.f)(e, r, t ? "linePrefix" : "lineSuffix")(o);
          return n(o);
        };
      }
      var he = t(11098);
      const de = {
          name: "definition",
          tokenize: function (e, n, t) {
            const r = this;
            let o;
            return function (n) {
              return (
                e.enter("definition"),
                se.call(
                  r,
                  e,
                  i,
                  t,
                  "definitionLabel",
                  "definitionLabelMarker",
                  "definitionLabelString"
                )(n)
              );
            };
            function i(n) {
              return (
                (o = (0, he.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === n
                  ? (e.enter("definitionMarker"),
                    e.consume(n),
                    e.exit("definitionMarker"),
                    pe(
                      e,
                      ae(
                        e,
                        e.attempt(
                          me,
                          (0, B.f)(e, l, "whitespace"),
                          (0, B.f)(e, l, "whitespace")
                        ),
                        t,
                        "definitionDestination",
                        "definitionDestinationLiteral",
                        "definitionDestinationLiteralMarker",
                        "definitionDestinationRaw",
                        "definitionDestinationString"
                      )
                    ))
                  : t(n)
              );
            }
            function l(i) {
              return null === i || (0, _.Ch)(i)
                ? (e.exit("definition"),
                  r.parser.defined.includes(o) || r.parser.defined.push(o),
                  n(i))
                : t(i);
            }
          },
        },
        me = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (0, _.z3)(n) ? pe(e, r)(n) : t(n);
            };
            function r(n) {
              return 34 === n || 39 === n || 40 === n
                ? fe(
                    e,
                    (0, B.f)(e, o, "whitespace"),
                    t,
                    "definitionTitle",
                    "definitionTitleMarker",
                    "definitionTitleString"
                  )(n)
                : t(n);
            }
            function o(e) {
              return null === e || (0, _.Ch)(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      const ge = {
          name: "codeIndented",
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return (
                e.enter("codeIndented"), (0, B.f)(e, o, "linePrefix", 5)(n)
              );
            };
            function o(e) {
              const n = r.events[r.events.length - 1];
              return n &&
                "linePrefix" === n[1].type &&
                n[2].sliceSerialize(n[1], !0).length >= 4
                ? i(e)
                : t(e);
            }
            function i(n) {
              return null === n
                ? u(n)
                : (0, _.Ch)(n)
                ? e.attempt(ye, i, u)(n)
                : (e.enter("codeFlowValue"), l(n));
            }
            function l(n) {
              return null === n || (0, _.Ch)(n)
                ? (e.exit("codeFlowValue"), i(n))
                : (e.consume(n), l);
            }
            function u(t) {
              return e.exit("codeIndented"), n(t);
            }
          },
        },
        ye = {
          tokenize: function (e, n, t) {
            const r = this;
            return o;
            function o(n) {
              return r.parser.lazy[r.now().line]
                ? t(n)
                : (0, _.Ch)(n)
                ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o)
                : (0, B.f)(e, i, "linePrefix", 5)(n);
            }
            function i(e) {
              const i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? n(e)
                : (0, _.Ch)(e)
                ? o(e)
                : t(e);
            }
          },
          partial: !0,
        };
      const ke = {
        name: "headingAtx",
        tokenize: function (e, n, t) {
          const r = this;
          let o = 0;
          return function (n) {
            return e.enter("atxHeading"), e.enter("atxHeadingSequence"), i(n);
          };
          function i(u) {
            return 35 === u && o++ < 6
              ? (e.consume(u), i)
              : null === u || (0, _.z3)(u)
              ? (e.exit("atxHeadingSequence"), r.interrupt ? n(u) : l(u))
              : t(u);
          }
          function l(t) {
            return 35 === t
              ? (e.enter("atxHeadingSequence"), u(t))
              : null === t || (0, _.Ch)(t)
              ? (e.exit("atxHeading"), n(t))
              : (0, _.xz)(t)
              ? (0, B.f)(e, l, "whitespace")(t)
              : (e.enter("atxHeadingText"), c(t));
          }
          function u(n) {
            return 35 === n
              ? (e.consume(n), u)
              : (e.exit("atxHeadingSequence"), l(n));
          }
          function c(n) {
            return null === n || 35 === n || (0, _.z3)(n)
              ? (e.exit("atxHeadingText"), l(n))
              : (e.consume(n), c);
          }
        },
        resolve: function (e, n) {
          let t,
            r,
            o = e.length - 2,
            i = 3;
          "whitespace" === e[i][1].type && (i += 2);
          o - 2 > i && "whitespace" === e[o][1].type && (o -= 2);
          "atxHeadingSequence" === e[o][1].type &&
            (i === o - 1 || (o - 4 > i && "whitespace" === e[o - 2][1].type)) &&
            (o -= i + 1 === o ? 2 : 4);
          o > i &&
            ((t = {
              type: "atxHeadingText",
              start: e[i][1].start,
              end: e[o][1].end,
            }),
            (r = {
              type: "chunkText",
              start: e[i][1].start,
              end: e[o][1].end,
              contentType: "text",
            }),
            (0, N.d)(e, i, o - i + 1, [
              ["enter", t, n],
              ["enter", r, n],
              ["exit", r, n],
              ["exit", t, n],
            ]));
          return e;
        },
      };
      const xe = {
        name: "setextUnderline",
        tokenize: function (e, n, t) {
          const r = this;
          let o,
            i,
            l = r.events.length;
          for (; l--; )
            if (
              "lineEnding" !== r.events[l][1].type &&
              "linePrefix" !== r.events[l][1].type &&
              "content" !== r.events[l][1].type
            ) {
              i = "paragraph" === r.events[l][1].type;
              break;
            }
          return function (n) {
            if (!r.parser.lazy[r.now().line] && (r.interrupt || i))
              return (
                e.enter("setextHeadingLine"),
                e.enter("setextHeadingLineSequence"),
                (o = n),
                u(n)
              );
            return t(n);
          };
          function u(n) {
            return n === o
              ? (e.consume(n), u)
              : (e.exit("setextHeadingLineSequence"),
                (0, B.f)(e, c, "lineSuffix")(n));
          }
          function c(r) {
            return null === r || (0, _.Ch)(r)
              ? (e.exit("setextHeadingLine"), n(r))
              : t(r);
          }
        },
        resolveTo: function (e, n) {
          let t,
            r,
            o,
            i = e.length;
          for (; i--; )
            if ("enter" === e[i][0]) {
              if ("content" === e[i][1].type) {
                t = i;
                break;
              }
              "paragraph" === e[i][1].type && (r = i);
            } else
              "content" === e[i][1].type && e.splice(i, 1),
                o || "definition" !== e[i][1].type || (o = i);
          const l = {
            type: "setextHeading",
            start: Object.assign({}, e[r][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          };
          (e[r][1].type = "setextHeadingText"),
            o
              ? (e.splice(r, 0, ["enter", l, n]),
                e.splice(o + 1, 0, ["exit", e[t][1], n]),
                (e[t][1].end = Object.assign({}, e[o][1].end)))
              : (e[t][1] = l);
          return e.push(["exit", l, n]), e;
        },
      };
      const ve = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        be = ["pre", "script", "style", "textarea"],
        Ce = {
          name: "htmlFlow",
          tokenize: function (e, n, t) {
            const r = this;
            let o, i, l, u, c;
            return function (n) {
              return (
                e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), a
              );
            };
            function a(u) {
              return 33 === u
                ? (e.consume(u), s)
                : 47 === u
                ? (e.consume(u), h)
                : 63 === u
                ? (e.consume(u), (o = 3), r.interrupt ? n : I)
                : (0, _.jv)(u)
                ? (e.consume(u), (l = String.fromCharCode(u)), (i = !0), d)
                : t(u);
            }
            function s(i) {
              return 45 === i
                ? (e.consume(i), (o = 2), f)
                : 91 === i
                ? (e.consume(i), (o = 5), (l = "CDATA["), (u = 0), p)
                : (0, _.jv)(i)
                ? (e.consume(i), (o = 4), r.interrupt ? n : I)
                : t(i);
            }
            function f(o) {
              return 45 === o ? (e.consume(o), r.interrupt ? n : I) : t(o);
            }
            function p(o) {
              return o === l.charCodeAt(u++)
                ? (e.consume(o), u === l.length ? (r.interrupt ? n : F) : p)
                : t(o);
            }
            function h(n) {
              return (0, _.jv)(n)
                ? (e.consume(n), (l = String.fromCharCode(n)), d)
                : t(n);
            }
            function d(u) {
              return null === u || 47 === u || 62 === u || (0, _.z3)(u)
                ? 47 !== u && i && be.includes(l.toLowerCase())
                  ? ((o = 1), r.interrupt ? n(u) : F(u))
                  : ve.includes(l.toLowerCase())
                  ? ((o = 6),
                    47 === u ? (e.consume(u), m) : r.interrupt ? n(u) : F(u))
                  : ((o = 7),
                    r.interrupt && !r.parser.lazy[r.now().line]
                      ? t(u)
                      : i
                      ? y(u)
                      : g(u))
                : 45 === u || (0, _.H$)(u)
                ? (e.consume(u), (l += String.fromCharCode(u)), d)
                : t(u);
            }
            function m(o) {
              return 62 === o ? (e.consume(o), r.interrupt ? n : F) : t(o);
            }
            function g(n) {
              return (0, _.xz)(n) ? (e.consume(n), g) : S(n);
            }
            function y(n) {
              return 47 === n
                ? (e.consume(n), S)
                : 58 === n || 95 === n || (0, _.jv)(n)
                ? (e.consume(n), k)
                : (0, _.xz)(n)
                ? (e.consume(n), y)
                : S(n);
            }
            function k(n) {
              return 45 === n ||
                46 === n ||
                58 === n ||
                95 === n ||
                (0, _.H$)(n)
                ? (e.consume(n), k)
                : x(n);
            }
            function x(n) {
              return 61 === n
                ? (e.consume(n), v)
                : (0, _.xz)(n)
                ? (e.consume(n), x)
                : y(n);
            }
            function v(n) {
              return null === n || 60 === n || 61 === n || 62 === n || 96 === n
                ? t(n)
                : 34 === n || 39 === n
                ? (e.consume(n), (c = n), b)
                : (0, _.xz)(n)
                ? (e.consume(n), v)
                : ((c = null), C(n));
            }
            function b(n) {
              return null === n || (0, _.Ch)(n)
                ? t(n)
                : n === c
                ? (e.consume(n), w)
                : (e.consume(n), b);
            }
            function C(n) {
              return null === n ||
                34 === n ||
                39 === n ||
                60 === n ||
                61 === n ||
                62 === n ||
                96 === n ||
                (0, _.z3)(n)
                ? x(n)
                : (e.consume(n), C);
            }
            function w(e) {
              return 47 === e || 62 === e || (0, _.xz)(e) ? y(e) : t(e);
            }
            function S(n) {
              return 62 === n ? (e.consume(n), A) : t(n);
            }
            function A(n) {
              return (0, _.xz)(n)
                ? (e.consume(n), A)
                : null === n || (0, _.Ch)(n)
                ? F(n)
                : t(n);
            }
            function F(n) {
              return 45 === n && 2 === o
                ? (e.consume(n), z)
                : 60 === n && 1 === o
                ? (e.consume(n), O)
                : 62 === n && 4 === o
                ? (e.consume(n), M)
                : 63 === n && 3 === o
                ? (e.consume(n), I)
                : 93 === n && 5 === o
                ? (e.consume(n), L)
                : !(0, _.Ch)(n) || (6 !== o && 7 !== o)
                ? null === n || (0, _.Ch)(n)
                  ? E(n)
                  : (e.consume(n), F)
                : e.check(we, M, E)(n);
            }
            function E(n) {
              return e.exit("htmlFlowData"), D(n);
            }
            function D(n) {
              return null === n
                ? R(n)
                : (0, _.Ch)(n)
                ? e.attempt({ tokenize: T, partial: !0 }, D, R)(n)
                : (e.enter("htmlFlowData"), F(n));
            }
            function T(e, n, t) {
              return function (n) {
                return (
                  e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o
                );
              };
              function o(e) {
                return r.parser.lazy[r.now().line] ? t(e) : n(e);
              }
            }
            function z(n) {
              return 45 === n ? (e.consume(n), I) : F(n);
            }
            function O(n) {
              return 47 === n ? (e.consume(n), (l = ""), P) : F(n);
            }
            function P(n) {
              return 62 === n && be.includes(l.toLowerCase())
                ? (e.consume(n), M)
                : (0, _.jv)(n) && l.length < 8
                ? (e.consume(n), (l += String.fromCharCode(n)), P)
                : F(n);
            }
            function L(n) {
              return 93 === n ? (e.consume(n), I) : F(n);
            }
            function I(n) {
              return 62 === n
                ? (e.consume(n), M)
                : 45 === n && 2 === o
                ? (e.consume(n), I)
                : F(n);
            }
            function M(n) {
              return null === n || (0, _.Ch)(n)
                ? (e.exit("htmlFlowData"), R(n))
                : (e.consume(n), M);
            }
            function R(t) {
              return e.exit("htmlFlow"), n(t);
            }
          },
          resolveTo: function (e) {
            let n = e.length;
            for (
              ;
              n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type);

            );
            n > 1 &&
              "linePrefix" === e[n - 2][1].type &&
              ((e[n][1].start = e[n - 2][1].start),
              (e[n + 1][1].start = e[n - 2][1].start),
              e.splice(n - 2, 2));
            return e;
          },
          concrete: !0,
        },
        we = {
          tokenize: function (e, n, t) {
            return function (r) {
              return (
                e.exit("htmlFlowData"),
                e.enter("lineEndingBlank"),
                e.consume(r),
                e.exit("lineEndingBlank"),
                e.attempt($.w, n, t)
              );
            };
          },
          partial: !0,
        };
      const Se = {
        name: "codeFenced",
        tokenize: function (e, n, t) {
          const r = this,
            o = {
              tokenize: function (e, n, t) {
                let r = 0;
                return (0, B.f)(
                  e,
                  o,
                  "linePrefix",
                  this.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
                );
                function o(n) {
                  return (
                    e.enter("codeFencedFence"),
                    e.enter("codeFencedFenceSequence"),
                    i(n)
                  );
                }
                function i(n) {
                  return n === c
                    ? (e.consume(n), r++, i)
                    : r < a
                    ? t(n)
                    : (e.exit("codeFencedFenceSequence"),
                      (0, B.f)(e, l, "whitespace")(n));
                }
                function l(r) {
                  return null === r || (0, _.Ch)(r)
                    ? (e.exit("codeFencedFence"), n(r))
                    : t(r);
                }
              },
              partial: !0,
            },
            i = {
              tokenize: function (e, n, t) {
                const r = this;
                return o;
                function o(n) {
                  return (
                    e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i
                  );
                }
                function i(e) {
                  return r.parser.lazy[r.now().line] ? t(e) : n(e);
                }
              },
              partial: !0,
            },
            l = this.events[this.events.length - 1],
            u =
              l && "linePrefix" === l[1].type
                ? l[2].sliceSerialize(l[1], !0).length
                : 0;
          let c,
            a = 0;
          return function (n) {
            return (
              e.enter("codeFenced"),
              e.enter("codeFencedFence"),
              e.enter("codeFencedFenceSequence"),
              (c = n),
              s(n)
            );
          };
          function s(n) {
            return n === c
              ? (e.consume(n), a++, s)
              : (e.exit("codeFencedFenceSequence"),
                a < 3 ? t(n) : (0, B.f)(e, f, "whitespace")(n));
          }
          function f(n) {
            return null === n || (0, _.Ch)(n)
              ? m(n)
              : (e.enter("codeFencedFenceInfo"),
                e.enter("chunkString", { contentType: "string" }),
                p(n));
          }
          function p(n) {
            return null === n || (0, _.z3)(n)
              ? (e.exit("chunkString"),
                e.exit("codeFencedFenceInfo"),
                (0, B.f)(e, h, "whitespace")(n))
              : 96 === n && n === c
              ? t(n)
              : (e.consume(n), p);
          }
          function h(n) {
            return null === n || (0, _.Ch)(n)
              ? m(n)
              : (e.enter("codeFencedFenceMeta"),
                e.enter("chunkString", { contentType: "string" }),
                d(n));
          }
          function d(n) {
            return null === n || (0, _.Ch)(n)
              ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(n))
              : 96 === n && n === c
              ? t(n)
              : (e.consume(n), d);
          }
          function m(t) {
            return e.exit("codeFencedFence"), r.interrupt ? n(t) : g(t);
          }
          function g(n) {
            return null === n
              ? k(n)
              : (0, _.Ch)(n)
              ? e.attempt(
                  i,
                  e.attempt(o, k, u ? (0, B.f)(e, g, "linePrefix", u + 1) : g),
                  k
                )(n)
              : (e.enter("codeFlowValue"), y(n));
          }
          function y(n) {
            return null === n || (0, _.Ch)(n)
              ? (e.exit("codeFlowValue"), g(n))
              : (e.consume(n), y);
          }
          function k(t) {
            return e.exit("codeFenced"), n(t);
          }
        },
        concrete: !0,
      };
      var Ae = t(44301);
      const Fe = {
        name: "characterReference",
        tokenize: function (e, n, t) {
          const r = this;
          let o,
            i,
            l = 0;
          return function (n) {
            return (
              e.enter("characterReference"),
              e.enter("characterReferenceMarker"),
              e.consume(n),
              e.exit("characterReferenceMarker"),
              u
            );
          };
          function u(n) {
            return 35 === n
              ? (e.enter("characterReferenceMarkerNumeric"),
                e.consume(n),
                e.exit("characterReferenceMarkerNumeric"),
                c)
              : (e.enter("characterReferenceValue"),
                (o = 31),
                (i = _.H$),
                a(n));
          }
          function c(n) {
            return 88 === n || 120 === n
              ? (e.enter("characterReferenceMarkerHexadecimal"),
                e.consume(n),
                e.exit("characterReferenceMarkerHexadecimal"),
                e.enter("characterReferenceValue"),
                (o = 6),
                (i = _.AF),
                a)
              : (e.enter("characterReferenceValue"), (o = 7), (i = _.pY), a(n));
          }
          function a(u) {
            let c;
            return 59 === u && l
              ? ((c = e.exit("characterReferenceValue")),
                i !== _.H$ || (0, Ae.T)(r.sliceSerialize(c))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(u),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    n)
                  : t(u))
              : i(u) && l++ < o
              ? (e.consume(u), a)
              : t(u);
          }
        },
      };
      const Ee = {
        name: "characterEscape",
        tokenize: function (e, n, t) {
          return function (n) {
            return (
              e.enter("characterEscape"),
              e.enter("escapeMarker"),
              e.consume(n),
              e.exit("escapeMarker"),
              r
            );
          };
          function r(r) {
            return (0, _.sR)(r)
              ? (e.enter("characterEscapeValue"),
                e.consume(r),
                e.exit("characterEscapeValue"),
                e.exit("characterEscape"),
                n)
              : t(r);
          }
        },
      };
      const De = {
        name: "lineEnding",
        tokenize: function (e, n) {
          return function (t) {
            return (
              e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              (0, B.f)(e, n, "linePrefix")
            );
          };
        },
      };
      const Te = {
          name: "labelEnd",
          tokenize: function (e, n, t) {
            const r = this;
            let o,
              i,
              l = r.events.length;
            for (; l--; )
              if (
                ("labelImage" === r.events[l][1].type ||
                  "labelLink" === r.events[l][1].type) &&
                !r.events[l][1]._balanced
              ) {
                o = r.events[l][1];
                break;
              }
            return function (n) {
              if (!o) return t(n);
              return o._inactive
                ? c(n)
                : ((i = r.parser.defined.includes(
                    (0, he.d)(r.sliceSerialize({ start: o.end, end: r.now() }))
                  )),
                  e.enter("labelEnd"),
                  e.enter("labelMarker"),
                  e.consume(n),
                  e.exit("labelMarker"),
                  e.exit("labelEnd"),
                  u);
            };
            function u(t) {
              return 40 === t
                ? e.attempt(ze, n, i ? n : c)(t)
                : 91 === t
                ? e.attempt(Oe, n, i ? e.attempt(Pe, n, c) : c)(t)
                : i
                ? n(t)
                : c(t);
            }
            function c(e) {
              return (o._balanced = !0), t(e);
            }
          },
          resolveTo: function (e, n) {
            let t,
              r,
              o,
              i,
              l = e.length,
              u = 0;
            for (; l--; )
              if (((t = e[l][1]), r)) {
                if (
                  "link" === t.type ||
                  ("labelLink" === t.type && t._inactive)
                )
                  break;
                "enter" === e[l][0] &&
                  "labelLink" === t.type &&
                  (t._inactive = !0);
              } else if (o) {
                if (
                  "enter" === e[l][0] &&
                  ("labelImage" === t.type || "labelLink" === t.type) &&
                  !t._balanced &&
                  ((r = l), "labelLink" !== t.type)
                ) {
                  u = 2;
                  break;
                }
              } else "labelEnd" === t.type && (o = l);
            const c = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              a = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[o][1].end),
              },
              s = {
                type: "labelText",
                start: Object.assign({}, e[r + u + 2][1].end),
                end: Object.assign({}, e[o - 2][1].start),
              };
            return (
              (i = [
                ["enter", c, n],
                ["enter", a, n],
              ]),
              (i = (0, N.V)(i, e.slice(r + 1, r + u + 3))),
              (i = (0, N.V)(i, [["enter", s, n]])),
              (i = (0, N.V)(
                i,
                (0, te.C)(
                  n.parser.constructs.insideSpan.null,
                  e.slice(r + u + 4, o - 3),
                  n
                )
              )),
              (i = (0, N.V)(i, [
                ["exit", s, n],
                e[o - 2],
                e[o - 1],
                ["exit", a, n],
              ])),
              (i = (0, N.V)(i, e.slice(o + 1))),
              (i = (0, N.V)(i, [["exit", c, n]])),
              (0, N.d)(e, r, e.length, i),
              e
            );
          },
          resolveAll: function (e) {
            let n,
              t = -1;
            for (; ++t < e.length; )
              (n = e[t][1]),
                ("labelImage" !== n.type &&
                  "labelLink" !== n.type &&
                  "labelEnd" !== n.type) ||
                  (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                  (n.type = "data"),
                  t++);
            return e;
          },
        },
        ze = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(n),
                e.exit("resourceMarker"),
                pe(e, r)
              );
            };
            function r(n) {
              return 41 === n
                ? l(n)
                : ae(
                    e,
                    o,
                    t,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(n);
            }
            function o(n) {
              return (0, _.z3)(n) ? pe(e, i)(n) : l(n);
            }
            function i(n) {
              return 34 === n || 39 === n || 40 === n
                ? fe(
                    e,
                    pe(e, l),
                    t,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(n)
                : l(n);
            }
            function l(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  n)
                : t(r);
            }
          },
        },
        Oe = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return se.call(
                r,
                e,
                o,
                t,
                "reference",
                "referenceMarker",
                "referenceString"
              )(n);
            };
            function o(e) {
              return r.parser.defined.includes(
                (0, he.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? n(e)
                : t(e);
            }
          },
        },
        Pe = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(n),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  n)
                : t(r);
            }
          },
        };
      const Le = {
        name: "labelStartImage",
        tokenize: function (e, n, t) {
          const r = this;
          return function (n) {
            return (
              e.enter("labelImage"),
              e.enter("labelImageMarker"),
              e.consume(n),
              e.exit("labelImageMarker"),
              o
            );
          };
          function o(n) {
            return 91 === n
              ? (e.enter("labelMarker"),
                e.consume(n),
                e.exit("labelMarker"),
                e.exit("labelImage"),
                i)
              : t(n);
          }
          function i(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? t(e)
              : n(e);
          }
        },
        resolveAll: Te.resolveAll,
      };
      var Ie = t(62987);
      const Me = {
        name: "attention",
        tokenize: function (e, n) {
          const t = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            o = (0, Ie.r)(r);
          let i;
          return function (n) {
            return e.enter("attentionSequence"), (i = n), l(n);
          };
          function l(u) {
            if (u === i) return e.consume(u), l;
            const c = e.exit("attentionSequence"),
              a = (0, Ie.r)(u),
              s = !a || (2 === a && o) || t.includes(u),
              f = !o || (2 === o && a) || t.includes(r);
            return (
              (c._open = Boolean(42 === i ? s : s && (o || !f))),
              (c._close = Boolean(42 === i ? f : f && (a || !s))),
              n(u)
            );
          }
        },
        resolveAll: function (e, n) {
          let t,
            r,
            o,
            i,
            l,
            u,
            c,
            a,
            s = -1;
          for (; ++s < e.length; )
            if (
              "enter" === e[s][0] &&
              "attentionSequence" === e[s][1].type &&
              e[s][1]._close
            )
              for (t = s; t--; )
                if (
                  "exit" === e[t][0] &&
                  "attentionSequence" === e[t][1].type &&
                  e[t][1]._open &&
                  n.sliceSerialize(e[t][1]).charCodeAt(0) ===
                    n.sliceSerialize(e[s][1]).charCodeAt(0)
                ) {
                  if (
                    (e[t][1]._close || e[s][1]._open) &&
                    (e[s][1].end.offset - e[s][1].start.offset) % 3 &&
                    !(
                      (e[t][1].end.offset -
                        e[t][1].start.offset +
                        e[s][1].end.offset -
                        e[s][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  u =
                    e[t][1].end.offset - e[t][1].start.offset > 1 &&
                    e[s][1].end.offset - e[s][1].start.offset > 1
                      ? 2
                      : 1;
                  const f = Object.assign({}, e[t][1].end),
                    p = Object.assign({}, e[s][1].start);
                  Re(f, -u),
                    Re(p, u),
                    (i = {
                      type: u > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: Object.assign({}, e[t][1].end),
                    }),
                    (l = {
                      type: u > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[s][1].start),
                      end: p,
                    }),
                    (o = {
                      type: u > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[t][1].end),
                      end: Object.assign({}, e[s][1].start),
                    }),
                    (r = {
                      type: u > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, i.start),
                      end: Object.assign({}, l.end),
                    }),
                    (e[t][1].end = Object.assign({}, i.start)),
                    (e[s][1].start = Object.assign({}, l.end)),
                    (c = []),
                    e[t][1].end.offset - e[t][1].start.offset &&
                      (c = (0, N.V)(c, [
                        ["enter", e[t][1], n],
                        ["exit", e[t][1], n],
                      ])),
                    (c = (0, N.V)(c, [
                      ["enter", r, n],
                      ["enter", i, n],
                      ["exit", i, n],
                      ["enter", o, n],
                    ])),
                    (c = (0, N.V)(
                      c,
                      (0, te.C)(
                        n.parser.constructs.insideSpan.null,
                        e.slice(t + 1, s),
                        n
                      )
                    )),
                    (c = (0, N.V)(c, [
                      ["exit", o, n],
                      ["enter", l, n],
                      ["exit", l, n],
                      ["exit", r, n],
                    ])),
                    e[s][1].end.offset - e[s][1].start.offset
                      ? ((a = 2),
                        (c = (0, N.V)(c, [
                          ["enter", e[s][1], n],
                          ["exit", e[s][1], n],
                        ])))
                      : (a = 0),
                    (0, N.d)(e, t - 1, s - t + 3, c),
                    (s = t + c.length - a - 2);
                  break;
                }
          s = -1;
          for (; ++s < e.length; )
            "attentionSequence" === e[s][1].type && (e[s][1].type = "data");
          return e;
        },
      };
      function Re(e, n) {
        (e.column += n), (e.offset += n), (e._bufferIndex += n);
      }
      const je = {
        name: "autolink",
        tokenize: function (e, n, t) {
          let r = 1;
          return function (n) {
            return (
              e.enter("autolink"),
              e.enter("autolinkMarker"),
              e.consume(n),
              e.exit("autolinkMarker"),
              e.enter("autolinkProtocol"),
              o
            );
          };
          function o(n) {
            return (0, _.jv)(n)
              ? (e.consume(n), i)
              : (0, _.n9)(n)
              ? c(n)
              : t(n);
          }
          function i(e) {
            return 43 === e || 45 === e || 46 === e || (0, _.H$)(e)
              ? l(e)
              : c(e);
          }
          function l(n) {
            return 58 === n
              ? (e.consume(n), u)
              : (43 === n || 45 === n || 46 === n || (0, _.H$)(n)) && r++ < 32
              ? (e.consume(n), l)
              : c(n);
          }
          function u(n) {
            return 62 === n
              ? (e.exit("autolinkProtocol"), p(n))
              : null === n || 32 === n || 60 === n || (0, _.Av)(n)
              ? t(n)
              : (e.consume(n), u);
          }
          function c(n) {
            return 64 === n
              ? (e.consume(n), (r = 0), a)
              : (0, _.n9)(n)
              ? (e.consume(n), c)
              : t(n);
          }
          function a(e) {
            return (0, _.H$)(e) ? s(e) : t(e);
          }
          function s(n) {
            return 46 === n
              ? (e.consume(n), (r = 0), a)
              : 62 === n
              ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), p(n))
              : f(n);
          }
          function f(n) {
            return (45 === n || (0, _.H$)(n)) && r++ < 63
              ? (e.consume(n), 45 === n ? f : s)
              : t(n);
          }
          function p(t) {
            return (
              e.enter("autolinkMarker"),
              e.consume(t),
              e.exit("autolinkMarker"),
              e.exit("autolink"),
              n
            );
          }
        },
      };
      const Be = {
        name: "htmlText",
        tokenize: function (e, n, t) {
          const r = this;
          let o, i, l, u;
          return function (n) {
            return (
              e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), c
            );
          };
          function c(n) {
            return 33 === n
              ? (e.consume(n), a)
              : 47 === n
              ? (e.consume(n), C)
              : 63 === n
              ? (e.consume(n), v)
              : (0, _.jv)(n)
              ? (e.consume(n), A)
              : t(n);
          }
          function a(n) {
            return 45 === n
              ? (e.consume(n), s)
              : 91 === n
              ? (e.consume(n), (i = "CDATA["), (l = 0), m)
              : (0, _.jv)(n)
              ? (e.consume(n), x)
              : t(n);
          }
          function s(n) {
            return 45 === n ? (e.consume(n), f) : t(n);
          }
          function f(n) {
            return null === n || 62 === n
              ? t(n)
              : 45 === n
              ? (e.consume(n), p)
              : h(n);
          }
          function p(e) {
            return null === e || 62 === e ? t(e) : h(e);
          }
          function h(n) {
            return null === n
              ? t(n)
              : 45 === n
              ? (e.consume(n), d)
              : (0, _.Ch)(n)
              ? ((u = h), L(n))
              : (e.consume(n), h);
          }
          function d(n) {
            return 45 === n ? (e.consume(n), M) : h(n);
          }
          function m(n) {
            return n === i.charCodeAt(l++)
              ? (e.consume(n), l === i.length ? g : m)
              : t(n);
          }
          function g(n) {
            return null === n
              ? t(n)
              : 93 === n
              ? (e.consume(n), y)
              : (0, _.Ch)(n)
              ? ((u = g), L(n))
              : (e.consume(n), g);
          }
          function y(n) {
            return 93 === n ? (e.consume(n), k) : g(n);
          }
          function k(n) {
            return 62 === n ? M(n) : 93 === n ? (e.consume(n), k) : g(n);
          }
          function x(n) {
            return null === n || 62 === n
              ? M(n)
              : (0, _.Ch)(n)
              ? ((u = x), L(n))
              : (e.consume(n), x);
          }
          function v(n) {
            return null === n
              ? t(n)
              : 63 === n
              ? (e.consume(n), b)
              : (0, _.Ch)(n)
              ? ((u = v), L(n))
              : (e.consume(n), v);
          }
          function b(e) {
            return 62 === e ? M(e) : v(e);
          }
          function C(n) {
            return (0, _.jv)(n) ? (e.consume(n), w) : t(n);
          }
          function w(n) {
            return 45 === n || (0, _.H$)(n) ? (e.consume(n), w) : S(n);
          }
          function S(n) {
            return (0, _.Ch)(n)
              ? ((u = S), L(n))
              : (0, _.xz)(n)
              ? (e.consume(n), S)
              : M(n);
          }
          function A(n) {
            return 45 === n || (0, _.H$)(n)
              ? (e.consume(n), A)
              : 47 === n || 62 === n || (0, _.z3)(n)
              ? F(n)
              : t(n);
          }
          function F(n) {
            return 47 === n
              ? (e.consume(n), M)
              : 58 === n || 95 === n || (0, _.jv)(n)
              ? (e.consume(n), E)
              : (0, _.Ch)(n)
              ? ((u = F), L(n))
              : (0, _.xz)(n)
              ? (e.consume(n), F)
              : M(n);
          }
          function E(n) {
            return 45 === n || 46 === n || 58 === n || 95 === n || (0, _.H$)(n)
              ? (e.consume(n), E)
              : D(n);
          }
          function D(n) {
            return 61 === n
              ? (e.consume(n), T)
              : (0, _.Ch)(n)
              ? ((u = D), L(n))
              : (0, _.xz)(n)
              ? (e.consume(n), D)
              : F(n);
          }
          function T(n) {
            return null === n || 60 === n || 61 === n || 62 === n || 96 === n
              ? t(n)
              : 34 === n || 39 === n
              ? (e.consume(n), (o = n), z)
              : (0, _.Ch)(n)
              ? ((u = T), L(n))
              : (0, _.xz)(n)
              ? (e.consume(n), T)
              : (e.consume(n), (o = void 0), P);
          }
          function z(n) {
            return n === o
              ? (e.consume(n), O)
              : null === n
              ? t(n)
              : (0, _.Ch)(n)
              ? ((u = z), L(n))
              : (e.consume(n), z);
          }
          function O(e) {
            return 62 === e || 47 === e || (0, _.z3)(e) ? F(e) : t(e);
          }
          function P(n) {
            return null === n ||
              34 === n ||
              39 === n ||
              60 === n ||
              61 === n ||
              96 === n
              ? t(n)
              : 62 === n || (0, _.z3)(n)
              ? F(n)
              : (e.consume(n), P);
          }
          function L(n) {
            return (
              e.exit("htmlTextData"),
              e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              (0, B.f)(
                e,
                I,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )
            );
          }
          function I(n) {
            return e.enter("htmlTextData"), u(n);
          }
          function M(r) {
            return 62 === r
              ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n)
              : t(r);
          }
        },
      };
      const _e = {
        name: "labelStartLink",
        tokenize: function (e, n, t) {
          const r = this;
          return function (n) {
            return (
              e.enter("labelLink"),
              e.enter("labelMarker"),
              e.consume(n),
              e.exit("labelMarker"),
              e.exit("labelLink"),
              o
            );
          };
          function o(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? t(e)
              : n(e);
          }
        },
        resolveAll: Te.resolveAll,
      };
      const He = {
        name: "hardBreakEscape",
        tokenize: function (e, n, t) {
          return function (n) {
            return (
              e.enter("hardBreakEscape"),
              e.enter("escapeMarker"),
              e.consume(n),
              r
            );
          };
          function r(r) {
            return (0, _.Ch)(r)
              ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(r))
              : t(r);
          }
        },
      };
      const Ne = {
        name: "codeText",
        tokenize: function (e, n, t) {
          let r,
            o,
            i = 0;
          return function (n) {
            return e.enter("codeText"), e.enter("codeTextSequence"), l(n);
          };
          function l(n) {
            return 96 === n
              ? (e.consume(n), i++, l)
              : (e.exit("codeTextSequence"), u(n));
          }
          function u(n) {
            return null === n
              ? t(n)
              : 96 === n
              ? ((o = e.enter("codeTextSequence")), (r = 0), a(n))
              : 32 === n
              ? (e.enter("space"), e.consume(n), e.exit("space"), u)
              : (0, _.Ch)(n)
              ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), u)
              : (e.enter("codeTextData"), c(n));
          }
          function c(n) {
            return null === n || 32 === n || 96 === n || (0, _.Ch)(n)
              ? (e.exit("codeTextData"), u(n))
              : (e.consume(n), c);
          }
          function a(t) {
            return 96 === t
              ? (e.consume(t), r++, a)
              : r === i
              ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t))
              : ((o.type = "codeTextData"), c(t));
          }
        },
        resolve: function (e) {
          let n,
            t,
            r = e.length - 4,
            o = 3;
          if (
            ("lineEnding" === e[o][1].type || "space" === e[o][1].type) &&
            ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
          )
            for (n = o; ++n < r; )
              if ("codeTextData" === e[n][1].type) {
                (e[o][1].type = "codeTextPadding"),
                  (e[r][1].type = "codeTextPadding"),
                  (o += 2),
                  (r -= 2);
                break;
              }
          (n = o - 1), r++;
          for (; ++n <= r; )
            void 0 === t
              ? n !== r && "lineEnding" !== e[n][1].type && (t = n)
              : (n !== r && "lineEnding" !== e[n][1].type) ||
                ((e[t][1].type = "codeTextData"),
                n !== t + 2 &&
                  ((e[t][1].end = e[n - 1][1].end),
                  e.splice(t + 2, n - t - 2),
                  (r -= n - t - 2),
                  (n = t + 2)),
                (t = void 0));
          return e;
        },
        previous: function (e) {
          return (
            96 !== e ||
            "characterEscape" === this.events[this.events.length - 1][1].type
          );
        },
      };
      const Ue = {
          42: ie,
          43: ie,
          45: ie,
          48: ie,
          49: ie,
          50: ie,
          51: ie,
          52: ie,
          53: ie,
          54: ie,
          55: ie,
          56: ie,
          57: ie,
          62: ce,
        },
        Ve = { 91: de },
        $e = { [-2]: ge, [-1]: ge, 32: ge },
        qe = {
          35: ke,
          42: oe,
          45: [xe, oe],
          60: Ce,
          61: xe,
          95: oe,
          96: Se,
          126: Se,
        },
        We = { 38: Fe, 92: Ee },
        Ze = {
          [-5]: De,
          [-4]: De,
          [-3]: De,
          33: Le,
          38: Fe,
          42: Me,
          60: [je, Be],
          91: _e,
          92: [He, Ee],
          93: Te,
          95: Me,
          96: Ne,
        },
        Ye = { null: [Me, Q] },
        Xe = { null: [42, 95] },
        Qe = { null: [] };
      const Ke = /[\0\t\n\r]/g;
      var Je = t(80889),
        Ge = t(47881);
      const en = {}.hasOwnProperty,
        nn = function (e, n, t) {
          return (
            "string" !== typeof n && ((t = n), (n = void 0)),
            (function (e = {}) {
              const n = tn(
                  {
                    transforms: [],
                    canContainEols: [
                      "emphasis",
                      "fragment",
                      "heading",
                      "paragraph",
                      "strong",
                    ],
                    enter: {
                      autolink: a(ie),
                      autolinkProtocol: T,
                      autolinkEmail: T,
                      atxHeading: a(ne),
                      blockQuote: a(Q),
                      characterEscape: T,
                      characterReference: T,
                      codeFenced: a(K),
                      codeFencedFenceInfo: s,
                      codeFencedFenceMeta: s,
                      codeIndented: a(K, s),
                      codeText: a(J, s),
                      codeTextData: T,
                      data: T,
                      codeFlowValue: T,
                      definition: a(G),
                      definitionDestinationString: s,
                      definitionLabelString: s,
                      definitionTitleString: s,
                      emphasis: a(ee),
                      hardBreakEscape: a(te),
                      hardBreakTrailing: a(te),
                      htmlFlow: a(re, s),
                      htmlFlowData: T,
                      htmlText: a(re, s),
                      htmlTextData: T,
                      image: a(oe),
                      label: s,
                      link: a(ie),
                      listItem: a(ue),
                      listItemValue: g,
                      listOrdered: a(le, m),
                      listUnordered: a(le),
                      paragraph: a(ce),
                      reference: $,
                      referenceString: s,
                      resourceDestinationString: s,
                      resourceTitleString: s,
                      setextHeading: a(ne),
                      strong: a(ae),
                      thematicBreak: a(fe),
                    },
                    exit: {
                      atxHeading: p(),
                      atxHeadingSequence: A,
                      autolink: p(),
                      autolinkEmail: X,
                      autolinkProtocol: Y,
                      blockQuote: p(),
                      characterEscapeValue: z,
                      characterReferenceMarkerHexadecimal: W,
                      characterReferenceMarkerNumeric: W,
                      characterReferenceValue: Z,
                      codeFenced: p(v),
                      codeFencedFence: x,
                      codeFencedFenceInfo: y,
                      codeFencedFenceMeta: k,
                      codeFlowValue: z,
                      codeIndented: p(b),
                      codeText: p(R),
                      codeTextData: z,
                      data: z,
                      definition: p(),
                      definitionDestinationString: S,
                      definitionLabelString: C,
                      definitionTitleString: w,
                      emphasis: p(),
                      hardBreakEscape: p(P),
                      hardBreakTrailing: p(P),
                      htmlFlow: p(L),
                      htmlFlowData: z,
                      htmlText: p(I),
                      htmlTextData: z,
                      image: p(B),
                      label: H,
                      labelText: _,
                      lineEnding: O,
                      link: p(j),
                      listItem: p(),
                      listOrdered: p(),
                      listUnordered: p(),
                      paragraph: p(),
                      referenceString: q,
                      resourceDestinationString: N,
                      resourceTitleString: U,
                      resource: V,
                      setextHeading: p(D),
                      setextHeadingLineSequence: E,
                      setextHeadingText: F,
                      strong: p(),
                      thematicBreak: p(),
                    },
                  },
                  e.mdastExtensions || []
                ),
                t = {};
              return r;
              function r(e) {
                let t = { type: "root", children: [] };
                const r = [],
                  u = [],
                  a = {
                    stack: [t],
                    tokenStack: r,
                    config: n,
                    enter: f,
                    exit: h,
                    buffer: s,
                    resume: d,
                    setData: i,
                    getData: l,
                  };
                let p = -1;
                for (; ++p < e.length; )
                  if (
                    "listOrdered" === e[p][1].type ||
                    "listUnordered" === e[p][1].type
                  )
                    if ("enter" === e[p][0]) u.push(p);
                    else {
                      p = o(e, u.pop(), p);
                    }
                for (p = -1; ++p < e.length; ) {
                  const t = n[e[p][0]];
                  en.call(t, e[p][1].type) &&
                    t[e[p][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[p][2].sliceSerialize },
                        a
                      ),
                      e[p][1]
                    );
                }
                if (r.length > 0) {
                  const e = r[r.length - 1];
                  (e[1] || on).call(a, void 0, e[0]);
                }
                for (
                  t.position = {
                    start: c(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: c(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    p = -1;
                  ++p < n.transforms.length;

                )
                  t = n.transforms[p](t) || t;
                return t;
              }
              function o(e, n, t) {
                let r,
                  o,
                  i,
                  l,
                  u = n - 1,
                  c = -1,
                  a = !1;
                for (; ++u <= t; ) {
                  const n = e[u];
                  if (
                    ("listUnordered" === n[1].type ||
                    "listOrdered" === n[1].type ||
                    "blockQuote" === n[1].type
                      ? ("enter" === n[0] ? c++ : c--, (l = void 0))
                      : "lineEndingBlank" === n[1].type
                      ? "enter" === n[0] &&
                        (!r || l || c || i || (i = u), (l = void 0))
                      : "linePrefix" === n[1].type ||
                        "listItemValue" === n[1].type ||
                        "listItemMarker" === n[1].type ||
                        "listItemPrefix" === n[1].type ||
                        "listItemPrefixWhitespace" === n[1].type ||
                        (l = void 0),
                    (!c &&
                      "enter" === n[0] &&
                      "listItemPrefix" === n[1].type) ||
                      (-1 === c &&
                        "exit" === n[0] &&
                        ("listUnordered" === n[1].type ||
                          "listOrdered" === n[1].type)))
                  ) {
                    if (r) {
                      let l = u;
                      for (o = void 0; l--; ) {
                        const n = e[l];
                        if (
                          "lineEnding" === n[1].type ||
                          "lineEndingBlank" === n[1].type
                        ) {
                          if ("exit" === n[0]) continue;
                          o && ((e[o][1].type = "lineEndingBlank"), (a = !0)),
                            (n[1].type = "lineEnding"),
                            (o = l);
                        } else if (
                          "linePrefix" !== n[1].type &&
                          "blockQuotePrefix" !== n[1].type &&
                          "blockQuotePrefixWhitespace" !== n[1].type &&
                          "blockQuoteMarker" !== n[1].type &&
                          "listItemIndent" !== n[1].type
                        )
                          break;
                      }
                      i && (!o || i < o) && (r._spread = !0),
                        (r.end = Object.assign(
                          {},
                          o ? e[o][1].start : n[1].end
                        )),
                        e.splice(o || u, 0, ["exit", r, n[2]]),
                        u++,
                        t++;
                    }
                    "listItemPrefix" === n[1].type &&
                      ((r = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, n[1].start),
                      }),
                      e.splice(u, 0, ["enter", r, n[2]]),
                      u++,
                      t++,
                      (i = void 0),
                      (l = !0));
                  }
                }
                return (e[n][1]._spread = a), t;
              }
              function i(e, n) {
                t[e] = n;
              }
              function l(e) {
                return t[e];
              }
              function c(e) {
                return { line: e.line, column: e.column, offset: e.offset };
              }
              function a(e, n) {
                return t;
                function t(t) {
                  f.call(this, e(t), t), n && n.call(this, t);
                }
              }
              function s() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function f(e, n, t) {
                return (
                  this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([n, t]),
                  (e.position = { start: c(n.start) }),
                  e
                );
              }
              function p(e) {
                return n;
                function n(n) {
                  e && e.call(this, n), h.call(this, n);
                }
              }
              function h(e, n) {
                const t = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (!r)
                  throw new Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      u({ start: e.start, end: e.end }) +
                      "): it\u2019s not open"
                  );
                if (r[0].type !== e.type)
                  if (n) n.call(this, e, r[0]);
                  else {
                    (r[1] || on).call(this, e, r[0]);
                  }
                return (t.position.end = c(e.end)), t;
              }
              function d() {
                return (function (e, n) {
                  var { includeImageAlt: t = !0 } = n || {};
                  return M(e, t);
                })(this.stack.pop());
              }
              function m() {
                i("expectingFirstListItemValue", !0);
              }
              function g(e) {
                if (l("expectingFirstListItemValue")) {
                  (this.stack[this.stack.length - 2].start = Number.parseInt(
                    this.sliceSerialize(e),
                    10
                  )),
                    i("expectingFirstListItemValue");
                }
              }
              function y() {
                const e = this.resume();
                this.stack[this.stack.length - 1].lang = e;
              }
              function k() {
                const e = this.resume();
                this.stack[this.stack.length - 1].meta = e;
              }
              function x() {
                l("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0));
              }
              function v() {
                const e = this.resume();
                (this.stack[this.stack.length - 1].value = e.replace(
                  /^(\r?\n|\r)|(\r?\n|\r)$/g,
                  ""
                )),
                  i("flowCodeInside");
              }
              function b() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e.replace(
                  /(\r?\n|\r)$/g,
                  ""
                );
              }
              function C(e) {
                const n = this.resume(),
                  t = this.stack[this.stack.length - 1];
                (t.label = n),
                  (t.identifier = (0, he.d)(
                    this.sliceSerialize(e)
                  ).toLowerCase());
              }
              function w() {
                const e = this.resume();
                this.stack[this.stack.length - 1].title = e;
              }
              function S() {
                const e = this.resume();
                this.stack[this.stack.length - 1].url = e;
              }
              function A(e) {
                const n = this.stack[this.stack.length - 1];
                if (!n.depth) {
                  const t = this.sliceSerialize(e).length;
                  n.depth = t;
                }
              }
              function F() {
                i("setextHeadingSlurpLineEnding", !0);
              }
              function E(e) {
                this.stack[this.stack.length - 1].depth =
                  61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
              }
              function D() {
                i("setextHeadingSlurpLineEnding");
              }
              function T(e) {
                const n = this.stack[this.stack.length - 1];
                let t = n.children[n.children.length - 1];
                (t && "text" === t.type) ||
                  ((t = se()),
                  (t.position = { start: c(e.start) }),
                  n.children.push(t)),
                  this.stack.push(t);
              }
              function z(e) {
                const n = this.stack.pop();
                (n.value += this.sliceSerialize(e)),
                  (n.position.end = c(e.end));
              }
              function O(e) {
                const t = this.stack[this.stack.length - 1];
                if (l("atHardBreak")) {
                  return (
                    (t.children[t.children.length - 1].position.end = c(e.end)),
                    void i("atHardBreak")
                  );
                }
                !l("setextHeadingSlurpLineEnding") &&
                  n.canContainEols.includes(t.type) &&
                  (T.call(this, e), z.call(this, e));
              }
              function P() {
                i("atHardBreak", !0);
              }
              function L() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e;
              }
              function I() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e;
              }
              function R() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e;
              }
              function j() {
                const e = this.stack[this.stack.length - 1];
                l("inReference")
                  ? ((e.type += "Reference"),
                    (e.referenceType = l("referenceType") || "shortcut"),
                    delete e.url,
                    delete e.title)
                  : (delete e.identifier, delete e.label),
                  i("referenceType");
              }
              function B() {
                const e = this.stack[this.stack.length - 1];
                l("inReference")
                  ? ((e.type += "Reference"),
                    (e.referenceType = l("referenceType") || "shortcut"),
                    delete e.url,
                    delete e.title)
                  : (delete e.identifier, delete e.label),
                  i("referenceType");
              }
              function _(e) {
                const n = this.stack[this.stack.length - 2],
                  t = this.sliceSerialize(e);
                (n.label = (0, Ge.v)(t)),
                  (n.identifier = (0, he.d)(t).toLowerCase());
              }
              function H() {
                const e = this.stack[this.stack.length - 1],
                  n = this.resume(),
                  t = this.stack[this.stack.length - 1];
                i("inReference", !0),
                  "link" === t.type ? (t.children = e.children) : (t.alt = n);
              }
              function N() {
                const e = this.resume();
                this.stack[this.stack.length - 1].url = e;
              }
              function U() {
                const e = this.resume();
                this.stack[this.stack.length - 1].title = e;
              }
              function V() {
                i("inReference");
              }
              function $() {
                i("referenceType", "collapsed");
              }
              function q(e) {
                const n = this.resume(),
                  t = this.stack[this.stack.length - 1];
                (t.label = n),
                  (t.identifier = (0, he.d)(
                    this.sliceSerialize(e)
                  ).toLowerCase()),
                  i("referenceType", "full");
              }
              function W(e) {
                i("characterReferenceType", e.type);
              }
              function Z(e) {
                const n = this.sliceSerialize(e),
                  t = l("characterReferenceType");
                let r;
                t
                  ? ((r = (0, Je.o)(
                      n,
                      "characterReferenceMarkerNumeric" === t ? 10 : 16
                    )),
                    i("characterReferenceType"))
                  : (r = (0, Ae.T)(n));
                const o = this.stack.pop();
                (o.value += r), (o.position.end = c(e.end));
              }
              function Y(e) {
                z.call(this, e);
                this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
              }
              function X(e) {
                z.call(this, e);
                this.stack[this.stack.length - 1].url =
                  "mailto:" + this.sliceSerialize(e);
              }
              function Q() {
                return { type: "blockquote", children: [] };
              }
              function K() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function J() {
                return { type: "inlineCode", value: "" };
              }
              function G() {
                return {
                  type: "definition",
                  identifier: "",
                  label: null,
                  title: null,
                  url: "",
                };
              }
              function ee() {
                return { type: "emphasis", children: [] };
              }
              function ne() {
                return { type: "heading", depth: void 0, children: [] };
              }
              function te() {
                return { type: "break" };
              }
              function re() {
                return { type: "html", value: "" };
              }
              function oe() {
                return { type: "image", title: null, url: "", alt: null };
              }
              function ie() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function le(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
              function ue(e) {
                return {
                  type: "listItem",
                  spread: e._spread,
                  checked: null,
                  children: [],
                };
              }
              function ce() {
                return { type: "paragraph", children: [] };
              }
              function ae() {
                return { type: "strong", children: [] };
              }
              function se() {
                return { type: "text", value: "" };
              }
              function fe() {
                return { type: "thematicBreak" };
              }
            })(t)(
              (function (e) {
                for (; !q(e); );
                return e;
              })(
                (function (e = {}) {
                  const n = {
                    defined: [],
                    lazy: {},
                    constructs: (0, j.W)([r].concat(e.extensions || [])),
                    content: t(H),
                    document: t(U),
                    flow: t(X),
                    string: t(K),
                    text: t(J),
                  };
                  return n;
                  function t(e) {
                    return function (t) {
                      return re(n, e, t);
                    };
                  }
                })(t)
                  .document()
                  .write(
                    (function () {
                      let e,
                        n = 1,
                        t = "",
                        r = !0;
                      return function (o, i, l) {
                        const u = [];
                        let c, a, s, f, p;
                        for (
                          o = t + o.toString(i),
                            s = 0,
                            t = "",
                            r &&
                              (65279 === o.charCodeAt(0) && s++, (r = void 0));
                          s < o.length;

                        ) {
                          if (
                            ((Ke.lastIndex = s),
                            (c = Ke.exec(o)),
                            (f = c && void 0 !== c.index ? c.index : o.length),
                            (p = o.charCodeAt(f)),
                            !c)
                          ) {
                            t = o.slice(s);
                            break;
                          }
                          if (10 === p && s === f && e)
                            u.push(-3), (e = void 0);
                          else
                            switch (
                              (e && (u.push(-5), (e = void 0)),
                              s < f && (u.push(o.slice(s, f)), (n += f - s)),
                              p)
                            ) {
                              case 0:
                                u.push(65533), n++;
                                break;
                              case 9:
                                for (
                                  a = 4 * Math.ceil(n / 4), u.push(-2);
                                  n++ < a;

                                )
                                  u.push(-1);
                                break;
                              case 10:
                                u.push(-4), (n = 1);
                                break;
                              default:
                                (e = !0), (n = 1);
                            }
                          s = f + 1;
                        }
                        return (
                          l && (e && u.push(-5), t && u.push(t), u.push(null)),
                          u
                        );
                      };
                    })()(e, n, !0)
                  )
              )
            )
          );
        };
      function tn(e, n) {
        let t = -1;
        for (; ++t < n.length; ) {
          const r = n[t];
          Array.isArray(r) ? tn(e, r) : rn(e, r);
        }
        return e;
      }
      function rn(e, n) {
        let t;
        for (t in n)
          if (en.call(n, t)) {
            const r = "canContainEols" === t || "transforms" === t,
              o = (en.call(e, t) ? e[t] : void 0) || (e[t] = r ? [] : {}),
              i = n[t];
            i && (r ? (e[t] = [...o, ...i]) : Object.assign(o, i));
          }
      }
      function on(e, n) {
        throw e
          ? new Error(
              "Cannot close `" +
                e.type +
                "` (" +
                u({ start: e.start, end: e.end }) +
                "): a different token (`" +
                n.type +
                "`, " +
                u({ start: n.start, end: n.end }) +
                ") is open"
            )
          : new Error(
              "Cannot close document, a token (`" +
                n.type +
                "`, " +
                u({ start: n.start, end: n.end }) +
                ") is still open"
            );
      }
      var ln = function (e) {
          Object.assign(this, {
            Parser: (n) => {
              const t = this.data("settings");
              return nn(
                n,
                Object.assign({}, t, e, {
                  extensions: this.data("micromarkExtensions") || [],
                  mdastExtensions: this.data("fromMarkdownExtensions") || [],
                })
              );
            },
          });
        },
        un = function (e, n, t) {
          var r = { type: String(e) };
          return (
            (void 0 !== t && null !== t) ||
            ("string" !== typeof n && !Array.isArray(n))
              ? Object.assign(r, n)
              : (t = n),
            Array.isArray(t)
              ? (r.children = t)
              : void 0 !== t && null !== t && (r.value = String(t)),
            r
          );
        },
        cn = t(55765);
      const an = function (e, n, t, r) {
          "function" === typeof n &&
            "function" !== typeof t &&
            ((r = t), (t = n), (n = null)),
            (0, cn.S4)(
              e,
              n,
              function (e, n) {
                const r = n[n.length - 1];
                return t(e, r ? r.children.indexOf(e) : null, r);
              },
              r
            );
        },
        sn = pn("start"),
        fn = pn("end");
      function pn(e) {
        return function (n) {
          const t = (n && n.position && n.position[e]) || {};
          return {
            line: t.line || null,
            column: t.column || null,
            offset: t.offset > -1 ? t.offset : null,
          };
        };
      }
      var hn = t(19645);
      const dn = function (e, n, t, r) {
        "function" === typeof n &&
          "function" !== typeof t &&
          ((r = t), (t = n), (n = null));
        var o = (0, hn.O)(n),
          i = r ? -1 : 1;
        !(function e(l, u, c) {
          var a,
            s = "object" === typeof l && null !== l ? l : {};
          "string" === typeof s.type &&
            ((a =
              "string" === typeof s.tagName
                ? s.tagName
                : "string" === typeof s.name
                ? s.name
                : void 0),
            Object.defineProperty(f, "name", {
              value: "node (" + s.type + (a ? "<" + a + ">" : "") + ")",
            }));
          return f;
          function f() {
            var a,
              s,
              f,
              p = [];
            if (
              (!n || o(l, u, c[c.length - 1] || null)) &&
              ((p = (function (e) {
                if (Array.isArray(e)) return e;
                if ("number" === typeof e) return [true, e];
                return [e];
              })(t(l, c))),
              false === p[0])
            )
              return p;
            if (l.children && "skip" !== p[0])
              for (
                s = (r ? l.children.length : -1) + i, f = c.concat(l);
                s > -1 && s < l.children.length;

              ) {
                if (((a = e(l.children[s], s, f)()), false === a[0])) return a;
                s = "number" === typeof a[1] ? a[1] : s + i;
              }
            return p;
          }
        })(e, null, [])();
      };
      const mn = {}.hasOwnProperty;
      function gn(e) {
        const n = Object.create(null);
        if (!e || !e.type)
          throw new Error("mdast-util-definitions expected node");
        var t, r, o;
        return (
          (r = function (e) {
            const t = yn(e.identifier);
            t && !mn.call(n, t) && (n[t] = e);
          }),
          "function" === typeof (t = "definition") &&
            "function" !== typeof r &&
            ((o = r), (r = t), (t = null)),
          dn(
            e,
            t,
            function (e, n) {
              var t = n[n.length - 1];
              return r(e, t ? t.children.indexOf(e) : null, t);
            },
            o
          ),
          function (e) {
            const t = yn(e);
            return t && mn.call(n, t) ? n[t] : null;
          }
        );
      }
      function yn(e) {
        return String(e || "").toUpperCase();
      }
      const kn = {}.hasOwnProperty;
      function xn(e, n) {
        const t = n.data || {};
        return "value" in n &&
          !(
            kn.call(t, "hName") ||
            kn.call(t, "hProperties") ||
            kn.call(t, "hChildren")
          )
          ? e.augment(n, un("text", n.value))
          : e(n, "div", Cn(e, n));
      }
      function vn(e, n, t) {
        const r = n && n.type;
        let o;
        if (!r) throw new Error("Expected node, got `" + n + "`");
        return (
          (o = kn.call(e.handlers, r)
            ? e.handlers[r]
            : e.passThrough && e.passThrough.includes(r)
            ? bn
            : e.unknownHandler),
          ("function" === typeof o ? o : xn)(e, n, t)
        );
      }
      function bn(e, n) {
        return "children" in n ? { ...n, children: Cn(e, n) } : n;
      }
      function Cn(e, n) {
        const t = [];
        if ("children" in n) {
          const r = n.children;
          let o = -1;
          for (; ++o < r.length; ) {
            const i = vn(e, r[o], n);
            if (i) {
              if (
                o &&
                "break" === r[o - 1].type &&
                (Array.isArray(i) ||
                  "text" !== i.type ||
                  (i.value = i.value.replace(/^\s+/, "")),
                !Array.isArray(i) && "element" === i.type)
              ) {
                const e = i.children[0];
                e &&
                  "text" === e.type &&
                  (e.value = e.value.replace(/^\s+/, ""));
              }
              Array.isArray(i) ? t.push(...i) : t.push(i);
            }
          }
        }
        return t;
      }
      const wn = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
      function Sn(e, n) {
        const t = (function (e) {
          return e.replace(/["&<>]/g, function (e) {
            return "&" + wn[e] + ";";
          });
        })(
          (function (e) {
            const n = [];
            let t = -1,
              r = 0,
              o = 0;
            for (; ++t < e.length; ) {
              const i = e.charCodeAt(t);
              let l = "";
              if (
                37 === i &&
                (0, _.H$)(e.charCodeAt(t + 1)) &&
                (0, _.H$)(e.charCodeAt(t + 2))
              )
                o = 2;
              else if (i < 128)
                /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) ||
                  (l = String.fromCharCode(i));
              else if (i > 55295 && i < 57344) {
                const n = e.charCodeAt(t + 1);
                i < 56320 && n > 56319 && n < 57344
                  ? ((l = String.fromCharCode(i, n)), (o = 1))
                  : (l = "\ufffd");
              } else l = String.fromCharCode(i);
              l &&
                (n.push(e.slice(r, t), encodeURIComponent(l)),
                (r = t + o + 1),
                (l = "")),
                o && ((t += o), (o = 0));
            }
            return n.join("") + e.slice(r);
          })(e || "")
        );
        if (!n) return t;
        const r = t.indexOf(":"),
          o = t.indexOf("?"),
          i = t.indexOf("#"),
          l = t.indexOf("/");
        return r < 0 ||
          (l > -1 && r > l) ||
          (o > -1 && r > o) ||
          (i > -1 && r > i) ||
          n.test(t.slice(0, r))
          ? t
          : "";
      }
      function An(e, n) {
        const t = [];
        let r = -1;
        for (n && t.push(un("text", "\n")); ++r < e.length; )
          r && t.push(un("text", "\n")), t.push(e[r]);
        return n && e.length > 0 && t.push(un("text", "\n")), t;
      }
      function Fn(e, n) {
        const t = String(n.identifier),
          r = Sn(t.toLowerCase()),
          o = e.footnoteOrder.indexOf(t);
        let i;
        -1 === o
          ? (e.footnoteOrder.push(t),
            (e.footnoteCounts[t] = 1),
            (i = e.footnoteOrder.length))
          : (e.footnoteCounts[t]++, (i = o + 1));
        const l = e.footnoteCounts[t];
        return e(n, "sup", [
          e(
            n.position,
            "a",
            {
              href: "#" + e.clobberPrefix + "fn-" + r,
              id: e.clobberPrefix + "fnref-" + r + (l > 1 ? "-" + l : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: "footnote-label",
            },
            [un("text", String(i))]
          ),
        ]);
      }
      var En = t(70729);
      function Dn(e, n) {
        const t = n.referenceType;
        let r = "]";
        if (
          ("collapsed" === t
            ? (r += "[]")
            : "full" === t && (r += "[" + (n.label || n.identifier) + "]"),
          "imageReference" === n.type)
        )
          return un("text", "![" + n.alt + r);
        const o = Cn(e, n),
          i = o[0];
        i && "text" === i.type
          ? (i.value = "[" + i.value)
          : o.unshift(un("text", "["));
        const l = o[o.length - 1];
        return (
          l && "text" === l.type ? (l.value += r) : o.push(un("text", r)), o
        );
      }
      function Tn(e) {
        const n = e.spread;
        return void 0 === n || null === n ? e.children.length > 1 : n;
      }
      const zn = {
        blockquote: function (e, n) {
          return e(n, "blockquote", An(Cn(e, n), !0));
        },
        break: function (e, n) {
          return [e(n, "br"), un("text", "\n")];
        },
        code: function (e, n) {
          const t = n.value ? n.value + "\n" : "",
            r = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/),
            o = {};
          r && (o.className = ["language-" + r]);
          const i = e(n, "code", o, [un("text", t)]);
          return (
            n.meta && (i.data = { meta: n.meta }), e(n.position, "pre", [i])
          );
        },
        delete: function (e, n) {
          return e(n, "del", Cn(e, n));
        },
        emphasis: function (e, n) {
          return e(n, "em", Cn(e, n));
        },
        footnoteReference: Fn,
        footnote: function (e, n) {
          const t = e.footnoteById;
          let r = 1;
          for (; r in t; ) r++;
          const o = String(r);
          return (
            (t[o] = {
              type: "footnoteDefinition",
              identifier: o,
              children: [{ type: "paragraph", children: n.children }],
              position: n.position,
            }),
            Fn(e, {
              type: "footnoteReference",
              identifier: o,
              position: n.position,
            })
          );
        },
        heading: function (e, n) {
          return e(n, "h" + n.depth, Cn(e, n));
        },
        html: function (e, n) {
          return e.dangerous ? e.augment(n, un("raw", n.value)) : null;
        },
        imageReference: function (e, n) {
          const t = e.definition(n.identifier);
          if (!t) return Dn(e, n);
          const r = { src: En(t.url || ""), alt: n.alt };
          return (
            null !== t.title && void 0 !== t.title && (r.title = t.title),
            e(n, "img", r)
          );
        },
        image: function (e, n) {
          const t = { src: En(n.url), alt: n.alt };
          return (
            null !== n.title && void 0 !== n.title && (t.title = n.title),
            e(n, "img", t)
          );
        },
        inlineCode: function (e, n) {
          return e(n, "code", [un("text", n.value.replace(/\r?\n|\r/g, " "))]);
        },
        linkReference: function (e, n) {
          const t = e.definition(n.identifier);
          if (!t) return Dn(e, n);
          const r = { href: En(t.url || "") };
          return (
            null !== t.title && void 0 !== t.title && (r.title = t.title),
            e(n, "a", r, Cn(e, n))
          );
        },
        link: function (e, n) {
          const t = { href: En(n.url) };
          return (
            null !== n.title && void 0 !== n.title && (t.title = n.title),
            e(n, "a", t, Cn(e, n))
          );
        },
        listItem: function (e, n, t) {
          const r = Cn(e, n),
            o = t
              ? (function (e) {
                  let n = e.spread;
                  const t = e.children;
                  let r = -1;
                  for (; !n && ++r < t.length; ) n = Tn(t[r]);
                  return Boolean(n);
                })(t)
              : Tn(n),
            i = {},
            l = [];
          if ("boolean" === typeof n.checked) {
            let t;
            r[0] && "element" === r[0].type && "p" === r[0].tagName
              ? (t = r[0])
              : ((t = e(null, "p", [])), r.unshift(t)),
              t.children.length > 0 && t.children.unshift(un("text", " ")),
              t.children.unshift(
                e(null, "input", {
                  type: "checkbox",
                  checked: n.checked,
                  disabled: !0,
                })
              ),
              (i.className = ["task-list-item"]);
          }
          let u = -1;
          for (; ++u < r.length; ) {
            const e = r[u];
            (o || 0 !== u || "element" !== e.type || "p" !== e.tagName) &&
              l.push(un("text", "\n")),
              "element" !== e.type || "p" !== e.tagName || o
                ? l.push(e)
                : l.push(...e.children);
          }
          const c = r[r.length - 1];
          return (
            !c ||
              (!o && "tagName" in c && "p" === c.tagName) ||
              l.push(un("text", "\n")),
            e(n, "li", i, l)
          );
        },
        list: function (e, n) {
          const t = {},
            r = n.ordered ? "ol" : "ul",
            o = Cn(e, n);
          let i = -1;
          for (
            "number" === typeof n.start && 1 !== n.start && (t.start = n.start);
            ++i < o.length;

          ) {
            const e = o[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              t.className = ["contains-task-list"];
              break;
            }
          }
          return e(n, r, t, An(o, !0));
        },
        paragraph: function (e, n) {
          return e(n, "p", Cn(e, n));
        },
        root: function (e, n) {
          return e.augment(n, un("root", An(Cn(e, n))));
        },
        strong: function (e, n) {
          return e(n, "strong", Cn(e, n));
        },
        table: function (e, n) {
          const t = n.children;
          let r = -1;
          const o = n.align || [],
            i = [];
          for (; ++r < t.length; ) {
            const l = t[r].children,
              u = 0 === r ? "th" : "td",
              c = [];
            let a = -1;
            const s = n.align ? o.length : l.length;
            for (; ++a < s; ) {
              const n = l[a];
              c.push(e(n, u, { align: o[a] }, n ? Cn(e, n) : []));
            }
            i[r] = e(t[r], "tr", An(c, !0));
          }
          return e(
            n,
            "table",
            An(
              [e(i[0].position, "thead", An([i[0]], !0))].concat(
                i[1]
                  ? e(
                      { start: sn(i[1]), end: fn(i[i.length - 1]) },
                      "tbody",
                      An(i.slice(1), !0)
                    )
                  : []
              ),
              !0
            )
          );
        },
        text: function (e, n) {
          return e.augment(
            n,
            un("text", String(n.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1"))
          );
        },
        thematicBreak: function (e, n) {
          return e(n, "hr");
        },
        toml: On,
        yaml: On,
        definition: On,
        footnoteDefinition: On,
      };
      function On() {
        return null;
      }
      const Pn = {}.hasOwnProperty;
      function Ln(e, n) {
        const t = (function (e, n) {
            const t = n || {},
              r = t.allowDangerousHtml || !1,
              o = {};
            return (
              (l.dangerous = r),
              (l.clobberPrefix =
                void 0 === t.clobberPrefix || null === t.clobberPrefix
                  ? "user-content-"
                  : t.clobberPrefix),
              (l.footnoteLabel = t.footnoteLabel || "Footnotes"),
              (l.footnoteBackLabel = t.footnoteBackLabel || "Back to content"),
              (l.definition = gn(e)),
              (l.footnoteById = o),
              (l.footnoteOrder = []),
              (l.footnoteCounts = {}),
              (l.augment = i),
              (l.handlers = { ...zn, ...t.handlers }),
              (l.unknownHandler = t.unknownHandler),
              (l.passThrough = t.passThrough),
              an(e, "footnoteDefinition", (e) => {
                const n = String(e.identifier).toUpperCase();
                Pn.call(o, n) || (o[n] = e);
              }),
              l
            );
            function i(e, n) {
              if (e && "data" in e && e.data) {
                const t = e.data;
                t.hName &&
                  ("element" !== n.type &&
                    (n = {
                      type: "element",
                      tagName: "",
                      properties: {},
                      children: [],
                    }),
                  (n.tagName = t.hName)),
                  "element" === n.type &&
                    t.hProperties &&
                    (n.properties = { ...n.properties, ...t.hProperties }),
                  "children" in n &&
                    n.children &&
                    t.hChildren &&
                    (n.children = t.hChildren);
              }
              if (e) {
                const r = "type" in e ? e : { position: e };
                (t = r) &&
                  t.position &&
                  t.position.start &&
                  t.position.start.line &&
                  t.position.start.column &&
                  t.position.end &&
                  t.position.end.line &&
                  t.position.end.column &&
                  (n.position = { start: sn(r), end: fn(r) });
              }
              var t;
              return n;
            }
            function l(e, n, t, r) {
              return (
                Array.isArray(t) && ((r = t), (t = {})),
                i(e, {
                  type: "element",
                  tagName: n,
                  properties: t || {},
                  children: r || [],
                })
              );
            }
          })(e, n),
          r = vn(t, e, null),
          o = (function (e) {
            let n = -1;
            const t = [];
            for (; ++n < e.footnoteOrder.length; ) {
              const r = e.footnoteById[e.footnoteOrder[n].toUpperCase()];
              if (!r) continue;
              const o = Cn(e, r),
                i = String(r.identifier),
                l = Sn(i.toLowerCase());
              let u = 0;
              const c = [];
              for (; ++u <= e.footnoteCounts[i]; ) {
                const n = {
                  type: "element",
                  tagName: "a",
                  properties: {
                    href:
                      "#" +
                      e.clobberPrefix +
                      "fnref-" +
                      l +
                      (u > 1 ? "-" + u : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel,
                  },
                  children: [{ type: "text", value: "\u21a9" }],
                };
                u > 1 &&
                  n.children.push({
                    type: "element",
                    tagName: "sup",
                    children: [{ type: "text", value: String(u) }],
                  }),
                  c.length > 0 && c.push({ type: "text", value: " " }),
                  c.push(n);
              }
              const a = o[o.length - 1];
              if (a && "element" === a.type && "p" === a.tagName) {
                const e = a.children[a.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : a.children.push({ type: "text", value: " " }),
                  a.children.push(...c);
              } else o.push(...c);
              const s = {
                type: "element",
                tagName: "li",
                properties: { id: e.clobberPrefix + "fn-" + l },
                children: An(o, !0),
              };
              r.position && (s.position = r.position), t.push(s);
            }
            return 0 === t.length
              ? null
              : {
                  type: "element",
                  tagName: "section",
                  properties: { dataFootnotes: !0, className: ["footnotes"] },
                  children: [
                    {
                      type: "element",
                      tagName: "h2",
                      properties: {
                        id: "footnote-label",
                        className: ["sr-only"],
                      },
                      children: [un("text", e.footnoteLabel)],
                    },
                    { type: "text", value: "\n" },
                    {
                      type: "element",
                      tagName: "ol",
                      properties: {},
                      children: An(t, !0),
                    },
                    { type: "text", value: "\n" },
                  ],
                };
          })(t);
        return (
          o && r.children.push(un("text", "\n"), o),
          Array.isArray(r) ? { type: "root", children: r } : r
        );
      }
      var In = function (e, n) {
        return e && "run" in e
          ? (function (e, n) {
              return (t, r, o) => {
                e.run(Ln(t, n), r, (e) => {
                  o(e);
                });
              };
            })(e, n)
          : (function (e) {
              return (n) => Ln(n, e);
            })(e || n);
      };
      var Mn = t(45697);
      class Rn {
        constructor(e, n, t) {
          (this.property = e), (this.normal = n), t && (this.space = t);
        }
      }
      function jn(e, n) {
        const t = {},
          r = {};
        let o = -1;
        for (; ++o < e.length; )
          Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
        return new Rn(t, r, n);
      }
      function Bn(e) {
        return e.toLowerCase();
      }
      (Rn.prototype.property = {}),
        (Rn.prototype.normal = {}),
        (Rn.prototype.space = null);
      class _n {
        constructor(e, n) {
          (this.property = e), (this.attribute = n);
        }
      }
      (_n.prototype.space = null),
        (_n.prototype.boolean = !1),
        (_n.prototype.booleanish = !1),
        (_n.prototype.overloadedBoolean = !1),
        (_n.prototype.number = !1),
        (_n.prototype.commaSeparated = !1),
        (_n.prototype.spaceSeparated = !1),
        (_n.prototype.commaOrSpaceSeparated = !1),
        (_n.prototype.mustUseProperty = !1),
        (_n.prototype.defined = !1);
      let Hn = 0;
      const Nn = Yn(),
        Un = Yn(),
        Vn = Yn(),
        $n = Yn(),
        qn = Yn(),
        Wn = Yn(),
        Zn = Yn();
      function Yn() {
        return 2 ** ++Hn;
      }
      const Xn = Object.keys(o);
      class Qn extends _n {
        constructor(e, n, t, r) {
          let i = -1;
          if ((super(e, n), Kn(this, "space", r), "number" === typeof t))
            for (; ++i < Xn.length; ) {
              const e = Xn[i];
              Kn(this, Xn[i], (t & o[e]) === o[e]);
            }
        }
      }
      function Kn(e, n, t) {
        t && (e[n] = t);
      }
      Qn.prototype.defined = !0;
      const Jn = {}.hasOwnProperty;
      function Gn(e) {
        const n = {},
          t = {};
        let r;
        for (r in e.properties)
          if (Jn.call(e.properties, r)) {
            const o = e.properties[r],
              i = new Qn(r, e.transform(e.attributes || {}, r), o, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(r) &&
              (i.mustUseProperty = !0),
              (n[r] = i),
              (t[Bn(r)] = r),
              (t[Bn(i.attribute)] = r);
          }
        return new Rn(n, t, e.space);
      }
      const et = Gn({
          space: "xlink",
          transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        nt = Gn({
          space: "xml",
          transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function tt(e, n) {
        return n in e ? e[n] : n;
      }
      function rt(e, n) {
        return tt(e, n.toLowerCase());
      }
      const ot = Gn({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: rt,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        it = Gn({
          transform: (e, n) =>
            "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: Un,
            ariaAutoComplete: null,
            ariaBusy: Un,
            ariaChecked: Un,
            ariaColCount: $n,
            ariaColIndex: $n,
            ariaColSpan: $n,
            ariaControls: qn,
            ariaCurrent: null,
            ariaDescribedBy: qn,
            ariaDetails: null,
            ariaDisabled: Un,
            ariaDropEffect: qn,
            ariaErrorMessage: null,
            ariaExpanded: Un,
            ariaFlowTo: qn,
            ariaGrabbed: Un,
            ariaHasPopup: null,
            ariaHidden: Un,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: qn,
            ariaLevel: $n,
            ariaLive: null,
            ariaModal: Un,
            ariaMultiLine: Un,
            ariaMultiSelectable: Un,
            ariaOrientation: null,
            ariaOwns: qn,
            ariaPlaceholder: null,
            ariaPosInSet: $n,
            ariaPressed: Un,
            ariaReadOnly: Un,
            ariaRelevant: null,
            ariaRequired: Un,
            ariaRoleDescription: qn,
            ariaRowCount: $n,
            ariaRowIndex: $n,
            ariaRowSpan: $n,
            ariaSelected: Un,
            ariaSetSize: $n,
            ariaSort: null,
            ariaValueMax: $n,
            ariaValueMin: $n,
            ariaValueNow: $n,
            ariaValueText: null,
            role: null,
          },
        }),
        lt = Gn({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: rt,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: Wn,
            acceptCharset: qn,
            accessKey: qn,
            action: null,
            allow: null,
            allowFullScreen: Nn,
            allowPaymentRequest: Nn,
            allowUserMedia: Nn,
            alt: null,
            as: null,
            async: Nn,
            autoCapitalize: null,
            autoComplete: qn,
            autoFocus: Nn,
            autoPlay: Nn,
            capture: Nn,
            charSet: null,
            checked: Nn,
            cite: null,
            className: qn,
            cols: $n,
            colSpan: null,
            content: null,
            contentEditable: Un,
            controls: Nn,
            controlsList: qn,
            coords: $n | Wn,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: Nn,
            defer: Nn,
            dir: null,
            dirName: null,
            disabled: Nn,
            download: Vn,
            draggable: Un,
            encType: null,
            enterKeyHint: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: Nn,
            formTarget: null,
            headers: qn,
            height: $n,
            hidden: Nn,
            high: $n,
            href: null,
            hrefLang: null,
            htmlFor: qn,
            httpEquiv: qn,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: Nn,
            itemId: null,
            itemProp: qn,
            itemRef: qn,
            itemScope: Nn,
            itemType: qn,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: Nn,
            low: $n,
            manifest: null,
            max: null,
            maxLength: $n,
            media: null,
            method: null,
            min: null,
            minLength: $n,
            multiple: Nn,
            muted: Nn,
            name: null,
            nonce: null,
            noModule: Nn,
            noValidate: Nn,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: Nn,
            optimum: $n,
            pattern: null,
            ping: qn,
            placeholder: null,
            playsInline: Nn,
            poster: null,
            preload: null,
            readOnly: Nn,
            referrerPolicy: null,
            rel: qn,
            required: Nn,
            reversed: Nn,
            rows: $n,
            rowSpan: $n,
            sandbox: qn,
            scope: null,
            scoped: Nn,
            seamless: Nn,
            selected: Nn,
            shape: null,
            size: $n,
            sizes: null,
            slot: null,
            span: $n,
            spellCheck: Un,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: $n,
            step: null,
            style: null,
            tabIndex: $n,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: Nn,
            useMap: null,
            value: Un,
            width: $n,
            wrap: null,
            align: null,
            aLink: null,
            archive: qn,
            axis: null,
            background: null,
            bgColor: null,
            border: $n,
            borderColor: null,
            bottomMargin: $n,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: Nn,
            declare: Nn,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: $n,
            leftMargin: $n,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: $n,
            marginWidth: $n,
            noResize: Nn,
            noHref: Nn,
            noShade: Nn,
            noWrap: Nn,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: $n,
            rules: null,
            scheme: null,
            scrolling: Un,
            standby: null,
            summary: null,
            text: null,
            topMargin: $n,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: $n,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: Nn,
            disableRemotePlayback: Nn,
            prefix: null,
            property: null,
            results: $n,
            security: null,
            unselectable: null,
          },
        }),
        ut = Gn({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: tt,
          properties: {
            about: Zn,
            accentHeight: $n,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: $n,
            amplitude: $n,
            arabicForm: null,
            ascent: $n,
            attributeName: null,
            attributeType: null,
            azimuth: $n,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: $n,
            by: null,
            calcMode: null,
            capHeight: $n,
            className: qn,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: $n,
            diffuseConstant: $n,
            direction: null,
            display: null,
            dur: null,
            divisor: $n,
            dominantBaseline: null,
            download: Nn,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: $n,
            enableBackground: null,
            end: null,
            event: null,
            exponent: $n,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: $n,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: Wn,
            g2: Wn,
            glyphName: Wn,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: $n,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: $n,
            horizOriginX: $n,
            horizOriginY: $n,
            id: null,
            ideographic: $n,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: $n,
            k: $n,
            k1: $n,
            k2: $n,
            k3: $n,
            k4: $n,
            kernelMatrix: Zn,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: $n,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: $n,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: $n,
            overlineThickness: $n,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: $n,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: qn,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: $n,
            pointsAtY: $n,
            pointsAtZ: $n,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Zn,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Zn,
            rev: Zn,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Zn,
            requiredFeatures: Zn,
            requiredFonts: Zn,
            requiredFormats: Zn,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: $n,
            specularExponent: $n,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: $n,
            strikethroughThickness: $n,
            string: null,
            stroke: null,
            strokeDashArray: Zn,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: $n,
            strokeOpacity: $n,
            strokeWidth: null,
            style: null,
            surfaceScale: $n,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Zn,
            tabIndex: $n,
            tableValues: null,
            target: null,
            targetX: $n,
            targetY: $n,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Zn,
            to: null,
            transform: null,
            u1: null,
            u2: null,
            underlinePosition: $n,
            underlineThickness: $n,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: $n,
            values: null,
            vAlphabetic: $n,
            vMathematical: $n,
            vectorEffect: null,
            vHanging: $n,
            vIdeographic: $n,
            version: null,
            vertAdvY: $n,
            vertOriginX: $n,
            vertOriginY: $n,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: $n,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        ct = jn([nt, et, ot, it, lt], "html"),
        at = jn([nt, et, ot, it, ut], "svg");
      function st(e) {
        if (e.allowedElements && e.disallowedElements)
          throw new TypeError(
            "Only one of `allowedElements` and `disallowedElements` should be defined"
          );
        if (e.allowedElements || e.disallowedElements || e.allowElement)
          return (n) => {
            an(n, "element", (n, t, r) => {
              const o = r;
              let i;
              if (
                (e.allowedElements
                  ? (i = !e.allowedElements.includes(n.tagName))
                  : e.disallowedElements &&
                    (i = e.disallowedElements.includes(n.tagName)),
                !i &&
                  e.allowElement &&
                  "number" === typeof t &&
                  (i = !e.allowElement(n, t, o)),
                i && "number" === typeof t)
              )
                return (
                  e.unwrapDisallowed && n.children
                    ? o.children.splice(t, 1, ...n.children)
                    : o.children.splice(t, 1),
                  t
                );
            });
          };
      }
      const ft = ["http", "https", "mailto", "tel"];
      var pt = t(82143);
      function ht(e) {
        var n =
          e && "object" === typeof e && "text" === e.type ? e.value || "" : e;
        return "string" === typeof n && "" === n.replace(/[ \t\n\f\r]/g, "");
      }
      const dt = /^data[-\w.:]+$/i,
        mt = /-[a-z]/g,
        gt = /[A-Z]/g;
      function yt(e) {
        return "-" + e.toLowerCase();
      }
      function kt(e) {
        return e.charAt(1).toUpperCase();
      }
      const xt = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var vt = t(57848);
      const bt = {}.hasOwnProperty,
        Ct = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
      function wt(e, n) {
        const t = [];
        let r,
          o = -1;
        for (; ++o < n.children.length; )
          (r = n.children[o]),
            "element" === r.type
              ? t.push(St(e, r, o, n))
              : "text" === r.type
              ? ("element" === n.type && Ct.has(n.tagName) && ht(r)) ||
                t.push(r.value)
              : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
        return t;
      }
      function St(e, n, t, r) {
        const o = e.options,
          l = e.schema,
          u = n.tagName,
          c = {};
        let a,
          s = l;
        if (
          ("html" === l.space && "svg" === u && ((s = at), (e.schema = s)),
          n.properties)
        )
          for (a in n.properties)
            bt.call(n.properties, a) && Ft(c, a, n.properties[a], e);
        ("ol" !== u && "ul" !== u) || e.listDepth++;
        const f = wt(e, n);
        ("ol" !== u && "ul" !== u) || e.listDepth--, (e.schema = l);
        const p = n.position || {
            start: { line: null, column: null, offset: null },
            end: { line: null, column: null, offset: null },
          },
          h = o.components && bt.call(o.components, u) ? o.components[u] : u,
          d = "string" === typeof h || h === i.Fragment;
        if (!pt.isValidElementType(h))
          throw new TypeError(
            `Component for name \`${u}\` not defined or is not renderable`
          );
        if (
          ((c.key = [u, p.start.line, p.start.column, t].join("-")),
          "a" === u &&
            o.linkTarget &&
            (c.target =
              "function" === typeof o.linkTarget
                ? o.linkTarget(
                    String(c.href || ""),
                    n.children,
                    "string" === typeof c.title ? c.title : null
                  )
                : o.linkTarget),
          "a" === u &&
            o.transformLinkUri &&
            (c.href = o.transformLinkUri(
              String(c.href || ""),
              n.children,
              "string" === typeof c.title ? c.title : null
            )),
          d ||
            "code" !== u ||
            "element" !== r.type ||
            "pre" === r.tagName ||
            (c.inline = !0),
          d ||
            ("h1" !== u &&
              "h2" !== u &&
              "h3" !== u &&
              "h4" !== u &&
              "h5" !== u &&
              "h6" !== u) ||
            (c.level = Number.parseInt(u.charAt(1), 10)),
          "img" === u &&
            o.transformImageUri &&
            (c.src = o.transformImageUri(
              String(c.src || ""),
              String(c.alt || ""),
              "string" === typeof c.title ? c.title : null
            )),
          !d && "li" === u && "element" === r.type)
        ) {
          const e = (function (e) {
            let n = -1;
            for (; ++n < e.children.length; ) {
              const t = e.children[n];
              if ("element" === t.type && "input" === t.tagName) return t;
            }
            return null;
          })(n);
          (c.checked =
            e && e.properties ? Boolean(e.properties.checked) : null),
            (c.index = At(r, n)),
            (c.ordered = "ol" === r.tagName);
        }
        var m;
        return (
          d ||
            ("ol" !== u && "ul" !== u) ||
            ((c.ordered = "ol" === u), (c.depth = e.listDepth)),
          ("td" !== u && "th" !== u) ||
            (c.align &&
              (c.style || (c.style = {}),
              (c.style.textAlign = c.align),
              delete c.align),
            d || (c.isHeader = "th" === u)),
          d ||
            "tr" !== u ||
            "element" !== r.type ||
            (c.isHeader = Boolean("thead" === r.tagName)),
          o.sourcePos &&
            (c["data-sourcepos"] = [
              (m = p).start.line,
              ":",
              m.start.column,
              "-",
              m.end.line,
              ":",
              m.end.column,
            ]
              .map((e) => String(e))
              .join("")),
          !d && o.rawSourcePos && (c.sourcePosition = n.position),
          !d &&
            o.includeElementIndex &&
            ((c.index = At(r, n)), (c.siblingCount = At(r))),
          d || (c.node = n),
          f.length > 0 ? i.createElement(h, c, f) : i.createElement(h, c)
        );
      }
      function At(e, n) {
        let t = -1,
          r = 0;
        for (; ++t < e.children.length && e.children[t] !== n; )
          "element" === e.children[t].type && r++;
        return r;
      }
      function Ft(e, n, t, r) {
        const o = (function (e, n) {
          const t = Bn(n);
          let r = n,
            o = _n;
          if (t in e.normal) return e.property[e.normal[t]];
          if (t.length > 4 && "data" === t.slice(0, 4) && dt.test(n)) {
            if ("-" === n.charAt(4)) {
              const e = n.slice(5).replace(mt, kt);
              r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
            } else {
              const e = n.slice(4);
              if (!mt.test(e)) {
                let t = e.replace(gt, yt);
                "-" !== t.charAt(0) && (t = "-" + t), (n = "data" + t);
              }
            }
            o = Qn;
          }
          return new o(r, n);
        })(r.schema, n);
        let i = t;
        null !== i &&
          void 0 !== i &&
          i === i &&
          (Array.isArray(i) &&
            (i = o.commaSeparated
              ? (function (e, n) {
                  var t = n || {};
                  return (
                    "" === e[e.length - 1] && (e = e.concat("")),
                    e
                      .join(
                        (t.padRight ? " " : "") +
                          "," +
                          (!1 === t.padLeft ? "" : " ")
                      )
                      .trim()
                  );
                })(i)
              : i.join(" ").trim()),
          "style" === o.property &&
            "string" === typeof i &&
            (i = (function (e) {
              const n = {};
              try {
                vt(e, t);
              } catch {}
              return n;
              function t(e, t) {
                const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                n[r.replace(/-([a-z])/g, Et)] = t;
              }
            })(i)),
          o.space && o.property
            ? (e[bt.call(xt, o.property) ? xt[o.property] : o.property] = i)
            : o.attribute && (e[o.attribute] = i));
      }
      function Et(e, n) {
        return n.toUpperCase();
      }
      const Dt = {}.hasOwnProperty,
        Tt = {
          plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
          renderers: { to: "components", id: "change-renderers-to-components" },
          astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
          allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
          escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
          source: { to: "children", id: "change-source-to-children" },
          allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
        };
      function zt(e) {
        for (const i in Tt)
          if (Dt.call(Tt, i) && Dt.call(e, i)) {
            const e = Tt[i];
            console.warn(
              `[react-markdown] Warning: please ${
                e.to ? `use \`${e.to}\` instead of` : "remove"
              } \`${i}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
                e.id
              }> for more info)`
            ),
              delete Tt[i];
          }
        const n = F()
            .use(ln)
            .use(e.remarkPlugins || [])
            .use(In, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
            .use(e.rehypePlugins || [])
            .use(st, e),
          t = new k();
        "string" === typeof e.children
          ? (t.value = e.children)
          : void 0 !== e.children &&
            null !== e.children &&
            console.warn(
              `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
            );
        const r = n.runSync(n.parse(t), t);
        if ("root" !== r.type) throw new TypeError("Expected a `root` node");
        let o = i.createElement(
          i.Fragment,
          {},
          wt({ options: e, schema: ct, listDepth: 0 }, r)
        );
        return (
          e.className &&
            (o = i.createElement("div", { className: e.className }, o)),
          o
        );
      }
      (zt.defaultProps = {
        transformLinkUri: function (e) {
          const n = (e || "").trim(),
            t = n.charAt(0);
          if ("#" === t || "/" === t) return n;
          const r = n.indexOf(":");
          if (-1 === r) return n;
          let o = -1;
          for (; ++o < ft.length; ) {
            const e = ft[o];
            if (r === e.length && n.slice(0, e.length).toLowerCase() === e)
              return n;
          }
          return (
            (o = n.indexOf("?")),
            -1 !== o && r > o
              ? n
              : ((o = n.indexOf("#")),
                -1 !== o && r > o ? n : "javascript:void(0)")
          );
        },
      }),
        (zt.propTypes = {
          children: Mn.string,
          className: Mn.string,
          allowElement: Mn.func,
          allowedElements: Mn.arrayOf(Mn.string),
          disallowedElements: Mn.arrayOf(Mn.string),
          unwrapDisallowed: Mn.bool,
          remarkPlugins: Mn.arrayOf(
            Mn.oneOfType([
              Mn.object,
              Mn.func,
              Mn.arrayOf(
                Mn.oneOfType([
                  Mn.bool,
                  Mn.string,
                  Mn.object,
                  Mn.func,
                  Mn.arrayOf(Mn.any),
                ])
              ),
            ])
          ),
          rehypePlugins: Mn.arrayOf(
            Mn.oneOfType([
              Mn.object,
              Mn.func,
              Mn.arrayOf(
                Mn.oneOfType([
                  Mn.bool,
                  Mn.string,
                  Mn.object,
                  Mn.func,
                  Mn.arrayOf(Mn.any),
                ])
              ),
            ])
          ),
          sourcePos: Mn.bool,
          rawSourcePos: Mn.bool,
          skipHtml: Mn.bool,
          includeElementIndex: Mn.bool,
          transformLinkUri: Mn.oneOfType([Mn.func, Mn.bool]),
          linkTarget: Mn.oneOfType([Mn.func, Mn.string]),
          transformImageUri: Mn.func,
          components: Mn.object,
        });
    },
    45843: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Pe;
        },
      });
      var r = t(4663),
        o = t(75364);
      const i = {
          tokenize: function (e, n, t) {
            return function (n) {
              return e.consume(n), r;
            };
            function r(n) {
              return 87 === n || 119 === n ? (e.consume(n), i) : t(n);
            }
            function i(n) {
              return 87 === n || 119 === n ? (e.consume(n), l) : t(n);
            }
            function l(n) {
              return 46 === n ? (e.consume(n), u) : t(n);
            }
            function u(e) {
              return null === e || (0, o.Ch)(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        l = {
          tokenize: function (e, n, t) {
            let r, i;
            return l;
            function l(n) {
              return 38 === n
                ? e.check(a, s, u)(n)
                : 46 === n || 95 === n
                ? e.check(c, s, u)(n)
                : null === n ||
                  (0, o.Av)(n) ||
                  (0, o.B8)(n) ||
                  (45 !== n && (0, o.Xh)(n))
                ? s(n)
                : (e.consume(n), l);
            }
            function u(n) {
              return 46 === n
                ? ((i = r), (r = void 0), e.consume(n), l)
                : (95 === n && (r = !0), e.consume(n), l);
            }
            function s(e) {
              return i || r ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        u = {
          tokenize: function (e, n) {
            let t = 0;
            return r;
            function r(l) {
              return 38 === l
                ? e.check(a, n, o)(l)
                : (40 === l && t++,
                  41 === l
                    ? e.check(c, i, o)(l)
                    : y(l)
                    ? n(l)
                    : g(l)
                    ? e.check(c, n, o)(l)
                    : (e.consume(l), r));
            }
            function o(n) {
              return e.consume(n), r;
            }
            function i(e) {
              return t--, t < 0 ? n(e) : o(e);
            }
          },
          partial: !0,
        },
        c = {
          tokenize: function (e, n, t) {
            return function (n) {
              return e.consume(n), r;
            };
            function r(o) {
              return g(o) ? (e.consume(o), r) : y(o) ? n(o) : t(o);
            }
          },
          partial: !0,
        },
        a = {
          tokenize: function (e, n, t) {
            return function (n) {
              return e.consume(n), r;
            };
            function r(n) {
              return (0, o.jv)(n)
                ? (e.consume(n), r)
                : 59 === n
                ? (e.consume(n), i)
                : t(n);
            }
            function i(e) {
              return y(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        s = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              if ((87 !== n && 119 !== n) || !x(r.previous) || C(r.events))
                return t(n);
              return (
                e.enter("literalAutolink"),
                e.enter("literalAutolinkWww"),
                e.check(i, e.attempt(l, e.attempt(u, o), t), t)(n)
              );
            };
            function o(t) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(t)
              );
            }
          },
          previous: x,
        },
        f = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              if ((72 !== n && 104 !== n) || !v(r.previous) || C(r.events))
                return t(n);
              return (
                e.enter("literalAutolink"),
                e.enter("literalAutolinkHttp"),
                e.consume(n),
                i
              );
            };
            function i(n) {
              return 84 === n || 116 === n ? (e.consume(n), c) : t(n);
            }
            function c(n) {
              return 84 === n || 116 === n ? (e.consume(n), a) : t(n);
            }
            function a(n) {
              return 80 === n || 112 === n ? (e.consume(n), s) : t(n);
            }
            function s(n) {
              return 83 === n || 115 === n ? (e.consume(n), f) : f(n);
            }
            function f(n) {
              return 58 === n ? (e.consume(n), p) : t(n);
            }
            function p(n) {
              return 47 === n ? (e.consume(n), h) : t(n);
            }
            function h(n) {
              return 47 === n ? (e.consume(n), d) : t(n);
            }
            function d(n) {
              return null === n || (0, o.Av)(n) || (0, o.B8)(n) || (0, o.Xh)(n)
                ? t(n)
                : e.attempt(l, e.attempt(u, m), t)(n);
            }
            function m(t) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(t)
              );
            }
          },
          previous: v,
        },
        p = {
          tokenize: function (e, n, t) {
            const r = this;
            let i, l;
            return function (n) {
              if (!k(n) || !b(r.previous) || C(r.events)) return t(n);
              return (
                e.enter("literalAutolink"),
                e.enter("literalAutolinkEmail"),
                u(n)
              );
            };
            function u(n) {
              return k(n)
                ? (e.consume(n), u)
                : 64 === n
                ? (e.consume(n), a)
                : t(n);
            }
            function a(n) {
              return 46 === n
                ? e.check(c, h, s)(n)
                : 45 === n || 95 === n
                ? e.check(c, t, f)(n)
                : (0, o.H$)(n)
                ? (!l && (0, o.pY)(n) && (l = !0), e.consume(n), a)
                : h(n);
            }
            function s(n) {
              return e.consume(n), (i = !0), (l = void 0), a;
            }
            function f(n) {
              return e.consume(n), p;
            }
            function p(n) {
              return 46 === n ? e.check(c, t, s)(n) : a(n);
            }
            function h(r) {
              return i && !l
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  n(r))
                : t(r);
            }
          },
          previous: b,
        },
        h = {},
        d = { text: h };
      let m = 48;
      for (; m < 123; )
        (h[m] = p), m++, 58 === m ? (m = 65) : 91 === m && (m = 97);
      function g(e) {
        return (
          33 === e ||
          34 === e ||
          39 === e ||
          41 === e ||
          42 === e ||
          44 === e ||
          46 === e ||
          58 === e ||
          59 === e ||
          60 === e ||
          63 === e ||
          95 === e ||
          126 === e
        );
      }
      function y(e) {
        return null === e || 60 === e || (0, o.z3)(e);
      }
      function k(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || (0, o.H$)(e);
      }
      function x(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          126 === e ||
          (0, o.z3)(e)
        );
      }
      function v(e) {
        return null === e || !(0, o.jv)(e);
      }
      function b(e) {
        return 47 !== e && v(e);
      }
      function C(e) {
        let n = e.length,
          t = !1;
        for (; n--; ) {
          const r = e[n][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            t = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            t = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !t &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          t
        );
      }
      (h[43] = p),
        (h[45] = p),
        (h[46] = p),
        (h[95] = p),
        (h[72] = [p, f]),
        (h[104] = [p, f]),
        (h[87] = [p, s]),
        (h[119] = [p, s]);
      var w = t(23402),
        S = t(8387),
        A = t(11098);
      const F = {
        tokenize: function (e, n, t) {
          const r = this;
          return (0, S.f)(
            e,
            function (e) {
              const o = r.events[r.events.length - 1];
              return o &&
                "gfmFootnoteDefinitionIndent" === o[1].type &&
                4 === o[2].sliceSerialize(o[1], !0).length
                ? n(e)
                : t(e);
            },
            "gfmFootnoteDefinitionIndent",
            5
          );
        },
        partial: !0,
      };
      function E(e, n, t) {
        const r = this;
        let o = r.events.length;
        const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let l;
        for (; o--; ) {
          const e = r.events[o][1];
          if ("labelImage" === e.type) {
            l = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (o) {
          if (!l || !l._balanced) return t(o);
          const u = (0, A.d)(r.sliceSerialize({ start: l.end, end: r.now() }));
          if (94 !== u.charCodeAt(0) || !i.includes(u.slice(1))) return t(o);
          return (
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(o),
            e.exit("gfmFootnoteCallLabelMarker"),
            n(o)
          );
        };
      }
      function D(e, n) {
        let t,
          r = e.length;
        for (; r--; )
          if ("labelImage" === e[r][1].type && "enter" === e[r][0]) {
            t = e[r][1];
            break;
          }
        (e[r + 1][1].type = "data"),
          (e[r + 3][1].type = "gfmFootnoteCallLabelMarker");
        const o = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[r + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[r + 3][1].end),
            end: Object.assign({}, e[r + 3][1].end),
          };
        i.end.column++, i.end.offset++, i.end._bufferIndex++;
        const l = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          u = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, l.start),
            end: Object.assign({}, l.end),
          },
          c = [
            e[r + 1],
            e[r + 2],
            ["enter", o, n],
            e[r + 3],
            e[r + 4],
            ["enter", i, n],
            ["exit", i, n],
            ["enter", l, n],
            ["enter", u, n],
            ["exit", u, n],
            ["exit", l, n],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", o, n],
          ];
        return e.splice(r, e.length - r + 1, ...c), e;
      }
      function T(e, n, t) {
        const r = this,
          i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let l,
          u = 0;
        return function (n) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(n),
            e.exit("gfmFootnoteCallLabelMarker"),
            c
          );
        };
        function c(n) {
          return 94 !== n
            ? t(n)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(n),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              a);
        }
        function a(c) {
          let f;
          return null === c || 91 === c || u++ > 999
            ? t(c)
            : 93 === c
            ? l
              ? (e.exit("chunkString"),
                (f = e.exit("gfmFootnoteCallString")),
                i.includes((0, A.d)(r.sliceSerialize(f)))
                  ? (function (t) {
                      return (
                        e.enter("gfmFootnoteCallLabelMarker"),
                        e.consume(t),
                        e.exit("gfmFootnoteCallLabelMarker"),
                        e.exit("gfmFootnoteCall"),
                        n
                      );
                    })(c)
                  : t(c))
              : t(c)
            : (e.consume(c), (0, o.z3)(c) || (l = !0), 92 === c ? s : a);
        }
        function s(n) {
          return 91 === n || 92 === n || 93 === n
            ? (e.consume(n), u++, a)
            : a(n);
        }
      }
      function z(e, n, t) {
        const r = this,
          i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let l,
          u,
          c = 0;
        return function (n) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(n),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            a
          );
        };
        function a(n) {
          return 94 === n
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(n),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              s)
            : t(n);
        }
        function s(n) {
          let i;
          return null === n || 91 === n || c > 999
            ? t(n)
            : 93 === n
            ? u
              ? ((i = e.exit("gfmFootnoteDefinitionLabelString")),
                (l = (0, A.d)(r.sliceSerialize(i))),
                e.enter("gfmFootnoteDefinitionLabelMarker"),
                e.consume(n),
                e.exit("gfmFootnoteDefinitionLabelMarker"),
                e.exit("gfmFootnoteDefinitionLabel"),
                h)
              : t(n)
            : (0, o.Ch)(n)
            ? (e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              c++,
              s)
            : ((e.enter("chunkString").contentType = "string"), f(n));
        }
        function f(n) {
          return null === n || (0, o.Ch)(n) || 91 === n || 93 === n || c > 999
            ? (e.exit("chunkString"), s(n))
            : ((0, o.z3)(n) || (u = !0), c++, e.consume(n), 92 === n ? p : f);
        }
        function p(n) {
          return 91 === n || 92 === n || 93 === n
            ? (e.consume(n), c++, f)
            : f(n);
        }
        function h(n) {
          return 58 === n
            ? (e.enter("definitionMarker"),
              e.consume(n),
              e.exit("definitionMarker"),
              (0, S.f)(e, d, "gfmFootnoteDefinitionWhitespace"))
            : t(n);
        }
        function d(e) {
          return i.includes(l) || i.push(l), n(e);
        }
      }
      function O(e, n, t) {
        return e.check(w.w, n, e.attempt(F, n, t));
      }
      function P(e) {
        e.exit("gfmFootnoteDefinition");
      }
      var L = t(21905),
        I = t(62987),
        M = t(87961);
      function R(e = {}) {
        let n = e.singleTilde;
        const t = {
          tokenize: function (e, t, r) {
            const o = this.previous,
              i = this.events;
            let l = 0;
            return function (n) {
              if (126 === o && "characterEscape" !== i[i.length - 1][1].type)
                return r(n);
              return e.enter("strikethroughSequenceTemporary"), u(n);
            };
            function u(i) {
              const c = (0, I.r)(o);
              if (126 === i) return l > 1 ? r(i) : (e.consume(i), l++, u);
              if (l < 2 && !n) return r(i);
              const a = e.exit("strikethroughSequenceTemporary"),
                s = (0, I.r)(i);
              return (
                (a._open = !s || (2 === s && Boolean(c))),
                (a._close = !c || (2 === c && Boolean(s))),
                t(i)
              );
            }
          },
          resolveAll: function (e, n) {
            let t = -1;
            for (; ++t < e.length; )
              if (
                "enter" === e[t][0] &&
                "strikethroughSequenceTemporary" === e[t][1].type &&
                e[t][1]._close
              ) {
                let r = t;
                for (; r--; )
                  if (
                    "exit" === e[r][0] &&
                    "strikethroughSequenceTemporary" === e[r][1].type &&
                    e[r][1]._open &&
                    e[t][1].end.offset - e[t][1].start.offset ===
                      e[r][1].end.offset - e[r][1].start.offset
                  ) {
                    (e[t][1].type = "strikethroughSequence"),
                      (e[r][1].type = "strikethroughSequence");
                    const o = {
                        type: "strikethrough",
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[t][1].end),
                      },
                      i = {
                        type: "strikethroughText",
                        start: Object.assign({}, e[r][1].end),
                        end: Object.assign({}, e[t][1].start),
                      },
                      l = [
                        ["enter", o, n],
                        ["enter", e[r][1], n],
                        ["exit", e[r][1], n],
                        ["enter", i, n],
                      ];
                    (0, L.d)(
                      l,
                      l.length,
                      0,
                      (0, M.C)(
                        n.parser.constructs.insideSpan.null,
                        e.slice(r + 1, t),
                        n
                      )
                    ),
                      (0, L.d)(l, l.length, 0, [
                        ["exit", i, n],
                        ["enter", e[t][1], n],
                        ["exit", e[t][1], n],
                        ["exit", o, n],
                      ]),
                      (0, L.d)(e, r - 1, t - r + 3, l),
                      (t = r + l.length - 2);
                    break;
                  }
              }
            t = -1;
            for (; ++t < e.length; )
              "strikethroughSequenceTemporary" === e[t][1].type &&
                (e[t][1].type = "data");
            return e;
          },
        };
        return (
          (null !== n && void 0 !== n) || (n = !0),
          {
            text: { 126: t },
            insideSpan: { null: [t] },
            attentionMarkers: { null: [126] },
          }
        );
      }
      const j = {
          flow: {
            null: {
              tokenize: function (e, n, t) {
                const r = this,
                  i = [];
                let l,
                  u,
                  c = 0;
                return function (n) {
                  if (
                    ((e.enter("table")._align = i),
                    e.enter("tableHead"),
                    e.enter("tableRow"),
                    124 === n)
                  )
                    return a(n);
                  return c++, e.enter("temporaryTableCellContent"), p(n);
                };
                function a(n) {
                  return (
                    e.enter("tableCellDivider"),
                    e.consume(n),
                    e.exit("tableCellDivider"),
                    (l = !0),
                    s
                  );
                }
                function s(n) {
                  return null === n || (0, o.Ch)(n)
                    ? (function (n) {
                        if (null === n) return t(n);
                        e.exit("tableRow"), e.exit("tableHead");
                        const o = r.interrupt;
                        return (
                          (r.interrupt = !0),
                          e.attempt(
                            { tokenize: z, partial: !0 },
                            function (n) {
                              return (
                                (r.interrupt = o),
                                e.enter("tableDelimiterRow"),
                                d(n)
                              );
                            },
                            function (e) {
                              return (r.interrupt = o), t(e);
                            }
                          )(n)
                        );
                      })(n)
                    : (0, o.xz)(n)
                    ? (e.enter("whitespace"), e.consume(n), f)
                    : (l && ((l = void 0), c++),
                      124 === n
                        ? a(n)
                        : (e.enter("temporaryTableCellContent"), p(n)));
                }
                function f(n) {
                  return (0, o.xz)(n)
                    ? (e.consume(n), f)
                    : (e.exit("whitespace"), s(n));
                }
                function p(n) {
                  return null === n || 124 === n || (0, o.z3)(n)
                    ? (e.exit("temporaryTableCellContent"), s(n))
                    : (e.consume(n), 92 === n ? h : p);
                }
                function h(n) {
                  return 92 === n || 124 === n ? (e.consume(n), p) : p(n);
                }
                function d(n) {
                  return null === n || (0, o.Ch)(n)
                    ? x(n)
                    : (0, o.xz)(n)
                    ? (e.enter("whitespace"), e.consume(n), m)
                    : 45 === n
                    ? (e.enter("tableDelimiterFiller"),
                      e.consume(n),
                      (u = !0),
                      i.push("none"),
                      g)
                    : 58 === n
                    ? (e.enter("tableDelimiterAlignment"),
                      e.consume(n),
                      e.exit("tableDelimiterAlignment"),
                      i.push("left"),
                      y)
                    : 124 === n
                    ? (e.enter("tableCellDivider"),
                      e.consume(n),
                      e.exit("tableCellDivider"),
                      d)
                    : t(n);
                }
                function m(n) {
                  return (0, o.xz)(n)
                    ? (e.consume(n), m)
                    : (e.exit("whitespace"), d(n));
                }
                function g(n) {
                  return 45 === n
                    ? (e.consume(n), g)
                    : (e.exit("tableDelimiterFiller"),
                      58 === n
                        ? (e.enter("tableDelimiterAlignment"),
                          e.consume(n),
                          e.exit("tableDelimiterAlignment"),
                          (i[i.length - 1] =
                            "left" === i[i.length - 1] ? "center" : "right"),
                          k)
                        : d(n));
                }
                function y(n) {
                  return 45 === n
                    ? (e.enter("tableDelimiterFiller"),
                      e.consume(n),
                      (u = !0),
                      g)
                    : t(n);
                }
                function k(n) {
                  return null === n || (0, o.Ch)(n)
                    ? x(n)
                    : (0, o.xz)(n)
                    ? (e.enter("whitespace"), e.consume(n), m)
                    : 124 === n
                    ? (e.enter("tableCellDivider"),
                      e.consume(n),
                      e.exit("tableCellDivider"),
                      d)
                    : t(n);
                }
                function x(n) {
                  return (
                    e.exit("tableDelimiterRow"),
                    u && c === i.length
                      ? null === n
                        ? v(n)
                        : e.check(
                            B,
                            v,
                            e.attempt(
                              { tokenize: z, partial: !0 },
                              (0, S.f)(e, b, "linePrefix", 4),
                              v
                            )
                          )(n)
                      : t(n)
                  );
                }
                function v(t) {
                  return e.exit("table"), n(t);
                }
                function b(n) {
                  return e.enter("tableBody"), C(n);
                }
                function C(n) {
                  return (
                    e.enter("tableRow"),
                    124 === n
                      ? w(n)
                      : (e.enter("temporaryTableCellContent"), E(n))
                  );
                }
                function w(n) {
                  return (
                    e.enter("tableCellDivider"),
                    e.consume(n),
                    e.exit("tableCellDivider"),
                    A
                  );
                }
                function A(n) {
                  return null === n || (0, o.Ch)(n)
                    ? (function (n) {
                        if ((e.exit("tableRow"), null === n)) return T(n);
                        return e.check(
                          B,
                          T,
                          e.attempt(
                            { tokenize: z, partial: !0 },
                            (0, S.f)(e, C, "linePrefix", 4),
                            T
                          )
                        )(n);
                      })(n)
                    : (0, o.xz)(n)
                    ? (e.enter("whitespace"), e.consume(n), F)
                    : 124 === n
                    ? w(n)
                    : (e.enter("temporaryTableCellContent"), E(n));
                }
                function F(n) {
                  return (0, o.xz)(n)
                    ? (e.consume(n), F)
                    : (e.exit("whitespace"), A(n));
                }
                function E(n) {
                  return null === n || 124 === n || (0, o.z3)(n)
                    ? (e.exit("temporaryTableCellContent"), A(n))
                    : (e.consume(n), 92 === n ? D : E);
                }
                function D(n) {
                  return 92 === n || 124 === n ? (e.consume(n), E) : E(n);
                }
                function T(n) {
                  return e.exit("tableBody"), v(n);
                }
                function z(e, n, t) {
                  return function (n) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(n),
                      e.exit("lineEnding"),
                      (0, S.f)(e, i, "linePrefix")
                    );
                  };
                  function i(i) {
                    if (
                      r.parser.lazy[r.now().line] ||
                      null === i ||
                      (0, o.Ch)(i)
                    )
                      return t(i);
                    const l = r.events[r.events.length - 1];
                    return !r.parser.constructs.disable.null.includes(
                      "codeIndented"
                    ) &&
                      l &&
                      "linePrefix" === l[1].type &&
                      l[2].sliceSerialize(l[1], !0).length >= 4
                      ? t(i)
                      : ((r._gfmTableDynamicInterruptHack = !0),
                        e.check(
                          r.parser.constructs.flow,
                          function (e) {
                            return (r._gfmTableDynamicInterruptHack = !1), t(e);
                          },
                          function (e) {
                            return (r._gfmTableDynamicInterruptHack = !1), n(e);
                          }
                        )(i));
                  }
                }
              },
              resolve: function (e, n) {
                let t,
                  r,
                  o,
                  i,
                  l,
                  u,
                  c,
                  a = -1;
                for (; ++a < e.length; ) {
                  const s = e[a][1];
                  if (
                    o &&
                    ("temporaryTableCellContent" === s.type &&
                      ((i = i || a), (l = a)),
                    ("tableCellDivider" === s.type || "tableRow" === s.type) &&
                      l)
                  ) {
                    const t = {
                        type: "tableContent",
                        start: e[i][1].start,
                        end: e[l][1].end,
                      },
                      r = {
                        type: "chunkText",
                        start: t.start,
                        end: t.end,
                        contentType: "text",
                      };
                    e.splice(
                      i,
                      l - i + 1,
                      ["enter", t, n],
                      ["enter", r, n],
                      ["exit", r, n],
                      ["exit", t, n]
                    ),
                      (a -= l - i - 3),
                      (i = void 0),
                      (l = void 0);
                  }
                  if (
                    "exit" === e[a][0] &&
                    void 0 !== u &&
                    u + (c ? 0 : 1) < a &&
                    ("tableCellDivider" === s.type ||
                      ("tableRow" === s.type &&
                        (u + 3 < a || "whitespace" !== e[u][1].type)))
                  ) {
                    const o = {
                      type: r
                        ? "tableDelimiter"
                        : t
                        ? "tableHeader"
                        : "tableData",
                      start: e[u][1].start,
                      end: e[a][1].end,
                    };
                    e.splice(a + ("tableCellDivider" === s.type ? 1 : 0), 0, [
                      "exit",
                      o,
                      n,
                    ]),
                      e.splice(u, 0, ["enter", o, n]),
                      (a += 2),
                      (u = a + 1),
                      (c = !0);
                  }
                  "tableRow" === s.type &&
                    ((o = "enter" === e[a][0]), o && ((u = a + 1), (c = !1))),
                    "tableDelimiterRow" === s.type &&
                      ((r = "enter" === e[a][0]), r && ((u = a + 1), (c = !1))),
                    "tableHead" === s.type && (t = "enter" === e[a][0]);
                }
                return e;
              },
            },
          },
        },
        B = {
          tokenize: function (e, n, t) {
            let r = 0;
            return function (n) {
              return e.enter("check"), e.consume(n), i;
            };
            function i(l) {
              return -1 === l || 32 === l
                ? (e.consume(l), r++, 4 === r ? n : i)
                : null === l || (0, o.z3)(l)
                ? n(l)
                : t(l);
            }
          },
          partial: !0,
        };
      const _ = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              if (null !== r.previous || !r._gfmTasklistFirstContentOfListItem)
                return t(n);
              return (
                e.enter("taskListCheck"),
                e.enter("taskListCheckMarker"),
                e.consume(n),
                e.exit("taskListCheckMarker"),
                i
              );
            };
            function i(n) {
              return (0, o.z3)(n)
                ? (e.enter("taskListCheckValueUnchecked"),
                  e.consume(n),
                  e.exit("taskListCheckValueUnchecked"),
                  l)
                : 88 === n || 120 === n
                ? (e.enter("taskListCheckValueChecked"),
                  e.consume(n),
                  e.exit("taskListCheckValueChecked"),
                  l)
                : t(n);
            }
            function l(r) {
              return 93 === r
                ? (e.enter("taskListCheckMarker"),
                  e.consume(r),
                  e.exit("taskListCheckMarker"),
                  e.exit("taskListCheck"),
                  e.check({ tokenize: N }, n, t))
                : t(r);
            }
          },
        },
        H = { text: { 91: _ } };
      function N(e, n, t) {
        const r = this;
        return (0, S.f)(
          e,
          function (e) {
            const i = r.events[r.events.length - 1];
            return ((i && "whitespace" === i[1].type) || (0, o.Ch)(e)) &&
              null !== e
              ? n(e)
              : t(e);
          },
          "whitespace"
        );
      }
      function U(e, n) {
        const t = String(e);
        if ("string" !== typeof n) throw new TypeError("Expected character");
        let r = 0,
          o = t.indexOf(n);
        for (; -1 !== o; ) r++, (o = t.indexOf(n, o + n.length));
        return r;
      }
      var V = t(55765),
        $ = t(19645);
      const q = {}.hasOwnProperty,
        W = function (e, n, t, r) {
          let o, i;
          "string" === typeof n || n instanceof RegExp
            ? ((i = [[n, t]]), (o = r))
            : ((i = n), (o = t)),
            o || (o = {});
          const l = (0, $.O)(o.ignore || []),
            u = (function (e) {
              const n = [];
              if ("object" !== typeof e)
                throw new TypeError("Expected array or object as schema");
              if (Array.isArray(e)) {
                let t = -1;
                for (; ++t < e.length; ) n.push([Z(e[t][0]), Y(e[t][1])]);
              } else {
                let t;
                for (t in e) q.call(e, t) && n.push([Z(t), Y(e[t])]);
              }
              return n;
            })(i);
          let c = -1;
          for (; ++c < u.length; ) (0, V.S4)(e, "text", a);
          return e;
          function a(e, n) {
            let t,
              r = -1;
            for (; ++r < n.length; ) {
              const e = n[r];
              if (l(e, t ? t.children.indexOf(e) : void 0, t)) return;
              t = e;
            }
            if (t)
              return (function (e, n) {
                const t = n[n.length - 1],
                  r = u[c][0],
                  o = u[c][1];
                let i = 0;
                const l = t.children.indexOf(e);
                let a,
                  s = !1,
                  f = [];
                r.lastIndex = 0;
                let p = r.exec(e.value);
                for (; p; ) {
                  a = p.index;
                  const t = {
                    index: p.index,
                    input: p.input,
                    stack: [...n, e],
                  };
                  let l = o(...p, t);
                  if (
                    ("string" === typeof l &&
                      (l = l.length > 0 ? { type: "text", value: l } : void 0),
                    !1 !== l &&
                      (i !== a &&
                        f.push({ type: "text", value: e.value.slice(i, a) }),
                      Array.isArray(l) ? f.push(...l) : l && f.push(l),
                      (i = a + p[0].length),
                      (s = !0)),
                    !r.global)
                  )
                    break;
                  p = r.exec(e.value);
                }
                s
                  ? (i < e.value.length &&
                      f.push({ type: "text", value: e.value.slice(i) }),
                    t.children.splice(l, 1, ...f))
                  : (f = [e]);
                return l + f.length;
              })(e, n);
          }
        };
      function Z(e) {
        return "string" === typeof e
          ? new RegExp(
              (function (e) {
                if ("string" !== typeof e)
                  throw new TypeError("Expected a string");
                return e
                  .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                  .replace(/-/g, "\\x2d");
              })(e),
              "g"
            )
          : e;
      }
      function Y(e) {
        return "function" === typeof e ? e : () => e;
      }
      const X = "phrasing",
        Q = ["autolink", "link", "image", "label"],
        K = {
          transforms: [
            function (e) {
              W(
                e,
                [
                  [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, ee],
                  [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, ne],
                ],
                { ignore: ["link", "linkReference"] }
              );
            },
          ],
          enter: {
            literalAutolink: function (e) {
              this.enter(
                { type: "link", title: null, url: "", children: [] },
                e
              );
            },
            literalAutolinkEmail: G,
            literalAutolinkHttp: G,
            literalAutolinkWww: G,
          },
          exit: {
            literalAutolink: function (e) {
              this.exit(e);
            },
            literalAutolinkEmail: function (e) {
              this.config.exit.autolinkEmail.call(this, e);
            },
            literalAutolinkHttp: function (e) {
              this.config.exit.autolinkProtocol.call(this, e);
            },
            literalAutolinkWww: function (e) {
              this.config.exit.data.call(this, e);
              this.stack[this.stack.length - 1].url =
                "http://" + this.sliceSerialize(e);
            },
          },
        },
        J = {
          unsafe: [
            {
              character: "@",
              before: "[+\\-.\\w]",
              after: "[\\-.\\w]",
              inConstruct: X,
              notInConstruct: Q,
            },
            {
              character: ".",
              before: "[Ww]",
              after: "[\\-.\\w]",
              inConstruct: X,
              notInConstruct: Q,
            },
            {
              character: ":",
              before: "[ps]",
              after: "\\/",
              inConstruct: X,
              notInConstruct: Q,
            },
          ],
        };
      function G(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function ee(e, n, t, r, o) {
        let i = "";
        if (!te(o)) return !1;
        if (
          (/^w/i.test(n) && ((t = n + t), (n = ""), (i = "http://")),
          !(function (e) {
            const n = e.split(".");
            if (
              n.length < 2 ||
              (n[n.length - 1] &&
                (/_/.test(n[n.length - 1]) ||
                  !/[a-zA-Z\d]/.test(n[n.length - 1]))) ||
              (n[n.length - 2] &&
                (/_/.test(n[n.length - 2]) ||
                  !/[a-zA-Z\d]/.test(n[n.length - 2])))
            )
              return !1;
            return !0;
          })(t))
        )
          return !1;
        const l = (function (e) {
          const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
          let t, r, o, i;
          if (n)
            for (
              e = e.slice(0, n.index),
                i = n[0],
                t = i.indexOf(")"),
                r = U(e, "("),
                o = U(e, ")");
              -1 !== t && r > o;

            )
              (e += i.slice(0, t + 1)),
                (i = i.slice(t + 1)),
                (t = i.indexOf(")")),
                o++;
          return [e, i];
        })(t + r);
        if (!l[0]) return !1;
        const u = {
          type: "link",
          title: null,
          url: i + n + l[0],
          children: [{ type: "text", value: n + l[0] }],
        };
        return l[1] ? [u, { type: "text", value: l[1] }] : u;
      }
      function ne(e, n, t, r) {
        return (
          !(!te(r, !0) || /[_-\d]$/.test(t)) && {
            type: "link",
            title: null,
            url: "mailto:" + n + "@" + t,
            children: [{ type: "text", value: n + "@" + t }],
          }
        );
      }
      function te(e, n) {
        const t = e.input.charCodeAt(e.index - 1);
        return (
          (0 === e.index || (0, o.B8)(t) || (0, o.Xh)(t)) && (!n || 47 !== t)
        );
      }
      var re = t(47881);
      function oe(e) {
        return e.label || !e.identifier
          ? e.label || ""
          : (0, re.v)(e.identifier);
      }
      function ie(e) {
        const n = e || {},
          t = n.now || {};
        let r = n.lineShift || 0,
          o = t.line || 1,
          i = t.column || 1;
        return {
          move: function (e = "") {
            const n = e.split(/\r?\n|\r/g),
              t = n[n.length - 1];
            return (
              (o += n.length - 1),
              (i = 1 === n.length ? i + t.length : 1 + t.length + r),
              e
            );
          },
          current: function () {
            return { now: { line: o, column: i }, lineShift: r };
          },
          shift: function (e) {
            r += e;
          },
        };
      }
      function le(e, n, t) {
        const r = n.indexStack,
          o = e.children || [],
          i = ie(t),
          l = [];
        let u = -1;
        for (r.push(-1); ++u < o.length; ) {
          const t = o[u];
          (r[r.length - 1] = u),
            l.push(
              i.move(
                n.handle(t, e, n, { before: "\n", after: "\n", ...i.current() })
              )
            ),
            "list" !== t.type && (n.bulletLastUsed = void 0),
            u < o.length - 1 && l.push(i.move(c(t, o[u + 1])));
        }
        return r.pop(), l.join("");
        function c(t, r) {
          let o = n.join.length;
          for (; o--; ) {
            const i = n.join[o](t, r, e, n);
            if (!0 === i || 1 === i) break;
            if ("number" === typeof i) return "\n".repeat(1 + i);
            if (!1 === i) return "\n\n\x3c!----\x3e\n\n";
          }
          return "\n\n";
        }
      }
      const ue = /\r?\n|\r/g;
      function ce(e, n) {
        const t = [];
        let r,
          o = 0,
          i = 0;
        for (; (r = ue.exec(e)); )
          l(e.slice(o, r.index)),
            t.push(r[0]),
            (o = r.index + r[0].length),
            i++;
        return l(e.slice(o)), t.join("");
        function l(e) {
          t.push(n(e, i, !e));
        }
      }
      function ae(e) {
        if (!e._compiled) {
          const n =
            (e.atBreak ? "[\\r\\n][\\t ]*" : "") +
            (e.before ? "(?:" + e.before + ")" : "");
          e._compiled = new RegExp(
            (n ? "(" + n + ")" : "") +
              (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") +
              e.character +
              (e.after ? "(?:" + e.after + ")" : ""),
            "g"
          );
        }
        return e._compiled;
      }
      function se(e, n) {
        return fe(e, n.inConstruct, !0) && !fe(e, n.notInConstruct, !1);
      }
      function fe(e, n, t) {
        if (!n) return t;
        "string" === typeof n && (n = [n]);
        let r = -1;
        for (; ++r < n.length; ) if (e.includes(n[r])) return !0;
        return !1;
      }
      function pe(e, n, t) {
        const r = (t.before || "") + (n || "") + (t.after || ""),
          o = [],
          i = [],
          l = {};
        let u = -1;
        for (; ++u < e.unsafe.length; ) {
          const n = e.unsafe[u];
          if (!se(e.stack, n)) continue;
          const t = ae(n);
          let i;
          for (; (i = t.exec(r)); ) {
            const e = "before" in n || Boolean(n.atBreak),
              t = "after" in n,
              r = i.index + (e ? i[1].length : 0);
            o.includes(r)
              ? (l[r].before && !e && (l[r].before = !1),
                l[r].after && !t && (l[r].after = !1))
              : (o.push(r), (l[r] = { before: e, after: t }));
          }
        }
        o.sort(he);
        let c = t.before ? t.before.length : 0;
        const a = r.length - (t.after ? t.after.length : 0);
        for (u = -1; ++u < o.length; ) {
          const e = o[u];
          e < c ||
            e >= a ||
            (e + 1 < a &&
              o[u + 1] === e + 1 &&
              l[e].after &&
              !l[e + 1].before &&
              !l[e + 1].after) ||
            (o[u - 1] === e - 1 &&
              l[e].before &&
              !l[e - 1].before &&
              !l[e - 1].after) ||
            (c !== e && i.push(de(r.slice(c, e), "\\")),
            (c = e),
            !/[!-/:-@[-`{-~]/.test(r.charAt(e)) ||
            (t.encode && t.encode.includes(r.charAt(e)))
              ? (i.push(
                  "&#x" + r.charCodeAt(e).toString(16).toUpperCase() + ";"
                ),
                c++)
              : i.push("\\"));
        }
        return i.push(de(r.slice(c, a), t.after)), i.join("");
      }
      function he(e, n) {
        return e - n;
      }
      function de(e, n) {
        const t = /\\(?=[!-/:-@[-`{-~])/g,
          r = [],
          o = [],
          i = e + n;
        let l,
          u = -1,
          c = 0;
        for (; (l = t.exec(i)); ) r.push(l.index);
        for (; ++u < r.length; )
          c !== r[u] && o.push(e.slice(c, r[u])), o.push("\\"), (c = r[u]);
        return o.push(e.slice(c)), o.join("");
      }
      function me() {
        return (
          (e.peek = function () {
            return "[";
          }),
          {
            unsafe: [
              {
                character: "[",
                inConstruct: ["phrasing", "label", "reference"],
              },
            ],
            handlers: {
              footnoteDefinition: function (e, n, t, r) {
                const o = ie(r);
                let i = o.move("[^");
                const l = t.enter("footnoteDefinition"),
                  u = t.enter("label");
                return (
                  (i += o.move(
                    pe(t, oe(e), { ...o.current(), before: i, after: "]" })
                  )),
                  u(),
                  (i += o.move(
                    "]:" + (e.children && e.children.length > 0 ? " " : "")
                  )),
                  o.shift(4),
                  (i += o.move(
                    ce(le(e, t, o.current()), function (e, n, t) {
                      if (n) return (t ? "" : "    ") + e;
                      return e;
                    })
                  )),
                  l(),
                  i
                );
              },
              footnoteReference: e,
            },
          }
        );
        function e(e, n, t, r) {
          const o = ie(r);
          let i = o.move("[^");
          const l = t.enter("footnoteReference"),
            u = t.enter("reference");
          return (
            (i += o.move(
              pe(t, oe(e), { ...o.current(), before: i, after: "]" })
            )),
            u(),
            l(),
            (i += o.move("]")),
            i
          );
        }
      }
      function ge(e, n, t) {
        const r = n.indexStack,
          o = e.children || [],
          i = [];
        let l = -1,
          u = t.before;
        r.push(-1);
        let c = ie(t);
        for (; ++l < o.length; ) {
          const a = o[l];
          let s;
          if (((r[r.length - 1] = l), l + 1 < o.length)) {
            let t = n.handle.handlers[o[l + 1].type];
            t && t.peek && (t = t.peek),
              (s = t
                ? t(o[l + 1], e, n, {
                    before: "",
                    after: "",
                    ...c.current(),
                  }).charAt(0)
                : "");
          } else s = t.after;
          i.length > 0 &&
            ("\r" === u || "\n" === u) &&
            "html" === a.type &&
            ((i[i.length - 1] = i[i.length - 1].replace(/(\r?\n|\r)$/, " ")),
            (u = " "),
            (c = ie(t)),
            c.move(i.join(""))),
            i.push(
              c.move(n.handle(a, e, n, { ...c.current(), before: u, after: s }))
            ),
            (u = i[i.length - 1].slice(-1));
        }
        return r.pop(), i.join("");
      }
      const ye = {
          canContainEols: ["delete"],
          enter: {
            strikethrough: function (e) {
              this.enter({ type: "delete", children: [] }, e);
            },
          },
          exit: {
            strikethrough: function (e) {
              this.exit(e);
            },
          },
        },
        ke = {
          unsafe: [{ character: "~", inConstruct: "phrasing" }],
          handlers: { delete: xe },
        };
      function xe(e, n, t, r) {
        const o = ie(r),
          i = t.enter("emphasis");
        let l = o.move("~~");
        return (
          (l += ge(e, t, { ...o.current(), before: l, after: "~" })),
          (l += o.move("~~")),
          i(),
          l
        );
      }
      function ve(e, n, t) {
        let r = e.value || "",
          o = "`",
          i = -1;
        for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); ) o += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++i < t.unsafe.length;

        ) {
          const e = t.unsafe[i],
            n = ae(e);
          let o;
          if (e.atBreak)
            for (; (o = n.exec(r)); ) {
              let e = o.index;
              10 === r.charCodeAt(e) && 13 === r.charCodeAt(e - 1) && e--,
                (r = r.slice(0, e) + " " + r.slice(o.index + 1));
            }
        }
        return o + r + o;
      }
      function be(e) {
        return e.length;
      }
      function Ce(e) {
        const n = "string" === typeof e ? e.codePointAt(0) : 0;
        return 67 === n || 99 === n
          ? 99
          : 76 === n || 108 === n
          ? 108
          : 82 === n || 114 === n
          ? 114
          : 0;
      }
      (xe.peek = function () {
        return "~";
      }),
        (ve.peek = function () {
          return "`";
        });
      const we = {
        enter: {
          table: function (e) {
            const n = e._align;
            this.enter(
              {
                type: "table",
                align: n.map((e) => ("none" === e ? null : e)),
                children: [],
              },
              e
            ),
              this.setData("inTable", !0);
          },
          tableData: Ae,
          tableHeader: Ae,
          tableRow: function (e) {
            this.enter({ type: "tableRow", children: [] }, e);
          },
        },
        exit: {
          codeText: function (e) {
            let n = this.resume();
            this.getData("inTable") && (n = n.replace(/\\([\\|])/g, Fe));
            (this.stack[this.stack.length - 1].value = n), this.exit(e);
          },
          table: function (e) {
            this.exit(e), this.setData("inTable");
          },
          tableData: Se,
          tableHeader: Se,
          tableRow: Se,
        },
      };
      function Se(e) {
        this.exit(e);
      }
      function Ae(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function Fe(e, n) {
        return "|" === n ? n : e;
      }
      function Ee(e) {
        const n = e || {},
          t = n.tableCellPadding,
          r = n.tablePipeAlign,
          o = n.stringLength,
          i = t ? " " : "|";
        return {
          unsafe: [
            { character: "\r", inConstruct: "tableCell" },
            { character: "\n", inConstruct: "tableCell" },
            { atBreak: !0, character: "|", after: "[\t :-]" },
            { character: "|", inConstruct: "tableCell" },
            { atBreak: !0, character: ":", after: "-" },
            { atBreak: !0, character: "-", after: "[:|-]" },
          ],
          handlers: {
            table: function (e, n, t, r) {
              return u(
                (function (e, n, t) {
                  const r = e.children;
                  let o = -1;
                  const i = [],
                    l = n.enter("table");
                  for (; ++o < r.length; ) i[o] = c(r[o], n, t);
                  return l(), i;
                })(e, t, r),
                e.align
              );
            },
            tableRow: function (e, n, t, r) {
              const o = u([c(e, t, r)]);
              return o.slice(0, o.indexOf("\n"));
            },
            tableCell: l,
            inlineCode: function (e, n, t) {
              let r = ve(e, 0, t);
              t.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&"));
              return r;
            },
          },
        };
        function l(e, n, t, r) {
          const o = t.enter("tableCell"),
            l = t.enter("phrasing"),
            u = ge(e, t, { ...r, before: i, after: i });
          return l(), o(), u;
        }
        function u(e, n) {
          return (function (e, n = {}) {
            const t = (n.align || []).concat(),
              r = n.stringLength || be,
              o = [],
              i = [],
              l = [],
              u = [];
            let c = 0,
              a = -1;
            for (; ++a < e.length; ) {
              const t = [],
                o = [];
              let f = -1;
              for (e[a].length > c && (c = e[a].length); ++f < e[a].length; ) {
                const i =
                  null === (s = e[a][f]) || void 0 === s ? "" : String(s);
                if (!1 !== n.alignDelimiters) {
                  const e = r(i);
                  (o[f] = e), (void 0 === u[f] || e > u[f]) && (u[f] = e);
                }
                t.push(i);
              }
              (i[a] = t), (l[a] = o);
            }
            var s;
            let f = -1;
            if ("object" === typeof t && "length" in t)
              for (; ++f < c; ) o[f] = Ce(t[f]);
            else {
              const e = Ce(t);
              for (; ++f < c; ) o[f] = e;
            }
            f = -1;
            const p = [],
              h = [];
            for (; ++f < c; ) {
              const e = o[f];
              let t = "",
                r = "";
              99 === e
                ? ((t = ":"), (r = ":"))
                : 108 === e
                ? (t = ":")
                : 114 === e && (r = ":");
              let i =
                !1 === n.alignDelimiters
                  ? 1
                  : Math.max(1, u[f] - t.length - r.length);
              const l = t + "-".repeat(i) + r;
              !1 !== n.alignDelimiters &&
                ((i = t.length + i + r.length),
                i > u[f] && (u[f] = i),
                (h[f] = i)),
                (p[f] = l);
            }
            i.splice(1, 0, p), l.splice(1, 0, h), (a = -1);
            const d = [];
            for (; ++a < i.length; ) {
              const e = i[a],
                t = l[a];
              f = -1;
              const r = [];
              for (; ++f < c; ) {
                const i = e[f] || "";
                let l = "",
                  a = "";
                if (!1 !== n.alignDelimiters) {
                  const e = u[f] - (t[f] || 0),
                    n = o[f];
                  114 === n
                    ? (l = " ".repeat(e))
                    : 99 === n
                    ? e % 2
                      ? ((l = " ".repeat(e / 2 + 0.5)),
                        (a = " ".repeat(e / 2 - 0.5)))
                      : ((l = " ".repeat(e / 2)), (a = l))
                    : (a = " ".repeat(e));
                }
                !1 === n.delimiterStart || f || r.push("|"),
                  !1 === n.padding ||
                    (!1 === n.alignDelimiters && "" === i) ||
                    (!1 === n.delimiterStart && !f) ||
                    r.push(" "),
                  !1 !== n.alignDelimiters && r.push(l),
                  r.push(i),
                  !1 !== n.alignDelimiters && r.push(a),
                  !1 !== n.padding && r.push(" "),
                  (!1 === n.delimiterEnd && f === c - 1) || r.push("|");
              }
              d.push(
                !1 === n.delimiterEnd
                  ? r.join("").replace(/ +$/, "")
                  : r.join("")
              );
            }
            return d.join("\n");
          })(e, { align: n, alignDelimiters: r, padding: t, stringLength: o });
        }
        function c(e, n, t) {
          const r = e.children;
          let o = -1;
          const i = [],
            u = n.enter("tableRow");
          for (; ++o < r.length; ) i[o] = l(r[o], 0, n, t);
          return u(), i;
        }
      }
      function De(e, n, t, r) {
        const o = (function (e) {
          const n = e.options.listItemIndent || "tab";
          if (1 === n || "1" === n) return "one";
          if ("tab" !== n && "one" !== n && "mixed" !== n)
            throw new Error(
              "Cannot serialize items with `" +
                n +
                "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
            );
          return n;
        })(t);
        let i =
          t.bulletCurrent ||
          (function (e) {
            const n = e.options.bullet || "*";
            if ("*" !== n && "+" !== n && "-" !== n)
              throw new Error(
                "Cannot serialize items with `" +
                  n +
                  "` for `options.bullet`, expected `*`, `+`, or `-`"
              );
            return n;
          })(t);
        n &&
          "list" === n.type &&
          n.ordered &&
          (i =
            ("number" === typeof n.start && n.start > -1 ? n.start : 1) +
            (!1 === t.options.incrementListMarker ? 0 : n.children.indexOf(e)) +
            i);
        let l = i.length + 1;
        ("tab" === o ||
          ("mixed" === o &&
            ((n && "list" === n.type && n.spread) || e.spread))) &&
          (l = 4 * Math.ceil(l / 4));
        const u = ie(r);
        u.move(i + " ".repeat(l - i.length)), u.shift(l);
        const c = t.enter("listItem"),
          a = ce(le(e, t, u.current()), function (e, n, t) {
            if (n) return (t ? "" : " ".repeat(l)) + e;
            return (t ? i : i + " ".repeat(l - i.length)) + e;
          });
        return c(), a;
      }
      const Te = {
          exit: {
            taskListCheckValueChecked: Oe,
            taskListCheckValueUnchecked: Oe,
            paragraph: function (e) {
              const n = this.stack[this.stack.length - 2],
                t = this.stack[this.stack.length - 1],
                r = n.children,
                o = t.children[0];
              let i,
                l = -1;
              if (
                n &&
                "listItem" === n.type &&
                "boolean" === typeof n.checked &&
                o &&
                "text" === o.type
              ) {
                for (; ++l < r.length; ) {
                  const e = r[l];
                  if ("paragraph" === e.type) {
                    i = e;
                    break;
                  }
                }
                i === t &&
                  ((o.value = o.value.slice(1)),
                  0 === o.value.length
                    ? t.children.shift()
                    : t.position &&
                      o.position &&
                      "number" === typeof o.position.start.offset &&
                      (o.position.start.column++,
                      o.position.start.offset++,
                      (t.position.start = Object.assign(
                        {},
                        o.position.start
                      ))));
              }
              this.exit(e);
            },
          },
        },
        ze = {
          unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
          handlers: {
            listItem: function (e, n, t, r) {
              const o = e.children[0],
                i =
                  "boolean" === typeof e.checked && o && "paragraph" === o.type,
                l = "[" + (e.checked ? "x" : " ") + "] ",
                u = ie(r);
              i && u.move(l);
              let c = De(e, n, t, { ...r, ...u.current() });
              i &&
                (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
                  return e + l;
                }));
              return c;
            },
          },
        };
      function Oe(e) {
        this.stack[this.stack.length - 2].checked =
          "taskListCheckValueChecked" === e.type;
      }
      function Pe(e = {}) {
        const n = this.data();
        function t(e, t) {
          (n[e] ? n[e] : (n[e] = [])).push(t);
        }
        t(
          "micromarkExtensions",
          (function (e) {
            return (0, r.W)([
              d,
              {
                document: {
                  91: { tokenize: z, continuation: { tokenize: O }, exit: P },
                },
                text: {
                  91: { tokenize: T },
                  93: { add: "after", tokenize: E, resolveTo: D },
                },
              },
              R(e),
              j,
              H,
            ]);
          })(e)
        ),
          t("fromMarkdownExtensions", [
            K,
            {
              enter: {
                gfmFootnoteDefinition: function (e) {
                  this.enter(
                    {
                      type: "footnoteDefinition",
                      identifier: "",
                      label: "",
                      children: [],
                    },
                    e
                  );
                },
                gfmFootnoteDefinitionLabelString: function () {
                  this.buffer();
                },
                gfmFootnoteCall: function (e) {
                  this.enter(
                    { type: "footnoteReference", identifier: "", label: "" },
                    e
                  );
                },
                gfmFootnoteCallString: function () {
                  this.buffer();
                },
              },
              exit: {
                gfmFootnoteDefinition: function (e) {
                  this.exit(e);
                },
                gfmFootnoteDefinitionLabelString: function (e) {
                  const n = this.resume(),
                    t = this.stack[this.stack.length - 1];
                  (t.label = n),
                    (t.identifier = (0, A.d)(
                      this.sliceSerialize(e)
                    ).toLowerCase());
                },
                gfmFootnoteCall: function (e) {
                  this.exit(e);
                },
                gfmFootnoteCallString: function (e) {
                  const n = this.resume(),
                    t = this.stack[this.stack.length - 1];
                  (t.label = n),
                    (t.identifier = (0, A.d)(
                      this.sliceSerialize(e)
                    ).toLowerCase());
                },
              },
            },
            ye,
            we,
            Te,
          ]),
          t(
            "toMarkdownExtensions",
            (function (e) {
              return { extensions: [J, me(), ke, Ee(e), ze] };
            })(e)
          );
      }
    },
    19645: function (e, n, t) {
      "use strict";
      t.d(n, {
        O: function () {
          return r;
        },
      });
      const r = function (e) {
        if (void 0 === e || null === e) return i;
        if ("string" === typeof e)
          return (function (e) {
            return o(n);
            function n(n) {
              return n && n.type === e;
            }
          })(e);
        if ("object" === typeof e)
          return Array.isArray(e)
            ? (function (e) {
                const n = [];
                let t = -1;
                for (; ++t < e.length; ) n[t] = r(e[t]);
                return o(i);
                function i(...e) {
                  let t = -1;
                  for (; ++t < n.length; ) if (n[t].call(this, ...e)) return !0;
                  return !1;
                }
              })(e)
            : (function (e) {
                return o(n);
                function n(n) {
                  let t;
                  for (t in e) if (n[t] !== e[t]) return !1;
                  return !0;
                }
              })(e);
        if ("function" === typeof e) return o(e);
        throw new Error("Expected function, string, or object as test");
      };
      function o(e) {
        return function (...n) {
          return Boolean(e.call(this, ...n));
        };
      }
      function i() {
        return !0;
      }
    },
    55765: function (e, n, t) {
      "use strict";
      t.d(n, {
        S4: function () {
          return o;
        },
      });
      var r = t(19645);
      const o = function (e, n, t, o) {
        "function" === typeof n &&
          "function" !== typeof t &&
          ((o = t), (t = n), (n = null));
        const i = (0, r.O)(n),
          l = o ? -1 : 1;
        !(function e(r, u, c) {
          const a = "object" === typeof r && null !== r ? r : {};
          let s;
          "string" === typeof a.type &&
            ((s =
              "string" === typeof a.tagName
                ? a.tagName
                : "string" === typeof a.name
                ? a.name
                : void 0),
            Object.defineProperty(f, "name", {
              value: "node (" + a.type + (s ? "<" + s + ">" : "") + ")",
            }));
          return f;
          function f() {
            let a,
              s,
              f,
              p = [];
            if (
              (!n || i(r, u, c[c.length - 1] || null)) &&
              ((p = (function (e) {
                if (Array.isArray(e)) return e;
                if ("number" === typeof e) return [true, e];
                return [e];
              })(t(r, c))),
              false === p[0])
            )
              return p;
            if (r.children && "skip" !== p[0])
              for (
                s = (o ? r.children.length : -1) + l, f = c.concat(r);
                s > -1 && s < r.children.length;

              ) {
                if (((a = e(r.children[s], s, f)()), false === a[0])) return a;
                s = "number" === typeof a[1] ? a[1] : s + l;
              }
            return p;
          }
        })(e, null, [])();
      };
    },
  },
]);
