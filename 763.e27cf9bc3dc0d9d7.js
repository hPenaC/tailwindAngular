"use strict";(self.webpackChunktailwindAngularProject=self.webpackChunktailwindAngularProject||[]).push([[763],{763:($,Z,r)=>{r.r(Z),r.d(Z,{MonitorModule:()=>Q});var u=r(808),e=r(223),f=r(421),v=r(306),y=r(577),x=r(144),s=r(576),w=r(250);const A=["addListener","removeListener"],T=["addEventListener","removeEventListener"],b=["on","off"];function m(t,n,o,i){if((0,s.m)(o)&&(i=o,o=void 0),i)return m(t,n,o).pipe((0,w.Z)(i));const[l,h]=function(t){return(0,s.m)(t.addEventListener)&&(0,s.m)(t.removeEventListener)}(t)?T.map(c=>d=>t[c](n,d,o)):function(t){return(0,s.m)(t.addListener)&&(0,s.m)(t.removeListener)}(t)?A.map(p(t,n)):function(t){return(0,s.m)(t.on)&&(0,s.m)(t.off)}(t)?b.map(p(t,n)):[];if(!l&&(0,x.z)(t))return(0,y.z)(c=>m(c,n,o))((0,f.Xf)(t));if(!l)throw new TypeError("Invalid event target");return new v.y(c=>{const d=(...g)=>c.next(1<g.length?g:g[0]);return l(d),()=>h(d)})}function p(t,n){return o=>i=>t[o](n,i)}var k=r(4),a=r(81);const q=["scroll"],j=function(){return["/"]},L=function(){return["/platform"]},z=function(){return["/company"]},O=function(){return["/blog"]},H=function(){return["/request-demo"]},E=function(t,n,o){return{hidden:t,"scale-out-ver-top":n,"scale-in-ver-top":o}};let B=(()=>{class t{constructor(){this.isClosed=!0,this.wasClicked=!1}ngAfterViewInit(){this.scrollSubscription&&!this.scrollSubscription.closed&&this.scrollSubscription.unsubscribe(),this.scrollSubscription=m(document,"scroll").pipe((0,k.U)(this.calcularPorcentajeScroll)).subscribe(o=>{this.scrollBar.nativeElement.style.width=`${o}%`})}getIsClosed(){return this.isClosed}calcularPorcentajeScroll(o){const{scrollTop:i,scrollHeight:l,clientHeight:h}=o.target.documentElement;return i/(l-h)*100}getClicked(){return this.wasClicked}actionMenu(){this.wasClicked||(this.wasClicked=!0),this.isClosed=!this.isClosed}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],viewQuery:function(o,i){if(1&o&&e.Gf(q,7),2&o){let l;e.iGM(l=e.CRH())&&(i.scrollBar=l.first)}},decls:73,vars:15,consts:[[1,"sticky","top-0","z-50","w-full"],[1,"bg-zinc-700","relative","rounded-b-lg","shadow-lg","ring-1","ring-black","ring-opacity-5","max-w-full","mx-auto","px-6","lg:px-24"],[1,"w-11/12","mx-[5%]","absolute","bottom-0","left-0","bg-gray-200","h-1"],[1,"bg-yellow-500","h-1","w-0","scroll"],["scroll",""],[1,"flex","justify-between","items-center","py-6","md:justify-start","md:space-x-10"],[1,"flex","justify-start","lg:w-0","lg:flex-1"],[3,"routerLink"],[1,"sr-only"],["src","https://www.monitorpro.ai/wp-content/uploads/2020/07/logo_fondo_blanco_v1.png","alt","",1,"h-12","w-auto","lg:h-16"],[1,"-mr-2","-my-2","md:hidden"],["type","button","aria-expanded","false",1,"bg-yellow-500","rounded-md","p-2","inline-flex","items-center","justify-center","text-black","focus:outline-none","focus:ring-1","focus:ring-inset","focus:ring-yellow-400",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","aria-hidden","true",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16M4 18h16"],[1,"hidden","md:flex","items-center","justify-end","md:flex-1","lg:w-0"],[1,"whitespace-nowrap","text-base","font-medium","text-white","hover:text-gray-300","hover:border-b-2","hover:border-yellow-500","mx-3",3,"routerLink"],[1,"ml-8","whitespace-nowrap","inline-flex","items-center","justify-center","px-4","py-2","border","border-transparent","rounded-md","shadow-sm","text-base","font-medium","text-black","bg-yellow-400","hover:bg-yellow-300","hover:shadow-sm","hover:shadow-yellow-200","hover:text-gray-700",3,"routerLink"],[1,"absolute","top-0","inset-x-0","p-2","transition","ease-out","transform","origin-top-right","md:hidden",3,"ngClass"],[1,"rounded-lg","shadow-lg","ring-1","ring-black","ring-opacity-5","bg-zinc-700","divide-y-2","divide-yellow-500"],[1,"pt-5","pb-6","px-5"],[1,"flex","items-center","justify-between"],["src","https://www.monitorpro.ai/wp-content/uploads/2022/01/isotipoMonitor.png","alt","Workflow",1,"h-20","w-auto"],[1,"-mr-2"],["type","button",1,"bg-yellow-500","rounded-md","p-2","inline-flex","items-center","justify-center","text-black","focus:outline-none","focus:ring-1","focus:ring-inset","focus:ring-yellow-400",3,"click"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],[1,"mt-6"],[1,"grid","gap-y-8"],["href","#",1,"-m-3","p-3","flex","items-center","rounded-md"],["width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"h-8","w-8","text-yellow-300"],["stroke","none","d","M0 0h24v24H0z"],["x","4","y","4","width","16","height","4","rx","1"],["x","4","y","12","width","6","height","8","rx","1"],["x1","14","y1","12","x2","20","y2","12"],["x1","14","y1","16","x2","20","y2","16"],["x1","14","y1","20","x2","20","y2","20"],[1,"ml-3","text-base","font-medium","text-white"],["fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-8","w-8","text-yellow-300"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],["href","#",1,"-m-3","p-3","flex","items-center","rounded-md","hover:bg-gray-50"],["x","5","y","3","width","14","height","18","rx","2"],["x1","9","y1","7","x2","15","y2","7"],["x1","9","y1","11","x2","15","y2","11"],["x1","9","y1","15","x2","13","y2","15"],[1,"py-6","px-5","space-y-6"],["href","#",1,"w-full","flex","items-center","justify-center","px-4","py-2","border","border-transparent","rounded-md","shadow-sm","text-base","font-medium","text-black","bg-yellow-400","hover:bg-yellow-300","hover:shadow-sm","hover:shadow-yellow-200","hover:text-gray-700"]],template:function(o,i){1&o&&(e.TgZ(0,"header",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"div",3,4),e.qZA(),e.TgZ(5,"nav",5),e.TgZ(6,"div",6),e.TgZ(7,"a",7),e.TgZ(8,"span",8),e._uU(9,"Logo menu"),e.qZA(),e._UZ(10,"img",9),e.qZA(),e.qZA(),e.TgZ(11,"div",10),e.TgZ(12,"button",11),e.NdJ("click",function(){return i.actionMenu()}),e.TgZ(13,"span",8),e._uU(14,"Open menu"),e.qZA(),e.O4$(),e.TgZ(15,"svg",12),e._UZ(16,"path",13),e.qZA(),e.qZA(),e.qZA(),e.kcU(),e.TgZ(17,"div",14),e.TgZ(18,"a",15),e._uU(19," Plataforma "),e.qZA(),e.TgZ(20,"a",15),e._uU(21," Compa\xf1ia "),e.qZA(),e.TgZ(22,"a",15),e._uU(23," Blog "),e.qZA(),e.TgZ(24,"a",16),e._uU(25," Solicita tu demo "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",17),e.TgZ(27,"nav",18),e.TgZ(28,"div",19),e.TgZ(29,"div",20),e.TgZ(30,"div"),e._UZ(31,"img",21),e.qZA(),e.TgZ(32,"div",22),e.TgZ(33,"button",23),e.NdJ("click",function(){return i.actionMenu()}),e.TgZ(34,"span",8),e._uU(35,"Close menu"),e.qZA(),e.O4$(),e.TgZ(36,"svg",12),e._UZ(37,"path",24),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.kcU(),e.TgZ(38,"div",25),e.TgZ(39,"nav",26),e.TgZ(40,"a",27),e.O4$(),e.TgZ(41,"svg",28),e._UZ(42,"path",29),e._UZ(43,"rect",30),e._UZ(44,"rect",31),e._UZ(45,"line",32),e._UZ(46,"line",33),e._UZ(47,"line",34),e.qZA(),e.kcU(),e.TgZ(48,"span",35),e._uU(49," Plataforma "),e.qZA(),e.qZA(),e.TgZ(50,"a",27),e.O4$(),e.TgZ(51,"svg",36),e._UZ(52,"path",37),e.qZA(),e.kcU(),e.TgZ(53,"span",35),e._uU(54," Clientes "),e.qZA(),e.qZA(),e.TgZ(55,"a",27),e.O4$(),e.TgZ(56,"svg",36),e._UZ(57,"path",38),e.qZA(),e.kcU(),e.TgZ(58,"span",35),e._uU(59," Compa\xf1ia "),e.qZA(),e.qZA(),e.TgZ(60,"a",39),e.O4$(),e.TgZ(61,"svg",28),e._UZ(62,"path",29),e._UZ(63,"rect",40),e._UZ(64,"line",41),e._UZ(65,"line",42),e._UZ(66,"line",43),e.qZA(),e.kcU(),e.TgZ(67,"span",35),e._uU(68," Blog "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(69,"div",44),e.TgZ(70,"div"),e.TgZ(71,"a",45),e._uU(72," Contactanos "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(7),e.Q6J("routerLink",e.DdM(6,j)),e.xp6(11),e.Q6J("routerLink",e.DdM(7,L)),e.xp6(2),e.Q6J("routerLink",e.DdM(8,z)),e.xp6(2),e.Q6J("routerLink",e.DdM(9,O)),e.xp6(2),e.Q6J("routerLink",e.DdM(10,H)),e.xp6(2),e.Q6J("ngClass",e.kEZ(11,E,i.getIsClosed()&&!i.getClicked(),i.getIsClosed()&&i.getClicked(),!i.getIsClosed())))},directives:[a.yS,u.mk],styles:[".scale-in-ver-top[_ngcontent-%COMP%]{animation:scale-in-ver-top .3s cubic-bezier(.25,.46,.45,.94) both}.scale-out-ver-top[_ngcontent-%COMP%]{animation:scale-out-ver-top .3s cubic-bezier(.55,.085,.68,.53) both}.scroll[_ngcontent-%COMP%]{transition:width .8s}@keyframes scale-in-ver-top{0%{transform:scaleY(0);transform-origin:100% 0%;opacity:1}to{transform:scaleY(1);transform-origin:100% 0%;opacity:1}}@keyframes scale-out-ver-top{0%{transform:scaleY(1);transform-origin:100% 0%;opacity:1}to{transform:scaleY(0);transform-origin:100% 0%;opacity:1}}"]}),t})();const F=function(){return["/company"]};let S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],decls:37,vars:2,consts:[[1,"bg-zinc-700","py-12","px-4"],["tabindex","0","aria-label","footer",1,"focus:outline-none","mx-auto","container","flex","flex-col","items-center","justify-center"],[1,"w-9/12","text-white","flex","justify-between","items-center","mb-6"],[1,"text-sm"],[1,"flex","items-center"],[1,"mx-2"],["href","https://www.facebook.com/monitorprofessional","target","_blank","rel","noopener noreferrer"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"h-8","w-8","text-black","rounded-xl","p-1","bg-yellow-300","hover:bg-yellow-200","hover:shadow-sm","hover:shadow-yellow-200"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],["href","https://www.linkedin.com/showcase/monitor-pro/","target","_blank","rel","noopener noreferrer"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","https://www.youtube.com/channel/UC3A7t0xWBt7JQIWEePx4mcQ","target","_blank","rel","noopener noreferrer"],["d","M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"],["points","9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"],[1,"w-9/12","h-0.5","bg-yellow-300","opacity-30","rounded-full"],[1,"text-white","flex","flex-col","md:items-center","f-f-l","pt-3"],[1,"my-6","text-base","text-color","f-f-l"],[1,"sm:flex","items-center","text-sm"],[1,"sm:mr-6","cursor-pointer","pt-4","lg:py-0"],[1,"focus:outline-none","focus:underline","hover:text-gray-300",3,"routerLink"],["href","javascript:void(0)",1,"focus:outline-none","focus:underline","hover:text-gray-300"],[1,"text-sm","text-color","mb-10","f-f-l"],["tabindex","0",1,"focus:outline-none","text-center","text-xs"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p",3),e._uU(4,"Redes sociales"),e.qZA(),e.TgZ(5,"ul",4),e.TgZ(6,"li",5),e.TgZ(7,"a",6),e.O4$(),e.TgZ(8,"svg",7),e._UZ(9,"path",8),e.qZA(),e.qZA(),e.qZA(),e.kcU(),e.TgZ(10,"li",5),e.TgZ(11,"a",9),e.O4$(),e.TgZ(12,"svg",7),e._UZ(13,"path",10),e._UZ(14,"rect",11),e._UZ(15,"circle",12),e.qZA(),e.qZA(),e.qZA(),e.kcU(),e.TgZ(16,"li",5),e.TgZ(17,"a",13),e.O4$(),e.TgZ(18,"svg",7),e._UZ(19,"path",14),e._UZ(20,"polygon",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.kcU(),e._UZ(21,"div",16),e.TgZ(22,"div",17),e.TgZ(23,"div",18),e.TgZ(24,"ul",19),e.TgZ(25,"li",20),e.TgZ(26,"a",21),e._uU(27,"Acerca de nosotros "),e.qZA(),e.qZA(),e.TgZ(28,"li",20),e.TgZ(29,"a",22),e._uU(30,"Politicas de privacidad "),e.qZA(),e.qZA(),e.TgZ(31,"li",20),e.TgZ(32,"a",22),e._uU(33,"Oficinas "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",23),e.TgZ(35,"p",24),e._uU(36," \xa9 2022 Mayasoft. All rights reserved "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(26),e.Q6J("routerLink",e.DdM(1,F)))},directives:[a.yS],styles:[""]}),t})(),J=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-monitor"]],decls:3,vars:0,template:function(o,i){1&o&&(e._UZ(0,"app-header"),e._UZ(1,"router-outlet"),e._UZ(2,"app-footer"))},directives:[B,a.lC,S],styles:[""]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,a.Bz]]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,P,a.Bz.forChild([{path:"",component:J,children:[{path:"",loadChildren:()=>r.e(34).then(r.bind(r,34)).then(n=>n.HomeModule)},{path:"platform",loadChildren:()=>r.e(370).then(r.bind(r,370)).then(n=>n.PlatformModule)},{path:"company",loadChildren:()=>r.e(674).then(r.bind(r,674)).then(n=>n.CompanyModule)},{path:"blog",loadChildren:()=>r.e(160).then(r.bind(r,160)).then(n=>n.BlogModule)},{path:"request-demo",loadChildren:()=>r.e(7).then(r.bind(r,7)).then(n=>n.DemoFormModule)}]}])]]}),t})()}}]);