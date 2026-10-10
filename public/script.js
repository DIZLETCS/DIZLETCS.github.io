const header=document.getElementById('header');
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');

addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',scrollY>20);
});

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});

nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('#nav a[href^="#"]')];
const setActive=()=>{
  const y=scrollY+140;
  let current='inicio';
  sections.forEach(section=>{
    if(section.offsetTop<=y) current=section.id;
  });
  navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current}`));
};
addEventListener('scroll',setActive,{passive:true});
setActive();

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contact-form')?.addEventListener('submit',event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const subject=encodeURIComponent('Consulta para DIZLE');
  const body=encodeURIComponent(
    `Hola DIZLE,\n\nMi nombre es ${form.get('name')}.\nMi correo es ${form.get('email')}.\n\nConsulta:\n${form.get('message')}\n\nSaludos.`
  );
  location.href=`mailto:dizle-gestordetareas@gestordetareas.com.ar?subject=${subject}&body=${body}`;
});
