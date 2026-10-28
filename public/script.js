const header=document.getElementById('header');
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');

addEventListener('scroll',()=>{
  header?.classList.toggle('scrolled',scrollY>18);
},{passive:true});

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});

nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.09});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('#nav a[href^="#"]')];
function setActive(){
  const y=scrollY+150;
  let current='inicio';
  sections.forEach(section=>{if(section.offsetTop<=y) current=section.id});
  navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current}`));
}
addEventListener('scroll',setActive,{passive:true});
setActive();

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
