(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(3),r=n.n(s),a=(n(12),n.p,n(4)),o=n(5),u=n(7),d=n(6),l=(n(13),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).onincrementHandler=function(){c.incrementHandler()},c.ondecrementHandler=function(){0===c.state.counter&&c.setState({isFinished:!0}),c.decrementHandler()},c.state={counter:e.counter,isFinished:!1},c}return Object(o.a)(n,[{key:"incrementHandler",value:function(){this.setState({counter:this.state.counter+1})}},{key:"decrementHandler",value:function(){this.setState({counter:this.state.counter-1})}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"counter",children:[!this.state.isFinished&&Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)("div",{className:"counter-num",children:this.state.counter}),!0===this.props.displayBtn&&Object(l.jsxs)("div",{className:"counter-btn-container",children:[Object(l.jsx)("div",{className:"counter-btn",onClick:this.onincrementHandler,children:"+"}),Object(l.jsx)("div",{className:"counter-btn",onClick:this.ondecrementHandler,children:"-"})]})]}),this.state.isFinished&&Object(l.jsx)("div",{children:Object(l.jsx)("b",{children:"Finished"})})]})}}]),n}(c.Component);n(15);var j=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(h,{counter:10,displayBtn:!0})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.15373b8f.chunk.js.map