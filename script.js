
(function(){
  const nav = document.getElementById('site-nav');
  const btn = nav.querySelector('.menu-toggle');
  const list = document.getElementById('nav-list');
  function toggle(){
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', toggle);
  btn.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });

  // Set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Events loader: if /data/events.json exists, render cards; otherwise keep the empty state
  fetch('/data/events.json', {cache:'no-store'})
    .then(r => r.ok ? r.json() : [])
    .then(events => {
      if(!Array.isArray(events) || events.length === 0) return;
      const listEl = document.getElementById('events-list');
      listEl.innerHTML = '';
      const fmt = (dStr)=>{
        try { return new Date(dStr).toLocaleString(undefined, {dateStyle:'medium', timeStyle:'short'}); }
        catch { return dStr; }
      };
      events.sort((a,b)=> new Date(a.start) - new Date(b.start));
      events.forEach(ev => {
        const card = document.createElement('article');
        card.className = 'card';
        card.style.gridColumn = 'span 6';
        card.innerHTML = `
          <h3>${ev.title ?? 'Community event'}</h3>
          <p class="muted">${ev.location ?? 'TBA'} • ${ev.mode ?? 'In person'}</p>
          <p>${ev.summary ?? ''}</p>
          <p><strong>${fmt(ev.start)}</strong> — ${ev.end ? fmt(ev.end) : ''}</p>
          <p><a class="cta" href="${ev.url ?? 'https://www.meetup.com/cloud-native-ai/'}" target="_blank" rel="noopener">RSVP on Meetup</a></p>
        `;
        listEl.appendChild(card);
      });
    })
    .catch(()=>{});
})();
