(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[152],{2731:function(t,e,a){"use strict";a.r(e);a(41);var n=a(8),i=a.n(n),r=(a(178),a(82)),c=a.n(r),d=a(20),o=a(98),l=a(9),u=a(12),s=a(11),h=a(10),p=a(0),D=a.n(p),b=function(t){Object(s.a)(a,t);var e=Object(h.a)(a);function a(t,n){var i;return Object(l.a)(this,a),(i=e.call(this,t,n)).onLoadData=function(t){i.state.treeData;return new Promise((function(e){var a=t.props;t.children?e():setTimeout((function(){var t=a.id,n=i.updateTreeData(i.state.treeData,t,[{title:"Child Node",id:"".concat(t,"-0")},{title:"Child Node",id:"".concat(t,"-1")}]);i.setState({treeData:Object(o.a)(n)}),e()}),1e3)}))},i.state={treeData:[{title:"Expand to load",id:"0",children:[]},{title:"Expand to load",id:"1",children:[]},{title:"Tree Node",id:"2",isLeaf:!0}]},i}return Object(u.a)(a,[{key:"updateTreeData",value:function(t,e,a){var n=this;return t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{children:a}):t.children?Object(d.a)(Object(d.a)({},t),{},{children:n.updateTreeData(t.children,e,a)}):t}))}},{key:"render",value:function(){return D.a.createElement("div",null,D.a.createElement(c.a,{loadData:this.onLoadData,treeData:this.state.treeData}))}}]),a}(p.Component),f=i.a.create()(b);e.default=f}}]);