"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9959],{9959:(Z,d,s)=>{s.r(d),s.d(d,{FloresPageModule:()=>v});var g=s(4755),n=s(7002),h=s(5030),p=s(2852),t=s(3020),m=s(4428);let u=(()=>{class o{constructor(){this.flores=[{nome:"Rosa",preco:10},{nome:"Cravo",preco:8},{nome:"Orqu\xeddea",preco:15},{nome:"Margarida",preco:7},{nome:"Girassol",preco:9},{nome:"Tulipa",preco:12}]}getFlores(){return this.flores}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function f(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-grid")(2,"ion-row")(3,"ion-col",21),t._UZ(4,"ion-img",22),t.qZA(),t.TgZ(5,"ion-col",23)(6,"ion-label",24),t._uU(7),t.qZA()(),t.TgZ(8,"ion-col",21)(9,"ion-button",25),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.adicionarAoCarrinho(c))}),t._uU(10,"Adicionar"),t.qZA()()()()()}if(2&o){const e=a.$implicit,r=a.index,i=t.oxw();t.xp6(4),t.Q6J("src",i.filteredIndexs[r]),t.xp6(3),t.Oqu(null==e?null:e.nome)}}const x=[{path:"",component:(()=>{class o{constructor(e,r){this.carrinhoService=e,this.floresService=r,this.items=[],this.iss=["rosa","cravo","orquidia","margarida","girassol","tulipa"],this.indexs=[],this.flores=[],this.carrinhoItens=[],this.filteredFlores=[],this.filteredIndexs=[]}checkCredentials(){alert("Margaridas p\xf3 cesto")}ngOnInit(){for(let e=1;e<7;e++)this.indexs.push(`../assets/images/Screenshot_${this.iss[e-1]}.png`);this.flores=this.floresService.getFlores(),this.filteredFlores=this.flores,this.filteredIndexs=this.indexs}tack(e){if("string"==typeof e){const r=e.slice(0,e.length-4).substring(28,e.length-4);for(let i=0;i<this.flores.length;i++)this.flores[i].nome==r&&(console.log(i),this.carrinhoService.adicionarItem(this.flores[i]),console.log("Conte\xfado do carrinho:",this.carrinhoService.getCarrinho()))}}adicionarAoCarrinho(e){this.carrinhoService.adicionarItem(e),console.log("Planta adicionada ao carrinho:",e),this.filteredIndexs.push(e.foto)}handleInput(e){const r=e.target.value.toLowerCase();this.filteredFlores=this.flores.filter((i,c)=>{const l=i.nome.toLowerCase(),P=this.indexs[c].toLowerCase();return l.includes(r)||P.includes(r)}),this.filteredIndexs=this.filteredFlores.map((i,c)=>this.indexs[this.flores.indexOf(i)])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.e),t.Y36(u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["flores-home"]],decls:41,vars:2,consts:[["id","fundo"],["id","menu"],["id","logo"],[3,"debounce","ionInput"],["id","corpo",1,"esp",2,"--ion-background-color","none !important"],[4,"ngFor","ngForOf"],["loadingText","Please wait...","loadingSpinner","bubbles"],[1,"largura"],["id","rodape"],["border","0","cellspacing","0","cellpadding","0",2,"width","100%","margin-left","auto","margin-right","auto"],[2,"width","20%","text-align","center"],["href","carrinho"],["src","../assets/images/cesto.png","href","carrinho","alt","","width","80","height","80"],["href","contactos"],["src","../assets/images/contacto.png","alt","","width","80","height","80"],["href","produtos"],["src","../assets/images/home.png","href","home","alt","","width","80","height","80"],["href","informate"],["src","../assets/images/info.png","alt","","width","80","height","80"],["href","conta"],["src","../assets/images/user.png","alt","","width","80","height","80"],["size","3"],[3,"src"],["size","6"],[1,"nome-flor"],["expand","large","color","primary",1,"meu-botao",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"ion-searchbar",3),t.NdJ("ionInput",function(c){return r.handleInput(c)}),t.qZA()(),t.TgZ(4,"div",4)(5,"ion-content")(6,"ion-list"),t.YNc(7,f,11,2,"ion-item",5),t.qZA(),t.TgZ(8,"ion-infinite-scroll"),t._UZ(9,"ion-infinite-scroll-content",6),t.qZA()()(),t._UZ(10,"div",7),t.TgZ(11,"div",8)(12,"table",9)(13,"tbody")(14,"tr")(15,"td",10)(16,"a",11),t._UZ(17,"img",12),t.qZA()(),t.TgZ(18,"td",10)(19,"a",13),t._UZ(20,"img",14),t.qZA()(),t.TgZ(21,"td",10)(22,"a",15),t._UZ(23,"img",16),t.qZA()(),t.TgZ(24,"td",10)(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"td",10)(28,"a",19),t._UZ(29,"img",20),t.qZA()()(),t.TgZ(30,"tr")(31,"td",10),t._uU(32,"cesto"),t.qZA(),t.TgZ(33,"td",10),t._uU(34,"contacto"),t.qZA(),t.TgZ(35,"td",10),t._uU(36,"In\xedcio"),t.qZA(),t.TgZ(37,"td",10),t._uU(38,"Info"),t.qZA(),t.TgZ(39,"td",10),t._uU(40,"Perfil"),t.qZA()()()()()()),2&e&&(t.xp6(3),t.Q6J("debounce",1e3),t.xp6(4),t.Q6J("ngForOf",r.filteredFlores))},dependencies:[g.sg,n.YG,n.wI,n.W2,n.jY,n.Xz,n.ju,n.MB,n.Ie,n.Q$,n.q_,n.Nd,n.VI,n.j9],styles:['@charset "UTF-8";#fundo[_ngcontent-%COMP%]{background:url(backgg_v2.8ed1b2c092c9c6a8.png) no-repeat fixed center;background-size:cover;width:100%;height:100vh}#menu[_ngcontent-%COMP%]{height:15%;position:relative;display:block}#logo[_ngcontent-%COMP%]{height:10%;position:relative;display:block}#corpo[_ngcontent-%COMP%]{height:60%;position:relative;display:block}#corpo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;text-align:center;text-transform:uppercase;color:#000;font-weight:700}.item.item-input[_ngcontent-%COMP%]{position:relative;--background: #d9d9d9 !important;color:#000;padding:10px 40px;--padding:0px !important;--border-radius: 15px !important;--min-height: 32px !important}ion-input[_ngcontent-%COMP%]{position:relative;--background: #d9d9d9 !important;color:#000;--border-radius: 15px !important;--min-height: 12px !important;--inner-border-width: 0px !important;margin:0 30px 30px}.item-label-floating[_ngcontent-%COMP%]   .sc-ion-input-ios-h[_ngcontent-%COMP%]{--padding-top: 0px !important;--padding-end: 0px !important;--padding-bottom: 0px !important;--padding-start: 0px !important}.label-floating.sc-ion-label-ios-h[_ngcontent-%COMP%]{transform:none!important;margin-top:16px}.ion-color-primary[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-primary, #060825) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-primary-shade, #060825) !important;--ion-color-tint: var(--ion-color-primary-tint, #060825) !important;--border-radius: 15px !important}.button-round[_ngcontent-%COMP%]{width:100%!important;margin:10px auto!important;--ion-color-base: black !important;font-size:20px}.largura[_ngcontent-%COMP%]{display:block;width:100%;padding:10px 40px;text-align:center}.esquerda[_ngcontent-%COMP%]{display:block;width:50%;float:left;position:relative;text-align:left}.direita[_ngcontent-%COMP%]{display:block;width:50%;float:right;position:relative;text-align:center}img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.espbt[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:red}.esp[_ngcontent-%COMP%]{--ion-item-background: none !important}a[_ngcontent-%COMP%]{color:#1b680d;text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#c75b02}.item-lines-default[_ngcontent-%COMP%]{--background: none !important}ion-item[_ngcontent-%COMP%]::part(native){padding-left:unset;--inner-border-width: 0 !important}.nome-flor[_ngcontent-%COMP%]{color:#000;font-size:20px;margin-top:35px;margin-left:15px}.meu-botao[_ngcontent-%COMP%]{margin-left:-75px;margin-top:31px}']}),o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(x),p.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,h.u5,n.Pc,b]}),o})()}}]);