(this.webpackJsonpkeycloakify_landingpage=this.webpackJsonpkeycloakify_landingpage||[]).push([[81],{870:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=i.length;-1!==t.code.indexOf(o=n(a,c));)++c;return i[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(c){for(var p=0;p<c.length&&!(o>=r.length);p++){var s=c[p];if("string"===typeof s||s.content&&"string"===typeof s.content){var u=r[o],g=t.tokenStack[u],l="string"===typeof s?s:s.content,f=n(a,u),k=l.indexOf(f);if(k>-1){++o;var y=l.substring(0,k),d=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),h=l.substring(k+f.length),m=[];y&&m.push.apply(m,i([y])),m.push(d),h&&m.push.apply(m,i([h])),"string"===typeof s?c.splice.apply(c,[p,1].concat(m)):s.content=m}}else s.content&&i(s.content)}return c}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.728c165e.chunk.js.map