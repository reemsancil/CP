const lessons = {
  supplies: {label:'School supplies', items:[
    ['pen','🖊️'],['ruler','📏'],['sharpener','assets/sharpener.svg'],['school bag','🎒'],['coloring pencil','🖍️'],['folder','📁'],['pencil','✏️'],['eraser','assets/eraser.svg'],['glue stick','🧴'],['pencil case','👝'],['crayon','🖍️'],['scissors','✂️']]},
  routine: {label:'My daily routine', items:[
    ['I wake up.','🌅'],['I wash my face.','💧'],['I brush my teeth.','🪥'],['I get dressed.','👕'],['I have breakfast.','🥣'],['I go to school.','🏫'],['I come back home.','🏠'],['I have lunch.','🥪'],['I do my homework.','📚'],['I play with my friends.','⚽'],['I take a shower.','🚿'],['I have dinner.','🍽️'],['I go to bed.','🛏️'],['I comb my hair.','💇']]}
};
const dialog=document.querySelector('#gameDialog'),board=document.querySelector('#board'),feedback=document.querySelector('#feedback'),next=document.querySelector('#nextRound');
let attempts=0,firstTry=0,roundWrong=false,completed=false;
let mode,lessonKey,items,selection=[],matched=0,locked=false,timer,round=0,missing,phase,displayItems=[];
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function tile(html,action,cls=''){const b=document.createElement('button');b.type='button';b.className='tile '+cls;b.innerHTML=html;b.addEventListener('click',()=>action(b));board.append(b);return b;}
function iconMarkup(icon){return icon.endsWith('.svg')?`<img class="picture-image" src="${icon}" alt="">`:`<span class="symbol" aria-hidden="true">${icon}</span>`;}
function picture(item,words=false){return `${iconMarkup(item[1])}${words?`<span class="picture-word">${item[0]}</span>`:''}`;}
function totalRounds(){return mode==='grammar'?grammarItems.length:items.length;}
function start(){attempts=0;firstTry=0;roundWrong=false;completed=false;CompletionResult.reset();document.querySelector("#instructions").hidden=false;clearTimeout(timer);selection=[];matched=0;locked=false;round=0;feedback.textContent='';board.replaceChildren();next.hidden=true;
 board.classList.toggle('missing-board',mode==='missing');const key=lessonKey;items=shuffle(lessons[key].items).slice(0,mode==='memory'?5:6);
 document.querySelector('#gameTitle').textContent=mode==='grammar'?'There is / There are':lessons[key].label;
 document.querySelector('#instructions').textContent={memory:'Flip two cards to find a pair.',missing:'Look at the pictures. When you’re ready, hide one!',grammar:'Choose the sentence for one or several objects.'}[mode];
 if(mode==='memory')pairs();else if(mode==='missing')look();else grammar();
}
function pairs(){const deck=shuffle(items.flatMap((item,id)=>[{item,id},{item,id}]));
 for(const card of deck){const face=picture(card.item);const b=tile('★',()=>choose(b,card,face));b.setAttribute('aria-label','Hidden card');}}
function choose(b,card,face){if(locked||b.disabled||selection.some(s=>s.b===b))return;
 b.innerHTML=face;b.setAttribute('aria-label',card.item[0]);b.classList.add('selected');selection.push({b,card});if(selection.length<2)return;attempts++;
 if(selection[0].card.id===card.id){selection.forEach(s=>{s.b.classList.remove('selected');s.b.classList.add('matched');s.b.disabled=true;});selection=[];matched++;feedback.textContent=matched===items.length?'🌟 All pairs found! Well done!':`Great match! ${matched} / ${items.length}`;if(matched===items.length)finish();}
 else{locked=true;feedback.textContent='Try again!';timer=setTimeout(()=>{selection.forEach(s=>{s.b.classList.remove('selected');s.b.textContent='★';s.b.setAttribute('aria-label','Hidden card');});selection=[];locked=false;},1300);}}
function look(){roundWrong=false;board.replaceChildren();feedback.textContent='';phase='look';displayItems=shuffle(items);displayItems.forEach(i=>tile(picture(i),()=>{}).disabled=true);next.textContent='Hide a picture →';next.hidden=false;}
function distractorFor(item){
 const groups=lessonKey==='supplies'?
 [['pen','pencil','coloring pencil','crayon'],['sharpener','eraser'],['school bag','pencil case','folder'],['ruler','scissors','glue stick']]:
 [['I wake up.','I go to bed.'],['I wash my face.','I take a shower.','I brush my teeth.','I comb my hair.'],['I have breakfast.','I have lunch.','I have dinner.'],['I go to school.','I come back home.'],['I do my homework.','I play with my friends.','I get dressed.']];
 const group=groups.find(g=>g.includes(item[0]))||[];
 const candidates=lessons[lessonKey].items.filter(i=>i!==item&&i[1]!==item[1]);
 const related=candidates.filter(i=>group.includes(i[0]));
 return shuffle(related.length?related:candidates)[0];
}
function hide(){missing=items[round];board.replaceChildren();displayItems.forEach(i=>tile(i===missing?'❔':picture(i),()=>{}).disabled=true);const choices=document.createElement('div');choices.className='answer-row';board.append(choices);shuffle([missing,distractorFor(missing)]).forEach(i=>{const b=document.createElement('button');b.className='answer';b.innerHTML=picture(i);b.setAttribute('aria-label',i[0]);choices.append(b);b.onclick=()=>{attempts++;if(i!==missing){roundWrong=true;feedback.textContent='Try again!';return;}if(!roundWrong)firstTry++;choices.querySelectorAll('button').forEach(x=>x.disabled=true);feedback.textContent=`🌟 ${missing[0]}!`;phase='solved';if(round===totalRounds()-1){finish();return;}next.textContent='Next round →';next.hidden=false;};});phase='guess';next.hidden=true;}
const grammarItems=[['pencil','pencils','✏️',1],['ruler','rulers','📏',2],['sharpener','sharpeners','assets/sharpener.svg',4],['pencil','pencils','✏️',3]];
function grammar(){
 roundWrong=false;board.replaceChildren();next.hidden=true;
 const [one,many,icon,n]=grammarItems[round];
 const prompt=document.createElement('div');prompt.className='grammar-prompt';
 prompt.innerHTML=`<div aria-hidden="true">${Array(n).fill(iconMarkup(icon)).join(' ')}</div><p>${n} ${n===1?one:many}</p>`;board.append(prompt);
 ['There is','There are'].forEach(choice=>{
  const ending=n===1?`a ${one}.`:`${n} ${many}.`;
  tile(`${choice} ${ending}`,b=>{
   attempts++;if(choice!==(n===1?'There is':'There are')){roundWrong=true;feedback.textContent='Try again! One object: There is. More than one: There are.';return;}
   if(!roundWrong)firstTry++;board.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add('matched');
   feedback.textContent=`🌟 ${choice} ${ending}`;phase='grammar';next.hidden=false;
   if(round===totalRounds()-1){finish();return;}next.textContent='Next →';
  },'word');
 });
}
next.onclick=()=>{if(mode==='grammar'){if(round===totalRounds()-1)start();else{round++;feedback.textContent='';grammar();}}else if(phase==='look')hide();else{if(round===totalRounds()-1)start();else{round++;look();}}};
document.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>{mode=b.dataset.game;lessonKey=b.dataset.lesson||'supplies';start();dialog.showModal();});
document.querySelector('#closeGame').onclick=()=>dialog.close();dialog.addEventListener('close',()=>{clearTimeout(timer);CompletionResult.reset();});document.querySelector('#restart').onclick=start;const vocab=document.querySelector('#vocabulary');
Object.values(lessons).forEach(lesson=>{
 const section=document.createElement('section');const title=document.createElement('h3');title.textContent=lesson.label;section.append(title);
 const list=document.createElement('ul');list.className='word-guide';
 lesson.items.forEach(([en,icon])=>{const row=document.createElement('li');row.innerHTML=picture([en,icon],true);list.append(row);});
 section.append(list);vocab.append(section);
});

function finish(){
 completed=true;next.hidden=true;document.querySelector('#instructions').hidden=true;
 const total=totalRounds();
 const summary=mode==='memory'?`You found all ${total} pairs in ${attempts} turns.`:`You completed all ${total} rounds. First-try answers: ${firstTry} / ${total}.`;
 document.querySelector('#resultSummary').textContent=summary;
 CompletionResult.show(document.querySelector('#gameTitle').textContent,{memory:'Picture pairs',missing:'What’s missing?',grammar:'Choose the sentence'}[mode],total,total);
 document.querySelector('#studentName').focus();
}
