(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[81],{1762:function(e,t,a){"use strict";a(41);var s,n=a(8),c=a.n(n),r=(a(317),a(206)),o=a.n(r),i=(a(45),a(6)),l=a.n(i),m=(a(276),a(83)),d=a.n(m),u=(a(67),a(28)),p=a.n(u),h=a(9),I=a(12),f=a(11),g=a(10),v=a(0),y=a.n(v),E=(a(1789),a(35)),S=a(1794),w=a(1791),k=a(239),b=a(520),N=(a.n(b)()(),Object(E.g)(s=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).getClassRoom=function(){var e=s.state,t=e.classroomId,a=e.stepId;Object(k.s)([t,a]).then((function(e){e&&s.setState({classStatus:e.classStatus})}))},s.state={switchStatus:!0,classBtnContent:0==sessionStorage.getItem("stepId")?"\u8bfe\u524d\u9884\u4e60":2==sessionStorage.getItem("stepId")?"\u8bfe\u540e\u590d\u4e60":"\u8bfe\u5802\u6559\u5b66",stepId:sessionStorage.getItem("stepId")?sessionStorage.getItem("stepId"):1,courseId:"",classroomId:"",catalogId:"",classStatus:""},s}return Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search.split("?")[1];if(t){var a=t.includes("%")?decodeURI(t):t,s=JSON.parse(a);this.setState({courseId:s.courseId,classroomId:s.classroomId,catalogId:s.catalogId,pathname:s.pathname,id:s.id,homeworkId:s.homeworkId},(function(){e.getClassRoom()}))}}},{key:"rightSwitch",value:function(){this.props.open({isOpen:!0})}},{key:"goBack",value:function(){var e=this.state,t=e.catalogId,a=e.courseId,s=e.classroomId,n=e.pathname,c=e.id,r=e.homeworkId,o={courseId:a,classroomId:s,catalogId:t};if(sessionStorage.removeItem("coursewareBack"),n)return c&&(o.id=c),r&&(o.homeworkId=r),void this.props.history.replace("".concat(n,"?").concat(encodeURI(JSON.stringify(o))));this.props.history.replace("/teching/projection-screen?".concat(encodeURI(JSON.stringify(o))))}},{key:"finishClass",value:function(){var e=this,t=this.state.classStatus,a=3==t?"\u786e\u5b9a\u8981\u9000\u51fa\u5417\uff1f":"\u786e\u5b9a\u8981\u4e0b\u8bfe\u5417\uff1f";p.a.confirm({title:"\u63d0\u793a",content:a,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",className:"ModalConfirm border_none",onOk:function(){if(2==t){var a={id:e.state.classroomId,releaseStatus:2,over:9};Object(k.j)(a).then((function(t){0==t.code&&(localStorage.setItem("changeClass",e.state.classroomId),e.props.history.replace("/"))}))}else 3==t&&e.props.history.replace("/")},onCancel:function(){}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.courseId,s=t.classroomId,n=t.catalogId,c=t.classStatus,r=this.props.changeBtn;return y.a.createElement("div",null,this.props.goBackVis?"":y.a.createElement("p",{onClick:this.goBack.bind(this)},y.a.createElement("i",{className:"iconfont"},"\ue6ba"),"\u8fd4\u56de"),r?y.a.createElement("div",null," ",y.a.createElement(o.a,{overlay:y.a.createElement(d.a,null,y.a.createElement(d.a.Item,{key:"0",onClick:function(t){sessionStorage.setItem("stepId",0),e.goBack(),e.setState({classBtnContent:t.item.props.children,stepId:0},(function(){e.props.stepCut({stepId:0}),e.setState({stepId:0})}))}},"\u8bfe\u524d\u9884\u4e60"),y.a.createElement(d.a.Item,{key:"1",onClick:function(t){sessionStorage.setItem("stepId",1),e.goBack(),e.setState({classBtnContent:t.item.props.children,stepId:1},(function(){e.props.stepCut({stepId:1}),e.setState({stepId:1})}))}},"\u8bfe\u5802\u6559\u5b66"),y.a.createElement(d.a.Item,{key:"2",onClick:function(t){sessionStorage.setItem("stepId",2),e.goBack(),e.setState({classBtnContent:t.item.props.children,stepId:2},(function(){e.props.stepCut({stepId:2}),e.setState({stepId:2})}))}},"\u8bfe\u540e\u590d\u4e60")),trigger:["click"],placement:"topCenter",className:"class-dropdown"},y.a.createElement(l.a,null,0==sessionStorage.getItem("stepId")?"\u8bfe\u524d\u9884\u4e60":2==sessionStorage.getItem("stepId")?"\u8bfe\u540e\u590d\u4e60":"\u8bfe\u5802\u6559\u5b66",y.a.createElement(S.a,null))),y.a.createElement("p",{onClick:function(){e.finishClass()}},y.a.createElement("i",{className:"iconfont"},"\ue634"),3==c?"\u9000\u51fa":"\u4e0b\u8bfe"),y.a.createElement("p",{onClick:function(){var t={courseId:a,classroomId:s,catalogId:n};sessionStorage.setItem("coursewareBack","success"),sessionStorage.removeItem("prevIds"),e.props.history.replace("/teching/projection-screen/courseware?".concat(encodeURI(JSON.stringify(t))))}},y.a.createElement("i",{className:"iconfont"},"\ue75b"),"\u8bfe\u4ef6"),y.a.createElement("div",{className:"switch",title:"\u6253\u5f00/\u5173\u95ed\u4e92\u52a8\u5217\u8868",onClick:this.rightSwitch.bind(this)},y.a.createElement(w.a,null))):null,y.a.createElement("p",{style:{float:"right"},onClick:function(){window.location.reload(!0)}},y.a.createElement("i",{className:"iconfont"},"\ue6a7"),"\u5237\u65b0"))}}]),a}(v.Component))||s),C=c.a.create()(N);t.a=C},1785:function(e,t,a){"use strict";var s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},c=a(238),r=function(e,t){return s.createElement(c.a,Object.assign({},e,{ref:t,icon:n}))};r.displayName="RightOutlined";t.a=s.forwardRef(r)},1791:function(e,t,a){"use strict";var s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},c=a(238),r=function(e,t){return s.createElement(c.a,Object.assign({},e,{ref:t,icon:n}))};r.displayName="MenuUnfoldOutlined";t.a=s.forwardRef(r)},1794:function(e,t,a){"use strict";var s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},c=a(238),r=function(e,t){return s.createElement(c.a,Object.assign({},e,{ref:t,icon:n}))};r.displayName="UpOutlined";t.a=s.forwardRef(r)},1971:function(e,t,a){},2735:function(e,t,a){"use strict";a.r(t);a(97);var s=a(14),n=a.n(s),c=(a(382),a(168)),r=a.n(c),o=(a(45),a(6)),i=a.n(o),l=(a(40),a(5)),m=a.n(l),d=(a(51),a(22)),u=a.n(d),p=(a(43),a(2)),h=a.n(p),I=a(3),f=a.n(I),g=a(7),v=(a(54),a(15)),y=a.n(v),E=(a(67),a(28)),S=a.n(E),w=a(9),k=a(12),b=a(52),N=a(11),C=a(10),O=(a(41),a(8)),j=a.n(O),B=a(0),R=a.n(B),T=(a(1971),a(1776),a(1762)),x=a(239),M=a(36),A=a.n(M),z=j.a.Item,H=function(e){Object(N.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(w.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={classroomId:"",stepId:sessionStorage.getItem("stepId")?sessionStorage.getItem("stepId"):1,leftStyle:{width:"100%"},rightStyle:{width:"18%"},courseId:"",catalogId:"",homeworkId:"",homeworkName:"",relateResourceName:"",studyFromTime:"",studyEndTime:"",publishAnswerType:"",catalogArr:""},e.getClassRoom=function(){var t=e.state,a=t.classroomId,s=t.stepId;Object(x.s)([a,s]).then((function(t){t&&e.setState({courseName:t.courseName})}))},e.getParams=function(t){var a=t.location.search.split("?")[1],s=a.includes("%")?decodeURI(a):a,n=JSON.parse(s),c=n.courseId,r=n.catalogId,o=n.classroomId,i=n.homeworkId;e.setState({homeworkId:i,activityId:n.activityId,courseId:c,catalogId:r,classroomId:o,pathname:n.pathname,id:n.id,activityStatus:n.activityStatus},(function(){e.getHomeWork(),e.GetOneHomework(r),e.getClassRoom()}))},e.GetOneHomework=function(t){Object(x.a)(t).then((function(t){var a=t;e.setState({catalogArr:a&&a.length>0?a.reverse().join(">"):"\u65e0"})}))},e.delInteract=function(){var t=Object(b.a)(e),a=e.state.activityId?e.state.activityId:sessionStorage.getItem("busy");S.a.confirm({title:"\u63d0\u793a",content:"\u786e\u5b9a\u8981\u5220\u9664\u8be5\u4e92\u52a8\u5417\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",className:"ModalConfirm border_none",onOk:function(){Object(x.f)(a).then((function(e){var a=t.state,s=a.courseId,n=a.classroomId,c=a.catalogId,r=a.id,o=a.pathname;if(0===e.code){y.a.success("\u5220\u9664\u6210\u529f!");var i={courseId:s,classroomId:n,catalogId:c};if(o)return r&&(i.id=r),void t.props.history.replace("".concat(o,"?").concat(encodeURI(JSON.stringify(i))));t.props.history.replace("/teching/projection-screen?".concat(encodeURI(JSON.stringify(i))))}}))},onCancel:function(){}})},e.beginActivity=function(){Object(x.b)({activityId:e.state.activityId}).then((function(e){y.a.success("\u6d3b\u52a8\u5df2\u5f00\u542f")}))},e.resetBusy=function(){var t={activityId:e.state.activityId,homeworkId:e.state.homeworkId,classroomId:e.state.classroomId,courseId:e.state.courseId,catalogId:e.state.catalogId,pathname:e.props.location.pathname};e.props.history.replace("/teching/projection-screen/added-busy?".concat(encodeURI(JSON.stringify(t))))},e}return Object(k.a)(a,[{key:"componentDidMount",value:function(){this.getParams(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.getParams(e)}},{key:"getHomeWork",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:this.state.homeworkId},e.next=3,Object(x.r)(t);case 3:(a=e.sent)&&this.setState({homeworkName:a.homeworkName,relateResourceName:a.relateResourceName,studyFromTime:a.studyFromTime,studyEndTime:a.studyEndTime,publishAnswerType:a.publishAnswerType});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"rightSwitch",value:function(){this.state.switchStatus?this.setState({switchStatus:!1,leftStyle:{width:"100%"},rightStyle:{width:"0",minWidth:"0"}}):this.setState({switchStatus:!0,leftStyle:{width:"82%"},rightStyle:{width:"18%",minWidth:"300px"}})}},{key:"render",value:function(){var e=this,t={labelCol:{span:3},wrapperCol:{span:19}},a={wrapperCol:{span:24}},s=this.state,c=s.homeworkName,o=s.relateResourceName,l=s.studyFromTime,d=s.studyEndTime,p=s.publishAnswerType,I=s.catalogArr,f=s.startFlag,g=s.courseName,v=this.props.form.getFieldDecorator,y=this.state,E=y.leftStyle,S=(y.rightStyle,y.activityStatus);return R.a.createElement("div",{className:"interaction"},R.a.createElement(m.a,{className:"screen-left",style:E},R.a.createElement("div",{className:"screen-left-top"},g),R.a.createElement(h.a,{span:24},R.a.createElement("div",{className:"form-tab"},R.a.createElement(j.a,Object.assign({layout:"horizontal",style:{paddingBottom:18}},t,{onFinish:this.onFinish}),R.a.createElement(m.a,null,R.a.createElement(h.a,{span:3},R.a.createElement("span",{className:"create-course-title "},"\u6240\u5c5e\u7ae0\u8282\uff1a")),R.a.createElement(h.a,null,R.a.createElement(z,t,v("bigMajorId",{initialValue:I})(R.a.createElement(u.a,{style:{width:"90%"},type:"text",placeholder:"",maxLength:50,disabled:!0}))))),R.a.createElement(m.a,null,R.a.createElement(h.a,{span:3},R.a.createElement("span",{className:"create-course-title "},R.a.createElement("span",{className:"red"},"*"),"\u9009\u62e9\u4f5c\u4e1a\uff1a")),R.a.createElement(h.a,{span:16,className:"special-form"},R.a.createElement(z,a,v("patternValue",{initialValue:o})(R.a.createElement(u.a,{style:{width:"98%"},disabled:!0})))),R.a.createElement(h.a,{span:2},R.a.createElement(i.a,{onClick:function(){return e.addCourseClick()},disabled:0!=f},"\u9009\u62e9"))),R.a.createElement(m.a,null,R.a.createElement(h.a,{span:3},R.a.createElement("span",{className:"create-course-title "},R.a.createElement("span",{className:"red"},"*"),"\u4f5c\u4e1a\u540d\u79f0\uff1a")),R.a.createElement(h.a,null,R.a.createElement(z,t,v("homeworkName",{initialValue:c,rules:[{required:!0,message:"\u4f5c\u4e1a\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a!"}]})(R.a.createElement(u.a,{style:{width:"90%"},disabled:!0}))))),R.a.createElement(m.a,null,R.a.createElement(h.a,{span:3},R.a.createElement("span",{className:"create-course-title "},R.a.createElement("span",{className:"red"},"*"),"\u5f00\u59cb\u65f6\u95f4\uff1a")),R.a.createElement(h.a,null,R.a.createElement(z,null,v("studyFromTime",{initialValue:l?A()(l||"YYYY-MM-DD HH:mm:ss"):void 0,rules:[{required:!0,message:"\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a!"}]})(R.a.createElement(r.a,{style:{width:"90%"},disabled:!0}))))),R.a.createElement(m.a,null,R.a.createElement(h.a,{span:3},R.a.createElement("span",{className:"create-course-title "},R.a.createElement("span",{className:"red"},"*"),"\u7ed3\u675f\u65f6\u95f4\uff1a")),R.a.createElement(h.a,null,R.a.createElement(z,null,v("studyEndTime",{initialValue:d?A()(d||"YYYY-MM-DD HH:mm:ss"):void 0,rules:[{required:!0,message:"\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a!"}]})(R.a.createElement(r.a,{style:{width:"90%"},disabled:!0}))))),R.a.createElement(m.a,null,R.a.createElement(h.a,{span:3},R.a.createElement("span",{className:"create-course-title "},R.a.createElement("span",{className:"red"},"*"),"\u7b54\u6848\u516c\u5e03 \uff1a")),R.a.createElement(h.a,null,R.a.createElement(z,null,v("publishAnswerType",{initialValue:p})(R.a.createElement(n.a.Group,{disabled:!0,onChange:function(t){e.setState({publishAnswerType:t.target.value})}},R.a.createElement(n.a.Button,{value:"1",disabled:!0},"\u4f5c\u4e1a\u622a\u6b62\u540e\u516c\u5e03"),R.a.createElement(n.a.Button,{value:"2",disabled:!0},"\u5b66\u751f\u4ea4\u5377\u540e\u516c\u5e03"))))))))),0==S?R.a.createElement("div",{style:{bottom:"61px"},className:"activity_btn"},R.a.createElement(i.a,{onClick:this.resetBusy},"\u7f16\u8f91"),R.a.createElement(i.a,{onClick:this.delInteract},"\u5220\u9664")):2==S?R.a.createElement("div",{style:{bottom:"61px"},className:"activity_btn"},R.a.createElement(i.a,{onClick:this.delInteract},"\u5220\u9664")):"",R.a.createElement("div",{className:"screen-left-bottom"},R.a.createElement(T.a,{refresh:function(){window.location.reload(!0)},open:this.rightSwitch.bind(this),stepCut:function(t){e.setState({stepId:t.stepId})}}))))}}]),a}(B.Component),J=j.a.create()(H);t.default=J}}]);