(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[60],{1755:function(e,a,t){},1757:function(e,a,t){"use strict";var n,c=t(9),A=t(12),r=t(11),o=t(10),s=t(0),l=t.n(s),m=(t(1758),t(1755),t(31)),i=t(70),g=t(35),u=t(38),E=Object(g.g)(n=function(e){Object(r.a)(n,e);var a=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var t=arguments.length,A=new Array(t),r=0;r<t;r++)A[r]=arguments[r];return(e=a.call.apply(a,[this].concat(A))).state={current:"mail",navName:""},e.handleClick=function(a){e.setState({current:a.key})},e.handleLogout=function(){Object(u.i)().then((function(a){e.props.history.replace("/login"),Object(i.b)("token"),localStorage.removeItem("userInfo"),localStorage.setItem("type",null)}))},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){this.setState({navName:this.props.navName})}},{key:"render",value:function(){var e=this.state.navName;return l.a.createElement("div",{className:"st-header"},l.a.createElement("a",{href:"javascript:history.back(-1)"},l.a.createElement("img",{alt:"",className:"icon-goback",src:t(1759)})),l.a.createElement(m.b,{to:"/"},l.a.createElement("img",{alt:"",className:"icon-home",src:t(1760)})),l.a.createElement("p",{className:"icon-header-name"},e))}}]),n}(s.Component))||n;a.a=E},1758:function(e,a,t){},1759:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAYAAAAi7kmXAAAA50lEQVRIS72VMQ7CMAxFvzvCzBFYQKJOcwkkDsAIExwJNhg5CwtnQGw9A8QoEpVaSBorqsjsp/jFXw5BeZh5JQUdRESIZEcazhgzc5ArgPGn/p4ErbWjp3t5aN6+JAmWzCcQtt+d9YJseSMO55BOFAx4dfggGPNKOsa8esE+ryiY8gqCGq8gqPH6AbVeHZCZp0K4tXKoiS+oNOYCyFpV3Sqi0nANYPJPMLPV7MfxblnjaB4lKwAezo6ch7NC3rSs9Q1uAI3vsKtD4zv8ekzNN7nJs7+AsC89kjc2LS+qaknijgAVBbB/A78cals6CB6tAAAAAElFTkSuQmCC"},1760:function(e,a){e.exports="data:image/png;base64,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"},2359:function(e,a,t){},2743:function(e,a,t){"use strict";t.r(a);t(41);var n,c=t(8),A=t.n(c),r=(t(40),t(5)),o=t.n(r),s=(t(43),t(2)),l=t.n(s),m=t(9),i=t(12),g=t(11),u=t(10),E=t(0),k=t.n(E),p=(t(2359),t(1757)),v=t(35),N=t(31),d=Object(v.g)(n=function(e){Object(g.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),A=0;A<n;A++)c[A]=arguments[A];return(e=a.call.apply(a,[this].concat(c))).state={wrongData:[1,2,3,4]},e.onChange=function(a){console.log("radio checked",a.target.value),e.setState({value:a.target.value})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.wrongData.map((function(e,a){return k.a.createElement(l.a,{span:8,key:a},k.a.createElement("div",{className:"wrong-item"},k.a.createElement("div",{className:"wrong-right"},k.a.createElement("div",null,k.a.createElement("p",{className:"wrong-name"},"\u8bed\u6587"),k.a.createElement("p",{className:"wrong-num"},"\u9519\u9898:",k.a.createElement("span",{className:"item-num"},"38"))),k.a.createElement(N.b,{to:"/wrong-book-detail"},k.a.createElement("p",{className:"wrong-report"},"\u5b66\u79d1\u9519\u9898\u62a5\u544a")))))}));return k.a.createElement("div",{className:"st-warp"},k.a.createElement("div",{className:"st-cont"},k.a.createElement("div",{className:"wrong-book-box"},k.a.createElement(p.a,{navName:"\u9519\u9898\u672c"}),k.a.createElement("div",{className:"wrong-book-content"},k.a.createElement(o.a,{gutter:30},e)))))}}]),t}(E.Component))||n,h=A.a.create()(d);a.default=h}}]);