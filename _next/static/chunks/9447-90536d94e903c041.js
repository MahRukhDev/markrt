(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9447],
  {
    99542: function (d, u, e) {
      "use strict";
      e.d(u, {
        b: function () {
          return M;
        },
      });
      var a = {};
      e.r(a),
        e.d(a, {
          Andromeda: function () {
            return h.nQ;
          },
          Arbitrum: function () {
            return f.Ff;
          },
          ArbitrumRedditTestnet: function () {
            return P.b;
          },
          ArbitrumRinkeby: function () {
            return f.Fh;
          },
          Astar: function () {
            return c;
          },
          Aurora: function () {
            return C.xP;
          },
          AuroraTestnet: function () {
            return C.Mt;
          },
          Avalanche: function () {
            return r.KA;
          },
          AvalancheTestnet: function () {
            return r.Hg;
          },
          BSC: function () {
            return o.Su;
          },
          BSCTestnet: function () {
            return o.r4;
          },
          Boba: function () {
            return i;
          },
          BobaRinkeby: function () {
            return s;
          },
          Cronos: function () {
            return l.Nh;
          },
          CronosTestnet: function () {
            return l.PE;
          },
          Fantom: function () {
            return p.j;
          },
          FantomTestnet: function () {
            return p.f8;
          },
          Gnosis: function () {
            return A.So;
          },
          Goerli: function () {
            return b.Du;
          },
          Hardhat: function () {
            return t.ff;
          },
          Harmony: function () {
            return m.v;
          },
          Kovan: function () {
            return b.UY;
          },
          Localhost: function () {
            return t.YY;
          },
          Mainnet: function () {
            return b.ny;
          },
          MoonbaseAlpha: function () {
            return g.pF;
          },
          Moonbeam: function () {
            return v.b;
          },
          Moonriver: function () {
            return g.VD;
          },
          Mumbai: function () {
            return _.Nj;
          },
          OasisEmerald: function () {
            return y.tW;
          },
          OasisEmeraldTestnet: function () {
            return y.ci;
          },
          Optimism: function () {
            return E.qr;
          },
          OptimismGoerli: function () {
            return E.Lh;
          },
          OptimismKovan: function () {
            return E.tm;
          },
          Palm: function () {
            return x.V4;
          },
          PalmTestnet: function () {
            return x.AS;
          },
          Polygon: function () {
            return _.mg;
          },
          Rinkeby: function () {
            return b.ZR;
          },
          Ropsten: function () {
            return b.eL;
          },
          Songbird: function () {
            return I.U;
          },
          Stardust: function () {
            return h.Ym;
          },
          Theta: function () {
            return S.xn;
          },
          ThetaTestnet: function () {
            return S._v;
          },
          ThunderCore: function () {
            return w.jE;
          },
          ThunderCoreTestnet: function () {
            return w.gw;
          },
          Velas: function () {
            return O.$f;
          },
          VelasTestnet: function () {
            return O.Lc;
          },
          ZkSyncTestnet: function () {
            return k.S;
          },
          xDai: function () {
            return A.EU;
          },
        });
      var n = e(67294),
        t = e(95263),
        f = e(84852);
      const c = {
        chainId: 592,
        chainName: "Astar",
        isTestChain: !1,
        isLocalChain: !1,
        multicallAddress: "0xA129F95CfFe022153a4499f475B537751cd1ceF8",
        multicall2Address: "0x867e9d496F67a5eD0b888120A559DC6430499A7C",
        getExplorerAddressLink: (d) =>
          `https://blockscout.com/astar/address/${d}`,
        getExplorerTransactionLink: (d) =>
          `https://blockscout.com/astar/tx/${d}`,
      };
      var r = e(74542),
        o = e(34641);
      const i = {
          chainId: 288,
          chainName: "Boba",
          isTestChain: !1,
          isLocalChain: !1,
          multicallAddress: "0x344696b815742A3E31181207e027e5110e2A0f74",
          rpcUrl: "https://mainnet.boba.network",
          getExplorerAddressLink: (d) =>
            `https://blockexplorer.boba.network/address/${d}`,
          getExplorerTransactionLink: (d) =>
            `https://blockexplorer.boba.network/tx/${d}`,
        },
        s = {
          chainId: 28,
          chainName: "BobaRinkeby",
          isTestChain: !0,
          isLocalChain: !1,
          multicallAddress: "0xC8Ad85fF276fbC1aDF627D9dff0AfD8bdc4C3492",
          rpcUrl: "https://rinkeby.boba.network",
          getExplorerAddressLink: (d) =>
            `https://blockexplorer.rinkeby.boba.network/${d}`,
          getExplorerTransactionLink: (d) =>
            `https://blockexplorer.rinkeby.boba.network/tx/${d}`,
        };
      var l = e(30019),
        p = e(75522),
        m = e(54438),
        b = e(7979),
        h = e(34510),
        v = e(28017),
        g = e(99567),
        y = e(70110),
        x = e(68294),
        _ = e(28715),
        I = e(42685),
        S = e(52367),
        w = e(8086),
        A = e(76465),
        E = e(1637),
        C = e(92220),
        O = e(98216),
        k = e(99376),
        P = e(25222);
      function M(d) {
        return (0, n.useMemo)(
          () =>
            (function (d) {
              const u = Object.values(a).find((u) => u.chainId === d);
              if (!u) throw new Error(`Chain ${d} does not exist`);
              return u;
            })(d),
          [d]
        );
      }
    },
    95299: function (d, u, e) {
      var a = e(27698);
      d.exports = a;
    },
    83450: function (d, u, e) {
      var a = e(83363);
      d.exports = a;
    },
    66820: function (d, u, e) {
      var a = e(56243);
      d.exports = a;
    },
    84671: function (d, u, e) {
      var a = e(63698);
      d.exports = a;
    },
    84234: function (d, u, e) {
      var a = e(82073);
      d.exports = a;
    },
    80281: function (d, u, e) {
      var a = e(92547);
      d.exports = a;
    },
    54493: function (d, u, e) {
      e(77971), e(53242);
      var a = e(54058);
      d.exports = a.Array.from;
    },
    24034: function (d, u, e) {
      e(92737);
      var a = e(54058);
      d.exports = a.Array.isArray;
    },
    15367: function (d, u, e) {
      e(85906);
      var a = e(35703);
      d.exports = a("Array").concat;
    },
    99324: function (d, u, e) {
      e(2437);
      var a = e(35703);
      d.exports = a("Array").forEach;
    },
    80991: function (d, u, e) {
      e(97690);
      var a = e(35703);
      d.exports = a("Array").includes;
    },
    8700: function (d, u, e) {
      e(99076);
      var a = e(35703);
      d.exports = a("Array").indexOf;
    },
    23866: function (d, u, e) {
      e(68787);
      var a = e(35703);
      d.exports = a("Array").map;
    },
    52999: function (d, u, e) {
      e(81876);
      var a = e(35703);
      d.exports = a("Array").reduce;
    },
    24900: function (d, u, e) {
      e(60186);
      var a = e(35703);
      d.exports = a("Array").slice;
    },
    2948: function (d, u, e) {
      e(4115);
      var a = e(35703);
      d.exports = a("Array").sort;
    },
    13830: function (d, u, e) {
      e(66274), e(77971);
      var a = e(22902);
      d.exports = a;
    },
    45581: function (d, u, e) {
      e(66274), e(77971);
      var a = e(53476);
      d.exports = a;
    },
    56043: function (d, u, e) {
      var a = e(7046),
        n = e(15367),
        t = Array.prototype;
      d.exports = function (d) {
        var u = d.concat;
        return d === t || (a(t, d) && u === t.concat) ? n : u;
      };
    },
    66793: function (d, u, e) {
      var a = e(7046),
        n = e(11677),
        t = RegExp.prototype;
      d.exports = function (d) {
        return d === t || a(t, d) ? n(d) : d.flags;
      };
    },
    58557: function (d, u, e) {
      var a = e(7046),
        n = e(80991),
        t = e(21631),
        f = Array.prototype,
        c = String.prototype;
      d.exports = function (d) {
        var u = d.includes;
        return d === f || (a(f, d) && u === f.includes)
          ? n
          : "string" == typeof d || d === c || (a(c, d) && u === c.includes)
          ? t
          : u;
      };
    },
    34570: function (d, u, e) {
      var a = e(7046),
        n = e(8700),
        t = Array.prototype;
      d.exports = function (d) {
        var u = d.indexOf;
        return d === t || (a(t, d) && u === t.indexOf) ? n : u;
      };
    },
    88287: function (d, u, e) {
      var a = e(7046),
        n = e(23866),
        t = Array.prototype;
      d.exports = function (d) {
        var u = d.map;
        return d === t || (a(t, d) && u === t.map) ? n : u;
      };
    },
    68025: function (d, u, e) {
      var a = e(7046),
        n = e(52999),
        t = Array.prototype;
      d.exports = function (d) {
        var u = d.reduce;
        return d === t || (a(t, d) && u === t.reduce) ? n : u;
      };
    },
    69601: function (d, u, e) {
      var a = e(7046),
        n = e(24900),
        t = Array.prototype;
      d.exports = function (d) {
        var u = d.slice;
        return d === t || (a(t, d) && u === t.slice) ? n : u;
      };
    },
    69355: function (d, u, e) {
      var a = e(7046),
        n = e(2948),
        t = Array.prototype;
      d.exports = function (d) {
        var u = d.sort;
        return d === t || (a(t, d) && u === t.sort) ? n : u;
      };
    },
    35254: function (d, u, e) {
      e(53882);
      var a = e(54058).Object;
      d.exports = function (d, u) {
        return a.create(d, u);
      };
    },
    48171: function (d, u, e) {
      e(86450);
      var a = e(54058).Object,
        n = (d.exports = function (d, u, e) {
          return a.defineProperty(d, u, e);
        });
      a.defineProperty.sham && (n.sham = !0);
    },
    98524: function (d, u, e) {
      e(14038);
      var a = e(54058);
      d.exports = a.parseInt;
    },
    11677: function (d, u, e) {
      e(94261);
      var a = e(43613);
      d.exports = a;
    },
    21631: function (d, u, e) {
      e(11035);
      var a = e(35703);
      d.exports = a("String").includes;
    },
    57473: function (d, u, e) {
      e(85906),
        e(55967),
        e(35824),
        e(8555),
        e(52615),
        e(21732),
        e(35903),
        e(1825),
        e(28394),
        e(45915),
        e(61766),
        e(62737),
        e(89911),
        e(74315),
        e(63131),
        e(64714),
        e(70659),
        e(69120),
        e(79413),
        e(1502);
      var a = e(54058);
      d.exports = a.Symbol;
    },
    27385: function (d, u, e) {
      d.exports = e(64225);
    },
    81522: function (d, u, e) {
      d.exports = e(30382);
    },
    32209: function (d, u, e) {
      d.exports = e(40478);
    },
    1258: function (d, u, e) {
      d.exports = e(39134);
    },
    81493: function (d, u, e) {
      d.exports = e(97088);
    },
    86600: function (d, u, e) {
      d.exports = e(52201);
    },
    64225: function (d, u, e) {
      var a = e(95299);
      d.exports = a;
    },
    30382: function (d, u, e) {
      var a = e(83450);
      d.exports = a;
    },
    40478: function (d, u, e) {
      var a = e(66820);
      d.exports = a;
    },
    39134: function (d, u, e) {
      var a = e(84671);
      d.exports = a;
    },
    97088: function (d, u, e) {
      var a = e(84234);
      d.exports = a;
    },
    52201: function (d, u, e) {
      var a = e(80281);
      e(28783),
        e(43975),
        e(65799),
        e(31943),
        e(46774),
        e(45414),
        e(80620),
        e(36172),
        (d.exports = a);
    },
    24883: function (d, u, e) {
      var a = e(57475),
        n = e(69826),
        t = TypeError;
      d.exports = function (d) {
        if (a(d)) return d;
        throw t(n(d) + " is not a function");
      };
    },
    11851: function (d, u, e) {
      var a = e(57475),
        n = String,
        t = TypeError;
      d.exports = function (d) {
        if ("object" == typeof d || a(d)) return d;
        throw t("Can't set " + n(d) + " as a prototype");
      };
    },
    18479: function (d) {
      d.exports = function () {};
    },
    96059: function (d, u, e) {
      var a = e(10941),
        n = String,
        t = TypeError;
      d.exports = function (d) {
        if (a(d)) return d;
        throw t(n(d) + " is not an object");
      };
    },
    56837: function (d, u, e) {
      "use strict";
      var a = e(3610).forEach,
        n = e(34194)("forEach");
      d.exports = n
        ? [].forEach
        : function (d) {
            return a(this, d, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    11354: function (d, u, e) {
      "use strict";
      var a = e(86843),
        n = e(78834),
        t = e(89678),
        f = e(75196),
        c = e(6782),
        r = e(24284),
        o = e(10623),
        i = e(55449),
        s = e(53476),
        l = e(22902),
        p = Array;
      d.exports = function (d) {
        var u = t(d),
          e = r(this),
          m = arguments.length,
          b = m > 1 ? arguments[1] : void 0,
          h = void 0 !== b;
        h && (b = a(b, m > 2 ? arguments[2] : void 0));
        var v,
          g,
          y,
          x,
          _,
          I,
          S = l(u),
          w = 0;
        if (!S || (this === p && c(S)))
          for (v = o(u), g = e ? new this(v) : p(v); v > w; w++)
            (I = h ? b(u[w], w) : u[w]), i(g, w, I);
        else
          for (
            _ = (x = s(u, S)).next, g = e ? new this() : [];
            !(y = n(_, x)).done;
            w++
          )
            (I = h ? f(x, b, [y.value, w], !0) : y.value), i(g, w, I);
        return (g.length = w), g;
      };
    },
    31692: function (d, u, e) {
      var a = e(74529),
        n = e(59413),
        t = e(10623),
        f = function (d) {
          return function (u, e, f) {
            var c,
              r = a(u),
              o = t(r),
              i = n(f, o);
            if (d && e != e) {
              for (; o > i; ) if ((c = r[i++]) != c) return !0;
            } else
              for (; o > i; i++)
                if ((d || i in r) && r[i] === e) return d || i || 0;
            return !d && -1;
          };
        };
      d.exports = { includes: f(!0), indexOf: f(!1) };
    },
    3610: function (d, u, e) {
      var a = e(86843),
        n = e(95329),
        t = e(37026),
        f = e(89678),
        c = e(10623),
        r = e(64692),
        o = n([].push),
        i = function (d) {
          var u = 1 == d,
            e = 2 == d,
            n = 3 == d,
            i = 4 == d,
            s = 6 == d,
            l = 7 == d,
            p = 5 == d || s;
          return function (m, b, h, v) {
            for (
              var g,
                y,
                x = f(m),
                _ = t(x),
                I = a(b, h),
                S = c(_),
                w = 0,
                A = v || r,
                E = u ? A(m, S) : e || l ? A(m, 0) : void 0;
              S > w;
              w++
            )
              if ((p || w in _) && ((y = I((g = _[w]), w, x)), d))
                if (u) E[w] = y;
                else if (y)
                  switch (d) {
                    case 3:
                      return !0;
                    case 5:
                      return g;
                    case 6:
                      return w;
                    case 2:
                      o(E, g);
                  }
                else
                  switch (d) {
                    case 4:
                      return !1;
                    case 7:
                      o(E, g);
                  }
            return s ? -1 : n || i ? i : E;
          };
        };
      d.exports = {
        forEach: i(0),
        map: i(1),
        filter: i(2),
        some: i(3),
        every: i(4),
        find: i(5),
        findIndex: i(6),
        filterReject: i(7),
      };
    },
    50568: function (d, u, e) {
      var a = e(95981),
        n = e(99813),
        t = e(53385),
        f = n("species");
      d.exports = function (d) {
        return (
          t >= 51 ||
          !a(function () {
            var u = [];
            return (
              ((u.constructor = {})[f] = function () {
                return { foo: 1 };
              }),
              1 !== u[d](Boolean).foo
            );
          })
        );
      };
    },
    34194: function (d, u, e) {
      "use strict";
      var a = e(95981);
      d.exports = function (d, u) {
        var e = [][d];
        return (
          !!e &&
          a(function () {
            e.call(
              null,
              u ||
                function () {
                  return 1;
                },
              1
            );
          })
        );
      };
    },
    46499: function (d, u, e) {
      var a = e(24883),
        n = e(89678),
        t = e(37026),
        f = e(10623),
        c = TypeError,
        r = function (d) {
          return function (u, e, r, o) {
            a(e);
            var i = n(u),
              s = t(i),
              l = f(i),
              p = d ? l - 1 : 0,
              m = d ? -1 : 1;
            if (r < 2)
              for (;;) {
                if (p in s) {
                  (o = s[p]), (p += m);
                  break;
                }
                if (((p += m), d ? p < 0 : l <= p))
                  throw c("Reduce of empty array with no initial value");
              }
            for (; d ? p >= 0 : l > p; p += m) p in s && (o = e(o, s[p], p, i));
            return o;
          };
        };
      d.exports = { left: r(!1), right: r(!0) };
    },
    15790: function (d, u, e) {
      var a = e(59413),
        n = e(10623),
        t = e(55449),
        f = Array,
        c = Math.max;
      d.exports = function (d, u, e) {
        for (
          var r = n(d),
            o = a(u, r),
            i = a(void 0 === e ? r : e, r),
            s = f(c(i - o, 0)),
            l = 0;
          o < i;
          o++, l++
        )
          t(s, l, d[o]);
        return (s.length = l), s;
      };
    },
    93765: function (d, u, e) {
      var a = e(95329);
      d.exports = a([].slice);
    },
    61388: function (d, u, e) {
      var a = e(15790),
        n = Math.floor,
        t = function (d, u) {
          var e = d.length,
            r = n(e / 2);
          return e < 8 ? f(d, u) : c(d, t(a(d, 0, r), u), t(a(d, r), u), u);
        },
        f = function (d, u) {
          for (var e, a, n = d.length, t = 1; t < n; ) {
            for (a = t, e = d[t]; a && u(d[a - 1], e) > 0; ) d[a] = d[--a];
            a !== t++ && (d[a] = e);
          }
          return d;
        },
        c = function (d, u, e, a) {
          for (var n = u.length, t = e.length, f = 0, c = 0; f < n || c < t; )
            d[f + c] =
              f < n && c < t
                ? a(u[f], e[c]) <= 0
                  ? u[f++]
                  : e[c++]
                : f < n
                ? u[f++]
                : e[c++];
          return d;
        };
      d.exports = t;
    },
    5693: function (d, u, e) {
      var a = e(1052),
        n = e(24284),
        t = e(10941),
        f = e(99813)("species"),
        c = Array;
      d.exports = function (d) {
        var u;
        return (
          a(d) &&
            ((u = d.constructor),
            ((n(u) && (u === c || a(u.prototype))) ||
              (t(u) && null === (u = u[f]))) &&
              (u = void 0)),
          void 0 === u ? c : u
        );
      };
    },
    64692: function (d, u, e) {
      var a = e(5693);
      d.exports = function (d, u) {
        return new (a(d))(0 === u ? 0 : u);
      };
    },
    75196: function (d, u, e) {
      var a = e(96059),
        n = e(7609);
      d.exports = function (d, u, e, t) {
        try {
          return t ? u(a(e)[0], e[1]) : u(e);
        } catch (f) {
          n(d, "throw", f);
        }
      };
    },
    21385: function (d, u, e) {
      var a = e(99813)("iterator"),
        n = !1;
      try {
        var t = 0,
          f = {
            next: function () {
              return { done: !!t++ };
            },
            return: function () {
              n = !0;
            },
          };
        (f[a] = function () {
          return this;
        }),
          Array.from(f, function () {
            throw 2;
          });
      } catch (c) {}
      d.exports = function (d, u) {
        if (!u && !n) return !1;
        var e = !1;
        try {
          var t = {};
          (t[a] = function () {
            return {
              next: function () {
                return { done: (e = !0) };
              },
            };
          }),
            d(t);
        } catch (c) {}
        return e;
      };
    },
    82532: function (d, u, e) {
      var a = e(95329),
        n = a({}.toString),
        t = a("".slice);
      d.exports = function (d) {
        return t(n(d), 8, -1);
      };
    },
    9697: function (d, u, e) {
      var a = e(22885),
        n = e(57475),
        t = e(82532),
        f = e(99813)("toStringTag"),
        c = Object,
        r =
          "Arguments" ==
          t(
            (function () {
              return arguments;
            })()
          );
      d.exports = a
        ? t
        : function (d) {
            var u, e, a;
            return void 0 === d
              ? "Undefined"
              : null === d
              ? "Null"
              : "string" ==
                typeof (e = (function (d, u) {
                  try {
                    return d[u];
                  } catch (e) {}
                })((u = c(d)), f))
              ? e
              : r
              ? t(u)
              : "Object" == (a = t(u)) && n(u.callee)
              ? "Arguments"
              : a;
          };
    },
    67772: function (d, u, e) {
      var a = e(99813)("match");
      d.exports = function (d) {
        var u = /./;
        try {
          "/./"[d](u);
        } catch (e) {
          try {
            return (u[a] = !1), "/./"[d](u);
          } catch (n) {}
        }
        return !1;
      };
    },
    64160: function (d, u, e) {
      var a = e(95981);
      d.exports = !a(function () {
        function d() {}
        return (
          (d.prototype.constructor = null),
          Object.getPrototypeOf(new d()) !== d.prototype
        );
      });
    },
    31046: function (d, u, e) {
      "use strict";
      var a = e(35143).IteratorPrototype,
        n = e(29290),
        t = e(31887),
        f = e(90904),
        c = e(12077),
        r = function () {
          return this;
        };
      d.exports = function (d, u, e, o) {
        var i = u + " Iterator";
        return (
          (d.prototype = n(a, { next: t(+!o, e) })),
          f(d, i, !1, !0),
          (c[i] = r),
          d
        );
      };
    },
    32029: function (d, u, e) {
      var a = e(55746),
        n = e(65988),
        t = e(31887);
      d.exports = a
        ? function (d, u, e) {
            return n.f(d, u, t(1, e));
          }
        : function (d, u, e) {
            return (d[u] = e), d;
          };
    },
    31887: function (d) {
      d.exports = function (d, u) {
        return {
          enumerable: !(1 & d),
          configurable: !(2 & d),
          writable: !(4 & d),
          value: u,
        };
      };
    },
    55449: function (d, u, e) {
      "use strict";
      var a = e(83894),
        n = e(65988),
        t = e(31887);
      d.exports = function (d, u, e) {
        var f = a(u);
        f in d ? n.f(d, f, t(0, e)) : (d[f] = e);
      };
    },
    95929: function (d, u, e) {
      var a = e(32029);
      d.exports = function (d, u, e, n) {
        return n && n.enumerable ? (d[u] = e) : a(d, u, e), d;
      };
    },
    75609: function (d, u, e) {
      var a = e(21899),
        n = Object.defineProperty;
      d.exports = function (d, u) {
        try {
          n(a, d, { value: u, configurable: !0, writable: !0 });
        } catch (e) {
          a[d] = u;
        }
        return u;
      };
    },
    47771: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(78834),
        t = e(82529),
        f = e(79417),
        c = e(57475),
        r = e(31046),
        o = e(249),
        i = e(88929),
        s = e(90904),
        l = e(32029),
        p = e(95929),
        m = e(99813),
        b = e(12077),
        h = e(35143),
        v = f.PROPER,
        g = f.CONFIGURABLE,
        y = h.IteratorPrototype,
        x = h.BUGGY_SAFARI_ITERATORS,
        _ = m("iterator"),
        I = "keys",
        S = "values",
        w = "entries",
        A = function () {
          return this;
        };
      d.exports = function (d, u, e, f, m, h, E) {
        r(e, u, f);
        var C,
          O,
          k,
          P = function (d) {
            if (d === m && N) return N;
            if (!x && d in L) return L[d];
            switch (d) {
              case I:
              case S:
              case w:
                return function () {
                  return new e(this, d);
                };
            }
            return function () {
              return new e(this);
            };
          },
          M = u + " Iterator",
          T = !1,
          L = d.prototype,
          j = L[_] || L["@@iterator"] || (m && L[m]),
          N = (!x && j) || P(m),
          F = ("Array" == u && L.entries) || j;
        if (
          (F &&
            (C = o(F.call(new d()))) !== Object.prototype &&
            C.next &&
            (t || o(C) === y || (i ? i(C, y) : c(C[_]) || p(C, _, A)),
            s(C, M, !0, !0),
            t && (b[M] = A)),
          v &&
            m == S &&
            j &&
            j.name !== S &&
            (!t && g
              ? l(L, "name", S)
              : ((T = !0),
                (N = function () {
                  return n(j, this);
                }))),
          m)
        )
          if (((O = { values: P(S), keys: h ? N : P(I), entries: P(w) }), E))
            for (k in O) (x || T || !(k in L)) && p(L, k, O[k]);
          else a({ target: u, proto: !0, forced: x || T }, O);
        return (
          (t && !E) || L[_] === N || p(L, _, N, { name: m }), (b[u] = N), O
        );
      };
    },
    66349: function (d, u, e) {
      var a = e(54058),
        n = e(90953),
        t = e(11477),
        f = e(65988).f;
      d.exports = function (d) {
        var u = a.Symbol || (a.Symbol = {});
        n(u, d) || f(u, d, { value: t.f(d) });
      };
    },
    15863: function (d, u, e) {
      "use strict";
      var a = e(69826),
        n = TypeError;
      d.exports = function (d, u) {
        if (!delete d[u])
          throw n("Cannot delete property " + a(u) + " of " + a(d));
      };
    },
    55746: function (d, u, e) {
      var a = e(95981);
      d.exports = !a(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    61333: function (d, u, e) {
      var a = e(21899),
        n = e(10941),
        t = a.document,
        f = n(t) && n(t.createElement);
      d.exports = function (d) {
        return f ? t.createElement(d) : {};
      };
    },
    66796: function (d) {
      var u = TypeError;
      d.exports = function (d) {
        if (d > 9007199254740991) throw u("Maximum allowed index exceeded");
        return d;
      };
    },
    63281: function (d) {
      d.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    34342: function (d, u, e) {
      var a = e(2861).match(/firefox\/(\d+)/i);
      d.exports = !!a && +a[1];
    },
    81046: function (d, u, e) {
      var a = e(2861);
      d.exports = /MSIE|Trident/.test(a);
    },
    6049: function (d, u, e) {
      var a = e(82532),
        n = e(21899);
      d.exports = "process" == a(n.process);
    },
    2861: function (d, u, e) {
      var a = e(626);
      d.exports = a("navigator", "userAgent") || "";
    },
    53385: function (d, u, e) {
      var a,
        n,
        t = e(21899),
        f = e(2861),
        c = t.process,
        r = t.Deno,
        o = (c && c.versions) || (r && r.version),
        i = o && o.v8;
      i && (n = (a = i.split("."))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])),
        !n &&
          f &&
          (!(a = f.match(/Edge\/(\d+)/)) || a[1] >= 74) &&
          (a = f.match(/Chrome\/(\d+)/)) &&
          (n = +a[1]),
        (d.exports = n);
    },
    18938: function (d, u, e) {
      var a = e(2861).match(/AppleWebKit\/(\d+)\./);
      d.exports = !!a && +a[1];
    },
    35703: function (d, u, e) {
      var a = e(54058);
      d.exports = function (d) {
        return a[d + "Prototype"];
      };
    },
    56759: function (d) {
      d.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    76887: function (d, u, e) {
      "use strict";
      var a = e(21899),
        n = e(79730),
        t = e(95329),
        f = e(57475),
        c = e(49677).f,
        r = e(37252),
        o = e(54058),
        i = e(86843),
        s = e(32029),
        l = e(90953),
        p = function (d) {
          var u = function (e, a, t) {
            if (this instanceof u) {
              switch (arguments.length) {
                case 0:
                  return new d();
                case 1:
                  return new d(e);
                case 2:
                  return new d(e, a);
              }
              return new d(e, a, t);
            }
            return n(d, this, arguments);
          };
          return (u.prototype = d.prototype), u;
        };
      d.exports = function (d, u) {
        var e,
          n,
          m,
          b,
          h,
          v,
          g,
          y,
          x = d.target,
          _ = d.global,
          I = d.stat,
          S = d.proto,
          w = _ ? a : I ? a[x] : (a[x] || {}).prototype,
          A = _ ? o : o[x] || s(o, x, {})[x],
          E = A.prototype;
        for (m in u)
          (e = !r(_ ? m : x + (I ? "." : "#") + m, d.forced) && w && l(w, m)),
            (h = A[m]),
            e && (v = d.dontCallGetSet ? (y = c(w, m)) && y.value : w[m]),
            (b = e && v ? v : u[m]),
            (e && typeof h == typeof b) ||
              ((g =
                d.bind && e
                  ? i(b, a)
                  : d.wrap && e
                  ? p(b)
                  : S && f(b)
                  ? t(b)
                  : b),
              (d.sham || (b && b.sham) || (h && h.sham)) && s(g, "sham", !0),
              s(A, m, g),
              S &&
                (l(o, (n = x + "Prototype")) || s(o, n, {}),
                s(o[n], m, b),
                d.real && E && !E[m] && s(E, m, b)));
      };
    },
    95981: function (d) {
      d.exports = function (d) {
        try {
          return !!d();
        } catch (u) {
          return !0;
        }
      };
    },
    79730: function (d, u, e) {
      var a = e(18285),
        n = Function.prototype,
        t = n.apply,
        f = n.call;
      d.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (a
          ? f.bind(t)
          : function () {
              return f.apply(t, arguments);
            });
    },
    86843: function (d, u, e) {
      var a = e(95329),
        n = e(24883),
        t = e(18285),
        f = a(a.bind);
      d.exports = function (d, u) {
        return (
          n(d),
          void 0 === u
            ? d
            : t
            ? f(d, u)
            : function () {
                return d.apply(u, arguments);
              }
        );
      };
    },
    18285: function (d, u, e) {
      var a = e(95981);
      d.exports = !a(function () {
        var d = function () {}.bind();
        return "function" != typeof d || d.hasOwnProperty("prototype");
      });
    },
    78834: function (d, u, e) {
      var a = e(18285),
        n = Function.prototype.call;
      d.exports = a
        ? n.bind(n)
        : function () {
            return n.apply(n, arguments);
          };
    },
    79417: function (d, u, e) {
      var a = e(55746),
        n = e(90953),
        t = Function.prototype,
        f = a && Object.getOwnPropertyDescriptor,
        c = n(t, "name"),
        r = c && "something" === function () {}.name,
        o = c && (!a || (a && f(t, "name").configurable));
      d.exports = { EXISTS: c, PROPER: r, CONFIGURABLE: o };
    },
    95329: function (d, u, e) {
      var a = e(18285),
        n = Function.prototype,
        t = n.bind,
        f = n.call,
        c = a && t.bind(f, f);
      d.exports = a
        ? function (d) {
            return d && c(d);
          }
        : function (d) {
            return (
              d &&
              function () {
                return f.apply(d, arguments);
              }
            );
          };
    },
    626: function (d, u, e) {
      var a = e(54058),
        n = e(21899),
        t = e(57475),
        f = function (d) {
          return t(d) ? d : void 0;
        };
      d.exports = function (d, u) {
        return arguments.length < 2
          ? f(a[d]) || f(n[d])
          : (a[d] && a[d][u]) || (n[d] && n[d][u]);
      };
    },
    22902: function (d, u, e) {
      var a = e(9697),
        n = e(14229),
        t = e(12077),
        f = e(99813)("iterator");
      d.exports = function (d) {
        if (void 0 != d) return n(d, f) || n(d, "@@iterator") || t[a(d)];
      };
    },
    53476: function (d, u, e) {
      var a = e(78834),
        n = e(24883),
        t = e(96059),
        f = e(69826),
        c = e(22902),
        r = TypeError;
      d.exports = function (d, u) {
        var e = arguments.length < 2 ? c(d) : u;
        if (n(e)) return t(a(e, d));
        throw r(f(d) + " is not iterable");
      };
    },
    14229: function (d, u, e) {
      var a = e(24883);
      d.exports = function (d, u) {
        var e = d[u];
        return null == e ? void 0 : a(e);
      };
    },
    21899: function (d, u, e) {
      var a = function (d) {
        return d && d.Math == Math && d;
      };
      d.exports =
        a("object" == typeof globalThis && globalThis) ||
        a("object" == typeof window && window) ||
        a("object" == typeof self && self) ||
        a("object" == typeof e.g && e.g) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    90953: function (d, u, e) {
      var a = e(95329),
        n = e(89678),
        t = a({}.hasOwnProperty);
      d.exports =
        Object.hasOwn ||
        function (d, u) {
          return t(n(d), u);
        };
    },
    27748: function (d) {
      d.exports = {};
    },
    15463: function (d, u, e) {
      var a = e(626);
      d.exports = a("document", "documentElement");
    },
    2840: function (d, u, e) {
      var a = e(55746),
        n = e(95981),
        t = e(61333);
      d.exports =
        !a &&
        !n(function () {
          return (
            7 !=
            Object.defineProperty(t("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    37026: function (d, u, e) {
      var a = e(95329),
        n = e(95981),
        t = e(82532),
        f = Object,
        c = a("".split);
      d.exports = n(function () {
        return !f("z").propertyIsEnumerable(0);
      })
        ? function (d) {
            return "String" == t(d) ? c(d, "") : f(d);
          }
        : f;
    },
    81302: function (d, u, e) {
      var a = e(95329),
        n = e(57475),
        t = e(63030),
        f = a(Function.toString);
      n(t.inspectSource) ||
        (t.inspectSource = function (d) {
          return f(d);
        }),
        (d.exports = t.inspectSource);
    },
    45402: function (d, u, e) {
      var a,
        n,
        t,
        f = e(38019),
        c = e(21899),
        r = e(95329),
        o = e(10941),
        i = e(32029),
        s = e(90953),
        l = e(63030),
        p = e(44262),
        m = e(27748),
        b = "Object already initialized",
        h = c.TypeError,
        v = c.WeakMap;
      if (f || l.state) {
        var g = l.state || (l.state = new v()),
          y = r(g.get),
          x = r(g.has),
          _ = r(g.set);
        (a = function (d, u) {
          if (x(g, d)) throw new h(b);
          return (u.facade = d), _(g, d, u), u;
        }),
          (n = function (d) {
            return y(g, d) || {};
          }),
          (t = function (d) {
            return x(g, d);
          });
      } else {
        var I = p("state");
        (m[I] = !0),
          (a = function (d, u) {
            if (s(d, I)) throw new h(b);
            return (u.facade = d), i(d, I, u), u;
          }),
          (n = function (d) {
            return s(d, I) ? d[I] : {};
          }),
          (t = function (d) {
            return s(d, I);
          });
      }
      d.exports = {
        set: a,
        get: n,
        has: t,
        enforce: function (d) {
          return t(d) ? n(d) : a(d, {});
        },
        getterFor: function (d) {
          return function (u) {
            var e;
            if (!o(u) || (e = n(u)).type !== d)
              throw h("Incompatible receiver, " + d + " required");
            return e;
          };
        },
      };
    },
    6782: function (d, u, e) {
      var a = e(99813),
        n = e(12077),
        t = a("iterator"),
        f = Array.prototype;
      d.exports = function (d) {
        return void 0 !== d && (n.Array === d || f[t] === d);
      };
    },
    1052: function (d, u, e) {
      var a = e(82532);
      d.exports =
        Array.isArray ||
        function (d) {
          return "Array" == a(d);
        };
    },
    57475: function (d) {
      d.exports = function (d) {
        return "function" == typeof d;
      };
    },
    24284: function (d, u, e) {
      var a = e(95329),
        n = e(95981),
        t = e(57475),
        f = e(9697),
        c = e(626),
        r = e(81302),
        o = function () {},
        i = [],
        s = c("Reflect", "construct"),
        l = /^\s*(?:class|function)\b/,
        p = a(l.exec),
        m = !l.exec(o),
        b = function (d) {
          if (!t(d)) return !1;
          try {
            return s(o, i, d), !0;
          } catch (u) {
            return !1;
          }
        },
        h = function (d) {
          if (!t(d)) return !1;
          switch (f(d)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return m || !!p(l, r(d));
          } catch (u) {
            return !0;
          }
        };
      (h.sham = !0),
        (d.exports =
          !s ||
          n(function () {
            var d;
            return (
              b(b.call) ||
              !b(Object) ||
              !b(function () {
                d = !0;
              }) ||
              d
            );
          })
            ? h
            : b);
    },
    37252: function (d, u, e) {
      var a = e(95981),
        n = e(57475),
        t = /#|\.prototype\./,
        f = function (d, u) {
          var e = r[c(d)];
          return e == i || (e != o && (n(u) ? a(u) : !!u));
        },
        c = (f.normalize = function (d) {
          return String(d).replace(t, ".").toLowerCase();
        }),
        r = (f.data = {}),
        o = (f.NATIVE = "N"),
        i = (f.POLYFILL = "P");
      d.exports = f;
    },
    10941: function (d, u, e) {
      var a = e(57475);
      d.exports = function (d) {
        return "object" == typeof d ? null !== d : a(d);
      };
    },
    82529: function (d) {
      d.exports = !0;
    },
    60685: function (d, u, e) {
      var a = e(10941),
        n = e(82532),
        t = e(99813)("match");
      d.exports = function (d) {
        var u;
        return a(d) && (void 0 !== (u = d[t]) ? !!u : "RegExp" == n(d));
      };
    },
    56664: function (d, u, e) {
      var a = e(626),
        n = e(57475),
        t = e(7046),
        f = e(32302),
        c = Object;
      d.exports = f
        ? function (d) {
            return "symbol" == typeof d;
          }
        : function (d) {
            var u = a("Symbol");
            return n(u) && t(u.prototype, c(d));
          };
    },
    7609: function (d, u, e) {
      var a = e(78834),
        n = e(96059),
        t = e(14229);
      d.exports = function (d, u, e) {
        var f, c;
        n(d);
        try {
          if (!(f = t(d, "return"))) {
            if ("throw" === u) throw e;
            return e;
          }
          f = a(f, d);
        } catch (r) {
          (c = !0), (f = r);
        }
        if ("throw" === u) throw e;
        if (c) throw f;
        return n(f), e;
      };
    },
    35143: function (d, u, e) {
      "use strict";
      var a,
        n,
        t,
        f = e(95981),
        c = e(57475),
        r = e(29290),
        o = e(249),
        i = e(95929),
        s = e(99813),
        l = e(82529),
        p = s("iterator"),
        m = !1;
      [].keys &&
        ("next" in (t = [].keys())
          ? (n = o(o(t))) !== Object.prototype && (a = n)
          : (m = !0)),
        void 0 == a ||
        f(function () {
          var d = {};
          return a[p].call(d) !== d;
        })
          ? (a = {})
          : l && (a = r(a)),
        c(a[p]) ||
          i(a, p, function () {
            return this;
          }),
        (d.exports = { IteratorPrototype: a, BUGGY_SAFARI_ITERATORS: m });
    },
    12077: function (d) {
      d.exports = {};
    },
    10623: function (d, u, e) {
      var a = e(43057);
      d.exports = function (d) {
        return a(d.length);
      };
    },
    35331: function (d) {
      var u = Math.ceil,
        e = Math.floor;
      d.exports =
        Math.trunc ||
        function (d) {
          var a = +d;
          return (a > 0 ? e : u)(a);
        };
    },
    25366: function (d, u, e) {
      var a = e(72497);
      d.exports = a && !!Symbol.for && !!Symbol.keyFor;
    },
    72497: function (d, u, e) {
      var a = e(53385),
        n = e(95981);
      d.exports =
        !!Object.getOwnPropertySymbols &&
        !n(function () {
          var d = Symbol();
          return (
            !String(d) ||
            !(Object(d) instanceof Symbol) ||
            (!Symbol.sham && a && a < 41)
          );
        });
    },
    38019: function (d, u, e) {
      var a = e(21899),
        n = e(57475),
        t = e(81302),
        f = a.WeakMap;
      d.exports = n(f) && /native code/.test(t(f));
    },
    70344: function (d, u, e) {
      var a = e(60685),
        n = TypeError;
      d.exports = function (d) {
        if (a(d)) throw n("The method doesn't accept regular expressions");
        return d;
      };
    },
    29806: function (d, u, e) {
      var a = e(21899),
        n = e(95981),
        t = e(95329),
        f = e(85803),
        c = e(74853).trim,
        r = e(73483),
        o = a.parseInt,
        i = a.Symbol,
        s = i && i.iterator,
        l = /^[+-]?0x/i,
        p = t(l.exec),
        m =
          8 !== o(r + "08") ||
          22 !== o(r + "0x16") ||
          (s &&
            !n(function () {
              o(Object(s));
            }));
      d.exports = m
        ? function (d, u) {
            var e = c(f(d));
            return o(e, u >>> 0 || (p(l, e) ? 16 : 10));
          }
        : o;
    },
    29290: function (d, u, e) {
      var a,
        n = e(96059),
        t = e(59938),
        f = e(56759),
        c = e(27748),
        r = e(15463),
        o = e(61333),
        i = e(44262),
        s = i("IE_PROTO"),
        l = function () {},
        p = function (d) {
          return "<script>" + d + "</" + "script>";
        },
        m = function (d) {
          d.write(p("")), d.close();
          var u = d.parentWindow.Object;
          return (d = null), u;
        },
        b = function () {
          try {
            a = new ActiveXObject("htmlfile");
          } catch (u) {}
          b =
            "undefined" != typeof document
              ? document.domain && a
                ? m(a)
                : (function () {
                    var d,
                      u = o("iframe");
                    return (
                      (u.style.display = "none"),
                      r.appendChild(u),
                      (u.src = String("javascript:")),
                      (d = u.contentWindow.document).open(),
                      d.write(p("document.F=Object")),
                      d.close(),
                      d.F
                    );
                  })()
              : m(a);
          for (var d = f.length; d--; ) delete b.prototype[f[d]];
          return b();
        };
      (c[s] = !0),
        (d.exports =
          Object.create ||
          function (d, u) {
            var e;
            return (
              null !== d
                ? ((l.prototype = n(d)),
                  (e = new l()),
                  (l.prototype = null),
                  (e[s] = d))
                : (e = b()),
              void 0 === u ? e : t.f(e, u)
            );
          });
    },
    59938: function (d, u, e) {
      var a = e(55746),
        n = e(83937),
        t = e(65988),
        f = e(96059),
        c = e(74529),
        r = e(14771);
      u.f =
        a && !n
          ? Object.defineProperties
          : function (d, u) {
              f(d);
              for (var e, a = c(u), n = r(u), o = n.length, i = 0; o > i; )
                t.f(d, (e = n[i++]), a[e]);
              return d;
            };
    },
    65988: function (d, u, e) {
      var a = e(55746),
        n = e(2840),
        t = e(83937),
        f = e(96059),
        c = e(83894),
        r = TypeError,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        s = "enumerable",
        l = "configurable",
        p = "writable";
      u.f = a
        ? t
          ? function (d, u, e) {
              if (
                (f(d),
                (u = c(u)),
                f(e),
                "function" === typeof d &&
                  "prototype" === u &&
                  "value" in e &&
                  p in e &&
                  !e.writable)
              ) {
                var a = i(d, u);
                a &&
                  a.writable &&
                  ((d[u] = e.value),
                  (e = {
                    configurable: l in e ? e.configurable : a.configurable,
                    enumerable: s in e ? e.enumerable : a.enumerable,
                    writable: !1,
                  }));
              }
              return o(d, u, e);
            }
          : o
        : function (d, u, e) {
            if ((f(d), (u = c(u)), f(e), n))
              try {
                return o(d, u, e);
              } catch (a) {}
            if ("get" in e || "set" in e) throw r("Accessors not supported");
            return "value" in e && (d[u] = e.value), d;
          };
    },
    49677: function (d, u, e) {
      var a = e(55746),
        n = e(78834),
        t = e(36760),
        f = e(31887),
        c = e(74529),
        r = e(83894),
        o = e(90953),
        i = e(2840),
        s = Object.getOwnPropertyDescriptor;
      u.f = a
        ? s
        : function (d, u) {
            if (((d = c(d)), (u = r(u)), i))
              try {
                return s(d, u);
              } catch (e) {}
            if (o(d, u)) return f(!n(t.f, d, u), d[u]);
          };
    },
    684: function (d, u, e) {
      var a = e(82532),
        n = e(74529),
        t = e(10946).f,
        f = e(15790),
        c =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      d.exports.f = function (d) {
        return c && "Window" == a(d)
          ? (function (d) {
              try {
                return t(d);
              } catch (u) {
                return f(c);
              }
            })(d)
          : t(n(d));
      };
    },
    10946: function (d, u, e) {
      var a = e(55629),
        n = e(56759).concat("length", "prototype");
      u.f =
        Object.getOwnPropertyNames ||
        function (d) {
          return a(d, n);
        };
    },
    87857: function (d, u) {
      u.f = Object.getOwnPropertySymbols;
    },
    249: function (d, u, e) {
      var a = e(90953),
        n = e(57475),
        t = e(89678),
        f = e(44262),
        c = e(64160),
        r = f("IE_PROTO"),
        o = Object,
        i = o.prototype;
      d.exports = c
        ? o.getPrototypeOf
        : function (d) {
            var u = t(d);
            if (a(u, r)) return u[r];
            var e = u.constructor;
            return n(e) && u instanceof e
              ? e.prototype
              : u instanceof o
              ? i
              : null;
          };
    },
    7046: function (d, u, e) {
      var a = e(95329);
      d.exports = a({}.isPrototypeOf);
    },
    55629: function (d, u, e) {
      var a = e(95329),
        n = e(90953),
        t = e(74529),
        f = e(31692).indexOf,
        c = e(27748),
        r = a([].push);
      d.exports = function (d, u) {
        var e,
          a = t(d),
          o = 0,
          i = [];
        for (e in a) !n(c, e) && n(a, e) && r(i, e);
        for (; u.length > o; ) n(a, (e = u[o++])) && (~f(i, e) || r(i, e));
        return i;
      };
    },
    14771: function (d, u, e) {
      var a = e(55629),
        n = e(56759);
      d.exports =
        Object.keys ||
        function (d) {
          return a(d, n);
        };
    },
    36760: function (d, u) {
      "use strict";
      var e = {}.propertyIsEnumerable,
        a = Object.getOwnPropertyDescriptor,
        n = a && !e.call({ 1: 2 }, 1);
      u.f = n
        ? function (d) {
            var u = a(this, d);
            return !!u && u.enumerable;
          }
        : e;
    },
    88929: function (d, u, e) {
      var a = e(95329),
        n = e(96059),
        t = e(11851);
      d.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var d,
                u = !1,
                e = {};
              try {
                (d = a(
                  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                    .set
                ))(e, []),
                  (u = e instanceof Array);
              } catch (f) {}
              return function (e, a) {
                return n(e), t(a), u ? d(e, a) : (e.__proto__ = a), e;
              };
            })()
          : void 0);
    },
    95623: function (d, u, e) {
      "use strict";
      var a = e(22885),
        n = e(9697);
      d.exports = a
        ? {}.toString
        : function () {
            return "[object " + n(this) + "]";
          };
    },
    39811: function (d, u, e) {
      var a = e(78834),
        n = e(57475),
        t = e(10941),
        f = TypeError;
      d.exports = function (d, u) {
        var e, c;
        if ("string" === u && n((e = d.toString)) && !t((c = a(e, d))))
          return c;
        if (n((e = d.valueOf)) && !t((c = a(e, d)))) return c;
        if ("string" !== u && n((e = d.toString)) && !t((c = a(e, d))))
          return c;
        throw f("Can't convert object to primitive value");
      };
    },
    54058: function (d) {
      d.exports = {};
    },
    66777: function (d, u, e) {
      "use strict";
      var a = e(96059);
      d.exports = function () {
        var d = a(this),
          u = "";
        return (
          d.hasIndices && (u += "d"),
          d.global && (u += "g"),
          d.ignoreCase && (u += "i"),
          d.multiline && (u += "m"),
          d.dotAll && (u += "s"),
          d.unicode && (u += "u"),
          d.unicodeSets && (u += "v"),
          d.sticky && (u += "y"),
          u
        );
      };
    },
    43613: function (d, u, e) {
      var a = e(78834),
        n = e(90953),
        t = e(7046),
        f = e(66777),
        c = RegExp.prototype;
      d.exports = function (d) {
        var u = d.flags;
        return void 0 !== u || "flags" in c || n(d, "flags") || !t(c, d)
          ? u
          : a(f, d);
      };
    },
    48219: function (d) {
      var u = TypeError;
      d.exports = function (d) {
        if (void 0 == d) throw u("Can't call method on " + d);
        return d;
      };
    },
    90904: function (d, u, e) {
      var a = e(22885),
        n = e(65988).f,
        t = e(32029),
        f = e(90953),
        c = e(95623),
        r = e(99813)("toStringTag");
      d.exports = function (d, u, e, o) {
        if (d) {
          var i = e ? d : d.prototype;
          f(i, r) || n(i, r, { configurable: !0, value: u }),
            o && !a && t(i, "toString", c);
        }
      };
    },
    44262: function (d, u, e) {
      var a = e(68726),
        n = e(99418),
        t = a("keys");
      d.exports = function (d) {
        return t[d] || (t[d] = n(d));
      };
    },
    63030: function (d, u, e) {
      var a = e(21899),
        n = e(75609),
        t = "__core-js_shared__",
        f = a[t] || n(t, {});
      d.exports = f;
    },
    68726: function (d, u, e) {
      var a = e(82529),
        n = e(63030);
      (d.exports = function (d, u) {
        return n[d] || (n[d] = void 0 !== u ? u : {});
      })("versions", []).push({
        version: "3.23.2",
        mode: a ? "pure" : "global",
        copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    64620: function (d, u, e) {
      var a = e(95329),
        n = e(62435),
        t = e(85803),
        f = e(48219),
        c = a("".charAt),
        r = a("".charCodeAt),
        o = a("".slice),
        i = function (d) {
          return function (u, e) {
            var a,
              i,
              s = t(f(u)),
              l = n(e),
              p = s.length;
            return l < 0 || l >= p
              ? d
                ? ""
                : void 0
              : (a = r(s, l)) < 55296 ||
                a > 56319 ||
                l + 1 === p ||
                (i = r(s, l + 1)) < 56320 ||
                i > 57343
              ? d
                ? c(s, l)
                : a
              : d
              ? o(s, l, l + 2)
              : i - 56320 + ((a - 55296) << 10) + 65536;
          };
        };
      d.exports = { codeAt: i(!1), charAt: i(!0) };
    },
    74853: function (d, u, e) {
      var a = e(95329),
        n = e(48219),
        t = e(85803),
        f = e(73483),
        c = a("".replace),
        r = "[" + f + "]",
        o = RegExp("^" + r + r + "*"),
        i = RegExp(r + r + "*$"),
        s = function (d) {
          return function (u) {
            var e = t(n(u));
            return 1 & d && (e = c(e, o, "")), 2 & d && (e = c(e, i, "")), e;
          };
        };
      d.exports = { start: s(1), end: s(2), trim: s(3) };
    },
    29630: function (d, u, e) {
      var a = e(78834),
        n = e(626),
        t = e(99813),
        f = e(95929);
      d.exports = function () {
        var d = n("Symbol"),
          u = d && d.prototype,
          e = u && u.valueOf,
          c = t("toPrimitive");
        u &&
          !u[c] &&
          f(
            u,
            c,
            function (d) {
              return a(e, this);
            },
            { arity: 1 }
          );
      };
    },
    59413: function (d, u, e) {
      var a = e(62435),
        n = Math.max,
        t = Math.min;
      d.exports = function (d, u) {
        var e = a(d);
        return e < 0 ? n(e + u, 0) : t(e, u);
      };
    },
    74529: function (d, u, e) {
      var a = e(37026),
        n = e(48219);
      d.exports = function (d) {
        return a(n(d));
      };
    },
    62435: function (d, u, e) {
      var a = e(35331);
      d.exports = function (d) {
        var u = +d;
        return u !== u || 0 === u ? 0 : a(u);
      };
    },
    43057: function (d, u, e) {
      var a = e(62435),
        n = Math.min;
      d.exports = function (d) {
        return d > 0 ? n(a(d), 9007199254740991) : 0;
      };
    },
    89678: function (d, u, e) {
      var a = e(48219),
        n = Object;
      d.exports = function (d) {
        return n(a(d));
      };
    },
    46935: function (d, u, e) {
      var a = e(78834),
        n = e(10941),
        t = e(56664),
        f = e(14229),
        c = e(39811),
        r = e(99813),
        o = TypeError,
        i = r("toPrimitive");
      d.exports = function (d, u) {
        if (!n(d) || t(d)) return d;
        var e,
          r = f(d, i);
        if (r) {
          if (
            (void 0 === u && (u = "default"), (e = a(r, d, u)), !n(e) || t(e))
          )
            return e;
          throw o("Can't convert object to primitive value");
        }
        return void 0 === u && (u = "number"), c(d, u);
      };
    },
    83894: function (d, u, e) {
      var a = e(46935),
        n = e(56664);
      d.exports = function (d) {
        var u = a(d, "string");
        return n(u) ? u : u + "";
      };
    },
    22885: function (d, u, e) {
      var a = {};
      (a[e(99813)("toStringTag")] = "z"),
        (d.exports = "[object z]" === String(a));
    },
    85803: function (d, u, e) {
      var a = e(9697),
        n = String;
      d.exports = function (d) {
        if ("Symbol" === a(d))
          throw TypeError("Cannot convert a Symbol value to a string");
        return n(d);
      };
    },
    69826: function (d) {
      var u = String;
      d.exports = function (d) {
        try {
          return u(d);
        } catch (e) {
          return "Object";
        }
      };
    },
    99418: function (d, u, e) {
      var a = e(95329),
        n = 0,
        t = Math.random(),
        f = a((1).toString);
      d.exports = function (d) {
        return "Symbol(" + (void 0 === d ? "" : d) + ")_" + f(++n + t, 36);
      };
    },
    32302: function (d, u, e) {
      var a = e(72497);
      d.exports = a && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    83937: function (d, u, e) {
      var a = e(55746),
        n = e(95981);
      d.exports =
        a &&
        n(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    11477: function (d, u, e) {
      var a = e(99813);
      u.f = a;
    },
    99813: function (d, u, e) {
      var a = e(21899),
        n = e(68726),
        t = e(90953),
        f = e(99418),
        c = e(72497),
        r = e(32302),
        o = n("wks"),
        i = a.Symbol,
        s = i && i.for,
        l = r ? i : (i && i.withoutSetter) || f;
      d.exports = function (d) {
        if (!t(o, d) || (!c && "string" != typeof o[d])) {
          var u = "Symbol." + d;
          c && t(i, d) ? (o[d] = i[d]) : (o[d] = r && s ? s(u) : l(u));
        }
        return o[d];
      };
    },
    73483: function (d) {
      d.exports =
        "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    },
    85906: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(95981),
        t = e(1052),
        f = e(10941),
        c = e(89678),
        r = e(10623),
        o = e(66796),
        i = e(55449),
        s = e(64692),
        l = e(50568),
        p = e(99813),
        m = e(53385),
        b = p("isConcatSpreadable"),
        h =
          m >= 51 ||
          !n(function () {
            var d = [];
            return (d[b] = !1), d.concat()[0] !== d;
          }),
        v = l("concat"),
        g = function (d) {
          if (!f(d)) return !1;
          var u = d[b];
          return void 0 !== u ? !!u : t(d);
        };
      a(
        { target: "Array", proto: !0, arity: 1, forced: !h || !v },
        {
          concat: function (d) {
            var u,
              e,
              a,
              n,
              t,
              f = c(this),
              l = s(f, 0),
              p = 0;
            for (u = -1, a = arguments.length; u < a; u++)
              if (g((t = -1 === u ? f : arguments[u])))
                for (n = r(t), o(p + n), e = 0; e < n; e++, p++)
                  e in t && i(l, p, t[e]);
              else o(p + 1), i(l, p++, t);
            return (l.length = p), l;
          },
        }
      );
    },
    2437: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(56837);
      a(
        { target: "Array", proto: !0, forced: [].forEach != n },
        { forEach: n }
      );
    },
    53242: function (d, u, e) {
      var a = e(76887),
        n = e(11354);
      a(
        {
          target: "Array",
          stat: !0,
          forced: !e(21385)(function (d) {
            Array.from(d);
          }),
        },
        { from: n }
      );
    },
    97690: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(31692).includes,
        t = e(95981),
        f = e(18479);
      a(
        {
          target: "Array",
          proto: !0,
          forced: t(function () {
            return !Array(1).includes();
          }),
        },
        {
          includes: function (d) {
            return n(this, d, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        f("includes");
    },
    99076: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(95329),
        t = e(31692).indexOf,
        f = e(34194),
        c = n([].indexOf),
        r = !!c && 1 / c([1], 1, -0) < 0,
        o = f("indexOf");
      a(
        { target: "Array", proto: !0, forced: r || !o },
        {
          indexOf: function (d) {
            var u = arguments.length > 1 ? arguments[1] : void 0;
            return r ? c(this, d, u) || 0 : t(this, d, u);
          },
        }
      );
    },
    92737: function (d, u, e) {
      e(76887)({ target: "Array", stat: !0 }, { isArray: e(1052) });
    },
    66274: function (d, u, e) {
      "use strict";
      var a = e(74529),
        n = e(18479),
        t = e(12077),
        f = e(45402),
        c = e(65988).f,
        r = e(47771),
        o = e(82529),
        i = e(55746),
        s = "Array Iterator",
        l = f.set,
        p = f.getterFor(s);
      d.exports = r(
        Array,
        "Array",
        function (d, u) {
          l(this, { type: s, target: a(d), index: 0, kind: u });
        },
        function () {
          var d = p(this),
            u = d.target,
            e = d.kind,
            a = d.index++;
          return !u || a >= u.length
            ? ((d.target = void 0), { value: void 0, done: !0 })
            : "keys" == e
            ? { value: a, done: !1 }
            : "values" == e
            ? { value: u[a], done: !1 }
            : { value: [a, u[a]], done: !1 };
        },
        "values"
      );
      var m = (t.Arguments = t.Array);
      if (
        (n("keys"), n("values"), n("entries"), !o && i && "values" !== m.name)
      )
        try {
          c(m, "name", { value: "values" });
        } catch (b) {}
    },
    68787: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(3610).map;
      a(
        { target: "Array", proto: !0, forced: !e(50568)("map") },
        {
          map: function (d) {
            return n(this, d, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    81876: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(46499).left,
        t = e(34194),
        f = e(53385),
        c = e(6049);
      a(
        {
          target: "Array",
          proto: !0,
          forced: !t("reduce") || (!c && f > 79 && f < 83),
        },
        {
          reduce: function (d) {
            var u = arguments.length;
            return n(this, d, u, u > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    60186: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(1052),
        t = e(24284),
        f = e(10941),
        c = e(59413),
        r = e(10623),
        o = e(74529),
        i = e(55449),
        s = e(99813),
        l = e(50568),
        p = e(93765),
        m = l("slice"),
        b = s("species"),
        h = Array,
        v = Math.max;
      a(
        { target: "Array", proto: !0, forced: !m },
        {
          slice: function (d, u) {
            var e,
              a,
              s,
              l = o(this),
              m = r(l),
              g = c(d, m),
              y = c(void 0 === u ? m : u, m);
            if (
              n(l) &&
              ((e = l.constructor),
              ((t(e) && (e === h || n(e.prototype))) ||
                (f(e) && null === (e = e[b]))) &&
                (e = void 0),
              e === h || void 0 === e)
            )
              return p(l, g, y);
            for (
              a = new (void 0 === e ? h : e)(v(y - g, 0)), s = 0;
              g < y;
              g++, s++
            )
              g in l && i(a, s, l[g]);
            return (a.length = s), a;
          },
        }
      );
    },
    4115: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(95329),
        t = e(24883),
        f = e(89678),
        c = e(10623),
        r = e(15863),
        o = e(85803),
        i = e(95981),
        s = e(61388),
        l = e(34194),
        p = e(34342),
        m = e(81046),
        b = e(53385),
        h = e(18938),
        v = [],
        g = n(v.sort),
        y = n(v.push),
        x = i(function () {
          v.sort(void 0);
        }),
        _ = i(function () {
          v.sort(null);
        }),
        I = l("sort"),
        S = !i(function () {
          if (b) return b < 70;
          if (!(p && p > 3)) {
            if (m) return !0;
            if (h) return h < 603;
            var d,
              u,
              e,
              a,
              n = "";
            for (d = 65; d < 76; d++) {
              switch (((u = String.fromCharCode(d)), d)) {
                case 66:
                case 69:
                case 70:
                case 72:
                  e = 3;
                  break;
                case 68:
                case 71:
                  e = 4;
                  break;
                default:
                  e = 2;
              }
              for (a = 0; a < 47; a++) v.push({ k: u + a, v: e });
            }
            for (
              v.sort(function (d, u) {
                return u.v - d.v;
              }),
                a = 0;
              a < v.length;
              a++
            )
              (u = v[a].k.charAt(0)), n.charAt(n.length - 1) !== u && (n += u);
            return "DGBEFHACIJK" !== n;
          }
        });
      a(
        { target: "Array", proto: !0, forced: x || !_ || !I || !S },
        {
          sort: function (d) {
            void 0 !== d && t(d);
            var u = f(this);
            if (S) return void 0 === d ? g(u) : g(u, d);
            var e,
              a,
              n = [],
              i = c(u);
            for (a = 0; a < i; a++) a in u && y(n, u[a]);
            for (
              s(
                n,
                (function (d) {
                  return function (u, e) {
                    return void 0 === e
                      ? -1
                      : void 0 === u
                      ? 1
                      : void 0 !== d
                      ? +d(u, e) || 0
                      : o(u) > o(e)
                      ? 1
                      : -1;
                  };
                })(d)
              ),
                e = n.length,
                a = 0;
              a < e;

            )
              u[a] = n[a++];
            for (; a < i; ) r(u, a++);
            return u;
          },
        }
      );
    },
    32619: function (d, u, e) {
      var a = e(76887),
        n = e(626),
        t = e(79730),
        f = e(78834),
        c = e(95329),
        r = e(95981),
        o = e(1052),
        i = e(57475),
        s = e(10941),
        l = e(56664),
        p = e(93765),
        m = e(72497),
        b = n("JSON", "stringify"),
        h = c(/./.exec),
        v = c("".charAt),
        g = c("".charCodeAt),
        y = c("".replace),
        x = c((1).toString),
        _ = /[\uD800-\uDFFF]/g,
        I = /^[\uD800-\uDBFF]$/,
        S = /^[\uDC00-\uDFFF]$/,
        w =
          !m ||
          r(function () {
            var d = n("Symbol")();
            return (
              "[null]" != b([d]) || "{}" != b({ a: d }) || "{}" != b(Object(d))
            );
          }),
        A = r(function () {
          return (
            '"\\udf06\\ud834"' !== b("\udf06\ud834") ||
            '"\\udead"' !== b("\udead")
          );
        }),
        E = function (d, u) {
          var e = p(arguments),
            a = u;
          if ((s(u) || void 0 !== d) && !l(d))
            return (
              o(u) ||
                (u = function (d, u) {
                  if ((i(a) && (u = f(a, this, d, u)), !l(u))) return u;
                }),
              (e[1] = u),
              t(b, null, e)
            );
        },
        C = function (d, u, e) {
          var a = v(e, u - 1),
            n = v(e, u + 1);
          return (h(I, d) && !h(S, n)) || (h(S, d) && !h(I, a))
            ? "\\u" + x(g(d, 0), 16)
            : d;
        };
      b &&
        a(
          { target: "JSON", stat: !0, arity: 3, forced: w || A },
          {
            stringify: function (d, u, e) {
              var a = p(arguments),
                n = t(w ? E : b, null, a);
              return A && "string" == typeof n ? y(n, _, C) : n;
            },
          }
        );
    },
    69120: function (d, u, e) {
      var a = e(21899);
      e(90904)(a.JSON, "JSON", !0);
    },
    79413: function () {},
    53882: function (d, u, e) {
      e(76887)(
        { target: "Object", stat: !0, sham: !e(55746) },
        { create: e(29290) }
      );
    },
    86450: function (d, u, e) {
      var a = e(76887),
        n = e(55746),
        t = e(65988).f;
      a(
        {
          target: "Object",
          stat: !0,
          forced: Object.defineProperty !== t,
          sham: !n,
        },
        { defineProperty: t }
      );
    },
    37144: function (d, u, e) {
      var a = e(76887),
        n = e(72497),
        t = e(95981),
        f = e(87857),
        c = e(89678);
      a(
        {
          target: "Object",
          stat: !0,
          forced:
            !n ||
            t(function () {
              f.f(1);
            }),
        },
        {
          getOwnPropertySymbols: function (d) {
            var u = f.f;
            return u ? u(c(d)) : [];
          },
        }
      );
    },
    55967: function () {},
    14038: function (d, u, e) {
      var a = e(76887),
        n = e(29806);
      a({ global: !0, forced: parseInt != n }, { parseInt: n });
    },
    1502: function () {},
    94261: function () {},
    11035: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(95329),
        t = e(70344),
        f = e(48219),
        c = e(85803),
        r = e(67772),
        o = n("".indexOf);
      a(
        { target: "String", proto: !0, forced: !r("includes") },
        {
          includes: function (d) {
            return !!~o(
              c(f(this)),
              c(t(d)),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    77971: function (d, u, e) {
      "use strict";
      var a = e(64620).charAt,
        n = e(85803),
        t = e(45402),
        f = e(47771),
        c = "String Iterator",
        r = t.set,
        o = t.getterFor(c);
      f(
        String,
        "String",
        function (d) {
          r(this, { type: c, string: n(d), index: 0 });
        },
        function () {
          var d,
            u = o(this),
            e = u.string,
            n = u.index;
          return n >= e.length
            ? { value: void 0, done: !0 }
            : ((d = a(e, n)), (u.index += d.length), { value: d, done: !1 });
        }
      );
    },
    8555: function (d, u, e) {
      e(66349)("asyncIterator");
    },
    48616: function (d, u, e) {
      "use strict";
      var a = e(76887),
        n = e(21899),
        t = e(78834),
        f = e(95329),
        c = e(82529),
        r = e(55746),
        o = e(72497),
        i = e(95981),
        s = e(90953),
        l = e(7046),
        p = e(96059),
        m = e(74529),
        b = e(83894),
        h = e(85803),
        v = e(31887),
        g = e(29290),
        y = e(14771),
        x = e(10946),
        _ = e(684),
        I = e(87857),
        S = e(49677),
        w = e(65988),
        A = e(59938),
        E = e(36760),
        C = e(95929),
        O = e(68726),
        k = e(44262),
        P = e(27748),
        M = e(99418),
        T = e(99813),
        L = e(11477),
        j = e(66349),
        N = e(29630),
        F = e(90904),
        R = e(45402),
        B = e(3610).forEach,
        D = k("hidden"),
        U = "Symbol",
        G = R.set,
        K = R.getterFor(U),
        H = Object.prototype,
        $ = n.Symbol,
        J = $ && $.prototype,
        z = n.TypeError,
        V = n.QObject,
        Y = S.f,
        Z = w.f,
        W = _.f,
        q = E.f,
        X = f([].push),
        Q = O("symbols"),
        dd = O("op-symbols"),
        ud = O("wks"),
        ed = !V || !V.prototype || !V.prototype.findChild,
        ad =
          r &&
          i(function () {
            return (
              7 !=
              g(
                Z({}, "a", {
                  get: function () {
                    return Z(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (d, u, e) {
                var a = Y(H, u);
                a && delete H[u], Z(d, u, e), a && d !== H && Z(H, u, a);
              }
            : Z,
        nd = function (d, u) {
          var e = (Q[d] = g(J));
          return (
            G(e, { type: U, tag: d, description: u }),
            r || (e.description = u),
            e
          );
        },
        td = function (d, u, e) {
          d === H && td(dd, u, e), p(d);
          var a = b(u);
          return (
            p(e),
            s(Q, a)
              ? (e.enumerable
                  ? (s(d, D) && d[D][a] && (d[D][a] = !1),
                    (e = g(e, { enumerable: v(0, !1) })))
                  : (s(d, D) || Z(d, D, v(1, {})), (d[D][a] = !0)),
                ad(d, a, e))
              : Z(d, a, e)
          );
        },
        fd = function (d, u) {
          p(d);
          var e = m(u),
            a = y(e).concat(id(e));
          return (
            B(a, function (u) {
              (r && !t(cd, e, u)) || td(d, u, e[u]);
            }),
            d
          );
        },
        cd = function (d) {
          var u = b(d),
            e = t(q, this, u);
          return (
            !(this === H && s(Q, u) && !s(dd, u)) &&
            (!(e || !s(this, u) || !s(Q, u) || (s(this, D) && this[D][u])) || e)
          );
        },
        rd = function (d, u) {
          var e = m(d),
            a = b(u);
          if (e !== H || !s(Q, a) || s(dd, a)) {
            var n = Y(e, a);
            return (
              !n || !s(Q, a) || (s(e, D) && e[D][a]) || (n.enumerable = !0), n
            );
          }
        },
        od = function (d) {
          var u = W(m(d)),
            e = [];
          return (
            B(u, function (d) {
              s(Q, d) || s(P, d) || X(e, d);
            }),
            e
          );
        },
        id = function (d) {
          var u = d === H,
            e = W(u ? dd : m(d)),
            a = [];
          return (
            B(e, function (d) {
              !s(Q, d) || (u && !s(H, d)) || X(a, Q[d]);
            }),
            a
          );
        };
      o ||
        (($ = function () {
          if (l(J, this)) throw z("Symbol is not a constructor");
          var d =
              arguments.length && void 0 !== arguments[0]
                ? h(arguments[0])
                : void 0,
            u = M(d),
            e = function (d) {
              this === H && t(e, dd, d),
                s(this, D) && s(this[D], u) && (this[D][u] = !1),
                ad(this, u, v(1, d));
            };
          return r && ed && ad(H, u, { configurable: !0, set: e }), nd(u, d);
        }),
        C((J = $.prototype), "toString", function () {
          return K(this).tag;
        }),
        C($, "withoutSetter", function (d) {
          return nd(M(d), d);
        }),
        (E.f = cd),
        (w.f = td),
        (A.f = fd),
        (S.f = rd),
        (x.f = _.f = od),
        (I.f = id),
        (L.f = function (d) {
          return nd(T(d), d);
        }),
        r &&
          (Z(J, "description", {
            configurable: !0,
            get: function () {
              return K(this).description;
            },
          }),
          c || C(H, "propertyIsEnumerable", cd, { unsafe: !0 }))),
        a(
          { global: !0, constructor: !0, wrap: !0, forced: !o, sham: !o },
          { Symbol: $ }
        ),
        B(y(ud), function (d) {
          j(d);
        }),
        a(
          { target: U, stat: !0, forced: !o },
          {
            useSetter: function () {
              ed = !0;
            },
            useSimple: function () {
              ed = !1;
            },
          }
        ),
        a(
          { target: "Object", stat: !0, forced: !o, sham: !r },
          {
            create: function (d, u) {
              return void 0 === u ? g(d) : fd(g(d), u);
            },
            defineProperty: td,
            defineProperties: fd,
            getOwnPropertyDescriptor: rd,
          }
        ),
        a(
          { target: "Object", stat: !0, forced: !o },
          { getOwnPropertyNames: od }
        ),
        N(),
        F($, U),
        (P[D] = !0);
    },
    52615: function () {},
    64523: function (d, u, e) {
      var a = e(76887),
        n = e(626),
        t = e(90953),
        f = e(85803),
        c = e(68726),
        r = e(25366),
        o = c("string-to-symbol-registry"),
        i = c("symbol-to-string-registry");
      a(
        { target: "Symbol", stat: !0, forced: !r },
        {
          for: function (d) {
            var u = f(d);
            if (t(o, u)) return o[u];
            var e = n("Symbol")(u);
            return (o[u] = e), (i[e] = u), e;
          },
        }
      );
    },
    21732: function (d, u, e) {
      e(66349)("hasInstance");
    },
    35903: function (d, u, e) {
      e(66349)("isConcatSpreadable");
    },
    1825: function (d, u, e) {
      e(66349)("iterator");
    },
    35824: function (d, u, e) {
      e(48616), e(64523), e(38608), e(32619), e(37144);
    },
    38608: function (d, u, e) {
      var a = e(76887),
        n = e(90953),
        t = e(56664),
        f = e(69826),
        c = e(68726),
        r = e(25366),
        o = c("symbol-to-string-registry");
      a(
        { target: "Symbol", stat: !0, forced: !r },
        {
          keyFor: function (d) {
            if (!t(d)) throw TypeError(f(d) + " is not a symbol");
            if (n(o, d)) return o[d];
          },
        }
      );
    },
    45915: function (d, u, e) {
      e(66349)("matchAll");
    },
    28394: function (d, u, e) {
      e(66349)("match");
    },
    61766: function (d, u, e) {
      e(66349)("replace");
    },
    62737: function (d, u, e) {
      e(66349)("search");
    },
    89911: function (d, u, e) {
      e(66349)("species");
    },
    74315: function (d, u, e) {
      e(66349)("split");
    },
    63131: function (d, u, e) {
      var a = e(66349),
        n = e(29630);
      a("toPrimitive"), n();
    },
    64714: function (d, u, e) {
      var a = e(626),
        n = e(66349),
        t = e(90904);
      n("toStringTag"), t(a("Symbol"), "Symbol");
    },
    70659: function (d, u, e) {
      e(66349)("unscopables");
    },
    28783: function (d, u, e) {
      e(66349)("asyncDispose");
    },
    43975: function (d, u, e) {
      e(66349)("dispose");
    },
    65799: function (d, u, e) {
      e(66349)("matcher");
    },
    31943: function (d, u, e) {
      e(66349)("metadataKey");
    },
    45414: function (d, u, e) {
      e(66349)("metadata");
    },
    46774: function (d, u, e) {
      e(66349)("observable");
    },
    80620: function (d, u, e) {
      e(66349)("patternMatch");
    },
    36172: function (d, u, e) {
      e(66349)("replaceAll");
    },
    7634: function (d, u, e) {
      e(66274);
      var a = e(63281),
        n = e(21899),
        t = e(9697),
        f = e(32029),
        c = e(12077),
        r = e(99813)("toStringTag");
      for (var o in a) {
        var i = n[o],
          s = i && i.prototype;
        s && t(s) !== r && f(s, r, o), (c[o] = c.Array);
      }
    },
    27698: function (d, u, e) {
      var a = e(54493);
      d.exports = a;
    },
    83363: function (d, u, e) {
      var a = e(24034);
      d.exports = a;
    },
    49216: function (d, u, e) {
      var a = e(99324);
      d.exports = a;
    },
    56243: function (d, u, e) {
      var a = e(13830);
      e(7634), (d.exports = a);
    },
    63698: function (d, u, e) {
      var a = e(45581);
      e(7634), (d.exports = a);
    },
    8065: function (d, u, e) {
      var a = e(56043);
      d.exports = a;
    },
    48842: function (d, u, e) {
      var a = e(66793);
      d.exports = a;
    },
    46279: function (d, u, e) {
      e(7634);
      var a = e(9697),
        n = e(90953),
        t = e(7046),
        f = e(49216),
        c = Array.prototype,
        r = { DOMTokenList: !0, NodeList: !0 };
      d.exports = function (d) {
        var u = d.forEach;
        return d === c || (t(c, d) && u === c.forEach) || n(r, a(d)) ? f : u;
      };
    },
    33778: function (d, u, e) {
      var a = e(58557);
      d.exports = a;
    },
    19373: function (d, u, e) {
      var a = e(34570);
      d.exports = a;
    },
    8918: function (d, u, e) {
      var a = e(88287);
      d.exports = a;
    },
    52527: function (d, u, e) {
      var a = e(68025);
      d.exports = a;
    },
    82073: function (d, u, e) {
      var a = e(69601);
      d.exports = a;
    },
    62856: function (d, u, e) {
      var a = e(69355);
      d.exports = a;
    },
    14471: function (d, u, e) {
      var a = e(35254);
      d.exports = a;
    },
    41910: function (d, u, e) {
      var a = e(48171);
      d.exports = a;
    },
    74888: function (d, u, e) {
      var a = e(98524);
      d.exports = a;
    },
    92547: function (d, u, e) {
      var a = e(57473);
      e(7634), (d.exports = a);
    },
    2466: function (d, u, e) {
      "use strict";
      const a = e(20648),
        n = (d, u = "_") => {
          if ("string" !== typeof d || "string" !== typeof u)
            throw new TypeError(
              "The `text` and `separator` arguments should be of type `string`"
            );
          const e = a("([\\p{Ll}\\d])(\\p{Lu})", "g"),
            n = a("(\\p{Lu}+)(\\p{Lu}[\\p{Ll}\\d]+)", "g");
          return d.replace(e, `$1${u}$2`).replace(n, `$1${u}$2`).toLowerCase();
        };
      (d.exports = n), (d.exports.default = n);
    },
    17156: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(39022)),
        t = a(e(58118)),
        f = a(e(97606)),
        c = a(e(24282));
      (u.default = function (d) {
        var u = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
          e = d.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, u], "g", {
            conjunction: "or",
          });
        function a(d) {
          var u = /^(?:\(\?:\))*\^/,
            e = /\$(?:\(\?:\))*$/;
          return u.test(d) && e.test(d) && e.test(d.replace(/\\[\s\S]/g, ""))
            ? d.replace(u, "").replace(e, "")
            : d;
        }
        function r(u, e) {
          var a = e ? "x" : "";
          return d.isRegExp(u)
            ? u.xregexp && u.xregexp.captureNames
              ? u
              : d(u.source, a)
            : d(u, a);
        }
        function o(u) {
          return u instanceof RegExp ? u : d.escape(u);
        }
        function i(d, u, e) {
          return (d["subpattern".concat(e)] = u), d;
        }
        function s(d, u, e) {
          return d + (u < e.length - 1 ? "{{subpattern".concat(u, "}}") : "");
        }
        (d.tag = function (u) {
          return function (e) {
            for (
              var a,
                n,
                t = arguments.length,
                r = new Array(t > 1 ? t - 1 : 0),
                l = 1;
              l < t;
              l++
            )
              r[l - 1] = arguments[l];
            var p = (0, c.default)((a = (0, f.default)(r).call(r, o))).call(
                a,
                i,
                {}
              ),
              m = (0, f.default)((n = e.raw))
                .call(n, s)
                .join("");
            return d.build(m, p, u);
          };
        }),
          (d.build = function (f, c, o) {
            o = o || "";
            var i = (0, t.default)(o).call(o, "x"),
              s = /^\(\?([\w$]+)\)/.exec(f);
            s && (o = d._clipDuplicates(o + s[1]));
            var l = {};
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var m = r(c[p], i);
                l[p] = {
                  pattern: a(m.source),
                  names: m.xregexp.captureNames || [],
                };
              }
            var b,
              h = r(f, i),
              v = 0,
              g = 0,
              y = [0],
              x = h.xregexp.captureNames || [],
              _ = h.source.replace(e, function (d, e, a, t, f) {
                var c,
                  r,
                  o,
                  i = e || a;
                if (i) {
                  var s;
                  if (!l.hasOwnProperty(i))
                    throw new ReferenceError("Undefined property ".concat(d));
                  e
                    ? ((c = x[g]),
                      (y[++g] = ++v),
                      (r = "(?<".concat(c || i, ">")))
                    : (r = "(?:"),
                    (b = v);
                  var p = l[i].pattern.replace(u, function (d, u, e) {
                    if (u) {
                      if (((c = l[i].names[v - b]), ++v, c))
                        return "(?<".concat(c, ">");
                    } else if (e) return (o = +e - 1), l[i].names[o] ? "\\k<".concat(l[i].names[o], ">") : "\\".concat(+e + b);
                    return d;
                  });
                  return (0, n.default)((s = "".concat(r))).call(s, p, ")");
                }
                if (t) {
                  if (((c = x[g]), (y[++g] = ++v), c))
                    return "(?<".concat(c, ">");
                } else if (f) return x[(o = +f - 1)] ? "\\k<".concat(x[o], ">") : "\\".concat(y[+f]);
                return d;
              });
            return d(_, o);
          });
      }),
        (d.exports = u.default);
    },
    33689: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(24278)),
        t = a(e(39022)),
        f = a(e(58118));
      (u.default = function (d) {
        function u(d, u, e, a) {
          return { name: d, value: u, start: e, end: a };
        }
        d.matchRecursive = function (e, a, c, r, o) {
          (r = r || ""), (o = o || {});
          var i,
            s,
            l,
            p,
            m,
            b = (0, f.default)(r).call(r, "g"),
            h = (0, f.default)(r).call(r, "y"),
            v = r.replace(/y/g, ""),
            g = o.escapeChar,
            y = o.valueNames,
            x = [],
            _ = 0,
            I = 0,
            S = 0,
            w = 0;
          if (((a = d(a, v)), (c = d(c, v)), g)) {
            var A, E;
            if (g.length > 1)
              throw new Error("Cannot use more than one escape character");
            (g = d.escape(g)),
              (m = new RegExp(
                (0, t.default)(
                  (A = (0, t.default)(
                    (E = "(?:".concat(g, "[\\S\\s]|(?:(?!"))
                  ).call(
                    E,
                    d.union([a, c], "", { conjunction: "or" }).source,
                    ")[^"
                  ))
                ).call(A, g, "])+)+"),
                r.replace(/[^imu]+/g, "")
              ));
          }
          for (;;) {
            if (
              (g && (S += (d.exec(e, m, S, "sticky") || [""])[0].length),
              (l = d.exec(e, a, S)),
              (p = d.exec(e, c, S)),
              l && p && (l.index <= p.index ? (p = null) : (l = null)),
              l || p)
            )
              S = (I = (l || p).index) + (l || p)[0].length;
            else if (!_) break;
            if (h && !_ && I > w) break;
            if (l) _ || ((i = I), (s = S)), ++_;
            else {
              if (!p || !_)
                throw new Error("Unbalanced delimiter found in string");
              if (
                !--_ &&
                (y
                  ? (y[0] &&
                      i > w &&
                      x.push(u(y[0], (0, n.default)(e).call(e, w, i), w, i)),
                    y[1] &&
                      x.push(u(y[1], (0, n.default)(e).call(e, i, s), i, s)),
                    y[2] &&
                      x.push(u(y[2], (0, n.default)(e).call(e, s, I), s, I)),
                    y[3] &&
                      x.push(u(y[3], (0, n.default)(e).call(e, I, S), I, S)))
                  : x.push((0, n.default)(e).call(e, s, I)),
                (w = S),
                !b)
              )
                break;
            }
            I === S && ++S;
          }
          return (
            b &&
              !h &&
              y &&
              y[0] &&
              e.length > w &&
              x.push(u(y[0], (0, n.default)(e).call(e, w), w, e.length)),
            x
          );
        };
      }),
        (d.exports = u.default);
    },
    80517: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(55062)),
        t = a(e(58309)),
        f = a(e(19389)),
        c = a(e(33733)),
        r = a(e(25110)),
        o = a(e(24278)),
        i = a(e(58118)),
        s = a(e(39022)),
        l = a(e(86));
      function p(d, u) {
        var e;
        if ("undefined" === typeof c.default || null == (0, f.default)(d)) {
          if (
            (0, t.default)(d) ||
            (e = (function (d, u) {
              var e;
              if (!d) return;
              if ("string" === typeof d) return m(d, u);
              var a = (0, o.default)(
                (e = Object.prototype.toString.call(d))
              ).call(e, 8, -1);
              "Object" === a && d.constructor && (a = d.constructor.name);
              if ("Map" === a || "Set" === a) return (0, r.default)(d);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return m(d, u);
            })(d)) ||
            (u && d && "number" === typeof d.length)
          ) {
            e && (d = e);
            var a = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return a >= d.length
                  ? { done: !0 }
                  : { done: !1, value: d[a++] };
              },
              e: function (d) {
                throw d;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var s,
          l = !0,
          p = !1;
        return {
          s: function () {
            e = (0, n.default)(d);
          },
          n: function () {
            var d = e.next();
            return (l = d.done), d;
          },
          e: function (d) {
            (p = !0), (s = d);
          },
          f: function () {
            try {
              l || null == e.return || e.return();
            } finally {
              if (p) throw s;
            }
          },
        };
      }
      function m(d, u) {
        (null == u || u > d.length) && (u = d.length);
        for (var e = 0, a = new Array(u); e < u; e++) a[e] = d[e];
        return a;
      }
      (u.default = function (d) {
        var u = {},
          e = d._dec,
          a = d._hex,
          n = d._pad4;
        function t(d) {
          return d.replace(/[- _]+/g, "").toLowerCase();
        }
        function f(d) {
          var u = /^\\[xu](.+)/.exec(d);
          return u ? e(u[1]) : d.charCodeAt("\\" === d[0] ? 1 : 0);
        }
        function c(e) {
          return (
            u[e]["b!"] ||
            (u[e]["b!"] = (function (u) {
              var e = "",
                t = -1;
              return (
                (0, l.default)(d).call(
                  d,
                  u,
                  /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
                  function (d) {
                    var u = f(d[1]);
                    u > t + 1 &&
                      ((e += "\\u".concat(n(a(t + 1)))),
                      u > t + 2 && (e += "-\\u".concat(n(a(u - 1))))),
                      (t = f(d[2] || d[1]));
                  }
                ),
                t < 65535 &&
                  ((e += "\\u".concat(n(a(t + 1)))),
                  t < 65534 && (e += "-\\uFFFF")),
                e
              );
            })(u[e].bmp))
          );
        }
        function r(d, e) {
          var a = e ? "a!" : "a=";
          return (
            u[d][a] ||
            (u[d][a] = (function (d, e) {
              var a,
                n,
                t = u[d],
                f = "";
              return (
                t.bmp &&
                  !t.isBmpLast &&
                  (f = (0, s.default)((a = "[".concat(t.bmp, "]"))).call(
                    a,
                    t.astral ? "|" : ""
                  )),
                t.astral && (f += t.astral),
                t.isBmpLast &&
                  t.bmp &&
                  (f += (0, s.default)(
                    (n = "".concat(t.astral ? "|" : "", "["))
                  ).call(n, t.bmp, "]")),
                e
                  ? "(?:(?!".concat(
                      f,
                      ")(?:[\ud800-\udbff][\udc00-\udfff]|[\0-\uffff]))"
                    )
                  : "(?:".concat(f, ")")
              );
            })(d, e))
          );
        }
        d.addToken(
          /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
          function (d, e, a) {
            var n = "P" === d[1] || !!d[2],
              f = (0, i.default)(a).call(a, "A"),
              o = t(d[4] || d[3]),
              l = u[o];
            if ("P" === d[1] && d[2])
              throw new SyntaxError("Invalid double negation " + d[0]);
            if (!u.hasOwnProperty(o))
              throw new SyntaxError("Unknown Unicode token " + d[0]);
            if (l.inverseOf) {
              var p;
              if (((o = t(l.inverseOf)), !u.hasOwnProperty(o)))
                throw new ReferenceError(
                  (0, s.default)(
                    (p = "".concat(
                      "Unicode token missing data " + d[0],
                      " -> "
                    ))
                  ).call(p, l.inverseOf)
                );
              (l = u[o]), (n = !n);
            }
            if (!l.bmp && !f)
              throw new SyntaxError(
                "Astral mode required for Unicode token " + d[0]
              );
            if (f) {
              if ("class" === e)
                throw new SyntaxError(
                  "Astral mode does not support Unicode tokens within character classes"
                );
              return r(o, n);
            }
            return "class" === e
              ? n
                ? c(o)
                : l.bmp
              : "".concat((n ? "[^" : "[") + l.bmp, "]");
          },
          { scope: "all", optionalFlags: "A", leadChar: "\\" }
        ),
          (d.addUnicodeData = function (e) {
            var a,
              n = p(e);
            try {
              for (n.s(); !(a = n.n()).done; ) {
                var f = a.value;
                if (!f.name) throw new Error("Unicode token requires name");
                if (!(f.inverseOf || f.bmp || f.astral))
                  throw new Error(
                    "Unicode token has no character data " + f.name
                  );
                (u[t(f.name)] = f), f.alias && (u[t(f.alias)] = f);
              }
            } catch (c) {
              n.e(c);
            } finally {
              n.f();
            }
            d.cache.flush("patterns");
          }),
          (d._getUnicodeProperty = function (d) {
            var e = t(d);
            return u[e];
          });
      }),
        (d.exports = u.default);
    },
    31478: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(8402));
      (u.default = function (d) {
        if (!d.addUnicodeData)
          throw new ReferenceError(
            "Unicode Base must be loaded before Unicode Blocks"
          );
        d.addUnicodeData(n.default);
      }),
        (d.exports = u.default);
    },
    60632: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(24732));
      (u.default = function (d) {
        if (!d.addUnicodeData)
          throw new ReferenceError(
            "Unicode Base must be loaded before Unicode Categories"
          );
        d.addUnicodeData(n.default);
      }),
        (d.exports = u.default);
    },
    9461: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(12474));
      (u.default = function (d) {
        if (!d.addUnicodeData)
          throw new ReferenceError(
            "Unicode Base must be loaded before Unicode Properties"
          );
        var u = n.default;
        u.push({ name: "Assigned", inverseOf: "Cn" }), d.addUnicodeData(u);
      }),
        (d.exports = u.default);
    },
    22791: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(70772));
      (u.default = function (d) {
        if (!d.addUnicodeData)
          throw new ReferenceError(
            "Unicode Base must be loaded before Unicode Scripts"
          );
        d.addUnicodeData(n.default);
      }),
        (d.exports = u.default);
    },
    20648: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(95778)),
        t = a(e(17156)),
        f = a(e(33689)),
        c = a(e(80517)),
        r = a(e(31478)),
        o = a(e(60632)),
        i = a(e(9461)),
        s = a(e(22791));
      (0, t.default)(n.default),
        (0, f.default)(n.default),
        (0, c.default)(n.default),
        (0, r.default)(n.default),
        (0, o.default)(n.default),
        (0, i.default)(n.default),
        (0, s.default)(n.default);
      var l = n.default;
      (u.default = l), (d.exports = u.default);
    },
    95778: function (d, u, e) {
      "use strict";
      var a = e(17907);
      e(96718)(u, "__esModule", { value: !0 }), (u.default = void 0);
      var n = a(e(55062)),
        t = a(e(58309)),
        f = a(e(19389)),
        c = a(e(33733)),
        r = a(e(25110)),
        o = a(e(39022)),
        i = a(e(11882)),
        s = a(e(97499)),
        l = a(e(67375)),
        p = a(e(86)),
        m = a(e(58118)),
        b = a(e(80040)),
        h = a(e(24278)),
        v = a(e(2578)),
        g = a(e(53959));
      function y(d, u) {
        var e;
        if ("undefined" === typeof c.default || null == (0, f.default)(d)) {
          if (
            (0, t.default)(d) ||
            (e = (function (d, u) {
              var e;
              if (!d) return;
              if ("string" === typeof d) return x(d, u);
              var a = (0, h.default)(
                (e = Object.prototype.toString.call(d))
              ).call(e, 8, -1);
              "Object" === a && d.constructor && (a = d.constructor.name);
              if ("Map" === a || "Set" === a) return (0, r.default)(d);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return x(d, u);
            })(d)) ||
            (u && d && "number" === typeof d.length)
          ) {
            e && (d = e);
            var a = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return a >= d.length
                  ? { done: !0 }
                  : { done: !1, value: d[a++] };
              },
              e: function (d) {
                throw d;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          s = !0,
          l = !1;
        return {
          s: function () {
            e = (0, n.default)(d);
          },
          n: function () {
            var d = e.next();
            return (s = d.done), d;
          },
          e: function (d) {
            (l = !0), (i = d);
          },
          f: function () {
            try {
              s || null == e.return || e.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function x(d, u) {
        (null == u || u > d.length) && (u = d.length);
        for (var e = 0, a = new Array(u); e < u; e++) a[e] = d[e];
        return a;
      }
      var _ = { astral: !1, namespacing: !1 },
        I = {
          exec: RegExp.prototype.exec,
          test: RegExp.prototype.test,
          match: String.prototype.match,
          replace: String.prototype.replace,
          split: String.prototype.split,
        },
        S = {},
        w = {},
        A = {},
        E = [],
        C = "default",
        O = "class",
        k = {
          default:
            /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
          class:
            /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/,
        },
        P = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g,
        M = void 0 === I.exec.call(/()??/, "")[1],
        T = void 0 !== (0, g.default)(/x/),
        L = {}.toString;
      function j(d) {
        var u = !0;
        try {
          if ((new RegExp("", d), "y" === d)) {
            ".." === ".a".replace(new RegExp("a", "gy"), ".") && (u = !1);
          }
        } catch (e) {
          u = !1;
        }
        return u;
      }
      var N = j("u"),
        F = j("y"),
        R = { g: !0, i: !0, m: !0, u: N, y: F };
      function B(d, u, e, a, n) {
        var t;
        if (((d.xregexp = { captureNames: u }), n)) return d;
        if (d.__proto__) d.__proto__ = X.prototype;
        else for (var f in X.prototype) d[f] = X.prototype[f];
        return (
          (d.xregexp.source = e),
          (d.xregexp.flags = a
            ? (0, v.default)((t = a.split("")))
                .call(t)
                .join("")
            : a),
          d
        );
      }
      function D(d) {
        return I.replace.call(d, /([\s\S])(?=[\s\S]*\1)/g, "");
      }
      function U(d, u) {
        var e;
        if (!X.isRegExp(d)) throw new TypeError("Type RegExp expected");
        var a = d.xregexp || {},
          n = (function (d) {
            return T
              ? (0, g.default)(d)
              : I.exec.call(
                  /\/([a-z]*)$/i,
                  RegExp.prototype.toString.call(d)
                )[1];
          })(d),
          t = "",
          f = "",
          c = null,
          r = null;
        return (
          (u = u || {}).removeG && (f += "g"),
          u.removeY && (f += "y"),
          f &&
            (n = I.replace.call(n, new RegExp("[".concat(f, "]+"), "g"), "")),
          u.addG && (t += "g"),
          u.addY && (t += "y"),
          t && (n = D(n + t)),
          u.isInternalOnly ||
            (void 0 !== a.source && (c = a.source),
            null != (0, g.default)(a) &&
              (r = t ? D((0, g.default)(a) + t) : (0, g.default)(a))),
          (d = B(
            new RegExp(u.source || d.source, n),
            (function (d) {
              return !(!d.xregexp || !d.xregexp.captureNames);
            })(d)
              ? (0, h.default)((e = a.captureNames)).call(e, 0)
              : null,
            c,
            r,
            u.isInternalOnly
          ))
        );
      }
      function G(d) {
        return (0, b.default)(d, 16);
      }
      function K(d, u, e) {
        return "(" === d.input[d.index - 1] ||
          ")" === d.input[d.index + d[0].length] ||
          "|" === d.input[d.index - 1] ||
          "|" === d.input[d.index + d[0].length] ||
          d.index < 1 ||
          d.index + d[0].length >= d.input.length ||
          I.test.call(/^\(\?[:=!]/, d.input.substr(d.index - 3, 3)) ||
          (function (d, u, e) {
            return I.test.call(
              (0, m.default)(e).call(e, "x")
                ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
                : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
              (0, h.default)(d).call(d, u)
            );
          })(d.input, d.index + d[0].length, e)
          ? ""
          : "(?:)";
      }
      function H(d) {
        return (0, b.default)(d, 10).toString(16);
      }
      function $(d, u) {
        return L.call(d) === "[object ".concat(u, "]");
      }
      function J(d) {
        for (; d.length < 4; ) d = "0".concat(d);
        return d;
      }
      function z(d) {
        var u = {};
        return $(d, "String")
          ? ((0, p.default)(X).call(X, d, /[^\s,]+/, function (d) {
              u[d] = !0;
            }),
            u)
          : d;
      }
      function V(d) {
        if (!/^[\w$]$/.test(d))
          throw new Error("Flag must be a single character A-Za-z0-9_$");
        R[d] = !0;
      }
      function Y(d, u, e, a, n) {
        for (var t, f, c = E.length, r = d[e], o = null; c--; )
          if (
            !(
              ((f = E[c]).leadChar && f.leadChar !== r) ||
              (f.scope !== a && "all" !== f.scope) ||
              (f.flag && !(0, m.default)(u).call(u, f.flag))
            ) &&
            (t = X.exec(d, f.regex, e, "sticky"))
          ) {
            o = {
              matchLength: t[0].length,
              output: f.handler.call(n, t, a, u),
              reparse: f.reparse,
            };
            break;
          }
        return o;
      }
      function Z(d) {
        _.astral = d;
      }
      function W(d) {
        _.namespacing = d;
      }
      function q(d) {
        if (null == d)
          throw new TypeError("Cannot convert null or undefined to object");
        return d;
      }
      function X(d, u) {
        if (X.isRegExp(d)) {
          if (void 0 !== u)
            throw new TypeError("Cannot supply flags when copying a RegExp");
          return U(d);
        }
        if (
          ((d = void 0 === d ? "" : String(d)),
          (u = void 0 === u ? "" : String(u)),
          X.isInstalled("astral") &&
            !(0, m.default)(u).call(u, "A") &&
            (u += "A"),
          A[d] || (A[d] = {}),
          !A[d][u])
        ) {
          for (
            var e,
              a = { hasNamedCapture: !1, captureNames: [] },
              n = C,
              t = "",
              f = 0,
              c = (function (d, u) {
                if (D(u) !== u)
                  throw new SyntaxError(
                    "Invalid duplicate regex flag ".concat(u)
                  );
                d = I.replace.call(d, /^\(\?([\w$]+)\)/, function (d, e) {
                  if (I.test.call(/[gy]/, e))
                    throw new SyntaxError(
                      "Cannot use flag g or y in mode modifier ".concat(d)
                    );
                  return (u = D(u + e)), "";
                });
                var e,
                  a = y(u);
                try {
                  for (a.s(); !(e = a.n()).done; ) {
                    var n = e.value;
                    if (!R[n])
                      throw new SyntaxError("Unknown regex flag ".concat(n));
                  }
                } catch (t) {
                  a.e(t);
                } finally {
                  a.f();
                }
                return { pattern: d, flags: u };
              })(d, u),
              r = c.pattern,
              o = (0, g.default)(c);
            f < r.length;

          ) {
            do {
              (e = Y(r, o, f, n, a)) &&
                e.reparse &&
                (r =
                  (0, h.default)(r).call(r, 0, f) +
                  e.output +
                  (0, h.default)(r).call(r, f + e.matchLength));
            } while (e && e.reparse);
            if (e) (t += e.output), (f += e.matchLength || 1);
            else {
              var i = X.exec(r, k[n], f, "sticky"),
                s = (0, l.default)(i, 1)[0];
              (t += s),
                (f += s.length),
                "[" === s && n === C
                  ? (n = O)
                  : "]" === s && n === O && (n = C);
            }
          }
          A[d][u] = {
            pattern: I.replace.call(t, /(?:\(\?:\))+/g, "(?:)"),
            flags: I.replace.call(o, /[^gimuy]+/g, ""),
            captures: a.hasNamedCapture ? a.captureNames : null,
          };
        }
        var p = A[d][u];
        return B(new RegExp(p.pattern, (0, g.default)(p)), p.captures, d, u);
      }
      (X.prototype = /(?:)/),
        (X.version = "4.4.1"),
        (X._clipDuplicates = D),
        (X._hasNativeFlag = j),
        (X._dec = G),
        (X._hex = H),
        (X._pad4 = J),
        (X.addToken = function (d, u, e) {
          var a = (e = e || {}).optionalFlags;
          if ((e.flag && V(e.flag), a)) {
            var n,
              t = y((a = I.split.call(a, "")));
            try {
              for (t.s(); !(n = t.n()).done; ) {
                V(n.value);
              }
            } catch (f) {
              t.e(f);
            } finally {
              t.f();
            }
          }
          E.push({
            regex: U(d, { addG: !0, addY: F, isInternalOnly: !0 }),
            handler: u,
            scope: e.scope || C,
            flag: e.flag,
            reparse: e.reparse,
            leadChar: e.leadChar,
          }),
            X.cache.flush("patterns");
        }),
        (X.cache = function (d, u) {
          return w[d] || (w[d] = {}), w[d][u] || (w[d][u] = X(d, u));
        }),
        (X.cache.flush = function (d) {
          "patterns" === d ? (A = {}) : (w = {});
        }),
        (X.escape = function (d) {
          return I.replace.call(q(d), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        }),
        (X.exec = function (d, u, e, a) {
          var n,
            t,
            f = "g",
            c = !1;
          (n = F && !!(a || (u.sticky && !1 !== a)))
            ? (f += "y")
            : a && ((c = !0), (f += "FakeY")),
            (u.xregexp = u.xregexp || {});
          var r =
            u.xregexp[f] ||
            (u.xregexp[f] = U(u, {
              addG: !0,
              addY: n,
              source: c ? "".concat(u.source, "|()") : void 0,
              removeY: !1 === a,
              isInternalOnly: !0,
            }));
          return (
            (e = e || 0),
            (r.lastIndex = e),
            (t = S.exec.call(r, d)),
            c && t && "" === t.pop() && (t = null),
            u.global && (u.lastIndex = t ? r.lastIndex : 0),
            t
          );
        }),
        (X.forEach = function (d, u, e) {
          for (var a, n = 0, t = -1; (a = X.exec(d, u, n)); )
            e(a, ++t, d, u), (n = a.index + (a[0].length || 1));
        }),
        (X.globalize = function (d) {
          return U(d, { addG: !0 });
        }),
        (X.install = function (d) {
          (d = z(d)),
            !_.astral && d.astral && Z(!0),
            !_.namespacing && d.namespacing && W(!0);
        }),
        (X.isInstalled = function (d) {
          return !!_[d];
        }),
        (X.isRegExp = function (d) {
          return "[object RegExp]" === L.call(d);
        }),
        (X.match = function (d, u, e) {
          var a = (u.global && "one" !== e) || "all" === e,
            n = (a ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
          u.xregexp = u.xregexp || {};
          var t =
              u.xregexp[n] ||
              (u.xregexp[n] = U(u, {
                addG: !!a,
                removeG: "one" === e,
                isInternalOnly: !0,
              })),
            f = I.match.call(q(d), t);
          return (
            u.global &&
              (u.lastIndex = "one" === e && f ? f.index + f[0].length : 0),
            a ? f || [] : f && f[0]
          );
        }),
        (X.matchChain = function (d, u) {
          return (function d(e, a) {
            var n = u[a].regex ? u[a] : { regex: u[a] },
              t = [];
            function f(d) {
              if (n.backref) {
                var u = "Backreference to undefined group: ".concat(n.backref),
                  e = isNaN(n.backref);
                if (e && X.isInstalled("namespacing")) {
                  if (!(n.backref in d.groups)) throw new ReferenceError(u);
                } else if (!d.hasOwnProperty(n.backref))
                  throw new ReferenceError(u);
                var a =
                  e && X.isInstalled("namespacing")
                    ? d.groups[n.backref]
                    : d[n.backref];
                t.push(a || "");
              } else t.push(d[0]);
            }
            var c,
              r = y(e);
            try {
              for (r.s(); !(c = r.n()).done; ) {
                var o = c.value;
                (0, p.default)(X).call(X, o, n.regex, f);
              }
            } catch (i) {
              r.e(i);
            } finally {
              r.f();
            }
            return a !== u.length - 1 && t.length ? d(t, a + 1) : t;
          })([d], 0);
        }),
        (X.replace = function (d, u, e, a) {
          var n = X.isRegExp(u),
            t = (u.global && "one" !== a) || "all" === a,
            f = (t ? "g" : "") + (u.sticky ? "y" : "") || "noGY",
            c = u;
          n
            ? ((u.xregexp = u.xregexp || {}),
              (c =
                u.xregexp[f] ||
                (u.xregexp[f] = U(u, {
                  addG: !!t,
                  removeG: "one" === a,
                  isInternalOnly: !0,
                }))))
            : t && (c = new RegExp(X.escape(String(u)), "g"));
          var r = S.replace.call(q(d), c, e);
          return n && u.global && (u.lastIndex = 0), r;
        }),
        (X.replaceEach = function (d, u) {
          var e,
            a = y(u);
          try {
            for (a.s(); !(e = a.n()).done; ) {
              var n = e.value;
              d = X.replace(d, n[0], n[1], n[2]);
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          return d;
        }),
        (X.split = function (d, u, e) {
          return S.split.call(q(d), u, e);
        }),
        (X.test = function (d, u, e, a) {
          return !!X.exec(d, u, e, a);
        }),
        (X.uninstall = function (d) {
          (d = z(d)),
            _.astral && d.astral && Z(!1),
            _.namespacing && d.namespacing && W(!1);
        }),
        (X.union = function (d, u, e) {
          var a,
            n,
            t = (e = e || {}).conjunction || "or",
            f = 0;
          function c(d, u, e) {
            var t = n[f - a];
            if (u) {
              if ((++f, t)) return "(?<".concat(t, ">");
            } else if (e) return "\\".concat(+e + a);
            return d;
          }
          if (!$(d, "Array") || !d.length)
            throw new TypeError(
              "Must provide a nonempty array of patterns to merge"
            );
          var r,
            o = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
            i = [],
            s = y(d);
          try {
            for (s.s(); !(r = s.n()).done; ) {
              var l = r.value;
              X.isRegExp(l)
                ? ((a = f),
                  (n = (l.xregexp && l.xregexp.captureNames) || []),
                  i.push(I.replace.call(X(l.source).source, o, c)))
                : i.push(X.escape(l));
            }
          } catch (m) {
            s.e(m);
          } finally {
            s.f();
          }
          var p = "none" === t ? "" : "|";
          return X(i.join(p), u);
        }),
        (S.exec = function (d) {
          var u = this.lastIndex,
            e = I.exec.apply(this, arguments);
          if (e) {
            if (!M && e.length > 1 && (0, m.default)(e).call(e, "")) {
              var a,
                n = U(this, { removeG: !0, isInternalOnly: !0 });
              I.replace.call(
                (0, h.default)((a = String(d))).call(a, e.index),
                n,
                function () {
                  for (var d = arguments.length, u = 1; u < d - 2; ++u)
                    void 0 ===
                      (u < 0 || arguments.length <= u
                        ? void 0
                        : arguments[u]) && (e[u] = void 0);
                }
              );
            }
            var t = e;
            if (
              (X.isInstalled("namespacing") &&
                ((e.groups = (0, s.default)(null)), (t = e.groups)),
              this.xregexp && this.xregexp.captureNames)
            )
              for (var f = 1; f < e.length; ++f) {
                var c = this.xregexp.captureNames[f - 1];
                c && (t[c] = e[f]);
              }
            this.global &&
              !e[0].length &&
              this.lastIndex > e.index &&
              (this.lastIndex = e.index);
          }
          return this.global || (this.lastIndex = u), e;
        }),
        (S.test = function (d) {
          return !!S.exec.call(this, d);
        }),
        (S.match = function (d) {
          if (X.isRegExp(d)) {
            if (d.global) {
              var u = I.match.apply(this, arguments);
              return (d.lastIndex = 0), u;
            }
          } else d = new RegExp(d);
          return S.exec.call(d, q(this));
        }),
        (S.replace = function (d, u) {
          var e,
            a,
            n,
            t = X.isRegExp(d);
          return (
            t
              ? (d.xregexp && (a = d.xregexp.captureNames), (e = d.lastIndex))
              : (d += ""),
            (n = $(u, "Function")
              ? I.replace.call(String(this), d, function () {
                  for (
                    var d = arguments.length, e = new Array(d), n = 0;
                    n < d;
                    n++
                  )
                    e[n] = arguments[n];
                  if (a) {
                    var t;
                    X.isInstalled("namespacing")
                      ? ((t = (0, s.default)(null)), e.push(t))
                      : ((e[0] = new String(e[0])), (t = e[0]));
                    for (var f = 0; f < a.length; ++f)
                      a[f] && (t[a[f]] = e[f + 1]);
                  }
                  return u.apply(void 0, e);
                })
              : I.replace.call(
                  null == this ? this : String(this),
                  d,
                  function () {
                    for (
                      var d = arguments.length, e = new Array(d), n = 0;
                      n < d;
                      n++
                    )
                      e[n] = arguments[n];
                    return I.replace.call(String(u), P, t);
                    function t(d, u, n, t) {
                      if ((u = u || n)) {
                        var f = +u;
                        if (f <= e.length - 3) return e[f] || "";
                        if ((f = a ? (0, i.default)(a).call(a, u) : -1) < 0)
                          throw new SyntaxError(
                            "Backreference to undefined group ".concat(d)
                          );
                        return e[f + 1] || "";
                      }
                      if ("$" === t) return "$";
                      if ("&" === t || 0 === +t) return e[0];
                      var c, r;
                      if ("`" === t)
                        return (0, h.default)((c = e[e.length - 1])).call(
                          c,
                          0,
                          e[e.length - 2]
                        );
                      if ("'" === t)
                        return (0, h.default)((r = e[e.length - 1])).call(
                          r,
                          e[e.length - 2] + e[0].length
                        );
                      if (((t = +t), !isNaN(t))) {
                        if (t > e.length - 3)
                          throw new SyntaxError(
                            "Backreference to undefined group ".concat(d)
                          );
                        return e[t] || "";
                      }
                      throw new SyntaxError("Invalid token ".concat(d));
                    }
                  }
                )),
            t && (d.global ? (d.lastIndex = 0) : (d.lastIndex = e)),
            n
          );
        }),
        (S.split = function (d, u) {
          if (!X.isRegExp(d)) return I.split.apply(this, arguments);
          var e,
            a = String(this),
            n = [],
            t = d.lastIndex,
            f = 0;
          return (
            (u = (void 0 === u ? -1 : u) >>> 0),
            (0, p.default)(X).call(X, a, d, function (d) {
              d.index + d[0].length > f &&
                (n.push((0, h.default)(a).call(a, f, d.index)),
                d.length > 1 &&
                  d.index < a.length &&
                  Array.prototype.push.apply(n, (0, h.default)(d).call(d, 1)),
                (e = d[0].length),
                (f = d.index + e));
            }),
            f === a.length
              ? (I.test.call(d, "") && !e) || n.push("")
              : n.push((0, h.default)(a).call(a, f)),
            (d.lastIndex = t),
            n.length > u ? (0, h.default)(n).call(n, 0, u) : n
          );
        }),
        X.addToken(
          /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
          function (d, u) {
            if ("B" === d[1] && u === C) return d[0];
            throw new SyntaxError("Invalid escape ".concat(d[0]));
          },
          { scope: "all", leadChar: "\\" }
        ),
        X.addToken(
          /\\u{([\dA-Fa-f]+)}/,
          function (d, u, e) {
            var a = G(d[1]);
            if (a > 1114111)
              throw new SyntaxError("Invalid Unicode code point ".concat(d[0]));
            if (a <= 65535) return "\\u".concat(J(H(a)));
            if (N && (0, m.default)(e).call(e, "u")) return d[0];
            throw new SyntaxError(
              "Cannot use Unicode code point above \\u{FFFF} without flag u"
            );
          },
          { scope: "all", leadChar: "\\" }
        ),
        X.addToken(
          /\[(\^?)\]/,
          function (d) {
            return d[1] ? "[\\s\\S]" : "\\b\\B";
          },
          { leadChar: "[" }
        ),
        X.addToken(/\(\?#[^)]*\)/, K, { leadChar: "(" }),
        X.addToken(/\s+|#[^\n]*\n?/, K, { flag: "x" }),
        X.addToken(
          /\./,
          function () {
            return "[\\s\\S]";
          },
          { flag: "s", leadChar: "." }
        ),
        X.addToken(
          /\\k<([\w$]+)>/,
          function (d) {
            var u,
              e,
              a = isNaN(d[1])
                ? (0, i.default)((u = this.captureNames)).call(u, d[1]) + 1
                : +d[1],
              n = d.index + d[0].length;
            if (!a || a > this.captureNames.length)
              throw new SyntaxError(
                "Backreference to undefined group ".concat(d[0])
              );
            return (0, o.default)((e = "\\".concat(a))).call(
              e,
              n === d.input.length || isNaN(d.input[n]) ? "" : "(?:)"
            );
          },
          { leadChar: "\\" }
        ),
        X.addToken(
          /\\(\d+)/,
          function (d, u) {
            if (
              !(
                u === C &&
                /^[1-9]/.test(d[1]) &&
                +d[1] <= this.captureNames.length
              ) &&
              "0" !== d[1]
            )
              throw new SyntaxError(
                "Cannot use octal escape or backreference to undefined group ".concat(
                  d[0]
                )
              );
            return d[0];
          },
          { scope: "all", leadChar: "\\" }
        ),
        X.addToken(
          /\(\?P?<([\w$]+)>/,
          function (d) {
            var u;
            if (!isNaN(d[1]))
              throw new SyntaxError(
                "Cannot use integer as capture name ".concat(d[0])
              );
            if (
              !X.isInstalled("namespacing") &&
              ("length" === d[1] || "__proto__" === d[1])
            )
              throw new SyntaxError(
                "Cannot use reserved word as capture name ".concat(d[0])
              );
            if ((0, m.default)((u = this.captureNames)).call(u, d[1]))
              throw new SyntaxError(
                "Cannot use same name for multiple groups ".concat(d[0])
              );
            return (
              this.captureNames.push(d[1]), (this.hasNamedCapture = !0), "("
            );
          },
          { leadChar: "(" }
        ),
        X.addToken(
          /\((?!\?)/,
          function (d, u, e) {
            return (0, m.default)(e).call(e, "n")
              ? "(?:"
              : (this.captureNames.push(null), "(");
          },
          { optionalFlags: "n", leadChar: "(" }
        );
      var Q = X;
      (u.default = Q), (d.exports = u.default);
    },
    8402: function (d) {
      d.exports = [
        { name: "InAdlam", astral: "\ud83a[\udd00-\udd5f]" },
        { name: "InAegean_Numbers", astral: "\ud800[\udd00-\udd3f]" },
        { name: "InAhom", astral: "\ud805[\udf00-\udf3f]" },
        { name: "InAlchemical_Symbols", astral: "\ud83d[\udf00-\udf7f]" },
        { name: "InAlphabetic_Presentation_Forms", bmp: "\ufb00-\ufb4f" },
        { name: "InAnatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude7f]" },
        {
          name: "InAncient_Greek_Musical_Notation",
          astral: "\ud834[\ude00-\ude4f]",
        },
        { name: "InAncient_Greek_Numbers", astral: "\ud800[\udd40-\udd8f]" },
        { name: "InAncient_Symbols", astral: "\ud800[\udd90-\uddcf]" },
        { name: "InArabic", bmp: "\u0600-\u06ff" },
        { name: "InArabic_Extended_A", bmp: "\u08a0-\u08ff" },
        {
          name: "InArabic_Mathematical_Alphabetic_Symbols",
          astral: "\ud83b[\ude00-\udeff]",
        },
        { name: "InArabic_Presentation_Forms_A", bmp: "\ufb50-\ufdff" },
        { name: "InArabic_Presentation_Forms_B", bmp: "\ufe70-\ufeff" },
        { name: "InArabic_Supplement", bmp: "\u0750-\u077f" },
        { name: "InArmenian", bmp: "\u0530-\u058f" },
        { name: "InArrows", bmp: "\u2190-\u21ff" },
        { name: "InAvestan", astral: "\ud802[\udf00-\udf3f]" },
        { name: "InBalinese", bmp: "\u1b00-\u1b7f" },
        { name: "InBamum", bmp: "\ua6a0-\ua6ff" },
        { name: "InBamum_Supplement", astral: "\ud81a[\udc00-\ude3f]" },
        { name: "InBasic_Latin", bmp: "\0-\x7f" },
        { name: "InBassa_Vah", astral: "\ud81a[\uded0-\udeff]" },
        { name: "InBatak", bmp: "\u1bc0-\u1bff" },
        { name: "InBengali", bmp: "\u0980-\u09ff" },
        { name: "InBhaiksuki", astral: "\ud807[\udc00-\udc6f]" },
        { name: "InBlock_Elements", bmp: "\u2580-\u259f" },
        { name: "InBopomofo", bmp: "\u3100-\u312f" },
        { name: "InBopomofo_Extended", bmp: "\u31a0-\u31bf" },
        { name: "InBox_Drawing", bmp: "\u2500-\u257f" },
        { name: "InBrahmi", astral: "\ud804[\udc00-\udc7f]" },
        { name: "InBraille_Patterns", bmp: "\u2800-\u28ff" },
        { name: "InBuginese", bmp: "\u1a00-\u1a1f" },
        { name: "InBuhid", bmp: "\u1740-\u175f" },
        {
          name: "InByzantine_Musical_Symbols",
          astral: "\ud834[\udc00-\udcff]",
        },
        { name: "InCJK_Compatibility", bmp: "\u3300-\u33ff" },
        { name: "InCJK_Compatibility_Forms", bmp: "\ufe30-\ufe4f" },
        { name: "InCJK_Compatibility_Ideographs", bmp: "\uf900-\ufaff" },
        {
          name: "InCJK_Compatibility_Ideographs_Supplement",
          astral: "\ud87e[\udc00-\ude1f]",
        },
        { name: "InCJK_Radicals_Supplement", bmp: "\u2e80-\u2eff" },
        { name: "InCJK_Strokes", bmp: "\u31c0-\u31ef" },
        { name: "InCJK_Symbols_And_Punctuation", bmp: "\u3000-\u303f" },
        { name: "InCJK_Unified_Ideographs", bmp: "\u4e00-\u9fff" },
        { name: "InCJK_Unified_Ideographs_Extension_A", bmp: "\u3400-\u4dbf" },
        {
          name: "InCJK_Unified_Ideographs_Extension_B",
          astral: "[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]",
        },
        {
          name: "InCJK_Unified_Ideographs_Extension_C",
          astral:
            "\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf3f]",
        },
        {
          name: "InCJK_Unified_Ideographs_Extension_D",
          astral: "\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]",
        },
        {
          name: "InCJK_Unified_Ideographs_Extension_E",
          astral:
            "\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]",
        },
        {
          name: "InCJK_Unified_Ideographs_Extension_F",
          astral:
            "\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]",
        },
        { name: "InCarian", astral: "\ud800[\udea0-\udedf]" },
        { name: "InCaucasian_Albanian", astral: "\ud801[\udd30-\udd6f]" },
        { name: "InChakma", astral: "\ud804[\udd00-\udd4f]" },
        { name: "InCham", bmp: "\uaa00-\uaa5f" },
        { name: "InCherokee", bmp: "\u13a0-\u13ff" },
        { name: "InCherokee_Supplement", bmp: "\uab70-\uabbf" },
        { name: "InChess_Symbols", astral: "\ud83e[\ude00-\ude6f]" },
        { name: "InCombining_Diacritical_Marks", bmp: "\u0300-\u036f" },
        {
          name: "InCombining_Diacritical_Marks_Extended",
          bmp: "\u1ab0-\u1aff",
        },
        {
          name: "InCombining_Diacritical_Marks_For_Symbols",
          bmp: "\u20d0-\u20ff",
        },
        {
          name: "InCombining_Diacritical_Marks_Supplement",
          bmp: "\u1dc0-\u1dff",
        },
        { name: "InCombining_Half_Marks", bmp: "\ufe20-\ufe2f" },
        { name: "InCommon_Indic_Number_Forms", bmp: "\ua830-\ua83f" },
        { name: "InControl_Pictures", bmp: "\u2400-\u243f" },
        { name: "InCoptic", bmp: "\u2c80-\u2cff" },
        { name: "InCoptic_Epact_Numbers", astral: "\ud800[\udee0-\udeff]" },
        { name: "InCounting_Rod_Numerals", astral: "\ud834[\udf60-\udf7f]" },
        { name: "InCuneiform", astral: "\ud808[\udc00-\udfff]" },
        {
          name: "InCuneiform_Numbers_And_Punctuation",
          astral: "\ud809[\udc00-\udc7f]",
        },
        { name: "InCurrency_Symbols", bmp: "\u20a0-\u20cf" },
        { name: "InCypriot_Syllabary", astral: "\ud802[\udc00-\udc3f]" },
        { name: "InCyrillic", bmp: "\u0400-\u04ff" },
        { name: "InCyrillic_Extended_A", bmp: "\u2de0-\u2dff" },
        { name: "InCyrillic_Extended_B", bmp: "\ua640-\ua69f" },
        { name: "InCyrillic_Extended_C", bmp: "\u1c80-\u1c8f" },
        { name: "InCyrillic_Supplement", bmp: "\u0500-\u052f" },
        { name: "InDeseret", astral: "\ud801[\udc00-\udc4f]" },
        { name: "InDevanagari", bmp: "\u0900-\u097f" },
        { name: "InDevanagari_Extended", bmp: "\ua8e0-\ua8ff" },
        { name: "InDingbats", bmp: "\u2700-\u27bf" },
        { name: "InDogra", astral: "\ud806[\udc00-\udc4f]" },
        { name: "InDomino_Tiles", astral: "\ud83c[\udc30-\udc9f]" },
        { name: "InDuployan", astral: "\ud82f[\udc00-\udc9f]" },
        { name: "InEarly_Dynastic_Cuneiform", astral: "\ud809[\udc80-\udd4f]" },
        {
          name: "InEgyptian_Hieroglyphs",
          astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]",
        },
        { name: "InElbasan", astral: "\ud801[\udd00-\udd2f]" },
        { name: "InEmoticons", astral: "\ud83d[\ude00-\ude4f]" },
        {
          name: "InEnclosed_Alphanumeric_Supplement",
          astral: "\ud83c[\udd00-\uddff]",
        },
        { name: "InEnclosed_Alphanumerics", bmp: "\u2460-\u24ff" },
        { name: "InEnclosed_CJK_Letters_And_Months", bmp: "\u3200-\u32ff" },
        {
          name: "InEnclosed_Ideographic_Supplement",
          astral: "\ud83c[\ude00-\udeff]",
        },
        { name: "InEthiopic", bmp: "\u1200-\u137f" },
        { name: "InEthiopic_Extended", bmp: "\u2d80-\u2ddf" },
        { name: "InEthiopic_Extended_A", bmp: "\uab00-\uab2f" },
        { name: "InEthiopic_Supplement", bmp: "\u1380-\u139f" },
        { name: "InGeneral_Punctuation", bmp: "\u2000-\u206f" },
        { name: "InGeometric_Shapes", bmp: "\u25a0-\u25ff" },
        {
          name: "InGeometric_Shapes_Extended",
          astral: "\ud83d[\udf80-\udfff]",
        },
        { name: "InGeorgian", bmp: "\u10a0-\u10ff" },
        { name: "InGeorgian_Extended", bmp: "\u1c90-\u1cbf" },
        { name: "InGeorgian_Supplement", bmp: "\u2d00-\u2d2f" },
        { name: "InGlagolitic", bmp: "\u2c00-\u2c5f" },
        { name: "InGlagolitic_Supplement", astral: "\ud838[\udc00-\udc2f]" },
        { name: "InGothic", astral: "\ud800[\udf30-\udf4f]" },
        { name: "InGrantha", astral: "\ud804[\udf00-\udf7f]" },
        { name: "InGreek_And_Coptic", bmp: "\u0370-\u03ff" },
        { name: "InGreek_Extended", bmp: "\u1f00-\u1fff" },
        { name: "InGujarati", bmp: "\u0a80-\u0aff" },
        { name: "InGunjala_Gondi", astral: "\ud807[\udd60-\uddaf]" },
        { name: "InGurmukhi", bmp: "\u0a00-\u0a7f" },
        { name: "InHalfwidth_And_Fullwidth_Forms", bmp: "\uff00-\uffef" },
        { name: "InHangul_Compatibility_Jamo", bmp: "\u3130-\u318f" },
        { name: "InHangul_Jamo", bmp: "\u1100-\u11ff" },
        { name: "InHangul_Jamo_Extended_A", bmp: "\ua960-\ua97f" },
        { name: "InHangul_Jamo_Extended_B", bmp: "\ud7b0-\ud7ff" },
        { name: "InHangul_Syllables", bmp: "\uac00-\ud7af" },
        { name: "InHanifi_Rohingya", astral: "\ud803[\udd00-\udd3f]" },
        { name: "InHanunoo", bmp: "\u1720-\u173f" },
        { name: "InHatran", astral: "\ud802[\udce0-\udcff]" },
        { name: "InHebrew", bmp: "\u0590-\u05ff" },
        { name: "InHigh_Private_Use_Surrogates", bmp: "\udb80-\udbff" },
        { name: "InHigh_Surrogates", bmp: "\ud800-\udb7f" },
        { name: "InHiragana", bmp: "\u3040-\u309f" },
        { name: "InIPA_Extensions", bmp: "\u0250-\u02af" },
        { name: "InIdeographic_Description_Characters", bmp: "\u2ff0-\u2fff" },
        {
          name: "InIdeographic_Symbols_And_Punctuation",
          astral: "\ud81b[\udfe0-\udfff]",
        },
        { name: "InImperial_Aramaic", astral: "\ud802[\udc40-\udc5f]" },
        { name: "InIndic_Siyaq_Numbers", astral: "\ud83b[\udc70-\udcbf]" },
        { name: "InInscriptional_Pahlavi", astral: "\ud802[\udf60-\udf7f]" },
        { name: "InInscriptional_Parthian", astral: "\ud802[\udf40-\udf5f]" },
        { name: "InJavanese", bmp: "\ua980-\ua9df" },
        { name: "InKaithi", astral: "\ud804[\udc80-\udccf]" },
        { name: "InKana_Extended_A", astral: "\ud82c[\udd00-\udd2f]" },
        { name: "InKana_Supplement", astral: "\ud82c[\udc00-\udcff]" },
        { name: "InKanbun", bmp: "\u3190-\u319f" },
        { name: "InKangxi_Radicals", bmp: "\u2f00-\u2fdf" },
        { name: "InKannada", bmp: "\u0c80-\u0cff" },
        { name: "InKatakana", bmp: "\u30a0-\u30ff" },
        { name: "InKatakana_Phonetic_Extensions", bmp: "\u31f0-\u31ff" },
        { name: "InKayah_Li", bmp: "\ua900-\ua92f" },
        { name: "InKharoshthi", astral: "\ud802[\ude00-\ude5f]" },
        { name: "InKhmer", bmp: "\u1780-\u17ff" },
        { name: "InKhmer_Symbols", bmp: "\u19e0-\u19ff" },
        { name: "InKhojki", astral: "\ud804[\ude00-\ude4f]" },
        { name: "InKhudawadi", astral: "\ud804[\udeb0-\udeff]" },
        { name: "InLao", bmp: "\u0e80-\u0eff" },
        { name: "InLatin_1_Supplement", bmp: "\x80-\xff" },
        { name: "InLatin_Extended_A", bmp: "\u0100-\u017f" },
        { name: "InLatin_Extended_Additional", bmp: "\u1e00-\u1eff" },
        { name: "InLatin_Extended_B", bmp: "\u0180-\u024f" },
        { name: "InLatin_Extended_C", bmp: "\u2c60-\u2c7f" },
        { name: "InLatin_Extended_D", bmp: "\ua720-\ua7ff" },
        { name: "InLatin_Extended_E", bmp: "\uab30-\uab6f" },
        { name: "InLepcha", bmp: "\u1c00-\u1c4f" },
        { name: "InLetterlike_Symbols", bmp: "\u2100-\u214f" },
        { name: "InLimbu", bmp: "\u1900-\u194f" },
        { name: "InLinear_A", astral: "\ud801[\ude00-\udf7f]" },
        { name: "InLinear_B_Ideograms", astral: "\ud800[\udc80-\udcff]" },
        { name: "InLinear_B_Syllabary", astral: "\ud800[\udc00-\udc7f]" },
        { name: "InLisu", bmp: "\ua4d0-\ua4ff" },
        { name: "InLow_Surrogates", bmp: "\udc00-\udfff" },
        { name: "InLycian", astral: "\ud800[\ude80-\ude9f]" },
        { name: "InLydian", astral: "\ud802[\udd20-\udd3f]" },
        { name: "InMahajani", astral: "\ud804[\udd50-\udd7f]" },
        { name: "InMahjong_Tiles", astral: "\ud83c[\udc00-\udc2f]" },
        { name: "InMakasar", astral: "\ud807[\udee0-\udeff]" },
        { name: "InMalayalam", bmp: "\u0d00-\u0d7f" },
        { name: "InMandaic", bmp: "\u0840-\u085f" },
        { name: "InManichaean", astral: "\ud802[\udec0-\udeff]" },
        { name: "InMarchen", astral: "\ud807[\udc70-\udcbf]" },
        { name: "InMasaram_Gondi", astral: "\ud807[\udd00-\udd5f]" },
        {
          name: "InMathematical_Alphanumeric_Symbols",
          astral: "\ud835[\udc00-\udfff]",
        },
        { name: "InMathematical_Operators", bmp: "\u2200-\u22ff" },
        { name: "InMayan_Numerals", astral: "\ud834[\udee0-\udeff]" },
        { name: "InMedefaidrin", astral: "\ud81b[\ude40-\ude9f]" },
        { name: "InMeetei_Mayek", bmp: "\uabc0-\uabff" },
        { name: "InMeetei_Mayek_Extensions", bmp: "\uaae0-\uaaff" },
        { name: "InMende_Kikakui", astral: "\ud83a[\udc00-\udcdf]" },
        { name: "InMeroitic_Cursive", astral: "\ud802[\udda0-\uddff]" },
        { name: "InMeroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
        { name: "InMiao", astral: "\ud81b[\udf00-\udf9f]" },
        {
          name: "InMiscellaneous_Mathematical_Symbols_A",
          bmp: "\u27c0-\u27ef",
        },
        {
          name: "InMiscellaneous_Mathematical_Symbols_B",
          bmp: "\u2980-\u29ff",
        },
        { name: "InMiscellaneous_Symbols", bmp: "\u2600-\u26ff" },
        { name: "InMiscellaneous_Symbols_And_Arrows", bmp: "\u2b00-\u2bff" },
        {
          name: "InMiscellaneous_Symbols_And_Pictographs",
          astral: "\ud83c[\udf00-\udfff]|\ud83d[\udc00-\uddff]",
        },
        { name: "InMiscellaneous_Technical", bmp: "\u2300-\u23ff" },
        { name: "InModi", astral: "\ud805[\ude00-\ude5f]" },
        { name: "InModifier_Tone_Letters", bmp: "\ua700-\ua71f" },
        { name: "InMongolian", bmp: "\u1800-\u18af" },
        { name: "InMongolian_Supplement", astral: "\ud805[\ude60-\ude7f]" },
        { name: "InMro", astral: "\ud81a[\ude40-\ude6f]" },
        { name: "InMultani", astral: "\ud804[\ude80-\udeaf]" },
        { name: "InMusical_Symbols", astral: "\ud834[\udd00-\uddff]" },
        { name: "InMyanmar", bmp: "\u1000-\u109f" },
        { name: "InMyanmar_Extended_A", bmp: "\uaa60-\uaa7f" },
        { name: "InMyanmar_Extended_B", bmp: "\ua9e0-\ua9ff" },
        { name: "InNKo", bmp: "\u07c0-\u07ff" },
        { name: "InNabataean", astral: "\ud802[\udc80-\udcaf]" },
        { name: "InNew_Tai_Lue", bmp: "\u1980-\u19df" },
        { name: "InNewa", astral: "\ud805[\udc00-\udc7f]" },
        { name: "InNumber_Forms", bmp: "\u2150-\u218f" },
        { name: "InNushu", astral: "\ud82c[\udd70-\udeff]" },
        { name: "InOgham", bmp: "\u1680-\u169f" },
        { name: "InOl_Chiki", bmp: "\u1c50-\u1c7f" },
        { name: "InOld_Hungarian", astral: "\ud803[\udc80-\udcff]" },
        { name: "InOld_Italic", astral: "\ud800[\udf00-\udf2f]" },
        { name: "InOld_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
        { name: "InOld_Permic", astral: "\ud800[\udf50-\udf7f]" },
        { name: "InOld_Persian", astral: "\ud800[\udfa0-\udfdf]" },
        { name: "InOld_Sogdian", astral: "\ud803[\udf00-\udf2f]" },
        { name: "InOld_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
        { name: "InOld_Turkic", astral: "\ud803[\udc00-\udc4f]" },
        { name: "InOptical_Character_Recognition", bmp: "\u2440-\u245f" },
        { name: "InOriya", bmp: "\u0b00-\u0b7f" },
        { name: "InOrnamental_Dingbats", astral: "\ud83d[\ude50-\ude7f]" },
        { name: "InOsage", astral: "\ud801[\udcb0-\udcff]" },
        { name: "InOsmanya", astral: "\ud801[\udc80-\udcaf]" },
        { name: "InPahawh_Hmong", astral: "\ud81a[\udf00-\udf8f]" },
        { name: "InPalmyrene", astral: "\ud802[\udc60-\udc7f]" },
        { name: "InPau_Cin_Hau", astral: "\ud806[\udec0-\udeff]" },
        { name: "InPhags_Pa", bmp: "\ua840-\ua87f" },
        { name: "InPhaistos_Disc", astral: "\ud800[\uddd0-\uddff]" },
        { name: "InPhoenician", astral: "\ud802[\udd00-\udd1f]" },
        { name: "InPhonetic_Extensions", bmp: "\u1d00-\u1d7f" },
        { name: "InPhonetic_Extensions_Supplement", bmp: "\u1d80-\u1dbf" },
        { name: "InPlaying_Cards", astral: "\ud83c[\udca0-\udcff]" },
        { name: "InPrivate_Use_Area", bmp: "\ue000-\uf8ff" },
        { name: "InPsalter_Pahlavi", astral: "\ud802[\udf80-\udfaf]" },
        { name: "InRejang", bmp: "\ua930-\ua95f" },
        { name: "InRumi_Numeral_Symbols", astral: "\ud803[\ude60-\ude7f]" },
        { name: "InRunic", bmp: "\u16a0-\u16ff" },
        { name: "InSamaritan", bmp: "\u0800-\u083f" },
        { name: "InSaurashtra", bmp: "\ua880-\ua8df" },
        { name: "InSharada", astral: "\ud804[\udd80-\udddf]" },
        { name: "InShavian", astral: "\ud801[\udc50-\udc7f]" },
        {
          name: "InShorthand_Format_Controls",
          astral: "\ud82f[\udca0-\udcaf]",
        },
        { name: "InSiddham", astral: "\ud805[\udd80-\uddff]" },
        { name: "InSinhala", bmp: "\u0d80-\u0dff" },
        { name: "InSinhala_Archaic_Numbers", astral: "\ud804[\udde0-\uddff]" },
        { name: "InSmall_Form_Variants", bmp: "\ufe50-\ufe6f" },
        { name: "InSogdian", astral: "\ud803[\udf30-\udf6f]" },
        { name: "InSora_Sompeng", astral: "\ud804[\udcd0-\udcff]" },
        { name: "InSoyombo", astral: "\ud806[\ude50-\udeaf]" },
        { name: "InSpacing_Modifier_Letters", bmp: "\u02b0-\u02ff" },
        { name: "InSpecials", bmp: "\ufff0-\uffff" },
        { name: "InSundanese", bmp: "\u1b80-\u1bbf" },
        { name: "InSundanese_Supplement", bmp: "\u1cc0-\u1ccf" },
        { name: "InSuperscripts_And_Subscripts", bmp: "\u2070-\u209f" },
        { name: "InSupplemental_Arrows_A", bmp: "\u27f0-\u27ff" },
        { name: "InSupplemental_Arrows_B", bmp: "\u2900-\u297f" },
        { name: "InSupplemental_Arrows_C", astral: "\ud83e[\udc00-\udcff]" },
        { name: "InSupplemental_Mathematical_Operators", bmp: "\u2a00-\u2aff" },
        { name: "InSupplemental_Punctuation", bmp: "\u2e00-\u2e7f" },
        {
          name: "InSupplemental_Symbols_And_Pictographs",
          astral: "\ud83e[\udd00-\uddff]",
        },
        {
          name: "InSupplementary_Private_Use_Area_A",
          astral: "[\udb80-\udbbf][\udc00-\udfff]",
        },
        {
          name: "InSupplementary_Private_Use_Area_B",
          astral: "[\udbc0-\udbff][\udc00-\udfff]",
        },
        { name: "InSutton_SignWriting", astral: "\ud836[\udc00-\udeaf]" },
        { name: "InSyloti_Nagri", bmp: "\ua800-\ua82f" },
        { name: "InSyriac", bmp: "\u0700-\u074f" },
        { name: "InSyriac_Supplement", bmp: "\u0860-\u086f" },
        { name: "InTagalog", bmp: "\u1700-\u171f" },
        { name: "InTagbanwa", bmp: "\u1760-\u177f" },
        { name: "InTags", astral: "\udb40[\udc00-\udc7f]" },
        { name: "InTai_Le", bmp: "\u1950-\u197f" },
        { name: "InTai_Tham", bmp: "\u1a20-\u1aaf" },
        { name: "InTai_Viet", bmp: "\uaa80-\uaadf" },
        { name: "InTai_Xuan_Jing_Symbols", astral: "\ud834[\udf00-\udf5f]" },
        { name: "InTakri", astral: "\ud805[\ude80-\udecf]" },
        { name: "InTamil", bmp: "\u0b80-\u0bff" },
        { name: "InTangut", astral: "[\ud81c-\ud821][\udc00-\udfff]" },
        { name: "InTangut_Components", astral: "\ud822[\udc00-\udeff]" },
        { name: "InTelugu", bmp: "\u0c00-\u0c7f" },
        { name: "InThaana", bmp: "\u0780-\u07bf" },
        { name: "InThai", bmp: "\u0e00-\u0e7f" },
        { name: "InTibetan", bmp: "\u0f00-\u0fff" },
        { name: "InTifinagh", bmp: "\u2d30-\u2d7f" },
        { name: "InTirhuta", astral: "\ud805[\udc80-\udcdf]" },
        {
          name: "InTransport_And_Map_Symbols",
          astral: "\ud83d[\ude80-\udeff]",
        },
        { name: "InUgaritic", astral: "\ud800[\udf80-\udf9f]" },
        {
          name: "InUnified_Canadian_Aboriginal_Syllabics",
          bmp: "\u1400-\u167f",
        },
        {
          name: "InUnified_Canadian_Aboriginal_Syllabics_Extended",
          bmp: "\u18b0-\u18ff",
        },
        { name: "InVai", bmp: "\ua500-\ua63f" },
        { name: "InVariation_Selectors", bmp: "\ufe00-\ufe0f" },
        {
          name: "InVariation_Selectors_Supplement",
          astral: "\udb40[\udd00-\uddef]",
        },
        { name: "InVedic_Extensions", bmp: "\u1cd0-\u1cff" },
        { name: "InVertical_Forms", bmp: "\ufe10-\ufe1f" },
        { name: "InWarang_Citi", astral: "\ud806[\udca0-\udcff]" },
        { name: "InYi_Radicals", bmp: "\ua490-\ua4cf" },
        { name: "InYi_Syllables", bmp: "\ua000-\ua48f" },
        { name: "InYijing_Hexagram_Symbols", bmp: "\u4dc0-\u4dff" },
        { name: "InZanabazar_Square", astral: "\ud806[\ude00-\ude4f]" },
        {
          name: "Inundefined",
          astral:
            "\ud803[\ude80-\udebf\udfb0-\udfff]|\ud806[\udd00-\udd5f\udda0-\uddff]|\ud807[\udfb0-\udfff]|\ud80d[\udc30-\udc3f]|\ud822[\udf00-\udfff]|\ud823[\udc00-\udd8f]|\ud82c[\udd30-\udd6f]|\ud838[\udd00-\udd4f\udec0-\udeff]|\ud83b[\udd00-\udd4f]|\ud83e[\ude70-\udfff]|[\ud880-\ud883][\udc00-\udfff]|\ud884[\udc00-\udf4f]",
        },
      ];
    },
    24732: function (d) {
      d.exports = [
        {
          name: "C",
          alias: "Other",
          isBmpLast: !0,
          bmp: "\0-\x1f\x7f-\x9f\xad\u0378\u0379\u0380-\u0383\u038b\u038d\u03a2\u0530\u0557\u0558\u058b\u058c\u0590\u05c8-\u05cf\u05eb-\u05ee\u05f5-\u0605\u061c\u061d\u06dd\u070e\u070f\u074b\u074c\u07b2-\u07bf\u07fb\u07fc\u082e\u082f\u083f\u085c\u085d\u085f\u086b-\u089f\u08b5\u08c8-\u08d2\u08e2\u0984\u098d\u098e\u0991\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba\u09bb\u09c5\u09c6\u09c9\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4\u09e5\u09ff\u0a00\u0a04\u0a0b-\u0a0e\u0a11\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a\u0a3b\u0a3d\u0a43-\u0a46\u0a49\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a77-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba\u0abb\u0ac6\u0aca\u0ace\u0acf\u0ad1-\u0adf\u0ae4\u0ae5\u0af2-\u0af8\u0b00\u0b04\u0b0d\u0b0e\u0b11\u0b12\u0b29\u0b31\u0b34\u0b3a\u0b3b\u0b45\u0b46\u0b49\u0b4a\u0b4e-\u0b54\u0b58-\u0b5b\u0b5e\u0b64\u0b65\u0b78-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0bff\u0c0d\u0c11\u0c29\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5b-\u0c5f\u0c64\u0c65\u0c70-\u0c76\u0c8d\u0c91\u0ca9\u0cb4\u0cba\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4\u0ce5\u0cf0\u0cf3-\u0cff\u0d0d\u0d11\u0d45\u0d49\u0d50-\u0d53\u0d64\u0d65\u0d80\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0de5\u0df0\u0df1\u0df5-\u0e00\u0e3b-\u0e3e\u0e5c-\u0e80\u0e83\u0e85\u0e8b\u0ea4\u0ea6\u0ebe\u0ebf\u0ec5\u0ec7\u0ece\u0ecf\u0eda\u0edb\u0ee0-\u0eff\u0f48\u0f6d-\u0f70\u0f98\u0fbd\u0fcd\u0fdb-\u0fff\u10c6\u10c8-\u10cc\u10ce\u10cf\u1249\u124e\u124f\u1257\u1259\u125e\u125f\u1289\u128e\u128f\u12b1\u12b6\u12b7\u12bf\u12c1\u12c6\u12c7\u12d7\u1311\u1316\u1317\u135b\u135c\u137d-\u137f\u139a-\u139f\u13f6\u13f7\u13fe\u13ff\u169d-\u169f\u16f9-\u16ff\u170d\u1715-\u171f\u1737-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17de\u17df\u17ea-\u17ef\u17fa-\u17ff\u180e\u180f\u181a-\u181f\u1879-\u187f\u18ab-\u18af\u18f6-\u18ff\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1943\u196e\u196f\u1975-\u197f\u19ac-\u19af\u19ca-\u19cf\u19db-\u19dd\u1a1c\u1a1d\u1a5f\u1a7d\u1a7e\u1a8a-\u1a8f\u1a9a-\u1a9f\u1aae\u1aaf\u1ac1-\u1aff\u1b4c-\u1b4f\u1b7d-\u1b7f\u1bf4-\u1bfb\u1c38-\u1c3a\u1c4a-\u1c4c\u1c89-\u1c8f\u1cbb\u1cbc\u1cc8-\u1ccf\u1cfb-\u1cff\u1dfa\u1f16\u1f17\u1f1e\u1f1f\u1f46\u1f47\u1f4e\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e\u1f7f\u1fb5\u1fc5\u1fd4\u1fd5\u1fdc\u1ff0\u1ff1\u1ff5\u1fff\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2072\u2073\u208f\u209d-\u209f\u20c0-\u20cf\u20f1-\u20ff\u218c-\u218f\u2427-\u243f\u244b-\u245f\u2b74\u2b75\u2b96\u2c2f\u2c5f\u2cf4-\u2cf8\u2d26\u2d28-\u2d2c\u2d2e\u2d2f\u2d68-\u2d6e\u2d71-\u2d7e\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e53-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3040\u3097\u3098\u3100-\u3104\u3130\u318f\u31e4-\u31ef\u321f\u9ffd-\u9fff\ua48d-\ua48f\ua4c7-\ua4cf\ua62c-\ua63f\ua6f8-\ua6ff\ua7c0\ua7c1\ua7cb-\ua7f4\ua82d-\ua82f\ua83a-\ua83f\ua878-\ua87f\ua8c6-\ua8cd\ua8da-\ua8df\ua954-\ua95e\ua97d-\ua97f\ua9ce\ua9da-\ua9dd\ua9ff\uaa37-\uaa3f\uaa4e\uaa4f\uaa5a\uaa5b\uaac3-\uaada\uaaf7-\uab00\uab07\uab08\uab0f\uab10\uab17-\uab1f\uab27\uab2f\uab6c-\uab6f\uabee\uabef\uabfa-\uabff\ud7a4-\ud7af\ud7c7-\ud7ca\ud7fc-\uf8ff\ufa6e\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbc2-\ufbd2\ufd40-\ufd4f\ufd90\ufd91\ufdc8-\ufdef\ufdfe\ufdff\ufe1a-\ufe1f\ufe53\ufe67\ufe6c-\ufe6f\ufe75\ufefd-\uff00\uffbf-\uffc1\uffc8\uffc9\uffd0\uffd1\uffd8\uffd9\uffdd-\uffdf\uffe7\uffef-\ufffb\ufffe\uffff",
          astral:
            "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9d-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f\udeaa\udeae\udeaf\udeb2-\udeff\udf28-\udf2f\udf5a-\udfaf\udfcc-\udfdf\udff7-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd48-\udd4f\udd77-\udd7f\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5c\udc62-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb9-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd07\udd08\udd0a\udd0b\udd14\udd17\udd36\udd39\udd3a\udd47-\udd4f\udd5a-\udd9f\udda8\udda9\uddd8\uddd9\udde5-\uddff\ude48-\ude4f\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfaf\udfb1-\udfbf\udff2-\udffe]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud824-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f\ud885-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf4b-\udf4e\udf88-\udf8e\udfa0-\udfdf\udfe5-\udfef\udff2-\udfff]|\ud821[\udff8-\udfff]|\ud823[\udcd6-\udcff\udd09-\udfff]|\ud82c[\udd1f-\udd4f\udd53-\udd63\udd68-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udcff\udd2d-\udd2f\udd3e\udd3f\udd4a-\udd4d\udd50-\udebf\udefa-\udefe\udf00-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4c-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\udd00\udd3e-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\uddae-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded8-\udedf\udeed-\udeef\udefd-\udeff\udf74-\udf7f\udfd9-\udfdf\udfec-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae\udcaf\udcb2-\udcff\udd79\uddcc\ude54-\ude5f\ude6e\ude6f\ude75-\ude77\ude7b-\ude7f\ude87-\ude8f\udea9-\udeaf\udeb7-\udebf\udec3-\udecf\uded7-\udeff\udf93\udfcb-\udfef\udffa-\udfff]|\ud869[\udede-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\ud884[\udf4b-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]",
        },
        { name: "Cc", alias: "Control", bmp: "\0-\x1f\x7f-\x9f" },
        {
          name: "Cf",
          alias: "Format",
          bmp: "\xad\u0600-\u0605\u061c\u06dd\u070f\u08e2\u180e\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\ufeff\ufff9-\ufffb",
          astral:
            "\ud804[\udcbd\udccd]|\ud80d[\udc30-\udc38]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]",
        },
        {
          name: "Cn",
          alias: "Unassigned",
          bmp: "\u0378\u0379\u0380-\u0383\u038b\u038d\u03a2\u0530\u0557\u0558\u058b\u058c\u0590\u05c8-\u05cf\u05eb-\u05ee\u05f5-\u05ff\u061d\u070e\u074b\u074c\u07b2-\u07bf\u07fb\u07fc\u082e\u082f\u083f\u085c\u085d\u085f\u086b-\u089f\u08b5\u08c8-\u08d2\u0984\u098d\u098e\u0991\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba\u09bb\u09c5\u09c6\u09c9\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4\u09e5\u09ff\u0a00\u0a04\u0a0b-\u0a0e\u0a11\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a\u0a3b\u0a3d\u0a43-\u0a46\u0a49\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a77-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba\u0abb\u0ac6\u0aca\u0ace\u0acf\u0ad1-\u0adf\u0ae4\u0ae5\u0af2-\u0af8\u0b00\u0b04\u0b0d\u0b0e\u0b11\u0b12\u0b29\u0b31\u0b34\u0b3a\u0b3b\u0b45\u0b46\u0b49\u0b4a\u0b4e-\u0b54\u0b58-\u0b5b\u0b5e\u0b64\u0b65\u0b78-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0bff\u0c0d\u0c11\u0c29\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5b-\u0c5f\u0c64\u0c65\u0c70-\u0c76\u0c8d\u0c91\u0ca9\u0cb4\u0cba\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4\u0ce5\u0cf0\u0cf3-\u0cff\u0d0d\u0d11\u0d45\u0d49\u0d50-\u0d53\u0d64\u0d65\u0d80\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0de5\u0df0\u0df1\u0df5-\u0e00\u0e3b-\u0e3e\u0e5c-\u0e80\u0e83\u0e85\u0e8b\u0ea4\u0ea6\u0ebe\u0ebf\u0ec5\u0ec7\u0ece\u0ecf\u0eda\u0edb\u0ee0-\u0eff\u0f48\u0f6d-\u0f70\u0f98\u0fbd\u0fcd\u0fdb-\u0fff\u10c6\u10c8-\u10cc\u10ce\u10cf\u1249\u124e\u124f\u1257\u1259\u125e\u125f\u1289\u128e\u128f\u12b1\u12b6\u12b7\u12bf\u12c1\u12c6\u12c7\u12d7\u1311\u1316\u1317\u135b\u135c\u137d-\u137f\u139a-\u139f\u13f6\u13f7\u13fe\u13ff\u169d-\u169f\u16f9-\u16ff\u170d\u1715-\u171f\u1737-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17de\u17df\u17ea-\u17ef\u17fa-\u17ff\u180f\u181a-\u181f\u1879-\u187f\u18ab-\u18af\u18f6-\u18ff\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1943\u196e\u196f\u1975-\u197f\u19ac-\u19af\u19ca-\u19cf\u19db-\u19dd\u1a1c\u1a1d\u1a5f\u1a7d\u1a7e\u1a8a-\u1a8f\u1a9a-\u1a9f\u1aae\u1aaf\u1ac1-\u1aff\u1b4c-\u1b4f\u1b7d-\u1b7f\u1bf4-\u1bfb\u1c38-\u1c3a\u1c4a-\u1c4c\u1c89-\u1c8f\u1cbb\u1cbc\u1cc8-\u1ccf\u1cfb-\u1cff\u1dfa\u1f16\u1f17\u1f1e\u1f1f\u1f46\u1f47\u1f4e\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e\u1f7f\u1fb5\u1fc5\u1fd4\u1fd5\u1fdc\u1ff0\u1ff1\u1ff5\u1fff\u2065\u2072\u2073\u208f\u209d-\u209f\u20c0-\u20cf\u20f1-\u20ff\u218c-\u218f\u2427-\u243f\u244b-\u245f\u2b74\u2b75\u2b96\u2c2f\u2c5f\u2cf4-\u2cf8\u2d26\u2d28-\u2d2c\u2d2e\u2d2f\u2d68-\u2d6e\u2d71-\u2d7e\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e53-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3040\u3097\u3098\u3100-\u3104\u3130\u318f\u31e4-\u31ef\u321f\u9ffd-\u9fff\ua48d-\ua48f\ua4c7-\ua4cf\ua62c-\ua63f\ua6f8-\ua6ff\ua7c0\ua7c1\ua7cb-\ua7f4\ua82d-\ua82f\ua83a-\ua83f\ua878-\ua87f\ua8c6-\ua8cd\ua8da-\ua8df\ua954-\ua95e\ua97d-\ua97f\ua9ce\ua9da-\ua9dd\ua9ff\uaa37-\uaa3f\uaa4e\uaa4f\uaa5a\uaa5b\uaac3-\uaada\uaaf7-\uab00\uab07\uab08\uab0f\uab10\uab17-\uab1f\uab27\uab2f\uab6c-\uab6f\uabee\uabef\uabfa-\uabff\ud7a4-\ud7af\ud7c7-\ud7ca\ud7fc-\ud7ff\ufa6e\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbc2-\ufbd2\ufd40-\ufd4f\ufd90\ufd91\ufdc8-\ufdef\ufdfe\ufdff\ufe1a-\ufe1f\ufe53\ufe67\ufe6c-\ufe6f\ufe75\ufefd\ufefe\uff00\uffbf-\uffc1\uffc8\uffc9\uffd0\uffd1\uffd8\uffd9\uffdd-\uffdf\uffe7\uffef-\ufff8\ufffe\uffff",
          astral:
            "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9d-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f\udeaa\udeae\udeaf\udeb2-\udeff\udf28-\udf2f\udf5a-\udfaf\udfcc-\udfdf\udff7-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccc\udcce\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd48-\udd4f\udd77-\udd7f\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5c\udc62-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb9-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd07\udd08\udd0a\udd0b\udd14\udd17\udd36\udd39\udd3a\udd47-\udd4f\udd5a-\udd9f\udda8\udda9\uddd8\uddd9\udde5-\uddff\ude48-\ude4f\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfaf\udfb1-\udfbf\udff2-\udffe]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud824-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f\ud885-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80d[\udc2f\udc39-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf4b-\udf4e\udf88-\udf8e\udfa0-\udfdf\udfe5-\udfef\udff2-\udfff]|\ud821[\udff8-\udfff]|\ud823[\udcd6-\udcff\udd09-\udfff]|\ud82c[\udd1f-\udd4f\udd53-\udd63\udd68-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udcff\udd2d-\udd2f\udd3e\udd3f\udd4a-\udd4d\udd50-\udebf\udefa-\udefe\udf00-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4c-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\udd00\udd3e-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\uddae-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded8-\udedf\udeed-\udeef\udefd-\udeff\udf74-\udf7f\udfd9-\udfdf\udfec-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae\udcaf\udcb2-\udcff\udd79\uddcc\ude54-\ude5f\ude6e\ude6f\ude75-\ude77\ude7b-\ude7f\ude87-\ude8f\udea9-\udeaf\udeb7-\udebf\udec3-\udecf\uded7-\udeff\udf93\udfcb-\udfef\udffa-\udfff]|\ud869[\udede-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\ud884[\udf4b-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]",
        },
        {
          name: "Co",
          alias: "Private_Use",
          bmp: "\ue000-\uf8ff",
          astral:
            "[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]",
        },
        { name: "Cs", alias: "Surrogate", bmp: "\ud800-\udfff" },
        {
          name: "L",
          alias: "Letter",
          bmp: "A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u1884\u1887-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
          astral:
            "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\ude80-\udea9\udeb0\udeb1\udf00-\udf1c\udf27\udf30-\udf45\udfb0-\udfc4\udfe0-\udff6]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd47\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f-\udc61\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd2f\udd3f\udd41\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2\udfb0]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud822\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf50\udf93-\udf9f\udfe0\udfe1\udfe3]|\ud821[\udc00-\udff7]|\ud823[\udc00-\udcd5\udd00-\udd08]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udd00-\udd2c\udd37-\udd3d\udd4e\udec0-\udeeb]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\udedd\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]",
        },
        {
          name: "LC",
          alias: "Cased_Letter",
          bmp: "A-Za-z\xb5\xc0-\xd6\xd8-\xf6\xf8-\u01ba\u01bc-\u01bf\u01c4-\u0293\u0295-\u02af\u0370-\u0373\u0376\u0377\u037b-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0560-\u0588\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fd-\u10ff\u13a0-\u13f5\u13f8-\u13fd\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1d00-\u1d2b\u1d6b-\u1d77\u1d79-\u1d9a\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2134\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c7b\u2c7e-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua640-\ua66d\ua680-\ua69b\ua722-\ua76f\ua771-\ua787\ua78b-\ua78e\ua790-\ua7bf\ua7c2-\ua7ca\ua7f5\ua7f6\ua7fa\uab30-\uab5a\uab60-\uab68\uab70-\uabbf\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a",
          astral:
            "\ud801[\udc00-\udc4f\udcb0-\udcd3\udcd8-\udcfb]|\ud803[\udc80-\udcb2\udcc0-\udcf2]|\ud806[\udca0-\udcdf]|\ud81b[\ude40-\ude7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udd00-\udd43]",
        },
        {
          name: "Ll",
          alias: "Lowercase_Letter",
          bmp: "a-z\xb5\xdf-\xf6\xf8-\xff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02af\u0371\u0373\u0377\u037b-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0529\u052b\u052d\u052f\u0560-\u0588\u10d0-\u10fa\u10fd-\u10ff\u13f8-\u13fd\u1c80-\u1c88\u1d00-\u1d2b\u1d6b-\u1d77\u1d79-\u1d9a\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2184\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7b\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua699\ua69b\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f\ua771-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua793-\ua795\ua797\ua799\ua79b\ua79d\ua79f\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7af\ua7b5\ua7b7\ua7b9\ua7bb\ua7bd\ua7bf\ua7c3\ua7c8\ua7ca\ua7f6\ua7fa\uab30-\uab5a\uab60-\uab68\uab70-\uabbf\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a",
          astral:
            "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]",
        },
        {
          name: "Lm",
          alias: "Modifier_Letter",
          bmp: "\u02b0-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0374\u037a\u0559\u0640\u06e5\u06e6\u07f4\u07f5\u07fa\u081a\u0824\u0828\u0971\u0e46\u0ec6\u10fc\u17d7\u1843\u1aa7\u1c78-\u1c7d\u1d2c-\u1d6a\u1d78\u1d9b-\u1dbf\u2071\u207f\u2090-\u209c\u2c7c\u2c7d\u2d6f\u2e2f\u3005\u3031-\u3035\u303b\u309d\u309e\u30fc-\u30fe\ua015\ua4f8-\ua4fd\ua60c\ua67f\ua69c\ua69d\ua717-\ua71f\ua770\ua788\ua7f8\ua7f9\ua9cf\ua9e6\uaa70\uaadd\uaaf3\uaaf4\uab5c-\uab5f\uab69\uff70\uff9e\uff9f",
          astral:
            "\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0\udfe1\udfe3]|\ud838[\udd37-\udd3d]|\ud83a\udd4b",
        },
        {
          name: "Lo",
          alias: "Other_Letter",
          bmp: "\xaa\xba\u01bb\u01c0-\u01c3\u0294\u05d0-\u05ea\u05ef-\u05f2\u0620-\u063f\u0641-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u0800-\u0815\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e45\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u1100-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17dc\u1820-\u1842\u1844-\u1878\u1880-\u1884\u1887-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c77\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u2135-\u2138\u2d30-\u2d67\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3006\u303c\u3041-\u3096\u309f\u30a1-\u30fa\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua014\ua016-\ua48c\ua4d0-\ua4f7\ua500-\ua60b\ua610-\ua61f\ua62a\ua62b\ua66e\ua6a0-\ua6e5\ua78f\ua7f7\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9e0-\ua9e4\ua9e7-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa6f\uaa71-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb\uaadc\uaae0-\uaaea\uaaf2\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff66-\uff6f\uff71-\uff9d\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
          astral:
            "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udd00-\udd23\ude80-\udea9\udeb0\udeb1\udf00-\udf1c\udf27\udf30-\udf45\udfb0-\udfc4\udfe0-\udff6]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd47\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f-\udc61\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a]|\ud806[\udc00-\udc2b\udcff-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd2f\udd3f\udd41\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2\udfb0]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud822\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf4a\udf50]|\ud821[\udc00-\udff7]|\ud823[\udc00-\udcd5\udd00-\udd08]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud838[\udd00-\udd2c\udd4e\udec0-\udeeb]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\udedd\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]",
        },
        {
          name: "Lt",
          alias: "Titlecase_Letter",
          bmp: "\u01c5\u01c8\u01cb\u01f2\u1f88-\u1f8f\u1f98-\u1f9f\u1fa8-\u1faf\u1fbc\u1fcc\u1ffc",
        },
        {
          name: "Lu",
          alias: "Uppercase_Letter",
          bmp: "A-Z\xc0-\xd6\xd8-\xde\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0139\u013b\u013d\u013f\u0141\u0143\u0145\u0147\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u0179\u017b\u017d\u0181\u0182\u0184\u0186\u0187\u0189-\u018b\u018e-\u0191\u0193\u0194\u0196-\u0198\u019c\u019d\u019f\u01a0\u01a2\u01a4\u01a6\u01a7\u01a9\u01ac\u01ae\u01af\u01b1-\u01b3\u01b5\u01b7\u01b8\u01bc\u01c4\u01c7\u01ca\u01cd\u01cf\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f1\u01f4\u01f6-\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u023a\u023b\u023d\u023e\u0241\u0243-\u0246\u0248\u024a\u024c\u024e\u0370\u0372\u0376\u037f\u0386\u0388-\u038a\u038c\u038e\u038f\u0391-\u03a1\u03a3-\u03ab\u03cf\u03d2-\u03d4\u03d8\u03da\u03dc\u03de\u03e0\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03f9\u03fa\u03fd-\u042f\u0460\u0462\u0464\u0466\u0468\u046a\u046c\u046e\u0470\u0472\u0474\u0476\u0478\u047a\u047c\u047e\u0480\u048a\u048c\u048e\u0490\u0492\u0494\u0496\u0498\u049a\u049c\u049e\u04a0\u04a2\u04a4\u04a6\u04a8\u04aa\u04ac\u04ae\u04b0\u04b2\u04b4\u04b6\u04b8\u04ba\u04bc\u04be\u04c0\u04c1\u04c3\u04c5\u04c7\u04c9\u04cb\u04cd\u04d0\u04d2\u04d4\u04d6\u04d8\u04da\u04dc\u04de\u04e0\u04e2\u04e4\u04e6\u04e8\u04ea\u04ec\u04ee\u04f0\u04f2\u04f4\u04f6\u04f8\u04fa\u04fc\u04fe\u0500\u0502\u0504\u0506\u0508\u050a\u050c\u050e\u0510\u0512\u0514\u0516\u0518\u051a\u051c\u051e\u0520\u0522\u0524\u0526\u0528\u052a\u052c\u052e\u0531-\u0556\u10a0-\u10c5\u10c7\u10cd\u13a0-\u13f5\u1c90-\u1cba\u1cbd-\u1cbf\u1e00\u1e02\u1e04\u1e06\u1e08\u1e0a\u1e0c\u1e0e\u1e10\u1e12\u1e14\u1e16\u1e18\u1e1a\u1e1c\u1e1e\u1e20\u1e22\u1e24\u1e26\u1e28\u1e2a\u1e2c\u1e2e\u1e30\u1e32\u1e34\u1e36\u1e38\u1e3a\u1e3c\u1e3e\u1e40\u1e42\u1e44\u1e46\u1e48\u1e4a\u1e4c\u1e4e\u1e50\u1e52\u1e54\u1e56\u1e58\u1e5a\u1e5c\u1e5e\u1e60\u1e62\u1e64\u1e66\u1e68\u1e6a\u1e6c\u1e6e\u1e70\u1e72\u1e74\u1e76\u1e78\u1e7a\u1e7c\u1e7e\u1e80\u1e82\u1e84\u1e86\u1e88\u1e8a\u1e8c\u1e8e\u1e90\u1e92\u1e94\u1e9e\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u1ef6\u1ef8\u1efa\u1efc\u1efe\u1f08-\u1f0f\u1f18-\u1f1d\u1f28-\u1f2f\u1f38-\u1f3f\u1f48-\u1f4d\u1f59\u1f5b\u1f5d\u1f5f\u1f68-\u1f6f\u1fb8-\u1fbb\u1fc8-\u1fcb\u1fd8-\u1fdb\u1fe8-\u1fec\u1ff8-\u1ffb\u2102\u2107\u210b-\u210d\u2110-\u2112\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u2130-\u2133\u213e\u213f\u2145\u2183\u2c00-\u2c2e\u2c60\u2c62-\u2c64\u2c67\u2c69\u2c6b\u2c6d-\u2c70\u2c72\u2c75\u2c7e-\u2c80\u2c82\u2c84\u2c86\u2c88\u2c8a\u2c8c\u2c8e\u2c90\u2c92\u2c94\u2c96\u2c98\u2c9a\u2c9c\u2c9e\u2ca0\u2ca2\u2ca4\u2ca6\u2ca8\u2caa\u2cac\u2cae\u2cb0\u2cb2\u2cb4\u2cb6\u2cb8\u2cba\u2cbc\u2cbe\u2cc0\u2cc2\u2cc4\u2cc6\u2cc8\u2cca\u2ccc\u2cce\u2cd0\u2cd2\u2cd4\u2cd6\u2cd8\u2cda\u2cdc\u2cde\u2ce0\u2ce2\u2ceb\u2ced\u2cf2\ua640\ua642\ua644\ua646\ua648\ua64a\ua64c\ua64e\ua650\ua652\ua654\ua656\ua658\ua65a\ua65c\ua65e\ua660\ua662\ua664\ua666\ua668\ua66a\ua66c\ua680\ua682\ua684\ua686\ua688\ua68a\ua68c\ua68e\ua690\ua692\ua694\ua696\ua698\ua69a\ua722\ua724\ua726\ua728\ua72a\ua72c\ua72e\ua732\ua734\ua736\ua738\ua73a\ua73c\ua73e\ua740\ua742\ua744\ua746\ua748\ua74a\ua74c\ua74e\ua750\ua752\ua754\ua756\ua758\ua75a\ua75c\ua75e\ua760\ua762\ua764\ua766\ua768\ua76a\ua76c\ua76e\ua779\ua77b\ua77d\ua77e\ua780\ua782\ua784\ua786\ua78b\ua78d\ua790\ua792\ua796\ua798\ua79a\ua79c\ua79e\ua7a0\ua7a2\ua7a4\ua7a6\ua7a8\ua7aa-\ua7ae\ua7b0-\ua7b4\ua7b6\ua7b8\ua7ba\ua7bc\ua7be\ua7c2\ua7c4-\ua7c7\ua7c9\ua7f5\uff21-\uff3a",
          astral:
            "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]",
        },
        {
          name: "M",
          alias: "Mark",
          bmp: "\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f\u109a-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u180b-\u180d\u1885\u1886\u18a9\u1920-\u192b\u1930-\u193b\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f\u1ab0-\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1be6-\u1bf3\u1c24-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8e0-\ua8f1\ua8ff\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9e5\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f",
          astral:
            "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udeab\udeac\udf46-\udf50]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd45\udd46\udd73\udd80-\udd82\uddb3-\uddc0\uddc9-\uddcc\uddce\uddcf\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3b\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udc5e\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud806[\udc2c-\udc3a\udd30-\udd35\udd37\udd38\udd3b-\udd3e\udd40\udd42\udd43\uddd1-\uddd7\uddda-\udde0\udde4\ude01-\ude0a\ude33-\ude39\ude3b-\ude3e\ude47\ude51-\ude5b\ude8a-\ude99]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd8a-\udd8e\udd90\udd91\udd93-\udd97\udef3-\udef6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf4f\udf51-\udf87\udf8f-\udf92\udfe4\udff0\udff1]|\ud82f[\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a\udd30-\udd36\udeec-\udeef]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]",
        },
        {
          name: "Mc",
          alias: "Spacing_Mark",
          bmp: "\u0903\u093b\u093e-\u0940\u0949-\u094c\u094e\u094f\u0982\u0983\u09be-\u09c0\u09c7\u09c8\u09cb\u09cc\u09d7\u0a03\u0a3e-\u0a40\u0a83\u0abe-\u0ac0\u0ac9\u0acb\u0acc\u0b02\u0b03\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd7\u0c01-\u0c03\u0c41-\u0c44\u0c82\u0c83\u0cbe\u0cc0-\u0cc4\u0cc7\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0d02\u0d03\u0d3e-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d57\u0d82\u0d83\u0dcf-\u0dd1\u0dd8-\u0ddf\u0df2\u0df3\u0f3e\u0f3f\u0f7f\u102b\u102c\u1031\u1038\u103b\u103c\u1056\u1057\u1062-\u1064\u1067-\u106d\u1083\u1084\u1087-\u108c\u108f\u109a-\u109c\u17b6\u17be-\u17c5\u17c7\u17c8\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u1a19\u1a1a\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1b04\u1b35\u1b3b\u1b3d-\u1b41\u1b43\u1b44\u1b82\u1ba1\u1ba6\u1ba7\u1baa\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1c24-\u1c2b\u1c34\u1c35\u1ce1\u1cf7\u302e\u302f\ua823\ua824\ua827\ua880\ua881\ua8b4-\ua8c3\ua952\ua953\ua983\ua9b4\ua9b5\ua9ba\ua9bb\ua9be-\ua9c0\uaa2f\uaa30\uaa33\uaa34\uaa4d\uaa7b\uaa7d\uaaeb\uaaee\uaaef\uaaf5\uabe3\uabe4\uabe6\uabe7\uabe9\uabea\uabec",
          astral:
            "\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd45\udd46\udd82\uddb3-\uddb5\uddbf\uddc0\uddce\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud806[\udc2c-\udc2e\udc38\udd30-\udd35\udd37\udd38\udd3d\udd40\udd42\uddd1-\uddd3\udddc-\udddf\udde4\ude39\ude57\ude58\ude97]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4\udd8a-\udd8e\udd93\udd94\udd96\udef5\udef6]|\ud81b[\udf51-\udf87\udff0\udff1]|\ud834[\udd65\udd66\udd6d-\udd72]",
        },
        {
          name: "Me",
          alias: "Enclosing_Mark",
          bmp: "\u0488\u0489\u1abe\u20dd-\u20e0\u20e2-\u20e4\ua670-\ua672",
        },
        {
          name: "Mn",
          alias: "Nonspacing_Mark",
          bmp: "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u09fe\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0afa-\u0aff\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b55\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c00\u0c04\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d00\u0d01\u0d3b\u0d3c\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0d81\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u1885\u1886\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1bab-\u1bad\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u3099\u309a\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua82c\ua8c4\ua8c5\ua8e0-\ua8f1\ua8ff\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9bd\ua9e5\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaec\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f",
          astral:
            "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udeab\udeac\udf46-\udf50]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddc9-\uddcc\uddcf\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3b\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udc5e\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud806[\udc2f-\udc37\udc39\udc3a\udd3b\udd3c\udd3e\udd43\uddd4-\uddd7\uddda\udddb\udde0\ude01-\ude0a\ude33-\ude38\ude3b-\ude3e\ude47\ude51-\ude56\ude59-\ude5b\ude8a-\ude96\ude98\ude99]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd90\udd91\udd95\udd97\udef3\udef4]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf4f\udf8f-\udf92\udfe4]|\ud82f[\udc9d\udc9e]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a\udd30-\udd36\udeec-\udeef]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]",
        },
        {
          name: "N",
          alias: "Number",
          bmp: "0-9\xb2\xb3\xb9\xbc-\xbe\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u09f4-\u09f9\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0b72-\u0b77\u0be6-\u0bf2\u0c66-\u0c6f\u0c78-\u0c7e\u0ce6-\u0cef\u0d58-\u0d5e\u0d66-\u0d78\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f33\u1040-\u1049\u1090-\u1099\u1369-\u137c\u16ee-\u16f0\u17e0-\u17e9\u17f0-\u17f9\u1810-\u1819\u1946-\u194f\u19d0-\u19da\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249b\u24ea-\u24ff\u2776-\u2793\u2cfd\u3007\u3021-\u3029\u3038-\u303a\u3192-\u3195\u3220-\u3229\u3248-\u324f\u3251-\u325f\u3280-\u3289\u32b1-\u32bf\ua620-\ua629\ua6e6-\ua6ef\ua830-\ua835\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19",
          astral:
            "\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54\udfc5-\udfcb]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2\udd50-\udd59]|\ud807[\udc50-\udc6c\udd50-\udd59\udda0-\udda9\udfc0-\udfd4]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud835[\udfce-\udfff]|\ud838[\udd40-\udd49\udef0-\udef9]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4\udd01-\udd2d\udd2f-\udd3d]|\ud83c[\udd00-\udd0c]|\ud83e[\udff0-\udff9]",
        },
        {
          name: "Nd",
          alias: "Decimal_Number",
          bmp: "0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19",
          astral:
            "\ud801[\udca0-\udca9]|\ud803[\udd30-\udd39]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9\udd50-\udd59]|\ud807[\udc50-\udc59\udd50-\udd59\udda0-\udda9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud838[\udd40-\udd49\udef0-\udef9]|\ud83a[\udd50-\udd59]|\ud83e[\udff0-\udff9]",
        },
        {
          name: "Nl",
          alias: "Letter_Number",
          bmp: "\u16ee-\u16f0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303a\ua6e6-\ua6ef",
          astral:
            "\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]",
        },
        {
          name: "No",
          alias: "Other_Number",
          bmp: "\xb2\xb3\xb9\xbc-\xbe\u09f4-\u09f9\u0b72-\u0b77\u0bf0-\u0bf2\u0c78-\u0c7e\u0d58-\u0d5e\u0d70-\u0d78\u0f2a-\u0f33\u1369-\u137c\u17f0-\u17f9\u19da\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215f\u2189\u2460-\u249b\u24ea-\u24ff\u2776-\u2793\u2cfd\u3192-\u3195\u3220-\u3229\u3248-\u324f\u3251-\u325f\u3280-\u3289\u32b1-\u32bf\ua830-\ua835",
          astral:
            "\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e\udf1d-\udf26\udf51-\udf54\udfc5-\udfcb]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c\udfc0-\udfd4]|\ud81a[\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud83a[\udcc7-\udccf]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4\udd01-\udd2d\udd2f-\udd3d]|\ud83c[\udd00-\udd0c]",
        },
        {
          name: "P",
          alias: "Punctuation",
          bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xa1\xa7\xab\xb6\xb7\xbb\xbf\u037e\u0387\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u09fd\u0a76\u0af0\u0c77\u0c84\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u1400\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u2308-\u230b\u2329\u232a\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e4f\u2e52\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua8fc\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65",
          astral:
            "\ud800[\udd00-\udd02\udf9f\udfd0]|\ud801\udd6f|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udead\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5a\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\udd44-\udd46\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8\udfff]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|\ud82f\udc9f|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]",
        },
        {
          name: "Pc",
          alias: "Connector_Punctuation",
          bmp: "_\u203f\u2040\u2054\ufe33\ufe34\ufe4d-\ufe4f\uff3f",
        },
        {
          name: "Pd",
          alias: "Dash_Punctuation",
          bmp: "\\-\u058a\u05be\u1400\u1806\u2010-\u2015\u2e17\u2e1a\u2e3a\u2e3b\u2e40\u301c\u3030\u30a0\ufe31\ufe32\ufe58\ufe63\uff0d",
          astral: "\ud803\udead",
        },
        {
          name: "Pe",
          alias: "Close_Punctuation",
          bmp: "\\)\\]\\}\u0f3b\u0f3d\u169c\u2046\u207e\u208e\u2309\u230b\u232a\u2769\u276b\u276d\u276f\u2771\u2773\u2775\u27c6\u27e7\u27e9\u27eb\u27ed\u27ef\u2984\u2986\u2988\u298a\u298c\u298e\u2990\u2992\u2994\u2996\u2998\u29d9\u29db\u29fd\u2e23\u2e25\u2e27\u2e29\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3e\ufe18\ufe36\ufe38\ufe3a\ufe3c\ufe3e\ufe40\ufe42\ufe44\ufe48\ufe5a\ufe5c\ufe5e\uff09\uff3d\uff5d\uff60\uff63",
        },
        {
          name: "Pf",
          alias: "Final_Punctuation",
          bmp: "\xbb\u2019\u201d\u203a\u2e03\u2e05\u2e0a\u2e0d\u2e1d\u2e21",
        },
        {
          name: "Pi",
          alias: "Initial_Punctuation",
          bmp: "\xab\u2018\u201b\u201c\u201f\u2039\u2e02\u2e04\u2e09\u2e0c\u2e1c\u2e20",
        },
        {
          name: "Po",
          alias: "Other_Punctuation",
          bmp: "!-#%-'\\*,\\.\\/:;\\?@\\\xa1\xa7\xb6\xb7\xbf\u037e\u0387\u055a-\u055f\u0589\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u09fd\u0a76\u0af0\u0c77\u0c84\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u166e\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u1805\u1807-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203b-\u203e\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205e\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00\u2e01\u2e06-\u2e08\u2e0b\u2e0e-\u2e16\u2e18\u2e19\u2e1b\u2e1e\u2e1f\u2e2a-\u2e2e\u2e30-\u2e39\u2e3c-\u2e3f\u2e41\u2e43-\u2e4f\u2e52\u3001-\u3003\u303d\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua8fc\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufe10-\ufe16\ufe19\ufe30\ufe45\ufe46\ufe49-\ufe4c\ufe50-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0a\uff0c\uff0e\uff0f\uff1a\uff1b\uff1f\uff20\uff3c\uff61\uff64\uff65",
          astral:
            "\ud800[\udd00-\udd02\udf9f\udfd0]|\ud801\udd6f|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5a\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\udd44-\udd46\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8\udfff]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|\ud82f\udc9f|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]",
        },
        {
          name: "Ps",
          alias: "Open_Punctuation",
          bmp: "\\(\\[\\{\u0f3a\u0f3c\u169b\u201a\u201e\u2045\u207d\u208d\u2308\u230a\u2329\u2768\u276a\u276c\u276e\u2770\u2772\u2774\u27c5\u27e6\u27e8\u27ea\u27ec\u27ee\u2983\u2985\u2987\u2989\u298b\u298d\u298f\u2991\u2993\u2995\u2997\u29d8\u29da\u29fc\u2e22\u2e24\u2e26\u2e28\u2e42\u3008\u300a\u300c\u300e\u3010\u3014\u3016\u3018\u301a\u301d\ufd3f\ufe17\ufe35\ufe37\ufe39\ufe3b\ufe3d\ufe3f\ufe41\ufe43\ufe47\ufe59\ufe5b\ufe5d\uff08\uff3b\uff5b\uff5f\uff62",
        },
        {
          name: "S",
          alias: "Symbol",
          bmp: "\\$\\+<->\\^`\\|~\xa2-\xa6\xa8\xa9\xac\xae-\xb1\xb4\xb8\xd7\xf7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u0482\u058d-\u058f\u0606-\u0608\u060b\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u07fe\u07ff\u09f2\u09f3\u09fa\u09fb\u0af1\u0b70\u0bf3-\u0bfa\u0c7f\u0d4f\u0d79\u0e3f\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u166d\u17db\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20bf\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u2140-\u2144\u214a-\u214d\u214f\u218a\u218b\u2190-\u2307\u230c-\u2328\u232b-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u2767\u2794-\u27c4\u27c7-\u27e5\u27f0-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2e50\u2e51\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u309b\u309c\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua700-\ua716\ua720\ua721\ua789\ua78a\ua828-\ua82b\ua836-\ua839\uaa77-\uaa79\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc1\ufdfc\ufdfd\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe6\uffe8-\uffee\ufffc\ufffd",
          astral:
            "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9c\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|\ud805\udf3f|\ud807[\udfd5-\udff1]|\ud81a[\udf3c-\udf3f\udf45]|\ud82f\udc9c|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud838[\udd4f\udeff]|\ud83b[\udcac\udcb0\udd2e\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd0d-\uddad\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded7\udee0-\udeec\udef0-\udefc\udf00-\udf73\udf80-\udfd8\udfe0-\udfeb]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udcb0\udcb1\udd00-\udd78\udd7a-\uddcb\uddcd-\ude53\ude60-\ude6d\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6\udf00-\udf92\udf94-\udfca]",
        },
        {
          name: "Sc",
          alias: "Currency_Symbol",
          bmp: "\\$\xa2-\xa5\u058f\u060b\u07fe\u07ff\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u20a0-\u20bf\ua838\ufdfc\ufe69\uff04\uffe0\uffe1\uffe5\uffe6",
          astral: "\ud807[\udfdd-\udfe0]|\ud838\udeff|\ud83b\udcb0",
        },
        {
          name: "Sk",
          alias: "Modifier_Symbol",
          bmp: "\\^`\xa8\xaf\xb4\xb8\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\uab5b\uab6a\uab6b\ufbb2-\ufbc1\uff3e\uff40\uffe3",
          astral: "\ud83c[\udffb-\udfff]",
        },
        {
          name: "Sm",
          alias: "Math_Symbol",
          bmp: "\\+<->\\|~\xac\xb1\xd7\xf7\u03f6\u0606-\u0608\u2044\u2052\u207a-\u207c\u208a-\u208c\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\ufb29\ufe62\ufe64-\ufe66\uff0b\uff1c-\uff1e\uff5c\uff5e\uffe2\uffe9-\uffec",
          astral:
            "\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]",
        },
        {
          name: "So",
          alias: "Other_Symbol",
          bmp: "\xa6\xa9\xae\xb0\u0482\u058d\u058e\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u09fa\u0b70\u0bf3-\u0bf8\u0bfa\u0c7f\u0d4f\u0d79\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u166d\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u214a\u214c\u214d\u214f\u218a\u218b\u2195-\u2199\u219c-\u219f\u21a1\u21a2\u21a4\u21a5\u21a7-\u21ad\u21af-\u21cd\u21d0\u21d1\u21d3\u21d5-\u21f3\u2300-\u2307\u230c-\u231f\u2322-\u2328\u232b-\u237b\u237d-\u239a\u23b4-\u23db\u23e2-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u25b6\u25b8-\u25c0\u25c2-\u25f7\u2600-\u266e\u2670-\u2767\u2794-\u27bf\u2800-\u28ff\u2b00-\u2b2f\u2b45\u2b46\u2b4d-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2e50\u2e51\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua828-\ua82b\ua836\ua837\ua839\uaa77-\uaa79\ufdfd\uffe4\uffe8\uffed\uffee\ufffc\ufffd",
          astral:
            "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9c\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|\ud805\udf3f|\ud807[\udfd5-\udfdc\udfe1-\udff1]|\ud81a[\udf3c-\udf3f\udf45]|\ud82f\udc9c|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud838\udd4f|\ud83b[\udcac\udd2e]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd0d-\uddad\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udffa]|\ud83d[\udc00-\uded7\udee0-\udeec\udef0-\udefc\udf00-\udf73\udf80-\udfd8\udfe0-\udfeb]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udcb0\udcb1\udd00-\udd78\udd7a-\uddcb\uddcd-\ude53\ude60-\ude6d\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6\udf00-\udf92\udf94-\udfca]",
        },
        {
          name: "Z",
          alias: "Separator",
          bmp: " \xa0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000",
        },
        { name: "Zl", alias: "Line_Separator", bmp: "\u2028" },
        { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" },
        {
          name: "Zs",
          alias: "Space_Separator",
          bmp: " \xa0\u1680\u2000-\u200a\u202f\u205f\u3000",
        },
      ];
    },
    12474: function (d) {
      d.exports = [
        { name: "ASCII", bmp: "\0-\x7f" },
        {
          name: "Alphabetic",
          bmp: "A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0345\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05b0-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05ef-\u05f2\u0610-\u061a\u0620-\u0657\u0659-\u065f\u066e-\u06d3\u06d5-\u06dc\u06e1-\u06e8\u06ed-\u06ef\u06fa-\u06fc\u06ff\u0710-\u073f\u074d-\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0817\u081a-\u082c\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u08d4-\u08df\u08e3-\u08e9\u08f0-\u093b\u093d-\u094c\u094e-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c4\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u09fc\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a42\u0a47\u0a48\u0a4b\u0a4c\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac5\u0ac7-\u0ac9\u0acb\u0acc\u0ad0\u0ae0-\u0ae3\u0af9-\u0afc\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d-\u0b44\u0b47\u0b48\u0b4b\u0b4c\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4c\u0c55\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c80-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccc\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d00-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d54-\u0d57\u0d5f-\u0d63\u0d7a-\u0d7f\u0d81-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e46\u0e4d\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ecd\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f71-\u0f81\u0f88-\u0f97\u0f99-\u0fbc\u1000-\u1036\u1038\u103b-\u103f\u1050-\u108f\u109a-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17b3\u17b6-\u17c8\u17d7\u17dc\u1820-\u1878\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u1938\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a61-\u1a74\u1aa7\u1abf\u1ac0\u1b00-\u1b33\u1b35-\u1b43\u1b45-\u1b4b\u1b80-\u1ba9\u1bac-\u1baf\u1bba-\u1be5\u1be7-\u1bf1\u1c00-\u1c36\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1de7-\u1df4\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u24b6-\u24e9\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua674-\ua67b\ua67f-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua805\ua807-\ua827\ua840-\ua873\ua880-\ua8c3\ua8c5\ua8f2-\ua8f7\ua8fb\ua8fd-\ua8ff\ua90a-\ua92a\ua930-\ua952\ua960-\ua97c\ua980-\ua9b2\ua9b4-\ua9bf\ua9cf\ua9e0-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a-\uaabe\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabea\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
          astral:
            "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\ude80-\udea9\udeab\udeac\udeb0\udeb1\udf00-\udf1c\udf27\udf30-\udf45\udfb0-\udfc4\udfe0-\udff6]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd44-\udd47\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddce\uddcf\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc5f-\udc61\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udeb8\udf00-\udf1a\udf1d-\udf2a]|\ud806[\udc00-\udc38\udca0-\udcdf\udcff-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd35\udd37\udd38\udd3b\udd3c\udd3f-\udd42\udda0-\udda7\uddaa-\uddd7\uddda-\udddf\udde1\udde3\udde4\ude00-\ude32\ude35-\ude3e\ude50-\ude97\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd41\udd43\udd46\udd47\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd96\udd98\udee0-\udef6\udfb0]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud822\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f\udfe0\udfe1\udfe3\udff0\udff1]|\ud821[\udc00-\udff7]|\ud823[\udc00-\udcd5\udd00-\udd08]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a\udd00-\udd2c\udd37-\udd3d\udd4e\udec0-\udeeb]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\udedd\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]",
        },
        {
          name: "Any",
          isBmpLast: !0,
          bmp: "\0-\uffff",
          astral: "[\ud800-\udbff][\udc00-\udfff]",
        },
        {
          name: "Default_Ignorable_Code_Point",
          bmp: "\xad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180e\u200b-\u200f\u202a-\u202e\u2060-\u206f\u3164\ufe00-\ufe0f\ufeff\uffa0\ufff0-\ufff8",
          astral:
            "\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]",
        },
        {
          name: "Lowercase",
          bmp: "a-z\xaa\xb5\xba\xdf-\xf6\xf8-\xff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02b8\u02c0\u02c1\u02e0-\u02e4\u0345\u0371\u0373\u0377\u037a-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0529\u052b\u052d\u052f\u0560-\u0588\u10d0-\u10fa\u10fd-\u10ff\u13f8-\u13fd\u1c80-\u1c88\u1d00-\u1dbf\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u2071\u207f\u2090-\u209c\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2170-\u217f\u2184\u24d0-\u24e9\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7d\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua699\ua69b-\ua69d\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua793-\ua795\ua797\ua799\ua79b\ua79d\ua79f\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7af\ua7b5\ua7b7\ua7b9\ua7bb\ua7bd\ua7bf\ua7c3\ua7c8\ua7ca\ua7f6\ua7f8-\ua7fa\uab30-\uab5a\uab5c-\uab68\uab70-\uabbf\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a",
          astral:
            "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]",
        },
        {
          name: "Noncharacter_Code_Point",
          bmp: "\ufdd0-\ufdef\ufffe\uffff",
          astral:
            "[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]",
        },
        {
          name: "Uppercase",
          bmp: "A-Z\xc0-\xd6\xd8-\xde\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0139\u013b\u013d\u013f\u0141\u0143\u0145\u0147\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u0179\u017b\u017d\u0181\u0182\u0184\u0186\u0187\u0189-\u018b\u018e-\u0191\u0193\u0194\u0196-\u0198\u019c\u019d\u019f\u01a0\u01a2\u01a4\u01a6\u01a7\u01a9\u01ac\u01ae\u01af\u01b1-\u01b3\u01b5\u01b7\u01b8\u01bc\u01c4\u01c7\u01ca\u01cd\u01cf\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f1\u01f4\u01f6-\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u023a\u023b\u023d\u023e\u0241\u0243-\u0246\u0248\u024a\u024c\u024e\u0370\u0372\u0376\u037f\u0386\u0388-\u038a\u038c\u038e\u038f\u0391-\u03a1\u03a3-\u03ab\u03cf\u03d2-\u03d4\u03d8\u03da\u03dc\u03de\u03e0\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03f9\u03fa\u03fd-\u042f\u0460\u0462\u0464\u0466\u0468\u046a\u046c\u046e\u0470\u0472\u0474\u0476\u0478\u047a\u047c\u047e\u0480\u048a\u048c\u048e\u0490\u0492\u0494\u0496\u0498\u049a\u049c\u049e\u04a0\u04a2\u04a4\u04a6\u04a8\u04aa\u04ac\u04ae\u04b0\u04b2\u04b4\u04b6\u04b8\u04ba\u04bc\u04be\u04c0\u04c1\u04c3\u04c5\u04c7\u04c9\u04cb\u04cd\u04d0\u04d2\u04d4\u04d6\u04d8\u04da\u04dc\u04de\u04e0\u04e2\u04e4\u04e6\u04e8\u04ea\u04ec\u04ee\u04f0\u04f2\u04f4\u04f6\u04f8\u04fa\u04fc\u04fe\u0500\u0502\u0504\u0506\u0508\u050a\u050c\u050e\u0510\u0512\u0514\u0516\u0518\u051a\u051c\u051e\u0520\u0522\u0524\u0526\u0528\u052a\u052c\u052e\u0531-\u0556\u10a0-\u10c5\u10c7\u10cd\u13a0-\u13f5\u1c90-\u1cba\u1cbd-\u1cbf\u1e00\u1e02\u1e04\u1e06\u1e08\u1e0a\u1e0c\u1e0e\u1e10\u1e12\u1e14\u1e16\u1e18\u1e1a\u1e1c\u1e1e\u1e20\u1e22\u1e24\u1e26\u1e28\u1e2a\u1e2c\u1e2e\u1e30\u1e32\u1e34\u1e36\u1e38\u1e3a\u1e3c\u1e3e\u1e40\u1e42\u1e44\u1e46\u1e48\u1e4a\u1e4c\u1e4e\u1e50\u1e52\u1e54\u1e56\u1e58\u1e5a\u1e5c\u1e5e\u1e60\u1e62\u1e64\u1e66\u1e68\u1e6a\u1e6c\u1e6e\u1e70\u1e72\u1e74\u1e76\u1e78\u1e7a\u1e7c\u1e7e\u1e80\u1e82\u1e84\u1e86\u1e88\u1e8a\u1e8c\u1e8e\u1e90\u1e92\u1e94\u1e9e\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u1ef6\u1ef8\u1efa\u1efc\u1efe\u1f08-\u1f0f\u1f18-\u1f1d\u1f28-\u1f2f\u1f38-\u1f3f\u1f48-\u1f4d\u1f59\u1f5b\u1f5d\u1f5f\u1f68-\u1f6f\u1fb8-\u1fbb\u1fc8-\u1fcb\u1fd8-\u1fdb\u1fe8-\u1fec\u1ff8-\u1ffb\u2102\u2107\u210b-\u210d\u2110-\u2112\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u2130-\u2133\u213e\u213f\u2145\u2160-\u216f\u2183\u24b6-\u24cf\u2c00-\u2c2e\u2c60\u2c62-\u2c64\u2c67\u2c69\u2c6b\u2c6d-\u2c70\u2c72\u2c75\u2c7e-\u2c80\u2c82\u2c84\u2c86\u2c88\u2c8a\u2c8c\u2c8e\u2c90\u2c92\u2c94\u2c96\u2c98\u2c9a\u2c9c\u2c9e\u2ca0\u2ca2\u2ca4\u2ca6\u2ca8\u2caa\u2cac\u2cae\u2cb0\u2cb2\u2cb4\u2cb6\u2cb8\u2cba\u2cbc\u2cbe\u2cc0\u2cc2\u2cc4\u2cc6\u2cc8\u2cca\u2ccc\u2cce\u2cd0\u2cd2\u2cd4\u2cd6\u2cd8\u2cda\u2cdc\u2cde\u2ce0\u2ce2\u2ceb\u2ced\u2cf2\ua640\ua642\ua644\ua646\ua648\ua64a\ua64c\ua64e\ua650\ua652\ua654\ua656\ua658\ua65a\ua65c\ua65e\ua660\ua662\ua664\ua666\ua668\ua66a\ua66c\ua680\ua682\ua684\ua686\ua688\ua68a\ua68c\ua68e\ua690\ua692\ua694\ua696\ua698\ua69a\ua722\ua724\ua726\ua728\ua72a\ua72c\ua72e\ua732\ua734\ua736\ua738\ua73a\ua73c\ua73e\ua740\ua742\ua744\ua746\ua748\ua74a\ua74c\ua74e\ua750\ua752\ua754\ua756\ua758\ua75a\ua75c\ua75e\ua760\ua762\ua764\ua766\ua768\ua76a\ua76c\ua76e\ua779\ua77b\ua77d\ua77e\ua780\ua782\ua784\ua786\ua78b\ua78d\ua790\ua792\ua796\ua798\ua79a\ua79c\ua79e\ua7a0\ua7a2\ua7a4\ua7a6\ua7a8\ua7aa-\ua7ae\ua7b0-\ua7b4\ua7b6\ua7b8\ua7ba\ua7bc\ua7be\ua7c2\ua7c4-\ua7c7\ua7c9\ua7f5\uff21-\uff3a",
          astral:
            "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]",
        },
        {
          name: "White_Space",
          bmp: "\t-\r \x85\xa0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000",
        },
      ];
    },
    70772: function (d) {
      d.exports = [
        {
          name: "Adlam",
          astral: "\ud83a[\udd00-\udd4b\udd50-\udd59\udd5e\udd5f]",
        },
        {
          name: "Ahom",
          astral: "\ud805[\udf00-\udf1a\udf1d-\udf2b\udf30-\udf3f]",
        },
        { name: "Anatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude46]" },
        {
          name: "Arabic",
          bmp: "\u0600-\u0604\u0606-\u060b\u060d-\u061a\u061c\u061e\u0620-\u063f\u0641-\u064a\u0656-\u066f\u0671-\u06dc\u06de-\u06ff\u0750-\u077f\u08a0-\u08b4\u08b6-\u08c7\u08d3-\u08e1\u08e3-\u08ff\ufb50-\ufbc1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfd\ufe70-\ufe74\ufe76-\ufefc",
          astral:
            "\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]",
        },
        {
          name: "Armenian",
          bmp: "\u0531-\u0556\u0559-\u058a\u058d-\u058f\ufb13-\ufb17",
        },
        { name: "Avestan", astral: "\ud802[\udf00-\udf35\udf39-\udf3f]" },
        { name: "Balinese", bmp: "\u1b00-\u1b4b\u1b50-\u1b7c" },
        {
          name: "Bamum",
          bmp: "\ua6a0-\ua6f7",
          astral: "\ud81a[\udc00-\ude38]",
        },
        { name: "Bassa_Vah", astral: "\ud81a[\uded0-\udeed\udef0-\udef5]" },
        { name: "Batak", bmp: "\u1bc0-\u1bf3\u1bfc-\u1bff" },
        {
          name: "Bengali",
          bmp: "\u0980-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09fe",
        },
        {
          name: "Bhaiksuki",
          astral:
            "\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]",
        },
        { name: "Bopomofo", bmp: "\u02ea\u02eb\u3105-\u312f\u31a0-\u31bf" },
        { name: "Brahmi", astral: "\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]" },
        { name: "Braille", bmp: "\u2800-\u28ff" },
        { name: "Buginese", bmp: "\u1a00-\u1a1b\u1a1e\u1a1f" },
        { name: "Buhid", bmp: "\u1740-\u1753" },
        { name: "Canadian_Aboriginal", bmp: "\u1400-\u167f\u18b0-\u18f5" },
        { name: "Carian", astral: "\ud800[\udea0-\uded0]" },
        { name: "Caucasian_Albanian", astral: "\ud801[\udd30-\udd63\udd6f]" },
        { name: "Chakma", astral: "\ud804[\udd00-\udd34\udd36-\udd47]" },
        {
          name: "Cham",
          bmp: "\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa5c-\uaa5f",
        },
        { name: "Cherokee", bmp: "\u13a0-\u13f5\u13f8-\u13fd\uab70-\uabbf" },
        { name: "Chorasmian", astral: "\ud803[\udfb0-\udfcb]" },
        {
          name: "Common",
          bmp: "\0-@\\[-`\\{-\xa9\xab-\xb9\xbb-\xbf\xd7\xf7\u02b9-\u02df\u02e5-\u02e9\u02ec-\u02ff\u0374\u037e\u0385\u0387\u0605\u060c\u061b\u061f\u0640\u06dd\u08e2\u0964\u0965\u0e3f\u0fd5-\u0fd8\u10fb\u16eb-\u16ed\u1735\u1736\u1802\u1803\u1805\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5-\u1cf7\u1cfa\u2000-\u200b\u200e-\u2064\u2066-\u2070\u2074-\u207e\u2080-\u208e\u20a0-\u20bf\u2100-\u2125\u2127-\u2129\u212c-\u2131\u2133-\u214d\u214f-\u215f\u2189-\u218b\u2190-\u2426\u2440-\u244a\u2460-\u27ff\u2900-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2e00-\u2e52\u2ff0-\u2ffb\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303c-\u303f\u309b\u309c\u30a0\u30fb\u30fc\u3190-\u319f\u31c0-\u31e3\u3220-\u325f\u327f-\u32cf\u32ff\u3358-\u33ff\u4dc0-\u4dff\ua700-\ua721\ua788-\ua78a\ua830-\ua839\ua92e\ua9cf\uab5b\uab6a\uab6b\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe66\ufe68-\ufe6b\ufeff\uff01-\uff20\uff3b-\uff40\uff5b-\uff65\uff70\uff9e\uff9f\uffe0-\uffe6\uffe8-\uffee\ufff9-\ufffd",
          astral:
            "\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9c\uddd0-\uddfc\udee1-\udefb]|\ud81b[\udfe2\udfe3]|\ud82f[\udca0-\udca3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udee0-\udef3\udf00-\udf56\udf60-\udf78]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83b[\udc71-\udcb4\udd01-\udd3d]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\uddad\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded7\udee0-\udeec\udef0-\udefc\udf00-\udf73\udf80-\udfd8\udfe0-\udfeb]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udcb0\udcb1\udd00-\udd78\udd7a-\uddcb\uddcd-\ude53\ude60-\ude6d\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6\udf00-\udf92\udf94-\udfca\udff0-\udff9]|\udb40[\udc01\udc20-\udc7f]",
        },
        { name: "Coptic", bmp: "\u03e2-\u03ef\u2c80-\u2cf3\u2cf9-\u2cff" },
        {
          name: "Cuneiform",
          astral:
            "\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]",
        },
        {
          name: "Cypriot",
          astral:
            "\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]",
        },
        {
          name: "Cyrillic",
          bmp: "\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f",
        },
        { name: "Deseret", astral: "\ud801[\udc00-\udc4f]" },
        {
          name: "Devanagari",
          bmp: "\u0900-\u0950\u0955-\u0963\u0966-\u097f\ua8e0-\ua8ff",
        },
        {
          name: "Dives_Akuru",
          astral:
            "\ud806[\udd00-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd35\udd37\udd38\udd3b-\udd46\udd50-\udd59]",
        },
        { name: "Dogra", astral: "\ud806[\udc00-\udc3b]" },
        {
          name: "Duployan",
          astral:
            "\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]",
        },
        {
          name: "Egyptian_Hieroglyphs",
          astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e\udc30-\udc38]",
        },
        { name: "Elbasan", astral: "\ud801[\udd00-\udd27]" },
        { name: "Elymaic", astral: "\ud803[\udfe0-\udff6]" },
        {
          name: "Ethiopic",
          bmp: "\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u137c\u1380-\u1399\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e",
        },
        {
          name: "Georgian",
          bmp: "\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u10ff\u1c90-\u1cba\u1cbd-\u1cbf\u2d00-\u2d25\u2d27\u2d2d",
        },
        {
          name: "Glagolitic",
          bmp: "\u2c00-\u2c2e\u2c30-\u2c5e",
          astral:
            "\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]",
        },
        { name: "Gothic", astral: "\ud800[\udf30-\udf4a]" },
        {
          name: "Grantha",
          astral:
            "\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]",
        },
        {
          name: "Greek",
          bmp: "\u0370-\u0373\u0375-\u0377\u037a-\u037d\u037f\u0384\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03e1\u03f0-\u03ff\u1d26-\u1d2a\u1d5d-\u1d61\u1d66-\u1d6a\u1dbf\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fc4\u1fc6-\u1fd3\u1fd6-\u1fdb\u1fdd-\u1fef\u1ff2-\u1ff4\u1ff6-\u1ffe\u2126\uab65",
          astral: "\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]",
        },
        {
          name: "Gujarati",
          bmp: "\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0af1\u0af9-\u0aff",
        },
        {
          name: "Gunjala_Gondi",
          astral:
            "\ud807[\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd98\udda0-\udda9]",
        },
        {
          name: "Gurmukhi",
          bmp: "\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a76",
        },
        {
          name: "Han",
          bmp: "\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u3005\u3007\u3021-\u3029\u3038-\u303b\u3400-\u4dbf\u4e00-\u9ffc\uf900-\ufa6d\ufa70-\ufad9",
          astral:
            "\ud81b[\udff0\udff1]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud869[\udc00-\udedd\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]",
        },
        {
          name: "Hangul",
          bmp: "\u1100-\u11ff\u302e\u302f\u3131-\u318e\u3200-\u321e\u3260-\u327e\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
        },
        {
          name: "Hanifi_Rohingya",
          astral: "\ud803[\udd00-\udd27\udd30-\udd39]",
        },
        { name: "Hanunoo", bmp: "\u1720-\u1734" },
        {
          name: "Hatran",
          astral: "\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]",
        },
        {
          name: "Hebrew",
          bmp: "\u0591-\u05c7\u05d0-\u05ea\u05ef-\u05f4\ufb1d-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufb4f",
        },
        {
          name: "Hiragana",
          bmp: "\u3041-\u3096\u309d-\u309f",
          astral: "\ud82c[\udc01-\udd1e\udd50-\udd52]|\ud83c\ude00",
        },
        {
          name: "Imperial_Aramaic",
          astral: "\ud802[\udc40-\udc55\udc57-\udc5f]",
        },
        {
          name: "Inherited",
          bmp: "\u0300-\u036f\u0485\u0486\u064b-\u0655\u0670\u0951-\u0954\u1ab0-\u1ac0\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u200c\u200d\u20d0-\u20f0\u302a-\u302d\u3099\u309a\ufe00-\ufe0f\ufe20-\ufe2d",
          astral:
            "\ud800[\uddfd\udee0]|\ud804\udf3b|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]",
        },
        {
          name: "Inscriptional_Pahlavi",
          astral: "\ud802[\udf60-\udf72\udf78-\udf7f]",
        },
        {
          name: "Inscriptional_Parthian",
          astral: "\ud802[\udf40-\udf55\udf58-\udf5f]",
        },
        { name: "Javanese", bmp: "\ua980-\ua9cd\ua9d0-\ua9d9\ua9de\ua9df" },
        { name: "Kaithi", astral: "\ud804[\udc80-\udcc1\udccd]" },
        {
          name: "Kannada",
          bmp: "\u0c80-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2",
        },
        {
          name: "Katakana",
          bmp: "\u30a1-\u30fa\u30fd-\u30ff\u31f0-\u31ff\u32d0-\u32fe\u3300-\u3357\uff66-\uff6f\uff71-\uff9d",
          astral: "\ud82c[\udc00\udd64-\udd67]",
        },
        { name: "Kayah_Li", bmp: "\ua900-\ua92d\ua92f" },
        {
          name: "Kharoshthi",
          astral:
            "\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f-\ude48\ude50-\ude58]",
        },
        {
          name: "Khitan_Small_Script",
          astral: "\ud81b\udfe4|\ud822[\udf00-\udfff]|\ud823[\udc00-\udcd5]",
        },
        {
          name: "Khmer",
          bmp: "\u1780-\u17dd\u17e0-\u17e9\u17f0-\u17f9\u19e0-\u19ff",
        },
        { name: "Khojki", astral: "\ud804[\ude00-\ude11\ude13-\ude3e]" },
        { name: "Khudawadi", astral: "\ud804[\udeb0-\udeea\udef0-\udef9]" },
        {
          name: "Lao",
          bmp: "\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf",
        },
        {
          name: "Latin",
          bmp: "A-Za-z\xaa\xba\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u02e0-\u02e4\u1d00-\u1d25\u1d2c-\u1d5c\u1d62-\u1d65\u1d6b-\u1d77\u1d79-\u1dbe\u1e00-\u1eff\u2071\u207f\u2090-\u209c\u212a\u212b\u2132\u214e\u2160-\u2188\u2c60-\u2c7f\ua722-\ua787\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua7ff\uab30-\uab5a\uab5c-\uab64\uab66-\uab69\ufb00-\ufb06\uff21-\uff3a\uff41-\uff5a",
        },
        { name: "Lepcha", bmp: "\u1c00-\u1c37\u1c3b-\u1c49\u1c4d-\u1c4f" },
        {
          name: "Limbu",
          bmp: "\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1940\u1944-\u194f",
        },
        {
          name: "Linear_A",
          astral: "\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]",
        },
        {
          name: "Linear_B",
          astral:
            "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]",
        },
        { name: "Lisu", bmp: "\ua4d0-\ua4ff", astral: "\ud807\udfb0" },
        { name: "Lycian", astral: "\ud800[\ude80-\ude9c]" },
        { name: "Lydian", astral: "\ud802[\udd20-\udd39\udd3f]" },
        { name: "Mahajani", astral: "\ud804[\udd50-\udd76]" },
        { name: "Makasar", astral: "\ud807[\udee0-\udef8]" },
        {
          name: "Malayalam",
          bmp: "\u0d00-\u0d0c\u0d0e-\u0d10\u0d12-\u0d44\u0d46-\u0d48\u0d4a-\u0d4f\u0d54-\u0d63\u0d66-\u0d7f",
        },
        { name: "Mandaic", bmp: "\u0840-\u085b\u085e" },
        { name: "Manichaean", astral: "\ud802[\udec0-\udee6\udeeb-\udef6]" },
        {
          name: "Marchen",
          astral: "\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]",
        },
        {
          name: "Masaram_Gondi",
          astral:
            "\ud807[\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd47\udd50-\udd59]",
        },
        { name: "Medefaidrin", astral: "\ud81b[\ude40-\ude9a]" },
        {
          name: "Meetei_Mayek",
          bmp: "\uaae0-\uaaf6\uabc0-\uabed\uabf0-\uabf9",
        },
        { name: "Mende_Kikakui", astral: "\ud83a[\udc00-\udcc4\udcc7-\udcd6]" },
        {
          name: "Meroitic_Cursive",
          astral: "\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]",
        },
        { name: "Meroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
        {
          name: "Miao",
          astral: "\ud81b[\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f]",
        },
        { name: "Modi", astral: "\ud805[\ude00-\ude44\ude50-\ude59]" },
        {
          name: "Mongolian",
          bmp: "\u1800\u1801\u1804\u1806-\u180e\u1810-\u1819\u1820-\u1878\u1880-\u18aa",
          astral: "\ud805[\ude60-\ude6c]",
        },
        {
          name: "Mro",
          astral: "\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]",
        },
        {
          name: "Multani",
          astral:
            "\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]",
        },
        { name: "Myanmar", bmp: "\u1000-\u109f\ua9e0-\ua9fe\uaa60-\uaa7f" },
        { name: "Nabataean", astral: "\ud802[\udc80-\udc9e\udca7-\udcaf]" },
        {
          name: "Nandinagari",
          astral: "\ud806[\udda0-\udda7\uddaa-\uddd7\uddda-\udde4]",
        },
        {
          name: "New_Tai_Lue",
          bmp: "\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u19de\u19df",
        },
        { name: "Newa", astral: "\ud805[\udc00-\udc5b\udc5d-\udc61]" },
        { name: "Nko", bmp: "\u07c0-\u07fa\u07fd-\u07ff" },
        { name: "Nushu", astral: "\ud81b\udfe1|\ud82c[\udd70-\udefb]" },
        {
          name: "Nyiakeng_Puachue_Hmong",
          astral: "\ud838[\udd00-\udd2c\udd30-\udd3d\udd40-\udd49\udd4e\udd4f]",
        },
        { name: "Ogham", bmp: "\u1680-\u169c" },
        { name: "Ol_Chiki", bmp: "\u1c50-\u1c7f" },
        {
          name: "Old_Hungarian",
          astral: "\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]",
        },
        { name: "Old_Italic", astral: "\ud800[\udf00-\udf23\udf2d-\udf2f]" },
        { name: "Old_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
        { name: "Old_Permic", astral: "\ud800[\udf50-\udf7a]" },
        { name: "Old_Persian", astral: "\ud800[\udfa0-\udfc3\udfc8-\udfd5]" },
        { name: "Old_Sogdian", astral: "\ud803[\udf00-\udf27]" },
        { name: "Old_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
        { name: "Old_Turkic", astral: "\ud803[\udc00-\udc48]" },
        {
          name: "Oriya",
          bmp: "\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b77",
        },
        { name: "Osage", astral: "\ud801[\udcb0-\udcd3\udcd8-\udcfb]" },
        { name: "Osmanya", astral: "\ud801[\udc80-\udc9d\udca0-\udca9]" },
        {
          name: "Pahawh_Hmong",
          astral:
            "\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]",
        },
        { name: "Palmyrene", astral: "\ud802[\udc60-\udc7f]" },
        { name: "Pau_Cin_Hau", astral: "\ud806[\udec0-\udef8]" },
        { name: "Phags_Pa", bmp: "\ua840-\ua877" },
        { name: "Phoenician", astral: "\ud802[\udd00-\udd1b\udd1f]" },
        {
          name: "Psalter_Pahlavi",
          astral: "\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]",
        },
        { name: "Rejang", bmp: "\ua930-\ua953\ua95f" },
        { name: "Runic", bmp: "\u16a0-\u16ea\u16ee-\u16f8" },
        { name: "Samaritan", bmp: "\u0800-\u082d\u0830-\u083e" },
        { name: "Saurashtra", bmp: "\ua880-\ua8c5\ua8ce-\ua8d9" },
        { name: "Sharada", astral: "\ud804[\udd80-\udddf]" },
        { name: "Shavian", astral: "\ud801[\udc50-\udc7f]" },
        { name: "Siddham", astral: "\ud805[\udd80-\uddb5\uddb8-\udddd]" },
        {
          name: "SignWriting",
          astral: "\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]",
        },
        {
          name: "Sinhala",
          bmp: "\u0d81-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df4",
          astral: "\ud804[\udde1-\uddf4]",
        },
        { name: "Sogdian", astral: "\ud803[\udf30-\udf59]" },
        { name: "Sora_Sompeng", astral: "\ud804[\udcd0-\udce8\udcf0-\udcf9]" },
        { name: "Soyombo", astral: "\ud806[\ude50-\udea2]" },
        { name: "Sundanese", bmp: "\u1b80-\u1bbf\u1cc0-\u1cc7" },
        { name: "Syloti_Nagri", bmp: "\ua800-\ua82c" },
        {
          name: "Syriac",
          bmp: "\u0700-\u070d\u070f-\u074a\u074d-\u074f\u0860-\u086a",
        },
        { name: "Tagalog", bmp: "\u1700-\u170c\u170e-\u1714" },
        { name: "Tagbanwa", bmp: "\u1760-\u176c\u176e-\u1770\u1772\u1773" },
        { name: "Tai_Le", bmp: "\u1950-\u196d\u1970-\u1974" },
        {
          name: "Tai_Tham",
          bmp: "\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa0-\u1aad",
        },
        { name: "Tai_Viet", bmp: "\uaa80-\uaac2\uaadb-\uaadf" },
        { name: "Takri", astral: "\ud805[\ude80-\udeb8\udec0-\udec9]" },
        {
          name: "Tamil",
          bmp: "\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bfa",
          astral: "\ud807[\udfc0-\udff1\udfff]",
        },
        {
          name: "Tangut",
          astral:
            "\ud81b\udfe0|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udeff]|\ud823[\udd00-\udd08]",
        },
        {
          name: "Telugu",
          bmp: "\u0c00-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c66-\u0c6f\u0c77-\u0c7f",
        },
        { name: "Thaana", bmp: "\u0780-\u07b1" },
        { name: "Thai", bmp: "\u0e01-\u0e3a\u0e40-\u0e5b" },
        {
          name: "Tibetan",
          bmp: "\u0f00-\u0f47\u0f49-\u0f6c\u0f71-\u0f97\u0f99-\u0fbc\u0fbe-\u0fcc\u0fce-\u0fd4\u0fd9\u0fda",
        },
        { name: "Tifinagh", bmp: "\u2d30-\u2d67\u2d6f\u2d70\u2d7f" },
        { name: "Tirhuta", astral: "\ud805[\udc80-\udcc7\udcd0-\udcd9]" },
        { name: "Ugaritic", astral: "\ud800[\udf80-\udf9d\udf9f]" },
        { name: "Vai", bmp: "\ua500-\ua62b" },
        { name: "Wancho", astral: "\ud838[\udec0-\udef9\udeff]" },
        { name: "Warang_Citi", astral: "\ud806[\udca0-\udcf2\udcff]" },
        {
          name: "Yezidi",
          astral: "\ud803[\ude80-\udea9\udeab-\udead\udeb0\udeb1]",
        },
        { name: "Yi", bmp: "\ua000-\ua48c\ua490-\ua4c6" },
        { name: "Zanabazar_Square", astral: "\ud806[\ude00-\ude47]" },
      ];
    },
    25110: function (d, u, e) {
      d.exports = e(27698);
    },
    58309: function (d, u, e) {
      d.exports = e(83363);
    },
    39022: function (d, u, e) {
      d.exports = e(8065);
    },
    53959: function (d, u, e) {
      d.exports = e(48842);
    },
    86: function (d, u, e) {
      d.exports = e(46279);
    },
    58118: function (d, u, e) {
      d.exports = e(33778);
    },
    11882: function (d, u, e) {
      d.exports = e(19373);
    },
    97606: function (d, u, e) {
      d.exports = e(8918);
    },
    24282: function (d, u, e) {
      d.exports = e(52527);
    },
    24278: function (d, u, e) {
      d.exports = e(82073);
    },
    2578: function (d, u, e) {
      d.exports = e(62856);
    },
    97499: function (d, u, e) {
      d.exports = e(14471);
    },
    96718: function (d, u, e) {
      d.exports = e(41910);
    },
    80040: function (d, u, e) {
      d.exports = e(74888);
    },
    33733: function (d, u, e) {
      d.exports = e(92547);
    },
    10349: function (d, u, e) {
      d.exports = e(27385);
    },
    98235: function (d, u, e) {
      d.exports = e(81522);
    },
    19389: function (d, u, e) {
      d.exports = e(32209);
    },
    55062: function (d, u, e) {
      d.exports = e(1258);
    },
    35704: function (d, u, e) {
      d.exports = e(81493);
    },
    90321: function (d, u, e) {
      d.exports = e(86600);
    },
    64538: function (d) {
      (d.exports = function (d, u) {
        (null == u || u > d.length) && (u = d.length);
        for (var e = 0, a = new Array(u); e < u; e++) a[e] = d[e];
        return a;
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    86765: function (d, u, e) {
      var a = e(98235);
      (d.exports = function (d) {
        if (a(d)) return d;
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    17907: function (d) {
      (d.exports = function (d) {
        return d && d.__esModule ? d : { default: d };
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    4196: function (d, u, e) {
      var a = e(90321),
        n = e(19389);
      (d.exports = function (d, u) {
        var e =
          null == d
            ? null
            : ("undefined" !== typeof a && n(d)) || d["@@iterator"];
        if (null != e) {
          var t,
            f,
            c = [],
            r = !0,
            o = !1;
          try {
            for (
              e = e.call(d);
              !(r = (t = e.next()).done) &&
              (c.push(t.value), !u || c.length !== u);
              r = !0
            );
          } catch (i) {
            (o = !0), (f = i);
          } finally {
            try {
              r || null == e.return || e.return();
            } finally {
              if (o) throw f;
            }
          }
          return c;
        }
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    56884: function (d) {
      (d.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    67375: function (d, u, e) {
      var a = e(86765),
        n = e(4196),
        t = e(38899),
        f = e(56884);
      (d.exports = function (d, u) {
        return a(d) || n(d, u) || t(d, u) || f();
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    38899: function (d, u, e) {
      var a = e(35704),
        n = e(10349),
        t = e(64538);
      (d.exports = function (d, u) {
        var e;
        if (d) {
          if ("string" === typeof d) return t(d, u);
          var f = a((e = Object.prototype.toString.call(d))).call(e, 8, -1);
          return (
            "Object" === f && d.constructor && (f = d.constructor.name),
            "Map" === f || "Set" === f
              ? n(d)
              : "Arguments" === f ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)
              ? t(d, u)
              : void 0
          );
        }
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    21632: function (d, u, e) {
      "use strict";
      e.d(u, {
        Z: function () {
          return n;
        },
      });
      var a = e(2466);
      function n(d) {
        if ("string" !== typeof d) throw new TypeError("Expected a string");
        return (d =
          (d = (d = a(d))
            .toLowerCase()
            .replace(/[_-]+/g, " ")
            .replace(/\s{2,}/g, " ")
            .trim())
            .charAt(0)
            .toUpperCase() + d.slice(1));
      }
    },
  },
]);
