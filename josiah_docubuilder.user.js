// ==UserScript==
// @name        Docubuilder
// @namespace   Editors
// @match       *://*/*
// @grant       none
// @version     1.2b
// @author      Josiah
// @description Josiah's DocuBuilder builds anything on the current document. This also works on HTML files!
// ==/UserScript==

function is(bool, ift, iff) {
     return bool ? ift : iff;
}



console.log("Starting to make builder's button so hang on!")
function buildermain() {
  tobuild = prompt("Insert any valid HTML element, cancel or input nothing and a tab will open with a list of HTML elements.")
  if (tobuild == '' || tobuild == null) {
    window.open("https://developer.mozilla.org/en-US/docs/Web/HTML/Element")
  } else {
    mynew = document.createElement(tobuild)
    myhtml = prompt("Text to display...")
    mynew.innerHTML = is(!(myhtml == null || myhtml == ''), myhtml, "Something")
    document.body.insertBefore(mynew, document.body.lastChild)
    alert("Done! Check the bottom of the page!")
  }
}
const builderbutton = document.createElement('button')
builderbutton.onClick = "buildermain()"
builderbutton.innerHTML = "Start building some stuff!"
document.body.insertBefore(builderbutton, document.body.firstChild)
