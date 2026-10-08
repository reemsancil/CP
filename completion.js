window.CompletionResult = (() => {
 const form=document.querySelector('#resultForm'),status=document.querySelector('#saveStatus');
 const controls=[...form.querySelectorAll('input,select,button')];
 let completion=null,record=null,saved=false,generation=0,pending=null;
 function reset(){generation++;completion=null;record=null;saved=false;pending=null;form.reset();form.hidden=true;status.textContent='';form.elements.student_name.setCustomValidity('');controls.forEach(c=>c.disabled=false);}
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(!completion||pending!==null||saved)return;
  const name=form.elements.student_name.value.trim();const section=form.elements.class_section.value;
  if(!name){form.elements.student_name.setCustomValidity('Please enter your name.');form.elements.student_name.reportValidity();return;}
  if(!['CP C','CP F'].includes(section)){form.elements.class_section.reportValidity();return;}
  record ||= {...completion,student_name:name,class_section:section};
  const submitted=record,run=generation;pending=run;
  controls.forEach(c=>c.disabled=true);status.textContent='Sending… Please wait.';
  try{await ResultsAPI.submit(submitted);if(run===generation&&record===submitted){saved=true;status.textContent='Your result has been sent to Mrs. Reem!';}}
  catch{if(run===generation&&record===submitted){status.textContent='Your result could not be confirmed. Check your connection and press Submit result to retry.';form.querySelector('button').disabled=false;}}
  finally{if(pending===run)pending=null;}
 });
 form.elements.student_name.addEventListener('input',()=>form.elements.student_name.setCustomValidity(''));
 return {reset,show(game,exercise,score,total){reset();completion={id:crypto.randomUUID(),game,exercise,score,total};form.hidden=false;}};
})();
