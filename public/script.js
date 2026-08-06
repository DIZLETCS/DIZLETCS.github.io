const projects={
  taskflow:{
    kicker:'Centro operativo',
    title:'TaskFlow',
    description:'Una plataforma operativa para centralizar tareas, prioridades, alianzas, respuestas y automatizaciones en un único espacio de trabajo.',
    features:['Filtros, prioridades y estados','Proyectos, respuestas y automatizaciones','Adjuntos, checklist y notas'],
    href:'#contacto',external:false
  },
  gestor:{
    kicker:'Gestión personal',
    title:'Gestor de Tareas',
    description:'Una herramienta clara y directa para organizar el día, administrar proyectos y seguir el progreso desde escritorio o celular.',
    features:['Vista diaria y listas de tareas','Proyectos, calendario y estadísticas','Diseño adaptable para escritorio y móvil'],
    href:'https://gestordetareas.com.ar',external:true
  }
};
function showProject(key){
  document.querySelectorAll('.tab').forEach(btn=>{
    const active=btn.dataset.project===key;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-selected',String(active));
  });
  document.querySelectorAll('[data-preview]').forEach(el=>el.classList.toggle('hidden',el.dataset.preview!==key));
  const p=projects[key];
  document.getElementById('project-kicker').textContent=p.kicker;
  document.getElementById('project-title').textContent=p.title;
  document.getElementById('project-description').textContent=p.description;
  document.getElementById('project-features').innerHTML=p.features.map(f=>`<li>${f}</li>`).join('');
  const link=document.getElementById('project-link');
  link.href=p.href;
  if(p.external){link.target='_blank';link.rel='noreferrer'}else{link.removeAttribute('target');link.removeAttribute('rel')}
}
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click',()=>showProject(btn.dataset.project));
  btn.addEventListener('mouseenter',()=>showProject(btn.dataset.project));
});
const header=document.getElementById('header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('show')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit',event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const subject=encodeURIComponent('Consulta de proyecto para DIZLE');
  const body=encodeURIComponent(`Hola DIZLE,\n\nMi nombre es ${form.get('name')}.\nMi correo es ${form.get('email')}.\n\nProyecto o necesidad:\n${form.get('message')}\n\nSaludos.`);
  location.href=`mailto:dizle@gestordetareas.com.ar?subject=${subject}&body=${body}`;
});
