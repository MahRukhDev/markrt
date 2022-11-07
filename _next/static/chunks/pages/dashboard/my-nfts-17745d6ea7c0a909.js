(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8113],
  {
    68705: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dashboard/my-nfts",
        function () {
          return n(65947);
        },
      ]);
    },
    38232: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var r = n(85893),
        i = n(46574),
        a = n(86886),
        o = n(68539),
        l = [
          { href: "/dashboard/my-nfts", label: "Owned NFTs", isExact: !0 },
          { label: "Borrowed NFTs", comingSoon: !0 },
          { label: "Statistics", comingSoon: !0 },
          { label: "History", comingSoon: !0 },
        ],
        s = function (e) {
          var t = e.children;
          return (0, r.jsx)(i.Z, {
            maxWidth: "lg",
            children: (0, r.jsxs)(a.ZP, {
              container: !0,
              paddingTop: { xs: 5, md: 10 },
              children: [
                (0, r.jsx)(a.ZP, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: (0, r.jsx)(o.Z, {
                    links: l,
                    direction: { xs: "row", md: "column" },
                    sx: {
                      flexWrap: "nowrap",
                      mb: { xs: 10, md: 0 },
                      alignItems: { md: "start", xs: "center" },
                      overflowX: {
                        xs: "hidden",
                        md: "none",
                        whiteSpace: "nowrap",
                      },
                    },
                    dashboardStyle: !0,
                  }),
                }),
                (0, r.jsx)(a.ZP, { item: !0, xs: 12, md: 10, children: t }),
              ],
            }),
          });
        };
    },
    5490: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return u;
        },
      });
      var r,
        i,
        a,
        o = n(85893),
        l = n(67294);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      var c = function (e) {
          return l.createElement(
            "svg",
            s(
              {
                width: 101,
                height: 100,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            r ||
              (r = l.createElement("rect", {
                x: 0.5,
                width: 100,
                height: 100,
                rx: 50,
                fill: "#ECECEC",
              })),
            i ||
              (i = l.createElement(
                "g",
                { clipPath: "url(#Logo_svg__a)", fill: "#D0D0D0" },
                l.createElement("path", {
                  d: "M67.266 29.197 37.081 50.633a18.166 18.166 0 0 1-2.735-9.655c0-10.208 8.314-18.478 18.593-18.478a18.52 18.52 0 0 1 7.909 1.743 18.581 18.581 0 0 1 6.418 4.954ZM67.632 44.89a18.21 18.21 0 0 0-2.734-9.659L49.84 45.914 34.709 56.647l-.8.573.036 20.78s19.904-13.354 26.177-18.257c4.666-3.658 7.51-8.778 7.51-14.853Z",
                })
              )),
            a ||
              (a = l.createElement(
                "defs",
                null,
                l.createElement(
                  "clipPath",
                  { id: "Logo_svg__a" },
                  l.createElement("path", {
                    fill: "#fff",
                    transform: "translate(28.5 22.5)",
                    d: "M0 0h44v55.5H0z",
                  })
                )
              ))
          );
        },
        d = n(73187),
        u = function (e) {
          var t = e.title,
            n = e.children;
          return (0, o.jsx)(d.W, {
            icon: (0, o.jsx)(c, {}),
            title: t,
            titleColor: "text.secondary",
            children: n,
          });
        };
    },
    73187: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return l;
        },
      });
      var r = n(85893),
        i = n(26447),
        a = n(15861),
        o = n(99226),
        l = function (e) {
          var t = e.icon,
            n = e.title,
            l = e.subtitle,
            s = e.titleColor,
            c = void 0 === s ? "text.primary" : s,
            d = e.children;
          return (0, r.jsxs)(i.Z, {
            gap: 4,
            alignSelf: "center",
            alignItems: "center",
            padding: 10,
            children: [
              t,
              (0, r.jsx)(a.Z, {
                variant: "h3",
                color: c,
                sx: { mt: 6 },
                children: n,
              }),
              l &&
                (0, r.jsx)(a.Z, {
                  variant: "body1",
                  color: "text.secondary",
                  children: l,
                }),
              (0, r.jsx)(o.Z, { mt: 5, children: d }),
            ],
          });
        };
    },
    25660: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return v;
        },
      });
      var r,
        i,
        a = n(828),
        o = n(85893),
        l = n(83321),
        s = n(17295),
        c = n(67294);
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          d.apply(this, arguments)
        );
      }
      var u = function (e) {
          return c.createElement(
            "svg",
            d(
              {
                width: 120,
                height: 120,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            r ||
              (r = c.createElement(
                "g",
                { clipPath: "url(#Wallet_svg__a)" },
                c.createElement("path", {
                  d: "m25.104 73.992-1.344 2.88c-.312.672-1.104.96-1.8.648l-2.88-1.344a2.446 2.446 0 0 0-3.264 1.2 2.446 2.446 0 0 0 1.2 3.264l2.88 1.344c.672.312.96 1.104.648 1.8l-1.344 2.88a2.446 2.446 0 0 0 1.2 3.264 2.446 2.446 0 0 0 3.264-1.2l1.344-2.88c.312-.672 1.104-.96 1.8-.648l2.88 1.344a2.446 2.446 0 0 0 3.264-1.2 2.446 2.446 0 0 0-1.2-3.264l-2.88-1.344c-.672-.312-.96-1.104-.648-1.8l1.344-2.88a2.446 2.446 0 0 0-1.2-3.264c-1.248-.576-2.712-.048-3.264 1.2Z",
                  fill: "url(#Wallet_svg__b)",
                }),
                c.createElement("path", {
                  d: "M24.816 74.544c-.024 1.104.432 2.496 1.344 3.792.816 1.176 1.824 2.016 2.784 2.448l2.784 1.296A2.412 2.412 0 0 1 33 83.472c.216.6.216 1.272-.072 1.872-.576 1.224-2.04 1.776-3.264 1.2l-2.88-1.344a1.368 1.368 0 0 0-1.8.648l-1.08 2.328c.024-1.104-.432-2.496-1.344-3.792-.816-1.176-1.824-2.016-2.784-2.448l-2.784-1.296a2.412 2.412 0 0 1-1.272-1.392c-.216-.6-.216-1.272.072-1.872.576-1.224 2.04-1.776 3.264-1.2l2.88 1.344a1.368 1.368 0 0 0 1.8-.648l1.08-2.328Z",
                  fill: "url(#Wallet_svg__c)",
                }),
                c.createElement("path", {
                  d: "M19.872 81.984c.912.432 1.896 1.272 2.664 2.4.912 1.296 1.368 2.688 1.344 3.792l-.024.048c-.024-1.248-.744-2.664-2.04-3.696-.408-.336-.84-.6-1.296-.816.312-.672 0-1.416-.648-1.728Z",
                  fill: "url(#Wallet_svg__d)",
                }),
                c.createElement("path", {
                  d: "M24.84 74.496c.024 1.248.744 2.664 2.04 3.696.408.336.84.6 1.296.816a1.361 1.361 0 0 0 .672 1.728c-.912-.432-1.896-1.272-2.664-2.4-.912-1.296-1.368-2.688-1.344-3.792v-.048Z",
                  fill: "url(#Wallet_svg__e)",
                }),
                c.createElement("path", {
                  d: "M112.296 41.736h-3.192v-1.392c.072-.264.12-.552.12-.84a9.77 9.77 0 0 0-.12-1.464V19.8a5.52 5.52 0 0 0-5.52-5.52H22.032c-4.248 0-7.704 3.456-7.704 7.704v37.2C5.88 63.024 0 71.52 0 81.384c0 13.44 10.92 24.36 24.36 24.36 9.864 0 18.36-5.88 22.2-14.328h57.048a5.52 5.52 0 0 0 5.52-5.52V70.368h3.192c4.248 0 7.704-3.456 7.704-7.704V49.44c-.024-4.248-3.48-7.704-7.728-7.704ZM24.36 99.12c-9.792 0-17.736-7.968-17.736-17.736s7.968-17.736 17.736-17.736 17.736 7.968 17.736 17.736S34.128 99.12 24.36 99.12Zm78.12-14.328H48.456c.168-1.128.24-2.256.24-3.408 0-13.44-10.92-24.36-24.36-24.36-1.152 0-2.304.072-3.408.24v-35.28c0-.6.504-1.104 1.104-1.104h80.448v9.24a10.115 10.115 0 0 0-3.192-.528h-41.88a3.319 3.319 0 0 0-3.312 3.312 3.319 3.319 0 0 0 3.312 3.312h41.88a3.298 3.298 0 0 1 3.192 2.472v3.048H89.592c-4.248 0-7.704 3.456-7.704 7.704v13.224c0 4.248 3.456 7.704 7.704 7.704h12.888v14.424Zm10.92-22.128c0 .6-.504 1.104-1.104 1.104H89.592c-.6 0-1.104-.504-1.104-1.104V49.44c0-.6.504-1.104 1.104-1.104h22.704c.6 0 1.104.504 1.104 1.104v13.224Z",
                  fill: "url(#Wallet_svg__f)",
                }),
                c.createElement("path", {
                  d: "M106.344 59.376a3.312 3.312 0 1 0 0-6.624 3.312 3.312 0 0 0 0 6.624Z",
                  fill: "url(#Wallet_svg__g)",
                })
              )),
            i ||
              (i = c.createElement(
                "defs",
                null,
                c.createElement(
                  "linearGradient",
                  {
                    id: "Wallet_svg__b",
                    x1: 17.274,
                    y1: 85.462,
                    x2: 31.46,
                    y2: 77.271,
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { stopColor: "#757281" }),
                  c.createElement("stop", {
                    offset: 0.389,
                    stopColor: "#4A4A4A",
                  }),
                  c.createElement("stop", {
                    offset: 0.618,
                    stopColor: "#4A4A4A",
                  }),
                  c.createElement("stop", { offset: 1, stopColor: "#757281" })
                ),
                c.createElement(
                  "linearGradient",
                  {
                    id: "Wallet_svg__c",
                    x1: 18.062,
                    y1: 84.307,
                    x2: 30.672,
                    y2: 78.426,
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { stopColor: "#4A4A4A" }),
                  c.createElement("stop", {
                    offset: 0.494,
                    stopColor: "#757281",
                  }),
                  c.createElement("stop", {
                    offset: 0.563,
                    stopColor: "#757281",
                  }),
                  c.createElement("stop", { offset: 1, stopColor: "#4A4A4A" })
                ),
                c.createElement(
                  "linearGradient",
                  {
                    id: "Wallet_svg__d",
                    x1: 21.493,
                    y1: 85.332,
                    x2: 22.731,
                    y2: 84.617,
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { stopColor: "#757281" }),
                  c.createElement("stop", { offset: 1, stopColor: "#4A4A4A" })
                ),
                c.createElement(
                  "linearGradient",
                  {
                    id: "Wallet_svg__e",
                    x1: 26.002,
                    y1: 78.115,
                    x2: 27.24,
                    y2: 77.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { stopColor: "#4A4A4A" }),
                  c.createElement("stop", { offset: 1, stopColor: "#757281" })
                ),
                c.createElement(
                  "linearGradient",
                  {
                    id: "Wallet_svg__f",
                    x1: 29.089,
                    y1: 9.008,
                    x2: 83.76,
                    y2: 103.7,
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { stopColor: "#757281" }),
                  c.createElement("stop", { offset: 1, stopColor: "#4A4A4A" })
                ),
                c.createElement(
                  "linearGradient",
                  {
                    id: "Wallet_svg__g",
                    x1: 103.473,
                    y1: 57.707,
                    x2: 109.199,
                    y2: 54.401,
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { stopColor: "#757281" }),
                  c.createElement("stop", { offset: 1, stopColor: "#4A4A4A" })
                ),
                c.createElement(
                  "clipPath",
                  { id: "Wallet_svg__a" },
                  c.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h120v120H0z",
                  })
                )
              ))
          );
        },
        p = n(27823),
        m = n(70044),
        h = n(73187),
        v = function () {
          var e = (0, a.Z)((0, m.O)(), 2),
            t = e[0],
            n = e[1],
            r = (0, s.K)().account;
          return (
            (0, c.useEffect)(
              function () {
                r && t && n();
              },
              [r, t, n]
            ),
            (0, o.jsxs)(h.W, {
              icon: (0, o.jsx)(u, {}),
              title: "Wallet has not been connected",
              subtitle:
                "You need to connect a wallet to be able to operate with NFTs ",
              children: [
                (0, o.jsx)(l.Z, {
                  variant: "text",
                  color: "primary",
                  onClick: n,
                  children: "Connect wallet",
                }),
                t && (0, o.jsx)(p.B, { open: t, onClose: n }),
              ],
            })
          );
        };
    },
    81177: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return A;
        },
      });
      var r = n(26042),
        i = n(69396),
        a = n(99534),
        o = n(85893),
        l = n(2734),
        s = n(66242),
        c = n(99226),
        d = n(79274),
        u = n(14039),
        p = n(41664),
        m = n.n(p),
        h = n(66498),
        v = n(26447),
        x = n(15861),
        f = n(67720),
        g = n(44431),
        j = n(92148),
        Z = n(64826),
        w = n(7104),
        y = function (e) {
          var t = e.item,
            n = e.tradeListing,
            r = (0, l.Z)();
          if (!t) return null;
          var i = new g.BigNumber(
            (null === n || void 0 === n ? void 0 : n.quantity) || 1
          ).times(
            new g.BigNumber(
              (null === n || void 0 === n ? void 0 : n.pricePerItem) || "0"
            )
          );
          return (0, o.jsxs)(v.Z, {
            gap: 2,
            sx: {
              backgroundColor: r.palette.background.default,
              paddingBottom: r.spacing(9),
              paddingTop: r.spacing(3),
              textAlign: "start",
            },
            children: [
              (0, o.jsxs)(c.Z, {
                px: 4,
                children: [
                  (0, o.jsx)(x.Z, {
                    variant: "subtitle1",
                    sx: {
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    },
                    children: (0, o.jsx)(Z.J, { item: t }),
                  }),
                  (0, o.jsx)(j.a, { item: t }),
                ],
              }),
              (0, o.jsx)(f.Z, {}),
              (null === n || void 0 === n ? void 0 : n.published)
                ? (0, o.jsx)(v.Z, {
                    direction: "row",
                    paddingLeft: r.spacing(4),
                    children: (0, o.jsx)(w.W, {
                      value: i.lt(1) ? 0 : i.toFixed(0),
                      address: n.paymentToken || "",
                      chainId: t.chainId,
                      variant: "highlight",
                    }),
                  })
                : (0, o.jsx)(c.Z, { height: 42 }),
            ],
          });
        },
        b = n(90948),
        _ = n(83321),
        E = (0, b.ZP)(_.Z)(function (e) {
          var t = e.theme;
          return {
            borderRadius: 80,
            color: t.palette.text.secondary,
            paddingLeft: t.spacing(3),
            paddingRight: t.spacing(3),
            paddingBlock: t.spacing(1),
            alignItems: "center",
          };
        }),
        k = function (e) {
          e.item;
          var t = (0, a.Z)(e, ["item"]),
            n = (0, l.Z)(),
            s = "sale",
            c = n.palette.label.dark,
            d = n.palette.primary.contrastText;
          return (0, o.jsx)(
            E,
            (0, i.Z)((0, r.Z)({}, t), {
              sx: { backgroundColor: c },
              children: (0, o.jsx)(x.Z, {
                variant: "body2",
                color: d,
                children: s,
              }),
            })
          );
        },
        C = function (e) {
          var t = e.item;
          return (0, o.jsx)(v.Z, {
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "space-between",
            width: "100%",
            pt: 4,
            px: 4,
            zIndex: 1,
            children: (0, o.jsx)(k, { item: t }),
          });
        },
        A = function (e) {
          var t = e.item,
            n = (0, a.Z)(e, ["item"]),
            p = (0, l.Z)(),
            v = (0, d.Z)(t.chainId || 1).contracts;
          if (!t) return null;
          var x = "/assets/"
              .concat((0, u.fN)(t.chainId || 56), "/")
              .concat(t.contractAddress, "/")
              .concat(t.tokenId),
            f = t.tradeListing
              ? 1 === t.tradeListing.length
                ? t.tradeListing[0]
                : t.tradeListing.some(function (e) {
                    return e.contract === v.tradeMarketplace;
                  })
                ? t.tradeListing.find(function (e) {
                    return e.contract === v.tradeMarketplace;
                  })
                : t.tradeListing[0]
              : void 0;
          return (0, o.jsxs)(
            s.Z,
            (0, i.Z)((0, r.Z)({}, n), {
              "aria-details": "NFT card for token ID "
                .concat(t.tokenId, " of contract ")
                .concat(t.contractAddress),
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
                n.sx
              ),
              children: [
                (0, o.jsx)(C, { item: t }),
                (0, o.jsx)(m(), {
                  href: x,
                  passHref: !0,
                  children: (0, o.jsxs)("a", {
                    style: { display: "block" },
                    children: [
                      (0, o.jsx)(c.Z, {
                        sx: { backgroundColor: p.palette.grey[100] },
                        children: (0, o.jsx)(h.z, {
                          item: t,
                          sx: { height: p.spacing(64) },
                        }),
                      }),
                      (0, o.jsx)(y, { item: t, tradeListing: f }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    72733: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return l;
        },
      });
      var r = n(85893),
        i = n(9008),
        a = n.n(i),
        o = n(67294),
        l = function (e) {
          var t,
            n,
            i,
            l,
            s,
            c,
            d,
            u,
            p,
            m,
            h = e.seo,
            v = e.titlePrefix,
            x =
              (null ===
                (t = null === h || void 0 === h ? void 0 : h.metaImage.data) ||
              void 0 === t ||
              null === (n = t.attributes) ||
              void 0 === n
                ? void 0
                : n.url) || "/static/images/cover.jpg",
            f =
              null === h ||
              void 0 === h ||
              null === (i = h.metaSocial) ||
              void 0 === i
                ? void 0
                : i.find(function (e) {
                    return (
                      "Twitter" ===
                      (null === e || void 0 === e ? void 0 : e.socialNetwork)
                    );
                  }),
            g =
              null === h ||
              void 0 === h ||
              null === (l = h.metaSocial) ||
              void 0 === l
                ? void 0
                : l.find(function (e) {
                    return (
                      "Facebook" ===
                      (null === e || void 0 === e ? void 0 : e.socialNetwork)
                    );
                  }),
            j = v ? "".concat(v, " | ") : "";
          return (0, r.jsxs)(a(), {
            children: [
              (0, r.jsx)("link", { rel: "icon", href: "/favicon.png" }),
              (0, r.jsx)(
                "meta",
                {
                  property: "og:site_name",
                  content: "Prom",
                  "data-shuvi-head": "true",
                },
                "og:site_name"
              ),
              (0, r.jsx)(
                "meta",
                {
                  property: "twitter:site",
                  content: "Prom",
                  "data-shuvi-head": "true",
                },
                "twitter:site"
              ),
              (null === h || void 0 === h ? void 0 : h.metaTitle) &&
                (0, r.jsxs)(o.Fragment, {
                  children: [
                    (0, r.jsxs)("title", { children: [j, h.metaTitle] }),
                    (0, r.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: "".concat(j).concat(h.metaTitle),
                      },
                      "og_title"
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "twitter:title",
                        content: "".concat(j).concat(h.metaTitle),
                      },
                      "twitter_title"
                    ),
                  ],
                }),
              (null === h || void 0 === h ? void 0 : h.metaDescription) &&
                (0, r.jsxs)(o.Fragment, {
                  children: [
                    (0, r.jsx)(
                      "meta",
                      { name: "description", content: h.metaDescription },
                      "description"
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content: h.metaDescription,
                      },
                      "og:description"
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content: h.metaDescription,
                      },
                      "twitter:description"
                    ),
                  ],
                }),
              (null === h || void 0 === h ? void 0 : h.keywords) &&
                (0, r.jsx)(
                  "meta",
                  { name: "keywords", content: h.keywords },
                  "keywords"
                ),
              (null === h || void 0 === h ? void 0 : h.metaRobots) &&
                (0, r.jsx)(
                  "meta",
                  { name: "robots", content: h.metaRobots },
                  "robots"
                ),
              (null === h || void 0 === h ? void 0 : h.metaViewport) &&
                (0, r.jsx)(
                  "meta",
                  { name: "viewport", content: h.metaViewport },
                  "viewport"
                ),
              (null === h || void 0 === h ? void 0 : h.canonicalURL) &&
                (0, r.jsx)("link", { rel: "canonical", href: h.canonicalURL }),
              (0, r.jsx)(
                "meta",
                { property: "twitter:card", content: "summary_large_image" },
                "twitter:card"
              ),
              (0, r.jsx)(
                "meta",
                { property: "og:image", content: x },
                "og:image"
              ),
              (0, r.jsx)(
                "meta",
                { name: "twitter:image", content: x },
                "twitter:image"
              ),
              f &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(
                      "meta",
                      { name: "twitter:title", content: f.title },
                      "twitter:title"
                    ),
                    (0, r.jsx)(
                      "meta",
                      { name: "twitter:description", content: f.description },
                      "twitter:description"
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "twitter:image",
                        content:
                          (null === (s = f.image) ||
                          void 0 === s ||
                          null === (c = s.data) ||
                          void 0 === c ||
                          null === (d = c.attributes) ||
                          void 0 === d
                            ? void 0
                            : d.url) || x,
                      },
                      "twitter:image"
                    ),
                  ],
                }),
              g &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(
                      "meta",
                      { name: "og:title", content: g.title },
                      "og:title"
                    ),
                    (0, r.jsx)(
                      "meta",
                      { name: "og:description", content: g.description },
                      "og:description"
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "og:image",
                        content:
                          (null === (u = g.image) ||
                          void 0 === u ||
                          null === (p = u.data) ||
                          void 0 === p ||
                          null === (m = p.attributes) ||
                          void 0 === m
                            ? void 0
                            : m.url) || x,
                      },
                      "og:image"
                    ),
                  ],
                }),
            ],
          });
        };
    },
    88109: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(828),
        i = n(85893),
        a = n(83321),
        o = n(15861),
        l = n(35294),
        s = n(18972),
        c = n(75503),
        d = n(67294),
        u = function (e) {
          var t,
            n,
            u = e.sorts,
            p = e.currentSort,
            m = e.onSortChange,
            h = e.renderAnchor,
            v = (0, d.useState)(null),
            x = v[0],
            f = v[1],
            g = function () {
              f(null);
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              h
                ? h({
                    onClick: function (e) {
                      return f(e.currentTarget);
                    },
                    anchorText:
                      null !==
                        (t =
                          p && (null === u || void 0 === u ? void 0 : u[p])) &&
                      void 0 !== t
                        ? t
                        : "Sort by",
                  })
                : (0, i.jsx)(a.Z, {
                    onClick: function (e) {
                      return f(e.currentTarget);
                    },
                    sx: { py: 1 },
                    endIcon: (0, i.jsx)(c.Z, {}),
                    children: (0, i.jsx)(o.Z, {
                      variant: "body2",
                      children:
                        null !==
                          (n =
                            p &&
                            (null === u || void 0 === u ? void 0 : u[p])) &&
                        void 0 !== n
                          ? n
                          : "Sort by",
                    }),
                  }),
              (0, i.jsx)(l.Z, {
                anchorEl: x,
                open: Boolean(x),
                onClose: g,
                anchorOrigin: { vertical: "bottom", horizontal: "right" },
                transformOrigin: { vertical: "top", horizontal: "right" },
                children: Object.entries(u).map(function (e) {
                  var t = (0, r.Z)(e, 2),
                    n = t[0],
                    a = t[1];
                  return (0, i.jsx)(
                    s.Z,
                    {
                      onClick: function () {
                        null === m || void 0 === m || m(n), g();
                      },
                      disableRipple: !0,
                      children: a,
                    },
                    n
                  );
                }),
              }),
            ],
          });
        };
    },
    65947: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return B;
          },
          default: function () {
            return U;
          },
        });
      var r = n(26042),
        i = n(69396),
        a = n(85893),
        o = n(26447),
        l = n(15861),
        s = n(11703),
        c = n(40044),
        d = n(98456),
        u = n(86886),
        p = n(83321),
        m = n(17295),
        h = n(5490),
        v = n(25660),
        x = n(81177),
        f = n(72733),
        g = n(30230),
        j = n(29815),
        Z = n(46267),
        w = n(67294),
        y = n(71077),
        b = n(41664),
        _ = n.n(b),
        E = n(87536),
        k = n(38232),
        C = n(99534),
        A = n(94054),
        S = n(10315),
        T = n(18972),
        I = n(45090),
        N = n(42761),
        O = n(98271),
        F = n(87109),
        P = (0, w.forwardRef)(function (e, t) {
          return (0,
          a.jsx)(O.Z, (0, r.Z)({ ref: t, placeholder: "Search", InputProps: { startAdornment: (0, a.jsx)(F.Z, { position: "start", children: (0, a.jsx)(N.Z, {}) }) } }, e));
        });
      P.displayName = "SearchField";
      var W = n(88109),
        L = { "title:asc": "Name", "createdAt:asc": "Date" },
        M = function () {
          var e = (0, E.Gc)(),
            t = e.control,
            n = e.register;
          return (0, a.jsxs)(o.Z, {
            direction: "row",
            gap: 10,
            component: "form",
            children: [
              (0, a.jsx)(
                P,
                (0, i.Z)((0, r.Z)({}, n("search")), { sx: { flex: 1 } })
              ),
              (0, a.jsx)(A.Z, {
                sx: { flex: 1 },
                children: (0, a.jsx)(E.Qr, {
                  name: "game",
                  control: t,
                  defaultValue: "all",
                  render: function (e) {
                    var t = e.field,
                      n = t.ref,
                      o = t.value,
                      l = (0, C.Z)(e.field, ["ref", "value"]);
                    return (0, a.jsxs)(
                      S.Z,
                      (0, i.Z)(
                        (0, r.Z)(
                          {
                            variant: "outlined",
                            labelId: "game-select",
                            ref: n,
                            value: null !== o && void 0 !== o ? o : "",
                          },
                          l
                        ),
                        {
                          "aria-label": "select game",
                          children: [
                            (0, a.jsx)(T.Z, {
                              value: "all",
                              children: "All games",
                            }),
                            I.T.map(function (e) {
                              return (0,
                              a.jsx)(T.Z, { value: e.key, disabled: e.disabled, children: e.name }, e.key);
                            }),
                          ],
                        }
                      )
                    );
                  },
                }),
              }),
              (0, a.jsx)(E.Qr, {
                name: "sort",
                control: t,
                render: function (e) {
                  var t = e.field,
                    n = t.value,
                    r = t.onChange;
                  return (0, a.jsx)(W.h, {
                    sorts: L,
                    currentSort: n,
                    onSortChange: function (e) {
                      return r(e);
                    },
                  });
                },
              }),
            ],
          });
        },
        U = function (e) {
          var t = e.seo,
            n = (0, m.K)().account,
            b = (0, w.useState)("all"),
            C = b[0],
            A = b[1],
            S = (0, E.cI)({ defaultValues: { game: "all", search: "" } }),
            T = (0, g.Qv)({ variables: { owner: (0, y.f)(n) } }),
            I = T.data,
            N = T.loading,
            O = (function (e) {
              var t, n, a;
              return (0, w.useMemo)(
                function () {
                  var o, l, s;
                  return (0, j.Z)(
                    null !==
                      (t =
                        null === e ||
                        void 0 === e ||
                        null === (o = e.erc721Tokens_137) ||
                        void 0 === o
                          ? void 0
                          : o.map(function (e) {
                              return (0,
                              i.Z)((0, r.Z)({}, e.nftById), { id: e.id, tokenId: e.identifier, chainId: Z.a.Polygon, contractAddress: e.contract.id });
                            })) && void 0 !== t
                      ? t
                      : []
                  ).concat(
                    (0, j.Z)(
                      null !==
                        (n =
                          null === e ||
                          void 0 === e ||
                          null === (l = e.erc721Tokens_56) ||
                          void 0 === l
                            ? void 0
                            : l.map(function (e) {
                                return (0,
                                i.Z)((0, r.Z)({}, e.nftById), { id: e.id, chainId: Z.a.BSC, tokenId: e.identifier, contractAddress: e.contract.id });
                              })) && void 0 !== n
                        ? n
                        : []
                    ),
                    (0, j.Z)(
                      null !==
                        (a =
                          null === e ||
                          void 0 === e ||
                          null === (s = e.erc1155Balances_56) ||
                          void 0 === s
                            ? void 0
                            : s.map(function (e) {
                                return (0,
                                i.Z)((0, r.Z)({}, e.token.nftById), { id: e.token.id, tokenId: e.token.identifier, contractAddress: e.contract.id, chainId: Z.a.BSC });
                              })) && void 0 !== a
                        ? a
                        : []
                    )
                  );
                },
                [e]
              );
            })(I),
            F = (0, w.useMemo)(
              function () {
                return "all" === C
                  ? O
                  : "listed" === C
                  ? O.filter(function (e) {
                      var t;
                      return null === (t = e.tradeListing) || void 0 === t
                        ? void 0
                        : t.some(function (e) {
                            return e.published;
                          });
                    })
                  : O.filter(function (e) {
                      var t;
                      return null === (t = e.tradeListing) || void 0 === t
                        ? void 0
                        : t.every(function (e) {
                            return !e.published;
                          });
                    });
              },
              [C, O]
            );
          return n
            ? (0, a.jsxs)(k.c, {
                children: [
                  (0, a.jsx)(f.o, { seo: t, titlePrefix: "Owned NFTs" }),
                  (0, a.jsxs)(o.Z, {
                    gap: 6,
                    children: [
                      (0, a.jsxs)(o.Z, {
                        gap: 2,
                        children: [
                          (0, a.jsx)(l.Z, {
                            variant: "h2",
                            children: "Owned NFTs",
                          }),
                          (0, a.jsxs)(l.Z, {
                            variant: "body1",
                            color: "text.secondary",
                            children: [
                              "Some or all of your gaming NFTs are not displayed? See the list of currently supported games",
                              " ",
                              (0, a.jsx)("a", {
                                href: "https://support.prom.io/hc/en-gb/articles/6435393803677-Supported-networks-games-and-currencies",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                style: { textDecoration: "underline" },
                                children: "here",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(
                        E.RV,
                        (0, i.Z)((0, r.Z)({}, S), {
                          children: (0, a.jsx)(M, {}),
                        })
                      ),
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)(s.Z, {
                            value: C,
                            onChange: function (e, t) {
                              return A(t);
                            },
                            sx: { ".MuiTabs-flexContainer": { gap: 6 } },
                            children: [
                              (0, a.jsx)(c.Z, {
                                sx: { typography: "h3" },
                                label: "All",
                                value: "all",
                                disableRipple: !0,
                              }),
                              (0, a.jsx)(c.Z, {
                                sx: { typography: "h3" },
                                label: "Unlisted",
                                value: "unlisted",
                                disableRipple: !0,
                              }),
                              (0, a.jsx)(c.Z, {
                                sx: { typography: "h3" },
                                label: "Listed",
                                value: "listed",
                                disableRipple: !0,
                              }),
                            ],
                          }),
                          N
                            ? (0, a.jsx)(d.Z, {})
                            : F.length
                            ? (0, a.jsx)(u.ZP, {
                                container: !0,
                                columns: { xs: 1, sm: 2, md: 9, lg: 10 },
                                spacing: 6,
                                children: F.map(function (e) {
                                  return (0,
                                  a.jsx)(u.ZP, { item: !0, xs: 1, md: 3, lg: 2, children: (0, a.jsx)(x.a, { item: e }) }, e.id);
                                }),
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                children: [
                                  "all" === C &&
                                    (0, a.jsx)(h.X, {
                                      title:
                                        "You don't have any gaming NFTs in your wallet",
                                      children: (0, a.jsx)(_(), {
                                        href: "/games",
                                        passHref: !0,
                                        children: (0, a.jsx)(p.Z, {
                                          variant: "contained",
                                          sx: { px: 25 },
                                          children: "View marketplace",
                                        }),
                                      }),
                                    }),
                                  "unlisted" === C &&
                                    (0, a.jsx)(h.X, {
                                      title:
                                        "You don't have any NFTs available to list",
                                      children: (0, a.jsx)(_(), {
                                        href: "/games",
                                        passHref: !0,
                                        children: (0, a.jsx)(p.Z, {
                                          variant: "contained",
                                          sx: { px: 25 },
                                          children: "View marketplace",
                                        }),
                                      }),
                                    }),
                                  "listed" === C &&
                                    (0, a.jsx)(h.X, {
                                      title: "You haven't listed any NFTs yet",
                                      children: (0, a.jsx)(p.Z, {
                                        variant: "contained",
                                        sx: { px: 25 },
                                        onClick: function () {
                                          A("all");
                                        },
                                        children: "View all my NFTs",
                                      }),
                                    }),
                                ],
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, a.jsx)(v.d, {});
        },
        B = !0;
    },
  },
  function (e) {
    e.O(
      0,
      [9447, 1810, 7536, 9912, 2042, 2542, 1828, 9774, 2888, 179],
      function () {
        return (t = 68705), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);
