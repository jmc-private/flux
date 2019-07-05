(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{45:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return c}),a.d(t,"rightToc",function(){return o}),a.d(t,"default",function(){return s});a(0);var n=a(61);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c={id:"dispatcher",title:"Dispatcher"},o=[{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:o},p="wrapper";function s(e){var t=e.components,a=i(e,["components"]);return Object(n.b)(p,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Dispatcher is used to broadcast payloads to registered callbacks. This is\ndifferent from generic pub-sub systems in two ways:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Callbacks are not subscribed to particular events. Every payload is\ndispatched to every registered callback."),Object(n.b)("li",{parentName:"ul"},"Callbacks can be deferred in whole or part until other callbacks have\nbeen executed.")),Object(n.b)("p",null,"Check out ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/facebook/flux/blob/master/src/Dispatcher.js"}),"Dispatcher.js")," for the source code."),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"api"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#api"}),"#"),"API"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"register(function callback): string")),"\nRegisters a callback to be invoked with every dispatched payload. Returns a token that can be used with ",Object(n.b)("inlineCode",{parentName:"p"},"waitFor()"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"unregister(string id): void")),"\nRemoves a callback based on its token.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"waitFor(array<string> ids): void")),"\nWaits for the callbacks specified to be invoked before continuing execution of the current callback. This method should only be used by a callback in response to a dispatched payload.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"dispatch(object payload): void"))," Dispatches a payload to all registered callbacks.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"isDispatching(): boolean"))," Is this Dispatcher currently dispatching."))),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"example"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#example"}),"#"),"Example"),Object(n.b)("p",null,"For example, consider this hypothetical flight destination form, which\nselects a default city when a country is selected:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"var flightDispatcher = new Dispatcher();\n\n// Keeps track of which country is selected\nvar CountryStore = {country: null};\n\n// Keeps track of which city is selected\nvar CityStore = {city: null};\n\n// Keeps track of the base flight price of the selected city\nvar FlightPriceStore = {price: null};\n")),Object(n.b)("p",null,"When a user changes the selected city, we dispatch the payload:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"flightDispatcher.dispatch({\n  actionType: 'city-update',\n  selectedCity: 'paris'\n});\n")),Object(n.b)("p",null,"This payload is digested by ",Object(n.b)("inlineCode",{parentName:"p"},"CityStore"),":"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'city-update') {\n    CityStore.city = payload.selectedCity;\n  }\n});\n")),Object(n.b)("p",null,"When the user selects a country, we dispatch the payload:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"flightDispatcher.dispatch({\n  actionType: 'country-update',\n  selectedCountry: 'australia'\n});\n")),Object(n.b)("p",null,"This payload is digested by both stores:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"})," CountryStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    CountryStore.country = payload.selectedCountry;\n  }\n});\n")),Object(n.b)("p",null,"When the callback to update ",Object(n.b)("inlineCode",{parentName:"p"},"CountryStore")," is registered, we save a reference\nto the returned token. Using this token with ",Object(n.b)("inlineCode",{parentName:"p"},"waitFor()"),", we can guarantee\nthat ",Object(n.b)("inlineCode",{parentName:"p"},"CountryStore")," is updated before the callback that updates ",Object(n.b)("inlineCode",{parentName:"p"},"CityStore"),"\nneeds to query its data."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"CityStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    // `CountryStore.country` may not be updated.\n    flightDispatcher.waitFor([CountryStore.dispatchToken]);\n    // `CountryStore.country` is now guaranteed to be updated.\n\n    // Select the default city for the new country\n    CityStore.city = getDefaultCityForCountry(CountryStore.country);\n  }\n});\n")),Object(n.b)("p",null,"The usage of ",Object(n.b)("inlineCode",{parentName:"p"},"waitFor()")," can be chained, for example:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"FlightPriceStore.dispatchToken =\n  flightDispatcher.register(function(payload) {\n    switch (payload.actionType) {\n      case 'country-update':\n      case 'city-update':\n        flightDispatcher.waitFor([CityStore.dispatchToken]);\n        FlightPriceStore.price =\n          getFlightPriceStore(CountryStore.country, CityStore.city);\n        break;\n  }\n});\n")),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"country-update")," payload will be guaranteed to invoke the stores'\nregistered callbacks in order: ",Object(n.b)("inlineCode",{parentName:"p"},"CountryStore"),", ",Object(n.b)("inlineCode",{parentName:"p"},"CityStore"),", then\n",Object(n.b)("inlineCode",{parentName:"p"},"FlightPriceStore"),"."))}s.isMDXComponent=!0}}]);