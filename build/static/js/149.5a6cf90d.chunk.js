(this.webpackJsonpzjyz_admin=this.webpackJsonpzjyz_admin||[]).push([[149],{1972:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgB7ZxPTxNBFMDf7G5boMifQIQbkOgVOXgSYyCKePJPvJt68+bFD8AH0MSjN9G70StwgKBy0QN6xQQ8tqaUIqSU7u4409CmNB12ym55u+v7JZsw9DXp/vLe29fZbAEIgiCIC4e1E1xYnRlIJpPPOYeMWI6DD6zLc5C6+qK+tnPLUN56pfXe/G5hcez+t6fQQQzdwL+f78wkrOS2kLIAPqX4xXHczK8PU2+hg2iJKazOTTFmrIr8GoCQILO2k3K0xCQT7COEkE7K8ewx++u3HxqG2XEx7fSc3J+8KCenvmYMFq883gy053hmjCihGQg5ncgcTzGcs9D0lbMIWo72VSkKBCnHAiRa9ZTDr/PglxM54LfnxCpjagSROZEUYzDvgd2vnEiKsRJ6HcCPHLQeY+dWqkf9g4iek55eanhdPcf0dHdBqXQEOpy350QyY8QXWXEktOPPkzmRbb4D/X1gmvofv105kRVjmiYMDw9BtygrXdqRE+k5Rl6dZOZc6k1DpWJDxbZ13pbJLt36PTK/vnBWEJqYIJHZI48uSGnFM8bGvGJiOeAFAYlREMk55iKgjFFAYhSQGAV4c8zQDUhOPKuvneIPKH1/Ul9z5wAwwZtjzDSw1Mipf7nlLIQFKiUFJEYBWik5uxuneorRPwk919/X13Z+A4633wAWaGK4fVg9asjUbew5zEoDJlRKCkiMgtBsOzT3nP93jmmiuedgQ6WkgMQoQCsleWk2xeyigh9lwdn/CVigiZFSGjfDm5EbVZhiqJQUkBgF6JdrLrYa5F5MDaNrFIy+ScAGXYyU0rjpXb0RFwIxVEoKSIwC9FJiqdFq+dQw+69BGMDbjznZ35XzTKtBzynizTASvB08ceLlrZctpUhpjXcpMUAtpebbtGGCmq8CEqOAxCggMQpIjAISo0DjQS6+BzHDdd2iV4xGxvBPEDM4Z2teMVrPXR98ubsNyI8UB8hO783lCa8gvR7D+COICZWK3rloiemdXtnk3J0Vf+5AROEc9uQ5DM6ubOrEt/kTBvfGLcvNMAYPxHIKosGOkPLOto9fD86uxe5CQhAEESv+AWv4LF6y/RlnAAAAAElFTkSuQmCC"},2727:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(12),A=n(11),c=n(10),r=n(0),o=n.n(r),l=function(e){Object(A.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,i=new Array(n),A=0;A<n;A++)i[A]=arguments[A];return(e=t.call.apply(t,[this].concat(i))).state={content:"",resourceName:"",fileId:""},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.location.search.slice(1),t=e.includes("%")?decodeURI(e):e,n=JSON.parse(t);this.setState({content:n.content,resourceName:n.resourceName,fileId:n.fileId})}},{key:"render",value:function(){var e=this.state,t=e.resourceName,a=(e.content,e.fileId);return o.a.createElement("div",{style:{width:"100%",height:"100%",background:"#111111",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("img",{style:{width:95,height:95},src:n(1972),alt:""}),o.a.createElement("h2",{style:{fontSize:"18px",color:"#888888",margin:"30px 0"}},t),o.a.createElement("p",{style:{color:"#fff",fontSize:"16px"}},"\u5f53\u524d\u683c\u5f0f\u4e0d\u652f\u6301\u9884\u89c8\uff0c\u8bf7\u70b9\u51fb",o.a.createElement("a",{href:"/api/media/api/v1/media/showThumbnail/".concat(a),download:t,style:{color:"#3E78ED"}},"\u201c\u8fd9\u91cc\u201d"),"\u4e0b\u8f7d\u67e5\u770b"))}}]),r}(r.Component);t.default=l}}]);