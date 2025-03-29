(self.webpackChunk = self.webpackChunk || []).push([
  ["887"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new P.Bare().init(e, t);
        }
        function a(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function n(e, t, a) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | a).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, a) {
          if ((void 0 !== t && (a = t), void 0 === e)) return a;
          var n = a;
          return (
            $.test(e) || !K.test(e)
              ? (n = parseInt(e, 10))
              : K.test(e) && (n = 1e3 * parseFloat(e)),
            0 > n && (n = 0),
            n == n ? n : a
          );
        }
        function l(e) {
          Y.debug && window && window.console.warn(e);
        }
        var d,
          r,
          c,
          s = (function (e, t, a) {
            function n(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function l(d, r) {
              function c() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              r === a && ((r = d), (d = Object)), (c.Bare = s);
              var u,
                f = (o[e] = d[e]),
                p = (s[e] = c[e] = new o());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (s[e] = c[e] = l(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(c, p, f, c, d)) : n(e) && (u = e),
                    n(u))
                  )
                    for (var a in u) t.call(u, a) && (p[a] = u[a]);
                  return i(p.init) || (p.init = d), c;
                }),
                c.open(r)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return (
                  t +
                  a *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return t + a * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return (
                  t +
                  a *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return t + a * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, a, n) {
                return (a * e) / n + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, a, n) {
                return a * (e /= n) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, a, n) {
                return -a * (e /= n) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e + t
                  : (-a / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, a, n) {
                return -a * ((e = e / n - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e + t
                  : (-a / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, a, n) {
                return -a * Math.cos((e / n) * (Math.PI / 2)) + a + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, a, n) {
                return a * Math.sin((e / n) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, a, n) {
                return (-a / 2) * (Math.cos((Math.PI * e) / n) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, a, n) {
                return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, a, n) {
                return e === n
                  ? t + a
                  : a * (-Math.pow(2, (-10 * e) / n) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, a, n) {
                return 0 === e
                  ? t
                  : e === n
                  ? t + a
                  : (e /= n / 2) < 1
                  ? (a / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (a / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, a, n) {
                return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, a, n) {
                return a * Math.sqrt(1 - (e = e / n - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (-a / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (a / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * (e /= n) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= n / 2) < 1
                    ? (a / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (a / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          I = "bkwld-tram",
          g = /[\-\.0-9]/g,
          T = /[A-Z]/,
          E = "number",
          y = /^(rgb|#)/,
          b = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          R = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          S = document.createElement("a"),
          A = ["Webkit", "Moz", "O", "ms"],
          L = ["-webkit-", "-moz-", "-o-", "-ms-"],
          N = function (e) {
            if (e in S.style) return { dom: e, css: e };
            var t,
              a,
              n = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < A.length; t++)
              if ((a = A[t] + n) in S.style) return { dom: a, css: L[t] + e };
          },
          h = (t.support = {
            bind: Function.prototype.bind,
            transform: N("transform"),
            transition: N("transition"),
            backface: N("backface-visibility"),
            timing: N("transition-timing-function"),
          });
        if (h.transition) {
          var C = h.timing.dom;
          if (((S.style[C] = u["ease-in-back"][0]), !S.style[C]))
            for (var M in f) u[M][0] = f[M];
        }
        var V = (t.frame =
            (d =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && h.bind
              ? d.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          U = (t.now =
            (c =
              (r = p.performance) &&
              (r.now || r.webkitNow || r.msNow || r.mozNow)) && h.bind
              ? c.bind(r)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          x = s(function (t) {
            function a(e, t) {
              var a = (function (e) {
                  for (var t = -1, a = e ? e.length : 0, n = []; ++t < a; ) {
                    var i = e[t];
                    i && n.push(i);
                  }
                  return n;
                })(("" + e).split(" ")),
                n = a[0];
              t = t || {};
              var i = H[n];
              if (!i) return l("Unsupported property: " + n);
              if (!t.weak || !this.props[n]) {
                var o = i[0],
                  d = this.props[n];
                return (
                  d || (d = this.props[n] = new o.Bare()),
                  d.init(this.$el, a, i, t),
                  d
                );
              }
            }
            function n(e, t, n) {
              if (e) {
                var l = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == l && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == l && t) {
                  switch (e) {
                    case "hide":
                      r.call(this);
                      break;
                    case "stop":
                      d.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      a.call(this, e, n && n[1]);
                  }
                  return i.call(this);
                }
                if ("function" == l) return void e.call(this, this);
                if ("object" == l) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    I = !1,
                    g = {};
                  V(function () {
                    u.call(p, e, function (e) {
                      e.active && ((I = !0), (g[e.name] = e.nextStyle));
                    }),
                      I && p.$el.css(g);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                n.call(this, e.options, !0, e.args);
              }
            }
            function d(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this);
            }
            function r() {
              d.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                a = [];
              for (e in (this.upstream && a.push(this.upstream), this.props))
                (t = this.props[e]).active && a.push(t.string);
              (a = a.join(",")),
                this.style !== a &&
                  ((this.style = a), (this.el.style[h.transition.dom] = a));
            }
            function u(e, t, n) {
              var i,
                o,
                l,
                d,
                r = t !== f,
                c = {};
              for (i in e)
                (l = e[i]),
                  i in j
                    ? (c.transform || (c.transform = {}), (c.transform[i] = l))
                    : (T.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in H ? (c[i] = l) : (d || (d = {}), (d[i] = l)));
              for (i in c) {
                if (((l = c[i]), !(o = this.props[i]))) {
                  if (!r) continue;
                  o = a.call(this, i);
                }
                t.call(this, o, l);
              }
              n && d && n.call(this, d);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function E(e, a) {
              t[e] = function () {
                return this.children
                  ? y.call(this, a, arguments)
                  : (this.el && a.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var a,
                n = this.children.length;
              for (a = 0; n > a; a++) e.apply(this.children[a], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Y.keepInherited && !Y.fallback)
              ) {
                var a = z(this.el, "transition");
                a && !R.test(a) && (this.upstream = a);
              }
              h.backface &&
                Y.hideBackface &&
                Q(this.el, h.backface.css, "hidden");
            }),
              E("add", a),
              E("start", n),
              E("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              E("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : l(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              E("next", i),
              E("stop", d),
              E("set", function (e) {
                d.call(this, e), u.call(this, e, p, g);
              }),
              E("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              E("hide", r),
              E("redraw", c),
              E("destroy", function () {
                d.call(this),
                  e.removeData(this.el, I),
                  (this.$el = this.el = null);
              });
          }),
          P = s(x, function (t) {
            function a(t, a) {
              var n = e.data(t, I) || e.data(t, I, new x.Bare());
              return n.el || n.init(t), a ? n.start(a) : n;
            }
            t.init = function (t, n) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return a(i[0], n);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(a(t, n));
                }),
                (this.children = o),
                this
              );
            };
          }),
          G = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            var a = 500,
              i = "ease",
              d = 0;
            (e.init = function (e, t, n, l) {
              (this.$el = e), (this.el = e[0]);
              var r,
                c,
                s,
                f = t[0];
              n[2] && (f = n[2]),
                W[f] && (f = W[f]),
                (this.name = f),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, a)),
                (this.ease =
                  ((r = t[2]),
                  (c = this.ease),
                  (s = i),
                  void 0 !== c && (s = c),
                  r in u ? r : s)),
                (this.delay = o(t[3], this.delay, d)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = l.unit || this.unit || Y.defaultUnit),
                (this.angle = l.angle || this.angle || Y.defaultAngle),
                Y.fallback || l.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var a =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == a && (a = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new D({
                    from: a,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                Q(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  Q(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var a,
                  i,
                  o,
                  d,
                  r = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case E:
                    if (r) return e;
                    if (c && "" === e.replace(g, "")) return +e;
                    d = "number(unitless)";
                    break;
                  case y:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e)) {
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((a = e),
                            ((i = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a))
                              ? n(i[1], i[2], i[3])
                              : a
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"));
                      }
                    }
                    d = "hex or rgb string";
                    break;
                  case b:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    d = "number(px) or string(unit)";
                    break;
                  case m:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    d = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (r) return e + this.angle;
                    if (c && t.test(e)) return e;
                    d = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (r || (c && m.test(e))) return e;
                    d = "number(unitless) or string(unit or %)";
                }
                return (
                  l(
                    "Type warning: Expected: [" +
                      d +
                      "] Got: [" +
                      typeof (o = e) +
                      "] " +
                      o
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          F = s(G, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          w = s(G, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          k = s(G, function (e, t) {
            function a(e, t) {
              var a, n, i, o, l;
              for (a in e)
                (i = (o = j[a])[0]),
                  (n = o[1] || a),
                  (l = this.convert(e[a], i)),
                  t.call(this, n, l, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  j.perspective &&
                    Y.perspective &&
                    ((this.current.perspective = Y.perspective),
                    Q(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                a.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  Q(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var a,
                  n = {};
                for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                (this.active = !0), (this.nextStyle = this.style(n));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                Q(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  a = "";
                for (t in e) a += t + "(" + e[t] + ") ";
                return a;
              }),
              (e.values = function (e) {
                var t,
                  n = {};
                return (
                  a.call(this, e, function (e, a, i) {
                    (n[e] = a),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  n
                );
              });
          }),
          D = s(function (t) {
            function o() {
              var e,
                t,
                a,
                n = r.length;
              if (n)
                for (V(o), t = U(), e = n; e--; ) (a = r[e]) && a.render(t);
            }
            var d = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || d.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = d.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var a = e.from,
                n = e.to;
              void 0 === a && (a = d.from),
                void 0 === n && (n = d.to),
                (this.unit = e.unit || ""),
                "number" == typeof a && "number" == typeof n
                  ? ((this.begin = a), (this.change = n - a))
                  : this.format(n, a),
                (this.value = this.begin + this.unit),
                (this.start = U()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                var e;
                this.active ||
                  (this.start || (this.start = U()),
                  (this.active = !0),
                  (e = this),
                  1 === r.push(e) && V(o));
              }),
              (t.stop = function () {
                var t, a, n;
                this.active &&
                  ((this.active = !1),
                  (t = this),
                  (n = e.inArray(t, r)) >= 0 &&
                    ((a = r.slice(n + 1)),
                    (r.length = n),
                    a.length && (r = r.concat(a))));
              }),
              (t.render = function (e) {
                var t,
                  a = e - this.start;
                if (this.delay) {
                  if (a <= this.delay) return;
                  a -= this.delay;
                }
                if (a < this.duration) {
                  var i,
                    o,
                    l,
                    d = this.ease(a, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        (l = d),
                        n(
                          i[0] + l * (o[0] - i[0]),
                          i[1] + l * (o[1] - i[1]),
                          i[2] + l * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + d * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = a(t)),
                    (this.endRGB = a(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var n = t.replace(g, "");
                  n !== e.replace(g, "") &&
                    l("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = n);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var r = [],
              c = 1e3;
          }),
          B = s(D, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = s(D, function (e, t) {
            (e.init = function (e) {
              var t, a;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (a = e.values[t]),
                  this.current[t] !== a &&
                    this.tweens.push(
                      new D({
                        name: t,
                        from: this.current[t],
                        to: a,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  a,
                  n = this.tweens.length,
                  i = !1;
                for (t = n; t--; )
                  (a = this.tweens[t]).context &&
                    (a.render(e), (this.current[a.name] = a.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e, a;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          Y = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !h.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!h.transition) return (Y.fallback = !0);
          Y.agentTests.push("(" + e + ")");
          var t = RegExp(Y.agentTests.join("|"), "i");
          Y.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new D(e);
          }),
          (t.delay = function (e, t, a) {
            return new B({ complete: t, duration: e, context: a });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var Q = e.style,
          z = e.css,
          W = { transform: h.transform && h.transform.css },
          H = {
            color: [F, y],
            background: [F, y, "background-color"],
            "outline-color": [F, y],
            "border-color": [F, y],
            "border-top-color": [F, y],
            "border-right-color": [F, y],
            "border-bottom-color": [F, y],
            "border-left-color": [F, y],
            "border-width": [G, b],
            "border-top-width": [G, b],
            "border-right-width": [G, b],
            "border-bottom-width": [G, b],
            "border-left-width": [G, b],
            "border-spacing": [G, b],
            "letter-spacing": [G, b],
            margin: [G, b],
            "margin-top": [G, b],
            "margin-right": [G, b],
            "margin-bottom": [G, b],
            "margin-left": [G, b],
            padding: [G, b],
            "padding-top": [G, b],
            "padding-right": [G, b],
            "padding-bottom": [G, b],
            "padding-left": [G, b],
            "outline-width": [G, b],
            opacity: [G, E],
            top: [G, m],
            right: [G, m],
            bottom: [G, m],
            left: [G, m],
            "font-size": [G, m],
            "text-indent": [G, m],
            "word-spacing": [G, m],
            width: [G, m],
            "min-width": [G, m],
            "max-width": [G, m],
            height: [G, m],
            "min-height": [G, m],
            "max-height": [G, m],
            "line-height": [G, v],
            "scroll-top": [w, E, "scrollTop"],
            "scroll-left": [w, E, "scrollLeft"],
          },
          j = {};
        h.transform &&
          ((H.transform = [k]),
          (j = {
            x: [m, "translateX"],
            y: [m, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [E],
            scaleX: [E],
            scaleY: [E],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          h.transform &&
            h.backface &&
            ((j.z = [m, "translateZ"]),
            (j.rotateZ = [O]),
            (j.scaleZ = [E]),
            (j.perspective = [b]));
        var $ = /ms/,
          K = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, a) {
      "use strict";
      var n,
        i,
        o,
        l,
        d,
        r,
        c,
        s,
        u,
        f,
        p,
        I,
        g,
        T,
        E,
        y,
        b,
        m,
        O,
        v,
        R = window.$,
        _ = a(5487) && R.tram;
      e.exports =
        (((n = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (l = Object.prototype),
        (d = Function.prototype),
        o.push,
        (r = o.slice),
        (c = (o.concat, l.toString, l.hasOwnProperty)),
        (s = o.forEach),
        (u = o.map),
        (f = (o.reduce, o.reduceRight, o.filter)),
        (p = (o.every, o.some)),
        (I = o.indexOf),
        (g = (o.lastIndexOf, Object.keys)),
        d.bind,
        (T =
          n.each =
          n.forEach =
            function (e, t, a) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, a);
              else if (e.length === +e.length) {
                for (var o = 0, l = e.length; o < l; o++)
                  if (t.call(a, e[o], o, e) === i) return;
              } else {
                for (var d = n.keys(e), o = 0, l = d.length; o < l; o++)
                  if (t.call(a, e[d[o]], d[o], e) === i) return;
              }
              return e;
            }),
        (n.map = n.collect =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : u && e.map === u
              ? e.map(t, a)
              : (T(e, function (e, i, o) {
                  n.push(t.call(a, e, i, o));
                }),
                n);
          }),
        (n.find = n.detect =
          function (e, t, a) {
            var n;
            return (
              E(e, function (e, i, o) {
                if (t.call(a, e, i, o)) return (n = e), !0;
              }),
              n
            );
          }),
        (n.filter = n.select =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : f && e.filter === f
              ? e.filter(t, a)
              : (T(e, function (e, i, o) {
                  t.call(a, e, i, o) && n.push(e);
                }),
                n);
          }),
        (E =
          n.some =
          n.any =
            function (e, t, a) {
              t || (t = n.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, a)
                : (T(e, function (e, n, l) {
                    if (o || (o = t.call(a, e, n, l))) return i;
                  }),
                  !!o);
            }),
        (n.contains = n.include =
          function (e, t) {
            return (
              null != e &&
              (I && e.indexOf === I
                ? -1 != e.indexOf(t)
                : E(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (n.delay = function (e, t) {
          var a = r.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, a);
          }, t);
        }),
        (n.defer = function (e) {
          return n.delay.apply(n, [e, 1].concat(r.call(arguments, 1)));
        }),
        (n.throttle = function (e) {
          var t, a, n;
          return function () {
            !t &&
              ((t = !0),
              (a = arguments),
              (n = this),
              _.frame(function () {
                (t = !1), e.apply(n, a);
              }));
          };
        }),
        (n.debounce = function (e, t, a) {
          var i,
            o,
            l,
            d,
            r,
            c = function () {
              var s = n.now() - d;
              s < t
                ? (i = setTimeout(c, t - s))
                : ((i = null), !a && ((r = e.apply(l, o)), (l = o = null)));
            };
          return function () {
            (l = this), (o = arguments), (d = n.now());
            var s = a && !i;
            return (
              !i && (i = setTimeout(c, t)),
              s && ((r = e.apply(l, o)), (l = o = null)),
              r
            );
          };
        }),
        (n.defaults = function (e) {
          if (!n.isObject(e)) return e;
          for (var t = 1, a = arguments.length; t < a; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (n.keys = function (e) {
          if (!n.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var a in e) n.has(e, a) && t.push(a);
          return t;
        }),
        (n.has = function (e, t) {
          return c.call(e, t);
        }),
        (n.isObject = function (e) {
          return e === Object(e);
        }),
        (n.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (n.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (b = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (m = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + b[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (n.template = function (e, t, a) {
          !t && a && (t = a);
          var i,
            o = RegExp(
              [
                ((t = n.defaults({}, t, n.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            l = 0,
            d = "__p+='";
          e.replace(o, function (t, a, n, i, o) {
            return (
              (d += e.slice(l, o).replace(m, O)),
              (l = o + t.length),
              a
                ? (d += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                : n
                ? (d += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                : i && (d += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (d += "';\n");
          var r = t.variable;
          if (r) {
            if (!v.test(r))
              throw Error("variable is not a bare identifier: " + r);
          } else (d = "with(obj||{}){\n" + d + "}\n"), (r = "obj");
          d =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            d +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", d);
          } catch (e) {
            throw ((e.source = d), e);
          }
          var c = function (e) {
            return i.call(this, e, n);
          };
          return (c.source = "function(" + r + "){\n" + d + "}"), c;
        }),
        n);
    },
    9461: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "brand",
        (e.exports = function (e) {
          var t,
            a = {},
            i = document,
            o = e("html"),
            l = e("body"),
            d = window.location,
            r = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var a =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", a ? "display: none !important;" : "");
          }
          a.ready = function () {
            var a = o.attr("data-wf-status"),
              n = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(n) && d.hostname !== n && (a = !0),
              a &&
                !r &&
                ((t =
                  t ||
                  (function () {
                    var t = e('<a class="w-webflow-badge"></a>').attr(
                        "href",
                        "https://webflow.com?utm_campaign=brandjs"
                      ),
                      a = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                        )
                        .attr("alt", "")
                        .css({ marginRight: "4px", width: "26px" }),
                      n = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                        )
                        .attr("alt", "Made in Webflow");
                    return t.append(a, n), t[0];
                  })()),
                u(),
                setTimeout(u, 500),
                e(i).off(c, s).on(c, s));
          };
          function u() {
            var e = l.children(".w-webflow-badge"),
              a = e.length && e.get(0) === t,
              i = n.env("editor");
            if (a) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), !i && l.append(t);
          }
          return a;
        })
      );
    },
    322: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "edit",
        (e.exports = function (e, t, a) {
          if (
            ((a = a || {}),
            (n.env("test") || n.env("frame")) &&
              !a.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            l = e(document.documentElement),
            d = document.location,
            r = "hashchange",
            c =
              a.load ||
              function () {
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(r, u),
                  (function (e) {
                    var t = window.document.createElement("iframe");
                    (t.src =
                      "https://webflow.com/site/third-party-cookie-check.html"),
                      (t.style.display = "none"),
                      (t.sandbox = "allow-scripts allow-same-origin");
                    var a = function (n) {
                      "WF_third_party_cookies_unsupported" === n.data
                        ? (I(t, a), e(!1))
                        : "WF_third_party_cookies_supported" === n.data &&
                          (I(t, a), e(!0));
                    };
                    (t.onerror = function () {
                      I(t, a), e(!1);
                    }),
                      window.addEventListener("message", a, !1),
                      window.document.body.appendChild(t);
                  })(function (t) {
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: l.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success: (function (t) {
                        return function (a) {
                          if (!a) {
                            console.error("Could not load editor data");
                            return;
                          }
                          (a.thirdPartyCookiesSupported = t),
                            (function (t, a) {
                              e.ajax({
                                type: "GET",
                                url: t,
                                dataType: "script",
                                cache: !0,
                              }).then(a, f);
                            })(
                              (function (e) {
                                return e.indexOf("//") >= 0
                                  ? e
                                  : p("https://editor-api.webflow.com" + e);
                              })(a.scriptPath),
                              function () {
                                window.WebflowEditor(a);
                              }
                            );
                        };
                      })(t),
                    });
                  });
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            if (!i) /\?edit/.test(d.hash) && c();
          }
          s
            ? c()
            : d.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(d.search) ||
                /\?edit$/.test(d.href)) &&
              c()
            : o.on(r, u).triggerHandler(r);
          function f(e, t, a) {
            throw (console.error("Could not load editor script: " + t), a);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function I(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return {};
        })
      );
    },
    2338: function (e, t, a) {
      "use strict";
      a(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      a = !1,
                      n = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        (!!e &&
                          e !== document &&
                          "HTML" !== e.nodeName &&
                          "BODY" !== e.nodeName &&
                          "classList" in e &&
                          "contains" in e.classList) ||
                        !1
                      );
                    }
                    function l(e) {
                      if (!e.getAttribute("data-wf-focus-visible"))
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function d() {
                      t = !1;
                    }
                    function r() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      if (
                        !e.target.nodeName ||
                        "html" !== e.target.nodeName.toLowerCase()
                      )
                        (t = !1),
                          document.removeEventListener("mousemove", c),
                          document.removeEventListener("mousedown", c),
                          document.removeEventListener("mouseup", c),
                          document.removeEventListener("pointermove", c),
                          document.removeEventListener("pointerdown", c),
                          document.removeEventListener("pointerup", c),
                          document.removeEventListener("touchmove", c),
                          document.removeEventListener("touchstart", c),
                          document.removeEventListener("touchend", c);
                    }
                    document.addEventListener(
                      "keydown",
                      function (a) {
                        if (!a.metaKey && !a.altKey && !a.ctrlKey)
                          o(e.activeElement) && l(e.activeElement), (t = !0);
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", d, !0),
                      document.addEventListener("pointerdown", d, !0),
                      document.addEventListener("touchstart", d, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (a && (t = !0), r());
                        },
                        !0
                      ),
                      r(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          var a, n, d;
                          if (!!o(e.target)) {
                            if (
                              t ||
                              ((n = (a = e.target).type),
                              ("INPUT" === (d = a.tagName) &&
                                i[n] &&
                                !a.readOnly) ||
                                ("TEXTAREA" === d && !a.readOnly) ||
                                a.isContentEditable)
                            )
                              l(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (!!o(e.target))
                            e.target.hasAttribute("data-wf-focus-visible") &&
                              ((a = !0),
                              window.clearTimeout(n),
                              (n = window.setTimeout(function () {
                                a = !1;
                              }, 100)),
                              !(function (e) {
                                if (!!e.getAttribute("data-wf-focus-visible"))
                                  e.removeAttribute("data-wf-focus-visible");
                              })(e.target));
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function a(a) {
            t &&
              (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
          }
          function i(a) {
            var n, i;
            if (
              ((i = (n = a.target).tagName),
              (/^a$/i.test(i) && null != n.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== n.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(n.type) &&
                  !n.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(n.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === n.controls))
            )
              (t = !0),
                setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0; ) {
                    var n = e.pop();
                    n.target.dispatchEvent(new MouseEvent(n.type, n));
                  }
                }, 0);
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                n.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", a, !0),
                document.addEventListener("click", a, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        a = {},
        n = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, n) {
            if (!n.__wf_intro)
              (n.__wf_intro = !0), t(n).triggerHandler(a.types.INTRO);
          },
          outro: function (e, n) {
            if (!!n.__wf_intro)
              (n.__wf_intro = null), t(n).triggerHandler(a.types.OUTRO);
          },
        };
      (a.triggers = {}),
        (a.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (a.init = function () {
          for (var e = n.length, i = 0; i < e; i++) {
            var l = n[i];
            l[0](0, l[1]);
          }
          (n = []), t.extend(a.triggers, o);
        }),
        (a.async = function () {
          for (var e in o) {
            var t = o[e];
            if (!!o.hasOwnProperty(e))
              a.triggers[e] = function (e, a) {
                n.push([t, a]);
              };
          }
        }),
        a.async(),
        (e.exports = a);
    },
    5134: function (e, t, a) {
      "use strict";
      var n = a(7199);
      function i(e, t) {
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a);
      }
      var o = window.jQuery,
        l = {},
        d = ".w-ix";
      (l.triggers = {}),
        (l.types = { INTRO: "w-ix-intro" + d, OUTRO: "w-ix-outro" + d }),
        o.extend(l.triggers, {
          reset: function (e, t) {
            n.triggers.reset(e, t);
          },
          intro: function (e, t) {
            n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = l);
    },
    941: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(6011);
      i.setEnv(n.env),
        n.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, a) {
      "use strict";
      var n,
        i,
        o = {},
        l = {},
        d = [],
        r = window.Webflow || [],
        c = window.jQuery,
        s = c(window),
        u = c(document),
        f = c.isFunction,
        p = (o._ = a(5756)),
        I = (o.tram = a(5487) && c.tram),
        g = !1,
        T = !1;
      function E(e) {
        o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) {
                e.ready();
                return;
              }
              if (!p.contains(d, e.ready)) d.push(e.ready);
            })(e);
      }
      (I.config.hideBackface = !1),
        (I.config.keepInherited = !0),
        (o.define = function (e, t, a) {
          l[e] && y(l[e]);
          var n = (l[e] = t(c, p, a) || {});
          return E(n), n;
        }),
        (o.require = function (e) {
          return l[e];
        });
      function y(e) {
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              d = p.filter(d, function (t) {
                return t !== e.ready;
              });
            })(e);
      }
      (o.push = function (e) {
        if (g) {
          f(e) && e();
          return;
        }
        r.push(e);
      }),
        (o.env = function (e) {
          var t = window.__wf_design,
            a = void 0 !== t;
          return e
            ? "design" === e
              ? a && t
              : "preview" === e
              ? a && !t
              : "slug" === e
              ? a && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : a;
        });
      var b = navigator.userAgent.toLowerCase(),
        m = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(b) &&
          /Google/.test(navigator.vendor) &&
          parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(b));
      (o.env.safari = /safari/.test(b) && !O && !v),
        m &&
          u.on("touchstart mousedown", function (e) {
            n = e.target;
          }),
        (o.validClick = m
          ? function (e) {
              return e === n || c.contains(e, n);
            }
          : function () {
              return !0;
            });
      var R = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + R;
      function S(e, t) {
        var a = [],
          n = {};
        return (
          (n.up = p.throttle(function (e) {
            p.each(a, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, n.up),
          (n.on = function (e) {
            if (!("function" != typeof e || p.contains(a, e))) a.push(e);
          }),
          (n.off = function (e) {
            if (!arguments.length) {
              a = [];
              return;
            }
            a = p.filter(a, function (t) {
              return t !== e;
            });
          }),
          n
        );
      }
      function A(e) {
        f(e) && e();
      }
      (o.resize = S(s, R)),
        (o.scroll = S(s, _)),
        (o.redraw = S()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (g = !0),
            T
              ? (function () {
                  (T = !1), p.each(l, E);
                })()
              : p.each(d, A),
            p.each(r, A),
            o.resize.up();
        });
      function L() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new c.Deferred()),
          s.on("load", i.resolve);
      }
      (o.load = function (e) {
        i.then(e);
      }),
        (o.destroy = function (e) {
          (e = e || {}),
            (T = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(l, y),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (d = []),
            (r = []),
            "pending" === i.state() && L();
        }),
        c(o.ready),
        L(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "links",
        (e.exports = function (e, t) {
          var a,
            i,
            o,
            l = {},
            d = e(window),
            r = n.env(),
            c = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          l.ready =
            l.design =
            l.preview =
              function () {
                (a = r && n.env("design")),
                  (o = n.env("slug") || c.pathname || ""),
                  n.scroll.off(I),
                  (i = []);
                for (var t = document.links, l = 0; l < t.length; ++l)
                  (function (t) {
                    if (t.getAttribute("hreflang")) return;
                    var n =
                      (a && t.getAttribute("href-disabled")) ||
                      t.getAttribute("href");
                    if (((s.href = n), n.indexOf(":") >= 0)) return;
                    var l = e(t);
                    if (
                      s.hash.length > 1 &&
                      s.host + s.pathname === c.host + c.pathname
                    ) {
                      if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                      var d = e(s.hash);
                      d.length && i.push({ link: l, sec: d, active: !1 });
                      return;
                    }
                    if ("#" !== n && "" !== n)
                      g(
                        l,
                        u,
                        s.href === c.href || n === o || (f.test(n) && p.test(o))
                      );
                  })(t[l]);
                i.length && (n.scroll.on(I), I());
              };
          function I() {
            var e = d.scrollTop(),
              a = d.height();
            t.each(i, function (t) {
              if (t.link.attr("hreflang")) return;
              var n = t.link,
                i = t.sec,
                o = i.offset().top,
                l = i.outerHeight(),
                d = 0.5 * a,
                r = i.is(":visible") && o + l - d >= e && o + d <= e + a;
              if (t.active !== r) (t.active = r), g(n, u, r);
            });
          }
          function g(e, t, a) {
            var n = e.hasClass(t);
            if ((!a || !n) && (!!a || !!n))
              a ? e.addClass(t) : e.removeClass(t);
          }
          return l;
        })
      );
    },
    286: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            a = window.location,
            i = (function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? null
              : window.history,
            o = e(window),
            l = e(document),
            d = e(document.body),
            r =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = n.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var I = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function T(e, t) {
            var a;
            switch (t) {
              case "add":
                (a = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", a)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (a = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", a),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function E(t) {
            var l,
              c = t.currentTarget;
            if (
              !(
                n.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(c.className))
              )
            ) {
              var u = ((l = c),
              I.test(l.hash) && l.host + l.pathname === a.host + a.pathname)
                ? c.hash
                : "";
              if ("" !== u) {
                var f = e(u);
                if (!f.length) return;
                t && (t.preventDefault(), t.stopPropagation()),
                  (function (e) {
                    a.hash !== e &&
                      i &&
                      i.pushState &&
                      !(n.env.chrome && "file:" === a.protocol) &&
                      (i.state && i.state.hash) !== e &&
                      i.pushState({ hash: e }, "", e);
                  })(u, t),
                  window.setTimeout(
                    function () {
                      (function (t, a) {
                        var n = o.scrollTop(),
                          i = (function (t) {
                            var a = e(s),
                              n =
                                "fixed" === a.css("position")
                                  ? a.outerHeight()
                                  : 0,
                              i = t.offset().top - n;
                            if ("mid" === t.data("scroll")) {
                              var l = o.height() - n,
                                d = t.outerHeight();
                              d < l && (i -= Math.round((l - d) / 2));
                            }
                            return i;
                          })(t);
                        if (n !== i) {
                          var l = (function (e, t, a) {
                              if (
                                "none" ===
                                  document.body.getAttribute(
                                    "data-wf-scroll-motion"
                                  ) ||
                                g.matches
                              )
                                return 0;
                              var n = 1;
                              return (
                                d.add(e).each(function (e, t) {
                                  var a = parseFloat(
                                    t.getAttribute("data-scroll-time")
                                  );
                                  !isNaN(a) && a >= 0 && (n = a);
                                }),
                                (472.143 * Math.log(Math.abs(t - a) + 125) -
                                  2e3) *
                                  n
                              );
                            })(t, n, i),
                            c = Date.now(),
                            u = function () {
                              var e = Date.now() - c;
                              window.scroll(
                                0,
                                (function (e, t, a, n) {
                                  return a > n
                                    ? t
                                    : e +
                                        (t - e) *
                                          (function (e) {
                                            return e < 0.5
                                              ? 4 * e * e * e
                                              : (e - 1) *
                                                  (2 * e - 2) *
                                                  (2 * e - 2) +
                                                  1;
                                          })(a / n);
                                })(n, i, e, l)
                              ),
                                e <= l ? r(u) : "function" == typeof a && a();
                            };
                          r(u);
                        }
                      })(f, function () {
                        T(f, "add"),
                          f.get(0).focus({ preventScroll: !0 }),
                          T(f, "remove");
                      });
                    },
                    t ? 0 : 300
                  );
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: a } = t;
              l.on(a, f, E),
                l.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, a) {
      "use strict";
      a(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            a = window.getSelection;
          function n(t) {
            var n,
              i,
              o = !1,
              l = !1,
              d = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function r(e) {
              var t = e.touches;
              if (!t || !(t.length > 1))
                (o = !0),
                  t ? ((l = !0), (n = t[0].clientX)) : (n = e.clientX),
                  (i = n);
            }
            function c(t) {
              if (!!o) {
                if (l && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var n = t.touches,
                  r = n ? n[0].clientX : t.clientX,
                  c = r - i;
                (i = r),
                  Math.abs(c) > d &&
                    a &&
                    "" === String(a()) &&
                    ((function (t, a, n) {
                      var i = e.Event(t, { originalEvent: a });
                      e(a.target).trigger(i, n);
                    })("swipe", t, { direction: c > 0 ? "right" : "left" }),
                    u());
              }
            }
            function s(e) {
              if (!!o) {
                if (((o = !1), l && "mouseup" === e.type)) {
                  e.preventDefault(), e.stopPropagation(), (l = !1);
                  return;
                }
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", r, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", r, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1);
            this.destroy = function () {
              t.removeEventListener("touchstart", r, !1),
                t.removeEventListener("touchmove", c, !1),
                t.removeEventListener("touchend", s, !1),
                t.removeEventListener("touchcancel", u, !1),
                t.removeEventListener("mousedown", r, !1),
                t.removeEventListener("mousemove", c, !1),
                t.removeEventListener("mouseup", s, !1),
                t.removeEventListener("mouseout", u, !1),
                (t = null);
            };
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new n(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    1655: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      n.define(
        "navbar",
        (e.exports = function (e, t) {
          var a,
            l,
            d,
            r,
            c = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            I = n.env(),
            g = ".w-nav",
            T = "w--open",
            E = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            m = "w--nav-link-open",
            O = i.triggers,
            v = e();
          (c.ready =
            c.design =
            c.preview =
              function () {
                if (
                  ((d = I && n.env("design")),
                  (r = n.env("editor")),
                  (a = e(document.body)),
                  !!(l = f.find(g)).length)
                )
                  l.each(S),
                    R(),
                    (function () {
                      n.resize.on(_);
                    })();
              }),
            (c.destroy = function () {
              (v = e()), R(), l && l.length && l.each(A);
            });
          function R() {
            n.resize.off(_);
          }
          function _() {
            l.each(x);
          }
          function S(a, n) {
            var i = e(n),
              l = e.data(n, g);
            !l &&
              (l = e.data(n, g, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1,
              })),
              (l.menu = i.find(".w-nav-menu")),
              (l.links = l.menu.find(".w-nav-link")),
              (l.dropdowns = l.menu.find(".w-dropdown")),
              (l.dropdownToggle = l.menu.find(".w-dropdown-toggle")),
              (l.dropdownList = l.menu.find(".w-dropdown-list")),
              (l.button = i.find(".w-nav-button")),
              (l.container = i.find(".w-container")),
              (l.overlayContainerId = "w-nav-overlay-" + a),
              (l.outside = (function (t) {
                return (
                  t.outside && f.off("click" + g, t.outside),
                  function (a) {
                    var n = e(a.target);
                    if (!r || !n.closest(".w-editor-bem-EditorOverlay").length)
                      U(t, n);
                  }
                );
              })(l));
            var c = i.find(".w-nav-brand");
            c &&
              "/" === c.attr("href") &&
              null == c.attr("aria-label") &&
              c.attr("aria-label", "home"),
              l.button.attr("style", "-webkit-user-select: text;"),
              null == l.button.attr("aria-label") &&
                l.button.attr("aria-label", "menu"),
              l.button.attr("role", "button"),
              l.button.attr("tabindex", "0"),
              l.button.attr("aria-controls", l.overlayContainerId),
              l.button.attr("aria-haspopup", "menu"),
              l.button.attr("aria-expanded", "false"),
              l.el.off(g),
              l.button.off(g),
              l.menu.off(g),
              N(l),
              d
                ? (L(l),
                  l.el.on(
                    "setting" + g,
                    (function (e) {
                      return function (a, n) {
                        n = n || {};
                        var i = u.width();
                        N(e),
                          !0 === n.open && w(e, !0),
                          !1 === n.open && D(e, !0),
                          e.open &&
                            t.defer(function () {
                              i !== u.width() && C(e);
                            });
                      };
                    })(l)
                  ))
                : ((function (t) {
                    if (!t.overlay)
                      (t.overlay = e(
                        '<div class="w-nav-overlay" data-wf-ignore />'
                      ).appendTo(t.el)),
                        t.overlay.attr("id", t.overlayContainerId),
                        (t.parent = t.menu.parent()),
                        D(t, !0);
                  })(l),
                  l.button.on("click" + g, M(l)),
                  l.menu.on("click" + g, "a", V(l)),
                  l.button.on(
                    "keydown" + g,
                    (function (e) {
                      return function (t) {
                        switch (t.keyCode) {
                          case o.SPACE:
                          case o.ENTER:
                            return (
                              M(e)(), t.preventDefault(), t.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              D(e), t.preventDefault(), t.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                          case o.HOME:
                          case o.END:
                            if (!e.open)
                              return t.preventDefault(), t.stopPropagation();
                            return (
                              t.keyCode === o.END
                                ? (e.selectedIdx = e.links.length - 1)
                                : (e.selectedIdx = 0),
                              h(e),
                              t.preventDefault(),
                              t.stopPropagation()
                            );
                        }
                      };
                    })(l)
                  ),
                  l.el.on(
                    "keydown" + g,
                    (function (e) {
                      return function (t) {
                        if (!!e.open)
                          switch (
                            ((e.selectedIdx = e.links.index(
                              document.activeElement
                            )),
                            t.keyCode)
                          ) {
                            case o.HOME:
                            case o.END:
                              return (
                                t.keyCode === o.END
                                  ? (e.selectedIdx = e.links.length - 1)
                                  : (e.selectedIdx = 0),
                                h(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ESCAPE:
                              return (
                                D(e),
                                e.button.focus(),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                              return (
                                (e.selectedIdx = Math.max(
                                  -1,
                                  e.selectedIdx - 1
                                )),
                                h(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                              return (
                                (e.selectedIdx = Math.min(
                                  e.links.length - 1,
                                  e.selectedIdx + 1
                                )),
                                h(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                          }
                      };
                    })(l)
                  )),
              x(a, n);
          }
          function A(t, a) {
            var n = e.data(a, g);
            n && (L(n), e.removeData(a, g));
          }
          function L(e) {
            if (!!e.overlay) D(e, !0), e.overlay.remove(), (e.overlay = null);
          }
          function N(e) {
            var a = {},
              n = e.config || {},
              i = (a.animation = e.el.attr("data-animation") || "default");
            (a.animOver = /^over/.test(i)),
              (a.animDirect = /left$/.test(i) ? -1 : 1),
              n.animation !== i && e.open && t.defer(C, e),
              (a.easing = e.el.attr("data-easing") || "ease"),
              (a.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (a.duration = null != o ? Number(o) : 400),
              (a.docHeight = e.el.attr("data-doc-height")),
              (e.config = a);
          }
          function h(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), V(t);
            }
          }
          function C(e) {
            if (!!e.open) D(e, !0), w(e, !0);
          }
          function M(e) {
            return p(function () {
              e.open ? D(e) : w(e);
            });
          }
          function V(t) {
            return function (a) {
              var i = e(this).attr("href");
              if (!n.validClick(a.currentTarget)) {
                a.preventDefault();
                return;
              }
              i && 0 === i.indexOf("#") && t.open && D(t);
            };
          }
          var U = p(function (e, t) {
            if (!!e.open) {
              var a = t.closest(".w-nav-menu");
              !e.menu.is(a) && D(e);
            }
          });
          function x(t, a) {
            var n = e.data(a, g),
              i = (n.collapsed = "none" !== n.button.css("display"));
            if ((n.open && !i && !d && D(n, !0), n.container.length)) {
              var o = (function (t) {
                var a = t.container.css(P);
                return (
                  "none" === a && (a = ""),
                  function (t, n) {
                    (n = e(n)).css(P, ""), "none" === n.css(P) && n.css(P, a);
                  }
                );
              })(n);
              n.links.each(o), n.dropdowns.each(o);
            }
            n.open && k(n);
          }
          var P = "max-width";
          function G(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function F(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function w(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(G),
                e.links.addClass(m),
                e.dropdowns.addClass(E),
                e.dropdownToggle.addClass(y),
                e.dropdownList.addClass(b),
                e.button.addClass(T);
              var a = e.config;
              ("none" === a.animation ||
                !s.support.transform ||
                a.duration <= 0) &&
                (t = !0);
              var i = k(e),
                o = e.menu.outerHeight(!0),
                l = e.menu.outerWidth(!0),
                r = e.el.height(),
                c = e.el[0];
              if (
                (x(0, c),
                O.intro(0, c),
                n.redraw.up(),
                !d && f.on("click" + g, e.outside),
                t)
              ) {
                p();
                return;
              }
              var u = "transform " + a.duration + "ms " + a.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                a.animOver)
              ) {
                s(e.menu)
                  .add(u)
                  .set({ x: a.animDirect * l, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(l);
                return;
              }
              s(e.menu)
                .add(u)
                .set({ y: -(r + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function k(e) {
            var t = e.config,
              n = t.docHeight ? f.height() : a.height();
            return (
              t.animOver
                ? e.menu.height(n)
                : "fixed" !== e.el.css("position") &&
                  (n -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(n),
              n
            );
          }
          function D(e, t) {
            if (!!e.open) {
              (e.open = !1), e.button.removeClass(T);
              var a = e.config;
              if (
                (("none" === a.animation ||
                  !s.support.transform ||
                  a.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + g, e.outside),
                t)
              ) {
                s(e.menu).stop(), d();
                return;
              }
              var n = "transform " + a.duration + "ms " + a.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                l = e.el.height();
              if (a.animOver) {
                s(e.menu)
                  .add(n)
                  .start({ x: o * a.animDirect })
                  .then(d);
                return;
              }
              s(e.menu)
                .add(n)
                .start({ y: -(l + i) })
                .then(d);
            }
            function d() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(F),
                e.links.removeClass(m),
                e.dropdowns.removeClass(E),
                e.dropdownToggle.removeClass(y),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return c;
        })
      );
    },
    3946: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        actionListPlaybackChanged: function () {
          return Y;
        },
        animationFrameChanged: function () {
          return F;
        },
        clearRequested: function () {
          return U;
        },
        elementStateChanged: function () {
          return X;
        },
        eventListenerAdded: function () {
          return x;
        },
        eventStateChanged: function () {
          return G;
        },
        instanceAdded: function () {
          return k;
        },
        instanceRemoved: function () {
          return B;
        },
        instanceStarted: function () {
          return D;
        },
        mediaQueriesDefined: function () {
          return z;
        },
        parameterChanged: function () {
          return w;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return C;
        },
        rawDataImported: function () {
          return A;
        },
        sessionInitialized: function () {
          return L;
        },
        sessionStarted: function () {
          return N;
        },
        sessionStopped: function () {
          return h;
        },
        stopRequested: function () {
          return V;
        },
        testFrameRendered: function () {
          return P;
        },
        viewportWidthChanged: function () {
          return Q;
        },
      });
      let n = a(7087),
        i = a(9468),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: d,
          IX2_SESSION_STOPPED: r,
          IX2_PREVIEW_REQUESTED: c,
          IX2_PLAYBACK_REQUESTED: s,
          IX2_STOP_REQUESTED: u,
          IX2_CLEAR_REQUESTED: f,
          IX2_EVENT_LISTENER_ADDED: p,
          IX2_TEST_FRAME_RENDERED: I,
          IX2_EVENT_STATE_CHANGED: g,
          IX2_ANIMATION_FRAME_CHANGED: T,
          IX2_PARAMETER_CHANGED: E,
          IX2_INSTANCE_ADDED: y,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: m,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: _,
        } = n.IX2EngineActionTypes,
        { reifyState: S } = i.IX2VanillaUtils,
        A = (e) => ({ type: o, payload: { ...S(e) } }),
        L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        N = () => ({ type: d }),
        h = () => ({ type: r }),
        C = ({ rawData: e, defer: t }) => ({
          type: c,
          payload: { defer: t, rawData: e },
        }),
        M = ({
          actionTypeId: e = n.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: l,
          testManual: d,
          verbose: r,
          rawData: c,
        }) => ({
          type: s,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: a,
            testManual: d,
            eventId: i,
            allowEvents: o,
            immediate: l,
            verbose: r,
            rawData: c,
          },
        }),
        V = (e) => ({ type: u, payload: { actionListId: e } }),
        U = () => ({ type: f }),
        x = (e, t) => ({ type: p, payload: { target: e, listenerParams: t } }),
        P = (e = 1) => ({ type: I, payload: { step: e } }),
        G = (e, t) => ({ type: g, payload: { stateKey: e, newState: t } }),
        F = (e, t) => ({ type: T, payload: { now: e, parameters: t } }),
        w = (e, t) => ({ type: E, payload: { key: e, value: t } }),
        k = (e) => ({ type: y, payload: { ...e } }),
        D = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
        B = (e) => ({ type: m, payload: { instanceId: e } }),
        X = (e, t, a, n) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: a, actionItem: n },
        }),
        Y = ({ actionListId: e, isPlaying: t }) => ({
          type: v,
          payload: { actionListId: e, isPlaying: t },
        }),
        Q = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        z = () => ({ type: _ });
    },
    6011: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        actions: function () {
          return l;
        },
        destroy: function () {
          return u;
        },
        init: function () {
          return s;
        },
        setEnv: function () {
          return c;
        },
        store: function () {
          return r;
        },
      });
      let n = a(9516),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(7243)),
        o = a(1970),
        l = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = d(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(3946));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (d = function (e) {
          return e ? a : t;
        })(e);
      }
      let r = (0, n.createStore)(i.default);
      function c(e) {
        e() && (0, o.observeRequests)(r);
      }
      function s(e) {
        u(), (0, o.startEngine)({ store: r, rawData: e, allowEvents: !0 });
      }
      function u() {
        (0, o.stopEngine)(r);
      }
    },
    5012: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        elementContains: function () {
          return E;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return f;
        },
        getQuerySelector: function () {
          return I;
        },
        getRefType: function () {
          return v;
        },
        getSiblingElements: function () {
          return m;
        },
        getStyle: function () {
          return u;
        },
        getValidDocument: function () {
          return g;
        },
        isSiblingNode: function () {
          return y;
        },
        matchSelector: function () {
          return p;
        },
        queryDocument: function () {
          return T;
        },
        setStyle: function () {
          return s;
        },
      });
      let n = a(9468),
        i = a(7087),
        { ELEMENT_MATCHES: o } = n.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: d,
          PLAIN_OBJECT: r,
          WF_PAGE: c,
        } = i.IX2EngineConstants;
      function s(e, t, a) {
        e.style[t] = a;
      }
      function u(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function f(e, t) {
        return e[t];
      }
      function p(e) {
        return (t) => t[o](e);
      }
      function I({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let a = e.split(l),
              n = a[0];
            if (((t = a[1]), n !== document.documentElement.getAttribute(c)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function g(e) {
        return null == e || e === document.documentElement.getAttribute(c)
          ? document
          : null;
      }
      function T(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function E(e, t) {
        return e.contains(t);
      }
      function y(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function b(e) {
        let t = [];
        for (let a = 0, { length: n } = e || []; a < n; a++) {
          let { children: n } = e[a],
            { length: i } = n;
          if (!!i) for (let e = 0; e < i; e++) t.push(n[e]);
        }
        return t;
      }
      function m(e = []) {
        let t = [],
          a = [];
        for (let n = 0, { length: i } = e; n < i; n++) {
          let { parentNode: i } = e[n];
          if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i))
            continue;
          a.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let a = e;
            do {
              if (a[o] && a[o](t)) return a;
              a = a.parentNode;
            } while (null != a);
            return null;
          };
      function v(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? d
            : r
          : null;
      }
    },
    1970: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        observeRequests: function () {
          return $;
        },
        startActionGroup: function () {
          return ef;
        },
        startEngine: function () {
          return et;
        },
        stopActionGroup: function () {
          return eu;
        },
        stopAllActionGroups: function () {
          return es;
        },
        stopEngine: function () {
          return ea;
        },
      });
      let n = T(a(9777)),
        i = T(a(4738)),
        o = T(a(4659)),
        l = T(a(3452)),
        d = T(a(6633)),
        r = T(a(3729)),
        c = T(a(2397)),
        s = T(a(5082)),
        u = a(7087),
        f = a(9468),
        p = a(3946),
        I = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = E(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(5012)),
        g = T(a(8955));
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function E(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (E = function (e) {
          return e ? a : t;
        })(e);
      }
      let y = Object.keys(u.QuickEffectIds),
        b = (e) => y.includes(e),
        {
          COLON_DELIMITER: m,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: v,
          RENDER_GENERAL: R,
          W_MOD_IX: _,
        } = u.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: A,
          getDestinationValues: L,
          observeStore: N,
          getInstanceId: h,
          renderHTMLElement: C,
          clearAllStyles: M,
          getMaxDurationItemIndex: V,
          getComputedStyle: U,
          getInstanceOrigin: x,
          reduceListToGroup: P,
          shouldNamespaceEventParameter: G,
          getNamespacedParameterId: F,
          shouldAllowMediaQuery: w,
          cleanupHTMLElement: k,
          clearObjectCache: D,
          stringifyTarget: B,
          mediaQueriesEqual: X,
          shallowEqual: Y,
        } = f.IX2VanillaUtils,
        {
          isPluginType: Q,
          createPluginInstance: z,
          getPluginDuration: W,
        } = f.IX2VanillaPlugins,
        H = navigator.userAgent,
        j = H.match(/iPad/i) || H.match(/iPhone/);
      function $(e) {
        N({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: K }),
          N({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: Z,
          }),
          N({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: J }),
          N({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ee });
      }
      function K({ rawData: e, defer: t }, a) {
        let n = () => {
          et({ store: a, rawData: e, allowEvents: !0 }), q();
        };
        t ? setTimeout(n, 0) : n();
      }
      function q() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function Z(e, t) {
        let {
            actionTypeId: a,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: l,
            immediate: d,
            testManual: r,
            verbose: c = !0,
          } = e,
          { rawData: s } = e;
        if (n && i && s && d) {
          let e = s.actionLists[n];
          e && (s = P({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (et({ store: t, rawData: s, allowEvents: l, testManual: r }),
          (n && a === u.ActionTypeConsts.GENERAL_START_ACTION) || b(a))
        ) {
          eu({ store: t, actionListId: n }),
            ec({ store: t, actionListId: n, eventId: o });
          let e = ef({
            store: t,
            eventId: o,
            actionListId: n,
            immediate: d,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, p.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !d,
              })
            );
        }
      }
      function J({ actionListId: e }, t) {
        e ? eu({ store: t, actionListId: e }) : es({ store: t }), ea(t);
      }
      function ee(e, t) {
        ea(t), M({ store: t, elementApi: I });
      }
      function et({ store: e, rawData: t, allowEvents: a, testManual: l }) {
        let { ixSession: d } = e.getState();
        if ((t && e.dispatch((0, p.rawDataImported)(t)), !d.active)) {
          if (
            (e.dispatch(
              (0, p.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(O),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            a &&
              ((function (e) {
                let { ixData: t } = e.getState(),
                  { eventTypeMap: a } = t;
                eo(e),
                  (0, c.default)(a, (t, a) => {
                    let l = g.default[a];
                    if (!l) {
                      console.warn(`IX2 event type not configured: ${a}`);
                      return;
                    }
                    (function ({ logic: e, store: t, events: a }) {
                      (function (e) {
                        if (!j) return;
                        let t = {},
                          a = "";
                        for (let n in e) {
                          let { eventTypeId: i, target: o } = e[n],
                            l = I.getQuerySelector(o);
                          if (!t[l])
                            (i === u.EventTypeConsts.MOUSE_CLICK ||
                              i === u.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((t[l] = !0),
                              (a +=
                                l +
                                "{cursor: pointer;touch-action: manipulation;}"));
                        }
                        if (a) {
                          let e = document.createElement("style");
                          (e.textContent = a), document.body.appendChild(e);
                        }
                      })(a);
                      let { types: l, handler: d } = e,
                        { ixData: r } = t.getState(),
                        { actionLists: f } = r,
                        g = el(a, er);
                      if (!(0, o.default)(g)) return;
                      (0, c.default)(g, (e, o) => {
                        let l = a[o],
                          {
                            action: d,
                            id: c,
                            mediaQueries: s = r.mediaQueryKeys,
                          } = l,
                          { actionListId: g } = d.config;
                        !X(s, r.mediaQueryKeys) &&
                          t.dispatch((0, p.mediaQueriesDefined)()),
                          d.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(l.config)
                              ? l.config
                              : [l.config]
                            ).forEach((a) => {
                              let { continuousParameterGroupId: o } = a,
                                l = (0, i.default)(
                                  f,
                                  `${g}.continuousParameterGroups`,
                                  []
                                ),
                                d = (0, n.default)(l, ({ id: e }) => e === o),
                                r = (a.smoothing || 0) / 100,
                                s = (a.restingState || 0) / 100;
                              if (!!d)
                                e.forEach((e, n) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: t,
                                    eventTarget: a,
                                    eventId: n,
                                    eventConfig: o,
                                    actionListId: l,
                                    parameterGroup: d,
                                    smoothing: r,
                                    restingValue: c,
                                  }) {
                                    let { ixData: s, ixSession: f } =
                                        e.getState(),
                                      { events: p } = s,
                                      g = p[n],
                                      { eventTypeId: T } = g,
                                      E = {},
                                      y = {},
                                      b = [],
                                      { continuousActionGroups: v } = d,
                                      { id: R } = d;
                                    G(T, o) && (R = F(t, R));
                                    let _ =
                                      f.hasBoundaryNodes && a
                                        ? I.getClosestElement(a, O)
                                        : null;
                                    v.forEach((e) => {
                                      let { keyframe: t, actionItems: n } = e;
                                      n.forEach((e) => {
                                        let { actionTypeId: n } = e,
                                          { target: i } = e.config;
                                        if (!i) return;
                                        let o = i.boundaryMode ? _ : null,
                                          l = B(i) + m + n;
                                        if (
                                          ((y[l] = (function (e = [], t, a) {
                                            let n;
                                            let i = [...e];
                                            return (
                                              i.some(
                                                (e, a) =>
                                                  e.keyframe === t &&
                                                  ((n = a), !0)
                                              ),
                                              null == n &&
                                                ((n = i.length),
                                                i.push({
                                                  keyframe: t,
                                                  actionItems: [],
                                                })),
                                              i[n].actionItems.push(a),
                                              i
                                            );
                                          })(y[l], t, e)),
                                          !E[l])
                                        ) {
                                          E[l] = !0;
                                          let { config: t } = e;
                                          S({
                                            config: t,
                                            event: g,
                                            eventTarget: a,
                                            elementRoot: o,
                                            elementApi: I,
                                          }).forEach((e) => {
                                            b.push({ element: e, key: l });
                                          });
                                        }
                                      });
                                    }),
                                      b.forEach(({ element: t, key: a }) => {
                                        let o = y[a],
                                          d = (0, i.default)(
                                            o,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: s } = d,
                                          f = (
                                            s === u.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  d.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : Q(s)
                                          )
                                            ? z(s)?.(t, d)
                                            : null,
                                          p = L(
                                            {
                                              element: t,
                                              actionItem: d,
                                              elementApi: I,
                                            },
                                            f
                                          );
                                        ep({
                                          store: e,
                                          element: t,
                                          eventId: n,
                                          actionListId: l,
                                          actionItem: d,
                                          destination: p,
                                          continuous: !0,
                                          parameterId: R,
                                          actionGroups: o,
                                          smoothing: r,
                                          restingValue: c,
                                          pluginInstance: f,
                                        });
                                      });
                                  })({
                                    store: t,
                                    eventStateKey: c + m + n,
                                    eventTarget: e,
                                    eventId: c,
                                    eventConfig: a,
                                    actionListId: g,
                                    parameterGroup: d,
                                    smoothing: r,
                                    restingValue: s,
                                  });
                                });
                            }),
                          (d.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_START_ACTION ||
                            b(d.actionTypeId)) &&
                            ec({ store: t, actionListId: g, eventId: c });
                      });
                      let T = (e) => {
                          let { ixSession: n } = t.getState();
                          ed(g, (i, o, l) => {
                            let c = a[o],
                              s = n.eventState[l],
                              {
                                action: f,
                                mediaQueries: I = r.mediaQueryKeys,
                              } = c;
                            if (!w(I, n.mediaQueryKey)) return;
                            let g = (a = {}) => {
                              let n = d(
                                {
                                  store: t,
                                  element: i,
                                  event: c,
                                  eventConfig: a,
                                  nativeEvent: e,
                                  eventStateKey: l,
                                },
                                s
                              );
                              !Y(n, s) &&
                                t.dispatch((0, p.eventStateChanged)(l, n));
                            };
                            f.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(c.config)
                                  ? c.config
                                  : [c.config]
                                ).forEach(g)
                              : g();
                          });
                        },
                        E = (0, s.default)(T, 12),
                        y = ({
                          target: e = document,
                          types: a,
                          throttle: n,
                        }) => {
                          a.split(" ")
                            .filter(Boolean)
                            .forEach((a) => {
                              let i = n ? E : T;
                              e.addEventListener(a, i),
                                t.dispatch(
                                  (0, p.eventListenerAdded)(e, [a, i])
                                );
                            });
                        };
                      Array.isArray(l)
                        ? l.forEach(y)
                        : "string" == typeof l && y(e);
                    })({ logic: l, store: e, events: t });
                  });
                let { ixSession: l } = e.getState();
                l.eventListeners.length &&
                  (function (e) {
                    let t = () => {
                      eo(e);
                    };
                    ei.forEach((a) => {
                      window.addEventListener(a, t),
                        e.dispatch((0, p.eventListenerAdded)(window, [a, t]));
                    }),
                      t();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(_) && (e.className += ` ${_}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries))
          ) {
            var r;
            N({
              store: (r = e),
              select: ({ ixSession: e }) => e.mediaQueryKey,
              onChange: () => {
                ea(r),
                  M({ store: r, elementApi: I }),
                  et({ store: r, allowEvents: !0 }),
                  q();
              },
            });
          }
          e.dispatch((0, p.sessionStarted)()),
            (function (e, t) {
              let a = (n) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                i.active &&
                  (e.dispatch((0, p.animationFrameChanged)(n, o)),
                  t
                    ? !(function (e, t) {
                        let a = N({
                          store: e,
                          select: ({ ixSession: e }) => e.tick,
                          onChange: (e) => {
                            t(e), a();
                          },
                        });
                      })(e, a)
                    : requestAnimationFrame(a));
              };
              a(window.performance.now());
            })(e, l);
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: a } = t;
          a.forEach(en), D(), e.dispatch((0, p.sessionStopped)());
        }
      }
      function en({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let ei = ["resize", "orientationchange"];
      function eo(e) {
        let { ixSession: t, ixData: a } = e.getState(),
          n = window.innerWidth;
        if (n !== t.viewportWidth) {
          let { mediaQueries: t } = a;
          e.dispatch(
            (0, p.viewportWidthChanged)({ width: n, mediaQueries: t })
          );
        }
      }
      let el = (e, t) => (0, l.default)((0, r.default)(e, t), d.default),
        ed = (e, t) => {
          (0, c.default)(e, (e, a) => {
            e.forEach((e, n) => {
              t(e, a, a + m + n);
            });
          });
        },
        er = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: I,
          });
      function ec({ store: e, actionListId: t, eventId: a }) {
        let { ixData: n, ixSession: o } = e.getState(),
          { actionLists: l, events: d } = n,
          r = d[a],
          c = l[t];
        if (c && c.useFirstGroupAsInitialState) {
          let l = (0, i.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !w(
              (0, i.default)(r, "mediaQueries", n.mediaQueryKeys),
              o.mediaQueryKey
            )
          )
            return;
          l.forEach((n) => {
            let { config: i, actionTypeId: o } = n,
              l = S({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: r.target, targets: r.targets }
                    : i,
                event: r,
                elementApi: I,
              }),
              d = Q(o);
            l.forEach((i) => {
              let l = d ? z(o)?.(i, n) : null;
              ep({
                destination: L({ element: i, actionItem: n, elementApi: I }, l),
                immediate: !0,
                store: e,
                element: i,
                eventId: a,
                actionItem: n,
                actionListId: t,
                pluginInstance: l,
              });
            });
          });
        }
      }
      function es({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, c.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: a, verbose: n } = t;
            eI(t, e),
              n &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eu({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: o,
      }) {
        let { ixInstances: l, ixSession: d } = e.getState(),
          r = d.hasBoundaryNodes && a ? I.getClosestElement(a, O) : null;
        (0, c.default)(l, (a) => {
          let l = (0, i.default)(a, "actionItem.config.target.boundaryMode"),
            d = !n || a.eventStateKey === n;
          if (a.actionListId === o && a.eventId === t && d) {
            if (r && l && !I.elementContains(r, a.element)) return;
            eI(a, e),
              a.verbose &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ef({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: o,
        groupIndex: l = 0,
        immediate: d,
        verbose: r,
      }) {
        let { ixData: c, ixSession: s } = e.getState(),
          { events: u } = c,
          f = u[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: g, useFirstGroupAsInitialState: T } = (0,
          i.default)(c, `actionLists.${o}`, {});
        if (!g || !g.length) return !1;
        l >= g.length && (0, i.default)(f, "config.loop") && (l = 0),
          0 === l && T && l++;
        let E =
            (0 === l || (1 === l && T)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, i.default)(g, [l, "actionItems"], []);
        if (!y.length || !w(p, s.mediaQueryKey)) return !1;
        let m = s.hasBoundaryNodes && a ? I.getClosestElement(a, O) : null,
          v = V(y),
          R = !1;
        return (
          y.forEach((i, c) => {
            let { config: s, actionTypeId: u } = i,
              p = Q(u),
              { target: g } = s;
            if (!!g)
              S({
                config: s,
                event: f,
                eventTarget: a,
                elementRoot: g.boundaryMode ? m : null,
                elementApi: I,
              }).forEach((s, f) => {
                let g = p ? z(u)?.(s, i) : null,
                  T = p ? W(u)(s, i) : null;
                R = !0;
                let y = U({ element: s, actionItem: i }),
                  b = L({ element: s, actionItem: i, elementApi: I }, g);
                ep({
                  store: e,
                  element: s,
                  actionItem: i,
                  eventId: t,
                  eventTarget: a,
                  eventStateKey: n,
                  actionListId: o,
                  groupIndex: l,
                  isCarrier: v === c && 0 === f,
                  computedStyle: y,
                  destination: b,
                  immediate: d,
                  verbose: r,
                  pluginInstance: g,
                  pluginDuration: T,
                  instanceDelay: E,
                });
              });
          }),
          R
        );
      }
      function ep(e) {
        let t;
        let { store: a, computedStyle: n, ...i } = e,
          {
            element: o,
            actionItem: l,
            immediate: d,
            pluginInstance: r,
            continuous: c,
            restingValue: s,
            eventId: f,
          } = i,
          g = h(),
          { ixElements: T, ixSession: E, ixData: y } = a.getState(),
          b = A(T, o),
          { refState: m } = T[b] || {},
          O = I.getRefType(o),
          v = E.reducedMotion && u.ReducedMotionTypes[l.actionTypeId];
        if (v && c)
          switch (y.events[f]?.eventTypeId) {
            case u.EventTypeConsts.MOUSE_MOVE:
            case u.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let R = x(o, m, n, l, I, r);
        if (
          (a.dispatch(
            (0, p.instanceAdded)({
              instanceId: g,
              elementId: b,
              origin: R,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          eg(document.body, "ix2-animation-started", g),
          d)
        ) {
          (function (e, t) {
            let { ixParameters: a } = e.getState();
            e.dispatch((0, p.instanceStarted)(t, 0)),
              e.dispatch((0, p.animationFrameChanged)(performance.now(), a));
            let { ixInstances: n } = e.getState();
            eT(n[t], e);
          })(a, g);
          return;
        }
        N({ store: a, select: ({ ixInstances: e }) => e[g], onChange: eT }),
          !c && a.dispatch((0, p.instanceStarted)(g, E.tick));
      }
      function eI(e, t) {
        eg(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: a, actionItem: n } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: l } = i[a] || {};
        l === v && k(o, n, I), t.dispatch((0, p.instanceRemoved)(e.id));
      }
      function eg(e, t, a) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n);
      }
      function eT(e, t) {
        let {
            active: a,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: l,
            actionTypeId: d,
            renderType: r,
            current: c,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: g,
            actionListId: T,
            isCarrier: E,
            styleProp: y,
            verbose: b,
            pluginInstance: m,
          } = e,
          { ixData: O, ixSession: _ } = t.getState(),
          { events: S } = O,
          { mediaQueries: A = O.mediaQueryKeys } = S && S[u] ? S[u] : {};
        if (!!w(A, _.mediaQueryKey)) {
          if (n || a || i) {
            if (c || (r === R && i)) {
              t.dispatch((0, p.elementStateChanged)(o, d, c, l));
              let { ixElements: e } = t.getState(),
                { ref: a, refType: n, refState: i } = e[o] || {},
                s = i && i[d];
              (n === v || Q(d)) && C(a, i, s, u, l, y, I, r, m);
            }
            if (i) {
              if (E) {
                let e = ef({
                  store: t,
                  eventId: u,
                  eventTarget: f,
                  eventStateKey: g,
                  actionListId: T,
                  groupIndex: s + 1,
                  verbose: b,
                });
                b &&
                  !e &&
                  t.dispatch(
                    (0, p.actionListPlaybackChanged)({
                      actionListId: T,
                      isPlaying: !1,
                    })
                  );
              }
              eI(e, t);
            }
          }
        }
      }
    },
    8955: function (e, t, a) {
      "use strict";
      let n, i, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eg;
          },
        });
      let l = p(a(5801)),
        d = p(a(4738)),
        r = p(a(3789)),
        c = a(7087),
        s = a(1970),
        u = a(3946),
        f = a(9468);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: I,
          MOUSE_SECOND_CLICK: g,
          MOUSE_DOWN: T,
          MOUSE_UP: E,
          MOUSE_OVER: y,
          MOUSE_OUT: b,
          DROPDOWN_CLOSE: m,
          DROPDOWN_OPEN: O,
          SLIDER_ACTIVE: v,
          SLIDER_INACTIVE: R,
          TAB_ACTIVE: _,
          TAB_INACTIVE: S,
          NAVBAR_CLOSE: A,
          NAVBAR_OPEN: L,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: h,
          SCROLL_INTO_VIEW: C,
          SCROLL_OUT_OF_VIEW: M,
          PAGE_SCROLL_UP: V,
          SCROLLING_IN_VIEW: U,
          PAGE_FINISH: x,
          ECOMMERCE_CART_CLOSE: P,
          ECOMMERCE_CART_OPEN: G,
          PAGE_START: F,
          PAGE_SCROLL: w,
        } = c.EventTypeConsts,
        k = "COMPONENT_ACTIVE",
        D = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: B } = c.IX2EngineConstants,
        { getNamespacedParameterId: X } = f.IX2VanillaUtils,
        Y = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        Q = Y(({ element: e, nativeEvent: t }) => e === t.target),
        z = Y(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, l.default)([Q, z]),
        H = (e, t) => {
          if (t) {
            let { ixData: a } = e.getState(),
              { events: n } = a,
              i = n[t];
            if (i && !ea[i.eventTypeId]) return i;
          }
          return null;
        },
        j = ({ store: e, event: t }) => {
          let { action: a } = t,
            { autoStopEventId: n } = a.config;
          return !!H(e, n);
        },
        $ = ({ store: e, event: t, element: a, eventStateKey: n }, i) => {
          let { action: o, id: l } = t,
            { actionListId: r, autoStopEventId: c } = o.config,
            u = H(e, c);
          return (
            u &&
              (0, s.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: a,
                eventStateKey: c + B + n.split(B)[1],
                actionListId: (0, d.default)(u, "action.config.actionListId"),
              }),
            (0, s.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: a,
              eventStateKey: n,
              actionListId: r,
            }),
            (0, s.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: a,
              eventStateKey: n,
              actionListId: r,
            }),
            i
          );
        },
        K = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n,
        q = { handler: K(W, $) },
        Z = { ...q, types: [k, D].join(" ") },
        J = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        ee = "mouseover mouseout",
        et = { types: J },
        ea = { PAGE_START: F, PAGE_FINISH: x },
        en = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ei = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        eo = ({ element: e, nativeEvent: t }) => {
          let { type: a, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if ("mouseover" === a && o) return !0;
          let l = e.contains(i);
          return ("mouseout" === a && !!o && !!l) || !1;
        },
        el = (e) => {
          let {
              element: t,
              event: { config: a },
            } = e,
            { clientWidth: n, clientHeight: i } = en(),
            o = a.scrollOffsetValue,
            l = a.scrollOffsetUnit,
            d = "PX" === l ? o : (i * (o || 0)) / 100;
          return ei(t.getBoundingClientRect(), {
            left: 0,
            top: d,
            right: n,
            bottom: i - d,
          });
        },
        ed = (e) => (t, a) => {
          let { type: n } = t.nativeEvent,
            i = -1 !== [k, D].indexOf(n) ? n === k : a.isActive,
            o = { ...a, isActive: i };
          return a && o.isActive === a.isActive ? o : e(t, o) || o;
        },
        er = (e) => (t, a) => {
          let n = { elementHovered: eo(t) };
          return (
            ((a ? n.elementHovered !== a.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        },
        ec =
          (e) =>
          (t, a = {}) => {
            let n, i;
            let { stiffScrollTop: o, scrollHeight: l, innerHeight: d } = en(),
              {
                event: { config: r, eventTypeId: c },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = r,
              f = l - d,
              p = Number((o / f).toFixed(2));
            if (a && a.percentTop === p) return a;
            let I = ("PX" === u ? s : (d * (s || 0)) / 100) / f,
              g = 0;
            a &&
              ((n = p > a.percentTop),
              (g = (i = a.scrollingDown !== n) ? p : a.anchorTop));
            let T = c === h ? p >= g + I : p <= g - I,
              E = {
                ...a,
                percentTop: p,
                inBounds: T,
                anchorTop: g,
                scrollingDown: n,
              };
            return (a && T && (i || E.inBounds !== a.inBounds) && e(t, E)) || E;
          },
        es = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        eu =
          (e) =>
          (t, a = { clickCount: 0 }) => {
            let n = { clickCount: (a.clickCount % 2) + 1 };
            return (n.clickCount !== a.clickCount && e(t, n)) || n;
          },
        ef = (e = !0) => ({
          ...Z,
          handler: K(
            e ? W : Q,
            ed((e, t) => (t.isActive ? q.handler(e, t) : t))
          ),
        }),
        ep = (e = !0) => ({
          ...Z,
          handler: K(
            e ? W : Q,
            ed((e, t) => (t.isActive ? t : q.handler(e, t)))
          ),
        });
      let eI = {
        ...et,
        handler:
          ((n = (e, t) => {
            let { elementVisible: a } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: l } = o;
            return !l[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === C) === a
              ? ($(e), { ...t, triggered: !0 })
              : t;
          }),
          (e, t) => {
            let a = { ...t, elementVisible: el(e) };
            return (
              ((t ? a.elementVisible !== t.elementVisible : a.elementVisible) &&
                n(e, a)) ||
              a
            );
          }),
      };
      let eg = {
        [v]: ef(),
        [R]: ep(),
        [O]: ef(),
        [m]: ep(),
        [L]: ef(!1),
        [A]: ep(!1),
        [_]: ef(),
        [S]: ep(),
        [G]: { types: "ecommerce-cart-open", handler: K(W, $) },
        [P]: { types: "ecommerce-cart-close", handler: K(W, $) },
        [I]: {
          types: "click",
          handler: K(
            W,
            eu((e, { clickCount: t }) => {
              j(e) ? 1 === t && $(e) : $(e);
            })
          ),
        },
        [g]: {
          types: "click",
          handler: K(
            W,
            eu((e, { clickCount: t }) => {
              2 === t && $(e);
            })
          ),
        },
        [T]: { ...q, types: "mousedown" },
        [E]: { ...q, types: "mouseup" },
        [y]: {
          types: ee,
          handler: K(
            W,
            er((e, t) => {
              t.elementHovered && $(e);
            })
          ),
        },
        [b]: {
          types: ee,
          handler: K(
            W,
            er((e, t) => {
              !t.elementHovered && $(e);
            })
          ),
        },
        [N]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: a,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: l,
                selectedAxis: d,
                continuousParameterGroupId: r,
                reverse: s,
                restingState: f = 0,
              } = a,
              {
                clientX: p = o.clientX,
                clientY: I = o.clientY,
                pageX: g = o.pageX,
                pageY: T = o.pageY,
              } = n,
              E = "X_AXIS" === d,
              y = "mouseout" === n.type,
              b = f / 100,
              m = r,
              O = !1;
            switch (l) {
              case c.EventBasedOn.VIEWPORT:
                b = E
                  ? Math.min(p, window.innerWidth) / window.innerWidth
                  : Math.min(I, window.innerHeight) / window.innerHeight;
                break;
              case c.EventBasedOn.PAGE: {
                let {
                  scrollLeft: e,
                  scrollTop: t,
                  scrollWidth: a,
                  scrollHeight: n,
                } = en();
                b = E ? Math.min(e + g, a) / a : Math.min(t + T, n) / n;
                break;
              }
              case c.EventBasedOn.ELEMENT:
              default: {
                m = X(i, r);
                let e = 0 === n.type.indexOf("mouse");
                if (e && !0 !== W({ element: t, nativeEvent: n })) break;
                let a = t.getBoundingClientRect(),
                  { left: o, top: l, width: d, height: c } = a;
                if (!e && !es({ left: p, top: I }, a)) break;
                (O = !0), (b = E ? (p - o) / d : (I - l) / c);
              }
            }
            return (
              y && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
              (l !== c.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                ((b = s ? 1 - b : b),
                e.dispatch((0, u.parameterChanged)(m, b))),
              { elementHovered: O, clientX: p, clientY: I, pageX: g, pageY: T }
            );
          },
        },
        [w]: {
          types: J,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: a, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: l } = en(),
              d = i / (o - l);
            (d = n ? 1 - d : d), e.dispatch((0, u.parameterChanged)(a, d));
          },
        },
        [U]: {
          types: J,
          handler: (
            { element: e, store: t, eventConfig: a, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: l,
                scrollWidth: d,
                scrollHeight: r,
                clientHeight: s,
              } = en(),
              {
                basedOn: f,
                selectedAxis: p,
                continuousParameterGroupId: I,
                startsEntering: g,
                startsExiting: T,
                addEndOffset: E,
                addStartOffset: y,
                addOffsetValue: b = 0,
                endOffsetValue: m = 0,
              } = a;
            if (f === c.EventBasedOn.VIEWPORT) {
              let e = "X_AXIS" === p ? o / d : l / r;
              return (
                e !== i.scrollPercent &&
                  t.dispatch((0, u.parameterChanged)(I, e)),
                { scrollPercent: e }
              );
            }
            {
              let a = X(n, I),
                o = e.getBoundingClientRect(),
                l = (y ? b : 0) / 100,
                d = (E ? m : 0) / 100;
              (l = g ? l : 1 - l), (d = T ? d : 1 - d);
              let c = o.top + Math.min(o.height * l, s),
                f = o.top + o.height * d,
                p = Math.min(s + (f - c), r),
                O = Math.min(Math.max(0, s - c), p) / p;
              return (
                O !== i.scrollPercent &&
                  t.dispatch((0, u.parameterChanged)(a, O)),
                { scrollPercent: O }
              );
            }
          },
        },
        [C]: eI,
        [M]: eI,
        [h]: {
          ...et,
          handler: ec((e, t) => {
            t.scrollingDown && $(e);
          }),
        },
        [V]: {
          ...et,
          handler: ec((e, t) => {
            !t.scrollingDown && $(e);
          }),
        },
        [x]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: K(
            Q,
            ((i = $),
            (e, t) => {
              let a = { finished: "complete" === document.readyState };
              return a.finished && !(t && t.finshed) && i(e), a;
            })
          ),
        },
        [F]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: K(Q, ((o = $), (e, t) => (t || o(e), { started: !0 }))),
        },
      };
    },
    4609: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: n } = a(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) => {
          if (t.type === n) return t.payload.ixData || Object.freeze({});
          return e;
        };
    },
    7718: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let n = a(7087),
        i = a(9468),
        o = a(1185),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_STOPPED: d,
          IX2_INSTANCE_ADDED: r,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = n.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: I,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: g } = n.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: E,
          getStyleProp: y,
        } = i.IX2VanillaUtils,
        b = (e, t) => {
          let a, n, i, l;
          let {
              position: d,
              parameterId: r,
              actionGroups: c,
              destinationKeys: s,
              smoothing: u,
              restingValue: I,
              actionTypeId: g,
              customEasingFn: E,
              skipMotion: y,
              skipToValue: b,
            } = e,
            { parameters: m } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = m[r];
          null == v && ((O = 1), (v = I));
          let R = f((Math.max(v, 0) || 0) - d),
            _ = y ? b : f(d + R * O),
            S = 100 * _;
          if (_ === d && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: o } = c[e];
            if ((0 === e && (a = o[0]), S >= t)) {
              a = o[0];
              let d = c[e + 1],
                r = d && S !== t;
              (n = r ? d.actionItems[0] : null),
                r && ((i = t / 100), (l = (d.keyframe - t) / 100));
            }
          }
          let A = {};
          if (a && !n)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              A[t] = T(g, t, a.config);
            }
          else if (a && n && void 0 !== i && void 0 !== l) {
            let e = (_ - i) / l,
              t = p(a.config.easing, e, E);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = T(g, i, a.config),
                l = (T(g, i, n.config) - o) * t + o;
              A[i] = l;
            }
          }
          return (0, o.merge)(e, { position: _, current: A });
        },
        m = (e, t) => {
          let {
              active: a,
              origin: n,
              start: i,
              immediate: l,
              renderType: d,
              verbose: r,
              actionItem: c,
              destination: s,
              destinationKeys: u,
              pluginDuration: I,
              instanceDelay: T,
              customEasingFn: E,
              skipMotion: y,
            } = e,
            b = c.config.easing,
            { duration: m, delay: O } = c.config;
          null != I && (m = I),
            (O = null != T ? T : O),
            d === g ? (m = 0) : (l || y) && (m = O = 0);
          let { now: v } = t.payload;
          if (a && n) {
            let t = v - (i + O);
            if (r) {
              let t = m + O,
                a = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * a);
            }
            if (t < 0) return e;
            let a = f(Math.min(Math.max(0, t / m), 1)),
              l = p(b, a, E),
              d = {},
              c = null;
            return (
              u.length &&
                (c = u.reduce((e, t) => {
                  let a = s[t],
                    i = parseFloat(n[t]) || 0,
                    o = parseFloat(a) - i;
                  return (e[t] = o * l + i), e;
                }, {})),
              (d.current = c),
              (d.position = a),
              1 === a && ((d.active = !1), (d.complete = !0)),
              (0, o.merge)(e, d)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case l:
              return t.payload.ixInstances || Object.freeze({});
            case d:
              return Object.freeze({});
            case r: {
              let {
                  instanceId: a,
                  elementId: n,
                  actionItem: i,
                  eventId: l,
                  eventTarget: d,
                  eventStateKey: r,
                  actionListId: c,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: T,
                  continuous: b,
                  parameterId: m,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: R,
                  pluginInstance: _,
                  pluginDuration: S,
                  instanceDelay: A,
                  skipMotion: L,
                  skipToValue: N,
                } = t.payload,
                { actionTypeId: h } = i,
                C = E(h),
                M = y(C, h),
                V = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: U } = i.config;
              return (0, o.set)(e, a, {
                id: a,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: V,
                immediate: g,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: h,
                eventId: l,
                eventTarget: d,
                eventStateKey: r,
                actionListId: c,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: M,
                continuous: b,
                parameterId: m,
                actionGroups: O,
                smoothing: v,
                restingValue: R,
                pluginInstance: _,
                pluginDuration: S,
                instanceDelay: A,
                skipMotion: L,
                skipToValue: N,
                customEasingFn:
                  Array.isArray(U) && 4 === U.length ? I(U) : void 0,
              });
            }
            case c: {
              let { instanceId: a, time: n } = t.payload;
              return (0, o.mergeIn)(e, [a], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case s: {
              let { instanceId: a } = t.payload;
              if (!e[a]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== a && (n[o] = e[o]);
              }
              return n;
            }
            case u: {
              let a = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let l = 0; l < i; l++) {
                let i = n[l],
                  d = e[i],
                  r = d.continuous ? b : m;
                a = (0, o.set)(a, i, r(d, t));
              }
              return a;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: n,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = a(7087).IX2EngineActionTypes,
        l = (e = {}, t) => {
          switch (t.type) {
            case n:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: a, value: n } = t.payload;
              return (e[a] = n), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = a(9516),
        i = a(4609),
        o = a(628),
        l = a(5862),
        d = a(9468),
        r = a(7718),
        c = a(1540),
        { ixElements: s } = d.IX2ElementsReducer,
        u = (0, n.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: l.ixSession,
          ixElements: s,
          ixInstances: r.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: l,
          IX2_STOP_REQUESTED: d,
          IX2_CLEAR_REQUESTED: r,
        } = n.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [l]: { value: "playback" },
          [d]: { value: "stop" },
          [r]: { value: "clear" },
        }),
        u = (e = c, t) => {
          if (t.type in s) {
            let a = [s[t.type]];
            return (0, i.setIn)(e, [a], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: l,
          IX2_TEST_FRAME_RENDERED: d,
          IX2_SESSION_STOPPED: r,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: I,
        } = n.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = g, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: a, reducedMotion: n } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: a, reducedMotion: n });
            }
            case l:
              return (0, i.set)(e, "active", !0);
            case d: {
              let {
                payload: { step: a = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + a);
            }
            case r:
              return g;
            case u: {
              let {
                payload: { now: a },
              } = t;
              return (0, i.set)(e, "tick", a);
            }
            case c: {
              let a = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", a);
            }
            case s: {
              let { stateKey: a, newState: n } = t.payload;
              return (0, i.setIn)(e, ["eventState", a], n);
            }
            case f: {
              let { actionListId: a, isPlaying: n } = t.payload;
              return (0, i.setIn)(e, ["playbackState", a], n);
            }
            case p: {
              let { width: a, mediaQueries: n } = t.payload,
                o = n.length,
                l = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = n[e];
                if (a >= i && a <= o) {
                  l = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: a, mediaQueryKey: l });
            }
            case I:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return r;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return o;
        },
        getPluginDuration: function () {
          return n;
        },
        getPluginOrigin: function () {
          return i;
        },
        renderPlugin: function () {
          return d;
        },
      });
      let a = (e) => e.value,
        n = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let a = parseFloat(e.getAttribute("data-duration"));
          return a > 0
            ? 1e3 * a
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        i = (e) => e || { value: 0 },
        o = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let a = t.createInstance(e);
          return a.stop(), a.setSubframe(!0), a;
        },
        d = (e, t, a) => {
          if (!e) return;
          let n = t[a.actionTypeId].value / 100;
          e.goToFrame(e.frames * n);
        },
        r = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return u;
        },
      });
      let a = "--wf-rive-fit",
        n = "--wf-rive-alignment",
        i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        d = () => null,
        r = (e, t) => {
          if (e) return e;
          let a = {},
            { inputs: n = {} } = t.config.value;
          for (let e in n) null == n[e] && (a[e] = 0);
          return a;
        },
        c = (e) => e.value.inputs ?? {},
        s = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let a = t?.config?.target?.pluginElement;
          return a ? i(a) : null;
        },
        u = (e, { PLUGIN_RIVE: t }, i) => {
          let l = o();
          if (!l) return;
          let d = l.getInstance(e),
            r = l.rive.StateMachineInputType,
            { name: c, inputs: s = {} } = i.config.value || {};
          function u(e) {
            if (e.loaded) i();
            else {
              let t = () => {
                i(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function i() {
              let i = e.stateMachineInputs(c);
              if (null != i) {
                if ((!e.isPlaying && e.play(c, !1), a in s || n in s)) {
                  let t = e.layout,
                    i = s[a] ?? t.fit,
                    o = s[n] ?? t.alignment;
                  (i !== t.fit || o !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: i, alignment: o }));
                }
                for (let e in s) {
                  if (e === a || e === n) continue;
                  let o = i.find((t) => t.name === e);
                  if (null != o)
                    switch (o.type) {
                      case r.Boolean:
                        if (null != s[e]) {
                          let t = !!s[e];
                          o.value = t;
                        }
                        break;
                      case r.Number: {
                        let a = t[e];
                        null != a && (o.value = a);
                        break;
                      }
                      case r.Trigger:
                        s[e] && o.fire();
                    }
                }
              }
            }
          }
          d?.rive ? u(d.rive) : l.setLoadHandler(e, u);
        },
        f = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return u;
        },
      });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        n = () => window.Webflow.require("spline"),
        i = (e, t) => e.filter((e) => !t.includes(e)),
        o = (e, t) => e.value[t],
        l = () => null,
        d = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        r = (e, t) => {
          let a = Object.keys(t.config.value);
          if (e) {
            let t = i(a, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = d[t]), e), e) : e;
          }
          return a.reduce((e, t) => ((e[t] = d[t]), e), {});
        },
        c = (e) => e.value,
        s = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        u = (e, t, a) => {
          let i = n();
          if (!i) return;
          let o = i.getInstance(e),
            l = a.config.target.objectId,
            d = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let a = l && e.findObjectById(l);
              if (!a) return;
              let { PLUGIN_SPLINE: n } = t;
              null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ);
            };
          o ? d(o.spline) : i.setLoadHandler(e, d);
        },
        f = () => null;
    },
    1407: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return u;
        },
        createPluginInstance: function () {
          return r;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return s;
        },
      });
      let n = a(380),
        i = (e, t) => e.value[t],
        o = () => null,
        l = (e, t) => {
          if (e) return e;
          let a = t.config.value,
            i = t.config.target.objectId,
            o = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != a.size
            ? { size: parseInt(o, 10) }
            : "%" === a.unit || "-" === a.unit
            ? { size: parseFloat(o) }
            : null != a.red && null != a.green && null != a.blue
            ? (0, n.normalizeColor)(o)
            : void 0;
        },
        d = (e) => e.value,
        r = () => null,
        c = {
          color: {
            match: ({ red: e, green: t, blue: a, alpha: n }) =>
              [e, t, a, n].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: a, alpha: n }) =>
              `rgba(${e}, ${t}, ${a}, ${n})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => {
              if ("-" === t) return e;
              return `${e}${t}`;
            },
          },
        },
        s = (e, t, a) => {
          let {
              target: { objectId: n },
              value: { unit: i },
            } = a.config,
            o = t.PLUGIN_VARIABLE,
            l = Object.values(c).find((e) => e.match(o, i));
          l && document.documentElement.style.setProperty(n, l.getValue(o, i));
        },
        u = (e, t) => {
          let a = t.config.target.objectId;
          document.documentElement.style.removeProperty(a);
        };
    },
    3690: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = a(7087),
        i = c(a(7377)),
        o = c(a(2866)),
        l = c(a(2570)),
        d = c(a(1407));
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = r(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
      let s = new Map([
        [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [n.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [n.ActionTypeConsts.PLUGIN_RIVE, { ...l }],
        [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...d }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return y;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return f;
        },
        IX2_CLEAR_REQUESTED: function () {
          return c;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return E;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return s;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return u;
        },
        IX2_INSTANCE_ADDED: function () {
          return I;
        },
        IX2_INSTANCE_REMOVED: function () {
          return T;
        },
        IX2_INSTANCE_STARTED: function () {
          return g;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return m;
        },
        IX2_PARAMETER_CHANGED: function () {
          return p;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return d;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return n;
        },
        IX2_SESSION_STARTED: function () {
          return i;
        },
        IX2_SESSION_STOPPED: function () {
          return o;
        },
        IX2_STOP_REQUESTED: function () {
          return r;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      });
      let a = "IX2_RAW_DATA_IMPORTED",
        n = "IX2_SESSION_INITIALIZED",
        i = "IX2_SESSION_STARTED",
        o = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        d = "IX2_PLAYBACK_REQUESTED",
        r = "IX2_STOP_REQUESTED",
        c = "IX2_CLEAR_REQUESTED",
        s = "IX2_EVENT_LISTENER_ADDED",
        u = "IX2_EVENT_STATE_CHANGED",
        f = "IX2_ANIMATION_FRAME_CHANGED",
        p = "IX2_PARAMETER_CHANGED",
        I = "IX2_INSTANCE_ADDED",
        g = "IX2_INSTANCE_STARTED",
        T = "IX2_INSTANCE_REMOVED",
        E = "IX2_ELEMENT_STATE_CHANGED",
        y = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        m = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ABSTRACT_NODE: function () {
          return J;
        },
        AUTO: function () {
          return X;
        },
        BACKGROUND: function () {
          return G;
        },
        BACKGROUND_COLOR: function () {
          return P;
        },
        BAR_DELIMITER: function () {
          return z;
        },
        BORDER_COLOR: function () {
          return F;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return W;
        },
        COLON_DELIMITER: function () {
          return Q;
        },
        COLOR: function () {
          return w;
        },
        COMMA_DELIMITER: function () {
          return Y;
        },
        CONFIG_UNIT: function () {
          return I;
        },
        CONFIG_VALUE: function () {
          return s;
        },
        CONFIG_X_UNIT: function () {
          return u;
        },
        CONFIG_X_VALUE: function () {
          return d;
        },
        CONFIG_Y_UNIT: function () {
          return f;
        },
        CONFIG_Y_VALUE: function () {
          return r;
        },
        CONFIG_Z_UNIT: function () {
          return p;
        },
        CONFIG_Z_VALUE: function () {
          return c;
        },
        DISPLAY: function () {
          return k;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return D;
        },
        FONT_VARIATION_SETTINGS: function () {
          return V;
        },
        HEIGHT: function () {
          return x;
        },
        HTML_ELEMENT: function () {
          return q;
        },
        IMMEDIATE_CHILDREN: function () {
          return H;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return C;
        },
        PARENT: function () {
          return $;
        },
        PLAIN_OBJECT: function () {
          return Z;
        },
        PRESERVE_3D: function () {
          return K;
        },
        RENDER_GENERAL: function () {
          return et;
        },
        RENDER_PLUGIN: function () {
          return en;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return ee;
        },
        ROTATE_X: function () {
          return _;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return A;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return m;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return v;
        },
        SIBLINGS: function () {
          return j;
        },
        SKEW: function () {
          return L;
        },
        SKEW_X: function () {
          return N;
        },
        SKEW_Y: function () {
          return h;
        },
        TRANSFORM: function () {
          return g;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return T;
        },
        TRANSLATE_Y: function () {
          return E;
        },
        TRANSLATE_Z: function () {
          return y;
        },
        WF_PAGE: function () {
          return n;
        },
        WIDTH: function () {
          return U;
        },
        WILL_CHANGE: function () {
          return B;
        },
        W_MOD_IX: function () {
          return o;
        },
        W_MOD_JS: function () {
          return i;
        },
      });
      let a = "|",
        n = "data-wf-page",
        i = "w-mod-js",
        o = "w-mod-ix",
        l = ".w-dyn-item",
        d = "xValue",
        r = "yValue",
        c = "zValue",
        s = "value",
        u = "xUnit",
        f = "yUnit",
        p = "zUnit",
        I = "unit",
        g = "transform",
        T = "translateX",
        E = "translateY",
        y = "translateZ",
        b = "translate3d",
        m = "scaleX",
        O = "scaleY",
        v = "scaleZ",
        R = "scale3d",
        _ = "rotateX",
        S = "rotateY",
        A = "rotateZ",
        L = "skew",
        N = "skewX",
        h = "skewY",
        C = "opacity",
        M = "filter",
        V = "font-variation-settings",
        U = "width",
        x = "height",
        P = "backgroundColor",
        G = "background",
        F = "borderColor",
        w = "color",
        k = "display",
        D = "flex",
        B = "willChange",
        X = "AUTO",
        Y = ",",
        Q = ":",
        z = "|",
        W = "CHILDREN",
        H = "IMMEDIATE_CHILDREN",
        j = "SIBLINGS",
        $ = "PARENT",
        K = "preserve-3d",
        q = "HTML_ELEMENT",
        Z = "PLAIN_OBJECT",
        J = "ABSTRACT_NODE",
        ee = "RENDER_TRANSFORM",
        et = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        en = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ActionAppliesTo: function () {
          return n;
        },
        ActionTypeConsts: function () {
          return a;
        },
      });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        n = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ActionTypeConsts: function () {
          return i.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return o;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return n.QuickEffectIds;
        },
      });
      let n = d(a(1833), t),
        i = d(a(262), t);
      d(a(8704), t), d(a(3213), t);
      let o = c(a(8023)),
        l = c(a(2686));
      function d(e, t) {
        return (
          Object.keys(e).forEach(function (a) {
            "default" !== a &&
              !Object.prototype.hasOwnProperty.call(t, a) &&
              Object.defineProperty(t, a, {
                enumerable: !0,
                get: function () {
                  return e[a];
                },
              });
          }),
          e
        );
      }
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = r(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    3213: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: n,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: l,
          STYLE_SIZE: d,
          STYLE_FILTER: r,
          STYLE_FONT_VARIATION: c,
        } = a(262).ActionTypeConsts,
        s = { [n]: !0, [i]: !0, [o]: !0, [l]: !0, [d]: !0, [r]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        EventAppliesTo: function () {
          return n;
        },
        EventBasedOn: function () {
          return i;
        },
        EventContinuousMouseAxes: function () {
          return o;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return r;
        },
        QuickEffectIds: function () {
          return d;
        },
      });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        n = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        i = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        o = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        d = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        r = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let a = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function n(e) {
        let t, n, i;
        let o = 1,
          l = e.replace(/\s/g, "").toLowerCase(),
          d = ("string" == typeof a[l] ? a[l].toLowerCase() : null) || l;
        if (d.startsWith("#")) {
          let e = d.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (n = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (n = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (d.startsWith("rgba")) {
          let e = d.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (d.startsWith("rgb")) {
          let e = d.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (d.startsWith("hsla")) {
          let e, a, l;
          let r = d.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(r[0]),
            s = parseFloat(r[1].replace("%", "")) / 100,
            u = parseFloat(r[2].replace("%", "")) / 100;
          o = parseFloat(r[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            I = u - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (a = p), (l = 0))
            : c >= 60 && c < 120
            ? ((e = p), (a = f), (l = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (a = f), (l = p))
            : c >= 180 && c < 240
            ? ((e = 0), (a = p), (l = f))
            : c >= 240 && c < 300
            ? ((e = p), (a = 0), (l = f))
            : ((e = f), (a = 0), (l = p)),
            (t = Math.round((e + I) * 255)),
            (n = Math.round((a + I) * 255)),
            (i = Math.round((l + I) * 255));
        } else if (d.startsWith("hsl")) {
          let e, a, o;
          let l = d.match(/hsl\(([^)]+)\)/)[1].split(","),
            r = parseFloat(l[0]),
            c = parseFloat(l[1].replace("%", "")) / 100,
            s = parseFloat(l[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * c,
            f = u * (1 - Math.abs(((r / 60) % 2) - 1)),
            p = s - u / 2;
          r >= 0 && r < 60
            ? ((e = u), (a = f), (o = 0))
            : r >= 60 && r < 120
            ? ((e = f), (a = u), (o = 0))
            : r >= 120 && r < 180
            ? ((e = 0), (a = u), (o = f))
            : r >= 180 && r < 240
            ? ((e = 0), (a = f), (o = u))
            : r >= 240 && r < 300
            ? ((e = f), (a = 0), (o = u))
            : ((e = u), (a = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (n = Math.round((a + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: n, blue: i, alpha: o };
      }
    },
    9468: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        IX2BrowserSupport: function () {
          return n;
        },
        IX2EasingUtils: function () {
          return o;
        },
        IX2Easings: function () {
          return i;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return d;
        },
        IX2VanillaUtils: function () {
          return r;
        },
      });
      let n = s(a(2662)),
        i = s(a(8686)),
        o = s(a(3767)),
        l = s(a(5861)),
        d = s(a(1799)),
        r = s(a(4124));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = c(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    2662: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ELEMENT_MATCHES: function () {
          return l;
        },
        FLEX_PREFIXED: function () {
          return d;
        },
        IS_BROWSER_ENV: function () {
          return i;
        },
        TRANSFORM_PREFIXED: function () {
          return r;
        },
        TRANSFORM_STYLE_PREFIXED: function () {
          return s;
        },
        withBrowser: function () {
          return o;
        },
      });
      let n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(9777)),
        i = "undefined" != typeof window,
        o = (e, t) => (i ? e() : t),
        l = o(() =>
          (0, n.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        d = o(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n];
              if (((e.style.display = a), e.style.display === a)) return a;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        r = o(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n] + "Transform";
              if (void 0 !== e.style[a]) return a;
            }
          }
          return "transform";
        }, "transform"),
        c = r.split("transform")[0],
        s = c ? c + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        applyEasing: function () {
          return r;
        },
        createBezierEasing: function () {
          return d;
        },
        optimizeFloat: function () {
          return l;
        },
      });
      let n = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = o(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var d = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              d && (d.get || d.set)
                ? Object.defineProperty(n, l, d)
                : (n[l] = e[l]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(8686)),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(1361));
      function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (o = function (e) {
          return e ? a : t;
        })(e);
      }
      function l(e, t = 5, a = 10) {
        let n = Math.pow(a, t),
          i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function d(e) {
        return (0, i.default)(...e);
      }
      function r(e, t, a) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : a
          ? l(t > 0 ? a(t) : t)
          : l(t > 0 && e && n[e] ? n[e](t) : t);
      }
    },
    8686: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        bounce: function () {
          return k;
        },
        bouncePast: function () {
          return D;
        },
        ease: function () {
          return i;
        },
        easeIn: function () {
          return o;
        },
        easeInOut: function () {
          return d;
        },
        easeOut: function () {
          return l;
        },
        inBack: function () {
          return C;
        },
        inCirc: function () {
          return A;
        },
        inCubic: function () {
          return u;
        },
        inElastic: function () {
          return U;
        },
        inExpo: function () {
          return R;
        },
        inOutBack: function () {
          return V;
        },
        inOutCirc: function () {
          return N;
        },
        inOutCubic: function () {
          return p;
        },
        inOutElastic: function () {
          return P;
        },
        inOutExpo: function () {
          return S;
        },
        inOutQuad: function () {
          return s;
        },
        inOutQuart: function () {
          return T;
        },
        inOutQuint: function () {
          return b;
        },
        inOutSine: function () {
          return v;
        },
        inQuad: function () {
          return r;
        },
        inQuart: function () {
          return I;
        },
        inQuint: function () {
          return E;
        },
        inSine: function () {
          return m;
        },
        outBack: function () {
          return M;
        },
        outBounce: function () {
          return h;
        },
        outCirc: function () {
          return L;
        },
        outCubic: function () {
          return f;
        },
        outElastic: function () {
          return x;
        },
        outExpo: function () {
          return _;
        },
        outQuad: function () {
          return c;
        },
        outQuart: function () {
          return g;
        },
        outQuint: function () {
          return y;
        },
        outSine: function () {
          return O;
        },
        swingFrom: function () {
          return F;
        },
        swingFromTo: function () {
          return G;
        },
        swingTo: function () {
          return w;
        },
      });
      let n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(1361)),
        i = (0, n.default)(0.25, 0.1, 0.25, 1),
        o = (0, n.default)(0.42, 0, 1, 1),
        l = (0, n.default)(0, 0, 0.58, 1),
        d = (0, n.default)(0.42, 0, 0.58, 1);
      function r(e) {
        return Math.pow(e, 2);
      }
      function c(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function s(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function u(e) {
        return Math.pow(e, 3);
      }
      function f(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function I(e) {
        return Math.pow(e, 4);
      }
      function g(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function E(e) {
        return Math.pow(e, 5);
      }
      function y(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function m(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function O(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function v(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function _(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function S(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function A(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function L(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function N(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function h(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function C(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function V(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!a && (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            -(
              n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a)
            ));
      }
      function x(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!a && (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / a) +
              1);
      }
      function P(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (!a && (a = 0.3 * 1.5),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            e < 1)
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a) *
              0.5 +
            1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function w(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function k(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function D(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
        if (e < 2.5 / 2.75)
          return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
        else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return r;
        },
        isPluginType: function () {
          return o;
        },
        renderPlugin: function () {
          return f;
        },
      });
      let n = a(2662),
        i = a(3690);
      function o(e) {
        return i.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!n.IS_BROWSER_ENV) return () => null;
          let a = i.pluginMethodMap.get(t);
          if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
          let o = a[e];
          if (!o) throw Error(`IX2 invalid plugin method: ${e}`);
          return o;
        },
        d = l("getPluginConfig"),
        r = l("getPluginOrigin"),
        c = l("getPluginDuration"),
        s = l("getPluginDestination"),
        u = l("createPluginInstance"),
        f = l("renderPlugin"),
        p = l("clearPlugin");
    },
    4124: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        cleanupHTMLElement: function () {
          return eY;
        },
        clearAllStyles: function () {
          return eD;
        },
        clearObjectCache: function () {
          return ec;
        },
        getActionListProgress: function () {
          return eH;
        },
        getAffectedElements: function () {
          return ey;
        },
        getComputedStyle: function () {
          return eb;
        },
        getDestinationValues: function () {
          return eL;
        },
        getElementId: function () {
          return ep;
        },
        getInstanceId: function () {
          return eu;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eA;
        },
        getMaxDurationItemIndex: function () {
          return eW;
        },
        getNamespacedParameterId: function () {
          return eK;
        },
        getRenderType: function () {
          return eN;
        },
        getStyleProp: function () {
          return eh;
        },
        mediaQueriesEqual: function () {
          return eZ;
        },
        observeStore: function () {
          return eT;
        },
        reduceListToGroup: function () {
          return ej;
        },
        reifyState: function () {
          return eI;
        },
        renderHTMLElement: function () {
          return eC;
        },
        shallowEqual: function () {
          return r.default;
        },
        shouldAllowMediaQuery: function () {
          return eq;
        },
        shouldNamespaceEventParameter: function () {
          return e$;
        },
        stringifyTarget: function () {
          return eJ;
        },
      });
      let n = p(a(4075)),
        i = p(a(1455)),
        o = p(a(5720)),
        l = a(1185),
        d = a(7087),
        r = p(a(7164)),
        c = a(3767),
        s = a(380),
        u = a(1799),
        f = a(2662);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: I,
          TRANSFORM: g,
          TRANSLATE_3D: T,
          SCALE_3D: E,
          ROTATE_X: y,
          ROTATE_Y: b,
          ROTATE_Z: m,
          SKEW: O,
          PRESERVE_3D: v,
          FLEX: R,
          OPACITY: _,
          FILTER: S,
          FONT_VARIATION_SETTINGS: A,
          WIDTH: L,
          HEIGHT: N,
          BACKGROUND_COLOR: h,
          BORDER_COLOR: C,
          COLOR: M,
          CHILDREN: V,
          IMMEDIATE_CHILDREN: U,
          SIBLINGS: x,
          PARENT: P,
          DISPLAY: G,
          WILL_CHANGE: F,
          AUTO: w,
          COMMA_DELIMITER: k,
          COLON_DELIMITER: D,
          BAR_DELIMITER: B,
          RENDER_TRANSFORM: X,
          RENDER_GENERAL: Y,
          RENDER_STYLE: Q,
          RENDER_PLUGIN: z,
        } = d.IX2EngineConstants,
        {
          TRANSFORM_MOVE: W,
          TRANSFORM_SCALE: H,
          TRANSFORM_ROTATE: j,
          TRANSFORM_SKEW: $,
          STYLE_OPACITY: K,
          STYLE_FILTER: q,
          STYLE_FONT_VARIATION: Z,
          STYLE_SIZE: J,
          STYLE_BACKGROUND_COLOR: ee,
          STYLE_BORDER: et,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: en,
          OBJECT_VALUE: ei,
        } = d.ActionTypeConsts,
        eo = (e) => e.trim(),
        el = Object.freeze({ [ee]: h, [et]: C, [ea]: M }),
        ed = Object.freeze({
          [f.TRANSFORM_PREFIXED]: g,
          [h]: I,
          [_]: _,
          [S]: S,
          [L]: L,
          [N]: N,
          [A]: A,
        }),
        er = new Map();
      function ec() {
        er.clear();
      }
      let es = 1;
      function eu() {
        return "i" + es++;
      }
      let ef = 1;
      function ep(e, t) {
        for (let a in e) {
          let n = e[a];
          if (n && n.ref === t) return n.id;
        }
        return "e" + ef++;
      }
      function eI({ events: e, actionLists: t, site: a } = {}) {
        let n = (0, i.default)(
            e,
            (e, t) => {
              let { eventTypeId: a } = t;
              return !e[a] && (e[a] = {}), (e[a][t.id] = t), e;
            },
            {}
          ),
          o = a && a.mediaQueries,
          l = [];
        return (
          o
            ? (l = o.map((e) => e.key))
            : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: o,
              mediaQueryKeys: l,
            },
          }
        );
      }
      let eg = (e, t) => e === t;
      function eT({ store: e, select: t, onChange: a, comparator: n = eg }) {
        let { getState: i, subscribe: o } = e,
          l = o(function () {
            let o = t(i());
            if (null == o) {
              l();
              return;
            }
            !n(o, d) && a((d = o), e);
          }),
          d = t(i());
        return l;
      }
      function eE(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l,
          } = e;
          return {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l,
          };
        }
        return {};
      }
      function ey({
        config: e,
        event: t,
        eventTarget: a,
        elementRoot: n,
        elementApi: i,
      }) {
        let o, l, r;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, o) =>
              e.concat(
                ey({
                  config: { target: o },
                  event: t,
                  eventTarget: a,
                  elementRoot: n,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: p,
            getChildElements: I,
            getSiblingElements: g,
            matchSelector: T,
            elementContains: E,
            isSiblingNode: y,
          } = i,
          { target: b } = e;
        if (!b) return [];
        let {
          id: m,
          objectId: O,
          selector: v,
          selectorGuids: R,
          appliesTo: _,
          useEventTarget: S,
        } = eE(b);
        if (O) return [er.has(O) ? er.get(O) : er.set(O, {}).get(O)];
        if (_ === d.EventAppliesTo.PAGE) {
          let e = s(m);
          return e ? [e] : [];
        }
        let A = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
          L = !!(A.id || A.selector),
          N = t && u(eE(t.target));
        if (
          (L
            ? ((o = A.limitAffectedElements), (l = N), (r = u(A)))
            : (l = r = u({ id: m, selector: v, selectorGuids: R })),
          t && S)
        ) {
          let e = a && (r || !0 === S) ? [a] : p(N);
          if (r) {
            if (S === P) return p(r).filter((t) => e.some((e) => E(t, e)));
            if (S === V) return p(r).filter((t) => e.some((e) => E(e, t)));
            if (S === x) return p(r).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        if (null == l || null == r) return [];
        if (f.IS_BROWSER_ENV && n) return p(r).filter((e) => n.contains(e));
        if (o === V) return p(l, r);
        if (o === U) return I(p(l)).filter(T(r));
        if (o === x) return g(p(l)).filter(T(r));
        else return p(r);
      }
      function eb({ element: e, actionItem: t }) {
        if (!f.IS_BROWSER_ENV) return {};
        let { actionTypeId: a } = t;
        switch (a) {
          case J:
          case ee:
          case et:
          case ea:
          case en:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let em = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]), e),
            e || {}
          ),
        ev = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eU[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eR(e, t = {}, a = {}, i, o) {
        let { getStyle: l } = o,
          { actionTypeId: d } = i;
        if ((0, u.isPluginType)(d)) return (0, u.getPluginOrigin)(d)(t[d], i);
        switch (i.actionTypeId) {
          case W:
          case H:
          case j:
          case $:
            return t[i.actionTypeId] || eM[i.actionTypeId];
          case q:
            return eO(t[i.actionTypeId], i.config.filters);
          case Z:
            return ev(t[i.actionTypeId], i.config.fontVariations);
          case K:
            return { value: (0, n.default)(parseFloat(l(e, _)), 1) };
          case J: {
            let t, o;
            let d = l(e, L),
              r = l(e, N);
            return (
              (t =
                i.config.widthUnit === w
                  ? em.test(d)
                    ? parseFloat(d)
                    : parseFloat(a.width)
                  : (0, n.default)(parseFloat(d), parseFloat(a.width))),
              {
                widthValue: t,
                heightValue: (o =
                  i.config.heightUnit === w
                    ? em.test(r)
                      ? parseFloat(r)
                      : parseFloat(a.height)
                    : (0, n.default)(parseFloat(r), parseFloat(a.height))),
              }
            );
          }
          case ee:
          case et:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: a,
              getStyle: i,
            }) {
              let o = el[t],
                l = i(e, o),
                d = (function (e, t) {
                  let a = e.exec(t);
                  return a ? a[1] : "";
                })(eF, eG.test(l) ? l : a[o]).split(k);
              return {
                rValue: (0, n.default)(parseInt(d[0], 10), 255),
                gValue: (0, n.default)(parseInt(d[1], 10), 255),
                bValue: (0, n.default)(parseInt(d[2], 10), 255),
                aValue: (0, n.default)(parseFloat(d[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: a,
              getStyle: l,
            });
          case en:
            return { value: (0, n.default)(l(e, G), a.display) };
          case ei:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let e_ = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t, a) => {
          if ((0, u.isPluginType)(e)) return (0, u.getPluginConfig)(e)(a, t);
          switch (e) {
            case q: {
              let e = (0, o.default)(a.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case Z: {
              let e = (0, o.default)(
                a.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return a[t];
          }
        };
      function eL({ element: e, actionItem: t, elementApi: a }) {
        if ((0, u.isPluginType)(t.actionTypeId))
          return (0, u.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case W:
          case H:
          case j:
          case $: {
            let { xValue: e, yValue: a, zValue: n } = t.config;
            return { xValue: e, yValue: a, zValue: n };
          }
          case J: {
            let { getStyle: n, setStyle: i, getProperty: o } = a,
              { widthUnit: l, heightUnit: d } = t.config,
              { widthValue: r, heightValue: c } = t.config;
            if (!f.IS_BROWSER_ENV) return { widthValue: r, heightValue: c };
            if (l === w) {
              let t = n(e, L);
              i(e, L, ""), (r = o(e, "offsetWidth")), i(e, L, t);
            }
            if (d === w) {
              let t = n(e, N);
              i(e, N, ""), (c = o(e, "offsetHeight")), i(e, N, t);
            }
            return { widthValue: r, heightValue: c };
          }
          case ee:
          case et:
          case ea: {
            let {
              rValue: n,
              gValue: i,
              bValue: o,
              aValue: l,
              globalSwatchId: d,
            } = t.config;
            if (d && d.startsWith("--")) {
              let { getStyle: t } = a,
                n = t(e, d),
                i = (0, s.normalizeColor)(n);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: n, gValue: i, bValue: o, aValue: l };
          }
          case q:
            return t.config.filters.reduce(e_, {});
          case Z:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eN(e) {
        return /^TRANSFORM_/.test(e)
          ? X
          : /^STYLE_/.test(e)
          ? Q
          : /^GENERAL_/.test(e)
          ? Y
          : /^PLUGIN_/.test(e)
          ? z
          : void 0;
      }
      function eh(e, t) {
        return e === Q ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eC(e, t, a, n, o, l, d, r, c) {
        switch (r) {
          case X:
            return (function (e, t, a, n, i) {
              let o = eP
                  .map((e) => {
                    let a = eM[e],
                      {
                        xValue: n = a.xValue,
                        yValue: i = a.yValue,
                        zValue: o = a.zValue,
                        xUnit: l = "",
                        yUnit: d = "",
                        zUnit: r = "",
                      } = t[e] || {};
                    switch (e) {
                      case W:
                        return `${T}(${n}${l}, ${i}${d}, ${o}${r})`;
                      case H:
                        return `${E}(${n}${l}, ${i}${d}, ${o}${r})`;
                      case j:
                        return `${y}(${n}${l}) ${b}(${i}${d}) ${m}(${o}${r})`;
                      case $:
                        return `${O}(${n}${l}, ${i}${d})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: l } = i;
              ew(e, f.TRANSFORM_PREFIXED, i),
                l(e, f.TRANSFORM_PREFIXED, o),
                (function (
                  { actionTypeId: e },
                  { xValue: t, yValue: a, zValue: n }
                ) {
                  return (
                    (e === W && void 0 !== n) ||
                    (e === H && void 0 !== n) ||
                    (e === j && (void 0 !== t || void 0 !== a))
                  );
                })(n, a) && l(e, f.TRANSFORM_STYLE_PREFIXED, v);
            })(e, t, a, o, d);
          case Q:
            return (function (e, t, a, n, o, l) {
              let { setStyle: d } = l;
              switch (n.actionTypeId) {
                case J: {
                  let { widthUnit: t = "", heightUnit: i = "" } = n.config,
                    { widthValue: o, heightValue: r } = a;
                  void 0 !== o &&
                    (t === w && (t = "px"), ew(e, L, l), d(e, L, o + t)),
                    void 0 !== r &&
                      (i === w && (i = "px"), ew(e, N, l), d(e, N, r + i));
                  break;
                }
                case q:
                  !(function (e, t, a, n) {
                    let o = (0, i.default)(
                        t,
                        (e, t, n) => `${e} ${n}(${t}${ex(n, a)})`,
                        ""
                      ),
                      { setStyle: l } = n;
                    ew(e, S, n), l(e, S, o);
                  })(e, a, n.config, l);
                  break;
                case Z:
                  !(function (e, t, a, n) {
                    let o = (0, i.default)(
                        t,
                        (e, t, a) => (e.push(`"${a}" ${t}`), e),
                        []
                      ).join(", "),
                      { setStyle: l } = n;
                    ew(e, A, n), l(e, A, o);
                  })(e, a, n.config, l);
                  break;
                case ee:
                case et:
                case ea: {
                  let t = el[n.actionTypeId],
                    i = Math.round(a.rValue),
                    o = Math.round(a.gValue),
                    r = Math.round(a.bValue),
                    c = a.aValue;
                  ew(e, t, l),
                    d(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${i},${o},${r})`
                        : `rgba(${i},${o},${r},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = n.config;
                  ew(e, o, l), d(e, o, a.value + t);
                }
              }
            })(e, t, a, o, l, d);
          case Y:
            return (function (e, t, a) {
              let { setStyle: n } = a;
              if (t.actionTypeId === en) {
                let { value: a } = t.config;
                n(e, G, a === R && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : a);
                return;
              }
            })(e, o, d);
          case z: {
            let { actionTypeId: e } = o;
            if ((0, u.isPluginType)(e)) return (0, u.renderPlugin)(e)(c, t, o);
          }
        }
      }
      let eM = {
          [W]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [H]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [j]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eV = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eU = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ex = (e, t) => {
          let a = (0, o.default)(t.filters, ({ type: t }) => t === e);
          if (a && a.unit) return a.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eP = Object.keys(eM),
        eG = /^rgb/,
        eF = RegExp("rgba?\\(([^)]+)\\)");
      function ew(e, t, a) {
        if (!f.IS_BROWSER_ENV) return;
        let n = ed[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = a,
          l = i(e, F);
        if (!l) {
          o(e, F, n);
          return;
        }
        let d = l.split(k).map(eo);
        -1 === d.indexOf(n) && o(e, F, d.concat(n).join(k));
      }
      function ek(e, t, a) {
        if (!f.IS_BROWSER_ENV) return;
        let n = ed[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = a,
          l = i(e, F);
        if (!!l && -1 !== l.indexOf(n))
          o(
            e,
            F,
            l
              .split(k)
              .map(eo)
              .filter((e) => e !== n)
              .join(k)
          );
      }
      function eD({ store: e, elementApi: t }) {
        let { ixData: a } = e.getState(),
          { events: n = {}, actionLists: i = {} } = a;
        Object.keys(n).forEach((e) => {
          let a = n[e],
            { config: o } = a.action,
            { actionListId: l } = o,
            d = i[l];
          d && eB({ actionList: d, event: a, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eB({ actionList: i[e], elementApi: t });
          });
      }
      function eB({ actionList: e = {}, event: t, elementApi: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n &&
          n.forEach((e) => {
            eX({ actionGroup: e, event: t, elementApi: a });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: n } = e;
              n.forEach((e) => {
                eX({ actionGroup: e, event: t, elementApi: a });
              });
            });
      }
      function eX({ actionGroup: e, event: t, elementApi: a }) {
        let { actionItems: n } = e;
        n.forEach((e) => {
          let n;
          let { actionTypeId: i, config: o } = e;
          (n = (0, u.isPluginType)(i)
            ? (t) => (0, u.clearPlugin)(i)(t, e)
            : eQ({ effect: ez, actionTypeId: i, elementApi: a })),
            ey({ config: o, event: t, elementApi: a }).forEach(n);
        });
      }
      function eY(e, t, a) {
        let { setStyle: n, getStyle: i } = a,
          { actionTypeId: o } = t;
        if (o === J) {
          let { config: a } = t;
          a.widthUnit === w && n(e, L, ""), a.heightUnit === w && n(e, N, "");
        }
        i(e, F) && eQ({ effect: ek, actionTypeId: o, elementApi: a })(e);
      }
      let eQ =
        ({ effect: e, actionTypeId: t, elementApi: a }) =>
        (n) => {
          switch (t) {
            case W:
            case H:
            case j:
            case $:
              e(n, f.TRANSFORM_PREFIXED, a);
              break;
            case q:
              e(n, S, a);
              break;
            case Z:
              e(n, A, a);
              break;
            case K:
              e(n, _, a);
              break;
            case J:
              e(n, L, a), e(n, N, a);
              break;
            case ee:
            case et:
            case ea:
              e(n, el[t], a);
              break;
            case en:
              e(n, G, a);
          }
        };
      function ez(e, t, a) {
        let { setStyle: n } = a;
        ek(e, t, a),
          n(e, t, ""),
          t === f.TRANSFORM_PREFIXED && n(e, f.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eW(e) {
        let t = 0,
          a = 0;
        return (
          e.forEach((e, n) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (a = n));
          }),
          a
        );
      }
      function eH(e, t) {
        let { actionItemGroups: a, useFirstGroupAsInitialState: n } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          l = 0,
          d = 0;
        return (
          a.forEach((e, t) => {
            if (n && 0 === t) return;
            let { actionItems: a } = e,
              r = a[eW(a)],
              { config: c, actionTypeId: s } = r;
            i.id === r.id && (d = l + o);
            let u = eN(s) === Y ? 0 : c.duration;
            l += c.delay + u;
          }),
          l > 0 ? (0, c.optimizeFloat)(d / l) : 0
        );
      }
      function ej({ actionList: e, actionItemId: t, rawData: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
          o = [],
          d = (e) => (
            o.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          n && n.some(({ actionItems: e }) => e.some(d)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(d));
            }),
          (0, l.setIn)(a, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function e$(e, { basedOn: t }) {
        return (
          (e === d.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === d.EventBasedOn.ELEMENT || null == t)) ||
          (e === d.EventTypeConsts.MOUSE_MOVE && t === d.EventBasedOn.ELEMENT)
        );
      }
      function eK(e, t) {
        return e + D + t;
      }
      function eq(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function eZ(e, t) {
        return (0, r.default)(e && e.sort(), t && t.sort());
      }
      function eJ(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + B + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: a = "", useEventTarget: n = "" } = e;
        return t + B + a + B + n;
      }
    },
    7164: function (e, t) {
      "use strict";
      function a(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = function (e, t) {
        if (a(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !1;
        for (let i = 0; i < n.length; i++)
          if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return m;
        },
        mergeActionState: function () {
          return v;
        },
      });
      let n = a(1185),
        i = a(7087),
        {
          HTML_ELEMENT: o,
          PLAIN_OBJECT: l,
          ABSTRACT_NODE: d,
          CONFIG_X_VALUE: r,
          CONFIG_Y_VALUE: c,
          CONFIG_Z_VALUE: s,
          CONFIG_VALUE: u,
          CONFIG_X_UNIT: f,
          CONFIG_Y_UNIT: p,
          CONFIG_Z_UNIT: I,
          CONFIG_UNIT: g,
        } = i.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: T,
          IX2_INSTANCE_ADDED: E,
          IX2_ELEMENT_STATE_CHANGED: y,
        } = i.IX2EngineActionTypes,
        b = {},
        m = (e = b, t = {}) => {
          switch (t.type) {
            case T:
              return b;
            case E: {
              let {
                  elementId: a,
                  element: i,
                  origin: o,
                  actionItem: l,
                  refType: d,
                } = t.payload,
                { actionTypeId: r } = l,
                c = e;
              return (
                (0, n.getIn)(c, [a, i]) !== i && (c = O(c, i, d, a, l)),
                v(c, a, r, o, l)
              );
            }
            case y: {
              let {
                elementId: a,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return v(e, a, n, i, o);
            }
            default:
              return e;
          }
        };
      function O(e, t, a, i, o) {
        let d =
          a === l ? (0, n.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, n.mergeIn)(e, [i], { id: i, ref: t, refId: d, refType: a });
      }
      function v(e, t, a, i, o) {
        let l = (function (e) {
          let { config: t } = e;
          return R.reduce((e, a) => {
            let n = a[0],
              i = a[1],
              o = t[n],
              l = t[i];
            return null != o && null != l && (e[i] = l), e;
          }, {});
        })(o);
        return (0, n.mergeIn)(e, [t, "refState", a], i, l);
      }
      let R = [
        [r, f],
        [c, p],
        [s, I],
        [u, g],
      ];
    },
    2012: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-533",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".next_page",
              originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".next_page",
                originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x189697d8765,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-509",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".next_page",
              originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".next_page",
                originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x189697d8768,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-3",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907116ae4eb4eb6eea515|ad1f82e9-ac2d-41fd-adbf-8554dbe5994a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907116ae4eb4eb6eea515|ad1f82e9-ac2d-41fd-adbf-8554dbe5994a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-3-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1927b43ea9a,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-3",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67090782535578455626fb53|1501defa-730b-4e92-3f08-e121767fb4f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67090782535578455626fb53|1501defa-730b-4e92-3f08-e121767fb4f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-3-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18b3c5ea684,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-3",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|3605318b-c9f5-f558-1638-bee05c1559ab",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|3605318b-c9f5-f558-1638-bee05c1559ab",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-3-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18b3c5fcc90,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "10338837-d72a-65d6-b83e-16ea08caec5d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "10338837-d72a-65d6-b83e-16ea08caec5d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927d183f86,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-562",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "10338837-d72a-65d6-b83e-16ea08caec5d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "10338837-d72a-65d6-b83e-16ea08caec5d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927d183f86,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2938",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f035,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2937",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f037,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2938",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f035,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2937",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f037,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-68",
              originalId:
                "663ec702bf17aecd0f30516d|2afda84f-1938-fde0-0dbf-1178da2e16cb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-68",
                originalId:
                  "663ec702bf17aecd0f30516d|2afda84f-1938-fde0-0dbf-1178da2e16cb",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f359f7a9f,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-90",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".scroll_content",
              originalId:
                "670906d278637d73dc934348|574702a6-bcac-f7b2-af4d-87a9942d8ea8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scroll_content",
                originalId:
                  "670906d278637d73dc934348|574702a6-bcac-f7b2-af4d-87a9942d8ea8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f35a0d742,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-105",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".portfolio_item",
              originalId:
                "670906d278637d73dc934348|2ed68bed-2615-ca75-e829-b3a4cd99ac30",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".portfolio_item",
                originalId:
                  "670906d278637d73dc934348|2ed68bed-2615-ca75-e829-b3a4cd99ac30",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18764a6b075,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-87",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".portfolio_item",
              originalId:
                "670906d278637d73dc934348|2ed68bed-2615-ca75-e829-b3a4cd99ac30",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".portfolio_item",
                originalId:
                  "670906d278637d73dc934348|2ed68bed-2615-ca75-e829-b3a4cd99ac30",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18764a6b076,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-26",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".scrolling_testimonial-wrap",
              originalId:
                "670906d278637d73dc934348|ae1401f9-537e-e4d4-a4c6-c1d10f3fc1a0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scrolling_testimonial-wrap",
                originalId:
                  "670906d278637d73dc934348|ae1401f9-537e-e4d4-a4c6-c1d10f3fc1a0",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-26-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18ae01c55c5,
          },
          "e-67": {
            id: "e-67",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-84",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-drop",
              originalId: "c8f6aa9c-1094-6149-a6a3-be5965fa2d91",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-drop",
                originalId: "c8f6aa9c-1094-6149-a6a3-be5965fa2d91",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17d08c0ef55,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-drop",
              originalId: "c8f6aa9c-1094-6149-a6a3-be5965fa2d91",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-drop",
                originalId: "c8f6aa9c-1094-6149-a6a3-be5965fa2d91",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17d08c0ef59,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-70",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-drop",
              originalId:
                "663ec56dd245e1ae2fc9247f|3dade082-9585-c67b-907d-5b8296c5bb68",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-drop",
                originalId:
                  "663ec56dd245e1ae2fc9247f|3dade082-9585-c67b-907d-5b8296c5bb68",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 350,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1870476de3a,
          },
          "e-174": {
            id: "e-174",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2938",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f035,
          },
          "e-175": {
            id: "e-175",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2937",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f037,
          },
          "e-178": {
            id: "e-178",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-179",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".next_page-2",
              originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".next_page-2",
                originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x189697d8765,
          },
          "e-179": {
            id: "e-179",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-45",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-178",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".next_page-2",
              originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".next_page-2",
                originalId: "32bb0231-1f97-6a3d-20c1-26eccb0005bb",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x189697d8768,
          },
          "e-421": {
            id: "e-421",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-426",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".reveal-image-trigger",
              originalId:
                "67180ecd15b8890fc07e0ebc|16e46105-b850-0195-2d20-5bb10d9698e2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".reveal-image-trigger",
                originalId:
                  "67180ecd15b8890fc07e0ebc|16e46105-b850-0195-2d20-5bb10d9698e2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fe6b910b0,
          },
          "e-466": {
            id: "e-466",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-52",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-467",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".gallery-lightbox-link",
              originalId:
                "673520e1691aa50637fa3d02|fa685431-faa8-bf74-213c-5304aae08658",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".gallery-lightbox-link",
                originalId:
                  "673520e1691aa50637fa3d02|fa685431-faa8-bf74-213c-5304aae08658",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192955a862a,
          },
          "e-467": {
            id: "e-467",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-53",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-466",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".gallery-lightbox-link",
              originalId:
                "673520e1691aa50637fa3d02|fa685431-faa8-bf74-213c-5304aae08658",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".gallery-lightbox-link",
                originalId:
                  "673520e1691aa50637fa3d02|fa685431-faa8-bf74-213c-5304aae08658",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192955a862b,
          },
          "e-500": {
            id: "e-500",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-571",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-blur-2nd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513085",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-blur-2nd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513085",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb23cdafe,
          },
          "e-502": {
            id: "e-502",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-544",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-blur-1st",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-blur-1st",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb239a1fd,
          },
          "e-503": {
            id: "e-503",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-585",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-rotate-3rd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130a0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-rotate-3rd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130a0",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2481c6a,
          },
          "e-504": {
            id: "e-504",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-563",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-blur-4th",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-blur-4th",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb23ed8a1,
          },
          "e-505": {
            id: "e-505",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-56",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-959",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".animate-hover-grow",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130aa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-hover-grow",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130aa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb24fe0c5,
          },
          "e-506": {
            id: "e-506",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-560",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-grow-3rd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513094",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-grow-3rd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513094",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2433c26,
          },
          "e-507": {
            id: "e-507",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-68",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1262",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-grow-2nd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513091",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-grow-2nd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513091",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2428601,
          },
          "e-508": {
            id: "e-508",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-577",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".animate-hover-grow",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130aa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-hover-grow",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130aa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb24fe0ef,
          },
          "e-509": {
            id: "e-509",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-69",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-551",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-grow-4th",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513097",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-grow-4th",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513097",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2440b07,
          },
          "e-511": {
            id: "e-511",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-59",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-572",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-fade-3rd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51307c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-fade-3rd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51307c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2363a9a,
          },
          "e-513": {
            id: "e-513",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-89",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".animate-hover-rotate",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130ad",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-hover-rotate",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130ad",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb25467f6,
          },
          "e-514": {
            id: "e-514",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-65",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-578",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-rotate-1st",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-rotate-1st",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2451d44,
          },
          "e-515": {
            id: "e-515",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-555",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-grow-1st",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-grow-1st",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb23ff8a7,
          },
          "e-516": {
            id: "e-516",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-545",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-rotate-2nd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-rotate-2nd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb246cb97,
          },
          "e-520": {
            id: "e-520",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-587",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-fade-4th",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51307f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-fade-4th",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51307f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb236b13b,
          },
          "e-522": {
            id: "e-522",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-60",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-577",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-blur-3rd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513088",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-blur-3rd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513088",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb23de252,
          },
          "e-524": {
            id: "e-524",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-70",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-555",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".animate-hover-rotate",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130ad",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-hover-rotate",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130ad",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2546822,
          },
          "e-525": {
            id: "e-525",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-73",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-88",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-rotate-4th",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-rotate-4th",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130a3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb248af6f,
          },
          "e-530": {
            id: "e-530",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-90",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-fade-1st",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-fade-1st",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb232694a,
          },
          "e-533": {
            id: "e-533",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-71",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-579",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animate-scroll-fade-2nd",
              originalId:
                "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513079",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animate-scroll-fade-2nd",
                originalId:
                  "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513079",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2357f2f,
          },
          "e-534": {
            id: "e-534",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-545",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c02812565",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c02812565",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1803213a3b2,
          },
          "e-535": {
            id: "e-535",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-75",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-575",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c02812565",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c02812565",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1803213a3b3,
          },
          "e-536": {
            id: "e-536",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-76",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-554",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3c4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3c4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180331dfb4a,
          },
          "e-537": {
            id: "e-537",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-558",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3c4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3c4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180331dfb4a,
          },
          "e-538": {
            id: "e-538",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-78",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|faea0845-18fc-cc46-e891-033b1d8586c5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|faea0845-18fc-cc46-e891-033b1d8586c5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-78-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180339bd79d,
          },
          "e-539": {
            id: "e-539",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-79",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|9a424c8c-8146-f4fd-a677-a5b5aa2897e3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|9a424c8c-8146-f4fd-a677-a5b5aa2897e3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-79-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1802f56d8bb,
          },
          "e-542": {
            id: "e-542",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-99",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e631d2,
          },
          "e-546": {
            id: "e-546",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-89",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-555",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16ce",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e52130,
          },
          "e-547": {
            id: "e-547",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-543",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb165a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb165a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18707901616,
          },
          "e-551": {
            id: "e-551",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-92",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-545",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb168d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb168d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e05150,
          },
          "e-552": {
            id: "e-552",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-81",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16b9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16b9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e3cb74,
          },
          "e-556": {
            id: "e-556",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-82",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-104",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16b1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16b1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e2c390,
          },
          "e-558": {
            id: "e-558",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-549",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1655",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1655",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x187078fffd0,
          },
          "e-559": {
            id: "e-559",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-90",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-383",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16c7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16c7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e50884,
          },
          "e-563": {
            id: "e-563",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1669",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1669",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9d4f982,
          },
          "e-565": {
            id: "e-565",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-572",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16a3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e20c9d,
          },
          "e-567": {
            id: "e-567",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-585",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1670",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1670",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9d5c222,
          },
          "e-569": {
            id: "e-569",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-91",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-561",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb169c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb169c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e10f88,
          },
          "e-570": {
            id: "e-570",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-95",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-568",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1677",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1677",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9d885e6,
          },
          "e-573": {
            id: "e-573",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-88",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-583",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16dd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16dd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9eb5ff5,
          },
          "e-574": {
            id: "e-574",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-83",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-64",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16e4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16e4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9ec55ed,
          },
          "e-575": {
            id: "e-575",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-97",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-557",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb167f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb167f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9df1b4c,
          },
          "e-577": {
            id: "e-577",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-86",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-959",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1694",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1694",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e0af30,
          },
          "e-578": {
            id: "e-578",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-93",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-560",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e22063,
          },
          "e-579": {
            id: "e-579",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-554",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1651",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1651",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x187078fe8ac,
          },
          "e-580": {
            id: "e-580",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-550",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9d2cb36,
          },
          "e-581": {
            id: "e-581",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-96",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-384",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1686",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1686",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9dfb9df,
          },
          "e-582": {
            id: "e-582",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-94",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-179",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16eb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16eb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9ec98c3,
          },
          "e-587": {
            id: "e-587",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-98",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-553",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16c0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16c0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186c9e4f65b,
          },
          "e-594": {
            id: "e-594",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-103",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-595",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link",
              originalId: "13ec8668-943a-4734-8e50-1bac0d530e0a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link",
                originalId: "13ec8668-943a-4734-8e50-1bac0d530e0a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ec0aff323,
          },
          "e-595": {
            id: "e-595",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-104",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-594",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link",
              originalId: "13ec8668-943a-4734-8e50-1bac0d530e0a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link",
                originalId: "13ec8668-943a-4734-8e50-1bac0d530e0a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ec0aff323,
          },
          "e-596": {
            id: "e-596",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-597",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-primary-default",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-primary-default",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f035,
          },
          "e-597": {
            id: "e-597",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-106",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-596",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-primary-default",
              originalId:
                "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-primary-default",
                originalId:
                  "6205a4aa83e12f68d559de92|4c207ee2-d67e-155a-f6ef-825689b4c111",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ee996f037,
          },
          "e-633": {
            id: "e-633",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-634",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713827b816c2de8d58ddbc0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713827b816c2de8d58ddbc0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194f7df0a06,
          },
          "e-635": {
            id: "e-635",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-109",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-636",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-card",
              originalId:
                "670906d278637d73dc934348|b7423d70-ad73-cacc-bf6d-c93a44244868",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-card",
                originalId:
                  "670906d278637d73dc934348|b7423d70-ad73-cacc-bf6d-c93a44244868",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191d4d703b7,
          },
          "e-636": {
            id: "e-636",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-110",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-635",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-card",
              originalId:
                "670906d278637d73dc934348|b7423d70-ad73-cacc-bf6d-c93a44244868",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-card",
                originalId:
                  "670906d278637d73dc934348|b7423d70-ad73-cacc-bf6d-c93a44244868",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191d4d703b8,
          },
          "e-768": {
            id: "e-768",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-769",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "50cab7c7-f537-a1d1-8542-39f6ac51cacc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "50cab7c7-f537-a1d1-8542-39f6ac51cacc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19501e7771c,
          },
          "e-770": {
            id: "e-770",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-771",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "55f5069b-c868-4d81-7c4a-0946ae26dba9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "55f5069b-c868-4d81-7c4a-0946ae26dba9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19501e7bb2d,
          },
          "e-791": {
            id: "e-791",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-792",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|093c8365-6ac9-e705-8269-e6de4c6cffb3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|093c8365-6ac9-e705-8269-e6de4c6cffb3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195258499c8,
          },
          "e-815": {
            id: "e-815",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3c8f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3c8f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 75,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x195259b620b,
          },
          "e-816": {
            id: "e-816",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-817",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3ca1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3ca1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195259b620b,
          },
          "e-818": {
            id: "e-818",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-819",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3cb3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3cb3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195259b620b,
          },
          "e-820": {
            id: "e-820",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-821",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3cc5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|a81fdca2-cf3c-468f-666a-2dc53bec3cc5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195259b620b,
          },
          "e-822": {
            id: "e-822",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-823",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba5480",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba5480",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19525c65e61,
          },
          "e-824": {
            id: "e-824",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-20",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba548c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba548c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-20-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19525c65e61,
          },
          "e-825": {
            id: "e-825",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-826",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba5497",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba5497",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19525c65e61,
          },
          "e-827": {
            id: "e-827",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-828",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54a4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54a4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19525c65e61,
          },
          "e-829": {
            id: "e-829",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-830",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54b1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54b1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19525c65e61,
          },
          "e-831": {
            id: "e-831",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-832",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54be",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19525c65e61,
          },
          "e-833": {
            id: "e-833",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-834",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54d6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|7f78df09-9485-0af3-0ff5-51c071ba54d6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19525c65e61,
          },
          "e-836": {
            id: "e-836",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-835",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19525f4a2e6,
          },
          "e-837": {
            id: "e-837",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-100",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-838",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195260b74c5,
          },
          "e-838": {
            id: "e-838",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-101",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-837",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195260b74c7,
          },
          "e-839": {
            id: "e-839",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-840",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|72ca05f9-a4e2-6aa2-1931-ee744e7f8ebb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|72ca05f9-a4e2-6aa2-1931-ee744e7f8ebb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 3e3,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x195261007d2,
          },
          "e-882": {
            id: "e-882",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-881",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b7d96f164c9e475aecd284",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b7d96f164c9e475aecd284",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952629600e,
          },
          "e-883": {
            id: "e-883",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-117",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-884",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b7d96f164c9e475aecd284",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b7d96f164c9e475aecd284",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952629600e,
          },
          "e-884": {
            id: "e-884",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-118",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-883",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b7d96f164c9e475aecd284",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b7d96f164c9e475aecd284",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952629600e,
          },
          "e-887": {
            id: "e-887",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-108",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713827b816c2de8d58ddbc0|72fcee77-8ddb-4122-c5dc-c9f681fa506a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713827b816c2de8d58ddbc0|72fcee77-8ddb-4122-c5dc-c9f681fa506a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-108-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19528839c8b,
          },
          "e-888": {
            id: "e-888",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-889",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808fe8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808fe8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-889": {
            id: "e-889",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-888",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808fe8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808fe8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-890": {
            id: "e-890",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-891",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808fe9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808fe9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-892": {
            id: "e-892",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-893",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808ffc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808ffc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-893": {
            id: "e-893",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-892",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808ffc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808ffc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-894": {
            id: "e-894",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-895",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808ffd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98808ffd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-896": {
            id: "e-896",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-897",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809010",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809010",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-897": {
            id: "e-897",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-896",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809010",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809010",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-898": {
            id: "e-898",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-95",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-899",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809011",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809011",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-900": {
            id: "e-900",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-901",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809024",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809024",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-901": {
            id: "e-901",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-900",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809024",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809024",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-902": {
            id: "e-902",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-107",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-903",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809025",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|aa741017-c483-0b53-3ad7-3d7d98809025",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195299422c2,
          },
          "e-923": {
            id: "e-923",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-922",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713b6f4300a1099644b911c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713b6f4300a1099644b911c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19529f09469,
          },
          "e-925": {
            id: "e-925",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-924",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "671f9b65421184115ddc5890",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "671f9b65421184115ddc5890",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19529fcf991,
          },
          "e-927": {
            id: "e-927",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-926",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6715290439aea195fd073a78",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6715290439aea195fd073a78",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19529fd754c,
          },
          "e-929": {
            id: "e-929",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-928",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b87556c8729a5b47009938",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b87556c8729a5b47009938",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19529ff08c8,
          },
          "e-930": {
            id: "e-930",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-931",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b87556c8729a5b47009938|e5710ab1-8921-e9a9-a098-5779b60c53ed",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b87556c8729a5b47009938|e5710ab1-8921-e9a9-a098-5779b60c53ed",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19529ff6073,
          },
          "e-931": {
            id: "e-931",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-930",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b87556c8729a5b47009938|e5710ab1-8921-e9a9-a098-5779b60c53ed",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b87556c8729a5b47009938|e5710ab1-8921-e9a9-a098-5779b60c53ed",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19529ff6073,
          },
          "e-932": {
            id: "e-932",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-933",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd462",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd462",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-933": {
            id: "e-933",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-932",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd462",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd462",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-934": {
            id: "e-934",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-935",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd463",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd463",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-936": {
            id: "e-936",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-937",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd476",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd476",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-937": {
            id: "e-937",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-936",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd476",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd476",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-938": {
            id: "e-938",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-939",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd477",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd477",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-940": {
            id: "e-940",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-941",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd48a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd48a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-941": {
            id: "e-941",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-940",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd48a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd48a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-942": {
            id: "e-942",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-95",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-943",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd48b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd48b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-944": {
            id: "e-944",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-945",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd49e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd49e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-945": {
            id: "e-945",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-944",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd49e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd49e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-946": {
            id: "e-946",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-107",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-947",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd49f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|44c0e267-a754-8b6a-6fb0-4e875b4dd49f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1952a7f4540,
          },
          "e-948": {
            id: "e-948",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-949",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b7d96f164c9e475aecd284|a7ba1cf4-edc1-dcab-4ddc-003b903dc236",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b7d96f164c9e475aecd284|a7ba1cf4-edc1-dcab-4ddc-003b903dc236",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bd311b,
          },
          "e-949": {
            id: "e-949",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-948",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b7d96f164c9e475aecd284|a7ba1cf4-edc1-dcab-4ddc-003b903dc236",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b7d96f164c9e475aecd284|a7ba1cf4-edc1-dcab-4ddc-003b903dc236",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bd311b,
          },
          "e-950": {
            id: "e-950",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-951",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6715290439aea195fd073a78|69628535-6a73-ff33-aa23-ca483e6b22f9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6715290439aea195fd073a78|69628535-6a73-ff33-aa23-ca483e6b22f9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bd6242,
          },
          "e-951": {
            id: "e-951",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-950",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6715290439aea195fd073a78|69628535-6a73-ff33-aa23-ca483e6b22f9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6715290439aea195fd073a78|69628535-6a73-ff33-aa23-ca483e6b22f9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bd6242,
          },
          "e-952": {
            id: "e-952",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-953",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "671f9b65421184115ddc5890|24564c37-0185-5fe7-4462-5ea072393b72",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "671f9b65421184115ddc5890|24564c37-0185-5fe7-4462-5ea072393b72",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bda8dd,
          },
          "e-953": {
            id: "e-953",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-952",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "671f9b65421184115ddc5890|24564c37-0185-5fe7-4462-5ea072393b72",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "671f9b65421184115ddc5890|24564c37-0185-5fe7-4462-5ea072393b72",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bda8dd,
          },
          "e-954": {
            id: "e-954",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-955",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713b6f4300a1099644b911c|0d9fb4be-0ca2-c892-cae3-c5896d93a07b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713b6f4300a1099644b911c|0d9fb4be-0ca2-c892-cae3-c5896d93a07b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bdd079,
          },
          "e-955": {
            id: "e-955",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-954",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713b6f4300a1099644b911c|0d9fb4be-0ca2-c892-cae3-c5896d93a07b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713b6f4300a1099644b911c|0d9fb4be-0ca2-c892-cae3-c5896d93a07b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bdd079,
          },
          "e-956": {
            id: "e-956",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-957",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713827b816c2de8d58ddbc0|465512d8-0648-383d-c83d-030c44f1c4bc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713827b816c2de8d58ddbc0|465512d8-0648-383d-c83d-030c44f1c4bc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553be07b8,
          },
          "e-957": {
            id: "e-957",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-956",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713827b816c2de8d58ddbc0|465512d8-0648-383d-c83d-030c44f1c4bc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713827b816c2de8d58ddbc0|465512d8-0648-383d-c83d-030c44f1c4bc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553be07b8,
          },
          "e-958": {
            id: "e-958",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-119",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-959",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67c384b3e898af60fa4ee895|80eac889-a3b6-a83e-5d7c-3c8069b8ce31",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67c384b3e898af60fa4ee895|80eac889-a3b6-a83e-5d7c-3c8069b8ce31",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bf8c55,
          },
          "e-959": {
            id: "e-959",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-958",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67c384b3e898af60fa4ee895|80eac889-a3b6-a83e-5d7c-3c8069b8ce31",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67c384b3e898af60fa4ee895|80eac889-a3b6-a83e-5d7c-3c8069b8ce31",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553bf8c55,
          },
          "e-960": {
            id: "e-960",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-121",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-961",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67c384b3e898af60fa4ee895|e4849d2e-ece1-a6e6-34b2-cb106619ae56",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67c384b3e898af60fa4ee895|e4849d2e-ece1-a6e6-34b2-cb106619ae56",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553c4c3ab,
          },
          "e-962": {
            id: "e-962",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-122",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-963",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67c384b3e898af60fa4ee895|e4849d2e-ece1-a6e6-34b2-cb106619ae42",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67c384b3e898af60fa4ee895|e4849d2e-ece1-a6e6-34b2-cb106619ae42",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19553c4c3ab,
          },
          "e-970": {
            id: "e-970",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-971",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713827b816c2de8d58ddbc0|3764a6c0-b216-0d7b-812e-46a304b48e57",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713827b816c2de8d58ddbc0|3764a6c0-b216-0d7b-812e-46a304b48e57",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 3e3,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1955443d587,
          },
          "e-974": {
            id: "e-974",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-975",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b87556c8729a5b47009938|e2e6df2d-047f-ee50-e97f-422a3117ed23",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b87556c8729a5b47009938|e2e6df2d-047f-ee50-e97f-422a3117ed23",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 3e3,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1955445289f,
          },
          "e-976": {
            id: "e-976",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-977",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b7d96f164c9e475aecd284|f440bafe-a4bc-2859-ceac-1de957024927",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b7d96f164c9e475aecd284|f440bafe-a4bc-2859-ceac-1de957024927",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 3e3,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19554458c73,
          },
          "e-978": {
            id: "e-978",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-979",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6715290439aea195fd073a78|e2e6df2d-047f-ee50-e97f-422a3117ed23",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6715290439aea195fd073a78|e2e6df2d-047f-ee50-e97f-422a3117ed23",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 3e3,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1955445e210,
          },
          "e-980": {
            id: "e-980",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-981",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "671f9b65421184115ddc5890|e2e6df2d-047f-ee50-e97f-422a3117ed23",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "671f9b65421184115ddc5890|e2e6df2d-047f-ee50-e97f-422a3117ed23",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 3e3,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19554462737,
          },
          "e-982": {
            id: "e-982",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-983",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713b6f4300a1099644b911c|4d5b8688-072b-379c-52e9-1c7ecbc92dfb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713b6f4300a1099644b911c|4d5b8688-072b-379c-52e9-1c7ecbc92dfb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 3e3,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19554469d9f,
          },
          "e-984": {
            id: "e-984",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-123",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-985",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-cc-banner_trigger",
              originalId:
                "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-cc-banner_trigger",
                originalId:
                  "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17816ae3978,
          },
          "e-985": {
            id: "e-985",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-124",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-984",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-cc-banner_trigger",
              originalId:
                "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-cc-banner_trigger",
                originalId:
                  "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17816ae397b,
          },
          "e-986": {
            id: "e-986",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-125",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-987",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-cc-prefs_checkbox",
              originalId:
                "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-cc-prefs_checkbox",
                originalId:
                  "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17819f56bba,
          },
          "e-987": {
            id: "e-987",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-126",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-986",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-cc-prefs_checkbox",
              originalId:
                "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-cc-prefs_checkbox",
                originalId:
                  "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17819f56bbb,
          },
          "e-988": {
            id: "e-988",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-127",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-989",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-cc-prefs_trigger",
              originalId: "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-cc-prefs_trigger",
                originalId: "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1781cee7843,
          },
          "e-989": {
            id: "e-989",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-128",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-988",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-cc-prefs_trigger",
              originalId: "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-cc-prefs_trigger",
                originalId: "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1781cee7843,
          },
          "e-990": {
            id: "e-990",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-131",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-991",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19561fe5aaa,
          },
          "e-992": {
            id: "e-992",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-993",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b79d57ad6543775b8a8a05|ac92519e-46a4-fde2-cb63-2b775321e7e8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b79d57ad6543775b8a8a05|ac92519e-46a4-fde2-cb63-2b775321e7e8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195693e8b20,
          },
          "e-994": {
            id: "e-994",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-995",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b87556c8729a5b47009938|4d63a625-ad96-9663-2930-31c270204e72",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b87556c8729a5b47009938|4d63a625-ad96-9663-2930-31c270204e72",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1956943e9a7,
          },
          "e-996": {
            id: "e-996",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-997",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67b7d96f164c9e475aecd284|902af550-a937-5c24-c6be-25ea2cae4d93",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67b7d96f164c9e475aecd284|902af550-a937-5c24-c6be-25ea2cae4d93",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1956944114c,
          },
          "e-998": {
            id: "e-998",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-999",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6715290439aea195fd073a78|c25bc844-66d3-7476-9a46-56f61671b6c8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6715290439aea195fd073a78|c25bc844-66d3-7476-9a46-56f61671b6c8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19569443858,
          },
          "e-1000": {
            id: "e-1000",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1001",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "671f9b65421184115ddc5890|9a6ddde9-a705-e694-f681-4d7b24e16bf0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "671f9b65421184115ddc5890|9a6ddde9-a705-e694-f681-4d7b24e16bf0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19569445ae4,
          },
          "e-1002": {
            id: "e-1002",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1003",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713b6f4300a1099644b911c|e1585eb4-fc9c-04cf-0ed9-357c9ff007c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713b6f4300a1099644b911c|e1585eb4-fc9c-04cf-0ed9-357c9ff007c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19569449be6,
          },
          "e-1004": {
            id: "e-1004",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1005",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6713827b816c2de8d58ddbc0|e3471e3a-d26d-d097-fd38-bcb5b144f32f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6713827b816c2de8d58ddbc0|e3471e3a-d26d-d097-fd38-bcb5b144f32f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1956944d15c,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Next Section [\uD83D\uDC46 Hover In]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".next_page-arrow",
                        selectorGuids: ["fce026aa-a002-28a8-d862-83eae2bf48ba"],
                      },
                      xValue: -5,
                      yValue: null,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".next_page-arrow",
                        selectorGuids: ["fce026aa-a002-28a8-d862-83eae2bf48ba"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17baa6cd6ae,
          },
          "a-2": {
            id: "a-2",
            title: "Next Section [\uD83D\uDC46 Hover Out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".next_page-arrow",
                        selectorGuids: ["fce026aa-a002-28a8-d862-83eae2bf48ba"],
                      },
                      xValue: -5,
                      yValue: null,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17baa6cd6ae,
          },
          "a-3": {
            id: "a-3",
            title: "Next Page Section [\uD83D\uDCDC While Scrolling]",
            continuousParameterGroups: [
              {
                id: "a-3-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-3-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "66c7850b30779feee3485688|9f993f62-4d50-935f-c8f3-12951348719e",
                          },
                          yValue: 6,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-3-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "66c7850b30779feee3485688|9f993f62-4d50-935f-c8f3-12951348719e",
                          },
                          value: 0.2,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-3-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "66c7850b30779feee3485688|9f993f62-4d50-935f-c8f3-12951348719e",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-3-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "66c7850b30779feee3485688|9f993f62-4d50-935f-c8f3-12951348719e",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x189697a051a,
          },
          "a-4": {
            id: "a-4",
            title: "Navbar Menu Opens [\uD83D\uDDB1️On Click] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-middle",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9d"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-4-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-4-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-4-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-4-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f3042c6,
          },
          "a-5": {
            id: "a-5",
            title: "Navbar Menu Closes [\uD83D\uDDB1️On Click] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-5-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 400,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-middle",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9d"],
                      },
                      widthValue: 24,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f363110,
          },
          "a-6": {
            id: "a-6",
            title: "Button [\uD83D\uDC46 Hover In]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-6-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 103,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17e35977952,
          },
          "a-7": {
            id: "a-7",
            title: "Button [\uD83D\uDC46 Hover Out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 103,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17e35977952,
          },
          "a-8": {
            id: "a-8",
            title: "Button [\uD83D\uDC46 Hover In] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 103,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17e35977952,
          },
          "a-9": {
            id: "a-9",
            title: "Button [\uD83D\uDC46 Hover Out] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 103,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17e35977952,
          },
          "a-12": {
            id: "a-12",
            title: "scroll-into-view-img-scale",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "663ec702bf17aecd0f30516d|2afda84f-1938-fde0-0dbf-1178da2e16cb",
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "663ec702bf17aecd0f30516d|2afda84f-1938-fde0-0dbf-1178da2e16cb",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f359f881c,
          },
          "a-13": {
            id: "a-13",
            title: "scroll-into-view-fade",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "663ec702bf17aecd0f30516d|75a8ce46-8693-7a5e-86cd-bb3e4365cdb9",
                      },
                      yValue: 10,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "663ec702bf17aecd0f30516d|75a8ce46-8693-7a5e-86cd-bb3e4365cdb9",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-13-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "663ec702bf17aecd0f30516d|75a8ce46-8693-7a5e-86cd-bb3e4365cdb9",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "663ec702bf17aecd0f30516d|75a8ce46-8693-7a5e-86cd-bb3e4365cdb9",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f359dad14,
          },
          "a-16": {
            id: "a-16",
            title: "Portfolio Item [Hover In]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670906d278637d73dc934348|2ed68bed-2615-ca75-e829-b3a4cd99ac30",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: -50,
                      yValue: -20,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-16-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "670906d278637d73dc934348|2ed68bed-2615-ca75-e829-b3a4cd99ac30",
                      },
                      yValue: -1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      xValue: -50,
                      yValue: -50,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-16-n-9",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.2,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 5e4,
                      target: {},
                      yValue: -77,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18764a6bb48,
          },
          "a-17": {
            id: "a-17",
            title: "Portfolio Item [Hover Out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "670906d278637d73dc934348|2ed68bed-2615-ca75-e829-b3a4cd99ac30",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      xValue: -50,
                      yValue: -20,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-17-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18764a6bb48,
          },
          "a-26": {
            id: "a-26",
            title: "Scrolling Testimonials [\uD83D\uDCDC While Scrolling]",
            continuousParameterGroups: [
              {
                id: "a-26-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-26-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".testimonial_column.is-first",
                            selectorGuids: [
                              "8eb47884-b518-d3be-d785-f4bdc7b51f1e",
                              "8eb47884-b518-d3be-d785-f4bdc7b51f28",
                            ],
                          },
                          yValue: -15,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-26-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".testimonial_column.is-second",
                            selectorGuids: [
                              "8eb47884-b518-d3be-d785-f4bdc7b51f1e",
                              "8eb47884-b518-d3be-d785-f4bdc7b51f2a",
                            ],
                          },
                          yValue: 7.5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-26-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".testimonial_column.is-third",
                            selectorGuids: [
                              "8eb47884-b518-d3be-d785-f4bdc7b51f1e",
                              "8eb47884-b518-d3be-d785-f4bdc7b51f2b",
                            ],
                          },
                          yValue: -17.5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-26-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".testimonial_column.is-first",
                            selectorGuids: [
                              "8eb47884-b518-d3be-d785-f4bdc7b51f1e",
                              "8eb47884-b518-d3be-d785-f4bdc7b51f28",
                            ],
                          },
                          yValue: 20,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-26-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".testimonial_column.is-second",
                            selectorGuids: [
                              "8eb47884-b518-d3be-d785-f4bdc7b51f1e",
                              "8eb47884-b518-d3be-d785-f4bdc7b51f2a",
                            ],
                          },
                          yValue: -27.5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-26-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".testimonial_column.is-third",
                            selectorGuids: [
                              "8eb47884-b518-d3be-d785-f4bdc7b51f1e",
                              "8eb47884-b518-d3be-d785-f4bdc7b51f2b",
                            ],
                          },
                          yValue: 17.5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18ae01c96b9,
          },
          "a-28": {
            id: "a-28",
            title: "FAQ Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      heightValue: 0,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                  {
                    id: "a-28-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 27,
                      bValue: 57,
                      gValue: 17,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-28-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: null,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "c8f6aa9c-1094-6149-a6a3-be5965fa2d91",
                      },
                      globalSwatchId: "",
                      rValue: 250,
                      bValue: 250,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-28-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-9",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "c8f6aa9c-1094-6149-a6a3-be5965fa2d91",
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-28-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {},
                      xValue: null,
                      zValue: 90,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-11",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {},
                      globalSwatchId:
                        "@var_variable-4d6c8d9e-7ec5-a3a6-d44e-22690ac83fbd",
                      rValue: 93,
                      bValue: 252,
                      gValue: 95,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17767018748,
          },
          "a-29": {
            id: "a-29",
            title: "FAQ close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {},
                      widthValue: 0,
                      heightValue: 0,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-29-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                  {
                    id: "a-29-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {},
                      globalSwatchId: "",
                      rValue: 27,
                      bValue: 57,
                      gValue: 17,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-29-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {},
                      xValue: null,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-29-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-29-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "c8f6aa9c-1094-6149-a6a3-be5965fa2d91",
                      },
                      globalSwatchId: "",
                      rValue: 250,
                      bValue: 250,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17767018748,
          },
          "a-41": {
            id: "a-41",
            title: "Button [\uD83D\uDC46 Hover In] 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-41-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-41-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 103,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-41-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17e35977952,
          },
          "a-42": {
            id: "a-42",
            title: "Button [\uD83D\uDC46 Hover Out] 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-42-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-42-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_hover-effect",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befea1"],
                      },
                      yValue: 103,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17e35977952,
          },
          "a-44": {
            id: "a-44",
            title: "Next Section [\uD83D\uDC46 Hover In] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-44-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      xValue: -5,
                      yValue: null,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-44-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: null,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17baa6cd6ae,
          },
          "a-45": {
            id: "a-45",
            title: "Next Section [\uD83D\uDC46 Hover Out] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-45-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      xValue: -5,
                      yValue: null,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17baa6cd6ae,
          },
          "a-49": {
            id: "a-49",
            title: "Image reveal animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-49-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                  {
                    id: "a-49-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-49-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1.3,
                      yValue: 1.3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-49-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-49-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCirc",
                      duration: 1e3,
                      target: {},
                      yValue: -101,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-49-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCirc",
                      duration: 1e3,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-49-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCirc",
                      duration: 1e3,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-49-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fe6b9429e,
          },
          "a-52": {
            id: "a-52",
            title: "Gallery Thumbnail Hover On",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-52-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".gallery-lightbox-thumbnail",
                        selectorGuids: ["1220abda-c3fe-8199-4f56-68f72c14b1c8"],
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192956aa246,
          },
          "a-53": {
            id: "a-53",
            title: "Gallery Thumbnail Hover Off",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-53-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".gallery-lightbox-thumbnail",
                        selectorGuids: ["1220abda-c3fe-8199-4f56-68f72c14b1c8"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192956aa246,
          },
          "a-61": {
            id: "a-61",
            title: "Fade Blur 2nd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-61-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-61-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "cb74",
                          value: 1,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-61-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-61-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "331f",
                          value: 0,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb23a288d,
          },
          "a-66": {
            id: "a-66",
            title: "Fade Blur 1st",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-66-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "cb74",
                          value: 1,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-66-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "331f",
                          value: 0,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb23a288d,
          },
          "a-64": {
            id: "a-64",
            title: "Fade Rotate 3rd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-64-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: -5,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-64-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-64-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-64-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2453875,
          },
          "a-63": {
            id: "a-63",
            title: "Fade Blur 4th",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-63-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-63-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "cb74",
                          value: 1,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-63-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-63-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "331f",
                          value: 0,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb23a288d,
          },
          "a-56": {
            id: "a-56",
            title: "Grow",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-56-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130aa",
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17eb25242cb,
          },
          "a-72": {
            id: "a-72",
            title: "Fade Grow 3rd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-72-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-72-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-72-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-72-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2401a53,
          },
          "a-68": {
            id: "a-68",
            title: "Fade Grow 2nd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-68-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-68-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2401a53,
          },
          "a-54": {
            id: "a-54",
            title: "Grow Reset",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-54-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130aa",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17eb25242cb,
          },
          "a-69": {
            id: "a-69",
            title: "Fade Grow 4th",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-69-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-69-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-69-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-69-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2401a53,
          },
          "a-59": {
            id: "a-59",
            title: "Fade 3rd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-59-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-59-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb232e851,
          },
          "a-62": {
            id: "a-62",
            title: "Rotate",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-62-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130ad",
                      },
                      zValue: 5,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17eb254985b,
          },
          "a-65": {
            id: "a-65",
            title: "Fade Rotate 1st",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-65-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: -5,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-65-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-65-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-65-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2453875,
          },
          "a-58": {
            id: "a-58",
            title: "Fade Grow 1st",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-58-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-58-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-58-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-58-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51308e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2401a53,
          },
          "a-57": {
            id: "a-57",
            title: "Fade Rotate 2nd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-57-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: -5,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-57-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-57-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-57-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2453875,
          },
          "a-55": {
            id: "a-55",
            title: "Fade 4th",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-55-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-55-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb232e851,
          },
          "a-60": {
            id: "a-60",
            title: "Fade Blur 3rd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-60-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-60-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "cb74",
                          value: 1,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-60-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-60-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513082",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "331f",
                          value: 0,
                          unit: "rem",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb23a288d,
          },
          "a-70": {
            id: "a-70",
            title: "Rotate Reset",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-70-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e5130ad",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17eb254985b,
          },
          "a-73": {
            id: "a-73",
            title: "Fade Rotate 4th",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-73-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: -5,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-73-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-73-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-73-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e51309a",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb2453875,
          },
          "a-67": {
            id: "a-67",
            title: "Fade 1st",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-67-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-67-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb232e851,
          },
          "a-71": {
            id: "a-71",
            title: "Fade 2nd",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-71-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-71-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|99504459-9941-141e-d327-8f5b4e513076",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17eb232e851,
          },
          "a-74": {
            id: "a-74",
            title: "Classic Text Reveal 1 -> In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-74-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-74-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256c",
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-74-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-74-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256f",
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-74-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-74-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256c",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-74-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 150,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256f",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-74-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256f",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18032123870,
          },
          "a-75": {
            id: "a-75",
            title: "Classic Text Reveal 1 -> Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-75-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-75-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256c",
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-75-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-75-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|a400eced-b68a-189b-5aa2-685c0281256f",
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18032123870,
          },
          "a-76": {
            id: "a-76",
            title: "Classic Text Reveal 2 -> In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-76-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3cb",
                      },
                      yValue: 3.375,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-76-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3ce",
                      },
                      yValue: 3.375,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-76-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3cb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-76-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3ce",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-76-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3cb",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-76-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3cb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-76-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 50,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3ce",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-76-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 50,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3ce",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18032123870,
          },
          "a-77": {
            id: "a-77",
            title: "Classic Text Reveal 2 -> Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-77-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3cb",
                      },
                      yValue: 3.375,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-77-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3ce",
                      },
                      yValue: 3.375,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-77-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3cb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-77-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "670907aabff43a0518aa72f7|7740bc21-9b99-d0ed-98f4-7d09de70b3ce",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18032123870,
          },
          "a-78": {
            id: "a-78",
            title: "Text in from Left/Right ->  Down",
            continuousParameterGroups: [
              {
                id: "a-78-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-78-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "670907aabff43a0518aa72f7|faea0845-18fc-cc46-e891-033b1d8586cb",
                          },
                          xValue: -31,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-78-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "670907aabff43a0518aa72f7|faea0845-18fc-cc46-e891-033b1d8586ce",
                          },
                          xValue: 31,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-78-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "outQuart",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "670907aabff43a0518aa72f7|faea0845-18fc-cc46-e891-033b1d8586cb",
                          },
                          xValue: 0,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-78-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "outQuart",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "670907aabff43a0518aa72f7|faea0845-18fc-cc46-e891-033b1d8586ce",
                          },
                          xValue: 0,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180339c1cbb,
          },
          "a-79": {
            id: "a-79",
            title: "Circle Mask Reveal",
            continuousParameterGroups: [
              {
                id: "a-79-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-79-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "670907aabff43a0518aa72f7|9a424c8c-8146-f4fd-a677-a5b5aa2897e3",
                          },
                          widthValue: 1,
                          heightValue: 1,
                          widthUnit: "em",
                          heightUnit: "em",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-79-n-2",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "670907aabff43a0518aa72f7|9a424c8c-8146-f4fd-a677-a5b5aa2897e3",
                          },
                          widthValue: 125,
                          heightValue: 125,
                          widthUnit: "em",
                          heightUnit: "em",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1802c88aedc,
          },
          "a-99": {
            id: "a-99",
            title: "Scale In 0.1s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-99-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-99-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9e6425e,
          },
          "a-89": {
            id: "a-89",
            title: "Right 0.4s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-89-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: -20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-89-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-89-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-89-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-85": {
            id: "a-85",
            title: "Up 0.3s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-85-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-85-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-85-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-85-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-92": {
            id: "a-92",
            title: "Down 0.3s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-92-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: -20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-92-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-92-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-92-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-81": {
            id: "a-81",
            title: "Right 0.1s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-81-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: -20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-81-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-81-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-81-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-82": {
            id: "a-82",
            title: "Left 0.4s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-82-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-82-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-82-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-82-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-84": {
            id: "a-84",
            title: "Up 0.2s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-84-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-84-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-84-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-84-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-90": {
            id: "a-90",
            title: "Right 0.3s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-90-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: -20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-90-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-90-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-90-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-80": {
            id: "a-80",
            title: "Left 0.2s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-80-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-80-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-80-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-80-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-91": {
            id: "a-91",
            title: "Left 0.1s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-91-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-91-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-91-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-91-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-95": {
            id: "a-95",
            title: "Up 0.4s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-95-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-95-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-95-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-95-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-88": {
            id: "a-88",
            title: "Scale In 0.2s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-88-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-88-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9e6425e,
          },
          "a-83": {
            id: "a-83",
            title: "Scale In 0.3s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-83-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-83-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9e6425e,
          },
          "a-97": {
            id: "a-97",
            title: "Down 0.1s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-97-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: -20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-97-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-97-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-97-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-86": {
            id: "a-86",
            title: "Down 0.4s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-86-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: -20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-86-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-86-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-86-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-93": {
            id: "a-93",
            title: "Left 0.3s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-93-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-93-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-93-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-93-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-87": {
            id: "a-87",
            title: "Up 0.1s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-87-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-87-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-87-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-87-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-96": {
            id: "a-96",
            title: "Down 0.2s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-96-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: -20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-96-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-94": {
            id: "a-94",
            title: "Scale In 0.4s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-94-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-94-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb16d6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9e6425e,
          },
          "a-98": {
            id: "a-98",
            title: "Right 0.2s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-98-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: -20,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-98-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-98-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-98-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-103": {
            id: "a-103",
            title: "Nav link on hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-103-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-style",
                        selectorGuids: ["6eb5eace-8177-25cb-577e-944d1c42229f"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-103-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-style",
                        selectorGuids: ["6eb5eace-8177-25cb-577e-944d1c42229f"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17e35977952,
          },
          "a-104": {
            id: "a-104",
            title: "Nav link hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-104-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-style",
                        selectorGuids: ["6eb5eace-8177-25cb-577e-944d1c42229f"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17e35977952,
          },
          "a-105": {
            id: "a-105",
            title: "Button on hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-105-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-3",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f0f"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-105-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-background",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f10"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-105-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-wrapper-2",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f0e"],
                      },
                      globalSwatchId: "f1363d3a",
                      rValue: 13,
                      bValue: 20,
                      gValue: 16,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-105-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-background",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f10"],
                      },
                      yValue: 110,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-105-n-8",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle",
                        selectorGuids: ["7d5f08ef-84a6-38d3-51f6-f8d7e63b1051"],
                      },
                      globalSwatchId: "--accent",
                      rValue: 55,
                      bValue: 241,
                      gValue: 58,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-105-n-10",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-8",
                        selectorGuids: ["d417e4c3-94a5-551d-c012-da801e2b0aef"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-105-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-3",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f0f"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-105-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-wrapper-2",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f0e"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-105-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-background",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f10"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-105-n-9",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle",
                        selectorGuids: ["7d5f08ef-84a6-38d3-51f6-f8d7e63b1051"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-105-n-11",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-8",
                        selectorGuids: ["d417e4c3-94a5-551d-c012-da801e2b0aef"],
                      },
                      globalSwatchId: "--accent",
                      rValue: 55,
                      bValue: 241,
                      gValue: 58,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17e35977952,
          },
          "a-106": {
            id: "a-106",
            title: "Button hover out 4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-106-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-3",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f0f"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-106-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-wrapper-2",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f0e"],
                      },
                      globalSwatchId: "f1363d3a",
                      rValue: 13,
                      bValue: 20,
                      gValue: 16,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-106-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-background",
                        selectorGuids: ["60fa34f9-f58d-16e3-5ccd-0417cf5e7f10"],
                      },
                      yValue: 103,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-106-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle",
                        selectorGuids: ["7d5f08ef-84a6-38d3-51f6-f8d7e63b1051"],
                      },
                      globalSwatchId: "--accent",
                      rValue: 55,
                      bValue: 241,
                      gValue: 58,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-106-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-8",
                        selectorGuids: ["d417e4c3-94a5-551d-c012-da801e2b0aef"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17e35977952,
          },
          "a-102": {
            id: "a-102",
            title: "Preloader",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-102-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".preloader",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a55"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".preloader",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a55"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-102-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".preloader",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a55"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-102-n-16",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "3250d890-3ca6-8ec6-bbd6-b7c520ead2f5" },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-102-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".loader-inside",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a53"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".loader-block",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a54"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-102-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".preloader",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a55"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-102-n-17",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: { id: "3250d890-3ca6-8ec6-bbd6-b7c520ead2f5" },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-102-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        selector: ".loader-block",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a54"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        selector: ".loader-inside",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a53"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-102-n-14",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        selector: ".loader-block",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a54"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        selector: ".loader-inside",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a53"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-102-n-11",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".preloader",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a55"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-102-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        selector: ".preloader",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a55"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        selector: ".preloader",
                        selectorGuids: ["435f2d4d-adca-f7cc-ac2a-46fa0f143a55"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194f04e7776,
          },
          "a-109": {
            id: "a-109",
            title: "Blog Card Hover On",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-109-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-cover-2",
                        selectorGuids: ["d6cb11d2-dad9-68ad-1230-72447631fd44"],
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191d4d8b838,
          },
          "a-110": {
            id: "a-110",
            title: "Blog Card Hover Off",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-110-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-cover-2",
                        selectorGuids: ["d6cb11d2-dad9-68ad-1230-72447631fd44"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191d4d8b838,
          },
          "a-10": {
            id: "a-10",
            title: "Looping Logos [⏳Page Load] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".looping_logo-grid",
                        selectorGuids: ["f79118a6-c60b-60e5-8e62-c4d3ac4ce3a3"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 6e4,
                      target: {
                        selector: ".looping_logo-grid",
                        selectorGuids: ["f79118a6-c60b-60e5-8e62-c4d3ac4ce3a3"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".looping_logo-grid",
                        selectorGuids: ["f79118a6-c60b-60e5-8e62-c4d3ac4ce3a3"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18732acb222,
          },
          "a-11": {
            id: "a-11",
            title: "horizontal-scroll",
            continuousParameterGroups: [
              {
                id: "a-11-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-11-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scroll-indicator-line",
                            selectorGuids: [
                              "fdac47e8-40dc-da88-7741-6db7be337860",
                            ],
                          },
                          widthValue: 0,
                          widthUnit: "%",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-11-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scroll-content",
                            selectorGuids: [
                              "fdac47e8-40dc-da88-7741-6db7be337867",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-11-n-3",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scroll-indicator-line",
                            selectorGuids: [
                              "fdac47e8-40dc-da88-7741-6db7be337860",
                            ],
                          },
                          widthValue: 100,
                          widthUnit: "%",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-11-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scroll-content",
                            selectorGuids: [
                              "fdac47e8-40dc-da88-7741-6db7be337867",
                            ],
                          },
                          xValue: -66,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1811395a7ac,
          },
          "a-20": {
            id: "a-20",
            title: "Stacking card",
            continuousParameterGroups: [
              {
                id: "a-20-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-20-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-2.is-one",
                            selectorGuids: [
                              "96efa67f-3454-24a9-8b78-f8e6d1fea85b",
                              "96efa67f-3454-24a9-8b78-f8e6d1fea86b",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-20-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-2.is-one",
                            selectorGuids: [
                              "96efa67f-3454-24a9-8b78-f8e6d1fea85b",
                              "96efa67f-3454-24a9-8b78-f8e6d1fea86b",
                            ],
                          },
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-20-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-2.is-two",
                            selectorGuids: [
                              "96efa67f-3454-24a9-8b78-f8e6d1fea85b",
                              "96efa67f-3454-24a9-8b78-f8e6d1fea86d",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-20-n-4",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-2.is-two",
                            selectorGuids: [
                              "96efa67f-3454-24a9-8b78-f8e6d1fea85b",
                              "96efa67f-3454-24a9-8b78-f8e6d1fea86d",
                            ],
                          },
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18c4a862780,
          },
          "a-100": {
            id: "a-100",
            title: "Show Nav",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-100-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "10338837-d72a-65d6-b83e-16ea08caec5d" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-100-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: { id: "10338837-d72a-65d6-b83e-16ea08caec5d" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1949014eb02,
          },
          "a-101": {
            id: "a-101",
            title: "Hide Nav",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-101-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: { id: "10338837-d72a-65d6-b83e-16ea08caec5d" },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1949016539b,
          },
          "a-117": {
            id: "a-117",
            title: "Show Nav 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-117-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "67b7d96f164c9e475aecd284|10338837-d72a-65d6-b83e-16ea08caec5d",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-117-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        id: "67b7d96f164c9e475aecd284|10338837-d72a-65d6-b83e-16ea08caec5d",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1949014eb02,
          },
          "a-118": {
            id: "a-118",
            title: "Hide Nav 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-118-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        id: "67b7d96f164c9e475aecd284|10338837-d72a-65d6-b83e-16ea08caec5d",
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1949016539b,
          },
          "a-108": {
            id: "a-108",
            title: "CTA Images Scroll",
            continuousParameterGroups: [
              {
                id: "a-108-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-108-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image-marquee",
                            selectorGuids: [
                              "7e4c21bd-7f98-799f-826b-05c664278e03",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-108-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image-marquee",
                            selectorGuids: [
                              "7e4c21bd-7f98-799f-826b-05c664278e03",
                            ],
                          },
                          xValue: -150,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-108-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image-marquee",
                            selectorGuids: [
                              "7e4c21bd-7f98-799f-826b-05c664278e03",
                            ],
                          },
                          xValue: -300,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18f3d253113,
          },
          "a-50": {
            id: "a-50",
            title: "Card with icon [hover] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-50-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-image",
                        selectorGuids: ["1efd6d31-5af5-2da4-ea91-3043799857d4"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-50-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-image",
                        selectorGuids: ["1efd6d31-5af5-2da4-ea91-3043799857d4"],
                      },
                      xValue: 1.25,
                      yValue: 1.25,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fe6d12486,
          },
          "a-51": {
            id: "a-51",
            title: "Card with icon [hover out] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-51-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCirc",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-image",
                        selectorGuids: ["1efd6d31-5af5-2da4-ea91-3043799857d4"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18fe6d12486,
          },
          "a-107": {
            id: "a-107",
            title: "Up 0.5s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-107-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-107-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-107-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-107-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "670907aabff43a0518aa72f7|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-119": {
            id: "a-119",
            title: "Navbar Menu Opens [\uD83D\uDDB1️On Click] 5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-119-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-middle",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9d"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-119-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-119-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-119-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-119-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f3042c6,
          },
          "a-120": {
            id: "a-120",
            title: "Navbar Menu Closes [\uD83D\uDDB1️On Click] 5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-120-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-120-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-120-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-120-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe93"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-120-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 400,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-middle",
                        selectorGuids: ["140b13b5-6637-7616-022b-45edf3befe9d"],
                      },
                      widthValue: 24,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f363110,
          },
          "a-121": {
            id: "a-121",
            title: "Up 0.2s 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-121-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-121-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-121-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-121-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-122": {
            id: "a-122",
            title: "Up 0.1s 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-122-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-122-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-122-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-122-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "67c384b3e898af60fa4ee895|dafc6b58-391f-6f6a-763f-3be315cb1662",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186c9d2d5b9,
          },
          "a-123": {
            id: "a-123",
            title: "Cookie Banner [SHOW]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-123-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-banner_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf666"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-123-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-banner_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf666"],
                      },
                      yValue: 120,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-123-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-banner_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf666"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-123-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-banner_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf666"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17816ae4886,
          },
          "a-124": {
            id: "a-124",
            title: "Cookie Banner [HIDE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-124-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-banner_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf666"],
                      },
                      yValue: 120,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-124-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-banner_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf666"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17816ae4886,
          },
          "a-125": {
            id: "a-125",
            title: "Preferences Checkbox [CHECK]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-125-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fs-cc-prefs_toggle",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf660"],
                      },
                      xValue: 20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-125-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_checkbox-field",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf661"],
                      },
                      globalSwatchId: "03892cf0",
                      rValue: 14,
                      bValue: 14,
                      gValue: 14,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17819f57a59,
          },
          "a-126": {
            id: "a-126",
            title: "Preferences Checkbox [UNCHECK]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-126-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fs-cc-prefs_toggle",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf660"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-126-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_checkbox-field",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf661"],
                      },
                      globalSwatchId: "",
                      rValue: 204,
                      bValue: 204,
                      gValue: 204,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17819f57a59,
          },
          "a-127": {
            id: "a-127",
            title: "Preferences Popup [SHOW]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-127-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-127-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-127-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-127-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-127-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-127-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1781ceeda29,
          },
          "a-128": {
            id: "a-128",
            title: "Preferences Popup [HIDE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-128-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-128-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-128-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs-cc-prefs_component",
                        selectorGuids: ["3918d651-5419-2ea8-e539-8784175cf668"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1781ceeda29,
          },
          "a-131": {
            id: "a-131",
            title: "Marquee Carousel",
            actionItemGroups: [],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19561fe68e6,
          },
          "a-130": {
            id: "a-130",
            title: "Consent Expand 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-130-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".cw-cookie_selection",
                        selectorGuids: ["7bac4c46-2d03-dc8a-cd52-68826ea7ae75"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-130-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inQuad",
                      duration: 300,
                      target: {
                        selector: ".cw-cookie_selection",
                        selectorGuids: ["7bac4c46-2d03-dc8a-cd52-68826ea7ae75"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18e2e4d0644,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
