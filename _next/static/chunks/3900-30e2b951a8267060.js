"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3900],
  {
    81382: function (e, n, t) {
      var r,
        i = t(67294);
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      n.Z = function (e) {
        return i.createElement(
          "svg",
          a(
            {
              width: 88,
              height: 111,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          r ||
            (r = i.createElement("path", {
              d: "M77.532 13.394 17.16 56.267a36.333 36.333 0 0 1-5.47-19.312C11.69 16.54 28.32 0 48.878 0a37.04 37.04 0 0 1 15.818 3.486 37.165 37.165 0 0 1 12.837 9.908ZM78.265 44.78a36.418 36.418 0 0 0-5.47-19.317L42.68 46.829 12.418 68.293l-1.602 1.147.074 41.56s39.807-26.707 52.354-36.513c9.331-7.316 15.02-17.558 15.02-29.706Z",
              fill: "#D0D0D0",
            }))
        );
      };
    },
    83900: function (e, n, t) {
      t.d(n, {
        x: function () {
          return te;
        },
      });
      var r,
        i = t(47568),
        a = t(14924),
        o = t(26042),
        l = t(69396),
        d = t(828),
        s = t(29815),
        c = t(70655),
        u = t(85893),
        v = t(1644),
        p = t(57144),
        h = t(26447),
        f = t(87918),
        g = t(83321),
        x = t(99226),
        m = t(45090),
        Z = t(24150),
        j = t(67294);
      function y() {
        return (
          (y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          y.apply(this, arguments)
        );
      }
      var b,
        w = function (e) {
          return j.createElement(
            "svg",
            y(
              {
                width: 200,
                height: 201,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            r ||
              (r = j.createElement("path", {
                d: "M100.065 113.52a38.632 38.632 0 0 0-33.02 18.41 1.874 1.874 0 0 0 .61 2.58l2.86 1.765a1.874 1.874 0 0 0 2.575-.61 31.523 31.523 0 0 1 26.97-15.055 31.525 31.525 0 0 1 26.87 14.895 1.884 1.884 0 0 0 2.58.59l2.84-1.78a1.872 1.872 0 0 0 .834-1.167 1.856 1.856 0 0 0-.244-1.413 38.598 38.598 0 0 0-32.875-18.215ZM77.155 85.28a5.22 5.22 0 1 0 0-10.44 5.22 5.22 0 0 0 0 10.44ZM122.84 85.28a5.22 5.22 0 1 0 0-10.44 5.22 5.22 0 0 0 0 10.44Z",
                fill: "#D0D0D0",
              }))
          );
        },
        C = t(73187),
        M = function (e) {
          var n = e.title,
            t = e.children;
          return (0, u.jsx)(C.W, {
            icon: (0, u.jsx)(w, {}),
            title: n,
            titleColor: "text.secondary",
            subtitle:
              "Double check your search for any typos or spelling errors - or try another filter settings",
            children: t,
          });
        },
        I = t(25603),
        k = t(81177),
        F = t(62710),
        T = t(30230),
        E = t(75285),
        S = t(14587),
        P = t(71077),
        A = t(53416),
        U = t(41664),
        L = t.n(U),
        R = t(11163),
        V = (t(80129), t(87536)),
        O = t(68952),
        D = t(42761),
        N = t(33454),
        B = t(96420),
        q = t(98271),
        G = t(87109),
        _ = t(10315),
        W = t(18972),
        H = t(59334),
        z = t(21632),
        J = t(61150),
        Q = function (e) {
          var n = e.minProps,
            t = e.maxProps;
          return (0, u.jsxs)(h.Z, {
            direction: "row",
            spacing: 4,
            children: [
              (0, u.jsx)(
                J.B,
                (0, o.Z)(
                  { decimalScale: 8, displayType: "input", customInput: q.Z },
                  n
                )
              ),
              (0, u.jsx)(
                J.B,
                (0, o.Z)(
                  { decimalScale: 8, displayType: "input", customInput: q.Z },
                  t
                )
              ),
            ],
          });
        },
        $ = t(88078),
        Y = function () {
          return (0, u.jsxs)(h.Z, {
            direction: "row",
            gap: 4,
            children: [
              (0, u.jsx)($.Z, {
                variant: "rectangular",
                height: 20,
                width: 20,
                sx: { borderRadius: 1 },
              }),
              (0, u.jsx)($.Z, {
                variant: "rectangular",
                height: 20,
                sx: { flex: 1, borderRadius: 1 },
              }),
            ],
          });
        },
        K = function (e) {
          var n,
            t,
            r,
            a,
            s,
            v,
            f,
            g,
            m = e.property,
            Z = e.propertyTransformer,
            y = (0, V.Gc)().control,
            b = (0, j.useState)(""),
            w = b[0],
            C = b[1],
            M = (0, j.useState)(""),
            k = M[0],
            F = M[1],
            E = (0, T.bD)({
              variables: { input: k, propertyId: m.id, first: 10, skip: 0 },
              skip: Boolean(
                null === (n = m.values) || void 0 === n ? void 0 : n.length
              ),
              notifyOnNetworkStatusChange: !0,
            }),
            S = E.data,
            P = E.loading,
            A = E.fetchMore,
            U =
              null === S ||
              void 0 === S ||
              null === (t = S.propertyValuesFiltered) ||
              void 0 === t
                ? void 0
                : t.length,
            L =
              !P &&
              Boolean(U) &&
              (null !== U && void 0 !== U ? U : 10) % 10 === 0,
            R = (0, j.useState)(!1),
            N = R[0],
            B = R[1],
            _ = (0, d.Z)(
              (0, O.Z)({
                loading: P,
                disabled:
                  N ||
                  Boolean(
                    null === (r = m.values) || void 0 === r ? void 0 : r.length
                  ),
                hasNextPage: L,
                onLoadMore: (0, i.Z)(function () {
                  var e, n, t;
                  return (0, c.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return P
                          ? [2]
                          : [
                              4,
                              A({
                                variables: {
                                  input: k,
                                  propertyId: m.id,
                                  first: 10,
                                  skip: U || 10,
                                },
                              }),
                            ];
                      case 1:
                        return (
                          (t = r.sent()),
                          B(
                            !(null === (e = t.data) ||
                            void 0 === e ||
                            null === (n = e.propertyValuesFiltered) ||
                            void 0 === n
                              ? void 0
                              : n.length)
                          ),
                          [2]
                        );
                    }
                  });
                }),
              }),
              2
            ),
            W = _[0],
            H = _[1].rootRef;
          (0, j.useEffect)(
            function () {
              B(!1);
            },
            [w]
          );
          var z = (0, j.useMemo)(
              function () {
                return Z
                  ? Z([
                      (0, l.Z)((0, o.Z)({}, m), {
                        values:
                          null !==
                            (f =
                              null === S || void 0 === S
                                ? void 0
                                : S.propertyValuesFiltered) && void 0 !== f
                            ? f
                            : [],
                      }),
                    ])[0]
                  : (0, l.Z)((0, o.Z)({}, m), {
                      values:
                        null !==
                          (g =
                            null === S || void 0 === S
                              ? void 0
                              : S.propertyValuesFiltered) && void 0 !== g
                          ? g
                          : [],
                    });
              },
              [
                Z,
                m,
                null === S || void 0 === S ? void 0 : S.propertyValuesFiltered,
              ]
            ),
            J = (0, j.useCallback)(
              (0, p.Z)(function (e) {
                return F(e);
              }, 500),
              [F]
            );
          return (
            (0, j.useEffect)(
              function () {
                J(w);
              },
              [w]
            ),
            (0, u.jsxs)(h.Z, {
              spacing: 2,
              children: [
                !(null === (a = m.values) || void 0 === a
                  ? void 0
                  : a.length) &&
                  (0, u.jsx)(q.Z, {
                    placeholder: "Search",
                    value: w,
                    onChange: function (e) {
                      return C(e.target.value);
                    },
                    InputProps: {
                      startAdornment: (0, u.jsx)(G.Z, {
                        position: "start",
                        children: (0, u.jsx)(D.Z, {}),
                      }),
                    },
                  }),
                (0, u.jsxs)(h.Z, {
                  sx: { maxHeight: 300, overflowY: "auto" },
                  ref: H,
                  children: [
                    null === (s = z.values) || void 0 === s
                      ? void 0
                      : s.map(function (e) {
                          return (0,
                          u.jsx)(I.TG, { name: "metadata[".concat(m.name, "][").concat(m.dataType, "]"), label: e.displayText, value: e.valueString, control: y }, e.id);
                        }),
                    !N &&
                      !P &&
                      L &&
                      (0, u.jsx)(x.Z, {
                        ref: W,
                        children: (0, u.jsx)(x.Z, { sx: { height: 50 } }),
                      }),
                    P &&
                      (0, u.jsxs)(h.Z, {
                        spacing: 4,
                        py: 2,
                        children: [
                          (0, u.jsx)(Y, {}),
                          (0, u.jsx)(Y, {}),
                          (0, u.jsx)(Y, {}),
                        ],
                      }),
                    !P &&
                      k &&
                      !(null === S ||
                      void 0 === S ||
                      null === (v = S.propertyValuesFiltered) ||
                      void 0 === v
                        ? void 0
                        : v.length) &&
                      (0, u.jsx)(x.Z, { children: "No values found" }),
                  ],
                }),
              ],
            })
          );
        },
        X = function (e) {
          var n,
            t,
            r,
            i,
            a,
            d,
            c,
            v,
            p,
            f = e.data,
            g = e.hideGamesFilter,
            x = e.gameChains,
            Z = e.showProperties,
            y = e.properties,
            b = e.provider,
            w = (0, j.useState)(""),
            C = w[0],
            M = w[1],
            k = (0, V.Gc)(),
            F = k.control,
            T = k.setValue,
            E = (0, V.bc)({ control: F, name: "priceMin" }),
            S = (0, V.bc)({ control: F, name: "priceMax" }),
            P = m.T.find(function (e) {
              return e.key === b;
            }),
            A = (0, s.Z)(
              (y &&
                (null === P ||
                void 0 === P ||
                null === (n = P.propertyFiltrationTransform) ||
                void 0 === n
                  ? void 0
                  : n.call(P, y))) ||
                y ||
                []
            ).sort(function (e, n) {
              return e.name.localeCompare(n.name);
            });
          return (0, u.jsxs)(h.Z, {
            children: [
              (0, u.jsx)(I.wn, {
                title: "Listing type",
                children: (0, u.jsx)(h.Z, {
                  gap: 2,
                  children: (0, u.jsx)(V.Qr, {
                    name: "type",
                    control: F,
                    render: function (e) {
                      var n = e.field,
                        t = n.value,
                        r = n.onChange;
                      return (0, u.jsxs)(N.Z, {
                        color: "primary",
                        exclusive: !0,
                        value: t,
                        onChange: function (e, n) {
                          return n && r(n);
                        },
                        sx: {
                          borderRadius: 100,
                          border: "solid 1px black",
                          p: 0.5,
                          gap: 1,
                          ".MuiToggleButton-root.MuiToggleButtonGroup-grouped":
                            {
                              flex: 1,
                              borderRadius: 100,
                              py: 1,
                              border: "none",
                              fontSize: "1rem",
                              fontWeight: 400,
                              "&.Mui-selected": {
                                border: "solid 1px black",
                                backgroundColor: "primary.main",
                                color: "background.default",
                              },
                            },
                        },
                        children: [
                          (0, u.jsx)(B.Z, {
                            value: "purchase",
                            children: "Purchase",
                          }),
                          (0, u.jsx)(B.Z, {
                            value: "rental",
                            children: "Rental",
                          }),
                        ],
                      });
                    },
                  }),
                }),
              }),
              !g &&
                (0, u.jsx)(I.wn, {
                  title: "Game",
                  count:
                    null === f ||
                    void 0 === f ||
                    null === (t = f.games) ||
                    void 0 === t
                      ? void 0
                      : t.data.length,
                  children: (0, u.jsxs)(h.Z, {
                    gap: 2,
                    children: [
                      (0, u.jsx)(q.Z, {
                        placeholder: "Search games",
                        value: C,
                        onChange: function (e) {
                          return M(e.target.value);
                        },
                        InputProps: {
                          startAdornment: (0, u.jsx)(G.Z, {
                            position: "start",
                            children: (0, u.jsx)(D.Z, {}),
                          }),
                        },
                      }),
                      (0, u.jsx)(h.Z, {
                        children:
                          null === f ||
                          void 0 === f ||
                          null === (r = f.games) ||
                          void 0 === r ||
                          null === (i = r.data) ||
                          void 0 === i
                            ? void 0
                            : i
                                .filter(function (e) {
                                  var n;
                                  return null === (n = e.attributes) ||
                                    void 0 === n
                                    ? void 0
                                    : n.title.toLowerCase().includes(C);
                                })
                                .map(function (e) {
                                  var n, t, r;
                                  return (0, u.jsx)(
                                    I.TG,
                                    {
                                      name: "game",
                                      label:
                                        null === (n = e.attributes) ||
                                        void 0 === n
                                          ? void 0
                                          : n.title,
                                      value:
                                        null === (t = e.attributes) ||
                                        void 0 === t
                                          ? void 0
                                          : t.provider,
                                      control: F,
                                      onChange: function () {
                                        T("metadata", {});
                                      },
                                    },
                                    null === (r = e.attributes) || void 0 === r
                                      ? void 0
                                      : r.title
                                  );
                                }),
                      }),
                    ],
                  }),
                }),
              ((null === x || void 0 === x ? void 0 : x.length)
                ? (null === x || void 0 === x ? void 0 : x.length) > 1
                : null === f ||
                  void 0 === f ||
                  null === (a = f.chains) ||
                  void 0 === a
                ? void 0
                : a.data.length) &&
                (0, u.jsx)(I.wn, {
                  title: "Chain",
                  count:
                    (null === x || void 0 === x ? void 0 : x.length) ||
                    (null === f ||
                    void 0 === f ||
                    null === (d = f.chains) ||
                    void 0 === d
                      ? void 0
                      : d.data.length),
                  children: (0, u.jsx)(h.Z, {
                    children:
                      null ===
                        (v = (null === x || void 0 === x ? void 0 : x.length)
                          ? x
                          : null === f ||
                            void 0 === f ||
                            null === (c = f.chains) ||
                            void 0 === c
                          ? void 0
                          : c.data) || void 0 === v
                        ? void 0
                        : v.map(function (e) {
                            var n, t, r, i;
                            return (0,
                            u.jsx)(I.TG, { name: "chain", label: (null === (n = e.attributes) || void 0 === n ? void 0 : n.name) || "", value: null === (t = e.attributes) || void 0 === t || null === (r = t.chainId) || void 0 === r ? void 0 : r.toString(), control: F }, null === (i = e.attributes) || void 0 === i ? void 0 : i.name);
                          }),
                  }),
                }),
              (0, u.jsx)(I.wn, {
                title: "Price",
                children: (0, u.jsxs)(h.Z, {
                  spacing: 2,
                  children: [
                    (0, u.jsx)(_.Z, {
                      variant: "outlined",
                      fullWidth: !0,
                      "aria-label": "select payment token",
                      sx: { overflow: "hidden" },
                      defaultValue: "USD",
                      children: (0, u.jsx)(W.Z, {
                        value: "USD",
                        children: (0, u.jsx)(H.Z, {
                          primaryTypographyProps: {
                            sx: {
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            },
                          },
                          children: "USD",
                        }),
                      }),
                    }),
                    (0, u.jsx)(Q, {
                      name: "price",
                      minProps: (0, l.Z)(
                        (0, o.Z)({ placeholder: "Min" }, E.field),
                        {
                          getInputRef: E.field.ref,
                          onChange: function () {},
                          onValueChange: function (e) {
                            E.field.onChange(e.value);
                          },
                        }
                      ),
                      maxProps: (0, l.Z)(
                        (0, o.Z)({ placeholder: "Max" }, S.field),
                        {
                          onChange: function () {},
                          getInputRef: S.field.ref,
                          onValueChange: function (e) {
                            S.field.onChange(e.value);
                          },
                        }
                      ),
                    }),
                  ],
                }),
              }),
              Boolean(
                ((null === P ||
                void 0 === P ||
                null === (p = P.contracts) ||
                void 0 === p
                  ? void 0
                  : p.length) || 0) > 1
              ) &&
                (0, u.jsx)(I.wn, {
                  title: "Collection",
                  children: (0, u.jsx)(h.Z, {
                    children:
                      null === P || void 0 === P
                        ? void 0
                        : P.contracts.map(function (e) {
                            return (0,
                            u.jsx)(I.TG, { name: "contract", label: e.name, value: e.address, control: F }, e.address);
                          }),
                  }),
                }),
              Z &&
                (null === A || void 0 === A
                  ? void 0
                  : A.map(function (e) {
                      var n;
                      return (0, u.jsx)(
                        I.wn,
                        {
                          title: e.displayText || (0, z.Z)(e.name),
                          defaultExpanded: !1,
                          unmountedWhenCollapsed: !0,
                          children:
                            "STRING" === e.dataType ||
                            Boolean(
                              null === (n = e.values) || void 0 === n
                                ? void 0
                                : n.length
                            )
                              ? (0, u.jsx)(K, {
                                  property: e,
                                  propertyTransformer:
                                    null === P || void 0 === P
                                      ? void 0
                                      : P.propertyFiltrationTransform,
                                })
                              : (0, u.jsx)(V.Qr, {
                                  control: F,
                                  name: "metadata["
                                    .concat(e.name, "][")
                                    .concat(e.dataType, "].min"),
                                  render: function (n) {
                                    var t = n.field;
                                    return (0, u.jsx)(V.Qr, {
                                      control: F,
                                      name: "metadata["
                                        .concat(e.name, "][")
                                        .concat(e.dataType, "].max"),
                                      render: function (n) {
                                        var r = n.field;
                                        return (0, u.jsx)(Q, {
                                          name: "",
                                          minProps: (0, l.Z)((0, o.Z)({}, t), {
                                            placeholder: e.minValue || "Min",
                                            onChange: function () {},
                                            onValueChange: function (e) {
                                              t.onChange(e.value);
                                            },
                                          }),
                                          maxProps: (0, l.Z)((0, o.Z)({}, r), {
                                            onChange: function () {},
                                            onValueChange: function (e) {
                                              r.onChange(e.value);
                                            },
                                            placeholder: e.maxValue || "Max",
                                          }),
                                        });
                                      },
                                    });
                                  },
                                }),
                        },
                        e.id
                      );
                    })),
            ],
          });
        },
        ee =
          ((b = {}),
          (0, a.Z)(
            b,
            "".concat(T.d$.TradeListingCreatedAt, ":").concat(T.N9.Desc),
            "Recently listed"
          ),
          (0, a.Z)(
            b,
            "".concat(T.d$.TradeListingPricePerItemUsd, ":").concat(T.N9.Asc),
            "Lowest price first"
          ),
          (0, a.Z)(
            b,
            "".concat(T.d$.TradeListingPricePerItemUsd, ":").concat(T.N9.Desc),
            "Highest price first"
          ),
          b),
        ne = function (e) {
          return e && "object" === typeof e && "min" in e;
        },
        te = function (e) {
          var n,
            t,
            r,
            a,
            y,
            b,
            w,
            C,
            U,
            D,
            N,
            B,
            q = e.provider,
            G = e.gameChains,
            _ = e.hideGamesFilter,
            W = (0, j.useState)(),
            H = W[0],
            z = W[1],
            J = (0, d.Z)((H || Object.keys(ee)[0]).split(":"), 2),
            Q = J[0],
            $ = J[1],
            Y =
              ((0, R.useRouter)(),
              (0, E.R)(window.location.search, {
                game: S.A,
                chain: S.A,
                q: !0,
                priceMax: !0,
                priceMin: !0,
                metadata: !0,
              })),
            K = (0, V.cI)({
              defaultValues: (0, o.Z)(
                { game: [], chain: [], type: "purchase" },
                Y
              ),
            });
          (0, E.E)(K, {
            game: S.A,
            chain: S.A,
            q: !0,
            priceMax: !0,
            priceMin: !0,
            metadata: !0,
          });
          var te = (0, j.useState)(K.getValues()),
            re = te[0],
            ie = te[1];
          (0, j.useEffect)(
            function () {
              var e = K.watch(
                (0, p.Z)(function (e) {
                  ie(e);
                }, 300)
              );
              return function () {
                e.unsubscribe();
              };
            },
            [K]
          );
          var ae = (0, j.useMemo)(
              function () {
                return (
                  q || (re.game && 1 === re.game.length ? re.game[0] : void 0)
                );
              },
              [re.game, q]
            ),
            oe = (0, d.Z)((0, T.Vz)(), 2),
            le = oe[0],
            de = oe[1],
            se = de.data,
            ce = de.fetchMore,
            ue = (0, T.UH)().data;
          (0, j.useEffect)(
            function () {
              (0, i.Z)(function () {
                var e, n, t, r, i, a, o, l;
                return (0, c.__generator)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      if (
                        !(e = m.T.find(function (e) {
                          return e.key === ae;
                        })) ||
                        !ae
                      )
                        return [3, 8];
                      (n = !0), (t = !1), (r = void 0), (d.label = 1);
                    case 1:
                      d.trys.push([1, 6, 7, 8]),
                        (i = e.contracts[Symbol.iterator]()),
                        (d.label = 2);
                    case 2:
                      return (n = (a = i.next()).done)
                        ? [3, 5]
                        : ((o = a.value),
                          [
                            4,
                            (0 === e.contracts.indexOf(o) ? le : ce)({
                              variables: {
                                provider: ae,
                                chainId: o.chainId,
                                contract: o.address.toLowerCase(),
                              },
                            }),
                          ]);
                    case 3:
                      d.sent(), (d.label = 4);
                    case 4:
                      return (n = !0), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (l = d.sent()), (t = !0), (r = l), [3, 8];
                    case 7:
                      try {
                        n || null == i.return || i.return();
                      } finally {
                        if (t) throw r;
                      }
                      return [7];
                    case 8:
                      return [2];
                  }
                });
              })();
            },
            [ae, le, ce]
          );
          var ve =
              null === ue ||
              void 0 === ue ||
              null === (n = ue.chains) ||
              void 0 === n
                ? void 0
                : n.data.filter(function (e) {
                    return null === G || void 0 === G
                      ? void 0
                      : G.data.some(function (n) {
                          var t, r;
                          return (
                            (null === (t = n.attributes) || void 0 === t
                              ? void 0
                              : t.chainId) ===
                            (null === (r = e.attributes) || void 0 === r
                              ? void 0
                              : r.chainId)
                          );
                        });
                  }),
            pe = (0, j.useMemo)(
              function () {
                var e = re.metadata;
                if (!e) return [];
                var n = [];
                return (
                  Object.keys(e).forEach(function (t) {
                    var r = (0, d.Z)(Object.keys(e[t]), 1)[0],
                      i = e[t][r];
                    Array.isArray(i) && i.length > 0
                      ? n.push({
                          field: T.rU.Metadata,
                          name: t,
                          value: i.map(function (e) {
                            return e.toString();
                          }),
                          operator: T.EF.In,
                          type: r,
                        })
                      : ne(i) &&
                        (i.min &&
                          n.push({
                            field: T.rU.Metadata,
                            name: t,
                            value: [i.min],
                            operator: T.EF.Gte,
                            type: r,
                          }),
                        i.max &&
                          n.push({
                            field: T.rU.Metadata,
                            name: t,
                            value: [i.max],
                            operator: T.EF.Lte,
                            type: r,
                          }));
                  }),
                  n
                );
              },
              [re]
            ),
            he = (0, j.useMemo)(
              function () {
                return JSON.stringify([
                  H,
                  re.priceMax,
                  re.priceMin,
                  (0, S.A)(re.chain),
                  (0, S.A)(re.game),
                  (0, S.A)(re.listingType),
                  re.q,
                  re.contract,
                  re.type,
                  pe,
                ]);
              },
              [
                H,
                re.priceMax,
                re.priceMin,
                re.chain,
                re.game,
                re.listingType,
                re.q,
                re.type,
                re.contract,
                pe,
              ]
            ),
            fe = (0, j.useMemo)(
              function () {
                return (0, A.x0)();
              },
              [he]
            ),
            ge = (0, d.Z)(
              (0, T.Do)({
                variables: {
                  first: 20,
                  requestId: fe,
                  orderBy: Q,
                  orderDirection: $,
                  where: {
                    andFilters: [
                      {
                        field: T.rU.TradePublished,
                        operator: T.EF.Eq,
                        value: ["true"],
                      },
                    ].concat(
                      (0, s.Z)(
                        q
                          ? [
                              {
                                field: T.rU.Provider,
                                operator: T.EF.In,
                                value: [q],
                              },
                            ]
                          : []
                      ),
                      (0, s.Z)(
                        (
                          null === (t = re.chain) || void 0 === t
                            ? void 0
                            : t.length
                        )
                          ? [
                              {
                                field: T.rU.ChainId,
                                operator: T.EF.In,
                                value: re.chain,
                              },
                            ]
                          : []
                      ),
                      (0, s.Z)(
                        (
                          null === (r = re.game) || void 0 === r
                            ? void 0
                            : r.length
                        )
                          ? [
                              {
                                field: T.rU.Provider,
                                operator: T.EF.In,
                                value: re.game,
                              },
                            ]
                          : []
                      ),
                      (0, s.Z)(
                        re.priceMin && parseFloat(re.priceMin) > 0
                          ? [
                              {
                                field: T.rU.TradePricePerItemUsd,
                                operator: T.EF.Gte,
                                value: [
                                  Z.parseUnits(re.priceMin, 2).toString(),
                                ],
                              },
                            ]
                          : []
                      ),
                      (0, s.Z)(
                        (
                          null === (a = re.contract) || void 0 === a
                            ? void 0
                            : a.length
                        )
                          ? [
                              {
                                field: T.rU.ContractAddress,
                                operator: T.EF.In,
                                value: re.contract,
                              },
                            ]
                          : []
                      ),
                      (0, s.Z)(
                        re.priceMax && parseFloat(re.priceMax) > 0
                          ? [
                              {
                                field: T.rU.TradePricePerItemUsd,
                                operator: T.EF.Lte,
                                value: [
                                  Z.parseUnits(re.priceMax, 2).toString(),
                                ],
                              },
                            ]
                          : []
                      ),
                      (0, s.Z)(pe)
                    ),
                    orFilters: re.q
                      ? [
                          {
                            field: T.rU.Name,
                            operator: T.EF.Contains,
                            value: [re.q],
                          },
                          {
                            field: T.rU.Metadata,
                            operator: T.EF.Eq,
                            name: "description",
                            value: [re.q],
                          },
                          {
                            field: T.rU.ContractAddress,
                            operator: T.EF.Eq,
                            value: [re.q],
                          },
                          {
                            field: T.rU.TokenId,
                            operator: T.EF.Eq,
                            value: [re.q],
                          },
                        ]
                      : void 0,
                  },
                  onlyTradeListings: "purchase" === re.type,
                  onlyRentListings: "rental" === re.type,
                },
                notifyOnNetworkStatusChange: !0,
              }),
              2
            ),
            xe = ge[0],
            me = ge[1],
            Ze = me.data,
            je = me.fetchMore,
            ye = me.loading,
            be = me.networkStatus;
          (0, j.useEffect)(
            function () {
              xe();
            },
            [fe]
          );
          var we,
            Ce = (0, j.useState)(!1),
            Me = Ce[0],
            Ie = Ce[1],
            ke =
              !ye &&
              (null === Ze ||
              void 0 === Ze ||
              null === (y = Ze.nftFiltered) ||
              void 0 === y ||
              null === (b = y.nft) ||
              void 0 === b
                ? void 0
                : b.length) !==
                (null === Ze ||
                void 0 === Ze ||
                null === (w = Ze.nftFiltered) ||
                void 0 === w
                  ? void 0
                  : w.total),
            Fe = (0, d.Z)(
              (0, O.Z)({
                loading: ye,
                disabled: Me,
                hasNextPage: ke,
                onLoadMore: (0, i.Z)(function () {
                  var e, n, t, r, i, a;
                  return (0, c.__generator)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return ye
                          ? [2]
                          : [
                              4,
                              je({
                                variables: {
                                  first: 20,
                                  skip:
                                    null !==
                                      (i =
                                        null === Ze ||
                                        void 0 === Ze ||
                                        null === (e = Ze.nftFiltered) ||
                                        void 0 === e ||
                                        null === (n = e.nft) ||
                                        void 0 === n
                                          ? void 0
                                          : n.length) && void 0 !== i
                                      ? i
                                      : 0,
                                },
                              }),
                            ];
                      case 1:
                        return (
                          (a = o.sent()),
                          Ie(
                            !(null === (t = a.data.nftFiltered) ||
                            void 0 === t ||
                            null === (r = t.nft) ||
                            void 0 === r
                              ? void 0
                              : r.length)
                          ),
                          [2]
                        );
                    }
                  });
                }),
                rootMargin: "0px 0px 445px 0px",
              }),
              1
            ),
            Te = Fe[0],
            Ee = (0, j.useMemo)(
              function () {
                return m.T.find(function (e) {
                  return e.key === ae;
                });
              },
              [ae]
            ),
            Se = (0, j.useMemo)(
              function () {
                return Object.entries(re)
                  .reduce(function (e, n) {
                    var t = (0, d.Z)(n, 2),
                      r = t[0],
                      i = t[1];
                    return (
                      Array.isArray(i)
                        ? i.forEach(function (n) {
                            var t, i;
                            "contract" === r &&
                              (t =
                                null ===
                                  (i =
                                    null === Ee || void 0 === Ee
                                      ? void 0
                                      : Ee.contracts.find(function (e) {
                                          return (
                                            (0, P.f)(e.address) === (0, P.f)(n)
                                          );
                                        })) || void 0 === i
                                  ? void 0
                                  : i.name);
                            e.push([r, n, t]);
                          })
                        : "object" === typeof i
                        ? Object.entries(i).forEach(function (n) {
                            var t = (0, d.Z)(n, 2),
                              i = t[0],
                              a = t[1];
                            if (a && "object" === typeof a) {
                              var o = Object.keys(a)[0],
                                l = a[o];
                              Array.isArray(l)
                                ? l.forEach(function (n) {
                                    e.push([
                                      ""
                                        .concat(r, "[")
                                        .concat(i, "][")
                                        .concat(o, "]"),
                                      n,
                                      n,
                                    ]);
                                  })
                                : ne(l)
                                ? (l.min &&
                                    e.push([
                                      ""
                                        .concat(r, "[")
                                        .concat(i, "][")
                                        .concat(o, "].min"),
                                      l.min,
                                      "".concat(i, " > ").concat(l.min),
                                    ]),
                                  l.max &&
                                    e.push([
                                      ""
                                        .concat(r, "[")
                                        .concat(i, "][")
                                        .concat(o, "].max"),
                                      l.max,
                                      "".concat(i, " < ").concat(l.max),
                                    ]))
                                : e.push([
                                    ""
                                      .concat(r, "[")
                                      .concat(i, "][")
                                      .concat(o, "]"),
                                    l,
                                    l,
                                  ]);
                            }
                          })
                        : e.push([r, i]),
                      e
                    );
                  }, [])
                  .filter(function (e) {
                    var n = (0, d.Z)(e, 2),
                      t = n[0],
                      r = n[1];
                    return (
                      void 0 !== r &&
                      null !== r &&
                      "" !== r &&
                      !["type", "slug", "priceMin", "priceMax"].includes(t)
                    );
                  });
              },
              [re]
            );
          return (0, u.jsx)(
            V.RV,
            (0, l.Z)((0, o.Z)({}, K), {
              children: (0, u.jsxs)(I.UD, {
                defaultValues: { type: "purchase" },
                renderFilters: (0, u.jsx)(X, {
                  data: ue,
                  hideGamesFilter: _,
                  gameChains: ve,
                  properties:
                    null === se || void 0 === se ? void 0 : se.properties,
                  showProperties: Boolean(ae),
                  provider: ae,
                }),
                renderChips: (0, u.jsx)(h.Z, {
                  direction: "row",
                  gap: 2,
                  flexWrap: "wrap",
                  children: Se.map(function (e) {
                    var n,
                      t,
                      r,
                      i,
                      a,
                      o,
                      l = (0, d.Z)(e, 3),
                      s = l[0],
                      c = l[1],
                      v = l[2];
                    return (0, u.jsx)(
                      f.Z,
                      {
                        label:
                          v ||
                          ("chain" === s
                            ? null ===
                                (t =
                                  null === ue ||
                                  void 0 === ue ||
                                  null === (n = ue.chains) ||
                                  void 0 === n
                                    ? void 0
                                    : n.data.find(function (e) {
                                        var n, t;
                                        return (
                                          (null === (n = e.attributes) ||
                                          void 0 === n ||
                                          null === (t = n.chainId) ||
                                          void 0 === t
                                            ? void 0
                                            : t.toString()) === c
                                        );
                                      })) ||
                              void 0 === t ||
                              null === (r = t.attributes) ||
                              void 0 === r
                              ? void 0
                              : r.name
                            : "game" === s
                            ? null ===
                                (a =
                                  null === ue ||
                                  void 0 === ue ||
                                  null === (i = ue.games) ||
                                  void 0 === i
                                    ? void 0
                                    : i.data.find(function (e) {
                                        var n;
                                        return (
                                          (null === (n = e.attributes) ||
                                          void 0 === n
                                            ? void 0
                                            : n.provider) === c
                                        );
                                      })) ||
                              void 0 === a ||
                              null === (o = a.attributes) ||
                              void 0 === o
                              ? void 0
                              : o.title
                            : c),
                        onDelete: function () {
                          return (function (e, n) {
                            if (Array.isArray(re[e])) {
                              var t = new Set(re[e]);
                              t.delete(n), K.setValue(e, Array.from(t));
                            } else K.setValue(e, "");
                            "game" === e && K.setValue("metadata", {});
                          })(s, c);
                        },
                      },
                      s + c
                    );
                  }),
                }),
                sorts: ee,
                currentSort: H,
                onSortChange: function (e) {
                  return z(e);
                },
                resultsCount:
                  null !==
                    (we =
                      null === Ze ||
                      void 0 === Ze ||
                      null === (C = Ze.nftFiltered) ||
                      void 0 === C
                        ? void 0
                        : C.total) && void 0 !== we
                    ? we
                    : 0,
                showResetButton: Se.length > 0,
                resultNaming: "listing",
                children: [
                  !ye &&
                    0 ===
                      (null === Ze ||
                      void 0 === Ze ||
                      null === (U = Ze.nftFiltered) ||
                      void 0 === U ||
                      null === (D = U.nft) ||
                      void 0 === D
                        ? void 0
                        : D.length) &&
                    (0, u.jsx)(h.Z, {
                      justifyContent: "center",
                      children: (0, u.jsx)(M, {
                        title: "We couldn't find any matches",
                        children: (0, u.jsx)(L(), {
                          href: "/games",
                          passHref: !0,
                          children: (0, u.jsx)(g.Z, {
                            variant: "contained",
                            sx: { px: 25, mt: 1 },
                            children: "Back to all games",
                          }),
                        }),
                      }),
                    }),
                  (0, u.jsxs)(x.Z, {
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: 4,
                    children: [
                      be !== v.I.refetch &&
                        (null === Ze ||
                        void 0 === Ze ||
                        null === (N = Ze.nftFiltered) ||
                        void 0 === N ||
                        null === (B = N.nft) ||
                        void 0 === B
                          ? void 0
                          : B.map(function (e) {
                              return (0,
                              u.jsx)(x.Z, { children: (0, u.jsx)(k.a, { item: e }) }, e.id);
                            })),
                      ye &&
                        (0, s.Z)(Array(12)).map(function (e, n) {
                          return (0, u.jsx)(F.J, {}, n);
                        }),
                      !Me &&
                        ke &&
                        !ye &&
                        (0, u.jsx)("div", { ref: Te, style: { height: 50 } }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    73187: function (e, n, t) {
      t.d(n, {
        W: function () {
          return l;
        },
      });
      var r = t(85893),
        i = t(26447),
        a = t(15861),
        o = t(99226),
        l = function (e) {
          var n = e.icon,
            t = e.title,
            l = e.subtitle,
            d = e.titleColor,
            s = void 0 === d ? "text.primary" : d,
            c = e.children;
          return (0, r.jsxs)(i.Z, {
            gap: 4,
            alignSelf: "center",
            alignItems: "center",
            padding: 10,
            children: [
              n,
              (0, r.jsx)(a.Z, {
                variant: "h3",
                color: s,
                sx: { mt: 6 },
                children: t,
              }),
              l &&
                (0, r.jsx)(a.Z, {
                  variant: "body1",
                  color: "text.secondary",
                  children: l,
                }),
              (0, r.jsx)(o.Z, { mt: 5, children: c }),
            ],
          });
        };
    },
    81177: function (e, n, t) {
      t.d(n, {
        a: function () {
          return F;
        },
      });
      var r = t(26042),
        i = t(69396),
        a = t(99534),
        o = t(85893),
        l = t(2734),
        d = t(66242),
        s = t(99226),
        c = t(79274),
        u = t(14039),
        v = t(41664),
        p = t.n(v),
        h = t(66498),
        f = t(26447),
        g = t(15861),
        x = t(67720),
        m = t(44431),
        Z = t(92148),
        j = t(64826),
        y = t(7104),
        b = function (e) {
          var n = e.item,
            t = e.tradeListing,
            r = (0, l.Z)();
          if (!n) return null;
          var i = new m.BigNumber(
            (null === t || void 0 === t ? void 0 : t.quantity) || 1
          ).times(
            new m.BigNumber(
              (null === t || void 0 === t ? void 0 : t.pricePerItem) || "0"
            )
          );
          return (0, o.jsxs)(f.Z, {
            gap: 2,
            sx: {
              backgroundColor: r.palette.background.default,
              paddingBottom: r.spacing(9),
              paddingTop: r.spacing(3),
              textAlign: "start",
            },
            children: [
              (0, o.jsxs)(s.Z, {
                px: 4,
                children: [
                  (0, o.jsx)(g.Z, {
                    variant: "subtitle1",
                    sx: {
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    },
                    children: (0, o.jsx)(j.J, { item: n }),
                  }),
                  (0, o.jsx)(Z.a, { item: n }),
                ],
              }),
              (0, o.jsx)(x.Z, {}),
              (null === t || void 0 === t ? void 0 : t.published)
                ? (0, o.jsx)(f.Z, {
                    direction: "row",
                    paddingLeft: r.spacing(4),
                    children: (0, o.jsx)(y.W, {
                      value: i.lt(1) ? 0 : i.toFixed(0),
                      address: t.paymentToken || "",
                      chainId: n.chainId,
                      variant: "highlight",
                    }),
                  })
                : (0, o.jsx)(s.Z, { height: 42 }),
            ],
          });
        },
        w = t(90948),
        C = t(83321),
        M = (0, w.ZP)(C.Z)(function (e) {
          var n = e.theme;
          return {
            borderRadius: 80,
            color: n.palette.text.secondary,
            paddingLeft: n.spacing(3),
            paddingRight: n.spacing(3),
            paddingBlock: n.spacing(1),
            alignItems: "center",
          };
        }),
        I = function (e) {
          e.item;
          var n = (0, a.Z)(e, ["item"]),
            t = (0, l.Z)(),
            d = "sale",
            s = t.palette.label.dark,
            c = t.palette.primary.contrastText;
          return (0, o.jsx)(
            M,
            (0, i.Z)((0, r.Z)({}, n), {
              sx: { backgroundColor: s },
              children: (0, o.jsx)(g.Z, {
                variant: "body2",
                color: c,
                children: d,
              }),
            })
          );
        },
        k = function (e) {
          var n = e.item;
          return (0, o.jsx)(f.Z, {
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "space-between",
            width: "100%",
            pt: 4,
            px: 4,
            zIndex: 1,
            children: (0, o.jsx)(I, { item: n }),
          });
        },
        F = function (e) {
          var n = e.item,
            t = (0, a.Z)(e, ["item"]),
            v = (0, l.Z)(),
            f = (0, c.Z)(n.chainId || 1).contracts;
          if (!n) return null;
          var g = "/assets/"
              .concat((0, u.fN)(n.chainId || 56), "/")
              .concat(n.contractAddress, "/")
              .concat(n.tokenId),
            x = n.tradeListing
              ? 1 === n.tradeListing.length
                ? n.tradeListing[0]
                : n.tradeListing.some(function (e) {
                    return e.contract === f.tradeMarketplace;
                  })
                ? n.tradeListing.find(function (e) {
                    return e.contract === f.tradeMarketplace;
                  })
                : n.tradeListing[0]
              : void 0;
          return (0, o.jsxs)(
            d.Z,
            (0, i.Z)((0, r.Z)({}, t), {
              "aria-details": "NFT card for token ID "
                .concat(n.tokenId, " of contract ")
                .concat(n.contractAddress),
              sx: (0, r.Z)(
                {
                  position: "relative",
                  boxShadow: 1,
                  borderRadius: 2,
                  overflow: "hidden",
                  "@media (hover: hover)": {
                    "&:hover": {
                      boxShadow: "0px 2px 30px rgba(18, 18, 18, 0.3)",
                    },
                  },
                },
                t.sx
              ),
              children: [
                (0, o.jsx)(k, { item: n }),
                (0, o.jsx)(p(), {
                  href: g,
                  passHref: !0,
                  children: (0, o.jsxs)("a", {
                    style: { display: "block" },
                    children: [
                      (0, o.jsx)(s.Z, {
                        sx: { backgroundColor: v.palette.grey[100] },
                        children: (0, o.jsx)(h.z, {
                          item: n,
                          sx: { height: v.spacing(64) },
                        }),
                      }),
                      (0, o.jsx)(b, { item: n, tradeListing: x }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    62710: function (e, n, t) {
      t.d(n, {
        J: function () {
          return s;
        },
      });
      var r = t(85893),
        i = t(66242),
        a = t(26447),
        o = t(88078),
        l = t(67720),
        d = t(81382),
        s = function () {
          return (0, r.jsx)(i.Z, {
            elevation: 1,
            sx: { borderRadius: 2 },
            children: (0, r.jsxs)(a.Z, {
              children: [
                (0, r.jsx)(o.Z, {
                  animation: "wave",
                  variant: "rectangular",
                  width: "100%",
                  height: 254,
                  sx: {
                    "> *": { visibility: "visible" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "grey.200",
                  },
                  children: (0, r.jsx)(d.Z, {}),
                }),
                (0, r.jsxs)(a.Z, {
                  gap: 2,
                  sx: { pl: 4, pb: 4, pt: 3 },
                  children: [
                    (0, r.jsx)(o.Z, {
                      animation: "wave",
                      variant: "rectangular",
                      width: 188,
                      height: 20,
                      sx: { borderRadius: 4 },
                    }),
                    (0, r.jsx)(o.Z, {
                      animation: "wave",
                      variant: "rectangular",
                      width: 110,
                      height: 16,
                      sx: { borderRadius: 4 },
                    }),
                  ],
                }),
                (0, r.jsx)(l.Z, {}),
                (0, r.jsxs)(a.Z, {
                  gap: 2,
                  sx: { pl: 4, pb: 8, pt: 2 },
                  children: [
                    (0, r.jsx)(o.Z, {
                      animation: "wave",
                      variant: "rectangular",
                      width: 141,
                      height: 20,
                      sx: { borderRadius: 4 },
                    }),
                    (0, r.jsx)(o.Z, {
                      animation: "wave",
                      variant: "rectangular",
                      width: 90,
                      height: 16,
                      sx: { borderRadius: 4 },
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
]);
