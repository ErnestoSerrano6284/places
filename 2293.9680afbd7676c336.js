"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2293],{2293:(v,s,a)=>{a.r(s),a.d(s,{PlacesPageModule:()=>f});var r=a(6895),u=a(433),n=a(4556),l=a(1407),e=a(8256),g=a(3136);const P=function(t){return["/places",t]};function d(t,c){if(1&t&&(e.TgZ(0,"ion-item",8)(1,"ion-avatar",9),e._UZ(2,"ion-img",10),e.qZA(),e.TgZ(3,"ion-label"),e._uU(4),e.qZA()()),2&t){const o=c.$implicit;e.Q6J("routerLink",e.VKq(3,P,o.id)),e.xp6(2),e.Q6J("src",o.imageURL),e.xp6(2),e.hij(" ",o.title," ")}}const m=[{path:"",component:(()=>{class t{constructor(o,i){this.placesService=o,this.ruta=i,this.Places=[]}ngOnInit(){this.Places=this.placesService.getPlaces()}ionViewCanEnter(){this.Places=this.placesService.getPlaces()}goHome(){this.ruta.navigate(["/home"])}addNewPlace(){this.ruta.navigate(["/new-place"])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.E),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-places"]],decls:13,vars:1,consts:[["color","secondary"],["slot","end"],[3,"click"],["name","globe"],[3,"routerLink",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","danger",3,"click"],["name","add"],[3,"routerLink"],["slot","start"],[3,"src"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),e._uU(3,"places"),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-button",2),e.NdJ("click",function(){return i.goHome()}),e._UZ(6,"ion-icon",3),e.qZA()()()(),e.TgZ(7,"ion-content")(8,"ion-list"),e.YNc(9,d,5,5,"ion-item",4),e.qZA(),e.TgZ(10,"ion-fab",5)(11,"ion-fab-button",6),e.NdJ("click",function(){return i.addNewPlace()}),e._UZ(12,"ion-icon",7),e.qZA()()()),2&o&&(e.xp6(9),e.Q6J("ngForOf",i.Places))},dependencies:[r.sg,n.BJ,n.YG,n.Sm,n.W2,n.IJ,n.W4,n.Gu,n.gu,n.Xz,n.Ie,n.Q$,n.q_,n.wd,n.sr,n.YI,l.rH]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(m),l.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,u.u5,n.Pc,p]}),t})()}}]);