(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[80],{1762:function(e,t,s){"use strict";s(41);var a,c=s(8),n=s.n(c),o=(s(317),s(206)),i=s.n(o),r=(s(45),s(6)),l=s.n(r),d=(s(276),s(83)),u=s.n(d),m=(s(67),s(28)),h=s.n(m),p=s(9),I=s(12),g=s(11),f=s(10),v=s(0),S=s.n(v),y=(s(1789),s(35)),k=s(1794),w=s(1791),b=s(239),E=s(520),C=(s.n(E)()(),Object(y.g)(a=function(e){Object(g.a)(s,e);var t=Object(f.a)(s);function s(e){var a;return Object(p.a)(this,s),(a=t.call(this,e)).getClassRoom=function(){var e=a.state,t=e.classroomId,s=e.stepId;Object(b.s)([t,s]).then((function(e){e&&a.setState({classStatus:e.classStatus})}))},a.state={switchStatus:!0,classBtnContent:0==sessionStorage.getItem("stepId")?"\u8bfe\u524d\u9884\u4e60":2==sessionStorage.getItem("stepId")?"\u8bfe\u540e\u590d\u4e60":"\u8bfe\u5802\u6559\u5b66",stepId:sessionStorage.getItem("stepId")?sessionStorage.getItem("stepId"):1,courseId:"",classroomId:"",catalogId:"",classStatus:""},a}return Object(I.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search.split("?")[1];if(t){var s=t.includes("%")?decodeURI(t):t,a=JSON.parse(s);this.setState({courseId:a.courseId,classroomId:a.classroomId,catalogId:a.catalogId,pathname:a.pathname,id:a.id,homeworkId:a.homeworkId},(function(){e.getClassRoom()}))}}},{key:"rightSwitch",value:function(){this.props.open({isOpen:!0})}},{key:"goBack",value:function(){var e=this.state,t=e.catalogId,s=e.courseId,a=e.classroomId,c=e.pathname,n=e.id,o=e.homeworkId,i={courseId:s,classroomId:a,catalogId:t};if(sessionStorage.removeItem("coursewareBack"),c)return n&&(i.id=n),o&&(i.homeworkId=o),void this.props.history.replace("".concat(c,"?").concat(encodeURI(JSON.stringify(i))));this.props.history.replace("/teching/projection-screen?".concat(encodeURI(JSON.stringify(i))))}},{key:"finishClass",value:function(){var e=this,t=this.state.classStatus,s=3==t?"\u786e\u5b9a\u8981\u9000\u51fa\u5417\uff1f":"\u786e\u5b9a\u8981\u4e0b\u8bfe\u5417\uff1f";h.a.confirm({title:"\u63d0\u793a",content:s,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",className:"ModalConfirm border_none",onOk:function(){if(2==t){var s={id:e.state.classroomId,releaseStatus:2,over:9};Object(b.j)(s).then((function(t){0==t.code&&(localStorage.setItem("changeClass",e.state.classroomId),e.props.history.replace("/"))}))}else 3==t&&e.props.history.replace("/")},onCancel:function(){}})}},{key:"render",value:function(){var e=this,t=this.state,s=t.courseId,a=t.classroomId,c=t.catalogId,n=t.classStatus,o=this.props.changeBtn;return S.a.createElement("div",null,this.props.goBackVis?"":S.a.createElement("p",{onClick:this.goBack.bind(this)},S.a.createElement("i",{className:"iconfont"},"\ue6ba"),"\u8fd4\u56de"),o?S.a.createElement("div",null," ",S.a.createElement(i.a,{overlay:S.a.createElement(u.a,null,S.a.createElement(u.a.Item,{key:"0",onClick:function(t){sessionStorage.setItem("stepId",0),e.goBack(),e.setState({classBtnContent:t.item.props.children,stepId:0},(function(){e.props.stepCut({stepId:0}),e.setState({stepId:0})}))}},"\u8bfe\u524d\u9884\u4e60"),S.a.createElement(u.a.Item,{key:"1",onClick:function(t){sessionStorage.setItem("stepId",1),e.goBack(),e.setState({classBtnContent:t.item.props.children,stepId:1},(function(){e.props.stepCut({stepId:1}),e.setState({stepId:1})}))}},"\u8bfe\u5802\u6559\u5b66"),S.a.createElement(u.a.Item,{key:"2",onClick:function(t){sessionStorage.setItem("stepId",2),e.goBack(),e.setState({classBtnContent:t.item.props.children,stepId:2},(function(){e.props.stepCut({stepId:2}),e.setState({stepId:2})}))}},"\u8bfe\u540e\u590d\u4e60")),trigger:["click"],placement:"topCenter",className:"class-dropdown"},S.a.createElement(l.a,null,0==sessionStorage.getItem("stepId")?"\u8bfe\u524d\u9884\u4e60":2==sessionStorage.getItem("stepId")?"\u8bfe\u540e\u590d\u4e60":"\u8bfe\u5802\u6559\u5b66",S.a.createElement(k.a,null))),S.a.createElement("p",{onClick:function(){e.finishClass()}},S.a.createElement("i",{className:"iconfont"},"\ue634"),3==n?"\u9000\u51fa":"\u4e0b\u8bfe"),S.a.createElement("p",{onClick:function(){var t={courseId:s,classroomId:a,catalogId:c};sessionStorage.setItem("coursewareBack","success"),sessionStorage.removeItem("prevIds"),e.props.history.replace("/teching/projection-screen/courseware?".concat(encodeURI(JSON.stringify(t))))}},S.a.createElement("i",{className:"iconfont"},"\ue75b"),"\u8bfe\u4ef6"),S.a.createElement("div",{className:"switch",title:"\u6253\u5f00/\u5173\u95ed\u4e92\u52a8\u5217\u8868",onClick:this.rightSwitch.bind(this)},S.a.createElement(w.a,null))):null,S.a.createElement("p",{style:{float:"right"},onClick:function(){window.location.reload(!0)}},S.a.createElement("i",{className:"iconfont"},"\ue6a7"),"\u5237\u65b0"))}}]),s}(v.Component))||a),O=n.a.create()(C);t.a=O},1785:function(e,t,s){"use strict";var a=s(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},n=s(238),o=function(e,t){return a.createElement(n.a,Object.assign({},e,{ref:t,icon:c}))};o.displayName="RightOutlined";t.a=a.forwardRef(o)},1791:function(e,t,s){"use strict";var a=s(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},n=s(238),o=function(e,t){return a.createElement(n.a,Object.assign({},e,{ref:t,icon:c}))};o.displayName="MenuUnfoldOutlined";t.a=a.forwardRef(o)},1794:function(e,t,s){"use strict";var a=s(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},n=s(238),o=function(e,t){return a.createElement(n.a,Object.assign({},e,{ref:t,icon:c}))};o.displayName="UpOutlined";t.a=a.forwardRef(o)},1971:function(e,t,s){},2724:function(e,t,s){"use strict";s.r(t);s(41);var a,c=s(8),n=s.n(c),o=(s(43),s(2)),i=s.n(o),r=(s(40),s(5)),l=s.n(r),d=s(9),u=s(12),m=s(11),h=s(10),p=s(0),I=s.n(p),g=(s(1971),s(35)),f=(s(1776),s(1762)),v=s(520),S=s.n(v),y=s(239),k=S()(),w=Object(g.g)(a=function(e){Object(m.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).getClassRoom=function(){var e=a.state,t=e.classroomId,s=e.stepId;Object(y.s)([t,s]).then((function(e){e&&a.setState({courseName:e.courseName})}))},a.change=function(){a.setState({action:!0})},a.state={leftStyle:{width:"100%"},rightStyle:{width:"18%"},switchStatus:!0,stepId:sessionStorage.getItem("stepId")?sessionStorage.getItem("stepId"):1,activityId:"",courseId:"",catalogId:"",action:!1},a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search.split("?")[1],s=t.includes("%")?decodeURI(t):t,a=JSON.parse(s);sessionStorage.setItem("addBusyBack","success"),this.setState({activityId:a.activityId,courseId:a.courseId,catalogId:a.catalogId,classroomId:a.classroomId,homeworkId:a.homeworkId,titleType:a.titleType},(function(){return e.getClassRoom()}))}},{key:"rightSwitch",value:function(){this.state.switchStatus?this.setState({switchStatus:!1,leftStyle:{width:"100%"},rightStyle:{width:"0",minWidth:"0"}}):this.setState({switchStatus:!0,leftStyle:{width:"82%"},rightStyle:{width:"18%",minWidth:"300px"}})}},{key:"goBack",value:function(){k.goBack(-1)}},{key:"render",value:function(){var e=this,t=this.state,s=t.leftStyle,a=t.titleType,c=t.courseName,n=(t.rightStyle,{activityId:t.activityId,courseId:t.courseId,catalogId:t.catalogId,stepId:t.stepId,classroomId:t.classroomId,isShow:!0,titleType:a,homeworkId:t.homeworkId});return I.a.createElement("div",{className:"interaction"},I.a.createElement(i.a,{className:"screen-left",style:s},I.a.createElement("div",{className:"screen-left-top"},c),I.a.createElement(l.a,{className:"team-score"},I.a.createElement("iframe",{ref:"iframe",title:"resg",style:{width:"100%",border:"1px solid rgba(230, 230, 230, 1)",borderRadius:"5px",display:"block",height:"100%"},src:"/#/teaching/my-course/add-busy?".concat(encodeURI(JSON.stringify(n))),scrolling:"auto"})),I.a.createElement("div",{className:"screen-left-bottom"},I.a.createElement(f.a,{refresh:function(){window.location.reload(!0)},open:this.rightSwitch.bind(this),stepCut:function(t){e.setState({stepId:t.stepId},(function(){return e.change()}))}}))))}}]),s}(p.Component))||a,b=n.a.create()(w);t.default=b}}]);