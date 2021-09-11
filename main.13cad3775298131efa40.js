(()=>{"use strict";var n={757:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(476),a=t.n(o)()((function(n){return n[1]}));a.push([n.id,".box{height:100px;width:100px;min-width:0;font-size:50px;display:flex;justify-content:center;align-items:center}\n",""]);const c=a},476:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var r=0;r<n.length;r++){var l=[].concat(n[r]);o&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},892:(n,e,t)=>{var o,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),c=[];function i(n){for(var e=-1,t=0;t<c.length;t++)if(c[t].identifier===n){e=t;break}return e}function r(n,e){for(var t={},o=[],a=0;a<n.length;a++){var r=n[a],l=e.base?r[0]+e.base:r[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=i(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:u,updater:y(f,e),references:1}),o.push(u)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var c=t.nc;c&&(o.nonce=c)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function d(n,e,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,a);else{var c=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(c,i[e]):n.appendChild(c)}}function f(n,e,t){var o=t.css,a=t.media,c=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var v=null,m=0;function y(n,e){var t,o,a;if(e.singleton){var c=m++;t=v||(v=l(e)),o=d.bind(null,t,c,!1),a=d.bind(null,t,c,!0)}else t=l(e),o=f.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=r(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var a=i(t[o]);c[a].references--}for(var l=r(n,e),s=0;s<t.length;s++){var u=i(t[s]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}t=l}}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var c=e[o]={id:o,exports:{}};return n[o](c,c.exports,t),c.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(892),e=t.n(n),o=t(757);function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,e,t){return e&&c(n.prototype,e),t&&c(n,t),n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var l=function n(e){var t=e.name,o=e.symbol;a(this,n),this.name=t,this.symbol=o},s=function n(){a(this,n)};r(s,"n",0),r(s,"nextPlayerIndex",0),r(s,"players",[]),r(s,"blocks",[]);var u="new-game-btn",d="board-length-select",f="players-info",v="player-info",m="add-user-info-btn",y="remove-user-info-btn",p="game-start-btn",h="board",g="game-info",b="players",x="end-game-popup",k="go-to-top-btn",P="retry-btn",w=function(){function n(){a(this,n)}return i(n,null,[{key:"topPage",value:function(){document.querySelector("body").innerHTML='\n            <div class="vh-100 d-flex justify-content-center">\n                <div class=" d-flex align-self-center">\n                    <button id="'.concat(u,'" class="btn btn-primary">new Game</button>\n                </div>\n            </div>\n        ')}},{key:"gameSettingPage",value:function(){document.querySelector("body").innerHTML='\n        <section class="container d-block justify-content-center">\n            <div class="col-md-6 my-5 m-auto">\n                <h1>Game Setting</h1>\n            </div>\n            <div class="col-md-6 shadow my-5 p-3 rounded m-auto">\n                \n\n                <h2 >Length of the Board</h2>\n\n                <div class="mt-3 ">\n                    '.concat(function(){for(var n='\n            <select id="'.concat(d,'" class="p-2 text-2vw form-select" >'),e=3;e<=6;e++)n+='\n                <option class="p-3 text-2vw" value="'.concat(e,'">').concat(e,"</option>");return n+"\n            </select>\n            "}(),'\n                </div>\n\n                <h2 class="mt-2">Players Info</h2>\n\n                <div id="').concat(f,'">\n                    ').concat(L.form(!1),"\n                    ").concat(L.form(!1),'\n                </div>\n\n                <div class="d-flex justify-content-center mt-3">\n                    <i id="').concat(m,'" class="fas fa-plus-circle fa-2x text-info"></i>\n                </div>\n                \n\n                <div class="d-flex justify-content-end">\n                    <button id="').concat(p,'"class="btn btn-primary">Game Start</button>\n                </div>\n\n            </div>\n        </section>\n\n        ')}},{key:"gamePage",value:function(){document.querySelector("body").innerHTML='\n        <section id="'.concat(h,'"></section>\n        <section id="').concat(g,'"></section>\n        <section id="').concat(b,'" class="mt-5"></section>\n        '),I.set(),E.set()}},{key:"endGamePopUp",value:function(n){var e=document.querySelector("body");e.classList.add("position-relative"),e.innerHTML+='\n        <div id="'.concat(x,'" class="position-absolute top-50 start-50 translate-middle card shadow" >\n            <div class="card-body">\n                <h2 class="card-title">').concat(n?n.name:"unknown",' is the winner!!!🎉</h2>\n\n                <div class="mt-3">\n                    <button id="').concat(k,'" class="btn btn-info">Got to Top</button>\n                    <button id="').concat(P,'" class="btn btn-info">Retry</button>\n                </div>\n            </div>\n        </div>\n        ')}}]),n}(),I=function(){function n(){a(this,n)}return i(n,null,[{key:"set",value:function(){for(var n='\n        <div class="mt-5">\n        ',e=0;e<s.blocks.length;e++){for(var t='\n            <div class="d-flex justify-content-center">\n            ',o=0;o<s.blocks[e].length;o++){var a=s.blocks[e][o];t+='\n                <div id="'.concat(e,"-").concat(o,'" class="bg-white border box">\n                    ').concat(a,"\n                </div>")}n+=t+="\n            </div>\n            "}n+="\n        </div>\n        ",document.getElementById(h).innerHTML=n}},{key:"displayGameInfo",value:function(n){document.getElementById(g).innerHTML='\n        <h4 class="d-flex justify-content-center">'.concat(n,"</h4>\n        ")}}]),n}(),E=function(){function n(){a(this,n)}return i(n,null,[{key:"set",value:function(){for(var n='\n        <div class="container ">\n            <div class="row justify-content-evenly">\n        ',e=0;e<s.players.length;e++){var t=s.players[e];n+='\n            <div class="card col-md-3 boarder">\n                <div class="card-body">\n                <h5 class="card-title">'.concat(t.symbol,'</h5>\n                <h5 class="card-title mb-2">').concat(t.name,"</h5>\n            </div>\n            </div>    \n            ")}n+="\n            </div>\n        </div>\n        ",document.getElementById(b).innerHTML=n}}]),n}(),L=function(){function n(){a(this,n)}return i(n,null,[{key:"form",value:function(n){return'\n        <div class="'.concat(v,' d-flex justify-content-between mt-3">\n\n            <div class="col-6">\n                <input type="text" class="form-control col-6" placeholder="name">\n            </div>\n\n            <div class="col-3">\n                <select class="p-2 text-2vw form-select" >\n                    <option class="p-3 text-2vw" value="').concat("\b○",'">').concat("\b○",'</option>\n                    <option class="p-3 text-2vw" value="').concat("□",'">').concat("□",'</option>\n                    <option class="p-3 text-2vw" value="').concat("△",'">').concat("△",'</option>\n                    <option class="p-3 text-2vw" value="').concat("×",'">').concat("×","</option>\n                </select>\n            </div>\n\n            ").concat(n?'<div class="align-self-center col-1">\n                    <i class="'.concat(y,' fas fa-minus-circle fa-2x text-danger"></i>\n                </div>'):'<div class="col-1"></div>',"\n\n        </div>\n        ")}}]),n}(),S=function(){function n(){a(this,n)}return i(n,null,[{key:"topPage",value:function(){document.getElementById(u).addEventListener("click",(function(){G.gameSettingPage()}))}},{key:"gameSettingPage",value:function(){var n;null===(n=document.getElementById(m))||void 0===n||n.addEventListener("click",(function(){M.addForm()})),document.getElementById(p).addEventListener("click",(function(){var n=Number(document.getElementById(d).value),e=[];document.querySelectorAll("#".concat(f," .").concat(v)).forEach((function(n){e.push({name:n.querySelector("input").value,symbol:n.querySelector("select").value})})),G.create({boardLength:n,playersParams:e})}))}},{key:"gamePage",value:function(){B.set()}},{key:"endGamePopUp",value:function(){var n=function(){document.getElementById(x).remove()};document.getElementById(k).addEventListener("click",(function(){n(),G.topPage()})),document.getElementById(P).addEventListener("click",(function(){n(),G.gamePage()}))}}]),n}(),B=function(){function n(){a(this,n)}return i(n,null,[{key:"set",value:function(){for(var n=function(n){for(var e=function(e){document.getElementById("".concat(n,"-").concat(e)).addEventListener("click",(function(){j.putSymbol(n,e)}))},t=0;t<s.n;t++)e(t)},e=0;e<s.n;e++)n(e)}}]),n}(),T=function(){function n(){a(this,n)}return i(n,null,[{key:"form",value:function(){document.querySelectorAll(".".concat(y)).forEach((function(n){n.addEventListener("click",(function(){this.closest(".".concat(v)).remove(),M.addAddPlayerBtnIfIsntLimit()}))}))}}]),n}(),G=function(){function n(){a(this,n)}return i(n,null,[{key:"topPage",value:function(){w.topPage(),S.topPage()}},{key:"gameSettingPage",value:function(){w.gameSettingPage(),S.gameSettingPage()}},{key:"create",value:function(e){var t=e.boardLength,o=e.playersParams;j.setN(t),j.setPlayers(o.map((function(n){return M.create(n)}))),n.gamePage()}},{key:"gamePage",value:function(){j.setBoard(),j.setFistPlayer(),w.gamePage(),S.gamePage(),I.displayGameInfo("".concat(s.players[s.nextPlayerIndex].name," is the Next"))}},{key:"endGamePopUp",value:function(n){w.endGamePopUp(n),S.endGamePopUp()}}]),n}(),j=function(){function n(){a(this,n)}return i(n,null,[{key:"setPlayers",value:function(n){s.players=n}},{key:"setN",value:function(n){s.n=n}},{key:"setFistPlayer",value:function(){s.nextPlayerIndex=0}},{key:"setBoard",value:function(){for(var n=[],e=0;e<s.n;e++){for(var t=[],o=0;o<s.n;o++)t.push("");n.push(t)}s.blocks=n}},{key:"putSymbol",value:function(n,e){var t=document.getElementById("".concat(n,"-").concat(e)),o=s.players[s.nextPlayerIndex];""===t.innerText&&(s.blocks[n][e]=o.symbol,t.innerHTML=o.symbol),this.changeTurn(),this.checkBoard(o)||I.displayGameInfo("".concat(s.players[s.nextPlayerIndex].name," is the Next"))}},{key:"changeTurn",value:function(){s.nextPlayerIndex<s.players.length-1?s.nextPlayerIndex++:s.nextPlayerIndex=0}},{key:"checkBoard",value:function(n){for(var e=!1,t=s.n,o=0,a=0,c=0;c<t;c++){for(var i=0;i<t;i++)s.blocks[c][i]==n.symbol&&o++,s.blocks[i][c]==n.symbol&&a++;o==t&&(G.endGamePopUp(n),I.displayGameInfo("".concat(n.name," won with horazontal line")),e=!0),a==t&&(G.endGamePopUp(n),I.displayGameInfo("".concat(n.name," won with vertical line")),e=!0),o=0,a=0}for(var r=0,l=0,u=0,d=0;d<t;d++)s.blocks[d][u]==n.symbol&&r++,s.blocks[d][t-1-u]==n.symbol&&l++,u++;return r===t&&(G.endGamePopUp(n),I.displayGameInfo("".concat(n.name," won with upperLeft line")),e=!0),l===t&&(G.endGamePopUp(n),I.displayGameInfo("".concat(n.name," won with upperRight line")),e=!0),r=0,l=0,e}}]),n}(),M=function(){function n(){a(this,n)}return i(n,null,[{key:"create",value:function(n){return new l(n)}},{key:"addForm",value:function(){document.getElementById(f).innerHTML+=L.form(!0),T.form(),n.removeAddPlayerBtnIfIsLimit()}},{key:"addAddPlayerBtnIfIsntLimit",value:function(){document.querySelectorAll(".".concat(v)).length<4&&document.getElementById(m).classList.add("fas","fa-plus-circle","fa-2x","text-info")}},{key:"removeAddPlayerBtnIfIsLimit",value:function(){document.querySelectorAll(".".concat(v)).length>=4&&document.getElementById(m).classList.remove("fas","fa-plus-circle","fa-2x","text-info")}}]),n}();G.topPage()})()})();