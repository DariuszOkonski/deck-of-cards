(this["webpackJsonp010-deck-of-cards"]=this["webpackJsonp010-deck-of-cards"]||[]).push([[0],{21:function(e,t,a){e.exports=a(46)},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),i=(a(26),a(27),a(20)),o=a(2),u=a.n(o),d=a(8),l=a(3),m=a(4),f=a(5),p=a(7),h=a(6),k=a(9),v=a.n(k),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var r=90*Math.random()-45,c=40*Math.random()-20,s=40*Math.random()-20;return n._transform="translate(".concat(c,"px,").concat(s,"px) rotate(").concat(r,"deg)"),n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("img",{className:"Card",style:{transform:this._transform},src:this.props.image,alt:this.props.name})}}]),a}(n.Component),g="https://deckofcardsapi.com/api/deck",w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={deck:null,drawn:[]},n.getCard=n.getCard.bind(Object(f.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(g,"/new/shuffle/"));case 2:t=e.sent,this.setState({deck:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCard",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.deck.deck_id,e.prev=1,a="".concat(g,"/").concat(t,"/draw/"),e.next=5,v.a.get(a);case 5:if((n=e.sent).data.success){e.next=8;break}throw new Error("No cards remaining");case 8:r=n.data.cards[0],this.setState((function(e){return{drawn:[].concat(Object(i.a)(e.drawn),[{id:r.code,image:r.image,name:"".concat(r.value," of ").concat(r.suit)}])}})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.drawn.map((function(e){return r.a.createElement(b,{key:e.id,image:e.image,name:e.name})}));return r.a.createElement("div",null,r.a.createElement("h1",{className:"Deck-title"},"Card Dealer"),r.a.createElement("h2",{className:"Deck-title subtitle"},"A little demo made with React"),r.a.createElement("button",{className:"Deck-btn",onClick:this.getCard},"Get Card!"),r.a.createElement("div",{className:"Deck-cardarea"},e))}}]),a}(n.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f599f2ba.chunk.js.map