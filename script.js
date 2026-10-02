const stages = [...document.querySelectorAll('.stage:not(.detail)')];
const dots = [...document.querySelectorAll('nav a')];

// 현재 슬라이드에 맞춰 점 표시
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { dots.forEach(d => d.classList.toggle('on', d.getAttribute('href') === '#' + e.target.id)); }
}), { threshold: .6 });
stages.forEach(s => io.observe(s));

// 키보드: ↑ ↓ ← → / PageUp PageDown / Space
const go = d => {
  const i = stages.findIndex(s => s.getBoundingClientRect().top > -window.innerHeight / 2);
  stages[Math.max(0, Math.min(stages.length - 1, (i < 0 ? 0 : i) + d))].scrollIntoView({ behavior: 'smooth' });
};
addEventListener('keydown', e => {
  if (e.key === 'Escape') return close();
  if (document.querySelector('.detail.show')) return;
  if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(1) }
  if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(-1) }
});

// 제목을 한 글자씩 <span>으로 감싸서 글자별 hover 효과를 줌
const title = document.querySelector('.cover .title');
const lines = title.textContent.split('\n').map(s => s.trim()).filter(Boolean);
title.setAttribute('aria-label', lines.join(' '));
title.innerHTML = lines.map(line =>
  [...line].map(c => c === ' ' ? ' ' : `<span class="ch" aria-hidden="true">${c}</span>`).join('')
).join('<br>');

// ===== 프로젝트 데이터: 여기만 고치면 카드와 상세 페이지가 함께 바뀜 =====
const projects = window.PROJECTS || [];
const S = [['배경', '문제 상황과 목표를 2~3문장으로 적어주세요.'], ['과정', '어떤 데이터·방법·기술로 풀었는지 적어주세요.'], ['결과', '성과와 배운 점을 적어주세요.']];

const grid = document.getElementById('grid'), box = document.getElementById('details');
projects.forEach(p => {
  grid.insertAdjacentHTML('beforeend', `<button class="card" data-id="${p.id}"><h3>${p.title}</h3><p>${p.summary}</p><span class="go">자세히 보기</span></button>`);
  const extra = p.pages || [], n = 1 + extra.length;
  const pg = i => n > 1 ? `<span class="pg">${i} / ${n}</span>` : '';
  const first = `<div class="slide">
    <div class="d-top"><div><div class="d-head">${p.logo ? `<img class="logo" src="${p.logo}" alt="">` : ''}<h3 class="d-title">${p.title}</h3></div><p class="d-sum">${p.summary}</p>
      <dl class="meta"><dt>기간</dt><dd>${p.period}</dd><dt>역할</dt><dd>${p.role}</dd><dt>기술</dt><dd>${p.stack}</dd></dl>
      <p class="links">${(p.links || []).map(([nm, u, ic]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${nm}" title="${nm}">${ic ? `<img src="${ic}" alt="">` : nm}</a>`).join('')}</p></div>
      <div class="shot">${p.img ? `<img src="${p.img}" alt="${p.title}">` : '스크린샷 자리'}</div></div>
    <div class="d-body">${(p.sections || S).map(([h, t]) => `<div><h4>${h}</h4><p>${t}</p></div>`).join('')}</div>
    ${pg(1)}</div>`;
  const rest = extra.map((q, i) => `<div class="slide"><p class="d-sum">${p.title}</p><h3 class="d-title sm">${q.h || ''}</h3>
    <div class="pg-body${q.img ? ' two' : ''}"><p>${q.t || ''}</p>${q.img ? `<div class="shot"><img src="${q.img}" alt=""></div>` : ''}</div>${pg(i + 2)}</div>`).join('');
  box.insertAdjacentHTML('beforeend', `<section class="stage detail" id="d-${p.id}" role="dialog" aria-label="${p.title}"><button class="x" aria-label="닫기">✕</button><div class="pages">${first}${rest}</div></section>`);
  box.addEventListener('click', e => { if (e.target.closest('.x') || e.target.matches('.detail,.pages')) close() });
});


const open = id => {
  document.getElementById('d-' + id).classList.add('show');
  document.body.style.overflow = 'hidden'
};
const close = () => {
  document.querySelectorAll('.detail.show').forEach(d => d.classList.remove('show'));
  document.body.style.overflow = ''
};
grid.addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (c) open(c.dataset.id)
});
box.addEventListener('click', e => {
  if (e.target.closest('.x') || e.target.classList.contains('detail')) close()
});
