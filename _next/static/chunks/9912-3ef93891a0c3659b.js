"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9912],
  {
    40044: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return w;
        },
      });
      var l = o(63366),
        r = o(87462),
        n = o(67294),
        i = o(86010),
        a = o(94780),
        s = o(49990),
        c = o(41220),
        d = o(71657),
        u = o(90948),
        b = o(34867);
      function f(e) {
        return (0, b.Z)("MuiTab", e);
      }
      var h = (0, o(1588).Z)("MuiTab", [
          "root",
          "labelIcon",
          "textColorInherit",
          "textColorPrimary",
          "textColorSecondary",
          "selected",
          "disabled",
          "fullWidth",
          "wrapped",
          "iconWrapper",
        ]),
        p = o(85893);
      const m = [
          "className",
          "disabled",
          "disableFocusRipple",
          "fullWidth",
          "icon",
          "iconPosition",
          "indicator",
          "label",
          "onChange",
          "onClick",
          "onFocus",
          "selected",
          "selectionFollowsFocus",
          "textColor",
          "value",
          "wrapped",
        ],
        v = (0, u.ZP)(s.Z, {
          name: "MuiTab",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [
              t.root,
              o.label && o.icon && t.labelIcon,
              t[`textColor${(0, c.Z)(o.textColor)}`],
              o.fullWidth && t.fullWidth,
              o.wrapped && t.wrapped,
            ];
          },
        })(({ theme: e, ownerState: t }) =>
          (0, r.Z)(
            {},
            e.typography.button,
            {
              maxWidth: 360,
              minWidth: 90,
              position: "relative",
              minHeight: 48,
              flexShrink: 0,
              padding: "12px 16px",
              overflow: "hidden",
              whiteSpace: "normal",
              textAlign: "center",
            },
            t.label && {
              flexDirection:
                "top" === t.iconPosition || "bottom" === t.iconPosition
                  ? "column"
                  : "row",
            },
            { lineHeight: 1.25 },
            t.icon &&
              t.label && {
                minHeight: 72,
                paddingTop: 9,
                paddingBottom: 9,
                [`& > .${h.iconWrapper}`]: (0, r.Z)(
                  {},
                  "top" === t.iconPosition && { marginBottom: 6 },
                  "bottom" === t.iconPosition && { marginTop: 6 },
                  "start" === t.iconPosition && { marginRight: e.spacing(1) },
                  "end" === t.iconPosition && { marginLeft: e.spacing(1) }
                ),
              },
            "inherit" === t.textColor && {
              color: "inherit",
              opacity: 0.6,
              [`&.${h.selected}`]: { opacity: 1 },
              [`&.${h.disabled}`]: {
                opacity: (e.vars || e).palette.action.disabledOpacity,
              },
            },
            "primary" === t.textColor && {
              color: (e.vars || e).palette.text.secondary,
              [`&.${h.selected}`]: {
                color: (e.vars || e).palette.primary.main,
              },
              [`&.${h.disabled}`]: {
                color: (e.vars || e).palette.text.disabled,
              },
            },
            "secondary" === t.textColor && {
              color: (e.vars || e).palette.text.secondary,
              [`&.${h.selected}`]: {
                color: (e.vars || e).palette.secondary.main,
              },
              [`&.${h.disabled}`]: {
                color: (e.vars || e).palette.text.disabled,
              },
            },
            t.fullWidth && {
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0,
              maxWidth: "none",
            },
            t.wrapped && { fontSize: e.typography.pxToRem(12) }
          )
        );
      var w = n.forwardRef(function (e, t) {
        const o = (0, d.Z)({ props: e, name: "MuiTab" }),
          {
            className: s,
            disabled: u = !1,
            disableFocusRipple: b = !1,
            fullWidth: h,
            icon: w,
            iconPosition: x = "top",
            indicator: g,
            label: S,
            onChange: Z,
            onClick: C,
            onFocus: y,
            selected: M,
            selectionFollowsFocus: B,
            textColor: W = "inherit",
            value: R,
            wrapped: E = !1,
          } = o,
          N = (0, l.Z)(o, m),
          T = (0, r.Z)({}, o, {
            disabled: u,
            disableFocusRipple: b,
            selected: M,
            icon: !!w,
            iconPosition: x,
            label: !!S,
            fullWidth: h,
            textColor: W,
            wrapped: E,
          }),
          k = ((e) => {
            const {
                classes: t,
                textColor: o,
                fullWidth: l,
                wrapped: r,
                icon: n,
                label: i,
                selected: s,
                disabled: d,
              } = e,
              u = {
                root: [
                  "root",
                  n && i && "labelIcon",
                  `textColor${(0, c.Z)(o)}`,
                  l && "fullWidth",
                  r && "wrapped",
                  s && "selected",
                  d && "disabled",
                ],
                iconWrapper: ["iconWrapper"],
              };
            return (0, a.Z)(u, f, t);
          })(T),
          L =
            w && S && n.isValidElement(w)
              ? n.cloneElement(w, {
                  className: (0, i.Z)(k.iconWrapper, w.props.className),
                })
              : w;
        return (0, p.jsxs)(
          v,
          (0, r.Z)(
            {
              focusRipple: !b,
              className: (0, i.Z)(k.root, s),
              ref: t,
              role: "tab",
              "aria-selected": M,
              disabled: u,
              onClick: (e) => {
                !M && Z && Z(e, R), C && C(e);
              },
              onFocus: (e) => {
                B && !M && Z && Z(e, R), y && y(e);
              },
              ownerState: T,
              tabIndex: M ? 0 : -1,
            },
            N,
            {
              children: [
                "top" === x || "start" === x
                  ? (0, p.jsxs)(n.Fragment, { children: [L, S] })
                  : (0, p.jsxs)(n.Fragment, { children: [S, L] }),
                g,
              ],
            }
          )
        );
      });
    },
    11703: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return _;
        },
      });
      var l = o(63366),
        r = o(87462),
        n = o(67294),
        i = (o(59864), o(86010)),
        a = o(94780),
        s = o(90948),
        c = o(71657),
        d = o(2734),
        u = o(57144);
      let b;
      function f() {
        if (b) return b;
        const e = document.createElement("div"),
          t = document.createElement("div");
        return (
          (t.style.width = "10px"),
          (t.style.height = "1px"),
          e.appendChild(t),
          (e.dir = "rtl"),
          (e.style.fontSize = "14px"),
          (e.style.width = "4px"),
          (e.style.height = "1px"),
          (e.style.position = "absolute"),
          (e.style.top = "-1000px"),
          (e.style.overflow = "scroll"),
          document.body.appendChild(e),
          (b = "reverse"),
          e.scrollLeft > 0
            ? (b = "default")
            : ((e.scrollLeft = 1), 0 === e.scrollLeft && (b = "negative")),
          document.body.removeChild(e),
          b
        );
      }
      function h(e, t) {
        const o = e.scrollLeft;
        if ("rtl" !== t) return o;
        switch (f()) {
          case "negative":
            return e.scrollWidth - e.clientWidth + o;
          case "reverse":
            return e.scrollWidth - e.clientWidth - o;
          default:
            return o;
        }
      }
      function p(e) {
        return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
      }
      var m = o(5340),
        v = o(85893);
      const w = ["onChange"],
        x = {
          width: 99,
          height: 99,
          position: "absolute",
          top: -9999,
          overflow: "scroll",
        };
      var g = o(82066),
        S = (0, g.Z)(
          (0, v.jsx)("path", {
            d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z",
          }),
          "KeyboardArrowLeft"
        ),
        Z = (0, g.Z)(
          (0, v.jsx)("path", {
            d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z",
          }),
          "KeyboardArrowRight"
        ),
        C = o(49990),
        y = o(34867),
        M = o(1588);
      function B(e) {
        return (0, y.Z)("MuiTabScrollButton", e);
      }
      var W,
        R,
        E = (0, M.Z)("MuiTabScrollButton", [
          "root",
          "vertical",
          "horizontal",
          "disabled",
        ]);
      const N = ["className", "direction", "orientation", "disabled"],
        T = (0, s.ZP)(C.Z, {
          name: "MuiTabScrollButton",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [t.root, o.orientation && t[o.orientation]];
          },
        })(({ ownerState: e }) =>
          (0, r.Z)(
            {
              width: 40,
              flexShrink: 0,
              opacity: 0.8,
              [`&.${E.disabled}`]: { opacity: 0 },
            },
            "vertical" === e.orientation && {
              width: "100%",
              height: 40,
              "& svg": { transform: `rotate(${e.isRtl ? -90 : 90}deg)` },
            }
          )
        );
      var k = n.forwardRef(function (e, t) {
          const o = (0, c.Z)({ props: e, name: "MuiTabScrollButton" }),
            { className: n, direction: s } = o,
            u = (0, l.Z)(o, N),
            b = "rtl" === (0, d.Z)().direction,
            f = (0, r.Z)({ isRtl: b }, o),
            h = ((e) => {
              const { classes: t, orientation: o, disabled: l } = e,
                r = { root: ["root", o, l && "disabled"] };
              return (0, a.Z)(r, B, t);
            })(f);
          return (0,
          v.jsx)(T, (0, r.Z)({ component: "div", className: (0, i.Z)(h.root, n), ref: t, role: null, ownerState: f, tabIndex: null }, u, { children: "left" === s ? W || (W = (0, v.jsx)(S, { fontSize: "small" })) : R || (R = (0, v.jsx)(Z, { fontSize: "small" })) }));
        }),
        L = o(2068);
      function P(e) {
        return (0, y.Z)("MuiTabs", e);
      }
      var z = (0, M.Z)("MuiTabs", [
          "root",
          "vertical",
          "flexContainer",
          "flexContainerVertical",
          "centered",
          "scroller",
          "fixed",
          "scrollableX",
          "scrollableY",
          "hideScrollbar",
          "scrollButtons",
          "scrollButtonsHideMobile",
          "indicator",
        ]),
        F = o(8038);
      const A = [
          "aria-label",
          "aria-labelledby",
          "action",
          "centered",
          "children",
          "className",
          "component",
          "allowScrollButtonsMobile",
          "indicatorColor",
          "onChange",
          "orientation",
          "ScrollButtonComponent",
          "scrollButtons",
          "selectionFollowsFocus",
          "TabIndicatorProps",
          "TabScrollButtonProps",
          "textColor",
          "value",
          "variant",
          "visibleScrollbar",
        ],
        H = (e, t) =>
          e === t
            ? e.firstChild
            : t && t.nextElementSibling
            ? t.nextElementSibling
            : e.firstChild,
        j = (e, t) =>
          e === t
            ? e.lastChild
            : t && t.previousElementSibling
            ? t.previousElementSibling
            : e.lastChild,
        I = (e, t, o) => {
          let l = !1,
            r = o(e, t);
          for (; r; ) {
            if (r === e.firstChild) {
              if (l) return;
              l = !0;
            }
            const t = r.disabled || "true" === r.getAttribute("aria-disabled");
            if (r.hasAttribute("tabindex") && !t) return void r.focus();
            r = o(e, r);
          }
        },
        X = (0, s.ZP)("div", {
          name: "MuiTabs",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [
              { [`& .${z.scrollButtons}`]: t.scrollButtons },
              {
                [`& .${z.scrollButtons}`]:
                  o.scrollButtonsHideMobile && t.scrollButtonsHideMobile,
              },
              t.root,
              o.vertical && t.vertical,
            ];
          },
        })(({ ownerState: e, theme: t }) =>
          (0, r.Z)(
            {
              overflow: "hidden",
              minHeight: 48,
              WebkitOverflowScrolling: "touch",
              display: "flex",
            },
            e.vertical && { flexDirection: "column" },
            e.scrollButtonsHideMobile && {
              [`& .${z.scrollButtons}`]: {
                [t.breakpoints.down("sm")]: { display: "none" },
              },
            }
          )
        ),
        $ = (0, s.ZP)("div", {
          name: "MuiTabs",
          slot: "Scroller",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [
              t.scroller,
              o.fixed && t.fixed,
              o.hideScrollbar && t.hideScrollbar,
              o.scrollableX && t.scrollableX,
              o.scrollableY && t.scrollableY,
            ];
          },
        })(({ ownerState: e }) =>
          (0, r.Z)(
            {
              position: "relative",
              display: "inline-block",
              flex: "1 1 auto",
              whiteSpace: "nowrap",
            },
            e.fixed && { overflowX: "hidden", width: "100%" },
            e.hideScrollbar && {
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            },
            e.scrollableX && { overflowX: "auto", overflowY: "hidden" },
            e.scrollableY && { overflowY: "auto", overflowX: "hidden" }
          )
        ),
        Y = (0, s.ZP)("div", {
          name: "MuiTabs",
          slot: "FlexContainer",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [
              t.flexContainer,
              o.vertical && t.flexContainerVertical,
              o.centered && t.centered,
            ];
          },
        })(({ ownerState: e }) =>
          (0, r.Z)(
            { display: "flex" },
            e.vertical && { flexDirection: "column" },
            e.centered && { justifyContent: "center" }
          )
        ),
        D = (0, s.ZP)("span", {
          name: "MuiTabs",
          slot: "Indicator",
          overridesResolver: (e, t) => t.indicator,
        })(({ ownerState: e, theme: t }) =>
          (0, r.Z)(
            {
              position: "absolute",
              height: 2,
              bottom: 0,
              width: "100%",
              transition: t.transitions.create(),
            },
            "primary" === e.indicatorColor && {
              backgroundColor: (t.vars || t).palette.primary.main,
            },
            "secondary" === e.indicatorColor && {
              backgroundColor: (t.vars || t).palette.secondary.main,
            },
            e.vertical && { height: "100%", width: 2, right: 0 }
          )
        ),
        V = (0, s.ZP)(
          function (e) {
            const { onChange: t } = e,
              o = (0, l.Z)(e, w),
              i = n.useRef(),
              a = n.useRef(null),
              s = () => {
                i.current = a.current.offsetHeight - a.current.clientHeight;
              };
            return (
              n.useEffect(() => {
                const e = (0, u.Z)(() => {
                    const e = i.current;
                    s(), e !== i.current && t(i.current);
                  }),
                  o = (0, m.Z)(a.current);
                return (
                  o.addEventListener("resize", e),
                  () => {
                    e.clear(), o.removeEventListener("resize", e);
                  }
                );
              }, [t]),
              n.useEffect(() => {
                s(), t(i.current);
              }, [t]),
              (0, v.jsx)("div", (0, r.Z)({ style: x, ref: a }, o))
            );
          },
          { name: "MuiTabs", slot: "ScrollbarSize" }
        )({
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }),
        O = {};
      var _ = n.forwardRef(function (e, t) {
        const o = (0, c.Z)({ props: e, name: "MuiTabs" }),
          s = (0, d.Z)(),
          b = "rtl" === s.direction,
          {
            "aria-label": w,
            "aria-labelledby": x,
            action: g,
            centered: S = !1,
            children: Z,
            className: C,
            component: y = "div",
            allowScrollButtonsMobile: M = !1,
            indicatorColor: B = "primary",
            onChange: W,
            orientation: R = "horizontal",
            ScrollButtonComponent: E = k,
            scrollButtons: N = "auto",
            selectionFollowsFocus: T,
            TabIndicatorProps: z = {},
            TabScrollButtonProps: _ = {},
            textColor: q = "primary",
            value: K,
            variant: G = "standard",
            visibleScrollbar: U = !1,
          } = o,
          J = (0, l.Z)(o, A),
          Q = "scrollable" === G,
          ee = "vertical" === R,
          te = ee ? "scrollTop" : "scrollLeft",
          oe = ee ? "top" : "left",
          le = ee ? "bottom" : "right",
          re = ee ? "clientHeight" : "clientWidth",
          ne = ee ? "height" : "width",
          ie = (0, r.Z)({}, o, {
            component: y,
            allowScrollButtonsMobile: M,
            indicatorColor: B,
            orientation: R,
            vertical: ee,
            scrollButtons: N,
            textColor: q,
            variant: G,
            visibleScrollbar: U,
            fixed: !Q,
            hideScrollbar: Q && !U,
            scrollableX: Q && !ee,
            scrollableY: Q && ee,
            centered: S && !Q,
            scrollButtonsHideMobile: !M,
          }),
          ae = ((e) => {
            const {
                vertical: t,
                fixed: o,
                hideScrollbar: l,
                scrollableX: r,
                scrollableY: n,
                centered: i,
                scrollButtonsHideMobile: s,
                classes: c,
              } = e,
              d = {
                root: ["root", t && "vertical"],
                scroller: [
                  "scroller",
                  o && "fixed",
                  l && "hideScrollbar",
                  r && "scrollableX",
                  n && "scrollableY",
                ],
                flexContainer: [
                  "flexContainer",
                  t && "flexContainerVertical",
                  i && "centered",
                ],
                indicator: ["indicator"],
                scrollButtons: [
                  "scrollButtons",
                  s && "scrollButtonsHideMobile",
                ],
                scrollableX: [r && "scrollableX"],
                hideScrollbar: [l && "hideScrollbar"],
              };
            return (0, a.Z)(d, P, c);
          })(ie);
        const [se, ce] = n.useState(!1),
          [de, ue] = n.useState(O),
          [be, fe] = n.useState({ start: !1, end: !1 }),
          [he, pe] = n.useState({ overflow: "hidden", scrollbarWidth: 0 }),
          me = new Map(),
          ve = n.useRef(null),
          we = n.useRef(null),
          xe = () => {
            const e = ve.current;
            let t, o;
            if (e) {
              const o = e.getBoundingClientRect();
              t = {
                clientWidth: e.clientWidth,
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop,
                scrollLeftNormalized: h(e, s.direction),
                scrollWidth: e.scrollWidth,
                top: o.top,
                bottom: o.bottom,
                left: o.left,
                right: o.right,
              };
            }
            if (e && !1 !== K) {
              const e = we.current.children;
              if (e.length > 0) {
                const t = e[me.get(K)];
                0, (o = t ? t.getBoundingClientRect() : null);
              }
            }
            return { tabsMeta: t, tabMeta: o };
          },
          ge = (0, L.Z)(() => {
            const { tabsMeta: e, tabMeta: t } = xe();
            let o,
              l = 0;
            if (ee) (o = "top"), t && e && (l = t.top - e.top + e.scrollTop);
            else if (((o = b ? "right" : "left"), t && e)) {
              const r = b
                ? e.scrollLeftNormalized + e.clientWidth - e.scrollWidth
                : e.scrollLeft;
              l = (b ? -1 : 1) * (t[o] - e[o] + r);
            }
            const r = { [o]: l, [ne]: t ? t[ne] : 0 };
            if (isNaN(de[o]) || isNaN(de[ne])) ue(r);
            else {
              const e = Math.abs(de[o] - r[o]),
                t = Math.abs(de[ne] - r[ne]);
              (e >= 1 || t >= 1) && ue(r);
            }
          }),
          Se = (e, { animation: t = !0 } = {}) => {
            t
              ? (function (e, t, o, l = {}, r = () => {}) {
                  const { ease: n = p, duration: i = 300 } = l;
                  let a = null;
                  const s = t[e];
                  let c = !1;
                  const d = () => {
                      c = !0;
                    },
                    u = (l) => {
                      if (c) return void r(new Error("Animation cancelled"));
                      null === a && (a = l);
                      const d = Math.min(1, (l - a) / i);
                      (t[e] = n(d) * (o - s) + s),
                        d >= 1
                          ? requestAnimationFrame(() => {
                              r(null);
                            })
                          : requestAnimationFrame(u);
                    };
                  s === o
                    ? r(new Error("Element already at target position"))
                    : requestAnimationFrame(u);
                })(te, ve.current, e, {
                  duration: s.transitions.duration.standard,
                })
              : (ve.current[te] = e);
          },
          Ze = (e) => {
            let t = ve.current[te];
            ee
              ? (t += e)
              : ((t += e * (b ? -1 : 1)),
                (t *= b && "reverse" === f() ? -1 : 1)),
              Se(t);
          },
          Ce = () => {
            const e = ve.current[re];
            let t = 0;
            const o = Array.from(we.current.children);
            for (let l = 0; l < o.length; l += 1) {
              const r = o[l];
              if (t + r[re] > e) {
                0 === l && (t = e);
                break;
              }
              t += r[re];
            }
            return t;
          },
          ye = () => {
            Ze(-1 * Ce());
          },
          Me = () => {
            Ze(Ce());
          },
          Be = n.useCallback((e) => {
            pe({ overflow: null, scrollbarWidth: e });
          }, []),
          We = (0, L.Z)((e) => {
            const { tabsMeta: t, tabMeta: o } = xe();
            if (o && t)
              if (o[oe] < t[oe]) {
                const l = t[te] + (o[oe] - t[oe]);
                Se(l, { animation: e });
              } else if (o[le] > t[le]) {
                const l = t[te] + (o[le] - t[le]);
                Se(l, { animation: e });
              }
          }),
          Re = (0, L.Z)(() => {
            if (Q && !1 !== N) {
              const {
                scrollTop: e,
                scrollHeight: t,
                clientHeight: o,
                scrollWidth: l,
                clientWidth: r,
              } = ve.current;
              let n, i;
              if (ee) (n = e > 1), (i = e < t - o - 1);
              else {
                const e = h(ve.current, s.direction);
                (n = b ? e < l - r - 1 : e > 1),
                  (i = b ? e > 1 : e < l - r - 1);
              }
              (n === be.start && i === be.end) || fe({ start: n, end: i });
            }
          });
        n.useEffect(() => {
          const e = (0, u.Z)(() => {
              ge(), Re();
            }),
            t = (0, m.Z)(ve.current);
          let o;
          return (
            t.addEventListener("resize", e),
            "undefined" !== typeof ResizeObserver &&
              ((o = new ResizeObserver(e)),
              Array.from(we.current.children).forEach((e) => {
                o.observe(e);
              })),
            () => {
              e.clear(),
                t.removeEventListener("resize", e),
                o && o.disconnect();
            }
          );
        }, [ge, Re]);
        const Ee = n.useMemo(
          () =>
            (0, u.Z)(() => {
              Re();
            }),
          [Re]
        );
        n.useEffect(
          () => () => {
            Ee.clear();
          },
          [Ee]
        ),
          n.useEffect(() => {
            ce(!0);
          }, []),
          n.useEffect(() => {
            ge(), Re();
          }),
          n.useEffect(() => {
            We(O !== de);
          }, [We, de]),
          n.useImperativeHandle(
            g,
            () => ({ updateIndicator: ge, updateScrollButtons: Re }),
            [ge, Re]
          );
        const Ne = (0, v.jsx)(
          D,
          (0, r.Z)({}, z, {
            className: (0, i.Z)(ae.indicator, z.className),
            ownerState: ie,
            style: (0, r.Z)({}, de, z.style),
          })
        );
        let Te = 0;
        const ke = n.Children.map(Z, (e) => {
            if (!n.isValidElement(e)) return null;
            const t = void 0 === e.props.value ? Te : e.props.value;
            me.set(t, Te);
            const o = t === K;
            return (
              (Te += 1),
              n.cloneElement(
                e,
                (0, r.Z)(
                  {
                    fullWidth: "fullWidth" === G,
                    indicator: o && !se && Ne,
                    selected: o,
                    selectionFollowsFocus: T,
                    onChange: W,
                    textColor: q,
                    value: t,
                  },
                  1 !== Te || !1 !== K || e.props.tabIndex
                    ? {}
                    : { tabIndex: 0 }
                )
              )
            );
          }),
          Le = (() => {
            const e = {};
            e.scrollbarSizeListener = Q
              ? (0, v.jsx)(V, {
                  onChange: Be,
                  className: (0, i.Z)(ae.scrollableX, ae.hideScrollbar),
                })
              : null;
            const t = be.start || be.end,
              o = Q && (("auto" === N && t) || !0 === N);
            return (
              (e.scrollButtonStart = o
                ? (0, v.jsx)(
                    E,
                    (0, r.Z)(
                      {
                        orientation: R,
                        direction: b ? "right" : "left",
                        onClick: ye,
                        disabled: !be.start,
                      },
                      _,
                      { className: (0, i.Z)(ae.scrollButtons, _.className) }
                    )
                  )
                : null),
              (e.scrollButtonEnd = o
                ? (0, v.jsx)(
                    E,
                    (0, r.Z)(
                      {
                        orientation: R,
                        direction: b ? "left" : "right",
                        onClick: Me,
                        disabled: !be.end,
                      },
                      _,
                      { className: (0, i.Z)(ae.scrollButtons, _.className) }
                    )
                  )
                : null),
              e
            );
          })();
        return (0, v.jsxs)(
          X,
          (0, r.Z)(
            { className: (0, i.Z)(ae.root, C), ownerState: ie, ref: t, as: y },
            J,
            {
              children: [
                Le.scrollButtonStart,
                Le.scrollbarSizeListener,
                (0, v.jsxs)($, {
                  className: ae.scroller,
                  ownerState: ie,
                  style: {
                    overflow: he.overflow,
                    [ee ? "margin" + (b ? "Left" : "Right") : "marginBottom"]: U
                      ? void 0
                      : -he.scrollbarWidth,
                  },
                  ref: ve,
                  onScroll: Ee,
                  children: [
                    (0, v.jsx)(Y, {
                      "aria-label": w,
                      "aria-labelledby": x,
                      "aria-orientation": "vertical" === R ? "vertical" : null,
                      className: ae.flexContainer,
                      ownerState: ie,
                      onKeyDown: (e) => {
                        const t = we.current,
                          o = (0, F.Z)(t).activeElement;
                        if ("tab" !== o.getAttribute("role")) return;
                        let l = "horizontal" === R ? "ArrowLeft" : "ArrowUp",
                          r = "horizontal" === R ? "ArrowRight" : "ArrowDown";
                        switch (
                          ("horizontal" === R &&
                            b &&
                            ((l = "ArrowRight"), (r = "ArrowLeft")),
                          e.key)
                        ) {
                          case l:
                            e.preventDefault(), I(t, o, j);
                            break;
                          case r:
                            e.preventDefault(), I(t, o, H);
                            break;
                          case "Home":
                            e.preventDefault(), I(t, null, H);
                            break;
                          case "End":
                            e.preventDefault(), I(t, null, j);
                        }
                      },
                      ref: we,
                      role: "tablist",
                      children: ke,
                    }),
                    se && Ne,
                  ],
                }),
                Le.scrollButtonEnd,
              ],
            }
          )
        );
      });
    },
  },
]);
