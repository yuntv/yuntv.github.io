(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0bcdca"],{"2a16":function(t,a,s){"use strict";s.r(a);var e=s("1c03"),i=(s("9896"),s("c34a"),s("7736")),l=s("4481"),o={name:"MusicPlay",data:function(){return{decode:Object(l.a)(this.$route.params.id).split("@")}},created:function(){this.$store.dispatch(this.decode[0]+"_play",this.decode[1])},computed:Object(e.a)({},Object(i.c)(["Play"]))},c=s("4ac2"),r=Object(c.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("List",{attrs:{"item-layout":"vertical",border:"",size:"large"}},[a("template",{slot:"header"},[a("img",{staticStyle:{height:"200px",width:"100%"},attrs:{src:this.$site.Nopic}})]),a("ListItem",[a("audio",{staticClass:"download-box js-dialog-show ",attrs:{src:this.Play&&this.Play.url,controls:"",autoplay:""}})]),a("template",{slot:"footer"},[a("div",{staticClass:"download-box js-dialog-show "},[a("i"),a("a",{attrs:{href:this.Play&&this.Play.url,target:"_blank"}},[this._v("点击下载")])])])],2)}),[],!1,null,null,null);a.default=r.exports}}]);