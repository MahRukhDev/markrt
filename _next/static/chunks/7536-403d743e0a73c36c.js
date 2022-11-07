"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7536],
  {
    87536: function (e, t, r) {
      r.d(t, {
        Gc: function () {
          return E;
        },
        KN: function () {
          return $;
        },
        Qr: function () {
          return P;
        },
        RV: function () {
          return O;
        },
        U2: function () {
          return m;
        },
        bc: function () {
          return I;
        },
        cI: function () {
          return De;
        },
        t8: function () {
          return K;
        },
      });
      var s = r(67294),
        a = (e) => "checkbox" === e.type,
        n = (e) => e instanceof Date,
        i = (e) => null == e;
      const o = (e) => "object" === typeof e;
      var u = (e) => !i(e) && !Array.isArray(e) && o(e) && !n(e),
        l = (e) =>
          u(e) && e.target
            ? a(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        c = (e, t) =>
          e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
        d = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        f = (e) => void 0 === e,
        m = (e, t, r) => {
          if (!t || !u(e)) return r;
          const s = d(t.split(/[,[\].]+?/)).reduce(
            (e, t) => (i(e) ? e : e[t]),
            e
          );
          return f(s) || s === e ? (f(e[t]) ? r : e[t]) : s;
        };
      const y = "blur",
        h = "focusout",
        g = "change",
        v = "onBlur",
        b = "onChange",
        p = "onSubmit",
        _ = "onTouched",
        V = "all",
        A = "max",
        w = "min",
        F = "maxLength",
        S = "minLength",
        k = "pattern",
        x = "required",
        D = "validate",
        C = s.createContext(null),
        E = () => s.useContext(C),
        O = (e) => {
          const { children: t, ...r } = e;
          return s.createElement(C.Provider, { value: r }, e.children);
        };
      var j = (e, t, r, s = !0) => {
          const a = {};
          for (const n in e)
            Object.defineProperty(a, n, {
              get: () => {
                const a = n;
                return t[a] !== V && (t[a] = !s || V), r && (r[a] = !0), e[a];
              },
            });
          return a;
        },
        T = (e) => u(e) && !Object.keys(e).length,
        U = (e, t, r) => {
          const { name: s, ...a } = e;
          return (
            T(a) ||
            Object.keys(a).length >= Object.keys(t).length ||
            Object.keys(a).find((e) => t[e] === (!r || V))
          );
        },
        N = (e) => (Array.isArray(e) ? e : [e]),
        B = (e, t, r) =>
          r && t
            ? e === t
            : !e ||
              !t ||
              e === t ||
              N(e).some((e) => e && (e.startsWith(t) || t.startsWith(e)));
      function L(e) {
        const t = s.useRef(e);
        (t.current = e),
          s.useEffect(() => {
            const r =
              !e.disabled &&
              t.current.subject.subscribe({ next: t.current.callback });
            return () =>
              ((e) => {
                e && e.unsubscribe();
              })(r);
          }, [e.disabled]);
      }
      var M = (e) => "string" === typeof e,
        R = (e, t, r, s) => {
          const a = Array.isArray(e);
          return M(e)
            ? (s && t.watch.add(e), m(r, e))
            : a
            ? e.map((e) => (s && t.watch.add(e), m(r, e)))
            : (s && (t.watchAll = !0), r);
        },
        q = (e) => "function" === typeof e,
        W = (e) => {
          for (const t in e) if (q(e[t])) return !0;
          return !1;
        };
      function I(e) {
        const t = E(),
          { name: r, control: a = t.control, shouldUnregister: n } = e,
          i = c(a._names.array, r),
          o = (function (e) {
            const t = E(),
              {
                control: r = t.control,
                name: a,
                defaultValue: n,
                disabled: i,
                exact: o,
              } = e || {},
              l = s.useRef(a);
            l.current = a;
            const c = s.useCallback(
              (e) => {
                if (B(l.current, e.name, o)) {
                  const t = R(l.current, r._names, e.values || r._formValues);
                  m(
                    f(l.current) || (u(t) && !W(t))
                      ? { ...t }
                      : Array.isArray(t)
                      ? [...t]
                      : f(t)
                      ? n
                      : t
                  );
                }
              },
              [r, o, n]
            );
            L({ disabled: i, subject: r._subjects.watch, callback: c });
            const [d, m] = s.useState(f(n) ? r._getWatch(a) : n);
            return (
              s.useEffect(() => {
                r._removeUnmounted();
              }),
              d
            );
          })({
            control: a,
            name: r,
            defaultValue: m(
              a._formValues,
              r,
              m(a._defaultValues, r, e.defaultValue)
            ),
            exact: !0,
          }),
          d = (function (e) {
            const t = E(),
              {
                control: r = t.control,
                disabled: a,
                name: n,
                exact: i,
              } = e || {},
              [o, u] = s.useState(r._formState),
              l = s.useRef({
                isDirty: !1,
                dirtyFields: !1,
                touchedFields: !1,
                isValidating: !1,
                isValid: !1,
                errors: !1,
              }),
              c = s.useRef(n),
              d = s.useRef(!0);
            return (
              (c.current = n),
              L({
                disabled: a,
                callback: s.useCallback(
                  (e) =>
                    d.current &&
                    B(c.current, e.name, i) &&
                    U(e, l.current) &&
                    u({ ...r._formState, ...e }),
                  [r, i]
                ),
                subject: r._subjects.state,
              }),
              s.useEffect(
                () => (
                  (d.current = !0),
                  () => {
                    d.current = !1;
                  }
                ),
                []
              ),
              j(o, r._proxyFormState, l.current, !1)
            );
          })({ control: a, name: r }),
          h = s.useRef(a.register(r, { ...e.rules, value: o }));
        return (
          s.useEffect(() => {
            const e = (e, t) => {
              const r = m(a._fields, e);
              r && (r._f.mount = t);
            };
            return (
              e(r, !0),
              () => {
                const t = a._options.shouldUnregister || n;
                (i ? t && !a._stateFlags.action : t)
                  ? a.unregister(r)
                  : e(r, !1);
              }
            );
          }, [r, a, i, n]),
          {
            field: {
              name: r,
              value: o,
              onChange: s.useCallback(
                (e) => {
                  h.current.onChange({
                    target: { value: l(e), name: r },
                    type: g,
                  });
                },
                [r]
              ),
              onBlur: s.useCallback(() => {
                h.current.onBlur({
                  target: { value: m(a._formValues, r), name: r },
                  type: y,
                });
              }, [r, a]),
              ref: s.useCallback(
                (e) => {
                  const t = m(a._fields, r);
                  e &&
                    t &&
                    e.focus &&
                    (t._f.ref = {
                      focus: () => e.focus(),
                      setCustomValidity: (t) => e.setCustomValidity(t),
                      reportValidity: () => e.reportValidity(),
                    });
                },
                [r, a._fields]
              ),
            },
            formState: d,
            fieldState: Object.defineProperties(
              {},
              {
                invalid: { get: () => !!m(d.errors, r) },
                isDirty: { get: () => !!m(d.dirtyFields, r) },
                isTouched: { get: () => !!m(d.touchedFields, r) },
                error: { get: () => m(d.errors, r) },
              }
            ),
          }
        );
      }
      const P = (e) => e.render(I(e));
      var $ = (e, t, r, s, a) =>
          t
            ? {
                ...r[e],
                types: {
                  ...(r[e] && r[e].types ? r[e].types : {}),
                  [s]: a || !0,
                },
              }
            : {},
        H = (e) => /^\w*$/.test(e),
        G = (e) => d(e.replace(/["|']|\]/g, "").split(/\.|\[/));
      function K(e, t, r) {
        let s = -1;
        const a = H(t) ? [t] : G(t),
          n = a.length,
          i = n - 1;
        for (; ++s < n; ) {
          const t = a[s];
          let n = r;
          if (s !== i) {
            const r = e[t];
            n = u(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
          }
          (e[t] = n), (e = e[t]);
        }
        return e;
      }
      const Q = (e, t, r) => {
        for (const s of r || Object.keys(e)) {
          const r = m(e, s);
          if (r) {
            const { _f: e, ...s } = r;
            if (e && t(e.name)) {
              if (e.ref.focus && f(e.ref.focus())) break;
              if (e.refs) {
                e.refs[0].focus();
                break;
              }
            } else u(s) && Q(s, t);
          }
        }
      };
      var z = (e, t, r) =>
        !r &&
        (t.watchAll ||
          t.watch.has(e) ||
          [...t.watch].some(
            (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))
          ));
      var J =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.HTMLElement &&
        "undefined" !== typeof document;
      function X(e) {
        let t;
        const r = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
          if (
            (J && (e instanceof Blob || e instanceof FileList)) ||
            (!r && !u(e))
          )
            return e;
          t = r ? [] : {};
          for (const r in e) {
            if (q(e[r])) {
              t = e;
              break;
            }
            t[r] = X(e[r]);
          }
        }
        return t;
      }
      function Y(e, t) {
        const r = H(t) ? [t] : G(t),
          s =
            1 == r.length
              ? e
              : (function (e, t) {
                  const r = t.slice(0, -1).length;
                  let s = 0;
                  for (; s < r; ) e = f(e) ? s++ : e[t[s++]];
                  return e;
                })(e, r),
          a = r[r.length - 1];
        let n;
        s && delete s[a];
        for (let i = 0; i < r.slice(0, -1).length; i++) {
          let t,
            s = -1;
          const a = r.slice(0, -(i + 1)),
            o = a.length - 1;
          for (i > 0 && (n = e); ++s < a.length; ) {
            const r = a[s];
            (t = t ? t[r] : e[r]),
              o === s &&
                ((u(t) && T(t)) ||
                  (Array.isArray(t) && !t.filter((e) => !f(e)).length)) &&
                (n ? delete n[r] : delete e[r]),
              (n = t);
          }
        }
        return e;
      }
      function Z() {
        let e = [];
        return {
          get observers() {
            return e;
          },
          next: (t) => {
            for (const r of e) r.next(t);
          },
          subscribe: (t) => (
            e.push(t),
            {
              unsubscribe: () => {
                e = e.filter((e) => e !== t);
              },
            }
          ),
          unsubscribe: () => {
            e = [];
          },
        };
      }
      var ee = (e) => i(e) || !o(e);
      function te(e, t) {
        if (ee(e) || ee(t)) return e === t;
        if (n(e) && n(t)) return e.getTime() === t.getTime();
        const r = Object.keys(e),
          s = Object.keys(t);
        if (r.length !== s.length) return !1;
        for (const a of r) {
          const r = e[a];
          if (!s.includes(a)) return !1;
          if ("ref" !== a) {
            const e = t[a];
            if (
              (n(r) && n(e)) ||
              (u(r) && u(e)) ||
              (Array.isArray(r) && Array.isArray(e))
                ? !te(r, e)
                : r !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var re = (e) => ({
          isOnSubmit: !e || e === p,
          isOnBlur: e === v,
          isOnChange: e === b,
          isOnAll: e === V,
          isOnTouch: e === _,
        }),
        se = (e) => "boolean" === typeof e,
        ae = (e) => "file" === e.type,
        ne = (e) => {
          const t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        ie = (e) => "select-multiple" === e.type,
        oe = (e) => "radio" === e.type,
        ue = (e) => ne(e) && e.isConnected;
      function le(e, t = {}) {
        const r = Array.isArray(e);
        if (u(e) || r)
          for (const s in e)
            Array.isArray(e[s]) || (u(e[s]) && !W(e[s]))
              ? ((t[s] = Array.isArray(e[s]) ? [] : {}), le(e[s], t[s]))
              : i(e[s]) || (t[s] = !0);
        return t;
      }
      function ce(e, t, r) {
        const s = Array.isArray(e);
        if (u(e) || s)
          for (const a in e)
            Array.isArray(e[a]) || (u(e[a]) && !W(e[a]))
              ? f(t) || ee(r[a])
                ? (r[a] = Array.isArray(e[a]) ? le(e[a], []) : { ...le(e[a]) })
                : ce(e[a], i(t) ? {} : t[a], r[a])
              : (r[a] = !te(e[a], t[a]));
        return r;
      }
      var de = (e, t) => ce(e, t, le(t));
      const fe = { value: !1, isValid: !1 },
        me = { value: !0, isValid: !0 };
      var ye = (e) => {
          if (Array.isArray(e)) {
            if (e.length > 1) {
              const t = e
                .filter((e) => e && e.checked && !e.disabled)
                .map((e) => e.value);
              return { value: t, isValid: !!t.length };
            }
            return e[0].checked && !e[0].disabled
              ? e[0].attributes && !f(e[0].attributes.value)
                ? f(e[0].value) || "" === e[0].value
                  ? me
                  : { value: e[0].value, isValid: !0 }
                : me
              : fe;
          }
          return fe;
        },
        he = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) =>
          f(e)
            ? e
            : t
            ? "" === e || i(e)
              ? NaN
              : +e
            : r && M(e)
            ? new Date(e)
            : s
            ? s(e)
            : e;
      const ge = { isValid: !1, value: null };
      var ve = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) =>
                t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e,
              ge
            )
          : ge;
      function be(e) {
        const t = e.ref;
        if (!(e.refs ? e.refs.every((e) => e.disabled) : t.disabled))
          return ae(t)
            ? t.files
            : oe(t)
            ? ve(e.refs).value
            : ie(t)
            ? [...t.selectedOptions].map(({ value: e }) => e)
            : a(t)
            ? ye(e.refs).value
            : he(f(t.value) ? e.ref.value : t.value, e);
      }
      var pe = (e) => e instanceof RegExp,
        _e = (e) =>
          f(e)
            ? void 0
            : pe(e)
            ? e.source
            : u(e)
            ? pe(e.value)
              ? e.value.source
              : e.value
            : e;
      function Ve(e, t, r) {
        const s = m(e, r);
        if (s || H(r)) return { error: s, name: r };
        const a = r.split(".");
        for (; a.length; ) {
          const s = a.join("."),
            n = m(t, s),
            i = m(e, s);
          if (n && !Array.isArray(n) && r !== s) return { name: r };
          if (i && i.type) return { name: s, error: i };
          a.pop();
        }
        return { name: r };
      }
      var Ae = (e) => M(e) || s.isValidElement(e);
      function we(e, t, r = "validate") {
        if (Ae(e) || (Array.isArray(e) && e.every(Ae)) || (se(e) && !e))
          return { type: r, message: Ae(e) ? e : "", ref: t };
      }
      var Fe = (e) => (u(e) && !pe(e) ? e : { value: e, message: "" }),
        Se = async (e, t, r, s) => {
          const {
            ref: n,
            refs: o,
            required: l,
            maxLength: c,
            minLength: d,
            min: f,
            max: m,
            pattern: y,
            validate: h,
            name: g,
            valueAsNumber: v,
            mount: b,
            disabled: p,
          } = e._f;
          if (!b || p) return {};
          const _ = o ? o[0] : n,
            V = (e) => {
              s &&
                _.reportValidity &&
                (_.setCustomValidity(se(e) ? "" : e || " "),
                _.reportValidity());
            },
            C = {},
            E = oe(n),
            O = a(n),
            j = E || O,
            U =
              ((v || ae(n)) && !n.value) ||
              "" === t ||
              (Array.isArray(t) && !t.length),
            N = $.bind(null, g, r, C),
            B = (e, t, r, s = F, a = S) => {
              const i = e ? t : r;
              C[g] = {
                type: e ? s : a,
                message: i,
                ref: n,
                ...N(e ? s : a, i),
              };
            };
          if (
            l &&
            ((!j && (U || i(t))) ||
              (se(t) && !t) ||
              (O && !ye(o).isValid) ||
              (E && !ve(o).isValid))
          ) {
            const { value: e, message: t } = Ae(l)
              ? { value: !!l, message: l }
              : Fe(l);
            if (e && ((C[g] = { type: x, message: t, ref: _, ...N(x, t) }), !r))
              return V(t), C;
          }
          if (!U && (!i(f) || !i(m))) {
            let e, s;
            const a = Fe(m),
              o = Fe(f);
            if (i(t) || isNaN(t)) {
              const r = n.valueAsDate || new Date(t);
              M(a.value) && (e = r > new Date(a.value)),
                M(o.value) && (s = r < new Date(o.value));
            } else {
              const r = n.valueAsNumber || +t;
              i(a.value) || (e = r > a.value), i(o.value) || (s = r < o.value);
            }
            if ((e || s) && (B(!!e, a.message, o.message, A, w), !r))
              return V(C[g].message), C;
          }
          if ((c || d) && !U && M(t)) {
            const e = Fe(c),
              s = Fe(d),
              a = !i(e.value) && t.length > e.value,
              n = !i(s.value) && t.length < s.value;
            if ((a || n) && (B(a, e.message, s.message), !r))
              return V(C[g].message), C;
          }
          if (y && !U && M(t)) {
            const { value: e, message: s } = Fe(y);
            if (
              pe(e) &&
              !t.match(e) &&
              ((C[g] = { type: k, message: s, ref: n, ...N(k, s) }), !r)
            )
              return V(s), C;
          }
          if (h)
            if (q(h)) {
              const e = we(await h(t), _);
              if (e && ((C[g] = { ...e, ...N(D, e.message) }), !r))
                return V(e.message), C;
            } else if (u(h)) {
              let e = {};
              for (const s in h) {
                if (!T(e) && !r) break;
                const a = we(await h[s](t), _, s);
                a &&
                  ((e = { ...a, ...N(s, a.message) }),
                  V(a.message),
                  r && (C[g] = e));
              }
              if (!T(e) && ((C[g] = { ref: _, ...e }), !r)) return C;
            }
          return V(!0), C;
        };
      const ke = { mode: p, reValidateMode: b, shouldFocusError: !0 };
      function xe(e = {}) {
        let t,
          r = { ...ke, ...e },
          s = {
            isDirty: !1,
            isValidating: !1,
            dirtyFields: {},
            isSubmitted: !1,
            submitCount: 0,
            touchedFields: {},
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            errors: {},
          },
          o = {},
          u = X(r.defaultValues) || {},
          g = r.shouldUnregister ? {} : X(u),
          v = { action: !1, mount: !1, watch: !1 },
          b = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
          },
          p = 0,
          _ = {};
        const A = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1,
          },
          w = { watch: Z(), array: Z(), state: Z() },
          F = re(r.mode),
          S = re(r.reValidateMode),
          k = r.criteriaMode === V,
          x = async (e) => {
            let t = !1;
            return (
              A.isValid &&
                ((t = r.resolver ? T((await O()).errors) : await j(o, !0)),
                e ||
                  t === s.isValid ||
                  ((s.isValid = t), w.state.next({ isValid: t }))),
              t
            );
          },
          D = (e, t, r, s) => {
            const a = m(o, e);
            if (a) {
              const n = m(g, e, f(r) ? m(u, e) : r);
              f(n) || (s && s.defaultChecked) || t
                ? K(g, e, t ? n : be(a._f))
                : L(e, n),
                v.mount && x();
            }
          },
          C = (e, t, r, a, n) => {
            let i = !1;
            const o = { name: e },
              l = m(s.touchedFields, e);
            if (A.isDirty) {
              const e = s.isDirty;
              (s.isDirty = o.isDirty = U()), (i = e !== o.isDirty);
            }
            if (A.dirtyFields && (!r || a)) {
              const r = m(s.dirtyFields, e);
              te(m(u, e), t) ? Y(s.dirtyFields, e) : K(s.dirtyFields, e, !0),
                (o.dirtyFields = s.dirtyFields),
                (i = i || r !== m(s.dirtyFields, e));
            }
            return (
              r &&
                !l &&
                (K(s.touchedFields, e, r),
                (o.touchedFields = s.touchedFields),
                (i = i || (A.touchedFields && l !== r))),
              i && n && w.state.next(o),
              i ? o : {}
            );
          },
          E = async (r, a, n, i) => {
            const o = m(s.errors, r),
              u = A.isValid && s.isValid !== a;
            var l;
            if (
              (e.delayError && n
                ? ((l = () =>
                    ((e, t) => {
                      K(s.errors, e, t), w.state.next({ errors: s.errors });
                    })(r, n)),
                  (t = (e) => {
                    clearTimeout(p), (p = window.setTimeout(l, e));
                  }),
                  t(e.delayError))
                : (clearTimeout(p),
                  (t = null),
                  n ? K(s.errors, r, n) : Y(s.errors, r)),
              (n ? !te(o, n) : o) || !T(i) || u)
            ) {
              const e = {
                ...i,
                ...(u ? { isValid: a } : {}),
                errors: s.errors,
                name: r,
              };
              (s = { ...s, ...e }), w.state.next(e);
            }
            _[r]--,
              A.isValidating &&
                !Object.values(_).some((e) => e) &&
                (w.state.next({ isValidating: !1 }), (_ = {}));
          },
          O = async (e) =>
            r.resolver
              ? await r.resolver(
                  { ...g },
                  r.context,
                  ((e, t, r, s) => {
                    const a = {};
                    for (const n of e) {
                      const e = m(t, n);
                      e && K(a, n, e._f);
                    }
                    return {
                      criteriaMode: r,
                      names: [...e],
                      fields: a,
                      shouldUseNativeValidation: s,
                    };
                  })(
                    e || b.mount,
                    o,
                    r.criteriaMode,
                    r.shouldUseNativeValidation
                  )
                )
              : {},
          j = async (e, t, a = { valid: !0 }) => {
            for (const n in e) {
              const i = e[n];
              if (i) {
                const { _f: e, ...n } = i;
                if (e) {
                  const n = await Se(
                    i,
                    m(g, e.name),
                    k,
                    r.shouldUseNativeValidation
                  );
                  if (n[e.name] && ((a.valid = !1), t)) break;
                  t ||
                    (n[e.name]
                      ? K(s.errors, e.name, n[e.name])
                      : Y(s.errors, e.name));
                }
                n && (await j(n, t, a));
              }
            }
            return a.valid;
          },
          U = (e, t) => (e && t && K(g, e, t), !te(H(), u)),
          B = (e, t, r) => {
            const s = { ...(v.mount ? g : f(t) ? u : M(e) ? { [e]: t } : t) };
            return R(e, b, s, r);
          },
          L = (e, t, r = {}) => {
            const s = m(o, e);
            let n = t;
            if (s) {
              const r = s._f;
              r &&
                (!r.disabled && K(g, e, he(t, r)),
                (n = J && ne(r.ref) && i(t) ? "" : t),
                ie(r.ref)
                  ? [...r.ref.options].forEach(
                      (e) => (e.selected = n.includes(e.value))
                    )
                  : r.refs
                  ? a(r.ref)
                    ? r.refs.length > 1
                      ? r.refs.forEach(
                          (e) =>
                            !e.disabled &&
                            (e.checked = Array.isArray(n)
                              ? !!n.find((t) => t === e.value)
                              : n === e.value)
                        )
                      : r.refs[0] && (r.refs[0].checked = !!n)
                    : r.refs.forEach((e) => (e.checked = e.value === n))
                  : ae(r.ref)
                  ? (r.ref.value = "")
                  : ((r.ref.value = n),
                    r.ref.type || w.watch.next({ name: e })));
            }
            (r.shouldDirty || r.shouldTouch) &&
              C(e, n, r.shouldTouch, r.shouldDirty, !0),
              r.shouldValidate && $(e);
          },
          W = (e, t, r) => {
            for (const s in t) {
              const a = t[s],
                i = `${e}.${s}`,
                u = m(o, i);
              (!b.array.has(e) && ee(a) && (!u || u._f)) || n(a)
                ? L(i, a, r)
                : W(i, a, r);
            }
          },
          I = (e, t, r = {}) => {
            const a = m(o, e),
              n = b.array.has(e),
              l = X(t);
            K(g, e, l),
              n
                ? (w.array.next({ name: e, values: g }),
                  (A.isDirty || A.dirtyFields) &&
                    r.shouldDirty &&
                    ((s.dirtyFields = de(u, g)),
                    w.state.next({
                      name: e,
                      dirtyFields: s.dirtyFields,
                      isDirty: U(e, l),
                    })))
                : !a || a._f || i(l)
                ? L(e, l, r)
                : W(e, l, r),
              z(e, b) && w.state.next({}),
              w.watch.next({ name: e });
          },
          P = async (e) => {
            const a = e.target;
            let n = a.name;
            const i = m(o, n);
            if (i) {
              let c, d;
              const f = a.type ? be(i._f) : l(e),
                v = e.type === y || e.type === h,
                p =
                  (!(
                    (u = i._f).mount &&
                    (u.required ||
                      u.min ||
                      u.max ||
                      u.maxLength ||
                      u.minLength ||
                      u.pattern ||
                      u.validate)
                  ) &&
                    !r.resolver &&
                    !m(s.errors, n) &&
                    !i._f.deps) ||
                  ((e, t, r, s, a) =>
                    !a.isOnAll &&
                    (!r && a.isOnTouch
                      ? !(t || e)
                      : (r ? s.isOnBlur : a.isOnBlur)
                      ? !e
                      : !(r ? s.isOnChange : a.isOnChange) || e))(
                    v,
                    m(s.touchedFields, n),
                    s.isSubmitted,
                    S,
                    F
                  ),
                V = z(n, b, v);
              K(g, n, f),
                v
                  ? (i._f.onBlur && i._f.onBlur(e), t && t(0))
                  : i._f.onChange && i._f.onChange(e);
              const A = C(n, f, v, !1),
                D = !T(A) || V;
              if ((!v && w.watch.next({ name: n, type: e.type }), p))
                return D && w.state.next({ name: n, ...(V ? {} : A) });
              if (
                (!v && V && w.state.next({}),
                (_[n] = (_[n], 1)),
                w.state.next({ isValidating: !0 }),
                r.resolver)
              ) {
                const { errors: e } = await O([n]),
                  t = Ve(s.errors, o, n),
                  r = Ve(e, o, t.name || n);
                (c = r.error), (n = r.name), (d = T(e));
              } else
                (c = (await Se(i, m(g, n), k, r.shouldUseNativeValidation))[n]),
                  (d = await x(!0));
              i._f.deps && $(i._f.deps), E(n, d, c, A);
            }
            var u;
          },
          $ = async (e, t = {}) => {
            let a, n;
            const i = N(e);
            if ((w.state.next({ isValidating: !0 }), r.resolver)) {
              const t = await (async (e) => {
                const { errors: t } = await O();
                if (e)
                  for (const r of e) {
                    const e = m(t, r);
                    e ? K(s.errors, r, e) : Y(s.errors, r);
                  }
                else s.errors = t;
                return t;
              })(f(e) ? e : i);
              (a = T(t)), (n = e ? !i.some((e) => m(t, e)) : a);
            } else
              e
                ? ((n = (
                    await Promise.all(
                      i.map(async (e) => {
                        const t = m(o, e);
                        return await j(t && t._f ? { [e]: t } : t);
                      })
                    )
                  ).every(Boolean)),
                  (n || s.isValid) && x())
                : (n = a = await j(o));
            return (
              w.state.next({
                ...(!M(e) || (A.isValid && a !== s.isValid) ? {} : { name: e }),
                ...(r.resolver ? { isValid: a } : {}),
                errors: s.errors,
                isValidating: !1,
              }),
              t.shouldFocus &&
                !n &&
                Q(o, (e) => m(s.errors, e), e ? i : b.mount),
              n
            );
          },
          H = (e) => {
            const t = { ...u, ...(v.mount ? g : {}) };
            return f(e) ? t : M(e) ? m(t, e) : e.map((e) => m(t, e));
          },
          G = (e, t) => ({
            invalid: !!m((t || s).errors, e),
            isDirty: !!m((t || s).dirtyFields, e),
            isTouched: !!m((t || s).touchedFields, e),
            error: m((t || s).errors, e),
          }),
          le = (e, t = {}) => {
            for (const a of e ? N(e) : b.mount)
              b.mount.delete(a),
                b.array.delete(a),
                m(o, a) &&
                  (t.keepValue || (Y(o, a), Y(g, a)),
                  !t.keepError && Y(s.errors, a),
                  !t.keepDirty && Y(s.dirtyFields, a),
                  !t.keepTouched && Y(s.touchedFields, a),
                  !r.shouldUnregister && !t.keepDefaultValue && Y(u, a));
            w.watch.next({}),
              w.state.next({ ...s, ...(t.keepDirty ? { isDirty: U() } : {}) }),
              !t.keepIsValid && x();
          },
          ce = (e, t = {}) => {
            let s = m(o, e);
            const n = se(t.disabled);
            return (
              K(o, e, {
                _f: {
                  ...(s && s._f ? s._f : { ref: { name: e } }),
                  name: e,
                  mount: !0,
                  ...t,
                },
              }),
              b.mount.add(e),
              s
                ? n && K(g, e, t.disabled ? void 0 : m(g, e, be(s._f)))
                : D(e, !0, t.value),
              {
                ...(n ? { disabled: t.disabled } : {}),
                ...(r.shouldUseNativeValidation
                  ? {
                      required: !!t.required,
                      min: _e(t.min),
                      max: _e(t.max),
                      minLength: _e(t.minLength),
                      maxLength: _e(t.maxLength),
                      pattern: _e(t.pattern),
                    }
                  : {}),
                name: e,
                onChange: P,
                onBlur: P,
                ref: (n) => {
                  if (n) {
                    ce(e, t), (s = m(o, e));
                    const r =
                        (f(n.value) &&
                          n.querySelectorAll &&
                          n.querySelectorAll("input,select,textarea")[0]) ||
                        n,
                      i = ((e) => oe(e) || a(e))(r),
                      l = s._f.refs || [];
                    if (i ? l.find((e) => e === r) : r === s._f.ref) return;
                    K(o, e, {
                      _f: {
                        ...s._f,
                        ...(i
                          ? {
                              refs: [
                                ...l.filter(ue),
                                r,
                                ...(Array.isArray(m(u, e)) ? [{}] : []),
                              ],
                              ref: { type: r.type, name: e },
                            }
                          : { ref: r }),
                      },
                    }),
                      D(e, !1, void 0, r);
                  } else
                    (s = m(o, e, {})),
                      s._f && (s._f.mount = !1),
                      (r.shouldUnregister || t.shouldUnregister) &&
                        (!c(b.array, e) || !v.action) &&
                        b.unMount.add(e);
                },
              }
            );
          };
        return {
          control: {
            register: ce,
            unregister: le,
            getFieldState: G,
            _executeSchema: O,
            _getWatch: B,
            _getDirty: U,
            _updateValid: x,
            _removeUnmounted: () => {
              for (const e of b.unMount) {
                const t = m(o, e);
                t &&
                  (t._f.refs
                    ? t._f.refs.every((e) => !ue(e))
                    : !ue(t._f.ref)) &&
                  le(e);
              }
              b.unMount = new Set();
            },
            _updateFieldArray: (e, t = [], r, a, n = !0, i = !0) => {
              if (a && r) {
                if (((v.action = !0), i && Array.isArray(m(o, e)))) {
                  const t = r(m(o, e), a.argA, a.argB);
                  n && K(o, e, t);
                }
                if (A.errors && i && Array.isArray(m(s.errors, e))) {
                  const t = r(m(s.errors, e), a.argA, a.argB);
                  n && K(s.errors, e, t),
                    ((e, t) => {
                      !d(m(e, t)).length && Y(e, t);
                    })(s.errors, e);
                }
                if (
                  A.touchedFields &&
                  i &&
                  Array.isArray(m(s.touchedFields, e))
                ) {
                  const t = r(m(s.touchedFields, e), a.argA, a.argB);
                  n && K(s.touchedFields, e, t);
                }
                A.dirtyFields && (s.dirtyFields = de(u, g)),
                  w.state.next({
                    isDirty: U(e, t),
                    dirtyFields: s.dirtyFields,
                    errors: s.errors,
                    isValid: s.isValid,
                  });
              } else K(g, e, t);
            },
            _getFieldArray: (t) =>
              d(m(v.mount ? g : u, t, e.shouldUnregister ? m(u, t, []) : [])),
            _subjects: w,
            _proxyFormState: A,
            get _fields() {
              return o;
            },
            get _formValues() {
              return g;
            },
            get _stateFlags() {
              return v;
            },
            set _stateFlags(e) {
              v = e;
            },
            get _defaultValues() {
              return u;
            },
            get _names() {
              return b;
            },
            set _names(e) {
              b = e;
            },
            get _formState() {
              return s;
            },
            set _formState(e) {
              s = e;
            },
            get _options() {
              return r;
            },
            set _options(e) {
              r = { ...r, ...e };
            },
          },
          trigger: $,
          register: ce,
          handleSubmit: (e, t) => async (a) => {
            a &&
              (a.preventDefault && a.preventDefault(),
              a.persist && a.persist());
            let n = !0,
              i = X(g);
            w.state.next({ isSubmitting: !0 });
            try {
              if (r.resolver) {
                const { errors: e, values: t } = await O();
                (s.errors = e), (i = t);
              } else await j(o);
              T(s.errors)
                ? (w.state.next({ errors: {}, isSubmitting: !0 }),
                  await e(i, a))
                : (t && (await t({ ...s.errors }, a)),
                  r.shouldFocusError && Q(o, (e) => m(s.errors, e), b.mount));
            } catch (u) {
              throw ((n = !1), u);
            } finally {
              (s.isSubmitted = !0),
                w.state.next({
                  isSubmitted: !0,
                  isSubmitting: !1,
                  isSubmitSuccessful: T(s.errors) && n,
                  submitCount: s.submitCount + 1,
                  errors: s.errors,
                });
            }
          },
          watch: (e, t) =>
            q(e)
              ? w.watch.subscribe({ next: (r) => e(B(void 0, t), r) })
              : B(e, t, !0),
          setValue: I,
          getValues: H,
          reset: (t, r = {}) => {
            const a = t || u,
              n = X(a),
              i = t && !T(t) ? n : u;
            if ((r.keepDefaultValues || (u = a), !r.keepValues)) {
              if (r.keepDirtyValues)
                for (const e of b.mount)
                  m(s.dirtyFields, e) ? K(i, e, m(g, e)) : I(e, m(i, e));
              else {
                if (J && f(t))
                  for (const e of b.mount) {
                    const t = m(o, e);
                    if (t && t._f) {
                      const e = Array.isArray(t._f.refs)
                        ? t._f.refs[0]
                        : t._f.ref;
                      try {
                        ne(e) && e.closest("form").reset();
                        break;
                      } catch (l) {}
                    }
                  }
                o = {};
              }
              (g = e.shouldUnregister ? (r.keepDefaultValues ? X(u) : {}) : n),
                w.array.next({ values: i }),
                w.watch.next({ values: i });
            }
            (b = {
              mount: new Set(),
              unMount: new Set(),
              array: new Set(),
              watch: new Set(),
              watchAll: !1,
              focus: "",
            }),
              (v.mount = !A.isValid || !!r.keepIsValid),
              (v.watch = !!e.shouldUnregister),
              w.state.next({
                submitCount: r.keepSubmitCount ? s.submitCount : 0,
                isDirty:
                  r.keepDirty || r.keepDirtyValues
                    ? s.isDirty
                    : !(!r.keepDefaultValues || te(t, u)),
                isSubmitted: !!r.keepIsSubmitted && s.isSubmitted,
                dirtyFields:
                  r.keepDirty || r.keepDirtyValues
                    ? s.dirtyFields
                    : r.keepDefaultValues && t
                    ? de(u, t)
                    : {},
                touchedFields: r.keepTouched ? s.touchedFields : {},
                errors: r.keepErrors ? s.errors : {},
                isSubmitting: !1,
                isSubmitSuccessful: !1,
              });
          },
          resetField: (e, t = {}) => {
            m(o, e) &&
              (f(t.defaultValue)
                ? I(e, m(u, e))
                : (I(e, t.defaultValue), K(u, e, t.defaultValue)),
              t.keepTouched || Y(s.touchedFields, e),
              t.keepDirty ||
                (Y(s.dirtyFields, e),
                (s.isDirty = t.defaultValue ? U(e, m(u, e)) : U())),
              t.keepError || (Y(s.errors, e), A.isValid && x()),
              w.state.next({ ...s }));
          },
          clearErrors: (e) => {
            e ? N(e).forEach((e) => Y(s.errors, e)) : (s.errors = {}),
              w.state.next({ errors: s.errors });
          },
          unregister: le,
          setError: (e, t, r) => {
            const a = (m(o, e, { _f: {} })._f || {}).ref;
            K(s.errors, e, { ...t, ref: a }),
              w.state.next({ name: e, errors: s.errors, isValid: !1 }),
              r && r.shouldFocus && a && a.focus && a.focus();
          },
          setFocus: (e, t = {}) => {
            const r = m(o, e)._f,
              s = r.refs ? r.refs[0] : r.ref;
            t.shouldSelect ? s.select() : s.focus();
          },
          getFieldState: G,
        };
      }
      function De(e = {}) {
        const t = s.useRef(),
          [r, a] = s.useState({
            isDirty: !1,
            isValidating: !1,
            dirtyFields: {},
            isSubmitted: !1,
            submitCount: 0,
            touchedFields: {},
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            errors: {},
          });
        t.current
          ? (t.current.control._options = e)
          : (t.current = { ...xe(e), formState: r });
        const n = t.current.control,
          i = s.useCallback(
            (e) => {
              U(e, n._proxyFormState, !0) &&
                ((n._formState = { ...n._formState, ...e }),
                a({ ...n._formState }));
            },
            [n]
          );
        return (
          L({ subject: n._subjects.state, callback: i }),
          s.useEffect(() => {
            n._stateFlags.mount ||
              (n._proxyFormState.isValid && n._updateValid(),
              (n._stateFlags.mount = !0)),
              n._stateFlags.watch &&
                ((n._stateFlags.watch = !1), n._subjects.state.next({})),
              n._removeUnmounted();
          }),
          (t.current.formState = j(r, n._proxyFormState)),
          t.current
        );
      }
    },
  },
]);
