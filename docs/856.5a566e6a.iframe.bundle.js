/*! For license information please see 856.5a566e6a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_redbee_styleguide =
  self.webpackChunk_redbee_styleguide || []).push([
  [856],
  {
    './node_modules/dompurify/dist/purify.js': function (module) {
      module.exports = (function () {
        'use strict';
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
        function _setPrototypeOf(o, p) {
          return (
            (_setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                return (o.__proto__ = p), o;
              }),
            _setPrototypeOf(o, p)
          );
        }
        function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function _construct(Parent, args, Class) {
          return (
            (_construct = _isNativeReflectConstruct()
              ? Reflect.construct
              : function _construct(Parent, args, Class) {
                  var a = [null];
                  a.push.apply(a, args);
                  var instance = new (Function.bind.apply(Parent, a))();
                  return (
                    Class && _setPrototypeOf(instance, Class.prototype),
                    instance
                  );
                }),
            _construct.apply(null, arguments)
          );
        }
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _iterableToArray(iter) {
          if (
            ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
            null != iter['@@iterator']
          )
            return Array.from(iter);
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (o) {
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            return (
              'Object' === n && o.constructor && (n = o.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(o)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
            );
          }
        }
        function _arrayLikeToArray(arr, len) {
          (null == len || len > arr.length) && (len = arr.length);
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableSpread() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var hasOwnProperty = Object.hasOwnProperty,
          setPrototypeOf = Object.setPrototypeOf,
          isFrozen = Object.isFrozen,
          getPrototypeOf = Object.getPrototypeOf,
          getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
          freeze = Object.freeze,
          seal = Object.seal,
          create = Object.create,
          _ref = 'undefined' != typeof Reflect && Reflect,
          apply = _ref.apply,
          construct = _ref.construct;
        apply ||
          (apply = function apply(fun, thisValue, args) {
            return fun.apply(thisValue, args);
          }),
          freeze ||
            (freeze = function freeze(x) {
              return x;
            }),
          seal ||
            (seal = function seal(x) {
              return x;
            }),
          construct ||
            (construct = function construct(Func, args) {
              return _construct(Func, _toConsumableArray(args));
            });
        var arrayForEach = unapply(Array.prototype.forEach),
          arrayPop = unapply(Array.prototype.pop),
          arrayPush = unapply(Array.prototype.push),
          stringToLowerCase = unapply(String.prototype.toLowerCase),
          stringToString = unapply(String.prototype.toString),
          stringMatch = unapply(String.prototype.match),
          stringReplace = unapply(String.prototype.replace),
          stringIndexOf = unapply(String.prototype.indexOf),
          stringTrim = unapply(String.prototype.trim),
          regExpTest = unapply(RegExp.prototype.test),
          typeErrorCreate = unconstruct(TypeError);
        function unapply(func) {
          return function (thisArg) {
            for (
              var _len = arguments.length,
                args = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            )
              args[_key - 1] = arguments[_key];
            return apply(func, thisArg, args);
          };
        }
        function unconstruct(func) {
          return function () {
            for (
              var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
              _key2 < _len2;
              _key2++
            )
              args[_key2] = arguments[_key2];
            return construct(func, args);
          };
        }
        function addToSet(set, array, transformCaseFunc) {
          (transformCaseFunc = transformCaseFunc || stringToLowerCase),
            setPrototypeOf && setPrototypeOf(set, null);
          for (var l = array.length; l--; ) {
            var element = array[l];
            if ('string' == typeof element) {
              var lcElement = transformCaseFunc(element);
              lcElement !== element &&
                (isFrozen(array) || (array[l] = lcElement),
                (element = lcElement));
            }
            set[element] = !0;
          }
          return set;
        }
        function clone(object) {
          var property,
            newObject = create(null);
          for (property in object)
            apply(hasOwnProperty, object, [property]) &&
              (newObject[property] = object[property]);
          return newObject;
        }
        function lookupGetter(object, prop) {
          for (; null !== object; ) {
            var desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
              if (desc.get) return unapply(desc.get);
              if ('function' == typeof desc.value) return unapply(desc.value);
            }
            object = getPrototypeOf(object);
          }
          function fallbackValue(element) {
            return console.warn('fallback value for', element), null;
          }
          return fallbackValue;
        }
        var html$1 = freeze([
            'a',
            'abbr',
            'acronym',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'bdi',
            'bdo',
            'big',
            'blink',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'center',
            'cite',
            'code',
            'col',
            'colgroup',
            'content',
            'data',
            'datalist',
            'dd',
            'decorator',
            'del',
            'details',
            'dfn',
            'dialog',
            'dir',
            'div',
            'dl',
            'dt',
            'element',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'font',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meter',
            'nav',
            'nobr',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'section',
            'select',
            'shadow',
            'small',
            'source',
            'spacer',
            'span',
            'strike',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'template',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'track',
            'tt',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
          ]),
          svg$1 = freeze([
            'svg',
            'a',
            'altglyph',
            'altglyphdef',
            'altglyphitem',
            'animatecolor',
            'animatemotion',
            'animatetransform',
            'circle',
            'clippath',
            'defs',
            'desc',
            'ellipse',
            'filter',
            'font',
            'g',
            'glyph',
            'glyphref',
            'hkern',
            'image',
            'line',
            'lineargradient',
            'marker',
            'mask',
            'metadata',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialgradient',
            'rect',
            'stop',
            'style',
            'switch',
            'symbol',
            'text',
            'textpath',
            'title',
            'tref',
            'tspan',
            'view',
            'vkern',
          ]),
          svgFilters = freeze([
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
          ]),
          svgDisallowed = freeze([
            'animate',
            'color-profile',
            'cursor',
            'discard',
            'fedropshadow',
            'font-face',
            'font-face-format',
            'font-face-name',
            'font-face-src',
            'font-face-uri',
            'foreignobject',
            'hatch',
            'hatchpath',
            'mesh',
            'meshgradient',
            'meshpatch',
            'meshrow',
            'missing-glyph',
            'script',
            'set',
            'solidcolor',
            'unknown',
            'use',
          ]),
          mathMl$1 = freeze([
            'math',
            'menclose',
            'merror',
            'mfenced',
            'mfrac',
            'mglyph',
            'mi',
            'mlabeledtr',
            'mmultiscripts',
            'mn',
            'mo',
            'mover',
            'mpadded',
            'mphantom',
            'mroot',
            'mrow',
            'ms',
            'mspace',
            'msqrt',
            'mstyle',
            'msub',
            'msup',
            'msubsup',
            'mtable',
            'mtd',
            'mtext',
            'mtr',
            'munder',
            'munderover',
          ]),
          mathMlDisallowed = freeze([
            'maction',
            'maligngroup',
            'malignmark',
            'mlongdiv',
            'mscarries',
            'mscarry',
            'msgroup',
            'mstack',
            'msline',
            'msrow',
            'semantics',
            'annotation',
            'annotation-xml',
            'mprescripts',
            'none',
          ]),
          text = freeze(['#text']),
          html = freeze([
            'accept',
            'action',
            'align',
            'alt',
            'autocapitalize',
            'autocomplete',
            'autopictureinpicture',
            'autoplay',
            'background',
            'bgcolor',
            'border',
            'capture',
            'cellpadding',
            'cellspacing',
            'checked',
            'cite',
            'class',
            'clear',
            'color',
            'cols',
            'colspan',
            'controls',
            'controlslist',
            'coords',
            'crossorigin',
            'datetime',
            'decoding',
            'default',
            'dir',
            'disabled',
            'disablepictureinpicture',
            'disableremoteplayback',
            'download',
            'draggable',
            'enctype',
            'enterkeyhint',
            'face',
            'for',
            'headers',
            'height',
            'hidden',
            'high',
            'href',
            'hreflang',
            'id',
            'inputmode',
            'integrity',
            'ismap',
            'kind',
            'label',
            'lang',
            'list',
            'loading',
            'loop',
            'low',
            'max',
            'maxlength',
            'media',
            'method',
            'min',
            'minlength',
            'multiple',
            'muted',
            'name',
            'nonce',
            'noshade',
            'novalidate',
            'nowrap',
            'open',
            'optimum',
            'pattern',
            'placeholder',
            'playsinline',
            'poster',
            'preload',
            'pubdate',
            'radiogroup',
            'readonly',
            'rel',
            'required',
            'rev',
            'reversed',
            'role',
            'rows',
            'rowspan',
            'spellcheck',
            'scope',
            'selected',
            'shape',
            'size',
            'sizes',
            'span',
            'srclang',
            'start',
            'src',
            'srcset',
            'step',
            'style',
            'summary',
            'tabindex',
            'title',
            'translate',
            'type',
            'usemap',
            'valign',
            'value',
            'width',
            'xmlns',
            'slot',
          ]),
          svg = freeze([
            'accent-height',
            'accumulate',
            'additive',
            'alignment-baseline',
            'ascent',
            'attributename',
            'attributetype',
            'azimuth',
            'basefrequency',
            'baseline-shift',
            'begin',
            'bias',
            'by',
            'class',
            'clip',
            'clippathunits',
            'clip-path',
            'clip-rule',
            'color',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'cx',
            'cy',
            'd',
            'dx',
            'dy',
            'diffuseconstant',
            'direction',
            'display',
            'divisor',
            'dur',
            'edgemode',
            'elevation',
            'end',
            'fill',
            'fill-opacity',
            'fill-rule',
            'filter',
            'filterunits',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'fx',
            'fy',
            'g1',
            'g2',
            'glyph-name',
            'glyphref',
            'gradientunits',
            'gradienttransform',
            'height',
            'href',
            'id',
            'image-rendering',
            'in',
            'in2',
            'k',
            'k1',
            'k2',
            'k3',
            'k4',
            'kerning',
            'keypoints',
            'keysplines',
            'keytimes',
            'lang',
            'lengthadjust',
            'letter-spacing',
            'kernelmatrix',
            'kernelunitlength',
            'lighting-color',
            'local',
            'marker-end',
            'marker-mid',
            'marker-start',
            'markerheight',
            'markerunits',
            'markerwidth',
            'maskcontentunits',
            'maskunits',
            'max',
            'mask',
            'media',
            'method',
            'mode',
            'min',
            'name',
            'numoctaves',
            'offset',
            'operator',
            'opacity',
            'order',
            'orient',
            'orientation',
            'origin',
            'overflow',
            'paint-order',
            'path',
            'pathlength',
            'patterncontentunits',
            'patterntransform',
            'patternunits',
            'points',
            'preservealpha',
            'preserveaspectratio',
            'primitiveunits',
            'r',
            'rx',
            'ry',
            'radius',
            'refx',
            'refy',
            'repeatcount',
            'repeatdur',
            'restart',
            'result',
            'rotate',
            'scale',
            'seed',
            'shape-rendering',
            'specularconstant',
            'specularexponent',
            'spreadmethod',
            'startoffset',
            'stddeviation',
            'stitchtiles',
            'stop-color',
            'stop-opacity',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke',
            'stroke-width',
            'style',
            'surfacescale',
            'systemlanguage',
            'tabindex',
            'targetx',
            'targety',
            'transform',
            'transform-origin',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'textlength',
            'type',
            'u1',
            'u2',
            'unicode',
            'values',
            'viewbox',
            'visibility',
            'version',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'width',
            'word-spacing',
            'wrap',
            'writing-mode',
            'xchannelselector',
            'ychannelselector',
            'x',
            'x1',
            'x2',
            'xmlns',
            'y',
            'y1',
            'y2',
            'z',
            'zoomandpan',
          ]),
          mathMl = freeze([
            'accent',
            'accentunder',
            'align',
            'bevelled',
            'close',
            'columnsalign',
            'columnlines',
            'columnspan',
            'denomalign',
            'depth',
            'dir',
            'display',
            'displaystyle',
            'encoding',
            'fence',
            'frame',
            'height',
            'href',
            'id',
            'largeop',
            'length',
            'linethickness',
            'lspace',
            'lquote',
            'mathbackground',
            'mathcolor',
            'mathsize',
            'mathvariant',
            'maxsize',
            'minsize',
            'movablelimits',
            'notation',
            'numalign',
            'open',
            'rowalign',
            'rowlines',
            'rowspacing',
            'rowspan',
            'rspace',
            'rquote',
            'scriptlevel',
            'scriptminsize',
            'scriptsizemultiplier',
            'selection',
            'separator',
            'separators',
            'stretchy',
            'subscriptshift',
            'supscriptshift',
            'symmetric',
            'voffset',
            'width',
            'xmlns',
          ]),
          xml = freeze([
            'xlink:href',
            'xml:id',
            'xlink:title',
            'xml:space',
            'xmlns:xlink',
          ]),
          MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm),
          TMPLIT_EXPR = seal(/\${[\w\W]*}/gm),
          DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/),
          ARIA_ATTR = seal(/^aria-[\-\w]+$/),
          IS_ALLOWED_URI = seal(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          ),
          IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i),
          ATTR_WHITESPACE = seal(
            /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
          ),
          DOCTYPE_NAME = seal(/^html$/i),
          getGlobal = function getGlobal() {
            return 'undefined' == typeof window ? null : window;
          },
          _createTrustedTypesPolicy = function _createTrustedTypesPolicy(
            trustedTypes,
            document
          ) {
            if (
              'object' !== _typeof(trustedTypes) ||
              'function' != typeof trustedTypes.createPolicy
            )
              return null;
            var suffix = null,
              ATTR_NAME = 'data-tt-policy-suffix';
            document.currentScript &&
              document.currentScript.hasAttribute(ATTR_NAME) &&
              (suffix = document.currentScript.getAttribute(ATTR_NAME));
            var policyName = 'dompurify' + (suffix ? '#' + suffix : '');
            try {
              return trustedTypes.createPolicy(policyName, {
                createHTML: function createHTML(html) {
                  return html;
                },
                createScriptURL: function createScriptURL(scriptUrl) {
                  return scriptUrl;
                },
              });
            } catch (_) {
              return (
                console.warn(
                  'TrustedTypes policy ' + policyName + ' could not be created.'
                ),
                null
              );
            }
          };
        function createDOMPurify() {
          var window =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : getGlobal(),
            DOMPurify = function DOMPurify(root) {
              return createDOMPurify(root);
            };
          if (
            ((DOMPurify.version = '2.4.1'),
            (DOMPurify.removed = []),
            !window || !window.document || 9 !== window.document.nodeType)
          )
            return (DOMPurify.isSupported = !1), DOMPurify;
          var originalDocument = window.document,
            document = window.document,
            DocumentFragment = window.DocumentFragment,
            HTMLTemplateElement = window.HTMLTemplateElement,
            Node = window.Node,
            Element = window.Element,
            NodeFilter = window.NodeFilter,
            _window$NamedNodeMap = window.NamedNodeMap,
            NamedNodeMap =
              void 0 === _window$NamedNodeMap
                ? window.NamedNodeMap || window.MozNamedAttrMap
                : _window$NamedNodeMap,
            HTMLFormElement = window.HTMLFormElement,
            DOMParser = window.DOMParser,
            trustedTypes = window.trustedTypes,
            ElementPrototype = Element.prototype,
            cloneNode = lookupGetter(ElementPrototype, 'cloneNode'),
            getNextSibling = lookupGetter(ElementPrototype, 'nextSibling'),
            getChildNodes = lookupGetter(ElementPrototype, 'childNodes'),
            getParentNode = lookupGetter(ElementPrototype, 'parentNode');
          if ('function' == typeof HTMLTemplateElement) {
            var template = document.createElement('template');
            template.content &&
              template.content.ownerDocument &&
              (document = template.content.ownerDocument);
          }
          var trustedTypesPolicy = _createTrustedTypesPolicy(
              trustedTypes,
              originalDocument
            ),
            emptyHTML = trustedTypesPolicy
              ? trustedTypesPolicy.createHTML('')
              : '',
            _document = document,
            implementation = _document.implementation,
            createNodeIterator = _document.createNodeIterator,
            createDocumentFragment = _document.createDocumentFragment,
            getElementsByTagName = _document.getElementsByTagName,
            importNode = originalDocument.importNode,
            documentMode = {};
          try {
            documentMode = clone(document).documentMode
              ? document.documentMode
              : {};
          } catch (_) {}
          var hooks = {};
          DOMPurify.isSupported =
            'function' == typeof getParentNode &&
            implementation &&
            void 0 !== implementation.createHTMLDocument &&
            9 !== documentMode;
          var PARSER_MEDIA_TYPE,
            transformCaseFunc,
            MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
            ERB_EXPR$1 = ERB_EXPR,
            TMPLIT_EXPR$1 = TMPLIT_EXPR,
            DATA_ATTR$1 = DATA_ATTR,
            ARIA_ATTR$1 = ARIA_ATTR,
            IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
            ATTR_WHITESPACE$1 = ATTR_WHITESPACE,
            IS_ALLOWED_URI$1 = IS_ALLOWED_URI,
            ALLOWED_TAGS = null,
            DEFAULT_ALLOWED_TAGS = addToSet(
              {},
              [].concat(
                _toConsumableArray(html$1),
                _toConsumableArray(svg$1),
                _toConsumableArray(svgFilters),
                _toConsumableArray(mathMl$1),
                _toConsumableArray(text)
              )
            ),
            ALLOWED_ATTR = null,
            DEFAULT_ALLOWED_ATTR = addToSet(
              {},
              [].concat(
                _toConsumableArray(html),
                _toConsumableArray(svg),
                _toConsumableArray(mathMl),
                _toConsumableArray(xml)
              )
            ),
            CUSTOM_ELEMENT_HANDLING = Object.seal(
              Object.create(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              })
            ),
            FORBID_TAGS = null,
            FORBID_ATTR = null,
            ALLOW_ARIA_ATTR = !0,
            ALLOW_DATA_ATTR = !0,
            ALLOW_UNKNOWN_PROTOCOLS = !1,
            SAFE_FOR_TEMPLATES = !1,
            WHOLE_DOCUMENT = !1,
            SET_CONFIG = !1,
            FORCE_BODY = !1,
            RETURN_DOM = !1,
            RETURN_DOM_FRAGMENT = !1,
            RETURN_TRUSTED_TYPE = !1,
            SANITIZE_DOM = !0,
            SANITIZE_NAMED_PROPS = !1,
            SANITIZE_NAMED_PROPS_PREFIX = 'user-content-',
            KEEP_CONTENT = !0,
            IN_PLACE = !1,
            USE_PROFILES = {},
            FORBID_CONTENTS = null,
            DEFAULT_FORBID_CONTENTS = addToSet({}, [
              'annotation-xml',
              'audio',
              'colgroup',
              'desc',
              'foreignobject',
              'head',
              'iframe',
              'math',
              'mi',
              'mn',
              'mo',
              'ms',
              'mtext',
              'noembed',
              'noframes',
              'noscript',
              'plaintext',
              'script',
              'style',
              'svg',
              'template',
              'thead',
              'title',
              'video',
              'xmp',
            ]),
            DATA_URI_TAGS = null,
            DEFAULT_DATA_URI_TAGS = addToSet({}, [
              'audio',
              'video',
              'img',
              'source',
              'image',
              'track',
            ]),
            URI_SAFE_ATTRIBUTES = null,
            DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
              'alt',
              'class',
              'for',
              'id',
              'label',
              'name',
              'pattern',
              'placeholder',
              'role',
              'summary',
              'title',
              'value',
              'style',
              'xmlns',
            ]),
            MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML',
            SVG_NAMESPACE = 'http://www.w3.org/2000/svg',
            HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml',
            NAMESPACE = HTML_NAMESPACE,
            IS_EMPTY_INPUT = !1,
            ALLOWED_NAMESPACES = null,
            DEFAULT_ALLOWED_NAMESPACES = addToSet(
              {},
              [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE],
              stringToString
            ),
            SUPPORTED_PARSER_MEDIA_TYPES = [
              'application/xhtml+xml',
              'text/html',
            ],
            DEFAULT_PARSER_MEDIA_TYPE = 'text/html',
            CONFIG = null,
            formElement = document.createElement('form'),
            isRegexOrFunction = function isRegexOrFunction(testValue) {
              return (
                testValue instanceof RegExp || testValue instanceof Function
              );
            },
            _parseConfig = function _parseConfig(cfg) {
              (CONFIG && CONFIG === cfg) ||
                ((cfg && 'object' === _typeof(cfg)) || (cfg = {}),
                (cfg = clone(cfg)),
                (PARSER_MEDIA_TYPE = PARSER_MEDIA_TYPE =
                  -1 ===
                  SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE)
                    ? DEFAULT_PARSER_MEDIA_TYPE
                    : cfg.PARSER_MEDIA_TYPE),
                (transformCaseFunc =
                  'application/xhtml+xml' === PARSER_MEDIA_TYPE
                    ? stringToString
                    : stringToLowerCase),
                (ALLOWED_TAGS =
                  'ALLOWED_TAGS' in cfg
                    ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc)
                    : DEFAULT_ALLOWED_TAGS),
                (ALLOWED_ATTR =
                  'ALLOWED_ATTR' in cfg
                    ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc)
                    : DEFAULT_ALLOWED_ATTR),
                (ALLOWED_NAMESPACES =
                  'ALLOWED_NAMESPACES' in cfg
                    ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString)
                    : DEFAULT_ALLOWED_NAMESPACES),
                (URI_SAFE_ATTRIBUTES =
                  'ADD_URI_SAFE_ATTR' in cfg
                    ? addToSet(
                        clone(DEFAULT_URI_SAFE_ATTRIBUTES),
                        cfg.ADD_URI_SAFE_ATTR,
                        transformCaseFunc
                      )
                    : DEFAULT_URI_SAFE_ATTRIBUTES),
                (DATA_URI_TAGS =
                  'ADD_DATA_URI_TAGS' in cfg
                    ? addToSet(
                        clone(DEFAULT_DATA_URI_TAGS),
                        cfg.ADD_DATA_URI_TAGS,
                        transformCaseFunc
                      )
                    : DEFAULT_DATA_URI_TAGS),
                (FORBID_CONTENTS =
                  'FORBID_CONTENTS' in cfg
                    ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc)
                    : DEFAULT_FORBID_CONTENTS),
                (FORBID_TAGS =
                  'FORBID_TAGS' in cfg
                    ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc)
                    : {}),
                (FORBID_ATTR =
                  'FORBID_ATTR' in cfg
                    ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc)
                    : {}),
                (USE_PROFILES = 'USE_PROFILES' in cfg && cfg.USE_PROFILES),
                (ALLOW_ARIA_ATTR = !1 !== cfg.ALLOW_ARIA_ATTR),
                (ALLOW_DATA_ATTR = !1 !== cfg.ALLOW_DATA_ATTR),
                (ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || !1),
                (WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || !1),
                (RETURN_DOM = cfg.RETURN_DOM || !1),
                (RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || !1),
                (RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || !1),
                (FORCE_BODY = cfg.FORCE_BODY || !1),
                (SANITIZE_DOM = !1 !== cfg.SANITIZE_DOM),
                (SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || !1),
                (KEEP_CONTENT = !1 !== cfg.KEEP_CONTENT),
                (IN_PLACE = cfg.IN_PLACE || !1),
                (IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1),
                (NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE),
                cfg.CUSTOM_ELEMENT_HANDLING &&
                  isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (CUSTOM_ELEMENT_HANDLING.tagNameCheck =
                    cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                cfg.CUSTOM_ELEMENT_HANDLING &&
                  isRegexOrFunction(
                    cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                  ) &&
                  (CUSTOM_ELEMENT_HANDLING.attributeNameCheck =
                    cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                cfg.CUSTOM_ELEMENT_HANDLING &&
                  'boolean' ==
                    typeof cfg.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements =
                    cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                SAFE_FOR_TEMPLATES && (ALLOW_DATA_ATTR = !1),
                RETURN_DOM_FRAGMENT && (RETURN_DOM = !0),
                USE_PROFILES &&
                  ((ALLOWED_TAGS = addToSet({}, _toConsumableArray(text))),
                  (ALLOWED_ATTR = []),
                  !0 === USE_PROFILES.html &&
                    (addToSet(ALLOWED_TAGS, html$1),
                    addToSet(ALLOWED_ATTR, html)),
                  !0 === USE_PROFILES.svg &&
                    (addToSet(ALLOWED_TAGS, svg$1),
                    addToSet(ALLOWED_ATTR, svg),
                    addToSet(ALLOWED_ATTR, xml)),
                  !0 === USE_PROFILES.svgFilters &&
                    (addToSet(ALLOWED_TAGS, svgFilters),
                    addToSet(ALLOWED_ATTR, svg),
                    addToSet(ALLOWED_ATTR, xml)),
                  !0 === USE_PROFILES.mathMl &&
                    (addToSet(ALLOWED_TAGS, mathMl$1),
                    addToSet(ALLOWED_ATTR, mathMl),
                    addToSet(ALLOWED_ATTR, xml))),
                cfg.ADD_TAGS &&
                  (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS &&
                    (ALLOWED_TAGS = clone(ALLOWED_TAGS)),
                  addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc)),
                cfg.ADD_ATTR &&
                  (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR &&
                    (ALLOWED_ATTR = clone(ALLOWED_ATTR)),
                  addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc)),
                cfg.ADD_URI_SAFE_ATTR &&
                  addToSet(
                    URI_SAFE_ATTRIBUTES,
                    cfg.ADD_URI_SAFE_ATTR,
                    transformCaseFunc
                  ),
                cfg.FORBID_CONTENTS &&
                  (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS &&
                    (FORBID_CONTENTS = clone(FORBID_CONTENTS)),
                  addToSet(
                    FORBID_CONTENTS,
                    cfg.FORBID_CONTENTS,
                    transformCaseFunc
                  )),
                KEEP_CONTENT && (ALLOWED_TAGS['#text'] = !0),
                WHOLE_DOCUMENT &&
                  addToSet(ALLOWED_TAGS, ['html', 'head', 'body']),
                ALLOWED_TAGS.table &&
                  (addToSet(ALLOWED_TAGS, ['tbody']), delete FORBID_TAGS.tbody),
                freeze && freeze(cfg),
                (CONFIG = cfg));
            },
            MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
              'mi',
              'mo',
              'mn',
              'ms',
              'mtext',
            ]),
            HTML_INTEGRATION_POINTS = addToSet({}, [
              'foreignobject',
              'desc',
              'title',
              'annotation-xml',
            ]),
            COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
              'title',
              'style',
              'font',
              'a',
              'script',
            ]),
            ALL_SVG_TAGS = addToSet({}, svg$1);
          addToSet(ALL_SVG_TAGS, svgFilters),
            addToSet(ALL_SVG_TAGS, svgDisallowed);
          var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
          addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
          var _checkValidNamespace = function _checkValidNamespace(element) {
              var parent = getParentNode(element);
              (parent && parent.tagName) ||
                (parent = { namespaceURI: NAMESPACE, tagName: 'template' });
              var tagName = stringToLowerCase(element.tagName),
                parentTagName = stringToLowerCase(parent.tagName);
              return (
                !!ALLOWED_NAMESPACES[element.namespaceURI] &&
                (element.namespaceURI === SVG_NAMESPACE
                  ? parent.namespaceURI === HTML_NAMESPACE
                    ? 'svg' === tagName
                    : parent.namespaceURI === MATHML_NAMESPACE
                    ? 'svg' === tagName &&
                      ('annotation-xml' === parentTagName ||
                        MATHML_TEXT_INTEGRATION_POINTS[parentTagName])
                    : Boolean(ALL_SVG_TAGS[tagName])
                  : element.namespaceURI === MATHML_NAMESPACE
                  ? parent.namespaceURI === HTML_NAMESPACE
                    ? 'math' === tagName
                    : parent.namespaceURI === SVG_NAMESPACE
                    ? 'math' === tagName &&
                      HTML_INTEGRATION_POINTS[parentTagName]
                    : Boolean(ALL_MATHML_TAGS[tagName])
                  : element.namespaceURI === HTML_NAMESPACE
                  ? !(
                      parent.namespaceURI === SVG_NAMESPACE &&
                      !HTML_INTEGRATION_POINTS[parentTagName]
                    ) &&
                    !(
                      parent.namespaceURI === MATHML_NAMESPACE &&
                      !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]
                    ) &&
                    !ALL_MATHML_TAGS[tagName] &&
                    (COMMON_SVG_AND_HTML_ELEMENTS[tagName] ||
                      !ALL_SVG_TAGS[tagName])
                  : !(
                      'application/xhtml+xml' !== PARSER_MEDIA_TYPE ||
                      !ALLOWED_NAMESPACES[element.namespaceURI]
                    ))
              );
            },
            _forceRemove = function _forceRemove(node) {
              arrayPush(DOMPurify.removed, { element: node });
              try {
                node.parentNode.removeChild(node);
              } catch (_) {
                try {
                  node.outerHTML = emptyHTML;
                } catch (_) {
                  node.remove();
                }
              }
            },
            _removeAttribute = function _removeAttribute(name, node) {
              try {
                arrayPush(DOMPurify.removed, {
                  attribute: node.getAttributeNode(name),
                  from: node,
                });
              } catch (_) {
                arrayPush(DOMPurify.removed, { attribute: null, from: node });
              }
              if (
                (node.removeAttribute(name),
                'is' === name && !ALLOWED_ATTR[name])
              )
                if (RETURN_DOM || RETURN_DOM_FRAGMENT)
                  try {
                    _forceRemove(node);
                  } catch (_) {}
                else
                  try {
                    node.setAttribute(name, '');
                  } catch (_) {}
            },
            _initDocument = function _initDocument(dirty) {
              var doc, leadingWhitespace;
              if (FORCE_BODY) dirty = '<remove></remove>' + dirty;
              else {
                var matches = stringMatch(dirty, /^[\r\n\t ]+/);
                leadingWhitespace = matches && matches[0];
              }
              'application/xhtml+xml' === PARSER_MEDIA_TYPE &&
                NAMESPACE === HTML_NAMESPACE &&
                (dirty =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  dirty +
                  '</body></html>');
              var dirtyPayload = trustedTypesPolicy
                ? trustedTypesPolicy.createHTML(dirty)
                : dirty;
              if (NAMESPACE === HTML_NAMESPACE)
                try {
                  doc = new DOMParser().parseFromString(
                    dirtyPayload,
                    PARSER_MEDIA_TYPE
                  );
                } catch (_) {}
              if (!doc || !doc.documentElement) {
                doc = implementation.createDocument(
                  NAMESPACE,
                  'template',
                  null
                );
                try {
                  doc.documentElement.innerHTML = IS_EMPTY_INPUT
                    ? ''
                    : dirtyPayload;
                } catch (_) {}
              }
              var body = doc.body || doc.documentElement;
              return (
                dirty &&
                  leadingWhitespace &&
                  body.insertBefore(
                    document.createTextNode(leadingWhitespace),
                    body.childNodes[0] || null
                  ),
                NAMESPACE === HTML_NAMESPACE
                  ? getElementsByTagName.call(
                      doc,
                      WHOLE_DOCUMENT ? 'html' : 'body'
                    )[0]
                  : WHOLE_DOCUMENT
                  ? doc.documentElement
                  : body
              );
            },
            _createIterator = function _createIterator(root) {
              return createNodeIterator.call(
                root.ownerDocument || root,
                root,
                NodeFilter.SHOW_ELEMENT |
                  NodeFilter.SHOW_COMMENT |
                  NodeFilter.SHOW_TEXT,
                null,
                !1
              );
            },
            _isClobbered = function _isClobbered(elm) {
              return (
                elm instanceof HTMLFormElement &&
                ('string' != typeof elm.nodeName ||
                  'string' != typeof elm.textContent ||
                  'function' != typeof elm.removeChild ||
                  !(elm.attributes instanceof NamedNodeMap) ||
                  'function' != typeof elm.removeAttribute ||
                  'function' != typeof elm.setAttribute ||
                  'string' != typeof elm.namespaceURI ||
                  'function' != typeof elm.insertBefore ||
                  'function' != typeof elm.hasChildNodes)
              );
            },
            _isNode = function _isNode(object) {
              return 'object' === _typeof(Node)
                ? object instanceof Node
                : object &&
                    'object' === _typeof(object) &&
                    'number' == typeof object.nodeType &&
                    'string' == typeof object.nodeName;
            },
            _executeHook = function _executeHook(
              entryPoint,
              currentNode,
              data
            ) {
              hooks[entryPoint] &&
                arrayForEach(hooks[entryPoint], function (hook) {
                  hook.call(DOMPurify, currentNode, data, CONFIG);
                });
            },
            _sanitizeElements = function _sanitizeElements(currentNode) {
              var content;
              if (
                (_executeHook('beforeSanitizeElements', currentNode, null),
                _isClobbered(currentNode))
              )
                return _forceRemove(currentNode), !0;
              if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName))
                return _forceRemove(currentNode), !0;
              var tagName = transformCaseFunc(currentNode.nodeName);
              if (
                (_executeHook('uponSanitizeElement', currentNode, {
                  tagName,
                  allowedTags: ALLOWED_TAGS,
                }),
                currentNode.hasChildNodes() &&
                  !_isNode(currentNode.firstElementChild) &&
                  (!_isNode(currentNode.content) ||
                    !_isNode(currentNode.content.firstElementChild)) &&
                  regExpTest(/<[/\w]/g, currentNode.innerHTML) &&
                  regExpTest(/<[/\w]/g, currentNode.textContent))
              )
                return _forceRemove(currentNode), !0;
              if (
                'select' === tagName &&
                regExpTest(/<template/i, currentNode.innerHTML)
              )
                return _forceRemove(currentNode), !0;
              if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
                  if (
                    CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp &&
                    regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)
                  )
                    return !1;
                  if (
                    CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function &&
                    CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)
                  )
                    return !1;
                }
                if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                  var parentNode =
                      getParentNode(currentNode) || currentNode.parentNode,
                    childNodes =
                      getChildNodes(currentNode) || currentNode.childNodes;
                  if (childNodes && parentNode)
                    for (var i = childNodes.length - 1; i >= 0; --i)
                      parentNode.insertBefore(
                        cloneNode(childNodes[i], !0),
                        getNextSibling(currentNode)
                      );
                }
                return _forceRemove(currentNode), !0;
              }
              return currentNode instanceof Element &&
                !_checkValidNamespace(currentNode)
                ? (_forceRemove(currentNode), !0)
                : ('noscript' !== tagName && 'noembed' !== tagName) ||
                  !regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)
                ? (SAFE_FOR_TEMPLATES &&
                    3 === currentNode.nodeType &&
                    ((content = currentNode.textContent),
                    (content = stringReplace(content, MUSTACHE_EXPR$1, ' ')),
                    (content = stringReplace(content, ERB_EXPR$1, ' ')),
                    (content = stringReplace(content, TMPLIT_EXPR$1, ' ')),
                    currentNode.textContent !== content &&
                      (arrayPush(DOMPurify.removed, {
                        element: currentNode.cloneNode(),
                      }),
                      (currentNode.textContent = content))),
                  _executeHook('afterSanitizeElements', currentNode, null),
                  !1)
                : (_forceRemove(currentNode), !0);
            },
            _isValidAttribute = function _isValidAttribute(
              lcTag,
              lcName,
              value
            ) {
              if (
                SANITIZE_DOM &&
                ('id' === lcName || 'name' === lcName) &&
                (value in document || value in formElement)
              )
                return !1;
              if (
                ALLOW_DATA_ATTR &&
                !FORBID_ATTR[lcName] &&
                regExpTest(DATA_ATTR$1, lcName)
              );
              else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName));
              else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                if (
                  !(
                    (_basicCustomElementTest(lcTag) &&
                      ((CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof
                        RegExp &&
                        regExpTest(
                          CUSTOM_ELEMENT_HANDLING.tagNameCheck,
                          lcTag
                        )) ||
                        (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof
                          Function &&
                          CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag))) &&
                      ((CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof
                        RegExp &&
                        regExpTest(
                          CUSTOM_ELEMENT_HANDLING.attributeNameCheck,
                          lcName
                        )) ||
                        (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof
                          Function &&
                          CUSTOM_ELEMENT_HANDLING.attributeNameCheck(
                            lcName
                          )))) ||
                    ('is' === lcName &&
                      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                      ((CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof
                        RegExp &&
                        regExpTest(
                          CUSTOM_ELEMENT_HANDLING.tagNameCheck,
                          value
                        )) ||
                        (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof
                          Function &&
                          CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))))
                  )
                )
                  return !1;
              } else if (URI_SAFE_ATTRIBUTES[lcName]);
              else if (
                regExpTest(
                  IS_ALLOWED_URI$1,
                  stringReplace(value, ATTR_WHITESPACE$1, '')
                )
              );
              else if (
                ('src' !== lcName &&
                  'xlink:href' !== lcName &&
                  'href' !== lcName) ||
                'script' === lcTag ||
                0 !== stringIndexOf(value, 'data:') ||
                !DATA_URI_TAGS[lcTag]
              )
                if (
                  ALLOW_UNKNOWN_PROTOCOLS &&
                  !regExpTest(
                    IS_SCRIPT_OR_DATA$1,
                    stringReplace(value, ATTR_WHITESPACE$1, '')
                  )
                );
                else if (value) return !1;
              return !0;
            },
            _basicCustomElementTest = function _basicCustomElementTest(
              tagName
            ) {
              return tagName.indexOf('-') > 0;
            },
            _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
              var attr, value, lcName, l;
              _executeHook('beforeSanitizeAttributes', currentNode, null);
              var attributes = currentNode.attributes;
              if (attributes) {
                var hookEvent = {
                  attrName: '',
                  attrValue: '',
                  keepAttr: !0,
                  allowedAttributes: ALLOWED_ATTR,
                };
                for (l = attributes.length; l--; ) {
                  var _attr = (attr = attributes[l]),
                    name = _attr.name,
                    namespaceURI = _attr.namespaceURI;
                  if (
                    ((value =
                      'value' === name ? attr.value : stringTrim(attr.value)),
                    (lcName = transformCaseFunc(name)),
                    (hookEvent.attrName = lcName),
                    (hookEvent.attrValue = value),
                    (hookEvent.keepAttr = !0),
                    (hookEvent.forceKeepAttr = void 0),
                    _executeHook(
                      'uponSanitizeAttribute',
                      currentNode,
                      hookEvent
                    ),
                    (value = hookEvent.attrValue),
                    !hookEvent.forceKeepAttr &&
                      (_removeAttribute(name, currentNode), hookEvent.keepAttr))
                  )
                    if (regExpTest(/\/>/i, value))
                      _removeAttribute(name, currentNode);
                    else {
                      SAFE_FOR_TEMPLATES &&
                        ((value = stringReplace(value, MUSTACHE_EXPR$1, ' ')),
                        (value = stringReplace(value, ERB_EXPR$1, ' ')),
                        (value = stringReplace(value, TMPLIT_EXPR$1, ' ')));
                      var lcTag = transformCaseFunc(currentNode.nodeName);
                      if (_isValidAttribute(lcTag, lcName, value)) {
                        if (
                          (!SANITIZE_NAMED_PROPS ||
                            ('id' !== lcName && 'name' !== lcName) ||
                            (_removeAttribute(name, currentNode),
                            (value = SANITIZE_NAMED_PROPS_PREFIX + value)),
                          trustedTypesPolicy &&
                            'object' === _typeof(trustedTypes) &&
                            'function' == typeof trustedTypes.getAttributeType)
                        )
                          if (namespaceURI);
                          else
                            switch (
                              trustedTypes.getAttributeType(lcTag, lcName)
                            ) {
                              case 'TrustedHTML':
                                value = trustedTypesPolicy.createHTML(value);
                                break;
                              case 'TrustedScriptURL':
                                value =
                                  trustedTypesPolicy.createScriptURL(value);
                            }
                        try {
                          namespaceURI
                            ? currentNode.setAttributeNS(
                                namespaceURI,
                                name,
                                value
                              )
                            : currentNode.setAttribute(name, value),
                            arrayPop(DOMPurify.removed);
                        } catch (_) {}
                      }
                    }
                }
                _executeHook('afterSanitizeAttributes', currentNode, null);
              }
            },
            _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
              var shadowNode,
                shadowIterator = _createIterator(fragment);
              for (
                _executeHook('beforeSanitizeShadowDOM', fragment, null);
                (shadowNode = shadowIterator.nextNode());

              )
                _executeHook('uponSanitizeShadowNode', shadowNode, null),
                  _sanitizeElements(shadowNode) ||
                    (shadowNode.content instanceof DocumentFragment &&
                      _sanitizeShadowDOM(shadowNode.content),
                    _sanitizeAttributes(shadowNode));
              _executeHook('afterSanitizeShadowDOM', fragment, null);
            };
          return (
            (DOMPurify.sanitize = function (dirty) {
              var body,
                importedNode,
                currentNode,
                oldNode,
                returnNode,
                cfg =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                ((IS_EMPTY_INPUT = !dirty) && (dirty = '\x3c!--\x3e'),
                'string' != typeof dirty && !_isNode(dirty))
              ) {
                if ('function' != typeof dirty.toString)
                  throw typeErrorCreate('toString is not a function');
                if ('string' != typeof (dirty = dirty.toString()))
                  throw typeErrorCreate('dirty is not a string, aborting');
              }
              if (!DOMPurify.isSupported) {
                if (
                  'object' === _typeof(window.toStaticHTML) ||
                  'function' == typeof window.toStaticHTML
                ) {
                  if ('string' == typeof dirty)
                    return window.toStaticHTML(dirty);
                  if (_isNode(dirty))
                    return window.toStaticHTML(dirty.outerHTML);
                }
                return dirty;
              }
              if (
                (SET_CONFIG || _parseConfig(cfg),
                (DOMPurify.removed = []),
                'string' == typeof dirty && (IN_PLACE = !1),
                IN_PLACE)
              ) {
                if (dirty.nodeName) {
                  var tagName = transformCaseFunc(dirty.nodeName);
                  if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])
                    throw typeErrorCreate(
                      'root node is forbidden and cannot be sanitized in-place'
                    );
                }
              } else if (dirty instanceof Node)
                (1 ===
                  (importedNode = (body =
                    _initDocument('\x3c!----\x3e')).ownerDocument.importNode(
                    dirty,
                    !0
                  )).nodeType &&
                  'BODY' === importedNode.nodeName) ||
                'HTML' === importedNode.nodeName
                  ? (body = importedNode)
                  : body.appendChild(importedNode);
              else {
                if (
                  !RETURN_DOM &&
                  !SAFE_FOR_TEMPLATES &&
                  !WHOLE_DOCUMENT &&
                  -1 === dirty.indexOf('<')
                )
                  return trustedTypesPolicy && RETURN_TRUSTED_TYPE
                    ? trustedTypesPolicy.createHTML(dirty)
                    : dirty;
                if (!(body = _initDocument(dirty)))
                  return RETURN_DOM
                    ? null
                    : RETURN_TRUSTED_TYPE
                    ? emptyHTML
                    : '';
              }
              body && FORCE_BODY && _forceRemove(body.firstChild);
              for (
                var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
                (currentNode = nodeIterator.nextNode());

              )
                (3 === currentNode.nodeType && currentNode === oldNode) ||
                  _sanitizeElements(currentNode) ||
                  (currentNode.content instanceof DocumentFragment &&
                    _sanitizeShadowDOM(currentNode.content),
                  _sanitizeAttributes(currentNode),
                  (oldNode = currentNode));
              if (((oldNode = null), IN_PLACE)) return dirty;
              if (RETURN_DOM) {
                if (RETURN_DOM_FRAGMENT)
                  for (
                    returnNode = createDocumentFragment.call(
                      body.ownerDocument
                    );
                    body.firstChild;

                  )
                    returnNode.appendChild(body.firstChild);
                else returnNode = body;
                return (
                  ALLOWED_ATTR.shadowroot &&
                    (returnNode = importNode.call(
                      originalDocument,
                      returnNode,
                      !0
                    )),
                  returnNode
                );
              }
              var serializedHTML = WHOLE_DOCUMENT
                ? body.outerHTML
                : body.innerHTML;
              return (
                WHOLE_DOCUMENT &&
                  ALLOWED_TAGS['!doctype'] &&
                  body.ownerDocument &&
                  body.ownerDocument.doctype &&
                  body.ownerDocument.doctype.name &&
                  regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name) &&
                  (serializedHTML =
                    '<!DOCTYPE ' +
                    body.ownerDocument.doctype.name +
                    '>\n' +
                    serializedHTML),
                SAFE_FOR_TEMPLATES &&
                  ((serializedHTML = stringReplace(
                    serializedHTML,
                    MUSTACHE_EXPR$1,
                    ' '
                  )),
                  (serializedHTML = stringReplace(
                    serializedHTML,
                    ERB_EXPR$1,
                    ' '
                  )),
                  (serializedHTML = stringReplace(
                    serializedHTML,
                    TMPLIT_EXPR$1,
                    ' '
                  ))),
                trustedTypesPolicy && RETURN_TRUSTED_TYPE
                  ? trustedTypesPolicy.createHTML(serializedHTML)
                  : serializedHTML
              );
            }),
            (DOMPurify.setConfig = function (cfg) {
              _parseConfig(cfg), (SET_CONFIG = !0);
            }),
            (DOMPurify.clearConfig = function () {
              (CONFIG = null), (SET_CONFIG = !1);
            }),
            (DOMPurify.isValidAttribute = function (tag, attr, value) {
              CONFIG || _parseConfig({});
              var lcTag = transformCaseFunc(tag),
                lcName = transformCaseFunc(attr);
              return _isValidAttribute(lcTag, lcName, value);
            }),
            (DOMPurify.addHook = function (entryPoint, hookFunction) {
              'function' == typeof hookFunction &&
                ((hooks[entryPoint] = hooks[entryPoint] || []),
                arrayPush(hooks[entryPoint], hookFunction));
            }),
            (DOMPurify.removeHook = function (entryPoint) {
              if (hooks[entryPoint]) return arrayPop(hooks[entryPoint]);
            }),
            (DOMPurify.removeHooks = function (entryPoint) {
              hooks[entryPoint] && (hooks[entryPoint] = []);
            }),
            (DOMPurify.removeAllHooks = function () {
              hooks = {};
            }),
            DOMPurify
          );
        }
        return createDOMPurify();
      })();
    },
  },
]);
