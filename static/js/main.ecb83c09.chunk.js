(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/image_2.07b38547.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/exhib_card_1.2d3e8803.png"},,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/team_pic.42fdd124.png"},,,,,function(e,t,a){"use strict";a.r(t);var n=a(27),_=a(0),i=a.n(_),r=a(24),c=a.n(r),l=a(16),m=a(11),o=(a(21),a(34),a(1)),s=a(2),b=a(4),u=a(3),h=a(5),d=(a(35),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,_=new Array(n),i=0;i<n;i++)_[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(_)))).state={isMenuClicked:!1},a.handleOnClick=function(e){e.preventDefault(),a.state.isMenuClicked?a.setState({isMenuClicked:!1}):a.setState({isMenuClicked:!0})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isInExhibition,a=void 0!==t&&t,n=e.history;return i.a.createElement("nav",null,i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"burger_menu",onClick:this.handleOnClick},i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}))),i.a.createElement("div",{className:"navbar__menu ".concat(this.state.isMenuClicked?"on":""),style:{marginTop:a?"50px":"0px"}},i.a.createElement("div",{className:"navbar__menu__list"},i.a.createElement("a",{className:"navbar__menu__list__item",onClick:function(){n.push("/home")}},"\u9996\u9801"),i.a.createElement("a",{className:"navbar__menu__list__item"},"\u500b\u4eba\u9801\u9762"))))}}]),t}(i.a.Component)),E=(a(36),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,_=new Array(n),i=0;i<n;i++)_[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(_)))).handleOnClick=function(){a.props.history.push("./exhibition")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imgPath,a=e.title,n=e.artist,_=e.viewAmount,r=e.markAmount;return i.a.createElement("div",{className:"exhib_card",onClick:this.handleOnClick},i.a.createElement("div",{className:"exhib_card__pic"},i.a.createElement("img",{src:t,alt:"pic"})),i.a.createElement("div",{className:"exhib_card__text"},i.a.createElement("div",{className:"exhib_card__text__title"},a),i.a.createElement("div",{className:"exhib_card__text__artist"},n),i.a.createElement("div",{className:"exhib_card__text__numbers"},i.a.createElement("div",{className:"exhib_card__text__numbers__item view"},_),i.a.createElement("div",{className:"exhib_card__text__numbers__item mark"},r))))}}]),t}(i.a.Component)),x=(a(37),function(e){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"footer__title"},"\u95dc\u65bc\u6211\u5011"),i.a.createElement("div",{className:"footer__links"},i.a.createElement("a",{className:"round_icon fb"}),i.a.createElement("a",{className:"round_icon ig"})),i.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 artogo.tw All Rights Reserved"))}),p=(a(38),a(22),function(e){var t=e.title,a=e.date;return i.a.createElement("div",{className:"latest_news__content__item"},i.a.createElement("div",{className:"latest_news__content__item__title"},t),i.a.createElement("div",{className:"latest_news__content__item__date"},a))}),f=function(e){return i.a.createElement("div",{className:"latest_news"},i.a.createElement("div",{className:"latest_news__title"},"\u6700\u65b0\u6d88\u606f"),i.a.createElement("div",{className:"latest_news__content"},i.a.createElement(p,{title:"\u4e00\u5834\u81ea\u79c1\u306e\u500b\u5c55\uff1a\u81f4\u5973\u5152s. 3\u670811\u65e5\u4e0a\u5c55",date:"2019.04.09"})))},v=function(e){e.children;var t=e.history;return i.a.createElement("div",{className:"page_content"},i.a.createElement(E,{imgPath:a(15),title:"\u901d\u8005\u5982\u6e21\u6e21 As dead as a dodo",artist:"\u85dd\u8853\u5bb6\u540d\u7a31",viewAmount:8,markAmount:100,history:t}),i.a.createElement(f,null),i.a.createElement("div",{className:"intro_photo"}),i.a.createElement(x,null))},N=function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,{history:this.props.history}),i.a.createElement(v,{history:this.props.history}))}}]),t}(_.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(28),k=(a(39),a(40),function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.onChange;return i.a.createElement("div",{className:"exhib_top_bar"},i.a.createElement("p",{className:"exhib_top_bar__title"},t),i.a.createElement("a",{className:"exhib_top_bar__mark"}),i.a.createElement("select",{className:"exhib_top_bar__select_page",name:"exhib_page",defaultValue:"exhib_works",onChange:a},i.a.createElement("option",{value:"exhib_info"},"\u5c55\u89bd\u8cc7\u8a0a"),i.a.createElement("option",{value:"exhib_3d"},"3D \u5c55\u9593"),i.a.createElement("option",{value:"exhib_works"},"\u4f5c\u54c1\u5c0e\u89bd"),i.a.createElement("option",{value:"exhib_team"},"\u7b56\u5c55\u5718\u968a")))}}]),t}(i.a.Component)),g=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page_content upper_two"},i.a.createElement("div",{className:"exhib_works__content"},i.a.createElement("div",{className:"exhib_works__content__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_works__content__audio"},i.a.createElement("p",{className:"exhib_works__content__audio__name"},"\u4f5c\u54c1 01 \u97f3\u6a94"),i.a.createElement("a",{className:"exhib_works__content__audio__close"}),i.a.createElement("audio",{id:"exhib_works__content__audio__player"},i.a.createElement("source",{src:"../../../img/audio.mp3.icloud",type:"audio/mpeg"}),">")),i.a.createElement("div",{className:"exhib_works__content__basic_info"},i.a.createElement("p",{className:"exhib_works__content__basic_info__no"},"#001"),i.a.createElement("p",{className:"exhib_works__content__basic_info__title"},"\u4f5c\u54c1\u540d\u7a31"),i.a.createElement("p",{className:"exhib_works__content__basic_info__artist"},"\u85dd\u8853\u5bb6")),i.a.createElement("div",{className:"exhib_info__content__text"},"\u5275\u4f5c\u6642\u9593 | 2019.04.04",i.a.createElement("br",null),"\u6750\u8ceaa",i.a.createElement("br",null),"\u6750\u8ceab",i.a.createElement("br",null),i.a.createElement("br",null),"\u884c\u70ba\u85dd\u8853\u4e4b\u6bcdMarina Abramovic\u7684\u81ea\u50b3\u5f0f\u4f5c\u54c1\u6fc0\u8d77\u4e86\u9019\u6b21\u5c0d\u820a\u60c5\u4e86\u65b7\u8a08\u5283\u7684\u5192\u96aa\u65c5\u7a0b\uff0c\u70ba22\u5e74\ud855\ude83\u4e00\u6bb5\u5f71\u97ff\u6df1\u9060\u7684\u611f\u60c5\u5275\u4f5c\uff0c\u628a\u500b\u4eba\u79c1\u5bc6\u3001\u771f\u5be6\u8207\u67d4\u5f31\u7684\u4e00\u9762\u5448\u73fe\u65bc\u85dd\u8853\uff0c\u6210\u70ba\u9996\u500b\u99d0\u6751\u500b\u5c55\u7684\u4e3b\u984c\u3002",i.a.createElement("br",null),i.a.createElement("br",null),"\u5e74\u8f15\u85dd\u8853\u5bb6 Phoebe Tang \u9127\u5a49\u6689 \u5c55\u51fa\u99d0\u6751\u4e00\u7cfb\u5217\u8907\u5408\u5a92\u6750\u88dd\u7f6e\u5275\u4f5c\uff0c\u53cd\u5e38\u4e00\u8cab\u7206\u70b8\u6027\u3001\u8840\u8089\u4e4b\u9593\u89e3\u69cb\u4eba\u6027\u7684\u65b9\u5f0f\uff0c\u6311\u6230\u81ea\u5df1\u4ee5\u5f80\u7684\u5275\u4f5c\u8108\u7d61\u3002 \u6d74\u5ba4\u4ee5\u767d\u7d19\u9ed1\u7dda\u70ba\u4e3b\u8ef8\uff0c\u5e36\u6709\u7d2f\u7a4d\u7684\u65e5\u5b50\u6642\u9593\u8207\u81ea\u7531\u5954\u653e\u7684\u601d\u7dd2\u4e4b\u610f\u3002\u9080\u8acb\u89c0\u8005\u9032\u5165\u5176\u6d74\u5ba4\u904a\u8d70\u3001\u5e2d\u5730\u800c\u5750\u53ca\u8eba\u4e0b\uff0c\u653e\u4e0b\u5916\u6bbb\uff0c\u4ee5\u8eab\u9ad4\u611f\u53d7\u85dd\u8853\u5bb6\u6700\u500b\u4eba\u79c1\u5bc6\u7684\u5167\u5728\u7a7a\u9593\u3002",i.a.createElement("br",null),i.a.createElement("br",null),"[\u85dd\u8853\u5bb6\u5728\u73fe\u5834]",i.a.createElement("br",null),i.a.createElement("br",null),"\u5728\u5c55\u89bd\u671f\u9593\uff0c\u5e74\u8f15\u85dd\u8853\u5bb6 Phoebe\u591a\u57282-5pm\u6642\u6bb5\u5728\u73fe\u5834(\u6b61\u8fce\u9810\u7d04)\uff0c\u8b93\u89c0\u8005\u6210\u70ba\u4f5c\u54c1\u4e3b\u5c0e\u8005\u81ea\u767c\u8207\u5979\u9032\u884c\u4e92\u52d5\uff0c\u5373\u5834\u5275\u9020\u6216\u7559\u4e0b\u4e00\u6a23\u7d66\u4e88\u85dd\u8853\u5bb6\u7684\uff0c\u63db\u8d70\u5979697\u4e2d\u7684\u4e00\u5f35\u727d\u639b(\u539f\u7a3f\u8c93\u756b)\uff0c\u4ee5\u85dd\u8853\u6210\u70ba\u5f7c\u6b64\u7684\u966a\u4f34\u3002 *\u6b61\u8fce\u5e36\u4e0a\u4e00\u4ef6\u9700\u653e\u4e0b\u7684\u6545\u4e8b\u6216\u7269\u54c1\u4f86\u89c0\u770b\uff0c\u8207\u85dd\u8853\u5bb6\u4e00\u540c\u9ad4\u9a57\u300c\u201dArt is life Art is adventure\u300d\u3002")),i.a.createElement("div",{className:"exhib_info__work_intro"},i.a.createElement("div",{className:"exhib_info__work_intro__item"},i.a.createElement("div",{className:"exhib_info__work_intro__item__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_info__work_intro__item__text"},i.a.createElement("p",{className:"exhib_info__work_intro__item__text__no"},"#001"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__title"},"\u4f5c\u54c1\u540d\u7a31"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__artist"},"\u85dd\u8853\u5bb6")),i.a.createElement("div",{className:"exhib_info__work_intro__item__button"})),i.a.createElement("div",{className:"exhib_info__work_intro__item"},i.a.createElement("div",{className:"exhib_info__work_intro__item__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_info__work_intro__item__text"},i.a.createElement("p",{className:"exhib_info__work_intro__item__text__no"},"#001"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__title"},"\u4f5c\u54c1\u540d\u7a31"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__artist"},"\u85dd\u8853\u5bb6")),i.a.createElement("div",{className:"exhib_info__work_intro__item__button"})),i.a.createElement("div",{className:"exhib_info__work_intro__item"},i.a.createElement("div",{className:"exhib_info__work_intro__item__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_info__work_intro__item__text"},i.a.createElement("p",{className:"exhib_info__work_intro__item__text__no"},"#001"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__title"},"\u4f5c\u54c1\u540d\u7a31"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__artist"},"\u85dd\u8853\u5bb6")),i.a.createElement("div",{className:"exhib_info__work_intro__item__button"}))))}}]),t}(i.a.Component)),O=(a(42),function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page_content upper_two"},i.a.createElement("div",{className:"exhib_info__content"},i.a.createElement("div",{className:"exhib_info__content__3d_view"},i.a.createElement("iframe",{onClick:function(e){return!1},"ng-non-bindable":!0,src:"https://my.matterport.com/show/?m=xznM1GRh3FK&brand=0",frameborder:"0",hspace:"0",scrolling:"no",tabindex:"0",vspace:"0",width:"100%",allowfullscreen:!0,allow:"vr"}),i.a.createElement("div",{className:"return"}),">")))}}]),t}(i.a.Component)),j=(a(43),function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page_content upper_two"},i.a.createElement("div",{className:"exhib_info__content"},i.a.createElement("div",{className:"exhib_info__content__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_info__content__audio"},i.a.createElement("p",{className:"exhib_info__content__audio__name"},"\u81f4\u5973\u5152\u5c55\u89bd\u5c0e\u89bd"),i.a.createElement("a",{className:"exhib_info__content__audio__close"}),i.a.createElement("audio",{id:"exhib_info__content__audio__player"},i.a.createElement("source",{src:"../../../img/audio.mp3",type:"audio/mpeg"}),">")),i.a.createElement("div",{className:"exhib_info__content__basic_info"},"\u5be6\u9ad4\u5c55\u89bd\u671f\u9593 | 2019.02.17 - 03.31 ",i.a.createElement("br",null),"\u5be6\u9ad4\u5c55\u89bd\u6642\u9593 | 11:00-21:00 ",i.a.createElement("br",null),"\u5be6\u9ad4\u5c55\u89bd\u5730\u9ede | \u7fa4\u5cf6\u570b\u969b\u85dd\u8853\u5712\u5340"),i.a.createElement("div",{className:"exhib_info__content__numbers"},i.a.createElement("div",{className:"exhib_info__content__numbers__item"},i.a.createElement("p",{className:"exhib_info__content__numbers__item__count"},"10,000"),i.a.createElement("p",{className:"exhib_info__content__numbers__item__text"},"\u89c0\u770b\u6b21\u6578")),i.a.createElement("div",{className:"exhib_info__content__numbers__item"},i.a.createElement("p",{className:"exhib_info__content__numbers__item__count"},"300"),i.a.createElement("p",{className:"exhib_info__content__numbers__item__text"},"\u6536\u85cf\u6b21\u6578"))),i.a.createElement("div",{className:"exhib_info__content__text"},"\u8acb\u4f60\u8d70\u9032\u6211\u306e\u6d74\u5ba4\u3002",i.a.createElement("br",null),i.a.createElement("br",null),"\u6d74\u5ba4\u662f\u4e00\u584a\u5fc5\u9808\u9017\u7559\u4e4b\u5730\uff0c\u662f\u500b\u4eba\u6700\u79c1\u5bc6\u3001\u77ed\u66ab\u53c8\u6046\u9577\u7684\u79c1\u4eba\u6642\u5149\u3002\u6bd4\u8d77\u623f\u9593\uff0c\u6d74\u5ba4\u4f3c\u4e4e\u66f4\u52a0\u8d64\u88f8\uff0c\u66f4\u591a\u79d8\u5bc6\u3002\u5f9e\u982d\u5230\u8173\uff0c\u6bcf\u500b\u7d30\u80de\u6bdb\u5b54\u90fd\u6709\u4e86\u4e94\u5b98\u3002\u5728\u6d74\u5ba4\u88e1\uff0c\u96a8\u8457\u6210\u9577\u6bcf\u500b\u968e\u6bb5\uff0c\u4f60\u6703\u767c\u73fe\u81ea\u5df1\u7684\u4e0d\u540c\uff0c\u7531\u5916\u5728\u7684\u76ae\u6bdb\u5668\u5b98\uff0c\u5230\u5167\u5728\u7684\u5fc3\u9748\u8d77\u4f0f\uff0c\u7121\u610f\u4e2d\u9010\u4e00\u6aa2\u8996\u3002",i.a.createElement("br",null),i.a.createElement("br",null),"\u201cArt is life Art is adventure\u201d",i.a.createElement("br",null),i.a.createElement("br",null),"\u884c\u70ba\u85dd\u8853\u4e4b\u6bcdMarina Abramovic\u7684\u81ea\u50b3\u5f0f\u4f5c\u54c1\u6fc0\u8d77\u4e86\u9019\u6b21\u5c0d\u820a\u60c5\u4e86\u65b7\u8a08\u5283\u7684\u5192\u96aa\u65c5\u7a0b\uff0c\u70ba22\u5e74\ud855\ude83\u4e00\u6bb5\u5f71\u97ff\u6df1\u9060\u7684\u611f\u60c5\u5275\u4f5c\uff0c\u628a\u500b\u4eba\u79c1\u5bc6\u3001\u771f\u5be6\u8207\u67d4\u5f31\u7684\u4e00\u9762\u5448\u73fe\u65bc\u85dd\u8853\uff0c\u6210\u70ba\u9996\u500b\u99d0\u6751\u500b\u5c55\u7684\u4e3b\u984c\u3002",i.a.createElement("br",null),i.a.createElement("br",null),"\u5e74\u8f15\u85dd\u8853\u5bb6 Phoebe Tang \u9127\u5a49\u6689 \u5c55\u51fa\u99d0\u6751\u4e00\u7cfb\u5217\u8907\u5408\u5a92\u6750\u88dd\u7f6e\u5275\u4f5c\uff0c\u53cd\u5e38\u4e00\u8cab\u7206\u70b8\u6027\u3001\u8840\u8089\u4e4b\u9593\u89e3\u69cb\u4eba\u6027\u7684\u65b9\u5f0f\uff0c\u6311\u6230\u81ea\u5df1\u4ee5\u5f80\u7684\u5275\u4f5c\u8108\u7d61\u3002 \u6d74\u5ba4\u4ee5\u767d\u7d19\u9ed1\u7dda\u70ba\u4e3b\u8ef8\uff0c\u5e36\u6709\u7d2f\u7a4d\u7684\u65e5\u5b50\u6642\u9593\u8207\u81ea\u7531\u5954\u653e\u7684\u601d\u7dd2\u4e4b\u610f\u3002\u9080\u8acb\u89c0\u8005\u9032\u5165\u5176\u6d74\u5ba4\u904a\u8d70\u3001\u5e2d\u5730\u800c\u5750\u53ca\u8eba\u4e0b\uff0c\u653e\u4e0b\u5916\u6bbb\uff0c\u4ee5\u8eab\u9ad4\u611f\u53d7\u85dd\u8853\u5bb6\u6700\u500b\u4eba\u79c1\u5bc6\u7684\u5167\u5728\u7a7a\u9593\u3002",i.a.createElement("br",null),i.a.createElement("br",null),"[\u85dd\u8853\u5bb6\u5728\u73fe\u5834]",i.a.createElement("br",null),i.a.createElement("br",null),"\u5728\u5c55\u89bd\u671f\u9593\uff0c\u5e74\u8f15\u85dd\u8853\u5bb6 Phoebe\u591a\u57282-5pm\u6642\u6bb5\u5728\u73fe\u5834(\u6b61\u8fce\u9810\u7d04)\uff0c\u8b93\u89c0\u8005\u6210\u70ba\u4f5c\u54c1\u4e3b\u5c0e\u8005\u81ea\u767c\u8207\u5979\u9032\u884c\u4e92\u52d5\uff0c\u5373\u5834\u5275\u9020\u6216\u7559\u4e0b\u4e00\u6a23\u7d66\u4e88\u85dd\u8853\u5bb6\u7684\uff0c\u63db\u8d70\u5979697\u4e2d\u7684\u4e00\u5f35\u727d\u639b(\u539f\u7a3f\u8c93\u756b)\uff0c\u4ee5\u85dd\u8853\u6210\u70ba\u5f7c\u6b64\u7684\u966a\u4f34\u3002 *\u6b61\u8fce\u5e36\u4e0a\u4e00\u4ef6\u9700\u653e\u4e0b\u7684\u6545\u4e8b\u6216\u7269\u54c1\u4f86\u89c0\u770b\uff0c\u8207\u85dd\u8853\u5bb6\u4e00\u540c\u9ad4\u9a57\u300c\u201dArt is life Art is adventure\u300d\u3002"),i.a.createElement("div",{className:"exhib_info__content__video"},i.a.createElement("iframe",{src:"https://www.youtube.com/embed/_dW66owaCJs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),i.a.createElement("div",{className:"exhib_info__work_intro"},i.a.createElement("div",{className:"exhib_info__work_intro__item"},i.a.createElement("div",{className:"exhib_info__work_intro__item__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_info__work_intro__item__text"},i.a.createElement("p",{className:"exhib_info__work_intro__item__text__no"},"#001"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__title"},"\u4f5c\u54c1\u540d\u7a31"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__artist"},"\u85dd\u8853\u5bb6")),i.a.createElement("div",{className:"exhib_info__work_intro__item__button"})),i.a.createElement("div",{className:"exhib_info__work_intro__item"},i.a.createElement("div",{className:"exhib_info__work_intro__item__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_info__work_intro__item__text"},i.a.createElement("p",{className:"exhib_info__work_intro__item__text__no"},"#001"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__title"},"\u4f5c\u54c1\u540d\u7a31"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__artist"},"\u85dd\u8853\u5bb6")),i.a.createElement("div",{className:"exhib_info__work_intro__item__button"})),i.a.createElement("div",{className:"exhib_info__work_intro__item"},i.a.createElement("div",{className:"exhib_info__work_intro__item__pic"},i.a.createElement("img",{src:a(10)})),i.a.createElement("div",{className:"exhib_info__work_intro__item__text"},i.a.createElement("p",{className:"exhib_info__work_intro__item__text__no"},"#001"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__title"},"\u4f5c\u54c1\u540d\u7a31"),i.a.createElement("p",{className:"exhib_info__work_intro__item__text__artist"},"\u85dd\u8853\u5bb6")),i.a.createElement("div",{className:"exhib_info__work_intro__item__button"}))),i.a.createElement("div",{className:"exhib_info__other_exhib"},i.a.createElement("p",{className:"exhib_info__other_exhib__title"},"\u5176\u4ed6\u5c55\u89bd"),i.a.createElement("div",{className:"exhib_card"},i.a.createElement("div",{className:"exhib_card__pic"},i.a.createElement("img",{src:a(15)})),i.a.createElement("div",{className:"exhib_card__text"},i.a.createElement("div",{className:"exhib_card__text__title"},"\u901d\u8005\u5982\u6e21\u6e21 As dead as a dodo"),i.a.createElement("div",{className:"exhib_card__text__artist"},"\u85dd\u8853\u5bb6\u540d\u7a31"),i.a.createElement("div",{className:"exhib_card__text__numbers"},i.a.createElement("div",{className:"exhib_card__text__numbers__item view"},"\u89c0\u770b\u6b21\u6578 999 \u4eba"),i.a.createElement("div",{className:"exhib_card__text__numbers__item mark"},"\u6536\u85cf\u6b21\u6578 999 \u4eba")))),i.a.createElement("div",{className:"exhib_card"},i.a.createElement("div",{className:"exhib_card__pic"},i.a.createElement("img",{src:a(15)})),i.a.createElement("div",{className:"exhib_card__text"},i.a.createElement("div",{className:"exhib_card__text__title"},"\u901d\u8005\u5982\u6e21\u6e21 As dead as a dodo"),i.a.createElement("div",{className:"exhib_card__text__artist"},"\u85dd\u8853\u5bb6\u540d\u7a31"),i.a.createElement("div",{className:"exhib_card__text__numbers"},i.a.createElement("div",{className:"exhib_card__text__numbers__item view"},"\u89c0\u770b\u6b21\u6578 999 \u4eba"),i.a.createElement("div",{className:"exhib_card__text__numbers__item mark"},"\u6536\u85cf\u6b21\u6578 999 \u4eba"))))))}}]),t}(i.a.Component)),y=(a(44),function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page_content upper_two"},i.a.createElement("div",{className:"exhib_team__content"},i.a.createElement("p",{className:"exhib_team__content__category"},"\u7b56\u5c55\u5718\u968a"),i.a.createElement("div",{className:"exhib_team__content__team_pic"},i.a.createElement("img",{src:a(45)})),i.a.createElement("div",{className:"exhib_team__content__text"},"\u7fa4\u5cf6\u570b\u969b\u85dd\u8853\u5712\u5340 Islands International Art Park ",i.a.createElement("br",null),i.a.createElement("br",null),"\uff5c\u5275\u7acb ",i.a.createElement("br",null),"\u7fa4\u5cf6\u5275\u7acb\u65bc2018\u5e74\u81f4\u529b\u65bc\u5c07\u85dd\u8853\u5e36\u5165\u751f\u6d3b\uff0c\u671f\u671b\u9022\u7532\u5546\u5708\u9664\u4e86\u8cfc\u7269\u8207\u7f8e\u98df\u4e4b\u5916\u9084\u80fd\u6dfb\u52a0\u85dd\u8853\u8207\u4eba\u6587\u7684\u98a8\u6c23\u3002"," ",i.a.createElement("br",null),i.a.createElement("br",null),"\uff5c\u7406\u5ff5\u7c21\u4ecb ",i.a.createElement("br",null),"\u300c \u4fdd\u6301\u500b\u9ad4\u4e4b\u9593\u7684\u8ddd\u96e2\uff0c\u5c0b\u627e\u7fa4\u9ad4\u7522\u751f\u7684\u6f23\u6f2a\u3002\u300d ",i.a.createElement("br",null),"\u201cEveryone is an island, but we are not alone.\u201d ",i.a.createElement("br",null),"\u6211\u5011\u76f8\u4fe1\u6bcf\u4e00\u500b\u4eba\u90fd\u662f\u4e00\u5ea7\u7368\u7acb\u7684\u5cf6\u5dbc\uff0c\u6b23\u8cde\u6bcf\u4e00\u5ea7\u5cf6\u5dbc\u4e0d\u540c\u89c0\u9ede\u6240\u7522\u751f\u7684\u6f23\u6f2a\uff0c\u5728\u9019\u88e1\u6bcf\u4e00\u5ea7\u5cf6\u5dbc\u90fd\u4e0d\u6703\u89ba\u5f97\u5b64\u7368\uff0c \u56e0\u70ba\u6211\u5011\u805a\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u80fd\u5275\u9020\u51fa\u7121\u7aae\u7684\u53ef\u80fd\u6027\u3002",i.a.createElement("br",null),"\u7fa4\u5cf6\u570b\u969b\u85dd\u8853\u5712\u5340\u7531\u8001\u820a\u5efa\u7bc9\u6539\u5efa\uff0c\u76ee\u524d\u64c1\u6709\u5c55\u6f14\u7a7a\u9593\u3001\u8868\u6f14\u821e\u53f0\u3001\u8996\u807d\u5ba4\u3001\u85dd\u8853\u5bb6\u5de5\u4f5c\u5ba4\u3001\u5496\u5561\u5ef3\u4e4b\u5916\uff0c\u5712\u5340\u9084\u64c1\u6709\u5bbf\u820d\u63d0\u4f9b\u7d66\u99d0\u6751\u85dd\u8853\u5bb6\uff0c\u85dd\u8853\u5bb6\u5c31\u4f4f\u5728\u5712\u5340\u88e1\uff0c\u53ef\u4ee5\u8aaa\u662f\u843d\u5be6\u85dd\u8853\u5373\u662f\u751f\u6d3b\u3002")))}}]),t}(i.a.Component)),C=[{path:"/home",title:"\u4e3b\u9801",component:N,exact:!0},{path:"/exhibition",title:"\u5c55\u89bd",component:function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(b.a)(this,Object(u.a)(t).call(this,e))).selectedIndexOnChange=function(e){var t=a.props,n=t.history,_=t.match,i=e.target.value;a.setState(function(e){return Object(w.a)({},e,{selectedValue:i})},function(){return n.replace("".concat(_.url,"/").concat(i))})},a.routes=[{path:"/exhib_info",component:j,index:0},{path:"/exhib_3d",component:O,index:1},{path:"/exhib_works",component:g,index:2},{path:"/exhib_team",component:y,index:3}];var n=a.routes.filter(function(t){return e.location.pathname.includes(t.path)})[0];return a.state={selectedValue:(n||a.routes[2]).path},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.history;return i.a.createElement("div",null,i.a.createElement(d,{isInExhibition:!0,history:a}),i.a.createElement(k,{title:"\u81f4\u5973\u5152",onChange:this.selectedIndexOnChange}),i.a.createElement(m.d,null,i.a.createElement(m.b,{path:"".concat(t.url,"/exhib_info"),component:j}),i.a.createElement(m.b,{path:"".concat(t.url,"/exhib_3d"),component:O}),i.a.createElement(m.b,{path:"".concat(t.url,"/exhib_works"),component:g}),i.a.createElement(m.b,{path:"".concat(t.url,"/exhib_team"),component:y}),i.a.createElement(m.a,{from:"".concat(t.url),to:"".concat(t.url,"/exhib_works")})),i.a.createElement(x,null))}}]),t}(i.a.Component),exact:!1}];c.a.render(i.a.createElement(l.a,null,i.a.createElement(m.d,null,C.map(function(e,t){return[e].concat(Object(n.a)(e.children?e.children:[])).map(function(a,n){return i.a.createElement(m.b,{key:t+.1*n,path:e.path,component:e.component,exact:e.exact})})}),i.a.createElement(m.a,{from:"/",to:"./home"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[29,1,2]]]);
//# sourceMappingURL=main.ecb83c09.chunk.js.map