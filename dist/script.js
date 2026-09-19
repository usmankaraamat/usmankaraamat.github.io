document.querySelector('#year').textContent = new Date().getFullYear();

// Keep links from the earlier single-page preview useful.
const chapterLinks = {
  engineering: 'engineering.html', synthetic: 'engineering.html',
  corrosion: 'engineering.html', mechanical: 'engineering.html',
  outside: 'beyond-work.html', archive: 'side-quests.html', plates: 'side-quests.html'
};
function revealStory() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target && chapterLinks[id]) {
    location.replace(chapterLinks[id] + '#' + encodeURIComponent(id));
    return;
  }
  if (target && target.tagName === 'DETAILS') {
    target.open = true;
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
}
window.addEventListener('hashchange', revealStory);
// Reopen an already-linked story if the visitor collapsed it and follows its link again.
document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (link && link.hash && link.href === location.href) revealStory();
});
revealStory();

// Tiny first-party visit counter shared with the apps' product-insights backend.
// It sends only a random browser ID and this site's page path: no referrer,
// cookies, IP-derived fields, device details, or portfolio interaction history.
(function countVisit(){
  if (['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) return;
  const key='usman.portfolio.visitorId';
  let visitorId;
  try {
    visitorId=localStorage.getItem(key);
    if(!/^[0-9a-f-]{36}$/i.test(visitorId||'')){
      visitorId=crypto.randomUUID();
      localStorage.setItem(key,visitorId);
    }
  } catch(e){ visitorId=crypto.randomUUID(); }
  fetch('https://rekcgerktrykotwzppkz.supabase.co/functions/v1/product-data',{
    method:'POST',
    keepalive:true,
    headers:{
      apikey:'sb_publishable_adWOcEpQyprhtOBpjSLS7A_sYW58wkX',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      app:'portfolio', kind:'event', event:'page_view', installId:visitorId,
      page:location.pathname.split('/').pop()||'index.html'
    })
  }).catch(()=>{});
})();
