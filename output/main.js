/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={59:function(t){t.exports=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,e={rootMargin:"0px",threshold:0,load:function(e){if("picture"===e.nodeName.toLowerCase()){var r=e.querySelector("img"),i=!1;null===r&&(r=document.createElement("img"),i=!0),t&&e.getAttribute("data-iesrc")&&(r.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(r.alt=e.getAttribute("data-alt")),i&&e.append(r)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var o=e.children,a=void 0,n=0;n<=o.length-1;n++)(a=o[n].getAttribute("data-src"))&&(o[n].src=a);e.load()}e.getAttribute("data-poster")&&(e.poster=e.getAttribute("data-poster")),e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"));var s=",";if(e.getAttribute("data-background-delimiter")&&(s=e.getAttribute("data-background-delimiter")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(s).join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var c=e.getAttribute("data-background-image-set").split(s),l=c[0].substr(0,c[0].indexOf(" "))||c[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===c.length?e.style.backgroundImage=l:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function r(t){t.setAttribute("data-loaded",!0)}var i=function(t){return"true"===t.getAttribute("data-loaded")},o=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var t,a,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},e,s),l=c.root,d=c.rootMargin,u=c.threshold,h=c.load,g=c.loaded,b=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(b=new IntersectionObserver((t=h,a=g,function(e,o){e.forEach((function(e){(0<e.intersectionRatio||e.isIntersecting)&&(o.unobserve(e.target),i(e.target)||(t(e.target),r(e.target),a(e.target)))}))}),{root:l,rootMargin:d,threshold:u}));for(var _,m=o(n,l),v=0;v<m.length;v++)(_=m[v]).getAttribute("data-placeholder-background")&&(_.style.background=_.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=o(n,l),e=0;e<t.length;e++)i(t[e])||(b?b.observe(t[e]):(h(t[e]),r(t[e]),g(t[e])))},triggerLoad:function(t){i(t)||(h(t),r(t),g(t))},observer:b}}}()},684:()=>{(new class{constructor(){this._arrImages=[{url:"..//image/image/banner.png"},{url:"..//image/image/banner2.png"},{url:"..//image/image/banner3.png"}],this._sliderBox=document.querySelector(".advertising__slider"),this._pointBox=document.querySelector(".advertising__pointer-box"),this._slider,this._count=0}initSlider(){this._arrImages.forEach(((t,e)=>{this._slider=`<div data-src="image.png" class="lozad advertising__slider-image n${e} ${0===e?"active":""}" style = 'background-image:url(${this._arrImages[e].url})' data-index="${e}"></div>`,this._sliderBox.innerHTML+=this._slider,this._point=`<div class="advertising__point n${e} ${0===e?"active":""}" data-index="${e}"></div>`,this._pointBox.innerHTML+=this._point})),this._pointer=document.querySelectorAll(".advertising__point"),this._pointer.forEach((t=>{t.addEventListener("click",(()=>{this.pointerClick(t.dataset.index),this._count=t.dataset.index}))})),this.interval()}interval(){setInterval((()=>{this.pointerClick(this._count),this._count++,this._count===this._pointer.length&&(this._count=0)}),5e3)}pointerClick(t){this._sliderBox.querySelector(".active").classList.remove("active"),this._sliderBox.querySelector(`.n${t}`).classList.add("active"),this._pointBox.querySelector(".active").classList.remove("active"),this._pointBox.querySelector(`.n${t}`).classList.add("active")}}).initSlider()}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(684);const t=class{constructor(){this._buttonRequest=document.querySelector(".button-load"),this._keyAPI="AIzaSyCbJN6vx_NxrCKGjsVCVX7EjRLgzo1zKo4",this._bookBox=document.querySelector(".block__box"),this._start=0,this._basket=document.querySelector(".header__box-count-product"),this._amountProduct=localStorage.length,this.placeholder="../image/image/book-placeholder.jpg",this._arrCategories=[{name:"Architecture",url:"Architecture"},{name:"Art & Fashion",url:"Art"},{name:"Biography",url:"Biography & Autobiography"},{name:"Business",url:"Business"},{name:"Crafts & Hobbies",url:"Crafts & Hobbies"},{name:"Drama",url:"Drama"},{name:"Fiction",url:"Fiction"},{name:"Food & Drink",url:"Cooking"},{name:"Health & Wellbeing",url:"Health & Fitness"},{name:"History & Politics",url:"History"},{name:"Humor",url:"Humor"},{name:"Poetry",url:"Poetry"},{name:"Psychology",url:"Psychology"},{name:"Science",url:"Science"},{name:"Technology",url:"Technology"},{name:"Travel & Maps",url:"Travel"}],this._navBox=document.querySelector(".block__nav"),this._link,this._category=0}async request(){try{const t=await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${this._arrCategories[this._category].url}"&key=${this._keyAPI}&printType=books&startIndex=${this._start}&maxResults=6&langRestrict=ru`),e=await t.json();return this._result=e}catch{console.log("error")}}initNavLink(){this._arrCategories.forEach(((t,e)=>{this._link=`<div class="block__nav-box">\n            <div class="block__nav-circle n${e} ${0==e?"active":""}" data-index=${e}></div>\n            <h2 class="block__nav-link n${e} ${0==e?"active":""}" data-index=${e}>${t.name}</h2>\n        </div>`,this._navBox.innerHTML+=this._link})),this._links=document.querySelectorAll(".block__nav-link"),this._links.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),this.linkClick(t.dataset.index),+this._category!=+t.dataset.index&&(this._category=t.dataset.index,this._start=0,this._bookBox.innerHTML="",this.startRequest())}))}))}linkClick(t){this._navBox.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")})),this._navBox.querySelectorAll(`.n${t}`).forEach((t=>{t.classList.add("active")}))}};var e=r(59);const i=r.n(e)()(),o=new class extends t{constructor(){super()}start(){this.startRequest(),this.initNavLink(),this.initHandler(),this.basket()}async startRequest(){this._result=await this.request(),this.writeBook(this._result.items)}async initHandler(){this._buttonRequest.addEventListener("click",(async()=>{this._start+=6,this._result=await this.request(),this.writeBook(this._result.items)}))}writeBook(t){t&&(t.forEach((async(t,e)=>{let r=t,i=r.id,o=r.volumeInfo.authors,a=r.volumeInfo.description?.slice(0,82),n=r.volumeInfo.imageLinks?.thumbnail,s=r.volumeInfo.title,c=r.saleInfo.retailPrice,l=`${c?.amount?c.amount:""} ${c?.currencyCode?c.currencyCode:""}`,d=r.volumeInfo.averageRating,u=r.volumeInfo.raitingCount,h=!1;for(let t=0;t<localStorage.length;t++)localStorage.key(t)===i&&(h=!0);if(document.getElementById(i))return;let g="";if(d)for(let t=0;t<d;t++)g+='<img src="../image/icons/Star.svg" alt="" />';let b=`\n            <div class="card-book" id='${i}' attr = "${!0===h?"buy":"not-buy"}">\n                <img  data-src="${n||this.placeholder}" class="lozad card-book__img" src="${n||this.placeholder}" alt="book-image">\n                \n                <div class="card-book__box">\n                    <p class="card-book__box-autor">${o||""}</p>\n                    <h2 class="card-book__box-title">${s}</h2>\n                    <div class="card-book__box-raiting">\n                        <div class="card-book__box-raiting--star">\n                            ${d?g:""}\n                        </div>\n                    <p class="card-book__box-raiting--text">${u?u+" review":""}</p>\n                    </div>\n                    <p class="card-book__box-description">${void 0===a?"":a+"..."}</p>\n                    <p class="card-book__box-price">${l}</p>\n                    <button class="card-book__box-button ${!0===h?"in-the-cart":""}">${!0===h?"in the cart":"buy now"}</button>\n                </div>\n            </div>`;this._bookBox.innerHTML+=b})),i.observe(),this.initButtonBuy())}initButtonBuy(){this._buttons=document.querySelectorAll(".card-book__box-button"),this._buttons.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),this.bookBuy(t)}))}))}bookBuy(t){let e=document.getElementById(t.parentElement.parentElement.id);"not-buy"===e.getAttribute("attr")?(e.setAttribute("attr","buy"),e.querySelector(".card-book__box-button").classList.toggle("in-the-cart"),e.querySelector(".card-book__box-button").textContent="in the cart",this.localMemory(e,t.parentElement.parentElement.id),this.basket()):(e.setAttribute("attr","not-buy"),e.querySelector(".card-book__box-button").classList.toggle("in-the-cart"),e.querySelector(".card-book__box-button").textContent="buy now",localStorage.removeItem(t.parentElement.parentElement.id),this.basket())}basket(){this._amountProduct=localStorage.length,this._basket.innerHTML=this._amountProduct,this._amountProduct>0?this._basket.classList.add("active"):this._basket.classList.remove("active")}localMemory(t,e){this._arrBook={id:e,autor:t.children[1].children[0].textContent,title:t.children[1].children[1].textContent,description:t.children[1].children[3].textContent,price:t.children[1].children[4].textContent},this._arrBookJson=JSON.stringify(this._arrBook),localStorage.setItem(e,this._arrBookJson)}};document.addEventListener("DOMContentLoaded",o.start())})()})();
//# sourceMappingURL=main.js.map