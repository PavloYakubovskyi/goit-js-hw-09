!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("6JpON");function u(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.currentTarget.elements.delay.value),r=Number(n.currentTarget.elements.step.value),o=Number(n.currentTarget.elements.amount.value),a=1;a<=o;a+=1)u(a,t).then((function(n){var t=n.position,r=n.delay;return e(i).Notify.success("Fullfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.position,r=n.delay;return e(i).Notify.failure("Rejected promise ".concat(t," in ").concat(r,"ms"))})),t+=r}))}();
//# sourceMappingURL=03-promises.8ce8a638.js.map
