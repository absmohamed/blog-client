(this["webpackJsonpblog-client"]=this["webpackJsonpblog-client"]||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(8),s=a(32),u=a(9),i=a(2),m=a(1),p=function(e){function t(){s(!1)}var a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],s=c[1],u=e.loggedInUser;return r.a.createElement(m.Navbar,{color:"info",fixed:"top",active:o},r.a.createElement(m.Navbar.Brand,null,r.a.createElement(m.Navbar.Item,{renderAs:"p"},u||"guest"),r.a.createElement(m.Navbar.Burger,{onClick:function(){s(!o)}})),r.a.createElement(m.Navbar.Menu,null,u?r.a.createElement(n.Fragment,null,r.a.createElement(m.Navbar.Container,{position:"start"},r.a.createElement(i.c,{to:"/auth/logout",className:"navbar-item",onClick:t},"Logout")),r.a.createElement(m.Navbar.Container,{position:"end"},r.a.createElement(i.c,{to:"/posts/new",className:"navbar-item",onClick:t},"Add Post"),r.a.createElement(i.c,{to:"#",className:"navbar-item",onClick:t},"Categories"),r.a.createElement(i.c,{to:"/about",className:"navbar-item",onClick:t},"About"),r.a.createElement(i.c,{to:"/",className:"navbar-item",onClick:t},"Home"),r.a.createElement(i.c,{to:"/posts?username=".concat(u),className:"navbar-item",onClick:t},"My Blog"))):r.a.createElement(n.Fragment,null,r.a.createElement(m.Navbar.Container,{position:"start"},r.a.createElement(i.c,{to:"/auth/login",className:"navbar-item",onClick:t},"Login"),r.a.createElement(i.c,{to:"/auth/register",className:"navbar-item",onClick:t},"Register")),r.a.createElement(m.Navbar.Container,{position:"end"},r.a.createElement(i.c,{to:"#",className:"navbar-item",onClick:t},"Categories"),r.a.createElement(i.c,{to:"/about",className:"navbar-item",onClick:t},"About"),r.a.createElement(i.c,{to:"/",className:"navbar-item",onClick:t},"Home")))))},d=a(30),g=a.n(d),E=function(e){var t=e.comment,a=t.username,n=t.content;return r.a.createElement("div",{className:"content"},r.a.createElement("p",null,a),r.a.createElement("p",null,n))},f=function(e){var t=e.comments,a=e.showAddComment;return r.a.createElement("div",null,r.a.createElement("div",{className:"level"},r.a.createElement(m.Heading,{className:"level-left"},"Comments"),a&&r.a.createElement(m.Button,{className:"level-right",notification:"true",color:"info"},"Add Comment")),t.map((function(e){return r.a.createElement(E,{key:e._id,comment:e})})))},h=function(e){var t=e.title,a=e.showEditDelete;return r.a.createElement("div",null,r.a.createElement(m.Heading,null,t),a&&r.a.createElement("div",{className:"level-right"},r.a.createElement(m.Button,{className:"add-margin",color:"info"},"Edit"),r.a.createElement(m.Button,{className:"add-margin",color:"info"},"Delete")))},b=function(e){var t=e.blogPost,a=e.loggedInUser,c=e.singlePost,o=t.title,l=t.username,s=t.content,u=t.category,p=t.comments,d=t._id,g=l!==a,E=!g&&c;return r.a.createElement(n.Fragment,null,r.a.createElement(m.Section,{className:"content"},r.a.createElement(i.b,{to:"/posts/".concat(d)},r.a.createElement(h,{title:o,showEditDelete:E})),r.a.createElement("p",null,l),u&&r.a.createElement("p",null,"Category: ",u),r.a.createElement("p",null,s)),c&&r.a.createElement(m.Section,{className:"content"},r.a.createElement(f,{comments:p,showAddComment:g})))},v=a(4),N=a.n(v),y=a(10),w=a(31),k=a.n(w).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/blog-client"}).EXPRESS_URI||"https://limitless-lowlands-34451.herokuapp.com/",timeout:5e3,withCredentials:!0}),O=function(){var e=Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/posts");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.log("got an error from the server fetching blog posts:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(y.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={title:t.title,username:t.username,create_date:t.date,modified_date:t.date,category:t.category,content:t.content,comments:[]},e.prev=1,e.next=4,k.post("/posts",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("Error adding blog post:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();function C(e){return 1===Object.keys(e).length}var j=function(e){var t=e.match,a=e.location,n=e.blogPosts,c=e.loggedInUser,o=t.params.id,l=g.a.parse(a.search,{ignoreQueryPrefix:!0}),s=n;return o&&(s=function(e,t){return e.filter((function(e){return e._id==t}))}(n,o)),function(e){return Object.keys(e).length>0}(l)&&(s=function(e,t){for(var a=e,n=function(){var e=c[r];a=a.filter((function(a){return a[e]===t[e]}))},r=0,c=Object.keys(t);r<c.length;r++)n();return a}(s,l)),r.a.createElement("div",null,s.map((function(e){return r.a.createElement(b,{key:e._id,blogPost:e,singlePost:C(s),loggedInUser:c})})))};function P(){return r.a.createElement("div",{className:"level"},r.a.createElement(m.Heading,null,"Many mumbling mice"),r.a.createElement("img",{alt:"Four little cartoon mice",className:"mice",src:"/mice.png"}))}var U=function(){return r.a.createElement(m.Section,{className:"content"},r.a.createElement(m.Heading,null,"About"),r.a.createElement("p",null,"This is our blog client. Here, we will read, write, update and delete posts while we are connected to an Express Server and a Mongo database. User authentication is provided as well."))},I=function(){return r.a.createElement(m.Section,{className:"content"},r.a.createElement(m.Heading,null,"OOOOOPSSS... Page Not Found"),r.a.createElement("p",null,"Try with another link ;)"))},S=function(e){var t=e.handleLogin,a=e.loginError;return r.a.createElement("form",{onSubmit:function(a){t(a,e)}},a&&r.a.createElement("p",{className:"has-text-danger"},a),r.a.createElement("label",{className:"label"},"Username"),r.a.createElement("input",{type:"text",className:"input",name:"username",placeholder:"Username",required:!0}),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("input",{type:"password",className:"input",name:"password",placeholder:"Password",required:!0}),r.a.createElement("input",{type:"submit",value:"Login",className:"button is-info"}))};function L(){return(L=Object(y.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.post("/auth/register",t);case 3:return a=e.sent,console.log("got user back from server",a),e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("got error",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function B(){return(B=Object(y.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.post("/auth/login",t);case 3:return a=e.sent,console.log("got user back from server",a),e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("got error",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function A(){return(A=Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",k.get("/auth/logout"));case 4:throw e.prev=4,e.t0=e.catch(0),console.log("an error occurred logging out",e.t0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function _(){return(_=Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/auth/user");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log("an error occurred checking for authenticated user"),e.abrupt("return",{error:e.t0,status:e.t0.response.status});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var R=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),c=a[0],o=a[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=t.target;(function(e){return L.apply(this,arguments)})({username:a.elements.username.value,email:a.elements.email.value,password:a.elements.password.value}).then((function(t){console.log("got response from register user on server:",t),e.history.push("/auth/login")})).catch((function(e){var t=e.response?e.response.status:500;409===t&&o("This username already exists. Please login, or specify another username."),console.log("registration failed with error: ".concat(e," and status ").concat(t))}))}},c&&r.a.createElement("p",{className:"has-text-danger"},c),r.a.createElement("label",{className:"label"},"Username"),r.a.createElement("input",{type:"text",className:"input",name:"username",placeholder:"Username",required:!0}),r.a.createElement("label",{className:"label"},"Email address"),r.a.createElement("input",{type:"email",className:"input",name:"email",placeholder:"Email",required:!0}),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("input",{type:"password",className:"input",name:"password",placeholder:"Password",required:!0}),r.a.createElement("input",{type:"submit",value:"Register",className:"button is-info"}))},D=function(e,t){switch(t.type){case"setLoggedInUser":case"setBlogPosts":case"setLoginError":return t.data;default:return e}},H=function(e){var t=e.addNewBlogPost;return r.a.createElement("form",{onSubmit:function(a){t(a,e)}},r.a.createElement("label",{className:"label"},"Title"),r.a.createElement("input",{type:"text",className:"input",name:"title",placeholder:"Title",required:!0}),r.a.createElement("label",{className:"label"},"Category"),r.a.createElement("input",{type:"text",className:"input",name:"category",placeholder:"Category (optional)"}),r.a.createElement("label",{className:"label"},"Content"),r.a.createElement("textarea",{className:"input",name:"content",placeholder:"What's on your mind?",required:!0}),r.a.createElement("input",{type:"submit",value:"Create Post",className:"button is-info"}))},q=function(){function e(e){e?localStorage.setItem("loggedInUser",e):localStorage.removeItem("loggedInUser")}function t(t,a){t.preventDefault();var n=t.target,r=n.elements.username.value,c=n.elements.password.value;(function(e){return B.apply(this,arguments)})({username:r,password:c}).then((function(){g({type:"setLoggedInUser",data:r}),e(r),a.history.push("/posts")})).catch((function(e){var t=e.response.status;console.log("An error occurred authenticating: ".concat(e," with status: ").concat(t)),w({type:"setLoginError",data:"Authentication failed! Check your username and password"})}))}function a(){return function(){A.apply(this,arguments)}(),g({type:"setLoggedInUser",data:null}),e(null),r.a.createElement(u.a,{to:"/posts"})}function c(e,t){e.preventDefault();var a=new Date,n=e.target,r={title:n.title.value,date:a,username:d,category:n.category.value,content:n.content.value};x(r).then((function(e){var a=e;b({type:"setBlogPosts",data:[].concat(Object(s.a)(h),[a])}),t.history.push("/posts/".concat(a._id))})).catch((function(e){console.log("An error occurred adding the post: ".concat(e))}))}var o=Object(n.useReducer)(D,null),m=Object(l.a)(o,2),d=m[0],g=m[1],E=Object(n.useReducer)(D,[]),f=Object(l.a)(E,2),h=f[0],b=f[1],v=Object(n.useReducer)(D,null),N=Object(l.a)(v,2),y=N[0],w=N[1];return Object(n.useEffect)((function(){return O().then((function(e){var t=e;console.log("all posts from server:",t),b({type:"setBlogPosts",data:t})})).catch((function(e){console.log("oops! Something is wrong - check the server. We got an error: ".concat(e))})),function(){return _.apply(this,arguments)}().then((function(){g({type:"setLoggedInUser",data:localStorage.getItem("loggedInUser")})})).catch((function(t){console.log("got an error trying to check authenticated user:",t),e(null),g({type:"setLoggedInUser",data:null})})),function(){}}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(i.a,null,r.a.createElement(p,{loggedInUser:d}),r.a.createElement(P,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/posts"})}}),r.a.createElement(u.b,{exact:!0,path:"/posts/new",render:function(e){return r.a.createElement(H,Object.assign({},e,{addNewBlogPost:c}))}}),r.a.createElement(u.b,{exact:!0,path:"/posts/:id",render:function(e){return r.a.createElement(j,Object.assign({},e,{blogPosts:h,loggedInUser:d}))}}),r.a.createElement(u.b,{exact:!0,path:"/posts",render:function(e){return r.a.createElement(j,Object.assign({},e,{blogPosts:h,loggedInUser:d}))}}),r.a.createElement(u.b,{exact:!0,path:"/auth/login",render:function(e){return r.a.createElement(S,Object.assign({},e,{handleLogin:t,loginError:y}))}}),r.a.createElement(u.b,{exact:!0,path:"/auth/register",render:function(e){return r.a.createElement(R,e)}}),r.a.createElement(u.b,{exact:!0,path:"/auth/logout",render:function(){return a()}}),r.a.createElement(u.b,{exact:!0,path:"/about",component:U}),r.a.createElement(u.b,{component:I}))))};a(63);o.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7d450ccd.chunk.js.map