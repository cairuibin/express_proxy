(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[113],{2116:function(e,t,a){},2117:function(e,t,a){e.exports=a.p+"static/media/login.7f322a83.mp4"},2686:function(e,t,a){"use strict";a.r(t);a(67);var s=a(28),n=a.n(s),r=(a(45),a(6)),i=a.n(r),l=(a(51),a(22)),c=a.n(l),m=(a(54),a(15)),o=a.n(m),u=a(3),p=a.n(u),d=a(7),h=a(9),f=a(12),g=a(11),v=a(10),y=(a(41),a(8)),E=a.n(y),N=a(0),w=a.n(N),b=a(78),k=a.n(b),S=a(175),C=a(267),x=a(38),j=a(70),T=a(31),O=(a(2116),a(1751)),I=Object(O.a)({scriptUrl:"//at.alicdn.com/t/font_1874206_crmq90e53bm.js"}),F=E.a.Item,M=function(e){Object(g.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={loading:!1,valiFlag:!0,userFlag:!0,visible:!1,flag:!0,showNext:!0,nextColorShow:!1,routerType:!1,num:1,count:30,timeFlag:!1},e.showLoding=function(){setTimeout((function(){var e=document.getElementById("StartLoading");e&&document.body.removeChild(e)}),200)},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields(function(){var t=Object(d.a)(p.a.mark((function t(a,s){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=s.userName,r=k()(s.password),a||(e.state.userFlag?Object(x.h)({userName:n,password:r}).then((function(t){e.resetUserInfo(t,s)})):Object(x.l)({userName:n,password:s.password}).then((function(t){e.resetUserInfo(t,s)})));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())},e.sendCheckCode=function(){Object(x.g)({telNum:e.props.form.getFieldsValue(["userName"]).userName,verifyState:"1"}).then((function(t){if(0===t.code){o.a.success("\u53d1\u9001\u6210\u529f");var a=30;e.setState({timeFlag:!0});setTimeout((function t(){if(0===a)return e.setState({timeFlag:!1}),void(a=30);a--,e.setState({count:a}),setTimeout(t,1e3)}),0)}}))},e.forgetPassword=function(){e.setState({visible:!0})},e.handleCancelClass=function(){e.setState({visible:!1,num:1,telNum:"",email:"",text:"",newText:"",newTextAgain:""})},e.handleAddClassification=function(){var t=e.state,a=t.telNum,s=t.email,n=t.text;Object(x.n)({telNum:a,email:s,code:n,verifyIdentity:1}).then((function(t){0===t.code&&e.setState({num:2})}))},e.getVerificationCode=Object(d.a)(p.a.mark((function t(){var a,s,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.state,s=a.telNum,n=a.email,Object(x.c)({telNum:s,email:n}).then((function(){o.a.success("\u53d1\u9001\u6210\u529f");var t=30;e.setState({timeFlag:!0});setTimeout((function a(){if(0===t)return e.setState({timeFlag:!1}),void(t=30);t--,e.setState({count:t}),setTimeout(a,1e3)}),0)})),e.setState({titleShow:!0});case 3:case"end":return t.stop()}}),t)}))),e.updatePassword=function(){var t=e.state,a=t.text,s=t.newText,n=t.newTextAgain,r=t.telNum,i=t.email,l=t.num,c={telNum:r,email:i};if(2===l){if(void 0===s||void 0===n)o.a.warning("\u8bf7\u8f93\u5165\u5bc6\u7801");else if(""!==s.trim()&&s.trim()===n.trim()){var m=Object.assign({},{password:k()(s),repeatPassword:k()(n),code:a},c);Object(x.m)(m).then((function(t){0===t.code&&e.setState({num:3})}))}}else 3===l&&e.setState({num:1,visible:!1,telNum:"",email:"",text:"",newText:"",newTextAgain:""})},e}return Object(f.a)(s,[{key:"componentWillReceiveProps",value:function(e){e.location.pathname!=this.props.location.pathname&&"/teacherLogin"==e.location.pathname&&this.setState({routerType:!1})}},{key:"componentDidMount",value:function(){"shop"==this.props.match.params.routerType&&this.setState({routerType:!0});var e=localStorage.getItem("userName");e&&this.props.form.setFieldsValue({userName:e})}},{key:"resetUserInfo",value:function(e,t){var a=t.userName;localStorage.setItem("type",e?e.user.userMark:""),localStorage.setItem("userName",a),localStorage.setItem("roleTypeId",e&&e.user&&e.user.roleTypeId),localStorage.setItem("ifMultiRole",e&&e.user&&e.user.ifMultiRole);var s=e;if(s){if("0"===s.user.reviewStatus||"\uff12"===s.user.reviewStatus)return void o.a.error("\u672a\u901a\u8fc7\u5ba1\u6838\uff01");var n=s.user&&s.user.token;this.props.setUserInfo(Object.assign({},s)),localStorage.setItem("userInfo",JSON.stringify(Object.assign({},s))),Object(j.c)(n),"1"===s.user.userMark?this.props.history.push("/student-space"):"2"===s.user.userMark||"3"===s.user.userMark?this.props.history.push("/teaching-space"):"4"===s.user.userMark?this.props.history.push("/student-space"):"5"===s.user.userMark?this.props.history.push("/teaching-space"):"6"===s.user.userMark?this.props.history.push("/student-space"):"7"===s.user.userMark||"8"===s.user.userMark||"9"===s.user.userMark?this.props.history.push("/management-space"):o.a.error("\u7528\u6237\u7c7b\u578b\u9519\u8bef\uff01")}}},{key:"userLogin",value:function(){this.setState({userFlag:!0})}},{key:"checkCodeLogin",value:function(){this.setState({userFlag:!1})}},{key:"timeDelete",value:function(){this.state.count}},{key:"changeStyle",value:function(e){this.setState({flag:e})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,s=this.state,r=s.userFlag,l=s.num,m=s.text,o=s.newText,u=s.newTextAgain,p=s.visible,d=s.flag,h=s.telNum,f=s.email,g=s.titleShow,v=s.showNext,y=s.timeFlag,N=s.count;return w.a.createElement("div",{className:"login-wrap-main"},w.a.createElement("div",{className:"login-top"},w.a.createElement("div",{className:"width-main"},w.a.createElement("span",{className:"logo"},w.a.createElement(T.b,{to:"/"},w.a.createElement("img",{className:"img-password",src:a(389)}))),w.a.createElement("span",{className:"text-right",onClick:function(){return e.props.history.push("/administrator")}},w.a.createElement(I,{type:"icon-guanliyuan",className:"icon-img"}),"\u7ba1\u7406\u5458\u767b\u5f55"))),w.a.createElement("div",{className:"main-warptext"},w.a.createElement("div",{className:"content-wrap"},w.a.createElement("div",{className:"width-main"},w.a.createElement("div",{className:"img-left"},w.a.createElement("video",{src:a(2117),loop:"loop",autoplay:"autoplay"})),w.a.createElement("div",{className:"main-login-wrap"},w.a.createElement("div",{className:"login-box"},w.a.createElement("div",{className:"login-title"},w.a.createElement("div",null,"\u8d26\u53f7\u767b\u5f55")),w.a.createElement(E.a,{className:"login-form login-form-h",style:{display:p?"none":"block"},onSubmit:this.handleSubmit},w.a.createElement(F,{className:"form-it"},w.a.createElement("p",null,"\u7528\u6237\u540d"),t("userName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7!"}]})(w.a.createElement(c.a,{allowClear:!0,placeholder:r?"\u7528\u6237\u540d":"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}))),w.a.createElement(F,{className:"form-it form-it-last"},w.a.createElement("p",null,"\u5bc6\u7801"),t("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}]})(w.a.createElement(c.a,{allowClear:!0,min:"6",style:{width:r?"100%":150},type:r?"password":"text",placeholder:r?"\u5bc6\u7801":"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})),w.a.createElement(i.a,{type:y?"":"primary",disabled:y,style:{display:r?"none":"block",marginLeft:"10px",height:38,width:145,color:y?"#000":"#fff"},onClick:this.sendCheckCode.bind(this)},y?N+"\u79d2\u540e\u53ef\u91cd\u65b0\u53d1\u9001":"\u53d1\u9001\u9a8c\u8bc1\u7801")),w.a.createElement(F,null,w.a.createElement(i.a,{htmlType:"submit",className:"login-form-button",onSubmit:this.handleSubmit},"\u767b\u5f55")),w.a.createElement("div",{className:"login-mainwarp"},w.a.createElement("div",{className:"text-span"},w.a.createElement(T.b,{to:"/registered"},"\u7533\u8bf7\u6ce8\u518c")),w.a.createElement("p",{onClick:function(){return e.props.history.push("/forget")},className:"forget-password"},"\u5fd8\u8bb0\u5bc6\u7801")))),w.a.createElement(n.a,{visible:p,mask:!1,style:{top:"26%"},title:"\u91cd\u7f6e\u5bc6\u7801",className:"edit-password-modal",onOk:this.handleSetClassification,onCancel:this.handleCancelClass,keyboard:!1,maskClosable:!1,footer:1===l?[w.a.createElement(i.a,{key:"back",onClick:this.handleCancelClass},"\u8fd4\u56de\u767b\u5f55"),w.a.createElement(i.a,{key:"submit",disabled:v,onClick:this.handleAddClassification},"\u4e0b\u4e00\u6b65")]:[w.a.createElement(i.a,{key:"back",onClick:this.handleCancelClass,style:{opacity:0}},"\u8fd4\u56de\u767b\u5f55"),w.a.createElement(i.a,{type:"primary",onClick:this.updatePassword},"\u786e\u5b9a")]},w.a.createElement("div",{className:"content-wrapper"},w.a.createElement("div",{className:"wrapper-main",style:{display:"".concat(1===l?"block":"none")}},w.a.createElement("div",{className:"wrapper-main-top"},w.a.createElement("span",{className:d?"active":"",onClick:this.changeStyle.bind(this,!0)},"\u901a\u8fc7\u624b\u673a\u53f7\u9a8c\u8bc1"),w.a.createElement("span",{className:d?"":"active",onClick:this.changeStyle.bind(this,!1),style:{marginLeft:"10%",cursor:"pointer"}},"\u901a\u8fc7\u90ae\u7bb1\u9a8c\u8bc1")),w.a.createElement("div",{className:"wrapper-main-form"},w.a.createElement("div",{className:"main-form-item"},w.a.createElement("div",{className:"form-item-left"},"\u8f93\u5165\u7ed1\u5b9a\u7684",d?"\u624b\u673a\u53f7":"\u90ae\u7bb1"),d?w.a.createElement("div",{className:"form-item-right"},w.a.createElement(c.a,{className:"editIpt",type:"text",value:h,style:{width:"100%",margin:0},onChange:function(t){return e.setState({telNum:t.target.value})}})):w.a.createElement("div",{className:"form-item-right"},w.a.createElement(c.a,{className:"editIpt",type:"text",value:f,style:{width:"100%",margin:0},onChange:function(t){return e.setState({email:t.target.value})}}))),w.a.createElement("div",{className:"main-form-item"},w.a.createElement("div",{className:"form-item-left"},d?"\u624b\u673a\u9a8c\u8bc1\u7801":"\u90ae\u7bb1\u9a8c\u8bc1\u7801"),w.a.createElement("div",{className:"form-item-right"},w.a.createElement(c.a,{type:"text",value:m,style:{width:"100%"},onChange:function(t){e.setState({text:t.target.value}),6===t.target.value.length&&e.setState({showNext:!1})}}),w.a.createElement(i.a,{type:"",disabled:y,style:{marginLeft:"10px",height:38,width:145,color:"rgba(0, 0, 0, 0.65)"},onClick:this.getVerificationCode},y?N+"\u79d2\u540e\u53ef\u91cd\u65b0\u53d1\u9001":"\u53d1\u9001\u9a8c\u8bc1\u7801"))),w.a.createElement("div",{className:"main-form-item"},w.a.createElement("div",{className:"form-item-left left-none"}),w.a.createElement("div",{className:"form-item-right"},w.a.createElement("p",{style:{display:g?"block":"none"}},"\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\u5230\u60a8\u7684",d?"\u624b\u673a":"\u90ae\u7bb1","\u4e0a\uff0c15\u5206\u949f\u5185\u8f93\u5165\u6709\u6548"))))),w.a.createElement("div",{className:"wrapper-main",style:{display:"".concat(2===l?"block":"none")}},w.a.createElement("div",{className:"wrapper-main-form"},w.a.createElement("div",{className:"main-form-item"},w.a.createElement("div",{className:"form-item-left"},"\u8f93\u5165\u65b0\u5bc6\u7801"),w.a.createElement("div",{className:"form-item-right"},w.a.createElement(c.a,{type:"text",value:o,style:{width:"100%",margin:0},placeholder:"\u987b\u540c\u65f6\u5305\u542b\u5b57\u6bcd\u548c\u6570\u5b57\uff0c6\u4f4d\u4ee5\u4e0a",onChange:function(t){return e.setState({newText:t.target.value})}}))),w.a.createElement("div",{className:"main-form-item",style:{height:30}},w.a.createElement("div",{className:"form-item-left left-none"}),w.a.createElement("div",{className:"form-item-right"},w.a.createElement("p",null,"\u53ef\u4f7f\u7528\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u82f1\u6587\u7b26\u53f7\uff0c\u533a\u5206\u5927\u5c0f\u5199"))),w.a.createElement("div",{className:"main-form-item"},w.a.createElement("div",{className:"form-item-left"},"\u518d\u6b21\u8f93\u5165\u65b0\u5bc6\u7801"),w.a.createElement("div",{className:"form-item-right"},w.a.createElement(c.a,{type:"text",value:u,style:{width:"100%",margin:0},placeholder:"\u8bf7\u4fdd\u6301\u4e00\u81f4",onChange:function(t){return e.setState({newTextAgain:t.target.value})}}))))),w.a.createElement("div",{className:"wrapper-main",style:{display:"".concat(3===l?"block":"none")}},w.a.createElement("div",{className:"finish"},w.a.createElement("div",{className:"finish-img"},w.a.createElement("img",{src:a(548)})),w.a.createElement("div",{className:"finish-title"},w.a.createElement("p",null,"\u5bc6\u7801\u4fee\u6539\u6210\u529f"),w.a.createElement("p",null,"\u8bf7\u4f7f\u7528\u65b0\u5bc6\u7801\u8fdb\u884c\u767b\u5f55"))))))))),w.a.createElement("div",{className:"footer-p"},"CopyRight\xa92020zjyve.com.All rights reserved ",w.a.createElement("a",{target:"_blank",href:"http://www.beian.gov.cn/portal/index?token=320d0fad-67f3-4691-a1a4-60346951292e"},"\u4eacIC\u5907\u684820020432\u53f7-3  ")," ")))}}]),s}(w.a.PureComponent);t.default=Object(S.b)((function(e){return e}),(function(e){return{setUserInfo:function(t){e(Object(C.a)(t))}}}))(E.a.create()(M))}}]);