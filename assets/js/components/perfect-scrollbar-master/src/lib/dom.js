function div(e){var t=document.createElement("div");return t.className=e,t}const elMatches="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function matches(e,t){if(elMatches)return elMatches.call(e,t);throw new Error("No element matching method supported")}function remove(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function queryChildren(e,t){return Array.prototype.filter.call(e.children,e=>matches(e,t))}export{div,matches,remove,queryChildren};