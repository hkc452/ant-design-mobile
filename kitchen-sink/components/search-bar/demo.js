webpackJsonp([33],{447:function(n,a,s){n.exports={basic:s(930)}},496:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n};a.getComponentLocale=function(n,a,s,e){var p={};if(a&&a.antLocale&&a.antLocale[s])p=a.antLocale[s];else{var o=e();p=o.default||o}var c=t({},p);n.locale&&(c=t({},c,n.locale),n.locale.lang&&(c.lang=t({},p.lang,n.locale.lang)));return c},a.getLocaleCode=function(n){var a=n.antLocale&&n.antLocale.locale;if(n.antLocale&&n.antLocale.exist&&!a)return"zh-cn";return a}},522:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a.default},685:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),p=k(s(3)),o=k(s(0)),c=k(s(1)),l=k(s(75)),u=k(s(522)),i=s(496),r=s(686);function k(n){return n&&n.__esModule?n:{default:n}}function f(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var h=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var s=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onSubmit=function(n){n.preventDefault(),s.props.onSubmit&&s.props.onSubmit(s.state.value||""),s.inputRef&&s.inputRef.blur()},s.onChange=function(n){s.state.focus||s.setState({focus:!0});var a=n.target.value;"value"in s.props||s.setState({value:a}),s.props.onChange&&s.props.onChange(a)},s.onFocus=function(){s.setState({focus:!0}),s.firstFocus=!0,s.props.onFocus&&s.props.onFocus()},s.onBlur=function(){var n;s.onBlurTimeout=(n=function(){s.blurFromOnClear||document.activeElement!==s.inputRef&&s.setState({focus:!1}),s.blurFromOnClear=!1},window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,1)),s.props.onBlur&&s.props.onBlur()},s.onClear=function(){s.doClear()},s.doClear=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];s.blurFromOnClear=n,"value"in s.props||s.setState({value:""}),s.props.onClear&&s.props.onClear(""),s.props.onChange&&s.props.onChange(""),n&&s.focus()},s.onCancel=function(){s.props.onCancel?s.props.onCancel(s.state.value||""):s.doClear(!1)},s.focus=function(){s.inputRef&&s.inputRef.focus()};var t=void 0;return t="value"in n?n.value||"":"defaultValue"in n?n.defaultValue:"",s.state={value:t,focus:!1},s}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,o.default.Component),e(a,[{key:"componentDidMount",value:function(){if(this.rightBtnRef){var n=window.getComputedStyle(this.rightBtnRef);this.rightBtnInitMarginleft=n.marginLeft}this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){if(this.syntheticPhRef)if(this.inputContainerRef&&this.inputContainerRef.className.indexOf(this.props.prefixCls+"-start")>-1){if(this.syntheticPhContainerRef){var n=this.syntheticPhContainerRef.getBoundingClientRect().width;this.syntheticPhRef.style.width=Math.ceil(n)+"px"}!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="0")}else this.syntheticPhRef.style.width="100%",!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="-"+(this.rightBtnRef.offsetWidth+(null!=this.rightBtnInitMarginleft?parseInt(this.rightBtnInitMarginleft,10):0))+"px")}},{key:"componentWillReceiveProps",value:function(n){"value"in n&&n.value!==this.state.value&&this.setState({value:n.value})}},{key:"componentWillUnmount",value:function(){var n;this.onBlurTimeout&&(n=this.onBlurTimeout,window.cancelAnimationFrame?window.cancelAnimationFrame(n):window.clearTimeout(n),this.onBlurTimeout=null)}},{key:"render",value:function(){var n,a=this,e=this.props,c=e.prefixCls,r=e.showCancelButton,k=e.disabled,h=e.placeholder,g=e.className,d=e.style,m=e.maxLength,v=(0,i.getComponentLocale)(this.props,this.context,"SearchBar",function(){return s(687)}).cancelText,b=this.state,y=b.value,C=b.focus,w=(0,p.default)(c,g,f({},c+"-start",!!(C||y&&y.length>0))),B=(0,p.default)(c+"-clear",f({},c+"-clear-show",!!(C&&y&&y.length>0))),S=(0,p.default)(c+"-cancel",(f(n={},c+"-cancel-show",!!(r||C||y&&y.length>0)),f(n,c+"-cancel-anim",this.firstFocus),n));return o.default.createElement("form",{onSubmit:this.onSubmit,className:w,style:d,ref:function(n){return a.inputContainerRef=n},action:"#"},o.default.createElement("div",{className:c+"-input"},o.default.createElement("div",{className:c+"-synthetic-ph",ref:function(n){return a.syntheticPhRef=n}},o.default.createElement("span",{className:c+"-synthetic-ph-container",ref:function(n){return a.syntheticPhContainerRef=n}},o.default.createElement("i",{className:c+"-synthetic-ph-icon"}),o.default.createElement("span",{className:c+"-synthetic-ph-placeholder",style:{visibility:h&&!y?"visible":"hidden"}},h))),o.default.createElement("input",t({type:"search",className:c+"-value",value:y,disabled:k,placeholder:h,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(n){return a.inputRef=n},maxLength:m},(0,u.default)(this.props))),o.default.createElement(l.default,{activeClassName:c+"-clear-active"},o.default.createElement("a",{onClick:this.onClear,className:B}))),o.default.createElement("div",{className:S,onClick:this.onCancel,ref:function(n){return a.rightBtnRef=n}},this.props.cancelText||v))}}]),a}();a.default=h,h.defaultProps=r.defaultProps,h.contextTypes={antLocale:c.default.object},n.exports=a.default},686:function(n,a,s){"use strict";function t(){}Object.defineProperty(a,"__esModule",{value:!0});a.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:t,onChange:t,onFocus:t,onBlur:t,onClear:t,showCancelButton:!1,disabled:!1}},687:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={cancelText:"\u53d6\u6d88"},n.exports=a.default},688:function(n,a,s){"use strict";s(28),s(689)},689:function(n,a){},930:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/search-bar/demo/basic.md",id:"components-search-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchBar<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SearchBarExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>autoFocusInst<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange<span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  clear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  handleClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>manualFocusInst<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>AutoFocus when enter page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ref <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>autoFocusInst <span class="token operator">=</span> ref<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Focus by operation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span>\n        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ref <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>manualFocusInst <span class="token operator">=</span> ref<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>click to focus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show cancel button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onSubmit\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onClear\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onFocus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onBlur\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onCancel\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showCancelButton</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(0),c(s(135))),t=c(s(131)),e=c(s(685)),p=c(s(133)),o=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}();function c(n){return n&&n.__esModule?n:{default:n}}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}s(136),s(132),s(688),s(134);var u=function(s){function c(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,e=Array(t),p=0;p<t;p++)e[p]=arguments[p];return a=s=l(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this].concat(e))),s.state={value:"\u7f8e\u98df"},s.onChange=function(n){s.setState({value:n})},s.clear=function(){s.setState({value:""})},s.handleClick=function(){s.manualFocusInst.focus()},l(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(c,n.Component),o(c,[{key:"componentDidMount",value:function(){this.autoFocusInst.focus()}},{key:"render",value:function(){var s=this;return n.createElement("div",null,n.createElement(p.default,null,n.createElement("div",{className:"sub-title"},"Normal")),n.createElement(e.default,{placeholder:"Search",maxLength:8}),n.createElement(t.default,null),n.createElement(p.default,null,n.createElement("div",{className:"sub-title"},"AutoFocus when enter page")),n.createElement(e.default,{placeholder:"\u81ea\u52a8\u83b7\u53d6\u5149\u6807",ref:function(n){return s.autoFocusInst=n}}),n.createElement(t.default,null),n.createElement(p.default,null,n.createElement("div",{className:"sub-title"},"Focus by operation")),n.createElement(e.default,{placeholder:"\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807",ref:function(n){return s.manualFocusInst=n}}),n.createElement(t.default,null),n.createElement(p.default,null,n.createElement(a.default,{onClick:this.handleClick},"click to focus")),n.createElement(t.default,null),n.createElement(p.default,null,n.createElement("div",{className:"sub-title"},"Show cancel button")),n.createElement(e.default,{value:this.state.value,placeholder:"Search",onSubmit:function(n){return console.log(n,"onSubmit")},onClear:function(n){return console.log(n,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0,onChange:this.onChange}))}}]),c}();return n.createElement(u,null)},style:".am-search {\n  border-bottom: 1px solid #ddd;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.am-search</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#ddd</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});