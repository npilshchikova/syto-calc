(window["webpackJsonpsyto-calc"]=window["webpackJsonpsyto-calc"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(10);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(15),n(1)),s=n(2),i=n(5),u=n(3),m=n(4),d=(n(16),n(17),n(6)),p=(n(18),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={color:"smpl"},n.updateColor=n.updateColor.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateColor",value:function(){"smpl"===this.state.color?this.setState({color:"std"}):this.setState({color:"smpl"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"plate-cell card",onClick:this.updateColor},r.a.createElement("p",{className:"card-title"},this.props.sampleName," - ",this.props.cellId," - ",this.state.color),r.a.createElement("p",{className:"card-text"},this.props.fluorescence))}}]),t}(a.Component)),f=Array.from({length:12},(function(e,t){return String.fromCharCode("A".charCodeAt(0)+t)})),h=Array.from(Array(8).keys()),b=h.reduce((function(e,t){return e.concat(f.map((function(e){return e+(t+1)})))}),[]),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderCells",value:function(){return b.map((function(e){return r.a.createElement(p,{key:e,cellId:e})}))}},{key:"renderLetterIds",value:function(){return f.map((function(e){return r.a.createElement("div",{key:e},e)}))}},{key:"renderNumberIds",value:function(){return h.map((function(e){return r.a.createElement("div",{key:e},e+1)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"plate"},r.a.createElement("h5",{className:"plate-header"},"Plate: ",this.props.name),r.a.createElement("div",{className:"up-ids"},this.renderLetterIds()),r.a.createElement("div",{className:"left-ids"},this.renderNumberIds()),r.a.createElement("div",{className:"plate-body"},this.renderCells()))}}]),t}(a.Component),y=(n(19),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"file",name:"file"}))}}]),t}(a.Component)),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("p",{className:"h5"},"SYTO13 calc"),r.a.createElement(y,null)),r.a.createElement("div",{className:"App-body"},r.a.createElement(v,{name:"test"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.799caf34.chunk.js.map