import{S as c,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="33393016-2f1d389d0905d7f9551defc49",u=r=>{const s=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${d}?${s}`).then(o=>{if(!o.ok)throw new Error(o);return o.json()})},n={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=new c(".gallery-link",{captionsData:"alt",captionDelay:250}),l=r=>f.error({title:"Error",message:r||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}),h=({webformatURL:r,largeImageURL:s,likes:o,views:i,comments:e,downloads:t,tags:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href=${s}>
        <img
          class="gallery-image"
          src=${r}
          alt=${a}
      
        />
        <div class="image-info">
          <div class="info-section">
            <p class="info-title">Likes</p>
            <p class="info-text">${o}</p>
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
    `,g=r=>{r.length||(n.gallery.innerHTML="",l());const s=r.map(o=>h(o)).join("");n.gallery.innerHTML=s,m.refresh()},y=r=>{r.preventDefault();const s=r.currentTarget,o=s.elements.search.value.trim();if(!o)return n.gallery.innerHTML="",l();n.loader.classList.add("active"),u(o).then(i=>{g(i.hits)}).catch(i=>{l(i.message)}).finally(()=>{s.reset(),n.loader.classList.remove("active")})};n.searchForm.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
