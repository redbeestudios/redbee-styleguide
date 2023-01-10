(self.webpackChunk_redbee_styleguide =
  self.webpackChunk_redbee_styleguide || []).push([
  [469],
  {
    './node_modules/performance-now/lib/performance-now.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var process = __webpack_require__('./node_modules/process/browser.js');
      (function () {
        var getNanoSeconds,
          hrtime,
          loadTime,
          moduleLoadTime,
          nodeLoadTime,
          upTime;
        'undefined' != typeof performance &&
        null !== performance &&
        performance.now
          ? (module.exports = function () {
              return performance.now();
            })
          : null != process && process.hrtime
          ? ((module.exports = function () {
              return (getNanoSeconds() - nodeLoadTime) / 1e6;
            }),
            (hrtime = process.hrtime),
            (moduleLoadTime = (getNanoSeconds = function () {
              var hr;
              return 1e9 * (hr = hrtime())[0] + hr[1];
            })()),
            (upTime = 1e9 * process.uptime()),
            (nodeLoadTime = moduleLoadTime - upTime))
          : Date.now
          ? ((module.exports = function () {
              return Date.now() - loadTime;
            }),
            (loadTime = Date.now()))
          : ((module.exports = function () {
              return new Date().getTime() - loadTime;
            }),
            (loadTime = new Date().getTime()));
      }.call(this));
    },
    './node_modules/raf/index.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      for (
        var now = __webpack_require__(
            './node_modules/performance-now/lib/performance-now.js'
          ),
          root = 'undefined' == typeof window ? __webpack_require__.g : window,
          vendors = ['moz', 'webkit'],
          suffix = 'AnimationFrame',
          raf = root['request' + suffix],
          caf = root['cancel' + suffix] || root['cancelRequest' + suffix],
          i = 0;
        !raf && i < vendors.length;
        i++
      )
        (raf = root[vendors[i] + 'Request' + suffix]),
          (caf =
            root[vendors[i] + 'Cancel' + suffix] ||
            root[vendors[i] + 'CancelRequest' + suffix]);
      if (!raf || !caf) {
        var last = 0,
          id = 0,
          queue = [];
        (raf = function (callback) {
          if (0 === queue.length) {
            var _now = now(),
              next = Math.max(0, 16.666666666666668 - (_now - last));
            (last = next + _now),
              setTimeout(function () {
                var cp = queue.slice(0);
                queue.length = 0;
                for (var i = 0; i < cp.length; i++)
                  if (!cp[i].cancelled)
                    try {
                      cp[i].callback(last);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 0);
                    }
              }, Math.round(next));
          }
          return queue.push({ handle: ++id, callback, cancelled: !1 }), id;
        }),
          (caf = function (handle) {
            for (var i = 0; i < queue.length; i++)
              queue[i].handle === handle && (queue[i].cancelled = !0);
          });
      }
      (module.exports = function (fn) {
        return raf.call(root, fn);
      }),
        (module.exports.cancel = function () {
          caf.apply(root, arguments);
        }),
        (module.exports.polyfill = function (object) {
          object || (object = root),
            (object.requestAnimationFrame = raf),
            (object.cancelAnimationFrame = caf);
        });
    },
    './node_modules/rgbcolor/index.js': (module) => {
      module.exports = function (color_string) {
        (this.ok = !1),
          (this.alpha = 1),
          '#' == color_string.charAt(0) &&
            (color_string = color_string.substr(1, 6)),
          (color_string = (color_string = color_string.replace(
            / /g,
            ''
          )).toLowerCase());
        var simple_colors = {
          aliceblue: 'f0f8ff',
          antiquewhite: 'faebd7',
          aqua: '00ffff',
          aquamarine: '7fffd4',
          azure: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '000000',
          blanchedalmond: 'ffebcd',
          blue: '0000ff',
          blueviolet: '8a2be2',
          brown: 'a52a2a',
          burlywood: 'deb887',
          cadetblue: '5f9ea0',
          chartreuse: '7fff00',
          chocolate: 'd2691e',
          coral: 'ff7f50',
          cornflowerblue: '6495ed',
          cornsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: '00ffff',
          darkblue: '00008b',
          darkcyan: '008b8b',
          darkgoldenrod: 'b8860b',
          darkgray: 'a9a9a9',
          darkgreen: '006400',
          darkkhaki: 'bdb76b',
          darkmagenta: '8b008b',
          darkolivegreen: '556b2f',
          darkorange: 'ff8c00',
          darkorchid: '9932cc',
          darkred: '8b0000',
          darksalmon: 'e9967a',
          darkseagreen: '8fbc8f',
          darkslateblue: '483d8b',
          darkslategray: '2f4f4f',
          darkturquoise: '00ced1',
          darkviolet: '9400d3',
          deeppink: 'ff1493',
          deepskyblue: '00bfff',
          dimgray: '696969',
          dodgerblue: '1e90ff',
          feldspar: 'd19275',
          firebrick: 'b22222',
          floralwhite: 'fffaf0',
          forestgreen: '228b22',
          fuchsia: 'ff00ff',
          gainsboro: 'dcdcdc',
          ghostwhite: 'f8f8ff',
          gold: 'ffd700',
          goldenrod: 'daa520',
          gray: '808080',
          green: '008000',
          greenyellow: 'adff2f',
          honeydew: 'f0fff0',
          hotpink: 'ff69b4',
          indianred: 'cd5c5c',
          indigo: '4b0082',
          ivory: 'fffff0',
          khaki: 'f0e68c',
          lavender: 'e6e6fa',
          lavenderblush: 'fff0f5',
          lawngreen: '7cfc00',
          lemonchiffon: 'fffacd',
          lightblue: 'add8e6',
          lightcoral: 'f08080',
          lightcyan: 'e0ffff',
          lightgoldenrodyellow: 'fafad2',
          lightgrey: 'd3d3d3',
          lightgreen: '90ee90',
          lightpink: 'ffb6c1',
          lightsalmon: 'ffa07a',
          lightseagreen: '20b2aa',
          lightskyblue: '87cefa',
          lightslateblue: '8470ff',
          lightslategray: '778899',
          lightsteelblue: 'b0c4de',
          lightyellow: 'ffffe0',
          lime: '00ff00',
          limegreen: '32cd32',
          linen: 'faf0e6',
          magenta: 'ff00ff',
          maroon: '800000',
          mediumaquamarine: '66cdaa',
          mediumblue: '0000cd',
          mediumorchid: 'ba55d3',
          mediumpurple: '9370d8',
          mediumseagreen: '3cb371',
          mediumslateblue: '7b68ee',
          mediumspringgreen: '00fa9a',
          mediumturquoise: '48d1cc',
          mediumvioletred: 'c71585',
          midnightblue: '191970',
          mintcream: 'f5fffa',
          mistyrose: 'ffe4e1',
          moccasin: 'ffe4b5',
          navajowhite: 'ffdead',
          navy: '000080',
          oldlace: 'fdf5e6',
          olive: '808000',
          olivedrab: '6b8e23',
          orange: 'ffa500',
          orangered: 'ff4500',
          orchid: 'da70d6',
          palegoldenrod: 'eee8aa',
          palegreen: '98fb98',
          paleturquoise: 'afeeee',
          palevioletred: 'd87093',
          papayawhip: 'ffefd5',
          peachpuff: 'ffdab9',
          peru: 'cd853f',
          pink: 'ffc0cb',
          plum: 'dda0dd',
          powderblue: 'b0e0e6',
          purple: '800080',
          rebeccapurple: '663399',
          red: 'ff0000',
          rosybrown: 'bc8f8f',
          royalblue: '4169e1',
          saddlebrown: '8b4513',
          salmon: 'fa8072',
          sandybrown: 'f4a460',
          seagreen: '2e8b57',
          seashell: 'fff5ee',
          sienna: 'a0522d',
          silver: 'c0c0c0',
          skyblue: '87ceeb',
          slateblue: '6a5acd',
          slategray: '708090',
          snow: 'fffafa',
          springgreen: '00ff7f',
          steelblue: '4682b4',
          tan: 'd2b48c',
          teal: '008080',
          thistle: 'd8bfd8',
          tomato: 'ff6347',
          turquoise: '40e0d0',
          violet: 'ee82ee',
          violetred: 'd02090',
          wheat: 'f5deb3',
          white: 'ffffff',
          whitesmoke: 'f5f5f5',
          yellow: 'ffff00',
          yellowgreen: '9acd32',
        };
        color_string = simple_colors[color_string] || color_string;
        for (
          var color_defs = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
                process: function (bits) {
                  return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4]),
                  ];
                },
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
                process: function (bits) {
                  return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                  ];
                },
              },
              {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: ['#00ff00', '336699'],
                process: function (bits) {
                  return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16),
                  ];
                },
              },
              {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: ['#fb0', 'f0f'],
                process: function (bits) {
                  return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16),
                  ];
                },
              },
            ],
            i = 0;
          i < color_defs.length;
          i++
        ) {
          var re = color_defs[i].re,
            processor = color_defs[i].process,
            bits = re.exec(color_string);
          if (bits) {
            var channels = processor(bits);
            (this.r = channels[0]),
              (this.g = channels[1]),
              (this.b = channels[2]),
              channels.length > 3 && (this.alpha = channels[3]),
              (this.ok = !0);
          }
        }
        (this.r =
          this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g =
            this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b =
            this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha =
            this.alpha < 0
              ? 0
              : this.alpha > 1 || isNaN(this.alpha)
              ? 1
              : this.alpha),
          (this.toRGB = function () {
            return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
          }),
          (this.toRGBA = function () {
            return (
              'rgba(' +
              this.r +
              ', ' +
              this.g +
              ', ' +
              this.b +
              ', ' +
              this.alpha +
              ')'
            );
          }),
          (this.toHex = function () {
            var r = this.r.toString(16),
              g = this.g.toString(16),
              b = this.b.toString(16);
            return (
              1 == r.length && (r = '0' + r),
              1 == g.length && (g = '0' + g),
              1 == b.length && (b = '0' + b),
              '#' + r + g + b
            );
          }),
          (this.getHelpXML = function () {
            for (var examples = new Array(), i = 0; i < color_defs.length; i++)
              for (
                var example = color_defs[i].example, j = 0;
                j < example.length;
                j++
              )
                examples[examples.length] = example[j];
            for (var sc in simple_colors) examples[examples.length] = sc;
            var xml = document.createElement('ul');
            xml.setAttribute('id', 'rgbcolor-examples');
            for (i = 0; i < examples.length; i++)
              try {
                var list_item = document.createElement('li'),
                  list_color = new RGBColor(examples[i]),
                  example_div = document.createElement('div');
                (example_div.style.cssText =
                  'margin: 3px; border: 1px solid black; background:' +
                  list_color.toHex() +
                  '; color:' +
                  list_color.toHex()),
                  example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                  ' ' +
                    examples[i] +
                    ' -> ' +
                    list_color.toRGB() +
                    ' -> ' +
                    list_color.toHex()
                );
                list_item.appendChild(example_div),
                  list_item.appendChild(list_item_value),
                  xml.appendChild(list_item);
              } catch (e) {}
            return xml;
          });
      };
    },
    './node_modules/canvg/lib/index.es.js': (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AElement: () => AElement,
          AnimateColorElement: () => AnimateColorElement,
          AnimateElement: () => AnimateElement,
          AnimateTransformElement: () => AnimateTransformElement,
          BoundingBox: () => BoundingBox,
          CB1: () => CB1,
          CB2: () => CB2,
          CB3: () => CB3,
          CB4: () => CB4,
          Canvg: () => Canvg,
          CircleElement: () => CircleElement,
          ClipPathElement: () => ClipPathElement,
          DefsElement: () => DefsElement,
          DescElement: () => DescElement,
          Document: () => Document,
          Element: () => Element,
          EllipseElement: () => EllipseElement,
          FeColorMatrixElement: () => FeColorMatrixElement,
          FeCompositeElement: () => FeCompositeElement,
          FeDropShadowElement: () => FeDropShadowElement,
          FeGaussianBlurElement: () => FeGaussianBlurElement,
          FeMorphologyElement: () => FeMorphologyElement,
          FilterElement: () => FilterElement,
          Font: () => Font,
          FontElement: () => FontElement,
          FontFaceElement: () => FontFaceElement,
          GElement: () => GElement,
          GlyphElement: () => GlyphElement,
          GradientElement: () => GradientElement,
          ImageElement: () => ImageElement,
          LineElement: () => LineElement,
          LinearGradientElement: () => LinearGradientElement,
          MarkerElement: () => MarkerElement,
          MaskElement: () => MaskElement,
          Matrix: () => Matrix,
          MissingGlyphElement: () => MissingGlyphElement,
          Mouse: () => Mouse,
          PSEUDO_ZERO: () => PSEUDO_ZERO,
          Parser: () => Parser,
          PathElement: () => PathElement,
          PathParser: () => PathParser,
          PatternElement: () => PatternElement,
          Point: () => Point,
          PolygonElement: () => PolygonElement,
          PolylineElement: () => PolylineElement,
          Property: () => Property,
          QB1: () => QB1,
          QB2: () => QB2,
          QB3: () => QB3,
          RadialGradientElement: () => RadialGradientElement,
          RectElement: () => RectElement,
          RenderedElement: () => RenderedElement,
          Rotate: () => Rotate,
          SVGElement: () => SVGElement,
          SVGFontLoader: () => SVGFontLoader,
          Scale: () => Scale,
          Screen: () => Screen,
          Skew: () => Skew,
          SkewX: () => SkewX,
          SkewY: () => SkewY,
          StopElement: () => StopElement,
          StyleElement: () => StyleElement,
          SymbolElement: () => SymbolElement,
          TRefElement: () => TRefElement,
          TSpanElement: () => TSpanElement,
          TextElement: () => TextElement,
          TextPathElement: () => TextPathElement,
          TitleElement: () => TitleElement,
          Transform: () => Transform,
          Translate: () => Translate,
          UnknownElement: () => UnknownElement,
          UseElement: () => UseElement,
          ViewPort: () => ViewPort,
          compressSpaces: () => compressSpaces,
          default: () => Canvg,
          getSelectorSpecificity: () => getSelectorSpecificity,
          normalizeAttributeName: () => normalizeAttributeName,
          normalizeColor: () => normalizeColor,
          parseExternalUrl: () => parseExternalUrl,
          presets: () => index,
          toNumbers: () => toNumbers,
          trimLeft: () => trimLeft,
          trimRight: () => trimRight,
          vectorMagnitude: () => vectorMagnitude,
          vectorsAngle: () => vectorsAngle,
          vectorsRatio: () => vectorsRatio,
        });
      __webpack_require__('./node_modules/core-js/modules/es.promise.js');
      var asyncToGenerator = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        defineProperty =
          (__webpack_require__(
            './node_modules/core-js/modules/es.string.match.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.replace.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.starts-with.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          )),
        raf =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.reduce.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.ends-with.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.split.js'
          ),
          __webpack_require__('./node_modules/raf/index.js')),
        rgbcolor =
          (__webpack_require__(
            './node_modules/core-js/modules/es.string.trim.js'
          ),
          __webpack_require__('./node_modules/rgbcolor/index.js')),
        t =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.index-of.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.includes.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.reverse.js'
          ),
          function (r, e) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, r) {
                  t.__proto__ = r;
                }) ||
              function (t, r) {
                for (var e in r)
                  Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
              })(r, e);
          });
      function r(r, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Class extends value ' + String(e) + ' is not a constructor or null'
          );
        function i() {
          this.constructor = r;
        }
        t(r, e),
          (r.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i()));
      }
      function i(t, r) {
        var e = t[0],
          i = t[1];
        return [
          e * Math.cos(r) - i * Math.sin(r),
          e * Math.sin(r) + i * Math.cos(r),
        ];
      }
      function a() {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        for (var e = 0; e < t.length; e++)
          if ('number' != typeof t[e])
            throw new Error(
              'assertNumbers arguments[' +
                e +
                '] is not a number. ' +
                typeof t[e] +
                ' == typeof ' +
                t[e]
            );
        return !0;
      }
      var n = Math.PI;
      function o(t, r, e) {
        (t.lArcFlag = 0 === t.lArcFlag ? 0 : 1),
          (t.sweepFlag = 0 === t.sweepFlag ? 0 : 1);
        var a = t.rX,
          o = t.rY,
          s = t.x,
          u = t.y;
        (a = Math.abs(t.rX)), (o = Math.abs(t.rY));
        var h = i([(r - s) / 2, (e - u) / 2], (-t.xRot / 180) * n),
          c = h[0],
          y = h[1],
          p = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(o, 2);
        1 < p && ((a *= Math.sqrt(p)), (o *= Math.sqrt(p))),
          (t.rX = a),
          (t.rY = o);
        var m =
            Math.pow(a, 2) * Math.pow(y, 2) + Math.pow(o, 2) * Math.pow(c, 2),
          O =
            (t.lArcFlag !== t.sweepFlag ? 1 : -1) *
            Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(o, 2) - m) / m)),
          l = ((a * y) / o) * O,
          T = ((-o * c) / a) * O,
          v = i([l, T], (t.xRot / 180) * n);
        (t.cX = v[0] + (r + s) / 2),
          (t.cY = v[1] + (e + u) / 2),
          (t.phi1 = Math.atan2((y - T) / o, (c - l) / a)),
          (t.phi2 = Math.atan2((-y - T) / o, (-c - l) / a)),
          0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * n),
          1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * n),
          (t.phi1 *= 180 / n),
          (t.phi2 *= 180 / n);
      }
      function s(t, r, e) {
        a(t, r, e);
        var i = t * t + r * r - e * e;
        if (0 > i) return [];
        if (0 === i)
          return [[(t * e) / (t * t + r * r), (r * e) / (t * t + r * r)]];
        var n = Math.sqrt(i);
        return [
          [
            (t * e + r * n) / (t * t + r * r),
            (r * e - t * n) / (t * t + r * r),
          ],
          [
            (t * e - r * n) / (t * t + r * r),
            (r * e + t * n) / (t * t + r * r),
          ],
        ];
      }
      var u,
        h = Math.PI / 180;
      function c(t, r, e) {
        return (1 - e) * t + e * r;
      }
      function y(t, r, e, i) {
        return t + Math.cos((i / 180) * n) * r + Math.sin((i / 180) * n) * e;
      }
      function p(t, r, e, i) {
        var a = 1e-6,
          n = r - t,
          o = e - r,
          s = 3 * n + 3 * (i - e) - 6 * o,
          u = 6 * (o - n),
          h = 3 * n;
        return Math.abs(s) < a
          ? [-h / u]
          : (function (t, r, e) {
              void 0 === e && (e = 1e-6);
              var i = (t * t) / 4 - r;
              if (i < -e) return [];
              if (i <= e) return [-t / 2];
              var a = Math.sqrt(i);
              return [-t / 2 - a, -t / 2 + a];
            })(u / s, h / s, a);
      }
      function m(t, r, e, i, a) {
        var n = 1 - a;
        return (
          t * (n * n * n) +
          r * (3 * n * n * a) +
          e * (3 * n * a * a) +
          i * (a * a * a)
        );
      }
      !(function (t) {
        function r() {
          return u(function (t, r, e) {
            return (
              t.relative &&
                (void 0 !== t.x1 && (t.x1 += r),
                void 0 !== t.y1 && (t.y1 += e),
                void 0 !== t.x2 && (t.x2 += r),
                void 0 !== t.y2 && (t.y2 += e),
                void 0 !== t.x && (t.x += r),
                void 0 !== t.y && (t.y += e),
                (t.relative = !1)),
              t
            );
          });
        }
        function e() {
          var t = NaN,
            r = NaN,
            e = NaN,
            i = NaN;
          return u(function (a, n, o) {
            return (
              a.type & _.SMOOTH_CURVE_TO &&
                ((a.type = _.CURVE_TO),
                (t = isNaN(t) ? n : t),
                (r = isNaN(r) ? o : r),
                (a.x1 = a.relative ? n - t : 2 * n - t),
                (a.y1 = a.relative ? o - r : 2 * o - r)),
              a.type & _.CURVE_TO
                ? ((t = a.relative ? n + a.x2 : a.x2),
                  (r = a.relative ? o + a.y2 : a.y2))
                : ((t = NaN), (r = NaN)),
              a.type & _.SMOOTH_QUAD_TO &&
                ((a.type = _.QUAD_TO),
                (e = isNaN(e) ? n : e),
                (i = isNaN(i) ? o : i),
                (a.x1 = a.relative ? n - e : 2 * n - e),
                (a.y1 = a.relative ? o - i : 2 * o - i)),
              a.type & _.QUAD_TO
                ? ((e = a.relative ? n + a.x1 : a.x1),
                  (i = a.relative ? o + a.y1 : a.y1))
                : ((e = NaN), (i = NaN)),
              a
            );
          });
        }
        function n() {
          var t = NaN,
            r = NaN;
          return u(function (e, i, a) {
            if (
              (e.type & _.SMOOTH_QUAD_TO &&
                ((e.type = _.QUAD_TO),
                (t = isNaN(t) ? i : t),
                (r = isNaN(r) ? a : r),
                (e.x1 = e.relative ? i - t : 2 * i - t),
                (e.y1 = e.relative ? a - r : 2 * a - r)),
              e.type & _.QUAD_TO)
            ) {
              (t = e.relative ? i + e.x1 : e.x1),
                (r = e.relative ? a + e.y1 : e.y1);
              var n = e.x1,
                o = e.y1;
              (e.type = _.CURVE_TO),
                (e.x1 = ((e.relative ? 0 : i) + 2 * n) / 3),
                (e.y1 = ((e.relative ? 0 : a) + 2 * o) / 3),
                (e.x2 = (e.x + 2 * n) / 3),
                (e.y2 = (e.y + 2 * o) / 3);
            } else (t = NaN), (r = NaN);
            return e;
          });
        }
        function u(t) {
          var r = 0,
            e = 0,
            i = NaN,
            a = NaN;
          return function (n) {
            if (isNaN(i) && !(n.type & _.MOVE_TO))
              throw new Error('path must start with moveto');
            var o = t(n, r, e, i, a);
            return (
              n.type & _.CLOSE_PATH && ((r = i), (e = a)),
              void 0 !== n.x && (r = n.relative ? r + n.x : n.x),
              void 0 !== n.y && (e = n.relative ? e + n.y : n.y),
              n.type & _.MOVE_TO && ((i = r), (a = e)),
              o
            );
          };
        }
        function O(t, r, e, i, n, o) {
          return (
            a(t, r, e, i, n, o),
            u(function (a, s, u, h) {
              var c = a.x1,
                y = a.x2,
                p = a.relative && !isNaN(h),
                m = void 0 !== a.x ? a.x : p ? 0 : s,
                O = void 0 !== a.y ? a.y : p ? 0 : u;
              function l(t) {
                return t * t;
              }
              a.type & _.HORIZ_LINE_TO &&
                0 !== r &&
                ((a.type = _.LINE_TO), (a.y = a.relative ? 0 : u)),
                a.type & _.VERT_LINE_TO &&
                  0 !== e &&
                  ((a.type = _.LINE_TO), (a.x = a.relative ? 0 : s)),
                void 0 !== a.x && (a.x = a.x * t + O * e + (p ? 0 : n)),
                void 0 !== a.y && (a.y = m * r + a.y * i + (p ? 0 : o)),
                void 0 !== a.x1 && (a.x1 = a.x1 * t + a.y1 * e + (p ? 0 : n)),
                void 0 !== a.y1 && (a.y1 = c * r + a.y1 * i + (p ? 0 : o)),
                void 0 !== a.x2 && (a.x2 = a.x2 * t + a.y2 * e + (p ? 0 : n)),
                void 0 !== a.y2 && (a.y2 = y * r + a.y2 * i + (p ? 0 : o));
              var T = t * i - r * e;
              if (
                void 0 !== a.xRot &&
                (1 !== t || 0 !== r || 0 !== e || 1 !== i)
              )
                if (0 === T)
                  delete a.rX,
                    delete a.rY,
                    delete a.xRot,
                    delete a.lArcFlag,
                    delete a.sweepFlag,
                    (a.type = _.LINE_TO);
                else {
                  var v = (a.xRot * Math.PI) / 180,
                    f = Math.sin(v),
                    N = Math.cos(v),
                    x = 1 / l(a.rX),
                    d = 1 / l(a.rY),
                    E = l(N) * x + l(f) * d,
                    A = 2 * f * N * (x - d),
                    C = l(f) * x + l(N) * d,
                    M = E * i * i - A * r * i + C * r * r,
                    R = A * (t * i + r * e) - 2 * (E * e * i + C * t * r),
                    g = E * e * e - A * t * e + C * t * t,
                    I = ((Math.atan2(R, M - g) + Math.PI) % Math.PI) / 2,
                    S = Math.sin(I),
                    L = Math.cos(I);
                  (a.rX =
                    Math.abs(T) / Math.sqrt(M * l(L) + R * S * L + g * l(S))),
                    (a.rY =
                      Math.abs(T) / Math.sqrt(M * l(S) - R * S * L + g * l(L))),
                    (a.xRot = (180 * I) / Math.PI);
                }
              return (
                void 0 !== a.sweepFlag &&
                  0 > T &&
                  (a.sweepFlag = +!a.sweepFlag),
                a
              );
            })
          );
        }
        (t.ROUND = function (t) {
          function r(r) {
            return Math.round(r * t) / t;
          }
          return (
            void 0 === t && (t = 1e13),
            a(t),
            function (t) {
              return (
                void 0 !== t.x1 && (t.x1 = r(t.x1)),
                void 0 !== t.y1 && (t.y1 = r(t.y1)),
                void 0 !== t.x2 && (t.x2 = r(t.x2)),
                void 0 !== t.y2 && (t.y2 = r(t.y2)),
                void 0 !== t.x && (t.x = r(t.x)),
                void 0 !== t.y && (t.y = r(t.y)),
                void 0 !== t.rX && (t.rX = r(t.rX)),
                void 0 !== t.rY && (t.rY = r(t.rY)),
                t
              );
            }
          );
        }),
          (t.TO_ABS = r),
          (t.TO_REL = function () {
            return u(function (t, r, e) {
              return (
                t.relative ||
                  (void 0 !== t.x1 && (t.x1 -= r),
                  void 0 !== t.y1 && (t.y1 -= e),
                  void 0 !== t.x2 && (t.x2 -= r),
                  void 0 !== t.y2 && (t.y2 -= e),
                  void 0 !== t.x && (t.x -= r),
                  void 0 !== t.y && (t.y -= e),
                  (t.relative = !0)),
                t
              );
            });
          }),
          (t.NORMALIZE_HVZ = function (t, r, e) {
            return (
              void 0 === t && (t = !0),
              void 0 === r && (r = !0),
              void 0 === e && (e = !0),
              u(function (i, a, n, o, s) {
                if (isNaN(o) && !(i.type & _.MOVE_TO))
                  throw new Error('path must start with moveto');
                return (
                  r &&
                    i.type & _.HORIZ_LINE_TO &&
                    ((i.type = _.LINE_TO), (i.y = i.relative ? 0 : n)),
                  e &&
                    i.type & _.VERT_LINE_TO &&
                    ((i.type = _.LINE_TO), (i.x = i.relative ? 0 : a)),
                  t &&
                    i.type & _.CLOSE_PATH &&
                    ((i.type = _.LINE_TO),
                    (i.x = i.relative ? o - a : o),
                    (i.y = i.relative ? s - n : s)),
                  i.type & _.ARC &&
                    (0 === i.rX || 0 === i.rY) &&
                    ((i.type = _.LINE_TO),
                    delete i.rX,
                    delete i.rY,
                    delete i.xRot,
                    delete i.lArcFlag,
                    delete i.sweepFlag),
                  i
                );
              })
            );
          }),
          (t.NORMALIZE_ST = e),
          (t.QT_TO_C = n),
          (t.INFO = u),
          (t.SANITIZE = function (t) {
            void 0 === t && (t = 0), a(t);
            var r = NaN,
              e = NaN,
              i = NaN,
              n = NaN;
            return u(function (a, o, s, u, h) {
              var c = Math.abs,
                y = !1,
                p = 0,
                m = 0;
              if (
                (a.type & _.SMOOTH_CURVE_TO &&
                  ((p = isNaN(r) ? 0 : o - r), (m = isNaN(e) ? 0 : s - e)),
                a.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO)
                  ? ((r = a.relative ? o + a.x2 : a.x2),
                    (e = a.relative ? s + a.y2 : a.y2))
                  : ((r = NaN), (e = NaN)),
                a.type & _.SMOOTH_QUAD_TO
                  ? ((i = isNaN(i) ? o : 2 * o - i),
                    (n = isNaN(n) ? s : 2 * s - n))
                  : a.type & _.QUAD_TO
                  ? ((i = a.relative ? o + a.x1 : a.x1),
                    (n = a.relative ? s + a.y1 : a.y2))
                  : ((i = NaN), (n = NaN)),
                a.type & _.LINE_COMMANDS ||
                  (a.type & _.ARC &&
                    (0 === a.rX || 0 === a.rY || !a.lArcFlag)) ||
                  a.type & _.CURVE_TO ||
                  a.type & _.SMOOTH_CURVE_TO ||
                  a.type & _.QUAD_TO ||
                  a.type & _.SMOOTH_QUAD_TO)
              ) {
                var O = void 0 === a.x ? 0 : a.relative ? a.x : a.x - o,
                  l = void 0 === a.y ? 0 : a.relative ? a.y : a.y - s;
                (p = isNaN(i)
                  ? void 0 === a.x1
                    ? p
                    : a.relative
                    ? a.x
                    : a.x1 - o
                  : i - o),
                  (m = isNaN(n)
                    ? void 0 === a.y1
                      ? m
                      : a.relative
                      ? a.y
                      : a.y1 - s
                    : n - s);
                var T = void 0 === a.x2 ? 0 : a.relative ? a.x : a.x2 - o,
                  v = void 0 === a.y2 ? 0 : a.relative ? a.y : a.y2 - s;
                c(O) <= t &&
                  c(l) <= t &&
                  c(p) <= t &&
                  c(m) <= t &&
                  c(T) <= t &&
                  c(v) <= t &&
                  (y = !0);
              }
              return (
                a.type & _.CLOSE_PATH &&
                  c(o - u) <= t &&
                  c(s - h) <= t &&
                  (y = !0),
                y ? [] : a
              );
            });
          }),
          (t.MATRIX = O),
          (t.ROTATE = function (t, r, e) {
            void 0 === r && (r = 0), void 0 === e && (e = 0), a(t, r, e);
            var i = Math.sin(t),
              n = Math.cos(t);
            return O(n, i, -i, n, r - r * n + e * i, e - r * i - e * n);
          }),
          (t.TRANSLATE = function (t, r) {
            return void 0 === r && (r = 0), a(t, r), O(1, 0, 0, 1, t, r);
          }),
          (t.SCALE = function (t, r) {
            return void 0 === r && (r = t), a(t, r), O(t, 0, 0, r, 0, 0);
          }),
          (t.SKEW_X = function (t) {
            return a(t), O(1, 0, Math.atan(t), 1, 0, 0);
          }),
          (t.SKEW_Y = function (t) {
            return a(t), O(1, Math.atan(t), 0, 1, 0, 0);
          }),
          (t.X_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), a(t), O(-1, 0, 0, 1, t, 0);
          }),
          (t.Y_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), a(t), O(1, 0, 0, -1, 0, t);
          }),
          (t.A_TO_C = function () {
            return u(function (t, r, e) {
              return _.ARC === t.type
                ? (function (t, r, e) {
                    var a, n, s, u;
                    t.cX || o(t, r, e);
                    for (
                      var y = Math.min(t.phi1, t.phi2),
                        p = Math.max(t.phi1, t.phi2) - y,
                        m = Math.ceil(p / 90),
                        O = new Array(m),
                        l = r,
                        T = e,
                        v = 0;
                      v < m;
                      v++
                    ) {
                      var f = c(t.phi1, t.phi2, v / m),
                        N = c(t.phi1, t.phi2, (v + 1) / m),
                        x = N - f,
                        d = (4 / 3) * Math.tan((x * h) / 4),
                        E = [
                          Math.cos(f * h) - d * Math.sin(f * h),
                          Math.sin(f * h) + d * Math.cos(f * h),
                        ],
                        A = E[0],
                        C = E[1],
                        M = [Math.cos(N * h), Math.sin(N * h)],
                        R = M[0],
                        g = M[1],
                        I = [R + d * Math.sin(N * h), g - d * Math.cos(N * h)],
                        S = I[0],
                        L = I[1];
                      O[v] = { relative: t.relative, type: _.CURVE_TO };
                      var H = function (r, e) {
                        var a = i([r * t.rX, e * t.rY], t.xRot),
                          n = a[0],
                          o = a[1];
                        return [t.cX + n, t.cY + o];
                      };
                      (a = H(A, C)),
                        (O[v].x1 = a[0]),
                        (O[v].y1 = a[1]),
                        (n = H(S, L)),
                        (O[v].x2 = n[0]),
                        (O[v].y2 = n[1]),
                        (s = H(R, g)),
                        (O[v].x = s[0]),
                        (O[v].y = s[1]),
                        t.relative &&
                          ((O[v].x1 -= l),
                          (O[v].y1 -= T),
                          (O[v].x2 -= l),
                          (O[v].y2 -= T),
                          (O[v].x -= l),
                          (O[v].y -= T)),
                        (l = (u = [O[v].x, O[v].y])[0]),
                        (T = u[1]);
                    }
                    return O;
                  })(t, t.relative ? 0 : r, t.relative ? 0 : e)
                : t;
            });
          }),
          (t.ANNOTATE_ARCS = function () {
            return u(function (t, r, e) {
              return (
                t.relative && ((r = 0), (e = 0)),
                _.ARC === t.type && o(t, r, e),
                t
              );
            });
          }),
          (t.CLONE = function l() {
            return function (t) {
              var r = {};
              for (var e in t) r[e] = t[e];
              return r;
            };
          }),
          (t.CALCULATE_BOUNDS = function () {
            var i = r(),
              a = n(),
              h = e(),
              c = u(function (r, e, n) {
                var u = h(
                  a(
                    i(
                      (function (t) {
                        var r = {};
                        for (var e in t) r[e] = t[e];
                        return r;
                      })(r)
                    )
                  )
                );
                function O(t) {
                  t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
                }
                function l(t) {
                  t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
                }
                if (
                  (u.type & _.DRAWING_COMMANDS && (O(e), l(n)),
                  u.type & _.HORIZ_LINE_TO && O(u.x),
                  u.type & _.VERT_LINE_TO && l(u.y),
                  u.type & _.LINE_TO && (O(u.x), l(u.y)),
                  u.type & _.CURVE_TO)
                ) {
                  O(u.x), l(u.y);
                  for (var T = 0, v = p(e, u.x1, u.x2, u.x); T < v.length; T++)
                    0 < (w = v[T]) && 1 > w && O(m(e, u.x1, u.x2, u.x, w));
                  for (var f = 0, N = p(n, u.y1, u.y2, u.y); f < N.length; f++)
                    0 < (w = N[f]) && 1 > w && l(m(n, u.y1, u.y2, u.y, w));
                }
                if (u.type & _.ARC) {
                  O(u.x), l(u.y), o(u, e, n);
                  for (
                    var x = (u.xRot / 180) * Math.PI,
                      d = Math.cos(x) * u.rX,
                      E = Math.sin(x) * u.rX,
                      A = -Math.sin(x) * u.rY,
                      C = Math.cos(x) * u.rY,
                      M =
                        u.phi1 < u.phi2
                          ? [u.phi1, u.phi2]
                          : -180 > u.phi2
                          ? [u.phi2 + 360, u.phi1 + 360]
                          : [u.phi2, u.phi1],
                      R = M[0],
                      g = M[1],
                      I = function (t) {
                        var r = t[0],
                          e = t[1],
                          i = (180 * Math.atan2(e, r)) / Math.PI;
                        return i < R ? i + 360 : i;
                      },
                      S = 0,
                      L = s(A, -d, 0).map(I);
                    S < L.length;
                    S++
                  )
                    (w = L[S]) > R && w < g && O(y(u.cX, d, A, w));
                  for (var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++) {
                    var w;
                    (w = U[H]) > R && w < g && l(y(u.cY, E, C, w));
                  }
                }
                return r;
              });
            return (
              (c.minX = 1 / 0),
              (c.maxX = -1 / 0),
              (c.minY = 1 / 0),
              (c.maxY = -1 / 0),
              c
            );
          });
      })(u || (u = {}));
      var O,
        l = (function () {
          function t() {}
          return (
            (t.prototype.round = function (t) {
              return this.transform(u.ROUND(t));
            }),
            (t.prototype.toAbs = function () {
              return this.transform(u.TO_ABS());
            }),
            (t.prototype.toRel = function () {
              return this.transform(u.TO_REL());
            }),
            (t.prototype.normalizeHVZ = function (t, r, e) {
              return this.transform(u.NORMALIZE_HVZ(t, r, e));
            }),
            (t.prototype.normalizeST = function () {
              return this.transform(u.NORMALIZE_ST());
            }),
            (t.prototype.qtToC = function () {
              return this.transform(u.QT_TO_C());
            }),
            (t.prototype.aToC = function () {
              return this.transform(u.A_TO_C());
            }),
            (t.prototype.sanitize = function (t) {
              return this.transform(u.SANITIZE(t));
            }),
            (t.prototype.translate = function (t, r) {
              return this.transform(u.TRANSLATE(t, r));
            }),
            (t.prototype.scale = function (t, r) {
              return this.transform(u.SCALE(t, r));
            }),
            (t.prototype.rotate = function (t, r, e) {
              return this.transform(u.ROTATE(t, r, e));
            }),
            (t.prototype.matrix = function (t, r, e, i, a, n) {
              return this.transform(u.MATRIX(t, r, e, i, a, n));
            }),
            (t.prototype.skewX = function (t) {
              return this.transform(u.SKEW_X(t));
            }),
            (t.prototype.skewY = function (t) {
              return this.transform(u.SKEW_Y(t));
            }),
            (t.prototype.xSymmetry = function (t) {
              return this.transform(u.X_AXIS_SYMMETRY(t));
            }),
            (t.prototype.ySymmetry = function (t) {
              return this.transform(u.Y_AXIS_SYMMETRY(t));
            }),
            (t.prototype.annotateArcs = function () {
              return this.transform(u.ANNOTATE_ARCS());
            }),
            t
          );
        })(),
        T = function (t) {
          return ' ' === t || '\t' === t || '\r' === t || '\n' === t;
        },
        v = function (t) {
          return (
            '0'.charCodeAt(0) <= t.charCodeAt(0) &&
            t.charCodeAt(0) <= '9'.charCodeAt(0)
          );
        },
        f = (function (t) {
          function e() {
            var r = t.call(this) || this;
            return (
              (r.curNumber = ''),
              (r.curCommandType = -1),
              (r.curCommandRelative = !1),
              (r.canParseCommandOrComma = !0),
              (r.curNumberHasExp = !1),
              (r.curNumberHasExpDigits = !1),
              (r.curNumberHasDecimal = !1),
              (r.curArgs = []),
              r
            );
          }
          return (
            r(e, t),
            (e.prototype.finish = function (t) {
              if (
                (void 0 === t && (t = []),
                this.parse(' ', t),
                0 !== this.curArgs.length || !this.canParseCommandOrComma)
              )
                throw new SyntaxError('Unterminated command at the path end.');
              return t;
            }),
            (e.prototype.parse = function (t, r) {
              var e = this;
              void 0 === r && (r = []);
              for (
                var i = function (t) {
                    r.push(t),
                      (e.curArgs.length = 0),
                      (e.canParseCommandOrComma = !0);
                  },
                  a = 0;
                a < t.length;
                a++
              ) {
                var n = t[a],
                  o = !(
                    this.curCommandType !== _.ARC ||
                    (3 !== this.curArgs.length && 4 !== this.curArgs.length) ||
                    1 !== this.curNumber.length ||
                    ('0' !== this.curNumber && '1' !== this.curNumber)
                  ),
                  s = v(n) && (('0' === this.curNumber && '0' === n) || o);
                if (!v(n) || s)
                  if ('e' !== n && 'E' !== n)
                    if (
                      ('-' !== n && '+' !== n) ||
                      !this.curNumberHasExp ||
                      this.curNumberHasExpDigits
                    )
                      if (
                        '.' !== n ||
                        this.curNumberHasExp ||
                        this.curNumberHasDecimal ||
                        o
                      ) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                          var u = Number(this.curNumber);
                          if (isNaN(u))
                            throw new SyntaxError(
                              'Invalid number ending at ' + a
                            );
                          if (this.curCommandType === _.ARC)
                            if (
                              0 === this.curArgs.length ||
                              1 === this.curArgs.length
                            ) {
                              if (0 > u)
                                throw new SyntaxError(
                                  'Expected positive number, got "' +
                                    u +
                                    '" at index "' +
                                    a +
                                    '"'
                                );
                            } else if (
                              (3 === this.curArgs.length ||
                                4 === this.curArgs.length) &&
                              '0' !== this.curNumber &&
                              '1' !== this.curNumber
                            )
                              throw new SyntaxError(
                                'Expected a flag, got "' +
                                  this.curNumber +
                                  '" at index "' +
                                  a +
                                  '"'
                              );
                          this.curArgs.push(u),
                            this.curArgs.length === N[this.curCommandType] &&
                              (_.HORIZ_LINE_TO === this.curCommandType
                                ? i({
                                    type: _.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: u,
                                  })
                                : _.VERT_LINE_TO === this.curCommandType
                                ? i({
                                    type: _.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: u,
                                  })
                                : this.curCommandType === _.MOVE_TO ||
                                  this.curCommandType === _.LINE_TO ||
                                  this.curCommandType === _.SMOOTH_QUAD_TO
                                ? (i({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1],
                                  }),
                                  _.MOVE_TO === this.curCommandType &&
                                    (this.curCommandType = _.LINE_TO))
                                : this.curCommandType === _.CURVE_TO
                                ? i({
                                    type: _.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5],
                                  })
                                : this.curCommandType === _.SMOOTH_CURVE_TO
                                ? i({
                                    type: _.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === _.QUAD_TO
                                ? i({
                                    type: _.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === _.ARC &&
                                  i({
                                    type: _.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6],
                                  })),
                            (this.curNumber = ''),
                            (this.curNumberHasExpDigits = !1),
                            (this.curNumberHasExp = !1),
                            (this.curNumberHasDecimal = !1),
                            (this.canParseCommandOrComma = !0);
                        }
                        if (!T(n))
                          if (',' === n && this.canParseCommandOrComma)
                            this.canParseCommandOrComma = !1;
                          else if ('+' !== n && '-' !== n && '.' !== n)
                            if (s)
                              (this.curNumber = n),
                                (this.curNumberHasDecimal = !1);
                            else {
                              if (0 !== this.curArgs.length)
                                throw new SyntaxError(
                                  'Unterminated command at index ' + a + '.'
                                );
                              if (!this.canParseCommandOrComma)
                                throw new SyntaxError(
                                  'Unexpected character "' +
                                    n +
                                    '" at index ' +
                                    a +
                                    '. Command cannot follow comma'
                                );
                              if (
                                ((this.canParseCommandOrComma = !1),
                                'z' !== n && 'Z' !== n)
                              )
                                if ('h' === n || 'H' === n)
                                  (this.curCommandType = _.HORIZ_LINE_TO),
                                    (this.curCommandRelative = 'h' === n);
                                else if ('v' === n || 'V' === n)
                                  (this.curCommandType = _.VERT_LINE_TO),
                                    (this.curCommandRelative = 'v' === n);
                                else if ('m' === n || 'M' === n)
                                  (this.curCommandType = _.MOVE_TO),
                                    (this.curCommandRelative = 'm' === n);
                                else if ('l' === n || 'L' === n)
                                  (this.curCommandType = _.LINE_TO),
                                    (this.curCommandRelative = 'l' === n);
                                else if ('c' === n || 'C' === n)
                                  (this.curCommandType = _.CURVE_TO),
                                    (this.curCommandRelative = 'c' === n);
                                else if ('s' === n || 'S' === n)
                                  (this.curCommandType = _.SMOOTH_CURVE_TO),
                                    (this.curCommandRelative = 's' === n);
                                else if ('q' === n || 'Q' === n)
                                  (this.curCommandType = _.QUAD_TO),
                                    (this.curCommandRelative = 'q' === n);
                                else if ('t' === n || 'T' === n)
                                  (this.curCommandType = _.SMOOTH_QUAD_TO),
                                    (this.curCommandRelative = 't' === n);
                                else {
                                  if ('a' !== n && 'A' !== n)
                                    throw new SyntaxError(
                                      'Unexpected character "' +
                                        n +
                                        '" at index ' +
                                        a +
                                        '.'
                                    );
                                  (this.curCommandType = _.ARC),
                                    (this.curCommandRelative = 'a' === n);
                                }
                              else
                                r.push({ type: _.CLOSE_PATH }),
                                  (this.canParseCommandOrComma = !0),
                                  (this.curCommandType = -1);
                            }
                          else
                            (this.curNumber = n),
                              (this.curNumberHasDecimal = '.' === n);
                      } else
                        (this.curNumber += n), (this.curNumberHasDecimal = !0);
                    else this.curNumber += n;
                  else (this.curNumber += n), (this.curNumberHasExp = !0);
                else
                  (this.curNumber += n),
                    (this.curNumberHasExpDigits = this.curNumberHasExp);
              }
              return r;
            }),
            (e.prototype.transform = function (t) {
              return Object.create(this, {
                parse: {
                  value: function (r, e) {
                    void 0 === e && (e = []);
                    for (
                      var i = 0,
                        a = Object.getPrototypeOf(this).parse.call(this, r);
                      i < a.length;
                      i++
                    ) {
                      var n = a[i],
                        o = t(n);
                      Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
                    }
                    return e;
                  },
                },
              });
            }),
            e
          );
        })(l),
        _ = (function (t) {
          function i(r) {
            var e = t.call(this) || this;
            return (e.commands = 'string' == typeof r ? i.parse(r) : r), e;
          }
          return (
            r(i, t),
            (i.prototype.encode = function () {
              return i.encode(this.commands);
            }),
            (i.prototype.getBounds = function () {
              var t = u.CALCULATE_BOUNDS();
              return this.transform(t), t;
            }),
            (i.prototype.transform = function (t) {
              for (var r = [], e = 0, i = this.commands; e < i.length; e++) {
                var a = t(i[e]);
                Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
              }
              return (this.commands = r), this;
            }),
            (i.encode = function (t) {
              return (function e(t) {
                var r = '';
                Array.isArray(t) || (t = [t]);
                for (var e = 0; e < t.length; e++) {
                  var i = t[e];
                  if (i.type === _.CLOSE_PATH) r += 'z';
                  else if (i.type === _.HORIZ_LINE_TO)
                    r += (i.relative ? 'h' : 'H') + i.x;
                  else if (i.type === _.VERT_LINE_TO)
                    r += (i.relative ? 'v' : 'V') + i.y;
                  else if (i.type === _.MOVE_TO)
                    r += (i.relative ? 'm' : 'M') + i.x + ' ' + i.y;
                  else if (i.type === _.LINE_TO)
                    r += (i.relative ? 'l' : 'L') + i.x + ' ' + i.y;
                  else if (i.type === _.CURVE_TO)
                    r +=
                      (i.relative ? 'c' : 'C') +
                      i.x1 +
                      ' ' +
                      i.y1 +
                      ' ' +
                      i.x2 +
                      ' ' +
                      i.y2 +
                      ' ' +
                      i.x +
                      ' ' +
                      i.y;
                  else if (i.type === _.SMOOTH_CURVE_TO)
                    r +=
                      (i.relative ? 's' : 'S') +
                      i.x2 +
                      ' ' +
                      i.y2 +
                      ' ' +
                      i.x +
                      ' ' +
                      i.y;
                  else if (i.type === _.QUAD_TO)
                    r +=
                      (i.relative ? 'q' : 'Q') +
                      i.x1 +
                      ' ' +
                      i.y1 +
                      ' ' +
                      i.x +
                      ' ' +
                      i.y;
                  else if (i.type === _.SMOOTH_QUAD_TO)
                    r += (i.relative ? 't' : 'T') + i.x + ' ' + i.y;
                  else {
                    if (i.type !== _.ARC)
                      throw new Error(
                        'Unexpected command type "' +
                          i.type +
                          '" at index ' +
                          e +
                          '.'
                      );
                    r +=
                      (i.relative ? 'a' : 'A') +
                      i.rX +
                      ' ' +
                      i.rY +
                      ' ' +
                      i.xRot +
                      ' ' +
                      +i.lArcFlag +
                      ' ' +
                      +i.sweepFlag +
                      ' ' +
                      i.x +
                      ' ' +
                      i.y;
                  }
                }
                return r;
              })(t);
            }),
            (i.parse = function (t) {
              var r = new f(),
                e = [];
              return r.parse(t, e), r.finish(e), e;
            }),
            (i.CLOSE_PATH = 1),
            (i.MOVE_TO = 2),
            (i.HORIZ_LINE_TO = 4),
            (i.VERT_LINE_TO = 8),
            (i.LINE_TO = 16),
            (i.CURVE_TO = 32),
            (i.SMOOTH_CURVE_TO = 64),
            (i.QUAD_TO = 128),
            (i.SMOOTH_QUAD_TO = 256),
            (i.ARC = 512),
            (i.LINE_COMMANDS = i.LINE_TO | i.HORIZ_LINE_TO | i.VERT_LINE_TO),
            (i.DRAWING_COMMANDS =
              i.HORIZ_LINE_TO |
              i.VERT_LINE_TO |
              i.LINE_TO |
              i.CURVE_TO |
              i.SMOOTH_CURVE_TO |
              i.QUAD_TO |
              i.SMOOTH_QUAD_TO |
              i.ARC),
            i
          );
        })(l),
        N =
          (((O = {})[_.MOVE_TO] = 2),
          (O[_.LINE_TO] = 2),
          (O[_.HORIZ_LINE_TO] = 1),
          (O[_.VERT_LINE_TO] = 1),
          (O[_.CLOSE_PATH] = 0),
          (O[_.QUAD_TO] = 4),
          (O[_.SMOOTH_QUAD_TO] = 2),
          (O[_.CURVE_TO] = 6),
          (O[_.SMOOTH_CURVE_TO] = 4),
          (O[_.ARC] = 7),
          O);
      __webpack_require__(
        './node_modules/core-js/modules/es.regexp.to-string.js'
      );
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      var mulTable = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        shgTable = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function getImageDataFromCanvas(canvas, topX, topY, width, height) {
        if (
          ('string' == typeof canvas &&
            (canvas = document.getElementById(canvas)),
          !canvas || 'object' !== _typeof(canvas) || !('getContext' in canvas))
        )
          throw new TypeError(
            'Expecting canvas with `getContext` method in processCanvasRGB(A) calls!'
          );
        var context = canvas.getContext('2d');
        try {
          return context.getImageData(topX, topY, width, height);
        } catch (e) {
          throw new Error('unable to access image data: ' + e);
        }
      }
      function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
        if (!(isNaN(radius) || radius < 1)) {
          radius |= 0;
          var imageData = getImageDataFromCanvas(
            canvas,
            topX,
            topY,
            width,
            height
          );
          (imageData = (function processImageDataRGBA(
            imageData,
            topX,
            topY,
            width,
            height,
            radius
          ) {
            for (
              var stackEnd,
                pixels = imageData.data,
                div = 2 * radius + 1,
                widthMinus1 = width - 1,
                heightMinus1 = height - 1,
                radiusPlus1 = radius + 1,
                sumFactor = (radiusPlus1 * (radiusPlus1 + 1)) / 2,
                stackStart = new BlurStack(),
                stack = stackStart,
                i = 1;
              i < div;
              i++
            )
              (stack = stack.next = new BlurStack()),
                i === radiusPlus1 && (stackEnd = stack);
            stack.next = stackStart;
            for (
              var stackIn = null,
                stackOut = null,
                yw = 0,
                yi = 0,
                mulSum = mulTable[radius],
                shgSum = shgTable[radius],
                y = 0;
              y < height;
              y++
            ) {
              stack = stackStart;
              for (
                var pr = pixels[yi],
                  pg = pixels[yi + 1],
                  pb = pixels[yi + 2],
                  pa = pixels[yi + 3],
                  _i = 0;
                _i < radiusPlus1;
                _i++
              )
                (stack.r = pr),
                  (stack.g = pg),
                  (stack.b = pb),
                  (stack.a = pa),
                  (stack = stack.next);
              for (
                var rInSum = 0,
                  gInSum = 0,
                  bInSum = 0,
                  aInSum = 0,
                  rOutSum = radiusPlus1 * pr,
                  gOutSum = radiusPlus1 * pg,
                  bOutSum = radiusPlus1 * pb,
                  aOutSum = radiusPlus1 * pa,
                  rSum = sumFactor * pr,
                  gSum = sumFactor * pg,
                  bSum = sumFactor * pb,
                  aSum = sumFactor * pa,
                  _i2 = 1;
                _i2 < radiusPlus1;
                _i2++
              ) {
                var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2),
                  r = pixels[p],
                  g = pixels[p + 1],
                  b = pixels[p + 2],
                  a = pixels[p + 3],
                  rbs = radiusPlus1 - _i2;
                (rSum += (stack.r = r) * rbs),
                  (gSum += (stack.g = g) * rbs),
                  (bSum += (stack.b = b) * rbs),
                  (aSum += (stack.a = a) * rbs),
                  (rInSum += r),
                  (gInSum += g),
                  (bInSum += b),
                  (aInSum += a),
                  (stack = stack.next);
              }
              (stackIn = stackStart), (stackOut = stackEnd);
              for (var x = 0; x < width; x++) {
                var paInitial = (aSum * mulSum) >> shgSum;
                if (((pixels[yi + 3] = paInitial), 0 !== paInitial)) {
                  var _a2 = 255 / paInitial;
                  (pixels[yi] = ((rSum * mulSum) >> shgSum) * _a2),
                    (pixels[yi + 1] = ((gSum * mulSum) >> shgSum) * _a2),
                    (pixels[yi + 2] = ((bSum * mulSum) >> shgSum) * _a2);
                } else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
                (rSum -= rOutSum),
                  (gSum -= gOutSum),
                  (bSum -= bOutSum),
                  (aSum -= aOutSum),
                  (rOutSum -= stackIn.r),
                  (gOutSum -= stackIn.g),
                  (bOutSum -= stackIn.b),
                  (aOutSum -= stackIn.a);
                var _p = x + radius + 1;
                (_p = (yw + (_p < widthMinus1 ? _p : widthMinus1)) << 2),
                  (rSum += rInSum += stackIn.r = pixels[_p]),
                  (gSum += gInSum += stackIn.g = pixels[_p + 1]),
                  (bSum += bInSum += stackIn.b = pixels[_p + 2]),
                  (aSum += aInSum += stackIn.a = pixels[_p + 3]),
                  (stackIn = stackIn.next);
                var _stackOut = stackOut,
                  _r = _stackOut.r,
                  _g = _stackOut.g,
                  _b = _stackOut.b,
                  _a = _stackOut.a;
                (rOutSum += _r),
                  (gOutSum += _g),
                  (bOutSum += _b),
                  (aOutSum += _a),
                  (rInSum -= _r),
                  (gInSum -= _g),
                  (bInSum -= _b),
                  (aInSum -= _a),
                  (stackOut = stackOut.next),
                  (yi += 4);
              }
              yw += width;
            }
            for (var _x = 0; _x < width; _x++) {
              var _pr = pixels[(yi = _x << 2)],
                _pg = pixels[yi + 1],
                _pb = pixels[yi + 2],
                _pa = pixels[yi + 3],
                _rOutSum = radiusPlus1 * _pr,
                _gOutSum = radiusPlus1 * _pg,
                _bOutSum = radiusPlus1 * _pb,
                _aOutSum = radiusPlus1 * _pa,
                _rSum = sumFactor * _pr,
                _gSum = sumFactor * _pg,
                _bSum = sumFactor * _pb,
                _aSum = sumFactor * _pa;
              stack = stackStart;
              for (var _i3 = 0; _i3 < radiusPlus1; _i3++)
                (stack.r = _pr),
                  (stack.g = _pg),
                  (stack.b = _pb),
                  (stack.a = _pa),
                  (stack = stack.next);
              for (
                var yp = width,
                  _gInSum = 0,
                  _bInSum = 0,
                  _aInSum = 0,
                  _rInSum = 0,
                  _i4 = 1;
                _i4 <= radius;
                _i4++
              ) {
                yi = (yp + _x) << 2;
                var _rbs = radiusPlus1 - _i4;
                (_rSum += (stack.r = _pr = pixels[yi]) * _rbs),
                  (_gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs),
                  (_bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs),
                  (_aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs),
                  (_rInSum += _pr),
                  (_gInSum += _pg),
                  (_bInSum += _pb),
                  (_aInSum += _pa),
                  (stack = stack.next),
                  _i4 < heightMinus1 && (yp += width);
              }
              (yi = _x), (stackIn = stackStart), (stackOut = stackEnd);
              for (var _y = 0; _y < height; _y++) {
                var _p2 = yi << 2;
                (pixels[_p2 + 3] = _pa = (_aSum * mulSum) >> shgSum),
                  _pa > 0
                    ? ((_pa = 255 / _pa),
                      (pixels[_p2] = ((_rSum * mulSum) >> shgSum) * _pa),
                      (pixels[_p2 + 1] = ((_gSum * mulSum) >> shgSum) * _pa),
                      (pixels[_p2 + 2] = ((_bSum * mulSum) >> shgSum) * _pa))
                    : (pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0),
                  (_rSum -= _rOutSum),
                  (_gSum -= _gOutSum),
                  (_bSum -= _bOutSum),
                  (_aSum -= _aOutSum),
                  (_rOutSum -= stackIn.r),
                  (_gOutSum -= stackIn.g),
                  (_bOutSum -= stackIn.b),
                  (_aOutSum -= stackIn.a),
                  (_p2 =
                    (_x +
                      ((_p2 = _y + radiusPlus1) < heightMinus1
                        ? _p2
                        : heightMinus1) *
                        width) <<
                    2),
                  (_rSum += _rInSum += stackIn.r = pixels[_p2]),
                  (_gSum += _gInSum += stackIn.g = pixels[_p2 + 1]),
                  (_bSum += _bInSum += stackIn.b = pixels[_p2 + 2]),
                  (_aSum += _aInSum += stackIn.a = pixels[_p2 + 3]),
                  (stackIn = stackIn.next),
                  (_rOutSum += _pr = stackOut.r),
                  (_gOutSum += _pg = stackOut.g),
                  (_bOutSum += _pb = stackOut.b),
                  (_aOutSum += _pa = stackOut.a),
                  (_rInSum -= _pr),
                  (_gInSum -= _pg),
                  (_bInSum -= _pb),
                  (_aInSum -= _pa),
                  (stackOut = stackOut.next),
                  (yi += width);
              }
            }
            return imageData;
          })(imageData, 0, 0, width, height, radius)),
            canvas.getContext('2d').putImageData(imageData, topX, topY);
        }
      }
      var BlurStack = function BlurStack() {
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, BlurStack),
            (this.r = 0),
            (this.g = 0),
            (this.b = 0),
            (this.a = 0),
            (this.next = null);
        },
        process = __webpack_require__('./node_modules/process/browser.js');
      var index = Object.freeze({
        __proto__: null,
        offscreen: function offscreen() {
          var { DOMParser: DOMParserFallback } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            preset = {
              window: null,
              ignoreAnimation: !0,
              ignoreMouse: !0,
              DOMParser: DOMParserFallback,
              createCanvas: (width, height) =>
                new OffscreenCanvas(width, height),
              createImage: (url) =>
                (0, asyncToGenerator.Z)(function* () {
                  var response = yield fetch(url),
                    blob = yield response.blob();
                  return yield createImageBitmap(blob);
                })(),
            };
          return (
            ('undefined' == typeof DOMParser && void 0 !== DOMParserFallback) ||
              Reflect.deleteProperty(preset, 'DOMParser'),
            preset
          );
        },
        node: function node(_ref) {
          var { DOMParser, canvas, fetch } = _ref;
          return {
            window: null,
            ignoreAnimation: !0,
            ignoreMouse: !0,
            DOMParser,
            fetch,
            createCanvas: canvas.createCanvas,
            createImage: canvas.loadImage,
          };
        },
      });
      function compressSpaces(str) {
        return str.replace(/(?!\u3000)\s+/gm, ' ');
      }
      function trimLeft(str) {
        return str.replace(/^[\n \t]+/, '');
      }
      function trimRight(str) {
        return str.replace(/[\n \t]+$/, '');
      }
      function toNumbers(str) {
        return (
          (str || '').match(
            /-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm
          ) || []
        ).map(parseFloat);
      }
      var allUppercase = /^[A-Z-]+$/;
      function normalizeAttributeName(name) {
        return allUppercase.test(name) ? name.toLowerCase() : name;
      }
      function parseExternalUrl(url) {
        var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
        return urlMatch[2] || urlMatch[3] || urlMatch[4];
      }
      function normalizeColor(color) {
        if (!color.startsWith('rgb')) return color;
        var rgbParts = 3;
        return color.replace(/\d+(\.\d+)?/g, (num, isFloat) =>
          rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num
        );
      }
      var attributeRegex = /(\[[^\]]+\])/g,
        idRegex = /(#[^\s+>~.[:]+)/g,
        classRegex = /(\.[^\s+>~.[:]+)/g,
        pseudoElementRegex =
          /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
        pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi,
        pseudoClassRegex = /(:[^\s+>~.[:]+)/g,
        elementRegex = /([^\s+>~.[:]+)/g;
      function findSelectorMatch(selector, regex) {
        var matches = regex.exec(selector);
        return matches
          ? [selector.replace(regex, ' '), matches.length]
          : [selector, 0];
      }
      function getSelectorSpecificity(selector) {
        var specificity = [0, 0, 0],
          currentSelector = selector
            .replace(/:not\(([^)]*)\)/g, '     $1 ')
            .replace(/{[\s\S]*/gm, ' '),
          delta = 0;
        return (
          ([currentSelector, delta] = findSelectorMatch(
            currentSelector,
            attributeRegex
          )),
          (specificity[1] += delta),
          ([currentSelector, delta] = findSelectorMatch(
            currentSelector,
            idRegex
          )),
          (specificity[0] += delta),
          ([currentSelector, delta] = findSelectorMatch(
            currentSelector,
            classRegex
          )),
          (specificity[1] += delta),
          ([currentSelector, delta] = findSelectorMatch(
            currentSelector,
            pseudoElementRegex
          )),
          (specificity[2] += delta),
          ([currentSelector, delta] = findSelectorMatch(
            currentSelector,
            pseudoClassWithBracketsRegex
          )),
          (specificity[1] += delta),
          ([currentSelector, delta] = findSelectorMatch(
            currentSelector,
            pseudoClassRegex
          )),
          (specificity[1] += delta),
          (currentSelector = currentSelector
            .replace(/[*\s+>~]/g, ' ')
            .replace(/[#.]/g, ' ')),
          ([currentSelector, delta] = findSelectorMatch(
            currentSelector,
            elementRegex
          )),
          (specificity[2] += delta),
          specificity.join('')
        );
      }
      var PSEUDO_ZERO = 1e-8;
      function vectorMagnitude(v) {
        return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
      }
      function vectorsRatio(u, v) {
        return (
          (u[0] * v[0] + u[1] * v[1]) /
          (vectorMagnitude(u) * vectorMagnitude(v))
        );
      }
      function vectorsAngle(u, v) {
        return (
          (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v))
        );
      }
      function CB1(t) {
        return t * t * t;
      }
      function CB2(t) {
        return 3 * t * t * (1 - t);
      }
      function CB3(t) {
        return 3 * t * (1 - t) * (1 - t);
      }
      function CB4(t) {
        return (1 - t) * (1 - t) * (1 - t);
      }
      function QB1(t) {
        return t * t;
      }
      function QB2(t) {
        return 2 * t * (1 - t);
      }
      function QB3(t) {
        return (1 - t) * (1 - t);
      }
      class Property {
        constructor(document, name, value) {
          (this.document = document),
            (this.name = name),
            (this.value = value),
            (this.isNormalizedColor = !1);
        }
        static empty(document) {
          return new Property(document, 'EMPTY', '');
        }
        split() {
          var separator =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ' ',
            { document, name } = this;
          return compressSpaces(this.getString())
            .trim()
            .split(separator)
            .map((value) => new Property(document, name, value));
        }
        hasValue(zeroIsValue) {
          var { value } = this;
          return (
            null !== value &&
            '' !== value &&
            (zeroIsValue || 0 !== value) &&
            void 0 !== value
          );
        }
        isString(regexp) {
          var { value } = this,
            result = 'string' == typeof value;
          return result && regexp ? regexp.test(value) : result;
        }
        isUrlDefinition() {
          return this.isString(/^url\(/);
        }
        isPixels() {
          if (!this.hasValue()) return !1;
          var asString = this.getString();
          switch (!0) {
            case asString.endsWith('px'):
            case /^[0-9]+$/.test(asString):
              return !0;
            default:
              return !1;
          }
        }
        setValue(value) {
          return (this.value = value), this;
        }
        getValue(def) {
          return void 0 === def || this.hasValue() ? this.value : def;
        }
        getNumber(def) {
          if (!this.hasValue()) return void 0 === def ? 0 : parseFloat(def);
          var { value } = this,
            n = parseFloat(value);
          return this.isString(/%$/) && (n /= 100), n;
        }
        getString(def) {
          return void 0 === def || this.hasValue()
            ? void 0 === this.value
              ? ''
              : String(this.value)
            : String(def);
        }
        getColor(def) {
          var color = this.getString(def);
          return (
            this.isNormalizedColor ||
              ((this.isNormalizedColor = !0),
              (color = normalizeColor(color)),
              (this.value = color)),
            color
          );
        }
        getDpi() {
          return 96;
        }
        getRem() {
          return this.document.rootEmSize;
        }
        getEm() {
          return this.document.emSize;
        }
        getUnits() {
          return this.getString().replace(/[0-9.-]/g, '');
        }
        getPixels(axisOrIsFontSize) {
          var processPercent =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!this.hasValue()) return 0;
          var [axis, isFontSize] =
              'boolean' == typeof axisOrIsFontSize
                ? [void 0, axisOrIsFontSize]
                : [axisOrIsFontSize],
            { viewPort } = this.document.screen;
          switch (!0) {
            case this.isString(/vmin$/):
              return (
                (this.getNumber() / 100) *
                Math.min(viewPort.computeSize('x'), viewPort.computeSize('y'))
              );
            case this.isString(/vmax$/):
              return (
                (this.getNumber() / 100) *
                Math.max(viewPort.computeSize('x'), viewPort.computeSize('y'))
              );
            case this.isString(/vw$/):
              return (this.getNumber() / 100) * viewPort.computeSize('x');
            case this.isString(/vh$/):
              return (this.getNumber() / 100) * viewPort.computeSize('y');
            case this.isString(/rem$/):
              return this.getNumber() * this.getRem();
            case this.isString(/em$/):
              return this.getNumber() * this.getEm();
            case this.isString(/ex$/):
              return (this.getNumber() * this.getEm()) / 2;
            case this.isString(/px$/):
              return this.getNumber();
            case this.isString(/pt$/):
              return this.getNumber() * this.getDpi() * (1 / 72);
            case this.isString(/pc$/):
              return 15 * this.getNumber();
            case this.isString(/cm$/):
              return (this.getNumber() * this.getDpi()) / 2.54;
            case this.isString(/mm$/):
              return (this.getNumber() * this.getDpi()) / 25.4;
            case this.isString(/in$/):
              return this.getNumber() * this.getDpi();
            case this.isString(/%$/) && isFontSize:
              return this.getNumber() * this.getEm();
            case this.isString(/%$/):
              return this.getNumber() * viewPort.computeSize(axis);
            default:
              var n = this.getNumber();
              return processPercent && n < 1
                ? n * viewPort.computeSize(axis)
                : n;
          }
        }
        getMilliseconds() {
          return this.hasValue()
            ? this.isString(/ms$/)
              ? this.getNumber()
              : 1e3 * this.getNumber()
            : 0;
        }
        getRadians() {
          if (!this.hasValue()) return 0;
          switch (!0) {
            case this.isString(/deg$/):
              return this.getNumber() * (Math.PI / 180);
            case this.isString(/grad$/):
              return this.getNumber() * (Math.PI / 200);
            case this.isString(/rad$/):
              return this.getNumber();
            default:
              return this.getNumber() * (Math.PI / 180);
          }
        }
        getDefinition() {
          var asString = this.getString(),
            name = /#([^)'"]+)/.exec(asString);
          return (
            name && (name = name[1]),
            name || (name = asString),
            this.document.definitions[name]
          );
        }
        getFillStyleDefinition(element, opacity) {
          var def = this.getDefinition();
          if (!def) return null;
          if ('function' == typeof def.createGradient)
            return def.createGradient(this.document.ctx, element, opacity);
          if ('function' == typeof def.createPattern) {
            if (def.getHrefAttribute().hasValue()) {
              var patternTransform = def.getAttribute('patternTransform');
              (def = def.getHrefAttribute().getDefinition()),
                patternTransform.hasValue() &&
                  def
                    .getAttribute('patternTransform', !0)
                    .setValue(patternTransform.value);
            }
            return def.createPattern(this.document.ctx, element, opacity);
          }
          return null;
        }
        getTextBaseline() {
          return this.hasValue()
            ? Property.textBaselineMapping[this.getString()]
            : null;
        }
        addOpacity(opacity) {
          for (
            var value = this.getColor(), len = value.length, commas = 0, i = 0;
            i < len && (',' === value[i] && commas++, 3 !== commas);
            i++
          );
          if (opacity.hasValue() && this.isString() && 3 !== commas) {
            var color = new rgbcolor(value);
            color.ok &&
              ((color.alpha = opacity.getNumber()), (value = color.toRGBA()));
          }
          return new Property(this.document, this.name, value);
        }
      }
      Property.textBaselineMapping = {
        baseline: 'alphabetic',
        'before-edge': 'top',
        'text-before-edge': 'top',
        middle: 'middle',
        central: 'middle',
        'after-edge': 'bottom',
        'text-after-edge': 'bottom',
        ideographic: 'ideographic',
        alphabetic: 'alphabetic',
        hanging: 'hanging',
        mathematical: 'alphabetic',
      };
      class ViewPort {
        constructor() {
          this.viewPorts = [];
        }
        clear() {
          this.viewPorts = [];
        }
        setCurrent(width, height) {
          this.viewPorts.push({ width, height });
        }
        removeCurrent() {
          this.viewPorts.pop();
        }
        getCurrent() {
          var { viewPorts } = this;
          return viewPorts[viewPorts.length - 1];
        }
        get width() {
          return this.getCurrent().width;
        }
        get height() {
          return this.getCurrent().height;
        }
        computeSize(d) {
          return 'number' == typeof d
            ? d
            : 'x' === d
            ? this.width
            : 'y' === d
            ? this.height
            : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) /
              Math.sqrt(2);
        }
      }
      class Point {
        constructor(x, y) {
          (this.x = x), (this.y = y);
        }
        static parse(point) {
          var defaultValue =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            [x = defaultValue, y = defaultValue] = toNumbers(point);
          return new Point(x, y);
        }
        static parseScale(scale) {
          var defaultValue =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            [x = defaultValue, y = x] = toNumbers(scale);
          return new Point(x, y);
        }
        static parsePath(path) {
          for (
            var points = toNumbers(path),
              len = points.length,
              pathPoints = [],
              i = 0;
            i < len;
            i += 2
          )
            pathPoints.push(new Point(points[i], points[i + 1]));
          return pathPoints;
        }
        angleTo(point) {
          return Math.atan2(point.y - this.y, point.x - this.x);
        }
        applyTransform(transform) {
          var { x, y } = this,
            xp = x * transform[0] + y * transform[2] + transform[4],
            yp = x * transform[1] + y * transform[3] + transform[5];
          (this.x = xp), (this.y = yp);
        }
      }
      class Mouse {
        constructor(screen) {
          (this.screen = screen),
            (this.working = !1),
            (this.events = []),
            (this.eventElements = []),
            (this.onClick = this.onClick.bind(this)),
            (this.onMouseMove = this.onMouseMove.bind(this));
        }
        isWorking() {
          return this.working;
        }
        start() {
          if (!this.working) {
            var { screen, onClick, onMouseMove } = this,
              canvas = screen.ctx.canvas;
            (canvas.onclick = onClick),
              (canvas.onmousemove = onMouseMove),
              (this.working = !0);
          }
        }
        stop() {
          if (this.working) {
            var canvas = this.screen.ctx.canvas;
            (this.working = !1),
              (canvas.onclick = null),
              (canvas.onmousemove = null);
          }
        }
        hasEvents() {
          return this.working && this.events.length > 0;
        }
        runEvents() {
          if (this.working) {
            var { screen: document, events, eventElements } = this,
              { style } = document.ctx.canvas;
            style && (style.cursor = ''),
              events.forEach((_ref, i) => {
                for (var { run } = _ref, element = eventElements[i]; element; )
                  run(element), (element = element.parent);
              }),
              (this.events = []),
              (this.eventElements = []);
          }
        }
        checkPath(element, ctx) {
          if (this.working && ctx) {
            var { events, eventElements } = this;
            events.forEach((_ref2, i) => {
              var { x, y } = _ref2;
              !eventElements[i] &&
                ctx.isPointInPath &&
                ctx.isPointInPath(x, y) &&
                (eventElements[i] = element);
            });
          }
        }
        checkBoundingBox(element, boundingBox) {
          if (this.working && boundingBox) {
            var { events, eventElements } = this;
            events.forEach((_ref3, i) => {
              var { x, y } = _ref3;
              !eventElements[i] &&
                boundingBox.isPointInBox(x, y) &&
                (eventElements[i] = element);
            });
          }
        }
        mapXY(x, y) {
          for (
            var { window, ctx } = this.screen,
              point = new Point(x, y),
              element = ctx.canvas;
            element;

          )
            (point.x -= element.offsetLeft),
              (point.y -= element.offsetTop),
              (element = element.offsetParent);
          return (
            window.scrollX && (point.x += window.scrollX),
            window.scrollY && (point.y += window.scrollY),
            point
          );
        }
        onClick(event) {
          var { x, y } = this.mapXY(event.clientX, event.clientY);
          this.events.push({
            type: 'onclick',
            x,
            y,
            run(eventTarget) {
              eventTarget.onClick && eventTarget.onClick();
            },
          });
        }
        onMouseMove(event) {
          var { x, y } = this.mapXY(event.clientX, event.clientY);
          this.events.push({
            type: 'onmousemove',
            x,
            y,
            run(eventTarget) {
              eventTarget.onMouseMove && eventTarget.onMouseMove();
            },
          });
        }
      }
      var defaultWindow = 'undefined' != typeof window ? window : null,
        defaultFetch$1 =
          'undefined' != typeof fetch ? fetch.bind(void 0) : null;
      class Screen {
        constructor(ctx) {
          var { fetch = defaultFetch$1, window = defaultWindow } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.ctx = ctx),
            (this.FRAMERATE = 30),
            (this.MAX_VIRTUAL_PIXELS = 3e4),
            (this.CLIENT_WIDTH = 800),
            (this.CLIENT_HEIGHT = 600),
            (this.viewPort = new ViewPort()),
            (this.mouse = new Mouse(this)),
            (this.animations = []),
            (this.waits = []),
            (this.frameDuration = 0),
            (this.isReadyLock = !1),
            (this.isFirstRender = !0),
            (this.intervalId = null),
            (this.window = window),
            (this.fetch = fetch);
        }
        wait(checker) {
          this.waits.push(checker);
        }
        ready() {
          return this.readyPromise ? this.readyPromise : Promise.resolve();
        }
        isReady() {
          if (this.isReadyLock) return !0;
          var isReadyLock = this.waits.every((_) => _());
          return (
            isReadyLock &&
              ((this.waits = []), this.resolveReady && this.resolveReady()),
            (this.isReadyLock = isReadyLock),
            isReadyLock
          );
        }
        setDefaults(ctx) {
          (ctx.strokeStyle = 'rgba(0,0,0,0)'),
            (ctx.lineCap = 'butt'),
            (ctx.lineJoin = 'miter'),
            (ctx.miterLimit = 4);
        }
        setViewBox(_ref) {
          var {
              document,
              ctx,
              aspectRatio,
              width,
              desiredWidth,
              height,
              desiredHeight,
              minX = 0,
              minY = 0,
              refX,
              refY,
              clip = !1,
              clipX = 0,
              clipY = 0,
            } = _ref,
            cleanAspectRatio = compressSpaces(aspectRatio).replace(
              /^defer\s/,
              ''
            ),
            [aspectRatioAlign, aspectRatioMeetOrSlice] =
              cleanAspectRatio.split(' '),
            align = aspectRatioAlign || 'xMidYMid',
            meetOrSlice = aspectRatioMeetOrSlice || 'meet',
            scaleX = width / desiredWidth,
            scaleY = height / desiredHeight,
            scaleMin = Math.min(scaleX, scaleY),
            scaleMax = Math.max(scaleX, scaleY),
            finalDesiredWidth = desiredWidth,
            finalDesiredHeight = desiredHeight;
          'meet' === meetOrSlice &&
            ((finalDesiredWidth *= scaleMin), (finalDesiredHeight *= scaleMin)),
            'slice' === meetOrSlice &&
              ((finalDesiredWidth *= scaleMax),
              (finalDesiredHeight *= scaleMax));
          var refXProp = new Property(document, 'refX', refX),
            refYProp = new Property(document, 'refY', refY),
            hasRefs = refXProp.hasValue() && refYProp.hasValue();
          if (
            (hasRefs &&
              ctx.translate(
                -scaleMin * refXProp.getPixels('x'),
                -scaleMin * refYProp.getPixels('y')
              ),
            clip)
          ) {
            var scaledClipX = scaleMin * clipX,
              scaledClipY = scaleMin * clipY;
            ctx.beginPath(),
              ctx.moveTo(scaledClipX, scaledClipY),
              ctx.lineTo(width, scaledClipY),
              ctx.lineTo(width, height),
              ctx.lineTo(scaledClipX, height),
              ctx.closePath(),
              ctx.clip();
          }
          if (!hasRefs) {
            var isMeetMinY = 'meet' === meetOrSlice && scaleMin === scaleY,
              isSliceMaxY = 'slice' === meetOrSlice && scaleMax === scaleY,
              isMeetMinX = 'meet' === meetOrSlice && scaleMin === scaleX,
              isSliceMaxX = 'slice' === meetOrSlice && scaleMax === scaleX;
            align.startsWith('xMid') &&
              (isMeetMinY || isSliceMaxY) &&
              ctx.translate(width / 2 - finalDesiredWidth / 2, 0),
              align.endsWith('YMid') &&
                (isMeetMinX || isSliceMaxX) &&
                ctx.translate(0, height / 2 - finalDesiredHeight / 2),
              align.startsWith('xMax') &&
                (isMeetMinY || isSliceMaxY) &&
                ctx.translate(width - finalDesiredWidth, 0),
              align.endsWith('YMax') &&
                (isMeetMinX || isSliceMaxX) &&
                ctx.translate(0, height - finalDesiredHeight);
          }
          switch (!0) {
            case 'none' === align:
              ctx.scale(scaleX, scaleY);
              break;
            case 'meet' === meetOrSlice:
              ctx.scale(scaleMin, scaleMin);
              break;
            case 'slice' === meetOrSlice:
              ctx.scale(scaleMax, scaleMax);
          }
          ctx.translate(-minX, -minY);
        }
        start(element) {
          var {
              enableRedraw = !1,
              ignoreMouse = !1,
              ignoreAnimation = !1,
              ignoreDimensions = !1,
              ignoreClear = !1,
              forceRedraw,
              scaleWidth,
              scaleHeight,
              offsetX,
              offsetY,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { FRAMERATE, mouse } = this,
            frameDuration = 1e3 / FRAMERATE;
          if (
            ((this.frameDuration = frameDuration),
            (this.readyPromise = new Promise((resolve) => {
              this.resolveReady = resolve;
            })),
            this.isReady() &&
              this.render(
                element,
                ignoreDimensions,
                ignoreClear,
                scaleWidth,
                scaleHeight,
                offsetX,
                offsetY
              ),
            enableRedraw)
          ) {
            var now = Date.now(),
              then = now,
              delta = 0,
              tick = () => {
                (now = Date.now()),
                  (delta = now - then) >= frameDuration &&
                    ((then = now - (delta % frameDuration)),
                    this.shouldUpdate(ignoreAnimation, forceRedraw) &&
                      (this.render(
                        element,
                        ignoreDimensions,
                        ignoreClear,
                        scaleWidth,
                        scaleHeight,
                        offsetX,
                        offsetY
                      ),
                      mouse.runEvents())),
                  (this.intervalId = raf(tick));
              };
            ignoreMouse || mouse.start(), (this.intervalId = raf(tick));
          }
        }
        stop() {
          this.intervalId &&
            (raf.cancel(this.intervalId), (this.intervalId = null)),
            this.mouse.stop();
        }
        shouldUpdate(ignoreAnimation, forceRedraw) {
          if (!ignoreAnimation) {
            var { frameDuration } = this;
            if (
              this.animations.reduce(
                (shouldUpdate, animation) =>
                  animation.update(frameDuration) || shouldUpdate,
                !1
              )
            )
              return !0;
          }
          return (
            !('function' != typeof forceRedraw || !forceRedraw()) ||
            !(this.isReadyLock || !this.isReady()) ||
            !!this.mouse.hasEvents()
          );
        }
        render(
          element,
          ignoreDimensions,
          ignoreClear,
          scaleWidth,
          scaleHeight,
          offsetX,
          offsetY
        ) {
          var { CLIENT_WIDTH, CLIENT_HEIGHT, viewPort, ctx, isFirstRender } =
              this,
            canvas = ctx.canvas;
          viewPort.clear(),
            canvas.width && canvas.height
              ? viewPort.setCurrent(canvas.width, canvas.height)
              : viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
          var widthStyle = element.getStyle('width'),
            heightStyle = element.getStyle('height');
          !ignoreDimensions &&
            (isFirstRender ||
              ('number' != typeof scaleWidth &&
                'number' != typeof scaleHeight)) &&
            (widthStyle.hasValue() &&
              ((canvas.width = widthStyle.getPixels('x')),
              canvas.style &&
                (canvas.style.width = ''.concat(canvas.width, 'px'))),
            heightStyle.hasValue() &&
              ((canvas.height = heightStyle.getPixels('y')),
              canvas.style &&
                (canvas.style.height = ''.concat(canvas.height, 'px'))));
          var cWidth = canvas.clientWidth || canvas.width,
            cHeight = canvas.clientHeight || canvas.height;
          if (
            (ignoreDimensions &&
              widthStyle.hasValue() &&
              heightStyle.hasValue() &&
              ((cWidth = widthStyle.getPixels('x')),
              (cHeight = heightStyle.getPixels('y'))),
            viewPort.setCurrent(cWidth, cHeight),
            'number' == typeof offsetX &&
              element.getAttribute('x', !0).setValue(offsetX),
            'number' == typeof offsetY &&
              element.getAttribute('y', !0).setValue(offsetY),
            'number' == typeof scaleWidth || 'number' == typeof scaleHeight)
          ) {
            var viewBox = toNumbers(
                element.getAttribute('viewBox').getString()
              ),
              xRatio = 0,
              yRatio = 0;
            if ('number' == typeof scaleWidth) {
              var _widthStyle = element.getStyle('width');
              _widthStyle.hasValue()
                ? (xRatio = _widthStyle.getPixels('x') / scaleWidth)
                : isNaN(viewBox[2]) || (xRatio = viewBox[2] / scaleWidth);
            }
            if ('number' == typeof scaleHeight) {
              var _heightStyle = element.getStyle('height');
              _heightStyle.hasValue()
                ? (yRatio = _heightStyle.getPixels('y') / scaleHeight)
                : isNaN(viewBox[3]) || (yRatio = viewBox[3] / scaleHeight);
            }
            xRatio || (xRatio = yRatio),
              yRatio || (yRatio = xRatio),
              element.getAttribute('width', !0).setValue(scaleWidth),
              element.getAttribute('height', !0).setValue(scaleHeight);
            var transformStyle = element.getStyle('transform', !0, !0);
            transformStyle.setValue(
              ''
                .concat(transformStyle.getString(), ' scale(')
                .concat(1 / xRatio, ', ')
                .concat(1 / yRatio, ')')
            );
          }
          ignoreClear || ctx.clearRect(0, 0, cWidth, cHeight),
            element.render(ctx),
            isFirstRender && (this.isFirstRender = !1);
        }
      }
      (Screen.defaultWindow = defaultWindow),
        (Screen.defaultFetch = defaultFetch$1);
      var { defaultFetch } = Screen,
        DefaultDOMParser = 'undefined' != typeof DOMParser ? DOMParser : null;
      class Parser {
        constructor() {
          var { fetch = defaultFetch, DOMParser = DefaultDOMParser } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.fetch = fetch), (this.DOMParser = DOMParser);
        }
        parse(resource) {
          var _this = this;
          return (0, asyncToGenerator.Z)(function* () {
            return resource.startsWith('<')
              ? _this.parseFromString(resource)
              : _this.load(resource);
          })();
        }
        parseFromString(xml) {
          var parser = new this.DOMParser();
          try {
            return this.checkDocument(
              parser.parseFromString(xml, 'image/svg+xml')
            );
          } catch (err) {
            return this.checkDocument(parser.parseFromString(xml, 'text/xml'));
          }
        }
        checkDocument(document) {
          var parserError = document.getElementsByTagName('parsererror')[0];
          if (parserError) throw new Error(parserError.textContent);
          return document;
        }
        load(url) {
          var _this2 = this;
          return (0, asyncToGenerator.Z)(function* () {
            var response = yield _this2.fetch(url),
              xml = yield response.text();
            return _this2.parseFromString(xml);
          })();
        }
      }
      class Translate {
        constructor(_, point) {
          (this.type = 'translate'),
            (this.point = null),
            (this.point = Point.parse(point));
        }
        apply(ctx) {
          var { x, y } = this.point;
          ctx.translate(x || 0, y || 0);
        }
        unapply(ctx) {
          var { x, y } = this.point;
          ctx.translate(-1 * x || 0, -1 * y || 0);
        }
        applyToPoint(point) {
          var { x, y } = this.point;
          point.applyTransform([1, 0, 0, 1, x || 0, y || 0]);
        }
      }
      class Rotate {
        constructor(document, rotate, transformOrigin) {
          (this.type = 'rotate'),
            (this.angle = null),
            (this.originX = null),
            (this.originY = null),
            (this.cx = 0),
            (this.cy = 0);
          var numbers = toNumbers(rotate);
          (this.angle = new Property(document, 'angle', numbers[0])),
            (this.originX = transformOrigin[0]),
            (this.originY = transformOrigin[1]),
            (this.cx = numbers[1] || 0),
            (this.cy = numbers[2] || 0);
        }
        apply(ctx) {
          var { cx, cy, originX, originY, angle } = this,
            tx = cx + originX.getPixels('x'),
            ty = cy + originY.getPixels('y');
          ctx.translate(tx, ty),
            ctx.rotate(angle.getRadians()),
            ctx.translate(-tx, -ty);
        }
        unapply(ctx) {
          var { cx, cy, originX, originY, angle } = this,
            tx = cx + originX.getPixels('x'),
            ty = cy + originY.getPixels('y');
          ctx.translate(tx, ty),
            ctx.rotate(-1 * angle.getRadians()),
            ctx.translate(-tx, -ty);
        }
        applyToPoint(point) {
          var { cx, cy, angle } = this,
            rad = angle.getRadians();
          point.applyTransform([1, 0, 0, 1, cx || 0, cy || 0]),
            point.applyTransform([
              Math.cos(rad),
              Math.sin(rad),
              -Math.sin(rad),
              Math.cos(rad),
              0,
              0,
            ]),
            point.applyTransform([1, 0, 0, 1, -cx || 0, -cy || 0]);
        }
      }
      class Scale {
        constructor(_, scale, transformOrigin) {
          (this.type = 'scale'),
            (this.scale = null),
            (this.originX = null),
            (this.originY = null);
          var scaleSize = Point.parseScale(scale);
          (0 !== scaleSize.x && 0 !== scaleSize.y) ||
            ((scaleSize.x = PSEUDO_ZERO), (scaleSize.y = PSEUDO_ZERO)),
            (this.scale = scaleSize),
            (this.originX = transformOrigin[0]),
            (this.originY = transformOrigin[1]);
        }
        apply(ctx) {
          var {
              scale: { x, y },
              originX,
              originY,
            } = this,
            tx = originX.getPixels('x'),
            ty = originY.getPixels('y');
          ctx.translate(tx, ty), ctx.scale(x, y || x), ctx.translate(-tx, -ty);
        }
        unapply(ctx) {
          var {
              scale: { x, y },
              originX,
              originY,
            } = this,
            tx = originX.getPixels('x'),
            ty = originY.getPixels('y');
          ctx.translate(tx, ty),
            ctx.scale(1 / x, 1 / y || x),
            ctx.translate(-tx, -ty);
        }
        applyToPoint(point) {
          var { x, y } = this.scale;
          point.applyTransform([x || 0, 0, 0, y || 0, 0, 0]);
        }
      }
      class Matrix {
        constructor(_, matrix, transformOrigin) {
          (this.type = 'matrix'),
            (this.matrix = []),
            (this.originX = null),
            (this.originY = null),
            (this.matrix = toNumbers(matrix)),
            (this.originX = transformOrigin[0]),
            (this.originY = transformOrigin[1]);
        }
        apply(ctx) {
          var { originX, originY, matrix } = this,
            tx = originX.getPixels('x'),
            ty = originY.getPixels('y');
          ctx.translate(tx, ty),
            ctx.transform(
              matrix[0],
              matrix[1],
              matrix[2],
              matrix[3],
              matrix[4],
              matrix[5]
            ),
            ctx.translate(-tx, -ty);
        }
        unapply(ctx) {
          var { originX, originY, matrix } = this,
            a = matrix[0],
            b = matrix[2],
            c = matrix[4],
            d = matrix[1],
            e = matrix[3],
            f = matrix[5],
            det =
              1 /
              (a * (1 * e - 0 * f) - b * (1 * d - 0 * f) + c * (0 * d - 0 * e)),
            tx = originX.getPixels('x'),
            ty = originY.getPixels('y');
          ctx.translate(tx, ty),
            ctx.transform(
              det * (1 * e - 0 * f),
              det * (0 * f - 1 * d),
              det * (0 * c - 1 * b),
              det * (1 * a - 0 * c),
              det * (b * f - c * e),
              det * (c * d - a * f)
            ),
            ctx.translate(-tx, -ty);
        }
        applyToPoint(point) {
          point.applyTransform(this.matrix);
        }
      }
      class Skew extends Matrix {
        constructor(document, skew, transformOrigin) {
          super(document, skew, transformOrigin),
            (this.type = 'skew'),
            (this.angle = null),
            (this.angle = new Property(document, 'angle', skew));
        }
      }
      class SkewX extends Skew {
        constructor(document, skew, transformOrigin) {
          super(document, skew, transformOrigin),
            (this.type = 'skewX'),
            (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]);
        }
      }
      class SkewY extends Skew {
        constructor(document, skew, transformOrigin) {
          super(document, skew, transformOrigin),
            (this.type = 'skewY'),
            (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]);
        }
      }
      class Transform {
        constructor(document, transform, transformOrigin) {
          (this.document = document), (this.transforms = []);
          var data = (function parseTransforms(transform) {
            return compressSpaces(transform)
              .trim()
              .replace(/\)([a-zA-Z])/g, ') $1')
              .replace(/\)(\s?,\s?)/g, ') ')
              .split(/\s(?=[a-z])/);
          })(transform);
          data.forEach((transform) => {
            if ('none' !== transform) {
              var [type, value] = (function parseTransform(transform) {
                  var [type, value] = transform.split('(');
                  return [type.trim(), value.trim().replace(')', '')];
                })(transform),
                TransformType = Transform.transformTypes[type];
              void 0 !== TransformType &&
                this.transforms.push(
                  new TransformType(this.document, value, transformOrigin)
                );
            }
          });
        }
        static fromElement(document, element) {
          var transformStyle = element.getStyle('transform', !1, !0),
            [
              transformOriginXProperty,
              transformOriginYProperty = transformOriginXProperty,
            ] = element.getStyle('transform-origin', !1, !0).split(),
            transformOrigin = [
              transformOriginXProperty,
              transformOriginYProperty,
            ];
          return transformStyle.hasValue()
            ? new Transform(
                document,
                transformStyle.getString(),
                transformOrigin
              )
            : null;
        }
        apply(ctx) {
          for (
            var { transforms } = this, len = transforms.length, i = 0;
            i < len;
            i++
          )
            transforms[i].apply(ctx);
        }
        unapply(ctx) {
          for (
            var { transforms } = this, i = transforms.length - 1;
            i >= 0;
            i--
          )
            transforms[i].unapply(ctx);
        }
        applyToPoint(point) {
          for (
            var { transforms } = this, len = transforms.length, i = 0;
            i < len;
            i++
          )
            transforms[i].applyToPoint(point);
        }
      }
      Transform.transformTypes = {
        translate: Translate,
        rotate: Rotate,
        scale: Scale,
        matrix: Matrix,
        skewX: SkewX,
        skewY: SkewY,
      };
      class Element {
        constructor(document, node) {
          var captureTextNodes =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (
            ((this.document = document),
            (this.node = node),
            (this.captureTextNodes = captureTextNodes),
            (this.attributes = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.animationFrozen = !1),
            (this.animationFrozenValue = ''),
            (this.parent = null),
            (this.children = []),
            node && 1 === node.nodeType)
          ) {
            if (
              (Array.from(node.attributes).forEach((attribute) => {
                var nodeName = normalizeAttributeName(attribute.nodeName);
                this.attributes[nodeName] = new Property(
                  document,
                  nodeName,
                  attribute.value
                );
              }),
              this.addStylesFromStyleDefinition(),
              this.getAttribute('style').hasValue())
            ) {
              var styles = this.getAttribute('style')
                .getString()
                .split(';')
                .map((_) => _.trim());
              styles.forEach((style) => {
                if (style) {
                  var [name, value] = style.split(':').map((_) => _.trim());
                  this.styles[name] = new Property(document, name, value);
                }
              });
            }
            var { definitions } = document,
              id = this.getAttribute('id');
            id.hasValue() &&
              (definitions[id.getString()] ||
                (definitions[id.getString()] = this)),
              Array.from(node.childNodes).forEach((childNode) => {
                if (1 === childNode.nodeType) this.addChild(childNode);
                else if (
                  captureTextNodes &&
                  (3 === childNode.nodeType || 4 === childNode.nodeType)
                ) {
                  var textNode = document.createTextNode(childNode);
                  textNode.getText().length > 0 && this.addChild(textNode);
                }
              });
          }
        }
        getAttribute(name) {
          var createIfNotExists =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            attr = this.attributes[name];
          if (!attr && createIfNotExists) {
            var _attr = new Property(this.document, name, '');
            return (this.attributes[name] = _attr), _attr;
          }
          return attr || Property.empty(this.document);
        }
        getHrefAttribute() {
          for (var key in this.attributes)
            if ('href' === key || key.endsWith(':href'))
              return this.attributes[key];
          return Property.empty(this.document);
        }
        getStyle(name) {
          var createIfNotExists =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            skipAncestors =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            style = this.styles[name];
          if (style) return style;
          var attr = this.getAttribute(name);
          if (null != attr && attr.hasValue())
            return (this.styles[name] = attr), attr;
          if (!skipAncestors) {
            var { parent } = this;
            if (parent) {
              var parentStyle = parent.getStyle(name);
              if (null != parentStyle && parentStyle.hasValue())
                return parentStyle;
            }
          }
          if (createIfNotExists) {
            var _style = new Property(this.document, name, '');
            return (this.styles[name] = _style), _style;
          }
          return style || Property.empty(this.document);
        }
        render(ctx) {
          if (
            'none' !== this.getStyle('display').getString() &&
            'hidden' !== this.getStyle('visibility').getString()
          ) {
            if ((ctx.save(), this.getStyle('mask').hasValue())) {
              var mask = this.getStyle('mask').getDefinition();
              mask && (this.applyEffects(ctx), mask.apply(ctx, this));
            } else if ('none' !== this.getStyle('filter').getValue('none')) {
              var filter = this.getStyle('filter').getDefinition();
              filter && (this.applyEffects(ctx), filter.apply(ctx, this));
            } else
              this.setContext(ctx),
                this.renderChildren(ctx),
                this.clearContext(ctx);
            ctx.restore();
          }
        }
        setContext(_) {}
        applyEffects(ctx) {
          var transform = Transform.fromElement(this.document, this);
          transform && transform.apply(ctx);
          var clipPathStyleProp = this.getStyle('clip-path', !1, !0);
          if (clipPathStyleProp.hasValue()) {
            var clip = clipPathStyleProp.getDefinition();
            clip && clip.apply(ctx);
          }
        }
        clearContext(_) {}
        renderChildren(ctx) {
          this.children.forEach((child) => {
            child.render(ctx);
          });
        }
        addChild(childNode) {
          var child =
            childNode instanceof Element
              ? childNode
              : this.document.createElement(childNode);
          (child.parent = this),
            Element.ignoreChildTypes.includes(child.type) ||
              this.children.push(child);
        }
        matchesSelector(selector) {
          var _node$getAttribute,
            { node } = this;
          if ('function' == typeof node.matches) return node.matches(selector);
          var styleClasses =
            null === (_node$getAttribute = node.getAttribute) ||
            void 0 === _node$getAttribute
              ? void 0
              : _node$getAttribute.call(node, 'class');
          return (
            !(!styleClasses || '' === styleClasses) &&
            styleClasses
              .split(' ')
              .some((styleClass) => '.'.concat(styleClass) === selector)
          );
        }
        addStylesFromStyleDefinition() {
          var { styles, stylesSpecificity } = this.document;
          for (var selector in styles)
            if (!selector.startsWith('@') && this.matchesSelector(selector)) {
              var style = styles[selector],
                specificity = stylesSpecificity[selector];
              if (style)
                for (var name in style) {
                  var existingSpecificity = this.stylesSpecificity[name];
                  void 0 === existingSpecificity &&
                    (existingSpecificity = '000'),
                    specificity >= existingSpecificity &&
                      ((this.styles[name] = style[name]),
                      (this.stylesSpecificity[name] = specificity));
                }
            }
        }
        removeStyles(element, ignoreStyles) {
          return ignoreStyles.reduce((toRestore, name) => {
            var styleProp = element.getStyle(name);
            if (!styleProp.hasValue()) return toRestore;
            var value = styleProp.getString();
            return styleProp.setValue(''), [...toRestore, [name, value]];
          }, []);
        }
        restoreStyles(element, styles) {
          styles.forEach((_ref) => {
            var [name, value] = _ref;
            element.getStyle(name, !0).setValue(value);
          });
        }
        isFirstChild() {
          var _this$parent;
          return (
            0 ===
            (null === (_this$parent = this.parent) || void 0 === _this$parent
              ? void 0
              : _this$parent.children.indexOf(this))
          );
        }
      }
      Element.ignoreChildTypes = ['title'];
      class UnknownElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes);
        }
      }
      function wrapFontFamily(fontFamily) {
        var trimmed = fontFamily.trim();
        return /^('|")/.test(trimmed) ? trimmed : '"'.concat(trimmed, '"');
      }
      function prepareFontStyle(fontStyle) {
        if (!fontStyle) return '';
        var targetFontStyle = fontStyle.trim().toLowerCase();
        switch (targetFontStyle) {
          case 'normal':
          case 'italic':
          case 'oblique':
          case 'inherit':
          case 'initial':
          case 'unset':
            return targetFontStyle;
          default:
            return /^oblique\s+(-|)\d+deg$/.test(targetFontStyle)
              ? targetFontStyle
              : '';
        }
      }
      function prepareFontWeight(fontWeight) {
        if (!fontWeight) return '';
        var targetFontWeight = fontWeight.trim().toLowerCase();
        switch (targetFontWeight) {
          case 'normal':
          case 'bold':
          case 'lighter':
          case 'bolder':
          case 'inherit':
          case 'initial':
          case 'unset':
            return targetFontWeight;
          default:
            return /^[\d.]+$/.test(targetFontWeight) ? targetFontWeight : '';
        }
      }
      class Font {
        constructor(
          fontStyle,
          fontVariant,
          fontWeight,
          fontSize,
          fontFamily,
          inherit
        ) {
          var inheritFont = inherit
            ? 'string' == typeof inherit
              ? Font.parse(inherit)
              : inherit
            : {};
          (this.fontFamily = fontFamily || inheritFont.fontFamily),
            (this.fontSize = fontSize || inheritFont.fontSize),
            (this.fontStyle = fontStyle || inheritFont.fontStyle),
            (this.fontWeight = fontWeight || inheritFont.fontWeight),
            (this.fontVariant = fontVariant || inheritFont.fontVariant);
        }
        static parse() {
          var inherit = arguments.length > 1 ? arguments[1] : void 0,
            fontStyle = '',
            fontVariant = '',
            fontWeight = '',
            fontSize = '',
            fontFamily = '',
            parts = compressSpaces(
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ''
            )
              .trim()
              .split(' '),
            set = {
              fontSize: !1,
              fontStyle: !1,
              fontWeight: !1,
              fontVariant: !1,
            };
          return (
            parts.forEach((part) => {
              switch (!0) {
                case !set.fontStyle && Font.styles.includes(part):
                  'inherit' !== part && (fontStyle = part),
                    (set.fontStyle = !0);
                  break;
                case !set.fontVariant && Font.variants.includes(part):
                  'inherit' !== part && (fontVariant = part),
                    (set.fontStyle = !0),
                    (set.fontVariant = !0);
                  break;
                case !set.fontWeight && Font.weights.includes(part):
                  'inherit' !== part && (fontWeight = part),
                    (set.fontStyle = !0),
                    (set.fontVariant = !0),
                    (set.fontWeight = !0);
                  break;
                case !set.fontSize:
                  'inherit' !== part && ([fontSize] = part.split('/')),
                    (set.fontStyle = !0),
                    (set.fontVariant = !0),
                    (set.fontWeight = !0),
                    (set.fontSize = !0);
                  break;
                default:
                  'inherit' !== part && (fontFamily += part);
              }
            }),
            new Font(
              fontStyle,
              fontVariant,
              fontWeight,
              fontSize,
              fontFamily,
              inherit
            )
          );
        }
        toString() {
          return [
            prepareFontStyle(this.fontStyle),
            this.fontVariant,
            prepareFontWeight(this.fontWeight),
            this.fontSize,
            ((fontFamily = this.fontFamily),
            void 0 === process
              ? fontFamily
              : fontFamily.trim().split(',').map(wrapFontFamily).join(',')),
          ]
            .join(' ')
            .trim();
          var fontFamily;
        }
      }
      (Font.styles = 'normal|italic|oblique|inherit'),
        (Font.variants = 'normal|small-caps|inherit'),
        (Font.weights =
          'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit');
      class BoundingBox {
        constructor() {
          var x1 =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Number.NaN,
            y1 =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Number.NaN,
            x2 =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Number.NaN,
            y2 =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Number.NaN;
          (this.x1 = x1),
            (this.y1 = y1),
            (this.x2 = x2),
            (this.y2 = y2),
            this.addPoint(x1, y1),
            this.addPoint(x2, y2);
        }
        get x() {
          return this.x1;
        }
        get y() {
          return this.y1;
        }
        get width() {
          return this.x2 - this.x1;
        }
        get height() {
          return this.y2 - this.y1;
        }
        addPoint(x, y) {
          void 0 !== x &&
            ((isNaN(this.x1) || isNaN(this.x2)) &&
              ((this.x1 = x), (this.x2 = x)),
            x < this.x1 && (this.x1 = x),
            x > this.x2 && (this.x2 = x)),
            void 0 !== y &&
              ((isNaN(this.y1) || isNaN(this.y2)) &&
                ((this.y1 = y), (this.y2 = y)),
              y < this.y1 && (this.y1 = y),
              y > this.y2 && (this.y2 = y));
        }
        addX(x) {
          this.addPoint(x, null);
        }
        addY(y) {
          this.addPoint(null, y);
        }
        addBoundingBox(boundingBox) {
          if (boundingBox) {
            var { x1, y1, x2, y2 } = boundingBox;
            this.addPoint(x1, y1), this.addPoint(x2, y2);
          }
        }
        sumCubic(t, p0, p1, p2, p3) {
          return (
            Math.pow(1 - t, 3) * p0 +
            3 * Math.pow(1 - t, 2) * t * p1 +
            3 * (1 - t) * Math.pow(t, 2) * p2 +
            Math.pow(t, 3) * p3
          );
        }
        bezierCurveAdd(forX, p0, p1, p2, p3) {
          var b = 6 * p0 - 12 * p1 + 6 * p2,
            a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3,
            c = 3 * p1 - 3 * p0;
          if (0 !== a) {
            var b2ac = Math.pow(b, 2) - 4 * c * a;
            if (!(b2ac < 0)) {
              var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
              0 < t1 &&
                t1 < 1 &&
                (forX
                  ? this.addX(this.sumCubic(t1, p0, p1, p2, p3))
                  : this.addY(this.sumCubic(t1, p0, p1, p2, p3)));
              var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
              0 < t2 &&
                t2 < 1 &&
                (forX
                  ? this.addX(this.sumCubic(t2, p0, p1, p2, p3))
                  : this.addY(this.sumCubic(t2, p0, p1, p2, p3)));
            }
          } else {
            if (0 === b) return;
            var t = -c / b;
            0 < t &&
              t < 1 &&
              (forX
                ? this.addX(this.sumCubic(t, p0, p1, p2, p3))
                : this.addY(this.sumCubic(t, p0, p1, p2, p3)));
          }
        }
        addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
          this.addPoint(p0x, p0y),
            this.addPoint(p3x, p3y),
            this.bezierCurveAdd(!0, p0x, p1x, p2x, p3x),
            this.bezierCurveAdd(!1, p0y, p1y, p2y, p3y);
        }
        addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
          var cp1x = p0x + (2 / 3) * (p1x - p0x),
            cp1y = p0y + (2 / 3) * (p1y - p0y),
            cp2x = cp1x + (1 / 3) * (p2x - p0x),
            cp2y = cp1y + (1 / 3) * (p2y - p0y);
          this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
        }
        isPointInBox(x, y) {
          var { x1, y1, x2, y2 } = this;
          return x1 <= x && x <= x2 && y1 <= y && y <= y2;
        }
      }
      class PathParser extends _ {
        constructor(path) {
          super(
            path
              .replace(/([+\-.])\s+/gm, '$1')
              .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, '')
          ),
            (this.control = null),
            (this.start = null),
            (this.current = null),
            (this.command = null),
            (this.commands = this.commands),
            (this.i = -1),
            (this.previousCommand = null),
            (this.points = []),
            (this.angles = []);
        }
        reset() {
          (this.i = -1),
            (this.command = null),
            (this.previousCommand = null),
            (this.start = new Point(0, 0)),
            (this.control = new Point(0, 0)),
            (this.current = new Point(0, 0)),
            (this.points = []),
            (this.angles = []);
        }
        isEnd() {
          var { i, commands } = this;
          return i >= commands.length - 1;
        }
        next() {
          var command = this.commands[++this.i];
          return (
            (this.previousCommand = this.command),
            (this.command = command),
            command
          );
        }
        getPoint() {
          var xProp =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'x',
            yProp =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'y',
            point = new Point(this.command[xProp], this.command[yProp]);
          return this.makeAbsolute(point);
        }
        getAsControlPoint(xProp, yProp) {
          var point = this.getPoint(xProp, yProp);
          return (this.control = point), point;
        }
        getAsCurrentPoint(xProp, yProp) {
          var point = this.getPoint(xProp, yProp);
          return (this.current = point), point;
        }
        getReflectedControlPoint() {
          var previousCommand = this.previousCommand.type;
          if (
            previousCommand !== _.CURVE_TO &&
            previousCommand !== _.SMOOTH_CURVE_TO &&
            previousCommand !== _.QUAD_TO &&
            previousCommand !== _.SMOOTH_QUAD_TO
          )
            return this.current;
          var {
            current: { x: cx, y: cy },
            control: { x: ox, y: oy },
          } = this;
          return new Point(2 * cx - ox, 2 * cy - oy);
        }
        makeAbsolute(point) {
          if (this.command.relative) {
            var { x, y } = this.current;
            (point.x += x), (point.y += y);
          }
          return point;
        }
        addMarker(point, from, priorTo) {
          var { points, angles } = this;
          priorTo &&
            angles.length > 0 &&
            !angles[angles.length - 1] &&
            (angles[angles.length - 1] =
              points[points.length - 1].angleTo(priorTo)),
            this.addMarkerAngle(point, from ? from.angleTo(point) : null);
        }
        addMarkerAngle(point, angle) {
          this.points.push(point), this.angles.push(angle);
        }
        getMarkerPoints() {
          return this.points;
        }
        getMarkerAngles() {
          for (var { angles } = this, len = angles.length, i = 0; i < len; i++)
            if (!angles[i])
              for (var j = i + 1; j < len; j++)
                if (angles[j]) {
                  angles[i] = angles[j];
                  break;
                }
          return angles;
        }
      }
      class RenderedElement extends Element {
        constructor() {
          super(...arguments), (this.modifiedEmSizeStack = !1);
        }
        calculateOpacity() {
          for (var opacity = 1, element = this; element; ) {
            var opacityStyle = element.getStyle('opacity', !1, !0);
            opacityStyle.hasValue(!0) && (opacity *= opacityStyle.getNumber()),
              (element = element.parent);
          }
          return opacity;
        }
        setContext(ctx) {
          var fromMeasure =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!fromMeasure) {
            var fillStyleProp = this.getStyle('fill'),
              fillOpacityStyleProp = this.getStyle('fill-opacity'),
              strokeStyleProp = this.getStyle('stroke'),
              strokeOpacityProp = this.getStyle('stroke-opacity');
            if (fillStyleProp.isUrlDefinition()) {
              var fillStyle = fillStyleProp.getFillStyleDefinition(
                this,
                fillOpacityStyleProp
              );
              fillStyle && (ctx.fillStyle = fillStyle);
            } else if (fillStyleProp.hasValue()) {
              'currentColor' === fillStyleProp.getString() &&
                fillStyleProp.setValue(this.getStyle('color').getColor());
              var _fillStyle = fillStyleProp.getColor();
              'inherit' !== _fillStyle &&
                (ctx.fillStyle =
                  'none' === _fillStyle ? 'rgba(0,0,0,0)' : _fillStyle);
            }
            if (fillOpacityStyleProp.hasValue()) {
              var _fillStyle2 = new Property(
                this.document,
                'fill',
                ctx.fillStyle
              )
                .addOpacity(fillOpacityStyleProp)
                .getColor();
              ctx.fillStyle = _fillStyle2;
            }
            if (strokeStyleProp.isUrlDefinition()) {
              var strokeStyle = strokeStyleProp.getFillStyleDefinition(
                this,
                strokeOpacityProp
              );
              strokeStyle && (ctx.strokeStyle = strokeStyle);
            } else if (strokeStyleProp.hasValue()) {
              'currentColor' === strokeStyleProp.getString() &&
                strokeStyleProp.setValue(this.getStyle('color').getColor());
              var _strokeStyle = strokeStyleProp.getString();
              'inherit' !== _strokeStyle &&
                (ctx.strokeStyle =
                  'none' === _strokeStyle ? 'rgba(0,0,0,0)' : _strokeStyle);
            }
            if (strokeOpacityProp.hasValue()) {
              var _strokeStyle2 = new Property(
                this.document,
                'stroke',
                ctx.strokeStyle
              )
                .addOpacity(strokeOpacityProp)
                .getString();
              ctx.strokeStyle = _strokeStyle2;
            }
            var strokeWidthStyleProp = this.getStyle('stroke-width');
            if (strokeWidthStyleProp.hasValue()) {
              var newLineWidth = strokeWidthStyleProp.getPixels();
              ctx.lineWidth = newLineWidth || PSEUDO_ZERO;
            }
            var strokeLinecapStyleProp = this.getStyle('stroke-linecap'),
              strokeLinejoinStyleProp = this.getStyle('stroke-linejoin'),
              strokeMiterlimitProp = this.getStyle('stroke-miterlimit'),
              strokeDasharrayStyleProp = this.getStyle('stroke-dasharray'),
              strokeDashoffsetProp = this.getStyle('stroke-dashoffset');
            if (
              (strokeLinecapStyleProp.hasValue() &&
                (ctx.lineCap = strokeLinecapStyleProp.getString()),
              strokeLinejoinStyleProp.hasValue() &&
                (ctx.lineJoin = strokeLinejoinStyleProp.getString()),
              strokeMiterlimitProp.hasValue() &&
                (ctx.miterLimit = strokeMiterlimitProp.getNumber()),
              strokeDasharrayStyleProp.hasValue() &&
                'none' !== strokeDasharrayStyleProp.getString())
            ) {
              var gaps = toNumbers(strokeDasharrayStyleProp.getString());
              void 0 !== ctx.setLineDash
                ? ctx.setLineDash(gaps)
                : void 0 !== ctx.webkitLineDash
                ? (ctx.webkitLineDash = gaps)
                : void 0 === ctx.mozDash ||
                  (1 === gaps.length && 0 === gaps[0]) ||
                  (ctx.mozDash = gaps);
              var offset = strokeDashoffsetProp.getPixels();
              void 0 !== ctx.lineDashOffset
                ? (ctx.lineDashOffset = offset)
                : void 0 !== ctx.webkitLineDashOffset
                ? (ctx.webkitLineDashOffset = offset)
                : void 0 !== ctx.mozDashOffset && (ctx.mozDashOffset = offset);
            }
          }
          if (((this.modifiedEmSizeStack = !1), void 0 !== ctx.font)) {
            var fontStyleProp = this.getStyle('font'),
              fontStyleStyleProp = this.getStyle('font-style'),
              fontVariantStyleProp = this.getStyle('font-variant'),
              fontWeightStyleProp = this.getStyle('font-weight'),
              fontSizeStyleProp = this.getStyle('font-size'),
              fontFamilyStyleProp = this.getStyle('font-family'),
              font = new Font(
                fontStyleStyleProp.getString(),
                fontVariantStyleProp.getString(),
                fontWeightStyleProp.getString(),
                fontSizeStyleProp.hasValue()
                  ? ''.concat(fontSizeStyleProp.getPixels(!0), 'px')
                  : '',
                fontFamilyStyleProp.getString(),
                Font.parse(fontStyleProp.getString(), ctx.font)
              );
            fontStyleStyleProp.setValue(font.fontStyle),
              fontVariantStyleProp.setValue(font.fontVariant),
              fontWeightStyleProp.setValue(font.fontWeight),
              fontSizeStyleProp.setValue(font.fontSize),
              fontFamilyStyleProp.setValue(font.fontFamily),
              (ctx.font = font.toString()),
              fontSizeStyleProp.isPixels() &&
                ((this.document.emSize = fontSizeStyleProp.getPixels()),
                (this.modifiedEmSizeStack = !0));
          }
          fromMeasure ||
            (this.applyEffects(ctx),
            (ctx.globalAlpha = this.calculateOpacity()));
        }
        clearContext(ctx) {
          super.clearContext(ctx),
            this.modifiedEmSizeStack && this.document.popEmSize();
        }
      }
      class PathElement extends RenderedElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'path'),
            (this.pathParser = null),
            (this.pathParser = new PathParser(
              this.getAttribute('d').getString()
            ));
        }
        path(ctx) {
          var { pathParser } = this,
            boundingBox = new BoundingBox();
          for (
            pathParser.reset(), ctx && ctx.beginPath();
            !pathParser.isEnd();

          )
            switch (pathParser.next().type) {
              case PathParser.MOVE_TO:
                this.pathM(ctx, boundingBox);
                break;
              case PathParser.LINE_TO:
                this.pathL(ctx, boundingBox);
                break;
              case PathParser.HORIZ_LINE_TO:
                this.pathH(ctx, boundingBox);
                break;
              case PathParser.VERT_LINE_TO:
                this.pathV(ctx, boundingBox);
                break;
              case PathParser.CURVE_TO:
                this.pathC(ctx, boundingBox);
                break;
              case PathParser.SMOOTH_CURVE_TO:
                this.pathS(ctx, boundingBox);
                break;
              case PathParser.QUAD_TO:
                this.pathQ(ctx, boundingBox);
                break;
              case PathParser.SMOOTH_QUAD_TO:
                this.pathT(ctx, boundingBox);
                break;
              case PathParser.ARC:
                this.pathA(ctx, boundingBox);
                break;
              case PathParser.CLOSE_PATH:
                this.pathZ(ctx, boundingBox);
            }
          return boundingBox;
        }
        getBoundingBox(_) {
          return this.path();
        }
        getMarkers() {
          var { pathParser } = this,
            points = pathParser.getMarkerPoints(),
            angles = pathParser.getMarkerAngles(),
            markers = points.map((point, i) => [point, angles[i]]);
          return markers;
        }
        renderChildren(ctx) {
          this.path(ctx), this.document.screen.mouse.checkPath(this, ctx);
          var fillRuleStyleProp = this.getStyle('fill-rule');
          '' !== ctx.fillStyle &&
            ('inherit' !== fillRuleStyleProp.getString('inherit')
              ? ctx.fill(fillRuleStyleProp.getString())
              : ctx.fill()),
            '' !== ctx.strokeStyle &&
              ('non-scaling-stroke' ===
              this.getAttribute('vector-effect').getString()
                ? (ctx.save(),
                  ctx.setTransform(1, 0, 0, 1, 0, 0),
                  ctx.stroke(),
                  ctx.restore())
                : ctx.stroke());
          var markers = this.getMarkers();
          if (markers) {
            var markersLastIndex = markers.length - 1,
              markerStartStyleProp = this.getStyle('marker-start'),
              markerMidStyleProp = this.getStyle('marker-mid'),
              markerEndStyleProp = this.getStyle('marker-end');
            if (markerStartStyleProp.isUrlDefinition()) {
              var marker = markerStartStyleProp.getDefinition(),
                [point, angle] = markers[0];
              marker.render(ctx, point, angle);
            }
            if (markerMidStyleProp.isUrlDefinition())
              for (
                var _marker = markerMidStyleProp.getDefinition(), i = 1;
                i < markersLastIndex;
                i++
              ) {
                var [_point, _angle] = markers[i];
                _marker.render(ctx, _point, _angle);
              }
            if (markerEndStyleProp.isUrlDefinition()) {
              var _marker2 = markerEndStyleProp.getDefinition(),
                [_point2, _angle2] = markers[markersLastIndex];
              _marker2.render(ctx, _point2, _angle2);
            }
          }
        }
        static pathM(pathParser) {
          var point = pathParser.getAsCurrentPoint();
          return (pathParser.start = pathParser.current), { point };
        }
        pathM(ctx, boundingBox) {
          var { pathParser } = this,
            { point } = PathElement.pathM(pathParser),
            { x, y } = point;
          pathParser.addMarker(point),
            boundingBox.addPoint(x, y),
            ctx && ctx.moveTo(x, y);
        }
        static pathL(pathParser) {
          var { current } = pathParser;
          return { current, point: pathParser.getAsCurrentPoint() };
        }
        pathL(ctx, boundingBox) {
          var { pathParser } = this,
            { current, point } = PathElement.pathL(pathParser),
            { x, y } = point;
          pathParser.addMarker(point, current),
            boundingBox.addPoint(x, y),
            ctx && ctx.lineTo(x, y);
        }
        static pathH(pathParser) {
          var { current, command } = pathParser,
            point = new Point(
              (command.relative ? current.x : 0) + command.x,
              current.y
            );
          return (pathParser.current = point), { current, point };
        }
        pathH(ctx, boundingBox) {
          var { pathParser } = this,
            { current, point } = PathElement.pathH(pathParser),
            { x, y } = point;
          pathParser.addMarker(point, current),
            boundingBox.addPoint(x, y),
            ctx && ctx.lineTo(x, y);
        }
        static pathV(pathParser) {
          var { current, command } = pathParser,
            point = new Point(
              current.x,
              (command.relative ? current.y : 0) + command.y
            );
          return (pathParser.current = point), { current, point };
        }
        pathV(ctx, boundingBox) {
          var { pathParser } = this,
            { current, point } = PathElement.pathV(pathParser),
            { x, y } = point;
          pathParser.addMarker(point, current),
            boundingBox.addPoint(x, y),
            ctx && ctx.lineTo(x, y);
        }
        static pathC(pathParser) {
          var { current } = pathParser;
          return {
            current,
            point: pathParser.getPoint('x1', 'y1'),
            controlPoint: pathParser.getAsControlPoint('x2', 'y2'),
            currentPoint: pathParser.getAsCurrentPoint(),
          };
        }
        pathC(ctx, boundingBox) {
          var { pathParser } = this,
            { current, point, controlPoint, currentPoint } =
              PathElement.pathC(pathParser);
          pathParser.addMarker(currentPoint, controlPoint, point),
            boundingBox.addBezierCurve(
              current.x,
              current.y,
              point.x,
              point.y,
              controlPoint.x,
              controlPoint.y,
              currentPoint.x,
              currentPoint.y
            ),
            ctx &&
              ctx.bezierCurveTo(
                point.x,
                point.y,
                controlPoint.x,
                controlPoint.y,
                currentPoint.x,
                currentPoint.y
              );
        }
        static pathS(pathParser) {
          var { current } = pathParser;
          return {
            current,
            point: pathParser.getReflectedControlPoint(),
            controlPoint: pathParser.getAsControlPoint('x2', 'y2'),
            currentPoint: pathParser.getAsCurrentPoint(),
          };
        }
        pathS(ctx, boundingBox) {
          var { pathParser } = this,
            { current, point, controlPoint, currentPoint } =
              PathElement.pathS(pathParser);
          pathParser.addMarker(currentPoint, controlPoint, point),
            boundingBox.addBezierCurve(
              current.x,
              current.y,
              point.x,
              point.y,
              controlPoint.x,
              controlPoint.y,
              currentPoint.x,
              currentPoint.y
            ),
            ctx &&
              ctx.bezierCurveTo(
                point.x,
                point.y,
                controlPoint.x,
                controlPoint.y,
                currentPoint.x,
                currentPoint.y
              );
        }
        static pathQ(pathParser) {
          var { current } = pathParser;
          return {
            current,
            controlPoint: pathParser.getAsControlPoint('x1', 'y1'),
            currentPoint: pathParser.getAsCurrentPoint(),
          };
        }
        pathQ(ctx, boundingBox) {
          var { pathParser } = this,
            { current, controlPoint, currentPoint } =
              PathElement.pathQ(pathParser);
          pathParser.addMarker(currentPoint, controlPoint, controlPoint),
            boundingBox.addQuadraticCurve(
              current.x,
              current.y,
              controlPoint.x,
              controlPoint.y,
              currentPoint.x,
              currentPoint.y
            ),
            ctx &&
              ctx.quadraticCurveTo(
                controlPoint.x,
                controlPoint.y,
                currentPoint.x,
                currentPoint.y
              );
        }
        static pathT(pathParser) {
          var { current } = pathParser,
            controlPoint = pathParser.getReflectedControlPoint();
          return (
            (pathParser.control = controlPoint),
            {
              current,
              controlPoint,
              currentPoint: pathParser.getAsCurrentPoint(),
            }
          );
        }
        pathT(ctx, boundingBox) {
          var { pathParser } = this,
            { current, controlPoint, currentPoint } =
              PathElement.pathT(pathParser);
          pathParser.addMarker(currentPoint, controlPoint, controlPoint),
            boundingBox.addQuadraticCurve(
              current.x,
              current.y,
              controlPoint.x,
              controlPoint.y,
              currentPoint.x,
              currentPoint.y
            ),
            ctx &&
              ctx.quadraticCurveTo(
                controlPoint.x,
                controlPoint.y,
                currentPoint.x,
                currentPoint.y
              );
        }
        static pathA(pathParser) {
          var { current, command } = pathParser,
            { rX, rY, xRot, lArcFlag, sweepFlag } = command,
            xAxisRotation = xRot * (Math.PI / 180),
            currentPoint = pathParser.getAsCurrentPoint(),
            currp = new Point(
              (Math.cos(xAxisRotation) * (current.x - currentPoint.x)) / 2 +
                (Math.sin(xAxisRotation) * (current.y - currentPoint.y)) / 2,
              (-Math.sin(xAxisRotation) * (current.x - currentPoint.x)) / 2 +
                (Math.cos(xAxisRotation) * (current.y - currentPoint.y)) / 2
            ),
            l =
              Math.pow(currp.x, 2) / Math.pow(rX, 2) +
              Math.pow(currp.y, 2) / Math.pow(rY, 2);
          l > 1 && ((rX *= Math.sqrt(l)), (rY *= Math.sqrt(l)));
          var s =
            (lArcFlag === sweepFlag ? -1 : 1) *
            Math.sqrt(
              (Math.pow(rX, 2) * Math.pow(rY, 2) -
                Math.pow(rX, 2) * Math.pow(currp.y, 2) -
                Math.pow(rY, 2) * Math.pow(currp.x, 2)) /
                (Math.pow(rX, 2) * Math.pow(currp.y, 2) +
                  Math.pow(rY, 2) * Math.pow(currp.x, 2))
            );
          isNaN(s) && (s = 0);
          var cpp = new Point(
              (s * rX * currp.y) / rY,
              (s * -rY * currp.x) / rX
            ),
            centp = new Point(
              (current.x + currentPoint.x) / 2 +
                Math.cos(xAxisRotation) * cpp.x -
                Math.sin(xAxisRotation) * cpp.y,
              (current.y + currentPoint.y) / 2 +
                Math.sin(xAxisRotation) * cpp.x +
                Math.cos(xAxisRotation) * cpp.y
            ),
            a1 = vectorsAngle(
              [1, 0],
              [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY]
            ),
            u = [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY],
            v = [(-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY],
            ad = vectorsAngle(u, v);
          return (
            vectorsRatio(u, v) <= -1 && (ad = Math.PI),
            vectorsRatio(u, v) >= 1 && (ad = 0),
            { currentPoint, rX, rY, sweepFlag, xAxisRotation, centp, a1, ad }
          );
        }
        pathA(ctx, boundingBox) {
          var { pathParser } = this,
            { currentPoint, rX, rY, sweepFlag, xAxisRotation, centp, a1, ad } =
              PathElement.pathA(pathParser),
            dir = 1 - sweepFlag ? 1 : -1,
            ah = a1 + dir * (ad / 2),
            halfWay = new Point(
              centp.x + rX * Math.cos(ah),
              centp.y + rY * Math.sin(ah)
            );
          if (
            (pathParser.addMarkerAngle(halfWay, ah - (dir * Math.PI) / 2),
            pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI),
            boundingBox.addPoint(currentPoint.x, currentPoint.y),
            ctx && !isNaN(a1) && !isNaN(ad))
          ) {
            var r = rX > rY ? rX : rY,
              sx = rX > rY ? 1 : rX / rY,
              sy = rX > rY ? rY / rX : 1;
            ctx.translate(centp.x, centp.y),
              ctx.rotate(xAxisRotation),
              ctx.scale(sx, sy),
              ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag)),
              ctx.scale(1 / sx, 1 / sy),
              ctx.rotate(-xAxisRotation),
              ctx.translate(-centp.x, -centp.y);
          }
        }
        static pathZ(pathParser) {
          pathParser.current = pathParser.start;
        }
        pathZ(ctx, boundingBox) {
          PathElement.pathZ(this.pathParser),
            ctx &&
              boundingBox.x1 !== boundingBox.x2 &&
              boundingBox.y1 !== boundingBox.y2 &&
              ctx.closePath();
        }
      }
      class GlyphElement extends PathElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'glyph'),
            (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber()),
            (this.unicode = this.getAttribute('unicode').getString()),
            (this.arabicForm = this.getAttribute('arabic-form').getString());
        }
      }
      class TextElement extends RenderedElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, new.target === TextElement || captureTextNodes),
            (this.type = 'text'),
            (this.x = 0),
            (this.y = 0),
            (this.measureCache = -1);
        }
        setContext(ctx) {
          var fromMeasure =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          super.setContext(ctx, fromMeasure);
          var textBaseline =
            this.getStyle('dominant-baseline').getTextBaseline() ||
            this.getStyle('alignment-baseline').getTextBaseline();
          textBaseline && (ctx.textBaseline = textBaseline);
        }
        initializeCoordinates() {
          (this.x = 0),
            (this.y = 0),
            (this.leafTexts = []),
            (this.textChunkStart = 0),
            (this.minX = Number.POSITIVE_INFINITY),
            (this.maxX = Number.NEGATIVE_INFINITY);
        }
        getBoundingBox(ctx) {
          if ('text' !== this.type) return this.getTElementBoundingBox(ctx);
          this.initializeCoordinates(),
            this.adjustChildCoordinatesRecursive(ctx);
          var boundingBox = null;
          return (
            this.children.forEach((_, i) => {
              var childBoundingBox = this.getChildBoundingBox(
                ctx,
                this,
                this,
                i
              );
              boundingBox
                ? boundingBox.addBoundingBox(childBoundingBox)
                : (boundingBox = childBoundingBox);
            }),
            boundingBox
          );
        }
        getFontSize() {
          var { document, parent } = this,
            inheritFontSize = Font.parse(document.ctx.font).fontSize;
          return parent.getStyle('font-size').getNumber(inheritFontSize);
        }
        getTElementBoundingBox(ctx) {
          var fontSize = this.getFontSize();
          return new BoundingBox(
            this.x,
            this.y - fontSize,
            this.x + this.measureText(ctx),
            this.y
          );
        }
        getGlyph(font, text, i) {
          var char = text[i],
            glyph = null;
          if (font.isArabic) {
            var len = text.length,
              prevChar = text[i - 1],
              nextChar = text[i + 1],
              arabicForm = 'isolated';
            if (
              ((0 === i || ' ' === prevChar) &&
                i < len - 1 &&
                ' ' !== nextChar &&
                (arabicForm = 'terminal'),
              i > 0 &&
                ' ' !== prevChar &&
                i < len - 1 &&
                ' ' !== nextChar &&
                (arabicForm = 'medial'),
              i > 0 &&
                ' ' !== prevChar &&
                (i === len - 1 || ' ' === nextChar) &&
                (arabicForm = 'initial'),
              void 0 !== font.glyphs[char])
            ) {
              var maybeGlyph = font.glyphs[char];
              glyph =
                maybeGlyph instanceof GlyphElement
                  ? maybeGlyph
                  : maybeGlyph[arabicForm];
            }
          } else glyph = font.glyphs[char];
          return glyph || (glyph = font.missingGlyph), glyph;
        }
        getText() {
          return '';
        }
        getTextFromNode(node) {
          var textNode = node || this.node,
            childNodes = Array.from(textNode.parentNode.childNodes),
            index = childNodes.indexOf(textNode),
            lastIndex = childNodes.length - 1,
            text = compressSpaces(textNode.textContent || '');
          return (
            0 === index && (text = trimLeft(text)),
            index === lastIndex && (text = trimRight(text)),
            text
          );
        }
        renderChildren(ctx) {
          if ('text' === this.type) {
            this.initializeCoordinates(),
              this.adjustChildCoordinatesRecursive(ctx),
              this.children.forEach((_, i) => {
                this.renderChild(ctx, this, this, i);
              });
            var { mouse } = this.document.screen;
            mouse.isWorking() &&
              mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
          } else this.renderTElementChildren(ctx);
        }
        renderTElementChildren(ctx) {
          var { document, parent } = this,
            renderText = this.getText(),
            customFont = parent.getStyle('font-family').getDefinition();
          if (customFont)
            for (
              var { unitsPerEm } = customFont.fontFace,
                ctxFont = Font.parse(document.ctx.font),
                fontSize = parent
                  .getStyle('font-size')
                  .getNumber(ctxFont.fontSize),
                fontStyle = parent
                  .getStyle('font-style')
                  .getString(ctxFont.fontStyle),
                scale = fontSize / unitsPerEm,
                text = customFont.isRTL
                  ? renderText.split('').reverse().join('')
                  : renderText,
                dx = toNumbers(parent.getAttribute('dx').getString()),
                len = text.length,
                i = 0;
              i < len;
              i++
            ) {
              var glyph = this.getGlyph(customFont, text, i);
              ctx.translate(this.x, this.y), ctx.scale(scale, -scale);
              var lw = ctx.lineWidth;
              (ctx.lineWidth = (ctx.lineWidth * unitsPerEm) / fontSize),
                'italic' === fontStyle && ctx.transform(1, 0, 0.4, 1, 0, 0),
                glyph.render(ctx),
                'italic' === fontStyle && ctx.transform(1, 0, -0.4, 1, 0, 0),
                (ctx.lineWidth = lw),
                ctx.scale(1 / scale, -1 / scale),
                ctx.translate(-this.x, -this.y),
                (this.x +=
                  (fontSize * (glyph.horizAdvX || customFont.horizAdvX)) /
                  unitsPerEm),
                void 0 === dx[i] || isNaN(dx[i]) || (this.x += dx[i]);
            }
          else {
            var { x, y } = this;
            ctx.fillStyle && ctx.fillText(renderText, x, y),
              ctx.strokeStyle && ctx.strokeText(renderText, x, y);
          }
        }
        applyAnchoring() {
          if (!(this.textChunkStart >= this.leafTexts.length)) {
            var firstElement = this.leafTexts[this.textChunkStart],
              textAnchor = firstElement
                .getStyle('text-anchor')
                .getString('start'),
              shift = 0;
            shift =
              'start' === textAnchor
                ? firstElement.x - this.minX
                : 'end' === textAnchor
                ? firstElement.x - this.maxX
                : firstElement.x - (this.minX + this.maxX) / 2;
            for (var i = this.textChunkStart; i < this.leafTexts.length; i++)
              this.leafTexts[i].x += shift;
            (this.minX = Number.POSITIVE_INFINITY),
              (this.maxX = Number.NEGATIVE_INFINITY),
              (this.textChunkStart = this.leafTexts.length);
          }
        }
        adjustChildCoordinatesRecursive(ctx) {
          this.children.forEach((_, i) => {
            this.adjustChildCoordinatesRecursiveCore(ctx, this, this, i);
          }),
            this.applyAnchoring();
        }
        adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
          var child = parent.children[i];
          child.children.length > 0
            ? child.children.forEach((_, i) => {
                textParent.adjustChildCoordinatesRecursiveCore(
                  ctx,
                  textParent,
                  child,
                  i
                );
              })
            : this.adjustChildCoordinates(ctx, textParent, parent, i);
        }
        adjustChildCoordinates(ctx, textParent, parent, i) {
          var child = parent.children[i];
          if ('function' != typeof child.measureText) return child;
          ctx.save(), child.setContext(ctx, !0);
          var xAttr = child.getAttribute('x'),
            yAttr = child.getAttribute('y'),
            dxAttr = child.getAttribute('dx'),
            dyAttr = child.getAttribute('dy'),
            customFont = child.getStyle('font-family').getDefinition(),
            isRTL = Boolean(customFont) && customFont.isRTL;
          0 === i &&
            (xAttr.hasValue() ||
              xAttr.setValue(child.getInheritedAttribute('x')),
            yAttr.hasValue() ||
              yAttr.setValue(child.getInheritedAttribute('y')),
            dxAttr.hasValue() ||
              dxAttr.setValue(child.getInheritedAttribute('dx')),
            dyAttr.hasValue() ||
              dyAttr.setValue(child.getInheritedAttribute('dy')));
          var width = child.measureText(ctx);
          return (
            isRTL && (textParent.x -= width),
            xAttr.hasValue()
              ? (textParent.applyAnchoring(),
                (child.x = xAttr.getPixels('x')),
                dxAttr.hasValue() && (child.x += dxAttr.getPixels('x')))
              : (dxAttr.hasValue() && (textParent.x += dxAttr.getPixels('x')),
                (child.x = textParent.x)),
            (textParent.x = child.x),
            isRTL || (textParent.x += width),
            yAttr.hasValue()
              ? ((child.y = yAttr.getPixels('y')),
                dyAttr.hasValue() && (child.y += dyAttr.getPixels('y')))
              : (dyAttr.hasValue() && (textParent.y += dyAttr.getPixels('y')),
                (child.y = textParent.y)),
            (textParent.y = child.y),
            textParent.leafTexts.push(child),
            (textParent.minX = Math.min(
              textParent.minX,
              child.x,
              child.x + width
            )),
            (textParent.maxX = Math.max(
              textParent.maxX,
              child.x,
              child.x + width
            )),
            child.clearContext(ctx),
            ctx.restore(),
            child
          );
        }
        getChildBoundingBox(ctx, textParent, parent, i) {
          var child = parent.children[i];
          if ('function' != typeof child.getBoundingBox) return null;
          var boundingBox = child.getBoundingBox(ctx);
          return boundingBox
            ? (child.children.forEach((_, i) => {
                var childBoundingBox = textParent.getChildBoundingBox(
                  ctx,
                  textParent,
                  child,
                  i
                );
                boundingBox.addBoundingBox(childBoundingBox);
              }),
              boundingBox)
            : null;
        }
        renderChild(ctx, textParent, parent, i) {
          var child = parent.children[i];
          child.render(ctx),
            child.children.forEach((_, i) => {
              textParent.renderChild(ctx, textParent, child, i);
            });
        }
        measureText(ctx) {
          var { measureCache } = this;
          if (~measureCache) return measureCache;
          var renderText = this.getText(),
            measure = this.measureTargetText(ctx, renderText);
          return (this.measureCache = measure), measure;
        }
        measureTargetText(ctx, targetText) {
          if (!targetText.length) return 0;
          var { parent } = this,
            customFont = parent.getStyle('font-family').getDefinition();
          if (customFont) {
            for (
              var fontSize = this.getFontSize(),
                text = customFont.isRTL
                  ? targetText.split('').reverse().join('')
                  : targetText,
                dx = toNumbers(parent.getAttribute('dx').getString()),
                len = text.length,
                _measure = 0,
                i = 0;
              i < len;
              i++
            ) {
              (_measure +=
                ((this.getGlyph(customFont, text, i).horizAdvX ||
                  customFont.horizAdvX) *
                  fontSize) /
                customFont.fontFace.unitsPerEm),
                void 0 === dx[i] || isNaN(dx[i]) || (_measure += dx[i]);
            }
            return _measure;
          }
          if (!ctx.measureText) return 10 * targetText.length;
          ctx.save(), this.setContext(ctx, !0);
          var { width: measure } = ctx.measureText(targetText);
          return this.clearContext(ctx), ctx.restore(), measure;
        }
        getInheritedAttribute(name) {
          for (
            var current = this;
            current instanceof TextElement && current.isFirstChild();

          ) {
            var parentAttr = current.parent.getAttribute(name);
            if (parentAttr.hasValue(!0)) return parentAttr.getValue('0');
            current = current.parent;
          }
          return null;
        }
      }
      class TSpanElement extends TextElement {
        constructor(document, node, captureTextNodes) {
          super(
            document,
            node,
            new.target === TSpanElement || captureTextNodes
          ),
            (this.type = 'tspan'),
            (this.text =
              this.children.length > 0 ? '' : this.getTextFromNode());
        }
        getText() {
          return this.text;
        }
      }
      class TextNode extends TSpanElement {
        constructor() {
          super(...arguments), (this.type = 'textNode');
        }
      }
      class SVGElement extends RenderedElement {
        constructor() {
          super(...arguments), (this.type = 'svg'), (this.root = !1);
        }
        setContext(ctx) {
          var _this$node$parentNode,
            { document } = this,
            { screen, window } = document,
            canvas = ctx.canvas;
          if (
            (screen.setDefaults(ctx),
            canvas.style &&
              void 0 !== ctx.font &&
              window &&
              void 0 !== window.getComputedStyle)
          ) {
            ctx.font = window.getComputedStyle(canvas).getPropertyValue('font');
            var fontSizeProp = new Property(
              document,
              'fontSize',
              Font.parse(ctx.font).fontSize
            );
            fontSizeProp.hasValue() &&
              ((document.rootEmSize = fontSizeProp.getPixels('y')),
              (document.emSize = document.rootEmSize));
          }
          this.getAttribute('x').hasValue() ||
            this.getAttribute('x', !0).setValue(0),
            this.getAttribute('y').hasValue() ||
              this.getAttribute('y', !0).setValue(0);
          var { width, height } = screen.viewPort;
          this.getStyle('width').hasValue() ||
            this.getStyle('width', !0).setValue('100%'),
            this.getStyle('height').hasValue() ||
              this.getStyle('height', !0).setValue('100%'),
            this.getStyle('color').hasValue() ||
              this.getStyle('color', !0).setValue('black');
          var refXAttr = this.getAttribute('refX'),
            refYAttr = this.getAttribute('refY'),
            viewBoxAttr = this.getAttribute('viewBox'),
            viewBox = viewBoxAttr.hasValue()
              ? toNumbers(viewBoxAttr.getString())
              : null,
            clip =
              !this.root &&
              'visible' !== this.getStyle('overflow').getValue('hidden'),
            minX = 0,
            minY = 0,
            clipX = 0,
            clipY = 0;
          viewBox && ((minX = viewBox[0]), (minY = viewBox[1])),
            this.root ||
              ((width = this.getStyle('width').getPixels('x')),
              (height = this.getStyle('height').getPixels('y')),
              'marker' === this.type &&
                ((clipX = minX), (clipY = minY), (minX = 0), (minY = 0))),
            screen.viewPort.setCurrent(width, height),
            !this.node ||
              (this.parent &&
                'foreignObject' !==
                  (null === (_this$node$parentNode = this.node.parentNode) ||
                  void 0 === _this$node$parentNode
                    ? void 0
                    : _this$node$parentNode.nodeName)) ||
              !this.getStyle('transform', !1, !0).hasValue() ||
              this.getStyle('transform-origin', !1, !0).hasValue() ||
              this.getStyle('transform-origin', !0, !0).setValue('50% 50%'),
            super.setContext(ctx),
            ctx.translate(
              this.getAttribute('x').getPixels('x'),
              this.getAttribute('y').getPixels('y')
            ),
            viewBox && ((width = viewBox[2]), (height = viewBox[3])),
            document.setViewBox({
              ctx,
              aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
              width: screen.viewPort.width,
              desiredWidth: width,
              height: screen.viewPort.height,
              desiredHeight: height,
              minX,
              minY,
              refX: refXAttr.getValue(),
              refY: refYAttr.getValue(),
              clip,
              clipX,
              clipY,
            }),
            viewBox &&
              (screen.viewPort.removeCurrent(),
              screen.viewPort.setCurrent(width, height));
        }
        clearContext(ctx) {
          super.clearContext(ctx),
            this.document.screen.viewPort.removeCurrent();
        }
        resize(width) {
          var height =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : width,
            preserveAspectRatio =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            widthAttr = this.getAttribute('width', !0),
            heightAttr = this.getAttribute('height', !0),
            viewBoxAttr = this.getAttribute('viewBox'),
            styleAttr = this.getAttribute('style'),
            originWidth = widthAttr.getNumber(0),
            originHeight = heightAttr.getNumber(0);
          if (preserveAspectRatio)
            if ('string' == typeof preserveAspectRatio)
              this.getAttribute('preserveAspectRatio', !0).setValue(
                preserveAspectRatio
              );
            else {
              var preserveAspectRatioAttr = this.getAttribute(
                'preserveAspectRatio'
              );
              preserveAspectRatioAttr.hasValue() &&
                preserveAspectRatioAttr.setValue(
                  preserveAspectRatioAttr
                    .getString()
                    .replace(/^\s*(\S.*\S)\s*$/, '$1')
                );
            }
          if (
            (widthAttr.setValue(width),
            heightAttr.setValue(height),
            viewBoxAttr.hasValue() ||
              viewBoxAttr.setValue(
                '0 0 '
                  .concat(originWidth || width, ' ')
                  .concat(originHeight || height)
              ),
            styleAttr.hasValue())
          ) {
            var widthStyle = this.getStyle('width'),
              heightStyle = this.getStyle('height');
            widthStyle.hasValue() &&
              widthStyle.setValue(''.concat(width, 'px')),
              heightStyle.hasValue() &&
                heightStyle.setValue(''.concat(height, 'px'));
          }
        }
      }
      class RectElement extends PathElement {
        constructor() {
          super(...arguments), (this.type = 'rect');
        }
        path(ctx) {
          var x = this.getAttribute('x').getPixels('x'),
            y = this.getAttribute('y').getPixels('y'),
            width = this.getStyle('width', !1, !0).getPixels('x'),
            height = this.getStyle('height', !1, !0).getPixels('y'),
            rxAttr = this.getAttribute('rx'),
            ryAttr = this.getAttribute('ry'),
            rx = rxAttr.getPixels('x'),
            ry = ryAttr.getPixels('y');
          if (
            (rxAttr.hasValue() && !ryAttr.hasValue() && (ry = rx),
            ryAttr.hasValue() && !rxAttr.hasValue() && (rx = ry),
            (rx = Math.min(rx, width / 2)),
            (ry = Math.min(ry, height / 2)),
            ctx)
          ) {
            var KAPPA = ((Math.sqrt(2) - 1) / 3) * 4;
            ctx.beginPath(),
              height > 0 &&
                width > 0 &&
                (ctx.moveTo(x + rx, y),
                ctx.lineTo(x + width - rx, y),
                ctx.bezierCurveTo(
                  x + width - rx + KAPPA * rx,
                  y,
                  x + width,
                  y + ry - KAPPA * ry,
                  x + width,
                  y + ry
                ),
                ctx.lineTo(x + width, y + height - ry),
                ctx.bezierCurveTo(
                  x + width,
                  y + height - ry + KAPPA * ry,
                  x + width - rx + KAPPA * rx,
                  y + height,
                  x + width - rx,
                  y + height
                ),
                ctx.lineTo(x + rx, y + height),
                ctx.bezierCurveTo(
                  x + rx - KAPPA * rx,
                  y + height,
                  x,
                  y + height - ry + KAPPA * ry,
                  x,
                  y + height - ry
                ),
                ctx.lineTo(x, y + ry),
                ctx.bezierCurveTo(
                  x,
                  y + ry - KAPPA * ry,
                  x + rx - KAPPA * rx,
                  y,
                  x + rx,
                  y
                ),
                ctx.closePath());
          }
          return new BoundingBox(x, y, x + width, y + height);
        }
        getMarkers() {
          return null;
        }
      }
      class CircleElement extends PathElement {
        constructor() {
          super(...arguments), (this.type = 'circle');
        }
        path(ctx) {
          var cx = this.getAttribute('cx').getPixels('x'),
            cy = this.getAttribute('cy').getPixels('y'),
            r = this.getAttribute('r').getPixels();
          return (
            ctx &&
              r > 0 &&
              (ctx.beginPath(),
              ctx.arc(cx, cy, r, 0, 2 * Math.PI, !1),
              ctx.closePath()),
            new BoundingBox(cx - r, cy - r, cx + r, cy + r)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class EllipseElement extends PathElement {
        constructor() {
          super(...arguments), (this.type = 'ellipse');
        }
        path(ctx) {
          var KAPPA = ((Math.sqrt(2) - 1) / 3) * 4,
            rx = this.getAttribute('rx').getPixels('x'),
            ry = this.getAttribute('ry').getPixels('y'),
            cx = this.getAttribute('cx').getPixels('x'),
            cy = this.getAttribute('cy').getPixels('y');
          return (
            ctx &&
              rx > 0 &&
              ry > 0 &&
              (ctx.beginPath(),
              ctx.moveTo(cx + rx, cy),
              ctx.bezierCurveTo(
                cx + rx,
                cy + KAPPA * ry,
                cx + KAPPA * rx,
                cy + ry,
                cx,
                cy + ry
              ),
              ctx.bezierCurveTo(
                cx - KAPPA * rx,
                cy + ry,
                cx - rx,
                cy + KAPPA * ry,
                cx - rx,
                cy
              ),
              ctx.bezierCurveTo(
                cx - rx,
                cy - KAPPA * ry,
                cx - KAPPA * rx,
                cy - ry,
                cx,
                cy - ry
              ),
              ctx.bezierCurveTo(
                cx + KAPPA * rx,
                cy - ry,
                cx + rx,
                cy - KAPPA * ry,
                cx + rx,
                cy
              ),
              ctx.closePath()),
            new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class LineElement extends PathElement {
        constructor() {
          super(...arguments), (this.type = 'line');
        }
        getPoints() {
          return [
            new Point(
              this.getAttribute('x1').getPixels('x'),
              this.getAttribute('y1').getPixels('y')
            ),
            new Point(
              this.getAttribute('x2').getPixels('x'),
              this.getAttribute('y2').getPixels('y')
            ),
          ];
        }
        path(ctx) {
          var [{ x: x0, y: y0 }, { x: x1, y: y1 }] = this.getPoints();
          return (
            ctx && (ctx.beginPath(), ctx.moveTo(x0, y0), ctx.lineTo(x1, y1)),
            new BoundingBox(x0, y0, x1, y1)
          );
        }
        getMarkers() {
          var [p0, p1] = this.getPoints(),
            a = p0.angleTo(p1);
          return [
            [p0, a],
            [p1, a],
          ];
        }
      }
      class PolylineElement extends PathElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'polyline'),
            (this.points = []),
            (this.points = Point.parsePath(
              this.getAttribute('points').getString()
            ));
        }
        path(ctx) {
          var { points } = this,
            [{ x: x0, y: y0 }] = points,
            boundingBox = new BoundingBox(x0, y0);
          return (
            ctx && (ctx.beginPath(), ctx.moveTo(x0, y0)),
            points.forEach((_ref) => {
              var { x, y } = _ref;
              boundingBox.addPoint(x, y), ctx && ctx.lineTo(x, y);
            }),
            boundingBox
          );
        }
        getMarkers() {
          var { points } = this,
            lastIndex = points.length - 1,
            markers = [];
          return (
            points.forEach((point, i) => {
              i !== lastIndex &&
                markers.push([point, point.angleTo(points[i + 1])]);
            }),
            markers.length > 0 &&
              markers.push([
                points[points.length - 1],
                markers[markers.length - 1][1],
              ]),
            markers
          );
        }
      }
      class PolygonElement extends PolylineElement {
        constructor() {
          super(...arguments), (this.type = 'polygon');
        }
        path(ctx) {
          var boundingBox = super.path(ctx),
            [{ x, y }] = this.points;
          return ctx && (ctx.lineTo(x, y), ctx.closePath()), boundingBox;
        }
      }
      class PatternElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'pattern');
        }
        createPattern(ctx, _, parentOpacityProp) {
          var width = this.getStyle('width').getPixels('x', !0),
            height = this.getStyle('height').getPixels('y', !0),
            patternSvg = new SVGElement(this.document, null);
          (patternSvg.attributes.viewBox = new Property(
            this.document,
            'viewBox',
            this.getAttribute('viewBox').getValue()
          )),
            (patternSvg.attributes.width = new Property(
              this.document,
              'width',
              ''.concat(width, 'px')
            )),
            (patternSvg.attributes.height = new Property(
              this.document,
              'height',
              ''.concat(height, 'px')
            )),
            (patternSvg.attributes.transform = new Property(
              this.document,
              'transform',
              this.getAttribute('patternTransform').getValue()
            )),
            (patternSvg.children = this.children);
          var patternCanvas = this.document.createCanvas(width, height),
            patternCtx = patternCanvas.getContext('2d'),
            xAttr = this.getAttribute('x'),
            yAttr = this.getAttribute('y');
          xAttr.hasValue() &&
            yAttr.hasValue() &&
            patternCtx.translate(
              xAttr.getPixels('x', !0),
              yAttr.getPixels('y', !0)
            ),
            parentOpacityProp.hasValue()
              ? (this.styles['fill-opacity'] = parentOpacityProp)
              : Reflect.deleteProperty(this.styles, 'fill-opacity');
          for (var x = -1; x <= 1; x++)
            for (var y = -1; y <= 1; y++)
              patternCtx.save(),
                (patternSvg.attributes.x = new Property(
                  this.document,
                  'x',
                  x * patternCanvas.width
                )),
                (patternSvg.attributes.y = new Property(
                  this.document,
                  'y',
                  y * patternCanvas.height
                )),
                patternSvg.render(patternCtx),
                patternCtx.restore();
          return ctx.createPattern(patternCanvas, 'repeat');
        }
      }
      class MarkerElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'marker');
        }
        render(ctx, point, angle) {
          if (point) {
            var { x, y } = point,
              orient = this.getAttribute('orient').getString('auto'),
              markerUnits =
                this.getAttribute('markerUnits').getString('strokeWidth');
            ctx.translate(x, y),
              'auto' === orient && ctx.rotate(angle),
              'strokeWidth' === markerUnits &&
                ctx.scale(ctx.lineWidth, ctx.lineWidth),
              ctx.save();
            var markerSvg = new SVGElement(this.document, null);
            (markerSvg.type = this.type),
              (markerSvg.attributes.viewBox = new Property(
                this.document,
                'viewBox',
                this.getAttribute('viewBox').getValue()
              )),
              (markerSvg.attributes.refX = new Property(
                this.document,
                'refX',
                this.getAttribute('refX').getValue()
              )),
              (markerSvg.attributes.refY = new Property(
                this.document,
                'refY',
                this.getAttribute('refY').getValue()
              )),
              (markerSvg.attributes.width = new Property(
                this.document,
                'width',
                this.getAttribute('markerWidth').getValue()
              )),
              (markerSvg.attributes.height = new Property(
                this.document,
                'height',
                this.getAttribute('markerHeight').getValue()
              )),
              (markerSvg.attributes.overflow = new Property(
                this.document,
                'overflow',
                this.getAttribute('overflow').getValue()
              )),
              (markerSvg.attributes.fill = new Property(
                this.document,
                'fill',
                this.getAttribute('fill').getColor('black')
              )),
              (markerSvg.attributes.stroke = new Property(
                this.document,
                'stroke',
                this.getAttribute('stroke').getValue('none')
              )),
              (markerSvg.children = this.children),
              markerSvg.render(ctx),
              ctx.restore(),
              'strokeWidth' === markerUnits &&
                ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth),
              'auto' === orient && ctx.rotate(-angle),
              ctx.translate(-x, -y);
          }
        }
      }
      class DefsElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'defs');
        }
        render() {}
      }
      class GElement extends RenderedElement {
        constructor() {
          super(...arguments), (this.type = 'g');
        }
        getBoundingBox(ctx) {
          var boundingBox = new BoundingBox();
          return (
            this.children.forEach((child) => {
              boundingBox.addBoundingBox(child.getBoundingBox(ctx));
            }),
            boundingBox
          );
        }
      }
      class GradientElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.attributesToInherit = ['gradientUnits']),
            (this.stops = []);
          var { stops, children } = this;
          children.forEach((child) => {
            'stop' === child.type && stops.push(child);
          });
        }
        getGradientUnits() {
          return this.getAttribute('gradientUnits').getString(
            'objectBoundingBox'
          );
        }
        createGradient(ctx, element, parentOpacityProp) {
          var stopsContainer = this;
          this.getHrefAttribute().hasValue() &&
            ((stopsContainer = this.getHrefAttribute().getDefinition()),
            this.inheritStopContainer(stopsContainer));
          var { stops } = stopsContainer,
            gradient = this.getGradient(ctx, element);
          if (!gradient)
            return this.addParentOpacity(
              parentOpacityProp,
              stops[stops.length - 1].color
            );
          if (
            (stops.forEach((stop) => {
              gradient.addColorStop(
                stop.offset,
                this.addParentOpacity(parentOpacityProp, stop.color)
              );
            }),
            this.getAttribute('gradientTransform').hasValue())
          ) {
            var { document } = this,
              { MAX_VIRTUAL_PIXELS, viewPort } = document.screen,
              [rootView] = viewPort.viewPorts,
              rect = new RectElement(document, null);
            (rect.attributes.x = new Property(
              document,
              'x',
              -MAX_VIRTUAL_PIXELS / 3
            )),
              (rect.attributes.y = new Property(
                document,
                'y',
                -MAX_VIRTUAL_PIXELS / 3
              )),
              (rect.attributes.width = new Property(
                document,
                'width',
                MAX_VIRTUAL_PIXELS
              )),
              (rect.attributes.height = new Property(
                document,
                'height',
                MAX_VIRTUAL_PIXELS
              ));
            var group = new GElement(document, null);
            (group.attributes.transform = new Property(
              document,
              'transform',
              this.getAttribute('gradientTransform').getValue()
            )),
              (group.children = [rect]);
            var patternSvg = new SVGElement(document, null);
            (patternSvg.attributes.x = new Property(document, 'x', 0)),
              (patternSvg.attributes.y = new Property(document, 'y', 0)),
              (patternSvg.attributes.width = new Property(
                document,
                'width',
                rootView.width
              )),
              (patternSvg.attributes.height = new Property(
                document,
                'height',
                rootView.height
              )),
              (patternSvg.children = [group]);
            var patternCanvas = document.createCanvas(
                rootView.width,
                rootView.height
              ),
              patternCtx = patternCanvas.getContext('2d');
            return (
              (patternCtx.fillStyle = gradient),
              patternSvg.render(patternCtx),
              patternCtx.createPattern(patternCanvas, 'no-repeat')
            );
          }
          return gradient;
        }
        inheritStopContainer(stopsContainer) {
          this.attributesToInherit.forEach((attributeToInherit) => {
            !this.getAttribute(attributeToInherit).hasValue() &&
              stopsContainer.getAttribute(attributeToInherit).hasValue() &&
              this.getAttribute(attributeToInherit, !0).setValue(
                stopsContainer.getAttribute(attributeToInherit).getValue()
              );
          });
        }
        addParentOpacity(parentOpacityProp, color) {
          return parentOpacityProp.hasValue()
            ? new Property(this.document, 'color', color)
                .addOpacity(parentOpacityProp)
                .getColor()
            : color;
        }
      }
      class LinearGradientElement extends GradientElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'linearGradient'),
            this.attributesToInherit.push('x1', 'y1', 'x2', 'y2');
        }
        getGradient(ctx, element) {
          var isBoundingBoxUnits =
              'objectBoundingBox' === this.getGradientUnits(),
            boundingBox = isBoundingBoxUnits
              ? element.getBoundingBox(ctx)
              : null;
          if (isBoundingBoxUnits && !boundingBox) return null;
          this.getAttribute('x1').hasValue() ||
            this.getAttribute('y1').hasValue() ||
            this.getAttribute('x2').hasValue() ||
            this.getAttribute('y2').hasValue() ||
            (this.getAttribute('x1', !0).setValue(0),
            this.getAttribute('y1', !0).setValue(0),
            this.getAttribute('x2', !0).setValue(1),
            this.getAttribute('y2', !0).setValue(0));
          var x1 = isBoundingBoxUnits
              ? boundingBox.x +
                boundingBox.width * this.getAttribute('x1').getNumber()
              : this.getAttribute('x1').getPixels('x'),
            y1 = isBoundingBoxUnits
              ? boundingBox.y +
                boundingBox.height * this.getAttribute('y1').getNumber()
              : this.getAttribute('y1').getPixels('y'),
            x2 = isBoundingBoxUnits
              ? boundingBox.x +
                boundingBox.width * this.getAttribute('x2').getNumber()
              : this.getAttribute('x2').getPixels('x'),
            y2 = isBoundingBoxUnits
              ? boundingBox.y +
                boundingBox.height * this.getAttribute('y2').getNumber()
              : this.getAttribute('y2').getPixels('y');
          return x1 === x2 && y1 === y2
            ? null
            : ctx.createLinearGradient(x1, y1, x2, y2);
        }
      }
      class RadialGradientElement extends GradientElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'radialGradient'),
            this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');
        }
        getGradient(ctx, element) {
          var isBoundingBoxUnits =
              'objectBoundingBox' === this.getGradientUnits(),
            boundingBox = element.getBoundingBox(ctx);
          if (isBoundingBoxUnits && !boundingBox) return null;
          this.getAttribute('cx').hasValue() ||
            this.getAttribute('cx', !0).setValue('50%'),
            this.getAttribute('cy').hasValue() ||
              this.getAttribute('cy', !0).setValue('50%'),
            this.getAttribute('r').hasValue() ||
              this.getAttribute('r', !0).setValue('50%');
          var cx = isBoundingBoxUnits
              ? boundingBox.x +
                boundingBox.width * this.getAttribute('cx').getNumber()
              : this.getAttribute('cx').getPixels('x'),
            cy = isBoundingBoxUnits
              ? boundingBox.y +
                boundingBox.height * this.getAttribute('cy').getNumber()
              : this.getAttribute('cy').getPixels('y'),
            fx = cx,
            fy = cy;
          this.getAttribute('fx').hasValue() &&
            (fx = isBoundingBoxUnits
              ? boundingBox.x +
                boundingBox.width * this.getAttribute('fx').getNumber()
              : this.getAttribute('fx').getPixels('x')),
            this.getAttribute('fy').hasValue() &&
              (fy = isBoundingBoxUnits
                ? boundingBox.y +
                  boundingBox.height * this.getAttribute('fy').getNumber()
                : this.getAttribute('fy').getPixels('y'));
          var r = isBoundingBoxUnits
              ? ((boundingBox.width + boundingBox.height) / 2) *
                this.getAttribute('r').getNumber()
              : this.getAttribute('r').getPixels(),
            fr = this.getAttribute('fr').getPixels();
          return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
        }
      }
      class StopElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes), (this.type = 'stop');
          var offset = Math.max(
              0,
              Math.min(1, this.getAttribute('offset').getNumber())
            ),
            stopOpacity = this.getStyle('stop-opacity'),
            stopColor = this.getStyle('stop-color', !0);
          '' === stopColor.getString() && stopColor.setValue('#000'),
            stopOpacity.hasValue() &&
              (stopColor = stopColor.addOpacity(stopOpacity)),
            (this.offset = offset),
            (this.color = stopColor.getColor());
        }
      }
      class AnimateElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'animate'),
            (this.duration = 0),
            (this.initialValue = null),
            (this.initialUnits = ''),
            (this.removed = !1),
            (this.frozen = !1),
            document.screen.animations.push(this),
            (this.begin = this.getAttribute('begin').getMilliseconds()),
            (this.maxDuration =
              this.begin + this.getAttribute('dur').getMilliseconds()),
            (this.from = this.getAttribute('from')),
            (this.to = this.getAttribute('to')),
            (this.values = new Property(document, 'values', null));
          var valuesAttr = this.getAttribute('values');
          valuesAttr.hasValue() &&
            this.values.setValue(valuesAttr.getString().split(';'));
        }
        getProperty() {
          var attributeType = this.getAttribute('attributeType').getString(),
            attributeName = this.getAttribute('attributeName').getString();
          return 'CSS' === attributeType
            ? this.parent.getStyle(attributeName, !0)
            : this.parent.getAttribute(attributeName, !0);
        }
        calcValue() {
          var { initialUnits } = this,
            { progress, from, to } = this.getProgress(),
            newValue =
              from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
          return (
            '%' === initialUnits && (newValue *= 100),
            ''.concat(newValue).concat(initialUnits)
          );
        }
        update(delta) {
          var { parent } = this,
            prop = this.getProperty();
          if (
            (this.initialValue ||
              ((this.initialValue = prop.getString()),
              (this.initialUnits = prop.getUnits())),
            this.duration > this.maxDuration)
          ) {
            var fill = this.getAttribute('fill').getString('remove');
            if (
              'indefinite' === this.getAttribute('repeatCount').getString() ||
              'indefinite' === this.getAttribute('repeatDur').getString()
            )
              this.duration = 0;
            else if ('freeze' !== fill || this.frozen) {
              if ('remove' === fill && !this.removed)
                return (
                  (this.removed = !0),
                  prop.setValue(
                    parent.animationFrozen
                      ? parent.animationFrozenValue
                      : this.initialValue
                  ),
                  !0
                );
            } else
              (this.frozen = !0),
                (parent.animationFrozen = !0),
                (parent.animationFrozenValue = prop.getString());
            return !1;
          }
          this.duration += delta;
          var updated = !1;
          if (this.begin < this.duration) {
            var newValue = this.calcValue(),
              typeAttr = this.getAttribute('type');
            if (typeAttr.hasValue()) {
              var type = typeAttr.getString();
              newValue = ''.concat(type, '(').concat(newValue, ')');
            }
            prop.setValue(newValue), (updated = !0);
          }
          return updated;
        }
        getProgress() {
          var { document, values } = this,
            result = {
              progress:
                (this.duration - this.begin) / (this.maxDuration - this.begin),
            };
          if (values.hasValue()) {
            var p = result.progress * (values.getValue().length - 1),
              lb = Math.floor(p),
              ub = Math.ceil(p);
            (result.from = new Property(
              document,
              'from',
              parseFloat(values.getValue()[lb])
            )),
              (result.to = new Property(
                document,
                'to',
                parseFloat(values.getValue()[ub])
              )),
              (result.progress = (p - lb) / (ub - lb));
          } else (result.from = this.from), (result.to = this.to);
          return result;
        }
      }
      class AnimateColorElement extends AnimateElement {
        constructor() {
          super(...arguments), (this.type = 'animateColor');
        }
        calcValue() {
          var { progress, from, to } = this.getProgress(),
            colorFrom = new rgbcolor(from.getColor()),
            colorTo = new rgbcolor(to.getColor());
          if (colorFrom.ok && colorTo.ok) {
            var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress,
              g = colorFrom.g + (colorTo.g - colorFrom.g) * progress,
              b = colorFrom.b + (colorTo.b - colorFrom.b) * progress;
            return 'rgb('
              .concat(Math.floor(r), ', ')
              .concat(Math.floor(g), ', ')
              .concat(Math.floor(b), ')');
          }
          return this.getAttribute('from').getColor();
        }
      }
      class AnimateTransformElement extends AnimateElement {
        constructor() {
          super(...arguments), (this.type = 'animateTransform');
        }
        calcValue() {
          var { progress, from, to } = this.getProgress(),
            transformFrom = toNumbers(from.getString()),
            transformTo = toNumbers(to.getString()),
            newValue = transformFrom
              .map((from, i) => from + (transformTo[i] - from) * progress)
              .join(' ');
          return newValue;
        }
      }
      class FontElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'font'),
            (this.glyphs = {}),
            (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber());
          var { definitions } = document,
            { children } = this;
          for (var child of children)
            switch (child.type) {
              case 'font-face':
                this.fontFace = child;
                var fontFamilyStyle = child.getStyle('font-family');
                fontFamilyStyle.hasValue() &&
                  (definitions[fontFamilyStyle.getString()] = this);
                break;
              case 'missing-glyph':
                this.missingGlyph = child;
                break;
              case 'glyph':
                var glyph = child;
                glyph.arabicForm
                  ? ((this.isRTL = !0),
                    (this.isArabic = !0),
                    void 0 === this.glyphs[glyph.unicode] &&
                      (this.glyphs[glyph.unicode] = {}),
                    (this.glyphs[glyph.unicode][glyph.arabicForm] = glyph))
                  : (this.glyphs[glyph.unicode] = glyph);
            }
        }
        render() {}
      }
      class FontFaceElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'font-face'),
            (this.ascent = this.getAttribute('ascent').getNumber()),
            (this.descent = this.getAttribute('descent').getNumber()),
            (this.unitsPerEm = this.getAttribute('units-per-em').getNumber());
        }
      }
      class MissingGlyphElement extends PathElement {
        constructor() {
          super(...arguments),
            (this.type = 'missing-glyph'),
            (this.horizAdvX = 0);
        }
      }
      class TRefElement extends TextElement {
        constructor() {
          super(...arguments), (this.type = 'tref');
        }
        getText() {
          var element = this.getHrefAttribute().getDefinition();
          if (element) {
            var firstChild = element.children[0];
            if (firstChild) return firstChild.getText();
          }
          return '';
        }
      }
      class AElement extends TextElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes), (this.type = 'a');
          var { childNodes } = node,
            firstChild = childNodes[0],
            hasText =
              childNodes.length > 0 &&
              Array.from(childNodes).every((node) => 3 === node.nodeType);
          (this.hasText = hasText),
            (this.text = hasText ? this.getTextFromNode(firstChild) : '');
        }
        getText() {
          return this.text;
        }
        renderChildren(ctx) {
          if (this.hasText) {
            super.renderChildren(ctx);
            var { document, x, y } = this,
              { mouse } = document.screen,
              fontSize = new Property(
                document,
                'fontSize',
                Font.parse(document.ctx.font).fontSize
              );
            mouse.isWorking() &&
              mouse.checkBoundingBox(
                this,
                new BoundingBox(
                  x,
                  y - fontSize.getPixels('y'),
                  x + this.measureText(ctx),
                  y
                )
              );
          } else if (this.children.length > 0) {
            var g = new GElement(this.document, null);
            (g.children = this.children), (g.parent = this), g.render(ctx);
          }
        }
        onClick() {
          var { window } = this.document;
          window && window.open(this.getHrefAttribute().getString());
        }
        onMouseMove() {
          this.document.ctx.canvas.style.cursor = 'pointer';
        }
      }
      function ownKeys$2(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread$2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys$2(Object(source), !0).forEach(function (key) {
                (0, defineProperty.Z)(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys$2(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      class TextPathElement extends TextElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'textPath'),
            (this.textWidth = 0),
            (this.textHeight = 0),
            (this.pathLength = -1),
            (this.glyphInfo = null),
            (this.letterSpacingCache = []),
            (this.measuresCache = new Map([['', 0]]));
          var pathElement = this.getHrefAttribute().getDefinition();
          (this.text = this.getTextFromNode()),
            (this.dataArray = this.parsePathData(pathElement));
        }
        getText() {
          return this.text;
        }
        path(ctx) {
          var { dataArray } = this;
          ctx && ctx.beginPath(),
            dataArray.forEach((_ref) => {
              var { type, points } = _ref;
              switch (type) {
                case PathParser.LINE_TO:
                  ctx && ctx.lineTo(points[0], points[1]);
                  break;
                case PathParser.MOVE_TO:
                  ctx && ctx.moveTo(points[0], points[1]);
                  break;
                case PathParser.CURVE_TO:
                  ctx &&
                    ctx.bezierCurveTo(
                      points[0],
                      points[1],
                      points[2],
                      points[3],
                      points[4],
                      points[5]
                    );
                  break;
                case PathParser.QUAD_TO:
                  ctx &&
                    ctx.quadraticCurveTo(
                      points[0],
                      points[1],
                      points[2],
                      points[3]
                    );
                  break;
                case PathParser.ARC:
                  var [cx, cy, rx, ry, theta, dTheta, psi, fs] = points,
                    r = rx > ry ? rx : ry,
                    scaleX = rx > ry ? 1 : rx / ry,
                    scaleY = rx > ry ? ry / rx : 1;
                  ctx &&
                    (ctx.translate(cx, cy),
                    ctx.rotate(psi),
                    ctx.scale(scaleX, scaleY),
                    ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs)),
                    ctx.scale(1 / scaleX, 1 / scaleY),
                    ctx.rotate(-psi),
                    ctx.translate(-cx, -cy));
                  break;
                case PathParser.CLOSE_PATH:
                  ctx && ctx.closePath();
              }
            });
        }
        renderChildren(ctx) {
          this.setTextData(ctx), ctx.save();
          var textDecoration = this.parent
              .getStyle('text-decoration')
              .getString(),
            fontSize = this.getFontSize(),
            { glyphInfo } = this,
            fill = ctx.fillStyle;
          'underline' === textDecoration && ctx.beginPath(),
            glyphInfo.forEach((glyph, i) => {
              var { p0, p1, rotation, text: partialText } = glyph;
              ctx.save(),
                ctx.translate(p0.x, p0.y),
                ctx.rotate(rotation),
                ctx.fillStyle && ctx.fillText(partialText, 0, 0),
                ctx.strokeStyle && ctx.strokeText(partialText, 0, 0),
                ctx.restore(),
                'underline' === textDecoration &&
                  (0 === i && ctx.moveTo(p0.x, p0.y + fontSize / 8),
                  ctx.lineTo(p1.x, p1.y + fontSize / 5));
            }),
            'underline' === textDecoration &&
              ((ctx.lineWidth = fontSize / 20),
              (ctx.strokeStyle = fill),
              ctx.stroke(),
              ctx.closePath()),
            ctx.restore();
        }
        getLetterSpacingAt() {
          var idx =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return this.letterSpacingCache[idx] || 0;
        }
        findSegmentToFitChar(
          ctx,
          anchor,
          textFullWidth,
          fullPathWidth,
          spacesNumber,
          inputOffset,
          dy,
          c,
          charI
        ) {
          var offset = inputOffset,
            glyphWidth = this.measureText(ctx, c);
          ' ' === c &&
            'justify' === anchor &&
            textFullWidth < fullPathWidth &&
            (glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber),
            charI > -1 && (offset += this.getLetterSpacingAt(charI));
          var splineStep = this.textHeight / 20,
            p0 = this.getEquidistantPointOnPath(offset, splineStep, 0),
            p1 = this.getEquidistantPointOnPath(
              offset + glyphWidth,
              splineStep,
              0
            ),
            segment = { p0, p1 },
            rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
          if (dy) {
            var dyX = Math.cos(Math.PI / 2 + rotation) * dy,
              dyY = Math.cos(-rotation) * dy;
            (segment.p0 = _objectSpread$2(
              _objectSpread$2({}, p0),
              {},
              { x: p0.x + dyX, y: p0.y + dyY }
            )),
              (segment.p1 = _objectSpread$2(
                _objectSpread$2({}, p1),
                {},
                { x: p1.x + dyX, y: p1.y + dyY }
              ));
          }
          return { offset: (offset += glyphWidth), segment, rotation };
        }
        measureText(ctx, text) {
          var { measuresCache } = this,
            targetText = text || this.getText();
          if (measuresCache.has(targetText))
            return measuresCache.get(targetText);
          var measure = this.measureTargetText(ctx, targetText);
          return measuresCache.set(targetText, measure), measure;
        }
        setTextData(ctx) {
          if (!this.glyphInfo) {
            var renderText = this.getText(),
              chars = renderText.split(''),
              spacesNumber = renderText.split(' ').length - 1,
              dx = this.parent
                .getAttribute('dx')
                .split()
                .map((_) => _.getPixels('x')),
              dy = this.parent.getAttribute('dy').getPixels('y'),
              anchor = this.parent.getStyle('text-anchor').getString('start'),
              thisSpacing = this.getStyle('letter-spacing'),
              parentSpacing = this.parent.getStyle('letter-spacing'),
              letterSpacing = 0;
            thisSpacing.hasValue() && 'inherit' !== thisSpacing.getValue()
              ? thisSpacing.hasValue() &&
                'initial' !== thisSpacing.getValue() &&
                'unset' !== thisSpacing.getValue() &&
                (letterSpacing = thisSpacing.getPixels())
              : (letterSpacing = parentSpacing.getPixels());
            var letterSpacingCache = [],
              textLen = renderText.length;
            this.letterSpacingCache = letterSpacingCache;
            for (var i = 0; i < textLen; i++)
              letterSpacingCache.push(void 0 !== dx[i] ? dx[i] : letterSpacing);
            var dxSum = letterSpacingCache.reduce(
                (acc, cur, i) => (0 === i ? 0 : acc + cur || 0),
                0
              ),
              textWidth = this.measureText(ctx),
              textFullWidth = Math.max(textWidth + dxSum, 0);
            (this.textWidth = textWidth),
              (this.textHeight = this.getFontSize()),
              (this.glyphInfo = []);
            var fullPathWidth = this.getPathLength(),
              startOffset =
                this.getStyle('startOffset').getNumber(0) * fullPathWidth,
              offset = 0;
            ('middle' !== anchor && 'center' !== anchor) ||
              (offset = -textFullWidth / 2),
              ('end' !== anchor && 'right' !== anchor) ||
                (offset = -textFullWidth),
              (offset += startOffset),
              chars.forEach((char, i) => {
                var {
                  offset: nextOffset,
                  segment,
                  rotation,
                } = this.findSegmentToFitChar(
                  ctx,
                  anchor,
                  textFullWidth,
                  fullPathWidth,
                  spacesNumber,
                  offset,
                  dy,
                  char,
                  i
                );
                (offset = nextOffset),
                  segment.p0 &&
                    segment.p1 &&
                    this.glyphInfo.push({
                      text: chars[i],
                      p0: segment.p0,
                      p1: segment.p1,
                      rotation,
                    });
              });
          }
        }
        parsePathData(path) {
          if (((this.pathLength = -1), !path)) return [];
          var pathCommands = [],
            { pathParser } = path;
          for (pathParser.reset(); !pathParser.isEnd(); ) {
            var { current } = pathParser,
              startX = current ? current.x : 0,
              startY = current ? current.y : 0,
              command = pathParser.next(),
              nextCommandType = command.type,
              points = [];
            switch (command.type) {
              case PathParser.MOVE_TO:
                this.pathM(pathParser, points);
                break;
              case PathParser.LINE_TO:
                nextCommandType = this.pathL(pathParser, points);
                break;
              case PathParser.HORIZ_LINE_TO:
                nextCommandType = this.pathH(pathParser, points);
                break;
              case PathParser.VERT_LINE_TO:
                nextCommandType = this.pathV(pathParser, points);
                break;
              case PathParser.CURVE_TO:
                this.pathC(pathParser, points);
                break;
              case PathParser.SMOOTH_CURVE_TO:
                nextCommandType = this.pathS(pathParser, points);
                break;
              case PathParser.QUAD_TO:
                this.pathQ(pathParser, points);
                break;
              case PathParser.SMOOTH_QUAD_TO:
                nextCommandType = this.pathT(pathParser, points);
                break;
              case PathParser.ARC:
                points = this.pathA(pathParser);
                break;
              case PathParser.CLOSE_PATH:
                PathElement.pathZ(pathParser);
            }
            command.type !== PathParser.CLOSE_PATH
              ? pathCommands.push({
                  type: nextCommandType,
                  points,
                  start: { x: startX, y: startY },
                  pathLength: this.calcLength(
                    startX,
                    startY,
                    nextCommandType,
                    points
                  ),
                })
              : pathCommands.push({
                  type: PathParser.CLOSE_PATH,
                  points: [],
                  pathLength: 0,
                });
          }
          return pathCommands;
        }
        pathM(pathParser, points) {
          var { x, y } = PathElement.pathM(pathParser).point;
          points.push(x, y);
        }
        pathL(pathParser, points) {
          var { x, y } = PathElement.pathL(pathParser).point;
          return points.push(x, y), PathParser.LINE_TO;
        }
        pathH(pathParser, points) {
          var { x, y } = PathElement.pathH(pathParser).point;
          return points.push(x, y), PathParser.LINE_TO;
        }
        pathV(pathParser, points) {
          var { x, y } = PathElement.pathV(pathParser).point;
          return points.push(x, y), PathParser.LINE_TO;
        }
        pathC(pathParser, points) {
          var { point, controlPoint, currentPoint } =
            PathElement.pathC(pathParser);
          points.push(
            point.x,
            point.y,
            controlPoint.x,
            controlPoint.y,
            currentPoint.x,
            currentPoint.y
          );
        }
        pathS(pathParser, points) {
          var { point, controlPoint, currentPoint } =
            PathElement.pathS(pathParser);
          return (
            points.push(
              point.x,
              point.y,
              controlPoint.x,
              controlPoint.y,
              currentPoint.x,
              currentPoint.y
            ),
            PathParser.CURVE_TO
          );
        }
        pathQ(pathParser, points) {
          var { controlPoint, currentPoint } = PathElement.pathQ(pathParser);
          points.push(
            controlPoint.x,
            controlPoint.y,
            currentPoint.x,
            currentPoint.y
          );
        }
        pathT(pathParser, points) {
          var { controlPoint, currentPoint } = PathElement.pathT(pathParser);
          return (
            points.push(
              controlPoint.x,
              controlPoint.y,
              currentPoint.x,
              currentPoint.y
            ),
            PathParser.QUAD_TO
          );
        }
        pathA(pathParser) {
          var { rX, rY, sweepFlag, xAxisRotation, centp, a1, ad } =
            PathElement.pathA(pathParser);
          return (
            0 === sweepFlag && ad > 0 && (ad -= 2 * Math.PI),
            1 === sweepFlag && ad < 0 && (ad += 2 * Math.PI),
            [centp.x, centp.y, rX, rY, a1, ad, xAxisRotation, sweepFlag]
          );
        }
        calcLength(x, y, commandType, points) {
          var len = 0,
            p1 = null,
            p2 = null,
            t = 0;
          switch (commandType) {
            case PathParser.LINE_TO:
              return this.getLineLength(x, y, points[0], points[1]);
            case PathParser.CURVE_TO:
              for (
                len = 0,
                  p1 = this.getPointOnCubicBezier(
                    0,
                    x,
                    y,
                    points[0],
                    points[1],
                    points[2],
                    points[3],
                    points[4],
                    points[5]
                  ),
                  t = 0.01;
                t <= 1;
                t += 0.01
              )
                (p2 = this.getPointOnCubicBezier(
                  t,
                  x,
                  y,
                  points[0],
                  points[1],
                  points[2],
                  points[3],
                  points[4],
                  points[5]
                )),
                  (len += this.getLineLength(p1.x, p1.y, p2.x, p2.y)),
                  (p1 = p2);
              return len;
            case PathParser.QUAD_TO:
              for (
                len = 0,
                  p1 = this.getPointOnQuadraticBezier(
                    0,
                    x,
                    y,
                    points[0],
                    points[1],
                    points[2],
                    points[3]
                  ),
                  t = 0.01;
                t <= 1;
                t += 0.01
              )
                (p2 = this.getPointOnQuadraticBezier(
                  t,
                  x,
                  y,
                  points[0],
                  points[1],
                  points[2],
                  points[3]
                )),
                  (len += this.getLineLength(p1.x, p1.y, p2.x, p2.y)),
                  (p1 = p2);
              return len;
            case PathParser.ARC:
              len = 0;
              var start = points[4],
                dTheta = points[5],
                end = points[4] + dTheta,
                inc = Math.PI / 180;
              if (
                (Math.abs(start - end) < inc && (inc = Math.abs(start - end)),
                (p1 = this.getPointOnEllipticalArc(
                  points[0],
                  points[1],
                  points[2],
                  points[3],
                  start,
                  0
                )),
                dTheta < 0)
              )
                for (t = start - inc; t > end; t -= inc)
                  (p2 = this.getPointOnEllipticalArc(
                    points[0],
                    points[1],
                    points[2],
                    points[3],
                    t,
                    0
                  )),
                    (len += this.getLineLength(p1.x, p1.y, p2.x, p2.y)),
                    (p1 = p2);
              else
                for (t = start + inc; t < end; t += inc)
                  (p2 = this.getPointOnEllipticalArc(
                    points[0],
                    points[1],
                    points[2],
                    points[3],
                    t,
                    0
                  )),
                    (len += this.getLineLength(p1.x, p1.y, p2.x, p2.y)),
                    (p1 = p2);
              return (
                (p2 = this.getPointOnEllipticalArc(
                  points[0],
                  points[1],
                  points[2],
                  points[3],
                  end,
                  0
                )),
                (len += this.getLineLength(p1.x, p1.y, p2.x, p2.y))
              );
          }
          return 0;
        }
        getPointOnLine(dist, p1x, p1y, p2x, p2y) {
          var fromX =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : p1x,
            fromY =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : p1y,
            m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO),
            run = Math.sqrt((dist * dist) / (1 + m * m));
          p2x < p1x && (run *= -1);
          var rise = m * run,
            pt = null;
          if (p2x === p1x) pt = { x: fromX, y: fromY + rise };
          else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m)
            pt = { x: fromX + run, y: fromY + rise };
          else {
            var ix,
              iy,
              len = this.getLineLength(p1x, p1y, p2x, p2y);
            if (len < PSEUDO_ZERO) return null;
            var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
            (ix = p1x + (u /= len * len) * (p2x - p1x)),
              (iy = p1y + u * (p2y - p1y));
            var pRise = this.getLineLength(fromX, fromY, ix, iy),
              pRun = Math.sqrt(dist * dist - pRise * pRise);
            (run = Math.sqrt((pRun * pRun) / (1 + m * m))),
              p2x < p1x && (run *= -1),
              (pt = { x: ix + run, y: iy + (rise = m * run) });
          }
          return pt;
        }
        getPointOnPath(distance) {
          var fullLen = this.getPathLength(),
            cumulativePathLength = 0,
            p = null;
          if (distance < -5e-5 || distance - 5e-5 > fullLen) return null;
          var { dataArray } = this;
          for (var command of dataArray) {
            if (
              !command ||
              !(
                command.pathLength < 5e-5 ||
                cumulativePathLength + command.pathLength + 5e-5 < distance
              )
            ) {
              var delta = distance - cumulativePathLength,
                currentT = 0;
              switch (command.type) {
                case PathParser.LINE_TO:
                  p = this.getPointOnLine(
                    delta,
                    command.start.x,
                    command.start.y,
                    command.points[0],
                    command.points[1],
                    command.start.x,
                    command.start.y
                  );
                  break;
                case PathParser.ARC:
                  var start = command.points[4],
                    dTheta = command.points[5],
                    end = command.points[4] + dTheta;
                  if (
                    ((currentT = start + (delta / command.pathLength) * dTheta),
                    (dTheta < 0 && currentT < end) ||
                      (dTheta >= 0 && currentT > end))
                  )
                    break;
                  p = this.getPointOnEllipticalArc(
                    command.points[0],
                    command.points[1],
                    command.points[2],
                    command.points[3],
                    currentT,
                    command.points[6]
                  );
                  break;
                case PathParser.CURVE_TO:
                  (currentT = delta / command.pathLength) > 1 && (currentT = 1),
                    (p = this.getPointOnCubicBezier(
                      currentT,
                      command.start.x,
                      command.start.y,
                      command.points[0],
                      command.points[1],
                      command.points[2],
                      command.points[3],
                      command.points[4],
                      command.points[5]
                    ));
                  break;
                case PathParser.QUAD_TO:
                  (currentT = delta / command.pathLength) > 1 && (currentT = 1),
                    (p = this.getPointOnQuadraticBezier(
                      currentT,
                      command.start.x,
                      command.start.y,
                      command.points[0],
                      command.points[1],
                      command.points[2],
                      command.points[3]
                    ));
              }
              if (p) return p;
              break;
            }
            cumulativePathLength += command.pathLength;
          }
          return null;
        }
        getLineLength(x1, y1, x2, y2) {
          return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        }
        getPathLength() {
          return (
            -1 === this.pathLength &&
              (this.pathLength = this.dataArray.reduce(
                (length, command) =>
                  command.pathLength > 0 ? length + command.pathLength : length,
                0
              )),
            this.pathLength
          );
        }
        getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
          return {
            x:
              p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct),
            y:
              p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct),
          };
        }
        getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
          return {
            x: p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct),
            y: p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct),
          };
        }
        getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
          var cosPsi = Math.cos(psi),
            sinPsi = Math.sin(psi),
            pt_x = rx * Math.cos(theta),
            pt_y = ry * Math.sin(theta);
          return {
            x: cx + (pt_x * cosPsi - pt_y * sinPsi),
            y: cy + (pt_x * sinPsi + pt_y * cosPsi),
          };
        }
        buildEquidistantCache(inputStep, inputPrecision) {
          var fullLen = this.getPathLength(),
            precision = inputPrecision || 0.25,
            step = inputStep || fullLen / 100;
          if (
            !this.equidistantCache ||
            this.equidistantCache.step !== step ||
            this.equidistantCache.precision !== precision
          ) {
            this.equidistantCache = { step, precision, points: [] };
            for (var s = 0, l = 0; l <= fullLen; l += precision) {
              var p0 = this.getPointOnPath(l),
                p1 = this.getPointOnPath(l + precision);
              p0 &&
                p1 &&
                (s += this.getLineLength(p0.x, p0.y, p1.x, p1.y)) >= step &&
                (this.equidistantCache.points.push({
                  x: p0.x,
                  y: p0.y,
                  distance: l,
                }),
                (s -= step));
            }
          }
        }
        getEquidistantPointOnPath(targetDistance, step, precision) {
          if (
            (this.buildEquidistantCache(step, precision),
            targetDistance < 0 || targetDistance - this.getPathLength() > 5e-5)
          )
            return null;
          var idx = Math.round(
            (targetDistance / this.getPathLength()) *
              (this.equidistantCache.points.length - 1)
          );
          return this.equidistantCache.points[idx] || null;
        }
      }
      var dataUriRegex =
        /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
      class ImageElement extends RenderedElement {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'image'),
            (this.loaded = !1);
          var href = this.getHrefAttribute().getString();
          if (href) {
            var isSvg =
              href.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(href);
            document.images.push(this),
              isSvg ? this.loadSvg(href) : this.loadImage(href),
              (this.isSvg = isSvg);
          }
        }
        loadImage(href) {
          var _this = this;
          return (0, asyncToGenerator.Z)(function* () {
            try {
              var image = yield _this.document.createImage(href);
              _this.image = image;
            } catch (err) {
              console.error(
                'Error while loading image "'.concat(href, '":'),
                err
              );
            }
            _this.loaded = !0;
          })();
        }
        loadSvg(href) {
          var _this2 = this;
          return (0, asyncToGenerator.Z)(function* () {
            var match = dataUriRegex.exec(href);
            if (match) {
              var data = match[5];
              'base64' === match[4]
                ? (_this2.image = atob(data))
                : (_this2.image = decodeURIComponent(data));
            } else
              try {
                var response = yield _this2.document.fetch(href),
                  svg = yield response.text();
                _this2.image = svg;
              } catch (err) {
                console.error(
                  'Error while loading image "'.concat(href, '":'),
                  err
                );
              }
            _this2.loaded = !0;
          })();
        }
        renderChildren(ctx) {
          var { document, image, loaded } = this,
            x = this.getAttribute('x').getPixels('x'),
            y = this.getAttribute('y').getPixels('y'),
            width = this.getStyle('width').getPixels('x'),
            height = this.getStyle('height').getPixels('y');
          if (loaded && image && width && height) {
            if ((ctx.save(), ctx.translate(x, y), this.isSvg)) {
              var subDocument = document.canvg.forkString(ctx, this.image, {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                ignoreDimensions: !0,
                ignoreClear: !0,
                offsetX: 0,
                offsetY: 0,
                scaleWidth: width,
                scaleHeight: height,
              });
              (subDocument.document.documentElement.parent = this),
                subDocument.render();
            } else {
              var _image = this.image;
              document.setViewBox({
                ctx,
                aspectRatio: this.getAttribute(
                  'preserveAspectRatio'
                ).getString(),
                width,
                desiredWidth: _image.width,
                height,
                desiredHeight: _image.height,
              }),
                this.loaded &&
                  (void 0 === _image.complete || _image.complete) &&
                  ctx.drawImage(_image, 0, 0);
            }
            ctx.restore();
          }
        }
        getBoundingBox() {
          var x = this.getAttribute('x').getPixels('x'),
            y = this.getAttribute('y').getPixels('y'),
            width = this.getStyle('width').getPixels('x'),
            height = this.getStyle('height').getPixels('y');
          return new BoundingBox(x, y, x + width, y + height);
        }
      }
      class SymbolElement extends RenderedElement {
        constructor() {
          super(...arguments), (this.type = 'symbol');
        }
        render(_) {}
      }
      class SVGFontLoader {
        constructor(document) {
          (this.document = document),
            (this.loaded = !1),
            document.fonts.push(this);
        }
        load(fontFamily, url) {
          var _this = this;
          return (0, asyncToGenerator.Z)(function* () {
            try {
              var { document } = _this,
                fonts = (yield document.canvg.parser.load(
                  url
                )).getElementsByTagName('font');
              Array.from(fonts).forEach((fontNode) => {
                var font = document.createElement(fontNode);
                document.definitions[fontFamily] = font;
              });
            } catch (err) {
              console.error(
                'Error while loading font "'.concat(url, '":'),
                err
              );
            }
            _this.loaded = !0;
          })();
        }
      }
      class StyleElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes), (this.type = 'style');
          var css = compressSpaces(
            Array.from(node.childNodes)
              .map((_) => _.textContent)
              .join('')
              .replace(
                /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
                ''
              )
              .replace(/@import.*;/g, '')
          );
          css.split('}').forEach((_) => {
            var def = _.trim();
            if (def) {
              var cssParts = def.split('{'),
                cssClasses = cssParts[0].split(','),
                cssProps = cssParts[1].split(';');
              cssClasses.forEach((_) => {
                var cssClass = _.trim();
                if (cssClass) {
                  var props = document.styles[cssClass] || {};
                  if (
                    (cssProps.forEach((cssProp) => {
                      var prop = cssProp.indexOf(':'),
                        name = cssProp.substr(0, prop).trim(),
                        value = cssProp
                          .substr(prop + 1, cssProp.length - prop)
                          .trim();
                      name &&
                        value &&
                        (props[name] = new Property(document, name, value));
                    }),
                    (document.styles[cssClass] = props),
                    (document.stylesSpecificity[cssClass] =
                      getSelectorSpecificity(cssClass)),
                    '@font-face' === cssClass)
                  ) {
                    var fontFamily = props['font-family']
                      .getString()
                      .replace(/"|'/g, '');
                    props.src
                      .getString()
                      .split(',')
                      .forEach((src) => {
                        if (src.indexOf('format("svg")') > 0) {
                          var url = parseExternalUrl(src);
                          url &&
                            new SVGFontLoader(document).load(fontFamily, url);
                        }
                      });
                  }
                }
              });
            }
          });
        }
      }
      StyleElement.parseExternalUrl = parseExternalUrl;
      class UseElement extends RenderedElement {
        constructor() {
          super(...arguments), (this.type = 'use');
        }
        setContext(ctx) {
          super.setContext(ctx);
          var xAttr = this.getAttribute('x'),
            yAttr = this.getAttribute('y');
          xAttr.hasValue() && ctx.translate(xAttr.getPixels('x'), 0),
            yAttr.hasValue() && ctx.translate(0, yAttr.getPixels('y'));
        }
        path(ctx) {
          var { element } = this;
          element && element.path(ctx);
        }
        renderChildren(ctx) {
          var { document, element } = this;
          if (element) {
            var tempSvg = element;
            if (
              ('symbol' === element.type &&
                (((tempSvg = new SVGElement(
                  document,
                  null
                )).attributes.viewBox = new Property(
                  document,
                  'viewBox',
                  element.getAttribute('viewBox').getString()
                )),
                (tempSvg.attributes.preserveAspectRatio = new Property(
                  document,
                  'preserveAspectRatio',
                  element.getAttribute('preserveAspectRatio').getString()
                )),
                (tempSvg.attributes.overflow = new Property(
                  document,
                  'overflow',
                  element.getAttribute('overflow').getString()
                )),
                (tempSvg.children = element.children),
                (element.styles.opacity = new Property(
                  document,
                  'opacity',
                  this.calculateOpacity()
                ))),
              'svg' === tempSvg.type)
            ) {
              var widthStyle = this.getStyle('width', !1, !0),
                heightStyle = this.getStyle('height', !1, !0);
              widthStyle.hasValue() &&
                (tempSvg.attributes.width = new Property(
                  document,
                  'width',
                  widthStyle.getString()
                )),
                heightStyle.hasValue() &&
                  (tempSvg.attributes.height = new Property(
                    document,
                    'height',
                    heightStyle.getString()
                  ));
            }
            var oldParent = tempSvg.parent;
            (tempSvg.parent = this),
              tempSvg.render(ctx),
              (tempSvg.parent = oldParent);
          }
        }
        getBoundingBox(ctx) {
          var { element } = this;
          return element ? element.getBoundingBox(ctx) : null;
        }
        elementTransform() {
          var { document, element } = this;
          return Transform.fromElement(document, element);
        }
        get element() {
          return (
            this.cachedElement ||
              (this.cachedElement = this.getHrefAttribute().getDefinition()),
            this.cachedElement
          );
        }
      }
      function imGet(img, x, y, width, _height, rgba) {
        return img[y * width * 4 + 4 * x + rgba];
      }
      function imSet(img, x, y, width, _height, rgba, val) {
        img[y * width * 4 + 4 * x + rgba] = val;
      }
      function index_es_m(matrix, i, v) {
        return matrix[i] * v;
      }
      function index_es_c(a, m1, m2, m3) {
        return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
      }
      class FeColorMatrixElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'feColorMatrix');
          var matrix = toNumbers(this.getAttribute('values').getString());
          switch (this.getAttribute('type').getString('matrix')) {
            case 'saturate':
              var s = matrix[0];
              matrix = [
                0.213 + 0.787 * s,
                0.715 - 0.715 * s,
                0.072 - 0.072 * s,
                0,
                0,
                0.213 - 0.213 * s,
                0.715 + 0.285 * s,
                0.072 - 0.072 * s,
                0,
                0,
                0.213 - 0.213 * s,
                0.715 - 0.715 * s,
                0.072 + 0.928 * s,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            case 'hueRotate':
              var a = (matrix[0] * Math.PI) / 180;
              matrix = [
                index_es_c(a, 0.213, 0.787, -0.213),
                index_es_c(a, 0.715, -0.715, -0.715),
                index_es_c(a, 0.072, -0.072, 0.928),
                0,
                0,
                index_es_c(a, 0.213, -0.213, 0.143),
                index_es_c(a, 0.715, 0.285, 0.14),
                index_es_c(a, 0.072, -0.072, -0.283),
                0,
                0,
                index_es_c(a, 0.213, -0.213, -0.787),
                index_es_c(a, 0.715, -0.715, 0.715),
                index_es_c(a, 0.072, 0.928, 0.072),
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            case 'luminanceToAlpha':
              matrix = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154,
                0.0721, 0, 0, 0, 0, 0, 0, 1,
              ];
          }
          (this.matrix = matrix),
            (this.includeOpacity =
              this.getAttribute('includeOpacity').hasValue());
        }
        apply(ctx, _x, _y, width, height) {
          for (
            var { includeOpacity, matrix } = this,
              srcData = ctx.getImageData(0, 0, width, height),
              y = 0;
            y < height;
            y++
          )
            for (var x = 0; x < width; x++) {
              var r = imGet(srcData.data, x, y, width, 0, 0),
                g = imGet(srcData.data, x, y, width, 0, 1),
                b = imGet(srcData.data, x, y, width, 0, 2),
                a = imGet(srcData.data, x, y, width, 0, 3),
                nr =
                  index_es_m(matrix, 0, r) +
                  index_es_m(matrix, 1, g) +
                  index_es_m(matrix, 2, b) +
                  index_es_m(matrix, 3, a) +
                  index_es_m(matrix, 4, 1),
                ng =
                  index_es_m(matrix, 5, r) +
                  index_es_m(matrix, 6, g) +
                  index_es_m(matrix, 7, b) +
                  index_es_m(matrix, 8, a) +
                  index_es_m(matrix, 9, 1),
                nb =
                  index_es_m(matrix, 10, r) +
                  index_es_m(matrix, 11, g) +
                  index_es_m(matrix, 12, b) +
                  index_es_m(matrix, 13, a) +
                  index_es_m(matrix, 14, 1),
                na =
                  index_es_m(matrix, 15, r) +
                  index_es_m(matrix, 16, g) +
                  index_es_m(matrix, 17, b) +
                  index_es_m(matrix, 18, a) +
                  index_es_m(matrix, 19, 1);
              includeOpacity && ((nr = 0), (ng = 0), (nb = 0), (na *= a / 255)),
                imSet(srcData.data, x, y, width, 0, 0, nr),
                imSet(srcData.data, x, y, width, 0, 1, ng),
                imSet(srcData.data, x, y, width, 0, 2, nb),
                imSet(srcData.data, x, y, width, 0, 3, na);
            }
          ctx.clearRect(0, 0, width, height), ctx.putImageData(srcData, 0, 0);
        }
      }
      class MaskElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'mask');
        }
        apply(ctx, element) {
          var { document } = this,
            x = this.getAttribute('x').getPixels('x'),
            y = this.getAttribute('y').getPixels('y'),
            width = this.getStyle('width').getPixels('x'),
            height = this.getStyle('height').getPixels('y');
          if (!width && !height) {
            var boundingBox = new BoundingBox();
            this.children.forEach((child) => {
              boundingBox.addBoundingBox(child.getBoundingBox(ctx));
            }),
              (x = Math.floor(boundingBox.x1)),
              (y = Math.floor(boundingBox.y1)),
              (width = Math.floor(boundingBox.width)),
              (height = Math.floor(boundingBox.height));
          }
          var ignoredStyles = this.removeStyles(
              element,
              MaskElement.ignoreStyles
            ),
            maskCanvas = document.createCanvas(x + width, y + height),
            maskCtx = maskCanvas.getContext('2d');
          document.screen.setDefaults(maskCtx),
            this.renderChildren(maskCtx),
            new FeColorMatrixElement(document, {
              nodeType: 1,
              childNodes: [],
              attributes: [
                { nodeName: 'type', value: 'luminanceToAlpha' },
                { nodeName: 'includeOpacity', value: 'true' },
              ],
            }).apply(maskCtx, 0, 0, x + width, y + height);
          var tmpCanvas = document.createCanvas(x + width, y + height),
            tmpCtx = tmpCanvas.getContext('2d');
          document.screen.setDefaults(tmpCtx),
            element.render(tmpCtx),
            (tmpCtx.globalCompositeOperation = 'destination-in'),
            (tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, 'no-repeat')),
            tmpCtx.fillRect(0, 0, x + width, y + height),
            (ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, 'no-repeat')),
            ctx.fillRect(0, 0, x + width, y + height),
            this.restoreStyles(element, ignoredStyles);
        }
        render(_) {}
      }
      MaskElement.ignoreStyles = ['mask', 'transform', 'clip-path'];
      var noop = () => {};
      class ClipPathElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'clipPath');
        }
        apply(ctx) {
          var { document } = this,
            contextProto = Reflect.getPrototypeOf(ctx),
            { beginPath, closePath } = ctx;
          contextProto &&
            ((contextProto.beginPath = noop), (contextProto.closePath = noop)),
            Reflect.apply(beginPath, ctx, []),
            this.children.forEach((child) => {
              if (void 0 !== child.path) {
                var transform =
                  void 0 !== child.elementTransform
                    ? child.elementTransform()
                    : null;
                transform ||
                  (transform = Transform.fromElement(document, child)),
                  transform && transform.apply(ctx),
                  child.path(ctx),
                  contextProto && (contextProto.closePath = closePath),
                  transform && transform.unapply(ctx);
              }
            }),
            Reflect.apply(closePath, ctx, []),
            ctx.clip(),
            contextProto &&
              ((contextProto.beginPath = beginPath),
              (contextProto.closePath = closePath));
        }
        render(_) {}
      }
      class FilterElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'filter');
        }
        apply(ctx, element) {
          var { document, children } = this,
            boundingBox = element.getBoundingBox(ctx);
          if (boundingBox) {
            var px = 0,
              py = 0;
            children.forEach((child) => {
              var efd = child.extraFilterDistance || 0;
              (px = Math.max(px, efd)), (py = Math.max(py, efd));
            });
            var width = Math.floor(boundingBox.width),
              height = Math.floor(boundingBox.height),
              tmpCanvasWidth = width + 2 * px,
              tmpCanvasHeight = height + 2 * py;
            if (!(tmpCanvasWidth < 1 || tmpCanvasHeight < 1)) {
              var x = Math.floor(boundingBox.x),
                y = Math.floor(boundingBox.y),
                ignoredStyles = this.removeStyles(
                  element,
                  FilterElement.ignoreStyles
                ),
                tmpCanvas = document.createCanvas(
                  tmpCanvasWidth,
                  tmpCanvasHeight
                ),
                tmpCtx = tmpCanvas.getContext('2d');
              document.screen.setDefaults(tmpCtx),
                tmpCtx.translate(-x + px, -y + py),
                element.render(tmpCtx),
                children.forEach((child) => {
                  'function' == typeof child.apply &&
                    child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
                }),
                ctx.drawImage(
                  tmpCanvas,
                  0,
                  0,
                  tmpCanvasWidth,
                  tmpCanvasHeight,
                  x - px,
                  y - py,
                  tmpCanvasWidth,
                  tmpCanvasHeight
                ),
                this.restoreStyles(element, ignoredStyles);
            }
          }
        }
        render(_) {}
      }
      FilterElement.ignoreStyles = ['filter', 'transform', 'clip-path'];
      class FeDropShadowElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'feDropShadow'),
            this.addStylesFromStyleDefinition();
        }
        apply(_, _x, _y, _width, _height) {}
      }
      class FeMorphologyElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'feMorphology');
        }
        apply(_, _x, _y, _width, _height) {}
      }
      class FeCompositeElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'feComposite');
        }
        apply(_, _x, _y, _width, _height) {}
      }
      class FeGaussianBlurElement extends Element {
        constructor(document, node, captureTextNodes) {
          super(document, node, captureTextNodes),
            (this.type = 'feGaussianBlur'),
            (this.blurRadius = Math.floor(
              this.getAttribute('stdDeviation').getNumber()
            )),
            (this.extraFilterDistance = this.blurRadius);
        }
        apply(ctx, x, y, width, height) {
          var { document, blurRadius } = this,
            body = document.window ? document.window.document.body : null,
            canvas = ctx.canvas;
          (canvas.id = document.getUniqueId()),
            body && ((canvas.style.display = 'none'), body.appendChild(canvas)),
            processCanvasRGBA(canvas, x, y, width, height, blurRadius),
            body && body.removeChild(canvas);
        }
      }
      class TitleElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'title');
        }
      }
      class DescElement extends Element {
        constructor() {
          super(...arguments), (this.type = 'desc');
        }
      }
      var index_es_elements = {
        svg: SVGElement,
        rect: RectElement,
        circle: CircleElement,
        ellipse: EllipseElement,
        line: LineElement,
        polyline: PolylineElement,
        polygon: PolygonElement,
        path: PathElement,
        pattern: PatternElement,
        marker: MarkerElement,
        defs: DefsElement,
        linearGradient: LinearGradientElement,
        radialGradient: RadialGradientElement,
        stop: StopElement,
        animate: AnimateElement,
        animateColor: AnimateColorElement,
        animateTransform: AnimateTransformElement,
        font: FontElement,
        'font-face': FontFaceElement,
        'missing-glyph': MissingGlyphElement,
        glyph: GlyphElement,
        text: TextElement,
        tspan: TSpanElement,
        tref: TRefElement,
        a: AElement,
        textPath: TextPathElement,
        image: ImageElement,
        g: GElement,
        symbol: SymbolElement,
        style: StyleElement,
        use: UseElement,
        mask: MaskElement,
        clipPath: ClipPathElement,
        filter: FilterElement,
        feDropShadow: FeDropShadowElement,
        feMorphology: FeMorphologyElement,
        feComposite: FeCompositeElement,
        feColorMatrix: FeColorMatrixElement,
        feGaussianBlur: FeGaussianBlurElement,
        title: TitleElement,
        desc: DescElement,
      };
      function ownKeys$1(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _createImage() {
        return (
          (_createImage = (0, asyncToGenerator.Z)(function* (src) {
            var anonymousCrossOrigin =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              image = document.createElement('img');
            return (
              anonymousCrossOrigin && (image.crossOrigin = 'Anonymous'),
              new Promise((resolve, reject) => {
                (image.onload = () => {
                  resolve(image);
                }),
                  (image.onerror = (
                    _event,
                    _source,
                    _lineno,
                    _colno,
                    error
                  ) => {
                    reject(error);
                  }),
                  (image.src = src);
              })
            );
          })),
          _createImage.apply(this, arguments)
        );
      }
      class Document {
        constructor(canvg) {
          var {
            rootEmSize = 12,
            emSize = 12,
            createCanvas = Document.createCanvas,
            createImage = Document.createImage,
            anonymousCrossOrigin,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          (this.canvg = canvg),
            (this.definitions = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.images = []),
            (this.fonts = []),
            (this.emSizeStack = []),
            (this.uniqueId = 0),
            (this.screen = canvg.screen),
            (this.rootEmSize = rootEmSize),
            (this.emSize = emSize),
            (this.createCanvas = createCanvas),
            (this.createImage = this.bindCreateImage(
              createImage,
              anonymousCrossOrigin
            )),
            this.screen.wait(this.isImagesLoaded.bind(this)),
            this.screen.wait(this.isFontsLoaded.bind(this));
        }
        bindCreateImage(createImage, anonymousCrossOrigin) {
          return 'boolean' == typeof anonymousCrossOrigin
            ? (source, forceAnonymousCrossOrigin) =>
                createImage(
                  source,
                  'boolean' == typeof forceAnonymousCrossOrigin
                    ? forceAnonymousCrossOrigin
                    : anonymousCrossOrigin
                )
            : createImage;
        }
        get window() {
          return this.screen.window;
        }
        get fetch() {
          return this.screen.fetch;
        }
        get ctx() {
          return this.screen.ctx;
        }
        get emSize() {
          var { emSizeStack } = this;
          return emSizeStack[emSizeStack.length - 1];
        }
        set emSize(value) {
          var { emSizeStack } = this;
          emSizeStack.push(value);
        }
        popEmSize() {
          var { emSizeStack } = this;
          emSizeStack.pop();
        }
        getUniqueId() {
          return 'canvg'.concat(++this.uniqueId);
        }
        isImagesLoaded() {
          return this.images.every((_) => _.loaded);
        }
        isFontsLoaded() {
          return this.fonts.every((_) => _.loaded);
        }
        createDocumentElement(document) {
          var documentElement = this.createElement(document.documentElement);
          return (
            (documentElement.root = !0),
            documentElement.addStylesFromStyleDefinition(),
            (this.documentElement = documentElement),
            documentElement
          );
        }
        createElement(node) {
          var elementType = node.nodeName.replace(/^[^:]+:/, ''),
            ElementType = Document.elementTypes[elementType];
          return void 0 !== ElementType
            ? new ElementType(this, node)
            : new UnknownElement(this, node);
        }
        createTextNode(node) {
          return new TextNode(this, node);
        }
        setViewBox(config) {
          this.screen.setViewBox(
            (function _objectSpread$1(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? ownKeys$1(Object(source), !0).forEach(function (key) {
                      (0, defineProperty.Z)(target, key, source[key]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      target,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : ownKeys$1(Object(source)).forEach(function (key) {
                      Object.defineProperty(
                        target,
                        key,
                        Object.getOwnPropertyDescriptor(source, key)
                      );
                    });
              }
              return target;
            })({ document: this }, config)
          );
        }
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                (0, defineProperty.Z)(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      (Document.createCanvas = function createCanvas(width, height) {
        var canvas = document.createElement('canvas');
        return (canvas.width = width), (canvas.height = height), canvas;
      }),
        (Document.createImage = function createImage(_x) {
          return _createImage.apply(this, arguments);
        }),
        (Document.elementTypes = index_es_elements);
      class Canvg {
        constructor(ctx, svg) {
          var options =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          (this.parser = new Parser(options)),
            (this.screen = new Screen(ctx, options)),
            (this.options = options);
          var document = new Document(this, options),
            documentElement = document.createDocumentElement(svg);
          (this.document = document), (this.documentElement = documentElement);
        }
        static from(ctx, svg) {
          var _arguments = arguments;
          return (0, asyncToGenerator.Z)(function* () {
            var options =
                _arguments.length > 2 && void 0 !== _arguments[2]
                  ? _arguments[2]
                  : {},
              parser = new Parser(options),
              svgDocument = yield parser.parse(svg);
            return new Canvg(ctx, svgDocument, options);
          })();
        }
        static fromString(ctx, svg) {
          var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            svgDocument = new Parser(options).parseFromString(svg);
          return new Canvg(ctx, svgDocument, options);
        }
        fork(ctx, svg) {
          var options =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return Canvg.from(
            ctx,
            svg,
            _objectSpread(_objectSpread({}, this.options), options)
          );
        }
        forkString(ctx, svg) {
          var options =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return Canvg.fromString(
            ctx,
            svg,
            _objectSpread(_objectSpread({}, this.options), options)
          );
        }
        ready() {
          return this.screen.ready();
        }
        isReady() {
          return this.screen.isReady();
        }
        render() {
          var _arguments2 = arguments,
            _this = this;
          return (0, asyncToGenerator.Z)(function* () {
            var options =
              _arguments2.length > 0 && void 0 !== _arguments2[0]
                ? _arguments2[0]
                : {};
            _this.start(
              _objectSpread(
                { enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 },
                options
              )
            ),
              yield _this.ready(),
              _this.stop();
          })();
        }
        start() {
          var options =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { documentElement, screen, options: baseOptions } = this;
          screen.start(
            documentElement,
            _objectSpread(
              _objectSpread({ enableRedraw: !0 }, baseOptions),
              options
            )
          );
        }
        stop() {
          this.screen.stop();
        }
        resize(width) {
          var height =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : width,
            preserveAspectRatio =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          this.documentElement.resize(width, height, preserveAspectRatio);
        }
      }
    },
  },
]);
