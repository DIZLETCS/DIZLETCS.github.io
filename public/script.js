const header=document.getElementById('header');
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');

addEventListener('scroll',()=>{
  header?.classList.toggle('scrolled',scrollY>16);
},{passive:true});

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});

nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('#nav a[href^="#"]')];
function syncNav(){
  const y=scrollY+140;
  let current='inicio';
  sections.forEach(section=>{if(section.offsetTop<=y)current=section.id});
  links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current}`));
}
addEventListener('scroll',syncNav,{passive:true});
syncNav();

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();
