/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.dataview.grouping=function(){this.loadgrouprecords=function(B,E,p,C,F,e,O,D,v){var J=B;var h=this;var N=new Array();for(var l=0;l<h.groups.length;l++){N[l]=h.generatekey()}var H=new Array();var b=0;var N=N;var y=new Array();var M=E;var d=E;var z=h.groups.length;this.loadedrecords=new Array();this.bounditems=new Array();this.loadedrecords=new Array();this.loadedrootgroups=new Array();this.loadedgroups=new Array();this.loadedgroupsByKey=new Array();this.sortedgroups=new Array();var L=this.sortdata!=null;var P=L?this.sortdata:this.records;if(this.pageable){var s=new Array();var A=0;if(!P[E]){a.each(P,function(i,q){s[E+i++]=this});P=s}}if(this.virtualmode){var s=new Array();var A=0;for(var M=0;M<p-E;M++){if(P[M]){s[E+A++]=P[M]}else{if(P[E+A]){s[E+A]=P[E+A];A++}}}M=0;P=s}for(var c=E;c<p;c++){var w={};if(!L){w=a.extend({},P[c])}else{w=a.extend({},P[c].value)}id=w[h.uniqueId];if(F>=D||id!=O[F][h.uniqueId]||(e&&e[id])){v[v.length]=F}var I=new Array();var u=0;for(var l=0;l<z;l++){var r=h.groups[l];var G=w[r];if(G==null){G=""}I[u++]={value:G,hash:N[l]}}if(I.length!=z){break}var j=null;var k="";var f=-1;for(var K=0;K<I.length;K++){f++;var n=I[K].value;var t=I[K].hash;k=k+"_"+t+"_"+n;if(y[k]!=undefined&&y[k]!=null){j=y[k];continue}if(j==null){j={group:n,subItems:new Array(),subGroups:new Array(),level:0};H[b++]=j;j.uniqueid=h.generatekey();h.loadedgroupsByKey[n]=j}else{var m={group:n,subItems:new Array(),subGroups:new Array(),parentItem:j,level:j.level+1};h.loadedgroupsByKey[j.uniqueid+"_"+n]=m;m.uniqueid=h.generatekey();j.subGroups[j.subGroups.length++]=m;j=m}y[k]=j}if(j!=null){if(undefined==w.uid){w.uid=this.getid(this.source.id,w,M)}if(!L){w.boundindex=M;this.recordsbyid["id"+w.uid]=P[c]}else{w.boundindex=P[c].index;this.recordsbyid["id"+w.uid]=P[c].value}this.bounditems[w.boundindex]=w;this.sortedgroups[M]=w;w.uniqueid=h.generatekey();w.parentItem=j;w.level=j.level+1;j.subItems[j.subItems.length++]=w}else{if(undefined==w.uid){w.uid=this.getid(this.source.id,w,M)}if(!L){w.boundindex=M;this.recordsbyid["id"+w.uid]=P[c]}else{w.boundindex=P[c].index;this.recordsbyid["id"+w.uid]=P[c].value}this.sortedgroups[M]=w;this.bounditems[w.boundindex]=w;w.uniqueid=h.generatekey()}F++;M++;d++}var g=function(q,Q,R){for(var i=0;i<Q.subItems.length;i++){Q.subItems[i].visibleindex=B+R;q.rows[R]=Q.subItems[i];q.loadedrecords[R]=Q.subItems[i];R++}return R};var o=function(q,V,W){var T=1;var S=q.grid.columns.records?q.grid.columns.records:q.grid.columns;if(q.aggregates==true){for(var R=0;R<S.length;R++){if(S[R].aggregates){T=Math.max(T,S[R].aggregates.length)}}}var Q=function(Y){if(q.aggregates==true){var X=function(ab){var Z=Y;var ad={};var ae=function(ag){for(var af=0;af<S.length;af++){if(S[af].aggregates){var am=q.grid.getcolumnaggregateddata(S[af].datafield,S[af].aggregates,true,ag);for(var aj=0;aj<S[af].aggregates.length;aj++){if(S[af].aggregates[ab]){var ak=S[af];var ai=S[af].aggregates[ab];var ah=ai;ah=q.grid._getaggregatename(ah);var al=ah+":"+am[ai];if(am[ai]){ad[ak.datafield]=al}else{ad[ak.datafield]=ah+":"+am[ah]}}}}}};if(Z!=null){ad.level=Z.level;ad.visibleindex=B+W;ad.uniqueid=q.generatekey();q.rows[W]=ad;q.loadedrecords[W++]=ad;ad.totalsrow=true;if(Y.subItems.length>0){Z=Y.subItems[Y.subItems.length-1];ad.parentItem=Z.parentItem;if(ad.parentItem.subItems){ad.parentItem.subItems[ad.parentItem.subItems.length]=ad}var aa=[];var ac=function(){for(var af=0;af<Y.subItems.length;af++){if(Y.subItems[af].totalsrow){continue}aa[aa.length]=Y.subItems[af]}};ac(Y);ae(aa)}else{if(Y.subGroups.length>0){Z=Y.subGroups[Y.subGroups.length-1];ad.level=Z.level;ad.parentItem=Y;Y.subGroups[Y.subGroups.length]=ad;var aa=[];var ac=function(ag){if(ag.totalsrow){return}for(var af=0;af<ag.subItems.length;af++){if(ag.subItems[af].totalsrow){continue}aa[aa.length]=ag.subItems[af]}for(var af=0;af<ag.subGroups.length;af++){ac(ag.subGroups[af])}};ac(Y);ae(aa)}}}};for(var i=0;i<T;i++){X(i)}}};for(subGroup in V.subGroups){var U=V.subGroups[subGroup];if(U.subGroups){q.loadedgroups[q.loadedgroups.length]=U;U.visibleindex=B+W;q.rows[W]=U;q.loadedrecords[W]=U;W++;if(U.subGroups.length>0){W=o(q,U,W)}else{if(U.subItems.length>0){W=g(q,U,W)}}}}if(V.subItems.length>0){W=g(q,V,W)}Q(V);return W};var x=H.length;this.loadedgroups=new Array();this.rows=new Array();var J=0;for(var M=0;M<x;M++){var r=H[M];this.loadedrootgroups[M]=r;this.loadedgroups[this.loadedgroups.length]=r;r.visibleindex=B+J;this.rows[J]=r;this.loadedrecords[J]=r;J++;J=o(this,r,J)}return J};this._updategroupsinpage=function(C,r,K,d,u,j,f){var p=new Array();var w=[];if(this.groupable&&this.groups.length>0){var B=0;var h=new Array();var g=new Array();for(var m=0;m<C.groups.length;m++){g[m]=C.generatekey()}var F=0;var o=new Array();var k=0;if(f>this.totalrecords){f=this.totalrecords}for(var v=j;v<f;v++){var H=a.extend({},C.sortedgroups[v]);id=H[C.uniqueId];if(!C.pagesize||(K>=C.pagesize*C.pagenum&&K<C.pagesize*(C.pagenum+1))){if(d>=u||id!=p[d][C.uniqueId]||(updated&&updated[id])){w[w.length]=d}var e=new Array();var y=0;for(var m=0;m<C.groups.length;m++){var n=C.groups[m];var D=H[n];if(null==D){D=""}e[y++]={value:D,hash:g[m]}}if(e.length!=C.groups.length){break}var z=null;var s="";var c=-1;for(var A=0;A<e.length;A++){c++;var G=e[A].value;var l=e[A].hash;s=s+"_"+l+"_"+G;if(h[s]!=undefined&&h[s]!=null){z=h[s];continue}if(z==null){z={group:G,subItems:new Array(),subGroups:new Array(),level:0};o[k++]=z;var E=C.loadedgroupsByKey[G];if(E!=undefined){z.visibleindex=E.visibleindex;z.uniqueid=E.uniqueid}}else{var t={group:G,subItems:new Array(),subGroups:new Array(),parentItem:z,level:z.level+1};var E=C.loadedgroupsByKey[z.uniqueid+"_"+G];t.visibleindex=E.visibleindex;t.uniqueid=E.uniqueid;z.subGroups[z.subGroups.length++]=t;z=t}h[s]=z}if(z!=null){H.parentItem=z;H.level=z.level+1;z.subItems[z.subItems.length++]=H}d++}F++;K++}var x=function(L,M,q){for(var i=0;i<M.subItems.length;i++){p[q]=a.extend({},M.subItems[i]);q++}return q};var I=function(M){var q=false;for(subGroup in M.subGroups){var L=M.subGroups[subGroup];if(L.subGroups){if(L.subGroups.length>0){var i=I(L);if(i){q=true;return true}}if(L.subItems.length>0){q=true;return true}}}if(M.subItems.length>0){q=true;return true}return q};var b=function(L,R,q){var P=1;var O=L.grid.columns.records?L.grid.columns.records:L.grid.columns;if(L.aggregates==true){for(var N=0;N<O.length;N++){if(O[N].aggregates){P=Math.max(P,O[N].aggregates.length)}}}var M=function(T){if(L.aggregates==true){var S=function(W){var U=T;var Y={};var Z=function(ab){for(var aa=0;aa<O.length;aa++){if(O[aa].aggregates){var ah=L.grid.getcolumnaggregateddata(O[aa].datafield,O[aa].aggregates,true,ab);for(var ae=0;ae<O[aa].aggregates.length;ae++){if(O[aa].aggregates[W]){var af=O[aa];var ad=O[aa].aggregates[W];var ac=ad;ac=L.grid._getaggregatename(ac);var ag=ac+":"+ah[ad];Y[af.datafield]=ag}}}}};if(U!=null){Y.level=U.level;Y.visibleindex=q;Y.uniqueid=L.generatekey();p[q]=Y;L.loadedrecords[q++]=Y;Y.totalsrow=true;if(T.subItems.length>0){U=T.subItems[T.subItems.length-1];Y.parentItem=U.parentItem;if(Y.parentItem.subItems){Y.parentItem.subItems[Y.parentItem.subItems.length]=Y}var V=[];var X=function(){for(var aa=0;aa<T.subItems.length;aa++){if(T.subItems[aa].totalsrow){continue}V[V.length]=T.subItems[aa]}};X(T);Z(V)}else{if(T.subGroups.length>0){U=T.subGroups[T.subGroups.length-1];Y.level=U.level;Y.parentItem=T;T.subGroups[T.subGroups.length]=Y;var V=[];var X=function(ab){if(ab.totalsrow){return}for(var aa=0;aa<ab.subItems.length;aa++){if(ab.subItems[aa].totalsrow){continue}V[V.length]=ab.subItems[aa]}for(var aa=0;aa<ab.subGroups.length;aa++){X(ab.subGroups[aa])}};X(T);Z(V)}}}};for(var i=0;i<P;i++){S(i)}}};for(subGroup in R.subGroups){var Q=R.subGroups[subGroup];if(Q.subGroups){if(I(Q)){p[q]=Q;q++;if(Q.subGroups.length>0){q=b(L,Q,q)}else{if(Q.subItems.length>0){q=x(L,Q,q)}}M(Q)}}}if(R.subItems.length>0){q=x(L,R,q)}M(R);return q};var J=0;for(var F=0;F<o.length;F++){var n=o[F];if(I(n)){p[B]=n;B++;B=b(this,n,B)}}}return p}};a.extend(a.jqx._jqxGrid.prototype,{_initgroupsheader:function(){this.groupsheader.css("visibility","hidden");if(this._groupsheader()){this.groupsheader.css("visibility","inherit");var e=this;var c=this.gridlocalization.groupsheaderstring;this.groupsheaderdiv=this.groupsheaderdiv||a('<div style="width: 100%; position: relative;"></div>');this.groupsheaderdiv.height(this.groupsheaderheight);this.groupsheaderdiv.css("top",0);this.groupsheader.append(this.groupsheaderdiv);this.groupheadersbounds=new Array();var d=this.groups.length;this.groupsheaderdiv.children().remove();this.groupsheaderdiv[0].innerHTML="";var b=new Array();if(d>0){a.each(this.groups,function(i){var n=this;var m=e._getColumnText(this);var l=m.label;var k=e._rendergroupcolumn(l,n);k.addClass(e.toThemeProperty("jqx-grid-group-column"));e.groupsheaderdiv.append(k);if(e.closeablegroups){var j=a(k.find(".jqx-icon-close"));if(e.isTouchDevice()&&e.touchmode!==true){e.addHandler(j,"touchstart",function(){e.removegroupat(i);return false})}else{e.addHandler(j,"click",function(){e.removegroupat(i);return false})}}if(e.sortable){e.addHandler(k,"click",function(){var o=e.getcolumn(n);if(o!=null){e._togglesort(o)}return false})}b[b.length]=k;e._handlegroupstocolumnsdragdrop(this,k);if(i<d-1){var g=k.height();var h=a('<div style="float: left; position: relative;"></div>');if(e.rtl){h.css("float","right")}h.width(e.groupindentwidth/3);h.height(1);h.css("top",g/2);h.addClass(e.toThemeProperty("jqx-grid-group-column-line"));e.groupsheaderdiv.append(h)}})}else{var f=a('<div style="position: relative;">'+c+"</div>");this.groupsheaderdiv.append(f);if(this.rtl){f.addClass(this.toThemeProperty("jqx-rtl"))}}this._groupheaders=b;this._updategroupheadersbounds()}},_updategroupheadersbounds:function(){var c=this;var b=this.groupsheaderdiv.children().outerHeight();var d=(this.groupsheader.height()-b)/2;this.groupsheaderdiv.css("top",d);if(!this.rtl){this.groupsheaderdiv.css("left",d);this.groupsheaderdiv.css("right","")}else{this.groupsheaderdiv.css("left","");this.groupsheaderdiv.css("right",d)}if(this.rtl){this._groupheaders.reverse()}a.each(this._groupheaders,function(f){var e=this.coord();c.groupheadersbounds[f]={left:e.left,top:e.top,width:this.outerWidth(),height:this.outerHeight(),index:f}})},addgroup:function(c){if(c){var b=this;if(b.groups!==b.dataview.groups){b.dataview.groups=b.groups}b.groups[b.groups.length]=c;b.refreshgroups();this._raiseEvent(12,{type:"Add",index:b.groups[b.groups.length],groups:b.groups})}},insertgroup:function(d,c){if(d!=undefined&&d!=null&&d>=0&&d<=this.groups.length){if(c){var b=this;if(b.groups!==b.dataview.groups){b.dataview.groups=b.groups}b.groups.splice(d,0,c.toString());b.refreshgroups();this._raiseEvent(12,{type:"Insert",index:d,groups:b.groups})}}},refreshgroups:function(){this._refreshdataview();this._render(true,true,true,false);this._postrender("group")},_insertaftergroup:function(d,c){var b=this._getGroupIndexByDataField(d);this.insertgroup(b+1,c)},_insertbeforegroup:function(d,c){var b=this._getGroupIndexByDataField(d);this.insertgroup(b,c)},removegroupat:function(c){if(c>=0&&c!=null&&c!=undefined){var b=this;if(b.groups!==b.dataview.groups){b.dataview.groups=b.groups}b.groups.splice(c,1);b.refreshgroups();if(b.virtualmode){b.updatebounddata()}this._raiseEvent(12,{type:"Remove",index:c,groups:b.groups});return true}return false},cleargroups:function(){var b=this;b.groups=[];b.dataview.groups=b.groups;b.refreshgroups();this._raiseEvent(12,{type:"Clear",index:-1,groups:b.groups});return true},removegroup:function(c){if(c==null){return false}var b=this.groups.indexOf(c.toString());return this.removegroupat(b)},getrootgroupscount:function(){var b=this.dataview.loadedrootgroups.length;return b},collapsegroup:function(c){if(c>=0&&c.toString().indexOf(".")===-1){return this._setrootgroupstate(c,false)}var b=c.toString().split(".");var f=null;if(!this.groupsVisibility){this.groupsVisibility=new Array()}for(var d=0;d<b.length;d++){var c=parseInt(b[d]);if(d==0){var f=this.dataview.loadedrootgroups[c];this.groupsVisibility[f.group]=null}else{var e=f.subGroups[c];if(e){f=e;if(d==b.length-1){this._setgroupstate(f,false,true);this.groupsVisibility[f.group]=null}}}}},expandgroup:function(c){if(c>=0&&c.toString().indexOf(".")===-1){return this._setrootgroupstate(c,true)}var b=c.toString().split(".");var f=null;for(var d=0;d<b.length;d++){var c=parseInt(b[d]);if(d==0){var f=this.dataview.loadedrootgroups[c];this._setrootgroupstate(c,true);if(!this.groupsVisibility){this.groupsVisibility=new Array()}this.groupsVisibility[f.group]=f}else{var e=f.subGroups[c];if(e){f=e;this._setgroupstate(f,true,true);if(!this.groupsVisibility){this.groupsVisibility=new Array()}this.groupsVisibility[f.group]=f}}}},collapseallgroups:function(b){this._setbatchgroupstate(false,b)},expandallgroups:function(b){this._setbatchgroupstate(true,b)},isgroupexpanded:function(c){var d=this.dataview.loadedrootgroups[c];if(d==null){return null}var b=this.expandedgroups[d.uniqueid].expanded;return b},getgroup:function(e){var j=this.dataview.loadedrootgroups[e];if(j==null){return null}var f=this.expandedgroups[j.uniqueid].expanded;var g=j.group;var b=j.level;var c=new Array();this._getsubgroups(c,j);var i=this;var d={group:g,level:b,expanded:f,subgroups:c};if(j.subItems){var h=new Array();a.each(j.subItems,function(){var k=this.boundindex;h[h.length]=i.getrowdata(k)});if(h.length>0){d.subrows=h}}return d},getrootgroups:function(){var d=this.dataview.loadedrootgroups.length;var c=new Array();for(var b=0;b<d;b++){c[b]=this.getgroup(b)}return c},_getsubgroups:function(c,j){var i=this;for(obj in j.subGroups){var g=j.subGroups[obj];var e=i.expandedgroups[g.uniqueid].expanded;var f=g.group;var b=g.level;c[c.length]={group:f,level:b,expanded:e};if(g.subItems){var h=new Array();a.each(g.subItems,function(){var k=this.boundindex;h[h.length]=i.getrowdata(k)});c[c.length-1].subrows=h}if(g.subGroups){var d=new Array();i._getsubgroups(d,g)}}return c},_setbatchgroupstate:function(b,e){var c=this;for(obj in this.dataview.loadedrootgroups){c._setrootgroupstate(obj,b,false,true)}if(e==false){c._requiresupdate=true;c._renderrows(c.virtualsizeinfo);return true}var d=this.vScrollBar[0].style.visibility;this.rendergridcontent(true,false);if(d!=this.vScrollBar[0].style.visibility||this._hiddencolumns){this._updatecolumnwidths();this._updatecellwidths();this._renderrows(this.virtualsizeinfo)}return true},_setrootgroupstate:function(d,b,f,c){if(d==undefined||d==null||d<0){return false}if(!this.groupable||this.groups.length==0){return false}var j=f!=undefined?f:true;if(d>=0&&d<this.dataview.loadedrootgroups.length){var h=this.dataview.loadedrootgroups[d];if(this.pageable){var g=new Array();for(var e=0;e<this.dataview.rows.length;e++){if(this.dataview.rows[e].group!=null&&this.dataview.rows[e].level===0){g.push(this.dataview.rows[e])}}h=g[d];if(!h){return}}return this._setgroupstate(h,b,j,c)}return false},_togglegroupstate:function(e,f){if(e==null||e==undefined){return false}var c=this.vScrollInstance.value;var d=this.expandedgroups[e.uniqueid];if(d==undefined){d=false}else{d=d.expanded}d=!d;if(!this.groupsVisibility){this.groupsVisibility=new Array()}if(d){this.groupsVisibility[e.group]=e}else{this.groupsVisibility[e.group]=null}var b=this._setgroupstate(e,d,f);this._newmax=null;if(c!==0&&this.vScrollBar.css("visibility")!=="hidden"){if(c<=this.vScrollInstance.max){this.vScrollInstance.setPosition(c)}else{this.vScrollInstance.setPosition(this.vScrollInstance.max)}}return b},_setgroupstate:function(f,b,h,c){if(f==null||f==undefined){return false}var e=false;if(this.editable&&this.editcell){this.endcelledit(this.editcell.row,this.editcell.column,false,false)}var d=this.expandedgroups[f.uniqueid];if(d==undefined){d={expanded:false};e=true}if(d.expanded!=b){e=true}if(e){this.expandedgroups[f.uniqueid]={expanded:b,group:f};this._setsubgroupsvisibility(this,f,!b,c);if(h){var g=this.vScrollBar[0].style.visibility;this.rendergridcontent(true,false);if(g!=this.vScrollBar[0].style.visibility||this._hiddencolumns){this._updatecolumnwidths();this._updatecellwidths();this._renderrows(this.virtualsizeinfo)}}if(undefined==this.suspendgroupevents||this.suspendgroupevents==false){if(b){this._raiseEvent(4,{group:f.group,parentgroup:f.parentItem?f.parentItem.group:null,level:f.level,visibleindex:f.visibleindex})}else{this._raiseEvent(5,{group:f.group,parentgroup:f.parentItem?f.parentItem.group:null,level:f.level,visibleindex:f.visibleindex})}}return true}return false},_setgroupitemsvisibility:function(c,e,d){for(var b=0;b<e.subItems.length;b++){c._setrowvisibility(e.subItems[b].visibleindex,d,false)}},_setsubgroupsvisibility:function(c,g,f,d){if(g.parentItem!=null){if(this.hiddens[g.parentItem.visibleindex]){return}}else{if(g.parentItem==null){if(this.hiddens[g.visibleindex]){return}}}for(subGroup in g.subGroups){var e=g.subGroups[subGroup];if(!f){c._setrowvisibility(e.visibleindex,f,false)}var b=!f;if(!d){if(c.expandedgroups[e.uniqueid]==undefined){b=false}else{b=c.expandedgroups[e.uniqueid].expanded}}else{this.expandedgroups[e.uniqueid]={expanded:b,group:e}}if(e.subGroups){if(e.subGroups.length>0){c._setsubgroupsvisibility(c,e,!b||f,d)}else{if(e.subItems.length>0){c._setgroupitemsvisibility(c,e,!b||f)}}}if(f){c._setrowvisibility(e.visibleindex,f,false)}}if(g.subItems&&g.subItems.length>0){c._setgroupitemsvisibility(c,g,f)}},_handlecolumnsdragdrop:function(){var d=this;var g=-1;var c=false;if(!d.groupable){return}var f="mousemove.grouping"+this.element.id;var e="mousedown.grouping"+this.element.id;var h="mouseup.grouping"+this.element.id;var b=false;if(this.isTouchDevice()&&this.touchmode!==true){b=true;f=a.jqx.mobile.getTouchEventName("touchmove")+".grouping"+this.element.id;e=a.jqx.mobile.getTouchEventName("touchstart")+".grouping"+this.element.id;h=a.jqx.mobile.getTouchEventName("touchend")+".grouping"+this.element.id}this.removeHandler(a(document),f);this.addHandler(a(document),f,function(j){if(!d.showgroupsheader){return true}if(d.dragcolumn!=null){var l=parseInt(j.pageX);var u=parseInt(j.pageY);if(b){var r=d.getTouches(j);var p=r[0];l=parseInt(p.pageX);u=parseInt(p.pageY)}var n=d.host.coord();var v=parseInt(n.left);var w=parseInt(n.top);if(d.dragmousedownoffset==undefined||d.dragmousedownoffset==null){d.dragmousedownoffset={left:0,top:0}}var t=parseInt(l)-parseInt(d.dragmousedownoffset.left);var i=parseInt(u)-parseInt(d.dragmousedownoffset.top);d.dragcolumn.css({left:t+"px",top:i+"px"});c=false;if(l>=v&&l<=v+d.host.width()){if(u>=w&&u<=w+d.host.height()){c=true}}g=-1;if(c){d.dragcolumnicon.removeClass(d.toThemeProperty("jqx-grid-dragcancel-icon"));d.dragcolumnicon.addClass(d.toThemeProperty("jqx-grid-drag-icon"));var s=d.groupsheader.coord();var m=s.top+d.groupsheader.height();var q=a.data(d.dragcolumn[0],"datarecord");if(q){var k=d.groups.indexOf(q.toString())}else{var k=-1}var o=(k==-1)||(d.groups.length>1&&k>-1);if(d.dropline!=null){if(u>=s.top&&u<=m){if(o){g=d._handlegroupdroplines(l)}}else{d.dropline.fadeOut("slow")}}}else{if(d.dropline!=null){d.dropline.fadeOut("slow")}d.dragcolumnicon.removeClass(d.toThemeProperty("jqx-grid-drag-icon"));d.dragcolumnicon.addClass(d.toThemeProperty("jqx-grid-dragcancel-icon"))}if(b){j.preventDefault();j.stopPropagation();return false}}});this.removeHandler(a(document),h);this.addHandler(a(document),h,function(i){if(!d.showgroupsheader){return true}d.__drag=false;a(document.body).removeClass("jqx-disableselect");var m=parseInt(i.pageX);var s=parseInt(i.pageY);if(b){var p=d.getTouches(i);var o=p[0];m=parseInt(o.pageX);s=parseInt(o.pageY)}var n=d.host.coord();var t=parseInt(n.left);var u=parseInt(n.top);var k=d.groupsheader.height();if(d.showtoolbar){u+=d.toolbarheight}d.dragstarted=false;d.dragmousedown=null;if(d.dragcolumn!=null){var l=a.data(d.dragcolumn[0],"datarecord");d.dragcolumn.remove();d.dragcolumn=null;if(l!=null){if(!d.getcolumn(l).groupable){if(d.dropline!=null){d.dropline.remove();d.dropline=null}return}if(c){if(g!=-1){var q=g.index;var r=d.groups[q];var j=d._getGroupIndexByDataField(l);if(j!=q){if(j!=undefined&&j>=0){d.groups.splice(j,1)}if(g.position=="before"){if(!d.rtl){d._insertbeforegroup(r,l)}else{d._insertaftergroup(r,l)}}else{if(!d.rtl){d._insertaftergroup(r,l)}else{d._insertbeforegroup(r,l)}}}}else{if(d.groups.length==0){if(s>u&&s<=u+k){d.addgroup(l)}}else{if(s>u+k){var j=d._getGroupIndexByDataField(l);d.removegroupat(j)}}}}if(d.dropline!=null){d.dropline.remove();d.dropline=null}}}})},_getGroupIndexByDataField:function(b){for(var c=0;c<this.groups.length;c++){if(this.groups[c]==b){return c}}return -1},_isColumnInGroups:function(c){for(var b=0;b<this.groups.length;b++){if(this.groups[b]==c){return true}}return false},_handlegroupdroplines:function(d){var b=this;var c=-1;a.each(b.groupheadersbounds,function(e){if(d<=this.left+this.width/2){var f=this.left-3;if(e>0){f=this.left-1-b.groupindentwidth/6}b.dropline.css("left",f);b.dropline.css("top",this.top);b.dropline.height(this.height);b.dropline.fadeIn("slow");c={index:e,position:"before"};if(b.rtl){c={index:b.groupheadersbounds.length-1-e,position:"before"}}return false}else{if(d>=this.left+this.width/2){b.dropline.css("left",1+this.left+this.width);b.dropline.css("top",this.top);b.dropline.height(this.height);b.dropline.fadeIn("slow");c={index:e,position:"after"};if(b.rtl){c={index:b.groupheadersbounds.length-1-e,position:"after"}}}}});return c},_handlegroupstocolumnsdragdrop:function(c,e){this.dragmousedown=null;this.dragmousedownoffset=null;this.dragstarted=false;this.dragcolumn=null;var f=this;var d;var h="mousedown";var g="mousemove";var b=false;if(this.isTouchDevice()&&this.touchmode!==true){b=true;h=a.jqx.mobile.getTouchEventName("touchstart");g=a.jqx.mobile.getTouchEventName("touchmove")}this.addHandler(e,"dragstart",function(i){return false});this.addHandler(e,h,function(i){if(!f.showgroupsheader){return true}var l=i.pageX;var k=i.pageY;f.__drag=true;f.dragmousedown={left:l,top:k};if(b){var j=f.getTouches(i);var n=j[0];l=n.pageX;k=n.pageY;f.dragmousedown={left:l,top:k};if(i.preventDefault){i.preventDefault()}}var m=a(i.target).coord();f.dragmousedownoffset={left:parseInt(l)-parseInt(m.left),top:parseInt(k-m.top)}});this.addHandler(e,g,function(i){if(!f.showgroupsheader){return true}if(f.dragmousedown){d={left:i.pageX,top:i.pageY};if(b){var k=f.getTouches(i);var m=k[0];d={left:m.pageX,top:m.pageY}}if(!f.dragstarted&&f.dragcolumn==null){var j=Math.abs(d.left-f.dragmousedown.left);var l=Math.abs(d.top-f.dragmousedown.top);if(j>3||l>3){f._createdragcolumn(e,d,true);a(document.body).addClass("jqx-disableselect");a.data(f.dragcolumn[0],"datarecord",c);if(i.preventDefault){i.preventDefault()}}}}})},_createdragcolumn:function(c,e,g){var h=this;var f=e;h.dragcolumn=a("<div></div>");var j=c.clone();h.dragcolumn.css("z-index",999999);j.css("border-width","1px");j.css("opacity","0.4");var i=a(j.find("."+h.toThemeProperty("jqx-grid-column-menubutton")));if(i.length>0){i.css("display","none")}var b=a(j.find(".jqx-icon-close"));if(b.length>0){b.css("display","none")}h.dragcolumnicon=a('<div style="z-index: 9999; position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -7px;"></div>');h.dragcolumnicon.addClass(h.toThemeProperty("jqx-grid-drag-icon"));h.dragcolumn.css("float","left");h.dragcolumn.css("position","absolute");var d=h.host.coord();j.width(c.width()+16);h.dragcolumn.append(j);h.dragcolumn.height(c.height());h.dragcolumn.width(j.width());h.dragcolumn.append(h.dragcolumnicon);a(document.body).append(h.dragcolumn);j.css("margin-left",0);j.css("left",0);j.css("top",0);h.dragcolumn.css("left",f.left+h.dragmousedown.left);h.dragcolumn.css("top",f.top+h.dragmousedown.top);if(g!=undefined&&g){h.dropline=a('<div style="display: none; position: absolute;"></div>');h.dropline.width(2);h.dropline.addClass(h.toThemeProperty("jqx-grid-group-drag-line"));a(document.body).append(h.dropline)}},iscolumngroupable:function(b){return this._getcolumnproperty(b,"groupable")},_handlecolumnstogroupsdragdrop:function(c,f){this.dragmousedown=null;this.dragmousedownoffset=null;this.dragstarted=false;this.dragcolumn=null;var g=this;var e;var b=false;if(this.isTouchDevice()&&this.touchmode!==true){b=true}var d="mousedown.drag";var e="mousemove.drag";if(b){d=a.jqx.mobile.getTouchEventName("touchstart")+".drag";e=a.jqx.mobile.getTouchEventName("touchmove")+".drag"}else{this.addHandler(f,"dragstart",function(h){return false})}this.addHandler(f,d,function(j){if(!g.showgroupsheader){return true}g.__drag=true;if(g._isColumnInGroups(c.displayfield)){if(f.css("cursor")!="col-resize"){return true}else{return true}}if(false==c.groupable){return true}var i=j.pageX;var h=j.pageY;if(b){var k=g.getTouches(j);var m=k[0];i=m.pageX;h=m.pageY}g.dragmousedown={left:i,top:h};if(b){if(j.preventDefault){j.preventDefault()}}var l=a(j.target).coord();g.dragmousedownoffset={left:parseInt(i)-parseInt(l.left),top:parseInt(h-l.top)}});this.addHandler(f,e,function(j){if(!g.showgroupsheader){return true}if(g._isColumnInGroups(c.displayfield)){if(f.css("cursor")!="col-resize"){return true}else{return true}}if(g.dragmousedown){var i=j.pageX;var h=j.pageY;if(b){var l=g.getTouches(j);var n=l[0];i=n.pageX;h=n.pageY}e={left:i,top:h};if(!g.dragstarted&&g.dragcolumn==null){var k=Math.abs(e.left-g.dragmousedown.left);var m=Math.abs(e.top-g.dragmousedown.top);if(k>3||m>3){g._createdragcolumn(f,e,true);a.data(g.dragcolumn[0],"datarecord",c.displayfield);if(j.preventDefault){j.preventDefault()}}}}})},_rendergroupcolumn:function(g,h){var e=a('<div style="float: left; position: relative;"></div>');if(this.rtl){e.css("float","right")}if(this.groupcolumnrenderer!=null){e[0].innerHTML=this.groupcolumnrenderer(g);e.addClass(this.toThemeProperty("jqx-grid-group-column"));e.addClass(this.toThemeProperty("jqx-fill-state-normal"))}if(this.closeablegroups){if(e[0].innerHTML==""){e[0].innerHTML='<a style="float: left;" href="#">'+g+"</a>"}if(this.rtl){e[0].innerHTML='<a style="float: right;" href="#">'+g+"</a>"}var d=!this.rtl?"right":"left";var c='<div style="float: '+d+'; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>';if(a.jqx.browser.msie&&a.jqx.browser.version<8){c='<div style="float: left; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>'}if(this.rtl){var c='<div style="float: '+d+'; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>';if(a.jqx.browser.msie&&a.jqx.browser.version<8){c='<div style="float: left; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>'}}e[0].innerHTML+=c}else{if(e[0].innerHTML==""){e[0].innerHTML='<a href="#">'+g+"</a>"}}if(this.sortable){var f=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>');var b=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.closeablegroups){var f=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -32px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>');var b=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -32px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>')}if(this.rtl){var f=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 0px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>');var b=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 0px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.closeablegroups){var f=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>');var b=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>')}}f.css("display","none");b.css("display","none");if(a.jqx.browser.msie&&a.jqx.browser.version<8){f.css("float","left");b.css("float","left")}e.append(f);e.append(b);a.data(document.body,"groupsortelements"+h,{sortasc:f,sortdesc:b})}e.addClass(this.toThemeProperty("jqx-fill-state-normal"));e.addClass(this.toThemeProperty("jqx-grid-group-column"));return e},_rendergroup:function(p,x,b,v,k,B,u){var H=x;var c=x.cells[b.level];if(this.rtl){c=x.cells[x.cells.length-1-b.level]}var F=this._findgroupstate(b.uniqueid);if(b.bounddata.subGroups.length>0||b.bounddata.subItems.length>0){var i=this.rtl?"-rtl":"";var C=this.toThemeProperty("jqx-icon-arrow-right");if(i){C=this.toThemeProperty("jqx-icon-arrow-left")}if(F){c.className+=" "+this.toThemeProperty("jqx-grid-group-expand"+i)+" "+this.toThemeProperty("jqx-icon-arrow-down")}else{c.className+=" "+this.toThemeProperty("jqx-grid-group-collapse"+i)+" "+C}}var t=this._getColumnText(this.groups[b.level]).label;var d=this.groupindentwidth;var r=this.rowdetails&&this.showrowdetailscolumn?(1+p)*d:(p)*d;var y=u-r;var g=b.level+1;if(this.rtl){g=0}var n=H.cells[g];var A=2;while(n!=undefined&&n.style.display=="none"&&A<H.cells.length-1){n=H.cells[g+A-1];A++}var f=a(n);if(!n){return}n.style.width=parseInt(y)+"px";if(n.className.indexOf("jqx-grid-cell-filter")!=-1){f.removeClass(this.toThemeProperty("jqx-grid-cell-filter"))}if(n.className.indexOf("jqx-grid-cell-sort")!=-1){f.removeClass(this.toThemeProperty("jqx-grid-cell-sort"))}if(n.className.indexOf("jqx-grid-cell-pinned")!=-1){f.removeClass(this.toThemeProperty("jqx-grid-cell-pinned"))}if(this.groupsrenderer!=null){var h={group:b.group,level:b.level,parent:b.bounddata.parentItem,subGroups:b.bounddata.subGroups,subItems:b.bounddata.subItems,groupcolumn:this._getColumnText(this.groups[b.level]).column};var q=this.groupsrenderer(t+": "+b.group,b.group,F,h);if(q){n.innerHTML=q}else{var l=b.bounddata.subItems.length>0?b.bounddata.subItems.length:b.bounddata.subGroups.length;if(this.showgroupaggregates){var I=b.bounddata.subItems.length>0?b.bounddata.subItems:b.bounddata.subGroups;l=0;for(var G=0;G<I.length;G++){if(I[G].totalsrow){continue}l++}}n.innerHTML='<div class="'+this.toThemeProperty("jqx-grid-groups-row")+'" style="position: absolute;"><span>'+t+': </span><span class="'+this.toThemeProperty("jqx-grid-groups-row-details")+'">'+b.group+" ("+l+")</span></div>"}}else{var e=this._getcolumnbydatafield(this.groups[b.level]);var z=b.group;if(e!=null){if(e.cellsformat){if(a.jqx.dataFormat){if(a.jqx.dataFormat.isDate(z)){z=a.jqx.dataFormat.formatdate(z,e.cellsformat,this.gridlocalization)}else{if(a.jqx.dataFormat.isNumber(z)){z=a.jqx.dataFormat.formatnumber(z,e.cellsformat,this.gridlocalization)}}}}var l=b.bounddata.subItems.length>0?b.bounddata.subItems.length:b.bounddata.subGroups.length;if(this.showgroupaggregates){var I=b.bounddata.subItems.length>0?b.bounddata.subItems:b.bounddata.subGroups;l=0;for(var G=0;G<I.length;G++){if(I[G].totalsrow){continue}l++}}n.innerHTML='<div class="'+this.toThemeProperty("jqx-grid-groups-row")+'" style="position: absolute;"><span>'+t+': </span><span class="'+this.toThemeProperty("jqx-grid-groups-row-details")+'">'+z+" ("+l+")</span></div>"}else{throw new Error("jqxGrid: Unable to find '"+this.groups[b.level]+"' group in the Grid's columns collection.")}}if(this.rtl){if(!e){e=this._getcolumnbydatafield(this.groups[b.level])}var s=this.hScrollBar.css("visibility")=="hidden"?0:this.hScrollInstance.max-this.hScrollInstance.value;var D=this.vScrollBar.css("visibility")=="hidden"?0:this.scrollbarsize+6;var r=this.rowdetails&&this.showrowdetailscolumn?(2+b.level)*d:(1+b.level)*d;n.style.width=u+parseInt(s)-r-D+"px";f.addClass(this.toThemeProperty("jqx-rtl"));var w=a(x.cells[x.cells.length-1]).css("z-index");f.css("z-index",w);var E=f.find("div");var y=E.width();E.css("left","100%");var o=this.columns.records[x.cells.length-2-b.level]!=null?this.columns.records[x.cells.length-2-b.level].pinned:false;if(this.table.width()<u){u=this.table.width();if(this.vScrollBar.css("visibility")!="hidden"){u+=this.vScrollBar.outerWidth()}}if(e.pinned||o){if(this.rowdetails&&this.showrowdetailscolumn){u+=30}E.css("margin-left",-y);n.style.width=u+s-r-D+"px"}else{var s=this.hScrollBar.css("visibility")=="hidden"?0:this.hScrollInstance.max;n.style.width=u+s-r-D+"px";var y=E.width();E.css("margin-left",-y)}}}})})(jqxBaseFramework);

