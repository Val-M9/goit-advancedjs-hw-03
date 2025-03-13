import{S as c,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="33393016-2f1d389d0905d7f9551defc49",u=r=>{const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${d}?${o}`).then(s=>{if(!s.ok)throw new Error(s);return s.json()})},n={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=new c(".gallery-link",{captionsData:"alt",captionDelay:250}),l=r=>f.error({title:"Error",message:r||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}),g=({webformatURL:r,largeImageURL:o,likes:s,views:i,comments:e,downloads:t,tags:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href=${o}>
        <img
          class="gallery-image"
          src=${r}
          alt=${a}
      
        />
        <div class="image-info">
          <div class="info-section">
            <p class="info-title">Likes</p>
            <p class="info-text">${s}</p>
          </div>
          <div class="info-section">
            <p class="info-title">Views</p>
            <p class="info-text">${i}</p>
          </div>
          <div class="info-section">
            <p class="info-title">Comments</p>
            <p class="info-text">${e}</p>
          </div>
          <div class="info-section">
            <p class="info-title">Downloads</p>
            <p class="info-text">${t}</p>
          </div>
        </div>
      </a>
    </li>
    `,h=r=>{r.length||(n.gallery.innerHTML="",l());const o=r.map(s=>g(s)).join("");n.gallery.innerHTML=o,m.refresh()},y=r=>{r.preventDefault();const o=r.currentTarget,s=o.elements.search.value.trim();if(!s)return n.gallery.innerHTML="",l();n.loader.classList.add("active"),u(s).then(i=>{h(i.hits)}).catch(i=>{l(i.message)}).finally(()=>{o.reset(),n.loader.classList.remove("active")})};n.searchForm.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
