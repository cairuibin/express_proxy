(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[138],{2143:function(e,t,a){},2693:function(e,t,a){"use strict";a.r(t);a(41);var r,s=a(8),o=a.n(s),c=(a(67),a(28)),n=a.n(c),u=(a(109),a(72)),i=a.n(u),l=(a(177),a(110)),d=a.n(l),m=(a(74),a(17)),g=a.n(m),p=(a(97),a(14)),h=a.n(p),f=(a(40),a(5)),y=a.n(f),S=(a(45),a(6)),v=a.n(S),C=(a(43),a(2)),b=a.n(C),I=a(3),k=a.n(I),N=a(7),O=(a(54),a(15)),E=a.n(O),j=a(20),w=a(9),L=a(12),R=a(52),T=a(11),x=a(10),M=(a(178),a(82)),V=a.n(M),D=(a(51),a(22)),F=a.n(D),U=a(0),A=a.n(U),z=a(75),K=(a(2143),a(44)),P=a(27),_=a(209),B=a(541),Y=a(240),J=a(318),$=a(99),H=a(35),G=a(93),W=a(322),q=a(542),Q=a(320),X=a(323),Z=a(111),ee=F.a.Search,te=V.a.TreeNode,ae=Object(H.g)(r=function(e){Object(T.a)(r,e);var t=Object(x.a)(r);function r(){var e;Object(w.a)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isClick:!0,userId:"",subjectList:[],mySubjectList:[],courseTree:[],selectCatalogId:void 0,subjectKnowledgePointTree:[],bookId:void 0,stageId:void 0,subjectId:void 0,catalogStageId:void 0,catalogSubjectId:void 0,knowledgeStageId:void 0,knowledgeSubjectId:void 0,catalogArray:[],catalogArrayChecked:[],pointsArray:[],pointsArrayChecked:[],size:"small",isObligation:!0,isOrdinary:!1,money:!1,resourceList:[],sortSet:{value:"zh",zhOrder:!0,fbOrder:!0,syOrder:!0,scOrder:!0},total:0,pageNum:1,pageSize:18,activeKey:"1",createUserId:void 0,myUnitId:"",courseCloudFlag:"1",resourceName:"",resourceFormatList:Z.e,examYearList:[],testSourceList:[{label:"\u6570\u5b57\u6559\u6750",value:"4"},{label:"\u6821\u5185\u5171\u4eab",value:"2"},{label:"\u4e91\u5171\u4eab",value:"1"}],unitList:[],unitListAll:[],testSourceValue:"",resourceYearCheck:"",resourceTypeCheck:"",resourceFormatCheck:"",selectType:"",shareModel:"",unitId:"",resourceProvince:"",resourceCity:"",resourceCounty:"",orderAscfield:"",orderDescfield:"a.create_time",recommendCourseModal:!1,courseTemplateModal:!1,provinceData:[],cityData:[],countyData:[],addressVisible:!1,examYearVisible:!1,testSourceVisible:!1,resourceProvinceName:"",resourceCityName:"",resourceCountyName:"",examYearName:"",searchValue:void 0,searchValueSchool:void 0,searchValueCourse:void 0,resourceDetailModal:!1,resourceId:"",schoolDisplay:"hide",CourseDisplay:"hide",addResource:"",checkedSubject:"",url:"",hierarchy:"",courseId:"",catalogId:"",classroomId:"",level:"",professionId:"",stepId:"",keys:"",defaultKeys:"",backTypeCourse:"",handIsShow:!1,myStageList:[],resourceOne:sessionStorage.getItem("resourceOne")?sessionStorage.getItem("resourceOne"):"",resource_1:sessionStorage.getItem("resource_1")?sessionStorage.getItem("resource_1"):"",resource_2:sessionStorage.getItem("resourceThree")?sessionStorage.getItem("resourceThree"):"",prepareActiveKey:"",userMark:localStorage.getItem("userInfo")&&JSON.parse(localStorage.getItem("userInfo"))?JSON.parse(localStorage.getItem("userInfo")).user.userMark:"2"},e.onProvinceChange=function(t,a){var r=t.target.value,s=""===r?"":r.value,o=""===r?"":r.title;e.setState({resourceProvince:s,resourceCity:"",resourceCounty:"",resourceProvinceName:o,resourceCityName:"",resourceCountyName:"",cityData:[],countyData:[]},(function(){e.getResourceList(),Object(P.w)({parentCode:s}).then((function(t){s?e.setState({cityData:t}):e.setState({addressVisible:!1})}))}))},e.onCityChange=function(t,a){var r=t.target.value,s=""===r?"":r.value,o=""===r?"":r.title;e.setState({resourceCity:s,resourceCounty:"",resourceCityName:o,resourceCountyName:"",countyData:[]},(function(){e.getResourceList(),Object(P.w)({parentCode:s}).then((function(t){s?e.setState({countyData:t}):e.setState({addressVisible:!1})}))}))},e.onCountyChange=function(t,a){var r=t.target.value,s=""===r?"":r.value,o=""===r?"":r.title;e.setState({resourceCounty:s,resourceCountyName:o,addressVisible:!1},(function(){return e.getResourceList()}))},e.resourceTypeChange=function(t){sessionStorage.setItem("resource_1",t.target.value),e.setState({pageNum:1,resourceTypeCheck:t.target.value},(function(){e.getResourceList()}))},e.shareModelChange=function(t){e.setState({pageNum:1,shareModel:t.target.value},(function(){e.getResourceList()}))},e.testSourceChange=function(t){var a=t.target.value;""===a||"1"===a||"2"===a||"4"===a?e.setState({pageNum:1,shareModel:a,testSourceValue:a,unitId:"",testSourceVisible:!1},(function(){e.getResourceList()})):e.setState({pageNum:1,shareModel:"5",unitId:a,testSourceValue:a,testSourceVisible:!1},(function(){e.getResourceList()}))},e.examYearChange=function(t){var a=t.target.value;e.setState({examYearName:""===a?"":a.key}),a&&"\u66f4\u65e9"===a.key?e.setState({pageNum:1,resourceYearCheck:a.value,selectType:1,examYearVisible:!1},(function(){e.getResourceList()})):e.setState({pageNum:1,resourceYearCheck:a.value,selectType:0,examYearVisible:!1},(function(){e.getResourceList()}))},e.zhClick=function(){var t=e.state.sortSet;"zh"===t.value?(t.zhOrder=!t.zhOrder,e.setState({sortSet:t},(function(){e.testOrderChange(t.zhOrder,"a.create_time")}))):e.setState({sortSet:Object(j.a)(Object(j.a)({},t),{},{zhOrder:!0,value:"zh"})},(function(){e.testOrderChange(t.zhOrder,"a.create_time")}))},e.fbClick=function(){var t=e.state.sortSet;"fb"===t.value?(t.fbOrder=!t.fbOrder,e.setState({sortSet:t},(function(){e.testOrderChange(t.fbOrder,"a.create_time")}))):e.setState({sortSet:Object(j.a)(Object(j.a)({},t),{},{fbOrder:!0,value:"fb"})},(function(){e.testOrderChange(t.fbOrder,"a.create_time")}))},e.syClick=function(){var t=e.state.sortSet;"sy"===t.value?(t.syOrder=!t.syOrder,e.setState({sortSet:t},(function(){e.testOrderChange(t.syOrder,"a.used_num")}))):e.setState({sortSet:Object(j.a)(Object(j.a)({},t),{},{syOrder:!0,value:"sy"})},(function(){e.testOrderChange(t.syOrder,"a.used_num")}))},e.scClick=function(){var t=e.state.sortSet;"sc"===t.value?(t.scOrder=!t.scOrder,e.setState({sortSet:t},(function(){e.testOrderChange(t.scOrder,"a.collect_num")}))):e.setState({sortSet:Object(j.a)(Object(j.a)({},t),{},{scOrder:!0,value:"sc"})},(function(){e.testOrderChange(t.scOrder,"a.collect_num")}))},e.testOrderChange=function(t,a){t?e.setState({pageNum:1,orderAscfield:"",orderDescfield:a},(function(){e.getResourceList()})):e.setState({pageNum:1,orderAscfield:a,orderDescfield:""},(function(){e.getResourceList()}))},e.searchChange=function(t){e.setState({searchValue:t.target.value},(function(){e.setState({pageNum:1,resourceName:e.state.searchValue.replace(/(^\s*)|(\s*$)/g,"")},(function(){e.getResourceList()}))}))},e.resourceNameSearch=function(t){e.setState({pageNum:1,resourceName:t.replace(/(^\s*)|(\s*$)/g,"")},(function(){e.getResourceList()}))},e.searchChangeSchool=function(t){e.setState({searchValueSchool:t.target.value},(function(){e.setState({pageNum:1,resourceName:e.state.searchValueSchool.replace(/(^\s*)|(\s*$)/g,"")},(function(){e.getResourceList()}))}))},e.resourceNameSearchSchool=function(t){e.setState({pageNum:1,resourceName:t.replace(/(^\s*)|(\s*$)/g,"")},(function(){e.getResourceList()}))},e.searchChangeCourse=function(t){e.setState({searchValueCourse:t.target.value},(function(){e.setState({pageNum:1,resourceName:e.state.searchValueCourse.replace(/(^\s*)|(\s*$)/g,"")},(function(){e.getResourceList()}))}))},e.resourceNameSearchCourse=function(t){e.setState({pageNum:1,resourceName:t.replace(/(^\s*)|(\s*$)/g,"")},(function(){e.getResourceList()}))},e.onShowSizeChange=function(t,a){e.setState({pageNum:1,pageSize:a},(function(){e.getResourceList()}))},e.onPageNumChange=function(t,a){e.setState({pageNum:t},(function(){e.getResourceList()}))},e.tabChange=function(t){"1"===t?e.setState({pageNum:1,activeKey:t,createUserId:void 0,courseCloudFlag:"1",courseCollectFlag:"",shareModel:"",testSourceValue:"",schoolDisplay:"hide",CourseDisplay:"hide"},(function(){return e.getResourceList()})):"2"===t?e.setState({pageNum:1,activeKey:t,createUserId:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).user.id:"",courseCloudFlag:"",courseCollectFlag:"",resourceYearCheck:"",shareModel:"",testSourceValue:"",unitId:"",resourceProvinceName:"",resourceCityName:"",resourceCountyName:"",examYearName:"",resourceProvince:"",resourceCity:"",resourceCounty:"",cityData:[],countyData:[],searchValueSchool:"",searchValueCourse:"",searchValue:"",schoolDisplay:"hide",CourseDisplay:"show"},(function(){return e.getResourceList()})):"3"===t?e.setState({pageNum:1,activeKey:t,createUserId:void 0,courseCloudFlag:"",courseCollectFlag:"1",shareModel:"",testSourceValue:"",schoolDisplay:"show",CourseDisplay:"show",searchValueSchool:"",searchValueCourse:"",searchValue:""},(function(){return e.getResourceList()})):e.setState({pageNum:1,activeKey:t,createUserId:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).user.id:"",courseCloudFlag:"",courseCollectFlag:"",resourceYearCheck:"",shareModel:"",testSourceValue:"",unitId:"",resourceProvinceName:"",resourceCityName:"",resourceCountyName:"",examYearName:"",resourceProvince:"",resourceCity:"",resourceCounty:"",cityData:[],countyData:[],searchValueSchool:"",searchValueCourse:"",searchValue:"",schoolDisplay:"hide",CourseDisplay:"hide"},(function(){return e.getResourceList()}))},e.obligationClick=function(){var t=e.state,a=t.catalogStageId,r=t.catalogSubjectId,s=t.catalogArrayChecked;e.setState({stageId:a,subjectId:r,catalogArray:s,pointsArray:[],isObligation:!0,isOrdinary:!1,pageNum:1,resourceList:[],total:0},(function(){return e.getResourceList()}))},e.ordinaryOnClick=function(){var t=e.state,a=t.knowledgeStageId,r=t.knowledgeSubjectId,s=t.pointsArrayChecked;e.setState({stageId:a,subjectId:r,catalogArray:[],pointsArray:s,isOrdinary:!0,isObligation:!1,pageNum:1,resourceList:[],total:0},(function(){return e.getResourceList()}))},e.bookChange=function(t){var a=e.state.subjectList,r="",s="";a.forEach((function(e){e.id===t&&(r=e.stageId,s=e.subjectId)})),e.setState({pageNum:1,bookId:t,catalogArray:[],catalogArrayChecked:[],selectCatalogId:"",stageId:r,catalogStageId:r,subjectId:s,catalogSubjectId:s},(function(){e.getResourceList()}))},e.myStageChange=function(t){e.setState({pageNum:1,stageId:t[0],knowledgeStageId:t[0],subjectId:t[1],knowledgeSubjectId:t[1],pointsArrayChecked:[],pointsArray:[]},(function(){e.getSubjectKnowledgePointTree(),e.getResourceList()}))},e.classifyCheck=function(t,a){sessionStorage.setItem("resourceLibraryKeys",t),e.setState({pageNum:1,catalogArray:t,catalogArrayChecked:t,selectCatalogId:t[0]},(function(){e.getResourceList()}))},e.knowledgePointCheck=function(t,a){e.setState({pageNum:1,pointsArrayChecked:t,pointsArray:t},(function(){e.getResourceList()}))},e.renderTreeNodes=function(t){return t.map((function(t){return t.children?A.a.createElement(te,{title:A.a.createElement("div",{className:"TreeIcon",onClick:e.DeptonSelect.bind(Object(R.a)(e),t)},t.name),key:t.id,dataRef:t},e.renderTreeNodes(t.children)):A.a.createElement(te,{title:t.name,key:t.id,value:t.id,dataRef:t})}))},e.onChange=function(e){},e.UploadModal=function(){e.setState({UploadModal:!0})},e.UploadCancel=function(){e.UploadResourceForm.resetFields(),e.setState({UploadModal:!1})},e.UploadSave=function(){var t=e.state,a=t.isClick,r=t.userMark;if(1==a){e.setState({isClick:!1}),e.UploadResourceForm.props.form.validateFields((function(t,a){if(!t){var s=a;if(3==r){var o=e.UploadResourceForm.getItemsValue();if(1==o.err)E.a.info("\u8d44\u6e90\u6587\u4ef6\u6b63\u5728\u4e0a\u4f20\u4e2d\u8bf7\u7a0d\u540e...");else if(0==o.err)E.a.info("\u8bf7\u4e0a\u4f20\u8d44\u6e90\u6587\u4ef6");else{var c=Object(j.a)(Object(j.a)({},o),{},{platform:3==r?"1":"0"});Object(_.a)(c).then((function(t){E.a.success("\u6dfb\u52a0\u6210\u529f"),e.UploadResourceForm.resetFields(),e.setState({UploadModal:!1}),e.getResourceList()}))}}else if(2==JSON.parse(s.stageId).stageType)if(""==s.bigMajorId||""==s.medMajorId)E.a.error("\u8bf7\u9009\u62e9\u6240\u5c5e\u4e13\u4e1a");else{var n=e.UploadResourceForm.getItemsValue(),u=n.stageId?JSON.parse(n.stageId).stageId:"";if(1==n.err)E.a.info("\u8d44\u6e90\u6587\u4ef6\u6b63\u5728\u4e0a\u4f20\u4e2d\u8bf7\u7a0d\u540e...");else if(0==n.err)E.a.info("\u8bf7\u4e0a\u4f20\u8d44\u6e90\u6587\u4ef6");else{var i=Object(j.a)(Object(j.a)({},n),{},{stageId:u});Object(_.a)(i).then((function(t){E.a.success("\u6dfb\u52a0\u6210\u529f"),e.UploadResourceForm.resetFields(),e.setState({UploadModal:!1}),e.getResourceList()}))}}else if(3==JSON.parse(s.stageId).stageType)if(""==s.bigMajorId||""==s.medMajorId||""==s.professionId)E.a.error("\u8bf7\u9009\u62e9\u6240\u5c5e\u4e13\u4e1a");else{var l=e.UploadResourceForm.getItemsValue(),d=l.stageId?JSON.parse(l.stageId).stageId:"";if(1==l.err)E.a.info("\u8d44\u6e90\u6587\u4ef6\u6b63\u5728\u4e0a\u4f20\u4e2d\u8bf7\u7a0d\u540e...");else if(0==l.err)E.a.info("\u8bf7\u4e0a\u4f20\u8d44\u6e90\u6587\u4ef6");else{var m=Object(j.a)(Object(j.a)({},l),{},{stageId:d});Object(_.a)(m).then((function(t){E.a.success("\u6dfb\u52a0\u6210\u529f"),e.UploadResourceForm.resetFields(),e.setState({UploadModal:!1}),e.getResourceList()}))}}}}));var s=Object(R.a)(e);setTimeout((function(){s.setState({isClick:!0})}),100)}},e.previewResource=function(){var t=Object(N.a)(k.a.mark((function t(a,r){var s,o,c,n,u,i,l,d,m,g,p;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.stopPropagation(),0===window.getSelection().toString().length&&(s=r.id,o=e.state,o.activeKey,o.addResource,c=o.hierarchy,n=o.catalogId,u=o.courseId,i=o.url,l=o.classroomId,o.prepareActiveKey,d=o.stepId,m=o.backTypeCourse,"1"==e.state.addResource?(g={addResource:1,courseId:u,catalogId:n,hierarchy:c,resourceId:s,url:i,resUrl:"/teching/resource-library/training-resource",classroomId:l,activeKey:2,stepId:d,backTypeCourse:m,handIsShow:e.state.handIsShow},sessionStorage.setItem("prevIds",JSON.stringify(g)),e.props.history.push("/teching/resource-preview?".concat(encodeURI(JSON.stringify(g))))):(p={resourceId:s,resUrl:"/teching/resource-library/training-resource",activeKey:2,backTypeCourse:m},sessionStorage.setItem("prevIds",JSON.stringify(p)),e.props.history.push("/teching/resource-preview?".concat(encodeURI(JSON.stringify(p))))));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.ResourceDetailCancel=function(){e.setState({resourceDetailModal:!1})},e.courseTemplateCancel=function(){e.setState({courseTemplateModal:!1})},e.recommendShowModal=function(){e.setState({recommendCourseModal:!0})},e.recommendCourseCancel=function(){e.setState({recommendCourseModal:!1})},e.recommendOk=function(){e.recommendCourseModal.props.form.validateFields(function(){var t=Object(N.a)(k.a.mark((function t(a,r){var s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a||(s={catalogId:r.sectionName,courseName:r.courseName,id:r.id,yearId:e.state.selCourse.yearId},Object(P.e)(s).then((function(t){E.a.success("\u4f7f\u7528\u590d\u5236\u8be5\u8bfe\u7a0b\u6210\u529f"),e.setState({recommendCourseModal:!1})})));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())},e.addressVisibleChange=function(t){e.setState({addressVisible:t})},e.examYearVisibleChange=function(t){e.setState({examYearVisible:t})},e.testSourceVisibleChange=function(t){e.setState({testSourceVisible:t})},e.testSourceFilter=function(t){if(""===t)return"\u6765\u6e90";var a=e.state.unitListAll,r={};return a.forEach((function(e){return r[e.id]=e.unitName})),r[t]},e}return Object(L.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("resourceLibraryKeys");this.setState({keys:t});var a,r,s,o,c,n,u,i,l,d,m,g,p,h=this.props.location.search,f="";h?(s=(a=h.split("?")[1]).includes("%")?decodeURI(a):a,o=(r=JSON.parse(s)).addResource,c=r.catalogId,n=r.courseId,u=r.hierarchy,i=r.url,l=r.classroomId,d=r.stepId,g=!0,m=r.backTypeCourse,p=r.activeKey,f=r.isHeader):m="myResource",this.getSubjectByLogin(),this.getExamYearList(5),this.setState({userId:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).user.id:"",myUnitId:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).user.unitId:"",addResource:o,hierarchy:u,catalogId:c,courseId:n,url:i,classroomId:l,stepId:d,handIsShow:g,backTypeCourse:m,prepareActiveKey:p,isHeader:f},(function(){e.getMyStageList()})),this.getSubjectKnowledgePointTree(),this.getUnitListByKeyWord(""),this.getProvince()}},{key:"getSubjectByLogin",value:function(){var e=Object(N.a)(k.a.mark((function e(){var t,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.x)({});case 2:t=e.sent,a=[{subjectName:"\u5168\u90e8",id:""},{subjectName:"\u672a\u8bbe\u7f6e",id:"8008208820"}],r=t?a.concat(t):"",this.setState({myStageTo:r&&r.length?r[0].id:"",myStageList:r});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProvince",value:function(){var e=Object(N.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.w)();case 2:(t=e.sent)&&t.length>0&&this.setState({provinceData:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getResourceFormatList",value:function(){var e=Object(N.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.o)(t);case 2:a=e.sent,this.setState({resourceFormatList:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUnitListByKeyWord",value:function(){var e=Object(N.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)(t);case 2:a=e.sent,this.setState({unitList:a||[]}),t||this.setState({unitListAll:a});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getResourceList",value:function(){var e=Object(N.a)(k.a.mark((function e(){var t,a,r,s,o,c,n,u,i,l,d,m,g;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.pageNum,r=t.pageSize,s=t.resourceOne,o=t.resourceTypeCheck,c=t.resourceFormatCheck,n=t.orderAscfield,u=t.searchValue,i=t.searchValueSchool,l=t.orderDescfield,d=t.professionId,m={pageNum:a,pageSize:r,professionId:d,mediaType:sessionStorage.getItem("resource_1")?sessionStorage.getItem("resource_1"):o,applicationType:sessionStorage.getItem("resourceThree")?sessionStorage.getItem("resourceThree"):c,orderAscfield:n,orderDescfield:l,title:u,subjectId:sessionStorage.getItem("resourceOne")?sessionStorage.getItem("resourceOne"):s,unitName:i,tabType:5},e.next=4,Object(_.d)(m);case 4:g=e.sent,this.setState({resourceList:g?g.data:[],total:g?g.total:0});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getExamYearList",value:function(e){for(var t=(new Date).getFullYear(),a=[],r=0;r<e;r++){var s={value:t-r};s.key=r===e-1?"\u66f4\u65e9":t-r,a.push(s)}this.setState({examYearList:a})}},{key:"resourceFormatChange",value:function(e,t){var a=this;1==t?(sessionStorage.setItem("resourceOne",e.target.value),this.state.resourceOne=e.target.value):2==t&&(sessionStorage.setItem("resourceThree",e.target.value),this.state.resourceFormatCheck=e.target.value),this.setState({pageNum:1},(function(){a.getResourceList()}))}},{key:"getCourseList",value:function(){var e=Object(N.a)(k.a.mark((function e(){var t,a,r,s,o,c,n=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)({userId:this.state.userId});case 2:return t=e.sent,e.next=5,Object($.a)();case 5:a=e.sent,r=JSON.parse(a),s=null,s=r.examBook?r.examBook.lastExamBookId:t[0].id,o="",c="",t&&t.length>0&&t.forEach((function(e){e.id===s&&(o=e.stageId,c=e.subjectId)})),s&&this.setState({bookId:s,stageId:o,catalogStageId:o,subjectId:c,catalogSubjectId:c},(function(){n.getResourceList()})),this.setState({subjectList:t});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMyStageList",value:function(){var e=Object(N.a)(k.a.mark((function e(){var t,a,r=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.u)();case 2:t=e.sent,(a=t?t.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{subjectName:e.stageName,id:e.stageId})})):"")&&this.setState({stageId:a.length?a[0].stageId:"",subjectList:a,bookId:a&&a[0]?a[0].stageId:""},(function(){r.getResourceList()}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCourseListTreeNew",value:function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.state.bookId)){e.next=7;break}return e.next=4,Object(K.e)({bookId:t});case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=[];case 8:a=e.t0,this.setState({courseTree:a,defaultKeys:a&&a.length>0?a[0].id:""});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSubjectKnowledgePointTree",value:function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.state.subjectId)){e.next=7;break}return e.next=4,Object(K.g)({subjectId:t});case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=[];case 8:a=e.t0,this.setState({subjectKnowledgePointTree:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"DeptonSelect",value:function(e,t){z.a.isEmpty(e.id)||(this.state.professionId=e.id,this.state.level=e.level,this.setState({hierarchy:e.hierarchy})),this.getResourceList()}},{key:"render",value:function(){var e=this,t=this.state,r=t.pageNum,s=t.pageSize,o=t.resourceList,c=t.resourceFormatList,u=t.activeKey,l=t.sortSet,m=t.total,p=t.UploadModal,f=t.cataLogTree,S=t.recommendCourseModal,C=t.courseTemplateModal,I=t.searchValue,k=t.resourceDetailModal,N=t.resourceId,O=t.isHeader,E=t.url,j=t.handIsShow,w=t.resource_1,L=t.resource_2,R=o.map((function(t,r){return A.a.createElement(b.a,{span:6,className:"rside-col",key:r,onClick:function(a){return e.previewResource(a,t)}},A.a.createElement("dl",null,A.a.createElement("dt",null,1==t.mediaType?A.a.createElement("img",{src:a(930),alt:""}):5==t.mediaType?A.a.createElement("img",{src:a(532),alt:""}):4==t.mediaType?A.a.createElement("img",{src:a(931),alt:""}):8==t.mediaType?A.a.createElement("img",{src:a(932),alt:""}):3==t.mediaType?A.a.createElement("img",{src:a(933),alt:""}):7==t.mediaType?A.a.createElement("img",{src:a(934),alt:""}):6==t.mediaType?A.a.createElement("img",{src:a(935),alt:""}):9==t.mediaType?A.a.createElement("img",{src:a(936),alt:""}):2==t.mediaType?A.a.createElement("img",{src:a(532),alt:""}):99==t.mediaType?A.a.createElement("img",{src:a(937),alt:""}):0==t.mediaType?A.a.createElement("img",{src:a(938),alt:""}):""),A.a.createElement("dd",null,A.a.createElement("div",{title:0==t.mediaType||10==t.mediaType?t.resourceName:t.title,className:"resource-title-lh"},0==t.mediaType||10==t.mediaType?t.resourceName:t.title,"\xa0"),A.a.createElement("p",null,A.a.createElement("span",null,"\u5f15\u7528 ",t.usedNum),A.a.createElement("span",null,"\u6536\u85cf ",t.collectNum)),A.a.createElement("p",{className:"source_style_l"},A.a.createElement("span",{title:t.unitName},"\u6765\u6e90\uff1a",t.unitName)))))}));return A.a.createElement("div",{className:"my-collect teach-main"},A.a.createElement("div",{className:["teach-main-box",O?"nonePadiingTop":null].join(" ")},O?null:z.a.isEmpty(E)?j?"":A.a.createElement(G.a,{navName:"resource-library"}):A.a.createElement(Y.a,null),A.a.createElement("div",{className:"teach-main-cont"},A.a.createElement(y.a,{className:"complete-title"},A.a.createElement(b.a,{span:22},A.a.createElement("span",null,"\u8d44\u6e90\u5e93"),A.a.createElement(B.a,{defaultKeys:"5"})),A.a.createElement(b.a,{span:2,className:"ant-col-resource"},A.a.createElement(v.a,{onClick:this.UploadModal},"\u4e0a\u4f20\u8d44\u6e90"))),A.a.createElement("div",null,A.a.createElement(y.a,{gutter:16},A.a.createElement(b.a,{className:"paper-right-top"},A.a.createElement("div",{className:"paper-right-menu paper-right-menu-l"},A.a.createElement(y.a,{className:"paper-common"},A.a.createElement(b.a,{className:"paper-year",style:{textAlign:"left"}},"\u5a92\u4f53\u7c7b\u578b"),A.a.createElement(b.a,null,A.a.createElement(h.a.Group,{onChange:this.resourceTypeChange.bind(this),defaultValue:w},A.a.createElement(h.a.Button,{value:""},"\u5168\u90e8"),A.a.createElement(h.a.Button,{value:"1"},"\u6587\u672c"),A.a.createElement(h.a.Button,{value:"5"},"\u89c6\u9891"),A.a.createElement(h.a.Button,{value:"4"},"\u97f3\u9891"),A.a.createElement(h.a.Button,{value:"8"},"PPT"),A.a.createElement(h.a.Button,{value:"3"},"\u56fe\u7247"),A.a.createElement(h.a.Button,{value:"7"},"\u865a\u62df\u4eff\u771f"),A.a.createElement(h.a.Button,{value:"6"},"\u52a8\u753b"),A.a.createElement(h.a.Button,{value:"2"},"\u5fae\u8bfe"),A.a.createElement(h.a.Button,{value:"99"},"\u5176\u5b83")))),A.a.createElement(y.a,{className:"paper-common"},A.a.createElement(b.a,{className:"paper-year",style:{textAlign:"left"}},"\u5e94\u7528\u7c7b\u578b"),A.a.createElement(b.a,null,A.a.createElement(h.a.Group,{onChange:this.resourceFormatChange.bind(this),defaultValue:L?JSON.parse(L):""},A.a.createElement(h.a.Button,{value:""},"\u5168\u90e8"),c.map((function(e,t){return A.a.createElement(h.a.Button,{key:e.id,value:e.id},e.text)})))))),A.a.createElement("div",{className:"paper-right-bottom"},A.a.createElement("div",{className:"select_top"},A.a.createElement("div",{className:"left"},"2"!==u?A.a.createElement(y.a,{className:"paper-common",gutter:16},A.a.createElement(b.a,{span:22,className:"paper-common-btn"},A.a.createElement(v.a,{type:"zh"===l.value?"primary":"",onClick:function(){return e.zhClick()}},"\u521b\u5efa\u65f6\u95f4","zh"===l.value?A.a.createElement(g.a,{type:l.zhOrder?"down":"up"}):""),A.a.createElement(v.a,{type:"sy"===l.value?"primary":"",onClick:function(){return e.syClick()}},"\u5f15\u7528\u91cf","sy"===l.value?A.a.createElement(g.a,{type:l.syOrder?"down":"up"}):""),A.a.createElement(v.a,{type:"sc"===l.value?"primary":"",onClick:function(){return e.scClick()}},"\u6536\u85cf\u91cf","sc"===l.value?A.a.createElement(g.a,{type:l.scOrder?"down":"up"}):""))):""),A.a.createElement("div",{className:"right"},A.a.createElement(ee,{placeholder:"\u641c\u7d22\u8d44\u6e90",value:I,onSearch:function(t){return e.resourceNameSearch(t)},onChange:this.searchChange}),A.a.createElement("span",{className:"count"},"\u5171",m,"\u4e2a\u8d44\u6e90"))),A.a.createElement("div",{className:"clear"}),o&&o.length>0?A.a.createElement("div",{className:"my-resource-container"},o?R:"",m?A.a.createElement("div",{className:"pagination-style-l"},A.a.createElement(d.a,{showSizeChanger:!0,pageSizeOptions:["18","24","36","48"],onShowSizeChange:this.onShowSizeChange,onChange:this.onPageNumChange,defaultCurrent:1,current:r,pageSize:s,total:m,showTotal:function(e){return"\u5171 "+e+" \u6761"}})):""):A.a.createElement(i.a,{className:"empty-l",style:{marginTop:"5%"}}))))))),A.a.createElement(n.a,{wrapClassName:"modal-btn-lh",width:"600px",className:"modal-btn-resource modal-sty2 modal-style-lll",visible:p,title:"\u4e0a\u4f20\u8d44\u6e90",onOk:this.handleAccredit,onCancel:this.UploadCancel,keyboard:!1,maskClosable:!1,footer:[A.a.createElement(v.a,{key:"back",onClick:this.UploadCancel},"\u53d6\u6d88"),A.a.createElement(v.a,{key:"submit",type:"primary",onClick:this.UploadSave},"\u4fdd\u5b58")]},A.a.createElement(W.default,{wrappedComponentRef:function(t){e.UploadResourceForm=t}})),A.a.createElement(n.a,{icon:A.a.createElement(g.a,{type:"close"}),visible:C,onOk:this.recommendShowModal,onCancel:this.courseTemplateCancel,keyboard:!1,maskClosable:!1,className:"addLocalResourceModal modal-btn",width:"850px",footer:[A.a.createElement(v.a,{key:"submit1",type:"primary",onClick:this.recommendShowModal},"\u4f7f\u7528\u6b64\u8bfe\u7a0b")]},A.a.createElement(X.a,{course:this.state.selCourse,courseTemplateModal:this.state.courseTemplateModal,wrappedComponentRef:function(t){e.recommendForm=t}})),A.a.createElement(n.a,{className:"modal-btn",visible:S,title:"\u4f7f\u7528\u6b64\u8bfe\u7a0b",width:"850px",onOk:this.handleOk,onCancel:this.selectBookCancel,keyboard:!1,maskClosable:!1,footer:[A.a.createElement(v.a,{key:"back",onClick:this.recommendCourseCancel},"\u8fd4\u56de"),A.a.createElement(v.a,{key:"submit",type:"primary",onClick:this.recommendOk},"\u786e\u8ba4")]},A.a.createElement(Q.a,{course:this.state.selCourse,recommendCourseModal:this.state.recommendCourseModal,courseTree:f,wrappedComponentRef:function(t){e.recommendCourseModal=t}})),k?A.a.createElement(n.a,{className:"modal-btn resourceDetailModal",visible:k,title:"\u9884\u89c8",width:"90%",height:"90%",onCancel:this.ResourceDetailCancel,keyboard:!1,maskClosable:!1,footer:[A.a.createElement(v.a,{key:"back",onClick:this.ResourceDetailCancel},"\u8fd4\u56de")]},A.a.createElement(q.default,{resourceId:N})):"")}}]),r}(U.Component))||r,re=o.a.create()(ae);t.default=re}}]);