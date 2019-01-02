/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/validationDashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toString = Object.prototype.toString;\n\nmodule.exports = function (x) {\n\tvar prototype;\n\treturn toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iai9pbmRleC5qcz8zNjQyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHtcblx0dmFyIHByb3RvdHlwZTtcblx0cmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmIChwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCksIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSkpO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/is-plain-obj/index.js\n");

/***/ }),

/***/ "./node_modules/merge-options/index.js":
/*!*********************************************!*\
  !*** ./node_modules/merge-options/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst isOptionObject = __webpack_require__(/*! is-plain-obj */ \"./node_modules/is-plain-obj/index.js\");\n\nconst hasOwnProperty = Object.prototype.hasOwnProperty;\nconst propIsEnumerable = Object.propertyIsEnumerable;\nconst defineProperty = (obj, name, value) => Object.defineProperty(obj, name, {\n\tvalue,\n\twritable: true,\n\tenumerable: true,\n\tconfigurable: true\n});\n\nconst globalThis = this;\nconst defaultMergeOpts = {\n\tconcatArrays: false\n};\n\nconst getEnumerableOwnPropertyKeys = value => {\n\tconst keys = [];\n\n\tfor (const key in value) {\n\t\tif (hasOwnProperty.call(value, key)) {\n\t\t\tkeys.push(key);\n\t\t}\n\t}\n\n\t/* istanbul ignore else  */\n\tif (Object.getOwnPropertySymbols) {\n\t\tconst symbols = Object.getOwnPropertySymbols(value);\n\n\t\tfor (let i = 0; i < symbols.length; i++) {\n\t\t\tif (propIsEnumerable.call(value, symbols[i])) {\n\t\t\t\tkeys.push(symbols[i]);\n\t\t\t}\n\t\t}\n\t}\n\n\treturn keys;\n};\n\nfunction clone(value) {\n\tif (Array.isArray(value)) {\n\t\treturn cloneArray(value);\n\t}\n\n\tif (isOptionObject(value)) {\n\t\treturn cloneOptionObject(value);\n\t}\n\n\treturn value;\n}\n\nfunction cloneArray(array) {\n\tconst result = array.slice(0, 0);\n\n\tgetEnumerableOwnPropertyKeys(array).forEach(key => {\n\t\tdefineProperty(result, key, clone(array[key]));\n\t});\n\n\treturn result;\n}\n\nfunction cloneOptionObject(obj) {\n\tconst result = Object.getPrototypeOf(obj) === null ? Object.create(null) : {};\n\n\tgetEnumerableOwnPropertyKeys(obj).forEach(key => {\n\t\tdefineProperty(result, key, clone(obj[key]));\n\t});\n\n\treturn result;\n}\n\n/**\n * @param merged {already cloned}\n * @return {cloned Object}\n */\nconst mergeKeys = (merged, source, keys, mergeOpts) => {\n\tkeys.forEach(key => {\n\t\t// Do not recurse into prototype chain of merged\n\t\tif (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {\n\t\t\tdefineProperty(merged, key, merge(merged[key], source[key], mergeOpts));\n\t\t} else {\n\t\t\tdefineProperty(merged, key, clone(source[key]));\n\t\t}\n\t});\n\n\treturn merged;\n};\n\n/**\n * @param merged {already cloned}\n * @return {cloned Object}\n *\n * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)\n */\nconst concatArrays = (merged, source, mergeOpts) => {\n\tlet result = merged.slice(0, 0);\n\tlet resultIndex = 0;\n\n\t[merged, source].forEach(array => {\n\t\tconst indices = [];\n\n\t\t// `result.concat(array)` with cloning\n\t\tfor (let k = 0; k < array.length; k++) {\n\t\t\tif (!hasOwnProperty.call(array, k)) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tindices.push(String(k));\n\n\t\t\tif (array === merged) {\n\t\t\t\t// Already cloned\n\t\t\t\tdefineProperty(result, resultIndex++, array[k]);\n\t\t\t} else {\n\t\t\t\tdefineProperty(result, resultIndex++, clone(array[k]));\n\t\t\t}\n\t\t}\n\n\t\t// Merge non-index keys\n\t\tresult = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => {\n\t\t\treturn indices.indexOf(key) === -1;\n\t\t}), mergeOpts);\n\t});\n\n\treturn result;\n};\n\n/**\n * @param merged {already cloned}\n * @return {cloned Object}\n */\nfunction merge(merged, source, mergeOpts) {\n\tif (mergeOpts.concatArrays && Array.isArray(merged) && Array.isArray(source)) {\n\t\treturn concatArrays(merged, source, mergeOpts);\n\t}\n\n\tif (!isOptionObject(source) || !isOptionObject(merged)) {\n\t\treturn clone(source);\n\t}\n\n\treturn mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), mergeOpts);\n}\n\nmodule.exports = function () {\n\tconst mergeOpts = merge(clone(defaultMergeOpts), (this !== globalThis && this) || {}, defaultMergeOpts);\n\tlet merged = {foobar: {}};\n\n\tfor (let i = 0; i < arguments.length; i++) {\n\t\tconst option = arguments[i];\n\n\t\tif (option === undefined) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tif (!isOptionObject(option)) {\n\t\t\tthrow new TypeError('`' + option + '` is not an Option Object');\n\t\t}\n\n\t\tmerged = merge(merged, {foobar: option}, mergeOpts);\n\t}\n\n\treturn merged.foobar;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWVyZ2Utb3B0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZXJnZS1vcHRpb25zL2luZGV4LmpzPzRmY2IiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgaXNPcHRpb25PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKTtcblxuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY29uc3QgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbmNvbnN0IGRlZmluZVByb3BlcnR5ID0gKG9iaiwgbmFtZSwgdmFsdWUpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcblx0dmFsdWUsXG5cdHdyaXRhYmxlOiB0cnVlLFxuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5jb25zdCBnbG9iYWxUaGlzID0gdGhpcztcbmNvbnN0IGRlZmF1bHRNZXJnZU9wdHMgPSB7XG5cdGNvbmNhdEFycmF5czogZmFsc2Vcbn07XG5cbmNvbnN0IGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eUtleXMgPSB2YWx1ZSA9PiB7XG5cdGNvbnN0IGtleXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuXHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG5cdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cblx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRjb25zdCBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh2YWx1ZSk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdGtleXMucHVzaChzeW1ib2xzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ga2V5cztcbn07XG5cbmZ1bmN0aW9uIGNsb25lKHZhbHVlKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiBjbG9uZUFycmF5KHZhbHVlKTtcblx0fVxuXG5cdGlmIChpc09wdGlvbk9iamVjdCh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gY2xvbmVPcHRpb25PYmplY3QodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbG9uZUFycmF5KGFycmF5KSB7XG5cdGNvbnN0IHJlc3VsdCA9IGFycmF5LnNsaWNlKDAsIDApO1xuXG5cdGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eUtleXMoYXJyYXkpLmZvckVhY2goa2V5ID0+IHtcblx0XHRkZWZpbmVQcm9wZXJ0eShyZXN1bHQsIGtleSwgY2xvbmUoYXJyYXlba2V5XSkpO1xuXHR9KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbG9uZU9wdGlvbk9iamVjdChvYmopIHtcblx0Y29uc3QgcmVzdWx0ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG5cblx0Z2V0RW51bWVyYWJsZU93blByb3BlcnR5S2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcblx0XHRkZWZpbmVQcm9wZXJ0eShyZXN1bHQsIGtleSwgY2xvbmUob2JqW2tleV0pKTtcblx0fSk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gbWVyZ2VkIHthbHJlYWR5IGNsb25lZH1cbiAqIEByZXR1cm4ge2Nsb25lZCBPYmplY3R9XG4gKi9cbmNvbnN0IG1lcmdlS2V5cyA9IChtZXJnZWQsIHNvdXJjZSwga2V5cywgbWVyZ2VPcHRzKSA9PiB7XG5cdGtleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdC8vIERvIG5vdCByZWN1cnNlIGludG8gcHJvdG90eXBlIGNoYWluIG9mIG1lcmdlZFxuXHRcdGlmIChrZXkgaW4gbWVyZ2VkICYmIG1lcmdlZFtrZXldICE9PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobWVyZ2VkKSkge1xuXHRcdFx0ZGVmaW5lUHJvcGVydHkobWVyZ2VkLCBrZXksIG1lcmdlKG1lcmdlZFtrZXldLCBzb3VyY2Vba2V5XSwgbWVyZ2VPcHRzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlZmluZVByb3BlcnR5KG1lcmdlZCwga2V5LCBjbG9uZShzb3VyY2Vba2V5XSkpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG1lcmdlZDtcbn07XG5cbi8qKlxuICogQHBhcmFtIG1lcmdlZCB7YWxyZWFkeSBjbG9uZWR9XG4gKiBAcmV0dXJuIHtjbG9uZWQgT2JqZWN0fVxuICpcbiAqIHNlZSBbQXJyYXkucHJvdG90eXBlLmNvbmNhdCAoIC4uLmFyZ3VtZW50cyApXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdClcbiAqL1xuY29uc3QgY29uY2F0QXJyYXlzID0gKG1lcmdlZCwgc291cmNlLCBtZXJnZU9wdHMpID0+IHtcblx0bGV0IHJlc3VsdCA9IG1lcmdlZC5zbGljZSgwLCAwKTtcblx0bGV0IHJlc3VsdEluZGV4ID0gMDtcblxuXHRbbWVyZ2VkLCBzb3VyY2VdLmZvckVhY2goYXJyYXkgPT4ge1xuXHRcdGNvbnN0IGluZGljZXMgPSBbXTtcblxuXHRcdC8vIGByZXN1bHQuY29uY2F0KGFycmF5KWAgd2l0aCBjbG9uaW5nXG5cdFx0Zm9yIChsZXQgayA9IDA7IGsgPCBhcnJheS5sZW5ndGg7IGsrKykge1xuXHRcdFx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCBrKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aW5kaWNlcy5wdXNoKFN0cmluZyhrKSk7XG5cblx0XHRcdGlmIChhcnJheSA9PT0gbWVyZ2VkKSB7XG5cdFx0XHRcdC8vIEFscmVhZHkgY2xvbmVkXG5cdFx0XHRcdGRlZmluZVByb3BlcnR5KHJlc3VsdCwgcmVzdWx0SW5kZXgrKywgYXJyYXlba10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkocmVzdWx0LCByZXN1bHRJbmRleCsrLCBjbG9uZShhcnJheVtrXSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE1lcmdlIG5vbi1pbmRleCBrZXlzXG5cdFx0cmVzdWx0ID0gbWVyZ2VLZXlzKHJlc3VsdCwgYXJyYXksIGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eUtleXMoYXJyYXkpLmZpbHRlcihrZXkgPT4ge1xuXHRcdFx0cmV0dXJuIGluZGljZXMuaW5kZXhPZihrZXkpID09PSAtMTtcblx0XHR9KSwgbWVyZ2VPcHRzKTtcblx0fSk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIG1lcmdlZCB7YWxyZWFkeSBjbG9uZWR9XG4gKiBAcmV0dXJuIHtjbG9uZWQgT2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZShtZXJnZWQsIHNvdXJjZSwgbWVyZ2VPcHRzKSB7XG5cdGlmIChtZXJnZU9wdHMuY29uY2F0QXJyYXlzICYmIEFycmF5LmlzQXJyYXkobWVyZ2VkKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblx0XHRyZXR1cm4gY29uY2F0QXJyYXlzKG1lcmdlZCwgc291cmNlLCBtZXJnZU9wdHMpO1xuXHR9XG5cblx0aWYgKCFpc09wdGlvbk9iamVjdChzb3VyY2UpIHx8ICFpc09wdGlvbk9iamVjdChtZXJnZWQpKSB7XG5cdFx0cmV0dXJuIGNsb25lKHNvdXJjZSk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VLZXlzKG1lcmdlZCwgc291cmNlLCBnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlLZXlzKHNvdXJjZSksIG1lcmdlT3B0cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBtZXJnZU9wdHMgPSBtZXJnZShjbG9uZShkZWZhdWx0TWVyZ2VPcHRzKSwgKHRoaXMgIT09IGdsb2JhbFRoaXMgJiYgdGhpcykgfHwge30sIGRlZmF1bHRNZXJnZU9wdHMpO1xuXHRsZXQgbWVyZ2VkID0ge2Zvb2Jhcjoge319O1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qgb3B0aW9uID0gYXJndW1lbnRzW2ldO1xuXG5cdFx0aWYgKG9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIWlzT3B0aW9uT2JqZWN0KG9wdGlvbikpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2AnICsgb3B0aW9uICsgJ2AgaXMgbm90IGFuIE9wdGlvbiBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRtZXJnZWQgPSBtZXJnZShtZXJnZWQsIHtmb29iYXI6IG9wdGlvbn0sIG1lcmdlT3B0cyk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkLmZvb2Jhcjtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/merge-options/index.js\n");

/***/ }),

/***/ "./src/validationDashboard.js":
/*!************************************!*\
  !*** ./src/validationDashboard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n * Validation Dashboard\r\n * Visualizes json validation reports\r\n * For definition of the format and use of this dashboard see \r\n *  https://data-cleaning.github.io/ValidatReport/\r\n * \r\n * Feel free to use under the EUPL\r\n * Questions, remarks: o.tenbosch[at]cbs.nl\r\n */\nvar mergeOptions = __webpack_require__(/*! merge-options */ \"./node_modules/merge-options/index.js\");\n\nvar _defaultOptions = {};\nvar colorScaleValues = d3.scaleOrdinal().domain([\"0\", \"1\", \"NA\"]).range([\"#FC8D59\", \"#91CF60\", \"#FFFFBF\"]);\nvar myndx, valueDim, severityDim, agentDim, valueCount, severityCount, actorDim, actorCount, all;\nvar ndx;\n\nvar validationDashboard =\n/*#__PURE__*/\nfunction () {\n  function validationDashboard(options) {\n    var _this = this;\n\n    _classCallCheck(this, validationDashboard);\n\n    this.options = mergeOptions(_defaultOptions, options);\n\n    if (\"container\" in this.options == false) {\n      console.log('container not set');\n      return;\n    }\n\n    if (\"data\" in this.options == false) {\n      console.log('data not set');\n      return;\n    }\n\n    if (d3.select(this.options.container).empty()) {\n      console.log('container not found');\n      return;\n    } // dc needs this:\n\n\n    dc.config.defaultColors(d3.schemeAccent); // Create divs for charts:\n\n    function addDiv(container, id, label) {\n      var el = d3.select(container).append(\"div\").attr(\"id\", id).append(\"div\");\n      el.append(\"strong\").text(label);\n      el.append(\"a\").classed(\"reset\", true).style(\"visibility\", \"hidden\").style(\"margin-left\", \"5px\").attr(\"href\", \"#\").text(\"reset\");\n      return el;\n    }\n\n    addDiv(this.options.container, \"divChartValue\", \"Events by value\");\n    addDiv(this.options.container, \"divChartSeverity\", \"Events by severity\");\n    addDiv(this.options.container, \"divChartActor\", \"Events by actor\");\n    addDiv(this.options.container, \"divChartAgent\", \"Events by agent\");\n    addDiv(this.options.container, \"divChartRule\", \"Events by rule\"); // Create divs for count and table:\n\n    d3.select(this.options.container).append(\"div\").attr(\"id\", \"divEventCount\").append(\"span\").classed(\"filter-count\", true).text(\"selected out of <span class='total-count'></span> records.\");\n    d3.select(this.options.container).append(\"div\").attr(\"id\", \"divTableEvents\"); // Create dc charts:\n\n    this.chartValue = dc.pieChart(\"#divChartValue\");\n    this.chartSeverity = dc.rowChart(\"#divChartSeverity\");\n    this.chartActor = dc.rowChart(\"#divChartActor\");\n    this.chartAgent = dc.rowChart(\"#divChartAgent\");\n    this.chartRule = dc.barChart('#divChartRule');\n    this.eventCount = dc.dataCount('#divEventCount');\n    this.tableEvents = dc.dataTable('#divTableEvents'); // Add callbacks for reset buttons:\n\n    d3.select(\"#divChartValue a\").on(\"click\", function () {\n      return _this.chartValue.filter(null).redrawGroup();\n    });\n    d3.select(\"#divChartSeverity a\").on(\"click\", function () {\n      return _this.chartSeverity.filter(null).redrawGroup();\n    });\n    d3.select(\"#divChartActor a\").on(\"click\", function () {\n      return _this.chartActor.filter(null).redrawGroup();\n    });\n    d3.select(\"#divChartAgent a\").on(\"click\", function () {\n      return _this.chartAgent.filter(null).redrawGroup();\n    });\n    d3.select(\"#divChartRule a\").on(\"click\", function () {\n      return _this.chartRule.filter(null).redrawGroup();\n    }); // set crossfilter dimensions and counts:\n\n    ndx = crossfilter(this.options.data);\n    idDim = ndx.dimension(function (d) {\n      return d.id;\n    });\n    valueDim = ndx.dimension(function (d) {\n      return d.value;\n    });\n    severityDim = ndx.dimension(function (d) {\n      return d.rule.severity;\n    });\n    agentDim = ndx.dimension(function (d) {\n      return d.event.agent;\n    });\n    actorDim = ndx.dimension(function (d) {\n      return d.event.actor;\n    });\n    ruleDim = ndx.dimension(function (d) {\n      return \"id\" in d.rule ? d.rule.id : _this._expressionShort(d.rule.expression);\n    });\n    valueCount = valueDim.group().reduceCount();\n    severityCount = severityDim.group().reduceCount();\n    agentCount = agentDim.group().reduceCount();\n    actorCount = actorDim.group().reduceCount();\n    ruleCount = ruleDim.group().reduceCount();\n    all = ndx.groupAll(); // Events by Value:\n\n    this.chartValue.width(200).height(170).dimension(valueDim).group(valueCount).controlsUseVisibility(true).innerRadius(0).label(function (d) {\n      return d.key == 0 ? \"fails\" : d.key == 1 ? \"passes\" : d.key;\n    }).colors(function (d) {\n      return colorScaleValues(d);\n    }); // Events by severity:\n\n    this.chartSeverity.width(200).height(200).dimension(severityDim).group(severityCount).controlsUseVisibility(true).elasticX(true).ordinalColors(['#3182bd']).label(function (d) {\n      if (_this.chartSeverity.hasFilter() && !_this.chartSeverity.hasFilter(d.key)) {\n        return d.key + ' (0%)';\n      }\n\n      var label = d.key;\n\n      if (all.value()) {\n        label += ' (' + Math.floor(d.value / all.value() * 100) + '%)';\n      }\n\n      return label;\n    }).legend(dc.legend()); // Events by actor:\n\n    this.chartActor.width(250).height(200).dimension(actorDim).group(actorCount).controlsUseVisibility(true).elasticX(true).ordinalColors(['#3182bd']).renderTitleLabel(false); // Events by agent:\n\n    this.chartAgent.width(250).height(200).dimension(agentDim).group(agentCount).controlsUseVisibility(true).ordinalColors(['#3182bd']).elasticX(true); // Events by rule:\n\n    this.chartRule.width(800).height(300).x(d3.scaleBand()).xUnits(dc.units.ordinal).brushOn(true).xAxisLabel('Rules').yAxisLabel('Count').dimension(ruleDim).barPadding(0.1).outerPadding(0.05).group(ruleCount).title(function (d) {\n      return d.key + \"\\n\" + d.value;\n    }).controlsUseVisibility(true).elasticY(true).ordinalColors(['#3182bd']).xAxis().tickFormat(\"\"); // Events count:\n\n    this.eventCount.dimension(ndx).group(all).html({\n      some: '<strong>%filter-count</strong> selected out of <strong>%total-count</strong> events' + ' | <a href=\\'javascript:dc.filterAll(); dc.renderAll();\\'>Reset All</a>',\n      all: 'All events selected. Click on the graphs to apply filters.'\n    }); // Events grid:\n\n    this.tableEvents.dimension(idDim).group(function (d) {\n      return d.id;\n    }).showGroups(false).columns(['id', 'value', {\n      label: 'time',\n      format: function format(d) {\n        return d.event.time;\n      }\n    }, {\n      label: 'severity',\n      format: function format(d) {\n        return d.rule.severity == \"error\" ? \"E\" : d.rule.severity == \"information\" ? \"I\" : \"W\";\n      }\n    }, {\n      label: 'language',\n      format: function format(d) {\n        return d.rule.language;\n      }\n    }, {\n      label: 'change',\n      format: function format(d) {\n        return d.rule.change;\n      }\n    }, {\n      label: 'actor',\n      format: function format(d) {\n        return d.event.actor;\n      }\n    }, {\n      label: 'agent',\n      format: function format(d) {\n        return d.event.agent;\n      }\n    }, {\n      label: 'trigger',\n      format: function format(d) {\n        return d.event.trigger;\n      }\n    }]).on(\"renderlet\", function (chart) {\n      chart.selectAll('tr.dc-table-row').style('background-color', function (d) {\n        return colorScaleValues(d.value);\n      });\n    });\n    dc.renderAll();\n    return this;\n  }\n  /*_buildRuleMap(data) {\r\n  \tfor (var i=0; i<data.length; i++) {\r\n  \t\tvar rule = data[i].rule;\r\n  \t\tvar exprShort = this._expressionShort(rule.expression)\r\n  \t\tif (exprShort in ruleMap) continue;\r\n  \t\truleMap[exprShort] = rule.description;\r\n  \t}\r\n  \treturn(ruleMap)\r\n  }*/\n\n\n  _createClass(validationDashboard, [{\n    key: \"_expressionShort\",\n    value: function _expressionShort(expression) {\n      return expression.substr(0, 160);\n    }\n  }]);\n\n  return validationDashboard;\n}(); // Assign to window for simplicity:\n\n\nwindow.validationDashboard = validationDashboard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmFsaWRhdGlvbkRhc2hib2FyZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92YWxpZGF0aW9uRGFzaGJvYXJkLmpzP2U3YjMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVmFsaWRhdGlvbiBEYXNoYm9hcmRcclxuICogVmlzdWFsaXplcyBqc29uIHZhbGlkYXRpb24gcmVwb3J0c1xyXG4gKiBGb3IgZGVmaW5pdGlvbiBvZiB0aGUgZm9ybWF0IGFuZCB1c2Ugb2YgdGhpcyBkYXNoYm9hcmQgc2VlIFxyXG4gKiAgaHR0cHM6Ly9kYXRhLWNsZWFuaW5nLmdpdGh1Yi5pby9WYWxpZGF0UmVwb3J0L1xyXG4gKiBcclxuICogRmVlbCBmcmVlIHRvIHVzZSB1bmRlciB0aGUgRVVQTFxyXG4gKiBRdWVzdGlvbnMsIHJlbWFya3M6IG8udGVuYm9zY2hbYXRdY2JzLm5sXHJcbiAqL1xyXG5jb25zdCBtZXJnZU9wdGlvbnMgPSByZXF1aXJlKCdtZXJnZS1vcHRpb25zJylcclxuXHJcbmxldCBfZGVmYXVsdE9wdGlvbnMgPSB7fVxyXG5sZXQgY29sb3JTY2FsZVZhbHVlcyA9IGQzLnNjYWxlT3JkaW5hbCgpLmRvbWFpbihbXCIwXCIsIFwiMVwiLCBcIk5BXCJdKS5yYW5nZShbXCIjRkM4RDU5XCIsIFwiIzkxQ0Y2MFwiLCBcIiNGRkZGQkZcIl0pXHJcbmxldCBteW5keCwgdmFsdWVEaW0sIHNldmVyaXR5RGltLCBhZ2VudERpbSwgdmFsdWVDb3VudCwgc2V2ZXJpdHlDb3VudCwgYWN0b3JEaW0sIGFjdG9yQ291bnQsIGFsbFxyXG5sZXQgbmR4XHJcblxyXG5jbGFzcyB2YWxpZGF0aW9uRGFzaGJvYXJkIHtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKF9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcclxuXHRcdGlmIChcImNvbnRhaW5lclwiIGluIHRoaXMub3B0aW9ucyA9PSBmYWxzZSkge2NvbnNvbGUubG9nKCdjb250YWluZXIgbm90IHNldCcpOyByZXR1cm47IH1cclxuXHRcdGlmIChcImRhdGFcIiBpbiB0aGlzLm9wdGlvbnMgPT0gZmFsc2UpIHtjb25zb2xlLmxvZygnZGF0YSBub3Qgc2V0Jyk7IHJldHVybjsgfVxyXG5cdFx0aWYgKGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuY29udGFpbmVyKS5lbXB0eSgpKSB7Y29uc29sZS5sb2coJ2NvbnRhaW5lciBub3QgZm91bmQnKTsgcmV0dXJuOyB9XHJcblx0XHRcclxuXHRcdC8vIGRjIG5lZWRzIHRoaXM6XHJcblx0XHRkYy5jb25maWcuZGVmYXVsdENvbG9ycyhkMy5zY2hlbWVBY2NlbnQpXHJcblx0XHRcclxuXHRcdC8vIENyZWF0ZSBkaXZzIGZvciBjaGFydHM6XHJcblx0XHRmdW5jdGlvbiBhZGREaXYoY29udGFpbmVyLCBpZCwgbGFiZWwpIHtcclxuXHRcdFx0dmFyIGVsID0gZDMuc2VsZWN0KGNvbnRhaW5lcikuYXBwZW5kKFwiZGl2XCIpLmF0dHIoXCJpZFwiLCBpZCkuYXBwZW5kKFwiZGl2XCIpXHJcblx0XHRcdGVsLmFwcGVuZChcInN0cm9uZ1wiKS50ZXh0KGxhYmVsKVxyXG5cdFx0XHRlbC5hcHBlbmQoXCJhXCIpLmNsYXNzZWQoXCJyZXNldFwiLCB0cnVlKS5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIikuc3R5bGUoXCJtYXJnaW4tbGVmdFwiLCBcIjVweFwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIikudGV4dChcInJlc2V0XCIpXHJcblx0XHRcdHJldHVybihlbClcclxuXHRcdH1cclxuXHRcdGFkZERpdih0aGlzLm9wdGlvbnMuY29udGFpbmVyLCBcImRpdkNoYXJ0VmFsdWVcIiwgXCJFdmVudHMgYnkgdmFsdWVcIilcclxuXHRcdGFkZERpdih0aGlzLm9wdGlvbnMuY29udGFpbmVyLCBcImRpdkNoYXJ0U2V2ZXJpdHlcIiwgXCJFdmVudHMgYnkgc2V2ZXJpdHlcIilcclxuXHRcdGFkZERpdih0aGlzLm9wdGlvbnMuY29udGFpbmVyLCBcImRpdkNoYXJ0QWN0b3JcIiwgXCJFdmVudHMgYnkgYWN0b3JcIilcclxuXHRcdGFkZERpdih0aGlzLm9wdGlvbnMuY29udGFpbmVyLCBcImRpdkNoYXJ0QWdlbnRcIiwgXCJFdmVudHMgYnkgYWdlbnRcIilcclxuXHRcdGFkZERpdih0aGlzLm9wdGlvbnMuY29udGFpbmVyLCBcImRpdkNoYXJ0UnVsZVwiLCBcIkV2ZW50cyBieSBydWxlXCIpXHJcblx0XHRcclxuXHRcdC8vIENyZWF0ZSBkaXZzIGZvciBjb3VudCBhbmQgdGFibGU6XHJcblx0XHRkMy5zZWxlY3QodGhpcy5vcHRpb25zLmNvbnRhaW5lcikuYXBwZW5kKFwiZGl2XCIpLmF0dHIoXCJpZFwiLCBcImRpdkV2ZW50Q291bnRcIilcclxuXHRcdFx0LmFwcGVuZChcInNwYW5cIikuY2xhc3NlZChcImZpbHRlci1jb3VudFwiLCB0cnVlKVxyXG5cdFx0XHQudGV4dChcInNlbGVjdGVkIG91dCBvZiA8c3BhbiBjbGFzcz0ndG90YWwtY291bnQnPjwvc3Bhbj4gcmVjb3Jkcy5cIilcclxuXHRcdGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuY29udGFpbmVyKS5hcHBlbmQoXCJkaXZcIikuYXR0cihcImlkXCIsIFwiZGl2VGFibGVFdmVudHNcIilcclxuXHJcblx0XHQvLyBDcmVhdGUgZGMgY2hhcnRzOlxyXG5cdFx0dGhpcy5jaGFydFZhbHVlID0gZGMucGllQ2hhcnQoXCIjZGl2Q2hhcnRWYWx1ZVwiKVxyXG5cdFx0dGhpcy5jaGFydFNldmVyaXR5ID0gZGMucm93Q2hhcnQoXCIjZGl2Q2hhcnRTZXZlcml0eVwiKVxyXG5cdFx0dGhpcy5jaGFydEFjdG9yID0gZGMucm93Q2hhcnQoXCIjZGl2Q2hhcnRBY3RvclwiKVxyXG5cdFx0dGhpcy5jaGFydEFnZW50ID0gZGMucm93Q2hhcnQoXCIjZGl2Q2hhcnRBZ2VudFwiKVxyXG5cdFx0dGhpcy5jaGFydFJ1bGUgPSBkYy5iYXJDaGFydCgnI2RpdkNoYXJ0UnVsZScpXHJcblx0XHR0aGlzLmV2ZW50Q291bnQgPSBkYy5kYXRhQ291bnQoJyNkaXZFdmVudENvdW50JylcclxuXHRcdHRoaXMudGFibGVFdmVudHMgPSBkYy5kYXRhVGFibGUoJyNkaXZUYWJsZUV2ZW50cycpXHJcblxyXG5cdFx0Ly8gQWRkIGNhbGxiYWNrcyBmb3IgcmVzZXQgYnV0dG9uczpcclxuXHRcdGQzLnNlbGVjdChcIiNkaXZDaGFydFZhbHVlIGFcIikub24oXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNoYXJ0VmFsdWUuZmlsdGVyKG51bGwpLnJlZHJhd0dyb3VwKCkgKVxyXG5cdFx0ZDMuc2VsZWN0KFwiI2RpdkNoYXJ0U2V2ZXJpdHkgYVwiKS5vbihcImNsaWNrXCIsICgpID0+IHRoaXMuY2hhcnRTZXZlcml0eS5maWx0ZXIobnVsbCkucmVkcmF3R3JvdXAoKSApXHJcblx0XHRkMy5zZWxlY3QoXCIjZGl2Q2hhcnRBY3RvciBhXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jaGFydEFjdG9yLmZpbHRlcihudWxsKS5yZWRyYXdHcm91cCgpIClcclxuXHRcdGQzLnNlbGVjdChcIiNkaXZDaGFydEFnZW50IGFcIikub24oXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNoYXJ0QWdlbnQuZmlsdGVyKG51bGwpLnJlZHJhd0dyb3VwKCkgKVxyXG5cdFx0ZDMuc2VsZWN0KFwiI2RpdkNoYXJ0UnVsZSBhXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jaGFydFJ1bGUuZmlsdGVyKG51bGwpLnJlZHJhd0dyb3VwKCkgKVxyXG5cclxuXHRcdC8vIHNldCBjcm9zc2ZpbHRlciBkaW1lbnNpb25zIGFuZCBjb3VudHM6XHJcblx0XHRuZHggPSBjcm9zc2ZpbHRlcih0aGlzLm9wdGlvbnMuZGF0YSlcclxuXHRcdFxyXG5cdFx0aWREaW0gPSBuZHguZGltZW5zaW9uKGQgPT4gZC5pZClcclxuXHRcdHZhbHVlRGltID0gbmR4LmRpbWVuc2lvbihkID0+IGQudmFsdWUpXHJcblx0XHRzZXZlcml0eURpbSA9IG5keC5kaW1lbnNpb24oZCA9PiBkLnJ1bGUuc2V2ZXJpdHkpXHJcblx0XHRhZ2VudERpbSA9IG5keC5kaW1lbnNpb24oZCA9PiBkLmV2ZW50LmFnZW50KVxyXG5cdFx0YWN0b3JEaW0gPSBuZHguZGltZW5zaW9uKGQgPT4gZC5ldmVudC5hY3RvcilcclxuXHRcdHJ1bGVEaW0gPSBuZHguZGltZW5zaW9uKGQgPT4gXCJpZFwiIGluIGQucnVsZSA/IGQucnVsZS5pZCA6IHRoaXMuX2V4cHJlc3Npb25TaG9ydChkLnJ1bGUuZXhwcmVzc2lvbikpXHJcblx0XHRcclxuXHRcdHZhbHVlQ291bnQgPSB2YWx1ZURpbS5ncm91cCgpLnJlZHVjZUNvdW50KClcclxuXHRcdHNldmVyaXR5Q291bnQgPSBzZXZlcml0eURpbS5ncm91cCgpLnJlZHVjZUNvdW50KClcclxuXHRcdGFnZW50Q291bnQgPSBhZ2VudERpbS5ncm91cCgpLnJlZHVjZUNvdW50KClcclxuXHRcdGFjdG9yQ291bnQgPSBhY3RvckRpbS5ncm91cCgpLnJlZHVjZUNvdW50KClcclxuXHRcdHJ1bGVDb3VudCA9IHJ1bGVEaW0uZ3JvdXAoKS5yZWR1Y2VDb3VudCgpXHJcblx0XHRhbGwgPSBuZHguZ3JvdXBBbGwoKVxyXG5cclxuXHRcdC8vIEV2ZW50cyBieSBWYWx1ZTpcclxuXHRcdHRoaXMuY2hhcnRWYWx1ZVxyXG5cdFx0LndpZHRoKDIwMCkuaGVpZ2h0KDE3MClcclxuXHRcdC5kaW1lbnNpb24odmFsdWVEaW0pXHJcblx0XHQuZ3JvdXAodmFsdWVDb3VudClcclxuXHRcdC5jb250cm9sc1VzZVZpc2liaWxpdHkodHJ1ZSlcclxuXHRcdC5pbm5lclJhZGl1cygwKVxyXG5cdFx0LmxhYmVsKGQgPT4gZC5rZXkgPT0gMCA/IFwiZmFpbHNcIiA6IChkLmtleSA9PSAxID8gXCJwYXNzZXNcIiA6IGQua2V5KSlcclxuXHRcdC5jb2xvcnMoZCA9PiBjb2xvclNjYWxlVmFsdWVzKGQpKVxyXG5cclxuXHRcdC8vIEV2ZW50cyBieSBzZXZlcml0eTpcclxuXHRcdHRoaXMuY2hhcnRTZXZlcml0eVxyXG5cdFx0LndpZHRoKDIwMCkuaGVpZ2h0KDIwMClcclxuXHRcdC5kaW1lbnNpb24oc2V2ZXJpdHlEaW0pXHJcblx0XHQuZ3JvdXAoc2V2ZXJpdHlDb3VudClcclxuXHRcdC5jb250cm9sc1VzZVZpc2liaWxpdHkodHJ1ZSlcclxuXHRcdC5lbGFzdGljWCh0cnVlKVxyXG5cdFx0Lm9yZGluYWxDb2xvcnMoWycjMzE4MmJkJ10pXHJcblx0XHQubGFiZWwoZCA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmNoYXJ0U2V2ZXJpdHkuaGFzRmlsdGVyKCkgJiYgIXRoaXMuY2hhcnRTZXZlcml0eS5oYXNGaWx0ZXIoZC5rZXkpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGQua2V5ICsgJyAoMCUpJztcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgbGFiZWwgPSBkLmtleTtcclxuXHRcdFx0aWYgKGFsbC52YWx1ZSgpKSB7XHJcblx0XHRcdFx0bGFiZWwgKz0gJyAoJyArIE1hdGguZmxvb3IoZC52YWx1ZSAvIGFsbC52YWx1ZSgpICogMTAwKSArICclKSc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGxhYmVsO1xyXG5cdFx0fSlcclxuXHRcdC5sZWdlbmQoZGMubGVnZW5kKCkpO1xyXG5cclxuXHRcdC8vIEV2ZW50cyBieSBhY3RvcjpcclxuXHRcdHRoaXMuY2hhcnRBY3RvclxyXG5cdFx0LndpZHRoKDI1MCkuaGVpZ2h0KDIwMClcclxuXHRcdC5kaW1lbnNpb24oYWN0b3JEaW0pXHJcblx0XHQuZ3JvdXAoYWN0b3JDb3VudClcclxuXHRcdC5jb250cm9sc1VzZVZpc2liaWxpdHkodHJ1ZSlcclxuXHRcdC5lbGFzdGljWCh0cnVlKVxyXG5cdFx0Lm9yZGluYWxDb2xvcnMoWycjMzE4MmJkJ10pXHJcblx0XHQucmVuZGVyVGl0bGVMYWJlbChmYWxzZSk7XHJcblxyXG5cdFx0Ly8gRXZlbnRzIGJ5IGFnZW50OlxyXG5cdFx0dGhpcy5jaGFydEFnZW50XHJcblx0XHQud2lkdGgoMjUwKS5oZWlnaHQoMjAwKVxyXG5cdFx0LmRpbWVuc2lvbihhZ2VudERpbSlcclxuXHRcdC5ncm91cChhZ2VudENvdW50KVxyXG5cdFx0LmNvbnRyb2xzVXNlVmlzaWJpbGl0eSh0cnVlKVxyXG5cdFx0Lm9yZGluYWxDb2xvcnMoWycjMzE4MmJkJ10pXHJcblx0XHQuZWxhc3RpY1godHJ1ZSk7XHJcblx0XHRcclxuXHRcdC8vIEV2ZW50cyBieSBydWxlOlxyXG5cdFx0dGhpcy5jaGFydFJ1bGVcclxuXHRcdC53aWR0aCg4MDApXHJcblx0XHQuaGVpZ2h0KDMwMClcclxuXHRcdC54KGQzLnNjYWxlQmFuZCgpKVxyXG5cdFx0LnhVbml0cyhkYy51bml0cy5vcmRpbmFsKVxyXG5cdFx0LmJydXNoT24odHJ1ZSlcclxuXHRcdC54QXhpc0xhYmVsKCdSdWxlcycpXHJcblx0XHQueUF4aXNMYWJlbCgnQ291bnQnKVxyXG5cdFx0LmRpbWVuc2lvbihydWxlRGltKVxyXG5cdFx0LmJhclBhZGRpbmcoMC4xKVxyXG5cdFx0Lm91dGVyUGFkZGluZygwLjA1KVxyXG5cdFx0Lmdyb3VwKHJ1bGVDb3VudClcclxuXHRcdC50aXRsZSggZCA9PiBkLmtleSArIFwiXFxuXCIgKyBkLnZhbHVlKVxyXG5cdFx0LmNvbnRyb2xzVXNlVmlzaWJpbGl0eSh0cnVlKVxyXG5cdFx0LmVsYXN0aWNZKHRydWUpXHJcblx0XHQub3JkaW5hbENvbG9ycyhbJyMzMTgyYmQnXSlcclxuXHRcdC54QXhpcygpLnRpY2tGb3JtYXQoXCJcIik7XHJcblxyXG5cdFx0Ly8gRXZlbnRzIGNvdW50OlxyXG5cdFx0dGhpcy5ldmVudENvdW50XHJcblx0XHQuZGltZW5zaW9uKG5keClcclxuXHRcdC5ncm91cChhbGwpXHJcblx0XHQuaHRtbCh7XHJcblx0XHRcdHNvbWU6ICc8c3Ryb25nPiVmaWx0ZXItY291bnQ8L3N0cm9uZz4gc2VsZWN0ZWQgb3V0IG9mIDxzdHJvbmc+JXRvdGFsLWNvdW50PC9zdHJvbmc+IGV2ZW50cycgK1xyXG5cdFx0XHQnIHwgPGEgaHJlZj1cXCdqYXZhc2NyaXB0OmRjLmZpbHRlckFsbCgpOyBkYy5yZW5kZXJBbGwoKTtcXCc+UmVzZXQgQWxsPC9hPicsXHJcblx0XHRcdGFsbDogJ0FsbCBldmVudHMgc2VsZWN0ZWQuIENsaWNrIG9uIHRoZSBncmFwaHMgdG8gYXBwbHkgZmlsdGVycy4nXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBFdmVudHMgZ3JpZDpcclxuXHRcdHRoaXMudGFibGVFdmVudHNcclxuXHRcdC5kaW1lbnNpb24oaWREaW0pXHJcblx0XHQuZ3JvdXAoZCA9PiBkLmlkKVxyXG5cdFx0LnNob3dHcm91cHMoZmFsc2UpXHJcblx0XHQuY29sdW1ucyhbXHJcblx0XHRcdFx0J2lkJywgJ3ZhbHVlJywge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICd0aW1lJyxcclxuXHRcdFx0XHRcdGZvcm1hdDogZCA9PiBkLmV2ZW50LnRpbWVcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRsYWJlbDogJ3NldmVyaXR5JyxcclxuXHRcdFx0XHRcdGZvcm1hdDogZCA9PiBkLnJ1bGUuc2V2ZXJpdHkgPT0gXCJlcnJvclwiID8gXCJFXCIgOiAoZC5ydWxlLnNldmVyaXR5ID09IFwiaW5mb3JtYXRpb25cIiA/IFwiSVwiIDogXCJXXCIpXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdsYW5ndWFnZScsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IGQgPT4gZC5ydWxlLmxhbmd1YWdlXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdjaGFuZ2UnLFxyXG5cdFx0XHRcdFx0Zm9ybWF0OiBkID0+IGQucnVsZS5jaGFuZ2VcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRsYWJlbDogJ2FjdG9yJyxcclxuXHRcdFx0XHRcdGZvcm1hdDogZCA9PiBkLmV2ZW50LmFjdG9yXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdhZ2VudCcsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IGQgPT4gZC5ldmVudC5hZ2VudFxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGxhYmVsOiAndHJpZ2dlcicsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IGQgPT4gZC5ldmVudC50cmlnZ2VyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdKVxyXG5cdFx0Lm9uKFwicmVuZGVybGV0XCIsIGZ1bmN0aW9uIChjaGFydCkge1xyXG5cdFx0XHRjaGFydC5zZWxlY3RBbGwoJ3RyLmRjLXRhYmxlLXJvdycpLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgZnVuY3Rpb24gKGQpIHtcclxuXHRcdFx0XHRyZXR1cm4gY29sb3JTY2FsZVZhbHVlcyhkLnZhbHVlKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHJcblx0XHRkYy5yZW5kZXJBbGwoKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuKHRoaXMpXHJcblx0fVxyXG5cdFxyXG5cdC8qX2J1aWxkUnVsZU1hcChkYXRhKSB7XHJcblx0XHRmb3IgKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgcnVsZSA9IGRhdGFbaV0ucnVsZTtcclxuXHRcdFx0dmFyIGV4cHJTaG9ydCA9IHRoaXMuX2V4cHJlc3Npb25TaG9ydChydWxlLmV4cHJlc3Npb24pXHJcblx0XHRcdGlmIChleHByU2hvcnQgaW4gcnVsZU1hcCkgY29udGludWU7XHJcblx0XHRcdHJ1bGVNYXBbZXhwclNob3J0XSA9IHJ1bGUuZGVzY3JpcHRpb247XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ocnVsZU1hcClcclxuXHR9Ki9cclxuXHJcblx0X2V4cHJlc3Npb25TaG9ydChleHByZXNzaW9uKSB7XHJcblx0XHRyZXR1cm4gKGV4cHJlc3Npb24uc3Vic3RyKDAsIDE2MCkpXHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4vLyBBc3NpZ24gdG8gd2luZG93IGZvciBzaW1wbGljaXR5OlxyXG53aW5kb3cudmFsaWRhdGlvbkRhc2hib2FyZCA9IHZhbGlkYXRpb25EYXNoYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBU0E7QUFDQTtBQVFBO0FBWUE7QUFBQTtBQUNBO0FBTUE7QUFJQTtBQUVBO0FBSEE7QUFDQTtBQU1BO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/validationDashboard.js\n");

/***/ })

/******/ });