var OmniFaces=OmniFaces||{};
OmniFaces.Util={addOnloadListener:function(n){if("complete"===document.readyState)setTimeout(n);else if(window.addEventListener)window.addEventListener("load",n,!1);else if(window.attachEvent)window.attachEvent("onload",n);else if("function"==typeof window.onload){var e=window.onload;window.onload=function(){e(),n()}}else window.onload=n}};
OmniFaces.Highlight={addErrorClass:function(e,a,t){for(var m=document.getElementsByTagName("LABEL"),n={},r=0;r<m.length;r++){var s=m[r],l=s.htmlFor;l&&(n[l]=s)}for(var r=0;r<e.length;r++){var c=e[r],g=document.getElementById(c);if(!g){var i=document.getElementsByName(c);i&&i.length&&(g=i[0])}if(g){g.className+=" "+a;var s=n[g.id];s&&(s.className+=" "+a),t&&(g.focus(),t=!1)}}}};
OmniFaces.DeferredScript=function(){function e(n){if(!(0>n||n>=r.length)){var t=r[n],c=document.createElement("script"),o=document.head||document.documentElement;c.async=!0,c.src=t.url,c.onerror=function(){t.error&&t.error()},c.onload=c.onreadystatechange=function(r,o){(o||!c.readyState||/loaded|complete/.test(c.readyState))&&(c.onload=c.onreadystatechange=null,o?c.onerror():t.success&&t.success(),c=null,e(n+1))},t.begin&&t.begin(),o.insertBefore(c,null)}}var n={},r=[];return n.add=function(n,t,c,o){r.push({url:n,begin:t,success:c,error:o}),1==r.length&&OmniFaces.Util.addOnloadListener(function(){e(0)})},n}();
OmniFaces.Unload=function(){function n(){for(var n=0;n<document.forms.length;n++){var e=document.forms[n][o];if(e)return e.value}return null}function e(n,e,t){n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent("on"+e,t)}var t={},a=!1,o="javax.faces.ViewState";return t.init=function(){if(window.XMLHttpRequest){var t=n();t&&(e(window,"beforeunload",function(){if(a)return void(a=!1);try{var n=new XMLHttpRequest;n.open("POST",document.location,!1),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send("omnifaces.event=unload&"+o+"="+t)}catch(e){}}),e(document,"submit",function(){OmniFaces.Unload.disable()}))}},t.disable=function(){a=!0},t}();