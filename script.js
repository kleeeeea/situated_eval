const details = [
  {tag:'SELECTED / LAYER 01', title:'Task Quality',desc:'The essential foundation: reliable educational content, judged for correctness and clarity. Situated evaluation builds on this layer rather than replacing it.'},
  {tag:'SELECTED / LAYER 02', title:'Contextual Fit',desc:'Teaching actions must be judged against the learner’s current level, prior interactions, learning goals, and teacher-side constraints—not just whether the response sounds helpful.'},
  {tag:'SELECTED / LAYER 03', title:'Learning Progression',desc:'The evaluation also considers downstream evidence: whether learners can revise errors, transfer understanding, explain ideas, and advance through a learning process.'}
];
document.querySelectorAll('.layer-card').forEach((button)=>button.addEventListener('click',()=>{
  const idx=Number(button.dataset.layer);document.querySelectorAll('.layer-card').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  document.getElementById('detail-tag').textContent=details[idx].tag;
  document.getElementById('detail-title').textContent=details[idx].title;
  document.getElementById('detail-desc').textContent=details[idx].desc;
}));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
const copy=document.getElementById('copy-bib');copy.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);copy.textContent='Copied ✓';setTimeout(()=>copy.textContent='Copy citation ↗',1800);}
  catch{const range=document.createRange();range.selectNodeContents(document.getElementById('bibtex'));window.getSelection().removeAllRanges();window.getSelection().addRange(range);copy.textContent='Select & copy';}
});
