/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Contact = __webpack_require__(/*! ./models/contact.js */ \"./src/models/contact.js\");\nconst { addContact } = __webpack_require__(/*! ./helpers/helperFunctions.js */ \"./src/helpers/helperFunctions.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Form\n  const form = document.querySelector(\"#form\");\n  // Contacts\n  const contactsElement = document.querySelector(\"#contacts\");\n\n  form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    const contact = new Contact(\n      this.name.value,\n      this.relationship.value,\n      this.phoneNumber.value,\n      this.email.value\n    );\n    addContact(contact, contactsElement);\n    this.reset();\n  });\n\n  form.deleteButton.addEventListener(\"click\", function () {\n    contactsElement.innerHTML = \"\";\n  });\n});\n\n\n//# sourceURL=webpack://homework/./src/app.js?");

/***/ }),

/***/ "./src/helpers/helperFunctions.js":
/*!****************************************!*\
  !*** ./src/helpers/helperFunctions.js ***!
  \****************************************/
/***/ ((module) => {

eval("function addContact(contact, contactsElement) {\n    const li = document.createElement('li')\n    Object.values(contact).forEach(item => {\n      li.appendChild(addDivItem(item));\n    });\n    contactsElement.appendChild(li);\n  }\n  \n  function addDivItem(text) {\n    const newElement = document.createElement(\"div\");\n    newElement.textContent = text;\n    return newElement;\n  }\n\n  module.exports = {addContact, addDivItem}\n\n//# sourceURL=webpack://homework/./src/helpers/helperFunctions.js?");

/***/ }),

/***/ "./src/models/contact.js":
/*!*******************************!*\
  !*** ./src/models/contact.js ***!
  \*******************************/
/***/ ((module) => {

eval("const Contact = function (name, relationship, phoneNumber, email) {\n    this.name = name;\n    this.relationship = relationship;\n    this.phoneNumber = phoneNumber;\n    this.email = email;\n}\n\nmodule.exports = Contact;\n\n\n//# sourceURL=webpack://homework/./src/models/contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;