webpackJsonp([17],{1041:function(n,t,e){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Ph.D.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bachelor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'College diploma\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem demo\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          Undergraduate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>Auxiliary text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Agree <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'agree it\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>agreement<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{default:n}}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function s(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var o=e(0),p=(e(0),e(778),e(780)),r=n(p),c=(e(231),e(232)),u=n(c),l=(e(932),e(934)),i=n(l),f=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),k=i.default.CheckboxItem,d=i.default.AgreeItem,b=function(n){function e(){var n,s,o,p;t(this,e);for(var r=arguments.length,c=Array(r),u=0;u<r;u++)c[u]=arguments[u];return s=o=a(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(c))),o.onChange=function(n){console.log(n)},p=s,a(o,p)}return s(e,n),f(e,[{key:"render",value:function(){var n=this,t=[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"College diploma"}];return o.createElement("div",null,o.createElement(u.default,{renderHeader:function(){return"CheckboxItem demo"}},t.map(function(t){return o.createElement(k,{key:t.value,onChange:function(){return n.onChange(t.value)}},t.label)}),o.createElement(k,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"Undergraduate",o.createElement(u.default.Item.Brief,null,"Auxiliary text"))),o.createElement(r.default,null,o.createElement(r.default.Item,null,o.createElement(d,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"Agree ",o.createElement("a",{onClick:function(n){n.preventDefault(),alert("agree it")}},"agreement")))))}}]),e}(o.Component);return o.createElement(b,null)}}},651:function(n,t,e){n.exports={basic:e(1041)}},770:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){var e={};for(var a in n)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}},778:function(n,t,e){"use strict";e(45),e(779)},779:function(n,t){},780:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var s=e(781),o=a(s),p=e(782),r=a(p);o.default.Item=r.default,t.default=o.default,n.exports=t.default},781:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},u=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),l=e(0),i=a(l),f=e(6),k=a(f),d=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]]);return e},b=function(n){function t(){return o(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),u(t,[{key:"render",value:function(){var n,t=this.props,e=t.direction,a=t.wrap,o=t.justify,p=t.align,r=t.alignContent,u=t.className,l=t.children,f=t.prefixCls,b=t.style,y=d(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),h=(0,k.default)(f,u,(n={},s(n,f+"-dir-row","row"===e),s(n,f+"-dir-row-reverse","row-reverse"===e),s(n,f+"-dir-column","column"===e),s(n,f+"-dir-column-reverse","column-reverse"===e),s(n,f+"-nowrap","nowrap"===a),s(n,f+"-wrap","wrap"===a),s(n,f+"-wrap-reverse","wrap-reverse"===a),s(n,f+"-justify-start","start"===o),s(n,f+"-justify-end","end"===o),s(n,f+"-justify-center","center"===o),s(n,f+"-justify-between","between"===o),s(n,f+"-justify-around","around"===o),s(n,f+"-align-start","start"===p),s(n,f+"-align-center","center"===p),s(n,f+"-align-end","end"===p),s(n,f+"-align-baseline","baseline"===p),s(n,f+"-align-stretch","stretch"===p),s(n,f+"-align-content-start","start"===r),s(n,f+"-align-content-end","end"===r),s(n,f+"-align-content-center","center"===r),s(n,f+"-align-content-between","between"===r),s(n,f+"-align-content-around","around"===r),s(n,f+"-align-content-stretch","stretch"===r),n));return i.default.createElement("div",c({className:h,style:b},y),l)}}]),t}(i.default.Component);t.default=b,b.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=t.default},782:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function s(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function p(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},c=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),u=e(0),l=a(u),i=e(6),f=a(i),k=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]]);return e},d=function(n){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),c(t,[{key:"render",value:function(){var n=this.props,t=n.children,e=n.className,a=n.prefixCls,s=n.style,o=k(n,["children","className","prefixCls","style"]),p=(0,f.default)(a+"-item",e);return l.default.createElement("div",r({className:p,style:s},o),t)}}]),t}(l.default.Component);t.default=d,d.defaultProps={prefixCls:"am-flexbox"},n.exports=t.default},787:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return Object.keys(n).reduce(function(t,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(t[e]=n[e]),t},{})},n.exports=t.default},854:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function s(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function p(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),c=e(0),u=a(c),l=e(868),i=a(l),f=e(6),k=a(f),d=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]]);return e},b=function(n){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),r(t,[{key:"render",value:function(){var n=this.props,t=n.className,e=n.style,a=d(n,["className","style"]),s=a.prefixCls,o=a.children,p=(0,k.default)(s+"-wrapper",t);"class"in a&&delete a.class;var r=u.default.createElement("label",{className:p,style:e},u.default.createElement(i.default,a),o);return this.props.wrapLabel?r:u.default.createElement(i.default,this.props)}}]),t}(u.default.Component);t.default=b,b.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=t.default},868:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(886);e.d(t,"default",function(){return a.a})},886:function(n,t,e){"use strict";var a=e(4),s=e.n(a),o=e(55),p=e.n(o),r=e(770),c=e.n(r),u=e(5),l=e.n(u),i=e(12),f=e.n(i),k=e(9),d=e.n(k),b=e(10),y=e.n(b),h=e(0),g=e(2),m=e.n(g),v=e(887),O=e.n(v),j=e(6),w=e.n(j),x=function(n){function t(n){l()(this,t);var e=d()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));C.call(e);var a="checked"in n?n.checked:n.defaultChecked;return e.state={checked:a},e}return y()(t,n),f()(t,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return O.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var n,t=this.props,e=t.prefixCls,a=t.className,o=t.style,r=t.name,u=t.type,l=t.disabled,i=t.readOnly,f=t.tabIndex,k=t.onClick,d=t.onFocus,b=t.onBlur,y=c()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),g=Object.keys(y).reduce(function(n,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(n[t]=y[t]),n},{}),m=this.state.checked,v=w()(e,a,(n={},p()(n,e+"-checked",m),p()(n,e+"-disabled",l),n));return h.default.createElement("span",{className:v,style:o},h.default.createElement("input",s()({name:r,type:u,readOnly:i,disabled:l,tabIndex:f,className:e+"-input",checked:!!m,onClick:k,onFocus:d,onBlur:b,onChange:this.handleChange},g)),h.default.createElement("span",{className:e+"-inner"}))}}]),t}(h.default.Component);x.propTypes={prefixCls:m.a.string,className:m.a.string,style:m.a.object,name:m.a.string,type:m.a.string,defaultChecked:m.a.oneOfType([m.a.number,m.a.bool]),checked:m.a.oneOfType([m.a.number,m.a.bool]),disabled:m.a.bool,onFocus:m.a.func,onBlur:m.a.func,onChange:m.a.func,onClick:m.a.func,tabIndex:m.a.string,readOnly:m.a.bool},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var C=function(){var n=this;this.handleChange=function(t){var e=n.props;e.disabled||("checked"in e||n.setState({checked:t.target.checked}),e.onChange({target:s()({},e,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t.a=x},887:function(n,t,e){function a(n,t,e){return!s(n.props,t)||!s(n.state,e)}var s=e(888),o={shouldComponentUpdate:function(n,t){return a(this,n,t)}};n.exports=o},888:function(n,t,e){"use strict";var a=e(889);n.exports=function(n,t,e,s){var o=e?e.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=a(n),r=a(t),c=p.length;if(c!==r.length)return!1;s=s||null;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<c;l++){var i=p[l];if(!u(i))return!1;var f=n[i],k=t[i],d=e?e.call(s,f,k,i):void 0;if(!1===d||void 0===d&&f!==k)return!1}return!0}},889:function(n,t,e){function a(n){return null!=n&&o(h(n))}function s(n,t){return n="number"==typeof n||f.test(n)?+n:-1,t=null==t?y:t,n>-1&&n%1==0&&n<t}function o(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=y}function p(n){for(var t=c(n),e=t.length,a=e&&n.length,p=!!a&&o(a)&&(i(n)||l(n)),r=-1,u=[];++r<e;){var f=t[r];(p&&s(f,a)||d.call(n,f))&&u.push(f)}return u}function r(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function c(n){if(null==n)return[];r(n)||(n=Object(n));var t=n.length;t=t&&o(t)&&(i(n)||l(n))&&t||0;for(var e=n.constructor,a=-1,p="function"==typeof e&&e.prototype===n,c=Array(t),u=t>0;++a<t;)c[a]=a+"";for(var f in n)u&&s(f,t)||"constructor"==f&&(p||!d.call(n,f))||c.push(f);return c}var u=e(890),l=e(891),i=e(892),f=/^\d+$/,k=Object.prototype,d=k.hasOwnProperty,b=u(Object,"keys"),y=9007199254740991,h=function(n){return function(t){return null==t?void 0:t[n]}}("length"),g=b?function(n){var t=null==n?void 0:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&a(n)?p(n):r(n)?b(n):[]}:p;n.exports=g},890:function(n,t){function e(n){return!!n&&"object"==typeof n}function a(n,t){var e=null==n?void 0:n[t];return p(e)?e:void 0}function s(n){return o(n)&&f.call(n)==r}function o(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function p(n){return null!=n&&(s(n)?k.test(l.call(n)):e(n)&&c.test(n))}var r="[object Function]",c=/^\[object .+?Constructor\]$/,u=Object.prototype,l=Function.prototype.toString,i=u.hasOwnProperty,f=u.toString,k=RegExp("^"+l.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=a},891:function(n,t){function e(n){return s(n)&&d.call(n,"callee")&&(!y.call(n,"callee")||b.call(n)==l)}function a(n){return null!=n&&p(n.length)&&!o(n)}function s(n){return c(n)&&a(n)}function o(n){var t=r(n)?b.call(n):"";return t==i||t==f}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=u}function r(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function c(n){return!!n&&"object"==typeof n}var u=9007199254740991,l="[object Arguments]",i="[object Function]",f="[object GeneratorFunction]",k=Object.prototype,d=k.hasOwnProperty,b=k.toString,y=k.propertyIsEnumerable;n.exports=e},892:function(n,t){function e(n){return!!n&&"object"==typeof n}function a(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=b}function s(n){return o(n)&&f.call(n)==r}function o(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function p(n){return null!=n&&(s(n)?k.test(l.call(n)):e(n)&&c.test(n))}var r="[object Function]",c=/^\[object .+?Constructor\]$/,u=Object.prototype,l=Function.prototype.toString,i=u.hasOwnProperty,f=u.toString,k=RegExp("^"+l.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),d=function(n,t){var e=null==n?void 0:n[t];return p(e)?e:void 0}(Array,"isArray"),b=9007199254740991,y=d||function(n){return e(n)&&a(n.length)&&"[object Array]"==f.call(n)};n.exports=y},932:function(n,t,e){"use strict";e(45),e(231),e(933)},933:function(n,t){},934:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var s=e(854),o=a(s),p=e(935),r=a(p),c=e(936),u=a(c);o.default.CheckboxItem=r.default,o.default.AgreeItem=u.default,t.default=o.default,n.exports=t.default},935:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function c(){}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},l=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),i=e(0),f=a(i),k=e(6),d=a(k),b=e(232),y=a(b),h=e(854),g=a(h),m=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]]);return e},v=y.default.Item,O=function(n){function t(){return o(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),l(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.listPrefixCls,a=(t.onChange,t.disabled),o=t.checkboxProps,p=t.onClick,r=m(t,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),l=r.prefixCls,i=r.className,k=r.children,b=(0,d.default)(l+"-item",i,s({},l+"-item-disabled",!0===a));a||(r.onClick=p||c);var y={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(t){t in n.props&&(y[t]=n.props[t])}),f.default.createElement(v,u({},r,{prefixCls:e,className:b,thumb:f.default.createElement(g.default,u({},o,y))}),k)}}]),t}(f.default.Component);t.default=O,O.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},n.exports=t.default},936:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function s(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function p(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},c=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),u=e(0),l=a(u),i=e(6),f=a(i),k=e(854),d=a(k),b=e(787),y=a(b),h=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]]);return e},g=function(n){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),c(t,[{key:"render",value:function(){var n=this.props,t=n.style,e=h(n,["style"]),a=e.prefixCls,s=e.className,o=(0,f.default)(a+"-agree",s);return l.default.createElement("div",r({},(0,y.default)(e),{className:o,style:t}),l.default.createElement(d.default,r({},e,{className:a+"-agree-label"})))}}]),t}(l.default.Component);t.default=g,g.defaultProps={prefixCls:"am-checkbox"},n.exports=t.default}});