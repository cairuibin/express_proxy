(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[141],{2163:function(e,t,a){},2699:function(e,t,a){"use strict";a.r(t);a(45);var n=a(6),r=a.n(n),s=(a(155),a(53)),c=a.n(s),o=(a(379),a(179)),l=a.n(o),i=(a(74),a(17)),u=a.n(i),p=(a(43),a(2)),m=a.n(p),h=(a(40),a(5)),y=a.n(h),d=(a(942),a(546)),f=a.n(d),v=a(20),g=a(244),b=a(3),k=a.n(b),E=(a(54),a(15)),w=a.n(E),j=a(7),N=a(9),S=a(12),C=a(11),O=a(10),x=(a(79),a(30)),D=a.n(x),I=(a(178),a(82)),F=a.n(I),L=a(0),V=a.n(L),P=(a(2163),a(44)),A=a(27),T=a(311),R=a(93),K=a(245),Y=a(891),M=F.a.TreeNode,_=D.a.Option,z=function(e){Object(C.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={userId:"",subjectId:"",stageId:"",title:"",source:[],pointsArray:[],subjectList:[],courseTree:[],mySubjectList:[],subjectKnowledgePointTree:[],knowledgeTree:[],examYearList:[],examYearMap:{},testReal:[],testForm:[],catalogId:"",classifyListData:["1"],isEmptyContent:!1,visible:!0,provinceData:[],cityData:[],countyData:[],knowledgeData:[],cityValue:"",countyValue:"",knowledgeValue:"",earlierFlag:0,yearValue:[]},e.testFormChange=function(e){},e.onProvinceChange=function(t,a){e.setState({provinceValue:t,cityData:[],countyData:[]},(function(){Object(A.w)({parentCode:t}).then((function(a){var n=a;t&&e.setState({cityData:n})}))}))},e.onCityChange=function(t,a){e.setState({cityValue:t,countyData:[]},(function(){Object(A.w)({parentCode:t}).then((function(a){var n=a;t&&e.setState({countyData:n})}))}))},e.onCountyChange=function(t,a){e.setState({countyValue:t})},e.reData=function(t){var a=e.state,n=a.knowledgeData,r=a.pointsArray;if(n[t].leaf){var s=n[t].parentId;r.splice(t,1),n.splice(t,1);var c=r.filter((function(e){return e!==s})),o=n.filter((function(e){return e.id!==s}));e.setState({pointsArray:c,knowledgeData:o})}else r.splice(t,1),n.splice(t,1),e.setState({pointsArray:r,knowledgeData:n})},e.reAll=function(){e.setState({pointsArray:[],knowledgeData:[]})},e.onChange=function(t){var a=e.state,n=a.examYearMap,r=a.earlierFlag;t.map((function(e){return n[e]})).includes("\u66f4\u65e9")&&(r=1),e.setState({yearValue:t,earlierFlag:r})},e.preventDefault=function(e){e.preventDefault()},e.onPayChange=function(t){e.setState({value:t.target.value})},e.Gogroup=function(){var t=Object(j.a)(k.a.mark((function t(a){var n,r,s,c,o,l,i,u,p,m,h,y,d,f,v,g;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.provinceValue,s=n.cityValue,c=n.countyValue,o=n.source,l=n.yearValue,i=n.checkedKeys,u=n.earlierFlag,p=n.stageId,m=n.subjectId,h=n.title,y=[],a.preventDefault(),d=[],f=[],e.AntForm.props.form.validateFields((function(t,a){if(!t){for(var n in a)a.hasOwnProperty(n)&&(d.push(n.split("_")[1]),d=Array.from(new Set(d)));y=e.formDataFilter(f,d,a)}})),v={title:h,stageId:p,subjectId:m,provinceValue:r,cityValue:s,countyValue:c,source:o,selectWay:2,checkedKeys:i,yearValue:l,earlierFlag:u,generateExamAutoTestList:y},t.next=9,Object(T.d)(v);case 9:"0"!==(g=t.sent).basketSize?e.props.history.push("/teching/group-centers/1/0?".concat(JSON.stringify(g))):w.a.error("\u6ca1\u6709\u5bf9\u5e94\u8bd5\u9898\uff0c\u7ec4\u5377\u5931\u8d25\uff01");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.myStageChange=function(t,a){var n="";0!==a.length&&(n=a[0].stageName+a[1].subjectName),e.setState({stageId:0===t.length?"":t[0],subjectId:0===t.length?"":t[1],title:n},(function(){e.getSubjectKnowledgePointTree()}))},e.knowledgePointCheck=function(t,a){var n,r=[],s=Object(g.a)(a.checkedNodes);try{for(s.s();!(n=s.n()).done;){var c=n.value;r.push(c.props.dataRef)}}catch(o){s.e(o)}finally{s.f()}e.setState({pointsArray:t,knowledgeData:r})},e.renderTreeNodes=function(t){return t.map((function(t){return t.children?V.a.createElement(M,{title:t.name,key:t.id,value:t.id,dataRef:t},e.renderTreeNodes(t.children)):V.a.createElement(M,{title:t.name,key:t.id,value:t.id,dataRef:t})}))},e.source_bak=function(t){t.includes("\u4e0d\u9650")&&e.setState({source:["\u4e0d\u9650"]})},e.source=function(t){e.setState({source:t})},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getExamYearList(5),this.setState({userId:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).user.id:""},(function(){e.getCourseList(),e.getMyStageList()})),this.testReal({groupName:"testReal"}),this.testForm({groupName:"testForm"}),this.getSubjectKnowledgePointTree(),this.getProvince(),this.getSubCanton({parentCode:""})}},{key:"testReal",value:function(){var e=Object(j.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.o)(t);case 2:a=e.sent,this.setState({testReal:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"testForm",value:function(){var e=Object(j.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.o)(t);case 2:a=e.sent,this.setState({testForm:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSubCanton",value:function(){var e=Object(j.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.w)(t);case 2:a=e.sent,this.setState({region:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSubjectKnowledgePointTree",value:function(){var e=Object(j.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=this.state.subjectId)){e.next=5;break}e.t0=[],e.next=8;break;case 5:return e.next=7,Object(P.g)({subjectId:t});case 7:e.t0=e.sent;case 8:a=e.t0,this.setState({subjectKnowledgePointTree:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMyStageList",value:function(){var e=Object(j.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.u)();case 2:t=e.sent,a=t.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{subjectName:e.stageName,id:e.stageId})})),this.setState({mySubjectList:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getExamYearList",value:function(e){for(var t=(new Date).getFullYear(),a=[],n={},r=0;r<e;r++){var s={value:t-r};s.key=r===e-1?"\u66f4\u65e9":t-r,n[s.value]=s.key,a.push(s)}this.setState({examYearList:a,examYearMap:n})}},{key:"getCourseList",value:function(){var e=Object(j.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)({userId:this.state.userId});case 2:t=e.sent,this.setState({subjectList:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProvince",value:function(){var e=Object(j.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.w)();case 2:t=e.sent,a=t,t&&t.length>0&&this.setState({provinceData:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"formDataFilter",value:function(e,t,a){return t.forEach((function(t){var n={};for(var r in a)a.hasOwnProperty(r)&&-1!==r.indexOf(t)&&(n[r.split("_")[0]]=a[r]);var s=Object(v.a)(Object(v.a)({},n),{},{type:t});e.push(s)})),e}},{key:"render",value:function(){var e=this,t=this.state,a=t.mySubjectList,n=t.subjectKnowledgePointTree,s=t.examYearList,o=t.provinceData,i=t.cityData,p=t.countyData,h=t.testReal,d=t.knowledgeData,v=V.a.createElement("div",null,V.a.createElement(f.a,{placeholder:"\u9009\u62e9\u5b66\u79d1",options:a,fieldNames:{label:"subjectName",value:"id",children:"subjectList"},onChange:this.myStageChange}),V.a.createElement(F.a,{checkable:!0,checkedKeys:this.state.pointsArray,onCheck:this.knowledgePointCheck},this.renderTreeNodes(n)));return V.a.createElement("div",{className:"knowledgeTest-wrap teach-main"},V.a.createElement("div",{className:" teach-main-box"},V.a.createElement(R.a,{navName:"test-library"}),V.a.createElement("div",{className:"teach-main-cont"},V.a.createElement(y.a,{className:"retrieval-wrap"},V.a.createElement(K.a,{navName:"noopsyche-test"})),V.a.createElement(y.a,{gutter:16},V.a.createElement(m.a,{span:6},V.a.createElement("div",{className:"paper-right-menu"},V.a.createElement("div",{className:"version-detail"},v))),V.a.createElement(m.a,{span:18,className:"paper-right-top"},V.a.createElement("div",{className:"noopsy-top-content"},V.a.createElement(y.a,{span:24},V.a.createElement(m.a,{span:12},V.a.createElement("p",{className:"noopsy-select"},"\u5df2\u9009\u77e5\u8bc6\u70b9(",d.length,"\u4e2a)")),V.a.createElement(m.a,{span:12},V.a.createElement("p",{className:"noopsy-empty",onClick:function(){return e.reAll()}},V.a.createElement(u.a,{type:"delete"}),"\u6e05\u7a7a"))),V.a.createElement(y.a,{span:24,style:{display:d.length>0?"block":"none"}},d.length>0?d.map((function(t,a){return V.a.createElement(l.a,{closable:!0,className:"noopsy-select-item",onClose:function(){return e.reData(a)},key:a},t.name)})):""),V.a.createElement(y.a,{span:24,style:{display:d.length<=0?"block":"none"}},V.a.createElement("p",{className:"noopsy-content-empty"},"\u60a8\u672a\u9009\u62e9\u77e5\u8bc6\u70b9\uff01"))),V.a.createElement("div",{className:"noopsy-top-content"},V.a.createElement(y.a,{span:24},V.a.createElement("p",{className:"noopsy-select"},"\u6765\u6e90\u8bbe\u7f6e: ")),V.a.createElement(y.a,{span:24,className:"noopsy-m20 year-group source-set"},V.a.createElement(m.a,{span:3,className:"m20"},V.a.createElement(c.a.Group,{onChange:this.source_bak,value:this.state.source},V.a.createElement(m.a,{span:3,className:"m20"},V.a.createElement(c.a,{value:"\u4e0d\u9650"},"\u4e0d\u9650")))),V.a.createElement(m.a,{span:21,className:"m20"},V.a.createElement(c.a.Group,{onChange:this.source,value:this.state.source},h.length>0?h.map((function(e,t){return V.a.createElement(m.a,{span:4,className:"m20",key:t},V.a.createElement(c.a,{value:e.value},e.text))})):""))),V.a.createElement(y.a,{span:24},V.a.createElement("p",{className:"noopsy-select"},"\u8bd5\u9898\u66f4\u65b0\u5e74\u4efd: ")),V.a.createElement(y.a,{span:24,className:"noopsy-m20 year-group"},V.a.createElement(c.a.Group,{onChange:this.onChange},s.length>0?s.map((function(e,t){return V.a.createElement(c.a,{key:t,value:e.value},e.key)})):"")),V.a.createElement(y.a,{span:24},V.a.createElement("p",{className:"noopsy-select"},"\u5730\u533a\u8bbe\u7f6e\uff08\u82e5\u9009\u62e9\u5730\u533a\uff0c\u7cfb\u7edf\u9700\u8981\u957f\u65f6\u95f4\u8fdb\u884c\u6652\u9009\uff0c\u8bf7\u8010\u5fc3\u7b49\u5019\uff09")),V.a.createElement(D.a,{placeholder:"\u8bf7\u9009\u62e9\u7701",onChange:this.onProvinceChange,style:{width:200}},V.a.createElement(_,{key:"",value:""},"\u8bf7\u9009\u62e9\u7701"),o.length&&o.map((function(e,t){return V.a.createElement(_,{key:e.value,value:e.value},e.title)}))),V.a.createElement(D.a,{placeholder:"\u8bf7\u9009\u62e9\u5e02",style:{width:200},dropdownClassName:"sele-height",dropdownMatchSelectWidth:!0,onChange:this.onCityChange},V.a.createElement(_,{key:"",value:""},"\u8bf7\u9009\u62e9\u5e02"),i.length&&i.map((function(e,t){return V.a.createElement(_,{key:e.value,value:e.value},e.title)}))),V.a.createElement(D.a,{placeholder:"\u8bf7\u9009\u62e9\u53bf",style:{width:200},dropdownClassName:"sele-height",dropdownMatchSelectWidth:!0,onChange:this.onCountyChange},V.a.createElement(_,{key:"",value:""},"\u8bf7\u9009\u62e9\u53bf"),p.length&&p.map((function(e,t){return V.a.createElement(_,{key:e.value,value:e.value},e.title)})))),V.a.createElement("div",{className:"noopsy-top-content"},V.a.createElement(Y.a,{wrappedComponentRef:function(t){e.AntForm=t}})),V.a.createElement(r.a,{key:"submit",className:"generate-test",type:"primary",onClick:this.Gogroup},"\u751f\u6210\u8bd5\u5377"))))))}}]),a}(L.Component);t.default=z}}]);