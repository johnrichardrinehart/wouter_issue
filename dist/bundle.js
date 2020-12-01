/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/index.js":
/*!***********************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/index.js ***!
  \***********************************************************************************************************************************/
/*! namespace exports */
/*! export Link [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Redirect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Route [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Router [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Switch [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useLocation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useRoute [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useRouter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useRouter\": () => /* binding */ useRouter,\n/* harmony export */   \"useLocation\": () => /* binding */ useLocation,\n/* harmony export */   \"useRoute\": () => /* binding */ useRoute,\n/* harmony export */   \"Router\": () => /* binding */ Router,\n/* harmony export */   \"Route\": () => /* binding */ Route,\n/* harmony export */   \"Link\": () => /* binding */ Link,\n/* harmony export */   \"Switch\": () => /* binding */ Switch,\n/* harmony export */   \"Redirect\": () => /* binding */ Redirect,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _use_location_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-location.js */ \"./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/use-location.js\");\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ \"./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/matcher.js\");\n/* harmony import */ var _react_deps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-deps.js */ \"./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/react-deps.js\");\n\n\n\n\n\n/*\n * Part 1, Hooks API: useRouter, useRoute and useLocation\n */\n\n// one of the coolest features of `createContext`:\n// when no value is provided — default object is used.\n// allows us to use the router context as a global ref to store\n// the implicitly created router (see `useRouter` below)\nconst RouterCtx = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\n\nconst buildRouter = ({\n  hook = _use_location_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  base = \"\",\n  matcher = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_1__.default)(),\n} = {}) => ({ hook, base, matcher });\n\nconst useRouter = () => {\n  const globalRef = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.useContext)(RouterCtx);\n\n  // either obtain the router from the outer context (provided by the\n  // `<Router /> component) or create an implicit one on demand.\n  return globalRef.v || (globalRef.v = buildRouter());\n};\n\nconst useLocation = () => {\n  const router = useRouter();\n  return router.hook(router);\n};\n\nconst useRoute = (pattern) => {\n  const [path] = useLocation();\n  return useRouter().matcher(pattern, path);\n};\n\n// internal hook used by Link and Redirect in order to perform navigation\nconst useNavigate = (options) => {\n  const navRef = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n  const [, navigate] = useLocation();\n\n  navRef.current = () => navigate(options.to || options.href, options);\n  return navRef;\n};\n\n/*\n * Part 2, Low Carb Router API: Router, Route, Link, Switch\n */\n\nconst Router = (props) => {\n  const ref = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n\n  // this little trick allows to avoid having unnecessary\n  // calls to potentially expensive `buildRouter` method.\n  // https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily\n  const value = ref.current || (ref.current = { v: buildRouter(props) });\n\n  return (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(RouterCtx.Provider, {\n    value,\n    children: props.children,\n  });\n};\n\nconst Route = ({ path, match, component, children }) => {\n  const useRouteMatch = useRoute(path);\n\n  // `props.match` is present - Route is controlled by the Switch\n  const [matches, params] = match || useRouteMatch;\n\n  if (!matches) return null;\n\n  // React-Router style `component` prop\n  if (component) return (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(component, { params });\n\n  // support render prop or plain children\n  return typeof children === \"function\" ? children(params) : children;\n};\n\nconst Link = (props) => {\n  const navRef = useNavigate(props);\n  const { base } = useRouter();\n\n  let { to, href = to, children, onClick } = props;\n\n  const handleClick = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.useCallback)(\n    (event) => {\n      // ignores the navigation when clicked using right mouse button or\n      // by holding a special modifier key: ctrl, command, win, alt, shift\n      if (\n        event.ctrlKey ||\n        event.metaKey ||\n        event.altKey ||\n        event.shiftKey ||\n        event.button !== 0\n      )\n        return;\n\n      event.preventDefault();\n      navRef.current();\n      onClick && onClick(event);\n    },\n    // navRef is a ref so it never changes\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [onClick]\n  );\n\n  // wraps children in `a` if needed\n  const extraProps = { href: base + href, onClick: handleClick, to: null };\n  const jsx = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.isValidElement)(children) ? children : (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(\"a\", props);\n\n  return (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(jsx, extraProps);\n};\n\nconst Switch = ({ children, location }) => {\n  const { matcher } = useRouter();\n  const [originalLocation] = useLocation();\n\n  children = Array.isArray(children) ? children : [children];\n\n  for (const element of children) {\n    let match = 0;\n\n    if (\n      (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.isValidElement)(element) &&\n      // we don't require an element to be of type Route,\n      // but we do require it to contain a truthy `path` prop.\n      // this allows to use different components that wrap Route\n      // inside of a switch, for example <AnimatedRoute />.\n      (match = element.props.path\n        ? matcher(element.props.path, location || originalLocation)\n        : [true, {}])[0]\n    )\n      return (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(element, { match });\n  }\n\n  return null;\n};\n\nconst Redirect = (props) => {\n  const navRef = useNavigate(props);\n\n  // empty array means running the effect once, navRef is a ref so it never changes\n  (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(() => {\n    navRef.current();\n  }, []); // eslint-disable-line react-hooks/exhaustive-deps\n\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRoute);\n\n\n//# sourceURL=webpack://wouter_test/./.yarn/$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/index.js?");

/***/ }),

/***/ "./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/matcher.js":
/*!*************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/matcher.js ***!
  \*************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ makeMatcher\n/* harmony export */ });\n// creates a matcher function\nfunction makeMatcher(makeRegexpFn = pathToRegexp) {\n  let cache = {};\n\n  // obtains a cached regexp version of the pattern\n  const getRegexp = (pattern) =>\n    cache[pattern] || (cache[pattern] = makeRegexpFn(pattern));\n\n  return (pattern, path) => {\n    const { regexp, keys } = getRegexp(pattern || \"\");\n    const out = regexp.exec(path);\n\n    if (!out) return [false, null];\n\n    // formats an object with matched params\n    const params = keys.reduce((params, key, i) => {\n      params[key.name] = out[i + 1];\n      return params;\n    }, {});\n\n    return [true, params];\n  };\n}\n\n// escapes a regexp string (borrowed from path-to-regexp sources)\n// https://github.com/pillarjs/path-to-regexp/blob/v3.0.0/index.js#L202\nconst escapeRx = (str) => str.replace(/([.+*?=^!:${}()[\\]|/\\\\])/g, \"\\\\$1\");\n\n// returns a segment representation in RegExp based on flags\n// adapted and simplified version from path-to-regexp sources\nconst rxForSegment = (repeat, optional, prefix) => {\n  let capture = repeat ? \"((?:[^\\\\/]+?)(?:\\\\/(?:[^\\\\/]+?))*)\" : \"([^\\\\/]+?)\";\n  if (optional && prefix) capture = \"(?:\\\\/\" + capture + \")\";\n  return capture + (optional ? \"?\" : \"\");\n};\n\nconst pathToRegexp = (pattern) => {\n  const groupRx = /:([A-Za-z0-9_]+)([?+*]?)/g;\n\n  let match = null,\n    lastIndex = 0,\n    keys = [],\n    result = \"\";\n\n  while ((match = groupRx.exec(pattern)) !== null) {\n    const [_, segment, mod] = match;\n\n    // :foo  [1]      (  )\n    // :foo? [0 - 1]  ( o)\n    // :foo+ [1 - ∞]  (r )\n    // :foo* [0 - ∞]  (ro)\n    const repeat = mod === \"+\" || mod === \"*\";\n    const optional = mod === \"?\" || mod === \"*\";\n    const prefix = optional && pattern[match.index - 1] === \"/\" ? 1 : 0;\n\n    const prev = pattern.substring(lastIndex, match.index - prefix);\n\n    keys.push({ name: segment });\n    lastIndex = groupRx.lastIndex;\n\n    result += escapeRx(prev) + rxForSegment(repeat, optional, prefix);\n  }\n\n  result += escapeRx(pattern.substring(lastIndex));\n  return { keys, regexp: new RegExp(\"^\" + result + \"(?:\\\\/)?$\", \"i\") };\n};\n\n\n//# sourceURL=webpack://wouter_test/./.yarn/$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/matcher.js?");

/***/ }),

/***/ "./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/react-deps.js":
/*!****************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/react-deps.js ***!
  \****************************************************************************************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\n/* empty/unused harmony star reexport */\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n//# sourceURL=webpack://wouter_test/./.yarn/$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/react-deps.js?");

/***/ }),

/***/ "./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/use-location.js":
/*!******************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/use-location.js ***!
  \******************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export events [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"events\": () => /* binding */ events,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _react_deps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-deps.js */ \"./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/react-deps.js\");\n\n\n/**\n * History API docs @see https://developer.mozilla.org/en-US/docs/Web/API/History\n */\nconst eventPopstate = \"popstate\";\nconst eventPushState = \"pushState\";\nconst eventReplaceState = \"replaceState\";\nconst events = [eventPopstate, eventPushState, eventReplaceState];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ base = \"\" } = {}) => {\n  const [path, update] = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_0__.useState)(() => currentPathname(base)); // @see https://reactjs.org/docs/hooks-reference.html#lazy-initial-state\n  const prevPath = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_0__.useRef)(path);\n\n  (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // this function checks if the location has been changed since the\n    // last render and updates the state only when needed.\n    // unfortunately, we can't rely on `path` value here, since it can be stale,\n    // that's why we store the last pathname in a ref.\n    const checkForUpdates = () => {\n      const pathname = currentPathname(base);\n      prevPath.current !== pathname && update((prevPath.current = pathname));\n    };\n\n    events.map((e) => addEventListener(e, checkForUpdates));\n\n    // it's possible that an update has occurred between render and the effect handler,\n    // so we run additional check on mount to catch these updates. Based on:\n    // https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189\n    checkForUpdates();\n\n    return () => events.map((e) => removeEventListener(e, checkForUpdates));\n  }, [base]);\n\n  // the 2nd argument of the `useLocation` return value is a function\n  // that allows to perform a navigation.\n  //\n  // the function reference should stay the same between re-renders, so that\n  // it can be passed down as an element prop without any performance concerns.\n  const navigate = (0,_react_deps_js__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (to, { replace = false } = {}) =>\n      history[replace ? eventReplaceState : eventPushState](\n        null,\n        \"\",\n        base + to\n      ),\n    [base]\n  );\n\n  return [path, navigate];\n});\n\n// While History API does have `popstate` event, the only\n// proper way to listen to changes via `push/replaceState`\n// is to monkey-patch these methods.\n//\n// See https://stackoverflow.com/a/4585031\nif (typeof history !== \"undefined\") {\n  for (const type of [eventPushState, eventReplaceState]) {\n    const original = history[type];\n\n    history[type] = function () {\n      const result = original.apply(this, arguments);\n      const event = new Event(type);\n      event.arguments = arguments;\n\n      dispatchEvent(event);\n      return result;\n    };\n  }\n}\n\nconst currentPathname = (base, path = location.pathname) =>\n  !path.toLowerCase().indexOf(base.toLowerCase())\n    ? path.slice(base.length) || \"/\"\n    : path;\n\n\n//# sourceURL=webpack://wouter_test/./.yarn/$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/use-location.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wouter */ \"./.yarn/$$virtual/wouter-virtual-e5111b5711/0/cache/wouter-npm-2.6.0-237130b851-d80392b074.zip/node_modules/wouter/index.js\");\n\n\n\n//# sourceURL=webpack://wouter_test/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;