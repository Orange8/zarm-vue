webpackJsonp([6],{217:function(a,e,t){var n=t(1)(t(245),t(316),null,null,null);a.exports=n.exports},245:function(a,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var s=t(133),l=n(s),i=t(135),c=n(i),r=t(134),v=n(r);t(296),e.default={components:{Container:l.default,PageHeader:c.default,PageFooter:v.default},data:function(){return{activeName:"first",activeName2:"first",activeName3:"first",activeName4:"first",activeName5:"first",activeName6:"first",activeName7:"first",activeName8:"second",activeName9:"first",activeName0:"first",activeNameSwipe:"first"}},methods:{handleClick:function(a,e){console.log(a,e)},handleClick2:function(a,e){this.activeName7=this.activeName6}}}},283:function(a,e,t){e=a.exports=t(196)(!0),e.push([a.i,".tab-page .za-tab+.za-tab{margin-top:10px}.tab-page .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px;height:100px}","",{version:3,sources:["/Users/chrisHchen/git-project/zarm-vue/example/styles/pages/TabPage.scss","/Users/chrisHchen/git-project/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,0BAEI,eCHe,CDIhB,AAHH,mBAMI,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,wBAAuB,AAAvB,qBAAuB,AAAvB,uBAAuB,AACvB,aCVe,ADWf,YCXe,CDYhB",file:"TabPage.scss",sourcesContent:['@import "../core/func";\n\n.tab-page {\n  .za-tab + .za-tab {\n    margin-top: r(10);\n  }\n\n  .content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: r(10);\n    height: r(100);\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},296:function(a,e,t){var n=t(283);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t(197)("6bd29dda",n,!0)},316:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("Container",{staticClass:"tab-page"},[t("PageHeader",{attrs:{title:"标签页 Tab"}}),a._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",[t("za-panel-title",[a._v("基本")])],1),a._v(" "),t("za-panel-body",[t("za-tabs",{on:{change:a.handleClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}},[t("div",{staticClass:"content"},[a._v("用户管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}},[t("div",{staticClass:"content"},[a._v("配置管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}},[t("div",{staticClass:"content"},[a._v("角色管理")])])],1)],1)],1),a._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[a._v("可滑动")])],1),a._v(" "),t("za-panel-body",[t("za-tabs",{attrs:{canSwipe:""},on:{change:a.handleClick},model:{value:a.activeNameSwipe,callback:function(e){a.activeNameSwipe=e},expression:"activeNameSwipe"}},[t("za-tab-pane",{attrs:{label:"选项卡1",name:"first"}},[t("div",{staticClass:"content"},[a._v("试试左滑")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"选项卡2",name:"second"}},[t("div",{staticClass:"content"},[a._v("试试左右滑")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"选项卡3",name:"third"}},[t("div",{staticClass:"content"},[a._v("试试右滑")])])],1)],1)],1),a._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[a._v("多主题")])],1),a._v(" "),t("za-panel-body",[t("za-tabs",{attrs:{theme:"info"},on:{change:a.handleClick},model:{value:a.activeName2,callback:function(e){a.activeName2=e},expression:"activeName2"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}})],1),a._v(" "),t("za-tabs",{attrs:{theme:"success"},on:{change:a.handleClick},model:{value:a.activeName3,callback:function(e){a.activeName3=e},expression:"activeName3"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}})],1),a._v(" "),t("za-tabs",{attrs:{theme:"warning"},on:{change:a.handleClick},model:{value:a.activeName4,callback:function(e){a.activeName4=e},expression:"activeName4"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}})],1),a._v(" "),t("za-tabs",{attrs:{theme:"error"},on:{change:a.handleClick},model:{value:a.activeName5,callback:function(e){a.activeName5=e},expression:"activeName5"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}}),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}})],1)],1)],1),a._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[a._v("联动")])],1),a._v(" "),t("za-panel-body",[t("za-tabs",{on:{change:a.handleClick2},model:{value:a.activeName6,callback:function(e){a.activeName6=e},expression:"activeName6"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}},[t("div",{staticClass:"content"},[a._v("用户管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}},[t("div",{staticClass:"content"},[a._v("配置管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}},[t("div",{staticClass:"content"},[a._v("角色管理")])])],1),a._v(" "),t("za-tabs",{on:{change:a.handleClick},model:{value:a.activeName7,callback:function(e){a.activeName7=e},expression:"activeName7"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}},[t("div",{staticClass:"content"},[a._v("用户管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}},[t("div",{staticClass:"content"},[a._v("配置管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}},[t("div",{staticClass:"content"},[a._v("角色管理")])])],1)],1)],1),a._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[a._v("指定默认选项")])],1),a._v(" "),t("za-panel-body",[t("za-tabs",{on:{change:a.handleClick},model:{value:a.activeName8,callback:function(e){a.activeName8=e},expression:"activeName8"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}},[t("div",{staticClass:"content"},[a._v("用户管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}},[t("div",{staticClass:"content"},[a._v("配置管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}},[t("div",{staticClass:"content"},[a._v("角色管理")])])],1)],1)],1),a._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[a._v("指定线条宽度")])],1),a._v(" "),t("za-panel-body",[t("za-tabs",{attrs:{lineWidth:60},on:{change:a.handleClick},model:{value:a.activeName9,callback:function(e){a.activeName9=e},expression:"activeName9"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}},[t("div",{staticClass:"content"},[a._v("用户管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second"}},[t("div",{staticClass:"content"},[a._v("配置管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}},[t("div",{staticClass:"content"},[a._v("角色管理")])])],1)],1)],1),a._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[a._v("禁用指定选项")])],1),a._v(" "),t("za-panel-body",[t("za-tabs",{on:{change:a.handleClick},model:{value:a.activeName0,callback:function(e){a.activeName0=e},expression:"activeName0"}},[t("za-tab-pane",{attrs:{label:"用户管理",name:"first"}},[t("div",{staticClass:"content"},[a._v("用户管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"配置管理",name:"second",disabled:""}},[t("div",{staticClass:"content"},[a._v("配置管理")])]),a._v(" "),t("za-tab-pane",{attrs:{label:"角色管理",name:"third"}},[t("div",{staticClass:"content"},[a._v("角色管理")])])],1)],1)],1)],1)]),a._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.74072edd78c10f2e3bb6.js.map