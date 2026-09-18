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
