"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[111],{8840:function(e,a){a.A='<div class="book-card"> <div class="content-wrapper"> <img src="##cover##" alt="" class="book-card-img"> <div class="card-content"> <div class="book-name" title="##name##">##name##</div> <div class="rate"> <fieldset class="rating book-rate"> ##scoreHtml## </fieldset> <span class="book-voters card-vote"> ##infoHtml## </span> </div> </div> </div> <div class="book-by"> <i class="iconfont icon-book" title="阅读时间" style="display:##readDateStyle##"></i> ##readDate## <i class="iconfont icon-schedule" title="阅读进度" style="display:##readPercentageStyle##"></i> ##readPercentage## </div> </div>'},5736:function(e,a,t){t.a(e,(async function(e,c){try{t.r(a),t.d(a,{default:function(){return r}});var o=t(8840),n=t(2650),s=t(508),i=e([n,s]);function r(){if((0,s.default)(),$.__config.bookList.length){t.e(489).then(t.bind(t,482));const e=$("#cnblogs_post_body"),a=$(".articleSuffix-flg");let c="";function i(e){return Object.entries({formerName:"原　名",author:"作　者",translator:"译　者",press:"出版社",year:"出版年",scenarist:"编　剧",star:"主　演",type:"类　型",productionCountry:"制片国家/地区",language:"语　言",releaseDate:"上映日期",filmLength:"片　长",alias:"别　名"}).reduce(((a,[t,c])=>(e[t]&&(a+=`<span title="${e[t]}">${c}：${e[t]}</span><br>`),a)),"")}$.__config.bookList.forEach((e=>{e.title&&(c+=`<h1 class="iconfont ${e.icon}">${e.title}</h1>`),c+='<div class="book-cards">',e.books.forEach((e=>{const a=o.A.replace("cover",e.cover||"").replace("name",e.name||"").replace("readDate",e.readDate||"").replace("readPercentage",e.readPercentage||"").replace("scoreHtml",(t=e.score,'<i class="iconfont icon-star-full"></i>'.repeat(Math.floor(t))+(t%1>0?'<i class="iconfont icon-star-half"></i>':"")+'<i class="iconfont icon-icon-star"></i>'.repeat(5-Math.ceil(t)))).replace("infoHtml",i(e));var t;c+=a})),c+="</div>"})),a.length?a.before(c):e.append(c)}(0,n.A)()}[n,s]=i.then?(await i)():i,c()}catch(l){c(l)}}))}}]);