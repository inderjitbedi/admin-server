"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[990],{990:(A,u,n)=>{n.r(u),n.d(u,{DashboardModule:()=>Z});var c=n(6895),d=n(3267),i=n(8490),t=n(4650),h=n(2289),l=n(4507),v=n(4859),f=n(4850),g=n(3683),p=n(7392);const b=function(o){return{active:o}};let C=(()=>{class o{constructor(e,a,r){this.observer=e,this.router=a,this.authGuard=r,this.options={bottom:0,fixed:!1,top:0},this.router.events.subscribe(m=>{m instanceof i.m2&&(this.currentUrl=m.url)})}ngOnInit(){}ngAfterViewInit(){this.currentUrl=this.router.url,this.observer.observe(["(max-width: 800px)"]).subscribe(e=>{e.matches?(this.sidenav.mode="over",this.sidenav.close()):(this.sidenav.mode="side",this.sidenav.open())})}logout(){this.authGuard.logout()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.Yg),t.Y36(i.F0),t.Y36(l.a))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],viewQuery:function(e,a){if(1&e&&t.Gf(d.JX,5),2&e){let r;t.iGM(r=t.CRH())&&(a.sidenav=r.first)}},decls:19,vars:3,consts:[[1,"mat-elevation-z8","sidenav"],["mat-button","","routerLink","/dashboard/faq","routerLinkActive","active",1,"menu-button","active",3,"ngClass"],[1,"move-to-end","of","side","nav"],["mat-button","",1,"menu-button",3,"click"],[1,"content","mat-elevation-z8"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-toolbar"),t._uU(1," Admin Dashboard\n"),t.qZA(),t.TgZ(2,"mat-sidenav-container")(3,"mat-sidenav",0)(4,"button",1)(5,"mat-icon"),t._uU(6,"question_answer"),t.qZA(),t.TgZ(7,"span"),t._uU(8,"FAQ"),t.qZA()(),t.TgZ(9,"div",2),t._UZ(10,"mat-divider"),t.TgZ(11,"button",3),t.NdJ("click",function(){return a.logout()}),t.TgZ(12,"mat-icon"),t._uU(13,"logout"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"Logout"),t.qZA()()()(),t.TgZ(16,"mat-sidenav-content")(17,"div",4),t._UZ(18,"router-outlet"),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("ngClass",t.VKq(1,b,(null==a.currentUrl?null:a.currentUrl.indexOf("faq"))>-1)))},dependencies:[i.lC,i.rH,i.Od,c.mk,v.lW,f.d,g.Ye,p.Hw,d.JX,d.TM,d.Rh],styles:["mat-toolbar[_ngcontent-%COMP%]{background:#002b5c;color:#fff}mat-sidenav[_ngcontent-%COMP%]{margin:16px;width:200px;border-right:none;background:#002b5c;color:#fff;border-radius:10px;padding:16px;text-align:center}.menu-button[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-start;font-size:1rem}.menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.menu-button.active[_ngcontent-%COMP%]{border:1px solid white}.content[_ngcontent-%COMP%]{height:calc(100vh - 140px);border-radius:10px;margin:16px 16px 16px 32px;padding:20px;overflow-y:auto;justify-content:center;align-items:center;font-size:2rem;color:#d3d3d3}mat-sidenav-container[_ngcontent-%COMP%]{height:calc(100vh - 65px)}"]}),o})();var x=n(898);const M=[{path:"",component:C,children:[{path:"faq",loadChildren:()=>Promise.all([n.e(592),n.e(14)]).then(n.bind(n,14)).then(o=>o.FaqModule),canActivate:[l.a]},{path:"reminders",loadChildren:()=>n.e(521).then(n.bind(n,521)).then(o=>o.RemindersModule),canActivate:[l.a]},{path:"**",redirectTo:"faq"}]},{path:"**",redirectTo:"dashboard"}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.Bz.forChild(M),c.ez,x.q]}),o})()}}]);