const teams = ['U8','U9','U10 Red','U10 Black','U12/13 Girls'];
const days = [
  {label:'Saturday 24 October', short:'Sat 24 Oct'},
  {label:'Sunday 25 October', short:'Sun 25 Oct'},
  {label:'Monday 26 October', short:'Mon 26 Oct'}
];
const times = ['9:00 AM','1:00 PM','3:00 PM'];

function miniFixtures(){
  return days.map((d)=>`<div class="mini-day"><div class="mini-day-title">${d.label}</div>${times.map((t,i)=>`<div class="mini-game"><strong>${t}</strong><span>Game ${i+1} · Opponent & pitch TBC</span></div>`).join('')}</div>`).join('');
}
document.querySelectorAll('.mini-days').forEach(el=>el.innerHTML=miniFixtures());

function renderSchedule(dayIndex=0){
  const rows=[];
  times.forEach((time,i)=>teams.forEach(team=>rows.push(`<tr><td>${time}</td><td><strong>${team}</strong></td><td>Game ${i+1}</td><td><span class="tbc">Opponent TBC</span></td><td><span class="tbc">Pitch TBC</span></td></tr>`)));
  document.querySelector('#full-schedule').innerHTML=`<table class="schedule-table"><thead><tr><th>Kick-off</th><th>Warkworth Team</th><th>Fixture</th><th>Opponent</th><th>Pitch</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
}
renderSchedule();

document.querySelectorAll('.day-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderSchedule(Number(btn.dataset.day));
}));

const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
