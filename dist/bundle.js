(()=>{"use strict";const t=new class{window;constructor(){}openContent(t,e=!1){return e||this.window?.close(),this.window=window.open(null,"_blank"),this.window.document.write(t),this.window}open({title:t="Error",icon:e="",frame:o="",disableClose:i=!1}){return this.openContent(`<html><head><title>${t}</title><link rel="icon" href="${e}"></head><body style="margin:0;"><iframe src="${o}" width="100%" height="100%" style="border:none;" /></body></html>`,i)}close(){return this.window?.close(),this.window}},e=new class{title;icon;constructor(t=document.title,e=this.getIcon()){this.title=t,this.icon=e}getIcon(){let t=[...document.querySelectorAll("link")].filter((t=>"icon"===t.rel||"shortcut icon"===t.rel));return t.length?t.length>1?t.map((t=>t.href)):t[0].href:"/favicon.ico"}getTitle(){return this.title!==document.title&&(this.title=document.title),this.title}setTitle(t){if(this.getTitle()!==t)return document.title=t,this.getTitle()}setIcon(t,e="annoicon",o="icon"){[...document.querySelectorAll("link")].filter((t=>"icon"===t.rel||"shortcut icon"===t.rel)).forEach((t=>t.remove()));const i=document.createElement("link");return i.rel=o,i.id=e,i.href=t,document.head.appendChild(i),document.querySelector("#"+e)}presets={"google classroom":{title:"Classes",icon:"https://annotate.lol/assets/logos/classroom.png"},google:{title:"Google",icon:"https://annotate.lol/assets/logos/google.png"},"google docs":{title:"Google Docs",icon:"https://annotate.lol/assets/logos/docs.ico"},"google drive":{title:"Google Drive",icon:"https://annotate.lol/assets/logos/drive.png"}};usePreset(t){if("string"==typeof t){if(!this.presets[t])return!1;t=this.presets[t]}return this.setIcon(t.icon),this.setTitle(t.title),{title:this.getTitle(),icon:this.getIcon()}}set({title:t,icon:e}){return this.setTitle(t),this.setIcon(e),{title:this.getTitle(),icon:this.getIcon()}}},o=new class{key;link;constructor(t="`",e="https://google.com"){this.key=t,this.link=e,document.body.addEventListener("keydown",(t=>{if(t.key.toLowerCase()===this.getKey().toLowerCase()){const t=/^(http(s)?:\/\/)?([\w-]+\.)+[\w]{2,}(\/.*)?$/.test(this.getLink())?this.getLink().startsWith("http://")||this.getLink().startsWith("https://")?this.getLink():"https://"+this.getLink():"https://google.com/search?q="+encodeURIComponent(this.getLink());top.location.href=t}}))}getKey(){return this.key}getLink(){return this.link}setKey(t){return this.key=t,this.key}setLink(t){return this.link=t,this.link}get(){return{key:this.getKey(),link:this.getLink()}}set({key:t,link:e}){return this.setKey(t),this.setLink(e),{key:this.getKey(),link:this.getLink()}}force(){const t=/^(http(s)?:\/\/)?([\w-]+\.)+[\w]{2,}(\/.*)?$/.test(this.getLink())?this.getLink().startsWith("http://")||this.getLink().startsWith("https://")?this.getLink():"https://"+this.getLink():"https://google.com/search?q="+encodeURIComponent(this.getLink());top.location.href=t}},i=new class{storage={};constructor(){Object.entries(localStorage).forEach((([t,e])=>this.storage[t]=e)),window.addEventListener("beforeunload",(()=>this.refresh()))}refresh(){return Object.keys(localStorage).forEach((t=>delete localStorage[t])),Object.entries(this.storage).forEach((([t,e])=>localStorage.setItem(t,e))),this.storage}get(t){return this.storage[t]}set(t,e){return this.storage[t]=e,this.refresh()}remove(t){return delete this.storage[t],this.refresh()}clear(){return this.storage={},this.refresh()}all(){return this.storage}};(()=>{let t=document.createElement("iframe");t.src="about:blank",t.style="visibility:none;width:1px;height:1px;z-index:-99999999;",document.body.appendChild(t),t.contentWindow.console.log("\n\n\t\t%cAnnotate API has loaded!%c\n\t\t\tVersion: 1.0.0\n\t\t\tMore Information: https://aapi.annotate.lol\n\n\n","font-size:20px;color:red;font-family:'Monaco';",""),t.remove()})(),window.aapi={aboutblank:t,cloaker:e,panic:o,storage:i}})();