function hexToRgb(a) {
    var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    a = a.replace(b, function(a, b, c, d) {
        return b + b + c + c + d + d
    });
    var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return c ? {
        r: parseInt(c[1], 16),
        g: parseInt(c[2], 16),
        b: parseInt(c[3], 16)
    } : null
}

function clamp(a, b, c) {
    return Math.min(Math.max(a, b), c)
}

function isInArray(a, b) {
    return b.indexOf(a) > -1
}
if (function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = function(a) {
                this.canvas = a.canvas, this.ctx = a;
                var b = function(a, b) {
                        return a["offset" + b] ? a["offset" + b] : document.defaultView.getComputedStyle(a).getPropertyValue(b)
                    },
                    c = this.width = b(a.canvas, "Width"),
                    e = this.height = b(a.canvas, "Height");
                a.canvas.width = c, a.canvas.height = e;
                var c = this.width = a.canvas.width,
                    e = this.height = a.canvas.height;
                return this.aspectRatio = this.width / this.height, d.retinaScale(this), this
            };
        c.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, c.types = {};
        var d = c.helpers = {},
            e = d.each = function(a, b, c) {
                var d = Array.prototype.slice.call(arguments, 3);
                if (a)
                    if (a.length === +a.length) {
                        var e;
                        for (e = 0; e < a.length; e++) b.apply(c, [a[e], e].concat(d))
                    } else
                        for (var f in a) b.apply(c, [a[f], f].concat(d))
            },
            f = d.clone = function(a) {
                var b = {};
                return e(a, function(c, d) {
                    a.hasOwnProperty(d) && (b[d] = c)
                }), b
            },
            g = d.extend = function(a) {
                return e(Array.prototype.slice.call(arguments, 1), function(b) {
                    e(b, function(c, d) {
                        b.hasOwnProperty(d) && (a[d] = c)
                    })
                }), a
            },
            h = d.merge = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return a.unshift({}), g.apply(null, a)
            },
            i = d.indexOf = function(a, b) {
                if (Array.prototype.indexOf) return a.indexOf(b);
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) return c;
                return -1
            },
            j = (d.where = function(a, b) {
                var c = [];
                return d.each(a, function(a) {
                    b(a) && c.push(a)
                }), c
            }, d.findNextWhere = function(a, b, c) {
                c || (c = -1);
                for (var d = c + 1; d < a.length; d++) {
                    var e = a[d];
                    if (b(e)) return e
                }
            }, d.findPreviousWhere = function(a, b, c) {
                c || (c = a.length);
                for (var d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    if (b(e)) return e
                }
            }, d.inherits = function(a) {
                var b = this,
                    c = a && a.hasOwnProperty("constructor") ? a.constructor : function() {
                        return b.apply(this, arguments)
                    },
                    d = function() {
                        this.constructor = c
                    };
                return d.prototype = b.prototype, c.prototype = new d, c.extend = j, a && g(c.prototype, a), c.__super__ = b.prototype, c
            }),
            k = d.noop = function() {},
            l = d.uid = function() {
                var a = 0;
                return function() {
                    return "chart-" + a++
                }
            }(),
            m = d.warn = function(a) {
                window.console && "function" == typeof window.console.warn && console.warn(a)
            },
            n = d.amd = "function" == typeof define && define.amd,
            o = d.isNumber = function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            p = d.max = function(a) {
                return Math.max.apply(Math, a)
            },
            q = d.min = function(a) {
                return Math.min.apply(Math, a)
            },
            r = (d.cap = function(a, b, c) {
                if (o(b)) {
                    if (a > b) return b
                } else if (o(c) && c > a) return c;
                return a
            }, d.getDecimalPlaces = function(a) {
                return a % 1 !== 0 && o(a) ? a.toString().split(".")[1].length : 0
            }),
            s = d.radians = function(a) {
                return a * (Math.PI / 180)
            },
            t = (d.getAngleFromPoint = function(a, b) {
                var c = b.x - a.x,
                    d = b.y - a.y,
                    e = Math.sqrt(c * c + d * d),
                    f = 2 * Math.PI + Math.atan2(d, c);
                return 0 > c && 0 > d && (f += 2 * Math.PI), {
                    angle: f,
                    distance: e
                }
            }, d.aliasPixel = function(a) {
                return a % 2 === 0 ? 0 : .5
            }),
            u = (d.splineCurve = function(a, b, c, d) {
                var e = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)),
                    f = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2)),
                    g = d * e / (e + f),
                    h = d * f / (e + f);
                return {
                    inner: {
                        x: b.x - g * (c.x - a.x),
                        y: b.y - g * (c.y - a.y)
                    },
                    outer: {
                        x: b.x + h * (c.x - a.x),
                        y: b.y + h * (c.y - a.y)
                    }
                }
            }, d.calculateOrderOfMagnitude = function(a) {
                return Math.floor(Math.log(a) / Math.LN10)
            }),
            v = (d.calculateScaleRange = function(a, b, c, d, e) {
                var f = 2,
                    g = Math.floor(b / (1.5 * c)),
                    h = f >= g,
                    i = p(a),
                    j = q(a);
                i === j && (i += .5, j >= .5 && !d ? j -= .5 : i += .5);
                for (var k = Math.abs(i - j), l = u(k), m = Math.ceil(i / (1 * Math.pow(10, l))) * Math.pow(10, l), n = d ? 0 : Math.floor(j / (1 * Math.pow(10, l))) * Math.pow(10, l), o = m - n, r = Math.pow(10, l), s = Math.round(o / r);
                    (s > g || g > 2 * s) && !h;)
                    if (s > g) r *= 2, s = Math.round(o / r), s % 1 !== 0 && (h = !0);
                    else if (e && l >= 0) {
                    if (r / 2 % 1 !== 0) break;
                    r /= 2, s = Math.round(o / r)
                } else r /= 2, s = Math.round(o / r);
                return h && (s = f, r = o / s), {
                    steps: s,
                    stepValue: r,
                    min: n,
                    max: n + s * r
                }
            }, d.template = function(a, b) {
                function c(a, b) {
                    var c = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : d[a] = d[a];
                    return b ? c(b) : c
                }
                if (a instanceof Function) return a(b);
                var d = {};
                return c(a, b)
            }),
            w = (d.generateLabels = function(a, b, c, d) {
                var f = new Array(b);
                return labelTemplateString && e(f, function(b, e) {
                    f[e] = v(a, {
                        value: c + d * (e + 1)
                    })
                }), f
            }, d.easingEffects = {
                linear: function(a) {
                    return a
                },
                easeInQuad: function(a) {
                    return a * a
                },
                easeOutQuad: function(a) {
                    return -1 * a * (a - 2)
                },
                easeInOutQuad: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
                },
                easeInCubic: function(a) {
                    return a * a * a
                },
                easeOutCubic: function(a) {
                    return 1 * ((a = a / 1 - 1) * a * a + 1)
                },
                easeInOutCubic: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
                },
                easeInQuart: function(a) {
                    return a * a * a * a
                },
                easeOutQuart: function(a) {
                    return -1 * ((a = a / 1 - 1) * a * a * a - 1)
                },
                easeInOutQuart: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
                },
                easeInQuint: function(a) {
                    return 1 * (a /= 1) * a * a * a * a
                },
                easeOutQuint: function(a) {
                    return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
                },
                easeInOutQuint: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
                },
                easeInSine: function(a) {
                    return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(a) {
                    return 1 * Math.sin(a / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(a) {
                    return -.5 * (Math.cos(Math.PI * a / 1) - 1)
                },
                easeInExpo: function(a) {
                    return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
                },
                easeOutExpo: function(a) {
                    return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
                },
                easeInOutExpo: function(a) {
                    return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
                },
                easeInCirc: function(a) {
                    return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
                },
                easeOutCirc: function(a) {
                    return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
                },
                easeInOutCirc: function(a) {
                    return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                },
                easeInElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c)))
                },
                easeOutElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), d * Math.pow(2, -10 * a) * Math.sin(2 * (1 * a - b) * Math.PI / c) + 1)
                },
                easeInOutElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 2 == (a /= .5) ? 1 : (c || (c = .3 * 1.5), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), 1 > a ? -.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) : d * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) * .5 + 1)
                },
                easeInBack: function(a) {
                    var b = 1.70158;
                    return 1 * (a /= 1) * a * ((b + 1) * a - b)
                },
                easeOutBack: function(a) {
                    var b = 1.70158;
                    return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1)
                },
                easeInOutBack: function(a) {
                    var b = 1.70158;
                    return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                },
                easeInBounce: function(a) {
                    return 1 - w.easeOutBounce(1 - a)
                },
                easeOutBounce: function(a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                },
                easeInOutBounce: function(a) {
                    return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5
                }
            }),
            x = d.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                    return window.setTimeout(a, 1e3 / 60)
                }
            }(),
            y = d.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(a) {
                    return window.clearTimeout(a, 1e3 / 60)
                }
            }(),
            z = (d.animationLoop = function(a, b, c, d, e, f) {
                var g = 0,
                    h = w[c] || w.linear,
                    i = function() {
                        g++;
                        var c = g / b,
                            j = h(c);
                        a.call(f, j, c, g), d.call(f, j, c), b > g ? f.animationFrame = x(i) : e.apply(f)
                    };
                x(i)
            }, d.getRelativePosition = function(a) {
                var b, c, d = a.originalEvent || a,
                    e = a.currentTarget || a.srcElement,
                    f = e.getBoundingClientRect();
                return d.touches ? (b = d.touches[0].clientX - f.left, c = d.touches[0].clientY - f.top) : (b = d.clientX - f.left, c = d.clientY - f.top), {
                    x: b,
                    y: c
                }
            }, d.addEvent = function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
            }),
            A = d.removeEvent = function(a, b, c) {
                a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = k
            },
            B = (d.bindEvents = function(a, b, c) {
                a.events || (a.events = {}), e(b, function(b) {
                    a.events[b] = function() {
                        c.apply(a, arguments)
                    }, z(a.chart.canvas, b, a.events[b])
                })
            }, d.unbindEvents = function(a, b) {
                e(b, function(b, c) {
                    A(a.chart.canvas, c, b)
                })
            }),
            C = d.getMaximumWidth = function(a) {
                var b = a.parentNode;
                return b.clientWidth
            },
            D = d.getMaximumHeight = function(a) {
                var b = a.parentNode;
                return b.clientHeight
            },
            E = (d.getMaximumSize = d.getMaximumWidth, d.retinaScale = function(a) {
                var b = a.ctx,
                    c = a.canvas.width,
                    d = a.canvas.height;
                window.devicePixelRatio && (b.canvas.style.width = c + "px", b.canvas.style.height = d + "px", b.canvas.height = d * window.devicePixelRatio, b.canvas.width = c * window.devicePixelRatio, b.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            F = d.clear = function(a) {
                a.ctx.clearRect(0, 0, a.width, a.height)
            },
            G = d.fontString = function(a, b, c) {
                return b + " " + a + "px " + c
            },
            H = d.longestText = function(a, b, c) {
                a.font = b;
                var d = 0;
                return e(c, function(b) {
                    var c = a.measureText(b).width;
                    d = c > d ? c : d
                }), d
            },
            I = d.drawRoundedRectangle = function(a, b, c, d, e, f) {
                a.beginPath(), a.moveTo(b + f, c), a.lineTo(b + d - f, c), a.quadraticCurveTo(b + d, c, b + d, c + f), a.lineTo(b + d, c + e - f), a.quadraticCurveTo(b + d, c + e, b + d - f, c + e), a.lineTo(b + f, c + e), a.quadraticCurveTo(b, c + e, b, c + e - f), a.lineTo(b, c + f), a.quadraticCurveTo(b, c, b + f, c), a.closePath()
            };
        c.instances = {}, c.Type = function(a, b, d) {
            this.options = b, this.chart = d, this.id = l(), c.instances[this.id] = this, b.responsive && this.resize(), this.initialize.call(this, a)
        }, g(c.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return F(this.chart), this
            },
            stop: function() {
                return y(this.animationFrame), this
            },
            resize: function(a) {
                this.stop();
                var b = this.chart.canvas,
                    c = C(this.chart.canvas),
                    d = this.options.maintainAspectRatio ? c / this.chart.aspectRatio : D(this.chart.canvas);
                return b.width = this.chart.width = c, b.height = this.chart.height = d, E(this.chart), "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: k,
            render: function(a) {
                return a && this.reflow(), this.options.animation && !a ? d.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
            },
            generateLegend: function() {
                return v(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), B(this, this.events);
                var a = this.chart.canvas;
                a.width = this.chart.width, a.height = this.chart.height, a.style.removeProperty ? (a.style.removeProperty("width"), a.style.removeProperty("height")) : (a.style.removeAttribute("width"), a.style.removeAttribute("height")), delete c.instances[this.id]
            },
            showTooltip: function(a, b) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var f = function(a) {
                    var b = !1;
                    return a.length !== this.activeElements.length ? b = !0 : (e(a, function(a, c) {
                        a !== this.activeElements[c] && (b = !0)
                    }, this), b)
                }.call(this, a);
                if (f || b) {
                    if (this.activeElements = a, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), a.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var g, h, j = this.datasets.length - 1; j >= 0 && (g = this.datasets[j].points || this.datasets[j].bars || this.datasets[j].segments, h = i(g, a[0]), -1 === h); j--);
                            var k = [],
                                l = [],
                                m = function() {
                                    var a, b, c, e, f, g = [],
                                        i = [],
                                        j = [];
                                    return d.each(this.datasets, function(b) {
                                        a = b.points || b.bars || b.segments, a[h] && a[h].hasValue() && g.push(a[h])
                                    }), d.each(g, function(a) {
                                        i.push(a.x), j.push(a.y), k.push(d.template(this.options.multiTooltipTemplate, a)), l.push({
                                            fill: a._saved.fillColor || a.fillColor,
                                            stroke: a._saved.strokeColor || a.strokeColor
                                        })
                                    }, this), f = q(j), c = p(j), e = q(i), b = p(i), {
                                        x: e > this.chart.width / 2 ? e : b,
                                        y: (f + c) / 2
                                    }
                                }.call(this, h);
                            new c.MultiTooltip({
                                x: m.x,
                                y: m.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: k,
                                legendColors: l,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: a[0].label,
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else e(a, function(a) {
                            var b = a.tooltipPosition();
                            new c.Tooltip({
                                x: Math.round(b.x),
                                y: Math.round(b.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: v(this.options.tooltipTemplate, a),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), c.Type.extend = function(a) {
            var b = this,
                d = function() {
                    return b.apply(this, arguments)
                };
            if (d.prototype = f(b.prototype), g(d.prototype, a), d.extend = c.Type.extend, a.name || b.prototype.name) {
                var e = a.name || b.prototype.name,
                    i = c.defaults[b.prototype.name] ? f(c.defaults[b.prototype.name]) : {};
                c.defaults[e] = g(i, a.defaults), c.types[e] = d, c.prototype[e] = function(a, b) {
                    var f = h(c.defaults.global, c.defaults[e], b || {});
                    return new d(a, f, this)
                }
            } else m("Name not provided for this chart, so it hasn't been registered");
            return b
        }, c.Element = function(a) {
            g(this, a), this.initialize.apply(this, arguments), this.save()
        }, g(c.Element.prototype, {
            initialize: function() {},
            restore: function(a) {
                return a ? e(a, function(a) {
                    this[a] = this._saved[a]
                }, this) : g(this, this._saved), this
            },
            save: function() {
                return this._saved = f(this), delete this._saved._saved, this
            },
            update: function(a) {
                return e(a, function(a, b) {
                    this._saved[b] = this[b], this[b] = a
                }, this), this
            },
            transition: function(a, b) {
                return e(a, function(a, c) {
                    this[c] = (a - this._saved[c]) * b + this._saved[c]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return o(this.value)
            }
        }), c.Element.extend = j, c.Point = c.Element.extend({
            display: !0,
            inRange: function(a, b) {
                var c = this.hitDetectionRadius + this.radius;
                return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(c, 2)
            },
            draw: function() {
                if (this.display) {
                    var a = this.ctx;
                    a.beginPath(), a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.stroke()
                }
            }
        }), c.Arc = c.Element.extend({
            inRange: function(a, b) {
                var c = d.getAngleFromPoint(this, {
                        x: a,
                        y: b
                    }),
                    e = c.angle >= this.startAngle && c.angle <= this.endAngle,
                    f = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
                return e && f
            },
            tooltipPosition: function() {
                var a = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    b = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(a) * b,
                    y: this.y + Math.sin(a) * b
                }
            },
            draw: function(a) {
                var b = this.ctx;
                b.beginPath(), b.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), b.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), b.closePath(), b.strokeStyle = this.strokeColor, b.lineWidth = this.strokeWidth, b.fillStyle = this.fillColor, b.fill(), b.lineJoin = "bevel", this.showStroke && b.stroke()
            }
        }), c.Rectangle = c.Element.extend({
            draw: function() {
                var a = this.ctx,
                    b = this.width / 2,
                    c = this.x - b,
                    d = this.x + b,
                    e = this.base - (this.base - this.y),
                    f = this.strokeWidth / 2;
                this.showStroke && (c += f, d -= f, e += f), a.beginPath(), a.fillStyle = this.fillColor, a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.moveTo(c, this.base), a.lineTo(c, e), a.lineTo(d, e), a.lineTo(d, this.base), a.fill(), this.showStroke && a.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(a, b) {
                return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base
            }
        }), c.Tooltip = c.Element.extend({
            draw: function() {
                var a = this.chart.ctx;
                a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var b = this.caretPadding = 2,
                    c = a.measureText(this.text).width + 2 * this.xPadding,
                    d = this.fontSize + 2 * this.yPadding,
                    e = d + this.caretHeight + b;
                this.x + c / 2 > this.chart.width ? this.xAlign = "left" : this.x - c / 2 < 0 && (this.xAlign = "right"), this.y - e < 0 && (this.yAlign = "below");
                var f = this.x - c / 2,
                    g = this.y - e;
                if (a.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            a.beginPath(), a.moveTo(this.x, this.y - b), a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight)), a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight)), a.closePath(), a.fill();
                            break;
                        case "below":
                            g = this.y + b + this.caretHeight, a.beginPath(), a.moveTo(this.x, this.y + b), a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight), a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight), a.closePath(), a.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            f = this.x - c + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            f = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    I(a, f, g, c, d, this.cornerRadius), a.fill(), a.fillStyle = this.textColor, a.textAlign = "center", a.textBaseline = "middle", a.fillText(this.text, f + c / 2, g + d / 2)
                }
            }
        }), c.MultiTooltip = c.Element.extend({
            initialize: function() {
                this.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = G(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                var a = this.ctx.measureText(this.title).width,
                    b = H(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    c = p([b, a]);
                this.width = c + 2 * this.xPadding;
                var d = this.height / 2;
                this.y - d < 0 ? this.y = d : this.y + d > this.chart.height && (this.y = this.chart.height - d), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(a) {
                var b = this.y - this.height / 2 + this.yPadding,
                    c = a - 1;
                return 0 === a ? b + this.titleFontSize / 2 : b + (1.5 * this.fontSize * c + this.fontSize / 2) + 1.5 * this.titleFontSize
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    I(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var a = this.ctx;
                    a.fillStyle = this.fillColor, a.fill(), a.closePath(), a.textAlign = "left", a.textBaseline = "middle", a.fillStyle = this.titleTextColor, a.font = this.titleFont, a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), a.font = this.font, d.each(this.labels, function(b, c) {
                        a.fillStyle = this.textColor, a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)), a.fillStyle = this.legendColorBackground, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize), a.fillStyle = this.legendColors[c].fill, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), c.Scale = c.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }));
                this.yLabelWidth = this.display && this.showLabels ? H(this.ctx, this.font, this.yLabels) : 0
            },
            addXLabel: function(a) {
                this.xLabels.push(a), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var a, b = this.endPoint - this.startPoint;
                for (this.calculateYRange(b), this.buildYLabels(), this.calculateXLabelRotation(); b > this.endPoint - this.startPoint;) b = this.endPoint - this.startPoint, a = this.yLabelWidth, this.calculateYRange(b), this.buildYLabels(), a < this.yLabelWidth && this.calculateXLabelRotation()
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var a, b, c = this.ctx.measureText(this.xLabels[0]).width,
                    d = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = d / 2 + 3, this.xScalePaddingLeft = c / 2 > this.yLabelWidth + 10 ? c / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                    var e, f = H(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = f;
                    for (var g = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > g && 0 === this.xLabelRotation || this.xLabelWidth > g && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) e = Math.cos(s(this.xLabelRotation)), a = e * c, b = e * d, a + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = a + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = e * f;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(s(this.xLabelRotation)) * f + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: k,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(a) {
                var b = this.drawingArea() / (this.min - this.max);
                return this.endPoint - b * (a - this.min)
            },
            calculateX: function(a) {
                var b = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    c = b / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    d = c * a + this.xScalePaddingLeft;
                return this.offsetGridLines && (d += c / 2), Math.round(d)
            },
            update: function(a) {
                d.extend(this, a), this.fit()
            },
            draw: function() {
                var a = this.ctx,
                    b = (this.endPoint - this.startPoint) / this.steps,
                    c = Math.round(this.xScalePaddingLeft);
                this.display && (a.fillStyle = this.textColor, a.font = this.font, e(this.yLabels, function(e, f) {
                    var g = this.endPoint - b * f,
                        h = Math.round(g),
                        i = this.showHorizontalLines;
                    a.textAlign = "right", a.textBaseline = "middle", this.showLabels && a.fillText(e, c - 10, g), 0 !== f || i || (i = !0), i && a.beginPath(), f > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), h += d.aliasPixel(a.lineWidth), i && (a.moveTo(c, h), a.lineTo(this.width, h), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(c - 5, h), a.lineTo(c, h), a.stroke(), a.closePath()
                }, this), e(this.xLabels, function(b, c) {
                    var d = this.calculateX(c) + t(this.lineWidth),
                        e = this.calculateX(c - (this.offsetGridLines ? .5 : 0)) + t(this.lineWidth),
                        f = this.xLabelRotation > 0,
                        g = this.showVerticalLines;
                    0 !== c || g || (g = !0), g && a.beginPath(), c > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), g && (a.moveTo(e, this.endPoint), a.lineTo(e, this.startPoint - 3), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(e, this.endPoint), a.lineTo(e, this.endPoint + 5), a.stroke(), a.closePath(), a.save(), a.translate(d, f ? this.endPoint + 12 : this.endPoint + 8), a.rotate(-1 * s(this.xLabelRotation)), a.font = this.font, a.textAlign = f ? "right" : "center", a.textBaseline = f ? "middle" : "top", a.fillText(b, 0, 0), a.restore()
                }, this))
            }
        }), c.RadialScale = c.Element.extend({
            initialize: function() {
                this.size = q([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(a) {
                var b = this.drawingArea / (this.max - this.min);
                return (a - this.min) * b
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var a, b, c, d, e, f, g, h, i, j, k, l, m = q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    n = this.width,
                    p = 0;
                for (this.ctx.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), b = 0; b < this.valuesCount; b++) a = this.getPointPosition(b, m), c = this.ctx.measureText(v(this.templateString, {
                    value: this.labels[b]
                })).width + 5, 0 === b || b === this.valuesCount / 2 ? (d = c / 2, a.x + d > n && (n = a.x + d, e = b), a.x - d < p && (p = a.x - d, g = b)) : b < this.valuesCount / 2 ? a.x + c > n && (n = a.x + c, e = b) : b > this.valuesCount / 2 && a.x - c < p && (p = a.x - c, g = b);
                i = p, j = Math.ceil(n - this.width), f = this.getIndexAngle(e), h = this.getIndexAngle(g), k = j / Math.sin(f + Math.PI / 2), l = i / Math.sin(h + Math.PI / 2), k = o(k) ? k : 0, l = o(l) ? l : 0, this.drawingArea = m - (l + k) / 2, this.setCenterPoint(l, k)
            },
            setCenterPoint: function(a, b) {
                var c = this.width - b - this.drawingArea,
                    d = a + this.drawingArea;
                this.xCenter = (d + c) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(a) {
                var b = 2 * Math.PI / this.valuesCount;
                return a * b - Math.PI / 2
            },
            getPointPosition: function(a, b) {
                var c = this.getIndexAngle(a);
                return {
                    x: Math.cos(c) * b + this.xCenter,
                    y: Math.sin(c) * b + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var a = this.ctx;
                    if (e(this.yLabels, function(b, c) {
                            if (c > 0) {
                                var d, e = c * (this.drawingArea / this.steps),
                                    f = this.yCenter - e;
                                if (this.lineWidth > 0)
                                    if (a.strokeStyle = this.lineColor, a.lineWidth = this.lineWidth, this.lineArc) a.beginPath(), a.arc(this.xCenter, this.yCenter, e, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                    else {
                                        a.beginPath();
                                        for (var g = 0; g < this.valuesCount; g++) d = this.getPointPosition(g, this.calculateCenterOffset(this.min + c * this.stepValue)), 0 === g ? a.moveTo(d.x, d.y) : a.lineTo(d.x, d.y);
                                        a.closePath(), a.stroke()
                                    }
                                if (this.showLabels) {
                                    if (a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var h = a.measureText(b).width;
                                        a.fillStyle = this.backdropColor, a.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, f - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = this.fontColor, a.fillText(b, this.xCenter, f)
                                }
                            }
                        }, this), !this.lineArc) {
                        a.lineWidth = this.angleLineWidth, a.strokeStyle = this.angleLineColor;
                        for (var b = this.valuesCount - 1; b >= 0; b--) {
                            if (this.angleLineWidth > 0) {
                                var c = this.getPointPosition(b, this.calculateCenterOffset(this.max));
                                a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(c.x, c.y), a.stroke(), a.closePath()
                            }
                            var d = this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5);
                            a.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), a.fillStyle = this.pointLabelFontColor;
                            var f = this.labels.length,
                                g = this.labels.length / 2,
                                h = g / 2,
                                i = h > b || b > f - h,
                                j = b === h || b === f - h;
                            a.textAlign = 0 === b ? "center" : b === g ? "center" : g > b ? "left" : "right", a.textBaseline = j ? "middle" : i ? "bottom" : "top", a.fillText(this.labels[b], d.x, d.y)
                        }
                    }
                }
            }
        }), d.addEvent(window, "resize", function() {
            var a;
            return function() {
                clearTimeout(a), a = setTimeout(function() {
                    e(c.instances, function(a) {
                        a.options.responsive && a.resize(a.render, !0)
                    })
                }, 50)
            }
        }()), n ? define(function() {
            return c
        }) : "object" == typeof module && module.exports && (module.exports = c), a.Chart = c, c.noConflict = function() {
            return a.Chart = b, c
        }
    }.call(this), function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Bar",
            defaults: d,
            initialize: function(a) {
                var d = this.options;
                this.ScaleClass = b.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(a, b, c) {
                        var e = this.calculateBaseWidth(),
                            f = this.calculateX(c) - e / 2,
                            g = this.calculateBarWidth(a);
                        return f + g * b + b * d.barDatasetSpacing + g / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * d.barValueSpacing
                    },
                    calculateBarWidth: function(a) {
                        var b = this.calculateBaseWidth() - (a - 1) * d.barDatasetSpacing;
                        return b / a
                    }
                }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getBarsAtEvent(a) : [];
                    this.eachBars(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), this.BarClass = b.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        bars: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        d.bars.push(new this.BarClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            strokeColor: b.strokeColor,
                            fillColor: b.fillColor,
                            highlightFill: b.highlightFill || b.fillColor,
                            highlightStroke: b.highlightStroke || b.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(a.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(a, b, d) {
                    c.extend(a, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, d, b),
                        y: this.scale.endPoint
                    }), a.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(a) {
                    a.save()
                }), this.render()
            },
            eachBars: function(a) {
                c.each(this.datasets, function(b, d) {
                    c.each(b.bars, a, this, d)
                }, this)
            },
            getBarsAtEvent: function(a) {
                for (var b, d = [], e = c.getRelativePosition(a), f = function(a) {
                        d.push(a.bars[b])
                    }, g = 0; g < this.datasets.length; g++)
                    for (b = 0; b < this.datasets[g].bars.length; b++)
                        if (this.datasets[g].bars[b].inRange(e.x, e.y)) return c.each(this.datasets, f), d;
                return d
            },
            buildScale: function(a) {
                var b = this,
                    d = function() {
                        var a = [];
                        return b.eachBars(function(b) {
                            a.push(b.value)
                        }), a
                    },
                    e = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: a.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(a) {
                            var b = c.calculateScaleRange(d(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b)
                        },
                        xLabels: a,
                        font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && c.extend(e, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(e)
            },
            addData: function(a, b) {
                c.each(a, function(a, c) {
                    this.datasets[c].bars.push(new this.BarClass({
                        value: a,
                        label: b,
                        x: this.scale.calculateBarX(this.datasets.length, c, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[c].strokeColor,
                        fillColor: this.datasets[c].fillColor
                    }))
                }, this), this.scale.addXLabel(b), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), c.each(this.datasets, function(a) {
                    a.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                c.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var a = c.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(a)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear(), this.chart.ctx, this.scale.draw(b), c.each(this.datasets, function(a, d) {
                    c.each(a.bars, function(a, c) {
                        a.hasValue() && (a.base = this.scale.endPoint, a.transition({
                            x: this.scale.calculateBarX(this.datasets.length, d, c),
                            y: this.scale.calculateY(a.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, b).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this), function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Doughnut",
            defaults: d,
            initialize: function(a) {
                this.segments = [], this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = b.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) {
                        a.restore(["fillColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightColor
                    }), this.showTooltip(b)
                }), this.calculateTotal(a), c.each(a, function(a, b) {
                    this.addData(a, b, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) {
                    a.inRange(d.x, d.y) && b.push(a)
                }, this), b
            },
            addData: function(a, b, c) {
                var d = b || this.segments.length;
                this.segments.splice(d, 0, new this.SegmentArc({
                    value: a.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: a.color,
                    highlightColor: a.highlight || a.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(a.value),
                    label: a.label
                })), c || (this.reflow(), this.update())
            },
            calculateCircumference: function(a) {
                return 2 * Math.PI * (Math.abs(a) / this.total)
            },
            calculateTotal: function(a) {
                this.total = 0, c.each(a, function(a) {
                    this.total += Math.abs(a.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor"])
                }), c.each(this.segments, function(a) {
                    a.save()
                }), this.render()
            },
            removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update()
            },
            reflow: function() {
                c.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, c.each(this.segments, function(a) {
                    a.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(a) {
                var b = a ? a : 1;
                this.clear(), c.each(this.segments, function(a, c) {
                    a.transition({
                        circumference: this.calculateCircumference(a.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, b), a.endAngle = a.startAngle + a.circumference, a.draw(), 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle)
                }, this)
            }
        }), b.types.Doughnut.extend({
            name: "Pie",
            defaults: c.merge(d, {
                percentageInnerCutout: 0
            })
        })
    }.call(this), function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Line",
            defaults: d,
            initialize: function(a) {
                this.PointClass = b.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(a) {
                        return Math.pow(a - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        pointColor: b.pointColor,
                        pointStrokeColor: b.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        d.points.push(new this.PointClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            strokeColor: b.pointStrokeColor,
                            fillColor: b.pointColor,
                            highlightFill: b.pointHighlightFill || b.pointColor,
                            highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                        }))
                    }, this), this.buildScale(a.labels), this.eachPoints(function(a, b) {
                        c.extend(a, {
                            x: this.scale.calculateX(b),
                            y: this.scale.endPoint
                        }), a.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(a) {
                    a.save()
                }), this.render()
            },
            eachPoints: function(a) {
                c.each(this.datasets, function(b) {
                    c.each(b.points, a, this)
                }, this)
            },
            getPointsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.datasets, function(a) {
                    c.each(a.points, function(a) {
                        a.inRange(d.x, d.y) && b.push(a)
                    })
                }, this), b
            },
            buildScale: function(a) {
                var d = this,
                    e = function() {
                        var a = [];
                        return d.eachPoints(function(b) {
                            a.push(b.value)
                        }), a
                    },
                    f = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: a.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(a) {
                            var b = c.calculateScaleRange(e(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b)
                        },
                        xLabels: a,
                        font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && c.extend(f, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new b.Scale(f)
            },
            addData: function(a, b) {
                c.each(a, function(a, c) {
                    this.datasets[c].points.push(new this.PointClass({
                        value: a,
                        label: b,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[c].pointStrokeColor,
                        fillColor: this.datasets[c].pointColor
                    }))
                }, this), this.scale.addXLabel(b), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), c.each(this.datasets, function(a) {
                    a.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var a = c.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(a)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear();
                var d = this.chart.ctx,
                    e = function(a) {
                        return null !== a.value
                    },
                    f = function(a, b, d) {
                        return c.findNextWhere(b, e, d) || a
                    },
                    g = function(a, b, d) {
                        return c.findPreviousWhere(b, e, d) || a
                    };
                this.scale.draw(b), c.each(this.datasets, function(a) {
                    var h = c.where(a.points, e);
                    c.each(a.points, function(a, c) {
                        a.hasValue() && a.transition({
                            y: this.scale.calculateY(a.value),
                            x: this.scale.calculateX(c)
                        }, b)
                    }, this), this.options.bezierCurve && c.each(h, function(a, b) {
                        var d = b > 0 && b < h.length - 1 ? this.options.bezierCurveTension : 0;
                        a.controlPoints = c.splineCurve(g(a, h, b), a, f(a, h, b), d), a.controlPoints.outer.y > this.scale.endPoint ? a.controlPoints.outer.y = this.scale.endPoint : a.controlPoints.outer.y < this.scale.startPoint && (a.controlPoints.outer.y = this.scale.startPoint), a.controlPoints.inner.y > this.scale.endPoint ? a.controlPoints.inner.y = this.scale.endPoint : a.controlPoints.inner.y < this.scale.startPoint && (a.controlPoints.inner.y = this.scale.startPoint)
                    }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(h, function(a, b) {
                        if (0 === b) d.moveTo(a.x, a.y);
                        else if (this.options.bezierCurve) {
                            var c = g(a, h, b);
                            d.bezierCurveTo(c.controlPoints.outer.x, c.controlPoints.outer.y, a.controlPoints.inner.x, a.controlPoints.inner.y, a.x, a.y)
                        } else d.lineTo(a.x, a.y)
                    }, this), d.stroke(), this.options.datasetFill && h.length > 0 && (d.lineTo(h[h.length - 1].x, this.scale.endPoint), d.lineTo(h[0].x, this.scale.endPoint), d.fillStyle = a.fillColor, d.closePath(), d.fill()), c.each(h, function(a) {
                        a.draw()
                    })
                }, this)
            }
        })
    }.call(this), function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "PolarArea",
            defaults: d,
            initialize: function(a) {
                this.segments = [], this.SegmentArc = b.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new b.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: a.length
                }), this.updateScaleRange(a), this.scale.update(), c.each(a, function(a, b) {
                    this.addData(a, b, !0)
                }, this), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) {
                        a.restore(["fillColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightColor
                    }), this.showTooltip(b)
                }), this.render()
            },
            getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) {
                    a.inRange(d.x, d.y) && b.push(a)
                }, this), b
            },
            addData: function(a, b, c) {
                var d = b || this.segments.length;
                this.segments.splice(d, 0, new this.SegmentArc({
                    fillColor: a.color,
                    highlightColor: a.highlight || a.color,
                    label: a.label,
                    value: a.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(a.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), c || (this.reflow(), this.update())
            },
            removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update()
            },
            calculateTotal: function(a) {
                this.total = 0, c.each(a, function(a) {
                    this.total += a.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(a) {
                var b = [];
                c.each(a, function(a) {
                    b.push(a.value)
                });
                var d = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d, {
                    size: c.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), c.each(this.segments, function(a) {
                    a.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                c.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), c.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), c.each(this.segments, function(a) {
                    a.update({
                        outerRadius: this.scale.calculateCenterOffset(a.value)
                    })
                }, this)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear(), c.each(this.segments, function(a, c) {
                    a.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(a.value)
                    }, b), a.endAngle = a.startAngle + a.circumference, 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle), a.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this), function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers;
        b.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(a) {
                this.PointClass = b.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(a), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        pointColor: b.pointColor,
                        pointStrokeColor: b.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        var f;
                        this.scale.animation || (f = this.scale.getPointPosition(e, this.scale.calculateCenterOffset(c))), d.points.push(new this.PointClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            x: this.options.animation ? this.scale.xCenter : f.x,
                            y: this.options.animation ? this.scale.yCenter : f.y,
                            strokeColor: b.pointStrokeColor,
                            fillColor: b.pointColor,
                            highlightFill: b.pointHighlightFill || b.pointColor,
                            highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(a) {
                c.each(this.datasets, function(b) {
                    c.each(b.points, a, this)
                }, this)
            },
            getPointsAtEvent: function(a) {
                var b = c.getRelativePosition(a),
                    d = c.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, b),
                    e = 2 * Math.PI / this.scale.valuesCount,
                    f = Math.round((d.angle - 1.5 * Math.PI) / e),
                    g = [];
                return (f >= this.scale.valuesCount || 0 > f) && (f = 0), d.distance <= this.scale.drawingArea && c.each(this.datasets, function(a) {
                    g.push(a.points[f])
                }), g
            },
            buildScale: function(a) {
                this.scale = new b.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: a.labels,
                    valuesCount: a.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(a.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(a) {
                var b = function() {
                        var b = [];
                        return c.each(a, function(a) {
                            a.data ? b = b.concat(a.data) : c.each(a.points, function(a) {
                                b.push(a.value)
                            })
                        }), b
                    }(),
                    d = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d)
            },
            addData: function(a, b) {
                this.scale.valuesCount++, c.each(a, function(a, c) {
                    var d = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(a));
                    this.datasets[c].points.push(new this.PointClass({
                        value: a,
                        label: b,
                        x: d.x,
                        y: d.y,
                        strokeColor: this.datasets[c].pointStrokeColor,
                        fillColor: this.datasets[c].pointColor
                    }))
                }, this), this.scale.labels.push(b), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), c.each(this.datasets, function(a) {
                    a.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(a) {
                    a.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                c.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: c.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(a) {
                var b = a || 1,
                    d = this.chart.ctx;
                this.clear(), this.scale.draw(), c.each(this.datasets, function(a) {
                    c.each(a.points, function(a, c) {
                        a.hasValue() && a.transition(this.scale.getPointPosition(c, this.scale.calculateCenterOffset(a.value)), b)
                    }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(a.points, function(a, b) {
                        0 === b ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y)
                    }, this), d.closePath(), d.stroke(), d.fillStyle = a.fillColor, d.fill(), c.each(a.points, function(a) {
                        a.hasValue() && a.draw()
                    })
                }, this)
            }
        })
    }.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
                e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function(a) {
    var b, c, d = a.event;
    b = d.special.debouncedresize = {
        setup: function() {
            a(this).on("resize", b.handler)
        },
        teardown: function() {
            a(this).off("resize", b.handler)
        },
        handler: function(a, e) {
            var f = this,
                g = arguments,
                h = function() {
                    a.type = "debouncedresize", d.dispatch.apply(f, g)
                };
            c && clearTimeout(c), e ? h() : c = setTimeout(h, b.threshold)
        },
        threshold: 150
    }
}(jQuery),
function(a) {
    var b, c, d, e = a.event,
        f = {
            _: 0
        },
        g = 0;
    b = e.special.throttledresize = {
        setup: function() {
            a(this).on("resize", b.handler)
        },
        teardown: function() {
            a(this).off("resize", b.handler)
        },
        handler: function(h, i) {
            var j = this,
                k = arguments;
            c = !0, d || (setInterval(function() {
                g++, (g > b.threshold && c || i) && (h.type = "throttledresize", e.dispatch.apply(j, k), c = !1, g = 0), g > 9 && (a(f).stop(), d = !1, g = 0)
            }, 30), d = !0)
        },
        threshold: 0
    }
}(jQuery), ! function(a, b) {
    function c(a) {
        return "object" == typeof a
    }

    function d(a) {
        return "string" == typeof a
    }

    function e(a) {
        return "number" == typeof a
    }

    function f(a) {
        return a === b
    }

    function g() {
        M = google.maps, L || (L = {
            verbose: !1,
            queryLimit: {
                attempt: 5,
                delay: 250,
                random: 250
            },
            classes: function() {
                var b = {};
                return a.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer TransitLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(a, c) {
                    b[c] = M[c]
                }), b
            }(),
            map: {
                mapTypeId: M.MapTypeId.ROADMAP,
                center: [46.578498, 2.457275],
                zoom: 2
            },
            overlay: {
                pane: "floatPane",
                content: "",
                offset: {
                    x: 0,
                    y: 0
                }
            },
            geoloc: {
                getCurrentPosition: {
                    maximumAge: 6e4,
                    timeout: 5e3
                }
            }
        })
    }

    function h(a, b) {
        return f(a) ? "gmap3_" + (b ? N + 1 : ++N) : a
    }

    function i(a) {
        var b, c = M.version.split(".");
        for (a = a.split("."), b = 0; b < c.length; b++) c[b] = parseInt(c[b], 10);
        for (b = 0; b < a.length; b++) {
            if (a[b] = parseInt(a[b], 10), !c.hasOwnProperty(b)) return !1;
            if (c[b] < a[b]) return !1
        }
        return !0
    }

    function j(b, c, d, e, f) {
        function g(c, e) {
            c && a.each(c, function(a, c) {
                var g = b,
                    h = c;
                P(c) && (g = c[0], h = c[1]), e(d, a, function(a) {
                    h.apply(g, [f || d, a, i])
                })
            })
        }
        var h = c.td || {},
            i = {
                id: e,
                data: h.data,
                tag: h.tag
            };
        g(h.events, M.event.addListener), g(h.onces, M.event.addListenerOnce)
    }

    function k(a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c
    }

    function l(a, b) {
        var c, d = arguments;
        for (c = 2; c < d.length; c++)
            if (b in d[c] && d[c].hasOwnProperty(b)) return void(a[b] = d[c][b])
    }

    function m(b, c) {
        var d, e, f = ["data", "tag", "id", "events", "onces"],
            g = {};
        if (b.td)
            for (d in b.td) b.td.hasOwnProperty(d) && "options" !== d && "values" !== d && (g[d] = b.td[d]);
        for (e = 0; e < f.length; e++) l(g, f[e], c, b.td);
        return g.options = a.extend({}, b.opts || {}, c.options || {}), g
    }

    function n() {
        if (L.verbose) {
            var a, b = [];
            if (window.console && O(console.error)) {
                for (a = 0; a < arguments.length; a++) b.push(arguments[a]);
                console.error.apply(console, b)
            } else {
                for (b = "", a = 0; a < arguments.length; a++) b += arguments[a].toString() + " ";
                alert(b)
            }
        }
    }

    function o(a) {
        return (e(a) || d(a)) && "" !== a && !isNaN(a)
    }

    function p(a) {
        var b, d = [];
        if (!f(a))
            if (c(a))
                if (e(a.length)) d = a;
                else
                    for (b in a) d.push(a[b]);
        else d.push(a);
        return d
    }

    function q(b) {
        return b ? O(b) ? b : (b = p(b), function(d) {
            var e;
            if (f(d)) return !1;
            if (c(d)) {
                for (e = 0; e < d.length; e++)
                    if (a.inArray(d[e], b) >= 0) return !0;
                return !1
            }
            return a.inArray(d, b) >= 0
        }) : void 0
    }

    function r(a, b, c) {
        var e = b ? a : null;
        return !a || d(a) ? e : a.latLng ? r(a.latLng) : a instanceof M.LatLng ? a : o(a.lat) ? new M.LatLng(a.lat, a.lng) : !c && P(a) && o(a[0]) && o(a[1]) ? new M.LatLng(a[0], a[1]) : e
    }

    function s(a) {
        var b, c;
        return !a || a instanceof M.LatLngBounds ? a || null : (P(a) ? 2 === a.length ? (b = r(a[0]), c = r(a[1])) : 4 === a.length && (b = r([a[0], a[1]]), c = r([a[2], a[3]])) : "ne" in a && "sw" in a ? (b = r(a.ne), c = r(a.sw)) : "n" in a && "e" in a && "s" in a && "w" in a && (b = r([a.n, a.e]), c = r([a.s, a.w])), b && c ? new M.LatLngBounds(c, b) : null)
    }

    function t(a, b, c, e, f) {
        var g = c ? r(e.td, !1, !0) : !1,
            h = g ? {
                latLng: g
            } : e.td.address ? d(e.td.address) ? {
                address: e.td.address
            } : e.td.address : !1,
            i = h ? R.get(h) : !1,
            j = this;
        h ? (f = f || 0, i ? (e.latLng = i.results[0].geometry.location, e.results = i.results, e.status = i.status, b.apply(a, [e])) : (h.location && (h.location = r(h.location)), h.bounds && (h.bounds = s(h.bounds)), x().geocode(h, function(d, g) {
            g === M.GeocoderStatus.OK ? (R.store(h, {
                results: d,
                status: g
            }), e.latLng = d[0].geometry.location, e.results = d, e.status = g, b.apply(a, [e])) : g === M.GeocoderStatus.OVER_QUERY_LIMIT && f < L.queryLimit.attempt ? setTimeout(function() {
                t.apply(j, [a, b, c, e, f + 1])
            }, L.queryLimit.delay + Math.floor(Math.random() * L.queryLimit.random)) : (n("geocode failed", g, h), e.latLng = e.results = !1, e.status = g, b.apply(a, [e]))
        }))) : (e.latLng = r(e.td, !1, !0), b.apply(a, [e]))
    }

    function u(b, c, d, e) {
        function f() {
            do h++; while (h < b.length && !("address" in b[h]));
            return h >= b.length ? void d.apply(c, [e]) : void t(g, function(c) {
                delete c.td, a.extend(b[h], c), f.apply(g, [])
            }, !0, {
                td: b[h]
            })
        }
        var g = this,
            h = -1;
        f()
    }

    function v(a, b, c) {
        var d = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(e) {
            d || (d = !0, c.latLng = new M.LatLng(e.coords.latitude, e.coords.longitude), b.apply(a, [c]))
        }, function() {
            d || (d = !0, c.latLng = !1, b.apply(a, [c]))
        }, c.opts.getCurrentPosition) : (c.latLng = !1, b.apply(a, [c]))
    }

    function w(a) {
        var b, d = !1;
        if (c(a) && a.hasOwnProperty("get")) {
            for (b in a)
                if ("get" !== b) return !1;
            d = !a.get.hasOwnProperty("callback")
        }
        return d
    }

    function x() {
        return Q.geocoder || (Q.geocoder = new M.Geocoder), Q.geocoder
    }

    function y() {
        var a = [];
        this.get = function(b) {
            if (a.length) {
                var d, e, f, g, h, i = k(b);
                for (d = 0; d < a.length; d++) {
                    for (g = a[d], h = i.length === g.keys.length, e = 0; e < i.length && h; e++) f = i[e], h = f in g.request, h && (h = c(b[f]) && "equals" in b[f] && O(b[f]) ? b[f].equals(g.request[f]) : b[f] === g.request[f]);
                    if (h) return g.results
                }
            }
        }, this.store = function(b, c) {
            a.push({
                request: b,
                keys: k(b),
                results: c
            })
        }
    }

    function z() {
        var a = [],
            b = this;
        b.empty = function() {
            return !a.length
        }, b.add = function(b) {
            a.push(b)
        }, b.get = function() {
            return a.length ? a[0] : !1
        }, b.ack = function() {
            a.shift()
        }
    }

    function A() {
        function b(a) {
            return {
                id: a.id,
                name: a.name,
                object: a.obj,
                tag: a.tag,
                data: a.data
            }
        }

        function c(a) {
            O(a.setMap) && a.setMap(null), O(a.remove) && a.remove(), O(a.free) && a.free(), a = null
        }
        var d = {},
            e = {},
            g = this;
        g.add = function(a, b, c, f) {
            var i = a.td || {},
                j = h(i.id);
            return d[b] || (d[b] = []), j in e && g.clearById(j), e[j] = {
                obj: c,
                sub: f,
                name: b,
                id: j,
                tag: i.tag,
                data: i.data
            }, d[b].push(j), j
        }, g.getById = function(a, c, d) {
            var f = !1;
            return a in e && (f = c ? e[a].sub : d ? b(e[a]) : e[a].obj), f
        }, g.get = function(a, c, f, g) {
            var h, i, j = q(f);
            if (!d[a] || !d[a].length) return null;
            for (h = d[a].length; h;)
                if (h--, i = d[a][c ? h : d[a].length - h - 1], i && e[i]) {
                    if (j && !j(e[i].tag)) continue;
                    return g ? b(e[i]) : e[i].obj
                }
            return null
        }, g.all = function(a, c, g) {
            var h = [],
                i = q(c),
                j = function(a) {
                    var c, f;
                    for (c = 0; c < d[a].length; c++)
                        if (f = d[a][c], f && e[f]) {
                            if (i && !i(e[f].tag)) continue;
                            h.push(g ? b(e[f]) : e[f].obj)
                        }
                };
            if (a in d) j(a);
            else if (f(a))
                for (a in d) j(a);
            return h
        }, g.rm = function(a, b, c) {
            var f, h;
            if (!d[a]) return !1;
            if (b)
                if (c)
                    for (f = d[a].length - 1; f >= 0 && (h = d[a][f], !b(e[h].tag)); f--);
                else
                    for (f = 0; f < d[a].length && (h = d[a][f], !b(e[h].tag)); f++);
            else f = c ? d[a].length - 1 : 0;
            return f in d[a] ? g.clearById(d[a][f], f) : !1
        }, g.clearById = function(a, b) {
            if (a in e) {
                var g, h = e[a].name;
                for (g = 0; f(b) && g < d[h].length; g++) a === d[h][g] && (b = g);
                return c(e[a].obj), e[a].sub && c(e[a].sub), delete e[a], d[h].splice(b, 1), !0
            }
            return !1
        }, g.objGetById = function(a) {
            var b, c;
            if (d.clusterer)
                for (c in d.clusterer)
                    if ((b = e[d.clusterer[c]].obj.getById(a)) !== !1) return b;
            return !1
        }, g.objClearById = function(a) {
            var b;
            if (d.clusterer)
                for (b in d.clusterer)
                    if (e[d.clusterer[b]].obj.clearById(a)) return !0;
            return null
        }, g.clear = function(a, b, c, e) {
            var f, h, i, j = q(e);
            if (a && a.length) a = p(a);
            else {
                a = [];
                for (f in d) a.push(f)
            }
            for (h = 0; h < a.length; h++)
                if (i = a[h], b) g.rm(i, j, !0);
                else if (c) g.rm(i, j, !1);
            else
                for (; g.rm(i, j, !1););
        }, g.objClear = function(b, c, f, g) {
            var h;
            if (d.clusterer && (a.inArray("marker", b) >= 0 || !b.length))
                for (h in d.clusterer) e[d.clusterer[h]].obj.clear(c, f, g)
        }
    }

    function B(b, c, e) {
        function f(a) {
            var b = {};
            return b[a] = {}, b
        }

        function g() {
            var a;
            for (a in e)
                if (e.hasOwnProperty(a) && !i.hasOwnProperty(a)) return a
        }
        var h, i = {},
            j = this,
            k = {
                latLng: {
                    map: !1,
                    marker: !1,
                    infowindow: !1,
                    circle: !1,
                    overlay: !1,
                    getlatlng: !1,
                    getmaxzoom: !1,
                    getelevation: !1,
                    streetviewpanorama: !1,
                    getaddress: !0
                },
                geoloc: {
                    getgeoloc: !0
                }
            };
        d(e) && (e = f(e)), j.run = function() {
            for (var d, f; d = g();) {
                if (O(b[d])) return h = d, f = a.extend(!0, {}, L[d] || {}, e[d].options || {}), void(d in k.latLng ? e[d].values ? u(e[d].values, b, b[d], {
                    td: e[d],
                    opts: f,
                    session: i
                }) : t(b, b[d], k.latLng[d], {
                    td: e[d],
                    opts: f,
                    session: i
                }) : d in k.geoloc ? v(b, b[d], {
                    td: e[d],
                    opts: f,
                    session: i
                }) : b[d].apply(b, [{
                    td: e[d],
                    opts: f,
                    session: i
                }]));
                i[d] = null
            }
            c.apply(b, [e, i])
        }, j.ack = function(a) {
            i[h] = a, j.run.apply(j, [])
        }
    }

    function C() {
        return Q.ds || (Q.ds = new M.DirectionsService), Q.ds
    }

    function D() {
        return Q.dms || (Q.dms = new M.DistanceMatrixService), Q.dms
    }

    function E() {
        return Q.mzs || (Q.mzs = new M.MaxZoomService), Q.mzs
    }

    function F() {
        return Q.es || (Q.es = new M.ElevationService), Q.es
    }

    function G(a, b) {
        function c() {
            var a = this;
            return a.onAdd = function() {}, a.onRemove = function() {}, a.draw = function() {}, L.classes.OverlayView.apply(a, [])
        }
        c.prototype = L.classes.OverlayView.prototype;
        var d = new c;
        return d.setMap(a), d
    }

    function H(b, d, e) {
        function f(a) {
            H[a] || (delete I[a].options.map, H[a] = new L.classes.Marker(I[a].options), j(b, {
                td: I[a]
            }, H[a], I[a].id))
        }

        function g() {
            return (s = K.getProjection()) ? (z = !0, C.push(M.event.addListener(d, "zoom_changed", n)), C.push(M.event.addListener(d, "bounds_changed", n)), void p()) : void setTimeout(function() {
                g.apply(B, [])
            }, 25)
        }

        function i(a) {
            c(D[a]) ? (O(D[a].obj.setMap) && D[a].obj.setMap(null), O(D[a].obj.remove) && D[a].obj.remove(), O(D[a].shadow.remove) && D[a].obj.remove(), O(D[a].shadow.setMap) && D[a].shadow.setMap(null), delete D[a].obj, delete D[a].shadow) : H[a] && H[a].setMap(null), delete D[a]
        }

        function k() {
            var a, b, c, d, e, f, g, h, i = Math.cos,
                j = Math.sin,
                k = arguments;
            return k[0] instanceof M.LatLng ? (a = k[0].lat(), c = k[0].lng(), k[1] instanceof M.LatLng ? (b = k[1].lat(), d = k[1].lng()) : (b = k[1], d = k[2])) : (a = k[0], c = k[1], k[2] instanceof M.LatLng ? (b = k[2].lat(), d = k[2].lng()) : (b = k[2], d = k[3])), e = Math.PI * a / 180, f = Math.PI * c / 180, g = Math.PI * b / 180, h = Math.PI * d / 180, 6371e3 * Math.acos(Math.min(i(e) * i(g) * i(f) * i(h) + i(e) * j(f) * i(g) * j(h) + j(e) * j(g), 1))
        }

        function l() {
            var a = k(d.getCenter(), d.getBounds().getNorthEast()),
                b = new M.Circle({
                    center: d.getCenter(),
                    radius: 1.25 * a
                });
            return b.getBounds()
        }

        function m() {
            var a, b = {};
            for (a in D) b[a] = !0;
            return b
        }

        function n() {
            clearTimeout(r), r = setTimeout(p, 25)
        }

        function o(a) {
            var b = s.fromLatLngToDivPixel(a),
                c = s.fromDivPixelToLatLng(new M.Point(b.x + e.radius, b.y - e.radius)),
                d = s.fromDivPixelToLatLng(new M.Point(b.x - e.radius, b.y + e.radius));
            return new M.LatLngBounds(d, c)
        }

        function p() {
            if (!w && !y && z) {
                var b, c, f, g, h, j, k, n, p, q, r, s = !1,
                    v = [],
                    B = {},
                    C = d.getZoom(),
                    E = "maxZoom" in e && C > e.maxZoom,
                    F = m();
                for (x = !1, C > 3 && (h = l(), s = h.getSouthWest().lng() < h.getNorthEast().lng()), b = 0; b < I.length; b++) !I[b] || s && !h.contains(I[b].options.position) || t && !t(J[b]) || v.push(b);
                for (;;) {
                    for (b = 0; B[b] && b < v.length;) b++;
                    if (b === v.length) break;
                    if (g = [], A && !E) {
                        r = 10;
                        do
                            for (n = g, g = [], r--, k = n.length ? h.getCenter() : I[v[b]].options.position, h = o(k), c = b; c < v.length; c++) B[c] || h.contains(I[v[c]].options.position) && g.push(c); while (n.length < g.length && g.length > 1 && r)
                    } else
                        for (c = b; c < v.length; c++)
                            if (!B[c]) {
                                g.push(c);
                                break
                            } for (j = {
                            indexes: [],
                            ref: []
                        }, p = q = 0, f = 0; f < g.length; f++) B[g[f]] = !0, j.indexes.push(v[g[f]]), j.ref.push(v[g[f]]), p += I[v[g[f]]].options.position.lat(), q += I[v[g[f]]].options.position.lng();
                    p /= g.length, q /= g.length, j.latLng = new M.LatLng(p, q), j.ref = j.ref.join("-"), j.ref in F ? delete F[j.ref] : (1 === g.length && (D[j.ref] = !0), u(j))
                }
                a.each(F, function(a) {
                    i(a)
                }), y = !1
            }
        }
        var r, s, t, u, v, w = !1,
            x = !1,
            y = !1,
            z = !1,
            A = !0,
            B = this,
            C = [],
            D = {},
            E = {},
            F = {},
            H = [],
            I = [],
            J = [],
            K = G(d, e.radius);
        g(), B.getById = function(a) {
            return a in E ? (f(E[a]), H[E[a]]) : !1
        }, B.rm = function(a) {
            var b = E[a];
            H[b] && H[b].setMap(null), delete H[b], H[b] = !1, delete I[b], I[b] = !1, delete J[b], J[b] = !1, delete E[a], delete F[b], x = !0
        }, B.clearById = function(a) {
            return a in E ? (B.rm(a), !0) : void 0
        }, B.clear = function(a, b, c) {
            var d, e, f, g, h, i = [],
                j = q(c);
            for (a ? (d = I.length - 1, e = -1, f = -1) : (d = 0, e = I.length, f = 1), g = d; g !== e && (!I[g] || j && !j(I[g].tag) || (i.push(F[g]), !b && !a)); g += f);
            for (h = 0; h < i.length; h++) B.rm(i[h])
        }, B.add = function(a, b) {
            a.id = h(a.id), B.clearById(a.id), E[a.id] = H.length, F[H.length] = a.id, H.push(null), I.push(a), J.push(b), x = !0
        }, B.addMarker = function(a, c) {
            c = c || {}, c.id = h(c.id), B.clearById(c.id), c.options || (c.options = {}), c.options.position = a.getPosition(), j(b, {
                td: c
            }, a, c.id), E[c.id] = H.length, F[H.length] = c.id, H.push(a), I.push(c), J.push(c.data || {}), x = !0
        }, B.td = function(a) {
            return I[a]
        }, B.value = function(a) {
            return J[a]
        }, B.marker = function(a) {
            return a in H ? (f(a), H[a]) : !1
        }, B.markerIsSet = function(a) {
            return Boolean(H[a])
        }, B.setMarker = function(a, b) {
            H[a] = b
        }, B.store = function(a, b, c) {
            D[a.ref] = {
                obj: b,
                shadow: c
            }
        }, B.free = function() {
            var b;
            for (b = 0; b < C.length; b++) M.event.removeListener(C[b]);
            C = [], a.each(D, function(a) {
                i(a)
            }), D = {}, a.each(I, function(a) {
                I[a] = null
            }), I = [], a.each(H, function(a) {
                H[a] && (H[a].setMap(null), delete H[a])
            }), H = [], a.each(J, function(a) {
                delete J[a]
            }), J = [], E = {}, F = {}
        }, B.filter = function(a) {
            t = a, p()
        }, B.enable = function(a) {
            A !== a && (A = a, p())
        }, B.display = function(a) {
            u = a
        }, B.error = function(a) {
            v = a
        }, B.beginUpdate = function() {
            w = !0
        }, B.endUpdate = function() {
            w = !1, x && p()
        }, B.autofit = function(a) {
            var b;
            for (b = 0; b < I.length; b++) I[b] && a.extend(I[b].options.position)
        }
    }

    function I(a, b) {
        var c = this;
        c.id = function() {
            return a
        }, c.filter = function(a) {
            b.filter(a)
        }, c.enable = function() {
            b.enable(!0)
        }, c.disable = function() {
            b.enable(!1)
        }, c.add = function(a, c, d) {
            d || b.beginUpdate(), b.addMarker(a, c), d || b.endUpdate()
        }, c.getById = function(a) {
            return b.getById(a)
        }, c.clearById = function(a, c) {
            var d;
            return c || b.beginUpdate(), d = b.clearById(a), c || b.endUpdate(), d
        }, c.clear = function(a, c, d, e) {
            e || b.beginUpdate(), b.clear(a, c, d), e || b.endUpdate()
        }
    }

    function J(b, c, d, e) {
        var f = this,
            g = [];
        L.classes.OverlayView.call(f), f.setMap(b), f.onAdd = function() {
            var b = f.getPanes();
            c.pane in b && a(b[c.pane]).append(e), a.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(b, c) {
                g.push(M.event.addDomListener(e[0], c, function(b) {
                    a.Event(b).stopPropagation(), M.event.trigger(f, c, [b]), f.draw()
                }))
            }), g.push(M.event.addDomListener(e[0], "contextmenu", function(b) {
                a.Event(b).stopPropagation(), M.event.trigger(f, "rightclick", [b]), f.draw()
            }))
        }, f.getPosition = function() {
            return d
        }, f.setPosition = function(a) {
            d = a, f.draw()
        }, f.draw = function() {
            var a = f.getProjection().fromLatLngToDivPixel(d);
            e.css("left", a.x + c.offset.x + "px").css("top", a.y + c.offset.y + "px")
        }, f.onRemove = function() {
            var a;
            for (a = 0; a < g.length; a++) M.event.removeListener(g[a]);
            e.remove()
        }, f.hide = function() {
            e.hide()
        }, f.show = function() {
            e.show()
        }, f.toggle = function() {
            e && (e.is(":visible") ? f.show() : f.hide())
        }, f.toggleDOM = function() {
            f.setMap(f.getMap() ? null : b)
        }, f.getDOMElement = function() {
            return e[0]
        }
    }

    function K(e) {
        function g() {
            !v && (v = x.get()) && v.run()
        }

        function k() {
            v = null, x.ack(), g.call(w)
        }

        function l(a) {
            var b, c = a.td.callback;
            c && (b = Array.prototype.slice.call(arguments, 1), O(c) ? c.apply(e, b) : P(c) && O(c[1]) && c[1].apply(c[0], b))
        }

        function o(a, b, c) {
            c && j(e, a, b, c), l(a, b), v.ack(b)
        }

        function q(b, c) {
            c = c || {};
            var d = c.td && c.td.options ? c.td.options : 0;
            G ? d && (d.center && (d.center = r(d.center)), G.setOptions(d)) : (d = c.opts || a.extend(!0, {}, L.map, d || {}), d.center = b || r(d.center), G = new L.classes.Map(e.get(0), d))
        }

        function t(c) {
            var d, f, g = new H(e, G, c),
                h = {},
                i = {},
                k = [],
                l = /^[0-9]+$/;
            for (f in c) l.test(f) ? (k.push(1 * f), i[f] = c[f], i[f].width = i[f].width || 0, i[f].height = i[f].height || 0) : h[f] = c[f];
            return k.sort(function(a, b) {
                return a > b
            }), d = h.calculator ? function(b) {
                var c = [];
                return a.each(b, function(a, b) {
                    c.push(g.value(b))
                }), h.calculator.apply(e, [c])
            } : function(a) {
                return a.length
            }, g.error(function() {
                n.apply(w, arguments)
            }), g.display(function(f) {
                var l, m, n, o, p, q, s = d(f.indexes);
                if (c.force || s > 1)
                    for (l = 0; l < k.length; l++) k[l] <= s && (m = i[k[l]]);
                m ? (p = m.offset || [-m.width / 2, -m.height / 2], n = a.extend({}, h), n.options = a.extend({
                    pane: "overlayLayer",
                    content: m.content ? m.content.replace("CLUSTER_COUNT", s) : "",
                    offset: {
                        x: ("x" in p ? p.x : p[0]) || 0,
                        y: ("y" in p ? p.y : p[1]) || 0
                    }
                }, h.options || {}), o = w.overlay({
                    td: n,
                    opts: n.options,
                    latLng: r(f)
                }, !0), n.options.pane = "floatShadow", n.options.content = a(document.createElement("div")).width(m.width + "px").height(m.height + "px").css({
                    cursor: "pointer"
                }), q = w.overlay({
                    td: n,
                    opts: n.options,
                    latLng: r(f)
                }, !0), h.data = {
                    latLng: r(f),
                    markers: []
                }, a.each(f.indexes, function(a, b) {
                    h.data.markers.push(g.value(b)), g.markerIsSet(b) && g.marker(b).setMap(null)
                }), j(e, {
                    td: h
                }, q, b, {
                    main: o,
                    shadow: q
                }), g.store(f, o, q)) : a.each(f.indexes, function(a, b) {
                    g.marker(b).setMap(G)
                })
            }), g
        }

        function u(b, c, d) {
            var f = [],
                g = "values" in b.td;
            return g || (b.td.values = [{
                options: b.opts
            }]), b.td.values.length ? (q(), a.each(b.td.values, function(a, g) {
                var h, i, k, l, n = m(b, g);
                if (n.options[d])
                    if (n.options[d][0][0] && P(n.options[d][0][0]))
                        for (i = 0; i < n.options[d].length; i++)
                            for (k = 0; k < n.options[d][i].length; k++) n.options[d][i][k] = r(n.options[d][i][k]);
                    else
                        for (i = 0; i < n.options[d].length; i++) n.options[d][i] = r(n.options[d][i]);
                n.options.map = G, l = new M[c](n.options), f.push(l), h = y.add({
                    td: n
                }, c.toLowerCase(), l), j(e, {
                    td: n
                }, l, h)
            }), void o(b, g ? f : f[0])) : void o(b, !1)
        }
        var v, w = this,
            x = new z,
            y = new A,
            G = null;
        w._plan = function(a) {
            var b;
            for (b = 0; b < a.length; b++) x.add(new B(w, k, a[b]));
            g()
        }, w.map = function(a) {
            q(a.latLng, a), j(e, a, G), o(a, G)
        }, w.destroy = function(a) {
            y.clear(), e.empty(), G && (G = null), o(a, !0)
        }, w.overlay = function(b, c) {
            var d = [],
                f = "values" in b.td;
            return f || (b.td.values = [{
                latLng: b.latLng,
                options: b.opts
            }]), b.td.values.length ? (J.__initialised || (J.prototype = new L.classes.OverlayView, J.__initialised = !0), a.each(b.td.values, function(f, g) {
                var h, i, k = m(b, g),
                    l = a(document.createElement("div")).css({
                        border: "none",
                        borderWidth: 0,
                        position: "absolute"
                    });
                l.append(k.options.content), i = new J(G, k.options, r(k) || r(g), l), d.push(i), l = null, c || (h = y.add(b, "overlay", i), j(e, {
                    td: k
                }, i, h))
            }), c ? d[0] : void o(b, f ? d : d[0])) : void o(b, !1)
        }, w.marker = function(b) {
            var c, d, f, g = "values" in b.td,
                i = !G;
            return g || (b.opts.position = b.latLng || r(b.opts.position), b.td.values = [{
                options: b.opts
            }]), b.td.values.length ? (i && q(), b.td.cluster && !G.getBounds() ? void M.event.addListenerOnce(G, "bounds_changed", function() {
                w.marker.apply(w, [b])
            }) : void(b.td.cluster ? (b.td.cluster instanceof I ? (d = b.td.cluster, f = y.getById(d.id(), !0)) : (f = t(b.td.cluster), d = new I(h(b.td.id, !0), f), y.add(b, "clusterer", d, f)), f.beginUpdate(), a.each(b.td.values, function(a, c) {
                var d = m(b, c);
                d.options.position = r(d.options.position ? d.options.position : c), d.options.position && (d.options.map = G, i && (G.setCenter(d.options.position), i = !1), f.add(d, c))
            }), f.endUpdate(), o(b, d)) : (c = [], a.each(b.td.values, function(a, d) {
                var f, g, h = m(b, d);
                h.options.position = r(h.options.position ? h.options.position : d), h.options.position && (h.options.map = G, i && (G.setCenter(h.options.position), i = !1), g = new L.classes.Marker(h.options), c.push(g), f = y.add({
                    td: h
                }, "marker", g), j(e, {
                    td: h
                }, g, f))
            }), o(b, g ? c : c[0])))) : void o(b, !1)
        }, w.getroute = function(a) {
            a.opts.origin = r(a.opts.origin, !0), a.opts.destination = r(a.opts.destination, !0), C().route(a.opts, function(b, c) {
                l(a, c === M.DirectionsStatus.OK ? b : !1, c), v.ack()
            })
        }, w.getdistance = function(a) {
            var b;
            for (a.opts.origins = p(a.opts.origins), b = 0; b < a.opts.origins.length; b++) a.opts.origins[b] = r(a.opts.origins[b], !0);
            for (a.opts.destinations = p(a.opts.destinations), b = 0; b < a.opts.destinations.length; b++) a.opts.destinations[b] = r(a.opts.destinations[b], !0);
            D().getDistanceMatrix(a.opts, function(b, c) {
                l(a, c === M.DistanceMatrixStatus.OK ? b : !1, c), v.ack()
            })
        }, w.infowindow = function(c) {
            var d = [],
                g = "values" in c.td;
            g || (c.latLng && (c.opts.position = c.latLng), c.td.values = [{
                options: c.opts
            }]), a.each(c.td.values, function(a, h) {
                var i, k, l = m(c, h);
                l.options.position = r(l.options.position ? l.options.position : h.latLng), G || q(l.options.position), k = new L.classes.InfoWindow(l.options), k && (f(l.open) || l.open) && (g ? k.open(G, l.anchor || b) : k.open(G, l.anchor || (c.latLng ? b : c.session.marker ? c.session.marker : b))), d.push(k), i = y.add({
                    td: l
                }, "infowindow", k), j(e, {
                    td: l
                }, k, i)
            }), o(c, g ? d : d[0])
        }, w.circle = function(b) {
            var c = [],
                d = "values" in b.td;
            return d || (b.opts.center = b.latLng || r(b.opts.center), b.td.values = [{
                options: b.opts
            }]), b.td.values.length ? (a.each(b.td.values, function(a, d) {
                var f, g, h = m(b, d);
                h.options.center = r(h.options.center ? h.options.center : d), G || q(h.options.center), h.options.map = G, g = new L.classes.Circle(h.options), c.push(g), f = y.add({
                    td: h
                }, "circle", g), j(e, {
                    td: h
                }, g, f)
            }), void o(b, d ? c : c[0])) : void o(b, !1)
        }, w.getaddress = function(a) {
            l(a, a.results, a.status), v.ack()
        }, w.getlatlng = function(a) {
            l(a, a.results, a.status), v.ack()
        }, w.getmaxzoom = function(a) {
            E().getMaxZoomAtLatLng(a.latLng, function(b) {
                l(a, b.status === M.MaxZoomStatus.OK ? b.zoom : !1, status), v.ack()
            })
        }, w.getelevation = function(a) {
            var b, c = [],
                d = function(b, c) {
                    l(a, c === M.ElevationStatus.OK ? b : !1, c), v.ack()
                };
            if (a.latLng) c.push(a.latLng);
            else
                for (c = p(a.td.locations || []), b = 0; b < c.length; b++) c[b] = r(c[b]);
            if (c.length) F().getElevationForLocations({
                locations: c
            }, d);
            else {
                if (a.td.path && a.td.path.length)
                    for (b = 0; b < a.td.path.length; b++) c.push(r(a.td.path[b]));
                c.length ? F().getElevationAlongPath({
                    path: c,
                    samples: a.td.samples
                }, d) : v.ack()
            }
        }, w.defaults = function(b) {
            a.each(b.td, function(b, d) {
                c(L[b]) ? L[b] = a.extend({}, L[b], d) : L[b] = d
            }), v.ack(!0)
        }, w.rectangle = function(b) {
            var c = [],
                d = "values" in b.td;
            return d || (b.td.values = [{
                options: b.opts
            }]), b.td.values.length ? (a.each(b.td.values, function(a, d) {
                var f, g, h = m(b, d);
                h.options.bounds = s(h.options.bounds ? h.options.bounds : d), G || q(h.options.bounds.getCenter()), h.options.map = G, g = new L.classes.Rectangle(h.options), c.push(g), f = y.add({
                    td: h
                }, "rectangle", g), j(e, {
                    td: h
                }, g, f)
            }), void o(b, d ? c : c[0])) : void o(b, !1)
        }, w.polyline = function(a) {
            u(a, "Polyline", "path")
        }, w.polygon = function(a) {
            u(a, "Polygon", "paths")
        }, w.trafficlayer = function(a) {
            q();
            var b = y.get("trafficlayer");
            b || (b = new L.classes.TrafficLayer, b.setMap(G), y.add(a, "trafficlayer", b)), o(a, b)
        }, w.transitlayer = function(a) {
            q();
            var b = y.get("transitlayer");
            b || (b = new L.classes.TransitLayer, b.setMap(G), y.add(a, "transitlayer", b)), o(a, b)
        }, w.bicyclinglayer = function(a) {
            q();
            var b = y.get("bicyclinglayer");
            b || (b = new L.classes.BicyclingLayer, b.setMap(G), y.add(a, "bicyclinglayer", b)), o(a, b)
        }, w.groundoverlay = function(a) {
            a.opts.bounds = s(a.opts.bounds), a.opts.bounds && q(a.opts.bounds.getCenter());
            var b, c = new L.classes.GroundOverlay(a.opts.url, a.opts.bounds, a.opts.opts);
            c.setMap(G), b = y.add(a, "groundoverlay", c), o(a, c, b)
        }, w.streetviewpanorama = function(b) {
            b.opts.opts || (b.opts.opts = {}), b.latLng ? b.opts.opts.position = b.latLng : b.opts.opts.position && (b.opts.opts.position = r(b.opts.opts.position)), b.td.divId ? b.opts.container = document.getElementById(b.td.divId) : b.opts.container && (b.opts.container = a(b.opts.container).get(0));
            var c, d = new L.classes.StreetViewPanorama(b.opts.container, b.opts.opts);
            d && G.setStreetView(d), c = y.add(b, "streetviewpanorama", d), o(b, d, c)
        }, w.kmllayer = function(b) {
            var c = [],
                d = "values" in b.td;
            return d || (b.td.values = [{
                options: b.opts
            }]), b.td.values.length ? (a.each(b.td.values, function(a, d) {
                var f, g, h, k = m(b, d);
                G || q(), h = k.options, k.options.opts && (h = k.options.opts, k.options.url && (h.url = k.options.url)), h.map = G, g = i("3.10") ? new L.classes.KmlLayer(h) : new L.classes.KmlLayer(h.url, h), c.push(g), f = y.add({
                    td: k
                }, "kmllayer", g), j(e, {
                    td: k
                }, g, f)
            }), void o(b, d ? c : c[0])) : void o(b, !1)
        }, w.panel = function(b) {
            q();
            var c, d, g = 0,
                h = 0,
                i = a(document.createElement("div"));
            i.css({
                position: "absolute",
                zIndex: 1e3,
                visibility: "hidden"
            }), b.opts.content && (d = a(b.opts.content), i.append(d), e.first().prepend(i), f(b.opts.left) ? f(b.opts.right) ? b.opts.center && (g = (e.width() - d.width()) / 2) : g = e.width() - d.width() - b.opts.right : g = b.opts.left, f(b.opts.top) ? f(b.opts.bottom) ? b.opts.middle && (h = (e.height() - d.height()) / 2) : h = e.height() - d.height() - b.opts.bottom : h = b.opts.top, i.css({
                top: h,
                left: g,
                visibility: "visible"
            })), c = y.add(b, "panel", i), o(b, i, c), i = null
        }, w.directionsrenderer = function(b) {
            b.opts.map = G;
            var c, d = new M.DirectionsRenderer(b.opts);
            b.td.divId ? d.setPanel(document.getElementById(b.td.divId)) : b.td.container && d.setPanel(a(b.td.container).get(0)), c = y.add(b, "directionsrenderer", d), o(b, d, c)
        }, w.getgeoloc = function(a) {
            o(a, a.latLng)
        }, w.styledmaptype = function(a) {
            q();
            var b = new L.classes.StyledMapType(a.td.styles, a.opts);
            G.mapTypes.set(a.td.id, b), o(a, b)
        }, w.imagemaptype = function(a) {
            q();
            var b = new L.classes.ImageMapType(a.opts);
            G.mapTypes.set(a.td.id, b), o(a, b)
        }, w.autofit = function(b) {
            var c = new M.LatLngBounds;
            a.each(y.all(), function(a, b) {
                b.getPosition && b.getPosition() ? c.extend(b.getPosition()) : b.getBounds && b.getBounds() ? (c.extend(b.getBounds().getNorthEast()), c.extend(b.getBounds().getSouthWest())) : b.getPaths && b.getPaths() ? b.getPaths().forEach(function(a) {
                    a.forEach(function(a) {
                        c.extend(a)
                    })
                }) : b.getPath && b.getPath() ? b.getPath().forEach(function(a) {
                    c.extend(a)
                }) : b.getCenter && b.getCenter() ? c.extend(b.getCenter()) : "function" == typeof I && b instanceof I && (b = y.getById(b.id(), !0), b && b.autofit(c))
            }), c.isEmpty() || G.getBounds() && G.getBounds().equals(c) || ("maxZoom" in b.td && M.event.addListenerOnce(G, "bounds_changed", function() {
                this.getZoom() > b.td.maxZoom && this.setZoom(b.td.maxZoom)
            }), G.fitBounds(c)), o(b, !0)
        }, w.clear = function(b) {
            if (d(b.td)) {
                if (y.clearById(b.td) || y.objClearById(b.td)) return void o(b, !0);
                b.td = {
                    name: b.td
                }
            }
            b.td.id ? a.each(p(b.td.id), function(a, b) {
                y.clearById(b) || y.objClearById(b)
            }) : (y.clear(p(b.td.name), b.td.last, b.td.first, b.td.tag), y.objClear(p(b.td.name), b.td.last, b.td.first, b.td.tag)), o(b, !0)
        }, w.get = function(c, e, f) {
            var g, h, i = e ? c : c.td;
            return e || (f = i.full), d(i) ? (h = y.getById(i, !1, f) || y.objGetById(i), h === !1 && (g = i, i = {})) : g = i.name, "map" === g && (h = G), h || (h = [], i.id ? (a.each(p(i.id), function(a, b) {
                h.push(y.getById(b, !1, f) || y.objGetById(b))
            }), P(i.id) || (h = h[0])) : (a.each(g ? p(g) : [b], function(b, c) {
                var d;
                i.first ? (d = y.get(c, !1, i.tag, f), d && h.push(d)) : i.all ? a.each(y.all(c, i.tag, f), function(a, b) {
                    h.push(b)
                }) : (d = y.get(c, !0, i.tag, f), d && h.push(d))
            }), i.all || P(g) || (h = h[0]))), h = P(h) || !i.all ? h : [h], e ? h : void o(c, h)
        }, w.exec = function(b) {
            a.each(p(b.td.func), function(c, d) {
                a.each(w.get(b.td, !0, b.td.hasOwnProperty("full") ? b.td.full : !0), function(a, b) {
                    d.call(e, b)
                })
            }), o(b, !0)
        }, w.trigger = function(b) {
            if (d(b.td)) M.event.trigger(G, b.td);
            else {
                var c = [G, b.td.eventName];
                b.td.var_args && a.each(b.td.var_args, function(a, b) {
                    c.push(b)
                }), M.event.trigger.apply(M.event, c)
            }
            l(b), v.ack()
        }
    }
    var L, M, N = 0,
        O = a.isFunction,
        P = a.isArray,
        Q = {},
        R = new y;
    a.fn.gmap3 = function() {
        var b, c = [],
            d = !0,
            e = [];
        for (g(), b = 0; b < arguments.length; b++) arguments[b] && c.push(arguments[b]);
        return c.length || c.push("map"), a.each(this, function() {
            var b = a(this),
                f = b.data("gmap3");
            d = !1, f || (f = new K(b), b.data("gmap3", f)), 1 !== c.length || "get" !== c[0] && !w(c[0]) ? f._plan(c) : "get" === c[0] ? e.push(f.get("map", !0)) : e.push(f.get(c[0].get, !0, c[0].get.full))
        }), e.length ? 1 === e.length ? e[0] : e : this
    }
}(jQuery),
function(a, b) {
    "function" == typeof define && define.amd ? define([], b(a)) : "object" == typeof exports ? module.exports = b(a) : a.gumshoe = b(a)
}("undefined" != typeof global ? global : this.window || this.global, function(a) {
    "use strict";
    var b, c, d, e, f, g, h = {},
        i = "querySelector" in document && "addEventListener" in a && "classList" in document.createElement("_"),
        j = [],
        k = {
            selector: "[data-gumshoe] a",
            selectorHeader: "[data-gumshoe-header]",
            offset: 0,
            activeClass: "active",
            callback: function() {}
        },
        l = function(a, b, c) {
            if ("[object Object]" === Object.prototype.toString.call(a))
                for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a);
            else
                for (var e = 0, f = a.length; f > e; e++) b.call(c, a[e], e, a)
        },
        m = function() {
            var a = {},
                b = !1,
                c = 0,
                d = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (b = arguments[0], c++);
            for (var e = function(c) {
                    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (b && "[object Object]" === Object.prototype.toString.call(c[d]) ? a[d] = m(!0, a[d], c[d]) : a[d] = c[d])
                }; d > c; c++) {
                var f = arguments[c];
                e(f)
            }
            return a
        },
        n = function(a) {
            return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight)
        },
        o = function() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
        },
        p = function(a) {
            var c = 0;
            if (a.offsetParent) {
                do c += a.offsetTop, a = a.offsetParent; while (a)
            } else c = a.offsetTop;
            return c = c - f - b.offset, c >= 0 ? c : 0
        },
        q = function(a) {
            var b = a.getBoundingClientRect();
            return b.top >= 0 && b.left >= 0 && b.bottom <= (window.innerHeight || document.documentElement.clientHeight) && b.right <= (window.innerWidth || document.documentElement.clientWidth)
        },
        r = function() {
            j.sort(function(a, b) {
                return a.distance > b.distance ? -1 : a.distance < b.distance ? 1 : 0
            })
        };
    h.setDistances = function() {
        d = o(), f = e ? n(e) + p(e) : 0, l(j, function(a) {
            a.distance = p(a.target)
        }), r()
    };
    var s = function() {
            var a = document.querySelectorAll(b.selector);
            l(a, function(a) {
                if (a.hash) {
                    var b = document.querySelector(a.hash);
                    b && j.push({
                        nav: a,
                        target: b,
                        parent: "li" === a.parentNode.tagName.toLowerCase() ? a.parentNode : null,
                        distance: 0
                    })
                }
            })
        },
        t = function() {
            g && (g.nav.classList.remove(b.activeClass), g.parent && g.parent.classList.remove(b.activeClass))
        },
        u = function(a) {
            t(), a.nav.classList.add(b.activeClass), a.parent && a.parent.classList.add(b.activeClass), b.callback(a), g = {
                nav: a.nav,
                parent: a.parent
            }
        };
    h.getCurrentNav = function() {
        var b = a.pageYOffset;
        if (a.innerHeight + b >= d && q(j[0].target)) return u(j[0]);
        for (var c = 0, e = j.length; e > c; c++) {
            var f = j[c];
            if (f.distance <= b) return u(f)
        }
        t()
    };
    var v = function() {
        l(j, function(a) {
            a.nav.classList.contains(b.activeClass) && (g = {
                nav: a.nav,
                parent: a.parent
            })
        })
    };
    h.destroy = function() {
        b && (a.removeEventListener("resize", w, !1), a.removeEventListener("scroll", w, !1), j = [], b = null, c = null, d = null, e = null, f = null, g = null)
    };
    var w = function(a) {
        c || (c = setTimeout(function() {
            c = null, "scroll" === a.type && h.getCurrentNav(), "resize" === a.type && (h.setDistances(), h.getCurrentNav())
        }, 66))
    };
    return h.init = function(c) {
        i && (h.destroy(), b = m(k, c || {}), e = document.querySelector(b.selectorHeader), s(), 0 !== j.length && (v(), h.setDistances(), h.getCurrentNav(), a.addEventListener("resize", w, !1), a.addEventListener("scroll", w, !1)))
    }, h
}), ! function(a, b) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
}(this, function() {
    function a() {}
    var b = a.prototype;
    return b.on = function(a, b) {
        if (a && b) {
            var c = this._events = this._events || {},
                d = c[a] = c[a] || [];
            return -1 == d.indexOf(b) && d.push(b), this
        }
    }, b.once = function(a, b) {
        if (a && b) {
            this.on(a, b);
            var c = this._onceEvents = this._onceEvents || {},
                d = c[a] = c[a] || [];
            return d[b] = !0, this
        }
    }, b.off = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = c.indexOf(b);
            return -1 != d && c.splice(d, 1), this
        }
    }, b.emitEvent = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = 0,
                e = c[d];
            b = b || [];
            for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                var g = f && f[e];
                g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
            }
            return this
        }
    }, a
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(c) {
        return b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter")) : a.imagesLoaded = b(a, a.EvEmitter)
}(window, function(a, b) {
    function c(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }

    function d(a) {
        var b = [];
        if (Array.isArray(a)) b = a;
        else if ("number" == typeof a.length)
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        else b.push(a);
        return b
    }

    function e(a, b, f) {
        return this instanceof e ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = c({}, this.options), "function" == typeof b ? f = b : c(this.options, b), f && this.on("always", f), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new e(a, b, f)
    }

    function f(a) {
        this.img = a
    }

    function g(a, b) {
        this.url = a, this.element = b, this.img = new Image
    }
    var h = a.jQuery,
        i = a.console;
    e.prototype = Object.create(b.prototype), e.prototype.options = {}, e.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, e.prototype.addElementImages = function(a) {
        "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && j[b]) {
            for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                var e = c[d];
                this.addImage(e)
            }
            if ("string" == typeof this.options.background) {
                var f = a.querySelectorAll(this.options.background);
                for (d = 0; d < f.length; d++) {
                    var g = f[d];
                    this.addElementBackgroundImages(g)
                }
            }
        }
    };
    var j = {
        1: !0,
        9: !0,
        11: !0
    };
    return e.prototype.addElementBackgroundImages = function(a) {
        var b = getComputedStyle(a);
        if (b)
            for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                var e = d && d[2];
                e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
            }
    }, e.prototype.addImage = function(a) {
        var b = new f(a);
        this.images.push(b)
    }, e.prototype.addBackground = function(a, b) {
        var c = new g(a, b);
        this.images.push(c)
    }, e.prototype.check = function() {
        function a(a, c, d) {
            setTimeout(function() {
                b.progress(a, c, d)
            })
        }
        var b = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(b) {
            b.once("progress", a), b.check()
        }) : void this.complete()
    }, e.prototype.progress = function(a, b, c) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emitEvent("progress", [this, a, b]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + c, a, b)
    }, e.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(a, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this)
        }
    }, f.prototype = Object.create(b.prototype), f.prototype.check = function() {
        var a = this.getIsImageComplete();
        return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, f.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, f.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.img, b])
    }, f.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, f.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, f.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, f.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype = Object.create(f.prototype), g.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, g.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.element, b])
    }, e.makeJQueryPlugin = function(b) {
        b = b || a.jQuery, b && (h = b, h.fn.imagesLoaded = function(a, b) {
            var c = new e(this, a, b);
            return c.jqDeferred.promise(h(this))
        })
    }, e.makeJQueryPlugin(), e
}), ! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(c) {
        b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("jquery")) : a.jQueryBridget = b(a, a.jQuery)
}(window, function(a, b) {
    "use strict";

    function c(c, f, h) {
        function i(a, b, d) {
            var e, f = "$()." + c + '("' + b + '")';
            return a.each(function(a, i) {
                var j = h.data(i, c);
                if (!j) return void g(c + " not initialized. Cannot call methods, i.e. " + f);
                var k = j[b];
                if (!k || "_" == b.charAt(0)) return void g(f + " is not a valid method");
                var l = k.apply(j, d);
                e = void 0 === e ? l : e
            }), void 0 !== e ? e : a
        }

        function j(a, b) {
            a.each(function(a, d) {
                var e = h.data(d, c);
                e ? (e.option(b), e._init()) : (e = new f(d, b), h.data(d, c, e))
            })
        }
        h = h || b || a.jQuery, h && (f.prototype.option || (f.prototype.option = function(a) {
            h.isPlainObject(a) && (this.options = h.extend(!0, this.options, a))
        }), h.fn[c] = function(a) {
            if ("string" == typeof a) {
                var b = e.call(arguments, 1);
                return i(this, a, b)
            }
            return j(this, a), this
        }, d(h))
    }

    function d(a) {
        !a || a && a.bridget || (a.bridget = c)
    }
    var e = Array.prototype.slice,
        f = a.console,
        g = "undefined" == typeof f ? function() {} : function(a) {
            f.error(a)
        };
    return d(b || a.jQuery), c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
}(this, function() {
    function a() {}
    var b = a.prototype;
    return b.on = function(a, b) {
        if (a && b) {
            var c = this._events = this._events || {},
                d = c[a] = c[a] || [];
            return -1 == d.indexOf(b) && d.push(b), this
        }
    }, b.once = function(a, b) {
        if (a && b) {
            this.on(a, b);
            var c = this._onceEvents = this._onceEvents || {},
                d = c[a] = c[a] || {};
            return d[b] = !0, this
        }
    }, b.off = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = c.indexOf(b);
            return -1 != d && c.splice(d, 1), this
        }
    }, b.emitEvent = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = 0,
                e = c[d];
            b = b || [];
            for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                var g = f && f[e];
                g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
            }
            return this
        }
    }, a
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return b()
    }) : "object" == typeof module && module.exports ? module.exports = b() : a.getSize = b()
}(window, function() {
    "use strict";

    function a(a) {
        var b = parseFloat(a),
            c = -1 == a.indexOf("%") && !isNaN(b);
        return c && b
    }

    function b() {}

    function c() {
        for (var a = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, b = 0; j > b; b++) {
            var c = i[b];
            a[c] = 0
        }
        return a
    }

    function d(a) {
        var b = getComputedStyle(a);
        return b || h("Style returned " + b + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), b
    }

    function e() {
        if (!k) {
            k = !0;
            var b = document.createElement("div");
            b.style.width = "200px", b.style.padding = "1px 2px 3px 4px", b.style.borderStyle = "solid", b.style.borderWidth = "1px 2px 3px 4px", b.style.boxSizing = "border-box";
            var c = document.body || document.documentElement;
            c.appendChild(b);
            var e = d(b);
            f.isBoxSizeOuter = g = 200 == a(e.width), c.removeChild(b)
        }
    }

    function f(b) {
        if (e(), "string" == typeof b && (b = document.querySelector(b)), b && "object" == typeof b && b.nodeType) {
            var f = d(b);
            if ("none" == f.display) return c();
            var h = {};
            h.width = b.offsetWidth, h.height = b.offsetHeight;
            for (var k = h.isBorderBox = "border-box" == f.boxSizing, l = 0; j > l; l++) {
                var m = i[l],
                    n = f[m],
                    o = parseFloat(n);
                h[m] = isNaN(o) ? 0 : o
            }
            var p = h.paddingLeft + h.paddingRight,
                q = h.paddingTop + h.paddingBottom,
                r = h.marginLeft + h.marginRight,
                s = h.marginTop + h.marginBottom,
                t = h.borderLeftWidth + h.borderRightWidth,
                u = h.borderTopWidth + h.borderBottomWidth,
                v = k && g,
                w = a(f.width);
            w !== !1 && (h.width = w + (v ? 0 : p + t));
            var x = a(f.height);
            return x !== !1 && (h.height = x + (v ? 0 : q + u)), h.innerWidth = h.width - (p + t), h.innerHeight = h.height - (q + u), h.outerWidth = h.width + r, h.outerHeight = h.height + s, h
        }
    }
    var g, h = "undefined" == typeof console ? b : function(a) {
            console.error(a)
        },
        i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        j = i.length,
        k = !1;
    return f
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", b) : "object" == typeof module && module.exports ? module.exports = b() : a.matchesSelector = b()
}(window, function() {
    "use strict";
    var a = function() {
        var a = Element.prototype;
        if (a.matches) return "matches";
        if (a.matchesSelector) return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0; c < b.length; c++) {
            var d = b[c],
                e = d + "MatchesSelector";
            if (a[e]) return e
        }
    }();
    return function(b, c) {
        return b[a](c)
    }
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(c) {
        return b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.matchesSelector)
}(window, function(a, b) {
    var c = {};
    c.extend = function(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }, c.modulo = function(a, b) {
        return (a % b + b) % b
    }, c.makeArray = function(a) {
        var b = [];
        if (Array.isArray(a)) b = a;
        else if (a && "number" == typeof a.length)
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        else b.push(a);
        return b
    }, c.removeFrom = function(a, b) {
        var c = a.indexOf(b); - 1 != c && a.splice(c, 1)
    }, c.getParent = function(a, c) {
        for (; a != document.body;)
            if (a = a.parentNode, b(a, c)) return a
    }, c.getQueryElement = function(a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }, c.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, c.filterFindElements = function(a, d) {
        a = c.makeArray(a);
        var e = [];
        return a.forEach(function(a) {
            if (a instanceof HTMLElement) {
                if (!d) return void e.push(a);
                b(a, d) && e.push(a);
                for (var c = a.querySelectorAll(d), f = 0; f < c.length; f++) e.push(c[f])
            }
        }), e
    }, c.debounceMethod = function(a, b, c) {
        var d = a.prototype[b],
            e = b + "Timeout";
        a.prototype[b] = function() {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments,
                f = this;
            this[e] = setTimeout(function() {
                d.apply(f, b), delete f[e]
            }, c || 100)
        }
    }, c.docReady = function(a) {
        "complete" == document.readyState ? a() : document.addEventListener("DOMContentLoaded", a)
    }, c.toDashed = function(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    };
    var d = a.console;
    return c.htmlInit = function(b, e) {
        c.docReady(function() {
            var f = c.toDashed(e),
                g = "data-" + f,
                h = document.querySelectorAll("[" + g + "]"),
                i = document.querySelectorAll(".js-" + f),
                j = c.makeArray(h).concat(c.makeArray(i)),
                k = g + "-options",
                l = a.jQuery;
            j.forEach(function(a) {
                var c, f = a.getAttribute(g) || a.getAttribute(k);
                try {
                    c = f && JSON.parse(f)
                } catch (h) {
                    return void(d && d.error("Error parsing " + g + " on " + a.className + ": " + h))
                }
                var i = new b(a, c);
                l && l.data(a, e, i)
            })
        })
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("ev-emitter"), require("get-size")) : (a.Outlayer = {}, a.Outlayer.Item = b(a.EvEmitter, a.getSize))
}(window, function(a, b) {
    "use strict";

    function c(a) {
        for (var b in a) return !1;
        return b = null, !0
    }

    function d(a, b) {
        a && (this.element = a, this.layout = b, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function e(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }
    var f = document.documentElement.style,
        g = "string" == typeof f.transition ? "transition" : "WebkitTransition",
        h = "string" == typeof f.transform ? "transform" : "WebkitTransform",
        i = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[g],
        j = {
            transform: h,
            transition: g,
            transitionDuration: g + "Duration",
            transitionProperty: g + "Property",
            transitionDelay: g + "Delay"
        },
        k = d.prototype = Object.create(a.prototype);
    k.constructor = d, k._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, k.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, k.getSize = function() {
        this.size = b(this.element)
    }, k.css = function(a) {
        var b = this.element.style;
        for (var c in a) {
            var d = j[c] || c;
            b[d] = a[c]
        }
    }, k.getPosition = function() {
        var a = getComputedStyle(this.element),
            b = this.layout._getOption("originLeft"),
            c = this.layout._getOption("originTop"),
            d = a[b ? "left" : "right"],
            e = a[c ? "top" : "bottom"],
            f = this.layout.size,
            g = -1 != d.indexOf("%") ? parseFloat(d) / 100 * f.width : parseInt(d, 10),
            h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * f.height : parseInt(e, 10);
        g = isNaN(g) ? 0 : g, h = isNaN(h) ? 0 : h, g -= b ? f.paddingLeft : f.paddingRight, h -= c ? f.paddingTop : f.paddingBottom, this.position.x = g, this.position.y = h
    }, k.layoutPosition = function() {
        var a = this.layout.size,
            b = {},
            c = this.layout._getOption("originLeft"),
            d = this.layout._getOption("originTop"),
            e = c ? "paddingLeft" : "paddingRight",
            f = c ? "left" : "right",
            g = c ? "right" : "left",
            h = this.position.x + a[e];
        b[f] = this.getXValue(h), b[g] = "";
        var i = d ? "paddingTop" : "paddingBottom",
            j = d ? "top" : "bottom",
            k = d ? "bottom" : "top",
            l = this.position.y + a[i];
        b[j] = this.getYValue(l), b[k] = "", this.css(b), this.emitEvent("layout", [this])
    }, k.getXValue = function(a) {
        var b = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !b ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, k.getYValue = function(a) {
        var b = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && b ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, k._transitionTo = function(a, b) {
        this.getPosition();
        var c = this.position.x,
            d = this.position.y,
            e = parseInt(a, 10),
            f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
        var h = a - c,
            i = b - d,
            j = {};
        j.transform = this.getTranslate(h, i), this.transition({
            to: j,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, k.getTranslate = function(a, b) {
        var c = this.layout._getOption("originLeft"),
            d = this.layout._getOption("originTop");
        return a = c ? a : -a, b = d ? b : -b, "translate3d(" + a + "px, " + b + "px, 0)"
    }, k.goTo = function(a, b) {
        this.setPosition(a, b), this.layoutPosition()
    }, k.moveTo = k._transitionTo, k.setPosition = function(a, b) {
        this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, k._nonTransition = function(a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
    }, k.transition = function(a) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var l = "opacity," + e(h);
    k.enableTransition = function() {
        if (!this.isTransitioning) {
            var a = this.layout.options.transitionDuration;
            a = "number" == typeof a ? a + "ms" : a, this.css({
                transitionProperty: l,
                transitionDuration: a,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(i, this, !1)
        }
    }, k.onwebkitTransitionEnd = function(a) {
        this.ontransitionend(a)
    }, k.onotransitionend = function(a) {
        this.ontransitionend(a)
    };
    var m = {
        "-webkit-transform": "transform"
    };
    k.ontransitionend = function(a) {
        if (a.target === this.element) {
            var b = this._transn,
                d = m[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                var e = b.onEnd[d];
                e.call(this), delete b.onEnd[d]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, k.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(i, this, !1), this.isTransitioning = !1
    }, k._removeStyles = function(a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b)
    };
    var n = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return k.removeTransitionStyles = function() {
        this.css(n)
    }, k.stagger = function(a) {
        a = isNaN(a) ? 0 : a, this.staggerDelay = a + "ms"
    }, k.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, k.remove = function() {
        return g && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, k.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var a = this.layout.options,
            b = {},
            c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd, this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, k.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, k.getHideRevealTransitionEndProperty = function(a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c
    }, k.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var a = this.layout.options,
            b = {},
            c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd, this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, k.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, k.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function(a, b, c, d, e) {
    "use strict";

    function f(a, b) {
        var c = d.getQueryElement(a);
        if (!c) return void(i && i.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c, j && (this.$element = j(this.element)), this.options = d.extend({}, this.constructor.defaults), this.option(b);
        var e = ++l;
        this.element.outlayerGUID = e, m[e] = this, this._create();
        var f = this._getOption("initLayout");
        f && this.layout()
    }

    function g(a) {
        function b() {
            a.apply(this, arguments)
        }
        return b.prototype = Object.create(a.prototype), b.prototype.constructor = b, b
    }

    function h(a) {
        if ("number" == typeof a) return a;
        var b = a.match(/(^\d*\.?\d*)(\w*)/),
            c = b && b[1],
            d = b && b[2];
        if (!c.length) return 0;
        c = parseFloat(c);
        var e = o[d] || 1;
        return c * e
    }
    var i = a.console,
        j = a.jQuery,
        k = function() {},
        l = 0,
        m = {};
    f.namespace = "outlayer", f.Item = e, f.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var n = f.prototype;
    d.extend(n, b.prototype), n.option = function(a) {
        d.extend(this.options, a)
    }, n._getOption = function(a) {
        var b = this.constructor.compatOptions[a];
        return b && void 0 !== this.options[b] ? this.options[b] : this.options[a]
    }, f.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, n._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), d.extend(this.element.style, this.options.containerStyle);
        var a = this._getOption("resize");
        a && this.bindResize()
    }, n.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, n._itemize = function(a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0; e < b.length; e++) {
            var f = b[e],
                g = new c(f, this);
            d.push(g)
        }
        return d
    }, n._filterFindItemElements = function(a) {
        return d.filterFindElements(a, this.options.itemSelector)
    }, n.getItemElements = function() {
        return this.items.map(function(a) {
            return a.element
        })
    }, n.layout = function() {
        this._resetLayout(), this._manageStamps();
        var a = this._getOption("layoutInstant"),
            b = void 0 !== a ? a : !this._isLayoutInited;
        this.layoutItems(this.items, b), this._isLayoutInited = !0
    }, n._init = n.layout, n._resetLayout = function() {
        this.getSize()
    }, n.getSize = function() {
        this.size = c(this.element)
    }, n._getMeasurement = function(a, b) {
        var d, e = this.options[a];
        e ? ("string" == typeof e ? d = this.element.querySelector(e) : e instanceof HTMLElement && (d = e), this[a] = d ? c(d)[b] : e) : this[a] = 0
    }, n.layoutItems = function(a, b) {
        a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, n._getItemsForLayout = function(a) {
        return a.filter(function(a) {
            return !a.isIgnored
        })
    }, n._layoutItems = function(a, b) {
        if (this._emitCompleteOnItems("layout", a), a && a.length) {
            var c = [];
            a.forEach(function(a) {
                var d = this._getItemLayoutPosition(a);
                d.item = a, d.isInstant = b || a.isLayoutInstant, c.push(d)
            }, this), this._processLayoutQueue(c)
        }
    }, n._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, n._processLayoutQueue = function(a) {
        this.updateStagger(), a.forEach(function(a, b) {
            this._positionItem(a.item, a.x, a.y, a.isInstant, b)
        }, this)
    }, n.updateStagger = function() {
        var a = this.options.stagger;
        return null === a || void 0 === a ? void(this.stagger = 0) : (this.stagger = h(a), this.stagger)
    }, n._positionItem = function(a, b, c, d, e) {
        d ? a.goTo(b, c) : (a.stagger(e * this.stagger), a.moveTo(b, c))
    }, n._postLayout = function() {
        this.resizeContainer()
    }, n.resizeContainer = function() {
        var a = this._getOption("resizeContainer");
        if (a) {
            var b = this._getContainerSize();
            b && (this._setContainerMeasure(b.width, !0), this._setContainerMeasure(b.height, !1))
        }
    }, n._getContainerSize = k, n._setContainerMeasure = function(a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
        }
    }, n._emitCompleteOnItems = function(a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }

        function d() {
            g++, g == f && c()
        }
        var e = this,
            f = b.length;
        if (!b || !f) return void c();
        var g = 0;
        b.forEach(function(b) {
            b.once(a, d)
        })
    }, n.dispatchEvent = function(a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d), j)
            if (this.$element = this.$element || j(this.element), b) {
                var e = j.Event(b);
                e.type = a, this.$element.trigger(e, c)
            } else this.$element.trigger(a, c)
    }, n.ignore = function(a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }, n.unignore = function(a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }, n.stamp = function(a) {
        a = this._find(a), a && (this.stamps = this.stamps.concat(a), a.forEach(this.ignore, this))
    }, n.unstamp = function(a) {
        a = this._find(a), a && a.forEach(function(a) {
            d.removeFrom(this.stamps, a), this.unignore(a)
        }, this)
    }, n._find = function(a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d.makeArray(a)) : void 0
    }, n._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, n._getBoundingRect = function() {
        var a = this.element.getBoundingClientRect(),
            b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }, n._manageStamp = k, n._getElementOffset = function(a) {
        var b = a.getBoundingClientRect(),
            d = this._boundingRect,
            e = c(a),
            f = {
                left: b.left - d.left - e.marginLeft,
                top: b.top - d.top - e.marginTop,
                right: d.right - b.right - e.marginRight,
                bottom: d.bottom - b.bottom - e.marginBottom
            };
        return f
    }, n.handleEvent = d.handleEvent, n.bindResize = function() {
        a.addEventListener("resize", this), this.isResizeBound = !0
    }, n.unbindResize = function() {
        a.removeEventListener("resize", this), this.isResizeBound = !1
    }, n.onresize = function() {
        this.resize()
    }, d.debounceMethod(f, "onresize", 100), n.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, n.needsResizeLayout = function() {
        var a = c(this.element),
            b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }, n.addItems = function(a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b
    }, n.appended = function(a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, n.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
        }
    }, n.reveal = function(a) {
        if (this._emitCompleteOnItems("reveal", a), a && a.length) {
            var b = this.updateStagger();
            a.forEach(function(a, c) {
                a.stagger(c * b), a.reveal()
            })
        }
    }, n.hide = function(a) {
        if (this._emitCompleteOnItems("hide", a), a && a.length) {
            var b = this.updateStagger();
            a.forEach(function(a, c) {
                a.stagger(c * b), a.hide()
            })
        }
    }, n.revealItemElements = function(a) {
        var b = this.getItems(a);
        this.reveal(b)
    }, n.hideItemElements = function(a) {
        var b = this.getItems(a);
        this.hide(b)
    }, n.getItem = function(a) {
        for (var b = 0; b < this.items.length; b++) {
            var c = this.items[b];
            if (c.element == a) return c
        }
    }, n.getItems = function(a) {
        a = d.makeArray(a);
        var b = [];
        return a.forEach(function(a) {
            var c = this.getItem(a);
            c && b.push(c)
        }, this), b
    }, n.remove = function(a) {
        var b = this.getItems(a);
        this._emitCompleteOnItems("remove", b), b && b.length && b.forEach(function(a) {
            a.remove(), d.removeFrom(this.items, a)
        }, this)
    }, n.destroy = function() {
        var a = this.element.style;
        a.height = "", a.position = "", a.width = "", this.items.forEach(function(a) {
            a.destroy()
        }), this.unbindResize();
        var b = this.element.outlayerGUID;
        delete m[b], delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
    }, f.data = function(a) {
        a = d.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && m[b]
    }, f.create = function(a, b) {
        var c = g(f);
        return c.defaults = d.extend({}, f.defaults), d.extend(c.defaults, b), c.compatOptions = d.extend({}, f.compatOptions), c.namespace = a, c.data = f.data, c.Item = g(e), d.htmlInit(c, a), j && j.bridget && j.bridget(a, c), c
    };
    var o = {
        ms: 1,
        s: 1e3
    };
    return f.Item = e, f
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/item", ["outlayer/outlayer"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window, function(a) {
    "use strict";

    function b() {
        a.Item.apply(this, arguments)
    }
    var c = b.prototype = Object.create(a.Item.prototype),
        d = c._create;
    c._create = function() {
        this.id = this.layout.itemGUID++, d.call(this), this.sortData = {}
    }, c.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var a = this.layout.options.getSortData,
                b = this.layout._sorters;
            for (var c in a) {
                var d = b[c];
                this.sortData[c] = d(this.element, this)
            }
        }
    };
    var e = c.destroy;
    return c.destroy = function() {
        e.apply(this, arguments), this.css({
            display: ""
        })
    }, b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function(a, b) {
    "use strict";

    function c(a) {
        this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
    }
    var d = c.prototype,
        e = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return e.forEach(function(a) {
        d[a] = function() {
            return b.prototype[a].apply(this.isotope, arguments)
        }
    }), d.needsVerticalResizeLayout = function() {
        var b = a(this.isotope.element),
            c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight
    }, d._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, d.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, d.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, d.getSegmentSize = function(a, b) {
        var c = a + b,
            d = "outer" + b;
        if (this._getMeasurement(c, d), !this[c]) {
            var e = this.getFirstItemSize();
            this[c] = e && e[d] || this.isotope.size["inner" + b]
        }
    }, d.getFirstItemSize = function() {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element)
    }, d.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, d.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, c.modes = {}, c.create = function(a, b) {
        function e() {
            c.apply(this, arguments)
        }
        return e.prototype = Object.create(d), e.prototype.constructor = e, b && (e.options = b), e.prototype.namespace = a, c.modes[a] = e, e
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("get-size")) : a.Masonry = b(a.Outlayer, a.getSize)
}(window, function(a, b) {
    var c = a.create("masonry");
    return c.compatOptions.fitWidth = "isFitWidth", c.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var a = 0; a < this.cols; a++) this.colYs.push(0);
        this.maxY = 0
    }, c.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var a = this.items[0],
                c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter,
            e = this.containerWidth + this.gutter,
            f = e / d,
            g = d - e % d,
            h = g && 1 > g ? "round" : "floor";
        f = Math[h](f), this.cols = Math.max(f, 1)
    }, c.prototype.getContainerWidth = function() {
        var a = this._getOption("fitWidth"),
            c = a ? this.element.parentNode : this.element,
            d = b(c);
        this.containerWidth = d && d.innerWidth
    }, c.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth,
            c = b && 1 > b ? "round" : "ceil",
            d = Math[c](a.size.outerWidth / this.columnWidth);
        d = Math.min(d, this.cols);
        for (var e = this._getColGroup(d), f = Math.min.apply(Math, e), g = e.indexOf(f), h = {
                x: this.columnWidth * g,
                y: f
            }, i = f + a.size.outerHeight, j = this.cols + 1 - e.length, k = 0; j > k; k++) this.colYs[g + k] = i;
        return h
    }, c.prototype._getColGroup = function(a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }, c.prototype._manageStamp = function(a) {
        var c = b(a),
            d = this._getElementOffset(a),
            e = this._getOption("originLeft"),
            f = e ? d.left : d.right,
            g = f + c.outerWidth,
            h = Math.floor(f / this.columnWidth);
        h = Math.max(0, h);
        var i = Math.floor(g / this.columnWidth);
        i -= g % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i);
        for (var j = this._getOption("originTop"), k = (j ? d.top : d.bottom) + c.outerHeight, l = h; i >= l; l++) this.colYs[l] = Math.max(k, this.colYs[l])
    }, c.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (a.width = this._getContainerFitWidth()), a
    }, c.prototype._getContainerFitWidth = function() {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }, c.prototype.needsResizeLayout = function() {
        var a = this.containerWidth;
        return this.getContainerWidth(), a != this.containerWidth
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof module && module.exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function(a, b) {
    "use strict";
    var c = a.create("masonry"),
        d = c.prototype,
        e = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d.measureColumns;
    d.measureColumns = function() {
        this.items = this.isotope.filteredItems, g.call(this)
    };
    var h = d._getOption;
    return d._getOption = function(a) {
        return "fitWidth" == a ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : h.apply(this.isotope, arguments)
    }, c
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("fitRows"),
        c = b.prototype;
    return c._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, c._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter,
            c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
        var d = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
    }, c._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof module && module.exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("vertical", {
            horizontalAlignment: 0
        }),
        c = b.prototype;
    return c._resetLayout = function() {
        this.y = 0
    }, c._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
            c = this.y;
        return this.y += a.size.outerHeight, {
            x: b,
            y: c
        }
    }, c._getContainerSize = function() {
        return {
            height: this.y
        }
    }, b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], function(c, d, e, f, g, h) {
        return b(a, c, d, e, f, g, h)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function(a, b, c, d, e, f, g) {
    function h(a, b) {
        return function(c, d) {
            for (var e = 0; e < a.length; e++) {
                var f = a[e],
                    g = c.sortData[f],
                    h = d.sortData[f];
                if (g > h || h > g) {
                    var i = void 0 !== b[f] ? b[f] : b,
                        j = i ? 1 : -1;
                    return (g > h ? 1 : -1) * j
                }
            }
            return 0
        }
    }
    var i = a.jQuery,
        j = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^\s+|\s+$/g, "")
        },
        k = b.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    k.Item = f, k.LayoutMode = g;
    var l = k.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var a in g.modes) this._initLayoutMode(a)
    }, l.reloadItems = function() {
        this.itemGUID = 0, b.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0; c < a.length; c++) {
            var d = a[c];
            d.id = this.itemGUID++
        }
        return this._updateItemsSortData(a), a
    }, l._initLayoutMode = function(a) {
        var b = g.modes[a],
            c = this.options[a] || {};
        this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var a = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
    }, l.arrange = function(a) {
        this.option(a), this._getIsInstant();
        var b = this._filter(this.items);
        this.filteredItems = b.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [b]) : this._hideReveal(b), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(a) {
        this.reveal(a.needReveal), this.hide(a.needHide)
    }, l._getIsInstant = function() {
        var a = this._getOption("layoutInstant"),
            b = void 0 !== a ? a : !this._isLayoutInited;
        return this._isInstant = b, b
    }, l._bindArrangeComplete = function() {
        function a() {
            b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }
        var b, c, d, e = this;
        this.once("layoutComplete", function() {
            b = !0, a()
        }), this.once("hideComplete", function() {
            c = !0, a()
        }), this.once("revealComplete", function() {
            d = !0, a()
        })
    }, l._filter = function(a) {
        var b = this.options.filter;
        b = b || "*";
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0; g < a.length; g++) {
            var h = a[g];
            if (!h.isIgnored) {
                var i = f(h);
                i && c.push(h), i && h.isHidden ? d.push(h) : i || h.isHidden || e.push(h)
            }
        }
        return {
            matches: c,
            needReveal: d,
            needHide: e
        }
    }, l._getFilterTest = function(a) {
        return i && this.options.isJQueryFiltering ? function(b) {
            return i(b.element).is(a)
        } : "function" == typeof a ? function(b) {
            return a(b.element)
        } : function(b) {
            return d(b.element, a)
        }
    }, l.updateSortData = function(a) {
        var b;
        a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
    }, l._getSorters = function() {
        var a = this.options.getSortData;
        for (var b in a) {
            var c = a[b];
            this._sorters[b] = m(c)
        }
    }, l._updateItemsSortData = function(a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.updateSortData()
        }
    };
    var m = function() {
        function a(a) {
            if ("string" != typeof a) return a;
            var c = j(a).split(" "),
                d = c[0],
                e = d.match(/^\[(.+)\]$/),
                f = e && e[1],
                g = b(f, d),
                h = k.sortDataParsers[c[1]];
            return a = h ? function(a) {
                return a && h(g(a))
            } : function(a) {
                return a && g(a)
            }
        }

        function b(a, b) {
            return a ? function(b) {
                return b.getAttribute(a)
            } : function(a) {
                var c = a.querySelector(b);
                return c && c.textContent
            }
        }
        return a
    }();
    k.sortDataParsers = {
        parseInt: function(a) {
            return parseInt(a, 10)
        },
        parseFloat: function(a) {
            return parseFloat(a)
        }
    }, l._sort = function() {
        var a = this.options.sortBy;
        if (a) {
            var b = [].concat.apply(a, this.sortHistory),
                c = h(b, this.options.sortAscending);
            this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
    }, l._mode = function() {
        var a = this.options.layoutMode,
            b = this.modes[a];
        if (!b) throw new Error("No layout mode: " + a);
        return b.options = this.options[a], b
    }, l._resetLayout = function() {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(a) {
        return this._mode()._getItemLayoutPosition(a)
    }, l._manageStamp = function(a) {
        this._mode()._manageStamp(a)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c = this._filterRevealAdded(b);
            this.filteredItems = this.filteredItems.concat(c)
        }
    }, l.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            this._resetLayout(), this._manageStamps();
            var c = this._filterRevealAdded(b);
            this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
        }
    }, l._filterRevealAdded = function(a) {
        var b = this._filter(a);
        return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
    }, l.insert = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c, d, e = b.length;
            for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
            var f = this._filter(b).matches;
            for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
            for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
            this.reveal(f)
        }
    };
    var n = l.remove;
    return l.remove = function(a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        n.call(this, a);
        for (var c = b && b.length, d = 0; c && c > d; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f)
        }
    }, l.shuffle = function() {
        for (var a = 0; a < this.items.length; a++) {
            var b = this.items[a];
            b.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(a, b) {
        var c = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var d = a.apply(this, b);
        return this.options.transitionDuration = c, d
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(a) {
            return a.element
        })
    }, k
}),
function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera), ! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";

    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function(b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; g > f; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s",
            d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
    }
    var f = [],
        g = [],
        h = {
            precision: 100,
            elapse: !1
        };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            w: "weeks",
            d: "daysToWeek",
            D: "totalDays",
            H: "hours",
            M: "minutes",
            S: "seconds"
        },
        j = function(b, c, d) {
            this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.start()
        };
    a.extend(j.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function() {
                a.update.call(a)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            this.finalDate = b(a)
        },
        update: function() {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var b, c = void 0 !== a._data(this.el, "events"),
                d = new Date;
            b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && 0 > b ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - d.getFullYear())
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        },
        dispatchEvent: function(b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }), ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(a) {
        var b, c, d, e, f, g, h = "Close",
            i = "BeforeClose",
            j = "AfterClose",
            k = "BeforeAppend",
            l = "MarkupParse",
            m = "Open",
            n = "Change",
            o = "mfp",
            p = "." + o,
            q = "mfp-ready",
            r = "mfp-removing",
            s = "mfp-prevent-close",
            t = function() {},
            u = !!window.jQuery,
            v = a(window),
            w = function(a, c) {
                b.ev.on(o + a + p, c)
            },
            x = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            },
            y = function(c, d) {
                b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
            },
            z = function(c) {
                return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
            },
            A = function() {
                a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
            },
            B = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        t.prototype = {
            constructor: t,
            init: function() {
                var c = navigator.appVersion;
                b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
            },
            open: function(c) {
                var e;
                if (c.isObj === !1) {
                    b.items = c.items.toArray(), b.index = 0;
                    var g, h = c.items;
                    for (e = 0; e < h.length; e++)
                        if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                            b.index = e;
                            break
                        }
                } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                    b.close()
                }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                    b._checkIfClose(a.target) && b.close()
                }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
                var i = a.magnificPopup.modules;
                for (e = 0; e < i.length; e++) {
                    var j = i[e];
                    j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
                }
                y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                    c.close_replaceWith = z(d.type)
                }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                }) : b.wrap.css({
                    top: v.scrollTop(),
                    position: "absolute"
                }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                    27 === a.keyCode && b.close()
                }), v.on("resize" + p, function() {
                    b.updateSize()
                }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
                var k = b.wH = v.height(),
                    n = {};
                if (b.fixedContentPos && b._hasScrollBar(k)) {
                    var o = b._getScrollbarSize();
                    o && (n.marginRight = o)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
                var r = b.st.mainClass;
                return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
            },
            close: function() {
                b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                    b._close()
                }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                y(h);
                var c = r + " " + q + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var e = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
                }
                d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d
                } else b.wH = a || v.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var f = b.st[d] ? b.st[d].markup : !1;
                    y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
                }
                e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = {
                        el: a(e)
                    } : (d = e.type, e = {
                        data: e,
                        src: e.src
                    }), e.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) {
                            d = f[g];
                            break
                        }
                    e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
                }
                return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this, b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0
                        } else if (v.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation()
                    }), b.container.addClass("mfp-s-" + a), c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(s)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0
                    } else if (e && a.contains(document, c)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a), b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (e = c.split("_"), e.length > 1) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                        }
                    } else b.find(p + "-" + c).html(d)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(b, c) {
                return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, a.fn.magnificPopup = function(c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                        mfpEl: e
                    }, d, f)
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d
        };
        var C, D, E, F = "inline",
            G = function() {
                E && (D.after(E.addClass(C)).detach(), E = null)
            };
        a.magnificPopup.registerModule(F, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    b.types.push(F), w(h + "." + F, function() {
                        G()
                    })
                },
                getInline: function(c, d) {
                    if (G(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                        } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f
                    }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
                }
            }
        });
        var H, I = "ajax",
            J = function() {
                H && a(document.body).removeClass(H)
            },
            K = function() {
                J(), b.req && b.req.abort()
            };
        a.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
                },
                getAjax: function(c) {
                    H && a(document.body).addClass(H), b.updateStatus("loading");
                    var d = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                                b.wrap.addClass(q)
                            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                        },
                        error: function() {
                            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                        }
                    }, b.st.ajax.settings);
                    return b.req = a.ajax(d), ""
                }
            }
        });
        var L, M = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var c = b.st.image,
                        d = ".image";
                    b.types.push("image"), w(m + d, function() {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                    }), w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                    }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
                },
                resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                    }
                },
                _onImageHasSize: function(a) {
                    a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
                },
                findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) {
                            L && clearInterval(L), L = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                        };
                    e(1)
                },
                getImage: function(c, d) {
                    var e = 0,
                        f = function() {
                            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                        },
                        g = function() {
                            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                        },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                    }
                    return b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
                }
            }
        });
        var N, O = function() {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(a) {
                    return a.is("img") ? a : a.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            j = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                            },
                            k = function() {
                                b.content.css("visibility", "visible")
                            };
                        w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                    f.css(b._getOffset(!0)), e = setTimeout(function() {
                                        k(), setTimeout(function() {
                                            f.remove(), a = f = null, y("ZoomAnimationEnded")
                                        }, 16)
                                    }, g)
                                }, 16)
                            }
                        }), w(i + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                    if (a = b._getItemToZoom(), !a) return;
                                    f = j(a)
                                }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                    f.css(b._getOffset())
                                }, 16)
                            }
                        }), w(h + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), a = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === b.currItem.type
                },
                _getItemToZoom: function() {
                    return b.currItem.hasSize ? b.currItem.img : !1
                },
                _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = {
                        width: d.width(),
                        height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                    };
                    return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
                }
            }
        });
        var P = "iframe",
            Q = "//about:blank",
            R = function(a) {
                if (b.currTemplate[P]) {
                    var c = b.currTemplate[P].find("iframe");
                    c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
                }
            };
        a.magnificPopup.registerModule(P, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    b.types.push(P), w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0))
                    }), w(h + "." + P, function() {
                        R()
                    })
                },
                getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                    });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
                }
            }
        });
        var S = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a
            },
            T = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
            };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var c = b.st.gallery,
                        e = ".mfp-gallery";
                    return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                        c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0
                        }), d.on("keydown" + e, function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), w("UpdateStatus" + e, function(a, c) {
                        c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                    }), w(l + e, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                    }), w("BuildControls" + e, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                            e.click(function() {
                                b.prev()
                            }), f.click(function() {
                                b.next()
                            }), b.container.append(e.add(f))
                        }
                    }), w(n + e, function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages(), b._preloadTimeout = null
                        }, 16)
                    }), void w(h + e, function() {
                        d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
                },
                prev: function() {
                    b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
                },
                goTo: function(a) {
                    b.direction = a >= b.index, b.index = a, b.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                    for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
                },
                _preloadItem: function(c) {
                    if (c = S(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                        }).attr("src", d.src)), d.preloaded = !0
                    }
                }
            }
        });
        var U = "retina";
        a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), w("ElementParse." + U, function(b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }), A()
    }),
    function(a) {
        var b, c, d = a.event;
        b = d.special.debouncedresize = {
            setup: function() {
                a(this).on("resize", b.handler)
            },
            teardown: function() {
                a(this).off("resize", b.handler)
            },
            handler: function(a, e) {
                var f = this,
                    g = arguments,
                    h = function() {
                        a.type = "debouncedresize", d.dispatch.apply(f, g)
                    };
                c && clearTimeout(c), e ? h() : c = setTimeout(h, b.threshold)
            },
            threshold: 150
        }
    }(jQuery), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function(a, b, c, d) {
        var e, f = {
            init: function(b, c) {
                var d = this;
                if (d.elem = c, d.$elem = a(c), "string" == typeof b) {
                    if (d.$video = d.$elem.data("videoEl"), d.$video.length < 1) return !1;
                    "update" == b && d.update(), e = a.fn.owlVideoBg.options
                } else d.options = a.extend(!0, {}, a.fn.owlVideoBg.options, b), e = d.options, d.$elem.addClass(e.elemClass), generatedMarkup = d.generateMarkup(), generatedMarkup ? d.inject(generatedMarkup.videoHTML) : d.setPoster()
            },
            generateMarkup: function() {
                var b, c, f, g, h, i = this;
                e.autoplay = i.$elem.hasClass("autoplay") || e.autoplay, e.muted = i.$elem.hasClass("muted") || e.muted, e.loop = i.$elem.hasClass("loop") || e.loop, e.playonHover = i.$elem.hasClass("hoverPlay") || e.playonHover;
                var j = "";
                if (e.autoplay & !e.playonHover && (j += " autoplay"), e.muted && (j += " muted"), e.loop && (j += " loop"), e.preload && !e.autoplay && (j += ' preload="' + e.preload + '"'), h = "", e.autoGenerate.basedOnSrc) {
                    var k = "" != e.autoGenerate.inlineBaseSrc;
                    if (b = k ? e.autoGenerate.inlineBaseSrc : i.$elem.attr(e.autoGenerate.srcProperty), b == d) return !1;
                    c = b.substr(0, b.lastIndexOf(".mp4")) || b, g = h + '<source src="' + b + '" type="video/mp4">', e.autoGenerate.formats.forEach(function(a) {
                        g += '<source src="' + c + "." + a.fileFormat + '" type="' + a.mime + '">'
                    }), g += "</video>", f = c + "." + e.autoGenerate.posterImageFormat, f = i.$elem.attr(e.autoGenerate.posterProperty) || f
                } else {
                    if (a.isEmptyObject(e.srcSetup)) return !1;
                    g = h, e.srcSetup.forEach(function(a) {
                        g += '<source src="' + a.path + '" type="' + a.mime + '">'
                    }), g += "</video>", f = e.posterPath
                }
                return j += ' poster="' + f + '"', h = "<video " + j + ">", g = h + g, e.posterPath = f, {
                    videoHTML: g,
                    posterPath: f
                }
            },
            inject: function(b) {
                var c = this;
                c.$video = a(b), c.$videoWrapper = a('<div class="' + e.wrapperClass + '"></div>').wrapInner(c.$video), c.isTouchSupported() ? c.setPoster() : (c.fillIt(), c.$elem.append(c.$videoWrapper), c.$elem.data("videoEl", c.$video), c.bindUIActions())
            },
            fillIt: function() {
                var a = this;
                a.$video.removeAttr("style"), a.$elem.removeAttr("style");
                var b = a.$elem.outerWidth(),
                    c = a.$elem.outerHeight(),
                    d = b / c;
                videoRatio = e.videoRatio, console.log(c), 0 == c && (c = b / e.videoRatio, d = e.videoRatio, a.$elem.css("height", c)), d < videoRatio ? a.$video.css({
                    width: "auto",
                    height: c,
                    marginTop: 0,
                    marginLeft: -(c * videoRatio - b) / 2
                }) : a.$video.css({
                    width: b,
                    height: "auto",
                    marginTop: -(b / videoRatio - c) / 2,
                    marginLeft: 0
                })
            },
            isTouchSupported: function() {
                var a = b.navigator.msMaxTouchPoints,
                    d = "ontouchstart" in c.createElement("div");
                return !(!a && !d)
            },
            setPoster: function() {
                var a = this;
                return "" == e.posterPath ? !1 : void a.$elem.css({
                    "background-image": "url(" + e.posterPath + ")",
                    "background-size": "cover",
                    "background-position": "50% 0"
                })
            },
            update: function() {
                this.fillIt()
            },
            bindUIActions: function() {
                var c = this;
                a(b).on("debouncedresize", function() {
                    c.update()
                }), e.playonHover && (c.$elem.on("mouseenter", function() {
                    c.$video.get(0).play()
                }), c.$elem.parent().on("mouseenter", function() {
                    c.$video.get(0).play()
                }), c.$elem.on("mouseleave", function() {
                    c.$video.get(0).pause()
                }), c.$elem.parent().on("mouseleave", function() {
                    c.$video.get(0).pause()
                }))
            }
        };
        a.fn.owlVideoBg = function(a) {
            return this.each(function() {
                var b = Object.create(f);
                b.init(a, this)
            })
        }, a.fn.owlVideoBg.options = {
            elemClass: "owl-videobg",
            wrapperClass: "owl-video-wrapper",
            autoGenerate: {
                basedOnSrc: !0,
                formats: [{
                    fileFormat: "webm",
                    mime: "video/webm"
                }, {
                    fileFormat: "ogv",
                    mime: "video/ogg"
                }],
                posterImageFormat: "jpg",
                srcProperty: "data-video-src",
                posterProperty: "data-poster",
                inlineBaseSrc: ""
            },
            srcSetup: [],
            posterPath: "",
            autoplay: !1,
            muted: !0,
            loop: !0,
            preload: "none",
            playonHover: !1,
            videoRatio: 1.778
        }
    }(jQuery, window, document),
    function() {
        var a, b;
        a = this.jQuery || window.jQuery, b = a(window), a.fn.stick_in_parent = function(c) {
            var d, e, f, g, h, i, j, k, l, m, n;
            for (null == c && (c = {}), n = c.sticky_class, h = c.inner_scrolling, m = c.recalc_every, l = c.parent, k = c.offset_top, j = c.spacer, e = c.bottoming, null == k && (k = 0), null == l && (l = void 0), null == h && (h = !0), null == n && (n = "is_stuck"), d = a(document), null == e && (e = !0), f = function(c, f, g, i, o, p, q, r) {
                    var s, t, u, v, w, x, y, z, A, B, C, D;
                    if (!c.data("sticky_kit")) {
                        if (c.data("sticky_kit", !0), w = d.height(), y = c.parent(), null != l && (y = y.closest(l)), !y.length) throw "failed to find stick parent";
                        if (s = u = !1, (C = null != j ? j && c.closest(j) : a("<div />")) && C.css("position", c.css("position")), z = function() {
                                var a, b, e;
                                return !r && (w = d.height(), a = parseInt(y.css("border-top-width"), 10), b = parseInt(y.css("padding-top"), 10), f = parseInt(y.css("padding-bottom"), 10), g = y.offset().top + a + b, i = y.height(), u && (s = u = !1, null == j && (c.insertAfter(C), C.detach()), c.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(n), e = !0), o = c.offset().top - (parseInt(c.css("margin-top"), 10) || 0) - k, p = c.outerHeight(!0), q = c.css("float"), C && C.css({
                                    width: c.outerWidth(!0),
                                    height: p,
                                    display: c.css("display"),
                                    "vertical-align": c.css("vertical-align"),
                                    "float": q
                                }), e) ? D() : void 0
                            }, z(), p !== i) return v = void 0, x = k, B = m, D = function() {
                            var a, l, t, A;
                            return !r && (t = !1, null != B && (--B, 0 >= B && (B = m, z(), t = !0)),
                                t || d.height() === w || z(), t = b.scrollTop(), null != v && (l = t - v), v = t, u ? (e && (A = t + p + x > i + g, s && !A && (s = !1, c.css({
                                    position: "fixed",
                                    bottom: "",
                                    top: x
                                }).trigger("sticky_kit:unbottom"))), o > t && (u = !1, x = k, null == j && ("left" !== q && "right" !== q || c.insertAfter(C), C.detach()), a = {
                                    position: "",
                                    width: "",
                                    top: ""
                                }, c.css(a).removeClass(n).trigger("sticky_kit:unstick")), h && (a = b.height(), p + k > a && !s && (x -= l, x = Math.max(a - p, x), x = Math.min(k, x), u && c.css({
                                    top: x + "px"
                                })))) : t > o && (u = !0, a = {
                                    position: "fixed",
                                    top: x
                                }, a.width = "border-box" === c.css("box-sizing") ? c.outerWidth() + "px" : c.width() + "px", c.css(a).addClass(n), null == j && (c.after(C), "left" !== q && "right" !== q || C.append(c)), c.trigger("sticky_kit:stick")), u && e && (null == A && (A = t + p + x > i + g), !s && A)) ? (s = !0, "static" === y.css("position") && y.css({
                                position: "relative"
                            }), c.css({
                                position: "absolute",
                                bottom: f,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")) : void 0
                        }, A = function() {
                            return z(), D()
                        }, t = function() {
                            return r = !0, b.off("touchmove", D), b.off("scroll", D), b.off("resize", A), a(document.body).off("sticky_kit:recalc", A), c.off("sticky_kit:detach", t), c.removeData("sticky_kit"), c.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), y.position("position", ""), u ? (null == j && ("left" !== q && "right" !== q || c.insertAfter(C), C.remove()), c.removeClass(n)) : void 0
                        }, b.on("touchmove", D), b.on("scroll", D), b.on("resize", A), a(document.body).on("sticky_kit:recalc", A), c.on("sticky_kit:detach", t), setTimeout(D, 0)
                    }
                }, g = 0, i = this.length; i > g; g++) c = this[g], f(a(c));
            return this
        }
    }.call(this), ! function(a, b, c, d) {
        function e(b, c) {
            this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)), a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, e.Type = {
            Event: "event",
            State: "state"
        }, e.Plugins = {}, e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || "",
                    c = !this.settings.autoWidth,
                    d = this.settings.rtl,
                    e = {
                        width: "auto",
                        "margin-left": d ? b : "",
                        "margin-right": d ? "" : b
                    };
                !c && this.$stage.children().css(e), a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c = null,
                    d = this._items.length,
                    e = !this.settings.autoWidth,
                    f = [];
                for (a.items = {
                        merge: !1,
                        width: b
                    }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var b = [],
                    c = this._items,
                    d = this.settings,
                    e = Math.max(2 * d.items, 4),
                    f = 2 * Math.ceil(c.length / 2),
                    g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                    h = "",
                    i = "";
                for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding,
                    b = this._coordinates,
                    c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        "padding-left": a || "",
                        "padding-right": a || ""
                    };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length,
                    c = !this.settings.autoWidth,
                    d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
                else c && (a.css.width = a.items.width, d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h = g + this.width() * e,
                    i = [];
                for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], e.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var b, c, e;
                b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, e.prototype.setup = function() {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c ? (a.each(c, function(a) {
                b >= a && a > d && (d = Number(a))
            }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
                content: c.data
            }), c.data
        }, e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                    return this[a]
                }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, e.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, e.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
        }, e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        }, e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
                x: d[16 === d.length ? 12 : 4],
                y: d[16 === d.length ? 13 : 5]
            }) : (d = this.$stage.position(), d = {
                x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                y: d.top
            }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                var d = this.difference(this._drag.pointer, this.pointer(b));
                a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, e.prototype.onDragMove = function(a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), c = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
        }, e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, e.prototype.closest = function(b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
                return b > h - e && h + e > b ? d = a : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d
            }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
        }, e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : c ? this.$stage.animate({
                left: b + "px"
            }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: b + "px"
            })
        }, e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        }, e.prototype.current = function(a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (a = this.normalize(a), this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
                return b
            })
        }, e.prototype.reset = function(a) {
            a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
        }, e.prototype.normalize = function(b, c) {
            var e = this._items.length,
                f = c ? 0 : this._clones.length;
            return !a.isNumeric(b) || 1 > e ? b = d : (0 > b || b >= e + f) && (b = ((b - f / 2) % e + e) % e + f / 2), b
        }, e.prototype.relative = function(a) {
            return a -= this._clones.length / 2, this.normalize(a, !0)
        }, e.prototype.maximum = function(a) {
            var b, c = this.settings,
                d = this._coordinates.length,
                e = Math.abs(this._coordinates[d - 1]) - this._width,
                f = -1;
            if (c.loop) d = this._clones.length / 2 + this._items.length - 1;
            else if (c.autoWidth || c.merge)
                for (; d - f > 1;) Math.abs(this._coordinates[b = d + f >> 1]) < e ? f = b : d = b;
            else d = c.center ? this._items.length - 1 : this._items.length - c.items;
            return a && (d -= this._clones.length / 2), Math.max(d, 0)
        }, e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        }, e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
        }, e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
        }, e.prototype.clones = function(b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function(a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
                };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }, e.prototype.speed = function(a) {
            return a !== d && (this._speed = a), this._speed
        }, e.prototype.coordinates = function(b) {
            var c = null;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
        }, e.prototype.duration = function(a, b, c) {
            return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }, e.prototype.to = function(a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (0 > e),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
        }, e.prototype.next = function(a) {
            a = a || !1, this.to(this.relative(this.current()) + 1, a)
        }, e.prototype.prev = function(a) {
            a = a || !1, this.to(this.relative(this.current()) - 1, a)
        }, e.prototype.onTransitionEnd = function(a) {
            return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
        }, e.prototype.viewport = function() {
            var d;
            if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth) d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth
            }
            return d
        }, e.prototype.replace = function(b) {
            this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
                return 1 === this.nodeType
            }).each(a.proxy(function(a, b) {
                b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
                content: b,
                position: c
            }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
                content: b,
                position: c
            })
        }, e.prototype.remove = function(a) {
            a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: a
            }))
        }, e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        }, e.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a
            }
        }, e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }, e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                i = a.camelCase(a.grep(["on", b, d], function(a) {
                    return a
                }).join("-").toLowerCase()),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(j)
            }), this.register({
                type: e.Type.Event,
                name: b
            }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
        }, e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
            }, this))
        }, e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        }, e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                        return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                    }, a.event.special[b.name].owl = !0
                }
            } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
        }, e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }, e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }, e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
        }, e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }, a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this),
                    f = d.data("owl.carousel");
                f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                    f.register({
                        type: e.Type.Event,
                        name: c
                    }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                        a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                    }, f))
                })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        }, a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, e.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, e.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, e.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                                this.load(b)
                            }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f)), h), f++
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        }, e.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c),
                e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                var e, f = a(d),
                    g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                this._core.trigger("load", {
                    element: f,
                    url: g
                }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                    f.css("opacity", 1), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                    f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this), e.src = g)
            }, this)), this._loaded.push(d.get(0)))
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function() {
            var b = this._core._current,
                c = b + this._core.settings.items,
                d = this._core.$stage.children().toArray().slice(b, c);
            heights = [], maxheight = 0, a.each(d, function(b, c) {
                heights.push(a(c).height())
            }), maxheight = Math.max.apply(null, heights), this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
        };
        e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, e.prototype.fetch = function(a, b) {
            var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
                e = a.attr("data-width") || this._core.settings.videoWidth,
                f = a.attr("data-height") || this._core.settings.videoHeight,
                g = a.attr("href");
            if (!g) throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
            else {
                if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                c = "vimeo"
            }
            d = d[6], this._videos[g] = {
                type: c,
                id: d,
                width: e,
                height: f
            }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
        }, e.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                h = b.find("img"),
                i = "src",
                j = "",
                k = this._core.settings,
                l = function(a) {
                    e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
                };
            return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a[0].thumbnail_large, l(f)
                }
            }))
        }, e.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, e.prototype.play = function(b) {
            var c, d = a(b.target),
                e = d.closest("." + this._core.settings.itemClass),
                f = this._videos[e.attr("data-video")],
                g = f.width || "100%",
                h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="http://www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type && (c = '<iframe src="http://player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
        }, e.prototype.isInFullScreen = function() {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        }, e.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Video = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
                    d.one(a.support.animation.end, c).css({
                        left: b + "px"
                    }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._interval = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "settings" === a.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, e.prototype.play = function(d, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._interval = b.setInterval(a.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), d || this._core.settings.autoplayTimeout))
        }, e.prototype.stop = function() {
            this._core.is("rotating") && (b.clearInterval(this._interval), this._core.leave("rotating"))
        }, e.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, e.prototype.destroy = function() {
            var a, b;
            this.stop();
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(b) {
            this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, e.prototype.initialize = function() {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.prev(c.navSpeed)
            }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.next(c.navSpeed)
            }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
                var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(), this.to(d, c.dotsSpeed)
            }, this));
            for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
        }, e.prototype.destroy = function() {
            var a, b, c, d;
            for (a in this._handlers) this.$element.off(a, this._handlers[a]);
            for (b in this._controls) this._controls[b].remove();
            for (d in this.overides) this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, e.prototype.update = function() {
            var a, b, c, d = this._core.clones().length / 2,
                e = d + this._core.items().length,
                f = this._core.maximum(!0),
                g = this._core.settings,
                h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
                for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
                    if (b >= h || 0 === b) {
                        if (this._pages.push({
                                start: Math.min(f, a - d),
                                end: a - d + h - 1
                            }), Math.min(f, a - d) === f) break;
                        b = 0, ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        }, e.prototype.draw = function() {
            var b, c = this._core.settings,
                d = this._core.items().length <= c.items,
                e = this._core.relative(this._core.current()),
                f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        }, e.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        }, e.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function(a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        }, e.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
        }, e.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        }, e.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        }, e.prototype.to = function(b, c, d) {
            var e;
            d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
        }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(c) {
            this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                        if (!c) return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current())),
                            e = a.map(this._hashes, function(a, b) {
                                return a === d ? b : null
                            }).join();
                        if (!e || b.location.hash.slice(1) === e) return;
                        b.location.hash = e
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                var c = b.location.hash.substring(1),
                    e = this._core.$stage.children(),
                    f = this._hashes[c] && e.index(this._hashes[c]);
                f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        }, e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                return g[b] !== d ? (e = c ? b : !0, !1) : void 0
            }), e
        }

        function f(a) {
            return e(a, !0)
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            j = {
                csstransforms: function() {
                    return !!e("transform")
                },
                csstransforms3d: function() {
                    return !!e("perspective")
                },
                csstransitions: function() {
                    return !!e("transition")
                },
                cssanimations: function() {
                    return !!e("animation")
                }
            };
        j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);
var pJS = function(a, b) {
    var c = document.querySelector("#" + a + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: c,
            w: c.offsetWidth,
            h: c.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var d = this.pJS;
    b && Object.deepExtend(d, b), d.tmp.obj = {
        size_value: d.particles.size.value,
        size_anim_speed: d.particles.size.anim.speed,
        move_speed: d.particles.move.speed,
        line_linked_distance: d.particles.line_linked.distance,
        line_linked_width: d.particles.line_linked.width,
        mode_grab_distance: d.interactivity.modes.grab.distance,
        mode_bubble_distance: d.interactivity.modes.bubble.distance,
        mode_bubble_size: d.interactivity.modes.bubble.size,
        mode_repulse_distance: d.interactivity.modes.repulse.distance
    }, d.fn.retinaInit = function() {
        d.retina_detect && window.devicePixelRatio > 1 ? (d.canvas.pxratio = window.devicePixelRatio, d.tmp.retina = !0) : (d.canvas.pxratio = 1, d.tmp.retina = !1), d.canvas.w = d.canvas.el.offsetWidth * d.canvas.pxratio, d.canvas.h = d.canvas.el.offsetHeight * d.canvas.pxratio, d.particles.size.value = d.tmp.obj.size_value * d.canvas.pxratio, d.particles.size.anim.speed = d.tmp.obj.size_anim_speed * d.canvas.pxratio, d.particles.move.speed = d.tmp.obj.move_speed * d.canvas.pxratio, d.particles.line_linked.distance = d.tmp.obj.line_linked_distance * d.canvas.pxratio, d.interactivity.modes.grab.distance = d.tmp.obj.mode_grab_distance * d.canvas.pxratio, d.interactivity.modes.bubble.distance = d.tmp.obj.mode_bubble_distance * d.canvas.pxratio, d.particles.line_linked.width = d.tmp.obj.line_linked_width * d.canvas.pxratio, d.interactivity.modes.bubble.size = d.tmp.obj.mode_bubble_size * d.canvas.pxratio, d.interactivity.modes.repulse.distance = d.tmp.obj.mode_repulse_distance * d.canvas.pxratio
    }, d.fn.canvasInit = function() {
        d.canvas.ctx = d.canvas.el.getContext("2d")
    }, d.fn.canvasSize = function() {
        d.canvas.el.width = d.canvas.w, d.canvas.el.height = d.canvas.h, d && d.interactivity.events.resize && window.addEventListener("resize", function() {
            d.canvas.w = d.canvas.el.offsetWidth, d.canvas.h = d.canvas.el.offsetHeight, d.tmp.retina && (d.canvas.w *= d.canvas.pxratio, d.canvas.h *= d.canvas.pxratio), d.canvas.el.width = d.canvas.w, d.canvas.el.height = d.canvas.h, d.particles.move.enable || (d.fn.particlesEmpty(), d.fn.particlesCreate(), d.fn.particlesDraw(), d.fn.vendors.densityAutoParticles()), d.fn.vendors.densityAutoParticles()
        })
    }, d.fn.canvasPaint = function() {
        d.canvas.ctx.fillRect(0, 0, d.canvas.w, d.canvas.h)
    }, d.fn.canvasClear = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h)
    }, d.fn.particle = function(a, b, c) {
        if (this.radius = (d.particles.size.random ? Math.random() : 1) * d.particles.size.value, d.particles.size.anim.enable && (this.size_status = !1, this.vs = d.particles.size.anim.speed / 100, d.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = c ? c.x : Math.random() * d.canvas.w, this.y = c ? c.y : Math.random() * d.canvas.h, this.x > d.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > d.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), d.particles.move.bounce && d.fn.vendors.checkOverlap(this, c), this.color = {}, "object" == typeof a.value)
            if (a.value instanceof Array) {
                var e = a.value[Math.floor(Math.random() * d.particles.color.value.length)];
                this.color.rgb = hexToRgb(e)
            } else void 0 != a.value.r && void 0 != a.value.g && void 0 != a.value.b && (this.color.rgb = {
                r: a.value.r,
                g: a.value.g,
                b: a.value.b
            }), void 0 != a.value.h && void 0 != a.value.s && void 0 != a.value.l && (this.color.hsl = {
                h: a.value.h,
                s: a.value.s,
                l: a.value.l
            });
        else "random" == a.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof a.value && (this.color = a, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (d.particles.opacity.random ? Math.random() : 1) * d.particles.opacity.value, d.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = d.particles.opacity.anim.speed / 100, d.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var f = {};
        switch (d.particles.move.direction) {
            case "top":
                f = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                f = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                f = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                f = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                f = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                f = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                f = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                f = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                f = {
                    x: 0,
                    y: 0
                }
        }
        d.particles.move.straight ? (this.vx = f.x, this.vy = f.y, d.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = f.x + Math.random() - .5, this.vy = f.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var g = d.particles.shape.type;
        if ("object" == typeof g) {
            if (g instanceof Array) {
                var h = g[Math.floor(Math.random() * g.length)];
                this.shape = h
            }
        } else this.shape = g;
        if ("image" == this.shape) {
            var i = d.particles.shape;
            this.img = {
                src: i.image.src,
                ratio: i.image.width / i.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == d.tmp.img_type && void 0 != d.tmp.source_svg && (d.fn.vendors.createSvgImg(this), d.tmp.pushing && (this.img.loaded = !1))
        }
    }, d.fn.particle.prototype.draw = function() {
        function a() {
            d.canvas.ctx.drawImage(g, b.x - c, b.y - c, 2 * c, 2 * c / b.img.ratio)
        }
        var b = this;
        if (void 0 != b.radius_bubble) var c = b.radius_bubble;
        else var c = b.radius;
        if (void 0 != b.opacity_bubble) var e = b.opacity_bubble;
        else var e = b.opacity;
        if (b.color.rgb) var f = "rgba(" + b.color.rgb.r + "," + b.color.rgb.g + "," + b.color.rgb.b + "," + e + ")";
        else var f = "hsla(" + b.color.hsl.h + "," + b.color.hsl.s + "%," + b.color.hsl.l + "%," + e + ")";
        switch (d.canvas.ctx.fillStyle = f, d.canvas.ctx.beginPath(), b.shape) {
            case "circle":
                d.canvas.ctx.arc(b.x, b.y, c, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                d.canvas.ctx.rect(b.x - c, b.y - c, 2 * c, 2 * c);
                break;
            case "triangle":
                d.fn.vendors.drawShape(d.canvas.ctx, b.x - c, b.y + c / 1.66, 2 * c, 3, 2);
                break;
            case "polygon":
                d.fn.vendors.drawShape(d.canvas.ctx, b.x - c / (d.particles.shape.polygon.nb_sides / 3.5), b.y - c / .76, 2.66 * c / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                d.fn.vendors.drawShape(d.canvas.ctx, b.x - 2 * c / (d.particles.shape.polygon.nb_sides / 4), b.y - c / 1.52, 2 * c * 2.66 / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == d.tmp.img_type) var g = b.img.obj;
                else var g = d.tmp.img_obj;
                g && a()
        }
        d.canvas.ctx.closePath(), d.particles.shape.stroke.width > 0 && (d.canvas.ctx.strokeStyle = d.particles.shape.stroke.color, d.canvas.ctx.lineWidth = d.particles.shape.stroke.width, d.canvas.ctx.stroke()), d.canvas.ctx.fill()
    }, d.fn.particlesCreate = function() {
        for (var a = 0; a < d.particles.number.value; a++) d.particles.array.push(new d.fn.particle(d.particles.color, d.particles.opacity.value))
    }, d.fn.particlesUpdate = function() {
        for (var a = 0; a < d.particles.array.length; a++) {
            var b = d.particles.array[a];
            if (d.particles.move.enable) {
                var c = d.particles.move.speed / 2;
                b.x += b.vx * c, b.y += b.vy * c
            }
            if (d.particles.opacity.anim.enable && (1 == b.opacity_status ? (b.opacity >= d.particles.opacity.value && (b.opacity_status = !1), b.opacity += b.vo) : (b.opacity <= d.particles.opacity.anim.opacity_min && (b.opacity_status = !0), b.opacity -= b.vo), b.opacity < 0 && (b.opacity = 0)), d.particles.size.anim.enable && (1 == b.size_status ? (b.radius >= d.particles.size.value && (b.size_status = !1), b.radius += b.vs) : (b.radius <= d.particles.size.anim.size_min && (b.size_status = !0), b.radius -= b.vs), b.radius < 0 && (b.radius = 0)), "bounce" == d.particles.move.out_mode) var e = {
                x_left: b.radius,
                x_right: d.canvas.w,
                y_top: b.radius,
                y_bottom: d.canvas.h
            };
            else var e = {
                x_left: -b.radius,
                x_right: d.canvas.w + b.radius,
                y_top: -b.radius,
                y_bottom: d.canvas.h + b.radius
            };
            switch (b.x - b.radius > d.canvas.w ? (b.x = e.x_left, b.y = Math.random() * d.canvas.h) : b.x + b.radius < 0 && (b.x = e.x_right, b.y = Math.random() * d.canvas.h), b.y - b.radius > d.canvas.h ? (b.y = e.y_top, b.x = Math.random() * d.canvas.w) : b.y + b.radius < 0 && (b.y = e.y_bottom, b.x = Math.random() * d.canvas.w), d.particles.move.out_mode) {
                case "bounce":
                    b.x + b.radius > d.canvas.w ? b.vx = -b.vx : b.x - b.radius < 0 && (b.vx = -b.vx), b.y + b.radius > d.canvas.h ? b.vy = -b.vy : b.y - b.radius < 0 && (b.vy = -b.vy)
            }
            if (isInArray("grab", d.interactivity.events.onhover.mode) && d.fn.modes.grabParticle(b), (isInArray("bubble", d.interactivity.events.onhover.mode) || isInArray("bubble", d.interactivity.events.onclick.mode)) && d.fn.modes.bubbleParticle(b), (isInArray("repulse", d.interactivity.events.onhover.mode) || isInArray("repulse", d.interactivity.events.onclick.mode)) && d.fn.modes.repulseParticle(b), d.particles.line_linked.enable || d.particles.move.attract.enable)
                for (var f = a + 1; f < d.particles.array.length; f++) {
                    var g = d.particles.array[f];
                    d.particles.line_linked.enable && d.fn.interact.linkParticles(b, g), d.particles.move.attract.enable && d.fn.interact.attractParticles(b, g), d.particles.move.bounce && d.fn.interact.bounceParticles(b, g)
                }
        }
    }, d.fn.particlesDraw = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h), d.fn.particlesUpdate();
        for (var a = 0; a < d.particles.array.length; a++) {
            var b = d.particles.array[a];
            b.draw()
        }
    }, d.fn.particlesEmpty = function() {
        d.particles.array = []
    }, d.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(d.fn.checkAnimFrame), cancelRequestAnimFrame(d.fn.drawAnimFrame), d.tmp.source_svg = void 0, d.tmp.img_obj = void 0, d.tmp.count_svg = 0, d.fn.particlesEmpty(), d.fn.canvasClear(), d.fn.vendors.start()
    }, d.fn.interact.linkParticles = function(a, b) {
        var c = a.x - b.x,
            e = a.y - b.y,
            f = Math.sqrt(c * c + e * e);
        if (f <= d.particles.line_linked.distance) {
            var g = d.particles.line_linked.opacity - f / (1 / d.particles.line_linked.opacity) / d.particles.line_linked.distance;
            if (g > 0) {
                var h = d.particles.line_linked.color_rgb_line;
                d.canvas.ctx.strokeStyle = "rgba(" + h.r + "," + h.g + "," + h.b + "," + g + ")", d.canvas.ctx.lineWidth = d.particles.line_linked.width, d.canvas.ctx.beginPath(), d.canvas.ctx.moveTo(a.x, a.y), d.canvas.ctx.lineTo(b.x, b.y), d.canvas.ctx.stroke(), d.canvas.ctx.closePath()
            }
        }
    }, d.fn.interact.attractParticles = function(a, b) {
        var c = a.x - b.x,
            e = a.y - b.y,
            f = Math.sqrt(c * c + e * e);
        if (f <= d.particles.line_linked.distance) {
            var g = c / (1e3 * d.particles.move.attract.rotateX),
                h = e / (1e3 * d.particles.move.attract.rotateY);
            a.vx -= g, a.vy -= h, b.vx += g, b.vy += h
        }
    }, d.fn.interact.bounceParticles = function(a, b) {
        var c = a.x - b.x,
            d = a.y - b.y,
            e = Math.sqrt(c * c + d * d),
            f = a.radius + b.radius;
        f >= e && (a.vx = -a.vx, a.vy = -a.vy, b.vx = -b.vx, b.vy = -b.vy)
    }, d.fn.modes.pushParticles = function(a, b) {
        d.tmp.pushing = !0;
        for (var c = 0; a > c; c++) d.particles.array.push(new d.fn.particle(d.particles.color, d.particles.opacity.value, {
            x: b ? b.pos_x : Math.random() * d.canvas.w,
            y: b ? b.pos_y : Math.random() * d.canvas.h
        })), c == a - 1 && (d.particles.move.enable || d.fn.particlesDraw(), d.tmp.pushing = !1)
    }, d.fn.modes.removeParticles = function(a) {
        d.particles.array.splice(0, a), d.particles.move.enable || d.fn.particlesDraw()
    }, d.fn.modes.bubbleParticle = function(a) {
        function b() {
            a.opacity_bubble = a.opacity, a.radius_bubble = a.radius
        }

        function c(b, c, e, f, h) {
            if (b != c)
                if (d.tmp.bubble_duration_end) {
                    if (void 0 != e) {
                        var i = f - l * (f - b) / d.interactivity.modes.bubble.duration,
                            j = b - i;
                        m = b + j, "size" == h && (a.radius_bubble = m), "opacity" == h && (a.opacity_bubble = m)
                    }
                } else if (g <= d.interactivity.modes.bubble.distance) {
                if (void 0 != e) var k = e;
                else var k = f;
                if (k != b) {
                    var m = f - l * (f - b) / d.interactivity.modes.bubble.duration;
                    "size" == h && (a.radius_bubble = m), "opacity" == h && (a.opacity_bubble = m)
                }
            } else "size" == h && (a.radius_bubble = void 0), "opacity" == h && (a.opacity_bubble = void 0)
        }
        if (d.interactivity.events.onhover.enable && isInArray("bubble", d.interactivity.events.onhover.mode)) {
            var e = a.x - d.interactivity.mouse.pos_x,
                f = a.y - d.interactivity.mouse.pos_y,
                g = Math.sqrt(e * e + f * f),
                h = 1 - g / d.interactivity.modes.bubble.distance;
            if (g <= d.interactivity.modes.bubble.distance) {
                if (h >= 0 && "mousemove" == d.interactivity.status) {
                    if (d.interactivity.modes.bubble.size != d.particles.size.value)
                        if (d.interactivity.modes.bubble.size > d.particles.size.value) {
                            var i = a.radius + d.interactivity.modes.bubble.size * h;
                            i >= 0 && (a.radius_bubble = i)
                        } else {
                            var j = a.radius - d.interactivity.modes.bubble.size,
                                i = a.radius - j * h;
                            i > 0 ? a.radius_bubble = i : a.radius_bubble = 0
                        }
                    if (d.interactivity.modes.bubble.opacity != d.particles.opacity.value)
                        if (d.interactivity.modes.bubble.opacity > d.particles.opacity.value) {
                            var k = d.interactivity.modes.bubble.opacity * h;
                            k > a.opacity && k <= d.interactivity.modes.bubble.opacity && (a.opacity_bubble = k)
                        } else {
                            var k = a.opacity - (d.particles.opacity.value - d.interactivity.modes.bubble.opacity) * h;
                            k < a.opacity && k >= d.interactivity.modes.bubble.opacity && (a.opacity_bubble = k)
                        }
                }
            } else b();
            "mouseleave" == d.interactivity.status && b()
        } else if (d.interactivity.events.onclick.enable && isInArray("bubble", d.interactivity.events.onclick.mode)) {
            if (d.tmp.bubble_clicking) {
                var e = a.x - d.interactivity.mouse.click_pos_x,
                    f = a.y - d.interactivity.mouse.click_pos_y,
                    g = Math.sqrt(e * e + f * f),
                    l = ((new Date).getTime() - d.interactivity.mouse.click_time) / 1e3;
                l > d.interactivity.modes.bubble.duration && (d.tmp.bubble_duration_end = !0), l > 2 * d.interactivity.modes.bubble.duration && (d.tmp.bubble_clicking = !1, d.tmp.bubble_duration_end = !1)
            }
            d.tmp.bubble_clicking && (c(d.interactivity.modes.bubble.size, d.particles.size.value, a.radius_bubble, a.radius, "size"), c(d.interactivity.modes.bubble.opacity, d.particles.opacity.value, a.opacity_bubble, a.opacity, "opacity"))
        }
    }, d.fn.modes.repulseParticle = function(a) {
        function b() {
            var b = Math.atan2(m, l);
            if (a.vx = o * Math.cos(b), a.vy = o * Math.sin(b), "bounce" == d.particles.move.out_mode) {
                var c = {
                    x: a.x + a.vx,
                    y: a.y + a.vy
                };
                c.x + a.radius > d.canvas.w ? a.vx = -a.vx : c.x - a.radius < 0 && (a.vx = -a.vx), c.y + a.radius > d.canvas.h ? a.vy = -a.vy : c.y - a.radius < 0 && (a.vy = -a.vy)
            }
        }
        if (d.interactivity.events.onhover.enable && isInArray("repulse", d.interactivity.events.onhover.mode) && "mousemove" == d.interactivity.status) {
            var c = a.x - d.interactivity.mouse.pos_x,
                e = a.y - d.interactivity.mouse.pos_y,
                f = Math.sqrt(c * c + e * e),
                g = {
                    x: c / f,
                    y: e / f
                },
                h = d.interactivity.modes.repulse.distance,
                i = 100,
                j = clamp(1 / h * (-1 * Math.pow(f / h, 2) + 1) * h * i, 0, 50),
                k = {
                    x: a.x + g.x * j,
                    y: a.y + g.y * j
                };
            "bounce" == d.particles.move.out_mode ? (k.x - a.radius > 0 && k.x + a.radius < d.canvas.w && (a.x = k.x), k.y - a.radius > 0 && k.y + a.radius < d.canvas.h && (a.y = k.y)) : (a.x = k.x, a.y = k.y)
        } else if (d.interactivity.events.onclick.enable && isInArray("repulse", d.interactivity.events.onclick.mode))
            if (d.tmp.repulse_finish || (d.tmp.repulse_count++, d.tmp.repulse_count == d.particles.array.length && (d.tmp.repulse_finish = !0)), d.tmp.repulse_clicking) {
                var h = Math.pow(d.interactivity.modes.repulse.distance / 6, 3),
                    l = d.interactivity.mouse.click_pos_x - a.x,
                    m = d.interactivity.mouse.click_pos_y - a.y,
                    n = l * l + m * m,
                    o = -h / n * 1;
                h >= n && b()
            } else 0 == d.tmp.repulse_clicking && (a.vx = a.vx_i, a.vy = a.vy_i)
    }, d.fn.modes.grabParticle = function(a) {
        if (d.interactivity.events.onhover.enable && "mousemove" == d.interactivity.status) {
            var b = a.x - d.interactivity.mouse.pos_x,
                c = a.y - d.interactivity.mouse.pos_y,
                e = Math.sqrt(b * b + c * c);
            if (e <= d.interactivity.modes.grab.distance) {
                var f = d.interactivity.modes.grab.line_linked.opacity - e / (1 / d.interactivity.modes.grab.line_linked.opacity) / d.interactivity.modes.grab.distance;
                if (f > 0) {
                    var g = d.particles.line_linked.color_rgb_line;
                    d.canvas.ctx.strokeStyle = "rgba(" + g.r + "," + g.g + "," + g.b + "," + f + ")", d.canvas.ctx.lineWidth = d.particles.line_linked.width, d.canvas.ctx.beginPath(), d.canvas.ctx.moveTo(a.x, a.y), d.canvas.ctx.lineTo(d.interactivity.mouse.pos_x, d.interactivity.mouse.pos_y), d.canvas.ctx.stroke(), d.canvas.ctx.closePath()
                }
            }
        }
    }, d.fn.vendors.eventsListeners = function() {
        "window" == d.interactivity.detect_on ? d.interactivity.el = window : d.interactivity.el = d.canvas.el, (d.interactivity.events.onhover.enable || d.interactivity.events.onclick.enable) && (d.interactivity.el.addEventListener("mousemove", function(a) {
            if (d.interactivity.el == window) var b = a.clientX,
                c = a.clientY;
            else var b = a.offsetX || a.clientX,
                c = a.offsetY || a.clientY;
            d.interactivity.mouse.pos_x = b, d.interactivity.mouse.pos_y = c, d.tmp.retina && (d.interactivity.mouse.pos_x *= d.canvas.pxratio, d.interactivity.mouse.pos_y *= d.canvas.pxratio), d.interactivity.status = "mousemove"
        }), d.interactivity.el.addEventListener("mouseleave", function(a) {
            d.interactivity.mouse.pos_x = null, d.interactivity.mouse.pos_y = null, d.interactivity.status = "mouseleave"
        })), d.interactivity.events.onclick.enable && d.interactivity.el.addEventListener("click", function() {
            if (d.interactivity.mouse.click_pos_x = d.interactivity.mouse.pos_x, d.interactivity.mouse.click_pos_y = d.interactivity.mouse.pos_y, d.interactivity.mouse.click_time = (new Date).getTime(), d.interactivity.events.onclick.enable) switch (d.interactivity.events.onclick.mode) {
                case "push":
                    d.particles.move.enable ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : 1 == d.interactivity.modes.push.particles_nb ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : d.interactivity.modes.push.particles_nb > 1 && d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    d.fn.modes.removeParticles(d.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    d.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    d.tmp.repulse_clicking = !0, d.tmp.repulse_count = 0, d.tmp.repulse_finish = !1, setTimeout(function() {
                        d.tmp.repulse_clicking = !1
                    }, 1e3 * d.interactivity.modes.repulse.duration)
            }
        })
    }, d.fn.vendors.densityAutoParticles = function() {
        if (d.particles.number.density.enable) {
            var a = d.canvas.el.width * d.canvas.el.height / 1e3;
            d.tmp.retina && (a /= 2 * d.canvas.pxratio);
            var b = a * d.particles.number.value / d.particles.number.density.value_area,
                c = d.particles.array.length - b;
            0 > c ? d.fn.modes.pushParticles(Math.abs(c)) : d.fn.modes.removeParticles(c)
        }
    }, d.fn.vendors.checkOverlap = function(a, b) {
        for (var c = 0; c < d.particles.array.length; c++) {
            var e = d.particles.array[c],
                f = a.x - e.x,
                g = a.y - e.y,
                h = Math.sqrt(f * f + g * g);
            h <= a.radius + e.radius && (a.x = b ? b.x : Math.random() * d.canvas.w, a.y = b ? b.y : Math.random() * d.canvas.h, d.fn.vendors.checkOverlap(a))
        }
    }, d.fn.vendors.createSvgImg = function(a) {
        var b = d.tmp.source_svg,
            c = /#([0-9A-F]{3,6})/gi,
            e = b.replace(c, function(b, c, d, e) {
                if (a.color.rgb) var f = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + a.opacity + ")";
                else var f = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + a.opacity + ")";
                return f
            }),
            f = new Blob([e], {
                type: "image/svg+xml;charset=utf-8"
            }),
            g = window.URL || window.webkitURL || window,
            h = g.createObjectURL(f),
            i = new Image;
        i.addEventListener("load", function() {
            a.img.obj = i, a.img.loaded = !0, g.revokeObjectURL(h), d.tmp.count_svg++
        }), i.src = h
    }, d.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(d.fn.drawAnimFrame), c.remove(), pJSDom = null
    }, d.fn.vendors.drawShape = function(a, b, c, d, e, f) {
        var g = e * f,
            h = e / f,
            i = 180 * (h - 2) / h,
            j = Math.PI - Math.PI * i / 180;
        a.save(), a.beginPath(), a.translate(b, c), a.moveTo(0, 0);
        for (var k = 0; g > k; k++) a.lineTo(d, 0), a.translate(d, 0), a.rotate(j);
        a.fill(), a.restore()
    }, d.fn.vendors.exportImg = function() {
        window.open(d.canvas.el.toDataURL("image/png"), "_blank")
    }, d.fn.vendors.loadImg = function(a) {
        if (d.tmp.img_error = void 0, "" != d.particles.shape.image.src)
            if ("svg" == a) {
                var b = new XMLHttpRequest;
                b.open("GET", d.particles.shape.image.src), b.onreadystatechange = function(a) {
                    4 == b.readyState && (200 == b.status ? (d.tmp.source_svg = a.currentTarget.response, d.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), d.tmp.img_error = !0))
                }, b.send()
            } else {
                var c = new Image;
                c.addEventListener("load", function() {
                    d.tmp.img_obj = c, d.fn.vendors.checkBeforeDraw()
                }), c.src = d.particles.shape.image.src
            } else console.log("Error pJS - No image.src"), d.tmp.img_error = !0
    }, d.fn.vendors.draw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type ? d.tmp.count_svg >= d.particles.number.value ? (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : void 0 != d.tmp.img_obj ? (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame))
    }, d.fn.vendors.checkBeforeDraw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type && void 0 == d.tmp.source_svg ? d.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(d.tmp.checkAnimFrame), d.tmp.img_error || (d.fn.vendors.init(), d.fn.vendors.draw())) : (d.fn.vendors.init(), d.fn.vendors.draw())
    }, d.fn.vendors.init = function() {
        d.fn.retinaInit(), d.fn.canvasInit(), d.fn.canvasSize(), d.fn.canvasPaint(), d.fn.particlesCreate(), d.fn.vendors.densityAutoParticles(), d.particles.line_linked.color_rgb_line = hexToRgb(d.particles.line_linked.color)
    }, d.fn.vendors.start = function() {
        isInArray("image", d.particles.shape.type) ? (d.tmp.img_type = d.particles.shape.image.src.substr(d.particles.shape.image.src.length - 3), d.fn.vendors.loadImg(d.tmp.img_type)) : d.fn.vendors.checkBeforeDraw()
    }, d.fn.vendors.eventsListeners(), d.fn.vendors.start()
};
Object.deepExtend = function(a, b) {
    for (var c in b) b[c] && b[c].constructor && b[c].constructor === Object ? (a[c] = a[c] || {}, arguments.callee(a[c], b[c])) : a[c] = b[c];
    return a
}, window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1e3 / 60)
    }
}(), window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function(a, b) {
    "string" != typeof a && (b = a, a = "particles-js"), a || (a = "particles-js");
    var c = document.getElementById(a),
        d = "particles-js-canvas-el",
        e = c.getElementsByClassName(d);
    if (e.length)
        for (; e.length > 0;) c.removeChild(e[0]);
    var f = document.createElement("canvas");
    f.className = d, f.style.width = "100%", f.style.height = "100%";
    var g = document.getElementById(a).appendChild(f);
    null != g && pJSDom.push(new pJS(a, b))
}, window.particlesJS.load = function(a, b, c) {
    var d = new XMLHttpRequest;
    d.open("GET", b), d.onreadystatechange = function(b) {
        if (4 == d.readyState)
            if (200 == d.status) {
                var e = JSON.parse(b.currentTarget.response);
                window.particlesJS(a, e), c && c()
            } else console.log("Error pJS - XMLHttpRequest status: " + d.status), console.log("Error pJS - File config not found")
    }, d.send()
}, ! function(a) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery)
}(function(a) {
    function b(f, g, i, m) {
        function n() {
            return b._.node("div", b._.node("div", b._.node("div", b._.node("div", B.component.nodes(w.open), y.box), y.wrap), y.frame), y.holder, 'tabindex="-1"')
        }

        function o() {
            z.data(g, B).addClass(y.input).val(z.data("value") ? B.get("select", x.format) : f.value), x.editable || z.on("focus." + w.id + " click." + w.id, function(a) {
                a.preventDefault(), B.open()
            }).on("keydown." + w.id, u), e(f, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: f.id + "_root"
            })
        }

        function p() {
            e(B.$root[0], "hidden", !0)
        }

        function q() {
            B.$holder.on({
                keydown: u,
                "focus.toOpen": t,
                blur: function() {
                    z.removeClass(y.target)
                },
                focusin: function(a) {
                    B.$root.removeClass(y.focused), a.stopPropagation()
                },
                "mousedown click": function(b) {
                    var c = b.target;
                    c != B.$holder[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), B.$holder[0].focus()))
                }
            }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var b = a(this),
                    c = b.data(),
                    d = b.hasClass(y.navDisabled) || b.hasClass(y.disabled),
                    e = h();
                e = e && (e.type || e.href), (d || e && !a.contains(B.$root[0], e)) && B.$holder[0].focus(), !d && c.nav ? B.set("highlight", B.component.item.highlight, {
                    nav: c.nav
                }) : !d && "pick" in c ? (B.set("select", c.pick), x.closeOnSelect && B.close(!0)) : c.clear ? (B.clear(), x.closeOnClear && B.close(!0)) : c.close && B.close(!0)
            })
        }

        function r() {
            var b;
            x.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof x.hiddenPrefix ? x.hiddenPrefix : "", "string" == typeof x.hiddenSuffix ? x.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), B._hidden = a('<input type=hidden name="' + b + '"' + (z.data("value") || f.value ? ' value="' + B.get("select", x.formatSubmit) + '"' : "") + ">")[0], z.on("change." + w.id, function() {
                B._hidden.value = f.value ? B.get("select", x.formatSubmit) : ""
            })
        }

        function s() {
            v && l ? B.$holder.find("." + y.frame).one("transitionend", function() {
                B.$holder[0].focus()
            }) : B.$holder[0].focus()
        }

        function t(a) {
            a.stopPropagation(), z.addClass(y.target), B.$root.addClass(y.focused), B.open()
        }

        function u(a) {
            var b = a.keyCode,
                c = /^(8|46)$/.test(b);
            return 27 == b ? (B.close(!0), !1) : void((32 == b || c || !w.open && B.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? B.clear().close() : B.open()))
        }
        if (!f) return b;
        var v = !1,
            w = {
                id: f.id || "P" + Math.abs(~~(Math.random() * new Date))
            },
            x = i ? a.extend(!0, {}, i.defaults, m) : m || {},
            y = a.extend({}, b.klasses(), x.klass),
            z = a(f),
            A = function() {
                return this.start()
            },
            B = A.prototype = {
                constructor: A,
                $node: z,
                start: function() {
                    return w && w.start ? B : (w.methods = {}, w.start = !0, w.open = !1, w.type = f.type, f.autofocus = f == h(), f.readOnly = !x.editable, f.id = f.id || w.id, "text" != f.type && (f.type = "text"), B.component = new i(B, x), B.$root = a('<div class="' + y.picker + '" id="' + f.id + '_root" />'), p(), B.$holder = a(n()).appendTo(B.$root), q(), x.formatSubmit && r(), o(), x.containerHidden ? a(x.containerHidden).append(B._hidden) : z.after(B._hidden), x.container ? a(x.container).append(B.$root) : z.after(B.$root), B.on({
                        start: B.component.onStart,
                        render: B.component.onRender,
                        stop: B.component.onStop,
                        open: B.component.onOpen,
                        close: B.component.onClose,
                        set: B.component.onSet
                    }).on({
                        start: x.onStart,
                        render: x.onRender,
                        stop: x.onStop,
                        open: x.onOpen,
                        close: x.onClose,
                        set: x.onSet
                    }), v = c(B.$holder[0]), f.autofocus && B.open(), B.trigger("start").trigger("render"))
                },
                render: function(b) {
                    return b ? (B.$holder = a(n()), q(), B.$root.html(B.$holder)) : B.$root.find("." + y.box).html(B.component.nodes(w.open)), B.trigger("render")
                },
                stop: function() {
                    return w.start ? (B.close(), B._hidden && B._hidden.parentNode.removeChild(B._hidden), B.$root.remove(), z.removeClass(y.input).removeData(g), setTimeout(function() {
                        z.off("." + w.id)
                    }, 0), f.type = w.type, f.readOnly = !1, B.trigger("stop"), w.methods = {}, w.start = !1, B) : B
                },
                open: function(c) {
                    return w.open ? B : (z.addClass(y.active), e(f, "expanded", !0), setTimeout(function() {
                        B.$root.addClass(y.opened), e(B.$root[0], "hidden", !1)
                    }, 0), c !== !1 && (w.open = !0, v && k.css("overflow", "hidden").css("padding-right", "+=" + d()), s(), j.on("click." + w.id + " focusin." + w.id, function(a) {
                        var b = a.target;
                        b != f && b != document && 3 != a.which && B.close(b === B.$holder[0])
                    }).on("keydown." + w.id, function(c) {
                        var d = c.keyCode,
                            e = B.component.key[d],
                            f = c.target;
                        27 == d ? B.close(!0) : f != B.$holder[0] || !e && 13 != d ? a.contains(B.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(B.component.key.go, B, [b._.trigger(e)]) : B.$root.find("." + y.highlighted).hasClass(y.disabled) || (B.set("select", B.component.item.highlight), x.closeOnSelect && B.close(!0)))
                    })), B.trigger("open"))
                },
                close: function(a) {
                    return a && (x.editable ? f.focus() : (B.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                        B.$holder.on("focus.toOpen", t)
                    }, 0))), z.removeClass(y.active), e(f, "expanded", !1), setTimeout(function() {
                        B.$root.removeClass(y.opened + " " + y.focused), e(B.$root[0], "hidden", !0)
                    }, 0), w.open ? (w.open = !1, v && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + w.id), B.trigger("close")) : B
                },
                clear: function(a) {
                    return B.set("clear", null, a)
                },
                set: function(b, c, d) {
                    var e, f, g = a.isPlainObject(b),
                        h = g ? b : {};
                    if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
                        g || (h[b] = c);
                        for (e in h) f = h[e], e in B.component.item && (void 0 === f && (f = null), B.component.set(e, f, d)), ("select" == e || "clear" == e) && z.val("clear" == e ? "" : B.get(e, x.format)).trigger("change");
                        B.render()
                    }
                    return d.muted ? B : B.trigger("set", h)
                },
                get: function(a, c) {
                    if (a = a || "value", null != w[a]) return w[a];
                    if ("valueSubmit" == a) {
                        if (B._hidden) return B._hidden.value;
                        a = "value"
                    }
                    if ("value" == a) return f.value;
                    if (a in B.component.item) {
                        if ("string" == typeof c) {
                            var d = B.component.get(a);
                            return d ? b._.trigger(B.component.formats.toString, B.component, [c, d]) : ""
                        }
                        return B.component.get(a)
                    }
                },
                on: function(b, c, d) {
                    var e, f, g = a.isPlainObject(b),
                        h = g ? b : {};
                    if (b) {
                        g || (h[b] = c);
                        for (e in h) f = h[e], d && (e = "_" + e), w.methods[e] = w.methods[e] || [], w.methods[e].push(f)
                    }
                    return B
                },
                off: function() {
                    var a, b, c = arguments;
                    for (a = 0, namesCount = c.length; a < namesCount; a += 1) b = c[a], b in w.methods && delete w.methods[b];
                    return B
                },
                trigger: function(a, c) {
                    var d = function(a) {
                        var d = w.methods[a];
                        d && d.map(function(a) {
                            b._.trigger(a, B, [c])
                        })
                    };
                    return d("_" + a), d(a), B
                }
            };
        return new A
    }

    function c(a) {
        var b, c = "position";
        return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b
    }

    function d() {
        if (k.height() <= i.height()) return 0;
        var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"),
            c = b[0].offsetWidth;
        b.css("overflow", "scroll");
        var d = a('<div style="width:100%" />').appendTo(b),
            e = d[0].offsetWidth;
        return b.remove(), c - e
    }

    function e(b, c, d) {
        if (a.isPlainObject(c))
            for (var e in c) f(b, e, c[e]);
        else f(b, c, d)
    }

    function f(a, b, c) {
        a.setAttribute(("role" == b ? "" : "aria-") + b, c)
    }

    function g(b, c) {
        a.isPlainObject(b) || (b = {
            attribute: c
        }), c = "";
        for (var d in b) {
            var e = ("role" == d ? "" : "aria-") + d,
                f = b[d];
            c += null == f ? "" : e + '="' + b[d] + '"'
        }
        return c
    }

    function h() {
        try {
            return document.activeElement
        } catch (a) {}
    }
    var i = a(window),
        j = a(document),
        k = a(document.documentElement),
        l = null != document.documentElement.style.transition;
    return b.klasses = function(a) {
        return a = a || "picker", {
            picker: a,
            opened: a + "--opened",
            focused: a + "--focused",
            input: a + "__input",
            active: a + "__input--active",
            target: a + "__input--target",
            holder: a + "__holder",
            frame: a + "__frame",
            wrap: a + "__wrap",
            box: a + "__box"
        }
    }, b._ = {
        group: function(a) {
            for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
            return d
        },
        node: function(b, c, d, e) {
            return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : ""
        },
        lead: function(a) {
            return (10 > a ? "0" : "") + a
        },
        trigger: function(a, b, c) {
            return "function" == typeof a ? a.apply(b, c || []) : a
        },
        digits: function(a) {
            return /\d/.test(a[1]) ? 2 : 1
        },
        isDate: function(a) {
            return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate())
        },
        isInteger: function(a) {
            return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0
        },
        ariaAttr: g
    }, b.extend = function(c, d) {
        a.fn[c] = function(e, f) {
            var g = this.data(c);
            return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function() {
                var f = a(this);
                f.data(c) || new b(this, c, d, e)
            })
        }, a.fn[c].defaults = d.defaults
    }, b
}), ! function(a) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery)
}(function(a, b) {
    function c(a, b) {
        var c = this,
            d = a.$node[0],
            e = d.value,
            f = a.$node.data("value"),
            g = f || e,
            h = f ? b.formatSubmit : b.format,
            i = function() {
                return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction
            };
        c.settings = b, c.$node = a.$node, c.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = - function(a) {
            return a[0] === !0 ? a.shift() : -1
        }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, {
            format: h,
            defaultValue: !0
        }) : c.set("select", null).set("highlight", c.item.now), c.key = {
            40: 7,
            38: -7,
            39: function() {
                return i() ? -1 : 1
            },
            37: function() {
                return i() ? 1 : -1
            },
            go: function(a) {
                var b = c.item.highlight,
                    d = new Date(b.year, b.month, b.date + a);
                c.set("highlight", d, {
                    interval: a
                }), this.render()
            }
        }, a.on("render", function() {
            a.$root.find("." + b.klass.selectMonth).on("change", function() {
                var c = this.value;
                c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"))
            }), a.$root.find("." + b.klass.selectYear).on("change", function() {
                var c = this.value;
                c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function() {
            var d = "";
            c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1)
        }, 1).on("close", function() {
            a.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }
    var d = 7,
        e = 6,
        f = a._;
    c.prototype.set = function(a, b, c) {
        var d = this,
            e = d.item;
        return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
            return b = d[e](a, b, c)
        }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d)
    }, c.prototype.get = function(a) {
        return this.item[a]
    }, c.prototype.create = function(a, c, d) {
        var e, g = this;
        return c = void 0 === c ? a : c, c == -(1 / 0) || c == 1 / 0 ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), {
            year: e || c.getFullYear(),
            month: e || c.getMonth(),
            date: e || c.getDate(),
            day: e || c.getDay(),
            obj: e || c,
            pick: e || c.getTime()
        }
    }, c.prototype.createRange = function(a, c) {
        var d = this,
            e = function(a) {
                return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a
            };
        return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), {
            from: e(a),
            to: e(c)
        }
    }, c.prototype.withinRange = function(a, b) {
        return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick
    }, c.prototype.overlapRanges = function(a, b) {
        var c = this;
        return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to)
    }, c.prototype.now = function(a, b, c) {
        return b = new Date, c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c)
    }, c.prototype.navigate = function(a, c, d) {
        var e, f, g, h, i = b.isArray(c),
            j = b.isPlainObject(c),
            k = this.item.view;
        if (i || j) {
            for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g;) h -= 1;
            c = [f, g, h]
        }
        return c
    }, c.prototype.normalize = function(a) {
        return a.setHours(0, 0, 0, 0), a
    }, c.prototype.measure = function(a, b) {
        var c = this;
        return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, {
            rel: b
        })) : b = "min" == a ? -(1 / 0) : 1 / 0, b
    }, c.prototype.viewset = function(a, b) {
        return this.create([b.year, b.month, 1])
    }, c.prototype.validate = function(a, c, d) {
        var e, g, h, i, j = this,
            k = c,
            l = d && d.interval ? d.interval : 1,
            m = -1 === j.item.enable,
            n = j.item.min,
            o = j.item.max,
            p = m && j.item.disable.filter(function(a) {
                if (b.isArray(a)) {
                    var d = j.create(a).pick;
                    d < c.pick ? e = !0 : d > c.pick && (g = !0)
                }
                return f.isInteger(a)
            }).length;
        if ((!d || !d.nav && !d.defaultValue) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick)))
            for (m && !p && (!g && l > 0 || !e && 0 > l) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) c = j.create([c.year, c.month, c.date + l]);
        return c
    }, c.prototype.disabled = function(a) {
        var c = this,
            d = c.item.disable.filter(function(d) {
                return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0
            });
        return d = d.length && !d.filter(function(a) {
            return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted
        }).length, -1 === c.item.enable ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick
    }, c.prototype.parse = function(a, b, c) {
        var d = this,
            e = {};
        return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function(a) {
            var c = d.formats[a],
                g = c ? f.trigger(c, d, [b, e]) : a.replace(/^!/, "").length;
            c && (e[a] = b.substr(0, g)), b = b.substr(g)
        }), [e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d]) : b
    }, c.prototype.formats = function() {
        function a(a, b, c) {
            var d = a.match(/[^\x00-\x7F]+|\w+/)[0];
            return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length
        }

        function b(a) {
            return a.match(/\w+/)[0].length
        }
        return {
            d: function(a, b) {
                return a ? f.digits(a) : b.date
            },
            dd: function(a, b) {
                return a ? 2 : f.lead(b.date)
            },
            ddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysShort[c.day]
            },
            dddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysFull[c.day]
            },
            m: function(a, b) {
                return a ? f.digits(a) : b.month + 1
            },
            mm: function(a, b) {
                return a ? 2 : f.lead(b.month + 1)
            },
            mmm: function(b, c) {
                var d = this.settings.monthsShort;
                return b ? a(b, d, c) : d[c.month]
            },
            mmmm: function(b, c) {
                var d = this.settings.monthsFull;
                return b ? a(b, d, c) : d[c.month]
            },
            yy: function(a, b) {
                return a ? 2 : ("" + b.year).slice(2)
            },
            yyyy: function(a, b) {
                return a ? 4 : b.year
            },
            toArray: function(a) {
                return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(a, b) {
                var c = this;
                return c.formats.toArray(a).map(function(a) {
                    return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "")
                }).join("")
            }
        }
    }(), c.prototype.isDateExact = function(a, c) {
        var d = this;
        return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : b.isPlainObject(a) && b.isPlainObject(c) ? d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to) : !1
    }, c.prototype.isDateOverlap = function(a, c) {
        var d = this,
            e = d.settings.firstDay ? 1 : 0;
        return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, c === d.create(a).day + 1) : b.isPlainObject(a) && b.isPlainObject(c) ? d.overlapRanges(a, c) : !1
    }, c.prototype.flipEnable = function(a) {
        var b = this.item;
        b.enable = a || (-1 == b.enable ? 1 : -1)
    }, c.prototype.deactivate = function(a, c) {
        var d = this,
            e = d.item.disable.slice(0);
        return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
            for (var c, g = 0; g < e.length; g += 1)
                if (d.isDateExact(a, e[g])) {
                    c = !0;
                    break
                }
            c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a)
        }), e
    }, c.prototype.activate = function(a, c) {
        var d = this,
            e = d.item.disable,
            g = e.length;
        return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
            var c, h, i, j;
            for (i = 0; g > i; i += 1) {
                if (h = e[i], d.isDateExact(h, a)) {
                    c = e[i] = null, j = !0;
                    break
                }
                if (d.isDateOverlap(h, a)) {
                    b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);
                    break
                }
            }
            if (c)
                for (i = 0; g > i; i += 1)
                    if (d.isDateExact(e[i], a)) {
                        e[i] = null;
                        break
                    }
            if (j)
                for (i = 0; g > i; i += 1)
                    if (d.isDateOverlap(e[i], a)) {
                        e[i] = null;
                        break
                    }
            c && e.push(c)
        }), e.filter(function(a) {
            return null != a
        })
    }, c.prototype.nodes = function(a) {
        var b = this,
            c = b.settings,
            g = b.item,
            h = g.now,
            i = g.select,
            j = g.highlight,
            k = g.view,
            l = g.disable,
            m = g.min,
            n = g.max,
            o = function(a, b) {
                return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({
                    min: 0,
                    max: d - 1,
                    i: 1,
                    node: "th",
                    item: function(d) {
                        return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"']
                    }
                })))
            }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysShort).slice(0), c.weekdaysFull.slice(0)),
            p = function(a) {
                return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({
                    role: "button",
                    controls: b.$node[0].id + "_table"
                }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"')
            },
            q = function() {
                var d = c.showMonthsShort ? c.monthsShort : c.monthsFull;
                return c.selectMonths ? f.node("select", f.group({
                    min: 0,
                    max: 11,
                    i: 1,
                    node: "option",
                    item: function(a) {
                        return [d[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")]
                    }
                }), c.klass.selectMonth, (a ? "" : "disabled") + " " + f.ariaAttr({
                    controls: b.$node[0].id + "_table"
                }) + ' title="' + c.labelMonthSelect + '"') : f.node("div", d[k.month], c.klass.month)
            },
            r = function() {
                var d = k.year,
                    e = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
                if (e) {
                    var g = m.year,
                        h = n.year,
                        i = d - e,
                        j = d + e;
                    if (g > i && (j += g - i, i = g), j > h) {
                        var l = i - g,
                            o = j - h;
                        i -= l > o ? o : l, j = h
                    }
                    return f.node("select", f.group({
                        min: i,
                        max: j,
                        i: 1,
                        node: "option",
                        item: function(a) {
                            return [a, 0, "value=" + a + (d == a ? " selected" : "")]
                        }
                    }), c.klass.selectYear, (a ? "" : "disabled") + " " + f.ariaAttr({
                        controls: b.$node[0].id + "_table"
                    }) + ' title="' + c.labelYearSelect + '"')
                }
                return f.node("div", d, c.klass.year)
            };
        return f.node("div", (c.selectYears ? r() + q() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({
            min: 0,
            max: e - 1,
            i: 1,
            node: "tr",
            item: function(a) {
                var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day ? -7 : 0;
                return [f.group({
                    min: d * a - k.day + e + 1,
                    max: function() {
                        return this.min + d - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(a) {
                        a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);
                        var d = i && i.pick == a.pick,
                            e = j && j.pick == a.pick,
                            g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick,
                            o = f.trigger(b.formats.toString, b, [c.format, a]);
                        return [f.node("div", a.date, function(b) {
                            return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ")
                        }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({
                            role: "gridcell",
                            label: o,
                            selected: d && b.$node.val() === o ? !0 : null,
                            activedescendant: e ? !0 : null,
                            disabled: g ? !0 : null
                        })), "", f.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({
            role: "grid",
            controls: b.$node[0].id,
            readonly: !0
        })) + f.node("div", f.node("button", c.today, c.klass.buttonToday, "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })) + f.node("button", c.clear, c.klass.buttonClear, "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })) + f.node("button", c.close, c.klass.buttonClose, "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })), c.klass.footer)
    }, c.defaults = function(a) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: a + "table",
                header: a + "header",
                navPrev: a + "nav--prev",
                navNext: a + "nav--next",
                navDisabled: a + "nav--disabled",
                month: a + "month",
                year: a + "year",
                selectMonth: a + "select--month",
                selectYear: a + "select--year",
                weekdays: a + "weekday",
                day: a + "day",
                disabled: a + "day--disabled",
                selected: a + "day--selected",
                highlighted: a + "day--highlighted",
                now: a + "day--today",
                infocus: a + "day--infocus",
                outfocus: a + "day--outfocus",
                footer: a + "footer",
                buttonClear: a + "button--clear",
                buttonToday: a + "button--today",
                buttonClose: a + "button--close"
            }
        }
    }(a.klasses().picker + "__"), a.extend("pickadate", c)
}), [].map || (Array.prototype.map = function(a, b) {
    for (var c = this, d = c.length, e = new Array(d), f = 0; d > f; f++) f in c && (e[f] = a.call(b, c[f], f, c));
    return e
}), [].filter || (Array.prototype.filter = function(a) {
    if (null == this) throw new TypeError;
    var b = Object(this),
        c = b.length >>> 0;
    if ("function" != typeof a) throw new TypeError;
    for (var d = [], e = arguments[1], f = 0; c > f; f++)
        if (f in b) {
            var g = b[f];
            a.call(e, g, f, b) && d.push(g)
        }
    return d
}), [].indexOf || (Array.prototype.indexOf = function(a) {
    if (null == this) throw new TypeError;
    var b = Object(this),
        c = b.length >>> 0;
    if (0 === c) return -1;
    var d = 0;
    if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
    for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
        if (e in b && b[e] === a) return e;
    return -1
});
var nativeSplit = String.prototype.split,
    compliantExecNpcg = void 0 === /()??/.exec("")[1];
String.prototype.split = function(a, b) {
        var c = this;
        if ("[object RegExp]" !== Object.prototype.toString.call(a)) return nativeSplit.call(c, a, b);
        var d, e, f, g, h = [],
            i = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.extended ? "x" : "") + (a.sticky ? "y" : ""),
            j = 0;
        for (a = new RegExp(a.source, i + "g"), c += "", compliantExecNpcg || (d = new RegExp("^" + a.source + "$(?!\\s)", i)), b = void 0 === b ? -1 >>> 0 : b >>> 0;
            (e = a.exec(c)) && (f = e.index + e[0].length, !(f > j && (h.push(c.slice(j, e.index)), !compliantExecNpcg && e.length > 1 && e[0].replace(d, function() {
                for (var a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (e[a] = void 0)
            }), e.length > 1 && e.index < c.length && Array.prototype.push.apply(h, e.slice(1)), g = e[0].length, j = f, h.length >= b)));) a.lastIndex === e.index && a.lastIndex++;
        return j === c.length ? (g || !a.test("")) && h.push("") : h.push(c.slice(j)), h.length > b ? h.slice(0, b) : h
    },
    function(a, b) {
        "function" == typeof define && define.amd ? define("sifter", b) : "object" == typeof exports ? module.exports = b() : a.Sifter = b()
    }(this, function() {
        var a = function(a, b) {
            this.items = a, this.settings = b || {
                diacritics: !0
            }
        };
        a.prototype.tokenize = function(a) {
            if (a = d(String(a || "").toLowerCase()), !a || !a.length) return [];
            var b, c, f, h, i = [],
                j = a.split(/ +/);
            for (b = 0, c = j.length; c > b; b++) {
                if (f = e(j[b]), this.settings.diacritics)
                    for (h in g) g.hasOwnProperty(h) && (f = f.replace(new RegExp(h, "g"), g[h]));
                i.push({
                    string: j[b],
                    regex: new RegExp(f, "i")
                })
            }
            return i
        }, a.prototype.iterator = function(a, b) {
            var c;
            c = f(a) ? Array.prototype.forEach || function(a) {
                for (var b = 0, c = this.length; c > b; b++) a(this[b], b, this)
            } : function(a) {
                for (var b in this) this.hasOwnProperty(b) && a(this[b], b, this)
            }, c.apply(a, [b])
        }, a.prototype.getScoreFunction = function(a, b) {
            var c, d, e, f;
            c = this, a = c.prepareSearch(a, b), e = a.tokens, d = a.options.fields, f = e.length;
            var g = function(a, b) {
                    var c, d;
                    return a ? (a = String(a || ""), d = a.search(b.regex), -1 === d ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0
                },
                h = function() {
                    var a = d.length;
                    return a ? 1 === a ? function(a, b) {
                        return g(b[d[0]], a)
                    } : function(b, c) {
                        for (var e = 0, f = 0; a > e; e++) f += g(c[d[e]], b);
                        return f / a
                    } : function() {
                        return 0
                    }
                }();
            return f ? 1 === f ? function(a) {
                return h(e[0], a)
            } : "and" === a.options.conjunction ? function(a) {
                for (var b, c = 0, d = 0; f > c; c++) {
                    if (b = h(e[c], a), 0 >= b) return 0;
                    d += b
                }
                return d / f
            } : function(a) {
                for (var b = 0, c = 0; f > b; b++) c += h(e[b], a);
                return c / f
            } : function() {
                return 0
            }
        }, a.prototype.getSortFunction = function(a, c) {
            var d, e, f, g, h, i, j, k, l, m, n;
            if (f = this, a = f.prepareSearch(a, c), n = !a.query && c.sort_empty || c.sort, l = function(a, b) {
                    return "$score" === a ? b.score : f.items[b.id][a]
                }, h = [], n)
                for (d = 0, e = n.length; e > d; d++)(a.query || "$score" !== n[d].field) && h.push(n[d]);
            if (a.query) {
                for (m = !0, d = 0, e = h.length; e > d; d++)
                    if ("$score" === h[d].field) {
                        m = !1;
                        break
                    }
                m && h.unshift({
                    field: "$score",
                    direction: "desc"
                })
            } else
                for (d = 0, e = h.length; e > d; d++)
                    if ("$score" === h[d].field) {
                        h.splice(d, 1);
                        break
                    } for (k = [], d = 0, e = h.length; e > d; d++) k.push("desc" === h[d].direction ? -1 : 1);
            return i = h.length, i ? 1 === i ? (g = h[0].field, j = k[0], function(a, c) {
                return j * b(l(g, a), l(g, c))
            }) : function(a, c) {
                var d, e, f;
                for (d = 0; i > d; d++)
                    if (f = h[d].field, e = k[d] * b(l(f, a), l(f, c))) return e;
                return 0
            } : null
        }, a.prototype.prepareSearch = function(a, b) {
            if ("object" == typeof a) return a;
            b = c({}, b);
            var d = b.fields,
                e = b.sort,
                g = b.sort_empty;
            return d && !f(d) && (b.fields = [d]), e && !f(e) && (b.sort = [e]), g && !f(g) && (b.sort_empty = [g]), {
                options: b,
                query: String(a || "").toLowerCase(),
                tokens: this.tokenize(a),
                total: 0,
                items: []
            }
        }, a.prototype.search = function(a, b) {
            var c, d, e, f, g = this;
            return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function(a, e) {
                c = f(a), (b.filter === !1 || c > 0) && d.items.push({
                    score: c,
                    id: e
                })
            }) : g.iterator(g.items, function(a, b) {
                d.items.push({
                    score: 1,
                    id: b
                })
            }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d
        };
        var b = function(a, b) {
                return "number" == typeof a && "number" == typeof b ? a > b ? 1 : b > a ? -1 : 0 : (a = h(String(a || "")), b = h(String(b || "")), a > b ? 1 : b > a ? -1 : 0)
            },
            c = function(a, b) {
                var c, d, e, f;
                for (c = 1, d = arguments.length; d > c; c++)
                    if (f = arguments[c])
                        for (e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
                return a
            },
            d = function(a) {
                return (a + "").replace(/^\s+|\s+$|/g, "")
            },
            e = function(a) {
                return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            },
            f = Array.isArray || $ && $.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            g = {
                a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
                c: "[cÇçćĆčČ]",
                d: "[dđĐďĎ]",
                e: "[eÈÉÊËèéêëěĚĒēęĘ]",
                i: "[iÌÍÎÏìíîïĪī]",
                l: "[lłŁ]",
                n: "[nÑñňŇńŃ]",
                o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
                r: "[rřŘ]",
                s: "[sŠšśŚ]",
                t: "[tťŤ]",
                u: "[uÙÚÛÜùúûüůŮŪū]",
                y: "[yŸÿýÝ]",
                z: "[zŽžżŻźŹ]"
            },
            h = function() {
                var a, b, c, d, e = "",
                    f = {};
                for (c in g)
                    if (g.hasOwnProperty(c))
                        for (d = g[c].substring(2, g[c].length - 1), e += d, a = 0, b = d.length; b > a; a++) f[d.charAt(a)] = c;
                var h = new RegExp("[" + e + "]", "g");
                return function(a) {
                    return a.replace(h, function(a) {
                        return f[a]
                    }).toLowerCase()
                }
            }();
        return a
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("microplugin", b) : "object" == typeof exports ? module.exports = b() : a.MicroPlugin = b()
    }(this, function() {
        var a = {};
        a.mixin = function(a) {
            a.plugins = {}, a.prototype.initializePlugins = function(a) {
                var c, d, e, f = this,
                    g = [];
                if (f.plugins = {
                        names: [],
                        settings: {},
                        requested: {},
                        loaded: {}
                    }, b.isArray(a))
                    for (c = 0, d = a.length; d > c; c++) "string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name));
                else if (a)
                    for (e in a) a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
                for (; g.length;) f.require(g.shift())
            }, a.prototype.loadPlugin = function(b) {
                var c = this,
                    d = c.plugins,
                    e = a.plugins[b];
                if (!a.plugins.hasOwnProperty(b)) throw new Error('Unable to find "' + b + '" plugin');
                d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b)
            }, a.prototype.require = function(a) {
                var b = this,
                    c = b.plugins;
                if (!b.plugins.loaded.hasOwnProperty(a)) {
                    if (c.requested[a]) throw new Error('Plugin has circular dependency ("' + a + '")');
                    b.loadPlugin(a)
                }
                return c.loaded[a]
            }, a.define = function(b, c) {
                a.plugins[b] = {
                    name: b,
                    fn: c
                }
            }
        };
        var b = {
            isArray: Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }
        };
        return a
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], b) : "object" == typeof exports ? module.exports = b(require("jquery"), require("sifter"), require("microplugin")) : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin)
    }(this, function(a, b, c) {
        "use strict";
        var d = function(a, b) {
                if ("string" != typeof b || b.length) {
                    var c = "string" == typeof b ? new RegExp(b, "i") : b,
                        d = function(a) {
                            var b = 0;
                            if (3 === a.nodeType) {
                                var e = a.data.search(c);
                                if (e >= 0 && a.data.length > 0) {
                                    var f = a.data.match(c),
                                        g = document.createElement("span");
                                    g.className = "highlight";
                                    var h = a.splitText(e),
                                        i = (h.splitText(f[0].length), h.cloneNode(!0));
                                    g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1
                                }
                            } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName))
                                for (var j = 0; j < a.childNodes.length; ++j) j += d(a.childNodes[j]);
                            return b
                        };
                    return a.each(function() {
                        d(this)
                    })
                }
            },
            e = function() {};
        e.prototype = {
            on: function(a, b) {
                this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b)
            },
            off: function(a, b) {
                var c = arguments.length;
                return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void(a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)))
            },
            trigger: function(a) {
                if (this._events = this._events || {}, a in this._events != !1)
                    for (var b = 0; b < this._events[a].length; b++) this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }, e.mixin = function(a) {
            for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++) a.prototype[b[c]] = e.prototype[b[c]]
        };
        var f = /Mac/.test(navigator.userAgent),
            g = 65,
            h = 13,
            i = 27,
            j = 37,
            k = 38,
            l = 80,
            m = 39,
            n = 40,
            o = 78,
            p = 8,
            q = 46,
            r = 16,
            s = f ? 91 : 17,
            t = f ? 18 : 17,
            u = 9,
            v = 1,
            w = 2,
            x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("form").validity,
            y = function(a) {
                return "undefined" != typeof a
            },
            z = function(a) {
                return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + ""
            },
            A = function(a) {
                return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            },
            B = function(a) {
                return (a + "").replace(/\$/g, "$$$$")
            },
            C = {};
        C.before = function(a, b, c) {
            var d = a[b];
            a[b] = function() {
                return c.apply(a, arguments), d.apply(a, arguments)
            }
        }, C.after = function(a, b, c) {
            var d = a[b];
            a[b] = function() {
                var b = d.apply(a, arguments);
                return c.apply(a, arguments), b
            }
        };
        var D = function(a) {
                var b = !1;
                return function() {
                    b || (b = !0, a.apply(this, arguments))
                }
            },
            E = function(a, b) {
                var c;
                return function() {
                    var d = this,
                        e = arguments;
                    window.clearTimeout(c), c = window.setTimeout(function() {
                        a.apply(d, e)
                    }, b)
                }
            },
            F = function(a, b, c) {
                var d, e = a.trigger,
                    f = {};
                a.trigger = function() {
                    var c = arguments[0];
                    return -1 === b.indexOf(c) ? e.apply(a, arguments) : void(f[c] = arguments)
                }, c.apply(a, []), a.trigger = e;
                for (d in f) f.hasOwnProperty(d) && e.apply(a, f[d])
            },
            G = function(a, b, c, d) {
                a.on(b, c, function(b) {
                    for (var c = b.target; c && c.parentNode !== a[0];) c = c.parentNode;
                    return b.currentTarget = c, d.apply(this, [b])
                })
            },
            H = function(a) {
                var b = {};
                if ("selectionStart" in a) b.start = a.selectionStart, b.length = a.selectionEnd - b.start;
                else if (document.selection) {
                    a.focus();
                    var c = document.selection.createRange(),
                        d = document.selection.createRange().text.length;
                    c.moveStart("character", -a.value.length), b.start = c.text.length - d,
                        b.length = d
                }
                return b
            },
            I = function(a, b, c) {
                var d, e, f = {};
                if (c)
                    for (d = 0, e = c.length; e > d; d++) f[c[d]] = a.css(c[d]);
                else f = a.css();
                b.css(f)
            },
            J = function(b, c) {
                if (!b) return 0;
                var d = a("<test>").css({
                    position: "absolute",
                    top: -99999,
                    left: -99999,
                    width: "auto",
                    padding: 0,
                    whiteSpace: "pre"
                }).text(b).appendTo("body");
                I(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                var e = d.width();
                return d.remove(), e
            },
            K = function(a) {
                var b = null,
                    c = function(c, d) {
                        var e, f, g, h, i, j, k, l;
                        c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && 122 >= f || f >= 65 && 90 >= f || f >= 48 && 57 >= f || 32 === f, f === q || f === p ? (l = H(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = J(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")))
                    };
                a.on("keydown keyup update blur", c), c()
            },
            L = function(c, d) {
                var e, f, g, h, i = this;
                h = c[0], h.selectize = i;
                var j = window.getComputedStyle && window.getComputedStyle(h, null);
                if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, {
                        order: 0,
                        settings: d,
                        $input: c,
                        tabIndex: c.attr("tabindex") || "",
                        tagType: "select" === h.tagName.toLowerCase() ? v : w,
                        rtl: /rtl/i.test(g),
                        eventNS: ".selectize" + ++L.count,
                        highlightedValue: null,
                        isOpen: !1,
                        isDisabled: !1,
                        isRequired: c.is("[required]"),
                        isInvalid: !1,
                        isLocked: !1,
                        isFocused: !1,
                        isInputHidden: !1,
                        isSetup: !1,
                        isShiftDown: !1,
                        isCmdDown: !1,
                        isCtrlDown: !1,
                        ignoreFocus: !1,
                        ignoreBlur: !1,
                        ignoreHover: !1,
                        hasOptions: !1,
                        currentResults: null,
                        lastValue: "",
                        caretPos: 0,
                        loading: 0,
                        loadedSearches: {},
                        $activeOption: null,
                        $activeItems: [],
                        optgroups: {},
                        options: {},
                        userOptions: {},
                        items: [],
                        renderCache: {},
                        onSearchChange: null === d.loadThrottle ? i.onSearchChange : E(i.onSearchChange, d.loadThrottle)
                    }), i.sifter = new b(this.options, {
                        diacritics: d.diacritics
                    }), i.settings.options) {
                    for (e = 0, f = i.settings.options.length; f > e; e++) i.registerOption(i.settings.options[e]);
                    delete i.settings.options
                }
                if (i.settings.optgroups) {
                    for (e = 0, f = i.settings.optgroups.length; f > e; e++) i.registerOptionGroup(i.settings.optgroups[e]);
                    delete i.settings.optgroups
                }
                i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup()
            };
        return e.mixin(L), c.mixin(L), a.extend(L.prototype, {
            setup: function() {
                var b, c, d, e, g, h, i, j, k, l = this,
                    m = l.settings,
                    n = l.eventNS,
                    o = a(window),
                    p = a(document),
                    q = l.$input;
                if (i = l.settings.mode, j = q.attr("class") || "", b = a("<div>").addClass(m.wrapperClass).addClass(j).addClass(i), c = a("<div>").addClass(m.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", q.is(":disabled") ? "-1" : l.tabIndex), h = a(m.dropdownParent || b), e = a("<div>").addClass(m.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(m.dropdownContentClass).appendTo(e), l.settings.copyClassesToDropdown && e.addClass(j), b.css({
                        width: q[0].style.width
                    }), l.plugins.names.length && (k = "plugin-" + l.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === m.maxItems || m.maxItems > 1) && l.tagType === v && q.attr("multiple", "multiple"), l.settings.placeholder && d.attr("placeholder", m.placeholder), !l.settings.splitOn && l.settings.delimiter) {
                    var u = l.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                    l.settings.splitOn = new RegExp("\\s*" + u + "+\\s*")
                }
                q.attr("autocorrect") && d.attr("autocorrect", q.attr("autocorrect")), q.attr("autocapitalize") && d.attr("autocapitalize", q.attr("autocapitalize")), l.$wrapper = b, l.$control = c, l.$control_input = d, l.$dropdown = e, l.$dropdown_content = g, e.on("mouseenter", "[data-selectable]", function() {
                    return l.onOptionHover.apply(l, arguments)
                }), e.on("mousedown click", "[data-selectable]", function() {
                    return l.onOptionSelect.apply(l, arguments)
                }), G(c, "mousedown", "*:not(input)", function() {
                    return l.onItemSelect.apply(l, arguments)
                }), K(d), c.on({
                    mousedown: function() {
                        return l.onMouseDown.apply(l, arguments)
                    },
                    click: function() {
                        return l.onClick.apply(l, arguments)
                    }
                }), d.on({
                    mousedown: function(a) {
                        a.stopPropagation()
                    },
                    keydown: function() {
                        return l.onKeyDown.apply(l, arguments)
                    },
                    keyup: function() {
                        return l.onKeyUp.apply(l, arguments)
                    },
                    keypress: function() {
                        return l.onKeyPress.apply(l, arguments)
                    },
                    resize: function() {
                        l.positionDropdown.apply(l, [])
                    },
                    blur: function() {
                        return l.onBlur.apply(l, arguments)
                    },
                    focus: function() {
                        return l.ignoreBlur = !1, l.onFocus.apply(l, arguments)
                    },
                    paste: function() {
                        return l.onPaste.apply(l, arguments)
                    }
                }), p.on("keydown" + n, function(a) {
                    l.isCmdDown = a[f ? "metaKey" : "ctrlKey"], l.isCtrlDown = a[f ? "altKey" : "ctrlKey"], l.isShiftDown = a.shiftKey
                }), p.on("keyup" + n, function(a) {
                    a.keyCode === t && (l.isCtrlDown = !1), a.keyCode === r && (l.isShiftDown = !1), a.keyCode === s && (l.isCmdDown = !1)
                }), p.on("mousedown" + n, function(a) {
                    if (l.isFocused) {
                        if (a.target === l.$dropdown[0] || a.target.parentNode === l.$dropdown[0]) return !1;
                        l.$control.has(a.target).length || a.target === l.$control[0] || l.blur(a.target)
                    }
                }), o.on(["scroll" + n, "resize" + n].join(" "), function() {
                    l.isOpen && l.positionDropdown.apply(l, arguments)
                }), o.on("mousemove" + n, function() {
                    l.ignoreHover = !1
                }), this.revertSettings = {
                    $children: q.children().detach(),
                    tabindex: q.attr("tabindex")
                }, q.attr("tabindex", -1).hide().after(l.$wrapper), a.isArray(m.items) && (l.setValue(m.items), delete m.items), x && q.on("invalid" + n, function(a) {
                    a.preventDefault(), l.isInvalid = !0, l.refreshState()
                }), l.updateOriginalInput(), l.refreshItems(), l.refreshState(), l.updatePlaceholder(), l.isSetup = !0, q.is(":disabled") && l.disable(), l.on("change", this.onChange), q.data("selectize", l), q.addClass("selectized"), l.trigger("initialize"), m.preload === !0 && l.onSearchChange("")
            },
            setupTemplates: function() {
                var b = this,
                    c = b.settings.labelField,
                    d = b.settings.optgroupLabelField,
                    e = {
                        optgroup: function(a) {
                            return '<div class="optgroup">' + a.html + "</div>"
                        },
                        optgroup_header: function(a, b) {
                            return '<div class="optgroup-header">' + b(a[d]) + "</div>"
                        },
                        option: function(a, b) {
                            return '<div class="option">' + b(a[c]) + "</div>"
                        },
                        item: function(a, b) {
                            return '<div class="item">' + b(a[c]) + "</div>"
                        },
                        option_create: function(a, b) {
                            return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"
                        }
                    };
                b.settings.render = a.extend({}, e, b.settings.render)
            },
            setupCallbacks: function() {
                var a, b, c = {
                    initialize: "onInitialize",
                    change: "onChange",
                    item_add: "onItemAdd",
                    item_remove: "onItemRemove",
                    clear: "onClear",
                    option_add: "onOptionAdd",
                    option_remove: "onOptionRemove",
                    option_clear: "onOptionClear",
                    optgroup_add: "onOptionGroupAdd",
                    optgroup_remove: "onOptionGroupRemove",
                    optgroup_clear: "onOptionGroupClear",
                    dropdown_open: "onDropdownOpen",
                    dropdown_close: "onDropdownClose",
                    type: "onType",
                    load: "onLoad",
                    focus: "onFocus",
                    blur: "onBlur"
                };
                for (a in c) c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b))
            },
            onClick: function(a) {
                var b = this;
                b.isFocused || (b.focus(), a.preventDefault())
            },
            onMouseDown: function(b) {
                var c = this,
                    d = b.isDefaultPrevented();
                a(b.target);
                if (c.isFocused) {
                    if (b.target !== c.$control_input[0]) return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1
                } else d || window.setTimeout(function() {
                    c.focus()
                }, 0)
            },
            onChange: function() {
                this.$input.trigger("change")
            },
            onPaste: function(b) {
                var c = this;
                c.isFull() || c.isInputHidden || c.isLocked ? b.preventDefault() : c.settings.splitOn && setTimeout(function() {
                    for (var b = a.trim(c.$control_input.val() || "").split(c.settings.splitOn), d = 0, e = b.length; e > d; d++) c.createItem(b[d])
                }, 0)
            },
            onKeyPress: function(a) {
                if (this.isLocked) return a && a.preventDefault();
                var b = String.fromCharCode(a.keyCode || a.which);
                return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0
            },
            onKeyDown: function(a) {
                var b = (a.target === this.$control_input[0], this);
                if (b.isLocked) return void(a.keyCode !== u && a.preventDefault());
                switch (a.keyCode) {
                    case g:
                        if (b.isCmdDown) return void b.selectAll();
                        break;
                    case i:
                        return void(b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
                    case o:
                        if (!a.ctrlKey || a.altKey) break;
                    case n:
                        if (!b.isOpen && b.hasOptions) b.open();
                        else if (b.$activeOption) {
                            b.ignoreHover = !0;
                            var c = b.getAdjacentOption(b.$activeOption, 1);
                            c.length && b.setActiveOption(c, !0, !0)
                        }
                        return void a.preventDefault();
                    case l:
                        if (!a.ctrlKey || a.altKey) break;
                    case k:
                        if (b.$activeOption) {
                            b.ignoreHover = !0;
                            var d = b.getAdjacentOption(b.$activeOption, -1);
                            d.length && b.setActiveOption(d, !0, !0)
                        }
                        return void a.preventDefault();
                    case h:
                        return void(b.isOpen && b.$activeOption && (b.onOptionSelect({
                            currentTarget: b.$activeOption
                        }), a.preventDefault()));
                    case j:
                        return void b.advanceSelection(-1, a);
                    case m:
                        return void b.advanceSelection(1, a);
                    case u:
                        return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({
                            currentTarget: b.$activeOption
                        }), b.isFull() || a.preventDefault()), void(b.settings.create && b.createItem() && a.preventDefault());
                    case p:
                    case q:
                        return void b.deleteSelection(a)
                }
                return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault()
            },
            onKeyUp: function(a) {
                var b = this;
                if (b.isLocked) return a && a.preventDefault();
                var c = b.$control_input.val() || "";
                b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c))
            },
            onSearchChange: function(a) {
                var b = this,
                    c = b.settings.load;
                c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function(d) {
                    c.apply(b, [a, d])
                })))
            },
            onFocus: function(a) {
                var b = this,
                    c = b.isFocused;
                return b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void(b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()))
            },
            onBlur: function(a, b) {
                var c = this;
                if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
                    if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0]) return c.ignoreBlur = !0, void c.onFocus(a);
                    var d = function() {
                        c.close(), c.setTextboxValue(""), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), (b || document.body).focus(), c.ignoreFocus = !1, c.trigger("blur")
                    };
                    c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d()
                }
            },
            onOptionHover: function(a) {
                this.ignoreHover || this.setActiveOption(a.currentTarget, !1)
            },
            onOptionSelect: function(b) {
                var c, d, e = this;
                b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function() {
                    e.settings.closeAfterSelect && e.close()
                }) : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))))
            },
            onItemSelect: function(a) {
                var b = this;
                b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a))
            },
            load: function(a) {
                var b = this,
                    c = b.$wrapper.addClass(b.settings.loadingClass);
                b.loading++, a.apply(b, [function(a) {
                    b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a)
                }])
            },
            setTextboxValue: function(a) {
                var b = this.$control_input,
                    c = b.val() !== a;
                c && (b.val(a).triggerHandler("update"), this.lastValue = a)
            },
            getValue: function() {
                return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
            },
            setValue: function(a, b) {
                var c = b ? [] : ["change"];
                F(this, c, function() {
                    this.clear(b), this.addItems(a, b)
                })
            },
            setActiveItem: function(b, c) {
                var d, e, f, g, h, i, j, k, l = this;
                if ("single" !== l.settings.mode) {
                    if (b = a(b), !b.length) return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void(l.isFocused && l.showInput());
                    if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
                        for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; h >= e; e++) i = l.$control[0].childNodes[e], -1 === l.$activeItems.indexOf(i) && (a(i).addClass("active"), l.$activeItems.push(i));
                        c.preventDefault()
                    } else "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
                    l.hideInput(), this.isFocused || l.focus()
                }
            },
            setActiveOption: function(b, c, d) {
                var e, f, g, h, i, j = this;
                j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, b = a(b), b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({
                    scrollTop: i
                }, d ? j.settings.scrollDuration : 0) : c > g && j.$dropdown_content.stop().animate({
                    scrollTop: h
                }, d ? j.settings.scrollDuration : 0)))
            },
            selectAll: function() {
                var a = this;
                "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus())
            },
            hideInput: function() {
                var a = this;
                a.setTextboxValue(""), a.$control_input.css({
                    opacity: 0,
                    position: "absolute",
                    left: a.rtl ? 1e4 : -1e4
                }), a.isInputHidden = !0
            },
            showInput: function() {
                this.$control_input.css({
                    opacity: 1,
                    position: "relative",
                    left: 0
                }), this.isInputHidden = !1
            },
            focus: function() {
                var a = this;
                a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function() {
                    a.ignoreFocus = !1, a.onFocus()
                }, 0))
            },
            blur: function(a) {
                this.$control_input[0].blur(), this.onBlur(null, a)
            },
            getScoreFunction: function(a) {
                return this.sifter.getScoreFunction(a, this.getSearchOptions())
            },
            getSearchOptions: function() {
                var a = this.settings,
                    b = a.sortField;
                return "string" == typeof b && (b = [{
                    field: b
                }]), {
                    fields: a.searchField,
                    conjunction: a.searchConjunction,
                    sort: b
                }
            },
            search: function(b) {
                var c, d, e, f = this,
                    g = f.settings,
                    h = this.getSearchOptions();
                if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');
                if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {
                        score: e
                    })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected)
                    for (c = d.items.length - 1; c >= 0; c--) - 1 !== f.items.indexOf(z(d.items[c].id)) && d.items.splice(c, 1);
                return d
            },
            refreshOptions: function(b) {
                var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
                "undefined" == typeof b && (b = !0);
                var t = this,
                    u = a.trim(t.$control_input.val()),
                    v = t.search(u),
                    w = t.$dropdown_content,
                    x = t.$activeOption && z(t.$activeOption.attr("data-value"));
                for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; g > c; c++)
                    for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [l], e = 0, f = m && m.length; f > e; e++) l = m[e], t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = [], i.push(l)), h[l].push(k);
                for (this.settings.lockOptgroupOrder && i.sort(function(a, b) {
                        var c = t.optgroups[a].$order || 0,
                            d = t.optgroups[b].$order || 0;
                        return c - d
                    }), n = [], c = 0, g = i.length; g > c; c++) l = i[c], t.optgroups.hasOwnProperty(l) && h[l].length ? (o = t.render("optgroup_header", t.optgroups[l]) || "", o += h[l].join(""), n.push(t.render("optgroup", a.extend({}, t.optgroups[l], {
                    html: o
                })))) : n.push(h[l].join(""));
                if (w.html(n.join("")), t.settings.highlight && v.query.length && v.tokens.length)
                    for (c = 0, g = v.tokens.length; g > c; c++) d(w, v.tokens[c].regex);
                if (!t.settings.hideSelected)
                    for (c = 0, g = t.items.length; g > c; c++) t.getOption(t.items[c]).addClass("selected");
                p = t.canCreate(u), p && (w.prepend(t.render("option_create", {
                    input: u
                })), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close())
            },
            addOption: function(b) {
                var c, d, e, f = this;
                if (a.isArray(b))
                    for (c = 0, d = b.length; d > c; c++) f.addOption(b[c]);
                else(e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b))
            },
            registerOption: function(a) {
                var b = z(a[this.settings.valueField]);
                return !b || this.options.hasOwnProperty(b) ? !1 : (a.$order = a.$order || ++this.order, this.options[b] = a, b)
            },
            registerOptionGroup: function(a) {
                var b = z(a[this.settings.optgroupValueField]);
                return b ? (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b) : !1
            },
            addOptionGroup: function(a, b) {
                b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b)
            },
            removeOptionGroup: function(a) {
                this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a))
            },
            clearOptionGroups: function() {
                this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
            },
            updateOption: function(b, c) {
                var d, e, f, g, h, i, j, k = this;
                if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
                    if ("string" != typeof f) throw new Error("Value must be set in option data");
                    j = k.options[b].$order, f !== b && (delete k.options[b], g = k.items.indexOf(b), -1 !== g && k.items.splice(g, 1, f)), c.$order = c.$order || j, k.options[f] = c, h = k.renderCache.item, i = k.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), -1 !== k.items.indexOf(f) && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), k.lastQuery = null, k.isOpen && k.refreshOptions(!1)
                }
            },
            removeOption: function(a, b) {
                var c = this;
                a = z(a);
                var d = c.renderCache.item,
                    e = c.renderCache.option;
                d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b)
            },
            clearOptions: function() {
                var a = this;
                a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, a.lastQuery = null, a.trigger("option_clear"), a.clear()
            },
            getOption: function(a) {
                return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"))
            },
            getAdjacentOption: function(b, c) {
                var d = this.$dropdown.find("[data-selectable]"),
                    e = d.index(b) + c;
                return e >= 0 && e < d.length ? d.eq(e) : a()
            },
            getElementWithValue: function(b, c) {
                if (b = z(b), "undefined" != typeof b && null !== b)
                    for (var d = 0, e = c.length; e > d; d++)
                        if (c[d].getAttribute("data-value") === b) return a(c[d]);
                return a()
            },
            getItem: function(a) {
                return this.getElementWithValue(a, this.$control.children())
            },
            addItems: function(b, c) {
                for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; f > e; e++) this.isPending = f - 1 > e, this.addItem(d[e], c)
            },
            addItem: function(b, c) {
                var d = c ? [] : ["change"];
                F(this, d, function() {
                    var d, e, f, g, h, i = this,
                        j = i.settings.mode;
                    return b = z(b), -1 !== i.items.indexOf(b) ? void("single" === j && i.close()) : void(i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({
                        silent: c
                    })))))
                })
            },
            removeItem: function(a, b) {
                var c, d, e, f = this;
                c = "object" == typeof a ? a : f.getItem(a), a = z(c.attr("data-value")), d = f.items.indexOf(a), -1 !== d && (c.remove(), c.hasClass("active") && (e = f.$activeItems.indexOf(c[0]), f.$activeItems.splice(e, 1)), f.items.splice(d, 1), f.lastQuery = null, !f.settings.persist && f.userOptions.hasOwnProperty(a) && f.removeOption(a, b), d < f.caretPos && f.setCaret(f.caretPos - 1), f.refreshState(), f.updatePlaceholder(), f.updateOriginalInput({
                    silent: b
                }), f.positionDropdown(), f.trigger("item_remove", a, c))
            },
            createItem: function(b, c) {
                var d = this,
                    e = d.caretPos;
                b = b || a.trim(d.$control_input.val() || "");
                var f = arguments[arguments.length - 1];
                if ("function" != typeof f && (f = function() {}), "boolean" != typeof c && (c = !0), !d.canCreate(b)) return f(), !1;
                d.lock();
                var g = "function" == typeof d.settings.create ? this.settings.create : function(a) {
                        var b = {};
                        return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b
                    },
                    h = D(function(a) {
                        if (d.unlock(), !a || "object" != typeof a) return f();
                        var b = z(a[d.settings.valueField]);
                        return "string" != typeof b ? f() : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a))
                    }),
                    i = g.apply(this, [b, h]);
                return "undefined" != typeof i && h(i), !0
            },
            refreshItems: function() {
                this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
            },
            refreshState: function() {
                var a, b = this;
                b.isRequired && (b.items.length && (b.isInvalid = !1), b.$control_input.prop("required", a)), b.refreshClasses()
            },
            refreshClasses: function() {
                var b = this,
                    c = b.isFull(),
                    d = b.isLocked;
                b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d)
            },
            isFull: function() {
                return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
            },
            updateOriginalInput: function(a) {
                var b, c, d, e, f = this;
                if (a = a || {}, f.tagType === v) {
                    for (d = [], b = 0, c = f.items.length; c > b; b++) e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
                    d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'), f.$input.html(d.join(""))
                } else f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());
                f.isSetup && (a.silent || f.trigger("change", f.$input.val()))
            },
            updatePlaceholder: function() {
                if (this.settings.placeholder) {
                    var a = this.$control_input;
                    this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", {
                        force: !0
                    })
                }
            },
            open: function() {
                var a = this;
                a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({
                    visibility: "hidden",
                    display: "block"
                }), a.positionDropdown(), a.$dropdown.css({
                    visibility: "visible"
                }), a.trigger("dropdown_open", a.$dropdown))
            },
            close: function() {
                var a = this,
                    b = a.isOpen;
                "single" === a.settings.mode && a.items.length && a.hideInput(), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown)
            },
            positionDropdown: function() {
                var a = this.$control,
                    b = "body" === this.settings.dropdownParent ? a.offset() : a.position();
                b.top += a.outerHeight(!0), this.$dropdown.css({
                    width: a.outerWidth(),
                    top: b.top,
                    left: b.left
                })
            },
            clear: function(a) {
                var b = this;
                b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({
                    silent: a
                }), b.refreshState(), b.showInput(), b.trigger("clear"))
            },
            insertAtCaret: function(b) {
                var c = Math.min(this.caretPos, this.items.length);
                0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), this.setCaret(c + 1)
            },
            deleteSelection: function(b) {
                var c, d, e, f, g, h, i, j, k, l = this;
                if (e = b && b.keyCode === p ? -1 : 1, f = H(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
                    for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; d > c; c++) g.push(a(l.$activeItems[c]).attr("data-value"));
                    b && (b.preventDefault(), b.stopPropagation())
                } else(l.isFocused || "single" === l.settings.mode) && l.items.length && (0 > e && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
                if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1) return !1;
                for ("undefined" != typeof h && l.setCaret(h); g.length;) l.removeItem(g.pop());
                return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0
            },
            advanceSelection: function(a, b) {
                var c, d, e, f, g, h, i = this;
                0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = H(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = 0 > a ? 0 === d.start && 0 === d.length : d.start === f, g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))))
            },
            advanceCaret: function(a, b) {
                var c, d, e = this;
                0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a))
            },
            setCaret: function(b) {
                var c = this;
                if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
                    var d, e, f, g;
                    for (f = c.$control.children(":not(input)"), d = 0, e = f.length; e > d; d++) g = a(f[d]).detach(), b > d ? c.$control_input.before(g) : c.$control.append(g)
                }
                c.caretPos = b
            },
            lock: function() {
                this.close(), this.isLocked = !0, this.refreshState()
            },
            unlock: function() {
                this.isLocked = !1, this.refreshState()
            },
            disable: function() {
                var a = this;
                a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock()
            },
            enable: function() {
                var a = this;
                a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock()
            },
            destroy: function() {
                var b = this,
                    c = b.eventNS,
                    d = b.revertSettings;
                b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({
                    tabindex: d.tabindex
                }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize
            },
            render: function(a, b) {
                var c, d, e = "",
                    f = !1,
                    g = this,
                    h = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
                return "option" !== a && "item" !== a || (c = z(b[g.settings.valueField]), f = !!c), f && (y(g.renderCache[a]) || (g.renderCache[a] = {}), g.renderCache[a].hasOwnProperty(c)) ? g.renderCache[a][c] : (e = g.settings.render[a].apply(this, [b, A]), "option" !== a && "option_create" !== a || (e = e.replace(h, "<$1 data-selectable")), "optgroup" === a && (d = b[g.settings.optgroupValueField] || "", e = e.replace(h, '<$1 data-group="' + B(A(d)) + '"')), "option" !== a && "item" !== a || (e = e.replace(h, '<$1 data-value="' + B(A(c || "")) + '"')), f && (g.renderCache[a][c] = e), e)
            },
            clearCache: function(a) {
                var b = this;
                "undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a]
            },
            canCreate: function(a) {
                var b = this;
                if (!b.settings.create) return !1;
                var c = b.settings.createFilter;
                return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a))
            }
        }), L.count = 0, L.defaults = {
            options: [],
            optgroups: [],
            plugins: [],
            delimiter: ",",
            splitOn: null,
            persist: !0,
            diacritics: !0,
            create: !1,
            createOnBlur: !1,
            createFilter: null,
            highlight: !0,
            openOnFocus: !0,
            maxOptions: 1e3,
            maxItems: null,
            hideSelected: null,
            addPrecedence: !1,
            selectOnTab: !1,
            preload: !1,
            allowEmptyOption: !1,
            closeAfterSelect: !1,
            scrollDuration: 60,
            loadThrottle: 300,
            loadingClass: "loading",
            dataAttr: "data-data",
            optgroupField: "optgroup",
            valueField: "value",
            labelField: "text",
            optgroupLabelField: "label",
            optgroupValueField: "value",
            lockOptgroupOrder: !1,
            sortField: "$order",
            searchField: ["text"],
            searchConjunction: "and",
            mode: null,
            wrapperClass: "selectize-control",
            inputClass: "selectize-input",
            dropdownClass: "selectize-dropdown",
            dropdownContentClass: "selectize-dropdown-content",
            dropdownParent: null,
            copyClassesToDropdown: !0,
            render: {}
        }, a.fn.selectize = function(b) {
            var c = a.fn.selectize.defaults,
                d = a.extend({}, c, b),
                e = d.dataAttr,
                f = d.labelField,
                g = d.valueField,
                h = d.optgroupField,
                i = d.optgroupLabelField,
                j = d.optgroupValueField,
                k = function(b, c) {
                    var h, i, j, k, l = b.attr(e);
                    if (l)
                        for (c.options = JSON.parse(l), h = 0, i = c.options.length; i > h; h++) c.items.push(c.options[h][g]);
                    else {
                        var m = a.trim(b.val() || "");
                        if (!d.allowEmptyOption && !m.length) return;
                        for (j = m.split(d.delimiter), h = 0, i = j.length; i > h; h++) k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
                        c.items = j
                    }
                },
                l = function(b, c) {
                    var k, l, m, n, o = c.options,
                        p = {},
                        q = function(a) {
                            var b = e && a.attr(e);
                            return "string" == typeof b && b.length ? JSON.parse(b) : null
                        },
                        r = function(b, e) {
                            b = a(b);
                            var i = z(b.attr("value"));
                            if (i || d.allowEmptyOption)
                                if (p.hasOwnProperty(i)) {
                                    if (e) {
                                        var j = p[i][h];
                                        j ? a.isArray(j) ? j.push(e) : p[i][h] = [j, e] : p[i][h] = e
                                    }
                                } else {
                                    var k = q(b) || {};
                                    k[f] = k[f] || b.text(), k[g] = k[g] || i, k[h] = k[h] || e, p[i] = k, o.push(k), b.is(":selected") && c.items.push(i)
                                }
                        },
                        s = function(b) {
                            var d, e, f, g, h;
                            for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; e > d; d++) r(h[d], f)
                        };
                    for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; l > k; k++) m = n[k].tagName.toLowerCase(), "optgroup" === m ? s(n[k]) : "option" === m && r(n[k])
                };
            return this.each(function() {
                if (!this.selectize) {
                    var e, f = a(this),
                        g = this.tagName.toLowerCase(),
                        h = f.attr("placeholder") || f.attr("data-placeholder");
                    h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
                    var i = {
                        placeholder: h,
                        options: [],
                        optgroups: [],
                        items: []
                    };
                    "select" === g ? l(f, i) : k(f, i), e = new L(f, a.extend(!0, {}, c, i, b))
                }
            })
        }, a.fn.selectize.defaults = L.defaults, a.fn.selectize.support = {
            validity: x
        }, L.define("drag_drop", function(b) {
            if (!a.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
            if ("multi" === this.settings.mode) {
                var c = this;
                c.lock = function() {
                    var a = c.lock;
                    return function() {
                        var b = c.$control.data("sortable");
                        return b && b.disable(), a.apply(c, arguments)
                    }
                }(), c.unlock = function() {
                    var a = c.unlock;
                    return function() {
                        var b = c.$control.data("sortable");
                        return b && b.enable(), a.apply(c, arguments)
                    }
                }(), c.setup = function() {
                    var b = c.setup;
                    return function() {
                        b.apply(this, arguments);
                        var d = c.$control.sortable({
                            items: "[data-value]",
                            forcePlaceholderSize: !0,
                            disabled: c.isLocked,
                            start: function(a, b) {
                                b.placeholder.css("width", b.helper.css("width")), d.css({
                                    overflow: "visible"
                                })
                            },
                            stop: function() {
                                d.css({
                                    overflow: "hidden"
                                });
                                var b = c.$activeItems ? c.$activeItems.slice() : null,
                                    e = [];
                                d.children("[data-value]").each(function() {
                                    e.push(a(this).attr("data-value"))
                                }), c.setValue(e), c.setActiveItem(b)
                            }
                        })
                    }
                }()
            }
        }), L.define("dropdown_header", function(b) {
            var c = this;
            b = a.extend({
                title: "Untitled",
                headerClass: "selectize-dropdown-header",
                titleRowClass: "selectize-dropdown-header-title",
                labelClass: "selectize-dropdown-header-label",
                closeClass: "selectize-dropdown-header-close",
                html: function(a) {
                    return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'
                }
            }, b), c.setup = function() {
                var d = c.setup;
                return function() {
                    d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header)
                }
            }()
        }), L.define("optgroup_columns", function(b) {
            var c = this;
            b = a.extend({
                equalizeWidth: !0,
                equalizeHeight: !0
            }, b), this.getAdjacentOption = function(b, c) {
                var d = b.closest("[data-group]").find("[data-selectable]"),
                    e = d.index(b) + c;
                return e >= 0 && e < d.length ? d.eq(e) : a()
            }, this.onKeyDown = function() {
                var a = c.onKeyDown;
                return function(b) {
                    var d, e, f, g;
                    return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void(e.length && this.setActiveOption(e)))
                }
            }();
            var d = function() {
                    var a, b = d.width,
                        c = document;
                    return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',
                        a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b
                },
                e = function() {
                    var e, f, g, h, i, j, k;
                    if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
                        if (b.equalizeHeight) {
                            for (g = 0, e = 0; f > e; e++) g = Math.max(g, k.eq(e).height());
                            k.css({
                                height: g
                            })
                        }
                        b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({
                            width: h
                        }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({
                            width: i
                        })))
                    }
                };
            (b.equalizeHeight || b.equalizeWidth) && (C.after(this, "positionDropdown", e), C.after(this, "refreshOptions", e))
        }), L.define("remove_button", function(b) {
            if ("single" !== this.settings.mode) {
                b = a.extend({
                    label: "&times;",
                    title: "Remove",
                    className: "remove",
                    append: !0
                }, b);
                var c = this,
                    d = '<a href="javascript:void(0)" class="' + b.className + '" tabindex="-1" title="' + A(b.title) + '">' + b.label + "</a>",
                    e = function(a, b) {
                        var c = a.search(/(<\/[^>]+>\s*)$/);
                        return a.substring(0, c) + b + a.substring(c)
                    };
                this.setup = function() {
                    var f = c.setup;
                    return function() {
                        if (b.append) {
                            var g = c.settings.render.item;
                            c.settings.render.item = function(a) {
                                return e(g.apply(this, arguments), d)
                            }
                        }
                        f.apply(this, arguments), this.$control.on("click", "." + b.className, function(b) {
                            if (b.preventDefault(), !c.isLocked) {
                                var d = a(b.currentTarget).parent();
                                c.setActiveItem(d), c.deleteSelection() && c.setCaret(c.items.length)
                            }
                        })
                    }
                }()
            }
        }), L.define("restore_on_backspace", function(a) {
            var b = this;
            a.text = a.text || function(a) {
                return a[this.settings.labelField]
            }, this.onKeyDown = function() {
                var c = b.onKeyDown;
                return function(b) {
                    var d, e;
                    return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments)
                }
            }()
        }), L
    }), ! function(a, b, c) {
        "use strict";

        function d(c) {
            if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
                for (var d in c.easing) W[d] = c.easing[d];
            ta = c.edgeStrategy || "set", ka = {
                beforerender: c.beforerender,
                render: c.render,
                keyframe: c.keyframe
            }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
                targetTop: ha.getScrollTop()
            }, Sa = (c.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
            })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function() {
                var a = e.clientWidth,
                    b = e.clientHeight;
                (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
            });
            var g = U();
            return function h() {
                $(), va = g(h)
            }(), ha
        }
        var e, f, g = {
                get: function() {
                    return ha
                },
                init: function(a) {
                    return ha || new d(a)
                },
                VERSION: "0.6.30"
            },
            h = Object.prototype.hasOwnProperty,
            i = a.Math,
            j = a.getComputedStyle,
            k = "touchstart",
            l = "touchmove",
            m = "touchcancel",
            n = "touchend",
            o = "skrollable",
            p = o + "-before",
            q = o + "-between",
            r = o + "-after",
            s = "skrollr",
            t = "no-" + s,
            u = s + "-desktop",
            v = s + "-mobile",
            w = "linear",
            x = 1e3,
            y = .004,
            z = "skrollr-body",
            A = 200,
            B = "start",
            C = "end",
            D = "center",
            E = "bottom",
            F = "___skrollable_id",
            G = /^(?:input|textarea|button|select)$/i,
            H = /^\s+|\s+$/g,
            I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            K = /^(@?[a-z\-]+)\[(\w+)\]$/,
            L = /-([a-z0-9_])/g,
            M = function(a, b) {
                return b.toUpperCase()
            },
            N = /[\-+]?[\d]*\.?[\d]+/g,
            O = /\{\?\}/g,
            P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            Q = /[a-z\-]+-gradient/g,
            R = "",
            S = "",
            T = function() {
                var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (j) {
                    var b = j(f, null);
                    for (var c in b)
                        if (R = c.match(a) || +c == c && b[c].match(a)) break;
                    if (!R) return void(R = S = "");
                    R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[R]) : S = "-" + R.toLowerCase() + "-"
                }
            },
            U = function() {
                var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                    c = Ha();
                return (Sa || !b) && (b = function(b) {
                    var d = Ha() - c,
                        e = i.max(0, 1e3 / 60 - d);
                    return a.setTimeout(function() {
                        c = Ha(), b()
                    }, e)
                }), b
            },
            V = function() {
                var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
                return (Sa || !b) && (b = function(b) {
                    return a.clearTimeout(b)
                }), b
            },
            W = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(a) {
                    return a
                },
                quadratic: function(a) {
                    return a * a
                },
                cubic: function(a) {
                    return a * a * a
                },
                swing: function(a) {
                    return -i.cos(a * i.PI) / 2 + .5
                },
                sqrt: function(a) {
                    return i.sqrt(a)
                },
                outCubic: function(a) {
                    return i.pow(a - 1, 3) + 1
                },
                bounce: function(a) {
                    var b;
                    if (.5083 >= a) b = 3;
                    else if (.8489 >= a) b = 9;
                    else if (.96208 >= a) b = 27;
                    else {
                        if (!(.99981 >= a)) return 1;
                        b = 91
                    }
                    return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
                }
            };
        d.prototype.refresh = function(a) {
            var d, e, f = !1;
            for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
                var g = a[d],
                    h = g,
                    i = [],
                    j = pa,
                    k = ta,
                    l = !1;
                if (f && F in g && delete g[F], g.attributes) {
                    for (var m = 0, n = g.attributes.length; n > m; m++) {
                        var p = g.attributes[m];
                        if ("data-anchor-target" !== p.name)
                            if ("data-smooth-scrolling" !== p.name)
                                if ("data-edge-strategy" !== p.name)
                                    if ("data-emit-events" !== p.name) {
                                        var q = p.name.match(I);
                                        if (null !== q) {
                                            var r = {
                                                props: p.value,
                                                element: g,
                                                eventType: p.name.replace(L, M)
                                            };
                                            i.push(r);
                                            var s = q[1];
                                            s && (r.constant = s.substr(1));
                                            var t = q[2];
                                            /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                            var u = q[3],
                                                v = q[4] || u;
                                            u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                                        }
                                    } else l = !0;
                        else k = p.value;
                        else j = "off" !== p.value;
                        else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
                    }
                    if (i.length) {
                        var w, x, y;
                        !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                            element: g,
                            styleAttr: w,
                            classAttr: x,
                            anchorTarget: h,
                            keyFrames: i,
                            smoothScrolling: j,
                            edgeStrategy: k,
                            emitEvents: l,
                            lastFrameIndex: -1
                        }, Ea(g, [o], [])
                    }
                }
            }
            for (Aa(), d = 0, e = a.length; e > d; d++) {
                var z = ia[a[d][F]];
                z !== c && (_(z), ba(z))
            }
            return ha
        }, d.prototype.relativeToAbsolute = function(a, b, c) {
            var d = e.clientHeight,
                f = a.getBoundingClientRect(),
                g = f.top,
                h = f.bottom - f.top;
            return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
        }, d.prototype.animateTo = function(a, b) {
            b = b || {};
            var d = Ha(),
                e = ha.getScrollTop(),
                f = b.duration === c ? x : b.duration;
            return oa = {
                startTop: e,
                topDiff: a - e,
                targetTop: a,
                duration: f,
                startTime: d,
                endTime: d + f,
                easing: W[b.easing || w],
                done: b.done
            }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
        }, d.prototype.stopAnimateTo = function() {
            oa && oa.done && oa.done.call(ha, !0), oa = c
        }, d.prototype.isAnimatingTo = function() {
            return !!oa
        }, d.prototype.isMobile = function() {
            return Sa
        }, d.prototype.setScrollTop = function(b, c) {
            return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
        }, d.prototype.getScrollTop = function() {
            return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
        }, d.prototype.getMaxScrollTop = function() {
            return Ja
        }, d.prototype.on = function(a, b) {
            return ka[a] = b, ha
        }, d.prototype.off = function(a) {
            return delete ka[a], ha
        }, d.prototype.destroy = function() {
            var a = V();
            a(va), ya(), Ea(e, [t], [s, u, v]);
            for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
            e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
        };
        var X = function() {
                var d, g, h, j, o, p, q, r, s, t, u, v;
                wa(e, [k, l, m, n].join(" "), function(a) {
                    var e = a.changedTouches[0];
                    for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
                    switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                        case k:
                            d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                            break;
                        case l:
                            G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                            break;
                        default:
                        case m:
                        case n:
                            var f = g - o,
                                w = h - p,
                                x = w * w + f * f;
                            if (49 > x) {
                                if (!G.test(d.tagName)) {
                                    d.focus();
                                    var y = b.createEvent("MouseEvents");
                                    y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                                }
                                return
                            }
                            d = c;
                            var z = r / v;
                            z = i.max(i.min(z, 3), -3);
                            var A = i.abs(z / na),
                                B = z * A + .5 * na * A * A,
                                C = ha.getScrollTop() - B,
                                D = 0;
                            C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                                easing: "outCubic",
                                duration: A
                            })
                    }
                }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
            },
            Y = function() {
                var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                    o = Ba();
                for (j = 0, k = ia.length; k > j; j++)
                    for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
                for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                    for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                    a.keyFrames.sort(Ia)
                }
            },
            Z = function(a, b) {
                for (var c = 0, d = ia.length; d > c; c++) {
                    var e, f, i = ia[c],
                        j = i.element,
                        k = i.smoothScrolling ? a : b,
                        l = i.keyFrames,
                        m = l.length,
                        n = l[0],
                        s = l[l.length - 1],
                        t = k < n.frame,
                        u = k > s.frame,
                        v = t ? n : s,
                        w = i.emitEvents,
                        x = i.lastFrameIndex;
                    if (t || u) {
                        if (t && -1 === i.edge || u && 1 === i.edge) continue;
                        switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                            case "reset":
                                fa(j);
                                continue;
                            case "ease":
                                k = v.frame;
                                break;
                            default:
                            case "set":
                                var y = v.props;
                                for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                                continue
                        }
                    } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
                    for (var z = 0; m - 1 > z; z++)
                        if (k >= l[z].frame && k <= l[z + 1].frame) {
                            var A = l[z],
                                B = l[z + 1];
                            for (e in A.props)
                                if (h.call(A.props, e)) {
                                    var C = (k - A.frame) / (B.frame - A.frame);
                                    C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                                }
                            w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                            break
                        }
                }
            },
            $ = function() {
                Qa && (Qa = !1, Aa());
                var a, b, d = ha.getScrollTop(),
                    e = Ha();
                if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
                else if (!sa) {
                    var f = ra.targetTop - d;
                    f && (ra = {
                        startTop: Ma,
                        topDiff: d - Ma,
                        targetTop: d,
                        startTime: Na,
                        endTime: Na + qa
                    }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
                }
                if (sa || Ma !== d) {
                    La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
                    var h = {
                            curTop: d,
                            lastTop: Ma,
                            maxTop: Ja,
                            direction: La
                        },
                        i = ka.beforerender && ka.beforerender.call(ha, h);
                    i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
                }
                Na = e
            },
            _ = function(a) {
                for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                    for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                        value: e,
                        easing: W[d]
                    };
                    h.props = i
                }
            },
            aa = function(a) {
                var b = [];
                return P.lastIndex = 0, a = a.replace(P, function(a) {
                    return a.replace(N, function(a) {
                        return a / 255 * 100 + "%"
                    })
                }), S && (Q.lastIndex = 0, a = a.replace(Q, function(a) {
                    return S + a
                })), a = a.replace(N, function(a) {
                    return b.push(+a), "{?}"
                }), b.unshift(a), b
            },
            ba = function(a) {
                var b, c, d = {};
                for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
                for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
            },
            ca = function(a, b) {
                var c;
                for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
                for (c in a.props) b[c] = a.props[c]
            },
            da = function(a, b, c) {
                var d, e = a.length;
                if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
                var f = [a[0]];
                for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
                return f
            },
            ea = function(a) {
                var b = 1;
                return O.lastIndex = 0, a[0].replace(O, function() {
                    return a[b++]
                })
            },
            fa = function(a, b) {
                a = [].concat(a);
                for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
            },
            ga = function() {
                ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
                var a = j(ja),
                    b = a.getPropertyValue("transform"),
                    c = a.getPropertyValue(S + "transform"),
                    d = b && "none" !== b || c && "none" !== c;
                d || (ua = "")
            };
        g.setStyle = function(a, b, c) {
            var d = a.style;
            if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
            else if ("float" === b) d.styleFloat = d.cssFloat = c;
            else try {
                R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
            } catch (e) {}
        };
        var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function(b, c, d) {
                var e = function(b) {
                    return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                        b.returnValue = !1, b.defaultPrevented = !0
                    }), d.call(this, b)
                };
                c = c.split(" ");
                for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
                    element: b,
                    name: f,
                    listener: d
                })
            },
            xa = g.removeEvent = function(a, b, c) {
                b = b.split(" ");
                for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
            },
            ya = function() {
                for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
                Ua = []
            },
            za = function(a, b, c) {
                ka.keyframe && ka.keyframe.call(ha, a, b, c)
            },
            Aa = function() {
                var a = ha.getScrollTop();
                Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
            },
            Ba = function() {
                var a, b, c = e.clientHeight,
                    d = {};
                for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
                return d
            },
            Ca = function() {
                var a, b = 0;
                return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
            },
            Da = function(b) {
                var c = "className";
                return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
            },
            Ea = function(b, d, e) {
                var f = "className";
                if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
                for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
                g = Fa(g);
                for (var j = 0, k = d.length; k > j; j++) - 1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
                b[f] = Fa(g)
            },
            Fa = function(a) {
                return a.replace(H, "")
            },
            Ga = function(a) {
                return " " + a + " "
            },
            Ha = Date.now || function() {
                return +new Date
            },
            Ia = function(a, b) {
                return a.frame - b.frame
            },
            Ja = 0,
            Ka = 1,
            La = "down",
            Ma = -1,
            Na = Ha(),
            Oa = 0,
            Pa = 0,
            Qa = !1,
            Ra = 0,
            Sa = !1,
            Ta = 0,
            Ua = [];
        "function" == typeof define && define.amd ? define([], function() {
            return g
        }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
    }(window, document),
    function(a, b) {
        "function" == typeof define && define.amd ? define([], b(a)) : "object" == typeof exports ? module.exports = b(a) : a.smoothScroll = b(a)
    }("undefined" != typeof global ? global : this.window || this.global, function(a) {
        "use strict";
        var b, c, d, e, f, g = {},
            h = "querySelector" in document && "addEventListener" in a,
            i = {
                selector: "[data-scroll]",
                selectorHeader: "[data-scroll-header]",
                speed: 500,
                easing: "easeInOutCubic",
                offset: 0,
                updateURL: !0,
                callback: function() {}
            },
            j = function() {
                var a = {},
                    b = !1,
                    c = 0,
                    d = arguments.length;
                "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (b = arguments[0], c++);
                for (var e = function(c) {
                        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (b && "[object Object]" === Object.prototype.toString.call(c[d]) ? a[d] = j(!0, a[d], c[d]) : a[d] = c[d])
                    }; d > c; c++) {
                    var f = arguments[c];
                    e(f)
                }
                return a
            },
            k = function(a) {
                return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight)
            },
            l = function(a, b) {
                var c, d, e = b.charAt(0),
                    f = "classList" in document.documentElement;
                for ("[" === e && (b = b.substr(1, b.length - 2), c = b.split("="), c.length > 1 && (d = !0, c[1] = c[1].replace(/"/g, "").replace(/'/g, ""))); a && a !== document && 1 === a.nodeType; a = a.parentNode) {
                    if ("." === e)
                        if (f) {
                            if (a.classList.contains(b.substr(1))) return a
                        } else if (new RegExp("(^|\\s)" + b.substr(1) + "(\\s|$)").test(a.className)) return a;
                    if ("#" === e && a.id === b.substr(1)) return a;
                    if ("[" === e && a.hasAttribute(c[0])) {
                        if (!d) return a;
                        if (a.getAttribute(c[0]) === c[1]) return a
                    }
                    if (a.tagName.toLowerCase() === b) return a
                }
                return null
            };
        g.escapeCharacters = function(a) {
            "#" === a.charAt(0) && (a = a.substr(1));
            for (var b, c = String(a), d = c.length, e = -1, f = "", g = c.charCodeAt(0); ++e < d;) {
                if (b = c.charCodeAt(e), 0 === b) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                f += b >= 1 && 31 >= b || 127 == b || 0 === e && b >= 48 && 57 >= b || 1 === e && b >= 48 && 57 >= b && 45 === g ? "\\" + b.toString(16) + " " : b >= 128 || 45 === b || 95 === b || b >= 48 && 57 >= b || b >= 65 && 90 >= b || b >= 97 && 122 >= b ? c.charAt(e) : "\\" + c.charAt(e)
            }
            return "#" + f
        };
        var m = function(a, b) {
                var c;
                return "easeInQuad" === a && (c = b * b), "easeOutQuad" === a && (c = b * (2 - b)), "easeInOutQuad" === a && (c = .5 > b ? 2 * b * b : -1 + (4 - 2 * b) * b), "easeInCubic" === a && (c = b * b * b), "easeOutCubic" === a && (c = --b * b * b + 1), "easeInOutCubic" === a && (c = .5 > b ? 4 * b * b * b : (b - 1) * (2 * b - 2) * (2 * b - 2) + 1), "easeInQuart" === a && (c = b * b * b * b), "easeOutQuart" === a && (c = 1 - --b * b * b * b), "easeInOutQuart" === a && (c = .5 > b ? 8 * b * b * b * b : 1 - 8 * --b * b * b * b), "easeInQuint" === a && (c = b * b * b * b * b), "easeOutQuint" === a && (c = 1 + --b * b * b * b * b), "easeInOutQuint" === a && (c = .5 > b ? 16 * b * b * b * b * b : 1 + 16 * --b * b * b * b * b), c || b
            },
            n = function(a, b, c) {
                var d = 0;
                if (a.offsetParent)
                    do d += a.offsetTop, a = a.offsetParent; while (a);
                return d = Math.max(d - b - c, 0), Math.min(d, p() - o())
            },
            o = function() {
                return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            },
            p = function() {
                return Math.max(a.document.body.scrollHeight, a.document.documentElement.scrollHeight, a.document.body.offsetHeight, a.document.documentElement.offsetHeight, a.document.body.clientHeight, a.document.documentElement.clientHeight)
            },
            q = function(a) {
                return a && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(a) : {}
            },
            r = function(b, c) {
                a.history.pushState && (c || "true" === c) && "file:" !== a.location.protocol && a.history.pushState(null, null, [a.location.protocol, "//", a.location.host, a.location.pathname, a.location.search, b].join(""))
            },
            s = function(a) {
                return null === a ? 0 : k(a) + a.offsetTop
            };
        g.animateScroll = function(c, g, h) {
            var k = q(g ? g.getAttribute("data-options") : null),
                l = j(b || i, h || {}, k),
                o = "[object Number]" === Object.prototype.toString.call(c),
                t = o ? null : "#" === c ? a.document.documentElement : a.document.querySelector(c);
            if (o || t) {
                var u = a.pageYOffset;
                d || (d = a.document.querySelector(l.selectorHeader)), e || (e = s(d));
                var v, w, x = o ? c : n(t, e, parseInt(l.offset, 10)),
                    y = x - u,
                    z = p(),
                    A = 0;
                o || r(c, l.updateURL);
                var B = function(b, d, e) {
                        var f = a.pageYOffset;
                        (b == d || f == d || a.innerHeight + f >= z) && (clearInterval(e), o || t.focus(), l.callback(c, g))
                    },
                    C = function() {
                        A += 16, v = A / parseInt(l.speed, 10), v = v > 1 ? 1 : v, w = u + y * m(l.easing, v), a.scrollTo(0, Math.floor(w)), B(w, x, f)
                    },
                    D = function() {
                        clearInterval(f), f = setInterval(C, 16)
                    };
                0 === a.pageYOffset && a.scrollTo(0, 0), D()
            }
        };
        var t = function(a) {
                if (0 === a.button && !a.metaKey && !a.ctrlKey) {
                    var c = l(a.target, b.selector);
                    if (c && "a" === c.tagName.toLowerCase()) {
                        a.preventDefault();
                        var d = g.escapeCharacters(c.hash);
                        g.animateScroll(d, c, b)
                    }
                }
            },
            u = function(a) {
                c || (c = setTimeout(function() {
                    c = null, e = s(d)
                }, 66))
            };
        return g.destroy = function() {
            b && (a.document.removeEventListener("click", t, !1), a.removeEventListener("resize", u, !1), b = null, c = null, d = null, e = null, f = null)
        }, g.init = function(c) {
            h && (g.destroy(), b = j(i, c || {}), d = a.document.querySelector(b.selectorHeader), e = s(d), a.document.addEventListener("click", t, !1), d && a.addEventListener("resize", u, !1))
        }, g
    }), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.el = a(b), this.options = a.extend({}, a.fn.typed.defaults, c), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
        };
        b.prototype = {
            constructor: b,
            init: function() {
                var a = this;
                a.timeout = setTimeout(function() {
                    for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b;
                    a.shuffle && (a.sequence = a.shuffleArray(a.sequence)), a.typewrite(a.strings[a.sequence[a.arrayPos]], a.strPos)
                }, a.startDelay)
            },
            build: function() {
                var b = this;
                if (this.showCursor === !0 && (this.cursor = a('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                    b.strings = [], this.stringsElement.hide();
                    var c = this.stringsElement.find("p");
                    a.each(c, function(c, d) {
                        b.strings.push(a(d).html())
                    })
                }
                this.init()
            },
            typewrite: function(a, b) {
                if (this.stop !== !0) {
                    var c = Math.round(70 * Math.random()) + this.typeSpeed,
                        d = this;
                    d.timeout = setTimeout(function() {
                        var c = 0,
                            e = a.substr(b);
                        if ("^" === e.charAt(0)) {
                            var f = 1;
                            /^\^\d+/.test(e) && (e = /\d+/.exec(e)[0], f += e.length, c = parseInt(e)), a = a.substring(0, b) + a.substring(b + f)
                        }
                        if ("html" === d.contentType) {
                            var g = a.substr(b).charAt(0);
                            if ("<" === g || "&" === g) {
                                var h = "",
                                    i = "";
                                for (i = "<" === g ? ">" : ";"; a.substr(b).charAt(0) !== i;) h += a.substr(b).charAt(0), b++;
                                b++, h += i
                            }
                        }
                        d.timeout = setTimeout(function() {
                            if (b === a.length) {
                                if (d.options.onStringTyped(d.arrayPos), d.arrayPos === d.strings.length - 1 && (d.options.callback(), d.curLoop++, d.loop === !1 || d.curLoop === d.loopCount)) return;
                                d.timeout = setTimeout(function() {
                                    d.backspace(a, b)
                                }, d.backDelay)
                            } else {
                                0 === b && d.options.preStringTyped(d.arrayPos);
                                var c = a.substr(0, b + 1);
                                d.attr ? d.el.attr(d.attr, c) : d.isInput ? d.el.val(c) : "html" === d.contentType ? d.el.html(c) : d.el.text(c), b++, d.typewrite(a, b)
                            }
                        }, c)
                    }, c)
                }
            },
            backspace: function(a, b) {
                if (this.stop !== !0) {
                    var c = Math.round(70 * Math.random()) + this.backSpeed,
                        d = this;
                    d.timeout = setTimeout(function() {
                        if ("html" === d.contentType && ">" === a.substr(b).charAt(0)) {
                            for (var c = "";
                                "<" !== a.substr(b).charAt(0);) c -= a.substr(b).charAt(0), b--;
                            b--, c += "<"
                        }
                        var e = a.substr(0, b);
                        d.attr ? d.el.attr(d.attr, e) : d.isInput ? d.el.val(e) : "html" === d.contentType ? d.el.html(e) : d.el.text(e), b > d.stopNum ? (b--, d.backspace(a, b)) : b <= d.stopNum && (d.arrayPos++, d.arrayPos === d.strings.length ? (d.arrayPos = 0, d.shuffle && (d.sequence = d.shuffleArray(d.sequence)), d.init()) : d.typewrite(d.strings[d.sequence[d.arrayPos]], b))
                    }, c)
                }
            },
            shuffleArray: function(a) {
                var b, c, d = a.length;
                if (d)
                    for (; --d;) c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
                return a
            },
            reset: function() {
                var a = this;
                clearInterval(a.timeout);
                var b = this.el.attr("id");
                this.el.after('<span id="' + b + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), a.options.resetCallback()
            }
        }, a.fn.typed = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("typed"),
                    f = "object" == typeof c && c;
                e || d.data("typed", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.typed.defaults = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            shuffle: !1,
            backDelay: 500,
            loop: !1,
            loopCount: !1,
            showCursor: !0,
            cursorChar: "|",
            attr: null,
            contentType: "html",
            callback: function() {},
            preStringTyped: function() {},
            onStringTyped: function() {},
            resetCallback: function() {}
        }
    }(window.jQuery), ! function(a) {
        function b(a) {
            var b = a.length,
                d = c.type(a);
            return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        if (!a.jQuery) {
            var c = function(a, b) {
                return new c.fn.init(a, b)
            };
            c.isWindow = function(a) {
                return null != a && a == a.window
            }, c.type = function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
            }, c.isArray = Array.isArray || function(a) {
                return "array" === c.type(a)
            }, c.isPlainObject = function(a) {
                var b;
                if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
                try {
                    if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (d) {
                    return !1
                }
                for (b in a);
                return void 0 === b || f.call(a, b)
            }, c.each = function(a, c, d) {
                var e, f = 0,
                    g = a.length,
                    h = b(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = c.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = c.call(a[f], f, a[f]), e === !1) break; return a
            }, c.data = function(a, b, e) {
                if (void 0 === e) {
                    var f = a[c.expando],
                        g = f && d[f];
                    if (void 0 === b) return g;
                    if (g && b in g) return g[b]
                } else if (void 0 !== b) {
                    var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                    return d[f] = d[f] || {}, d[f][b] = e, e
                }
            }, c.removeData = function(a, b) {
                var e = a[c.expando],
                    f = e && d[e];
                f && c.each(b, function(a, b) {
                    delete f[b]
                })
            }, c.extend = function() {
                var a, b, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                    if (null != (f = arguments[i]))
                        for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
                return h
            }, c.queue = function(a, d, e) {
                function f(a, c) {
                    var d = c || [];
                    return null != a && (b(Object(a)) ? ! function(a, b) {
                        for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                        if (c !== c)
                            for (; void 0 !== b[d];) a[e++] = b[d++];
                        return a.length = e, a
                    }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
                }
                if (a) {
                    d = (d || "fx") + "queue";
                    var g = c.data(a, d);
                    return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
                }
            }, c.dequeue = function(a, b) {
                c.each(a.nodeType ? [a] : a, function(a, d) {
                    b = b || "fx";
                    var e = c.queue(d, b),
                        f = e.shift();
                    "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                        c.dequeue(d, b)
                    }))
                })
            }, c.fn = c.prototype = {
                init: function(a) {
                    if (a.nodeType) return this[0] = a, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function a() {
                        for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                        return a || document
                    }
                    var b = this[0],
                        a = a.apply(b),
                        d = this.offset(),
                        e = /^(?:body|html)$/i.test(a.nodeName) ? {
                            top: 0,
                            left: 0
                        } : c(a).offset();
                    return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                        top: d.top - e.top,
                        left: d.left - e.left
                    }
                }
            };
            var d = {};
            c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
            for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
            c.fn.init.prototype = c.fn, a.Velocity = {
                Utilities: c
            }
        }
    }(window),
    function(a) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
    }(function() {
        return function(a, b, c, d) {
            function e(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                    var e = a[b];
                    e && d.push(e)
                }
                return d
            }

            function f(a) {
                return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
            }

            function g(a) {
                var b = m.data(a, "velocity");
                return null === b ? d : b
            }

            function h(a) {
                return function(b) {
                    return Math.round(b * a) * (1 / a)
                }
            }

            function i(a, c, d, e) {
                function f(a, b) {
                    return 1 - 3 * b + 3 * a
                }

                function g(a, b) {
                    return 3 * b - 6 * a
                }

                function h(a) {
                    return 3 * a
                }

                function i(a, b, c) {
                    return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
                }

                function j(a, b, c) {
                    return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
                }

                function k(b, c) {
                    for (var e = 0; p > e; ++e) {
                        var f = j(c, a, d);
                        if (0 === f) return c;
                        var g = i(c, a, d) - b;
                        c -= g / f
                    }
                    return c
                }

                function l() {
                    for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
                }

                function m(b, c, e) {
                    var f, g, h = 0;
                    do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                    return g
                }

                function n(b) {
                    for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                    --e;
                    var g = (b - x[e]) / (x[e + 1] - x[e]),
                        h = c + g * u,
                        i = j(h, a, d);
                    return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
                }

                function o() {
                    y = !0, (a != c || d != e) && l()
                }
                var p = 4,
                    q = .001,
                    r = 1e-7,
                    s = 10,
                    t = 11,
                    u = 1 / (t - 1),
                    v = "Float32Array" in b;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
                var x = v ? new Float32Array(t) : new Array(t),
                    y = !1,
                    z = function(b) {
                        return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                    };
                z.getControlPoints = function() {
                    return [{
                        x: a,
                        y: c
                    }, {
                        x: d,
                        y: e
                    }]
                };
                var A = "generateBezier(" + [a, c, d, e] + ")";
                return z.toString = function() {
                    return A
                }, z
            }

            function j(a, b) {
                var c = a;
                return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
            }

            function k(a) {
                if (a) {
                    var b = (new Date).getTime(),
                        c = t.State.calls.length;
                    c > 1e4 && (t.State.calls = e(t.State.calls));
                    for (var f = 0; c > f; f++)
                        if (t.State.calls[f]) {
                            var h = t.State.calls[f],
                                i = h[0],
                                j = h[2],
                                n = h[3],
                                o = !!n,
                                q = null;
                            n || (n = t.State.calls[f][3] = b - 16);
                            for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                                var w = i[s],
                                    y = w.element;
                                if (g(y)) {
                                    var z = !1;
                                    if (j.display !== d && null !== j.display && "none" !== j.display) {
                                        if ("flex" === j.display) {
                                            var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            m.each(A, function(a, b) {
                                                v.setPropertyValue(y, "display", b)
                                            })
                                        }
                                        v.setPropertyValue(y, "display", j.display)
                                    }
                                    j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                                    for (var B in w)
                                        if ("element" !== B) {
                                            var C, D = w[B],
                                                E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
                                            if (1 === r) C = D.endValue;
                                            else {
                                                var F = D.endValue - D.startValue;
                                                if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
                                            }
                                            if (D.currentValue = C, "tween" === B) q = C;
                                            else {
                                                if (v.Hooks.registered[B]) {
                                                    var G = v.Hooks.getRoot(B),
                                                        H = g(y).rootPropertyValueCache[G];
                                                    H && (D.rootPropertyValue = H)
                                                }
                                                var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                                v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0)
                                            }
                                        }
                                    j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y)
                                }
                            }
                            j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
                        }
                }
                t.State.isTicking && x(k)
            }

            function l(a, b) {
                if (!t.State.calls[a]) return !1;
                for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                    var l = c[j].element;
                    if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                        g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                        var n = !1;
                        m.each(v.Lists.transforms3D, function(a, b) {
                            var c = /^scale/.test(b) ? 1 : 0,
                                e = g(l).transformCache[b];
                            g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                        }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                    }
                    if (!b && f.complete && !f.loop && j === k - 1) try {
                        f.complete.call(e, e)
                    } catch (o) {
                        setTimeout(function() {
                            throw o
                        }, 1)
                    }
                    h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) {
                        /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                    }), t(l, "reverse", {
                        loop: !0,
                        delay: f.delay
                    })), f.queue !== !1 && m.dequeue(l, f.queue)
                }
                t.State.calls[a] = !1;
                for (var p = 0, q = t.State.calls.length; q > p; p++)
                    if (t.State.calls[p] !== !1) {
                        i = !0;
                        break
                    }
                i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
            }
            var m, n = function() {
                    if (c.documentMode) return c.documentMode;
                    for (var a = 7; a > 4; a--) {
                        var b = c.createElement("div");
                        if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                    }
                    return d
                }(),
                o = function() {
                    var a = 0;
                    return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                        var c, d = (new Date).getTime();
                        return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                            b(d + c)
                        }, c)
                    }
                }(),
                p = {
                    isString: function(a) {
                        return "string" == typeof a
                    },
                    isArray: Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    },
                    isFunction: function(a) {
                        return "[object Function]" === Object.prototype.toString.call(a)
                    },
                    isNode: function(a) {
                        return a && a.nodeType;
                    },
                    isNodeList: function(a) {
                        return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                    },
                    isWrapped: function(a) {
                        return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
                    },
                    isSVG: function(a) {
                        return b.SVGElement && a instanceof b.SVGElement
                    },
                    isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0
                    }
                },
                q = !1;
            if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var r = 400,
                s = "swing",
                t = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: b.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: c.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: m,
                    Redirects: {},
                    Easings: {},
                    Promise: b.Promise,
                    defaults: {
                        queue: "",
                        duration: r,
                        easing: s,
                        begin: d,
                        complete: d,
                        progress: d,
                        display: d,
                        visibility: d,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(a) {
                        m.data(a, "velocity", {
                            isSVG: p.isSVG(a),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
            var u = function() {
                function a(a) {
                    return -a.tension * a.x - a.friction * a.v
                }

                function b(b, c, d) {
                    var e = {
                        x: b.x + d.dx * c,
                        v: b.v + d.dv * c,
                        tension: b.tension,
                        friction: b.friction
                    };
                    return {
                        dx: e.v,
                        dv: a(e)
                    }
                }

                function c(c, d) {
                    var e = {
                            dx: c.v,
                            dv: a(c)
                        },
                        f = b(c, .5 * d, e),
                        g = b(c, .5 * d, f),
                        h = b(c, d, g),
                        i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                        j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                    return c.x = c.x + i * d, c.v = c.v + j * d, c
                }
                return function d(a, b, e) {
                    var f, g, h, i = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        j = [0],
                        k = 0,
                        l = 1e-4,
                        m = .016;
                    for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                    return f ? function(a) {
                        return j[a * (j.length - 1) | 0]
                    } : k
                }
            }();
            t.Easings = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                },
                spring: function(a) {
                    return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
                }
            }, m.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(a, b) {
                t.Easings[b[0]] = i.apply(null, b[1])
            });
            var v = t.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var a = 0; a < v.Lists.colors.length; a++) {
                            var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                            v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                        }
                        var c, d, e;
                        if (n)
                            for (c in v.Hooks.templates) {
                                d = v.Hooks.templates[c], e = d[0].split(" ");
                                var f = d[1].match(v.RegEx.valueSplit);
                                "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                            }
                        for (c in v.Hooks.templates) {
                            d = v.Hooks.templates[c], e = d[0].split(" ");
                            for (var a in e) {
                                var g = c + e[a],
                                    h = a;
                                v.Hooks.registered[g] = [c, h]
                            }
                        }
                    },
                    getRoot: function(a) {
                        var b = v.Hooks.registered[a];
                        return b ? b[0] : a
                    },
                    cleanRootPropertyValue: function(a, b) {
                        return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                    },
                    extractValue: function(a, b) {
                        var c = v.Hooks.registered[a];
                        if (c) {
                            var d = c[0],
                                e = c[1];
                            return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                        }
                        return b
                    },
                    injectValue: function(a, b, c) {
                        var d = v.Hooks.registered[a];
                        if (d) {
                            var e, f, g = d[0],
                                h = d[1];
                            return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                        }
                        return c
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var d;
                                    return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                                case "inject":
                                    return "rect(" + c + ")"
                            }
                        },
                        blur: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return t.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var d = parseFloat(c);
                                    if (!d && 0 !== d) {
                                        var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        d = e ? e[1] : 0
                                    }
                                    return d;
                                case "inject":
                                    return parseFloat(c) ? "blur(" + c + ")" : "none"
                            }
                        },
                        opacity: function(a, b, c) {
                            if (8 >= n) switch (a) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return c = d ? d[1] / 100 : 1;
                                case "inject":
                                    return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                            } else switch (a) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return c;
                                case "inject":
                                    return c
                            }
                        }
                    },
                    register: function() {
                        9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                        for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
                            var b = v.Lists.transformsBase[a];
                            v.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                    case "inject":
                                        var f = !1;
                                        switch (b.substr(0, b.length - 1)) {
                                            case "translate":
                                                f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                                break;
                                            case "scal":
                                            case "scale":
                                                t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                                break;
                                            case "skew":
                                                f = !/(deg|\d)$/i.test(e);
                                                break;
                                            case "rotate":
                                                f = !/(deg|\d)$/i.test(e)
                                        }
                                        return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                                }
                            }
                        }();
                        for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
                            var b = v.Lists.colors[a];
                            v.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                    case "name":
                                        return b;
                                    case "extract":
                                        var f;
                                        if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                        else {
                                            var g, h = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                    case "inject":
                                        return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(a) {
                        return a.replace(/-(\w)/g, function(a, b) {
                            return b.toUpperCase()
                        })
                    },
                    SVGAttribute: function(a) {
                        var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                    },
                    prefixCheck: function(a) {
                        if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                        for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                            var e;
                            if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                    return a.toUpperCase()
                                }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
                        }
                        return [a, !1]
                    }
                },
                Values: {
                    hexToRgb: function(a) {
                        var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return a = a.replace(c, function(a, b, c, d) {
                            return b + b + c + c + d + d
                        }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(a) {
                        return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                    },
                    getUnitType: function(a) {
                        return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                    },
                    getDisplayType: function(a) {
                        var b = a && a.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                    },
                    addClass: function(a, b) {
                        a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                    },
                    removeClass: function(a, b) {
                        a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(a, c, e, f) {
                    function h(a, c) {
                        function e() {
                            j && v.setPropertyValue(a, "display", "none")
                        }
                        var i = 0;
                        if (8 >= n) i = m.css(a, c);
                        else {
                            var j = !1;
                            if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                                if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                    return e(), k
                                }
                                if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                    return e(), l
                                }
                            }
                            var o;
                            o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                        }
                        if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                            var p = h(a, "position");
                            ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                        }
                        return i
                    }
                    var i;
                    if (v.Hooks.registered[c]) {
                        var j = c,
                            k = v.Hooks.getRoot(j);
                        e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                    } else if (v.Normalizations.registered[c]) {
                        var l, o;
                        l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                    }
                    if (!/^[\d-]/.test(i))
                        if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
                            if (/^(height|width)$/i.test(c)) try {
                                i = a.getBBox()[c]
                            } catch (p) {
                                i = 0
                            } else i = a.getAttribute(c);
                            else i = h(a, v.Names.prefixCheck(c)[0]);
                    return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
                },
                setPropertyValue: function(a, c, d, e, f) {
                    var h = c;
                    if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                    else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                    else {
                        if (v.Hooks.registered[c]) {
                            var i = c,
                                j = v.Hooks.getRoot(c);
                            e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                        }
                        if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                            a.style[h] = d
                        } catch (k) {
                            t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                        } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                        t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                    }
                    return [h, d]
                },
                flushTransformCache: function(a) {
                    function b(b) {
                        return parseFloat(v.getPropertyValue(a, b))
                    }
                    var c = "";
                    if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                        var d = {
                            translate: [b("translateX"), b("translateY")],
                            skewX: [b("skewX")],
                            skewY: [b("skewY")],
                            scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                            rotate: [b("rotateZ"), 0, 0]
                        };
                        m.each(g(a).transformCache, function(a) {
                            /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                        })
                    } else {
                        var e, f;
                        m.each(g(a).transformCache, function(b) {
                            return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                        }), f && (c = "perspective" + f + " " + c)
                    }
                    v.setPropertyValue(a, "transform", c)
                }
            };
            v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
                var e = d;
                return a = f(a), m.each(a, function(a, f) {
                    if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
                    else {
                        var h = t.CSS.setPropertyValue(f, b, c);
                        "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
                    }
                }), e
            };
            var w = function() {
                function a() {
                    return h ? B.promise || null : i
                }

                function e() {
                    function a() {
                        function a(a, b) {
                            var c = d,
                                e = d,
                                g = d;
                            return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
                        }

                        function l(a, b) {
                            var c, d;
                            return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                return c = a, ""
                            }), c || (c = v.Values.getUnitType(a)), [d, c]
                        }

                        function n() {
                            var a = {
                                    myParent: f.parentNode || c.body,
                                    position: v.getPropertyValue(f, "position"),
                                    fontSize: v.getPropertyValue(f, "fontSize")
                                },
                                d = a.position === I.lastPosition && a.myParent === I.lastParent,
                                e = a.fontSize === I.lastFontSize;
                            I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
                            var h = 100,
                                i = {};
                            if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
                            else {
                                var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                    t.CSS.setPropertyValue(j, b, "hidden")
                                }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                    t.CSS.setPropertyValue(j, b, h + "%")
                                }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
                            }
                            return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
                        }
                        if (h.begin && 0 === y) try {
                            h.begin.call(o, o)
                        } catch (r) {
                            setTimeout(function() {
                                throw r
                            }, 1)
                        }
                        if ("scroll" === C) {
                            var u, w, z, A = /^x$/i.test(h.axis) ? "Left" : "Top",
                                D = parseFloat(h.offset) || 0;
                            h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, u = h.container["scroll" + A], z = u + m(f).position()[A.toLowerCase()] + D) : h.container = null : (u = t.State.scrollAnchor[t.State["scrollProperty" + A]], w = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], z = m(f).offset()[A.toLowerCase()] + D), i = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: u,
                                    currentValue: u,
                                    endValue: z,
                                    unitType: "",
                                    easing: h.easing,
                                    scrollData: {
                                        container: h.container,
                                        direction: A,
                                        alternateValue: w
                                    }
                                },
                                element: f
                            }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
                        } else if ("reverse" === C) {
                            if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);
                            "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                            var E = m.extend(!0, {}, g(f).tweensContainer);
                            for (var F in E)
                                if ("element" !== F) {
                                    var G = E[F].startValue;
                                    E[F].startValue = E[F].currentValue = E[F].endValue, E[F].endValue = G, p.isEmptyObject(s) || (E[F].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(E[F]), f)
                                }
                            i = E
                        } else if ("start" === C) {
                            var E;
                            g(f).tweensContainer && g(f).isAnimating === !0 && (E = g(f).tweensContainer), m.each(q, function(b, c) {
                                if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(b)) {
                                    var e = a(c, !0),
                                        f = e[0],
                                        g = e[1],
                                        h = e[2];
                                    if (v.RegEx.isHex.test(f)) {
                                        for (var i = ["Red", "Green", "Blue"], j = v.Values.hexToRgb(f), k = h ? v.Values.hexToRgb(h) : d, l = 0; l < i.length; l++) {
                                            var m = [j[l]];
                                            g && m.push(g), k !== d && m.push(k[l]), q[b + i[l]] = m
                                        }
                                        delete q[b]
                                    }
                                }
                            });
                            for (var H in q) {
                                var K = a(q[H]),
                                    L = K[0],
                                    M = K[1],
                                    N = K[2];
                                H = v.Names.camelCase(H);
                                var O = v.Hooks.getRoot(H),
                                    P = !1;
                                if (g(f).isSVG || "tween" === O || v.Names.prefixCheck(O)[1] !== !1 || v.Normalizations.registered[O] !== d) {
                                    (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(H) && !N && 0 !== L && (N = 0), h._cacheValues && E && E[H] ? (N === d && (N = E[H].endValue + E[H].unitType), P = g(f).rootPropertyValueCache[O]) : v.Hooks.registered[H] ? N === d ? (P = v.getPropertyValue(f, O), N = v.getPropertyValue(f, H, P)) : P = v.Hooks.templates[O][1] : N === d && (N = v.getPropertyValue(f, H));
                                    var Q, R, S, T = !1;
                                    if (Q = l(H, N), N = Q[0], S = Q[1], Q = l(H, L), L = Q[0].replace(/^([+-\/*])=/, function(a, b) {
                                            return T = b, ""
                                        }), R = Q[1], N = parseFloat(N) || 0, L = parseFloat(L) || 0, "%" === R && (/^(fontSize|lineHeight)$/.test(H) ? (L /= 100, R = "em") : /^scale/.test(H) ? (L /= 100, R = "") : /(Red|Green|Blue)$/i.test(H) && (L = L / 100 * 255, R = "")), /[\/*]/.test(T)) R = S;
                                    else if (S !== R && 0 !== N)
                                        if (0 === L) R = S;
                                        else {
                                            e = e || n();
                                            var U = /margin|padding|left|right|width|text|word|letter/i.test(H) || /X$/.test(H) || "x" === H ? "x" : "y";
                                            switch (S) {
                                                case "%":
                                                    N *= "x" === U ? e.percentToPxWidth : e.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    N *= e[S + "ToPx"]
                                            }
                                            switch (R) {
                                                case "%":
                                                    N *= 1 / ("x" === U ? e.percentToPxWidth : e.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    N *= 1 / e[R + "ToPx"]
                                            }
                                        }
                                    switch (T) {
                                        case "+":
                                            L = N + L;
                                            break;
                                        case "-":
                                            L = N - L;
                                            break;
                                        case "*":
                                            L = N * L;
                                            break;
                                        case "/":
                                            L = N / L
                                    }
                                    i[H] = {
                                        rootPropertyValue: P,
                                        startValue: N,
                                        currentValue: N,
                                        endValue: L,
                                        unitType: R,
                                        easing: M
                                    }, t.debug && console.log("tweensContainer (" + H + "): " + JSON.stringify(i[H]), f)
                                } else t.debug && console.log("Skipping [" + O + "] due to a lack of browser support.")
                            }
                            i.element = f
                        }
                        i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++)
                    }
                    var e, f = this,
                        h = m.extend({}, t.defaults, s),
                        i = {};
                    switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) {
                        t.velocityQueueEntryFlag = !0, g(f).delayTimer = {
                            setTimeout: setTimeout(a, parseFloat(h.delay)),
                            next: a
                        }
                    }), h.duration.toString().toLowerCase()) {
                        case "fast":
                            h.duration = 200;
                            break;
                        case "normal":
                            h.duration = r;
                            break;
                        case "slow":
                            h.duration = 600;
                            break;
                        default:
                            h.duration = parseFloat(h.duration) || 1
                    }
                    t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                        return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
                    }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
                }
                var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
                if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
                    u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
                    var x = o.length,
                        y = 0;
                    if (!/^(stop|finish|finishAll)$/i.test(q) && !m.isPlainObject(s)) {
                        var z = n + 1;
                        s = {};
                        for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
                    }
                    var B = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    h && t.Promise && (B.promise = new t.Promise(function(a, b) {
                        B.resolver = a, B.rejecter = b
                    }));
                    var C;
                    switch (q) {
                        case "scroll":
                            C = "scroll";
                            break;
                        case "reverse":
                            C = "reverse";
                            break;
                        case "finish":
                        case "finishAll":
                        case "stop":
                            m.each(o, function(a, b) {
                                g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== q || s !== !0 && !p.isString(s) || (m.each(m.queue(b, p.isString(s) ? s : ""), function(a, b) {
                                    p.isFunction(b) && b()
                                }), m.queue(b, p.isString(s) ? s : "", []))
                            });
                            var D = [];
                            return m.each(t.State.calls, function(a, b) {
                                b && m.each(b[1], function(c, e) {
                                    var f = s === d ? "" : s;
                                    return f === !0 || b[2].queue === f || s === d && b[2].queue === !1 ? void m.each(o, function(c, d) {
                                        d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
                                            p.isFunction(b) && b(null, !0)
                                        }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) {
                                            b.endValue = b.currentValue
                                        }), D.push(a)) : ("finish" === q || "finishAll" === q) && (b[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === q && (m.each(D, function(a, b) {
                                l(b, !0)
                            }), B.promise && B.resolver(o)), a();
                        default:
                            if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                                if (p.isString(q) && t.Redirects[q]) {
                                    var E = m.extend({}, s),
                                        F = E.duration,
                                        G = E.delay || 0;
                                    return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                                        parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
                                    }), a()
                                }
                                var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return B.promise ? B.rejecter(new Error(H)) : console.log(H), a()
                            }
                            C = "start"
                    }
                    var I = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        J = [];
                    m.each(o, function(a, b) {
                        p.isNode(b) && e.call(b)
                    });
                    var K, E = m.extend({}, t.defaults, s);
                    if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
                        for (var L = 0; K > L; L++) {
                            var M = {
                                delay: E.delay,
                                progress: E.progress
                            };
                            L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
                        }
                    return a()
                }
            };
            t = m.extend(w, t), t.animate = w;
            var x = b.requestAnimationFrame || o;
            return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
                c.hidden ? (x = function(a) {
                    return setTimeout(function() {
                        a(!0)
                    }, 16)
                }, k()) : x = b.requestAnimationFrame || o
            }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
                t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                    var i = m.extend({}, c),
                        j = i.begin,
                        k = i.complete,
                        l = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        n = {};
                    i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                        j && j.call(g, g);
                        for (var c in l) {
                            n[c] = a.style[c];
                            var d = t.CSS.getPropertyValue(a, c);
                            l[c] = "Down" === b ? [d, 0] : [0, d]
                        }
                        n.overflow = a.style.overflow, a.style.overflow = "hidden"
                    }, i.complete = function() {
                        for (var b in n) a.style[b] = n[b];
                        k && k.call(g, g), h && h.resolver(g)
                    }, t(a, l, i)
                }
            }), m.each(["In", "Out"], function(a, b) {
                t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                    var i = m.extend({}, c),
                        j = {
                            opacity: "In" === b ? 1 : 0
                        },
                        k = i.complete;
                    i.complete = e !== f - 1 ? i.begin = null : function() {
                        k && k.call(g, g), h && h.resolver(g)
                    }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
                }
            }), t
        }(window.jQuery || window.Zepto || window, window, document)
    }), ! function(a, b, c) {
        "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c()
    }(this, "verge", function() {
        function a() {
            return {
                width: k(),
                height: l()
            }
        }

        function b(a, b) {
            var c = {};
            return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c
        }

        function c(a, c) {
            return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1
        }

        function d(b) {
            b = null == b ? a() : 1 === b.nodeType ? c(b) : b;
            var d = b.height,
                e = b.width;
            return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d
        }
        var e = {},
            f = "undefined" != typeof window && window,
            g = "undefined" != typeof document && document,
            h = g && g.documentElement,
            i = f.matchMedia || f.msMatchMedia,
            j = i ? function(a) {
                return !!i.call(f, a).matches
            } : function() {
                return !1
            },
            k = e.viewportW = function() {
                var a = h.clientWidth,
                    b = f.innerWidth;
                return b > a ? b : a
            },
            l = e.viewportH = function() {
                var a = h.clientHeight,
                    b = f.innerHeight;
                return b > a ? b : a
            };
        return e.mq = j, e.matchMedia = i ? function() {
            return i.apply(f, arguments)
        } : function() {
            return {}
        }, e.viewport = a, e.scrollX = function() {
            return f.pageXOffset || h.scrollLeft
        }, e.scrollY = function() {
            return f.pageYOffset || h.scrollTop
        }, e.rectangle = c, e.aspect = d, e.inX = function(a, b) {
            var d = c(a, b);
            return !!d && d.right >= 0 && d.left <= k()
        }, e.inY = function(a, b) {
            var d = c(a, b);
            return !!d && d.bottom >= 0 && d.top <= l()
        }, e.inViewport = function(a, b) {
            var d = c(a, b);
            return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k()
        }, e
    });