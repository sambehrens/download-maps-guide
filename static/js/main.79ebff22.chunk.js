(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/1-app-store.ebaf363d.PNG"},function(e,t,n){e.exports=n.p+"static/media/2-landing.6d46963e.PNG"},function(e,t,n){e.exports=n.p+"static/media/3-search.32e19871.PNG"},function(e,t,n){e.exports=n.p+"static/media/4-search-result.fcfc498f.PNG"},function(e,t,n){e.exports=n.p+"static/media/5-result-details.f62e83f3.PNG"},function(e,t,n){e.exports=n.p+"static/media/6-menu.b7b02575.PNG"},function(e,t,n){e.exports=n.p+"static/media/7-select-area.e2c4fc56.PNG"},function(e,t,n){e.exports=n.p+"static/media/8-adjust.fc782a43.PNG"},function(e,t,n){e.exports=n.p+"static/media/9-finish.fac09d8f.PNG"},,function(e,t,n){e.exports=n(28)},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),s=n.n(o),r=(n(26),n(1)),c=n(2),l=n(4),d=n(3),p=n(5),u=n(6),m=n.n(u),h=n(20),f=n(10),g=n.n(f),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"getContent",value:function(){return this.props.content||this.props.children}},{key:"getWidth",value:function(){if(this.props.width)return{width:this.props.width,paddingLeft:"unset",paddingRight:"unset"}}},{key:"render",value:function(){var e=this.props,t=(e.content,e.kind),n=e.className,a=(e.width,Object(h.a)(e,["content","kind","className","width"]));return i.a.createElement("button",Object.assign({className:g()("button",t,n),style:this.getWidth()},a),this.getContent())}}]),t}(a.Component);v.defaultProps={size:"medium",kind:"primary",type:"button"};var w=v,k=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).onClick=function(e){var t=n.props,a=t.onClick,i=t.onSlide,o=document.getElementById(n.props.id).getBoundingClientRect(),s=window.pageXOffset||document.documentElement.scrollLeft;(n.offset=m.a.round(o.left+s),n.offsetWidth=e.target.offsetWidth,a)&&a(e,(e.clientX-n.offset)/n.offsetWidth);i&&(document.addEventListener("mousemove",n.onSlide),document.addEventListener("mouseup",n.removeEventListeners))},n.onSlide=function(e){var t=(e.clientX-n.offset)/n.offsetWidth;n.props.onSlide(e,t)},n.removeEventListeners=function(){document.removeEventListener("mousemove",n.onSlide),document.removeEventListener("mouseup",n.removeEventListeners)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"getContent",value:function(){return this.props.content||this.props.children}},{key:"render",value:function(){return i.a.createElement("div",{className:"progress-wrapper",id:this.props.id,onMouseDown:this.onClick},i.a.createElement("div",{className:"progress",id:"progress",style:{width:"".concat(m.a.round(100*this.props.progress),"%")}}))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleKeyDown=function(e){var t=e.keyCode;39!==t&&40!==t||n.handleNextClick(),37!==t&&38!==t||n.handleBackClick()},n.handleSliderClick=function(e,t){t<0?t=0:t>=1&&(t=.99),n.setState({currentStepIndex:m.a.floor(t*n.state.totalSteps)})},n.handleBackClick=function(){n.state.currentStepIndex>0&&n.setState(function(e){return{currentStepIndex:e.currentStepIndex-1}})},n.handleNextClick=function(){n.state.currentStepIndex<n.state.totalSteps-1&&n.setState(function(e){return{currentStepIndex:e.currentStepIndex+1}})},n.state={currentStepIndex:0,totalSteps:m.a.size(e.stepSet.steps)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"getMobileStep",value:function(e){var t=e.title,n=e.description,a=e.image,o=e.imageAltText;return i.a.createElement("div",{className:"mobile-step"},i.a.createElement("div",{className:"text"},i.a.createElement("h4",{className:"steps-title"},this.props.stepSet.title),i.a.createElement("h1",{className:"title"},t),i.a.createElement("p",{className:"description"},n)),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:a,alt:o,className:"image"})),i.a.createElement("div",{className:"navigation-panel"},this.getNavButtons(),this.getProgressBar()))}},{key:"getCurrentStep",value:function(){var e=this.props.stepSet.steps[this.state.currentStepIndex];return window.innerWidth<=460?this.getMobileStep(e):i.a.createElement("div",{className:"step"},i.a.createElement("img",{src:e.image,alt:e.imageAltText,className:"image"}),i.a.createElement("div",{className:"text"},i.a.createElement("h4",{className:"steps-title"},this.props.stepSet.title),i.a.createElement("h1",{className:"title"},e.title),i.a.createElement("div",{className:"description-wrapper"},i.a.createElement("p",{className:"description"},e.description)),this.getNavButtons(),this.getProgressBar()))}},{key:"getProgressBar",value:function(){return i.a.createElement(k,{id:"steps-progress",progress:(this.state.currentStepIndex+1)/this.state.totalSteps,onClick:this.handleSliderClick,onSlide:this.handleSliderClick})}},{key:"getBackButton",value:function(){return i.a.createElement(w,{key:"back",width:"10em",kind:"secondary",onClick:this.handleBackClick,disabled:this.state.currentStepIndex<=0},"Back")}},{key:"getNextButton",value:function(){return i.a.createElement(w,{key:"next",width:"10em",onClick:this.handleNextClick,disabled:this.state.currentStepIndex>=this.state.totalSteps-1},"Next")}},{key:"getNavButtons",value:function(){return i.a.createElement("div",{className:"buttons"},this.getBackButton(),this.getNextButton())}},{key:"render",value:function(){return i.a.createElement("div",{className:"steps",style:{height:window.innerHeight}},this.getCurrentStep())}}]),t}(a.Component),b=n(11),x=n.n(b),S=n(12),N=n.n(S),E=n(13),C=n.n(E),O=n(14),B=n.n(O),j=n(15),A=n.n(j),G=n(16),I=n.n(G),L=n(17),P=n.n(L),D=n(18),M=n.n(D),T=n(19),W=n.n(T),R={title:"How to download maps for offline navigation",steps:[{title:"Get Google Maps",description:"Go to the Apple App store and download Google Maps. Apple maps does not support downloading maps unfortunately.",image:x.a,imageAltText:"Google Maps on the Apple App Store"},{title:"Open Google Maps",description:"Once Google Maps is downloaded, open it, and start entering the location you wish to download in the search bar.",image:N.a,imageAltText:"Landing page of Google Maps"},{title:"Find Correct Result",description:"Once you have entered your location, and without clicking 'enter' or 'search', click on the specific location from the search results.",image:C.a,imageAltText:"Search for an area in the search bar at the top"},{title:"Result Location",description:"You will now be looking at your selected location. Click on the name of your location in the white bar near the bottom of your screen.",image:B.a,imageAltText:"Result from the search"},{title:"Open Menu",description:"Open the menu by clicking the elipsis in the upper right of your screen.",image:A.a,imageAltText:"Details of searched location"},{title:"Click Download",description:"In the menu, select the top option, labeled 'Download offline map'.",image:I.a,imageAltText:"Open menu"},{title:"Select Area",description:"Drag the map around until all of the area you wanted to download is in the blue box. Be sure to include cities that may be on or outside the edge, like Dublin.",image:P.a,imageAltText:"Select area you want to download"},{title:"Start Download",description:"After you have adjusted the map to include everything you wish to download, click 'Download' in the bottom right.",image:M.a,imageAltText:"Click download"},{title:"Finished",description:"Your download will have started, and it may take a while, depending on the size of the map you are downloading.",image:W.a,imageAltText:"Wait for download to complete."}]};var z=function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(y,{stepSet:R}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.79ebff22.chunk.js.map